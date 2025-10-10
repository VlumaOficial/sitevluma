'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Logo from './Logo'

export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fundo-escuro overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-vivid/30 rounded-full blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-vivid/30 rounded-full blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-vivid/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container-custom px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-vivid/20 to-blue-vivid/20 border border-purple-vivid/30 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-vivid" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-vivid to-cyan-vivid bg-clip-text text-transparent">
                Powered by AI
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-branco-puro mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Transforme seu
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block bg-gradient-to-r from-purple-vivid via-blue-vivid to-cyan-vivid bg-clip-text text-transparent"
              >
                negócio com IA
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              Automação inteligente, análise preditiva e soluções personalizadas 
              para empresas que querem liderar o futuro.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-vivid to-blue-vivid text-white font-bold rounded-xl hover:scale-105 transition-all shadow-2xl hover:shadow-purple-vivid/50 flex items-center justify-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-cyan-vivid" />
                Ver Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div>
                <div className="text-3xl font-bold text-purple-vivid">98%</div>
                <div className="text-sm text-gray-500">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-vivid">+50</div>
                <div className="text-sm text-gray-500">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-vivid">5x</div>
                <div className="text-sm text-gray-500">ROI Médio</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Center Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <Logo size={150} animate />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              className="absolute top-20 left-10 w-48 h-32 bg-gradient-to-br from-purple-vivid/20 to-blue-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-vivid" />
                <span className="text-sm font-semibold text-white">Crescimento</span>
              </div>
              <div className="text-2xl font-bold text-white">+127%</div>
              <div className="text-xs text-gray-400">Este trimestre</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              className="absolute top-32 right-10 w-44 h-28 bg-gradient-to-br from-cyan-vivid/20 to-blue-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-cyan-vivid" />
                <span className="text-sm font-semibold text-white">IA Ativa</span>
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              className="absolute bottom-24 left-16 w-40 h-28 bg-gradient-to-br from-pink-vivid/20 to-purple-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-pink-vivid" />
                <span className="text-sm font-semibold text-white">Automação</span>
              </div>
              <div className="text-2xl font-bold text-white">100%</div>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <motion.line
                x1="50%"
                y1="50%"
                x2="20%"
                y2="20%"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.line
                x1="50%"
                y1="50%"
                x2="80%"
                y2="30%"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              />
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
