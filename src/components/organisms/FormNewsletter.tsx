import { CheckBox } from "../atoms/Checkbox";
import ButtonCTABlue from "../atoms/buttonCTABlue";

const FormNewsletter = () => {
  return (
    <form className="w-full flex flex-col gap-[14px] lg:w-[486px]">
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
            className="bg-transparent focus:outline-none"
          ></input>
        </div>
        <ButtonCTABlue label="Subskrybuj" />
      </div>
      <CheckBox />
    </form>
  );
};

export default FormNewsletter;