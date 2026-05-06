import React, { useState, useEffect } from 'react'
import founderPhoto from '../assets/IMG_4855.jpeg'
import ScrollReveal from './ScrollReveal'

const CONTENT = {
  EN: {
    label: 'Message from the Founder',
    titleMain: 'SORA Empire',
    titleSeparator: '—',
    titleAccent: 'Goal',
    body: (
      <>
        To become a{' '}
        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>
          worldwide company
        </span>{' '}
        that connects countries through{' '}
        <span style={{ color: '#8a6510', fontStyle: 'italic' }}>
          education, export, and import
        </span>{' '}
        — creating lasting value for both business and society.
      </>
    ),
    quote: 'Building bridges across nations ',
    role: 'Founder',
    tags: ['Education', 'Trade', 'Society'],
  },
  MM: {
    label: 'Message from the Founder',
    titleMain: 'SORA Empire',
    titleSeparator: '—',
    titleAccent: 'Goal',
    body: (
      <>
        ပညာရေး၊ ပို့ကုန်နှင့် သွင်းကုန်များဖြင့် နိုင်ငံများကို ချိတ်ဆက်ပေးသော{' '}
        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>
          ကမ္ဘာ့အဆင့် ကုမ္ပဏီ
        </span>{' '}
        တစ်ခုအဖြစ် ရပ်တည်ပြီး လုပ်ငန်းနှင့် လူ့အဖွဲ့အစည်း နှစ်မျိုးလုံးအတွက်
        ရေရှည်တန်ဖိုးကို ဖန်တီးပေးနိုင်ရန်။
      </>
    ),
    quote: 'Building bridges across nations ',
    role: 'Founder',
    tags: ['Education', 'Trade', 'Society'],
  },
  JP: {
    label: 'Message from the Founder',
    titleMain: 'SORA Empire',
    titleSeparator: '—',
    titleAccent: 'Goal',
    body: (
      <>
        教育、輸出、輸入を通じて国々をつなぐ{' '}
        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>
          世界的な会社
        </span>{' '}
        となり、ビジネスと社会の両方に持続的な価値をもたらすことを目指します。
      </>
    ),
    quote: 'Building bridges across nations ',
    role: 'Founder',
    tags: ['Education', 'Trade', 'Society'],
  },
}

const langFontFor = (lang, fallback) => {
  if (lang === 'MM')
    return `'Noto Serif Myanmar', ${fallback}`
  if (lang === 'JP')
    return `'Noto Serif JP', ${fallback}`
  return fallback
}

const FadeSwap = ({ children, langKey, className, style }) => {
  const [visible, setVisible] = useState(true)
  const [displayed, setDisplayed] = useState(children)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => {
      setDisplayed(children)
      setVisible(true)
    }, 280)
    return () => clearTimeout(timer)
  }, [langKey]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    >
      {displayed}
    </div>
  )
}

const About = ({ currentLang = 'EN' }) => {
  const serifBase =
    "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  const display = "'Cinzel', 'Cormorant Garamond', Georgia, serif"
  const sansBase = "'Inter', -apple-system, system-ui, sans-serif"

  const serif = langFontFor(currentLang, serifBase)
  const sans = langFontFor(currentLang, sansBase)

  const isLatin = currentLang === 'EN'
  const labelTracking = isLatin ? '0.45em' : 'normal'
  const labelTransform = isLatin ? 'uppercase' : 'none'
  const tagTracking = isLatin ? '0.45em' : 'normal'

  const content = CONTENT[currentLang] || CONTENT.EN

  return (
    <section
      id="about"
      className="relative overflow-hidden px-8 py-24"
      style={{
        background:
          'radial-gradient(ellipse at 30% 25%, #ffffff 0%, #fbf7ed 55%, #f0e6d0 100%)',
        fontFamily: serif,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #8a6510 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #b8860b 25%, #d4a945 50%, #b8860b 75%, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-2 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(184,134,11,0.4) 50%, transparent)',
        }}
      />

      <div className="ornament-drift pointer-events-none absolute top-8 left-8 opacity-40">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="31" stroke="#b8860b" strokeWidth="0.5" />
          <circle cx="32" cy="32" r="24" stroke="#b8860b" strokeWidth="0.3" />
          <path
            d="M32 4 L34 30 L60 32 L34 34 L32 60 L30 34 L4 32 L30 30 Z"
            stroke="#b8860b"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="ornament-drift pointer-events-none absolute top-8 right-8 opacity-40">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="31" stroke="#b8860b" strokeWidth="0.5" />
          <circle cx="32" cy="32" r="24" stroke="#b8860b" strokeWidth="0.3" />
          <path
            d="M32 4 L34 30 L60 32 L34 34 L32 60 L30 34 L4 32 L30 30 Z"
            stroke="#b8860b"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="mb-16 flex items-center justify-center gap-5" direction="soft">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#b8860b]" />
          <span
            className="text-[11px] font-medium tracking-[0.5em] text-[#8a6510]"
            style={{ fontFamily: display }}
          >
            FOUNDER · I
          </span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#b8860b]" />
        </ScrollReveal>

        <div className="grid items-center gap-14 md:grid-cols-[5fr_7fr]">
          <ScrollReveal className="relative" direction="left" delay={120}>
            <div
              className="absolute -top-3 -left-3 z-0 h-32 w-32"
              style={{
                background: 'linear-gradient(135deg, #0d1b5e 0%, #1a2855 100%)',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                boxShadow: '4px 4px 16px rgba(13,27,94,0.2)',
              }}
            />
            <div
              className="absolute -bottom-3 -right-3 z-0 h-32 w-32"
              style={{
                background: 'linear-gradient(135deg, #b8860b 0%, #d4a945 100%)',
                clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
                boxShadow: '-4px -4px 16px rgba(184,134,11,0.18)',
              }}
            />

            <div
              className="relative z-10 overflow-hidden bg-white"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(184,134,11,0.4)',
                boxShadow:
                  '0 20px 40px rgba(13,27,94,0.18), 0 4px 12px rgba(184,134,11,0.12)',
              }}
            >
              <img
                src={founderPhoto}
                alt="Soe Lay — Founder of Sora Empire"
                className="block h-auto w-full object-cover"
                style={{ aspectRatio: '4 / 5' }}
              />
              <div
                className="pointer-events-none absolute inset-2"
                style={{
                  border: '1px solid rgba(184,134,11,0.25)',
                }}
              />
            </div>

            <div className="relative z-10 mt-10 text-center">
              <div className="mx-auto mb-3 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#b8860b]" />
                <span className="text-[10px] text-[#b8860b]">◆</span>
                <span className="h-px w-10 bg-[#b8860b]" />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: display,
                  fontSize: '2rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: '#0d1b5e',
                }}
              >
                SOE LAY
              </h3>
              <FadeSwap
                langKey={currentLang}
                className="text-[11px] text-[#8a6510]"
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  letterSpacing: isLatin ? '0.5em' : 'normal',
                  textTransform: labelTransform,
                }}
              >
                {content.role}
              </FadeSwap>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={260}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b8860b]" />
              <span
                className="text-[11px] font-medium text-[#8a6510] uppercase tracking-[0.45em]"
                style={{ fontFamily: sansBase }}
              >
                Message from the Founder
              </span>
            </div>

            <div
              className="mb-2"
              style={{
                fontFamily: serifBase,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#0d1b5e',
              }}
            >
              <h2 style={{ display: 'inline' }}>
                <span className="italic">SORA Empire</span>
                <span
                  className="mx-3 inline-block"
                  style={{ color: '#b8860b', fontStyle: 'normal' }}
                >
                  —
                </span>
                <br />
                <span
                  className="italic"
                  style={{
                    background:
                      'linear-gradient(135deg, #b8860b 0%, #d4a945 50%, #8a6510 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Goal
                </span>
              </h2>
            </div>

            <div className="my-7 flex items-center gap-4">
              <span className="h-[1.5px] w-16 bg-[#b8860b]" />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2 L11 9 L18 10 L11 11 L10 18 L9 11 L2 10 L9 9 Z"
                  fill="#d4a945"
                  stroke="#b8860b"
                  strokeWidth="0.5"
                />
              </svg>
              <span className="h-[1.5px] w-16 bg-[#b8860b]" />
            </div>

            <FadeSwap
              langKey={currentLang}
              className="mb-8 min-h-[110px]"
              style={{
                fontFamily: serif,
                fontSize: '19px',
                lineHeight: 1.75,
                color: '#1a2855',
                fontWeight: 400,
              }}
            >
              <p>{content.body}</p>
            </FadeSwap>

            <div
              className="relative my-8 border-l-2 border-[#b8860b] py-3 pl-6"
              style={{
                background:
                  'linear-gradient(90deg, rgba(184,134,11,0.06) 0%, transparent 100%)',
              }}
            >
              <span
                className="absolute -left-1 -top-2 text-[3rem] leading-none text-[#b8860b]/40"
                style={{ fontFamily: serifBase, fontStyle: 'italic' }}
              >
                "
              </span>
              <p
                className="italic"
                style={{
                  fontFamily: serifBase,
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#3a3a5a',
                }}
              >
                Building bridges across nations
              </p>
            </div>

            <FadeSwap
              langKey={currentLang}
              className="mt-10 flex items-center gap-3 text-[10px]"
              style={{
                fontFamily: sans,
                fontWeight: 400,
                color: 'rgba(13,27,94,0.55)',
                letterSpacing: tagTracking,
                textTransform: labelTransform,
              }}
            >
              <span>{content.tags[0]}</span>
              <span className="text-[#8a6510]/70">·</span>
              <span>{content.tags[1]}</span>
              <span className="text-[#8a6510]/70">·</span>
              <span>{content.tags[2]}</span>
            </FadeSwap>
          </ScrollReveal>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #b8860b 25%, #d4a945 50%, #b8860b 75%, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-2 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(184,134,11,0.4) 50%, transparent)',
        }}
      />
    </section>
  )
}

export default About
