import Header from '@/components/Header'
import HeroModern from '@/components/HeroModern'
import Challenges from '@/components/Challenges'
import Reality from '@/components/Reality'
import Method from '@/components/Method'
import Solution from '@/components/Solution'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroModern />
        <Challenges />
        <Reality />
        <Method />
        <Solution />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}