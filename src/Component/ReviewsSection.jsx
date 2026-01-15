import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import assets from "../assets/assets";

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allReviews = [
    {
      quote:
        "I love how smooth and reliable TradeNstocko is. The fastest payouts in the market ensure I get my funds instantly. Plus, their 24/7 support is always there to help. A must-try for every trader!",
      author: "Anurag Yadav",
      designation: "Founder, Alpha Capital",
      image: assets.F1,
      rating: 5,
    },
    {
      quote:
        "Tradenstocko is hands down the best platform I’ve used! From multiple trading options to a user-friendly interface, everything is top-notch. Trading has never been this easy and profitable!",
      author: "Sakshi Bhise",
      designation: "Financial Analyst, FutureGrow",
      image: assets.F3,
      rating: 5,
    },
    {
      quote:
        "Trading with TNS has completely changed my results — smooth UI, excellent insights, and consistent profits!",
      author: "Rahul Mehta",
      designation: "Professional Trader",
      image: assets.F2,
      rating: 5,
    },
    {
      quote:
        "The platform is fast and reliable. The analytics tools helped me refine my trading strategy massively.",
      author: "Priya Sharma",
      designation: "Full-Time Trader",
      image: assets.F4,
      rating: 4,
    },
  ];

  const traderReviews = [
    {
      quote:
        "Trading with TNS has completely changed my results — smooth UI, excellent insights, and consistent profits!",
      author: "Rahul Mehta",
      designation: "Professional Trader",
      image: assets.T1,
      rating: 5,
    },
    {
      quote:
        "The platform is fast and reliable. The analytics tools helped me refine my trading strategy massively.",
      author: "Priya Sharma",
      designation: "Full-Time Trader",
      image: assets.T2,
      rating: 4,
    },
    {
      quote:
        "Hands down one of the best trading apps out there — support is quick and the execution is flawless.",
      author: "Vikram Singh",
      designation: "Swing Trader",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
  ];

  const reviews = activeTab === "all" ? allReviews : traderReviews;

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const momentumID = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.scrollBehavior = "auto";
    container.style.touchAction = "pan-y";

    const onPointerDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      scrollLeft.current = container.scrollLeft;
      lastX.current = e.clientX;
      velocity.current = 0;
      if (momentumID.current) cancelAnimationFrame(momentumID.current);
      container.classList.add("grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const x = e.clientX;
      const dx = x - lastX.current;
      lastX.current = x;
      velocity.current = dx;
      const walk = x - startX.current;
      container.scrollLeft = scrollLeft.current - walk;
    };

    const onPointerUp = () => {
      isDragging.current = false;
      container.classList.remove("grabbing");

      const deceleration = 0.92; // slightly faster momentum
      const animate = () => {
        if (Math.abs(velocity.current) > 0.5) {
          container.scrollLeft -= velocity.current;
          velocity.current *= deceleration;
          momentumID.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(momentumID.current);
        }
      };
      momentumID.current = requestAnimationFrame(animate);
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [activeTab]);

  return (
    <div className="reviews-section bg-gray-100 py-10 px-3 sm:px-6 md:px-10">
      {/* === Heading === */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3">
          Real feedback from real users.
        </p>
      </div>

      {/* === Tabs === */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full shadow-md p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#094F64] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setActiveTab("traders")}
            className={`px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === "traders"
                ? "bg-[#094F64] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Trader Reviews
          </button>
        </div>
      </div>

      {/* === Review Cards === */}
      <div
        ref={containerRef}
        key={activeTab}
        className="reviews-container flex gap-5 sm:gap-6 md:gap-10 px-2 sm:px-4 md:px-10 overflow-x-auto select-none cursor-grab active:cursor-grabbing"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-card min-w-[85%] sm:min-w-[350px] md:min-w-[500px] h-auto bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <p className="text-base sm:text-lg md:text-2xl text-gray-800 font-semibold mb-6 leading-relaxed">
              “{review.quote}”
            </p>

            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.author}
                className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover border-4 border-gray-100"
              />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-bold text-base sm:text-lg text-gray-900">
                    {review.author}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm sm:text-base font-medium mt-1">
                  {review.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .reviews-container::-webkit-scrollbar { display: none; }
        .reviews-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; }
        .reviews-container.grabbing { cursor: grabbing !important; }
      `}</style>
    </div>
  );
};

export default ReviewsSection;
