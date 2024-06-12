"use client";

import { LinkMenu } from "@/utils/types";
import Link from "next/link";
import styles from "./styles.module.css";
import { useIsDropdownMenuOpenStore } from "@/state/isDropdownMenuOpen";

const DropDownMenu = ({
  label,
  links,
}: {
  label: string;
  links: LinkMenu[];
}) => {
  const { isDropdownMenuOpen, setIsDropdownMenuOpen } =
    useIsDropdownMenuOpenStore();
  return (
    <div className="cursor-pointer relative z-50">
      <div
        className="flex gap-[8px] justify-center items-center"
        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
      >
        {label}{" "}
        {!isDropdownMenuOpen ? (
          <div className="text-primary-custom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="text-primary-custom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {links ? (
        <div className={isDropdownMenuOpen ? styles.open : styles.close}>
          {links.map((link: LinkMenu, index: number) => {
            return (
              <Link href={link.href} key={index} aria-label={link.ariaLabel}>
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default DropDownMenu;
