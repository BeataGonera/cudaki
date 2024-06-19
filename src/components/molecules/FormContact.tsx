"use client";

import { CheckBox } from "../atoms/Checkbox";
import { Label } from "flowbite-react";
import ButtonCTA from "../atoms/buttonCTA";
import { useEffect, useState } from "react";

type VisitorData = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

const initialVisitorData: VisitorData = {
  name: "",
  surname: "",
  email: "",
  message: "",
};

enum Error {
  wrongName = "Wpisz imię",
  wrongSurname = "Wpisz nazwisko",
  wrongEmail = "Niepoprawny email",
  wrongMessage = "Wpisz treść wiadomości",
  messageNotSent = "Nie udało się wysłać wiadomości",
}

const FormContact = () => {
  const [error, setError] = useState<Error | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  const [visitorData, setVisitorData] =
    useState<VisitorData>(initialVisitorData);

  const updateVisitorData = (fields: Partial<VisitorData>) => {
    setVisitorData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setPending(false);
    setError(null);
    if (!visitorData.name) {
      setError(Error.wrongName);
      return;
    } else if (!visitorData.surname) {
      setError(Error.wrongSurname);
      return;
    } else if (!visitorData.email) {
      setError(Error.wrongEmail);
      return;
    } else if (!visitorData.message) {
      setError(Error.wrongMessage);
      return;
    }
    sendEmail(event);
  };

  async function sendEmail(event: any) {
    setPending(true);
    const formData = new FormData(event.target);

    formData.append("access_key", `${process.env.WEB_3_FORMS_KEY}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setPending(false);
    } else {
      setError(Error.messageNotSent);
      setPending(false);
    }
  }
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="subject"
        value="Nowe zgłoszenie - Fundacja Cudaki"
      />
      <input
        type="hidden"
        name="from_name"
        value="Cudaki - formularz kontaktowy"
      />
      <input type="hidden" name="replyto" value={visitorData.email} />

      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px]">
        <div className="w-full lg:w-1/2 ">
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Imię"
              className="text-[12px] font-bold"
            />
          </div>
          <input
            id="name"
            name="Imię"
            type="text"
            placeholder="Imię"
            maxLength={40}
            className={
              error === Error.wrongName
                ? "text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px] border-2 border-error-custom"
                : "text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px]"
            }
            onChange={(e) => updateVisitorData({ name: e.target.value })}
          />
          <p
            className={
              error === Error.wrongName
                ? "text-[10px] w-full text-error-custom absolute pt-1"
                : "hidden"
            }
          >
            Wpisz imię
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-2 block">
            <Label
              htmlFor="surname"
              value="Nazwisko"
              className="text-[12px] font-bold"
            />
          </div>
          <input
            id="surname"
            name="Nazwisko"
            type="text"
            placeholder="Nazwisko"
            maxLength={40}
            className={
              error === Error.wrongSurname
                ? "text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px] border-2 border-error-custom"
                : "text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px]"
            }
            onChange={(e) => updateVisitorData({ surname: e.target.value })}
          />
          <p
            className={
              error === Error.wrongSurname
                ? "text-[10px] w-full text-error-custom absolute pt-1"
                : "hidden"
            }
          >
            Wpisz nazwisko
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Email"
            className="text-[12px] font-bold"
          />
        </div>
        <input
          id="email"
          name="Email"
          type="email"
          placeholder="Twoj.email@gmail.com"
          maxLength={60}
          className={
            error === Error.wrongEmail
              ? "text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px] border-2 border-error-custom"
              : "text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px]"
          }
          onChange={(e) => updateVisitorData({ email: e.target.value })}
        />
        <p
          className={
            error === Error.wrongEmail
              ? "text-[10px] w-full text-error-custom absolute pt-1"
              : "hidden"
          }
        >
          Błędny adres email.
        </p>
      </div>

      <div className="w-full">
        <div className="mb-2 block">
          <Label
            htmlFor="message"
            value="Wiadomość"
            className="text-[12px] font-bold"
          />
        </div>
        <textarea
          id="message"
          name="Wiadomość"
          placeholder="Zostaw swoją widomość"
          className={
            error === Error.wrongMessage
              ? "text-[12px] w-full bg-beige-bg h-[177px] rounded-[8px] border-2 border-error-custom"
              : "text-[12px] w-full bg-beige-bg h-[177px] rounded-[8px]"
          }
          rows={4}
          maxLength={800}
          onChange={(e) => updateVisitorData({ message: e.target.value })}
        />
        <p
          className={
            error === Error.wrongMessage
              ? "text-[10px] w-full text-error-custom absolute "
              : "hidden"
          }
        >
          Wpisz treść wiadomości.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <CheckBox />
      </div>
      <ButtonCTA label="Wyślij" icon={false} submit={true} pending={pending} />
    </form>
  );
};

export default FormContact;
