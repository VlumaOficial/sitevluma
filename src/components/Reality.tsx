'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingDown, Calendar } from 'lucide-react'

export default function Reality() {
  const challenges = [
    {
      icon: Clock,
      title: 'Muitas tarefas,',
      highlight: 'pouco tempo.',
      description: 'Sua agenda está lotada, mas as tarefas importantes ficam sempre para depois.',
      position: 'top-0 left-0'
    },
    {
      icon: TrendingDown,
      title: 'O crescimento',
      highlight: 'virou caos.',
      description: 'Cada cliente novo traz mais complexidade. Você está perdendo o controle.',
      position: 'top-32 right-0'
    },
    {
      icon: Calendar,
      title: 'A estratégia',
      highlight: 'ficou para depois.',
      description: 'Você quer planejar o futuro, mas está preso apagando incêndios do presente.',
      position: 'bottom-0 left-1/2 -translate-x-1/2'
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Gradient Background Transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-fundo-escuro via-fundo-escuro to-black" />
      
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

      <div className="container-custom w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative h-[600px] hidden lg:block">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${challenge.position} w-80 group`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-vivid/0 to-cyan-vivid/0 group-hover:from-purple-vivid/10 group-hover:to-cyan-vivid/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    {/* Animated Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-vivid/20 to-cyan-vivid/20 flex items-center justify-center mb-6 backdrop-blur-sm"
                    >
                      <Icon className="w-8 h-8 text-purple-vivid" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                      {challenge.title}
                    </h3>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent mb-4 leading-tight">
                      {challenge.highlight}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Layout */}
        <div className="grid gap-8 lg:hidden">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-vivid/20 to-cyan-vivid/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-purple-vivid" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{challenge.title}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent mb-4">
                  {challenge.highlight}
                </p>
                <p className="text-gray-400 leading-relaxed">{challenge.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
