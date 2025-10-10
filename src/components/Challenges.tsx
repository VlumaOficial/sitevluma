'use client'

import { motion } from 'framer-motion'
import { Clock, Target, TrendingDown } from 'lucide-react'
import Card from './ui/Card'

export default function Challenges() {
  const challenges = [
    {
      icon: Clock,
      title: 'Tarefas Manuais',
      description: 'Você perde horas em processos repetitivos que uma solução inteligente resolveria em segundos.',
    },
    {
      icon: Target,
      title: 'Falta de Estratégia',
      description: 'Sem dados organizados e automação, você toma decisões no escuro e perde vantagem competitiva.',
    },
    {
      icon: TrendingDown,
      title: 'Oportunidades Perdidas',
      description: 'Enquanto você está ocupado apagando incêndios, seus concorrentes já estão escalando com IA.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-laranja-cta/10 border border-laranja-cta/30 text-laranja-cta text-sm font-semibold mb-6">
            Desafios Comuns
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Você se sente <span className="gradient-text">travado</span> pelo operacional?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bento-card h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-gray-700 hover:border-laranja-cta/50 relative overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-laranja-cta/20 rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-laranja-cta to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <challenge.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
