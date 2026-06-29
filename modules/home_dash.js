// Matteo's Learning Hub - Onboarding & Home Dashboard Module
window.AppModules = window.AppModules || {};

window.AppModules.home_dash = (() => {

  const MATATAG_COMPETENCIES = {
    g1: {
      math: {
        "Quarter 1": [
          "M1NS-Ia-1: Visualize and represent whole numbers up to 100",
          "M1NS-Ib-2: Identify the place value (tens, ones) of 2-digit numbers",
          "M1NS-Ic-3: Compare numbers up to 100 using relation symbols (>, <, =)",
          "M1NS-Id-4: Arrange numbers up to 100 in ascending and descending order",
          "M1NS-Ie-5: Read and write ordinal numbers from 1st to 10th"
        ],
        "Quarter 2": [
          "M1NS-IIa-1: Visualize and represent addition of whole numbers up to 100",
          "M1NS-IIb-2: Add 2-digit numbers with sums up to 100 without regrouping",
          "M1NS-IIc-3: Visualize and represent subtraction of numbers up to 100",
          "M1NS-IId-4: Subtract 2-digit numbers from minuends up to 100 without regrouping",
          "M1NS-IIe-5: Solve simple one-step word problems involving addition or subtraction"
        ],
        "Quarter 3": [
          "M1GE-IIIa-1: Identify and describe basic 2D shapes (triangle, square, rectangle, circle)",
          "M1GE-IIIb-2: Compose and decompose 2D shapes using blocks or cutouts",
          "M1ME-IIIc-3: Tell and write time (hour and half-hour) using analog clock",
          "M1ME-IIId-4: Compare lengths, mass, and capacity using non-standard units"
        ],
        "Quarter 4": [
          "M1AL-IVa-1: Complete repeating patterns using shapes, colors, or sizes",
          "M1SP-IVb-2: Collect, organize, and present data in simple tables",
          "M1SP-IVc-3: Interpret data in simple pictographs without scales"
        ]
      },
      science: {
        "Quarter 1": [
          "S1MT-Ia-1: Identify the parts of the human body and their basic functions",
          "S1MT-Ib-2: Use the five sense organs to observe and describe objects",
          "S1MT-Ic-3: Describe healthy habits to protect and care for sense organs"
        ],
        "Quarter 2": [
          "S1LT-IIa-1: Identify common animals in the local environment and their parts",
          "S1LT-IIb-2: Identify common plants in the local environment and their parts",
          "S1LT-IIc-3: Classify plants and animals as living things"
        ],
        "Quarter 3": [
          "S1FE-IIIa-1: Describe how things move (push, pull, roll, slide)",
          "S1FE-IIIb-2: Identify sources of light, heat, and sound in the home",
          "S1FE-IIIc-3: Demonstrate safe habits in handling warm or bright items"
        ],
        "Quarter 4": [
          "S1ES-IVa-1: Observe and describe the weather daily",
          "S1ES-IVb-2: Identify basic landforms and water forms near the school",
          "S1ES-IVc-3: Describe the importance of the Sun to people, plants, and animals"
        ]
      },
      english: {
        "Quarter 1": [
          "LL1OL-Ia-1: Introduce oneself and family using simple greetings",
          "LL1OL-Ib-2: Follow simple 1-to-2 step directions in class routines",
          "LL1PA-Ic-3: Recognize and produce rhyming words in songs and chants"
        ],
        "Quarter 2": [
          "LL1PWS-IIa-1: Identify letters of the alphabet (uppercase and lowercase)",
          "LL1PWS-IIb-2: Associate alphabet letter names with their basic letter sounds",
          "LL1V-IIc-3: Use simple vocabulary words describing common classroom objects"
        ],
        "Quarter 3": [
          "LL1PWS-IIIa-1: Blend sounds to read simple CVC words (e.g., cat, pin, hop)",
          "LL1G-IIIb-2: Use singular and plural nouns with helper words (this/these)",
          "LL1RC-IIIc-3: Retell a story listened to, identifying characters and setting"
        ],
        "Quarter 4": [
          "LL1G-IVa-1: Use simple action words (verbs) to describe daily activities",
          "LL1RC-IVb-2: Make predictions about what happens next in stories",
          "LL1W-IVc-3: Write one's own name and simple high-frequency sight words"
        ]
      },
      filipino: {
        "Quarter 1": [
          "F1PN-Ia-1: Nasasagot ang mga simpleng tanong tungkol sa napakinggang kwento",
          "F1PS-Ib-2: Naipakikila ang sarili gamit ang magalang na pananalita (po/opo)",
          "F1WG-Ic-3: Natutukoy ang ngalan ng tao, bagay, hayop, o lugar (pangngalan)"
        ],
        "Quarter 2": [
          "F1AL-IIa-1: Kilalanin ang mga titik ng alpabetong Filipino at ang kanilang tunog",
          "F1KP-IIb-2: Nababaybay at nababasa ang mga simpleng salita na may dalawang pantig",
          "F1WG-IIc-3: Nagagamit ang panghalip panao (ako, ikaw, siya) sa pakikipag-usap"
        ],
        "Quarter 3": [
          "F1PB-IIIa-1: Nasusundan ang simpleng nakasulat na panuto na may 1-2 hakbang",
          "F1WG-IIIb-2: Natutukoy ang kasarian ng pangngalan (panlalaki at pambabae)",
          "F1PU-IIIc-3: Naisusulat nang maayos sa papel ang mga titik at simpleng salita"
        ],
        "Quarter 4": [
          "F1WG-IVa-1: Natutukoy ang pandiwa o salitang-kilos sa mga simpleng pangungusap",
          "F1PB-IVb-2: Napagsusunod-sunod ang tatlong pangyayari sa binasang kwento",
          "F1PU-IVc-3: Nakasusulat ng simpleng pangungusap na may tamang espasyo ng mga salita"
        ]
      },
      makabansa: {
        "Quarter 1": [
          "MAK1-Ia-1: Nailalarawan ang sariling pagkakakilanlan (pangalan, edad, gusto)",
          "MAK1-Ib-2: Naipaliliwanag ang konsepto ng pamilya at ang mga kasapi nito",
          "MAK1-Ic-3: Naipakikita ang koordinasyon ng katawan sa kilos lokomotor (lakad, takbo)"
        ],
        "Quarter 2": [
          "MAK1-IIa-1: Natutukoy ang mga tungkulin at karapatan ng bawat bata sa pamilya",
          "MAK1-IIb-2: Nailalarawan ang sariling paaralan (pangalan, lokasyon, mga guro)",
          "MAK1-IIc-3: Nakalilikha ng sining gamit ang mga kulay at linya mula sa kalikasan"
        ],
        "Quarter 3": [
          "MAK1-IIIa-1: Natutukoy ang mga kasapi at tungkulin ng mga katulong sa pamayanan",
          "MAK1-IIIb-2: Naipaliliwanag ang mga simpleng patakaran sa kaligtasan sa paaralan",
          "MAK1-IIIc-3: Nakalalahok sa mga tradisyonal na laro tulad ng piko o tumbang preso"
        ],
        "Quarter 4": [
          "MAK1-IVa-1: Nakikibahagi sa pagtatanghal ng musika o sayaw ng rehiyon",
          "MAK1-IVb-2: Naipakikita ang pangangalaga sa mga halaman at hayop sa kapaligiran",
          "MAK1-IVc-3: Nakikibahagi sa pagtatanghal ng dula o pagdiriwang sa paaralan"
        ]
      },
      gmrc: {
        "Quarter 1": [
          "GMRC1-Ia-1: Naisasagawa ang mga gawi sa kalinisan sa sarili (paghuhugas ng kamay)",
          "GMRC1-Ib-2: Naipakikita ang disiplina sa pag-aayos ng personal na gamit sa silid",
          "GMRC1-Ic-3: Pagsasabi ng totoo sa mga magulang sa lahat ng oras (katapatan)"
        ],
        "Quarter 2": [
          "GMRC1-IIa-1: Paggamit ng magagalang na salita tulad ng po at opo sa nakatatanda",
          "GMRC1-IIb-2: Pagbabahagi ng mga laruan o pagkain sa mga kalaro at kapatid",
          "GMRC1-IIc-3: Pag-iwas sa pananakit o pakikipag-away sa mga kaklase"
        ],
        "Quarter 3": [
          "GMRC1-IIIa-1: Pagsunod sa mga rules sa silid-aralan at sa pagpila (disiplina)",
          "GMRC1-IIIb-2: Pangangalaga sa mga aklat at kagamitan sa loob ng paaralan",
          "GMRC1-IIIc-3: Pagiging mahinahon sa pakikipag-usap sa kalaro kapag may alitan"
        ],
        "Quarter 4": [
          "GMRC1-IVa-1: Hindi pagsasayang ng pagkain, tubig, at kuryente sa tahanan",
          "GMRC1-IVb-2: Pagtatapon ng basura sa tamang basurahan sa loob ng bahay",
          "GMRC1-IVc-3: Pagtayo nang tuwid habang inaawit ang Lupang Hinirang"
        ]
      }
    },
    g2: {
      math: {
        "Quarter 1": [
          "M2NS-Ia-1: Visualize and represent numbers up to 1,000",
          "M2NS-Ib-2: Identify the place value and value of digits in a 3-digit number",
          "M2NS-Ic-3: Compare and order numbers up to 1,000 using relation symbols",
          "M2NS-Id-4: Round numbers to the nearest tens and hundreds",
          "M2NS-Ie-5: Read and write ordinal numbers from 1st to 20th"
        ],
        "Quarter 2": [
          "M2NS-IIa-1: Add 3-digit numbers with sums up to 1,000 with and without regrouping",
          "M2NS-IIb-2: Subtract 3-digit numbers with and without regrouping",
          "M2NS-IIc-3: Solve multi-step word problems involving addition and subtraction",
          "M2NS-IId-4: Visualize and represent multiplication as repeated addition"
        ],
        "Quarter 3": [
          "M2NS-IIIa-1: Multiply 1-to-2-digit numbers by 1-digit numbers",
          "M2NS-IIIb-2: Visualize and represent division as equal sharing",
          "M2NS-IIIc-3: State division facts for numbers up to 10",
          "M2NS-IIId-4: Read and write unit fractions with denominators up to 10"
        ],
        "Quarter 4": [
          "M2GE-IVa-1: Identify and draw lines of symmetry in 2D shapes",
          "M2ME-IVb-2: Tell time in hours and minutes using analog clock",
          "M2ME-IVc-3: Solve word problems involving elapsed time in minutes",
          "M2ME-IVd-4: Compare mass in grams (g) and kilograms (kg)"
        ]
      },
      science: {
        "Quarter 1": [
          "S2MT-Ia-1: Classify objects as solid, liquid, or gas based on shape and flow",
          "S2MT-Ib-2: Describe changes in objects when bent, stretched, or pressed",
          "S2MT-Ic-3: Practice safety precautions in handling household chemicals"
        ],
        "Quarter 2": [
          "S2LT-IIa-1: Identify the main external parts and functions of human body",
          "S2LT-IIb-2: Identify animal body coverings and how they help them survive",
          "S2LT-IIc-3: Classify plants by habitat (terrestrial, aquatic) and stem type"
        ],
        "Quarter 3": [
          "S2FE-IIIa-1: Describe how force affects the shape or movement of objects",
          "S2FE-IIIb-2: Identify natural and artificial sources of light and sound",
          "S2FE-IIIc-3: Demonstrate how shadows change shape during the day"
        ],
        "Quarter 4": [
          "S2ES-IVa-1: Identify different types of soil and their uses in gardening",
          "S2ES-IVb-2: Describe water sources in the community and water safety",
          "S2ES-IVc-3: Record daily temperature and weather using basic charts"
        ]
      },
      english: {
        "Quarter 1": [
          "EN2OL-Ia-1: Ask and answer simple questions about oneself, family, and peers",
          "EN2PWS-Ib-2: Read words with short vowel sounds in CVC pattern",
          "EN2G-Ic-3: Classify common and proper nouns in simple sentences"
        ],
        "Quarter 2": [
          "EN2PWS-IIa-1: Decode words with long vowel sounds (CVCe pattern)",
          "EN2G-IIb-2: Use singular and plural nouns with correct be-verbs (is/are)",
          "EN2RC-IIc-3: Sequence three events in a story read aloud"
        ],
        "Quarter 3": [
          "EN2OL-IIIa-1: Express feelings and opinions in class discussions",
          "EN2G-IIIb-2: Use personal pronouns (I, you, he, she, it, we, they) correctly",
          "EN2RC-IIIc-3: Identify the cause and effect in simple sentences"
        ],
        "Quarter 4": [
          "EN2G-IVa-1: Use simple present tense of verbs in matching subjects",
          "EN2G-IVb-2: Identify and use common adjectives (describing words)",
          "EN2W-IVc-3: Write a 2-sentence description of an object or animal"
        ]
      },
      filipino: {
        "Quarter 1": [
          "F2PN-Ia-1: Nasasagot ang mga tanong tungkol sa napakinggang balita o tula",
          "F2WG-Ib-2: Nagagamit ang pangngalang pantangi at pambalana sa pangungusap",
          "F2KP-Ic-3: Natutukoy ang mga salitang magkakatugma sa tula o awit"
        ],
        "Quarter 2": [
          "F2WG-IIa-1: Nagagamit ang mga panghalip pamatlig (ito, iyan, iyon) sa pagtukoy",
          "F2PB-IIb-2: Napagsusunod-sunod ang apat na pangyayari sa kwento",
          "F2PT-IIc-3: Nabibigyang-kahulugan ang mga salita gamit ang context clues"
        ],
        "Quarter 3": [
          "F2WG-IIIa-1: Nagagamit ang mga pandiwa sa kasalukuyan, naganap, at gaganapin",
          "F2PB-IIIb-2: Nakapagbibigay ng sariling wakas sa napakinggan o binasang kwento",
          "F2PU-IIIc-3: Nakasusulat nang maayos sa kabit-kabit (cursive) na paraan"
        ],
        "Quarter 4": [
          "F2WG-IVa-1: Natutukoy at nagagamit ang mga pang-uri sa paglalarawan",
          "F2PB-IVb-2: Naibibigay ang paksa o kaisipan ng isang binasang talata",
          "F2PU-IVc-3: Nakasusulat ng isang simpleng liham-paanyaya gamit ang bantas"
        ]
      },
      makabansa: {
        "Quarter 1": [
          "MAK2-Ia-1: Naipaliliwanag ang konsepto ng sariling komunidad at lokasyon nito",
          "MAK2-Ib-2: Nailalarawan ang pisikal na kapaligiran ng sariling komunidad",
          "MAK2-Ic-3: Naipakikita ang sapat na kontrol sa kilos lokomotor sa paglalaro"
        ],
        "Quarter 2": [
          "MAK2-IIa-1: Natutukoy ang mga mahahalagang tao at landmarks sa komunidad",
          "MAK2-IIb-2: Naipaliliwanag ang kahalagahan ng pakikipagtulungan sa komunidad",
          "MAK2-IIc-3: Nakalilikha ng sining gamit ang mga katutubong disenyo ng komunidad"
        ],
        "Quarter 3": [
          "MAK2-IIIa-1: Nailalarawan ang iba't ibang kultura at tradisyon sa sariling pamayanan",
          "MAK2-IIIb-2: Naipakikita ang pagsunod sa mga batas trapiko at kaligtasan sa kalsada",
          "MAK2-IIIc-3: Nakalalahok sa mga tradisyonal na sayaw ng komunidad"
        ],
        "Quarter 4": [
          "MAK2-IVa-1: Natutukoy ang mga pangunahing kabuhayan at produkto sa pamayanan",
          "MAK2-IVb-2: Nailalarawan ang tamang pag-aalaga sa mga likas na yaman ng komunidad",
          "MAK2-IVc-3: Nakikibahagi sa pagtatanghal ng dula tungkol sa isang lokal na bayani"
        ]
      },
      gmrc: {
        "Quarter 1": [
          "GMRC2-Ia-1: Paglilinis ng katawan at pag-aayos ng sariling higaan (kaayusan)",
          "GMRC2-Ib-2: Pagliligpit ng personal na kagamitan pagkatapos gamitin",
          "GMRC2-Ic-3: Pagsasabi ng katotohanan kahit na may takot sa parusa (katapatan)"
        ],
        "Quarter 2": [
          "GMRC2-IIa-1: Paggamit ng po/opo, pakisuyo, at salamat sa pakikipag-usap",
          "GMRC2-IIb-2: Pagbibigay-daan at pagtulong sa may kapansanan o matatanda",
          "GMRC2-IIc-3: Pagpapakita ng pag-unawa sa kalaro kapag natalo sa laro (sportsmanship)"
        ],
        "Quarter 3": [
          "GMRC2-IIIa-1: Pagsunod sa mga rules sa silid-aralan at sa pagpila (disiplina)",
          "GMRC2-IIIb-2: Pag-iingat sa mga halaman sa hardin at pampublikong lugar",
          "GMRC2-IIIc-3: Mahinahong pakikipag-ayos kapag nagkaroon ng hindi pagkakaunawaan"
        ],
        "Quarter 4": [
          "GMRC2-IVa-1: Pagtitipid sa paggamit ng papel, lapis, at baong pera",
          "GMRC2-IVb-2: Pagsasagawa ng 3Rs (Reduce, Reuse, Recycle) sa paaralan",
          "GMRC2-IVc-3: Paggalang sa watawat at pagkanta nang may galang sa Lupang Hinirang"
        ]
      }
    },
    g3: {
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
          "F3-T1-W1-5: Nasasagot ang mga tanong tungkol sa napakinggang kwento, naipakikila ang sarili gamit ang magalang na pananalita, at nagagamit ang pangngalang pantangi at pambalana",
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
    }
  };

  let competenciesFontScale = 1.0;

  function renderWelcomeDashboard() {
    currentMode = 'home';
    saveSessionState();

    const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
    const mascotName = getMascotName();
    document.getElementById('header-icon').innerText = '🏠';
    document.getElementById('header-title').innerText = 'Welcome Dashboard';
    document.getElementById('header-subtitle').innerText = `Hi ${nickname}! Here\'s your study plan.`;

    document.getElementById('viewport-footer').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('slide-num-label').style.display = 'none';
    document.getElementById('slide-mode-label').innerText = 'Home';

    clearAllActiveNavButtons();
    const homeTab = document.getElementById('tab-home');
    if (homeTab) homeTab.classList.add('active');

    const qBody = document.getElementById('viewport-body');
    if (!qBody) return;

    const grade = getLearnerGrade();
    const subjects = [
      { key: 'math',      icon: '🔢', name: 'Mathematics' },
      { key: 'science',   icon: '🔬', name: 'Science' },
      { key: 'english',   icon: '🙋‍♂️', name: 'English' },
      { key: 'filipino',  icon: '🇵🇭', name: 'Filipino' },
      { key: 'makabansa', icon: '🏘️',  name: 'Makabansa' },
      { key: 'gmrc',      icon: '🧘‍♂️', name: 'GMRC' }
    ];
    const modes = ['study','quiz','challenge','performance','reading','worksheet'];
    const modeIcons = { study:'📖', quiz:'✍️', challenge:'🔥', performance:'📋', reading:'📚', worksheet:'📝' };

    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    const greetEmoji = hour < 12 ? '☀️' : hour < 17 ? '🌤️' : '🌙';
    const dateStr = new Date().toLocaleDateString('en-PH', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    const streak = getActiveStreak();

    let taskCardsHTML = '';
    subjects.forEach(sub => {
      let pillsHTML = '';
      modes.forEach(m => {
        const status = getTaskStatus(currentWeek, sub.key, m);
        const statusIcon = status === 'done' ? '✅' : status === 'inprogress' ? '🔄' : '⬜';
        const statusClass = status === 'done' ? 'pill-done' : status === 'inprogress' ? 'pill-progress' : 'pill-todo';
        pillsHTML += `
          <button class="task-pill ${statusClass}"
            onclick="launchTask('${sub.key}','${m}')">
            ${modeIcons[m]} ${m.charAt(0).toUpperCase()+m.slice(1)} ${statusIcon}
          </button>
        `;
      });

      const doneCount = modes.filter(m => isTaskComplete(currentWeek, sub.key, m)).length;
      const pct = Math.round((doneCount / modes.length) * 100);

      taskCardsHTML += `
        <div class="home-subject-card subject-border-${sub.key} card-pop-in">
          <div class="home-subject-header">
            <span class="home-subject-icon">${sub.icon}</span>
            <span class="home-subject-name">${sub.name}</span>
            <span class="home-subject-pct">${pct}%</span>
          </div>
          <div class="home-pill-row">${pillsHTML}</div>
          <div class="home-mini-bar-wrap">
            <div class="home-mini-bar" style="width:${pct}%; background: var(--sub-${sub.key});"></div>
          </div>
        </div>
      `;
    });

    let reviewAlertsHTML = '';
    let reviewCount = 0;
    for (let w = currentWeek - 1; w >= Math.max(1, currentWeek - 4) && reviewCount < 2; w--) {
      for (let sub of subjects) {
        if (reviewCount >= 2) break;
        const quizScore = safeStorage.getItem(`highscore_${grade}_w${w}_sses_${sub.key}_${currentLevel}_quiz`);
        if (quizScore !== null) {
          const score = parseInt(quizScore);
          const pct = Math.round((score / 25) * 100);
          if (pct < 60) {
            const severity = pct < 40 ? 'alert-critical' : 'alert-moderate';
            reviewAlertsHTML += `
              <div class="review-alert-card ${severity} card-pop-in">
                <span>${pct < 40 ? '🔴' : '🟡'} ${sub.icon} <strong>${sub.name}</strong> — Week ${w} Quiz: ${score}/25 (${pct}%)</span>
                <button class="review-alert-btn" onclick="launchTask('${sub.key}','study',${w})">
                  📖 Review Week ${w}
                </button>
              </div>
            `;
            reviewCount++;
          }
        }
      }
    }

    const allDone = subjects.every(sub =>
      modes.every(m => isTaskComplete(currentWeek, sub.key, m))
    );
    const advancedSuggestionHTML = allDone && currentWeek < 40 ? `
      <div class="home-advanced-card card-pop-in">
        <span>🌟 You finished everything this week! Want a head start?</span>
        <button class="home-advanced-btn" onclick="launchAdvancedPreview(${currentWeek + 1})">
          Preview Week ${currentWeek + 1} — Grade 4-5 Mode
        </button>
      </div>
    ` : '';

    let catchupHTML = '';
    let catchupCount = 0;
    const catchupItems = [];
    for (let w = currentWeek - 1; w >= Math.max(1, currentWeek - 2) && catchupCount < 2; w--) {
      for (let sub of subjects) {
        for (let m of modes) {
          if (catchupCount >= 2) break;
          const dismissed = safeStorage.getItem(`catchup_dismissed_${grade}_w${w}_${sub.key}_${m}`);
          if (!dismissed && !isTaskComplete(w, sub.key, m)) {
            catchupItems.push({ w, sub, m });
            catchupCount++;
          }
        }
      }
    }
    if (catchupItems.length > 0) {
      const itemsHTML = catchupItems.map(item => `
        <div class="catchup-item">
          <span>📌 Week ${item.w} ${item.sub.icon} ${item.sub.name} — ${modeIcons[item.m]} ${item.m}</span>
          <div style="display:flex; gap:6px; margin-top:6px;">
            <button class="catchup-go-btn" onclick="launchTask('${item.sub.key}','${item.m}',${item.w})">Go</button>
            <button class="catchup-dismiss-btn"
              onclick="dismissCatchup('${grade}',${item.w},'${item.sub.key}','${item.m}')">Dismiss</button>
          </div>
        </div>
      `).join('');
      catchupHTML = `
        <details class="catchup-section card-pop-in">
          <summary>⏮️ Catch-up Tasks (${catchupItems.length})</summary>
          ${itemsHTML}
        </details>
      `;
    }

    const totalTasks = subjects.length * modes.length;
    const completedTasks = subjects.reduce((acc, sub) =>
      acc + modes.filter(m => isTaskComplete(currentWeek, sub.key, m)).length, 0);
    const overallPct = Math.round((completedTasks / totalTasks) * 100);

    const subjectBarsHTML = subjects.map(sub => {
      const done = modes.filter(m => isTaskComplete(currentWeek, sub.key, m)).length;
      const p = Math.round((done / modes.length) * 100);
      return `
        <div class="snapshot-row">
          <span class="snapshot-label">${sub.icon} ${sub.name}</span>
          <div class="snapshot-bar-wrap">
            <div class="snapshot-bar-fill" style="width:${p}%; background:var(--sub-${sub.key});"></div>
          </div>
          <span class="snapshot-pct">${p}%</span>
        </div>
      `;
    }).join('');

    const earned = getEarnedBadges();
    const earnedIds = earned.map(b => b.id);
    const badgesHTML = BADGE_DEFINITIONS.map(b => {
      const isEarned = earnedIds.includes(b.id);
      return `
        <div class="badge-chip ${isEarned ? 'badge-earned' : 'badge-locked'}"
             title="${b.desc}">
          <span class="badge-icon">${isEarned ? b.icon : '🔒'}</span>
          <span class="badge-label">${b.name}</span>
        </div>
      `;
    }).join('');

    const dayNames = ['monday','tuesday','wednesday','thursday','friday'];
    const dayLabels = ['Mon','Tue','Wed','Thu','Fri'];
    const schedule = getScheduleConfig();
    const todayDayName = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][new Date().getDay()];

    const scheduleCols = dayNames.map((d, i) => {
      const subs = schedule[d] || [];
      const isToday = d === todayDayName;
      const shortNames = { math: 'Math', science: 'Sci', english: 'Eng', filipino: 'Fil', makabansa: 'Maka', gmrc: 'GMRC' };
      return `
        <div class="sched-col ${isToday ? 'sched-today' : ''} card-pop-in">
          <div class="sched-day-label">${dayLabels[i]}${isToday ? ' 📍' : ''}</div>
          ${subs.map(s => {
            const subObj = subjects.find(x => x.key === s);
            const label = subObj ? `${subObj.icon} ${shortNames[s] || subObj.name}` : '';
            return subObj ? `<div class="sched-chip" style="background:var(--sub-${s})20; color:var(--sub-${s}); border:1px solid var(--sub-${s})40;">${label}</div>` : '';
          }).join('')}
        </div>
      `;
    }).join('');

    const notifItems = [];
    subjects.forEach(sub => {
      const prog = getQuizProgress(currentWeek, sub.key);
      if (prog && !isTaskComplete(currentWeek, sub.key, prog.mode)) {
        notifItems.push(`🔔 You have an unfinished ${prog.mode} for ${sub.name} — Q${prog.questionIndex + 1} of ${prog.mode === 'quiz' ? 25 : 5} (Score: ${prog.score})`);
      }
    });
    const lastDate = safeStorage.getItem('streak_last_date');
    const todayStr = new Date().toLocaleDateString('en-CA');
    if (streak > 0 && lastDate !== todayStr) {
      notifItems.push(`⚡ Complete a task today to keep your 🔥 ${streak}-day streak!`);
    }

    const notifHTML = notifItems.length > 0 ? `
      <div class="notif-panel card-pop-in">
        <div class="notif-title">Reminders:</div>
        ${notifItems.map(n => `<div class="notif-item">${n}</div>`).join('')}
      </div>
    ` : '';

    qBody.innerHTML = `
      <div class="welcome-dashboard">
        <div id="week-alignment-banner" class="alignment-banner" style="display:none;"></div>

        <div class="home-greeting-card card-pop-in" style="display: flex; justify-content: space-between; align-items: stretch; position: relative; gap: 16px; padding: 20px;">
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 4px;">
            <div class="home-greeting-main" style="margin-bottom: 0;">${greeting}, ${nickname}! ${greetEmoji}</div>
            <div class="home-greeting-sub">${dateStr}</div>
            <div class="home-greeting-meta" style="margin-top: 2px;">
              <span class="home-week-badge">📅 Week ${currentWeek}</span>
              ${streak > 0 ? `<span class="home-streak-badge">🔥 ${streak}-day streak</span>` : ''}
            </div>
            <div class="home-overall-progress" style="margin-top: 8px;">
              <div class="home-overall-bar-wrap">
                <div class="home-overall-bar" style="width:${overallPct}%"></div>
              </div>
              <span class="home-overall-label">Week ${currentWeek}: ${completedTasks}/${totalTasks} tasks complete (${overallPct}%)</span>
            </div>
          </div>
          <div class="home-mascot-interactive-panel" style="display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; position: relative; width: 90px; flex-shrink: 0; transition: transform 0.2s ease;" onclick="interactMascotDashboard()" title="Talk to ${mascotName}">
            <img src="${getMascotImg()}" class="tobi-games-img bouncing" alt="${mascotName}" style="height: 90px; width: 90px; object-fit: contain;">
          </div>
        </div>

        ${notifHTML}
        ${reviewAlertsHTML ? `<div class="home-section-title">⚠️ Review Needed</div>${reviewAlertsHTML}` : ''}
        ${catchupHTML}
        ${advancedSuggestionHTML}

        <div class="home-section-title">📋 Week ${currentWeek} Tasks</div>
        <div class="home-task-cards">${taskCardsHTML}</div>

        <div class="home-section-title">📊 Progress Snapshot</div>
        <div class="snapshot-panel card-pop-in">
          ${subjectBarsHTML}
          <button class="home-link-btn" onclick="window.AppModules.home_dash.showProgressDashboard()">View Full Progress Dashboard →</button>
        </div>

        <div class="home-section-title">📅 This Week's Schedule</div>
        <div class="sched-grid">${scheduleCols}</div>
        <button class="home-link-btn" onclick="openScheduleSettings()">⚙️ Edit Schedule</button>

        <div class="home-section-title">🏅 Badges & Achievements</div>
        <div class="badge-strip card-pop-in">${badgesHTML}</div>
      </div>
    `;

    closeSidebar();
    checkDateWeekAlignment();
  }

  function showProgressDashboard() {
    currentMode = ''; 
    saveSessionState();
    clearAllActiveNavButtons();
    
    const dashBtn = document.getElementById('btn-dashboard');
    if (dashBtn) dashBtn.classList.add('active');
    
    document.getElementById('header-icon').innerText = '📊';
    document.getElementById('header-title').innerText = 'Progress Dashboard';
    
    const learnerGrade = getLearnerGrade();
    let gradeLabel = 'Grade 3';
    if (learnerGrade === 'g1') gradeLabel = 'Grade 1';
    else if (learnerGrade === 'g2') gradeLabel = 'Grade 2';
    
    document.getElementById('header-subtitle').innerText = `Learner Progress Report for ${currentLevel === 'core' ? gradeLabel : 'Grade 4-5'} Level`;
    
    const transToggleEl = document.getElementById('settings-trans-row');
    if (transToggleEl) transToggleEl.style.display = 'none';
    document.body.classList.remove('show-translation');
    const toggleEl = document.getElementById('settings-translation-toggle');
    if (toggleEl) toggleEl.checked = false;
    
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('slide-num-label').style.display = 'none';
    document.getElementById('slide-mode-label').innerText = 'Reports';
    document.getElementById('viewport-footer').style.display = 'none';
    
    const qBody = document.getElementById('viewport-body');
    if (!qBody) return;
    
    const subjects = [
      { key: 'math', name: 'Mathematics', color: '#3b82f6' },
      { key: 'science', name: 'Science', color: '#10b981' },
      { key: 'english', name: 'English', color: '#a855f7' },
      { key: 'filipino', name: 'Filipino', color: '#f43f5e' },
      { key: 'makabansa', name: 'Araling Panlipunan', color: '#3b82f6' },
      { key: 'gmrc', name: 'GMRC', color: '#eab308' }
    ];
    
    let maxWeekWithProgress = 1;
    for (let i = 0; i < safeStorage.length; i++) {
      const key = safeStorage.key(i);
      const match = key.match(/^(?:highscore|performance|checklist|drawings)_.*_w(\d+)_/);
      if (match) {
        const wNum = parseInt(match[1]);
        if (!isNaN(wNum) && wNum > maxWeekWithProgress && wNum <= 40) {
          maxWeekWithProgress = wNum;
        }
      }
    }
    const totalWeeks = Math.max(2, maxWeekWithProgress, currentWeek);

    let totalQuizzesAttempted = 0;
    let totalQuizScore = 0;
    let totalQuizMax = 0;
    let totalTasksCompleted = 0;
    let priorityReviewItems = [];
    
    let subjectsGradesData = {};
    subjects.forEach(sub => {
      subjectsGradesData[sub.key] = [];
      for (let w = 1; w <= totalWeeks; w++) {
        const quizKey = `highscore_${learnerGrade}_w${w}_sses_${sub.key}_${currentLevel}_quiz`;
        const challengeKey = `highscore_${learnerGrade}_w${w}_sses_${sub.key}_${currentLevel}_challenge`;
        const perfKey = `performance_${learnerGrade}_w${w}_sses_${sub.key}_${currentLevel}`;
        
        const quizScore = safeStorage.getItem(quizKey);
        const challengeScore = safeStorage.getItem(challengeKey);
        const perfScore = safeStorage.getItem(perfKey);
        
        const record = {
          week: w,
          quiz: quizScore !== null ? parseInt(quizScore) : null,
          challenge: challengeScore !== null ? parseInt(challengeScore) : null,
          performance: perfScore !== null ? true : false
        };
        
        subjectsGradesData[sub.key].push(record);
        
        if (record.quiz !== null) {
          totalQuizzesAttempted++;
          totalQuizScore += record.quiz;
          totalQuizMax += 25;
          
          if (record.quiz < QUIZ_PASSING_SCORE) {
            priorityReviewItems.push({
              subject: sub.name,
              color: sub.color,
              week: w,
              score: record.quiz,
              max: 25,
              reason: `Quiz score below passing (${Math.round(QUIZ_PASSING_SCORE/25*100)}%)`
            });
          }
        }
        
        if (record.challenge !== null) {
          if (record.challenge < CHALLENGE_PASSING_SCORE) {
            priorityReviewItems.push({
              subject: sub.name,
              color: sub.color,
              week: w,
              score: record.challenge,
              max: 5,
              reason: `Challenge score below passing (${Math.round(CHALLENGE_PASSING_SCORE/5*100)}%)`
            });
          }
        }
        
        if (record.performance) {
          totalTasksCompleted++;
        }
      }
    });
    
    const averagePercentage = totalQuizMax > 0 ? Math.round((totalQuizScore / totalQuizMax) * 100) : 0;
    
    let prioritySectionHTML = '';
    if (priorityReviewItems.length > 0) {
      let itemsHTML = '';
      priorityReviewItems.forEach(item => {
        itemsHTML += `
          <div class="priority-item">
            <div>
              <span class="priority-subject-badge" style="background: ${item.color};">${item.subject}</span>
              <span style="margin-left: 10px; font-weight: 600;">Week ${item.week}</span>
            </div>
            <div class="priority-reason">${item.reason} (${item.score}/${item.max})</div>
          </div>
        `;
      });
      
      prioritySectionHTML = `
        <div class="priority-review-container card-pop-in">
          <div class="priority-title">⚠️ Priority Review Required</div>
          <div class="priority-list">${itemsHTML}</div>
        </div>
      `;
    } else {
      prioritySectionHTML = `
        <div class="priority-review-container card-pop-in" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.2); display: flex; align-items: center; gap: 16px;">
          <div style="flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(16, 185, 129, 0.08); border-radius: 50%; border: 2px dashed var(--correct); width: 65px; height: 65px;">
            <img src="${getMascotImg()}" class="tobi-games-img bouncing" alt="Mascot" style="width: 50px; height: 50px; object-fit: contain;">
          </div>
          <div>
            <div class="priority-title" style="color: var(--correct); margin-bottom: 4px;">✨ Great Job!</div>
            <div style="font-size: 14px; color: var(--text-muted); line-height: 1.4;">No subjects currently require priority review. All scores meet target passing levels. Keep it up!</div>
          </div>
        </div>
      `;
    }
    
    let tableRowsHTML = '';
    subjects.forEach(sub => {
      let colsHTML = '';
      for (let w = 1; w <= totalWeeks; w++) {
        const record = subjectsGradesData[sub.key][w - 1];
        let badgeHTML = '';
        if (record.quiz !== null) {
          const isPassed = record.quiz >= QUIZ_PASSING_SCORE;
          badgeHTML += `
            <div class="score-badge ${isPassed ? 'passed' : 'low'}">
              Q: ${record.quiz}/25
            </div>
          `;
        } else {
          badgeHTML += `<div class="score-badge pending">-</div>`;
        }
        
        if (record.challenge !== null) {
          const isPassed = record.challenge >= CHALLENGE_PASSING_SCORE;
          badgeHTML += `
            <div class="score-badge ${isPassed ? 'passed' : 'low'}" style="margin-left: 4px;">
              C: ${record.challenge}/5
            </div>
          `;
        }
        
        if (record.performance) {
          badgeHTML += `
            <div class="score-badge passed" style="margin-left: 4px; padding: 4px 6px; font-size:10px;">
              📋 Task
            </div>
          `;
        }
        colsHTML += `<td><div style="display:flex; align-items:center;">${badgeHTML}</div></td>`;
      }
      tableRowsHTML += `
        <tr>
          <td class="subject-cell" style="border-left: 4px solid ${sub.color}; font-weight: 600;">${sub.name}</td>
          ${colsHTML}
        </tr>
      `;
    });

    let readingRowCols = '';
    for (let w = 1; w <= totalWeeks; w++) {
      let completedCount = 0;
      const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      days.forEach(day => {
        if (safeStorage.getItem(`reading_${learnerGrade}_w${w}_${day}`) === 'completed') {
          completedCount++;
        }
      });
      
      let badgeHTML = '';
      if (completedCount > 0) {
        const isAllDone = completedCount === 7;
        badgeHTML = `
          <div class="score-badge ${isAllDone ? 'passed' : 'pending'}" style="padding: 4px 8px;">
            Read: ${completedCount}/7
          </div>
        `;
      } else {
        badgeHTML = `<div class="score-badge pending">-</div>`;
      }
      readingRowCols += `<td><div style="display:flex; align-items:center;">${badgeHTML}</div></td>`;
    }
    tableRowsHTML += `
      <tr>
        <td class="subject-cell" style="border-left: 4px solid var(--accent); font-weight: 600;">📚 Daily Reading</td>
        ${readingRowCols}
      </tr>
    `;

    let headerColsHTML = '<th>Subject</th>';
    for (let w = 1; w <= totalWeeks; w++) {
      headerColsHTML += `<th>Week ${w}</th>`;
    }
    
    qBody.innerHTML = `
      <div class="dashboard-container">
        <div class="stats-grid">
          <div class="stat-card card-pop-in">
            <div class="stat-value primary">${averagePercentage}%</div>
            <div class="stat-label">Average Score</div>
          </div>
          <div class="stat-card card-pop-in">
            <div class="stat-value success">${totalQuizzesAttempted}</div>
            <div class="stat-label">Quizzes Taken</div>
          </div>
          <div class="stat-card card-pop-in">
            <div class="stat-value warning">${totalTasksCompleted}</div>
            <div class="stat-label">Tasks Done</div>
          </div>
          <div class="stat-card card-pop-in">
            <div class="stat-value danger">🔥 ${getActiveStreak()}</div>
            <div class="stat-label">Daily Streak</div>
          </div>
        </div>
        
        ${prioritySectionHTML}
        
        <div class="card-pop-in">
          <div class="dashboard-section-title">Academic Record Grid</div>
          <div class="dashboard-table-wrapper">
            <table class="dashboard-table">
              <thead>
                <tr>
                  ${headerColsHTML}
                </tr>
              </thead>
              <tbody>
                ${tableRowsHTML}
              </tbody>
            </table>
          </div>
        </div>
        
        <button class="clear-data-btn hover-bounce" onclick="window.AppModules.home_dash.confirmClearAllProgress()">
          🗑️ Clear All Student Progress Records
        </button>
      </div>
    `;
  }

  function confirmClearAllProgress() {
    showPinModal(() => {
      const firstConfirm = confirm("⚠️ Are you sure you want to clear all student progress? This will delete all quiz scores, daily reading records, checklist completions, and drawing progress. This action is permanent and NOT recoverable!");
      if (!firstConfirm) return;
      
      const secondConfirm = confirm("🚨 DOUBLE CONFIRMATION REQUIRED:\n\nAre you absolutely sure you want to delete all student records? This data cannot be recovered after clearing.");
      if (!secondConfirm) return;
      
      const keysToClear = [];
      for (let i = 0; i < safeStorage.length; i++) {
        const key = safeStorage.key(i);
        if (key && (
          key.startsWith('highscore_') || 
          key.startsWith('performance_') || 
          key.startsWith('drawings_') || 
          key.startsWith('reading_') ||
          key.startsWith('streak_') ||
          key.startsWith('checklist_')
        )) {
          keysToClear.push(key);
        }
      }
      keysToClear.forEach(key => {
        safeStorage.removeItem(key);
      });
      alert("All student progress has been cleared.");
      
      closeSettings();
      showProgressDashboard();
    });
  }

  function renderCompetenciesDashboard() {
    currentMode = 'competencies';
    saveSessionState();
    
    document.getElementById('header-icon').innerText = '📋';
    document.getElementById('header-title').innerText = 'DepEd Competencies';
    document.getElementById('header-subtitle').innerText = 'DepEd MATATAG standard learning competencies for your grade level';
    
    document.getElementById('viewport-footer').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('slide-num-label').style.display = 'none';
    document.getElementById('slide-mode-label').innerText = 'Competencies';
    
    const qBody = document.getElementById('viewport-body');
    if (!qBody) return;
    
    const learnerGrade = getLearnerGrade();
    const gradeLabel = learnerGrade === 'g1' ? 'Grade 1' : learnerGrade === 'g2' ? 'Grade 2' : 'Grade 3';

    qBody.innerHTML = `
      <div class="parents-dashboard-container" style="padding: 10px 0;">
        <div class="parents-section-card card-pop-in" style="margin-bottom: 20px; padding: 18px; background: rgba(59, 130, 246, 0.05); border-color: rgba(59, 130, 246, 0.2);">
          <p style="margin: 0; font-size: 14px; font-weight: 500; line-height: 1.6; color: var(--text-main);">
            Below are the official <strong>DepEd MATATAG Curriculum Competencies</strong> for <strong>${gradeLabel}</strong>. Click on any subject card below to view the standard learning requirements organized by Quarter.
          </p>
        </div>

        <div class="parents-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 20px;">
          
          <div class="parents-section-card card-pop-in" tabindex="0" onclick="window.AppModules.home_dash.showCompetencies('math')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='var(--accent)';" onmouseout="this.style.borderColor='var(--border-color)';">
            <div>
              <div style="font-size: 24px; margin-bottom: 8px;">🔢</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Mathematics</div>
              <div style="font-size: 12px; color: var(--text-muted);">Numbers, area, patterns, Roman numerals, similar fractions, and symmetry.</div>
            </div>
            <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: var(--accent); color: white; border: none;">View Competencies</button>
          </div>

          <div class="parents-section-card card-pop-in" tabindex="0" onclick="window.AppModules.home_dash.showCompetencies('science')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#10b981';" onmouseout="this.style.borderColor='var(--border-color)';">
            <div>
              <div style="font-size: 24px; margin-bottom: 8px;">🔬</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Science</div>
              <div style="font-size: 12px; color: var(--text-muted);">Scientific process, solids/liquids properties, plants/animals, force and sound.</div>
            </div>
            <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #10b981; color: white; border: none;">View Competencies</button>
          </div>

          <div class="parents-section-card card-pop-in" tabindex="0" onclick="window.AppModules.home_dash.showCompetencies('english')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#a855f7';" onmouseout="this.style.borderColor='var(--border-color)';">
            <div>
              <div style="font-size: 24px; margin-bottom: 8px;">🙋‍♂️</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">English</div>
              <div style="font-size: 12px; color: var(--text-muted);">Phonics, reading CVCC/CCVC words, pronouns, verbs, adjectives, prepositions.</div>
            </div>
            <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #a855f7; color: white; border: none;">View Competencies</button>
          </div>

          <div class="parents-section-card card-pop-in" tabindex="0" onclick="window.AppModules.home_dash.showCompetencies('filipino')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#f43f5e';" onmouseout="this.style.borderColor='var(--border-color)';">
            <div>
              <div style="font-size: 24px; margin-bottom: 8px;">🇵🇭</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Filipino</div>
              <div style="font-size: 12px; color: var(--text-muted);">Magalang na pananalita, kasarian ng pangngalan, pandiwa, at talaarawan.</div>
            </div>
            <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #f43f5e; color: white; border: none;">View Competencies</button>
          </div>

          <div class="parents-section-card card-pop-in" tabindex="0" onclick="window.AppModules.home_dash.showCompetencies('makabansa')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#3b82f6';" onmouseout="this.style.borderColor='var(--border-color)';">
            <div>
              <div style="font-size: 24px; margin-bottom: 8px;">🏘️</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Makabansa</div>
              <div style="font-size: 12px; color: var(--text-muted);">Kasaysayan ng komunidad, kultura, pambansang pagkakakilanlan, at civics.</div>
            </div>
            <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #3b82f6; color: white; border: none;">View Competencies</button>
          </div>

          <div class="parents-section-card card-pop-in" tabindex="0" onclick="window.AppModules.home_dash.showCompetencies('gmrc')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#eab308';" onmouseout="this.style.borderColor='var(--border-color)';">
            <div>
              <div style="font-size: 24px; margin-bottom: 8px;">🧘</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">GMRC</div>
              <div style="font-size: 12px; color: var(--text-muted);">Manners, tiwala sa sarili, pagiging masinop sa paglikha, at pagmamahal sa bayan.</div>
            </div>
            <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #eab308; color: white; border: none;">View Competencies</button>
          </div>

        </div>
      </div>
    `;
  }

  function formatCompetencyText(item, subjectKey) {
    if (!item.includes(':')) return item;
    
    const parts = item.split(':');
    const code = parts[0].trim();
    const text = parts.slice(1).join(':').trim();
    
    let category = '';
    
    if (subjectKey === 'math') {
      if (code.includes('NS')) category = 'Number Sense';
      else if (code.includes('GE')) category = 'Geometry';
      else if (code.includes('ME')) category = 'Measurement';
      else if (code.includes('AL')) category = 'Patterns & Algebra';
      else if (code.includes('SP')) category = 'Statistics & Probability';
      else category = 'Mathematics';
    } else if (subjectKey === 'science') {
      if (code.includes('MT')) category = 'Matter';
      else if (code.includes('LT')) category = 'Life Science';
      else if (code.includes('FE')) category = 'Force, Motion & Energy';
      else if (code.includes('ES')) category = 'Earth & Space';
      else category = 'Science';
    } else if (subjectKey === 'english') {
      if (code.includes('OL')) category = 'Oral Language';
      else if (code.includes('PWS')) category = 'Phonics & Word Study';
      else if (code.includes('V')) category = 'Vocabulary';
      else if (code.includes('G')) category = 'Grammar';
      else if (code.includes('RC')) category = 'Reading Comprehension';
      else if (code.includes('W')) category = 'Writing';
      else category = 'English';
    } else if (subjectKey === 'filipino') {
      if (code.includes('PN')) category = 'Pakikinig (Listening)';
      else if (code.includes('PS')) category = 'Pagsasalita (Speaking)';
      else if (code.includes('WG')) category = 'Wika at Gramatika (Grammar)';
      else if (code.includes('AL')) category = 'Panitikan (Literature)';
      else if (code.includes('KP')) category = 'Kamalayang Ponolohika';
      else if (code.includes('PT')) category = 'Talasalitaan (Vocabulary)';
      else if (code.includes('PB')) category = 'Pagbasa (Reading)';
      else if (code.includes('PU')) category = 'Pagsulat (Writing)';
      else category = 'Filipino';
    } else if (subjectKey === 'makabansa') {
      category = 'Makabansa';
    } else if (subjectKey === 'gmrc') {
      category = 'GMRC';
    } else {
      category = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
    }
    
    return `<strong>${category}:</strong> ${text}`;
  }

  function showCompetencies(subjectKey) {
    competenciesFontScale = 1.0;
    const bodyEl = document.getElementById('competencies-modal-body');
    if (bodyEl) {
      bodyEl.style.fontSize = '12.5px';
    }

    const grade = getLearnerGrade();
    const subjectNameMap = {
      math: 'Mathematics',
      science: 'Science',
      english: 'English',
      filipino: 'Filipino',
      makabansa: 'Makabansa',
      gmrc: 'GMRC'
    };

    const subjectName = subjectNameMap[subjectKey] || subjectKey.toUpperCase();
    const gradeLabel = grade === 'g1' ? 'Grade 1' : grade === 'g2' ? 'Grade 2' : 'Grade 3';
    
    const titleEl = document.getElementById('competencies-modal-title');
    if (titleEl) {
      titleEl.innerText = `${subjectName} Competencies (${gradeLabel})`;
    }

    const gradeData = MATATAG_COMPETENCIES[grade] || {};
    const subjectData = gradeData[subjectKey] || {};

    if (!bodyEl) return;

    let contentHTML = '';
    const quarters = (grade === 'g3') ? ["Term 1", "Term 2", "Term 3"] : ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
    
    let hasData = false;
    quarters.forEach(q => {
      const list = subjectData[q] || [];
      if (list.length > 0) {
        hasData = true;
        contentHTML += `
          <div class="competencies-quarter-section">
            <div class="competencies-quarter-title">📅 ${q}</div>
            <ul class="competencies-list">
              ${list.map(item => `<li class="competencies-item">${formatCompetencyText(item, subjectKey)}</li>`).join('')}
            </ul>
          </div>
        `;
      }
    });

    if (!hasData) {
      contentHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 13px;">
          📭 No competencies found for this subject and grade level.
        </div>
      `;
    }

    bodyEl.innerHTML = contentHTML;

    const modal = document.getElementById('competencies-modal');
    if (modal) modal.style.display = 'flex';
  }

  function closeCompetenciesModal() {
    const modal = document.getElementById('competencies-modal');
    if (modal) modal.style.display = 'none';
    const bodyEl = document.getElementById('competencies-modal-body');
    if (bodyEl) {
      bodyEl.style.fontSize = '';
    }
    competenciesFontScale = 1.0;
  }

  function toggleCompetenciesGrid() {
    const grid = document.getElementById('parents-competencies-grid');
    const chevron = document.getElementById('competencies-toggle-chevron');
    if (!grid) return;
    if (grid.style.display === 'none') {
      grid.style.display = 'grid';
      if (chevron) chevron.innerText = '▼';
    } else {
      grid.style.display = 'none';
      if (chevron) chevron.innerText = '▶';
    }
  }

  function adjustCompetenciesFontSize(direction) {
    const bodyEl = document.getElementById('competencies-modal-body');
    if (!bodyEl) return;
    if (direction === 0) {
      competenciesFontScale = 1.0;
    } else {
      competenciesFontScale = Math.max(0.7, Math.min(2.0, competenciesFontScale + direction * 0.1));
    }
    bodyEl.style.fontSize = `${12.5 * competenciesFontScale}px`;
  }

  function submitOnboarding() {
    const nicknameInput = document.getElementById('onboarding-nickname');
    const gradeSelect = document.getElementById('onboarding-grade');
    
    if (!nicknameInput) return;
    const nickname = nicknameInput.value.trim();
    const grade = gradeSelect ? gradeSelect.value : 'g3';
    
    if (nickname === "") {
      alert("Please enter your nickname!");
      return;
    }

    safeStorage.setItem('session_nickname', nickname);
    safeStorage.setItem('session_grade_level', grade);
    safeStorage.setItem('session_currentLevel', 'core');
    currentLevel = 'core';
    applyLearnerProfile();

    showOnboardingScheduleStep();
  }

  function showOnboardingScheduleStep() {
    const card = document.querySelector('.onboarding-card');
    if (!card) return;
    card.innerHTML = `
      <div class="onboarding-logo">📅</div>
      <h2>Set Your Class Schedule</h2>
      <p>Tick the subjects you have each day. This helps arrange your weekly study tasks. You can change this anytime in Settings.</p>
      <div id="onboarding-schedule-grid"></div>
      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="onboarding-submit-btn" style="background:var(--text-muted); flex:1;"
          onclick="window.AppModules.home_dash.showOnboardingUpdateStep()">Skip for now</button>
        <button class="onboarding-submit-btn" style="flex:1;"
          onclick="window.AppModules.home_dash.showOnboardingUpdateStep()">Save Schedule ✅</button>
      </div>
    `;
    renderOnboardingScheduleGrid();
  }

  function showOnboardingUpdateStep() {
    const card = document.querySelector('.onboarding-card');
    if (!card) return;
    card.innerHTML = `
      <div class="onboarding-logo">🔄</div>
      <h2>Update Weekly Topics</h2>
      <p style="color: var(--accent); font-weight: 700; margin-bottom: 8px;">⚠️ Needs Internet Connection</p>
      <p>Would you like to check for and download the latest weekly topics, lessons, and quizzes? (Highly recommended to get the newest curriculum updates)</p>
      <div id="onboarding-update-status" style="margin: 15px 0; font-weight: 600; font-size: 14px; min-height: 20px; text-align: center;"></div>
      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="onboarding-submit-btn" id="onboarding-update-skip-btn" style="background:var(--text-muted); flex:1;"
          onclick="window.AppModules.home_dash.showOnboardingPINStep()">Skip for now</button>
        <button class="onboarding-submit-btn" id="onboarding-update-now-btn" style="flex:1;"
          onclick="window.AppModules.home_dash.runOnboardingUpdate()">Yes, Update Now</button>
      </div>
    `;
  }

  function runOnboardingUpdate() {
    const statusEl = document.getElementById('onboarding-update-status');
    const skipBtn = document.getElementById('onboarding-update-skip-btn');
    const updateBtn = document.getElementById('onboarding-update-now-btn');

    const onboardingReporter = {
      onStart() {
        if (updateBtn) updateBtn.disabled = true;
        if (skipBtn) skipBtn.disabled = true;
        if (statusEl) {
          statusEl.innerHTML = "⏳ Checking for updates...";
          statusEl.style.color = "var(--text-main)";
        }
      },
      onNoUpdate() {
        if (statusEl) {
          statusEl.style.color = "var(--correct)";
          statusEl.innerHTML = "✅ There is no available update.";
        }
        setTimeout(() => showOnboardingPINStep(), 1500);
      },
      onProgress(completed, total) {
        if (statusEl) {
          statusEl.innerHTML = `⏳ Downloading content (${completed}/${total})...`;
        }
      },
      onSuccess(details) {
        if (statusEl) {
          statusEl.style.color = "var(--correct)";
          statusEl.innerHTML = "✅ Update successful!";
        }
        setTimeout(() => showOnboardingPINStep(), 1500);
      },
      onError(err) {
        if (statusEl) {
          statusEl.style.color = "var(--incorrect)";
          statusEl.innerHTML = `❌ Update failed: ${err.message || 'No connection'}`;
        }
        if (updateBtn) updateBtn.disabled = false;
        if (skipBtn) skipBtn.disabled = false;
      }
    };

    downloadWeeklyTopics(onboardingReporter);
  }

  function renderOnboardingScheduleGrid() {
    const schedule = getScheduleConfig();
    const days = ['monday','tuesday','wednesday','thursday','friday'];
    const dayLabels = ['Mon','Tue','Wed','Thu','Fri'];
    const subjects = [
      { key:'math', label:'🔢 Math' },
      { key:'science', label:'🔬 Science' },
      { key:'english', label:'🙋 English' },
      { key:'filipino', label:'🇵🇭 Filipino' },
      { key:'makabansa', label:'🏘️ Makabansa' },
      { key:'gmrc', label:'🧘 GMRC' }
    ];

    let html = '<div class="sched-settings-grid" style="margin-top:16px;">';
    html += '<div class="sched-settings-cell sched-settings-header"></div>';
    days.forEach((d,i) => {
      html += `<div class="sched-settings-cell sched-settings-header">${dayLabels[i]}</div>`;
    });
    subjects.forEach(sub => {
      html += `<div class="sched-settings-cell sched-settings-subject">${sub.label}</div>`;
      days.forEach(d => {
        const checked = (schedule[d] || []).includes(sub.key);
        html += `
          <div class="sched-settings-cell">
            <input type="checkbox" class="sched-check"
              ${checked ? 'checked' : ''}
              onchange="toggleScheduleCell('${d}','${sub.key}',this.checked)">
          </div>
        `;
      });
    });
    html += '</div>';

    const container = document.getElementById('onboarding-schedule-grid');
    if (container) container.innerHTML = html;
  }

  function showOnboardingPINStep() {
    const card = document.querySelector('.onboarding-card');
    if (!card) return;
    card.innerHTML = `
      <div class="onboarding-logo">🔑</div>
      <h2>Set Parent PIN</h2>
      <p>Set a secure 4-digit PIN to access the <strong>Parent's Dashboard</strong>, where you can view performance analytics, student remediation recommendations, and override worksheet grading.</p>
      <div class="form-group" style="margin-top: 20px;">
        <label for="onboarding-pin" style="display:block; margin-bottom:8px; font-weight:600;">👨‍👩‍👦 Enter 4-Digit Parent PIN:</label>
        <input type="text" id="onboarding-pin" maxlength="4" pattern="[0-9]*" inputmode="numeric" placeholder="e.g. 1234" 
          style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); font-size: 20px; text-align: center; letter-spacing: 10px; font-weight: 700;">
      </div>
      <div style="display:flex; gap:10px; margin-top:25px;">
        <button class="onboarding-submit-btn" style="background:var(--text-muted); flex:1;"
          onclick="window.AppModules.home_dash.saveOnboardingPIN('0000')">Skip / Default (0000)</button>
        <button class="onboarding-submit-btn" style="flex:1;"
          onclick="window.AppModules.home_dash.saveOnboardingPIN(document.getElementById('onboarding-pin').value)">Set PIN & Finish</button>
      </div>
    `;
  }

  function saveOnboardingPIN(pin) {
    let finalPin = pin ? pin.trim() : '';
    if (finalPin === '') {
      alert("Please enter a 4-digit PIN, or tap 'Skip' to use the default '0000'.");
      return;
    }
    if (!/^\d{4}$/.test(finalPin)) {
      alert("Parent PIN must be exactly 4 digits.");
      return;
    }
    safeStorage.setItem('parent_pin', finalPin);
    finishOnboarding();
  }

  function finishOnboarding() {
    initConfetti();
    const overlay = document.getElementById('onboarding-overlay');
    if (overlay) {
      overlay.classList.remove('show');
      setTimeout(() => overlay.style.display = 'none', 400);
    }
    loadWeekData(1);
    setTimeout(() => renderWelcomeDashboard(), 300);
  }

  function renderMonthlyChecklist(weekData, qBody) {
    const checklistData = weekData.checklist || {};
    let listHTML = '';

    for (const subjectKey in checklistData) {
      const data = checklistData[subjectKey];
      listHTML += `
        <h3 style="margin-top:20px; border-bottom: 1px solid var(--border-card); padding-bottom:6px; color:var(--sub-${subjectKey});">
          ${data.icon} ${data.title}
        </h3>
      `;
      data.competencies.forEach((comp, idx) => {
        const learnerGrade = getLearnerGrade();
        const storageKey = `checklist_${learnerGrade}_w${currentWeek}_${subjectKey}_${idx}`;
        const checked = safeStorage.getItem(storageKey) === 'true' ? 'checked' : '';
        listHTML += `
          <div class="competency-item">
            <input type="checkbox" id="check-${subjectKey}-${idx}" ${checked} onchange="window.AppModules.home_dash.toggleChecklistValue('${subjectKey}', ${idx}, this.checked)">
            <div>
              <span class="competency-code">${comp.code}</span>
              <span>${formatMarkdown(comp.desc)}</span>
            </div>
          </div>
        `;
      });
    }

    qBody.innerHTML = `
      <div class="competency-checklist-panel">
        <h2>DepEd Competency Satisfaction Check</h2>
        <p style="margin-bottom: 20px; font-size:14px; color:var(--text-muted);">
          Every month (after 4 weeks), parents/teachers use this checklist to verify that competencies expected in this particular period were covered in the study guide and quizzes.
        </p>
        ${listHTML}
      </div>
    `;
  }

  function toggleChecklistValue(subjectKey, idx, checked) {
    const learnerGrade = getLearnerGrade();
    safeStorage.setItem(`checklist_${learnerGrade}_w${currentWeek}_${subjectKey}_${idx}`, checked);
  }

  // Bind to window context for backward compatibility
  window.renderWelcomeDashboard = renderWelcomeDashboard;
  window.showProgressDashboard = showProgressDashboard;
  window.renderCompetenciesDashboard = renderCompetenciesDashboard;
  window.showCompetencies = showCompetencies;
  window.closeCompetenciesModal = closeCompetenciesModal;
  window.toggleCompetenciesGrid = toggleCompetenciesGrid;
  window.adjustCompetenciesFontSize = adjustCompetenciesFontSize;
  window.submitOnboarding = submitOnboarding;
  window.saveOnboardingPIN = saveOnboardingPIN;
  window.renderMonthlyChecklist = renderMonthlyChecklist;
  window.toggleChecklistValue = toggleChecklistValue;

  return {
    renderWelcomeDashboard,
    showProgressDashboard,
    confirmClearAllProgress,
    renderCompetenciesDashboard,
    showCompetencies,
    closeCompetenciesModal,
    toggleCompetenciesGrid,
    adjustCompetenciesFontSize,
    submitOnboarding,
    showOnboardingScheduleStep,
    showOnboardingUpdateStep,
    runOnboardingUpdate,
    renderOnboardingScheduleGrid,
    showOnboardingPINStep,
    saveOnboardingPIN,
    finishOnboarding,
    renderMonthlyChecklist,
    toggleChecklistValue,
    MATATAG_COMPETENCIES
  };
})();

