"use client";
import { motion, useTransform } from "framer-motion";

const imageUrls = [
  "/landing_bkgd_photos/pexels-dogukan-sanal-1618066574-29461865.jpg",
  "/landing_bkgd_photos/pexels-enginakyurt-1498273.jpg",
  "/landing_bkgd_photos/pexels-huy-phan-316220-1437618.jpg",
  "/landing_bkgd_photos/pexels-jimmy-teoh-294331-1010657.jpg",
  "/landing_bkgd_photos/pexels-julius-silver-240301-753339.jpg",
  "/landing_bkgd_photos/pexels-laura-tancredi-7084016.jpg",
  "/landing_bkgd_photos/pexels-neosiam-618491.jpg",
  "/landing_bkgd_photos/pexels-pixabay-265823.jpg",
  "/landing_bkgd_photos/pexels-vo-van-ti-n-2037497312-29461918.jpg",
  "/landing_bkgd_photos/pexels-wildlittlethingsphoto-933964.jpg",
];

import { useScroll } from "framer-motion";
import Image from "next/image";

export default function () {
  const N = imageUrls.length;

  const { scrollY } = useScroll();
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // Background gradient fade-in effect
  const gradientOpacity = useTransform(scrollY, [0, 800, 1600], [0, 1, 1]); // Fade in gradient

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-[hsl(0,0%,6%)] text-white">
      {/* Animated Background Gradient Mask */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        style={{
          background: `
      linear-gradient(
              to bottom, 
              rgba(0, 0, 0, 0) 0%, 
              rgba(0, 0, 0, 0.7) 33%, 
              rgba(0, 0, 0, 0.7) 66%, 
              rgba(0, 0, 0, 0) 100%
            )
          `,
        }}
      />

      {/* Animated Header and Subheader */}
      <header className="text-center mb-6 z-20 max-w-[800px] w-full">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          The First Truly{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Customized
          </span>{" "}
          Language Experience
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-[90%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience a dynamic, personalized language learning journey that
          adapts to your unique needs and goals.
        </motion.p>
      </header>

      {/* Background Image Columns with Scroll Animations */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 z-0 rotate-6">
        {[0, 1, 2, 3, 4, 5, 6].map((columnIndex) => (
          <motion.div
            key={columnIndex}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: columnIndex * 0.07 }}
          >
            {imageUrls
              .slice((columnIndex * 4) % N, (((columnIndex + 1) * 4) % N) + 1)
              .map((src, index) => (
                <Image
                  key={index}
                  className="w-full rounded-xl shadow"
                  src={src}
                  width={232}
                  height={290}
                  alt={`Image ${columnIndex * 3 + index + 1}`}
                />
              ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Our AI doesn't just guide you, it actively learns from you to create
// an entirely unique curriculum. Acquiring a language means learning
// how to express yourself in another tongue, but no book or class will
// ever know as much about your thoughts than you yourself do.
