import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Approach() {
  const approaches = [
    {
      number: '1',
      title: 'Start with What Works — Selective by Design',
      description: 'We work with a small number of post-revenue companies where we have high conviction. These are businesses with real customers, real revenue, and real potential. If we invest, we commit deeply — time, capital, and operating effort, not just advice.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '2',
      title: 'Build Before We Scale — Discipline First',
      description: 'Before pushing into new markets, we strengthen the core. That means sharpening business models and unit economics, aligning leadership, and installing the governance and operating cadence required for institutional growth. Strong foundations enable sustainable scale.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '3',
      title: 'Hands-On Venture Building — Operator-Led',
      description: 'We co-build alongside founders, rolling up our sleeves to solve real problems, make tough calls, and accelerate execution. This is operator-led venture building, not classroom consulting — focused on outcomes, not theory.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '4',
      title: 'Capital with Intent — Aligned to Execution',
      description: 'We invest our own capital and co-invest with aligned partners. Capital is structured to support long-term value creation, ensuring companies receive not just funding, but the capability, structure, and guidance needed to deploy it effectively.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '5',
      title: 'Cross-Border Execution — Bridging Thailand and the GCC',
      description: 'Thailand and the GCC offer powerful, complementary strengths — but navigating regulatory, cultural, and commercial differences is complex. We act as the strategic and operational bridge, enabling confident expansion beyond home markets, starting with the Thailand–Gulf corridor.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '6',
      title: 'Building Regional Champions — Long-Term Partnership',
      description: 'Our focus is the missing middle: strong companies that have outgrown the startup ecosystem but are not yet ready for private equity. We stay involved well beyond the first cheque, helping founders build institutionally credible, regionally significant enterprises that endure.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      number: '7',
      title: 'Growth with Integrity — Built to Last',
      description: 'We believe in building businesses that last. Our approach emphasizes sustainable value creation, strategic clarity, and long-term partnerships with founders and investors — aligned around growth that compounds over time.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
              Our Approach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At P21 Ventures, we take a disciplined, hands-on approach to scaling companies.
              We partner early with founders to understand the business, identify what will unlock
              the next phase of growth, and align capital, governance, and execution around a clear
              scale thesis.
            </p>
          </div>

          {/* Approach Grid */}
          <div className="space-y-16">
            {approaches.map((approach, index) => (
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

