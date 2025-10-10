'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Só ativa em desktop
    if (window.innerWidth < 1024) return

    let isScrolling: NodeJS.Timeout

    const handleScroll = () => {
      // Limpa o timeout anterior
      clearTimeout(isScrolling)

      // Define novo timeout para quando o scroll parar
      isScrolling = setTimeout(() => {
        const sections = document.querySelectorAll('main > section')
        const scrollPosition = window.scrollY + window.innerHeight / 2

        let closestSection: Element | null = null
        let closestDistance = Infinity

        // Encontra a seção mais próxima
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionMiddle = sectionTop + rect.height / 2
          const distance = Math.abs(scrollPosition - sectionMiddle)

          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = section
          }
        })

        // Scroll suave para a seção mais próxima
        if (closestSection) {
          const rect = closestSection.getBoundingClientRect()
          const offsetTop = rect.top + window.scrollY

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          })
        }
      }, 150) // Aguarda 150ms após parar de scrollar
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(isScrolling)
    }
  }, [])

  return null
}
