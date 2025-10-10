import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Reality from '@/components/Reality'
import Solution from '@/components/Solution'
import Method from '@/components/Method'
import Plans from '@/components/Plans'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Reality />
        <Solution />
        <Method />
        <Plans />
        <CTAFinal />
        <Footer />
      </main>
    </>
  )
}
