import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Analytics() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Analytics
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Deep insights and analytics to inform your trading decisions.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

