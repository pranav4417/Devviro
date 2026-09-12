import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { RotatingShape, MorphingShape, FloatingShape, ScrollRevealShape } from './AnimatedShapes'
import '../styles/Hero.css'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Parallax effect on shapes
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * 0.05
        const y = (e.clientY - rect.top - rect.height / 2) * 0.05

        const visualElement = containerRef.current.querySelector('.hero-visual') as HTMLElement
        if (visualElement) {
          visualElement.style.transform = `translate(${x}px, ${y}px)`
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  return (
    <section className="hero" id="home" ref={containerRef}>
      {/* Animated background shapes */}
      <div className="hero-shapes-bg">
        <MorphingShape delay={0} className="shape-morph-1" />
        <MorphingShape delay={2} className="shape-morph-2" />
        <FloatingShape delay={1} className="shape-float-1" />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-label"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <span className="label-dot">●</span>
          Independent digital studio · India / Worldwide
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          Good ideas<br />
          <em>deserve</em> better<br />
          <ScrollRevealShape className="title-reveal">
            <span className="highlight">digital.</span>
          </ScrollRevealShape>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          We design and build premium websites, apps, and digital products for organizations ready to move forward.
        </motion.p>

        <motion.div
          className="hero-cta"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <button className="btn btn-primary">
            Let's build something <span>↗</span>
          </button>
          <a href="#work" className="btn-link">
            See our work <span>↓</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="orb-container">
          <RotatingShape className="orb-ring-1" />
          <RotatingShape duration={8} className="orb-ring-2" />

          <div className="orb orb-main"></div>
          <div className="orb orb-secondary"></div>

          <FloatingShape className="orb-float" />

          <span className="orb-label">DEV / 01</span>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
        <span>01 — 05</span>
      </motion.div>
    </section>
  )
}
