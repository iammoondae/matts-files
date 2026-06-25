import sys

js_path = "/home/moondae/Antigravity Projects/Matts Files_apk/app.js"

with open(js_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the start of MATATAG_COMPETENCIES
start_mc = content.find("const MATATAG_COMPETENCIES = {")
if start_mc == -1:
    print("[ERROR] Could not find const MATATAG_COMPETENCIES = {")
    sys.exit(1)

# Find the g3 block inside it
start_g3 = content.find("g3: {", start_mc)
if start_g3 == -1:
    print("[ERROR] Could not find g3: { inside MATATAG_COMPETENCIES")
    sys.exit(1)

# Find the matching closing brace for g3 block
# We count open braces '{' and close braces '}'
brace_count = 0
end_g3 = -1
for idx in range(start_g3 + 4, len(content)):
    char = content[idx]
    if char == '{':
        brace_count += 1
    elif char == '}':
        if brace_count == 0:
            end_g3 = idx + 1
            break
        else:
            brace_count -= 1

if end_g3 == -1:
    print("[ERROR] Could not find closing brace for g3 block")
    sys.exit(1)

print(f"Safe match for g3 block: start={start_g3}, end={end_g3}")
print("Snippet to replace:")
print(content[start_g3:start_g3+100], "...", content[end_g3-100:end_g3])

new_g3_competencies = """g3: {
    math: {
      "Term 1": [
        "M3NS-T1-W1-2: Illustrate, estimate, and derive formulas for the area of squares and rectangles using square tile units",
        "M3NS-T1-W2: Find the areas of squares and rectangles in sq. cm and sq. m, solve area word problems, and recognize points, lines, segments, and rays",
        "M3NS-T1-W3: Recognize and draw parallel, intersecting, and perpendicular lines; draw line segments of equal length using a ruler",
        "M3NS-T1-W4: Represent whole numbers up to 10,000 using pictorial models and numerals",
        "M3NS-T1-W5: Read and write numbers up to 10,000 in numerals and in words",
        "M3NS-T1-W6: Describe the position of objects using ordinal numbers up to 100th",
        "M3NS-T1-W7-8: Determine place value, value, and digit of a 4-digit number",
        "M3NS-T1-W9: Round whole numbers to the nearest ten, hundred, or thousand; compare numbers using relation symbols",
        "M3NS-T1-W10: Order whole numbers up to 10,000 from smallest to largest and vice versa"
      ],
      "Term 2": [
        "M3NS-T2-W1: Measure, estimate, and compare mass of objects in grams, kilograms, and milligrams",
        "M3NS-T2-W2: Measure, estimate, and compare capacity in liters and milliliters",
        "M3NS-T2-W3: Read, write, and add money up to ₱10,000, with and without regrouping",
        "M3NS-T2-W4: Estimate the sum of addends with up to 4 digits",
        "M3NS-T2-W5: Solve problems involving addition of numbers with sums up to 10,000, including money",
        "M3NS-T2-W6: Subtract numbers up to 10,000, with and without regrouping",
        "M3NS-T2-W7: Estimate difference of two numbers, and perform addition/subtraction of 3 to 4 numbers",
        "M3NS-T2-W8: Solve problems involving addition and subtraction, and collect data from experiments",
        "M3NS-T2-W9: Present and interpret data in tables and single bar graphs",
        "M3NS-T2-W10: Solve problems using data in single bar graphs, and describe/compare outcomes of events"
      ],
      "Term 3": [
        "M3NS-T3-W1: Multiply numbers using the 6, 7, 8, and 9 multiplication tables",
        "M3NS-T3-W2: Illustrate and apply properties of multiplication for the 6, 7, 8, and 9 tables",
        "M3NS-T3-W3: Multiply numbers with/without regrouping (2 to 4 digits), and estimate products",
        "M3NS-T3-W4: Solve 1-to-2 step multiplication problems, and determine missing terms in patterns",
        "M3NS-T3-W5: Illustrate division through equal jumps on number line and as inverse of multiplication",
        "M3NS-T3-W6: Divide numbers using the 6, 7, 8, and 9 multiplication tables, and solve missing numbers",
        "M3NS-T3-W7: Divide numbers (2 to 4 digits) with and without remainder, including by 10, 100, 1000",
        "M3NS-T3-W8-9: Estimate quotients, solve division problems, represent fractions, and add/subtract similar fractions",
        "M3ME-T3-W9: Describe and draw the effect of a two-direction multi-step slide (translation) in basic shapes",
        "M3ME-T3-W10: Identify shapes with line symmetry, and complete symmetric figures"
      ]
    },
    science: {
      "Term 1": [
        "S3MT-T1-W1-3: Identify objects, activities, or natural events in the local environment, participate in guided activities, describe uses of science equipment, and explain science process skills",
        "S3MT-T1-W4: Describe physical properties of solid materials (hard, shiny, stretchable), explain phase changes, handle/dispose of materials properly, and identify properties and uses of metals"
      ],
      "Term 2": [
        "S3LT-T2-W1-4: Observe and describe the difference between living and non-living things, their characteristics (grow, respond, reproduce), and describe outer body parts of animals and plants",
        "S3LT-T2-W5-7: Identify basic needs of all living things, explain dependencies on the environment, recognize the need to protect the environment, explore object movement, and measure position changes"
      ],
      "Term 3": [
        "S3FE-T3-W1-3: Explore and describe how sound is made and transferred, describe sources of light and their uses, explore light behavior, and explain safety measures for light and sound",
        "S3ES-T3-W4-6: Locate and describe non-living things, identify useful things made from earth materials, record weather changes and their effects, observe sky objects, and describe sun safety"
      ]
    },
    english: {
      "Term 1": [
        "EN3-T1-W1-5: Identify sight words and read words accurately according to patterns (CVCC, CCVC), identify high-frequency words, and use content-specific words",
        "EN3-T1-W6-10: Use simple sentences to express ideas, identify parts of sentences (subject/predicate), use capitalization and punctuation, and comprehend stories (characters, setting, plot)"
      ],
      "Term 2": [
        "EN3-T2-W1-5: Decode words with long vowels (CVCe) and vowel digraphs, identify compound words and homonyms, and use personal and possessive pronouns",
        "EN3-T2-W6-10: Sequence events, identify main ideas, write compound sentences, make inferences, and write short paragraphs"
      ],
      "Term 3": [
        "EN3-T3-W1-5: Decode words with diphthongs and r-controlled vowels, use action and linking verbs, and write descriptive sentences",
        "EN3-T3-W6-10: Form degrees of comparison of adjectives, use prepositions, identify cause-and-effect, and write simple letters or journal entry"
      ]
    },
    filipino: {
      "Term 1": [
        "F3-T1-W1-5: Nasasagot ang mga tanong tungkol sa napakinggang kwento, naipakikilala ang sarili gamit ang magalang na pananalita, at nagagamit ang pangngalang pantangi at pambalana",
        "F3-T1-W6-10: Natutukoy ang kasarian ng pangngalan, elemento ng kwento (tauhan, tagpuan, banghay), at nabibigyang-kahulugan ang mga salita"
      ],
      "Term 2": [
        "F3-T2-W1-5: Nagagamit ang panghalip panao at pamatlig sa pakikipag-usap, at nasusunod ang 2-3 hakbang na panuto",
        "F3-T2-W6-10: Napagsusunod-sunod ang mga pangyayari sa kwento, natutukoy ang paksang diwa, at nakasusulat na may tamang bantas"
      ],
      "Term 3": [
        "F3-T3-W1-5: Natutukoy at nagagamit ang pandiwa sa iba't ibang aspekto, at nakikilala ang mga salitang magkasingkahulugan at magkasalungat",
        "F3-T3-W6-10: Naiuugnay ang sariling karanasan sa binasa, napag-iiba ang katotohanan sa opinyon, at nakasusulat ng talaarawan o liham-pangkaibigan"
      ]
    },
    makabansa: {
      "Term 1": [
        "MAK3-T1-W1-5: Natatalakay ang mahahalagang tao, lugar, at pangyayari na bahagi ng kasaysayan ng pook na kinabibilangan",
        "MAK3-T1-W6-8: Naipaliliwanag ang mga pagbabagong naganap sa kinabibilangang komunidad",
        "MAK3-T1-W9-10: Napahahalagahan ang kasaysayan at pagbabagong nagaganap sa kinabibilangang komunidad"
      ],
      "Term 2": [
        "MAK3-T2-W1-2: Naipaliliwanag ang ugnayan ng kapaligiran at kultura",
        "MAK3-T2-W3-5: Natatalakay ang kahulugan ng pagkakakilanlan at sagisag ng kinabibilangang komunidad tulad ng himno, coat of arms, bayaning lokal at iba pa",
        "MAK3-T2-W6-8: Naiuugnay ang kultura sa sariling pagkakakilanlan",
        "MAK3-T2-W9-10: Napahahalagahan ang sining at kultura ng mas malawak na komunidad (bayan, lungsod, lalawigan, rehiyon)"
      ],
      "Term 3": [
        "MAK3-T3-W1: Naipaliliwanag ang konsepto at mga kaugnay na kaisipan ng pagka-Pilipino",
        "MAK3-T3-W2-3: Naiuugnay ang sariling katangian sa pagiging isang Pilipino",
        "MAK3-T3-W4: Napahahalagahan ang pagkakakilanlan bilang isang Pilipino",
        "MAK3-T3-W5-6: Natutukoy ang papel ng pagiging aktibong Pilipino",
        "MAK3-T3-W7-8: Napahahalagahan ang papel ng pagiging aktibong Pilipino",
        "MAK3-T3-W9-10: Naipamamalas ang pagiging isang aktibo at responsableng batang Pilipino (Pagsasakatuparan ng Panatang Makabayan)"
      ]
    },
    gmrc: {
      "Term 1": [
        "GMRC3-T1-W1-5: Naipakikita ang tiwala sa sarili, pagiging mapagmalasakit sa pag-iingat ng pera/gamit, at pagiging responsable sa tungkulin",
        "GMRC3-T1-W6-10: Naipakikita ang pananalig sa Diyos sa pamamagitan ng pagsunod sa Kaniyang aral, disiplina sa kapaligiran, at magalang na pakikitungo"
      ],
      "Term 2": [
        "GMRC3-T2-W1-5: Naipakikita ang pagiging mapagpasensiya sa kapuwa, maingat na paghuhusga sa impormasyon, at pagiging totoo sa pakikipag-ugnayan",
        "GMRC3-T2-W6-10: Naipakikita ang pagkukusa sa gawain, pagtulong sa kapuwa, pagiging masunurin, at paggalang sa Persons with Disability (PWD)"
      ],
      "Term 3": [
        "GMRC3-T3-W1-5: Nakapagsasanay sa pagiging madasalin, pagiging masinop sa paglikha ng gamit, at pagmamahal sa bayan sa angkop na kilos",
        "GMRC3-T3-W6-10: Nakikipagtulungan sa pangkatang gawain (bayanihan), pangangalaga sa kalikasan, paghihiwalay ng basura, at paggalang sa watawat"
      ]
    }
  }"""

content_new = content[:start_g3] + new_g3_competencies + content[end_g3:]

# Replaces the quarters declaration
quarters_old = 'const quarters = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];'
quarters_new = 'const quarters = (grade === \'g3\') ? ["Term 1", "Term 2", "Term 3"] : ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];'

if quarters_old in content_new:
    content_new = content_new.replace(quarters_old, quarters_new)
    print("Quarters display replaced successfully.")
else:
    print("[WARNING] const quarters not found or already replaced.")

with open(js_path, "w", encoding="utf-8") as f:
    f.write(content_new)

print("Safe update of app.js completed successfully!")
