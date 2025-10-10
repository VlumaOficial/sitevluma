'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedGrowthChart() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const animate = () => {
      setProgress(0)
      const startTime = Date.now()
      const duration = 2500

      const update = () => {
        const elapsed = Date.now() - startTime
        const newProgress = Math.min((elapsed / duration) * 100, 100)
        setProgress(newProgress)

        if (newProgress < 100) {
          requestAnimationFrame(update)
        } else {
          setTimeout(animate, 800)
        }
      }
      update()
    }

    animate()
  }, [])

  const getColor = (prog: number) => {
    if (prog < 33) {
      const ratio = prog / 33
      return `rgb(${239}, ${Math.round(68 + 166 * ratio)}, 68)`
    } else if (prog < 66) {
      const ratio = (prog - 33) / 33
      return `rgb(${Math.round(234 - 200 * ratio)}, ${Math.round(179 + 18 * ratio)}, ${Math.round(8 + 86 * ratio)})`
    }
    return 'rgb(34, 197, 94)'
  }

  const needleRotation = -90 + (progress / 100) * 180

  return (
    <div className="relative w-full h-16 flex items-end justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMax meet">
        <path d="M 10 45 A 40 40 0 0 1 90 45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 10 45 A 40 40 0 0 1 90 45" fill="none" stroke={getColor(progress)} strokeWidth="8" strokeLinecap="round" strokeDasharray="126" strokeDashoffset={126 - (progress / 100) * 126} style={{ transition: 'stroke 0.1s linear' }} />
        <circle cx="50" cy="45" r="3" fill="white" opacity="0.8" />
        <line x1="50" y1="45" x2="50" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: '50px 45px', transform: `rotate(${needleRotation}deg)`, transition: 'transform 0.1s linear' }} />
      </svg>
    </div>
  )
}
