import { motion } from 'framer-motion'
import { FloatingShape, RotatingShape } from './AnimatedShapes'
import '../styles/About.css'

const values = [
  {
    number: '01',
    title: 'Clarity before decoration',
    description: 'Every visual choice supports a clear message and a useful next step.',
  },
  {
    number: '02',
    title: 'Performance is design',
    description: 'Fast, resilient experiences are part of the craft, not an afterthought.',
  },
  {
    number: '03',
    title: 'Built to evolve',
    description: 'We create flexible foundations that stay useful as your business grows.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-background">
        <FloatingShape delay={0} className="about-shape-1" />
        <RotatingShape duration={14} className="about-ring-1" />
      </div>

      <div className="about-container">
        <motion.div
          className="about-story"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">05 / About Devviro</span>
          <h2>
            Small studio.
            <br />
            <em>Big thinking.</em>
          </h2>
          <p>
            Devviro is an independent digital studio for teams who want thoughtful
            strategy, distinctive design, and software that feels effortless.
          </p>
          <p>
            We stay close to the work, ask better questions, and build partnerships
            that turn ambitious ideas into products people can use every day.
          </p>

          <div className="about-stats">
            <div>
              <strong>4+</strong>
              <span>disciplines</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>collaborative</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>curiosity</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-values"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="about-values-header">
            <span className="section-label">What guides us</span>
            <h3>Principles, not shortcuts.</h3>
          </div>

          <div className="about-values-list">
            {values.map((value) => (
              <article className="about-value" key={value.number}>
                <span className="about-value-number">{value.number}</span>
                <div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="btn btn-primary about-cta" href="#projects">
            See what we're building <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
