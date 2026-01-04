import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Values() {
  const values = [
    {
      number: '1',
      title: 'Conviction Over Volume',
      description: 'We believe in doing fewer things, better. We invest selectively, with high conviction, and commit our time, capital, and energy where we can genuinely make a difference.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '2',
      title: 'Build Before You Scale',
      description: 'Growth without foundations is fragile. We believe strong businesses are built on clear strategy, sound governance, and disciplined execution—before expansion begins.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '3',
      title: 'Capital Is a Responsibility',
      description: 'Capital is not fuel to be burned; it is a tool to be deployed thoughtfully. We invest with intent, structure deals carefully, and align incentives for long-term value creation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '4',
      title: 'Partnership, Not Passivity',
      description: "We don't believe in passive capital or distant advice. We work side-by-side with founders—solving problems, making hard calls, and staying accountable through the journey.",
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '5',
      title: 'Real Markets, Real Outcomes',
      description: 'We believe in execution, not optics. Expansion should lead to customers, partnerships, and revenue—not just presence or announcements.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '6',
      title: 'Governance Enables Freedom',
      description: "Strong governance doesn't slow companies down—it enables them to scale with confidence. We believe institutional discipline is a competitive advantage.",
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '7',
      title: 'Enduring Value Matters',
      description: 'We are not driven by short-term milestones alone. We believe in building businesses that last—regionally significant, institutionally credible, and built to endure.',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-white">
              Our Values & Beliefs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At P21 Ventures, our values shape how we invest, how we build, and how we partner.
              They guide every decision—from the companies we back to the way we show up for
              founders.
            </p>
          </div>

          {/* Values Grid */}
          <div className="space-y-16">
            {values.map((value, index) => (
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
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                      {value.number}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      {value.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {value.description}
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

