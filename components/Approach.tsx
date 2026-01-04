import Image from 'next/image'

export default function Approach() {
  const approaches = [
    {
      title: 'Post-Revenue Focus',
      description: 'We invest in businesses with proven traction and revenue, not just ideas. Real companies with real customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Co-Investment Platform',
      description: 'We partner with aligned investors and co-invest alongside them, bringing strategic value beyond capital.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Hands-On Co-Building',
      description: 'We work alongside founders to commercialise products, strengthen operations, and unlock cross-border growth.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building regionally significant enterprises through hands-on partnership
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={approach.image}
                  alt={approach.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

