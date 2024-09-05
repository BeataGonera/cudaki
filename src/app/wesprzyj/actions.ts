"use server";

import { redirect } from "next/navigation";

type FormState = {
  message: string;
};

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
    return res.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const handlePaymentAction = async (
  prevState: FormState,
  formData: FormData
) => {
  const token = await generateToken();

  try {
    console.log(token);
    const response = await fetch("https://api.tpay.com/transactions/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Host: "tpay.com",
      },
      body: JSON.stringify({
        amount: 0.1,
        description: "Test transaction",
        payer: {
          email: "beataiwonagonera@gmail.com",
          name: "Jan Nowak",
        },
      }),
    });
    if (!response.ok) {
      return { message: "Coś poszło nie tak. Spróbuj ponownie później." };
    }

    return {
      message:
        "Dziękujemy za wpłatę. Na Twój adres mailowy zostało wysłane potwierdzenie.",
    };
  } catch (error: any) {
    console.log(error);
    return { message: error.message };
  }
};
