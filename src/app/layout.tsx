import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const siteUrl = 'https://www.vluma.com.br'
const siteName = 'VLUMA'
const siteTitle = 'VLUMA - Agência de IA para Crescimento Empresarial'
const siteDescription = 'Transforme seu negócio com Inteligência Artificial. Automação inteligente, CRM personalizado e soluções de IA para empresas e criadores de conteúdo. Tecnologia humanizada para impulsionar seu crescimento.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'IA',
    'Inteligência Artificial',
    'Automação',
    'Agência Digital',
    'Crescimento Empresarial',
    'CRM',
    'Business Intelligence',
    'Automação de Processos',
    'Plataforma de Membros',
    'Gestão de Conteúdo',
    'Agência de IA',
    'Consultoria IA',
    'Transformação Digital',
  ],
  authors: [{ name: 'VLUMA' }],
  creator: 'VLUMA',
  publisher: 'VLUMA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VLUMA - Agência de IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@vluma',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Adicione aqui quando tiver:
    // google: 'seu-codigo-google-search-console',
    // yandex: 'seu-codigo-yandex',
    // bing: 'seu-codigo-bing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VLUMA',
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    sameAs: [
      // Adicione suas redes sociais aqui quando tiver:
      // 'https://www.linkedin.com/company/vluma',
      // 'https://www.instagram.com/vluma',
      // 'https://twitter.com/vluma',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contato@vluma.com.br',
      availableLanguage: ['Portuguese'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Brasil',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: [
      'Inteligência Artificial',
      'Automação de Processos',
      'Consultoria em IA',
      'Desenvolvimento de Software',
    ],
  }

  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        
        {children}
      </body>
    </html>
  )
}
