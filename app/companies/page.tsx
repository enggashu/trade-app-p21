import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Companies() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Companies
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            P21-backed companies are redefining industries, creating opportunities, and driving progress.
          </p>
          <div className="space-y-16">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <Image src="https://placehold.co/80x80?text=Logo+1" alt="Company Logo"
                   width={30} height={30} />
                <h3 className="text-xl font-semibold text-gray-800">TechNova Pvt Ltd</h3>
                <p className="text-gray-600 mt-2">
                  A leading software company providing AI-based solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <Image src="https://placehold.co/80x80?text=Logo+1" alt="Company Logo"
                  width={30} height={30} />
                <h3 className="text-xl font-semibold text-gray-800">TechNova Pvt Ltd</h3>
                <p className="text-gray-600 mt-2">
                  A leading software company providing AI-based solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <Image src="https://placehold.co/80x80?text=Logo+1" alt="Company Logo"
                  width={30} height={30} />
                <h3 className="text-xl font-semibold text-gray-800">TechNova Pvt Ltd</h3>
                <p className="text-gray-600 mt-2">
                  A leading software company providing AI-based solutions.
                </p>
              </div>


              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <Image src="https://placehold.co/80x80?text=Logo+1"  alt="Company Logo"
                  width={30} height={30} />
                <h3 className="text-xl font-semibold text-gray-800">TechNova Pvt Ltd</h3>
                <p className="text-gray-600 mt-2">
                  A leading software company providing AI-based solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <Image src="https://placehold.co/80x80?text=Logo+1" alt="Company Logo"
                  width={30} height={30} />
                <h3 className="text-xl font-semibold text-gray-800">TechNova Pvt Ltd</h3>
                <p className="text-gray-600 mt-2">
                  A leading software company providing AI-based solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <Image src="https://placehold.co/80x80?text=Logo+1" alt="Company Logo"
                  width={30} height={30} />
                <h3 className="text-xl font-semibold text-gray-800">TechNova Pvt Ltd</h3>
                <p className="text-gray-600 mt-2">
                  A leading software company providing AI-based solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

