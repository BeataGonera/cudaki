import styles from "./styles.module.css";

const ButtonReadMore = ({ color }: { color: string }) => {
  if (color === "white") {
    return (
      <div
        className={`text-white flex w-full justify-end gap-[8px] ${styles.animateReadButton}`}
      >
        <span className="font-bold text-[14px]">Czytaj dalej</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div
        className={`text-primary-custom flex w-full justify-end gap-[8px] ${styles.animateReadButton}`}
      >
        <span className="font-bold text-[14px]">Czytaj dalej</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }
};

export default ButtonReadMore;
