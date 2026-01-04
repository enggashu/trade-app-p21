import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Sectors() {
  const sectors = [
    {
      number: '1',
      title: 'Technology & Digital Platforms',
      description: 'We back technology-led businesses that have proven demand and are ready for regional scale.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '2',
      title: 'Digital Infrastructure & Compute',
      description: 'We focus on infrastructure that underpins the digital economy.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '3',
      title: 'Sustainability, Circularity & Climate Solutions',
      description: 'We invest in commercially viable sustainability businesses—not experimental science.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '4',
      title: 'Healthcare & Essential Services',
      description: 'We focus on scalable healthcare and essential service models with clear operational leverage.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '5',
      title: 'Gaming, Media & Digital IP Platforms',
      description: 'We selectively back platforms at the intersection of content, technology, and monetisation.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Sectors We Focus On
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            P21 Ventures invests in and builds post-revenue companies operating in sectors
            where cross-border expansion, institutional capital, and operational discipline create
            outsized value.
            <br></br>
            Our sector focus reflects where we can actively contribute — as investors, venture
            builders, and execution partners.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="space-y-16">
            {sectors.map((approach, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div
                  className={`relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-md ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <Image
                    src={approach.image}
                    alt={approach.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                      {approach.number}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      {approach.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

