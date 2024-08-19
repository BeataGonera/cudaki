import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const { amount, description, email } = await req.json();

  // Replace these with your Tpay credentials
  const merchantId = `${process.env.TPAY_MERCHANT_ID!}`;
  const secret = `${process.env.TPAY_SECRET_KEY!}`;
  const crc = ""; // Optional, you can leave it empty or use it for tracking purposes
  //   const resultUrl = "http://localhost:3000/api/tpay/verify"; // Your endpoint for Tpay notifications
  const returnUrl = "https://cudaki.vercel.app/dziekujemy"; // Where the user will be redirected after payment

  // Create the MD5 hash signature required by Tpay
  const md5sum = crypto.createHash("md5");
  const signature = md5sum
    .update(`${merchantId}${amount}${crc}${secret}`)
    .digest("hex");

  console.log(signature);
  // Generate the Tpay payment URL
  const paymentUrl = new URL("https://secure.tpay.com");
  paymentUrl.searchParams.append("id", merchantId);
  paymentUrl.searchParams.append("amount", amount);
  paymentUrl.searchParams.append("description", description);
  paymentUrl.searchParams.append("email", email);
  //   paymentUrl.searchParams.append("result_url", resultUrl);
  paymentUrl.searchParams.append("return_url", returnUrl);
  paymentUrl.searchParams.append("crc", crc);
  paymentUrl.searchParams.append("md5sum", signature);

  // Redirect the user to Tpay
  return NextResponse.redirect(paymentUrl.toString());
}
