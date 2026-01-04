import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const ContactUs = () => {
  return (
      <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-white">
                Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We’d love to hear from you. Reach out to us using the details below.
            </p>
           
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Office Address */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Main Office
            </h2>
            <p className="text-gray-600 leading-relaxed">
              CRC Tower – All Seasons Place <br />
              36 Floor, S-16, <br />
              87/2, Wireless Road, Lumphini <br />
              Pathum Wan, Bangkok 10330 <br />
              Thailand
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Enquiries
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">General Enquiries</p>
                <a
                  href="mailto:info@p21.ventures"
                  className="text-blue-600 hover:underline font-medium"
                >
                  info@p21.ventures
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Media &amp; Press Enquiries</p>
                <a
                  href="mailto:media@p21.ventures"
                  className="text-blue-600 hover:underline font-medium"
                >
                  media@p21.ventures
                </a>
              </div>
            </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} P21 Ventures. All rights reserved.
        </div>
      </div>
    </div>
        </div>
        </div>
    </div>
    
    
    </main>
  );
};

export default ContactUs;
