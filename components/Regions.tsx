import Image from 'next/image'

export default function Regions() {
  const regions = [
    {
      name: 'ASEAN',
      description: 'Southeast Asian markets including Thailand, Singapore, Malaysia, Indonesia, Vietnam, and the Philippines.',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'GCC',
      description: 'Gulf Cooperation Council markets including UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cross-Border Expansion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlocking growth across two dynamic regions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {region.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {region.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

