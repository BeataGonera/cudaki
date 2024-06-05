import styles from "@/app/styles.module.css";

const ButtonCTA = ({ label, icon }: { label: string; icon: boolean }) => {
  return (
    <button
      type="button"
      className={`${styles.container} text-white font-bold bg-primary-custom rounded-lg h-[52px] flex justify-center items-center gap-4 relative overflow-hidden w-full lg:w-[368px] z-10`}
    >
      <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full gap-4">
        {label}
        {icon ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
      </div>
      <div
        className={`${styles.dot} bg-primary-hover w-0 h-0 rounded-full`}
      ></div>
    </button>
  );
};

export default ButtonCTA;
