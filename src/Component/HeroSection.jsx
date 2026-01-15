import assets from "../assets/assets";
import { Users, CheckCircle } from "lucide-react";
import TraderUsersBadge from "./TraderUsersBadge";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative flex items-start justify-center min-h-screen bg-gray-100 overflow-hidden pt-32 lg:pt-40 "
    >
      {/* Background Logo with Blur */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain blur-sm opacity-30"
        style={{
          backgroundImage: `url(${assets.newlogonobg})`,
          backgroundPosition: "40% 40%", // move image a bit to the right
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-[1450px] px-4 sm:px-6 md:px-8 z-10 gap-10">

        {/* 🟡 Left Side - Text with animation */}
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
          className="flex-1 text-left space-y-5 lg:space-y-8"
        >
          {/* Badge + Sub-badge */}
          <div className="space-y-1">
            <h4 className="text-[#0780f7] font-bold text-2xl uppercase tracking-wider">
              BEST TRADING APP
            </h4>
            <p className="text-gray-800 text-lg font-semibold">FX | Crypto | Commodity | Comex</p>
          </div>

          {/* Main Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Enjoy Maximum Profits with
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#289b48] leading-tight">
              Lowest BROKERAGE
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-[#0780f7] font-bold text-xl">
            Get Free Account for TNS Trading App!
          </p>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg sm:max-w-full">
            <span className="font-bold text-black">
              TNS - Your All-in-One Trading App
            </span>
            <br />
            Your trading journey deserves the right partner. Unlock your potential
            with the TNS Trading app, equipped with professional tools and
            lightning-fast speed for seamless online trading.
          </p>

          {/* Stats */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap items-center space-x-0 sm:space-x-6 mt-6 gap-4">
            {/* Registered Users */}
            <div className="flex items-center space-x-2 flex-1 sm:flex-none">
              <span className="bg-[#0B6177] text-white rounded-full p-2">
                <Users size={20} />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B6177]">500K</h3>
                <p className="text-sm sm:text-base text-[#0B6177]">Registered Users</p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex items-center space-x-2 flex-1 sm:flex-none">
              <span className="bg-[#0B6177] text-white rounded-full p-2">
                <CheckCircle size={20} />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B6177]">99%</h3>
                <p className="text-sm sm:text-base text-[#0B6177]">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* ✅ Mobile Button + Badge */}
          <div className="mt-6 flex items-center space-x-3 lg:hidden">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate("/install-steps");
              }}
              className="group relative overflow-hidden bg-[#0B6177] text-white px-6 py-3 rounded-lg font-semibold inline-block"
            >
              <span className="absolute bottom-0 left-0 w-full h-full bg-[#094F64] text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Start Now <span className="ml-2 ">→</span>
              </span>
            </button>

            <div className="scale-75">
              <TraderUsersBadge small />
            </div>
          </div>

          {/* ✅ Desktop Button */}
          <div className="mt-8 hidden lg:flex items-center space-x-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate("/install-steps");
              }}
              className="group relative overflow-hidden bg-[#0B6177] text-white px-8 py-3 rounded-lg font-semibold inline-block shadow-md hover:shadow-lg transition-all"
            >
              <span className="absolute bottom-0 left-0 w-full h-full bg-[#094F64] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Start Now <span className="ml-2">→</span>
              </span>
            </button>

            {/* <TraderUsersBadge /> */}
          </div>

        </MotionDiv>

        {/* 🟢 Trader Badge Animation */}
        <MotionDiv
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="hidden lg:block absolute top-28 left-[58%] -translate-x-1/2 z-20"
        >
          <TraderUsersBadge />
        </MotionDiv>

        {/* 🔵 Right Side - Girl Image */}
        <div className="flex-1 justify-center lg:flex lg:justify-end hidden">
          <img
            src={assets.girl}
            alt="Girl Illustration"
            className="w-full max-w-full object-cover"
            style={{ maxWidth: "550px" }}
          />
        </div>

      </div>
    </section>
  );
}
