import styles from "@/app/styles.module.css";

const ButtonOutlined = ({ label }: { label: string }) => {
  return (
    <button
      type="button"
      className={`${styles.containerOutlined} text-primary-custom font-bold bg-none rounded-lg h-[52px] flex justify-center items-center gap-4 relative overflow-hidden w-full border-[1px] border-primary-custom z-10`}
    >
      <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full gap-4">
        {label}
      </div>
      <div
        className={`${styles.dot} bg-primary-hover w-0 h-0 rounded-full`}
      ></div>
    </button>
  );
};

export default ButtonOutlined;
