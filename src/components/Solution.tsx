'use client'

import { motion } from 'framer-motion'
import { Settings, Globe } from 'lucide-react'

export default function Solution() {
  const mainSolutions = [
    {
      icon: Settings,
      title: 'Crescimento e Operações',
      items: [
        'Automação de Marketing e Vendas',
        'CRM e Gestão de Clientes',
        'Análise de Dados e BI',
        'Otimização de Processos Internos',
        'Desenvolvimento Customizado'
      ],
      gradient: 'from-purple-vivid to-blue-vivid',
    },
    {
      icon: Globe,
      title: 'Plataformas e Audiência',
      items: [
        'Gestão de Membros e Assinaturas',
        'Automação de Conteúdo',
        'Integração com Redes Sociais',
        'Engajamento e Análise de Audiência'
      ],
      gradient: 'from-blue-vivid to-cyan-vivid',
    },
  ]

  const sectors = [
    'Saúde', 'Advogados', 'Imobiliárias', 'Restaurantes', 'Educação',
    'E-commerce', 'Consultorias', 'Startups', 'Marketing Digital', 'Finanças',
    'Pet Shops', 'Pizzarias', 'Indústrias', 'SaaS/Tech', 'Construção',
    'Beleza', 'Outros'
  ]

  return (
    <section className="relative min-h-screen bg-fundo-escuro overflow-hidden py-20">
      {/* Animated Background Gradients - Matching Hero */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-vivid/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 60, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-vivid/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -60, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-vivid/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay - Matching Hero */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-branco-puro">
            Soluções que aceleram o seu crescimento.
          </h2>
        </motion.div>

        {/* Main Solutions - 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {mainSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${solution.gradient} opacity-20 rounded-full blur-3xl`} />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center border border-white/20 backdrop-blur-sm mb-6 mx-auto`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-branco-puro mb-6 leading-tight">
                    {solution.title}
                  </h3>

                  {/* Items List */}
                  <div className="space-y-3 text-left">
                    {solution.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + itemIndex * 0.1 + 0.3
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} flex-shrink-0`} />
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sectors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-branco-puro mb-8">
            Atendemos diversos setores:
          </h3>
          
          {/* Sectors Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05 + 0.6,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-vivid/20 to-cyan-vivid/20 rounded-full" />
                  </div>
                  
                  <span className="relative text-white font-semibold text-sm md:text-base">
                    {sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
