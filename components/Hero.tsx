import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            TWO REGIONS, ONE VISION
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Headquartered in Bangkok, P21 Ventures is a Thailand–Gulf focused scale-up studio and
              co-investment platform for companies ready to grow beyond their home markets.
            </p>
            <p>
              Most companies don't fail because the product is bad. They stall because
              commercialisation and scale are hard.
            </p>
            <p>
              We invest in post-revenue businesses, co-invest alongside aligned partners, and co-
              build with founders to commercialise products, strengthen operating foundations, and
              unlock cross-border expansion across ASEAN and the GCC.
            </p>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Bangkok skyline representing Thailand-Gulf region"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
          <p>
            Our work is hands-on—fixing what's broken, scaling what works, and preparing companies
            for institutional capital and long-term growth.
          </p>
          <p className="text-2xl font-semibold text-gray-800">
            We don't chase ideas. We build real companies with real traction into regionally
            significant enterprises.
          </p>
        </div>
      </div>
    </section>
  )
}
