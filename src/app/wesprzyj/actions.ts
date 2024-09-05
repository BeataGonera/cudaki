"use server";

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

  console.log(`Bearer ${token}`);
  try {
    const response = await fetch("https://api.tpay.com/transactions/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 10.0,
        description: "wplata",
        payer: {
          email: "beataiwonagonera@gmail.com",
          name: "Beata Gonera",
        },
      }),
    });
    if (!response.ok) {
      return {
        message: `Coś poszło nie tak. Spróbuj ponownie później.-${response.status}`,
      };
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
