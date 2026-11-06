import { ArrowRight, FileText, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { Socials } from './Socials'

export function Hero() {
  const { links, email } = profile
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero__kicker mono">
          <span className="pulse" aria-hidden="true" />
          {profile.role}
          <span className="sep" aria-hidden="true">/</span>
          <MapPin size={14} aria-hidden="true" /> {profile.location}
        </p>
        <h1 className="hero__title">
          {profile.name}
          <span className="accent">.</span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View my work <ArrowRight size={16} aria-hidden="true" />
          </a>
          {email && (
            <a href={`mailto:${email}`} className="btn">
              <Mail size={16} aria-hidden="true" /> Get in touch
            </a>
          )}
          {links.resume && (
            <a href={links.resume} className="btn" target="_blank" rel="noreferrer">
              <FileText size={16} aria-hidden="true" /> Résumé
            </a>
          )}
          <Socials />
        </div>
      </div>
    </section>
  )
}
