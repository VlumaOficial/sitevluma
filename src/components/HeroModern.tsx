'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Logo from './Logo'

export default function HeroModern() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center bg-fundo-escuro overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-vivid/30 rounded-full blur-[100px] lg:blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-blue-vivid/30 rounded-full blur-[100px] lg:blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-cyan-vivid/20 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-branco-puro mb-4 sm:mb-6 leading-tight">
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
              className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-lg"
            >
              Automação inteligente, análise preditiva e soluções personalizadas 
              para empresas que querem liderar o futuro.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-vivid to-blue-vivid text-white text-sm sm:text-base font-bold rounded-xl hover:scale-105 transition-all shadow-2xl hover:shadow-purple-vivid/50 flex items-center justify-center gap-2" onClick={() => window.open('https://comecesuajornada.vluma.com.br/','_blank','noopener,noreferrer')}>
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0"
          >
            {/* Center Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36">
                <Logo size={80} animate />
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              className="absolute top-8 left-4 w-32 h-20 sm:top-12 sm:left-6 sm:w-36 sm:h-24 lg:top-20 lg:left-10 lg:w-48 lg:h-32 bg-gradient-to-br from-purple-vivid/20 to-blue-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-2 sm:p-3 lg:p-4 shadow-2xl z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-purple-vivid" />
                <span className="text-xs sm:text-sm font-semibold text-white">Crescimento</span>
              </div>
              <div className="flex items-center justify-center">
                <motion.svg
                  className="w-12 h-8 sm:w-16 sm:h-10 lg:w-[70px] lg:h-[45px]"
                  viewBox="0 0 70 45"
                >
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background arc */}
                  <path
                    d="M 10 35 A 25 25 0 0 1 60 35"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  
                  {/* Animated progress arc */}
                  <motion.path
                    d="M 10 35 A 25 25 0 0 1 60 35"
                    fill="none"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.85 }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Center indicator dot */}
                  <motion.circle
                    cx="35"
                    cy="35"
                    r="3"
                    fill="#06B6D4"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.circle
                    cx="35"
                    cy="35"
                    r="8"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              className="absolute top-16 right-4 w-28 h-18 sm:top-20 sm:right-6 sm:w-32 sm:h-20 lg:top-32 lg:right-10 lg:w-44 lg:h-28 bg-gradient-to-br from-cyan-vivid/20 to-blue-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-2 sm:p-3 lg:p-4 shadow-2xl z-10"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-cyan-vivid" />
                <span className="text-xs sm:text-sm font-semibold text-white">IA Ativa</span>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">24/7</div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              className="absolute bottom-8 left-8 w-28 h-18 sm:bottom-12 sm:left-12 sm:w-32 sm:h-20 lg:bottom-24 lg:left-16 lg:w-40 lg:h-28 bg-gradient-to-br from-pink-vivid/20 to-purple-vivid/20 backdrop-blur-xl rounded-2xl border border-white/10 p-2 sm:p-3 lg:p-4 shadow-2xl z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-vivid" />
                <span className="text-xs sm:text-sm font-semibold text-white">Automação</span>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">100%</div>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0">
              {/* Line to Card 1 (Crescimento - top-left) */}
              <motion.line
                x1="50%"
                y1="50%"
                x2="40%"
                y2="40%"
                stroke="url(#gradient1)"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Line to Card 2 (IA Ativa - top-right) */}
              <motion.line
                x1="50%"
                y1="50%"
                x2="60%"
                y2="40%"
                stroke="url(#gradient2)"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
              />
              {/* Line to Card 3 (Automação - bottom-left) */}
              <motion.line
                x1="50%"
                y1="50%"
                x2="40%"
                y2="60%"
                stroke="url(#gradient3)"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
