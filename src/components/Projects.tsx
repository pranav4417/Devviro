import { motion } from 'framer-motion'
import { FloatingShape, RotatingShape } from './AnimatedShapes'
import '../styles/Projects.css'

const projects = [
  {
    number: '01',
    title: 'Suraksha WB',
    category: 'Computer services management',
    description:
      'A full-stack workspace for tickets, quotes, invoices, and customer relationships.',
    status: 'In progress',
    stack: ['Next.js', 'PostgreSQL', 'Prisma'],
    tone: 'indigo',
    icon: '⌘',
    url: 'https://github.com/pranav4417/kzcomputers',
    external: true,
  },
  {
    number: '02',
    title: 'Devviro Studio',
    category: 'Digital studio website',
    description:
      'A responsive React experience for showcasing services, process, and selected work.',
    status: 'Live',
    stack: ['React', 'TypeScript', 'Vite'],
    tone: 'rose',
    icon: '◆',
    url: '#home',
    external: false,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-background">
        <FloatingShape delay={0.5} className="projects-shape-1" />
        <RotatingShape duration={18} className="projects-ring-1" />
      </div>

      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">06 / Works in progress</span>
          <h2>
            Building the next
            <br />
            <em>useful thing.</em>
          </h2>
          <p>
            A look at the products and platforms we're shaping alongside our
            client work.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              className={`project-card project-card-${project.tone}`}
              href={project.url}
              key={project.number}
              target={project.external ? '_blank' : undefined}
              rel={project.external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -8 }}
              aria-label={`View ${project.title}`}
            >
              <div className="project-card-visual">
                <span className="project-card-status">{project.status}</span>
                <span className="project-card-icon" aria-hidden="true">
                  {project.icon}
                </span>
                <span className="project-card-number">{project.number}</span>
              </div>

              <div className="project-card-body">
                <div className="project-card-meta">
                  <span>{project.category}</span>
                  <span>↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
