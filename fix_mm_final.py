# -*- coding: utf-8 -*-
path = '/Users/minthuyein/Desktop/soraEmpire/sora/src/partition/About.jsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

mm_start = content.find('  MM: {')
jp_start = content.find('  JP: {')
mm_block = content[mm_start:jp_start]

body_open = mm_block.find('    body: (')
body_close = mm_block.find('    ),\n    quote:', body_open) + len('    ),')

# Correct Myanmar translation — written as unicode escapes to survive file transfer
# "ပညာရေး၊ ပို့ကုန်နှင့် သွင်းကုန်များဖြင့် နိုင်ငံများကို ချိတ်ဆက်ပေးသော"
line1 = '\u1015\u100a\u102c\u101b\u1031\u1038\u104a \u1015\u102d\u102f\u1037\u1000\u102f\u1014\u103a\u1014\u103e\u1004\u1037\u103a \u101e\u103d\u1004\u103a\u1038\u1000\u102f\u1014\u103a\u1019\u103b\u102c\u1038\u1016\u103c\u1004\u1037\u103a \u1014\u102d\u102f\u1004\u103a\u1004\u1036\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1015\u1031\u1038\u101e\u1031\u102c'
# "ကမ္ဘာ့အဆင့် ကုမ္ပဏီ"
line2 = '\u1000\u1019\u1039\u1018\u102c\u1037\u1021\u1006\u1004\u1037\u103a \u1000\u102f\u1019\u1039\u1015\u100f\u102e'
# "တစ်ခုအဖြစ် ရပ်တည်ပြီး လုပ်ငန်းနှင့် လူ့အဖွဲ့အစည်း နှစ်မျိုးလုံးအတွက်"
line3 = '\u1010\u1005\u103a\u1001\u102f\u1021\u1016\u103c\u1005\u103a \u101b\u1015\u103a\u1010\u100a\u103a\u1015\u103c\u102e\u1038 \u101c\u102f\u1015\u103a\u1004\u1014\u103a\u1038\u1014\u103e\u1004\u1037\u103a \u101c\u1030\u1037\u1021\u1016\u103d\u1032\u1037\u1021\u1005\u100a\u103a\u1038 \u1014\u103e\u1005\u103a\u1019\u103b\u102d\u102f\u1038\u101c\u102f\u1036\u1038\u1021\u1010\u103d\u1000\u103a'
# "ရေရှည်တန်ဖိုးကို ဖန်တီးပေးနိုင်ရန်။"
line4 = '\u101b\u1031\u101b\u103e\u100a\u103a\u1010\u1014\u103a\u1016\u102d\u102f\u1038\u1000\u102d\u102f \u1016\u1014\u103a\u1010\u102e\u1038\u1015\u1031\u1038\u1014\u102d\u102f\u1004\u103a\u101b\u1014\u103a\u104b'

new_body = (
    "    body: (\n"
    "      <>\n"
    "        " + line1 + "{' '}\n"
    "        <span style={{ color: '#0d1b5e', fontWeight: 600 }}>\n"
    "          " + line2 + "\n"
    "        </span>{' '}\n"
    "        " + line3 + "\n"
    "        " + line4 + "\n"
    "      </>\n"
    "    ),"
)

new_mm = mm_block[:body_open] + new_body + mm_block[body_close:]
new_content = content[:mm_start] + new_mm + content[jp_start:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

# Verify
with open(path, 'r', encoding='utf-8') as f:
    verify = f.read()
mm2 = verify[verify.find('  MM: {'):verify.find('  JP: {')]
b_start = mm2.find('body: (')
b_end = mm2.find('    ),\n    quote:') + 6
print(mm2[b_start:b_end])
print("SUCCESS")
