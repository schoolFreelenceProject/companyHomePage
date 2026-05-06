import { useEffect, useState } from 'react'
import academyLogo from '../assets/IMG_4853.jpeg'
import estatesLogo from '../assets/IMG_4854.jpeg'
import jewelleryLogo from '../assets/IMG_4855.jpeg'
import climateLogo from '../assets/IMG_4856.jpeg'
import fashionLogo from '../assets/IMG_4857.jpeg'
import technologyLogo from '../assets/IMG_4858.jpeg'
import ScrollReveal from './ScrollReveal'

const SECTION = {
  EN: {
    tagline:
      'Each enterprise carries the SORA standard — purpose, craft, and trust passed across every endeavour.',
    visit: 'Discover',
  },
  MM: {
    tagline:
      'လုပ်ငန်းတိုင်းသည် SORA စံချိန်စံညွှန်းကို သယ်ဆောင်ထားသည် — ရည်ရွယ်ချက်၊ လက်ရာနှင့် ယုံကြည်မှု။',
    visit: 'ကြည့်ရန်',
  },
  JP: {
    tagline:
      'すべての企業がSORAの基準を体現する — 目的、技、そして信頼。',
    visit: '詳細',
  },
}

const SERVICES = [
  {
    roman: 'I',
    accent: '#0d1b5e',
    accentSoft: '#1a2855',
    logo: academyLogo,
    parent: { EN: 'Languages Academy', MM: 'ဘာသာစကား အကယ်ဒမီ', JP: '言語アカデミー' },
    name: { EN: 'SORA Empire', MM: 'SORA Empire', JP: 'SORA Empire' },
    category: { EN: 'Education', MM: 'ပညာရေး', JP: '教育' },
    desc: {
      EN: 'Empowering global communication through immersive language education and certified learning pathways.',
      MM: 'ဘာသာစကား သင်ကြားရေးနှင့် အသိအမှတ်ပြုသင်ရိုးများဖြင့် ကမ္ဘာ့အဆင့် ဆက်သွယ်ရေးကို စွမ်းဆောင်ရည်မြှင့်တင်ပေးသည်။',
      JP: '没入型の言語教育と認定学習を通じてグローバルコミュニケーションを支援。',
    },
  },
  {
    roman: 'II',
    accent: '#0d1b5e',
    accentSoft: '#1a2855',
    logo: estatesLogo,
    parent: { EN: 'Crown Estates', MM: 'Crown Estates', JP: 'Crown Estates' },
    name: { EN: '28', MM: '၂၈', JP: '28' },
    category: { EN: 'Real Estate', MM: 'အိမ်ခြံမြေ', JP: '不動産' },
    desc: {
      EN: 'Premium real estate, refined living, and property stewardship at the heart of the city.',
      MM: 'အရည်အသွေးမြင့် အိမ်ခြံမြေနှင့် ဇိမ်ခံနေထိုင်မှုကို စောင့်ရှောက်ပေးသည်။',
      JP: 'プレミアム不動産と上質な暮らし、都市の中心地での資産運営。',
    },
  },
  {
    roman: 'III',
    accent: '#b8860b',
    accentSoft: '#d4a945',
    logo: jewelleryLogo,
    parent: { EN: 'Diamond & Jewellery', MM: 'စိန်နှင့် ရွှေထည်', JP: 'ダイヤモンド & ジュエリー' },
    name: { EN: 'SORA', MM: 'SORA', JP: 'SORA' },
    category: { EN: 'Atelier', MM: 'အလှအပ', JP: 'アトリエ' },
    desc: {
      EN: 'Heirloom diamonds and bespoke jewellery, handcrafted with timeless precision and provenance.',
      MM: 'အဆင့်မြင့် စိန်များနှင့် တစ်ဦးချင်းစီအတွက် လက်ရာမြောက် ရွှေထည်ပစ္စည်းများ။',
      JP: '伝統と精緻な技で仕立てる、時を超える高級ジュエリー。',
    },
  },
  {
    roman: 'IV',
    accent: '#1f6f96',
    accentSoft: '#3da0c8',
    logo: climateLogo,
    parent: { EN: 'Ichi Sky', MM: 'Ichi Sky', JP: 'Ichi Sky' },
    name: { EN: 'Air-con Solution', MM: 'လေအေးပေးစက်', JP: 'エアコン' },
    category: { EN: 'Engineering', MM: 'အင်ဂျင်နီယာ', JP: 'エンジニアリング' },
    desc: {
      EN: 'Precision climate engineering — keeping homes, offices, and ateliers in perfect comfort.',
      MM: 'အိမ်များ၊ ရုံးခန်းများနှင့် လုပ်ငန်းခွင်များအတွက် စိတ်ချရသော လေဝင်လေထွက်စနစ်။',
      JP: '住宅、オフィス、工房を快適に保つ精密な空調エンジニアリング。',
    },
  },
  {
    roman: 'V',
    accent: '#1a1a1a',
    accentSoft: '#3a3a3a',
    logo: fashionLogo,
    parent: { EN: 'Sancar Pann', MM: 'Sancar Pann', JP: 'Sancar Pann' },
    name: { EN: 'Fashion House', MM: 'ဖက်ရှင်အိမ်တော်', JP: 'ファッションハウス' },
    category: { EN: 'Couture', MM: 'ဖက်ရှင်', JP: 'クチュール' },
    desc: {
      EN: 'Elegant ready-to-wear and bespoke pieces — a quiet luxury for the modern wardrobe.',
      MM: 'ခေတ်မီ ဝတ်စုံများနှင့် တစ်ဦးချင်းစီအတွက် အမှာပုံစံ ထုတ်ပစ္စည်းများ။',
      JP: 'エレガントなプレタポルテと注文服 — 現代の装いに静かな贅沢を。',
    },
  },
  {
    roman: 'VI',
    accent: '#1f4ba8',
    accentSoft: '#3266c8',
    logo: technologyLogo,
    parent: { EN: 'BluePrint', MM: 'BluePrint', JP: 'BluePrint' },
    name: { EN: 'Technology', MM: 'နည်းပညာ အဖွဲ့', JP: 'テクノロジー' },
    category: { EN: 'Technology', MM: 'နည်းပညာ', JP: 'テクノロジー' },
    desc: {
      EN: 'Architecting digital foundations — software, systems, and the future of work, drafted with care.',
      MM: 'ဆော့ဖ်ဝဲ၊ စနစ်များနှင့် အလုပ်လုပ်ပုံ၏ အနာဂတ်ကို စိတ်ဂရုစိုက်စွာ တည်ဆောက်သည်။',
      JP: 'ソフトウェアとシステムで未来を築く、丁寧に設計されたデジタル基盤。',
    },
  },
]

const langFontFor = (lang, fallback) => {
  if (lang === 'MM') return `'Noto Serif Myanmar', ${fallback}`
  if (lang === 'JP') return `'Noto Serif JP', ${fallback}`
  return fallback
}

const FadeSwap = ({ children, langKey, className, style, delay = 280 }) => {
  const [visible, setVisible] = useState(true)
  const [displayed, setDisplayed] = useState(children)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => {
      setDisplayed(children)
      setVisible(true)
    }, delay)
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

const Services = ({ currentLang = 'EN' }) => {
  const serifBase = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  const display = "'Cinzel', 'Cormorant Garamond', Georgia, serif"
  const sansBase = "'Inter', -apple-system, system-ui, sans-serif"

  const serif = serifBase
  const sans = sansBase
  const translatedSerif = langFontFor(currentLang, serifBase)
  const section = SECTION[currentLang] || SECTION.EN

  return (
    <section
      id="services"
      className="relative overflow-hidden px-8 py-24"
      style={{
        background:
          'radial-gradient(ellipse at 70% 30%, #ffffff 0%, #fbf7ed 55%, #ecdfc4 100%)',
        fontFamily: serif,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
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

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mb-6 flex items-center justify-center gap-5" direction="soft">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#b8860b]" />
          <FadeSwap
            langKey="EN"
            className="text-[11px] font-medium tracking-[0.5em] text-[#8a6510]"
            style={{ fontFamily: display }}
          >
            SERVICES · VI
          </FadeSwap>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#b8860b]" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <FadeSwap
            langKey="EN"
            className="mb-4 text-center"
            style={{
              fontFamily: serif,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: '#0d1b5e',
            }}
          >
            <h2 className="italic">Our Houses</h2>
          </FadeSwap>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={170}>
          <FadeSwap
            langKey="EN"
            className="mx-auto mb-6 max-w-2xl text-center"
            style={{
              fontFamily: serif,
              fontSize: '20px',
              color: '#8a6510',
              fontStyle: 'italic',
              fontWeight: 500,
            }}
          >
            Six ventures. One empire.
          </FadeSwap>
        </ScrollReveal>

        <div className="mx-auto mb-6 flex items-center justify-center gap-3">
          <span className="h-[1.5px] w-12 bg-[#b8860b]" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1 L9 7 L15 8 L9 9 L8 15 L7 9 L1 8 L7 7 Z"
              fill="#d4a945"
              stroke="#b8860b"
              strokeWidth="0.4"
            />
          </svg>
          <span className="h-[1.5px] w-12 bg-[#b8860b]" />
        </div>

        <ScrollReveal direction="up" delay={240}>
          <FadeSwap
            langKey={currentLang}
            className="mx-auto mb-16 max-w-2xl text-center"
            style={{
              fontFamily: translatedSerif,
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#3a3a5a',
              minHeight: '54px',
            }}
          >
            {section.tagline}
          </FadeSwap>
        </ScrollReveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.roman} className="h-full" delay={index * 90} direction="soft">
              <article
              className="group relative flex h-full min-h-[470px] flex-col overflow-hidden bg-white/55 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1"
              style={{
                border: '1px solid rgba(184,134,11,0.35)',
                boxShadow:
                  '0 4px 16px rgba(13,27,94,0.06), 0 1px 3px rgba(184,134,11,0.05)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] transition-all duration-500 group-hover:h-[5px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent} 30%, ${service.accentSoft} 50%, ${service.accent} 70%, transparent)`,
                }}
              />

              <div
                className="absolute top-3 left-3 text-[10px] tracking-[0.4em] text-[#8a6510]"
                style={{ fontFamily: display }}
              >
                {service.roman}
              </div>
              <div
                className="absolute top-3 right-3 text-[9px] tracking-[0.3em] text-[#b8860b]/60"
                style={{ fontFamily: display }}
              >
                ◆
              </div>

              <div className="flex h-full flex-col px-7 pb-7 pt-12">
                <div className="mb-6 flex justify-center">
                  <div
                    className="relative flex h-24 w-24 items-center justify-center overflow-hidden bg-white transition-transform duration-500 group-hover:scale-105"
                    style={{
                      borderRadius: '4px',
                      boxShadow: `0 8px 20px ${service.accent}33, 0 2px 6px ${service.accent}22`,
                    }}
                  >
                    <img
                      src={service.logo}
                      alt={`${service.parent.EN} logo`}
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.accent}22 0%, transparent 55%, ${service.accentSoft}22 100%)`,
                      }}
                    />
                    <div
                      className="pointer-events-none absolute inset-1.5"
                      style={{
                        border: '1px solid rgba(255,255,255,0.45)',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>

                <FadeSwap
                  langKey="EN"
                  className="mb-2 text-center text-[10px] font-medium text-[#8a6510]"
                  style={{
                    fontFamily: sans,
                    letterSpacing: '0.45em',
                    textTransform: 'uppercase',
                  }}
                >
                  {service.category.EN}
                </FadeSwap>

                <div className="mx-auto mb-3 h-px w-10 bg-[#b8860b]/60" />

                <FadeSwap
                  langKey="EN"
                  className="min-h-[76px] text-center"
                  style={{
                    fontFamily: serif,
                    color: '#0d1b5e',
                  }}
                >
                  <h3
                    className="italic"
                    style={{
                      fontSize: '26px',
                      fontWeight: 500,
                      lineHeight: 1.15,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {service.parent.EN}
                  </h3>
                  <div
                    className="mt-1 text-[13px] font-medium"
                    style={{
                      color: service.accent,
                      fontFamily: display,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {service.name.EN}
                  </div>
                </FadeSwap>

                <div className="my-5 flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-[#b8860b]/50" />
                  <span className="text-[8px] text-[#b8860b]/60">◆</span>
                  <span className="h-px w-6 bg-[#b8860b]/50" />
                </div>

                <FadeSwap
                  langKey={currentLang}
                  className="min-h-[105px] text-center"
                  style={{
                    fontFamily: translatedSerif,
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    color: '#3a3a5a',
                    fontWeight: 400,
                  }}
                >
                  <p>{service.desc[currentLang]}</p>
                </FadeSwap>

                <div
                  className="mt-auto flex h-12 items-end justify-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    fontFamily: display,
                    fontSize: '10px',
                    letterSpacing: '0.4em',
                    color: service.accent,
                    textTransform: 'uppercase',
                  }}
                >
                  <span>{section.visit}</span>
                  <span>→</span>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent} 50%, transparent)`,
                }}
              />
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20 flex items-center justify-center gap-4" direction="soft">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#b8860b]" />
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#b8860b" strokeWidth="0.6" />
            <path
              d="M11 3 L12 10 L19 11 L12 12 L11 19 L10 12 L3 11 L10 10 Z"
              fill="#d4a945"
              stroke="#b8860b"
              strokeWidth="0.4"
            />
          </svg>
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#b8860b]" />
        </ScrollReveal>
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

export default Services
