import os
import re
import json

# Define student-facing, SSES-enhanced content for Weeks 1 to 4
# Grade 3 English Term 1 (exactly 25 slides, 25 standard questions, 5 challenges, 3 worksheet pages, 1 performance task per week)

WEEK1_DATA_ENG = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 1: CVCC Words & Demonstrative Pronouns",
  "slides": [
    {"title": "Welcome to the Language Safari!", "text": "Hello, Explorer! This week we are going on a safari in our own neighborhood. We will learn to spot words that end in double consonants, point to cool things around us, and read stories about local adventures.", "examples": [{"title": "Weekly Goal", "content": "Master CVCC words, point to objects using pronouns, and explore story elements!"}]},
    {"title": "Spotting Ending Sounds (CVCC)", "text": "Listen closely: h-a-n-d. Hear how the 'n' and 'd' blend together at the end? These are CVCC words: Consonant-Vowel-Consonant-Consonant. Let's find them!", "examples": [{"title": "Word Pattern", "content": "C = Consonant, V = Vowel, C = Consonant, C = Consonant."}]},
    {"title": "Phonics Hunt: In the Tent", "text": "Let's pitch a green tent! Look at the word 'tent'. It ends with the blend 'nt'. Can you hear it? Let's say 'tent' three times!", "examples": [{"title": "Spelling", "content": "t - e - n - t"}]},
    {"title": "Phonics Hunt: Under the Lamp", "text": "When it gets dark, we turn on the brass lamp. 'Lamp' ends with the blend 'mp'. What does a lamp help us observe at night?", "examples": [{"title": "Spelling", "content": "l - a - m - p"}]},
    {"title": "Phonics Hunt: The Pink Flower", "text": "In the garden, we spot a pink flower. 'Pink' ends with the blend 'nk'. Can you think of other pink things in nature?", "examples": [{"title": "Spelling", "content": "p - i - n - k"}]},
    {"title": "Phonics Hunt: Keeping Active", "text": "We bend our knees when we run. We wear a strong leather belt. 'Bend' and 'belt' have CVCC blends at the end too!", "examples": [{"title": "Spelling", "content": "b - e - n - d  and  b - e - l - t"}]},
    {"title": "Phonics Hunt: In the Wind", "text": "The cold wind blows through the trees. 'Wind' ends in 'nd'. We drink a warm glass of milk. 'Milk' ends in 'lk'. Look how common these blends are!", "examples": [{"title": "Spelling", "content": "w - i - n - d  and  m - i - l - k"}]},
    {"title": "Phonics Hunt: Active Play", "text": "We write at our wooden desk. We go on an insect hunt. 'Desk' ends in 'sk' and 'hunt' ends in 'nt'. Let's spell them on paper!", "examples": [{"title": "Spelling", "content": "d - e - s - k  and  h - u - n - t"}]},
    {"title": "Grammar: Pointing to Things", "text": "When we describe what we see, we point using words. We use 'this' and 'these' for things near us. We use 'that' and 'those' for things far away!", "examples": [{"title": "Focus Pronouns", "content": "This, That, These, Those"}]},
    {"title": "Near Us: This and These", "text": "Look at your hand! You can say: 'This is my hand.' (singular) or 'These are my fingers.' (plural) because they are close to you.", "examples": [{"title": "Near Examples", "content": "This pencil (1 near), These rocks (many near)."}]},
    {"title": "Far From Us: That and Those", "text": "Look out the window! You can say: 'That is a bird on the branch.' (singular) or 'Those are clouds in the sky.' (plural) because they are far away.", "examples": [{"title": "Far Examples", "content": "That star (1 far), Those mountains (many far)."}]},
    {"title": "Sentence Engine: Declarative Sentences", "text": "A telling sentence is like a small train. It makes a statement and ends with a period. It has a Subject (who or what) and a Predicate (what they do).", "examples": [{"title": "Rule", "content": "Always start with a capital letter and end with a period."}]},
    {"title": "Declarative: Spotting the Parts", "text": "In the sentence: 'Matteo rides a calesa.' 'Matteo' is the Subject (who). 'rides a calesa' is the Predicate (what he does).", "examples": [{"title": "Subject", "content": "Matteo"}, {"title": "Predicate", "content": "rides a calesa"}]},
    {"title": "Story Time: The Calesa Ride", "text": "Let's read a short story: 'Matteo sits inside a wooden calesa. The horse walks down the street. Matteo smiles at the colorful houses.'", "examples": [{"title": "Reading Task", "content": "Read the story aloud to practice your spelling words!"}]},
    {"title": "Characters: Who is in the Story?", "text": "The characters are the people or animals in a story. In our calesa story, the characters are Matteo and the horse. Who is your favorite character?", "examples": [{"title": "Key Concept", "content": "Characters = Who"}]},
    {"title": "Setting: Where and When?", "text": "The setting is where and when the story takes place. Matteo's ride is happening on a sunny day in a historic town street.", "examples": [{"title": "Key Concept", "content": "Setting = Where and When"}]},
    {"title": "Plot: What Happens?", "text": "The plot is the sequence of events. First, Matteo gets in. Next, the horse walks. Then, Matteo sees the houses. It's a happy journey!", "examples": [{"title": "Key Concept", "content": "Plot = What happens (First, Next, Then)"}]},
    {"title": "Observing Local Transport", "text": "In our community, we observe unique transport. A calesa is a horse-drawn carriage on land. A banca is a wooden outrigger boat on water.", "examples": [{"title": "Land Transport", "content": "calesa"}, {"title": "Water Transport", "content": "banca"}]},
    {"title": "Nature Connections: The Wet Sand", "text": "At the riverbank, we observe wet sand. Let's combine our words: 'This sand is wet.' (Declarative sentence). 'Sand' is a CVCC word!", "examples": [{"title": "Observation", "content": "Pointing to sand near your feet: 'This is wet sand.'"}]},
    {"title": "Science Connection: The Pink Fish", "text": "In the water, we watch a pink fish swim. 'That is a pink fish.' (Declarative sentence pointing far). 'Pink' is our CVCC focus!", "examples": [{"title": "Observation", "content": "Pointing to fish in the pond: 'That is a pink fish.'"}]},
    {"title": "Guided Practice: Spotting CVCC Words", "text": "Can you spot the CVCC word in: 'The child sat at the wooden desk'? Yes, it is 'desk'!", "examples": [{"title": "Check", "content": "d - e - s - k ends with the consonants s and k."}]},
    {"title": "Guided Practice: Near or Far?", "text": "If you are holding a book, do you say 'This is my book' or 'That is my book'? Since you are holding it, use 'This'!", "examples": [{"title": "Rule of Thumb", "content": "If you can touch it, use 'this' or 'these'."}]},
    {"title": "Guided Practice: Capital and Period", "text": "Look at: 'the banca floats in the river' Is it correct? No! It needs a capital 'T' at the start and a period '.' at the end.", "examples": [{"title": "Corrected", "content": "'The banca floats in the river.'"}]},
    {"title": "Common Error: Mixing Near and Far", "text": "Don't use 'this' for things far away. If the clouds are up in the sky, say 'Those are clouds', not 'These are clouds'!", "examples": [{"title": "Correction", "content": "'Those clouds look soft.'"}]},
    {"title": "Summary of Week 1", "text": "Excellent job, Language Explorer! You learned about CVCC word blends, demonstrative pronouns, and declarative sentences. Now you are ready for the quiz!", "examples": [{"title": "Vocabulary", "content": "hand, tent, pink, lamp, bend, belt, milk, wind, desk, hunt"}]}
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
    {"title": "Welcome to the Animal Kingdom!", "text": "Hello, Explorer! This week we are diving into the world of action. We will learn about words that start with double consonants, action words, and how to ask questions like a scientist!", "examples": [{"title": "Weekly Goal", "content": "Master CCVC words, understand action verbs, ask question sentences, and infer feelings."}]},
    {"title": "Starting Sounds (CCVC)", "text": "CCVC words stand for Consonant-Consonant-Vowel-Consonant. They start with a blend of two consonant sounds, like f-r-o-g. Let's practice saying them together!", "examples": [{"title": "Word Pattern", "content": "C = Consonant, C = Consonant, V = Vowel, C = Consonant."}]},
    {"title": "Phonics Hunt: The Green Frog", "text": "In the wet pond, we observe a green frog. 'Frog' starts with the 'fr' blend. Watch how it leaps from leaf to leaf!", "examples": [{"title": "Spelling", "content": "f - r - o - g"}]},
    {"title": "Phonics Hunt: The Crawling Crab", "text": "On the sandy beach, we spot a small crab crawling sideways. 'Crab' starts with the 'cr' blend. How many legs does a crab have?", "examples": [{"title": "Spelling", "content": "c - r - a - b"}]},
    {"title": "Phonics Hunt: In the Pond", "text": "We watch a small fish swim in the water. We must not block the drain plug. 'Swim' and 'plug' start with CCVC blends!", "examples": [{"title": "Spelling", "content": "s - w - i - m  and  p - l - u - g"}]},
    {"title": "Phonics Hunt: Music and Play", "text": "Hear the beat of the parade drum! Red and blue flags wave in the wind. 'Drum' and 'flag' start with 'dr' and 'fl' blends!", "examples": [{"title": "Spelling", "content": "d - r - u - m  and  f - l - a - g"}]},
    {"title": "Phonics Hunt: Safety First", "text": "We see a stop sign on the road. We must not slip on the wet floor. 'Stop' and 'slip' start with 'st' and 'sl' blends!", "examples": [{"title": "Spelling", "content": "s - t - o - p  and  s - l - i - p"}]},
    {"title": "Phonics Hunt: Flat Leaves", "text": "The leaves of the water lily are flat. Be careful not to fall into a mud trap! 'Flat' and 'trap' start with 'fl' and 'tr' blends!", "examples": [{"title": "Spelling", "content": "f - l - a - t  and  t - r - a - p"}]},
    {"title": "Grammar: Action Words (Verbs)", "text": "Verbs are words that show what people, animals, or things do. They tell us about movement and life. Without verbs, nothing moves!", "examples": [{"title": "Key Concept", "content": "Verb = Action word"}]},
    {"title": "Observing Animals in Action", "text": "Let's watch nature! 'The frog leaps.' 'The bird flies.' 'The fish swims.' The words 'leaps', 'flies', and 'swims' are verbs!", "examples": [{"title": "Action", "content": "leap, fly, swim, crawl, run"}]},
    {"title": "Verbs in Our Daily Life", "text": "We use verbs to talk about what we do: 'Matteo reads a story book.' 'The children play at school.' 'Reads' and 'play' are the verbs.", "examples": [{"title": "Matteo", "content": "reads"}, {"title": "Children", "content": "play"}]},
    {"title": "Sentence Engine: Interrogative Sentences", "text": "An interrogative sentence asks a question to gather information. It starts with a capital letter and ends with a question mark (?).", "examples": [{"title": "Rule", "content": "Always start with a capital letter and end with a question mark."}]},
    {"title": "Question Words", "text": "We start questions with words like Who, What, Where, When, and Why. E.g., 'Where does the crab live?' or 'What does the frog eat?'", "examples": [{"title": "Question Words", "content": "Who, What, Where, When, Why"}]},
    {"title": "Story Time: The Pond Detective", "text": "Let's read: 'Matteo looks closely at the pond. He asks, 'Who is hiding under the leaf?' A green frog leaps out! Matteo laughs and says, 'My frog friend is safe!''", "examples": [{"title": "Reading Task", "content": "Identify the CCVC words and verbs in this story!"}]},
    {"title": "Inferring Feelings: Happy or Scared?", "text": "To infer means to read between the lines. In our story, Matteo laughs when the frog leaps. We can infer that Matteo feels happy and amused!", "examples": [{"title": "Infer", "content": "Matteo laughs -> Matteo is happy."}]},
    {"title": "Inferring Traits: Curious Matteo", "text": "Matteo looks closely at the pond and asks questions. We can infer that Matteo has the character trait of being curious or scientific!", "examples": [{"title": "Infer", "content": "Asks questions -> Matteo is curious."}]},
    {"title": "Grammar: Possessive Pronouns", "text": "Possessive pronouns show who owns something. We use 'my', 'your', 'his', 'her', and 'its' to show belonging. E.g., 'This is my magnifying glass.'", "examples": [{"title": "Ownership", "content": "my book, his net, her drum"}]},
    {"title": "Interrogative vs Possessive", "text": "Interrogative pronouns help ask: 'Whose drum is this?' Possessive pronouns help answer: 'It is her drum.' They work together!", "examples": [{"title": "Interrogative", "content": "Whose"}, {"title": "Possessive", "content": "her"}]},
    {"title": "Science Connection: Animal Habitats", "text": "Where does the crab crawl? It lives in its sandy habitat. The question 'Where does the crab live?' is an interrogative sentence!", "examples": [{"title": "Observation", "content": "A crab crawling in the wet sand."}]},
    {"title": "Science Connection: Water Safety", "text": "Why must we keep the drain plug clean? It helps the water flow. The verb 'flow' shows the movement of water.", "examples": [{"title": "Action Verb", "content": "flow, drain, clean"}]},
    {"title": "Guided Practice: Spotting CCVC", "text": "Can you find the CCVC word in: 'The child sat on a flat rock'? Yes, it is 'flat'!", "examples": [{"title": "Check", "content": "f - l - a - t starts with the consonants f and l."}]},
    {"title": "Guided Practice: Finding the Verb", "text": "What is the action word in: 'The blue bird flies high in the sky'? The action is 'flies'!", "examples": [{"title": "Verb Check", "content": "flies (action performed by the bird)"}]},
    {"title": "Guided Practice: Question Mark", "text": "Which sentence is correct? 'A. Where is the green frog.' or 'B. Where is the green frog?' Yes, B is correct because it asks a question!", "examples": [{"title": "Corrected", "content": "'Where is the green frog?'"}]},
    {"title": "Common Error: Capitalizing Pronouns", "text": "Remember, possessive pronouns like 'my' or 'her' do not need capital letters unless they start a sentence.", "examples": [{"title": "Incorrect", "content": "'This is My frog.'"}, {"title": "Correct", "content": "'This is my frog.'"}]},
    {"title": "Summary of Week 2", "text": "Fantastic work, Detective! You mastered CCVC words, action verbs, interrogative sentences, and character feelings. Get ready for the weekly quiz!", "examples": [{"title": "Vocabulary", "content": "frog, drum, plug, stop, crab, flag, slip, swim, flat, trap"}]}
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
    {"title": "Welcome to the Lab of Discovery!", "text": "Hello, Researcher! This week we are exploring word patterns with long vowel sounds, learning how to give instructions or make requests, and understanding cause and effect in nature.", "examples": [{"title": "Weekly Goal", "content": "Master VCV words, learn imperative commands/requests, understand cause and effect, and decode root words."}]},
    {"title": "Long Vowel Sounds (VCV)", "text": "VCV stands for Vowel-Consonant-Vowel. In these words, a single consonant sits between two vowels, causing the first vowel to say its long name, like b-a-b-y or t-i-g-e-r.", "examples": [{"title": "Word Pattern", "content": "V = Vowel (long sound), C = Consonant, V = Vowel."}]},
    {"title": "Phonics Hunt: The Striped Tiger", "text": "In the forest, we study the striped tiger. In 'tiger', the consonant 'g' sits between 'i' and 'e', making the 'i' sound long. Say it: t-i-g-e-r!", "examples": [{"title": "Spelling", "content": "t - i - g - e - r"}]},
    {"title": "Phonics Hunt: The Busy Spider", "text": "On the garden wall, a busy spider spins a web. In 'spider', the consonant 'd' sits between 'i' and 'e'. Spiders help control insect pests!", "examples": [{"title": "Spelling", "content": "s - p - i - d - e - r"}]},
    {"title": "Phonics Hunt: Beautiful Flowers", "text": "We observe a colorful tulip opening in the sun. In 'tulip', the consonant 'l' is between 'u' and 'i'. A tulip is a beautiful plant organ.", "examples": [{"title": "Spelling", "content": "t - u - l - i - p"}]},
    {"title": "Phonics Hunt: Making Music", "text": "We listen to soft music in the quiet room. In 'music', the 's' is between 'u' and 'i'. Sound vibrations travel through the air!", "examples": [{"title": "Spelling", "content": "m - u - s - i - c"}]},
    {"title": "Phonics Hunt: Lab Notebooks", "text": "We write observations on white paper. In 'paper', 'p' is between 'a' and 'e'. Always keep your paper neat!", "examples": [{"title": "Spelling", "content": "p - a - p - e - r"}]},
    {"title": "Phonics Hunt: Silent and Open", "text": "We remain silent to observe birds. We keep the window open for fresh air. 'Silent' and 'open' are VCV words!", "examples": [{"title": "Spelling", "content": "s - i - l - e - n - t  and  o - p - e - n"}]},
    {"title": "Phonics Hunt: Basic Tools", "text": "We learn basic skills for experiments. We stay at a hotel during the science camp. 'Basic' and 'hotel' are VCV words!", "examples": [{"title": "Spelling", "content": "b - a - s - i - c  and  h - o - t - e - l"}]},
    {"title": "Phonics Hunt: The Growing Baby", "text": "A baby chick hatches from an egg. In 'baby', 'b' is between 'a' and 'y'. A baby chick grows into a hen!", "examples": [{"title": "Spelling", "content": "b - a - b - y"}]},
    {"title": "Grammar: Giving Directions (Imperatives)", "text": "Imperative sentences give a command, a direct instruction, or make a polite request. They help us guide actions in the lab or classroom.", "examples": [{"title": "Key Concept", "content": "Imperative = Command or Request"}]},
    {"title": "Polite Requests vs Commands", "text": "To make a request polite, we add the word 'please'. E.g., 'Please write your name.' A command is direct: 'Listen to the instructions.'", "examples": [{"title": "Request", "content": "Please stand up."}, {"title": "Command", "content": "Stand up."}]},
    {"title": "Punctuation in Imperatives", "text": "Imperative sentences start with a capital letter and end with a period. If they show a strong command or emergency, they can end with an exclamation mark!", "examples": [{"title": "Punctuation", "content": "Period (.) or Exclamation mark (!)"}]},
    {"title": "Story Time: The Seed Experiment", "text": "Let's read: 'Matteo places a seed in dry soil. He does not water it. The seed does not grow. Then, Matteo waters the seed and puts it in the sun. Soon, a green shoot appears!'", "examples": [{"title": "Reading Task", "content": "Observe the cause and effect relationships in this experiment!"}]},
    {"title": "Cause and Effect: What is It?", "text": "Cause is *why* something happens. Effect is *what* happens. Identifying cause and effect helps scientists understand how things work!", "examples": [{"title": "Trigger & Result", "content": "Cause = Trigger, Effect = Result"}]},
    {"title": "Cause and Effect: Dry Soil", "text": "In our story, why did the seed not grow at first? The cause was *no water*. The effect was *no growth*. Plants need water to survive!", "examples": [{"title": "Cause", "content": "no water"}, {"title": "Effect", "content": "no growth"}]},
    {"title": "Cause and Effect: Sunlight and Water", "text": "What happened when Matteo watered the seed? The cause was *watering and sunlight*. The effect was *a green shoot appeared*!", "examples": [{"title": "Cause", "content": "watering & sunlight"}, {"title": "Effect", "content": "green shoot appeared"}]},
    {"title": "Vocabulary: Finding Root Words", "text": "A root word is the base word before we add extra letters. E.g., 'playing' comes from 'play'. Knowing the root word helps us find the meaning!", "examples": [{"title": "Base Word", "content": "playing -> root: play"}]},
    {"title": "Root Words in Action", "text": "Look at 'grower' (root is 'grow'), 'silent' (root is 'silence'), 'opening' (root is 'open'). Can you spot the root of 'spiders'? It is 'spider'!", "examples": [{"title": "Suffixes", "content": "Words often end in suffixes like -ing, -er, -ly, -s."}]},
    {"title": "Science Connection: Insect Observations", "text": "When we study spiders, we observe their webs. Spiders are not insects; they have eight legs! Always watch them safely.", "examples": [{"title": "Observation", "content": "A spider building a circular web."}]},
    {"title": "Guided Practice: Spotting VCV", "text": "Can you find the VCV word in: 'The striped tiger walks slowly'? Yes, it is 'tiger'!", "examples": [{"title": "Check", "content": "t - i - g - e - r has one consonant 'g' between vowels 'i' and 'e'."}]},
    {"title": "Guided Practice: Command or Request?", "text": "Is 'Please pass the paper' a command or a request? It has 'please', so it is a polite request!", "examples": [{"title": "Check", "content": "Polite request because of 'Please'."}]},
    {"title": "Guided Practice: Punctuation", "text": "Which imperative sentence is punctuated correctly? 'A. stand in line' or 'B. Stand in line.' Yes, B is correct because it starts with a capital and ends with a period!", "examples": [{"title": "Corrected", "content": "'Stand in line.'"}]},
    {"title": "Common Error: Forgetting the Cause", "text": "Do not confuse the cause with the effect. Remember: Cause is the trigger (watering), and Effect is the result (growth).", "examples": [{"title": "Incorrect order", "content": "Saying: 'Growth caused watering' (Incorrect)."}, {"title": "Correct order", "content": "'Watering caused growth' (Correct)."}]},
    {"title": "Summary of Week 3", "text": "Incredible progress, Scientist! You mastered VCV long vowels, imperative sentences, cause and effect, and root words. Let's take the weekly quiz!", "examples": [{"title": "Vocabulary", "content": "baby, tiger, spider, hotel, tulip, open, silent, basic, paper, music"}]}
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
    {"title": "Welcome to the Review Expedition!", "text": "Hello, Explorer! This week we are reviewing our word patterns, learning about describing words, and making logical predictions based on clues in nature!", "examples": [{"title": "Weekly Goal", "content": "Master spelling patterns review, apply adjectives to physical properties, review sentence types, and make predictions."}]},
    {"title": "Word Pattern Review", "text": "Let's review our three spelling patterns: CVCC (hand), CCVC (frog), and VCV (baby). Being able to spell them makes us excellent readers!", "examples": [{"title": "Review Patterns", "content": "CVCC (consonant blends), CCVC (initial blends), VCV (long vowels)."}]},
    {"title": "CVCC Practice: The Wet Pond", "text": "We walk near the wet pond. We see a green lamp. Can you spell the CVCC words? 'Pond' and 'lamp'!", "examples": [{"title": "Spelling", "content": "p - o - n - d  and  l - a - m - p"}]},
    {"title": "CCVC Practice: The Crawling Crab", "text": "We spot a crawling crab. It does not stop. Can you spell the CCVC words? 'Crab' and 'stop'!", "examples": [{"title": "Spelling", "content": "c - r - a - b  and  s - t - o - p"}]},
    {"title": "VCV Practice: The Busy Spider", "text": "We watch a busy spider spin a web on a tulip. Can you spell the VCV words? 'Spider' and 'tulip'!", "examples": [{"title": "Spelling", "content": "s - p - i - d - e - r  and  t - u - l - i - p"}]},
    {"title": "Grammar: Describing Words (Adjectives)", "text": "Adjectives are words that describe nouns (people, places, animals, or things). They tell us about size, color, shape, texture, or feelings.", "examples": [{"title": "Key Concept", "content": "Adjective = Describing word"}]},
    {"title": "Describing Physical Properties", "text": "In science, we use adjectives to describe materials. E.g., 'The rock is hard.' 'The clay is sticky.' 'The metal is shiny.' 'Hard', 'sticky', and 'shiny' are adjectives!", "examples": [{"title": "Properties", "content": "hard rock, sticky clay, shiny metal, soft cotton"}]},
    {"title": "Adjectives of Size and Number", "text": "We can describe size and quantity too: 'A small frog eats ten bugs.' 'Small' describes the size, and 'ten' describes the number.", "examples": [{"title": "Size", "content": "small"}, {"title": "Number", "content": "ten"}]},
    {"title": "Sentence Review: Declarative", "text": "A declarative sentence tells a fact. E.g., 'The sun warms the loam soil.' It starts with a capital and ends with a period.", "examples": [{"title": "Example", "content": "Plants need water to grow."}]},
    {"title": "Sentence Review: Interrogative", "text": "An interrogative sentence asks a question to gather evidence. E.g., 'Does the plant bend towards the light?' It ends with a question mark.", "examples": [{"title": "Example", "content": "Why is the soil wet?"}]},
    {"title": "Sentence Review: Imperative", "text": "An imperative sentence gives an order or request. E.g., 'Please record the temperature.' It ends with a period.", "examples": [{"title": "Example", "content": "Observe the frog carefully."}]},
    {"title": "Story Time: The Gathering Clouds", "text": "Let's read: 'Matteo walks in the garden. The sky turns dark grey. Strong winds blow the leaves. Large water drops begin to fall from the heavy clouds.'", "examples": [{"title": "Reading Task", "content": "Gather clues to make a prediction about what happens next!"}]},
    {"title": "Predicting Endings: What is It?", "text": "Predicting means making a logical guess about what will happen next, using clues from the text and your own experiences.", "examples": [{"title": "Inquiry", "content": "Clues + Experience = Logical Prediction"}]},
    {"title": "Clues in the Sky", "text": "In our story, the sky is grey, the wind is blowing, and drops are falling. What is your prediction? Yes, it is going to rain heavily!", "examples": [{"title": "Prediction", "content": "It will rain soon."}]},
    {"title": "Logic and Evidence", "text": "Good predictions must make sense. If the sky is dark grey, predicting a hot sunny afternoon does not match the evidence!", "examples": [{"title": "Evidence", "content": "Dark clouds usually bring rain, not sunshine."}]},
    {"title": "Vocabulary: Synonyms", "text": "Synonyms are words that have the same or very similar meanings. E.g., 'large' and 'big', 'quiet' and 'silent'. Using synonyms makes our writing interesting!", "examples": [{"title": "Synonyms", "content": "large/big, small/tiny, hot/warm"}]},
    {"title": "Synonyms in Nature", "text": "Let's find synonyms: 'small' and 'tiny' (describing insects), 'warm' and 'hot' (describing the sun), 'wet' and 'damp' (describing the soil).", "examples": [{"title": "Soil", "content": "The damp soil is wet."}]},
    {"title": "Vocabulary: Antonyms", "text": "Antonyms are words with opposite meanings. E.g., 'hot' and 'cold', 'rough' and 'smooth'. They help us compare different physical properties.", "examples": [{"title": "Antonyms", "content": "hot/cold, rough/smooth, hard/soft"}]},
    {"title": "Antonyms in Materials", "text": "Let's compare: A diamond is 'hard', but sponge is 'soft'. A mirror is 'shiny', but charcoal is 'dull'. 'Hard/soft' and 'shiny/dull' are antonyms!", "examples": [{"title": "Comparison", "content": "Metal is shiny, but wood is dull."}]},
    {"title": "Science Connection: Weather Predictions", "text": "Meteorologists are scientists who predict the weather. They observe air temperature, wind speed, and clouds to tell us if we need an umbrella!", "examples": [{"title": "Observation", "content": "Using a thermometer to measure heat."}]},
    {"title": "Guided Practice: Spotting Adjectives", "text": "Find the describing word in: 'The shiny metal nail is wet.' The adjectives are 'shiny' and 'wet'!", "examples": [{"title": "Adjectives", "content": "shiny (property of nail), wet (state of nail)"}]},
    {"title": "Guided Practice: Sentence Type", "text": "What type of sentence is: 'Do plants need soil?' It ends with '?', so it is an interrogative sentence!", "examples": [{"title": "Check", "content": "Interrogative because it asks a question."}]},
    {"title": "Guided Practice: Synonyms", "text": "What is a synonym for 'silent'? Yes, 'quiet'!", "examples": [{"title": "Synonym Check", "content": "silent = quiet"}]},
    {"title": "Common Error: Describing Opinions", "text": "Remember: when scientists describe objects, they prefer factual adjectives like 'rough' or 'red' over opinion adjectives like 'pretty'.", "examples": [{"title": "Opinion (Avoid)", "content": "This is a pretty flower."}, {"title": "Fact (Prefer)", "content": "This is a yellow flower."}]},
    {"title": "Summary of Week 4", "text": "Congratulations, Explorer! You completed the Term 1 review expedition! You are ready to take the quiz and show off your language skills!", "examples": [{"title": "Review list", "content": "Spelling, Adjectives, Sentence types, Synonyms/Antonyms."}]}
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
