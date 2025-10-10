'use client'

import { Mail, Linkedin, Instagram } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={50} />
              <h3 className="text-2xl font-display font-bold text-branco-puro">VLUMA</h3>
            </div>
            <p className="text-branco-suave">Onde a tecnologia encontra a parceria.</p>
          </div>
          <div>
            <h4 className="font-bold text-branco-puro mb-4">Contato</h4>
            <div className="flex items-center gap-2 text-branco-suave hover:text-verde-inteligente transition">
              <Mail size={18} />
              <span>contato@vluma.com.br</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-branco-puro mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-branco-suave hover:text-verde-inteligente transition">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-branco-suave hover:text-verde-inteligente transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-branco-suave/70">
          <p>© 2025 VLUMA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
