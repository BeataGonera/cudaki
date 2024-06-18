const Chip = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-center items-center bg-purple-light rounded-2xl border-purple-border border-[1px]  text-primary-custom font-bold h-[33px] px-[16px] w-fit">
      {label}
    </div>
  );
};

export default Chip;
