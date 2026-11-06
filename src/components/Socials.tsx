import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Socials() {
  const { links, email } = profile
  return (
    <div className="socials">
      {links.github && (
        <a href={links.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      )}
      {links.linkedin && (
        <a href={links.linkedin} className="icon-btn" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} className="icon-btn" aria-label="Email">
          <Mail size={20} />
        </a>
      )}
    </div>
  )
}
