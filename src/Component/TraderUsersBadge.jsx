import React, { useEffect, useState } from "react";

const TraderUsersBadge = ({ small = false }) => {
  const [count, setCount] = useState(1);
  const target = 75;
  const duration = 2000;
  const userImages = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/65.jpg",
    "https://randomuser.me/api/portraits/men/20.jpg",
  ];

  useEffect(() => {
    let start = 1;
    const end = target;
    const incrementTimer = Math.floor(duration / (end - start));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTimer);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`inline-flex items-center bg-gray-100 rounded-full shadow-md cursor-default select-none ${
        small
          ? "px-4 py-2.5 scale-90" // much smaller padding
          : "px-6 py-3 scale-100"
      }`}
    >
      {/* Avatar Images */}
      <div className={`flex ${small ? "-space-x-2" : "-space-x-3"}`}>
        {userImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`user-${index}`}
            className={`rounded-full border-2 border-white object-cover ${
              small ? "w-6 h-6" : "w-10 h-10"
            }`}
          />
        ))}
      </div>

      {/* Counter + Text */}
      <div className={small ? "ml-2" : "ml-4"}>
        <div
          className={`font-bold text-gray-800 leading-none ${
            small ? "text-base" : "text-3xl"
          }`}
        >
          {count}k+
        </div>
        <div
          className={`text-gray-500 ${
            small ? "text-[10px]" : "text-sm"
          }`}
        >
          Trader Users
        </div>
      </div>
    </div>
  );
};

export default TraderUsersBadge;
