import { ImageResponse } from 'next/og'

// Configuração da imagem
export const runtime = 'edge'
export const alt = 'VLUMA - Agência de IA para Crescimento Empresarial'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Gerar a imagem
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0E27',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 217, 163, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        }}
      >

        {/* Conteúdo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Logo Circle */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00D9A3 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              boxShadow: '0 0 60px rgba(0, 217, 163, 0.4)',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 900,
                color: '#0A0E27',
                letterSpacing: '-2px',
              }}
            >
              V
            </div>
          </div>

          {/* Título */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#00D9A3',
              textAlign: 'center',
              marginBottom: '24px',
              letterSpacing: '-2px',
            }}
          >
            VLUMA
          </div>

          {/* Subtítulo */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#F8FAFC',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Agência de IA
          </div>

          {/* Descrição */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: 400,
              color: '#CBD5E1',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Transforme seu negócio com Inteligência Artificial
          </div>

          {/* Badge */}
          <div
            style={{
              marginTop: '40px',
              padding: '12px 32px',
              borderRadius: '999px',
              background: 'rgba(0, 217, 163, 0.1)',
              border: '1px solid rgba(0, 217, 163, 0.3)',
              fontSize: '18px',
              color: '#00D9A3',
              fontWeight: 600,
            }}
          >
            Tecnologia Humanizada
          </div>
        </div>

        {/* URL no rodapé */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#64748B',
            fontWeight: 500,
          }}
        >
          www.vluma.com.br
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
