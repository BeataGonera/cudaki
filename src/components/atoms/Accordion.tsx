"use client";
import styles from "@/app/styles.module.css";
import { useState } from "react";
import IconChevronUp from "./IconChevronUp";
import IconChevronDown from "./IconChevronDown";
import IconDownload from "./IconDownload";
import Link from "next/link";

const Accordion = ({
  label,
  content,
  documentLink,
}: {
  label: string;
  content: any;
  documentLink: string;
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={toggleOpen}
      className={`${
        open ? styles.accordionOpen : styles.accordionClose
      } w-full rounded-[32px] border-[1px] border-black/50 max-h-[62px] flex flex-col gap-[24px] px-[32px] py-[19px] cursor-pointer overflow-hidden`}
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-[32px]">
          <span className="font-bold text-[16px]">{label}</span>
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        <div>
          <Link href={documentLink} target="_blank">
            <IconDownload />
          </Link>
        </div>
      </div>
      <div className="w-full">{content}</div>
    </div>
  );
};

export default Accordion;
