"use client";

import ButtonCTA from "@/components/atoms/buttonCTA";
import { Checkbox } from "flowbite-react/components/Checkbox";
import { Label } from "flowbite-react/components/Label";
import { useState } from "react";
import { useFormState } from "react-dom";
import { handlePaymentAction } from "./actions";
import { useRouter } from "next/navigation";

const amounts = [10.0, 20.0, 30.0, 50.0, 100.0, 150.0];

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);
  const [accepted, setAccepted] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const initialState = {
    message: "",
  };

  const router = useRouter();

  const [state, formAction] = useFormState(handlePaymentAction, initialState);

  const validateAmount = (amountValue: string | number) => {
    const parsedAmount = parseFloat(amountValue.toString());

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return "Wpisz poprawną kwotę darowizny";
    }

    return "";
  };

  const handlePayment = async (e: any) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Wpisz poprawny adres email");
      return;
    }
    if (!name) {
      setError("Wpisz imię");
      return;
    }
    let selectedAmount = amount || parseFloat(customAmount);

    const amountError = validateAmount(selectedAmount);
    if (amountError) {
      setError(amountError);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept-encoding": "text/plain",
        },
        body: JSON.stringify({
          amount: selectedAmount,
          description: "wsparcie fundacji Cudak",
          payer: {
            email: email,
            name: name,
          },
        }),
      });
      const data = await response.json();
      router.push(data.transactionPaymentUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <h1 className="font-bold text-[24px] lg:text-[80px] text-center w-full">
        Wesprzyj nas
      </h1>
      <section className="w-full lg:w-1/2 flex flex-col gap-[12px] font-bold z-10">
        <div className="flex flex-col gap-[12px] mt-[24px] lg:mt-[48px] w-full mb-[24px] ">
          <span>Podaj imię i adres email</span>
          <div className="flex gap-[12px] items-end">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Imię"
              maxLength={30}
              className={
                "text-[18px] w-full bg-beige-bg h-[44px] rounded-[8px]"
              }
              onChange={(e: any) => setName(e.target.value)}
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              maxLength={150}
              className={
                "text-[18px] w-full bg-beige-bg h-[44px] rounded-[8px]"
              }
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <span>Wybierz kwotę wsparcia</span>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 ">
          {amounts.map((amount: number, index: number) => (
            <button
              className="w-full h-[100px] border-2 rounded-[8px] border-primary-custom hover:text-white font-bold text-[24px] text-black hover:bg-primary-custom focus:bg-primary-custom focus:text-white"
              onClick={() => setAmount(amount)}
              key={index}
            >
              {amount}zł
            </button>
          ))}

          <div className="flex flex-col gap-[12px] mt-[24px] lg:mt-[48px] w-full ">
            <span>Lub wpisz własną kwotę</span>
            <div className="flex gap-[12px] items-end">
              <input
                id="custom_amount"
                name="custom_amount"
                type="text"
                placeholder="35"
                maxLength={20}
                className={
                  "text-[18px] w-full bg-beige-bg h-[44px] rounded-[8px]"
                }
                onChange={(e: any) => setCustomAmount(e.target.value)}
              />
              zł
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 mt-[24px]">
          <Checkbox
            id="accept"
            defaultChecked
            required
            onChange={() => {
              console.log(accepted), setAccepted(!accepted);
            }}
          />
          <Label htmlFor="accept" className="flex flex-col">
            <span className="font-bold">
              Zapoznałem się z{" "}
              <a href="/polityka-prywatnosci" className="underline">
                polityką prywatności
              </a>
            </span>
            <p>
              Zgadzam się na przesyłanie mi newslettera z aktualnościami i
              informacjami marketingowymi
            </p>
          </Label>
        </div>
        <form
          className="w-full mt-[24px] flex flex-col gap-[12px]"
          onSubmit={(e) => handlePayment(e)}
        >
          <ButtonCTA
            label={!loading ? "Wpłać darowiznę" : "Przekierowuję"}
            icon={false}
            submit
          />
          {error ? (
            <p className="text-center font-bold text-error-custom">{error}</p>
          ) : null}
        </form>
      </section>
      <img
        src="/VectorReverse.webp"
        className="absolute lg:h-[70%] left-[50%] hidden lg:block"
      />
    </div>
  );
};

export default PaymentPage;
