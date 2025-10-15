'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-xl shadow-md p-6 border border-gray-100',
        hover && 'transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-verde-inteligente',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
