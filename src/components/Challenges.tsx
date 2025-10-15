'use client'

import { motion } from 'framer-motion'
import { Wrench, TrendingDown, Zap } from 'lucide-react'

export default function Challenges() {
  const challenges = [
    {
      icon: Wrench,
      title: 'Tarefas Manuais Repetitivas',
      description: 'Perdendo tempo com processos que poderiam ser automatizados? Sua equipe merece focar no que realmente importa.'
    },
    {
      icon: TrendingDown,
      title: 'Falta de Estratégia Digital Clara',
      description: 'Sem um plano, seus esforços digitais se perdem. Transformamos ideias em resultados com estratégias sob medida.'
    },
    {
      icon: Zap,
      title: 'Oportunidades de Crescimento Perdidas',
      description: 'O mercado muda rápido. Identificamos e implementamos as inovações que seu negócio precisa para se destacar.'
    },
  ]

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-fundo-escuro overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Animated Background Gradients - Matching Hero */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-vivid/20 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-vivid/20 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-cyan-vivid/15 rounded-full blur-[60px] lg:blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay - Matching Hero */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-branco-puro mb-4 leading-tight">
            Você se sente <span className="bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent">travado</span> pelo operacional?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${
                    index === 0 ? 'bg-purple-vivid/30' : 
                    index === 1 ? 'bg-blue-vivid/30' : 
                    'bg-cyan-vivid/30'
                  }`} />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 ${
                    index === 0 ? 'bg-gradient-to-br from-purple-vivid to-purple-vivid/70' :
                    index === 1 ? 'bg-gradient-to-br from-blue-vivid to-blue-vivid/70' :
                    'bg-gradient-to-br from-cyan-vivid to-cyan-vivid/70'
                  }`}>
                    <challenge.icon className="text-white" size={16} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-branco-puro mb-3 sm:mb-4 leading-tight">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
                    {challenge.description}
                  </p>
                </div>

                {/* Border Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl border transition-colors duration-500 ${
                  index === 0 ? 'border-purple-vivid/0 group-hover:border-purple-vivid/30' :
                  index === 1 ? 'border-blue-vivid/0 group-hover:border-blue-vivid/30' :
                  'border-cyan-vivid/0 group-hover:border-cyan-vivid/30'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
