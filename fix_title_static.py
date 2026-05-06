# -*- coding: utf-8 -*-
path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/About.jsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_title_block = """            <FadeSwap
              langKey={currentLang}
              className="mb-2"
              style={{
                fontFamily: serif,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#0d1b5e',
              }}
            >
              <h2 style={{ display: 'inline' }}>
                <span className="italic">{content.titleMain}</span>
                <span
                  className="mx-3 inline-block"
                  style={{ color: '#b8860b', fontStyle: 'normal' }}
                >
                  {content.titleSeparator}
                </span>
                <br />
                <span
                  className="italic"
                  style={{
                    background:
                      'linear-gradient(135deg, #b8860b 0%, #d4a945 50%, #8a6510 \n100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {content.titleAccent}
                </span>
              </h2>
            </FadeSwap>"""

new_title_block = """            <div
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
            </div>"""

if old_title_block in content:
    new_content = content.replace(old_title_block, new_title_block)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS: Title is now static with English font')
else:
    # Try without the line continuation in gradient
    old_title_block2 = old_title_block.replace("'linear-gradient(135deg, #b8860b 0%, #d4a945 50%, #8a6510 \n100%)'", "'linear-gradient(135deg, #b8860b 0%, #d4a945 50%, #8a6510 100%)'")
    if old_title_block2 in content:
        new_content = content.replace(old_title_block2, new_title_block)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('SUCCESS via alt match')
    else:
        print('FAILED - searching for the block...')
        idx = content.find('<FadeSwap\n              langKey={currentLang}\n              className="mb-2"')
        if idx != -1:
            end_idx = content.find('</FadeSwap>', idx) + len('</FadeSwap>')
            print('Found block:')
            print(repr(content[idx:end_idx]))
        else:
            print('Block not found at all')
