import { motion } from 'framer-motion'
import { ScrollRevealShape, MorphingShape, PulsingRing } from './AnimatedShapes'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-shapes">
        <MorphingShape delay={0} className="contact-shape-1" />
        <MorphingShape delay={3} className="contact-shape-2" />
        <PulsingRing className="contact-pulse-1" />
      </div>

      <div className="contact-glow"></div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <ScrollRevealShape>
          <h2>
            Ready to build
            <br />
            <em>something</em> amazing?
          </h2>
        </ScrollRevealShape>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's talk about your project and explore how we can work together to
          bring your vision to life.
        </motion.p>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="btn btn-primary">
            Start a conversation <span>→</span>
          </button>
            <a href="mailto:devviroservices@gmail.com" className="btn-link">
            devviroservices@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="info-item">
            <span className="label">Email</span>
            <a href="mailto:devviroservices@gmail.com">devviroservices@gmail.com</a>
          </div>
          <div className="info-item">
            <span className="label">Phone</span>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
          <div className="info-item">
            <span className="label">Location</span>
            <p>India / Worldwide</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
