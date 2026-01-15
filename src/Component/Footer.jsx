import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import assets from "../assets/assets";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path, hash) => {
    if (location.pathname === path) {
      // Already on the page, just scroll to the section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the page with hash
      navigate(`${path}#${hash}`);
    }
  };
  return (
    <div className="bg-gray-100 font-poppins py-5 px-4 md:px-8">
      <footer
        className="max-w-7xl mx-auto text-gray-300 rounded-2xl border border-[#1f1f1f] shadow-[0_8px_25px_rgba(0,0,0,0.6)] p-12 md:p-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${assets.newlogonobg})`,
          backgroundSize: "50%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(17, 17, 17, 0.85)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          {/* === Desktop Layout === */}
          <div className="hidden md:grid grid-cols-4 gap-6 mb-12 md:ml-10">
            {/* About Section */}
            <div className="md:col-span-2 space-y-4 text-[15px] leading-relaxed text-gray-300 font-normal tracking-wide md:pr-8">
              <p>
                Step into the world of trading with{" "}
                <span className="text-white font-medium">TNS</span>, an advanced
                platform designed to equip you with everything you need to make
                informed trading decisions. Whether you're an experienced trader
                or a beginner, our intuitive interface, real-time data, and
                advanced tools give you the edge in fast-moving markets.
              </p>
              <p>
                Easily track stocks, analyze trends, and execute trades —
                anytime, anywhere. With powerful charting, customizable alerts,
                and secure transactions, TNS helps you manage your portfolio
                with precision and confidence.
              </p>
            </div>

            {/* Services */}
            <div className="md:ml-20">
              <h3 className="text-white font-semibold mb-4 text-[16px] tracking-wide">
                Services
              </h3>
              <ul className="space-y-2 text-[14px] text-gray-400 font-medium">

                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/trading-guidelines">Forex trading</Link>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/trading-guidelines">Crypto Trading </Link>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/trading-guidelines">Commodity trading</Link>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/trading-guidelines">Comex trading</Link>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/trading-guidelines">Lowest Brokerage</Link>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/trading-guidelines">Trading Terms</Link>
                </li>


              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:-ml-2">
              <h3 className="text-white font-semibold mb-4 text-[16px] tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-2 text-[14px] text-gray-400 font-medium">
                <li className="hover:text-white transition cursor-pointer">
                  <span onClick={() => handleNavigation('/', 'home')}>Home</span>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <span onClick={() => handleNavigation('/', 'aboutus')}>About</span>
                </li>
                <li className="hover:text-white transition">Careers</li>
                <li className="hover:text-white transition cursor-pointer">
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* === Mobile Layout === */}
          <div className="md:hidden flex flex-col gap-10 mb-10">
            {/* About Section */}
            <div className="text-[14px] leading-relaxed text-gray-300 tracking-wide space-y-3">
              <p>
                Step into the world of trading with{" "}
                <span className="text-white font-medium">TNS</span>, an advanced
                platform designed to equip you with everything you need to make
                informed trading decisions. Whether you're an experienced trader
                or a beginner, our intuitive interface, real-time data, and
                advanced tools give you the edge in fast-moving markets.
              </p>
              <p>
                Easily track stocks, analyze trends, and execute trades —
                anytime, anywhere. With powerful charting, customizable alerts,
                and secure transactions, TNS helps you manage your portfolio
                with precision and confidence.
              </p>
            </div>

            {/* Services + Quick Links side by side */}
            <div className="flex justify-between gap-10">
              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-[16px] tracking-wide">
                  Services
                </h3>
                <ul className="space-y-1 text-[14px] text-gray-400 font-medium">

                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/trading-guidelines">Forex trading</Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/trading-guidelines">Crypto Trading </Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/trading-guidelines">Commodity trading</Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/trading-guidelines">Comex trading</Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/trading-guidelines">Lowest Brokerage</Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/trading-guidelines">Trading Terms</Link>
                  </li>

                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-[16px] tracking-wide">
                  Quick Links
                </h3>
                <ul className="space-y-1 text-[14px] text-gray-400 font-medium">
                  <li className="hover:text-white transition cursor-pointer">
                    <span onClick={() => handleNavigation('/', 'home')}>Home</span>
                  </li>
                  <li className="hover:text-white transition cursor-pointer">
                    <span onClick={() => handleNavigation('/', 'aboutus')}>About</span>
                  </li>
                  <li className="hover:text-white transition">Careers</li>
                  <li className="hover:text-white transition cursor-pointer">
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider & Bottom Section */}
          <div className="border-t border-[#1f1f1f] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-light gap-4">
            {/* Left */}
            <p className="text-gray-500 font-light text-center md:text-left">
              © 2025 <span className="text-white font-medium">TNS Trading</span>. All rights reserved.
            </p>

            {/* Middle */}
            <div className="flex gap-5">
              <Link to="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>

            </div>

            {/* Right */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-md bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Instagram
                  className="text-gray-400 hover:text-white transition"
                  size={20}
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Facebook
                  className="text-gray-400 hover:text-white transition"
                  size={20}
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Twitter
                  className="text-gray-400 hover:text-white transition"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
