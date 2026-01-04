import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Platform() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Trading Platform
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Experience professional-grade trading with our comprehensive platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Advanced Charts</h2>
              <p className="text-gray-600">
                Real-time charting with technical indicators and drawing tools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
              <p className="text-gray-600">
                Execute trades with precision using advanced order types.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

