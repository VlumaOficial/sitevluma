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
    // Saúde e Bem-Estar
    'Clínicas e Saúde',
    'Beleza e Bem-Estar',
    
    // Serviços Profissionais
    'Advocacia',
    'Contabilidade',
    'Consultorias',
    'Profissionais Liberais',
    
    // Imóveis e Seguros
    'Corretores (Seguros e Imóveis)',
    'Imobiliárias',
    'Construção',
    
    // Educação e Marketing
    'Educação e Cursos',
    'Agências',
    'Marketing Digital',
    
    // Comércio e Vendas
    'Lojas e Comércio',
    'E-commerce',
    'Pizzarias',
    'Pet Shops',
    
    // Negócios e Tecnologia
    'Empreendedores',
    'Finanças',
    'SaaS/Tech',
    'Indústrias',
    
    // Geral
    'Outros'
  ]

  return (
    <section id="solucoes" className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen bg-fundo-escuro overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Animated Background Gradients - Matching Hero */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-vivid/20 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            x: [0, 60, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-vivid/20 rounded-full blur-[80px] lg:blur-[120px]"
          animate={{
            x: [0, -60, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-cyan-vivid/15 rounded-full blur-[60px] lg:blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay - Matching Hero */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight text-branco-puro">
            Soluções que aceleram o seu crescimento.
          </h2>
        </motion.div>

        {/* Main Solutions - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
          {mainSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${solution.gradient} opacity-20 rounded-full blur-3xl`} />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center border border-white/20 backdrop-blur-sm mb-4 sm:mb-6 mx-auto`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-branco-puro mb-4 sm:mb-6 leading-tight">
                    {solution.title}
                  </h3>

                  {/* Items List */}
                  <div className="space-y-3 text-left">
                    {solution.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + itemIndex * 0.1 + 0.3
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} flex-shrink-0`} />
                        <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-branco-puro mb-6 sm:mb-8">
            Atendemos diversos setores:
          </h3>
          
          {/* Sectors Grid - Organized */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03 + 0.6,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative"
              >
                <div className="relative bg-white/8 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-300 overflow-hidden text-center">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-vivid/15 to-cyan-vivid/15 rounded-lg" />
                  </div>
                  
                  <span className="relative text-white font-medium text-xs sm:text-sm block">
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
