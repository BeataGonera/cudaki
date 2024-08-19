import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const merchantId = `${process.env.TPAY_MERCHANT_ID!}`;
  const secret = `${process.env.TPAY_SECRET_KEY!}`;

  const receivedMd5 = body.get("md5sum");
  const amount = body.get("tr_amount");
  const crc = body.get("tr_crc") || ""; // Or the optional CRC value

  const expectedMd5 = crypto
    .createHash("md5")
    .update(`${merchantId}${amount}${crc}${secret}`)
    .digest("hex");

  if (receivedMd5 === expectedMd5 && body.get("tr_status") === "TRUE") {
    // Handle successful payment
    console.log("Payment successful");
  } else {
    // Handle failed payment or invalid signature
    console.error("Payment failed or invalid signature");
  }

  return NextResponse.json({ status: "ok" });
}
