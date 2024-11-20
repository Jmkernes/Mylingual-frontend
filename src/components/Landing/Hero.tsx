"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import GetTheAppButton from "./GetTheAppButton";

const HeroText = () => {
  const texts = [
    "Welcome",
    "ようこそ",
    "Bienvenida",
    "欢迎光临",
    "مرحباً",
    "Bienvenue",
    "Willkommen",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={texts[currentIndex]}
        initial={{ y: -25, scale: 1, opacity: 0 }}
        animate={{
          rotateX: 0,
          y: 0,
          scale: 1,
          rotateZ: 0,
          opacity: 1,
          rotateY: 0,
        }}
        exit={{ scale: 1, transition: { ease: "easeIn", duration: 10 } }}
        transition={{ type: "spring", bounce: 0.5, damping: 10 }}
        className="text-4xl font-bold bg-gradient-to-b from-blue-500 to-sky-400 bg-clip-text text-transparent drop-shadow-lg "
      >
        {texts[currentIndex]}
      </motion.h2>
    </AnimatePresence>
  );
};

export default function () {
  const { scrollY } = useScroll();

  const videoOpacity = useTransform(scrollY, [0, 700], [1, 0]); // Fade out video
  const contentOpacity = useTransform(scrollY, [0, 1000], [1, 0]); // Text fade-in
  const gradientOpacity = useTransform(scrollY, [500, 800, 1600], [0, 1, 0]); // Fade in gradient

  return (
    <section className="relative h-screen grid grid-cols-1 bg-cover bg-center">
      {/* Video Background */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-full w-full object-cover opacity-80 -z-10 pointer-events-none"
        style={{ opacity: videoOpacity }}
        src="/mylingual-landing.mp4"
      />

      {/* Radial Gradient */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-transparent from-50% to-black -z-10 pointer-events-none"
        style={{ opacity: videoOpacity }}
      />

      {/* Radial Gradient */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-black to-neutral-900 -z-10 pointer-events-none"
        style={{ opacity: gradientOpacity }}
      />

      {/* Overlay Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="z-10 flex flex-col justify-center items-center h-full px-8 text-center row-start-4"
      >
        <HeroText />
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Learn Faster, Smarter
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          From zero to fluent in months, we{"'"}ve used AI to re-invent Language
          Learning
        </motion.p>
        <GetTheAppButton />
      </motion.div>
    </section>
  );
}
