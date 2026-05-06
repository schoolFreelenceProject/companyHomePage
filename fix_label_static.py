# -*- coding: utf-8 -*-
path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/About.jsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_label = """            <FadeSwap
              langKey={currentLang}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#b8860b]" />
              <span
                className="text-[11px] font-medium text-[#8a6510]"
                style={{
                  fontFamily: sans,
                  letterSpacing: labelTracking,
                  textTransform: labelTransform,
                }}
              >
                {content.label}
              </span>
            </FadeSwap>"""

new_label = """            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b8860b]" />
              <span
                className="text-[11px] font-medium text-[#8a6510] uppercase tracking-[0.45em]"
                style={{ fontFamily: sansBase }}
              >
                Message from the Founder
              </span>
            </div>"""

if old_label in content:
    new_content = content.replace(old_label, new_label)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS: Label is now static with English font')
else:
    print('FAILED - block not found')
    idx = content.find('className="mb-5 flex items-center gap-3"')
    if idx != -1:
        print(repr(content[idx-50:idx+300]))
