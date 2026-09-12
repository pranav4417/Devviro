import React from 'react'
import { motion } from 'framer-motion'
import '../styles/AnimatedShapes.css'

interface AnimatedShapeProps {
  delay?: number
  duration?: number
  children?: React.ReactNode
  className?: string
}

export function RotatingShape({ delay = 0, duration = 6, className = '' }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`rotating-shape ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    />
  )
}

export function ExpandingCircle({ delay = 0, className = '' }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`expanding-circle ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.5 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  )
}

export function RevealingBox({ delay = 0, children, className = '' }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`revealing-box ${className}`}
      initial={{ width: 0, height: 0, opacity: 0 }}
      whileInView={{ width: '100%', height: 'auto', opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingShape({
  delay = 0,
  className = '',
}: AnimatedShapeProps) {
  return (
    <motion.div
      className={`floating-shape ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [-10, 10, -10],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

export function MorphingShape({ delay = 0, className = '' }: AnimatedShapeProps) {
  const keyframes = [
    '60% 40% 30% 70% / 60% 30% 70% 40%',
    '30% 60% 70% 40% / 50% 60% 30% 60%',
    '40% 60% 60% 30% / 70% 60% 40% 50%',
  ]

  return (
    <motion.div
      className={`morphing-shape ${className}`}
      animate={{ borderRadius: keyframes }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
      }}
    />
  )
}

export function PulsingRing({ delay = 0, className = '' }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`pulsing-ring ${className}`}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
    />
  )
}

export function ScrollRevealShape({ children, className = '' }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`scroll-reveal-shape ${className}`}
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
      whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

export function MouseFollowShape({ className = '' }: AnimatedShapeProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = e.clientX - centerX
        const y = e.clientY - centerY
        const angle = Math.atan2(y, x) * (180 / Math.PI)
        ref.current.style.transform = `rotate(${angle}deg)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={ref} className={`mouse-follow-shape ${className}`} />
}
