'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-vivid' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-purple-vivid' },
  ]

  const quickLinks = [
    { name: 'Sobre', href: '#' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Método', href: '#metodo' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <footer className="relative bg-fundo-escuro overflow-hidden">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-vivid/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-vivid/8 rounded-full blur-[80px]"
          animate={{
            x: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Logo size={60} />
                <h3 className="text-3xl font-black text-branco-puro">VLUMA</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md leading-relaxed">
                Onde a tecnologia encontra o humano. Transformamos negócios através de automação inteligente e processos claros.
              </p>
              
              {/* CTA Button */}
              <motion.div
                className="relative group inline-block"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-vivid/20 to-blue-vivid/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-6 py-3 text-white font-semibold flex items-center gap-3 transition-all duration-300 hover:bg-white/10">
                  <span>Falar com Especialista</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-black text-branco-puro mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-gradient-to-r from-purple-vivid to-cyan-vivid rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-black text-branco-puro mb-6">Contato</h4>
              
              {/* Email */}
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 mb-6 group cursor-pointer"
                whileHover={{ x: 2 }}
              >
                <div className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">contato@vluma.com.br</span>
              </motion.div>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Redes Sociais</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:border-white/20 transition-all duration-300 group ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 VLUMA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>design by</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Logo size={16} />
              </motion.div>
              <span>vluma</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
