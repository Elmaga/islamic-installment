import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const links = [
  { href: '#about', label: 'О сервисе' },
  { href: '#how', label: 'Как это работает' },
  { href: '#principles', label: 'Принципы' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={closeMenu}>
          <span className={styles.mark} aria-hidden>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 22V10l8 5.5L24 10v12h-3.2V14.8L16 18.2l-4.8-3.4V22H8z"
                fill="currentColor"
              />
            </svg>
          </span>
          Амана
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#calculator" className={`btn btn-primary ${styles.cta}`}>
          Рассчитать рассрочку
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <nav aria-label="Мобильная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href="#calculator"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Рассчитать рассрочку
          </a>
        </nav>
      </div>
    </header>
  )
}
