path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/About.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

mm_start = content.find('  MM: {')
jp_start = content.find('  JP: {')
mm_block = content[mm_start:jp_start]

body_start = mm_block.find('    body: (')
body_end = mm_block.find("    ),\n    quote:", body_start) + len("    ),")
old_body = mm_block[body_start:body_end]

new_body = """    body: (
      <>
        \u1015\u100a\u102c\u101b\u1031\u1038\u1014\u103e\u1004\u1037\u103a\u104a \u1015\u102d\u102f\u1037\u1000\u102f\u1014\u103a\u1014\u103e\u1004\u1037\u103a \u101e\u103d\u1004\u103a\u1038\u1000\u102f\u1014\u103a\u1019\u103b\u102c\u1038\u1016\u103c\u1004\u1037\u103a \u1014\u102d\u102f\u1004\u103a\u1004\u1036\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1015\u1031\u1038\u101e\u1031\u102c{' '}
        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>
          \u1000\u1019\u1039\u1018\u102c\u1037\u1021\u1006\u1004\u1037\u103a \u1000\u102f\u1019\u1039\u1015\u100a\u102e
        </span>{' '}
        \u1010\u1005\u103a\u1001\u102f\u1021\u1016\u103c\u1005\u103a \u101b\u1015\u103a\u1010\u100a\u103a\u1015\u103c\u102e\u1038 \u101c\u102f\u1015\u103a\u1004\u1036\u1038\u1014\u103e\u1004\u1037\u103a \u101e\u102c\u101b\u1019\u103b\u102c\u1038\u1000\u102d\u102f
        \u101c\u102f\u1015\u103a\u1004\u1036\u1038\u1014\u103e\u1004\u1037\u103a\u1021\u1010\u103d\u1000\u103a \u101b\u1031\u101b\u103e\u100a\u103a\u1010\u1014\u103a\u1016\u102d\u102f\u1038\u1000\u102d\u102f \u1016\u1014\u103a\u1010\u102e\u1038\u1015\u1031\u1038\u1014\u102d\u102f\u1004\u103a\u101b\u1014\u103a\u104b
      </>
    ),"""

print("Old body:")
print(repr(old_body[:150]))
print("\nReplacing...")

new_mm_block = mm_block.replace(old_body, new_body)
if new_mm_block == mm_block:
    print("REPLACEMENT FAILED - no match")
else:
    new_content = content[:mm_start] + new_mm_block + content[jp_start:]
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESS")
