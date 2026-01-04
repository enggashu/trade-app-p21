import Image from 'next/image'

export default function ValueProposition() {
  const values = [
    {
      title: "Fix What's Broken",
      description: 'We identify and resolve operational bottlenecks, structural issues, and execution gaps that prevent growth.',
    },
    {
      title: 'Scale What Works',
      description: 'We help amplify successful products and strategies, expanding reach and impact across new markets.',
    },
    {
      title: 'Prepare for Growth',
      description: 'We build the foundations needed for institutional capital and sustainable long-term expansion.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Team collaboration and growth"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Hands-On Partnership
            </h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

