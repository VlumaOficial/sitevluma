'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Configurações via variáveis de ambiente
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
  const whatsappChatUrl = process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL || ''
  const whatsappMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre os serviços da VLUMA.'

  // Mostrar widget após scroll (evita poluir a tela inicial)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Mostrar após 3 segundos mesmo sem scroll
    const timer = setTimeout(() => setIsVisible(true), 3000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Não renderizar se não tiver número nem URL configurado
  if (!whatsappPhone && !whatsappChatUrl) {
    return null
  }

  // Gerar URL do WhatsApp
  const getWhatsAppUrl = () => {
    // Se tiver URL customizada, usar ela
    if (whatsappChatUrl) {
      return whatsappChatUrl
    }
    
    // Caso contrário, usar número de telefone
    if (whatsappPhone) {
      const cleanPhone = whatsappPhone.replace(/\D/g, '') // Remove caracteres não numéricos
      const encodedMessage = encodeURIComponent(whatsappMessage)
      return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
    }

    return '#'
  }

  const handleClick = () => {
    const url = getWhatsAppUrl()
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Botão Principal */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Abrir WhatsApp"
      >
        {/* Círculo com animação de pulso */}
        <div className="relative">
          {/* Pulso animado */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          
          {/* Botão principal */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-6 h-6" />
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            Fale conosco no WhatsApp
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900" />
          </div>
        </div>
      </button>

      {/* Badge de notificação (opcional) */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-bounce">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            1
          </div>
        </div>
      )}
    </>
  )
}
