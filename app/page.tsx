import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Approach from '@/components/Approach'
import Regions from '@/components/Regions'
import ValueProposition from '@/components/ValueProposition'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Approach />
      <Regions />
      <ValueProposition />
      <Footer />
    </main>
  )
}
