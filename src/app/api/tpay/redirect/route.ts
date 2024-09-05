import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const generateToken = async () => {
  try {
    const response = await fetch("https://api.tpay.com/oauth/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.TPAY_CLIENT_ID_OPEN_API!,
        client_secret: process.env.TPAY_CLIENT_SECRET_OPEN_API!,
      }),
    });
    console.log(`generateToken ${response.status}`);
  } catch (error) {
    console.log(error);
  }
};
generateToken();

const getTokens = async () => {
  const response = await fetch("https://api.tpay.com/oauth/tokeninfo");
  console.log(`token ${response.status}`);
};

export async function POST(req: NextRequest) {
  getTokens();

  // const { amount, description, email } = await req.json();

  // // Replace these with your Tpay credentials
  // const merchantId = `${process.env.TPAY_MERCHANT_ID!}`;
  // const secret = process.env.TPAY_SECRET_KEY!;
  // const crc = ""; // Optional, you can leave it empty or use it for tracking purposes
  // //   const resultUrl = "http://localhost:3000/api/tpay/verify"; // Your endpoint for Tpay notifications
  // const returnUrl = "https://cudak.org/dziekujemy"; // Where the user will be redirected after payment

  // // Create the MD5 hash signature required by Tpay
  // const md5sum = crypto.createHash("md5");
  // console.log(`${merchantId} ${amount} ${crc} ${secret}`);
  // const signature = md5sum
  //   .update(`${merchantId}${amount}${crc}${secret}`)
  //   .digest("hex");

  // // Generate the Tpay payment URL
  // const paymentUrl = new URL("https://secure.tpay.com");
  // paymentUrl.searchParams.append("id", merchantId);
  // paymentUrl.searchParams.append("amount", amount);
  // paymentUrl.searchParams.append("description", description);
  // paymentUrl.searchParams.append("email", email);
  // //   paymentUrl.searchParams.append("result_url", resultUrl);
  // paymentUrl.searchParams.append("return_url", returnUrl);
  // paymentUrl.searchParams.append("crc", crc);
  // paymentUrl.searchParams.append("md5sum", signature);

  // // Redirect the user to Tpay
  // return NextResponse.redirect(paymentUrl.toString());
}
