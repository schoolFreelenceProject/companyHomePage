# -*- coding: utf-8 -*-
path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/About.jsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_quote = """              <FadeSwap
                langKey={currentLang}
                className="italic"
                style={{
                  fontFamily: serif,
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#3a3a5a',
                }}
              >
                <p>{content.quote}</p>
              </FadeSwap>"""

new_quote = """              <p
                className="italic"
                style={{
                  fontFamily: serifBase,
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#3a3a5a',
                }}
              >
                Building bridges across nations
              </p>"""

if old_quote in content:
    new_content = content.replace(old_quote, new_quote)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS: Quote is now static with English font')
else:
    print('FAILED - block not found')
    idx = content.find('content.quote')
    if idx != -1:
        print(repr(content[idx-200:idx+100]))
