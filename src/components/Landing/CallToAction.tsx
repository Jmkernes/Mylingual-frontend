"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function () {
  const { scrollY } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Background gradient fade-in effect
  const gradientOpacity = useTransform(scrollY, [500, 800], [0, 1]); // Fade in gradient

  // Parallax effect for the Frame images
  const leftFrameY = useTransform(scrollY, [245, 544], [200, 0]);
  const rightFrameY = useTransform(scrollY, [400, 620], [250, 0]);
  const stext = useTransform(scrollY, [500, 600], [100, 0]);

  return (
    <motion.section className="relative flex flex-col items-center justify-center min-h-screen w-full">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950 to-[hsl(0,0%,6%)] z-10"
        style={{ opacity: gradientOpacity }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center gap-12 px-4 lg:px-12 w-full max-w-7xl">
        {/* Text Section */}
        <div className="flex flex-col gap-4 text-center lg:text-left lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            A new Learn what{"'"}s most important to you, you
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            The person who knows the most about you is yourself. We use AI to
            learn from you
          </motion.p>
        </div>

        {/* Frame Images */}
        <div className="relative flex justify-center lg:justify-end items-center gap-4 lg:gap-6">
          {/* Left Frame */}
          <motion.img
            src="/landing-frame1.jpeg"
            alt="Wireframe 1"
            className="w-40 lg:w-64 aspect-[500/1041] transform translate-x-[-10%] rounded-2xl shadow-sm shadow-black overflow-clip"
            style={{
              y: leftFrameY,
            }}
          />

          {/* Right Frame */}
          <motion.img
            src="/landing-frame2.jpeg"
            alt="Wireframe 2"
            className="w-44 lg:w-72 aspect-[657/1369] transform translate-x-[10%] rounded-2xl shadow-sm shadow-black overflow-clip"
            style={{ y: rightFrameY, rotateZ: "8deg" }}
          />
        </div>
      </div>
      {/* <GetTheAppButton /> */}
    </motion.section>
  );
}
