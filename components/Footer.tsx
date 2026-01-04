import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Approach', href: '/approach' },
    ],
    Regions: [
      { label: 'ASEAN', href: '/regions' },
      { label: 'GCC', href: '/regions' },
      { label: 'Thailand', href: '/regions' },
    ],
    Connect: [
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
    ],
  }

  return (
    <footer className="bg-gray-800 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">P21 VENTURES</h3>
            <p className="text-gray-400">
              Thailand–Gulf focused scale-up studio and co-investment platform for companies ready to grow beyond their home markets.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 P21 VENTURES. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

