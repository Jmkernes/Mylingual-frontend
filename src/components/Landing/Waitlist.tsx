"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GetTheAppButton from "./GetTheAppButton";

const HeroText = () => {
  const texts = [
    "Start your journey today",
    "Comienza tu viaje hoy",
    "ابدأ رحلتك اليوم",
    "začněte svou cestu ještě dnes",
    "今日から旅を始めましょう",
    "今天就开始你的旅程",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={texts[currentIndex]}
        initial={{ scale: 1, opacity: 0, x: -20 }}
        exit={{ scale: 1, opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-2xl tracking-wider font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
      >
        {texts[currentIndex]}
      </motion.h2>
    </AnimatePresence>
  );
};

export default function () {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-[hsl(0,0%,6%)] via-[hsl(308,20%,10%)] to-transparent h-screen w-full">
      <div className="rounded-2xl bg-[hsl(0,0%,12%)] p-8 w-fit max-w-[80%] h-fit shadow-black shadow-lg">
        <motion.div
          animate={{
            scale: [0, 1, 0],
            x: [-20, 100, -10],
            y: [-50, 0, -10],
            filter: [
              "brightness(0.5) blur(10px)",
              "brightness(1.5) blur(10px)",
              "brightness(0.5) blur(10px)",
            ],
          }}
          transition={{
            duration: 7,
            delay: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-96 top-36 h-8 w-8 rounded-full bg-yellow-300 blur-md"
        />
        <motion.div
          animate={{
            scale: [0, 1, 0],
            x: [50, 40, 10],
            y: [10, 0, -10],
            filter: [
              "brightness(0.5) blur(20px)",
              "brightness(1.5) blur(20px)",
              "brightness(0.5) blur(20px)",
            ],
          }}
          transition={{
            duration: 6,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-96 bottom-16 h-8 w-8 rounded-full bg-red-300 blur-md"
        />
        <motion.div
          animate={{
            scale: [0, 1, 0],
            x: [0, 20, 60],
            y: [0, 20, 60],
            filter: [
              "brightness(0.5) blur(20px)",
              "brightness(1.5) blur(20px)",
              "brightness(0.5) blur(20px)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-64 top-28 h-10 w-10 rounded-full bg-rose-300 blur-md"
        />
        <motion.div
          animate={{
            scale: [0, 1, 0],
            x: [50, 0, -20],
            y: [12, 48, 60],
            filter: [
              "brightness(0.5) blur(10px)",
              "brightness(1.5) blur(10px)",
              "brightness(0.5) blur(10px)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-48 bottom-56 h-6 w-6 rounded-full bg-emerald-300 blur-md"
        />
        <div className="flex flex-col h-full w-full text-center items-center justify-center p-4 rounded-2xl gap-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Let{"'"}s change how we learn
          </motion.h1>
          <HeroText />
          <div className="my-2" aria-hidden />
          <GetTheAppButton />
        </div>
      </div>
    </div>
  );
}
