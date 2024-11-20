"use client";
import clsx from "clsx";
import Link from "next/link";

import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SIGNUP_FORM_URL } from "./constants";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 25;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const footerLinks = ["About", "Blog", "Careers", "Privacy"];

type Props = {
  children: string;
};

const ScrambleText: React.FC<Props> = ({ children }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  };

  useEffect(() => {
    setInterval(() => scramble(), 2500);
  }, []);

  return (
    <motion.div className="relative overflow-hidden mb-2">
      <div className="relative z-10 flex items-center gap-2 text-[hsl(207,5%,50%)] text-xs uppercase font-mono">
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

function Socials() {
  return (
    <div className="flex gap-4 items-center opacity-100">
      {/* Twitter */}
      <a
        href="https://x.com/mylingualai"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
        aria-label="Twitter"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            d="M11.8206 2H13.8563L9.40893 7.08308L14.6409 14H10.5443L7.3357 9.80492L3.66431 14H1.62739L6.38431 8.56308L1.36523 2H5.56585L8.46616 5.83446L11.8206 2ZM11.1062 12.7815H12.2342L4.95293 3.15446H3.74247L11.1062 12.7815Z"
            fill="currentColor"
          />
        </svg>
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com/mylingualai"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
        aria-label="Instagram"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            strokeLinejoin="miter"
            fill="var(--token-90add841-09ed-435c-a1c9-7050b5ddce91, rgb(155, 161, 165))"
            d="M7.99935 2.80814C9.69035 2.80814 9.89071 2.81448 10.5586 2.84499C10.9601 2.84984 11.3578 2.92365 11.7343 3.0632C12.0094 3.16474 12.2583 3.32666 12.4626 3.53705C12.673 3.74137 12.8349 3.99025 12.9365 4.26539C13.076 4.64189 13.1498 5.03958 13.1547 5.44108C13.1852 6.10896 13.1915 6.30933 13.1915 8.00033C13.1915 9.69133 13.1852 9.89169 13.1547 10.5596C13.1498 10.9611 13.076 11.3588 12.9365 11.7353C12.8311 12.0085 12.6697 12.2566 12.4626 12.4636C12.2556 12.6707 12.0075 12.8321 11.7343 12.9374C11.3578 13.077 10.9601 13.1508 10.5586 13.1557C9.89071 13.1862 9.69035 13.1925 7.99935 13.1925C6.30835 13.1925 6.10799 13.1862 5.44011 13.1557C5.03841 13.1509 4.64052 13.0771 4.26383 12.9374C3.9889 12.8358 3.74023 12.6739 3.53608 12.4636C3.32568 12.2593 3.16376 12.0104 3.06223 11.7353C2.92268 11.3588 2.84886 10.9611 2.84402 10.5596C2.8135 9.89169 2.80717 9.69133 2.80717 8.00033C2.80717 6.30933 2.8135 6.10896 2.84402 5.44108C2.84886 5.03958 2.92268 4.64189 3.06223 4.26539C3.16376 3.99025 3.32568 3.74137 3.53608 3.53705C3.74039 3.32666 3.98927 3.16474 4.26441 3.0632C4.64091 2.92365 5.0386 2.84984 5.44011 2.84499C6.10799 2.81448 6.30835 2.80814 7.99935 2.80814ZM7.99935 1.66699C6.27956 1.66699 6.06365 1.67448 5.38829 1.70499C4.86292 1.71547 4.34313 1.81495 3.85102 1.9992C3.42822 2.15839 3.04526 2.40793 2.72886 2.73042C2.40666 3.0467 2.15732 3.42945 1.99823 3.85199C1.81417 4.34414 1.71489 4.86393 1.70459 5.38927C1.67292 6.06463 1.66602 6.28054 1.66602 8.00033C1.66602 9.72011 1.6735 9.93602 1.70402 10.6114C1.7145 11.1368 1.81398 11.6565 1.99823 12.1487C2.15741 12.5715 2.40696 12.9544 2.72944 13.2708C3.04572 13.593 3.42848 13.8424 3.85102 14.0014C4.34316 14.1855 4.86295 14.2848 5.38829 14.2951C6.06365 14.3268 6.27956 14.3337 7.99935 14.3337C9.71914 14.3337 9.93505 14.3262 10.6104 14.2957C11.1358 14.2852 11.6556 14.1857 12.1477 14.0014C12.5685 13.8387 12.9508 13.5899 13.2698 13.2708C13.5889 12.9517 13.8377 12.5695 14.0005 12.1487C14.1845 11.6565 14.2838 11.1367 14.2941 10.6114C14.3258 9.93602 14.3327 9.72011 14.3327 8.00033C14.3327 6.28054 14.3252 6.06463 14.2947 5.38927C14.2842 4.8639 14.1847 4.34411 14.0005 3.85199C13.8413 3.42919 13.5917 3.04623 13.2693 2.72984C12.953 2.40764 12.5702 2.15829 12.1477 1.9992C11.6555 1.81515 11.1357 1.71586 10.6104 1.70557C9.93505 1.6739 9.71914 1.66699 7.99935 1.66699Z"
          ></path>
          <path
            strokeLinejoin="miter"
            fill="var(--token-90add841-09ed-435c-a1c9-7050b5ddce91, rgb(155, 161, 165))"
            d="M6.8283 9.75581C7.1755 9.9878 7.5837 10.1116 8.00128 10.1116C8.56123 10.1116 9.09825 9.88918 9.49419 9.49324C9.89014 9.09729 10.1126 8.56027 10.1126 8.00032C10.1126 7.58275 9.98876 7.17455 9.75676 6.82734C9.52477 6.48014 9.19503 6.20953 8.80924 6.04973C8.42345 5.88993 7.99894 5.84812 7.58938 5.92959C7.17983 6.01105 6.80363 6.21213 6.50836 6.50741C6.21309 6.80268 6.01201 7.17887 5.93054 7.58843C5.84908 7.99798 5.89089 8.42249 6.05069 8.80828C6.21049 9.19407 6.4811 9.52381 6.8283 9.75581Z"
          ></path>
          <path
            strokeLinejoin="miter"
            fill="var(--token-90add841-09ed-435c-a1c9-7050b5ddce91, rgb(155, 161, 165))"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.666 3.00033L10.666 2.33366H6.33268L3.99935 2.66699L2.99935 3.33366L2.66602 4.33366L2.33268 6.00033V11.667L2.99935 12.667L3.99935 13.3337L7.33268 13.667H10.9993L12.9993 13.3337L13.666 11.0003V5.66699L13.3327 4.00033L12.666 3.00033ZM10.9604 3.98756C11.0854 3.90405 11.2323 3.85948 11.3827 3.85948C11.5842 3.85948 11.7775 3.93955 11.9201 4.08208C12.0626 4.2246 12.1427 4.41791 12.1427 4.61948C12.1427 4.76979 12.0981 4.91673 12.0146 5.04171C11.9311 5.16669 11.8124 5.2641 11.6735 5.32163C11.5346 5.37915 11.3818 5.3942 11.2344 5.36487C11.087 5.33555 10.9515 5.26317 10.8453 5.15688C10.739 5.05059 10.6666 4.91517 10.6373 4.76775C10.6079 4.62032 10.623 4.46751 10.6805 4.32864C10.738 4.18977 10.8354 4.07107 10.9604 3.98756ZM6.19484 5.29601C6.7297 4.93862 7.35853 4.74787 8.00181 4.74787C8.86441 4.74787 9.69168 5.09054 10.3016 5.70049C10.9116 6.31045 11.2543 7.13772 11.2543 8.00033C11.2543 8.6436 11.0635 9.27243 10.7061 9.80729C10.3487 10.3422 9.84077 10.759 9.24647 11.0052C8.65216 11.2514 7.9982 11.3158 7.36728 11.1903C6.73637 11.0648 6.15684 10.755 5.70197 10.3002C5.24711 9.84529 4.93734 9.26576 4.81185 8.63485C4.68635 8.00393 4.75076 7.34997 4.99693 6.75566C5.2431 6.16136 5.65998 5.65339 6.19484 5.29601Z"
          ></path>
        </svg>
      </a>
      {/* Youtube */}
      <a
        href="https://youtube.com/@mylingualai"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
        aria-label="YouTube"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            strokeLinejoin="miter"
            fill="var(--token-90add841-09ed-435c-a1c9-7050b5ddce91, rgb(155, 161, 165))"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4695 2.67152C14.0722 2.85809 14.5459 3.40584 14.7073 4.10284C14.9988 5.36491 15 7.99967 15 7.99967C15 7.99967 15 10.6344 14.7073 11.8965C14.5459 12.5935 14.0722 13.1413 13.4695 13.3278C12.3782 13.6663 7.99998 13.6663 7.99998 13.6663C7.99998 13.6663 3.62183 13.6663 2.53045 13.3278C1.92773 13.1413 1.45407 12.5935 1.29272 11.8965C1 10.6344 1 7.99967 1 7.99967C1 7.99967 1 5.36491 1.29272 4.10284C1.45407 3.40584 1.92773 2.85809 2.53045 2.67152C3.62183 2.33301 7.99998 2.33301 7.99998 2.33301C7.99998 2.33301 12.3782 2.33301 13.4695 2.67152ZM10.3422 7.99988L6.5319 10.1996V5.80011L10.3422 7.99988Z"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default function () {
  return (
    <footer className={clsx("p-2 sm:p-4", "z-10")}>
      <div
        className={clsx(
          "flex sm:flex-row flex-col flex-grow gap-4 justify-evenly",
          "p-8 w-full bg-[hsl(0,0%,12%)]",
          "rounded-2xl text-xs",
          "z-20"
        )}
      >
        <div className="flex flex-col gap-4 w-full h-full text-center sm:items-start items-center">
          <div className="max-h-8 max-w-8">
            <Image
              alt="logo"
              src={"/android-chrome-192x192.png"}
              height={300}
              width={300}
              className="h-fit w-fit"
            />
          </div>
          <div>
            <ScrambleText>Copyright © 2024 Mylingual AI, LTD.</ScrambleText>
            <ScrambleText>All rights reserved</ScrambleText>
          </div>
          <Socials />
        </div>
        <div className="flex flex-col gap-4 justify-between sm:items-end items-center">
          <div className="flex items-center gap-4">
            {footerLinks.map((x, _) => (
              <Link
                href={"/"}
                key={`footer-link-${x}`}
                className={clsx(
                  "text-[hsl(204,5%,59%)] hover:text-neutral-200",
                  "tracking-wider text-xs duration-150"
                )}
              >
                {x}
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.open(SIGNUP_FORM_URL, "_blank")}
            className="mt-auto flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold bg-[hsl(204,7%,22%)] hover:text-black hover:bg-green-500 w-fit duration-300 group"
          >
            <StarIcon className="h-4 w-4 text-yellow-500 group-hover:animate-spin stroke-1 stroke-black" />
            <span>Sign up</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
