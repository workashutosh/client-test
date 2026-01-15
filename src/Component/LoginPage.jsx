import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // eslint-disable-line
import assets from "../assets/assets";
 
const LoginPage = () => {
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
  const [tempId, setTempId] = useState(null);

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

  const checkPhoneExists = async (phoneNumber, name) => {
    try {
      const response = await axios.post(
        "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
        {
          mode: "checkPhone",
          phone: phoneNumber,
          name: name,
        }
      );

      if (response.data?.status === "success" && response.data?.tempId) {
        setTempId(response.data.tempId);
        return true; // Phone is available
      }
      return false;
    } catch (error) {
      // Check if phone already exists (409 status)
      if (error.response?.status === 409) {
        setSubmitError(
          error.response?.data?.message || "Phone number already exists"
        );
        toast.error("This phone number is already registered");
        return false;
      }
      // Other errors
      setSubmitError("Failed to check phone number. Please try again.");
      toast.error("Error checking phone number");
      return false;
    }
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
      // First validate OTP
      const otpResponse = await axios.get(
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

      const status = otpResponse.data?.data?.verificationStatus;
      if (
        otpResponse.data.responseCode === 200 &&
        status === "VERIFICATION_COMPLETED"
      ) {
        toast.success("OTP verified successfully!");
        
        // Now submit the lead registration with proper mode and fields
        try {
          await axios.post(
            "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
            {
              mode: "submit",
              tempId: tempId,
              state: formData.state,
              language: formData.language, // Map language to interest as backend expects
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
        } catch (regError) {
          // Handle registration errors separately
          const errorMessage = regError.response?.data?.message || 
                              "Failed to complete registration. Please try again.";
          setOtpError(errorMessage);
          toast.error(errorMessage);
        }
      } else {
        setOtpError("Invalid OTP. Please try again.");
        toast.error("OTP verification failed");
      }
    } catch {
      // Handle OTP validation errors
      setOtpError("Failed to validate OTP. Please try again.");
      toast.error("OTP validation error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError("");
    
    // First check if phone number exists
    const phoneAvailable = await checkPhoneExists(formData.phone, formData.name);
    
    if (!phoneAvailable) {
      setIsSubmitting(false);
      return; // Error already displayed by checkPhoneExists
    }
    
    // If phone is available, send OTP
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
    
    <div id="register" className="min-h-screen bg-[#eceae0] flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">
      
      

      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="md:w-1/2 flex flex-col items-center justify-center text-center space-y-6"
      >
        {/* Add your left section content here */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a4a2e] leading-tight mb-4">
    Discover the Future of <span className="text-blue-700">Trading</span>
  </h1>

  {/* ✅ QR + Button Wrapper */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center"
  >
    {/* QR Code */}
    <a
      href="/app-tradenstocko_new.apk" // your real APK link
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={assets.QR}
        alt="QR Code"
        className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-lg shadow-lg 
                   hover:scale-105 transition-transform duration-300 border border-gray-300 bg-white"
      />
    </a>

    {/* Download App Button */}
    <a
      href="/app-tradenstocko_new.apk" // same APK link
      download
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-block bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md 
                 hover:bg-blue-800 transition duration-300"
    >
      Download App
    </a>
  </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}
      <div className="md:w-1/2 w-full bg-[#f8f8f4] rounded-xl shadow-lg p-6 md:p-7 transition duration-300">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-5 text-[#4a4a2e] tracking-wide drop-shadow-sm">
          Register
        </h2>

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
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
                    } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {errors[input.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[input.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* State Dropdown */}
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full border ${
                  errors.state ? "border-red-400" : "border-gray-300"
                } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
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

              {/* Language Dropdown */}
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full border ${
                  errors.language ? "border-red-400" : "border-gray-300"
                } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#3b3b27] transition duration-300 disabled:opacity-50"
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
      </div>
    </div>
  );
};

export default LoginPage;
