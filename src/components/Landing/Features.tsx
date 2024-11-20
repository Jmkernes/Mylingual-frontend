"use client";
import {
  BoltIcon,
  CpuChipIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "Speed",
    description:
      "Learn a language faster than ever with our adaptive AI algorithms that tailor lessons to your pace.",
    icon: <BoltIcon className="h-8 w-8 stroke-2" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Skill",
    description:
      "Master real-world skills with practical exercises and personalized feedback to enhance your proficiency.",
    icon: <CpuChipIcon className="h-8 w-8 stroke-2" />,
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "Fun",
    description:
      "Engage with gamified lessons, interactive challenges, and a community of language enthusiasts.",
    icon: <FaceSmileIcon className="h-8 w-8 stroke-2" />,
    gradient: "from-pink-400 via-purple-500 to-indigo-500",
  },
];

export default function () {
  return (
    <section className="relative flex flex-col gap-12 items-center h-screen justify-center bg-[hsl(0,0%,6%)] p-4 text-white py-20">
      {/* Header */}
      <header className="text-center">
        <motion.h2
          className="text-xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Us?
          </span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-md text-gray-300 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Our app is designed to revolutionize language learning with speed,
          skill, and fun at its core.
        </motion.p>
      </header>

      <motion.div
        animate={{ x: ["-100%", "100%", "-100%"] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 1, 2],
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="h-[1px] w-full"
        style={{
          background: `
      linear-gradient(
              to right, 
              rgba(0, 0, 0, 0) 0%, 
              #6366F1 33%, 
              #7c3aed 50%, 
              #6366F1 66%, 
              rgba(0, 0, 0, 0) 100%
            )
          `,
        }}
      ></motion.div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[90%] px-4">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="bg-[hsl(0,0%,12%)] p-6 rounded-lg shadow-lg flex flex-col"
          >
            <div
              className={`text-6xl p-2 w-fit rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}
            >
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
