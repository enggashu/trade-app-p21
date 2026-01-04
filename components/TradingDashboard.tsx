export default function TradingDashboard() {
  const positions = [
    { symbol: 'AAPL', quantity: 100, price: 175.50, change: 2.3 },
    { symbol: 'MSFT', quantity: 50, price: 378.20, change: -1.2 },
    { symbol: 'GOOGL', quantity: 25, price: 142.80, change: 0.8 },
  ]

  const marketData = [
    { symbol: 'SPY', price: 445.23, change: 0.45 },
    { symbol: 'QQQ', price: 378.91, change: -0.23 },
    { symbol: 'DIA', price: 342.67, change: 0.67 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Trading Dashboard
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Summary */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Portfolio Overview
            </h3>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <div className="font-semibold text-gray-900">
                      {position.symbol}
                    </div>
                    <div className="text-sm text-gray-600">
                      {position.quantity} shares
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      ${position.price.toFixed(2)}
                    </div>
                    <div
                      className={`text-sm ${
                        position.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {position.change >= 0 ? '+' : ''}
                      {position.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Data */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Market Indices
            </h3>
            <div className="space-y-4">
              {marketData.map((market, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
                >
                  <div className="font-semibold text-gray-900">
                    {market.symbol}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      ${market.price.toFixed(2)}
                    </div>
                    <div
                      className={`text-sm ${
                        market.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {market.change >= 0 ? '+' : ''}
                      {market.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Price Chart
          </h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would appear here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

