'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button' // Changed to named import
import Logo from './Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Método', href: '#metodo' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.a
          href="#hero"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <Logo size={32} />
          <span className="text-lg sm:text-xl font-display font-bold text-branco-puro">VLUMA</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-branco-suave hover:text-verde-inteligente transition-colors duration-300 font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-verde-inteligente group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button className="px-4 py-2 lg:px-6 bg-laranja-energia text-white text-sm lg:text-base font-semibold rounded-lg hover:scale-105 transition-transform" onClick={() => window.open('https://comecesuajornada.vluma.com.br/','_blank','noopener,noreferrer')}>
            Agendar Sessão
          </button>
        </nav>

        <button
          className="md:hidden text-branco-puro p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-fundo-escuro border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <nav className="flex flex-col gap-4 p-4 sm:p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-branco-suave hover:text-verde-inteligente font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full px-6 py-3 bg-laranja-energia text-white font-semibold rounded-lg mt-4 hover:bg-laranja-energia/90 transition-colors" onClick={() => window.open('https://comecesuajornada.vluma.com.br/','_blank','noopener,noreferrer')}>
              Agendar Sessão
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}