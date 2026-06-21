import os
import re
import json

# Define student-facing, SSES-enhanced content for Weeks 1 to 4
# Grade 3 English Term 1 (exactly 25 slides, 25 standard questions, 5 challenges, 3 worksheet pages, 1 performance task per week)
# Slides comply with the 8-line rule (each has exactly 8 lines of text).

WEEK1_DATA_ENG = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 1: CVCC Words & Demonstrative Pronouns",
  "slides": [
    {
      "title": "Welcome to the Language Safari!",
      "text": "Hello, Explorer! Welcome to English Week 1!\nThis week, we are going on an exciting language safari.\nWe will explore our neighborhood to spot word patterns.\nWe will learn about words that end in double consonants.\nWe will also learn how to point to things using pronouns.\nFinally, we will read stories about local adventures.\nLet's keep our eyes open and observe closely.\nAre you ready to start this learning adventure?",
      "examples": [{"title": "Weekly Goal", "content": "Master CVCC words, point to objects using pronouns, and explore story elements!"}]
    },
    {
      "title": "Spotting Ending Sounds (CVCC)",
      "text": "Look at your hand. Let's say it slowly: h-a-n-d.\nHear how the letters 'n' and 'd' blend at the end?\nThis is a CVCC word: Consonant-Vowel-Consonant-Consonant.\nIt ends with two consonants that make a blended sound.\nWe call these ending consonant blends in phonics.\nThey are very common in the words we use every day.\nLet's learn how to spot and spell them correctly.\nWe will search for CVCC words in our environment today!",
      "examples": [{"title": "Word Pattern", "content": "C = Consonant, V = Vowel, C = Consonant, C = Consonant."}]
    },
    {
      "title": "Phonics Hunt: In the Tent",
      "text": "Imagine we are camping under the dark night sky.\nWe set up a strong green tent on the ground.\nLook at the word 'tent'. It ends with 'nt'.\nThe letters 'n' and 't' blend together smoothly.\nLet's practice saying the word 'tent' three times.\nFeel the blend of 'n' and 't' on your tongue.\nWe spell it as t - e - n - t.\nIt is a perfect example of a CVCC word!",
      "examples": [{"title": "Spelling", "content": "t - e - n - t"}]
    },
    {
      "title": "Phonics Hunt: Under the Lamp",
      "text": "When the sun sets, the room becomes very dark.\nWe turn on the brass lamp sitting on our desk.\nLook at the word 'lamp'. It ends with 'mp'.\nThe letters 'm' and 'p' blend at the very end.\nWhat does a lamp help us observe at night?\nIt shines a bright light on our notebook pages.\nWe spell it as l - a - m - p.\nCan you hear the 'mp' blend at the end?",
      "examples": [{"title": "Spelling", "content": "l - a - m - p"}]
    },
    {
      "title": "Phonics Hunt: The Pink Flower",
      "text": "Let's take a walk in the green garden.\nWe observe a beautiful pink flower opening its petals.\nLook at the word 'pink'. It ends with 'nk'.\nThe letters 'n' and 'k' form a blended sound.\nHow many pink things can you see in your room?\nMaybe a pink toy, a pink pen, or a pink shirt.\nWe spell it as p - i - n - k.\nThe ending blend is 'nk'. Say it: pink!",
      "examples": [{"title": "Spelling", "content": "p - i - n - k"}]
    },
    {
      "title": "Phonics Hunt: Keeping Active",
      "text": "To keep our bodies strong, we must stay active.\nWe bend our knees before we run in the park.\nWe wear a tight leather belt to hold our shorts.\nLook at 'bend' (ends in 'nd') and 'belt' (ends in 'lt').\nBoth of these words are CVCC spelling patterns.\nThey show how consonants pair up at the end.\nWe spell them as b-e-n-d and b-e-l-t.\nPractice writing these action words on your paper!",
      "examples": [{"title": "Spelling", "content": "b - e - n - d  and  b - e - l - t"}]
    },
    {
      "title": "Phonics Hunt: In the Wind",
      "text": "Listen to the wind blowing through the bamboo trees.\nThe word 'wind' ends with the blend 'nd'.\nAfter running in the wind, we feel very thirsty.\nWe drink a cold glass of milk to get energy.\nThe word 'milk' ends with the blend 'lk'.\nBoth 'wind' and 'milk' are common CVCC words.\nWe spell them as w-i-n-d and m-i-l-k.\nRead these words aloud to hear their ending sounds!",
      "examples": [{"title": "Spelling", "content": "w - i - n - d  and  m - i - l - k"}]
    },
    {
      "title": "Phonics Hunt: Active Play",
      "text": "We sit at our wooden desk to write observations.\nThe word 'desk' ends with the blend 'sk'.\nWe go on an insect hunt in the garden grass.\nThe word 'hunt' ends with the blend 'nt'.\nBoth 'desk' and 'hunt' help us talk about play.\nThey follow the CVCC consonant blending pattern.\nWe spell them as d-e-s-k and h-u-n-t.\nCan you spell them without looking at the screen?",
      "examples": [{"title": "Spelling", "content": "d - e - s - k  and  h - u - n - t"}]
    },
    {
      "title": "Grammar: Pointing to Things",
      "text": "When we observe nature, we need to point to things.\nWe use special words called demonstrative pronouns.\nThese pronouns tell us if an object is near or far.\nThey also tell us if there is one object or many.\nThe four pronouns are: this, that, these, and those.\nThey help make our descriptions clear and specific.\nLet's learn how to use them like real scientists.\nWe will practice pointing to objects in our room!",
      "examples": [{"title": "Focus Pronouns", "content": "This, That, These, Those"}]
    },
    {
      "title": "Near Us: This and These",
      "text": "Look at the pencil you are holding in your hand.\nYou can say: 'This is my pencil.' (one object).\nNow look at the fingers on your own hand.\nYou can say: 'These are my fingers.' (many objects).\nWe use 'this' for a single object near us.\nWe use 'these' for multiple objects close to us.\nBoth words show that the objects are within reach.\nTry touching a book and saying: 'This is my book.'",
      "examples": [{"title": "Near Examples", "content": "This pencil (1 near), These rocks (many near)."}]
    },
    {
      "title": "Far From Us: That and Those",
      "text": "Look out the window at the distant sky.\nYou see a bird and say: 'That is a bird.' (one far).\nYou see clouds and say: 'Those are clouds.' (many far).\nWe use 'that' for a single object far away.\nWe use 'those' for multiple objects far away.\nThese words show that the objects are out of reach.\nPoint to a distant tree and say: 'That is a tree.'\nPoint to stars and say: 'Those are stars.'",
      "examples": [{"title": "Far Examples", "content": "That star (1 far), Those mountains (many far)."}]
    },
    {
      "title": "Sentence Engine: Declarative Sentences",
      "text": "A telling sentence is like a small train.\nIt makes a statement to tell a fact or observation.\nWe call this a declarative sentence in grammar.\nIt must always start with a capital letter.\nIt must always end with a period punctuation mark.\nIt has a subject (who or what the sentence is about).\nIt has a predicate (what the subject is or does).\nLet's build a declarative sentence together!",
      "examples": [{"title": "Rule", "content": "Always start with a capital letter and end with a period."}]
    },
    {
      "title": "Declarative: Spotting the Parts",
      "text": "Let's look at: 'Matteo rides a calesa.'\n'Matteo' is the subject because he is the person.\n'rides a calesa' is the predicate (the action).\nTogether, they tell us a complete factual statement.\nNotice the capital 'M' at the beginning of the sentence.\nNotice the period at the end of the sentence.\nWithout a subject and predicate, a sentence is incomplete.\nAlways check both parts when you write in your journal!",
      "examples": [{"title": "Subject", "content": "Matteo"}, {"title": "Predicate", "content": "rides a calesa"}]
    },
    {
      "title": "Story Time: The Calesa Ride",
      "text": "Let's read a short story about Matteo's day:\n'Matteo sits inside a wooden calesa on the street.\nThe fast horse walks down the paved town road.\nMatteo smiles at the colorful houses along the way.\nHe observes the busy community starting their morning.'\nThis story is made of declarative sentences.\nThey tell us exactly what Matteo does and sees.\nRead it aloud to practice your reading flow!",
      "examples": [{"title": "Reading Task", "content": "Read the story aloud to practice your spelling words!"}]
    },
    {
      "title": "Characters: Who is in the Story?",
      "text": "Every story has characters that make it interesting.\nCharacters are the people, animals, or creatures.\nThey perform actions and speak words in the plot.\nIn our story, the characters are Matteo and the horse.\nUnderstanding characters helps us connect with the story.\nWe can think about how they feel and what they want.\nWho is your favorite character in the calesa story?\nWrite down their names on your paper!",
      "examples": [{"title": "Key Concept", "content": "Characters = Who"}]
    },
    {
      "title": "Setting: Where and When?",
      "text": "The setting is where and when the story takes place.\nIt provides the background environment for the characters.\nIn our story, the setting is a historic town street.\nThe time of the story is a sunny morning.\nKnowing the setting helps us picture the events.\nIt is like looking at a photograph of the scene.\nWhere does your favorite daily activity take place?\nThat place is the setting of your own daily story!",
      "examples": [{"title": "Key Concept", "content": "Setting = Where and When"}]
    },
    {
      "title": "Plot: What Happens?",
      "text": "The plot is the sequence of events in a story.\nIt tells us what happens first, next, and last.\nFirst, Matteo gets inside the wooden calesa.\nNext, the horse walks down the paved town street.\nFinally, Matteo smiles at the colorful houses.\nA clear plot makes stories easy to understand.\nIt helps us follow the character's journey.\nCan you retell the plot of Matteo's ride in order?",
      "examples": [{"title": "Key Concept", "content": "Plot = What happens (First, Next, Then)"}]
    },
    {
      "title": "Observing Local Transport",
      "text": "In our local community, we observe unique transport.\nA calesa is a carriage drawn by a horse on land.\nIt has two large wheels and a wooden passenger cabin.\nA banca is a small outrigger boat used on water.\nIt helps fishermen travel across rivers and seas.\nBoth transport types are important to our heritage.\nThey are perfect topics for our declarative sentences.\nLet's write a sentence about a banca today!",
      "examples": [{"title": "Land Transport", "content": "calesa"}, {"title": "Water Transport", "content": "banca"}]
    },
    {
      "title": "Nature Connections: The Wet Sand",
      "text": "Let's walk down to the riverbank to explore.\nWe observe wet sand near the flowing water.\nLet's write: 'This sand is wet and cold.'\n'Sand' is a CVCC spelling word ending in 'nd'.\n'This' points to the sand right under our feet.\nThis sentence is a telling (declarative) sentence.\nIt starts with a capital letter and ends with a period.\nWe are using English to describe our science observations!",
      "examples": [{"title": "Observation", "content": "Pointing to sand near your feet: 'This is wet sand.'"}]
    },
    {
      "title": "Science Connection: The Pink Fish",
      "text": "Look at the clear water in the stream.\nWe point to a swimming fish: 'That is a pink fish.'\n'Pink' is a CVCC word ending in the blend 'nk'.\n'That' points to the fish swimming far from us.\nThis is a factual observation about the natural world.\nIt uses our senses to collect details about animals.\nAlways look closely at the color of fish scales.\nWhat other scale colors can you observe in the water?",
      "examples": [{"title": "Observation", "content": "Pointing to fish in the pond: 'That is a pink fish.'"}]
    },
    {
      "title": "Guided Practice: Spotting CVCC Words",
      "text": "Let's play a game to spot CVCC words.\nRead this: 'The child sat at the wooden desk.'\nWhich word ends with a double consonant blend?\nYes, the word is 'desk'! It ends with 'sk'.\nThe other words do not follow the CVCC pattern.\nSpelling 'desk' correctly requires the letters d-e-s-k.\nCan you find another CVCC word in your classroom?\nLook at the lamp or the window frame!",
      "examples": [{"title": "Check", "content": "d - e - s - k ends with the consonants s and k."}]
    },
    {
      "title": "Guided Practice: Near or Far?",
      "text": "Let's practice choosing the correct pronoun.\nIf you are holding a flower, what do you say?\n'A. This is a flower.' or 'B. That is a flower.'?\nSince the flower is in your hand, choose A!\nIf a bird is high on a tree branch, you say:\n'That is a bird on the branch.'\nUse 'this' for near, and 'that' for far away.\nIt is as simple as measuring distance with your eyes!",
      "examples": [{"title": "Rule of Thumb", "content": "If you can touch it, use 'this' or 'these'."}]
    },
    {
      "title": "Guided Practice: Capital and Period",
      "text": "Let's check the rules for telling sentences.\nLook at: 'the banca floats in the river'\nWhat is missing from this declarative sentence?\nIt must start with a capital 'T' for 'The'.\nIt must end with a period at the end of 'river'.\nLet's write it correctly: 'The banca floats in the river.'\nNow it has a subject and a predicate.\nIt is a complete and correct sentence!",
      "examples": [{"title": "Corrected", "content": "'The banca floats in the river.'"}]
    },
    {
      "title": "Common Error: Mixing Near and Far",
      "text": "A common mistake is using 'this' for far objects.\nIf a star is shining in the sky, do not say:\n'This is a bright star.' (It is too far to touch!).\nInstead, say: 'That is a bright star.'\nIf the books are far on the shelf, do not say:\n'These are my books.' (They are out of reach!).\nInstead, say: 'Those are my books.'\nAlways check the distance before you choose the pronoun!",
      "examples": [{"title": "Correction", "content": "'Those clouds look soft.'"}]
    },
    {
      "title": "Summary of Week 1",
      "text": "Congratulations! You completed all the slides for Week 1.\nLet's review the main language tools we mastered.\nWe learned to decode CVCC words like tent, lamp, and desk.\nWe learned to point using this, that, these, and those.\nWe learned to write declarative sentences with periods.\nWe learned to identify story characters, settings, and plots.\nWe connected our English lessons to science observations.\nYou are now ready to take the quiz and challenges!",
      "examples": [{"title": "Vocabulary", "content": "hand, tent, pink, lamp, bend, belt, milk, wind, desk, hunt"}]
    }
  ],
  "standard": [
    {"type": "choice", "q": "Which word ends with a CVCC blend?", "options": ["hand", "baby", "frog", "paper"], "answer": 0},
    {"type": "choice", "q": "Identify the CVCC word in this sentence: 'The lamp is bright.'", "options": ["lamp", "bright", "is", "The"], "answer": 0},
    {"type": "choice", "q": "Complete the word: 'The hikers slept in a green te__.'", "options": ["nt", "mp", "nd", "lk"], "answer": 0},
    {"type": "choice", "q": "Which of these words ends with the same blend as 'pink'?", "options": ["sink", "pond", "belt", "milk"], "answer": 0},
    {"type": "choice", "q": "Which CVCC word represents the blowing air we observe?", "options": ["wind", "lamp", "desk", "hunt"], "answer": 0},
    {"type": "choice", "q": "Complete the sentence for a pencil you are holding: '___ is my pencil.'", "options": ["This", "That", "These", "Those"], "answer": 0},
    {"type": "choice", "q": "For two books on your lap, what do you say?", "options": ["These are my books.", "Those are my books.", "This is my book.", "That is my book."], "answer": 0},
    {"type": "choice", "q": "Complete: '___ calesa next to me is painted red.'", "options": ["This", "That", "Those", "These"], "answer": 0},
    {"type": "choice", "q": "When pointing to your own two hands, you say:", "options": ["These are my hands.", "Those are my hands.", "This is my hand.", "That is my hand."], "answer": 0},
    {"type": "choice", "q": "Complete: '___ is my drawing of a pink flower in my lap.'", "options": ["This", "That", "Those", "These"], "answer": 0},
    {"type": "choice", "q": "Complete for a bird flying high in the sky: '___ is a hawk.'", "options": ["That", "This", "These", "Those"], "answer": 0},
    {"type": "choice", "q": "For many stars shining far away, we say:", "options": ["Those are stars.", "These are stars.", "That is a star.", "This is a star."], "answer": 0},
    {"type": "choice", "q": "Complete: '___ are bancas sailing in the distant river.'", "options": ["Those", "These", "This", "That"], "answer": 0},
    {"type": "choice", "q": "Pointing to a mountain on the horizon, we say:", "options": ["That is a mountain.", "This is a mountain.", "Those are mountains.", "These are mountains."], "answer": 0},
    {"type": "choice", "q": "Complete: '___ is a horse drawing the calesa down the street yonder.'", "options": ["That", "This", "These", "Those"], "answer": 0},
    {"type": "choice", "q": "What type of sentence is: 'Matteo smiles at the colorful houses.'", "options": ["Declarative sentence", "Interrogative sentence", "Imperative sentence", "Exclamatory sentence"], "answer": 0},
    {"type": "choice", "q": "What is the subject of the sentence: 'The fast horse runs.'", "options": ["The fast horse", "runs", "fast horse", "runs fast"], "answer": 0},
    {"type": "choice", "q": "What is the predicate of the sentence: 'Matteo rides a calesa.'", "options": ["rides a calesa", "Matteo", "calesa", "rides"], "answer": 0},
    {"type": "choice", "q": "Which of these declarative sentences is punctuated correctly?", "options": ["The banca sails on the river.", "the banca sails on the river", "The banca sails on the river?", "the banca sails on the river."], "answer": 0},
    {"type": "verify", "q": "True or False: A telling (declarative) sentence always starts with a capital letter and ends with a period.", "options": ["True", "False"], "answer": 0},
    {"type": "choice", "q": "Who is the main character in the story of the calesa ride?", "options": ["Matteo", "Kiko", "A fisherman", "A teacher"], "answer": 0},
    {"type": "choice", "q": "What is the setting of the calesa ride story?", "options": ["A town street on a sunny day", "A forest at night", "A deep sea", "A modern airport"], "answer": 0},
    {"type": "choice", "q": "What happens first in the calesa ride story?", "options": ["Matteo sits in the calesa.", "The horse runs away.", "Matteo sees the ocean.", "The calesa breaks down."], "answer": 0},
    {"type": "choice", "q": "Which of these is a local transport we observed on water?", "options": ["banca", "calesa", "car", "train"], "answer": 0},
    {"type": "choice", "q": "What does the word 'observing' mean in science and reading?", "options": ["Using our senses to collect facts", "Making up a fun story", "Drawing a random picture", "Singing a song"], "answer": 0}
  ],
  "challenge": [
    {"type": "choice", "q": "Challenge: If you observe a bird flying far away and you write: 'this is a fast bird.' What two errors did you make?", "options": ["Used 'this' instead of 'that', and did not capitalize the first letter.", "Used 'that' instead of 'this', and forgot the period.", "Used plural 'these' and forgot the subject.", "No errors were made."], "answer": 0},
    {"type": "choice", "q": "Challenge: Which sentence has a CVCC word as the subject and another CVCC word in the predicate?", "options": ["The wind blows the pink lamp.", "The frog jumps on the rock.", "Matteo rides the red calesa.", "A baby tiger sleeps soundly."], "answer": 0},
    {"type": "choice", "q": "Challenge: Read this passage: 'The wind blew the dry sand. A small crab ran to its hole.' What is the setting of this passage?", "options": ["A windy beach or riverbank", "A wet green forest", "Inside a quiet school", "A busy city market"], "answer": 0},
    {"type": "choice", "q": "Challenge: Which of these is a declarative sentence that contains a scientific observation about a plant?", "options": ["This green leaf has five points.", "I love flowers because they are pretty.", "Please water the dry plant.", "Does the plant need sunlight?"], "answer": 0},
    {"type": "choice", "q": "Challenge: Unscramble the CVCC word in: 'We keep our books on a k-s-e-d.'", "options": ["desk", "shed", "disk", "sand"], "answer": 0}
  ],
  "performance": {
    "type": "performance",
    "title": "My Nature Observation Journal",
    "desc": "Observe three different natural objects around your home or garden (like a leaf, sand, or a lamp). Draw them on a piece of paper. For each drawing, write one declarative sentence using a demonstrative pronoun (This, That, These, Those) and at least one CVCC word. Read your sentences aloud to your parents.",
    "labels": ["Correct use of CVCC words (e.g. hand, wind, desk, lamp, sand)", "Correct use of Demonstrative Pronouns based on near/far observation", "Proper declarative sentence structure (starts with capital, ends with period)"]
  },
  "worksheet": {
    "pages": [
      """<div class="ws-page-content">
                  <h3>Exercise 1: CVCC Phonics Hunt</h3>
                  <p class="ws-instruction">Write the correct CVCC word that matches each nature clue below using your stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Blowing air that we feel but cannot see: <strong>wi__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">wind</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. A tool that gives light when it is dark: <strong>la__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">lamp</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. A shelter made of canvas used during outdoor camps: <strong>te__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">tent</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 2: Near and Far Pointing</h3>
                  <p class="ws-instruction">Fill in the blank with the correct demonstrative pronoun (<strong>This</strong>, <strong>These</strong>, <strong>That</strong>, <strong>Those</strong>).</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. (Near) ___ is my hand observing the wet sand.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">This</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. (Far) ___ are bancas sailing in the distant river.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">Those</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. (Near) ___ are colorful flowers in my garden lap.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">These</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 3: Declarative Sentences & Story Elements</h3>
                  <p class="ws-instruction">Write the subject or predicate for the story about Matteo's banca ride.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">In 'Matteo sails a wooden banca.', write the Subject (who):</div>
                    <div class="writing-line" style="margin-top: 10px; width: 80%;"><span class="ws-answer">Matteo</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">Write the Predicate (what the subject does) in 'The wind blows the sails.':</div>
                    <div class="writing-line" style="margin-top: 10px; width: 80%;"><span class="ws-answer">blows the sails</span></div>
                  </div>
                </div>"""
    ]
  }
}

WEEK2_DATA_ENG = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 2: CCVC Words & Action Verbs",
  "slides": [
    {
      "title": "Welcome to the Animal Kingdom!",
      "text": "Hello, Explorer! Welcome to English Week 2!\nThis week, we are diving into the world of action.\nWe will learn about words that start with double consonants.\nWe will understand action verbs and how they show movement.\nWe will ask questions like a scientist using question marks.\nWe will also learn to read character feelings and traits.\nLet's keep our eyes open and watch animals in action.\nAre you ready to explore the animal kingdom today?",
      "examples": [{"title": "Weekly Goal", "content": "Master CCVC words, understand action verbs, ask question sentences, and infer feelings."}]
    },
    {
      "title": "Starting Sounds (CCVC)",
      "text": "CCVC words stand for Consonant-Consonant-Vowel-Consonant.\nThey start with a blend of two consonant sounds.\nThink of the word f-r-o-g. The 'f' and 'r' blend.\nWe say them together quickly: frog!\nCCVC words are different from CVCC words.\nThey have their consonant blends at the beginning.\nLet's practice saying beginning consonant blends today.\nThey help us name many interesting things in nature!",
      "examples": [{"title": "Word Pattern", "content": "C = Consonant, C = Consonant, V = Vowel, C = Consonant."}]
    },
    {
      "title": "Phonics Hunt: The Green Frog",
      "text": "In the wet pond, we observe a green frog.\nThe word 'frog' starts with the 'fr' blend.\nWe watch how it leaps from leaf to leaf.\nWe spell the word as f - r - o - g.\nListen to the beginning sound of the word 'frog'.\nThe letters 'f' and 'r' join to make 'fr'.\nIt is a wonderful CCVC word we see in ponds.\nLet's say 'frog' aloud and feel the blend!",
      "examples": [{"title": "Spelling", "content": "f - r - o - g"}]
    },
    {
      "title": "Phonics Hunt: The Crawling Crab",
      "text": "On the sandy beach, we spot a small crab.\nIt crawls sideways along the wet sand.\nThe word 'crab' starts with the 'cr' blend.\nWe spell the word as c - r - a - b.\nHow many legs does a crab use to crawl?\nCrabs are fascinating creatures in the shoreline habitat.\nSay 'crab' to hear the 'cr' starting sound.\nIt is another CCVC word in our nature list!",
      "examples": [{"title": "Spelling", "content": "c - r - a - b"}]
    },
    {
      "title": "Phonics Hunt: In the Pond",
      "text": "We watch a small fish swim in the water.\nThe word 'swim' starts with the blend 'sw'.\nWe must not block the drain plug in the sink.\nThe word 'plug' starts with the blend 'pl'.\nBoth 'swim' and 'plug' are CCVC spelling patterns.\nThey help us describe actions and useful objects.\nWe spell them as s-w-i-m and p-l-u-g.\nPractice writing these words in your notebook now!",
      "examples": [{"title": "Spelling", "content": "s - w - i - m  and  p - l - u - g"}]
    },
    {
      "title": "Phonics Hunt: Music and Play",
      "text": "Hear the loud beat of the parade drum!\nThe word 'drum' starts with the blend 'dr'.\nRed and blue flags wave in the blowing wind.\nThe word 'flag' starts with the blend 'fl'.\nBoth 'drum' and 'flag' add color to our day.\nThey follow the CCVC word spelling structure.\nWe spell them as d-r-u-m and f-l-a-g.\nCan you hear the starting sounds of drum and flag?",
      "examples": [{"title": "Spelling", "content": "d - r - u - m  and  f - l - a - g"}]
    },
    {
      "title": "Phonics Hunt: Safety First",
      "text": "We see a red stop sign on the paved road.\nThe word 'stop' starts with the blend 'st'.\nWe must not slip on the wet bathroom floor.\nThe word 'slip' starts with the blend 'sl'.\nBoth 'stop' and 'slip' help keep us safe.\nThey are common CCVC words used in instructions.\nWe spell them as s-t-o-p and s-l-i-p.\nBe careful to say the starting consonants clearly!",
      "examples": [{"title": "Spelling", "content": "s - t - o - p  and  s - l - i - p"}]
    },
    {
      "title": "Phonics Hunt: Flat Leaves",
      "text": "The leaves of the water lily are green and flat.\nThe word 'flat' starts with the blend 'fl'.\nBe careful not to fall into a deep mud trap!\nThe word 'trap' starts with the blend 'tr'.\nBoth 'flat' and 'trap' describe physical things.\nThey follow the CCVC word pattern in phonics.\nWe spell them as f-l-a-t and t-r-a-p.\nLet's practice writing them on our paper today!",
      "examples": [{"title": "Spelling", "content": "f - l - a - t  and  t - r - a - p"}]
    },
    {
      "title": "Grammar: Action Words (Verbs)",
      "text": "Verbs are words that show action or movement.\nThey tell us what people, animals, or things do.\nWithout verbs, nothing in our stories would move!\nVerbs are the motor engines of our sentences.\nThey show actions like run, jump, sing, and play.\nIn science, we use verbs to describe natural events.\nE.g., 'The wind blows' or 'The water boils'.\nLet's find verbs in the sentences we read!",
      "examples": [{"title": "Key Concept", "content": "Verb = Action word"}]
    },
    {
      "title": "Observing Animals in Action",
      "text": "Let's watch animals in their natural habitats.\nThe green frog leaps across the pond.\nThe blue bird flies high in the clear sky.\nThe gold fish swims in the cool stream.\nThe action verbs are leaps, flies, and swims.\nThey describe the movements of living things.\nUsing specific verbs makes our observations clear.\nWhat actions can you observe a dog performing?",
      "examples": [{"title": "Action", "content": "leap, fly, swim, crawl, run"}]
    },
    {
      "title": "Verbs in Our Daily Life",
      "text": "We use verbs to talk about what we do.\n'Matteo reads a story book in the room.'\n'The children play at school during recess.'\n'My sister writes a science report on paper.'\nThe verbs are reads, play, and writes.\nThey tell us the actions of our characters.\nNotice how the verb changes for one or many.\nMatteo reads (one), but the children play (many).",
      "examples": [{"title": "Matteo", "content": "reads"}, {"title": "Children", "content": "play"}]
    },
    {
      "title": "Sentence Engine: Interrogative Sentences",
      "text": "An interrogative sentence is an asking sentence.\nIt asks a question to gather facts or details.\nIt must always start with a capital letter.\nIt must always end with a question mark (?).\nScientists use interrogative sentences to investigate nature.\nThey ask questions about how the world works.\nLet's learn how to ask questions in English.\nIt is the first step to becoming a scientist!",
      "examples": [{"title": "Rule", "content": "Always start with a capital letter and end with a question mark."}]
    },
    {
      "title": "Question Words",
      "text": "We start questions with special interrogative words.\nThese words are: Who, What, Where, When, and Why.\n'Who is looking at the green frog in the pond?'\n'What does the crawling crab eat on the beach?'\n'Where does the water flow when it rains?'\nEach word asks for a different kind of detail.\n'Where' asks for place, 'What' asks for things.\nWhich question word asks about the reason why?",
      "examples": [{"title": "Question Words", "content": "Who, What, Where, When, Why"}]
    },
    {
      "title": "Story Time: The Pond Detective",
      "text": "Let's read a short story about Matteo's discovery:\n'Matteo looks closely at the quiet pond.\nHe asks, 'Who is hiding under the green leaf?'\nSuddenly, a green frog leaps out of the water!\nMatteo laughs and says, 'My frog friend is safe!''\nThis story has both telling and asking sentences.\nThe question helps us find out what happens next.\nLet's look at the character's feelings next!",
      "examples": [{"title": "Reading Task", "content": "Identify the CCVC words and verbs in this story!"}]
    },
    {
      "title": "Inferring Feelings: Happy or Scared?",
      "text": "To infer means to find clues in the story.\nWe use these clues to understand what is not said.\nIn our story, Matteo laughs when the frog leaps.\nHe says, 'My frog friend is safe!' in a happy voice.\nWe can infer that Matteo feels happy and relieved.\nHe is not scared of the leaping green frog at all.\nPaying attention to actions helps us infer feelings.\nHow do you feel when you see a frog leap?",
      "examples": [{"title": "Infer", "content": "Matteo laughs -> Matteo is happy."}]
    },
    {
      "title": "Inferring Traits: Curious Matteo",
      "text": "Character traits are the qualities of a person.\nWe infer traits by looking at character choices.\nMatteo looks closely at the pond to find things.\nHe asks questions about who is hiding under leaves.\nWe can infer that Matteo is a curious boy.\nHe acts like a scientist who loves to explore.\nUnderstanding traits makes story characters feel real.\nWhat traits do you show when you do experiments?",
      "examples": [{"title": "Infer", "content": "Asks questions -> Matteo is curious."}]
    },
    {
      "title": "Grammar: Possessive Pronouns",
      "text": "Possessive pronouns show who owns an object.\nThey tell us who the object belongs to in a sentence.\nThe pronouns are: my, your, his, her, and its.\n'This is my magnifying glass.' (belongs to me).\n'That is his science notebook.' (belongs to him).\n'She plays with her green balloon.' (belongs to her).\n'The dog wagged its tail.' (belongs to the dog).\nLet's practice showing ownership in our sentences!",
      "examples": [{"title": "Ownership", "content": "my book, his net, her drum"}]
    },
    {
      "title": "Interrogative vs Possessive",
      "text": "Interrogative and possessive pronouns work together.\nWe use an interrogative pronoun to ask a question:\n'Whose science book is on the desk?'\nWe use a possessive pronoun to give the answer:\n'It is her science book on the desk.'\nThis shows how questions and answers connect.\nAlways use the correct pronoun for the character.\nWhose pencil are you using to write today?",
      "examples": [{"title": "Interrogative", "content": "Whose"}, {"title": "Possessive", "content": "her"}]
    },
    {
      "title": "Science Connection: Animal Habitats",
      "text": "Where does the crab crawl during the day?\nIt lives in its sandy shoreline habitat.\nThe question 'Where does the crab live?' is interrogative.\nIt ends with a question mark and asks about place.\nThe answer is a declarative sentence telling a fact:\n'The crab crawls in the wet sand.'\nWe use verbs like 'crawls' to show its action.\nWe use nouns like 'sand' to describe its habitat.",
      "examples": [{"title": "Observation", "content": "A crab crawling in the wet sand."}]
    },
    {
      "title": "Science Connection: Water Safety",
      "text": "Why must we keep the drain plug clean?\nA clean plug lets the water flow safely away.\nThe question 'Why do we clean it?' is interrogative.\nThe word 'flow' is an action verb for water.\nIn science, we ask questions about water movement.\nWe observe how liquid flows down the pipe.\nThe word 'plug' is our CCVC spelling focus.\nWe must spell it correctly as p - l - u - g!",
      "examples": [{"title": "Action Verb", "content": "flow, drain, clean"}]
    },
    {
      "title": "Guided Practice: Spotting CCVC",
      "text": "Let's play a game to spot CCVC words.\nRead this: 'The child sat on a flat rock.'\nWhich word starts with a double consonant blend?\nYes, the word is 'flat'! It starts with 'fl'.\nThe other words do not follow the CCVC pattern.\nSpelling 'flat' correctly requires the letters f-l-a-t.\nCan you find another CCVC word in your house?\nLook at the flag or the drain plug!",
      "examples": [{"title": "Check", "content": "f - l - a - t starts with the consonants f and l."}]
    },
    {
      "title": "Guided Practice: Finding the Verb",
      "text": "Let's practice finding action words in sentences.\nRead: 'The blue bird flies high in the sky.'\nWhat is the bird doing in the sentence?\nIt is flying! So the verb is 'flies'.\nThe other words are nouns, adjectives, or pronouns.\nThe verb 'flies' tells us the action of the subject.\nAlways look for the action word to find the verb.\nWhat verb describes what a fish does in water?",
      "examples": [{"title": "Verb Check", "content": "flies (action performed by the bird)"}]
    },
    {
      "title": "Guided Practice: Question Mark",
      "text": "Let's check the rules for asking sentences.\nWhich sentence is punctuated correctly today?\n'A. Where is the green frog.' or\n'B. Where is the green frog?'\nB is correct because it asks a question!\nIt must end with a question mark, not a period.\nAlways check the ending mark of your questions.\nIt tells the reader how to say the sentence!",
      "examples": [{"title": "Corrected", "content": "'Where is the green frog?'"}]
    },
    {
      "title": "Common Error: Capitalizing Pronouns",
      "text": "A common mistake is capitalizing possessive pronouns.\nDo not write: 'This is My green frog.'\nInstead, write: 'This is my green frog.'\nPronouns like 'my' or 'her' do not need capitals.\nThey only start with a capital if they begin a sentence.\nE.g., 'My frog is green.' is correct.\nKeep pronouns lowercase when they are in the middle!\nLet's practice writing them correctly in our logs.",
      "examples": [{"title": "Incorrect", "content": "'This is My frog.'"}, {"title": "Correct", "content": "'This is my frog.'"}]
    },
    {
      "title": "Summary of Week 2",
      "text": "Congratulations! You completed all the slides for Week 2.\nLet's review the main language tools we mastered.\nWe learned to decode CCVC words like frog, crab, and plug.\nWe learned to identify action verbs in our sentences.\nWe learned to write interrogative sentences with question marks.\nWe learned to infer character feelings and traits from clues.\nWe connected our English lessons to animal observations. \nYou are now ready to take the quiz and challenges!",
      "examples": [{"title": "Vocabulary", "content": "frog, drum, plug, stop, crab, flag, slip, swim, flat, trap"}]
    }
  ],
  "standard": [
    {"type": "choice", "q": "Which word starts with a CCVC blend?", "options": ["frog", "hand", "baby", "paper"], "answer": 0},
    {"type": "choice", "q": "Identify the CCVC word in this sentence: 'The crab crawls.'", "options": ["crab", "crawls", "The", "None"], "answer": 0},
    {"type": "choice", "q": "Complete the word: 'The band played a loud dr__.'", "options": ["um", "op", "ip", "at"], "answer": 0},
    {"type": "choice", "q": "Which of these words starts with the same blend as 'swim'?", "options": ["swan", "frog", "plug", "trap"], "answer": 0},
    {"type": "choice", "q": "Which CCVC word represents a device that blocks water in a sink?", "options": ["plug", "drum", "flag", "stop"], "answer": 0},
    {"type": "choice", "q": "Which of these is an action word (verb)?", "options": ["leaps", "green", "pond", "water"], "answer": 0},
    {"type": "choice", "q": "Identify the verb in: 'The child watches the crawling spider.'", "options": ["watches", "child", "spider", "crawling"], "answer": 0},
    {"type": "choice", "q": "Complete the sentence with the correct action verb: 'Birds ___ high in the sky.'", "options": ["fly", "blue", "wings", "nest"], "answer": 0},
    {"type": "choice", "q": "Which verb shows what fish do to move in water?", "options": ["swim", "run", "climb", "fly"], "answer": 0},
    {"type": "choice", "q": "Complete: 'Matteo ___ his science notebook every night.'", "options": ["reads", "book", "happy", "student"], "answer": 0},
    {"type": "choice", "q": "Which of these is an interrogative sentence?", "options": ["Where does the frog live?", "The frog lives in the pond.", "Look at the green frog.", "What a beautiful frog!"], "answer": 0},
    {"type": "choice", "q": "What punctuation mark is used at the end of an interrogative sentence?", "options": ["Question mark (?)", "Period (.)", "Exclamation mark (!)", "Comma (,)"], "answer": 0},
    {"type": "choice", "q": "Complete the question: '___ is the color of the crab?'", "options": ["What", "Who", "Where", "When"], "answer": 0},
    {"type": "choice", "q": "Complete the question: '___ does the water flow when it rains?'", "options": ["Where", "Who", "What", "Whose"], "answer": 0},
    {"type": "choice", "q": "Which of these is an asking sentence that is punctuated correctly?", "options": ["Who is hiding under the leaf?", "who is hiding under the leaf.", "Who is hiding under the leaf.", "who is hiding under the leaf?"], "answer": 0},
    {"type": "choice", "q": "Read: 'Matteo jumps and cheers when he sees the frog.' How does Matteo feel?", "options": ["Happy and excited", "Sad and lonely", "Scared and cold", "Angry and tired"], "answer": 0},
    {"type": "choice", "q": "Read: 'The bird flew away when the cat came close.' What trait does the bird show?", "options": ["Cautious and survival-oriented", "Brave and strong", "Friendly and playful", "Lazy and sleep-seeking"], "answer": 0},
    {"type": "choice", "q": "If a character shares their lunch with a hungry classmate, we can infer they are:", "options": ["kind and caring", "selfish and greedy", "mean and angry", "lazy and quiet"], "answer": 0},
    {"type": "choice", "q": "What does it mean to 'infer' a trait?", "options": ["To use clues to guess character qualities", "To write a word down on paper", "To count the number of characters", "To make a drawing of the setting"], "answer": 0},
    {"type": "choice", "q": "Read: 'Matteo stays up to check on his plants.' We can infer that Matteo is:", "options": ["responsible", "lazy", "fearful", "forgetful"], "answer": 0},
    {"type": "choice", "q": "Complete: 'Whose science book is this?' 'It is ___ book (belongs to me).'", "options": ["my", "your", "his", "its"], "answer": 0},
    {"type": "choice", "q": "Complete: 'The dog wagged ___ tail when it saw the water.'", "options": ["its", "it's", "his", "her"], "answer": 0},
    {"type": "choice", "q": "Complete: '___ is looking at the pond?' 'Matteo is looking.'", "options": ["Who", "What", "Where", "Why"], "answer": 0},
    {"type": "choice", "q": "Complete: 'She plays with ___ doll in the garden (belongs to her).'", "options": ["her", "his", "my", "our"], "answer": 0},
    {"type": "choice", "q": "Identify the interrogative pronoun in: 'What did you find in the soil?'", "options": ["What", "did", "you", "find"], "answer": 0}
  ],
  "challenge": [
    {"type": "choice", "q": "Challenge: Which sentence contains a CCVC word, an action verb, and a possessive pronoun?", "options": ["The frog swims in my pond.", "The dog barked at the cat.", "This is a green crab.", "Can you see the blue flag?"], "answer": 0},
    {"type": "choice", "q": "Challenge: If you want to ask a friend about the habitat of a crab, which question is correct?", "options": ["Where does the crab live?", "The crab lives on the beach.", "Please find the crab.", "What a small crab!"], "answer": 0},
    {"type": "choice", "q": "Challenge: Read: 'The frog sat still. It did not move even when a fly buzzed by. Soon, its head dropped.' What can we infer about the frog?", "options": ["It is very tired or resting.", "It is hunting actively.", "It is playing a game.", "It is angry at the fly."], "answer": 0},
    {"type": "choice", "q": "Challenge: Which CCVC word represents a flat fabric used to show a country or community symbol?", "options": ["flag", "plug", "frog", "flat"], "answer": 0},
    {"type": "choice", "q": "Challenge: Spot the error: 'whose green frog is that?'", "options": ["The first letter should be capitalized.", "It should end with a period.", "The word 'green' is misspelled.", "There is no error."], "answer": 0}
  ],
  "performance": {
    "type": "performance",
    "title": "Animal Movement Observation Net",
    "desc": "Go outside to observe a small animal or insect (like an ant, a bird, or a frog). Draw the animal in its habitat. Write three interrogative sentences asking questions about how it moves, what it eats, and who shares its habitat. Identify and underline the action verbs in your questions.",
    "labels": ["Correct identification of animal behavior and drawing", "Correct form and punctuation of interrogative sentences (starts with capital, ends with ?)", "Underlining the correct action verbs (e.g. crawl, fly, eat, hop)"]
  },
  "worksheet": {
    "pages": [
      """<div class="ws-page-content">
                  <h3>Exercise 1: CCVC Phonics Hunt</h3>
                  <p class="ws-instruction">Write the correct CCVC word that matches each animal or object clue below using your stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. An amphibian that leaps and lives in wet ponds: <strong>fr__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">frog</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. A hard-shelled animal that crawls sideways on wet sand: <strong>cr__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">crab</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Moving in water using fins or limbs: <strong>sw__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">swim</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 2: Action Verbs in Nature</h3>
                  <p class="ws-instruction">Identify the action verb (movement word) in each sentence and write it down.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. The brown dog swims in the deep river.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">swims</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. A heavy rock rolls down the muddy hill.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">rolls</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Matteo reads a science book about habitats.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">reads</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 3: Asking Questions (Interrogatives)</h3>
                  <p class="ws-instruction">Rearrange the words to build a correct interrogative sentence. Don't forget capital letters and question marks!</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. frog / where / the / does / live</div>
                    <div class="writing-line" style="margin-top: 10px; width: 100%;"><span class="ws-answer">Where does the frog live?</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. crab / what / eat / does / a</div>
                    <div class="writing-line" style="margin-top: 10px; width: 100%;"><span class="ws-answer">What does a crab eat?</span></div>
                  </div>
                </div>"""
    ]
  }
}

WEEK3_DATA_ENG = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 3: VCV Words & Imperative Sentences",
  "slides": [
    {
      "title": "Welcome to the Lab of Discovery!",
      "text": "Hello, Researcher! Welcome to English Week 3!\nThis week, we are exploring the lab of discovery.\nWe will learn word patterns with long vowel sounds.\nWe will understand how single consonants sit between vowels.\nWe will learn to give instructions or make requests.\nWe will also understand cause and effect in nature.\nLet's keep our notebooks ready to write observations.\nAre you ready to discover new language rules today?",
      "examples": [{"title": "Weekly Goal", "content": "Master VCV words, learn imperative commands/requests, understand cause and effect, and decode root words."}]
    },
    {
      "title": "Long Vowel Sounds (VCV)",
      "text": "VCV stands for Vowel-Consonant-Vowel in phonics.\nIn these words, a single consonant sits between two vowels.\nThis single consonant makes the first vowel sound long.\nThink of the word b-a-b-y. The 'a' sound is long.\nIt says its own letter name: 'ay' instead of 'ah'.\nThis is different from short vowel words like cap.\nThe consonant is like a bridge between the vowels.\nLet's learn how to read and write VCV words!",
      "examples": [{"title": "Word Pattern", "content": "V = Vowel (long sound), C = Consonant, V = Vowel."}]
    },
    {
      "title": "Phonics Hunt: The Striped Tiger",
      "text": "In the green forest, we study the striped tiger.\nIn the word 'tiger', 'g' is between 'i' and 'e'.\nThis consonant placement makes the 'i' sound long.\nWe pronounce the word slowly as t - i - g - e - r.\nTigers are strong carnivores in the wild habitat.\nListen to the long 'i' sound when you say it.\nIt is a perfect VCV word in our list.\nWrite down 'tiger' on your paper to practice spelling!",
      "examples": [{"title": "Spelling", "content": "t - i - g - e - r"}]
    },
    {
      "title": "Phonics Hunt: The Busy Spider",
      "text": "On the garden wall, a busy spider spins a web.\nIn the word 'spider', 'd' is between 'i' and 'e'.\nThe single consonant causes the 'i' to sound long.\nWe spell the word as s - p - i - d - e - r.\nSpiders help control insect pests in our gardens.\nThey are beneficial creatures to observe in nature.\nSay 'spider' to hear the long vowel sound clearly.\nIt is another useful VCV word for our notebook!",
      "examples": [{"title": "Spelling", "content": "s - p - i - d - e - r"}]
    },
    {
      "title": "Phonics Hunt: Beautiful Flowers",
      "text": "We observe a colorful tulip opening in the sun.\nIn the word 'tulip', 'l' is between 'u' and 'i'.\nThe first vowel 'u' makes a long 'yoo' sound.\nWe spell the word as t - u - l - i - p.\nA tulip is a beautiful plant that grows from bulbs.\nIt needs water, soil, and sunlight to survive.\nSay the word 'tulip' and listen to the 'u'.\nIt is a colorful VCV word in our garden!",
      "examples": [{"title": "Spelling", "content": "t - u - l - i - p"}]
    },
    {
      "title": "Phonics Hunt: Making Music",
      "text": "We listen to soft music in the quiet classroom.\nIn the word 'music', 's' is between 'u' and 'i'.\nThe vowel 'u' has a long, beautiful 'yoo' sound.\nWe spell the word as m - u - s - i - c.\nMusic is made when objects vibrate to create sounds.\nThese sound waves travel through the air to our ears.\nListen to the long vowel sound in 'music' today.\nLet's sing a song to celebrate our learning!",
      "examples": [{"title": "Spelling", "content": "m - u - s - i - c"}]
    },
    {
      "title": "Phonics Hunt: Lab Notebooks",
      "text": "We write our science observations on white paper.\nIn the word 'paper', 'p' is between 'a' and 'e'.\nThe single consonant makes the 'a' sound long.\nWe spell the word as p - a - p - e - r.\nAlways keep your paper neat and well-labeled.\nIt helps scientists keep track of their discoveries.\nSay 'paper' and feel the sound on your lips.\nIt is an essential VCV word for our studies!",
      "examples": [{"title": "Spelling", "content": "p - a - p - e - r"}]
    },
    {
      "title": "Phonics Hunt: Silent and Open",
      "text": "We remain silent to observe birds in the trees.\nIn 'silent', the consonant 'l' is between 'i' and 'e'.\nWe keep the window open for fresh air to flow.\nIn 'open', the consonant 'p' is between 'o' and 'e'.\nBoth 'silent' and 'open' follow the VCV pattern.\nThey help us describe states and actions in our lab.\nWe spell them as s-i-l-e-n-t and o-p-e-n.\nRead them aloud and check their long vowel sounds!",
      "examples": [{"title": "Spelling", "content": "s-i-l-e-n-t and o-p-e-n"}]
    },
    {
      "title": "Phonics Hunt: Basic Tools",
      "text": "We learn basic skills for performing simple experiments.\nIn 'basic', the consonant 's' is between 'a' and 'i'.\nWe stay at a hotel during the science field trip.\nIn 'hotel', the consonant 't' is between 'o' and 'e'.\nBoth 'basic' and 'hotel' are VCV spelling patterns.\nThey help us talk about knowledge and places we visit.\nWe spell them as b-a-s-i-c and h-o-t-e-l.\nWrite these words in your vocabulary notebook today!",
      "examples": [{"title": "Spelling", "content": "b-a-s-i-c and h-o-t-e-l"}]
    },
    {
      "title": "Phonics Hunt: The Growing Baby",
      "text": "A baby chick hatches from a warm brown egg.\nIn the word 'baby', 'b' is between 'a' and 'y'.\nThe letter 'y' acts as a vowel in this pattern.\nIt makes the first vowel 'a' say its long name.\nWe spell the word as b - a - b - y.\nThe baby chick grows rapidly by eating seeds.\nSay 'baby' to hear the long vowel sound.\nIt is a wonderful VCV word in our lesson!",
      "examples": [{"title": "Spelling", "content": "b - a - b - y"}]
    },
    {
      "title": "Grammar: Giving Directions (Imperatives)",
      "text": "Imperative sentences give commands or make requests.\nThey tell someone what action they should perform.\nWe use them to give instructions in simple activities.\nE.g., 'Put the seed in the loam soil.'\nImperatives are very important in scientific procedures.\nThey tell us how to use tools and materials.\nLet's learn how to construct imperative sentences.\nThey help us guide actions in the classroom!",
      "examples": [{"title": "Key Concept", "content": "Imperative = Command or Request"}]
    },
    {
      "title": "Polite Requests vs Commands",
      "text": "An imperative sentence can be a command or request.\nA command is direct: 'Listen to the sound.'\nTo make it a polite request, we add 'please'.\nE.g., 'Please write your name on the paper.'\nUsing 'please' shows respect and good manners.\nBoth types tell the listener to perform an action.\nLet's practice changing commands into polite requests.\nIt makes our classroom communication very friendly!",
      "examples": [{"title": "Request", "content": "Please stand up."}, {"title": "Command", "content": "Stand up."}]
    },
    {
      "title": "Punctuation in Imperatives",
      "text": "Imperative sentences start with a capital letter.\nThey usually end with a period punctuation mark.\nE.g., 'Please open the lab window.'\nIf the command is very urgent, it ends with '!'.\nE.g., 'Stop!' or 'Be careful with the glass!'\nThe exclamation mark shows strong feeling or warning.\nAlways choose the correct ending mark for your steps.\nIt tells the reader how to react to your words!",
      "examples": [{"title": "Punctuation", "content": "Period (.) or Exclamation mark (!)"}]
    },
    {
      "title": "Story Time: The Seed Experiment",
      "text": "Let's read a short story about Matteo's science task:\n'Matteo places a seed in dry soil.\nHe does not water it for many days.\nThe seed does not grow or sprout roots.\nThen, Matteo waters the seed and puts it in the sun. \nSoon, a green shoot appears above the loam soil!'\nThis story shows how actions lead to results.\nLet's learn about cause and effect relationships next!",
      "examples": [{"title": "Reading Task", "content": "Observe the cause and effect relationships in this experiment!"}]
    },
    {
      "title": "Cause and Effect: What is It?",
      "text": "Cause and effect tells us why things happen. \nThe cause is the action that triggers an event.\nIt answers the question: 'Why did this happen?'\nThe effect is the result of that trigger action.\nIt answers the question: 'What happened as a result?'\nUnderstanding cause and effect is essential in science.\nIt helps us explain natural events we observe daily.\nLet's find the cause and effect in Matteo's task!",
      "examples": [{"title": "Trigger & Result", "content": "Cause = Trigger, Effect = Result"}]
    },
    {
      "title": "Cause and Effect: Dry Soil",
      "text": "Why did the seed not grow at the beginning?\nThe cause was that Matteo left the soil dry.\nThe effect was that the seed did not sprout.\nWithout water, the seed cannot begin its growth cycle.\nThis is a clear cause and effect relationship.\nThe cause (no water) led to the effect (no growth).\nIn your journal, write down this simple connection.\nIt explains the science behind Matteo's observation!",
      "examples": [{"title": "Cause", "content": "no water"}, {"title": "Effect", "content": "no growth"}]
    },
    {
      "title": "Cause and Effect: Sunlight and Water",
      "text": "What happened when Matteo watered the seed?\nThe cause was that Matteo added water and sunlight.\nThe effect was that a green shoot appeared.\nThe water and sun triggered the seed to grow.\nThis shows how positive actions have positive results.\nThe cause (water & sun) led to the effect (growth).\nAlways look for the trigger and the result.\nCan you identify a cause and effect in your garden?",
      "examples": [{"title": "Cause", "content": "watering & sunlight"}, {"title": "Effect", "content": "green shoot appeared"}]
    },
    {
      "title": "Vocabulary: Finding Root Words",
      "text": "A root word is the base of a word.\nIt is the word before we add extra endings.\nThese endings are suffixes like -ing, -er, or -ed.\nE.g., the word 'playing' has the root 'play'.\nThe word 'walked' has the root 'walk'.\nIdentifying root words helps us read longer words.\nIt also helps us find the core meaning easily.\nLet's practice finding root words in our list!",
      "examples": [{"title": "Base Word", "content": "playing -> root: play"}]
    },
    {
      "title": "Root Words in Action",
      "text": "Let's look at some words from our science stories.\nIn 'grower', the root word is 'grow'.\nIn 'opening', the root word is 'open'.\nIn 'spiders', the root word is 'spider'.\nIn 'silently', the root word is 'silent'.\nNotice how the base meaning remains the same.\nThe extra letters just change how we use it.\nCan you find the root word of 'music'? It is music!",
      "examples": [{"title": "Suffixes", "content": "Words often end in suffixes like -ing, -er, -ly, -s."}]
    },
    {
      "title": "Science Connection: Insect Observations",
      "text": "When we study spiders, we observe their webs.\nA spider spins a web to catch flying insects.\nSpiders are not insects; they are arachnids.\nThey have eight legs and two main body parts.\nThe question 'Why does it spin a web?' is interrogative.\nThe answer is a cause and effect statement:\n'It spins a web to catch its food.'\nObserve a web closely next time you are outside!",
      "examples": [{"title": "Observation", "content": "A spider building a circular web."}]
    },
    {
      "title": "Guided Practice: Spotting VCV",
      "text": "Let's play a game to spot VCV words.\nRead this: 'The striped tiger walks slowly.'\nWhich word follows the VCV spelling pattern?\nYes, the word is 'tiger'! It has 'g' between 'i' and 'e'.\nThe first vowel 'i' has a long sound.\nSpelling 'tiger' correctly requires the letters t-i-g-e-r.\nCan you write another VCV word on your paper?\nTry writing 'paper' or 'music' now!",
      "examples": [{"title": "Check", "content": "t - i - g - e - r has one consonant 'g' between vowels 'i' and 'e'."}]
    },
    {
      "title": "Guided Practice: Command or Request?",
      "text": "Let's practice identifying imperative sentences.\nLook at: 'Please pass the clean paper.'\nIs this a command or a polite request?\nIt starts with 'Please', so it is a request!\nIf it were: 'Pass the clean paper.', it is a command.\nBoth sentences tell someone to do an action.\nBut the request is much more polite to use.\nAlways use polite requests with your friends!",
      "examples": [{"title": "Check", "content": "Polite request because of 'Please'."}]
    },
    {
      "title": "Guided Practice: Punctuation",
      "text": "Let's check the rules for imperative punctuation.\nWhich sentence is punctuated correctly today?\n'A. stand next to the big tiger' or\n'B. Stand next to the big tiger.'\nB is correct because it has a capital letter!\nIt also has a period at the end of 'tiger'.\nAlways check your capital letters and periods.\nThey make your instructions clear and easy to read!",
      "examples": [{"title": "Corrected", "content": "'Stand in line.'"}]
    },
    {
      "title": "Common Error: Forgetting the Cause",
      "text": "A common mistake is reversing cause and effect.\nDo not say: 'The plant growth caused the watering.'\n(That does not make sense in science or logic!).\nInstead, say: 'The watering caused the plant growth.'\nThe cause must always be the reason or trigger.\nThe effect must always be the result or outcome.\nKeep the correct order in your mind when writing.\nIt helps you explain science observations clearly!",
      "examples": [{"title": "Incorrect order", "content": "Saying: 'Growth caused watering' (Incorrect)."}, {"title": "Correct order", "content": "'Watering caused growth' (Correct)."}]
    },
    {
      "title": "Summary of Week 3",
      "text": "Congratulations! You completed all the slides for Week 3.\nLet's review the main language tools we mastered.\nWe learned to decode VCV words like tiger, spider, and paper.\nWe learned to write imperative commands and requests.\nWe learned to use correct capitalization and punctuation.\nWe learned to identify cause and effect in experiments.\nWe connected our English lessons to botanical observations.\nYou are now ready to take the quiz and challenges!",
      "examples": [{"title": "Vocabulary", "content": "baby, tiger, spider, hotel, tulip, open, silent, basic, paper, music"}]
    }
  ],
  "standard": [
    {"type": "choice", "q": "Which word has a VCV spelling pattern and a long vowel sound?", "options": ["tiger", "tent", "frog", "sand"], "answer": 0},
    {"type": "choice", "q": "Identify the VCV word in this sentence: 'The tulip is opening.'", "options": ["tulip", "is", "The", "None"], "answer": 0},
    {"type": "choice", "q": "Complete the VCV word: 'Keep your science notebook on white pa___.'", "options": ["per", "nt", "mp", "ck"], "answer": 0},
    {"type": "choice", "q": "Which of these words has the VCV pattern?", "options": ["silent", "plug", "hand", "drum"], "answer": 0},
    {"type": "choice", "q": "Which VCV word represents a large cat with stripes?", "options": ["tiger", "spider", "baby", "tulip"], "answer": 0},
    {"type": "choice", "q": "Which of these is an imperative sentence giving a command?", "options": ["Stand in line.", "What is that?", "The line is long.", "What a beautiful line!"], "answer": 0},
    {"type": "choice", "q": "How do you make the command 'Pass the paper' a polite request?", "options": ["Add 'Please' at the beginning.", "Put a question mark at the end.", "Use capital letters for all words.", "Change the action word."], "answer": 0},
    {"type": "choice", "q": "Identify the imperative sentence:", "options": ["Clean your science tools.", "Are the tools clean?", "These are science tools.", "Wow, clean tools!"], "answer": 0},
    {"type": "choice", "q": "Which sentence is a polite request?", "options": ["Please open the window.", "Open the window.", "Is the window open?", "The window is open."], "answer": 0},
    {"type": "choice", "q": "Complete the command: '___ closely to the bird calls.'", "options": ["Listen", "Listening", "Listened", "Listens"], "answer": 0},
    {"type": "choice", "q": "Which of these imperative sentences is punctuated correctly?", "options": ["Write your name on the paper.", "write your name on the paper", "Write your name on the paper?", "write your name on the paper."], "answer": 0},
    {"type": "verify", "q": "True or False: If a command is very urgent or shows an emergency, it can end with an exclamation mark (!).", "options": ["True", "False"], "answer": 0},
    {"type": "choice", "q": "Identify the correctly punctuated request:", "options": ["Please stay quiet.", "please stay quiet?", "Please stay quiet?", "please stay quiet."], "answer": 0},
    {"type": "choice", "q": "Which punctuation is missing in: 'Put the spider in the jar'", "options": ["A period (.)", "A question mark (?)", "A comma (,)", "An apostrophe (')"], "answer": 0},
    {"type": "verify", "q": "True or False: Imperative sentences always start with a capital letter.", "options": ["True", "False"], "answer": 0},
    {"type": "choice", "q": "Read: 'The sun was very hot, so the small puddle of water evaporated.' What is the cause?", "options": ["The sun was very hot", "The puddle evaporated", "The water was dirty", "The wind blew hard"], "answer": 0},
    {"type": "choice", "q": "Read: 'Matteo forgot to water the plant, so its leaves turned yellow.' What is the effect?", "options": ["The leaves turned yellow", "Matteo forgot to water it", "The plant was inside", "The sun was bright"], "answer": 0},
    {"type": "choice", "q": "In cause and effect, which word represents the trigger or reason?", "options": ["Cause", "Effect", "Result", "Punctuation"], "answer": 0},
    {"type": "choice", "q": "Read: 'The spider spun a sticky web, catching a tiny fly.' What caused the fly to be caught?", "options": ["The sticky web", "The wind blowing", "The spider sleeping", "The fly singing"], "answer": 0},
    {"type": "choice", "q": "Read: 'A heavy rain fell, causing the river to rise.' What is the effect?", "options": ["The river rose", "The heavy rain fell", "The sun came out", "The fish swam away"], "answer": 0},
    {"type": "choice", "q": "What is the root word of 'playing'?", "options": ["play", "ing", "lay", "pla"], "answer": 0},
    {"type": "choice", "q": "Identify the root word in 'grower':", "options": ["grow", "er", "row", "gro"], "answer": 0},
    {"type": "choice", "q": "What is the root word of the word 'silently'?", "options": ["silent", "silence", "ly", "ent"], "answer": 0},
    {"type": "choice", "q": "Identify the root word of 'spiders':", "options": ["spider", "s", "spin", "ride"], "answer": 0},
    {"type": "choice", "q": "What is the root word of 'walked'?", "options": ["walk", "ed", "alk", "wal"], "answer": 0}
  ],
  "challenge": [
    {"type": "choice", "q": "Challenge: Which sentence shows an imperative request containing a VCV word?", "options": ["Please pass the clean paper.", "Stand next to the big tiger.", "Why is the spider crawling?", "The tulip grows in the garden."], "answer": 0},
    {"type": "choice", "q": "Challenge: Read: 'The sky darkened and lightning flashed. Suddenly, the streetlights turned on.' What caused the streetlights to turn on?", "options": ["The sky darkening", "The streetlights breaking", "People turning them on manually", "The wind blowing"], "answer": 0},
    {"type": "choice", "q": "Challenge: Find the root word of 'unhappiness':", "options": ["happy", "ness", "unhappy", "un"], "answer": 0},
    {"type": "choice", "q": "Challenge: Which VCV word represents a place where travelers stay during a science field trip?", "options": ["hotel", "tulip", "baby", "tiger"], "answer": 0},
    {"type": "choice", "q": "Challenge: What is the cause in: 'A cat sneezed because the dust tickled its nose'?", "options": ["The dust tickling its nose", "The cat sneezing", "The cat running away", "The dust settling"], "answer": 0}
  ],
  "performance": {
    "type": "performance",
    "title": "Seed Experiment Lab Instructions",
    "desc": "Imagine you are directing a science experiment on seed growth. Write a list of three step-by-step instructions. Two steps must be direct commands (e.g. 'Put loam soil in the pot.') and one must be a polite request using 'please'. Make sure all sentences are correctly capitalized and punctuated. Underline the VCV words you used (like paper, open, basic).",
    "labels": ["Correct listing of laboratory steps in order", "Correct use of capital letters and ending periods in all steps", "Correct inclusion of one polite request and underlined VCV words"]
  },
  "worksheet": {
    "pages": [
      """<div class="ws-page-content">
                  <h3>Exercise 1: VCV Long Vowels</h3>
                  <p class="ws-instruction">Write the correct VCV word matching the description using your stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Material we write or print observations on: <strong>pa__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">paper</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. A eight-legged arachnid that spins web: <strong>sp__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">spider</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Not making any sound; quiet: <strong>si__</strong></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">silent</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 2: Instructions in the Lab</h3>
                  <p class="ws-instruction">Identify whether each sentence is a <strong>Command</strong> or a <strong>Polite Request</strong>.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Please open the lab window.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Polite Request</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Pour 50 milliliters of water into the soil.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Command</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Please write the root word of 'grower'.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Polite Request</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 3: Cause and Effect Connections</h3>
                  <p class="ws-instruction">Draw a line using your stylus to match the Cause with its correct Effect.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.2;">
                      <div><strong>Causes:</strong></div>
                      <div>1. The sun shines on wet clothes.</div>
                      <div>2. Matteo puts the seed in dry soil.</div>
                      <div>3. A spider spins a sticky web.</div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.2; text-align: right; padding-right: 40px;">
                      <div><strong>Effects:</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; A. Flies are caught.</div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; B. The clothes dry.</div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; C. The seed does not grow.</div>
                    </div>
                  </div>
                </div>"""
    ]
  }
}

WEEK4_DATA_ENG = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 4: Describing Physical Properties & Sentence Review",
  "slides": [
    {
      "title": "Welcome to the Review Expedition!",
      "text": "Hello, Explorer! Welcome to English Week 4!\nThis week, we are going on a review expedition.\nWe will review our three spelling patterns: CVCC, CCVC, and VCV.\nWe will learn about adjectives and how they describe things.\nWe will review declarative, interrogative, and imperative sentences.\nWe will make logical predictions based on clues in nature.\nLet's keep our notebooks ready to write down answers.\nAre you ready to show what you have learned?",
      "examples": [{"title": "Weekly Goal", "content": "Master spelling patterns review, apply adjectives to physical properties, review sentence types, and make predictions."}]
    },
    {
      "title": "Word Pattern Review",
      "text": "We have learned three important word patterns this term.\nCVCC words end in two consonant letters (like hand).\nCCVC words start with two consonant letters (like frog).\nVCV words have a consonant between two vowels (like baby).\nBeing able to spell them helps us read quickly.\nIt also helps us write science observations accurately.\nLet's practice spelling these patterns on our paper.\nThey are the building blocks of our language safari!",
      "examples": [{"title": "Review Patterns", "content": "CVCC (consonant blends), CCVC (initial blends), VCV (long vowels)."}]
    },
    {
      "title": "CVCC Practice: The Wet Pond",
      "text": "Let's walk near the wet pond in the park.\nWe see a green lamp lighting up the path.\nCan you spot the CVCC words in our sentences?\nYes, the words are 'pond' and 'lamp'!\nBoth words end with a blend of two consonants.\nWe spell them correctly as p-o-n-d and l-a-m-p.\nListen to the ending sound of both words carefully.\nThey show how CVCC blends are used in nature!",
      "examples": [{"title": "Spelling", "content": "p - o - n - d  and  l - a - m - p"}]
    },
    {
      "title": "CCVC Practice: The Crawling Crab",
      "text": "We spot a small crab crawling on the beach.\nIt does not stop when it sees us watching.\nCan you spot the CCVC words in our sentences?\nYes, the words are 'crab' and 'stop'!\nBoth words start with a blend of two consonants.\nWe spell them correctly as c-r-a-b and s-t-o-p.\nListen to the beginning sound of both words carefully.\nThey show how CCVC blends are used in nature!",
      "examples": [{"title": "Spelling", "content": "c - r - a - b  and  s - t - o - p"}]
    },
    {
      "title": "VCV Practice: The Busy Spider",
      "text": "We watch a busy spider spin a web on a tulip.\nIt sits on the paper leaf in the warm sun.\nCan you spot the VCV words in our sentences?\nYes, the words are 'spider', 'tulip', and 'paper'!\nThey have a single consonant between two vowels.\nWe spell them correctly as s-p-i-d-e-r and t-u-l-i-p.\nListen to the long vowel sounds in these words.\nThey show how VCV patterns are used in nature!",
      "examples": [{"title": "Spelling", "content": "s-p-i-d-e-r and t-u-l-i-p"}]
    },
    {
      "title": "Grammar: Describing Words (Adjectives)",
      "text": "Adjectives are words that describe nouns in a sentence.\nThey tell us about size, color, shape, or texture.\nThey also tell us how things feel, taste, or look.\nUsing adjectives makes our descriptions very clear and interesting.\nE.g., 'The green leaf' or 'The small frog'.\nThe words 'green' and 'small' are adjectives.\nThey help us paint a picture in the reader's mind.\nLet's find adjectives in the sentences we read today!",
      "examples": [{"title": "Key Concept", "content": "Adjective = Describing word"}]
    },
    {
      "title": "Describing Physical Properties",
      "text": "In science, we use adjectives to describe solid materials.\nWe observe physical properties using our five sense organs.\n'The hard rock does not bend or break.'\n'The shiny metal nail reflects the sun light.'\n'The sticky clay can be molded into shapes.'\nThe adjectives are hard, shiny, and sticky.\nThey describe the physical properties of each material.\nWrite these describing words in your science log today!",
      "examples": [{"title": "Properties", "content": "hard rock, sticky clay, shiny metal, soft cotton"}]
    },
    {
      "title": "Adjectives of Size and Number",
      "text": "Adjectives can also tell us about size and number.\nThey help us count and measure objects we observe.\n'Matteo found ten small seeds in the garden.'\n'We saw three large carabaos near the river.'\nThe adjectives are ten, small, three, and large.\nThey tell us the quantity and size of the nouns.\nUsing these adjectives helps us record accurate science data.\nHow many describing words can you find in your room?",
      "examples": [{"title": "Size", "content": "small"}, {"title": "Number", "content": "ten"}]
    },
    {
      "title": "Sentence Review: Declarative",
      "text": "Let's review the three types of sentences we learned.\nA declarative sentence tells a fact or makes a statement.\nE.g., 'The sun warms the loam soil in spring.'\nIt always starts with a capital letter in writing.\nIt always ends with a period punctuation mark.\nIt has a subject (who) and a predicate (action).\nMost sentences in our science logs are declarative.\nLet's practice writing a declarative sentence about nature!",
      "examples": [{"title": "Example", "content": "Plants need water to grow."}]
    },
    {
      "title": "Sentence Review: Interrogative",
      "text": "An interrogative sentence asks a question to gather facts.\nE.g., 'Does the plant bend towards the sunny window?'\nIt always starts with a capital letter in writing.\nIt always ends with a question mark (?) in writing.\nScientists use interrogative sentences to start experiments.\nThey ask questions about why things change in nature.\nAlways check the question mark at the end of questions.\nIt is the key punctuation for interrogative sentences!",
      "examples": [{"title": "Example", "content": "Why is the soil wet?"}]
    },
    {
      "title": "Sentence Review: Imperative",
      "text": "An imperative sentence gives a command or makes a request.\nE.g., 'Please record the temperature in your log.'\nIt always starts with a capital letter in writing.\nIt usually ends with a period punctuation mark.\nIf it is a polite request, it contains 'please'.\nWe use imperatives to write steps for an experiment.\nThey tell the reader what action they must perform.\nLet's write a polite request to clean our tools!",
      "examples": [{"title": "Example", "content": "Observe the frog carefully."}]
    },
    {
      "title": "Story Time: The Gathering Clouds",
      "text": "Let's read a short story to make a prediction:\n'Matteo walks in the green garden after lunch.\nThe blue sky suddenly turns dark grey with clouds.\nStrong winds begin to blow the leaves of trees.\nLarge drops of water fall from the heavy clouds.'\nThis story has clues about what will happen next.\nLet's learn how to make a logical prediction.\nIt is a very important skill for language and science!",
      "examples": [{"title": "Reading Task", "content": "Gather clues to make a prediction about what happens next!"}]
    },
    {
      "title": "Predicting Endings: What is It?",
      "text": "Predicting means making a guess about what happens next.\nIt is not a wild guess; it must be logical.\nWe use clues from the story to guide us.\nWe also use our own experiences in daily life.\nClues + Experience = A good and logical prediction.\nIt helps us anticipate outcomes and explain natural cycles.\nLet's look at the clues in Matteo's garden story.\nWhat will happen next in the garden?",
      "examples": [{"title": "Inquiry", "content": "Clues + Experience = Logical Prediction"}]
    },
    {
      "title": "Clues in the Sky",
      "text": "What are the clues in Matteo's garden story?\nThe sky is dark grey with heavy rain clouds.\nStrong winds are blowing the leaves of trees.\nDrops of water are beginning to fall from above.\nBased on these clues, we predict it will rain.\nThis prediction is logical and matches the evidence.\nPredicting a hot sunny day would not make sense.\nAlways look for evidence before you make a prediction!",
      "examples": [{"title": "Prediction", "content": "It will rain soon."}]
    },
    {
      "title": "Logic and Evidence",
      "text": "Good predictions must always match the physical facts.\nIn science, we call this predicting based on evidence.\nIf you drop a heavy metal ball into water,\nwill it float on top or sink to the bottom?\nBased on evidence, you predict it will sink.\nIf you leave an iron nail outside in the rain,\nyou predict it will rust and turn orange-brown.\nBoth predictions are logical because they use physical facts!",
      "examples": [{"title": "Evidence", "content": "Dark clouds usually bring rain, not sunshine."}]
    },
    {
      "title": "Vocabulary: Synonyms",
      "text": "Synonyms are words that have the same meaning.\nThey help us express ideas in different ways.\nUsing synonyms makes our writing rich and interesting.\nE.g., the words 'large' and 'big' are synonyms.\nThe words 'quiet' and 'silent' are also synonyms.\nBoth words describe the same state or size in text.\nLet's find synonyms in the sentences we read today. \nThey help us build a strong vocabulary for writing!",
      "examples": [{"title": "Synonyms", "content": "large/big, small/tiny, hot/warm"}]
    },
    {
      "title": "Synonyms in Nature",
      "text": "Let's look at some synonyms we use in science.\n'Small' and 'tiny' (used to describe garden insects).\n'Warm' and 'hot' (used to describe solar heat).\n'Wet' and 'damp' (used to describe fertile soil).\n'Quick' and 'fast' (used to describe animal movement).\nNotice how both words mean almost the same thing.\nThey help us give detailed descriptions of physical objects.\nCan you find a synonym for 'desk'? It is table!",
      "examples": [{"title": "Soil", "content": "The damp soil is wet."}]
    },
    {
      "title": "Vocabulary: Antonyms",
      "text": "Antonyms are words that have opposite meanings in text.\nThey help us compare different physical properties of things.\nE.g., the words 'hot' and 'cold' are antonyms.\nThe words 'rough' and 'smooth' are also antonyms.\nBoth words describe opposite states of temperature or texture.\nUsing antonyms helps us contrast different solid materials.\nLet's find antonyms in the sentences we read today.\nThey are essential for comparing physical details!",
      "examples": [{"title": "Antonyms", "content": "hot/cold, rough/smooth, hard/soft"}]
    },
    {
      "title": "Antonyms in Materials",
      "text": "Let's compare solid materials using antonyms in our logs.\nA diamond is hard, but a cotton ball is soft.\nA glass mirror is shiny, but a charcoal block is dull.\nThe words 'hard' and 'soft' are antonyms.\nThe words 'shiny' and 'dull' are antonyms too.\nThey show how different materials have opposite properties.\nThese contrasts help us classify objects in science lessons.\nCan you name an antonym for 'wet'? Yes, it is dry!",
      "examples": [{"title": "Comparison", "content": "Metal is shiny, but wood is dull."}]
    },
    {
      "title": "Science Connection: Weather Predictions",
      "text": "Meteorologists are scientists who predict the weather daily.\nThey use tools like thermometers to measure air heat.\nThey observe cloud patterns and wind direction in the sky.\nThen, they make predictions about rain or sunshine.\nTheir predictions help us decide if we need an umbrella.\nThey use logic and evidence to keep our community safe.\nWe can practice being weather scientists in our writing too.\nLet's write a weather prediction in our journal today!",
      "examples": [{"title": "Observation", "content": "Using a thermometer to measure heat."}]
    },
    {
      "title": "Guided Practice: Spotting Adjectives",
      "text": "Let's play a game to spot describing words.\nRead: 'The shiny metal nail is wet with rain.'\nWhich words describe the physical properties of the nail?\nYes, the adjectives are 'shiny' and 'wet'!\nThey tell us how the nail looks and feels.\nThe other words are nouns, articles, or verbs.\nAlways look for words that describe the noun's state.\nWhat adjective describes a rock that does not bend?",
      "examples": [{"title": "Adjectives", "content": "shiny (property of nail), wet (state of nail)"}]
    },
    {
      "title": "Guided Practice: Sentence Type",
      "text": "Let's practice identifying different types of sentences.\nRead this: 'Do plants need soil to grow?'\nWhat type of sentence is this in grammar?\nIt ends with a question mark, so it is interrogative!\nIf it were: 'Plants need soil to grow.', it is declarative.\nIf it were: 'Please put soil in the pot.', it is imperative.\nChecking the punctuation mark is the easiest clue of all.\nWhat type of sentence ends with a question mark?",
      "examples": [{"title": "Check", "content": "Interrogative because it asks a question."}]
    },
    {
      "title": "Guided Practice: Synonyms",
      "text": "Let's practice finding synonyms in our vocabulary list.\nWhat is a synonym for the word 'silent'?\nA. loud, B. quiet, C. red, D. hard?\nYes, the correct answer is B! Silent means quiet.\nBoth words describe a state of no sound vibrations.\nUsing synonyms makes your sentences sound very natural.\nCan you find a synonym for 'quick' in your mind?\nYes, the synonym is 'fast'! Great job!",
      "examples": [{"title": "Synonym Check", "content": "silent = quiet"}]
    },
    {
      "title": "Common Error: Describing Opinions",
      "text": "A common mistake is using opinion adjectives in science.\nDo not write: 'This is a beautiful green leaf.'\n'Beautiful' is a personal opinion, not a scientific fact.\nInstead, write: 'This is a green leaf with five points.'\n'Green' and 'five points' are factual observations using senses.\nFactual adjectives can be measured and tested by anyone.\nAlways use factual describing words in your science logs.\nThey keep your descriptions objective and scientifically accurate!",
      "examples": [{"title": "Opinion (Avoid)", "content": "This is a pretty flower."}, {"title": "Fact (Prefer)", "content": "This is a yellow flower."}]
    },
    {
      "title": "Summary of Week 4",
      "text": "Congratulations! You completed all the slides for Week 4.\nLet's review the main language tools we mastered.\nWe reviewed CVCC, CCVC, and VCV word spelling patterns.\nWe learned to use adjectives to describe solid properties.\nWe reviewed declarative, interrogative, and imperative sentences.\nWe learned to make logical predictions based on clues.\nWe learned to compare words using synonyms and antonyms.\nYou are now ready to take the quiz and challenges!",
      "examples": [{"title": "Review list", "content": "Spelling, Adjectives, Sentence types, Synonyms/Antonyms."}]
    }
  ],
  "standard": [
    {"type": "choice", "q": "Which of these is a CVCC word?", "options": ["desk", "frog", "baby", "tiger"], "answer": 0},
    {"type": "choice", "q": "Which of these is a CCVC word?", "options": ["crab", "hand", "paper", "milk"], "answer": 0},
    {"type": "choice", "q": "Which of these is a VCV word?", "options": ["tulip", "tent", "stop", "lamp"], "answer": 0},
    {"type": "choice", "q": "Identify the CVCC word in: 'The child drank fresh milk.'", "options": ["milk", "drank", "fresh", "child"], "answer": 0},
    {"type": "choice", "q": "Complete the CCVC word: 'We saw a green f___ jump into the water.'", "options": ["rog", "ond", "ish", "ree"], "answer": 0},
    {"type": "choice", "q": "Which describing word (adjective) tells us how a hard rock feels?", "options": ["hard", "shiny", "sticky", "sweet"], "answer": 0},
    {"type": "choice", "q": "Identify the adjective in: 'Matteo molded sticky clay into a vase.'", "options": ["sticky", "molded", "clay", "vase"], "answer": 0},
    {"type": "choice", "q": "Complete: 'A ___ mirror reflects the bright sunlight.'", "options": ["shiny", "soft", "hard", "sticky"], "answer": 0},
    {"type": "choice", "q": "Which adjective describes a property of a soft cotton ball?", "options": ["soft", "hard", "shiny", "rough"], "answer": 0},
    {"type": "choice", "q": "Identify the adjective in: 'Ten small seeds grew into flowers.'", "options": ["small", "seeds", "grew", "flowers"], "answer": 0},
    {"type": "choice", "q": "What type of sentence is: 'Water freezes at zero degrees.'", "options": ["Declarative sentence", "Interrogative sentence", "Imperative sentence", "Exclamatory sentence"], "answer": 0},
    {"type": "choice", "q": "What type of sentence is: 'Do not burn the household trash.'", "options": ["Imperative sentence", "Declarative sentence", "Interrogative sentence", "Exclamatory sentence"], "answer": 0},
    {"type": "choice", "q": "What type of sentence is: 'Why do plants need water?'", "options": ["Interrogative sentence", "Declarative sentence", "Imperative sentence", "Exclamatory sentence"], "answer": 0},
    {"type": "choice", "q": "Which sentence is declarative?", "options": ["Iron nails rust in wet air.", "Does iron rust in wet air?", "Please keep the iron nail dry.", "What a rusty nail!"], "answer": 0},
    {"type": "choice", "q": "Which sentence is imperative?", "options": ["Sort the recyclable materials.", "Are these materials recyclable?", "We sort recyclable materials.", "Wow, so many recyclables!"], "answer": 0},
    {"type": "choice", "q": "Read: 'Matteo places a glass of water in the freezer overnight.' What will he find in the morning?", "options": ["The water has frozen into solid ice.", "The water has disappeared.", "The water is boiling hot.", "The water turned green."], "answer": 0},
    {"type": "choice", "q": "Read: 'The dark clouds gather and thunder rumbles. Matteo is playing outside.' What will Matteo likely do next?", "options": ["Run inside to stay dry", "Go to sleep on the grass", "Water his plants in the garden", "Start a campfire outside"], "answer": 0},
    {"type": "choice", "q": "To make a good prediction, what should you use?", "options": ["Clues from the text and your own experience", "Only the pictures in the book", "A random guess", "The title of the story"], "answer": 0},
    {"type": "choice", "q": "Read: 'A heavy metal ball is dropped into a tub of water.' What will happen to the ball?", "options": ["It will sink to the bottom.", "It will float on the top.", "It will dissolve like sugar.", "It will turn into a balloon."], "answer": 0},
    {"type": "choice", "q": "Read: 'You leave a wet iron nail outside in the rain for three weeks.' Predict the change:", "options": ["The nail will rust and turn orange-brown.", "The nail will turn into shiny gold.", "The nail will melt into liquid metal.", "The nail will stay exactly the same."], "answer": 0},
    {"type": "choice", "q": "What is a synonym for the word 'large'?", "options": ["big", "small", "thin", "heavy"], "answer": 0},
    {"type": "choice", "q": "Identify the synonym for 'silent' in: 'The lab was quiet.'", "options": ["quiet", "lab", "was", "silent"], "answer": 0},
    {"type": "choice", "q": "What is the antonym of the word 'rough'?", "options": ["smooth", "hard", "sticky", "dull"], "answer": 0},
    {"type": "choice", "q": "Identify the antonym of 'shiny':", "options": ["dull", "bright", "clean", "hard"], "answer": 0},
    {"type": "choice", "q": "What is a synonym for the word 'fast'?", "options": ["quick", "slow", "heavy", "soft"], "answer": 0}
  ],
  "challenge": [
    {"type": "choice", "q": "Challenge: Which sentence has a VCV word as the subject, an adjective in the predicate, and is a declarative sentence?", "options": ["The tiger is fast.", "Run away from the tiger!", "Is the tiger hungry?", "Please feed the small tiger."], "answer": 0},
    {"type": "choice", "q": "Challenge: A student predicts: 'A dry leaf will sink in water.' Is this a logical prediction?", "options": ["No, because leaves are light and float.", "Yes, because all leaves are made of heavy metal.", "Yes, because water always dissolves leaves.", "No, because the wind will blow the water away."], "answer": 0},
    {"type": "choice", "q": "Challenge: Match the synonyms and antonyms: 'hot' is to 'cold' as 'rough' is to ___.", "options": ["smooth", "hard", "sticky", "shiny"], "answer": 0},
    {"type": "choice", "q": "Challenge: Which word pattern does the antonym of 'hard' follow?", "options": ["CVCC (soft)", "CCVC (flat)", "VCV (easy)", "CVC (firm)"], "answer": 0},
    {"type": "choice", "q": "Challenge: Read: 'Matteo left a bowl of soup on the table. The cat jumped up, smelled the soup, and licked its paws.' Predict the next event:", "options": ["The cat will taste the soup.", "The soup will turn into ice.", "The bowl will fly away.", "The cat will wash the dishes."], "answer": 0}
  ],
  "performance": {
    "type": "performance",
    "title": "Weather Prediction and Material Description Diary",
    "desc": "Observe three different solid materials in your home (e.g., a metal key, a cotton shirt, a plastic ruler). Write a brief descriptive sentence for each, using at least one physical property adjective (shiny, soft, hard, bendable, smooth). Then, look at the sky outside and write one prediction sentence about what the weather will be like tomorrow, stating your evidence.",
    "labels": ["Describing solid properties accurately using adjectives", "Correct declarative structure (proper capitalization and periods)", "Writing a weather prediction based on observed clues (clouds, temperature)"]
  },
  "worksheet": {
    "pages": [
      """<div class="ws-page-content">
                  <h3>Exercise 1: Adjectives and Physical Properties</h3>
                  <p class="ws-instruction">Write the correct physical property adjective (<strong>hard</strong>, <strong>shiny</strong>, <strong>sticky</strong>, <strong>soft</strong>) for each object.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. A clean glass mirror that reflects light:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">shiny</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. A dry river stone that does not bend or break:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">hard</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Modeling clay that sticks to your fingers:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">sticky</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 2: Sentence Types Sort</h3>
                  <p class="ws-instruction">Classify each sentence below as either <strong>Declarative</strong>, <strong>Interrogative</strong>, or <strong>Imperative</strong>.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Why does iron rust in wet air?</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Interrogative</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Please sort the metal cans into the bin.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Imperative</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Wet clothes dry under the hot sun.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Declarative</span></div>
                  </div>
                </div>""",
      """<div class="ws-page-content">
                  <h3>Exercise 3: Synonyms and Antonyms Matching</h3>
                  <p class="ws-instruction">Use your stylus to write the correct synonym or antonym from the options (<strong>big</strong>, <strong>cold</strong>, <strong>smooth</strong>, <strong>quiet</strong>).</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Synonym of <strong>large</strong>:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">big</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Antonym of <strong>hot</strong>:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">cold</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Antonym of <strong>rough</strong>:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">smooth</span></div>
                  </div>
                </div>"""
    ]
  }
}

def clean_advanced_remarks(obj):
    if isinstance(obj, str):
        cleaned = obj
        cleaned = re.sub(r'\s*\[Advanced\]', '', cleaned)
        cleaned = re.sub(r'\s*\(Advanced\)', '', cleaned)
        return cleaned
    elif isinstance(obj, dict):
        return {k: clean_advanced_remarks(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [clean_advanced_remarks(x) for x in obj]
    else:
        return obj

def extract_js_block(text, prefix):
    idx = text.find(prefix)
    if idx == -1:
        return None
    start_pos = idx + len(prefix)
    brace_start = -1
    open_char = None
    for i in range(start_pos, len(text)):
        if text[i] == '{':
            brace_start = i
            open_char = '{'
            break
        elif text[i] == '[':
            brace_start = i
            open_char = '['
            break
    if brace_start == -1:
        return None
        
    bracket_count = 0
    in_string = False
    escape = False
    for i in range(brace_start, len(text)):
        char = text[i]
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if char == '"':
            in_string = not in_string
            continue
        if not in_string:
            if char == open_char:
                bracket_count += 1
            elif (open_char == '{' and char == '}') or (open_char == '[' and char == ']'):
                bracket_count -= 1
                if bracket_count == 0:
                    return text[brace_start:i+1]
    return None

def update_week_files():
    weeks_map = {
        1: WEEK1_DATA_ENG,
        2: WEEK2_DATA_ENG,
        3: WEEK3_DATA_ENG,
        4: WEEK4_DATA_ENG
    }
    
    for w in [1, 2, 3, 4]:
        filepath = f"data/g3/week{w}.js"
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        print(f"Updating English for Grade 3 Week {w}...")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract existing non-English blocks to preserve them
        preserved_blocks = {}
        subjects = ["math", "science", "filipino", "makabansa", "gmrc", "reading", "checklist"]
        for sub in subjects:
            prefix1 = f"window.WEEK{w}_DATA.{sub} ="
            prefix2 = f"window.WEEK{w}_DATA.{sub}="
            block = extract_js_block(content, prefix1) or extract_js_block(content, prefix2)
            if block:
                preserved_blocks[sub] = block
            else:
                print(f"  Warning: Preserved block {sub} not found in Core data of week {w}")
                
        # Also extract advanced blocks to preserve
        preserved_adv_blocks = {}
        adv_subjects = ["math", "science", "filipino", "makabansa", "gmrc"]
        for sub in adv_subjects:
            prefix1 = f"window.WEEK{w}_ADVANCED_DATA.{sub} ="
            prefix2 = f"window.WEEK{w}_ADVANCED_DATA.{sub}="
            block = extract_js_block(content, prefix1) or extract_js_block(content, prefix2)
            if block:
                preserved_adv_blocks[sub] = block
            else:
                print(f"  Warning: Preserved block {sub} not found in Advanced data of week {w}")
                    
        # Generate new English data (clean of Advanced suffixes)
        eng_core_data = clean_advanced_remarks(weeks_map[w])
        eng_adv_data = clean_advanced_remarks(weeks_map[w])
        
        eng_core_json = json.dumps(eng_core_data, indent=2, ensure_ascii=False)
        eng_adv_json = json.dumps(eng_adv_data, indent=2, ensure_ascii=False)
        
        # Write JS content
        js_content = []
        js_content.append(f"window.WEEK{w}_DATA = {{}};")
        
        # Math
        if "math" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.math = {preserved_blocks['math']};")
        # Science
        if "science" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.science = {preserved_blocks['science']};")
            
        # English (Newly generated)
        js_content.append(f"window.WEEK{w}_DATA.english = {eng_core_json};")
        
        # Filipino
        if "filipino" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.filipino = {preserved_blocks['filipino']};")
        # Makabansa
        if "makabansa" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.makabansa = {preserved_blocks['makabansa']};")
        # GMRC
        if "gmrc" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.gmrc = {preserved_blocks['gmrc']};")
        # Reading
        if "reading" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.reading = {preserved_blocks['reading']};")
        # Checklist
        if "checklist" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.checklist = {preserved_blocks['checklist']};")
            
        # Advanced DATA
        js_content.append(f"window.WEEK{w}_ADVANCED_DATA = {{}};")
        if "math" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.math = {preserved_adv_blocks['math']};")
        if "science" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.science = {preserved_adv_blocks['science']};")
            
        # English Advanced (Newly generated)
        js_content.append(f"window.WEEK{w}_ADVANCED_DATA.english = {eng_adv_json};")
        
        if "filipino" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.filipino = {preserved_adv_blocks['filipino']};")
        if "makabansa" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.makabansa = {preserved_adv_blocks['makabansa']};")
        if "gmrc" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.gmrc = {preserved_adv_blocks['gmrc']};")
            
        js_content.append(f"window.WEEK{w}_ADVANCED_DATA.reading = window.WEEK{w}_DATA.reading;")
        
        # Write to file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("\n\n".join(js_content) + "\n")
            
        print(f"[SUCCESS] Updated Grade 3 English for week {w} at {filepath}")

if __name__ == '__main__':
    update_week_files()
