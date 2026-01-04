import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function MarketGap() {
  const gaps = [
    {
      number: '1',
      title: 'Cross-Border Growth',
      description: 'We unlock cross-border growth by building, operating, and funding companies to scale confidently between Thailand and the GCC. Instead of simply facilitating expansion, we engineer it — with the structure, capital, and on-ground execution needed to win in both regions.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '2',
      title: 'Disciplined Growth',
      description: 'We bring discipline to growth with strong governance, aligned capital, and hands-on venture-building expertise. Founders get the clarity, momentum, and operational muscle required to move from promising to powerful.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '3',
      title: 'Investment-Ready Transformation',
      description: 'We transform businesses into credible, investment-ready enterprises that meet the expectations of leading institutional investors. From financial architecture to commercial readiness, we help companies graduate into high-value, institutionally investable assets.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '4',
      title: 'Thailand–GCC Corridor',
      description: 'We bridge the Thailand–GCC corridor with strategic insight and real operational capability. Different markets, cultures, and regulations — we connect them, enabling seamless expansion and accelerated value creation.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '5',
      title: 'The Missing Middle',
      description: 'We focus on the "missing middle" where strong companies exist — but lack the platform to scale. This overlooked segment is where we create the most impact, turning solid businesses into regional champions.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Market Gap We Address
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Identifying and solving the critical gaps that prevent strong companies from achieving regional scale and institutional credibility.
            </p>
          </div>

          {/* Market Gaps Grid */}
          <div className="space-y-16">
            {gaps.map((gap, index) => (
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
                    src={gap.image}
                    alt={gap.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                      {gap.number}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      {gap.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {gap.description}
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

