'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'
import { useRef } from 'react'

export default function Method() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Descoberta',
      description: 'Mergulhamos na sua realidade para entender seus desafios e metas. Conversamos, analisamos e identificamos onde a IA pode gerar o maior impacto.',
      gradient: 'from-purple-vivid to-blue-vivid',
      color: 'purple-vivid',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Desenho da Solução',
      description: 'Criamos um plano de ação sob medida, focado em impacto rápido. Cada solução é pensada para resolver seus problemas reais, não genéricos.',
      gradient: 'from-blue-vivid to-cyan-vivid',
      color: 'blue-vivid',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implementação Inteligente',
      description: 'Construímos e integramos os sistemas que vão otimizar sua operação. Automação, IA, dashboards - tudo funcionando perfeitamente.',
      gradient: 'from-cyan-vivid to-verde-inteligente',
      color: 'cyan-vivid',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Evolução Contínua',
      description: 'Acompanhamos seus resultados para garantir que o crescimento nunca pare. Ajustamos, melhoramos e evoluímos junto com você.',
      gradient: 'from-verde-inteligente to-emerald-400',
      color: 'verde-inteligente',
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="metodo" 
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-vivid/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      
      <div className="container-custom relative z-10 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-branco-puro mb-4">
            Clareza do início ao fim.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Um processo transparente que transforma caos em crescimento
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Progress Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gray-800">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-vivid via-cyan-vivid to-verde-inteligente origin-top"
              style={{ scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]) }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-24 md:pl-32"
              >
                {/* Number Badge */}
                <motion.div
                  className={`absolute left-0 md:left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-2xl font-black text-white">{step.number}</span>
                </motion.div>

                {/* Card */}
                <motion.div
                  className="group relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 overflow-hidden">
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-${step.color}/10 flex items-center justify-center border border-${step.color}/20`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <step.icon className={`w-7 h-7 text-${step.color}`} />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-branco-puro mb-2">
                            {step.title}
                          </h3>
                          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.gradient} opacity-5 rounded-bl-full`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-400 mb-6">
            Pronto para transformar seu negócio?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-verde-inteligente to-emerald-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg hover:shadow-verde-inteligente/50">
            Começar Agora
          </button>
        </motion.div>
      </div>
    </section>
  )
}
