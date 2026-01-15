import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import assets from "../assets/assets";

const steps = [
  {
    id: 1,
    title: "Scan & Download the App",
    desc: "Use the QR code or click the Download button below to get the TNS App on your device.",
    img: assets.A1,
    command: 'Click the "Download" button to install the app',
    mobile: { arrowTop: 85, arrowLeft: 50, textTop: 105, textLeft: 50 },
    desktop: { arrowTop: 85, arrowLeft: 50, textTop: 100, textLeft: 50 }
  },
  {
    id: 2,
    title: "Tap on Register",
    desc: "Click the Register button to proceed to the sign-up page where you'll enter your details.",
    img: assets.A2,
    command: 'Tap the "Register" button to continue',
    mobile: { arrowTop: 87, arrowLeft: 50, textTop: 108, textLeft: 50 },
    desktop: { arrowTop: 87, arrowLeft: 50, textTop: 100, textLeft: 50 }
  },
  {
    id: 3,
    title: "Enter Mobile Number & OTP",
    desc: "Provide your mobile number to receive an OTP, then enter the OTP to verify and continue.",
    img: assets.A3,
    command: 'Enter your mobile number and the OTP received',
    mobile: { arrowTop: 110, arrowLeft: 50, textTop: 110, textLeft: 50 },
    desktop: { arrowTop: 110, arrowLeft: 50, textTop: 110, textLeft: 50 }
  },
  {
    id: 4,
    title: "Complete Your Registration",
    desc: "Fill in all your details carefully and press the Submit button. Once done, tap 'Go Back to Login Page' to return to the login screen.",
    img: assets.A4,
    command: 'Fill the form and tap "Submit", then press "Go Back to Login"',
    mobile: { arrowTop: 90, arrowLeft: 50, textTop: 110, textLeft: 50 },
    desktop: { arrowTop: 90, arrowLeft: 50, textTop: 105, textLeft: 50 }
  },
  {
    id: 5,
    title: "Login to Your Account",
    desc: "Enter your registered username and password, then tap the Login button to access your account.",
    img: assets.A5,
    command: 'Enter credentials and tap "Login"',
    mobile: { arrowTop: 70, arrowLeft: 50, textTop: 80, textLeft: 50 },
    desktop: { arrowTop: 70, arrowLeft: 50, textTop: 80, textLeft: 50 }
  },
];

const InstallSteps = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, easing: "ease-in-out", once: true });

    const progressLine = document.getElementById("progress-line");
    const sections = steps.map((_, i) => document.getElementById(`step-${i + 1}`));
    const totalSteps = steps.length;

    const updateProgress = () => {
      let currentActiveIndex = -1;
      let maxProgress = 0;

      sections.forEach((sec, index) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in viewport
        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3) {
          currentActiveIndex = index;
          
          // Calculate progress within this step
          const sectionProgress = Math.max(0, Math.min(1, 
            (windowHeight * 0.6 - rect.top) / (rect.height * 0.5)
          ));
          
          maxProgress = Math.max(maxProgress, (index + sectionProgress) / totalSteps * 100);
        } else if (rect.bottom <= windowHeight * 0.3) {
          // Section has scrolled past
          currentActiveIndex = Math.max(currentActiveIndex, index);
          maxProgress = Math.max(maxProgress, (index + 1) / totalSteps * 100);
        }
      });

      // Ensure progress doesn't exceed 100%
      const fillPercent = Math.min(100, maxProgress);
      if (progressLine) progressLine.style.height = `${fillPercent}%`;

      sections.forEach((sec, i) => {
        const circle = sec?.querySelector(".circle");
        if (i <= currentActiveIndex) {
          circle?.classList.add("bg-blue-500", "border-blue-400");
          circle?.classList.remove("border-gray-500", "bg-[#022B3A]");
        } else {
          circle?.classList.remove("bg-blue-500", "border-blue-400");
          circle?.classList.add("border-gray-500", "bg-[#022B3A]");
        }
      });
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
     <section className="bg-[#022B3A] py-20 px-6 md:px-16 md:pt-32 text-white">
      <h2 className="text-4xl font-bold text-center mb-14">How to Install the App</h2>
      
      {/* How TradeStocko Works - Attractive Header */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="inline-block mb-4">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            How TradeStocko Works
          </h3>
        </div>
        <p className="text-gray-300 text-xl md:text-2xl font-light tracking-wide">
          Get started in just a few easy steps — <span className="text-blue-400 font-medium">no hassle, no delay.</span>
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full"></div>
      </div>

      <div className="relative flex flex-col items-start max-w-4xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-[22px] top-0 w-[4px] h-full bg-gray-700/40 rounded-full overflow-hidden">
          <div
            id="progress-line"
            className="absolute top-0 left-0 w-full h-0 bg-white transition-all duration-700 ease-in-out rounded-full"
          ></div>
        </div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            id={`step-${index + 1}`}
            className="relative mb-28 flex flex-col md:flex-row items-start gap-8"
          >
            {/* Step Indicator */}
            <div className="relative flex flex-col items-center flex-shrink-0 w-12">
              {index > 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-gray-700/40 -translate-y-full"></div>
              )}

              <div className="circle z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-500 bg-[#022B3A] text-white font-bold text-lg transition-all duration-300">
                {step.id.toString().padStart(2, "0")}
              </div>

              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-gray-700/40 translate-y-full"></div>
              )}
            </div>

            {/* Step Content */}
            <div
              className="bg-white/5 rounded-xl border border-gray-700/40 p-6 md:p-8 w-11/12 md:w-4/5 ml-8 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay={index * 150}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{step.desc}</p>

              {/* Image with arrow and command */}
              <div className="relative mt-2">
                <img
                  src={step.img}
                  alt={`Step ${step.id}`}
                  className="rounded-xl shadow-md w-full md:w-3/4 max-w-md mx-auto"
                  data-aos="zoom-in"
                />

                {/* Arrow */}
                <div
                  className="absolute w-0 h-12 border-l-2 border-blue-500"
                  style={{
                    top: `${isMobile ? step.mobile.arrowTop : step.desktop.arrowTop}%`,
                    left: `${isMobile ? step.mobile.arrowLeft : step.desktop.arrowLeft}%`,
                    transform: "translateX(-50%)"
                  }}
                ></div>

                {/* Command Text */}
                <div
                  className="absolute bg-blue-500 text-white text-sm px-3 py-1 rounded-md text-center"
                  style={{
                    top: `${isMobile ? step.mobile.textTop : step.desktop.textTop}%`,
                    left: `${isMobile ? step.mobile.textLeft : step.desktop.textLeft}%`,
                    transform: "translateX(-50%)"
                  }}
                >
                  {step.command}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstallSteps;