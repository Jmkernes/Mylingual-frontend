"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

    const handleMouseMove = (e) => {
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
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[hsl(0,0%,8%)] to-transparent hover:bg-[hsl(0,0%,12%)] transition-all duration-300 hover:shadow-black hover:shadow-md"
    >
      <div className="px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white text-xl font-bold tracking-wider uppercase"
        >
          MyLingual AI
        </a>

        {/* Signup Button */}
        <button className="px-4 py-2 text-sm font-medium  bg-red-500/16 border border-red-500/32 rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-300 text-red-500">
          Sign Up
        </button>
      </div>
    </motion.nav>
  );
}
