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
      "Most language courses take years to get to fluency. Our AI designs the most efficient path to your target proficiency, reducing acquisition time by up to 10x",
    icon: <BoltIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Skill",
    description:
      "For most of us, we learn a language for one reason: communication. Our curriculum enables you to discuss the topics important to you, whether that's physics, work, or the last season of Love is Blind",
    icon: <CpuChipIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2" />,
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "Fun",
    description:
      "Language learning should be fun, and we mean it. The faster you can begin thinking in a new language, the more you'll build good habits. We use gamification and a supportive community of learners to help you succeed",
    icon: <FaceSmileIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2" />,
    gradient: "from-pink-400 via-purple-500 to-indigo-500",
  },
];

export default function () {
  return (
    <section className="relative flex flex-col gap-12 items-center h-screen justify-center bg-[hsl(0,0%,6%)] p-4 text-white py-20">
      {/* Header */}
      <header className="text-center">
        <motion.h2
          className="text-xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Us?
          </span>
        </motion.h2>
        <motion.p
          className="text-sm md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          We{"'"}ve invented a new way to learn languages, using AI to go beyond
          immersion
        </motion.p>
      </header>

      <div className="items-center justify-center w-2/3 overflow-hidden hidden md:flex">
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
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 md:max-w-[90%] px-4">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="bg-[hsl(0,0%,12%)] p-6 rounded-lg shadow-lg flex flex-col gap-4"
          >
            <div className="flex items-center md:items-start flex-row gap-4 md:flex-col">
              <div
                className={`p-2 w-fit rounded-2xl bg-gradient-to-r ${feature.gradient} text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="text-base md:text-2xl font-semibold">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
