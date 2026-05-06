import React, { useState, useEffect } from 'react'

const CONTENT = {
  EN: {
    missionPoints: [
      'To provide high-quality education services that empower individuals and open doors to global opportunities.',
      'To build strong and trustworthy export/import networks that connect Myanmar with the world.',
      'To contribute and operate with transparency, fairness, and a global mindset, working for the benefit of the public.'
    ],
    visionText: 'To build a trusted international company where education and global trade create opportunities that empower people, strengthen communities, and contribute to a better society.',
  },
  MM: {
    missionPoints: [
      'အရည်အသွေးမြင့် ပညာရေးဝန်ဆောင်မှုများ ပေးအပ်ပြီး တစ်ဦးချင်းစီကို စွမ်းဆောင်ရည်မြှင့်တင်ပေးကာ ကမ္ဘာလုံးဆိုင်ရာ အခွင့်အလမ်းများသို့ လမ်းညွှန်ပေးနိုင်ရန်။',
      'ခိုင်မာပြီး ယုံကြည်စိတ်ချရသော ပို့ကုန်/သွင်းကုန် ကွန်ရက်များ တည်ဆောက်ပြီး မြန်မာနိုင်ငံကို ကမ္ဘာနှင့် ချိတ်ဆက်ပေးရန်။',
      'ပြည်သူလူထုအတွက် အကျိုးပြုလုပ်ဆောင်ပြီး ပွင့်လင်းမြင်သာမှု၊ တရားမျှတမှုနှင့်အတူ ကမ္ဘာလုံးဆိုင်ရာ အတွေးအခေါ်များဖြင့် ပါဝင်ဆောင်ရွက်ရန်။'
    ],
    visionText: 'ပညာရေးနှင့် ကမ္ဘာလုံးဆိုင်ရာ ကုန်သွယ်ရေးတို့နှင့်အတူ မြန်မာနိုင်ငံသားများကို စွမ်းဆောင်ရည်မြှင့်တင်ပေးနိုင်ရန်။',
  },
  JP: {
    missionPoints: [
      '個人に力を与え、国際的な機会を広げる高品質な教育サービスを提供することです。',
      'ミャンマーと世界をつなぐ信頼できる輸出入ネットワークを構築することです。',
      '透明性、公平性、国際的な視能を持ち、公共の利益のために貢献し運営することです。'
    ],
    visionText: '教育と国際貿易によって人々を力を与え、地球社会を強化し、より良い社会への貢献を目指す信頼される国際的な企業を築くことです。',
  }
}

/* Animated text block — fades out old content, fades in new */
const FadeText = ({ children, langKey, className, style }) => {
  const [visible, setVisible] = useState(true)
  const [displayed, setDisplayed] = useState(children)

  useEffect(() => {
    // Fade out
    setVisible(false)
    const timer = setTimeout(() => {
      // Swap content while invisible
      setDisplayed(children)
      // Fade in
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
        transition: 'opacity 0.28s ease-in-out',
      }}
    >
      {displayed}
    </div>
  )
}

const Hero = ({ currentLang }) => {
  const missionClip = 'polygon(0 0, 62% 0, 38% 100%, 0 100%)'
  const visionClip  = 'polygon(62% 0, 100% 0, 100% 100%, 38% 100%)'
  const seamClip    = 'polygon(61.7% 0, 62.3% 0, 38.3% 100%, 37.7% 100%)'

  const serif  = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  const display = "'Cinzel', 'Cormorant Garamond', Georgia, serif"
  const sans   = "'Inter', -apple-system, system-ui, sans-serif"

  const content = CONTENT[currentLang] || CONTENT.EN

  return (
    <section
      className="relative h-full min-h-[640px] overflow-hidden"
      style={{ background: '#1a1410', fontFamily: serif }}
    >
      {/* ── Mission background ── */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: missionClip,
          background: 'radial-gradient(ellipse at 30% 35%, #ffffff 0%, #fbf7ed 55%, #f0e6d0 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          clipPath: missionClip,
          background: 'radial-gradient(ellipse at 80% 85%, #d4c8a8 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: missionClip,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.4  0 0 0 0 0.25  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          opacity: 0.12,
          mixBlendMode: 'multiply',
        }}
      />

      {/* ── Vision background ── */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: visionClip,
          background: 'radial-gradient(ellipse at 70% 65%, #1c2c52 0%, #131e3c 45%, #08101f 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-35 mix-blend-overlay"
        style={{
          clipPath: visionClip,
          background: 'radial-gradient(ellipse at 78% 70%, #6a8db8 0%, transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: visionClip,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.85  0 0 0 0 0.9  0 0 0 0 1  0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          opacity: 0.08,
          mixBlendMode: 'overlay',
        }}
      />

      {/* ── Golden seam ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: seamClip,
          background:
            'linear-gradient(180deg, rgba(184,134,11,0.1) 0%, #b8860b 25%, #d4a945 50%, #b8860b 75%, rgba(184,134,11,0.1) 100%)',
          boxShadow: '0 0 24px rgba(212,169,69,0.3)',
        }}
      />

      {/* ── Mission content ── */}
      <div className="absolute top-[16%] left-[8%] w-[34%]">
        {/* Static label row */}
        <div className="mb-6 flex items-center gap-4" style={{ fontFamily: sans }}>
          <span className="text-[10px] font-medium tracking-[0.55em] text-[#8a6510]">I</span>
          <span className="h-px w-10 bg-[#8a6510]/40" />
          <span className="text-[10px] font-light tracking-[0.5em] text-[#0d1b5e]/60 uppercase">
            The Why
          </span>
        </div>

        {/* Static heading */}
        <h2
          className="mb-2 italic"
          style={{
            fontFamily: serif,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: '-0.015em',
            color: '#0d1b5e',
            textShadow: '0 2px 18px rgba(13,27,94,0.12)',
          }}
        >
          Mission
        </h2>

        {/* Static decorative line */}
        <div className="mb-7 flex items-center gap-3" style={{ fontFamily: display }}>
          <span className="h-px w-12 bg-[#8a6510]" />
          <span className="text-[11px] tracking-[0.4em] text-[#8a6510]">ANNO MMXXV</span>
        </div>

        {/* ── ANIMATED: mission points ── */}
        <FadeText
          langKey={currentLang}
          className="max-w-md min-h-[220px]"
          style={{ fontFamily: serif }}
        >
          <ul className="space-y-4 text-[16px] leading-[1.6]" style={{ fontWeight: 400, color: '#1a2855' }}>
            {content.missionPoints.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1.5 text-[10px] text-[#8a6510]">▶</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </FadeText>

        {/* Static footer tags */}
        <div
          className="mt-8 flex items-center gap-3 text-[10px] tracking-[0.45em] uppercase"
          style={{ fontFamily: sans, fontWeight: 400, color: 'rgba(13,27,94,0.55)' }}
        >
          <span>Purpose</span>
          <span className="text-[#8a6510]/70">·</span>
          <span>Craft</span>
          <span className="text-[#8a6510]/70">·</span>
          <span>Trust</span>
        </div>
      </div>

      {/* ── Vision content ── */}
      <div className="absolute bottom-[14%] right-[8%] w-[34%] text-right">
        {/* Static label row */}
        <div className="mb-6 flex items-center justify-end gap-4" style={{ fontFamily: sans }}>
          <span className="text-[10px] font-light tracking-[0.5em] text-[#d4e0f0]/60 uppercase">
            The Horizon
          </span>
          <span className="h-px w-10 bg-[#d4a945]/50" />
          <span className="text-[10px] font-medium tracking-[0.55em] text-[#d4a945]">II</span>
        </div>

        {/* Static heading */}
        <h2
          className="mb-2 italic text-[#eef2fb]"
          style={{
            fontFamily: serif,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: '-0.015em',
            textShadow: '0 4px 32px rgba(0,0,0,0.5)',
          }}
        >
          Vision
        </h2>

        {/* Static decorative line */}
        <div className="mb-7 flex items-center justify-end gap-3" style={{ fontFamily: display }}>
          <span className="text-[11px] tracking-[0.4em] text-[#d4a945]">AD ASTRA</span>
          <span className="h-px w-12 bg-[#d4a945]" />
        </div>

        {/* ── ANIMATED: vision text ── */}
        <FadeText
          langKey={currentLang}
          className="ml-auto max-w-md min-h-[120px]"
          style={{ fontFamily: serif }}
        >
          <div className="flex justify-end gap-3 text-[17px] leading-[1.75] text-[#d4e0f0]/85" style={{ fontWeight: 400 }}>
            <span>{content.visionText}</span>
            <span className="mt-1.5 text-[10px] text-[#d4a945]">◀</span>
          </div>
        </FadeText>

        {/* Static footer tags */}
        <div
          className="mt-8 flex items-center justify-end gap-3 text-[10px] tracking-[0.45em] text-[#d4e0f0]/40 uppercase"
          style={{ fontFamily: sans, fontWeight: 300 }}
        >
          <span>Sky</span>
          <span className="text-[#d4a945]/60">·</span>
          <span>Scale</span>
          <span className="text-[#d4a945]/60">·</span>
          <span>Legacy</span>
        </div>
      </div>

      {/* ── Bottom center wordmark ── */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.7em] uppercase"
        style={{ fontFamily: display, color: 'rgba(212,169,69,0.5)' }}
      >
        Sora · Empire
      </div>

      {/* ── Top-left ornament ── */}
      <div className="pointer-events-none absolute" style={{ top: '4%', left: '2.5%' }}>
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" opacity="0.7">
          <circle cx="34" cy="34" r="33" stroke="#8a6510" strokeWidth="0.5" />
          <circle cx="34" cy="34" r="27" stroke="#8a6510" strokeWidth="0.3" />
          <circle cx="34" cy="34" r="3" fill="#8a6510" opacity="0.5" />
          <path d="M34 1 L34 7 M34 61 L34 67 M1 34 L7 34 M61 34 L67 34" stroke="#8a6510" strokeWidth="0.4" />
          <text x="34" y="13" textAnchor="middle" fill="#8a6510" fontSize="4.5" letterSpacing="2" fontFamily="Cinzel, serif">EST · MMXXV</text>
          <text x="34" y="58" textAnchor="middle" fill="#8a6510" fontSize="4" letterSpacing="3" fontFamily="Cinzel, serif">SORA</text>
        </svg>
      </div>

      {/* ── Bottom-right ornament ── */}
      <div className="pointer-events-none absolute" style={{ bottom: '4%', right: '2.5%' }}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" opacity="0.5">
          <circle cx="36" cy="36" r="35" stroke="#d4a945" strokeWidth="0.5" />
          <path d="M36 6 L40 32 L66 36 L40 40 L36 66 L32 40 L6 36 L32 32 Z" stroke="#d4a945" strokeWidth="0.6" fill="none" />
          <circle cx="36" cy="36" r="2" fill="#d4a945" opacity="0.5" />
        </svg>
      </div>

      {/* ── Top/bottom vignette ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-32 w-full"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 100%)' }}
      />
    </section>
  )
}

export default Hero
