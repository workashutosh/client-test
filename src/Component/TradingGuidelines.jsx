export default function TradingGuidelines() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Gradient Banner Heading */}
      <div className="w-full bg-gradient-to-r from-[#0B6177] to-[#094F64] py-26 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Trading & Funding Guidelines</h1>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto p-8 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">







          {/* Fund Adding Guidelines */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fund Adding Guidelines</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Minimum fund addition: ₹1,000 or more.</li>
              <li className="text-gray-800 text-lg font-medium">• Trial transfers such as ₹1, ₹5, or ₹100 are not accepted.</li>
              <li className="text-gray-800 text-lg font-medium">• Pay-in approval may take 3–4 minutes or more depending on the working days.</li>
              <li className="text-gray-800 text-lg font-medium">• Always verify the current pay-in details before initiating any transfer.</li>
              <li className="text-gray-800 text-lg font-medium">• Bank/UPI details may change without prior notice—check each time before depositing.</li>
              <li className="text-gray-800 text-lg font-medium">• Mistakes during fund transfers (incorrect UPI/Bank entry) are solely the trader's responsibility.</li>
            </ul>
          </div>

          {/* Withdrawal / Payout Guidelines */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Withdrawal / Payout Guidelines</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Minimum withdrawal amount: ₹1,000.</li>
              <li className="text-gray-800 text-lg font-medium">• Withdrawal bank account must be in the name of the trading account holder.</li>
              <li className="text-gray-800 text-lg font-medium">• Requests using bank accounts of family or others will be rejected.</li>
              <li className="text-gray-800 text-lg font-medium">• For example, if the trading account is in the name of Pankaj Chawala, the payout will only be made to Pankaj Chawala's bank account.</li>
              <li className="text-gray-800 text-lg font-medium">• Payout processing time: 30 minutes to 4 hours.</li>
              <li className="text-gray-800 text-lg font-medium">• Withdrawal timings: 9:00 AM – 6:00 PM. Requests after 6:00 PM will be processed on the next working day.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
