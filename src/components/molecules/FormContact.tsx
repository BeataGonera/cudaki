import { CheckBox } from "../atoms/Checkbox";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import ButtonCTA from "../atoms/buttonCTA";

const FormContact = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div className="flex gap-[24px]">
        <div className="w-1/2">
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Imię"
              className="text-[12px] font-bold"
            />
          </div>
          <input
            id="name"
            type="text"
            placeholder="Imię"
            className="text-[12px] w-full bg-beige-bg h-[44px] rounded-[8px]"
          />
        </div>
        <div className="w-1/2">
          <div className="mb-2 block">
            <Label
              htmlFor="surname"
              value="Nazwisko"
              className="text-[12px] font-bold"
            />
          </div>
          <input
            id="surname"
            type="text"
            placeholder="Nazwisko"
            className="text-[12px] bg-beige-bg h-[44px] rounded-[8px] w-full"
          />
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
          type="email"
          placeholder="Twoj.email@gmail.com"
          className="text-[12px] bg-beige-bg h-[44px] rounded-[8px] w-full"
        />
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
          placeholder="Zostaw swoją widomość"
          className="text-[12px] bg-beige-bg h-[177px] rounded-[8px] w-full"
          rows={4}
        />
      </div>

      <div className="flex items-center gap-2">
        <CheckBox />
      </div>
      <ButtonCTA label="Wyślij" icon={false} />
    </form>
  );
};

export default FormContact;
