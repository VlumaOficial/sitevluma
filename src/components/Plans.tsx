'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, BarChart3, Cog, Code, Video, UserPlus, Share2, Activity, Sparkles } from 'lucide-react'

export default function Plans() {
  const plans = [
    {
      icon: TrendingUp,
      title: 'Otimização e Crescimento',
      subtitle: 'Para Negócios Escaláveis',
      gradient: 'from-purple-vivid to-blue-vivid',
      services: [
        { icon: BarChart3, name: 'Automação de Marketing e Vendas', description: 'Fluxos inteligentes que convertem' },
        { icon: Users, name: 'CRM e Gestão de Clientes', description: 'Relacionamento automatizado' },
        { icon: Activity, name: 'Análise de Dados e BI', description: 'Decisões baseadas em dados reais' },
        { icon: Cog, name: 'Otimização de Processos', description: 'Menos manual, mais estratégia' },
        { icon: Code, name: 'Ferramentas Customizadas', description: 'Soluções sob medida para você' },
      ],
    },
    {
      icon: Video,
      title: 'Conteúdo e Audiência',
      subtitle: 'Para Criadores Digitais',
      gradient: 'from-cyan-vivid to-verde-inteligente',
      services: [
        { icon: UserPlus, name: 'Gestão de Membros', description: 'Assinaturas e área de membros' },
        { icon: Video, name: 'Automação de Conteúdo', description: 'Publicação inteligente' },
        { icon: Share2, name: 'Redes Sociais', description: 'Integração completa' },
        { icon: Activity, name: 'Análise de Engajamento', description: 'Métricas que importam' },
      ],
    },
  ]

  const sectors = [
    { name: 'Clínicas e Laboratórios', emoji: '🏥' },
    { name: 'Advogados', emoji: '⚖️' },
    { name: 'Imobiliárias', emoji: '🏢' },
    { name: 'Delivery', emoji: '🍔' },
    { name: 'Educadores', emoji: '📚' },
    { name: 'E-commerce', emoji: '🛒' },
    { name: 'Captação de Leads', emoji: '📈' },
    { name: 'E muito mais', emoji: '✨' },
  ]

  return (
    <section id="planos" className="section-padding bg-fundo-escuro relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-blue-vivid/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-branco-puro mb-4">
            Soluções para impulsionar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-vivid to-verde-inteligente">
              sua jornada
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Escolha a solução ideal para o seu negócio
          </p>
        </motion.div>

        {/* Plans Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={planIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: planIndex * 0.2 }}
              className="group relative"
            >
              <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${plan.gradient} p-[2px]`}>
                <div className="h-full bg-gray-900 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                  {/* Header */}
                  <div className="mb-8">
                    <motion.div
                      className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} items-center justify-center mb-6 shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-branco-puro mb-2">
                      {plan.title}
                    </h3>
                    <p className={`text-lg text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Services List */}
                  <div className="space-y-5">
                    {plan.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${plan.gradient} opacity-20 group-hover/item:opacity-30 flex items-center justify-center transition-opacity`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-branco-puro mb-1 group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-vivid group-hover/item:to-verde-inteligente transition-all">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${plan.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-vivid/20 to-cyan-vivid/20 border border-purple-vivid/30 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-cyan-vivid" />
            <span className="text-sm font-semibold text-branco-puro">Ideal Para</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group px-5 py-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700 hover:border-cyan-vivid/50 rounded-2xl text-branco-suave text-sm font-medium transition-all cursor-default shadow-lg"
              >
                <span className="mr-2">{sector.emoji}</span>
                {sector.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
