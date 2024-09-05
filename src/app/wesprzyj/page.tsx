"use client";

import ButtonCTA from "@/components/atoms/buttonCTA";
import { Checkbox } from "flowbite-react/components/Checkbox";
import { Label } from "flowbite-react/components/Label";
import { usePathname } from "next/navigation";
import { useState } from "react";

const amounts = [10, 20, 30, 50, 100, 150];

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);
  const [accepted, setAccepted] = useState(true);
  const [email, setEmail] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/tpay/redirect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: "20.00",
          description: "Wplata",
          email: email,
        }),
      });
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Error initiating payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <h1 className="font-bold text-[24px] lg:text-[80px] text-center w-full">
        Wesprzyj nas
      </h1>
      <section className="w-full lg:w-1/2 flex flex-col gap-[12px] font-bold z-10">
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
                onChange={(e: any) => setAmount(e.target.value)}
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
        <div className="w-full mt-[24px] flex flex-col gap-[12px]">
          {error ? (
            <p className="text-center font-bold text-error-custom">{error}</p>
          ) : null}
          <ButtonCTA
            label="Wpłać darowiznę"
            icon={false}
            action={() => handlePayment()}
          />
        </div>
      </section>
      <img
        src="/VectorReverse.webp"
        className="absolute lg:h-[70%] left-[50%] hidden lg:block"
      />
    </main>
  );
};

export default PaymentPage;
