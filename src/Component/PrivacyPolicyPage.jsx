export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Gradient Banner Heading */}
      <div className="w-full bg-gradient-to-r from-[#0B6177] to-[#094F64] py-26 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto p-8 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <div>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              At TradeNStocko, your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our services. This policy applies solely to our online activities and is valid for all visitors to our site. For any questions, please contact us at support@TNS.live.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Personal Information: Name, email, phone number, and other details collected during registration or interaction.</li>
              <li className="text-gray-800 text-lg font-medium">• Financial Information: Bank account or card details necessary for transactions.</li>
              <li className="text-gray-800 text-lg font-medium">• Usage Information: IP address, browser type, device details, and how you interact with our site.</li>
            </ul>
          </div>

          {/* 2. Use of Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use of Information</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• To provide and maintain our services</li>
              <li className="text-gray-800 text-lg font-medium">• To enhance user experience on our website</li>
              <li className="text-gray-800 text-lg font-medium">• To send marketing and promotional emails (with your consent)</li>
            </ul>
          </div>

          {/* 3. Disclosure of Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Disclosure of Information</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Shared with trusted third-party service providers under strict confidentiality</li>
              <li className="text-gray-800 text-lg font-medium">• Disclosed when legally required or to protect our rights and user safety</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              We employ industry-standard security measures to safeguard your data. However, no system is entirely secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          {/* 5. Your Choices */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Choices</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Access, correct, or delete your personal information through your account or by contacting us</li>
              <li className="text-gray-800 text-lg font-medium">• Opt out of marketing communications via unsubscribe links or direct contact</li>
            </ul>
          </div>

          {/* 6. Changes to This Privacy Policy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              We may update this policy at any time. Updates will be posted here with the revised date.
            </p>
          </div>

          {/* 7. How We Use Your Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. How We Use Your Information</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• To operate and improve our site and services</li>
              <li className="text-gray-800 text-lg font-medium">• To personalize your user experience</li>
              <li className="text-gray-800 text-lg font-medium">• To analyze site usage</li>
              <li className="text-gray-800 text-lg font-medium">• To develop new features</li>
              <li className="text-gray-800 text-lg font-medium">• To communicate updates, offers, and transactional information</li>
              <li className="text-gray-800 text-lg font-medium">• To detect and prevent fraud</li>
            </ul>
          </div>

          {/* 8. Contact Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contact Us</h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              For any privacy-related questions or concerns, email us at support@TNS.live.
            </p>
          </div>

          {/* 9. Consent */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Consent</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              By using our website, you consent to this Privacy Policy and agree to its terms.
            </p>
          </div>

          {/* 10. Advertising Partners' Privacy Policies */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Advertising Partners' Privacy Policies</h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              Third-party advertisers on our site may use cookies, JavaScript, or Web Beacons to personalize content and measure ad effectiveness. We do not control their cookies; please review their privacy policies directly.
            </p>
          </div>

          {/* 11. GDPR Data Protection Rights */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. GDPR Data Protection Rights</h2>
            <p className="text-gray-800 text-lg font-medium mb-3">You have rights including:</p>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Accessing your data</li>
              <li className="text-gray-800 text-lg font-medium">• Rectifying inaccurate or incomplete data</li>
              <li className="text-gray-800 text-lg font-medium">• Requesting deletion of your data</li>
              <li className="text-gray-800 text-lg font-medium">• Restricting or objecting to data processing</li>
              <li className="text-gray-800 text-lg font-medium">• Data portability requests</li>
            </ul>
            <p className="text-gray-800 text-lg font-medium mt-3">We will respond to requests within one month.</p>
          </div>

          {/* 12. Children's Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Children's Information</h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              We do not knowingly collect data from children under 13. If you believe we have such data, please contact us for removal.
            </p>
          </div>

          {/* 13. Updates to This Policy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Updates to This Policy</h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              We may revise this policy periodically. Changes will be posted here and take effect immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
