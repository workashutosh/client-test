export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Gradient Banner Heading */}
      <div className="w-full bg-gradient-to-r from-[#0B6177] to-[#094F64] py-26 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Disclaimer</h1>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto p-8 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Disclaimer Content */}
          <div>
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              <strong>Disclaimer:</strong> The information provided by TradeNStocko is for informational purposes only and does not constitute financial advice or recommendations regarding any trades, investments, or decisions. This content is generic and not tailored to individual clients or traders.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed font-medium mt-4">
              We strongly advise consulting a qualified financial advisor before making any investment decisions. Trading involves significant risk, including the potential loss of your capital. Past market performance does not guarantee future results.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed font-medium mt-4">
              All investments are made at your own risk, and you bear full responsibility for your decisions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
