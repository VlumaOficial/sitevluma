'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Solution() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Nós não entregamos projetos.{' '}</span>
            <span className="bg-gradient-to-r from-cyan-vivid to-blue-vivid bg-clip-text text-transparent">
              Construímos seu crescimento.
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            No mercado, você encontra agências caras e freelancers desestruturados. 
            A VLUMA une o melhor dos mundos: uma metodologia profissional com a parceria 
            genuína de quem celebra cada conquista ao seu lado. É tecnologia com alma, 
            feita para sua realidade.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 mb-12 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-gray-500">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">+50</div>
              <div className="text-sm text-gray-500">Projetos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5x</div>
              <div className="text-sm text-gray-500">ROI Médio</div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-verde-inteligente to-cyan-vivid text-black font-semibold rounded-xl hover:shadow-2xl hover:shadow-verde-inteligente/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Agendar Sessão de Descoberta
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
