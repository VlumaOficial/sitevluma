'use client'

import { motion } from 'framer-motion'

export default function Reality() {
  const phrases = [
    {
      text: 'Muitas tarefas,',
      highlight: 'pouco tempo.',
    },
    {
      text: 'O crescimento',
      highlight: 'virou caos.',
    },
  ]

  return (
    <section className="relative bg-fundo-escuro overflow-hidden">
      {/* Animated Blur Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-vivid/10 rounded-full blur-[150px]"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-vivid/10 rounded-full blur-[150px]"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      {phrases.map((phrase, index) => (
        <div key={index} className="min-h-screen flex items-center justify-center text-center relative z-10 px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl mx-auto"
          >
            {phrase.text} <br />
            <span className="bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent">
              {phrase.highlight}
            </span>
          </motion.h2>
        </div>
      ))}
    </section>
  )
}