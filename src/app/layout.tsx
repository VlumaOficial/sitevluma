import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VLUMA - Agência de IA para Crescimento Empresarial',
  description: 'Tecnologia humanizada para impulsionar seu crescimento. Liberte-se do operacional e foque no que realmente importa.',
  keywords: ['IA', 'Inteligência Artificial', 'Automação', 'Agência Digital', 'Crescimento Empresarial'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'VLUMA - Tecnologia Humanizada',
    description: 'Nós não entregamos projetos. Construímos seu crescimento.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
