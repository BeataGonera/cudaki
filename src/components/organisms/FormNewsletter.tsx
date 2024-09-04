"use client";

import { useState } from "react";
import { CheckBox } from "../atoms/Checkbox";
import ButtonCTABlue from "../atoms/buttonCTABlue";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const FormNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<null | string>(null);

  const url =
    "https://yahoo.us9.list-manage.com/subscribe/post?u=48a2ce29c64a0cad59ef34bd8&id=221f4a6f78&f_id=004c51e1f0";

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <form
          className="w-full flex flex-col gap-[14px] lg:w-[486px] validate"
          onSubmit={(e: any) => {
            e.preventDefault();
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              setError("Wpisz poprawny adres email.");
              return;
            }
            subscribe({ EMAIL: email });
          }}
        >
          <div className="w-full flex justify-between bg-[#F2F2F2] rounded-full h-[48px] pl-[16px] py-[3px] pr-[3px]">
            <div className="w-full h-full flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgba(0, 0, 0, 0.5)"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                placeholder="Wpisz swój email"
                className="bg-transparent focus:border-none w-full outline-none border-none focus:outline-none"
                name="EMAIL"
                maxLength={100}
                onChange={(e: any) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="hidden lg:block">
              <ButtonCTABlue label="Subskrybuj" submit={true} />
            </div>
          </div>
          <div className="block lg:hidden">
            <ButtonCTABlue label="Subskrybuj" submit={true} />
          </div>
          {error ? <div className="text-error-custom">{error}</div> : null}
          {status === "sending" && <div>Wysyłam ...</div>}
          {status === "error" && (
            <div>Coś poszło nie tak. Nie udało się wysłać formularza.</div>
          )}
          {status === "success" && (
            <div>
              <p>Dziękujemy za zapisanie się do newslettera.</p>
            </div>
          )}
          <CheckBox />
        </form>
      )}
    />
  );
};

export default FormNewsletter;
