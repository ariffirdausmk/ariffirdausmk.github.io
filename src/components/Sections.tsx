import { Award, ExternalLink } from 'lucide-react'
import { achievements, education, experience, profile, projects, skills } from '../data/profile'
import { Section } from './Section'

function Tags({ items }: { items: string[] }) {
  if (!items.length) return null
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="tag mono">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="prose reveal">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.org + job.role} className="timeline__item reveal">
            <p className="meta mono">{job.period}</p>
            <div>
              <h3 className="card__title">
                {job.role} <span className="muted">· {job.org}</span>
              </h3>
              {job.location && <p className="muted small">{job.location}</p>}
              <p>{job.summary}</p>
              {job.highlights.length > 0 && (
                <ul className="bullets">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <Tags items={job.tech ?? []} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid grid--2">
        {projects.map((p) => (
          <article key={p.title} className="card reveal">
            <header className="card__head">
              <h3 className="card__title">{p.title}</h3>
              <span className="meta mono">{p.year}</span>
            </header>
            <p>{p.summary}</p>
            <Tags items={p.tech} />
            {p.links && p.links.length > 0 && (
              <div className="card__links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid grid--3">
        {skills.map((s) => (
          <div key={s.group} className="card reveal">
            <h3 className="card__title">{s.group}</h3>
            <Tags items={s.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="stack">
        {education.map((e) => (
          <article key={e.school} className="card edu reveal">
            <div className="edu__logo">
              <img src={e.logo} alt={`${e.school} logo`} loading="lazy" />
            </div>
            <div>
              <header className="card__head">
                <h3 className="card__title">{e.school}</h3>
                <span className="meta mono">{e.period}</span>
              </header>
              <p>
                {e.credential} <span className="muted">· {e.grade}</span>
              </p>
              {e.details && <p className="muted small">{e.details}</p>}
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead reveal">
        <Award size={18} aria-hidden="true" /> Earlier achievements
      </h3>
      <ul className="achievements">
        {achievements.map((a) => (
          <li key={a.title} className="reveal">
            <span className="meta mono">{a.year}</span>
            <div>
              <strong>{a.title}</strong>
              <p className="muted small">{a.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
