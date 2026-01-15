import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // eslint-disable-line
import assets from "../assets/assets";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    language: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otpError, setOtpError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpSentMessage, setOtpSentMessage] = useState("");

  const AUTH_TOKEN =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTc2OTU0MUI3QjY3QzQ5MSIsImlhdCI6MTc1OTcyNDI0NywiZXhwIjoxOTE3NDA0MjQ3fQ.PuwWxKPkSqhjFXSKPQmXX7kU40BPCXQLqM6PLWNP_p-iq6PdYSEJn--uOyB4vdY2Dr89NrtuMcU-WsI5ih5NoA";
  const CUSTOMER_ID = "C-769541B7B67C491";

  const phoneRegex = /^\d{10}$/;

  const languages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Punjabi",
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Puducherry", "Chandigarh", "Jammu and Kashmir",
    "Ladakh"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (successMessage) setSuccessMessage("");
    if (otpSentMessage) setOtpSentMessage("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid 10-digit Indian phone number is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.language) newErrors.language = "Please select a language";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async (phoneNumber) => {
    try {
      const url = "https://cpaas.messagecentral.com/verification/v3/send";
      const params = {
        countryCode: "91",
        flowType: "SMS",
        mobileNumber: phoneNumber,
        customerId: CUSTOMER_ID,
      };
      const response = await axios.post(url, null, {
        params,
        headers: { authToken: AUTH_TOKEN },
      });

      const id = response.data?.data?.verificationId;
      if (id) {
        setVerificationId(id);
        setShowOTPModal(true);
        setSubmitError("");
        setOtpSentMessage("OTP sent to your phone number!");
        toast.success("OTP sent successfully");
      } else {
        setSubmitError("Failed to send OTP");
        toast.error("Failed to send OTP");
      }
    } catch {
      setSubmitError("Failed to send OTP");
      toast.error("Failed to send OTP");
    }
  };

  const validateOTP = async (phoneNumber, verificationId, code) => {
    try {
      const response = await axios.get(
        "https://cpaas.messagecentral.com/verification/v3/validateOtp",
        {
          params: {
            countryCode: "91",
            mobileNumber: phoneNumber,
            verificationId,
            customerId: CUSTOMER_ID,
            code,
          },
          headers: { authToken: AUTH_TOKEN },
        }
      );

      const status = response.data?.data?.verificationStatus;
      if (
        response.data.responseCode === 200 &&
        status === "VERIFICATION_COMPLETED"
      ) {
        toast.success("OTP verified successfully!");
        await axios.post(
          "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
          {
            name: formData.name,
            phone: phoneNumber,
            email: formData.email,
            state: formData.state,
            language: formData.language,
          }
        );
        toast.success("Lead submitted successfully!");
        setSuccessMessage(
          "Successfully registered! Our team will reach out to you shortly to help you get started."
        );
        setShowOTPModal(false);
        setOtp("");
        setOtpError("");
        setOtpSentMessage("");
      } else {
        setOtpError("Invalid OTP. Please try again.");
        toast.error("OTP verification failed");
      }
    } catch {
      setOtpError("Failed to validate OTP. Please try again.");
      toast.error("OTP validation error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await sendOTP(formData.phone);
    setIsSubmitting(false);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      setOtpError("OTP must be 4 digits");
      return;
    }
    setOtpError("");
    validateOTP(formData.phone, verificationId, otp);
  };

  return (
    <div className="min-h-screen bg-[#eceae0] pb-12">
      {/* Contact Image Section */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="w-full mb-10 bg-[#0e0e0e]"
       >
         <img
           src={assets.contact}
           alt="Contact Us"
           className="w-full h-[35vh] md:h-[60vh] object-contain md:object-cover shadow-2xl"
         />
       </motion.div>

      {/* Contact Information Sections */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-6xl mx-6 md:mx-auto mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Office Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#1E4A44] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">Head Office</h3>
            </div>
            <div className="text-gray-600 text-sm space-y-2">
              <p className="mb-2">18-19 Queen Street, Aldermary House</p>
              <p className="mb-2">London, England, EC4N1TX</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="mb-2">IFZA Business Park - Building A2</p>
              <p className="mb-2">Dubai Silicon Oasis</p>
              <p>Dubai - United Arab Emirates</p>
            </div>
          </div>

          {/* Sales & Support Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out relative">
            <img
              src={assets.worldMap}
              alt="World Map"
              className="w-full h-full object-cover rounded-xl scale-150 translate-x-8"
            />
             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 p-3 flex items-center gap-2">
               <div className="w-8 h-8 bg-[#1E4A44] rounded-full flex items-center justify-center">
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                 </svg>
               </div>
               <h3 className="text-md font-bold text-black drop-shadow-lg w-full">Sales & Support</h3>
             </div>
          </div>

          {/* Mail Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#1E4A44] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">Contact Details</h3>
            </div>
            <div className="text-gray-600 text-sm space-y-4">
              <a
               href="mailto:support@tradenstocko.com"
               className="block hover:text-[#1E4A44]">
               Email: support@tradenstocko.com</a>
              <a
               href="tel:+44700183018"
               className="block hover:text-[#1E4A44]">
              Contact No.: +44 700 183 018</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="max-w-2xl mx-6 md:mx-auto bg-[#f8f8f4] rounded-xl shadow-lg p-6 md:p-8"
      >
        <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-[#4a4a2e] tracking-wide">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and we'll get back to you shortly
        </p>

        {submitError && (
          <p className="text-red-500 text-sm text-center mb-3">{submitError}</p>
        )}

        {otpSentMessage && !successMessage && (
          <p className="text-green-500 text-sm text-center mb-3">
            {otpSentMessage}
          </p>
        )}

        {successMessage ? (
          <p className="text-green-600 text-center font-semibold text-lg">
            {successMessage}
          </p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Inputs */}
              {[
                { name: "name", placeholder: "Full Name" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Contact (10 digits)" },
                
              ].map((input) => (
                <div key={input.name}>
                  <input
                    type={input.type || "text"}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    placeholder={input.placeholder}
                    disabled={isSubmitting}
                    className={`w-full border ${
                      errors[input.name] ? "border-red-400" : "border-gray-300"
                    } rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {errors[input.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[input.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* State Dropdown */}
              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full border ${
                    errors.state ? "border-red-400" : "border-gray-300"
                  } rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                >
                  <option value="">Select State</option>
                  {states.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>

              {/* Language Dropdown */}
              <div>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full border ${
                    errors.language ? "border-red-400" : "border-gray-300"
                  } rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                >
                  <option value="">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                {errors.language && (
                  <p className="text-red-500 text-xs mt-1">{errors.language}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-3 rounded-md hover:bg-[#3b3b27] transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>

            {/* OTP Modal */}
            {showOTPModal && (
              <div className="mt-6 bg-white border border-gray-200 p-5 rounded-xl shadow-md">
                <h3 className="text-blue-700 font-semibold text-center mb-3">
                  Enter OTP
                </h3>
                <form onSubmit={handleOTPSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter OTP"
                    className={`w-full border ${
                      otpError ? "border-red-400" : "border-gray-300"
                    } rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {otpError && (
                    <p className="text-red-500 text-xs text-center">
                      {otpError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 rounded-md hover:bg-[#3b3b27] transition duration-300"
                  >
                    Verify OTP
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowOTPModal(false)}
                    className="text-blue-600 text-xs text-center mt-2 hover:underline"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ContactUs;

