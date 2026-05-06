import re

# ── 1. Fix Hero.jsx MM visionText ──────────────────────────────────────────
hero_path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/Hero.jsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    hero = f.read()

# Replace whatever is currently in MM visionText with the correct English text
pattern = r"(  MM: \{.*?visionText: ')[^']*(')"
replacement = r"\1To become a worldwide company that connects countries through education, export, and import — creating lasting value for both business and society.\2"
hero_new = re.sub(pattern, replacement, hero, flags=re.DOTALL)

if hero_new != hero:
    with open(hero_path, 'w', encoding='utf-8') as f:
        f.write(hero_new)
    print('Hero.jsx MM visionText: FIXED')
else:
    print('Hero.jsx: no change made')

# ── 2. Fix About.jsx — only body changes per language, rest stays English ──
about_path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/About.jsx'
with open(about_path, 'r', encoding='utf-8') as f:
    about = f.read()

# Build the new CONTENT object
new_content = '''const CONTENT = {
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
        \u1015\u100a\u102c\u101b\u1031\u1038\u1014\u103e\u1004\u1037\u103a\u104a \u1015\u102d\u102f\u1037\u1000\u102f\u1014\u103a\u1014\u103e\u1004\u1037\u103a \u101e\u103d\u1004\u103a\u1038\u1000\u102f\u1014\u103a\u1019\u103b\u102c\u1038\u1016\u103c\u1004\u1037\u103a \u1014\u102d\u102f\u1004\u103a\u1004\u1036\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1015\u1031\u1038\u101e\u1031\u102c{' '}
        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>
          \u1000\u1019\u1039\u1018\u102c\u1037\u1021\u1006\u1004\u1037\u103a \u1000\u102f\u1019\u1039\u1015\u100a\u102e
        </span>{' '}
        \u1010\u1005\u103a\u1001\u102f\u1021\u1016\u103c\u1005\u103a \u101b\u1015\u103a\u1010\u100a\u103a\u1015\u103c\u102e\u1038 \u101c\u102f\u1015\u103a\u1004\u1036\u1038\u1014\u103e\u1004\u1037\u103a \u101e\u102c\u101b\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1010\u1005\u103a\u1001\u102f\u1021\u1016\u103c\u1005\u103a \u101b\u1015\u103a\u1010\u100a\u103a\u1015\u103c\u102e\u1038 \u1005\u1031\u1038\u1006\u103d\u1014\u103a\u1038\u1000\u1031\u102c\u1004\u103a\u1019\u103c\u103e\u1014\u103a\u101e\u1031\u102c\u104b
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
        \u6559\u80b2\u3001\u8f38\u51fa\u3001\u8f38\u5165\u3092\u901a\u3058\u3066\u56fd\u3005\u3092\u3064\u306a\u3050{' '}
        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>
          \u4e16\u754c\u7684\u306a\u4f1a\u793e
        </span>{' '}
        \u3068\u306a\u308a\u3001\u30d3\u30b8\u30cd\u30b9\u3068\u793e\u4f1a\u306e\u4e21\u65b9\u306b\u6301\u7d9a\u7684\u306a\u4fa1\u5024\u3092\u3082\u305f\u3089\u3059\u3053\u3068\u3092\u76ee\u6307\u3057\u307e\u3059\u3002
      </>
    ),
    quote: 'Building bridges across nations ',
    role: 'Founder',
    tags: ['Education', 'Trade', 'Society'],
  },
}'''

# Replace the old CONTENT block
old_content_pattern = r'const CONTENT = \{.*?\n\}'
about_new = re.sub(old_content_pattern, new_content, about, flags=re.DOTALL)

if about_new != about:
    with open(about_path, 'w', encoding='utf-8') as f:
        f.write(about_new)
    print('About.jsx CONTENT: FIXED')
else:
    print('About.jsx: no change made')
