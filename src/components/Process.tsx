import { motion } from 'framer-motion'
import { RotatingShape, FloatingShape } from './AnimatedShapes'
import '../styles/Process.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your goals, audience, and competitive landscape.',
      icon: '◆',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive plan aligned with your business objectives.',
      icon: '■',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Create beautiful, user-focused designs that engage and convert.',
      icon: '▲',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deploy, optimize, and measure success with continuous improvement.',
      icon: '●',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  return (
    <section className="process" id="process">
      <div className="process-bg">
        <RotatingShape duration={15} className="process-ring-1" />
        <FloatingShape delay={1} className="process-float-1" />
      </div>

      <div className="process-container">
        <motion.div
          className="process-header"
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
            04 / Our Process
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How we work
          </motion.p>
        </motion.div>

        <motion.div
          className="steps-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="step-card"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="step-number-bg">
                <motion.div
                  className="step-number"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.3,
                  }}
                >
                  {step.number}
                </motion.div>
                <RotatingShape
                  duration={10 + i * 2}
                  className="step-ring"
                />
              </div>

              <div className="step-icon">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {step.icon}
                </motion.span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              {i < steps.length - 1 && (
                <motion.div
                  className="step-connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
                  viewport={{ once: true, margin: '-100px' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
