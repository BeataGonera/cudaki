const ChipOutlined = ({ label }: { label: string }) => {
  return (
    <div
      className={`border-[#906EE2] border-[1px] rounded-[32px] px-[8px] py-[16px] h-[35px] font-bold text-[14px] flex
      justify-center items-center text-[#906EE2]`}
    >
      {label}
    </div>
  );
};

export default ChipOutlined;
