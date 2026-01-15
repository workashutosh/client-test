import React from "react";

export default function ScrollingText() {
  const scrollText = (
    <>
      <span> Trade Smart • </span>
      <span> Lowest Brokerage • </span>
      <span> Fast Withdrawals • </span>
      <span> 24/7 Support • </span>
    </>
  );

  return (
    <section className="relative flex items-center justify-center h-[180px] bg-gray-100 -mt-6 overflow-hidden">
      {/* Divider line above section */}
      <div className="absolute top-6 left-0 w-full h-[2px] bg-black/20"></div>

      <div className="scrolling-wrapper">
        <div className="scrolling-content text-[60px] md:text-[70px] font-extrabold">
          {scrollText}
          {scrollText}
          {scrollText}
        </div>
      </div>
    </section>
  );
}
