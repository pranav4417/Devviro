import { motion } from 'framer-motion'
import { RotatingShape, ScrollRevealShape, FloatingShape } from './AnimatedShapes'
import '../styles/Portfolio.css'

export default function Portfolio() {
  const projects = [
    {
      number: '01',
      title: 'E-Commerce Platform',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '◆',
    },
    {
      number: '02',
      title: 'SaaS Dashboard',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '■',
    },
    {
      number: '03',
      title: 'Mobile App',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '▲',
    },
    {
      number: '04',
      title: 'Brand Identity',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: '●',
    },
  ]

  return (
    <section className="portfolio" id="work">
      <div className="portfolio-bg">
        <FloatingShape delay={0} className="portfolio-shape-1" />
        <FloatingShape delay={2} className="portfolio-shape-2" />
      </div>

      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
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
            03 / Selected Work
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recent projects we're proud of
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ScrollRevealShape key={i} className="project-reveal">
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)' }}
              >
                <div className="project-visual">
                  <div
                    className="project-gradient"
                    style={{ background: project.gradient }}
                  />
                  <div className="project-content">
                    <RotatingShape
                      duration={12}
                      className="project-ring"
                    />
                    <motion.div
                      className="project-icon"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                  <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overlay-content">
                      <h4>View Case Study</h4>
                      <p>↗</p>
                    </div>
                  </motion.div>
                </div>

                <div className="project-info">
                  <div className="project-number">{project.number}</div>
                  <h3>{project.title}</h3>
                  <motion.div
                    className="project-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: '40px' }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15 + 0.3,
                    }}
                    viewport={{ once: true, margin: '-100px' }}
                  />
                </div>
              </motion.div>
            </ScrollRevealShape>
          ))}
        </div>
      </div>
    </section>
  )
}
