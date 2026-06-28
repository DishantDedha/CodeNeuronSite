'use client'

import { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useReducedMotion } from 'framer-motion'

export default function NodeNetwork({ className = '' }) {
  const canvasRef = useRef(null)
  const { resolvedTheme } = useTheme()
  const prefersReduced = useReducedMotion()
  const stateRef = useRef({ nodes: [], animId: null })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const isDark = resolvedTheme === 'dark'
    const state = stateRef.current

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    function setup() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = W() * dpr
      canvas.height = H() * dpr
      ctx.scale(dpr, dpr)

      state.nodes = Array.from({ length: 22 }, (_, i) => ({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: i < 5 ? 2.8 : 1.4,
        accent: i < 5,
      }))
    }

    function draw() {
      const w = W()
      const h = H()
      ctx.clearRect(0, 0, w, h)

      if (!prefersReduced) {
        state.nodes.forEach((n) => {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        })
      }

      // Draw connections
      for (let i = 0; i < state.nodes.length; i++) {
        for (let j = i + 1; j < state.nodes.length; j++) {
          const a = state.nodes[i]
          const b = state.nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const threshold = 140

          if (dist < threshold) {
            const t = 1 - dist / threshold
            const isAccent = a.accent || b.accent
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = isAccent
              ? `rgba(79,70,229,${t * 0.28})`
              : isDark
              ? `rgba(148,163,184,${t * 0.13})`
              : `rgba(71,85,105,${t * 0.1})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      state.nodes.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.accent
          ? 'rgba(79,70,229,0.82)'
          : isDark
          ? 'rgba(148,163,184,0.45)'
          : 'rgba(71,85,105,0.32)'
        ctx.fill()
      })

      if (!prefersReduced) {
        state.animId = requestAnimationFrame(draw)
      }
    }

    setup()
    draw()

    const ro = new ResizeObserver(() => {
      setup()
      if (prefersReduced) draw()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(state.animId)
      ro.disconnect()
    }
  }, [resolvedTheme, prefersReduced])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}
