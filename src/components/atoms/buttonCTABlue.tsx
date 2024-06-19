const ButtonCTABlue = ({
  label,
  submit,
}: {
  label: string;
  submit: boolean;
}) => {
  return (
    <button
      className="bg-[#6FCFEB] rounded-full w-full h-[42px] lg:h-full lg:w-[160px] font-bold text-[14px] hover:bg-[#94e5fd]"
      type={submit ? "submit" : "button"}
    >
      {label}
    </button>
  );
};

export default ButtonCTABlue;
