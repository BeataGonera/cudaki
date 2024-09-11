import { NextRequest, NextResponse } from "next/server";
import axios from "axios"; // Import axios
import { redirect } from "next/navigation";

const generateToken = async () => {
  try {
    const response = await axios.post(
      "https://api.tpay.com/oauth/auth",
      new URLSearchParams({
        client_id: process.env.TPAY_CLIENT_ID_OPEN_API!,
        client_secret: process.env.TPAY_CLIENT_SECRET_OPEN_API!,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token; // Access token from response data
  } catch (error) {
    console.log("Error generating token:", error);
  }
};

export async function POST(req: NextRequest) {
  const token = await generateToken();

  if (!token) {
    return new Response(JSON.stringify({ error: "Failed to generate token" }), {
      status: 500,
    });
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const body = await req.json();
  if (body) {
    console.log(`Request body to tpay:`, body);
  }

  // Log the request to tpay
  console.log("Sending request to tpay:", {
    url: "https://api.tpay.com/transactions",
    method: "POST",
    headers: headers,
    body: body,
  });

  try {
    const tpayResponse = await axios.post(
      "https://api.tpay.com/transactions",
      body,
      {
        headers: headers,
      }
    );

    console.log("tpay Response Status:", tpayResponse.status);
    console.log("tpay Response Headers:", tpayResponse.headers);
    console.log("tpay Response Data:", tpayResponse.data);
    if (tpayResponse.data.transactionPaymentUrl) {
      return new Response(
        JSON.stringify({
          transactionPaymentUrl: tpayResponse.data.transactionPaymentUrl,
        }),
        { status: 200 }
      );
    } else {
      return new Response(JSON.stringify({ error: "No payment URL found" }), {
        status: 400,
      });
    }
  } catch (error: any) {
    console.log("Error reading response from tpay");
    if (error.response) {
      console.log("tpay Response Status:", error.response.status);
      console.log("tpay Response Headers:", error.response.headers);
      console.log("tpay Response Data:", error.response.data);
    } else {
      console.log(error);
    }
  }
}
