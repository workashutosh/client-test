import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Visit TradeStocko",
    description: "Explore the platform and discover the future of trading.",
  },
  {
    number: "02",
    title: "Download the App",
    description: "Get the TradeStocko app for instant access to the markets.",
  },
  {
    number: "03",
    title: "Register Your Account",
    description: "Sign up quickly with your basic details — no paperwork required.",
  },
  {
    number: "04",
    title: "Start Trading",
    description: "Fund your account and begin trading seamlessly anytime, anywhere.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="aboutus"
      className="bg-gray-100 py-24 flex flex-col items-center justify-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-black mb-3 text-center"
      >
        How <span className="text-[#1c71c7]">TradeStocko</span> Works
      </motion.h2>

      <p className="text-gray-700 text-center mb-14 max-w-md">
        Get started in just a few easy steps — no hassle, no delay.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 md:gap-y-16 gap-x-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative bg-white text-center px-8 pt-16 pb-12 rounded-[1.8rem] shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.25)] transition-all duration-500"
            style={{
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
          >
            {/* STEP Circle */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-gray-600 mb-1">
                  STEP
                </span>
                <div className="bg-[#1c71c7] text-white font-bold rounded-full w-14 h-14 flex items-center justify-center text-lg border-4  shadow-lg">
                  {step.number}
                </div>
              </div>
            </div>

            {/* Card Content */}
            <h3 className="mt-10 text-lg font-bold text-black">
              {step.title}
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
