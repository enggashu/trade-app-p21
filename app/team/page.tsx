import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TeamMember from '@/components/TeamMember'

export default function Team() {
  const teamMembers = [
    {
      name: 'Thitiphat Thaveesin',
      nickname: 'Keng',
      role: 'Founder and Managing Partner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: [
        'Thitiphat "Keng" Thaveesin is a seasoned investment and corporate finance leader with deep experience across financial markets, strategic investment, and venture growth. He brings over a decade of expertise in structuring and scaling complex financial solutions, driving capital formation, and enabling strategic expansion for mid-to-large enterprises.',
        'He is the Founder and Managing Partner of P21 Ventures, where he leads investment discipline, capital structuring, and governance strategy—working closely with founders to prepare businesses for institutional scale and cross-border expansion, particularly across the Thailand–Gulf corridor.',
        'Keng held key roles in infrastructure investment and asset management, including Investment Manager at IDI Infrastructure Inc., where he originated renewable energy and infrastructure projects across Southeast Asia, and leadership positions at One Asset Management, where he was instrumental in launching several alternative investment vehicles, including Thailand\'s first private equity trust. His earlier career included strategic advisory and finance roles with KPMG Phoomchai Business Advisory, Advance Finance, and the Office of the Thailand Trade Representative.',
        'Widely respected for bridging capital markets, strategic finance, and venture-oriented growth, Keng combines analytical precision with operational leadership. At P21 Ventures, he applies this experience to support founders in preparing their businesses for institutional scale, cross-border expansion, and long-term value creation.',
      ],
      education: [
        'Master of Science in Investment Management from the Lubin School of Business at Pace University (New York)',
        'Bachelor\'s degree in Industrial Engineering from Chulalongkorn University (Bangkok)',
      ],
    },
    {
      name: 'Syed Imran Shah',
      role: 'Founder and Managing Partner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: [
        'Syed Imran Shah is a venture builder, investor, and cross-border operator with deep experience scaling businesses across ASEAN, the Gulf, and emerging global markets.',
        'He is the Founder and Managing Partner of P21 Ventures, where he leads investment strategy and hands-on venture building for post-revenue companies seeking to expand beyond their home markets. His work focuses on helping founders move from local traction to institutionally credible, regionally significant enterprises.',
        'Imran has spent over two decades working at the intersection of technology, capital, and market expansion—structuring investments, building governance frameworks, and executing cross-border growth initiatives. He is particularly active across the Thailand–GCC corridor, partnering with founders, family offices, and strategic institutions to unlock long-term value.',
        'Known for his operator mindset, Imran does not believe in passive capital. He works closely with leadership teams on strategy, execution, and decision-making—often stepping in where businesses stall during scale.',
        'Through P21 Ventures, his mandate is simple: invest with conviction, build with discipline, and scale companies that are built to last.',
      ],
      education: [
        'MBA from Jain University',
        'Bachelor\'s degree in Industrial Engineering from Dayananda Sagar College of Engineering',
      ],
    },
    {
      name: 'Dr. Waleed Aloriny',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: [
        'Dr. Waleed has more than 20 years\' working in the ICT Industry and roles as chair of the board of directors of various international organisations providing significant experience in the area of Technology, Strategy and International businesses. He is highly regarded both within Kingdom of Saudi Arabia and externally as a champion of technology led change and innovation.',
        'Dr. Waleed counsels and collaborates with Government, Quasi-Government & C-suite executives of large global corporations, helping them drive change in their companies to improve their competitiveness. Dr. Waleed frequently writes and speaks on topics such as digital disruption, global talent issues, continuous skill development, and the importance of building a strong corporate culture.',
      ],
      education: [
        'Doctor of Philosophy (PhD) in Systems Engineering, University of Reading, UK',
        'MS in Computer Science',
        'BS in Computer Science',
      ],
    },
    {
      name: 'Mansour S. Al-Misfer',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: [
        'Mansour S. Al-Misfer is a distinguished Saudi business leader with deep expertise in venture capital, strategic investments, and technology-driven business development. With a career spanning leadership positions across the Kingdom\'s financial, technology, and private market sectors, he has been instrumental in advancing innovation, fostering strategic partnerships, and driving organizational growth across multiple industries.',
        'Mansour currently serves as a Board Member at Majd Saudi Payments, contributing to governance and national fintech advancement. He previously served as Chairman of the Board at Asyaf Investments, where he championed the transformation of private market operations through advanced technologies and data-driven investment strategies. His board leadership also includes roles at Jadara Solutions, Al Watania Information Systems, and BayanPay, reinforcing his influence across Saudi Arabia\'s technology and financial ecosystems.',
        'As a Founding, Board Member of the Saudi Venture Capital and Private Equity Association, Mansour played a pivotal role in shaping the Kingdom\'s investment landscape and supporting the growth of emerging funds and venture-backed companies.',
        'In the technology and cybersecurity sector, Mansour held key executive roles at SITE (Saudi Information Technology Company), serving as Chief Business Development Officer and Vice President of Business Development, where he led strategic initiatives and national-scale business growth programs.',
        'With a strong background in venture capital, Mansour served as Managing Director at BlueVine Ventures, overseeing investment portfolios, sourcing opportunities, and supporting high-growth technology companies. His work with Oqal – the Saudi Angel Investors Network further reflects his commitment to empowering early-stage innovation by connecting startups with seasoned investors.',
        'Earlier in his career, Mansour built a solid foundation in the telecommunications and enterprise technology sectors, holding leadership positions including Chief Executive Officer at Communications Solutions, Country Manager for Saudi Arabia at International Turnkey Systems, and senior roles at Hewlett Packard Enterprise and Saudi Business Machines, where he drove market expansion, revenue growth, and large-scale client engagements.',
        'Recognized as a forward-thinking leader in Saudi Arabia\'s investment and technology ecosystem, Mansour continues to champion innovation, digital transformation, and the growth of the Kingdom\'s private sector in alignment with national economic ambitions.',
      ],
      education: [
        'Bachelor of Science in Computer Engineering from King Saud University',
      ],
    },
    {
      name: 'Dr. Mongkon Leelatham',
      role: 'Advisor',
      image: 'https://images.unsplash.com/photo-1556155092-4904e6d0c3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: [
        'Dr. Mongkon Leelatham is a prominent expert in public finance and institutional capital with experience as the former President of the Small and Medium Enterprise Development Bank of Thailand (SME D Bank). In May 2021, he held the position of Chairman of the Executive Committee of the Office of Small and Medium Enterprises Promotion (OSMEP).',
        'Dr. Mongkon\'s work emphasizes the strategic use of government-linked financial institutions to fill funding gaps that traditional commercial banks may not address, thereby fostering national economic development.',
      ],
      expertise: [
        'Public Finance and Development Banking: Dr. Mongkon has a deep background in leveraging government-backed financing and development banks to support scalable businesses.',
        'National Innovation Policy: He offers insights into how policy-driven capital can be mobilized, particularly in strategic industries like technology and healthcare.',
        'Institutional Capital Deployment: He plays a critical role in bridging government mechanisms, financial institutions, and private ventures to ensure sustainable growth and access to institutional funding.',
      ],
      education: [
        'Master of Public Administration from the National Institute of Development Administration',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving cross-border growth and institutional scale
            </p>
          </div>

          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

