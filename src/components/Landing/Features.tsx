"use client";
import {
  BoltIcon,
  CircleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-time Language Library",
    description:
      "Create learning modules from your daily recorded conversations. New lessons every day.",
    icon: <CircleStackIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Multilingual Edition of You",
    description:
      "Want to learn Chinese? We replicate your thoughts and speaking patterns in Chinese. Learning becomes familiar and comfortable, because after all, it's from you.",
    icon: <UserIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2" />,
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "10X Speed",
    description:
      "From the moment you start, we use data and adaptive AI algorithms to teach you the most important things to get you to the next stage. We use AI tutoring to check-in, and tweak your curriculum as you go.",
    icon: <BoltIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2" />,
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
          Our app revolutionizes language learning, increasing learning speed
          10x by continuously creating real-life data for you to learn from,
          based on a multilingual version of yourself.
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
