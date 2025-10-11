import Header from '@/components/Header'
import Hero from '@/components/Hero'
// As demais seções e o componente SmoothScroll foram removidos conforme solicitado.

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
      </main>
    </>
  )
}