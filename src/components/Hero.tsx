'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, TrendingUp } from 'lucide-react'
import Logo from './Logo'
import AnimatedGrowthChart from './AnimatedGrowthChart'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fundo-escuro overflow-hidden">
      {/* Animated Background Gradients with Blur */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-vivid/30 rounded-full blur-[200px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-vivid/25 rounded-full blur-[180px]"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container-custom w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-branco-puro mb-6 leading-tight">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block">
                Transforme seu
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent">
                negócio com IA
              </motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
              Automação inteligente, análise preditiva e soluções personalizadas para empresas que querem liderar o futuro.
            </motion.p>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative h-[600px] hidden lg:block">
            {/* Connection Lines (behind cards) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
              <motion.line x1="50%" y1="50%" x2="25%" y2="80%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="3,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
              <motion.line x1="50%" y1="50%" x2="80%" y2="35%" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="3,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} />
              <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="3,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.4 }} />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Logo (above lines) */}
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ rotate: { duration: 60, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}>
              <Logo size={150} animate />
            </motion.div>

            {/* Card 1: Automação (z-10) */}
            <motion.div className="absolute bottom-24 left-16 w-44 h-28 bg-gradient-to-br from-pink-vivid/20 to-purple-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl z-10" animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-pink-vivid" />
                <span className="text-sm font-semibold text-white">Automação</span>
              </div>
              <div className="text-3xl font-bold text-white">100%</div>
            </motion.div>

            {/* Card 2: IA Ativa (z-10) */}
            <motion.div className="absolute top-32 right-10 w-44 h-28 bg-gradient-to-br from-cyan-vivid/20 to-blue-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl z-10" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-cyan-vivid" />
                <span className="text-sm font-semibold text-white">IA Ativa</span>
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
            </motion.div>

            {/* Card 3: Crescimento com Gráfico (z-10) */}
            <motion.div className="absolute top-20 left-10 w-48 h-32 bg-gradient-to-br from-purple-vivid/20 to-blue-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl z-10" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-vivid" />
                <span className="text-sm font-semibold text-white">Crescimento</span>
              </div>
              <AnimatedGrowthChart />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
