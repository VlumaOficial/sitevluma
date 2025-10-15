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
      gradient: 'from-cyan-vivid to-pink-vivid',
      color: 'cyan-vivid',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Evolução Contínua',
      description: 'Acompanhamos seus resultados para garantir que o crescimento nunca pare. Ajustamos, melhoramos e evoluímos junto com você.',
      gradient: 'from-pink-vivid to-purple-vivid',
      color: 'pink-vivid',
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="metodo" 
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen bg-fundo-escuro overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Animated Background Gradients - Matching Hero */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-vivid/25 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-vivid/25 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-cyan-vivid/20 rounded-full blur-[60px] lg:blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay - Matching Hero */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container-custom relative z-10 max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-branco-puro mb-4 leading-tight">
            Clareza do{' '}
            <span className="bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent">
              início ao fim.
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Um processo transparente que transforma caos em crescimento
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated Progress Line - Centered */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-vivid via-blue-vivid via-cyan-vivid to-pink-vivid origin-top rounded-full"
              style={{ scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]) }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              // Cards 1 e 3 (index 0,2) à esquerda, Cards 2 e 4 (index 1,3) à direita
              const isLeft = index === 0 || index === 2;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`relative flex items-center ${isLeft ? 'justify-start md:justify-start' : 'justify-start md:justify-end'}`}
                >
                  {/* Number Badge with Glow - Always on timeline center */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-2xl z-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.2,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Glow Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-sm opacity-60`} />
                    <div className={`absolute inset-1 bg-gradient-to-br ${step.gradient} rounded-full`} />
                    <span className="relative text-xs sm:text-sm font-black text-white z-10">{step.number}</span>
                  </motion.div>

                  {/* Card with Glassmorphism */}
                  <motion.div
                    className={`group relative w-full max-w-xs ml-12 md:ml-0 ${isLeft ? 'md:mr-8 lg:mr-10' : 'md:ml-8 lg:ml-10'}`}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-lg p-4 sm:p-5 lg:p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute ${isLeft ? 'top-0 right-0' : 'top-0 left-0'} w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-20 rounded-full blur-2xl`} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon + Title */}
                        <div className="flex items-start gap-2 sm:gap-3 mb-3">
                          <motion.div
                            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${step.gradient} bg-opacity-20 flex items-center justify-center border border-white/20 backdrop-blur-sm`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg lg:text-xl font-black text-branco-puro mb-2 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Connecting Line to Timeline Center - Hidden on mobile */}
                      <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-8 lg:w-10 h-0.5 bg-gradient-to-r ${isLeft ? step.gradient : `${step.gradient.split(' ').reverse().join(' ')}`} opacity-30`} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Pronto para transformar seu negócio?
          </p>
          <motion.button 
            className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-vivid to-blue-vivid text-white font-bold text-sm sm:text-base lg:text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-vivid/50 flex items-center gap-2 mx-auto"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Falar com um Especialista
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
