import { Moon, Sun } from 'lucide-react'
import { useActiveSection, type Theme } from '../hooks'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]
const IDS = NAV.map((n) => n.id)

export function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const active = useActiveSection(IDS)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label="Back to top">
          AF<span className="accent">.</span>
        </a>
        <nav aria-label="Sections" className="nav-wrap">
          <ul className="nav">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={active === n.id ? 'is-active' : undefined}
                  aria-current={active === n.id ? 'true' : undefined}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}
