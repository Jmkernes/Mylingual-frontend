import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function () {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === 1 ? 0 : 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [0, 1, 1], width: ["3rem", "3rem", "13rem"] }}
      transition={{ times: [0, 0.5, 1] }}
      whileHover={{
        backgroundColor: "#10B981",
        color: "white",
        scale: "1.1",
        transition: { duration: 0.3 },
      }}
      className="relative backdrop-blur-md rounded-full h-12 bg-gradient-to-br from-red-500/80 via-rose-500/80 to-orange-600/80 hover:scale-110 duration-300 transition-all hover:bg-gradient-to-br hover:from-emerald-500 hover:to-green-500 group"
    >
      <motion.span
        initial={{ opacity: 0, y: "-50%", x: "-45%" }}
        animate={{ opacity: 1, y: "-50%", x: "-45%" }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute left-[40%] top-1/2 -translate-x-1/2 text-lg w-max text-white font-bold"
      >
        Join the Waitlist
      </motion.span>
      <motion.div
        className="absolute right-[8px] top-[10px] rounded-full bg-black group-hover:bg-black/50 h-7 w-7 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
          borderRadius: ["100%", "20%", "100%"],
        }}
        transition={{
          duration: 2,
          ease: "linear",
          times: [0, 0.35, 0.7],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1.5,
        }}
      >
        <ArrowRightIcon className="h-4 w-4 stroke-2 stroke-white" />
      </motion.div>
    </motion.button>
  );
}
