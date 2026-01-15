import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line
import qrCode from '../assets/qr-code.png';

const BetaFileSection = () => {
    return (
        <div className="relative py-9 md:py-15 pl-4 pr-4 md:pl-24 md:pr-8 bg-gradient-to-br from-[#eceae0] via-[#f5f3ed] to-[#eceae0] overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-700 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4a4a2e] rounded-full blur-3xl"></div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto items-center md:ml-0">
                {/* Left Panel - Text with Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center justify-center md:justify-start relative z-10"
                >
                    <div className="space-y-4">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold shadow-sm">
                                <span className="w-2 h-2 bg-blue-700 rounded-full mr-2 animate-pulse"></span>
                                New Release
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4a4a2e] leading-tight text-center md:text-left">
                            Try our <span className="text-blue-700 relative inline-block">
                                beta version
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-0 left-0 h-1 bg-blue-700"
                                    style={{ transform: 'skewX(-12deg)' }}
                                ></motion.span>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-600 text-lg md:text-xl mt-4 text-center md:text-left max-w-md"
                        >
                            Experience cutting-edge features before the official launch. Join our beta community today!
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Panel - QR Code and Button with Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center justify-center relative z-10 md:translate-x-[30%]"
                >
                    {/* QR Code Container with Glow Effect */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative mb-6"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-blue-700 rounded-2xl blur-2xl opacity-20 -z-10"></div>
                        
                        <a
                            href="/app_beta_version.apk" 
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="relative bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                                <img
                                    src={qrCode}
                                    alt="QR Code"
                                    className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-lg"
                                />
                                {/* Corner Accents */}
                                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-blue-700 rounded-tl-lg"></div>
                                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-blue-700 rounded-tr-lg"></div>
                                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-700 rounded-bl-lg"></div>
                                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-700 rounded-br-lg"></div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Download Button with Enhanced Styling */}
                    <motion.a
                        href="/app_beta_version.apk"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                        {/* Button Shine Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                            animate={{
                                x: ['-100%', '200%'],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        ></motion.div>
                        
                        <span className="relative z-10">Download the app now</span>
                        <motion.svg
                            className="w-5 h-5 relative z-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default BetaFileSection;

