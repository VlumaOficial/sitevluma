'use client'

import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section id="contato" className="section-padding bg-fundo-escuro relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="container-custom text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-branco-puro mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vamos construir seu crescimento, juntos?
        </motion.h2>
        <motion.p
          className="text-xl text-branco-suave mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Chega de adiar o potencial do seu negócio. O primeiro passo para a clareza e o crescimento está a um clique de distância.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-12 py-5 bg-laranja-energia text-white font-bold text-lg rounded-lg hover:scale-105 transition-transform shadow-2xl hover:shadow-laranja-energia/50">
            Agendar Sessão de Descoberta
          </button>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-verde-inteligente rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
