import React, { useState, useEffect, useRef } from 'react'
import soraLogo from '../assets/soraLogo.png'

const LANGUAGES = [
  { code: 'EN', label: 'English', native: 'English' },
  { code: 'MM', label: 'Myanmar', native: 'မြန်မာ' },
  { code: 'JP', label: 'Japanese', native: '日本語' },
]

const Navbar = ({ currentLang, setCurrentLang }) => {
  const serif = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  const display = "'Cinzel', 'Cormorant Garamond', Georgia, serif"

  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const lang = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0]

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const linkClass =
    'group relative text-[#1a1a3a] transition-colors duration-300 hover:text-[#8a6510]'

  return (
    <nav
      className="mx-auto flex h-full items-center justify-between px-8"
      style={{ fontFamily: serif }}
    >
      <div className="flex items-center gap-4">
        <img src={soraLogo} alt="Sora Empire" className="h-12 w-auto object-contain" />
      </div>

      <ul
        className="flex items-center gap-7 text-[15px] font-medium tracking-[0.22em] uppercase"
        style={{ fontFamily: display, fontWeight: 500 }}
      >
        <li>
          <a href="#about" className={linkClass}>
            <span>About</span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
          </a>
        </li>

        <li aria-hidden className="text-[8px] tracking-widest text-[#b8860b]/70">◆</li>

        <li>
          <a href="#services" className={linkClass}>
            <span>Services</span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
          </a>
        </li>

        <li aria-hidden className="text-[8px] tracking-widest text-[#b8860b]/70">◆</li>

        <li>
          <a href="#contact" className={linkClass}>
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
          </a>
        </li>

        <li className="ml-3" ref={ref}>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
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
                className="absolute right-0 top-full z-30 mt-2 w-44 overflow-hidden border border-[#b8860b]/40 shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #fbf6ec 0%, #f5ead0 100%)',
                  fontFamily: serif,
                }}
              >
                {LANGUAGES.map((item, i) => {
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
                        i !== LANGUAGES.length - 1
                          ? 'border-b border-[#b8860b]/20'
                          : ''
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
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
