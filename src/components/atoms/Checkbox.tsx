"use client";

import { Checkbox, Label } from "flowbite-react";

export function CheckBox() {
  return (
    <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-start gap-2">
        <Checkbox id="accept" defaultChecked />
        <Label htmlFor="accept" className="flex flex-col">
          <span className="font-bold">
            Zapoznałem się z{" "}
            <a href="#" className="underline">
              polityką prywatności
            </a>
          </span>
          <p>
            Zgadzam się na przesyłanie mi newslettera z aktualnościami i
            informacjami marketingowymi
          </p>
        </Label>
      </div>
    </div>
  );
}
