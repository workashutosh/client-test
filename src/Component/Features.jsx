import { 
  IndianRupee,
  Rocket, 
  UserCheck, 
  Headphones, 
  Lock, 
  Shield 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { title: "Lowest Brokerage", description: "We are providing lowest brokerage in the industry.", icon: IndianRupee },
    { title: "Instant Withdrawal", description: "Withdraw your funds instantly without any waiting period.", icon: Rocket },
    { title: "Easily Manageable Account", description: "Our hassle-free app is designed for smooth and easy trading.", icon: UserCheck },
    { title: "24x7 Call Support", description: "We’re here for you 24x7 — anytime you need assistance.", icon: Headphones },
    { title: "Bank-Grade Data Security", description: "Your data is protected with enterprise-level encryption and security.", icon: Lock },
    { title: "100% Trust & Transparency", description: "Trade confidently knowing your assets and information are fully secure.", icon: Shield },
  ];

  return (
    <section id="features" className="bg-gray-100 text-black py-24">
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why Choose <span className="text-[#1c71c7]">TNS Trading App?</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Empowering traders with real-time analytics, powerful tools, and seamless access to global markets — all in one easy-to-use platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,             // faster now
                delay: index * 0.1,        // small stagger
                ease: [0.4, 0, 0.2, 1],    // crisp and smooth
              }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg 
                        hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-5">
                {/* Icon Circle */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-[#1c71c7]"></div>
                  <feature.icon className="w-8 h-8 text-[#1c71c7] relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
