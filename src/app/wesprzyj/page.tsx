"use client";

import ButtonCTA from "@/components/atoms/buttonCTA";
import { Checkbox } from "flowbite-react/components/Checkbox";
import { Label } from "flowbite-react/components/Label";
import { useEffect, useState } from "react";
import { generateMd5Checksum } from "../../utils/md5";

const amounts = [10, 20, 30, 50, 100, 150];

const PaymentPage = () => {
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);

  const dataString = `1010${amount}.00985demo`;
  const hashedData = generateMd5Checksum(dataString);

  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <h1 className="font-bold text-[24px] lg:text-[80px] text-center w-full">
        Wesprzyj nas
      </h1>
      <section className="w-full lg:w-1/2 flex flex-col gap-[12px] font-bold">
        <span>Wybierz kwotę wsparcia</span>
        <div className="grid grid-cols-3 gap-2 ">
          {amounts.map((amount: number, index: number) => (
            <button
              className="w-full h-[100px] border-2 rounded-[8px] border-primary-custom hover:text-white font-bold text-[24px] text-black hover:bg-primary-custom focus:bg-primary-custom focus:text-white"
              onClick={() => setAmount(amount)}
              key={index}
            >
              {amount}zł
            </button>
          ))}

          <div className="flex flex-col gap-[12px] mt-[48px] w-full ">
            <span>Lub wpisz własną kwotę</span>
            <div className="flex gap-[12px] items-end">
              <input
                id="custom_amount"
                name="custom_amount"
                type="text"
                placeholder="35"
                maxLength={20}
                className={
                  error
                    ? "text-[18px] w-full bg-beige-bg h-[44px] rounded-[8px] border-2 border-error-custom"
                    : "text-[18px] w-full bg-beige-bg h-[44px] rounded-[8px]"
                }
                onChange={(e: any) => setAmount(e.target.value)}
              />
              zł
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 mt-[24px]">
          <Checkbox id="accept" defaultChecked required />
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
        <div className="w-full mt-[24px]">
          <ButtonCTA
            label="Wpłać darowiznę"
            icon={false}
            href={`https://secure.tpay.com/?id=${process.env.NEXT_PUBLIC_TPAY_ID}&amount=${amount}.00&description=wplata&md5sum=${hashedData}#page=panel-main-page`}
            targetBlank={true}
          />
        </div>
      </section>
    </main>
  );
};

export default PaymentPage;
