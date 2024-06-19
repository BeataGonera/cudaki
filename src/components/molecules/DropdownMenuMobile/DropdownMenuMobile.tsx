"use client";

import { LinkMenu } from "@/utils/types";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";
import { useIsMenuDrawerOpenStore } from "@/state/isMenuDrawerOpen";
import { useIsDropdownMenuMobileOpenStore } from "@/state/isDropdownMenuMobileOpen";

const DropDownMenuMobile = ({
  label,
  links,
}: {
  label: string;
  links: LinkMenu[];
}) => {
  const { setIsDropdownMenuMobileOpen, isDropdownMenuMobileOpen } =
    useIsDropdownMenuMobileOpenStore();
  const { setIsMenuDrawerOpen } = useIsMenuDrawerOpenStore();
  return (
    <div className="cursor-pointer">
      <div
        className="flex gap-[8px] items-center justify-between border-white border-b-[1px]"
        onClick={() => setIsDropdownMenuMobileOpen(!isDropdownMenuMobileOpen)}
      >
        {label}{" "}
        {!open ? (
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        )}
      </div>
      {links ? (
        <div
          className={`${isDropdownMenuMobileOpen ? styles.open : styles.close}`}
        >
          <div className="pt-[24px]">
            {links.map((link: LinkMenu, index: number) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  aria-label={link.ariaLabel}
                  className="text-[18px] h-[42px] flex items-center"
                  onClick={() => setIsMenuDrawerOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DropDownMenuMobile;
