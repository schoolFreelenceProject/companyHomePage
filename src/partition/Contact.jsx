import officePlate from '../assets/IMG_4853.jpeg'
import officeMark from '../assets/IMG_4856.jpeg'
import telegramQr from '../assets/contact/telegram-qr.png'
import facebookQr from '../assets/contact/facebook-qr.png'
import tiktokQr from '../assets/contact/tiktok-qr.png'
import viberQr from '../assets/contact/viber-qr.png'
import ScrollReveal from './ScrollReveal'

const CONTACT_DETAILS = [
  {
    label: 'Japan',
    lines: [
      '〒257-0004 神奈川県秦野市下大槻 655',
      '昴伊奈 １０２号室',
    ],
  },
  {
    label: 'Myanmar',
    lines: [
      'No. 284, 3rd Floor, Htay Kywe (A) Ward,',
      'Kyaikkasan Road, Yangon.',
      '(Near Tamwe Market Bus Stop)',
    ],
  },
]

const QUICK_CONTACTS = [
  {
    label: 'Office Number',
    value: '09 449 554 697',
    type: 'phone',
  },
  {
    label: 'Office Hour',
    value: '9:00 a.m. to 5:00 p.m',
    type: 'clock',
  },
]

const SOCIALS = [
  { name: 'Telegram', qr: telegramQr, mark: 'TG', color: '#0ea5d7' },
  { name: 'Facebook', qr: facebookQr, mark: 'f', color: '#1f5f9f' },
  { name: 'TikTok', qr: tiktokQr, mark: 'TT', color: '#111111' },
  { name: 'Viber', qr: viberQr, mark: 'VB', color: '#7a3fc4' },
]

const ContactIcon = ({ type }) => {
  if (type === 'phone') {
    return (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.3 3.6 9.1 7c.4.8.2 1.7-.5 2.3l-1 1c1.1 2.3 2.8 4 5.1 5.1l1.1-1c.6-.6 1.5-.8 2.3-.4l3.3 1.7c.8.4 1.2 1.3 1 2.2l-.4 2c-.2.9-1 1.5-1.9 1.5C9.4 21.3 2.7 14.6 2.7 5.9c0-.9.6-1.7 1.5-1.9l2-.4c.4-.1.8-.1 1.1 0Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg width="29" height="29" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.2v5.3h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Contact = () => {
  const serif = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  const display = "'Cinzel', 'Cormorant Garamond', Georgia, serif"
  const sans = "'Inter', -apple-system, system-ui, sans-serif"
  const japaneseFont = "'Noto Serif JP', 'Hiragino Mincho ProN', serif"

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:px-8"
      style={{
        background:
          'linear-gradient(180deg, #fbf6ec 0%, #f4ead2 52%, #e9dcc0 100%)',
        fontFamily: serif,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #8a6510 1px, transparent 1px), linear-gradient(#8a6510 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #b8860b 25%, #d4a945 50%, #b8860b 75%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mb-14 flex items-center justify-center gap-5" direction="soft">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#b8860b]" />
          <span
            className="text-[11px] font-medium tracking-[0.5em] text-[#8a6510]"
            style={{ fontFamily: display }}
          >
            CONTACT
          </span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#b8860b]" />
        </ScrollReveal>

        <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:items-start">
          <ScrollReveal direction="left" delay={120}>
            <h2
              className="text-[48px] italic sm:text-[64px] lg:text-[72px]"
              style={{
                fontFamily: serif,
                fontWeight: 500,
                lineHeight: 1,
                color: '#0d1b5e',
                textShadow: '0 2px 18px rgba(13,27,94,0.1)',
              }}
            >
              Contact Us
            </h2>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-14 bg-[#b8860b]" />
              <span
                className="text-[10px] tracking-[0.45em] text-[#8a6510]"
                style={{ fontFamily: display }}
              >
                SORA EMPIRE
              </span>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {CONTACT_DETAILS.map((item) => (
                <address key={item.label} className="not-italic">
                  <h3
                    className="mb-4 italic"
                    style={{
                      fontFamily: serif,
                      fontSize: '2.45rem',
                      fontWeight: 500,
                      lineHeight: 1,
                      color: '#0d1b5e',
                    }}
                  >
                    {item.label}
                  </h3>
                  <div
                    className="space-y-2 text-[18px] leading-[1.5] text-[#28325f]"
                    style={{
                      fontFamily: item.label === 'Japan' ? japaneseFont : serif,
                      fontWeight: 500,
                    }}
                  >
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </address>
              ))}
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {QUICK_CONTACTS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border-l-2 border-[#b8860b] bg-white/35 px-5 py-5"
                  style={{
                    boxShadow:
                      '0 8px 24px rgba(13,27,94,0.06), inset 0 0 0 1px rgba(184,134,11,0.18)',
                  }}
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center text-[#0d1b5e]"
                    style={{
                      background: 'linear-gradient(180deg, #ffffff 0%, #f5ead0 100%)',
                      border: '1px solid rgba(184,134,11,0.35)',
                      borderRadius: '4px',
                    }}
                  >
                    <ContactIcon type={item.type} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.25em] text-[#8a6510]"
                      style={{ fontFamily: display }}
                    >
                      {item.label}
                    </p>
                    <p className="mt-1 text-[24px] font-semibold leading-tight text-[#0d1b5e]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:soraempirewoldwide@gmail.com"
              className="mt-10 inline-flex max-w-full items-center gap-3 border-b border-[#b8860b]/60 pb-2 text-[18px] text-[#0d1b5e] transition-colors duration-300 hover:text-[#8a6510] sm:text-[22px] lg:text-[24px]"
              style={{
                fontFamily: sans,
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              <span className="truncate">soraempirewoldwide@gmail.com</span>
              <span className="text-[#b8860b]">→</span>
            </a>
          </ScrollReveal>

          <ScrollReveal className="relative" direction="right" delay={260}>
            <div
              className="absolute -left-3 -top-3 h-28 w-28"
              style={{
                background: 'linear-gradient(135deg, #0d1b5e 0%, #1a2855 100%)',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                boxShadow: '4px 4px 16px rgba(13,27,94,0.18)',
              }}
            />
            <div
              className="absolute -bottom-3 -right-3 h-28 w-28"
              style={{
                background: 'linear-gradient(135deg, #b8860b 0%, #d4a945 100%)',
                clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
                boxShadow: '-4px -4px 16px rgba(184,134,11,0.18)',
              }}
            />

            <div
              className="relative overflow-hidden bg-white"
              style={{
                border: '1px solid rgba(184,134,11,0.42)',
                borderRadius: '4px',
                boxShadow:
                  '0 20px 40px rgba(13,27,94,0.18), 0 4px 12px rgba(184,134,11,0.12)',
              }}
            >
              <img
                src={officePlate}
                alt="Sora Empire office plate"
                className="h-[300px] w-full object-cover"
              />
              <div className="grid grid-cols-2">
                <img
                  src={officeMark}
                  alt="Sora Empire office mark"
                  className="h-44 w-full object-cover"
                />
                <div
                  className="flex items-center justify-center px-6 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #0d1b5e 0%, #16285f 100%)',
                    color: '#f8efd9',
                  }}
                >
                  <div>
                    <p
                      className="text-[10px] tracking-[0.42em] text-[#d4a945]"
                      style={{ fontFamily: display }}
                    >
                      OFFICE
                    </p>
                    <p
                      className="mt-3 text-[24px] italic leading-tight"
                      style={{ fontFamily: serif }}
                    >
                      Japan & Myanmar
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-2"
                style={{ border: '1px solid rgba(184,134,11,0.25)' }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/*<div className="mt-20">*/}
          {/*<div className="mb-8 flex items-center justify-center gap-4">*/}
          {/*  <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b8860b]" />*/}
          {/*  <span*/}
          {/*    className="text-[10px] tracking-[0.45em] text-[#8a6510]"*/}
          {/*    style={{ fontFamily: display }}*/}
          {/*  >*/}
          {/*    SOCIAL CHANNELS*/}
          {/*  </span>*/}
          {/*  <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b8860b]" />*/}
          {/*</div>*/}

          {/*<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">*/}
          {/*  {SOCIALS.map((social) => (*/}
          {/*    <div*/}
          {/*      key={social.name}*/}
          {/*      className="group relative bg-white/60 px-5 pb-6 pt-12 text-center backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"*/}
          {/*      style={{*/}
          {/*        border: '1px solid rgba(184,134,11,0.35)',*/}
          {/*        borderRadius: '4px',*/}
          {/*        boxShadow:*/}
          {/*          '0 8px 24px rgba(13,27,94,0.08), 0 1px 3px rgba(184,134,11,0.06)',*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div*/}
          {/*        className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white"*/}
          {/*        style={{*/}
          {/*          background: social.color,*/}
          {/*          border: '6px solid #fbf6ec',*/}
          {/*          borderRadius: '999px',*/}
          {/*          boxShadow: `0 6px 18px ${social.color}44`,*/}
          {/*          fontFamily: display,*/}
          {/*          fontSize: social.name === 'Facebook' ? '32px' : '15px',*/}
          {/*          fontWeight: 700,*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        {social.mark}*/}
          {/*      </div>*/}
          {/*      <img*/}
          {/*        src={social.qr}*/}
          {/*        alt={`${social.name} QR code`}*/}
          {/*        className="mx-auto aspect-square w-full max-w-[210px] object-contain"*/}
          {/*      />*/}
          {/*      <p*/}
          {/*        className="mt-4 text-[11px] tracking-[0.34em] text-[#0d1b5e]"*/}
          {/*        style={{ fontFamily: display }}*/}
          {/*      >*/}
          {/*        {social.name}*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #b8860b 25%, #d4a945 50%, #b8860b 75%, transparent)',
        }}
      />
    </section>
  )
}

export default Contact
