import React, { useEffect, useRef, useState } from 'react'
import soraLogo from '../assets/soraLogo.png'

const LANGUAGES = [
  { code: 'EN', label: 'English', native: 'English' },
  { code: 'MM', label: 'Myanmar', native: 'မြန်မာ' },
  { code: 'JP', label: 'Japanese', native: '日本語' },
]

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = ({ currentLang, setCurrentLang }) => {
  const serif = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  const display = "'Cinzel', 'Cormorant Garamond', Georgia, serif"

  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef(null)

  const lang = LANGUAGES.find((item) => item.code === currentLang) || LANGUAGES[0]

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const linkClass =
    'group relative text-[#1a1a3a] transition-colors duration-300 hover:text-[#8a6510]'

  return (
    <nav
      ref={ref}
      className="relative z-10 mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-4"
      style={{ fontFamily: serif }}
    >
      <div className="flex items-center justify-between gap-4">
        <a href="#mission" className="shrink-0">
          <img src={soraLogo} alt="Sora Empire" className="h-10 w-auto object-contain sm:h-12" />
        </a>

        <ul
          className="hidden items-center gap-7 text-[15px] font-medium tracking-[0.22em] uppercase lg:flex"
          style={{ fontFamily: display, fontWeight: 500 }}
        >
          {NAV_ITEMS.map((item, index) => (
            <React.Fragment key={item.href}>
              <li>
                <a href={item.href} className={linkClass}>
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              {index !== NAV_ITEMS.length - 1 && (
                <li aria-hidden className="text-[8px] tracking-widest text-[#b8860b]/70">◆</li>
              )}
            </React.Fragment>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="inline-flex items-center gap-2 border border-[#b8860b]/50 px-3 py-[5px] text-[11px] tracking-[0.35em] text-[#8a6510] transition-all duration-300 hover:border-[#b8860b] hover:bg-[#b8860b]/10"
            >
              <span>{lang.code}</span>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              >
                <path d="M1 1 L4.5 5 L8 1" stroke="#8a6510" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </button>

            {open && (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-[70] mt-2 w-44 overflow-hidden border border-[#b8860b]/40 shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #fbf6ec 0%, #f5ead0 100%)',
                  fontFamily: serif,
                }}
              >
                {LANGUAGES.map((item, index) => {
                  const active = item.code === lang.code
                  return (
                    <li
                      key={item.code}
                      role="option"
                      aria-selected={active}
                      onClick={() => {
                        setCurrentLang(item.code)
                        setOpen(false)
                      }}
                      className={`flex cursor-pointer items-center justify-between px-4 py-3 text-[13px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                        index !== LANGUAGES.length - 1 ? 'border-b border-[#b8860b]/20' : ''
                      } ${
                        active
                          ? 'bg-[#b8860b]/10 text-[#1a1a3a]'
                          : 'text-[#3a3a5a] hover:bg-[#b8860b]/8 hover:text-[#1a1a3a]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="text-[10px] font-semibold tracking-[0.3em] text-[#8a6510]"
                          style={{ fontFamily: display }}
                        >
                          {item.code}
                        </span>
                        <span className="text-[#b8860b]/40">·</span>
                        <span
                          className="text-[14px] normal-case tracking-normal"
                          style={{ fontFamily: serif }}
                        >
                          {item.native}
                        </span>
                      </span>
                      {active && (
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path
                            d="M1 4.5 L4 7.5 L10 1.5"
                            stroke="#8a6510"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center border border-[#b8860b]/45 text-[#8a6510] transition-colors duration-300 hover:bg-[#b8860b]/10 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M4 4 L14 14 M14 4 L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M3 5 H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 9 H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 13 H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-full z-[65] mt-3 border border-[#b8860b]/35 p-4 shadow-lg lg:hidden"
          style={{
            background: 'linear-gradient(180deg, #fbf6ec 0%, #f5ead0 100%)',
          }}
        >
          <div className="flex flex-col gap-4 text-[13px] tracking-[0.18em] uppercase" style={{ fontFamily: display }}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={linkClass} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
