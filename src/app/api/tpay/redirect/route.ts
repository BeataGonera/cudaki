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
    const res = await response.json();
    console.log(res.access_token);
    return res.access_token;
  } catch (error) {
    console.log(error);
  }
};
const token = generateToken();

export async function POST(req: NextRequest) {}

const handlePayment = async (req: NextRequest, res: NextResponse) => {};
