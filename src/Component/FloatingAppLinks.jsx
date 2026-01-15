import React, { useState } from "react";
// Using custom SVGs for icons
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Play Store Icon Component
const PlayStoreIcon = ({ size = 31 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 50 50" fill="currentColor">
    <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
  </svg>
);

// App Store Icon (provided SVG)
const AppStoreIcon = ({ size = 32 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 50 50" fill="currentColor">
    <path d="M36.009,5.074H13.991C9.025,5.074,5,9.099,5,14.064V36c0,4.965,4.025,8.991,8.991,8.991h22.019	C40.975,44.99,45,40.965,45,36V14.064C45,9.099,40.975,5.074,36.009,5.074z M16.171,36.755c-0.372,0.636-1.041,0.989-1.728,0.989	c-0.343,0-0.691-0.088-1.009-0.274c-0.953-0.559-1.273-1.784-0.714-2.736l0.291-0.497c0.515-0.162,1.057-0.25,1.614-0.234l0.005,0	c1.023,0.03,1.879,0.493,2.464,1.176L16.171,36.755z M27.413,32H12c-1.104,0-2-0.896-2-2s0.896-2,2-2h4.665l5.866-10.01	l-1.811-3.091c-0.559-0.953-0.239-2.178,0.714-2.737c0.953-0.558,2.178-0.239,2.737,0.714l0.678,1.157l0.678-1.157	c0.558-0.953,1.783-1.272,2.737-0.714c0.953,0.559,1.273,1.784,0.714,2.737L21.301,28h4.18c0.625,0.416,1.162,0.966,1.549,1.64	l0.003,0.004C27.473,30.409,27.57,31.237,27.413,32z M38,32h-2.623l1.602,2.733c0.559,0.952,0.239,2.178-0.714,2.736	c-0.318,0.187-0.666,0.274-1.009,0.274c-0.687,0-1.355-0.354-1.728-0.989l-6.151-10.497c-0.834-1.549-0.803-3.427,0.109-4.943	l0.826-1.373L33.033,28H38c1.104,0,2,0.896,2,2S39.104,32,38,32z"></path>
  </svg>
);

export default function FloatingAppLinks({ hideOnHeroMobile = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      name: "Android App",
      icon: <PlayStoreIcon size={31} />,
      color: "#FFD700", // yellow on hover
      href: "/app-tradenstocko_new.apk", // ✅ replace with actual app link
    },
    {
      name: "Desktop Web",
      icon: <AppStoreIcon size={34} />,
      color: "#FFD700",
      href: "https://www.tradenstocko.com/", // ✅ replace with actual web link
    },
  ];

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={`fixed top-1/2 right-0 -translate-y-1/2 flex-col items-end gap-3 z-50 
        ${hideOnHeroMobile ? 'hidden lg:flex' : 'flex'}`}
    >
      {links.map((link, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center rounded-l-2xl overflow-hidden transition-all duration-500 ease-in-out shadow-lg
              ${isHovered ? "w-52" : "w-16"} 
              ${!isHovered && "justify-end"}`}
            style={{
              backgroundColor: isHovered ? link.color : "#0B6177", // teal like your image
              color: "#fff",
            }}
          >
            {/* Text (visible on hover) */}
            <span
              className={`ml-4 text-base font-bold whitespace-nowrap transition-all duration-500 ease-in-out ${
                isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"
              }`}
            >
              {link.name}
            </span>

            {/* Icon — always visible */}
            <div className="flex items-center justify-center w-16 h-16 shrink-0">
              {link.icon}
            </div>
          </a>
        );
      })}
    </motion.div>
  );
}
