"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SIGNUP_FORM_URL } from "./constants";

const langs = [
  "EN",
  "ES",
  "DE",
  "FR",
  "PT",
  "JA",
  "IT",
  "KO",
  "RU",
  "ZH",
  "TE",
  "BN",
  "HI",
  "TA",
];

export default function () {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [0, 1]);

  // Scroll and hover behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setIsHoveringTop(true); // Hover detected near top
      } else {
        setIsHoveringTop(false); // Not hovering near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar || isHoveringTop ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-[hsl(0,0%,8%)] to-transparent hover:backdrop-blur-md hover:bg-[hsl(0,0%,12%,0.8)] hover:shadow-black hover:shadow-md"
      // style={{ backgroundColor: `hsl(0,0%,8%,${opacity})` }}
    >
      <div className="px-2 md:px-4 lg:px-8 py-2 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="text-white text-xs md:text-base font-bold tracking-wider uppercase"
        >
          MyLingual AI
        </Link>

        <div className="left-1/2 -translate-x-1/2 top-[0.6rem] md:top-5 max-h-8 max-w-8 absolute">
          <Image
            alt="logo"
            src={"/android-chrome-192x192.png"}
            height={300}
            width={300}
            className="md:h-fit md:w-fit h-6 w-6"
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={() => window.open(SIGNUP_FORM_URL, "_blank")}
          className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium  bg-red-500/16 border border-red-500/32 rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-300 text-red-500"
        >
          Sign Up
        </button>
      </div>
    </motion.nav>
  );
}
