export default function Features() {
  const features = [
    {
      title: 'Real-Time Analytics',
      description: 'Advanced market analytics with millisecond-level data processing and visualization.',
      icon: '📊',
    },
    {
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms analyze market patterns and provide actionable trading signals.',
      icon: '🤖',
    },
    {
      title: 'Institutional Execution',
      description: 'Professional-grade order execution with minimal slippage and optimal fill prices.',
      icon: '⚡',
    },
    {
      title: 'Portfolio Management',
      description: 'Comprehensive portfolio tracking, risk analysis, and performance optimization tools.',
      icon: '💼',
    },
    {
      title: 'Multi-Asset Trading',
      description: 'Trade stocks, options, futures, crypto, and more from a single unified platform.',
      icon: '🌐',
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk controls, position sizing, and automated stop-loss mechanisms.',
      icon: '🛡️',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to trade professionally, all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

