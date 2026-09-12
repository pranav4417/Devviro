import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExpandingCircle, RevealingBox } from './AnimatedShapes'
import '../styles/Services.css'

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && containerRef.current) {
          containerRef.current.classList.add('in-view')
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      number: '01',
      title: 'Strategy & UX',
      description: 'We research, analyze, and strategize to create solutions that users love.',
      icon: '◆',
    },
    {
      number: '02',
      title: 'Design & Branding',
      description: 'Beautiful, intentional design that communicates your unique story.',
      icon: '■',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Clean, performant code that brings designs to life at scale.',
      icon: '▲',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous improvement through analytics, testing, and iteration.',
      icon: '●',
    },
  ]

  return (
    <section className="services" id="services" ref={containerRef}>
      <ExpandingCircle delay={0} className="service-circle-1" />
      <ExpandingCircle delay={0.3} className="service-circle-2" />
      <ExpandingCircle delay={0.6} className="service-circle-3" />

      <div className="services-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            02 / Our Services
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What we offer
          </motion.p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <RevealingBox key={i} delay={i * 0.1}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(99, 102, 241, 0.2)' }}
              >
                <div className="service-icon-bg">
                  <motion.div
                    className="service-icon"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.div
                  className="service-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: '30px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true, margin: '-100px' }}
                />
              </motion.div>
            </RevealingBox>
          ))}
        </div>
      </div>
    </section>
  )
}
