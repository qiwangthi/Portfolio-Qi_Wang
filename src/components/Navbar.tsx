import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        {t.hero.name}
      </Link>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {menuOpen && (
          <li className="navbar__overlay" onClick={() => setMenuOpen(false)} />
        )}
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
            {t.nav.about}
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            {t.nav.projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            {t.nav.contact}
          </a>
        </li>
        <li>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            {t.nav.resume}
          </Link>
        </li>
        <li>
          <div className="navbar__controls">
            <div className="lang-switch">
              <button
                className={`lang-switch__btn${language === 'en' ? ' lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button
                className={`lang-switch__btn${language === 'de' ? ' lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage('de')}
              >
                DE
              </button>
            </div>
            <button
              className="theme-switch"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
