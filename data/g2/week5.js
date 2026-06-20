window.WEEK5_DATA = {};

// Placeholders for subjects to prevent routing crashes
const subjects = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'];
const subjectInfo = {
  math: { color: '#3b82f6', icon: '🔢', title: 'Mathematics' },
  science: { color: '#10b981', icon: '🔬', title: 'Science' },
  english: { color: '#8b5cf6', icon: '📖', title: 'English' },
  filipino: { color: '#ec4899', icon: '🗣️', title: 'Filipino' },
  makabansa: { color: '#f59e0b', icon: '🏝️', title: 'Makabansa' },
  gmrc: { color: '#10b981', icon: '🧘‍♂️', title: 'GMRC' }
};

subjects.forEach(sub => {
  window.WEEK5_DATA[sub] = {
    color: subjectInfo[sub].color,
    icon: subjectInfo[sub].icon,
    title: subjectInfo[sub].title,
    subtitle: `Week 5: Advanced Learning in ${subjectInfo[sub].title}`,
    slides: [
      {
        title: `Introduction to ${subjectInfo[sub].title} Week 5`,
        text: `Welcome to the extension module for ${subjectInfo[sub].title} Week 5. This week we will explore advanced topics, applications, and revision worksheets to solidify your understanding.`,
        examples: [
          { title: 'Core Concept', content: 'Review and apply the foundational knowledge you built in Weeks 1, 2, and 3.' }
        ]
      }
    ],
    standard: [
      {
        type: 'choice',
        q: 'Review: Which statement matches the best practice in this subject?',
        options: ['Always review your answers', 'Rushing is best', 'Never ask for help', 'Guess immediately'],
        answer: 0
      }
    ],
    challenge: [
      {
        type: 'choice',
        q: 'Challenge: What is the primary focus of active learning?',
        options: ['Critical thinking & exploration', 'Memorization only', 'Ignoring questions', 'Speed over accuracy'],
        answer: 0
      }
    ],
    performance: {
      type: 'performance',
      title: 'Weekly Interactive Practice',
      desc: 'Discuss the weekly concepts with your parents or classmates. Write a short 3-sentence summary of what you learned in your notebook.',
      labels: ['Understanding of weekly concept', 'Clarity of the 3-sentence summary']
    },
    worksheet: {
      pages: [
        `<div class="ws-page-content">
          <h3>Weekly Review: ${subjectInfo[sub].title}</h3>
          <p class="ws-instruction">Write down the correct answers using your stylus.</p>
          <div class="ws-item-row">
            <div class="ws-q">1. What is the main goal of studying this week's topics? <span class="ws-answer">To build strong learning habits</span></div>
          </div>
        </div>`
      ]
    }
  };
});

window.WEEK5_DATA.checklist = [
  "Review weekly concept definitions",
  "Complete daily reading section",
  "Take weekly subject quizzes"
];

window.WEEK5_DATA.reading = {
  "monday": {
    "type": "Short Story",
    "title": "Aladdin and the Magic Lamp",
    "slides": [
      {
        "title": "Story: Aladdin and the Magic Lamp - Part 1",
        "text": "Once upon a time, in a bustling city in Persia, lived a poor tailor's son named Aladdin. He was a mischievous boy who loved playing in the streets with his friends rather than working. One day, a mysterious magician disguised as his uncle approached Aladdin. He promised to make Aladdin wealthy if Aladdin helped him retrieve a dusty old oil lamp from a magical underground cave. Aladdin, eager for fortune, agreed. The magician led him to the desert, spoke magic words, and opened the earth. He gave Aladdin a protective ring and sent him inside. Aladdin found a cave filled with treasures, trees with jewels, and the old lamp. When Aladdin reached the entrance, the magician demanded the lamp first. Aladdin, suspicious of his uncle's motives, refused to hand it over. In anger, the magician sealed the cave entrance, trapping Aladdin in darkness."
      },
      {
        "title": "Story: Aladdin and the Magic Lamp - Part 2",
        "text": "Trapped underground, Aladdin wept in despair. In his worry, he rubbed his hands together, accidentally rubbing the protective ring given by the magician. Suddenly, a huge Genie emerged from the ring! 'I am the Genie of the Ring. What is your command, master?' Aladdin, shocked but quick-witted, answered, 'Take me home!' Instantly, Aladdin was back in his mother's house, holding the dusty oil lamp. His mother decided to clean the lamp to sell it for food. The moment she rubbed it, a second, even larger Genie appeared! 'I am the Genie of the Lamp. Your wish is my command!' This Genie provided them with delicious feasts on silver plates. Over the next few years, Aladdin used the lamp wisely, helping the poor and building a beautiful palace for his family."
      },
      {
        "title": "Story: Aladdin and the Magic Lamp - Part 3",
        "text": "Aladdin married the Sultan's daughter, princess Halima, and they lived happily. However, the evil magician learned Aladdin was alive and returned to the city. While Aladdin was away hunting, the magician disguised himself as a merchant, shouting, 'New lamps for old!' The princess, not knowing the value of Aladdin's old lamp, traded it for a new one. The magician immediately rubbed the lamp and ordered the Genie to transport Aladdin's palace and the princess to the desert. Aladdin, returning to find his palace gone, used the Genie of the Ring to find them. He slipped into the palace and, with the princess's help, put a sleeping potion in the magician's drink. Aladdin retrieved the lamp, ordered the Genie to return the palace to its original spot, and they lived peacefully, free from the magician's evil plans."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Mischievous - Showing a fondness for causing trouble in a playful way.\n• Suspicious - Having or showing a cautious distrust of someone or something.\n• Potion - A liquid with healing, magical, or poisonous properties.\n\nPhonics Focus: Practice the /sh/ sound in 'Persia', 'mischievous', and 'suspicious'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Why did the magician seal Aladdin inside the treasure cave?\n2. How did Aladdin escape from the dark underground cave?\n3. How did the magician steal the magic lamp from the palace?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Cleverness, resourcefulness, and honesty over greed.\n\nGreed leads to downfall, but using resourcefulness and thinking quickly can help us solve difficult problems. We must protect what we value and not be easily tricked by superficial offers.\n\nDiscuss: What would you wish for if you had a magic lamp to help your community?"
      }
    ]
  },
  "tuesday": {
    "type": "Short Story",
    "title": "Ali Baba and the Forty Thieves",
    "slides": [
      {
        "title": "Story: Ali Baba and the Forty Thieves - Part 1",
        "text": "Once upon a time, in a prosperous town in Persia, lived two brothers: Cassim, who was wealthy, and Ali Baba, who was a poor woodcutter. Ali Baba had to work hard every day cutting wood in the forest to support his family. One day, while cutting wood, Ali Baba saw a huge cloud of dust in the distance. He climbed a tall tree to hide and saw a band of forty thieves on horses. They stopped in front of a massive stone cliff. The leader of the thieves stepped forward and shouted in a loud voice: 'Open, Sesame!' To Ali Baba's amazement, a hidden door in the cliff slid open, and the thieves marched inside. After a while, they came out, and the leader shouted: 'Close, Sesame!' and the stone door shut. After they rode away, Ali Baba climbed down, stood before the cliff, and shouted: 'Open, Sesame!' The door opened, revealing a cave filled with gold, silk, and treasure."
      },
      {
        "title": "Story: Ali Baba and the Forty Thieves - Part 2",
        "text": "Ali Baba took a few bags of gold coins home, which helped his family buy food. However, his wealthy brother Cassim noticed his sudden fortune and forced Ali Baba to reveal the secret of the cave. Cassim went to the cave the next morning with ten donkeys, stood before the cliff, and shouted: 'Open, Sesame!' The door opened, and Cassim filled his sacks with treasure. But in his excitement, Cassim forgot the magic words to leave the cave. 'Open, Barley! Open, Wheat!' he shouted, but the door remained shut. When the thieves returned, they caught Cassim and punished him. When Cassim did not return, Ali Baba went to the cave, found his brother, and brought him back, realizing that the thieves would now search for whoever else knew the secret of their hidden cave."
      },
      {
        "title": "Story: Ali Baba and the Forty Thieves - Part 3",
        "text": "The thieves traced Ali Baba to his house. The leader disguised himself as an oil merchant, bringing thirty-eight large clay jars on donkeys. He claimed to need lodging for the night, but thirty-seven of the jars actually hid a thief inside, ready to attack at midnight. However, Ali Baba's clever maid, Morgiana, discovered the plot while looking for oil. She poured boiling oil into the jars, neutralizing the hidden thieves. When the leader went to wake them, he realized his plan had failed and fled. Later, he returned in another disguise to seek revenge, but Morgiana recognized him during a dinner dance and defeated him. Ali Baba, filled with gratitude, welcomed Morgiana as a daughter. He shared the treasure cave's secret with his family and town, using the wealth to build a prosperous and happy community for generations."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Prosperous - Successful in material terms; flourishing financially.\n• Woodcutter - A person who cuts down trees or branches for wood.\n• Neutralizing - Making something ineffective or harmless.\n\nPhonics Focus: Practice the /s/ sound in 'Sesame', 'secret', and 'stone'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What magic words opened the secret door in the cliff?\n2. Why was Cassim trapped inside the cave after collecting the treasure?\n3. How did Morgiana discover and stop the thieves hiding in the oil jars?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Cleverness, loyalty, and avoiding greed.\n\nGreed can lead us into dangerous situations, but alertness and loyalty (like Morgiana's) can protect our family. We should be grateful to those who help us in times of danger.\n\nDiscuss: Who is someone you know who showed quick thinking in a difficult situation?"
      }
    ]
  },
  "wednesday": {
    "type": "Tongue Twisters",
    "title": "Phonics Fun with B and V",
    "slides": [
      {
        "title": "Tongue Twister Fun: B and V - Part 1",
        "text": "Welcome to our phonics gym! Today we are practicing the /b/ and /v/ sounds, which can sound very similar but require different lip shapes. Meet Bobby the Bear, who loves to blow big blue bubbles. Bobby blows big bubbles. He plays with a bright blue ball. Let's practice saying this slowly: 'Bobby the Bear blows big blue bubbles in his backyard.' For the /b/ sound, press both lips together firmly, then pop them open with air. Let's try saying: 'Big blue bubbles blow. Blue bubbles Bobby blows.' Say it three times to get comfortable with the 'b' sound!"
      },
      {
        "title": "Tongue Twister Fun: B and V - Part 2",
        "text": "Now, let's practice the /v/ sound. Meet Val the Viper, who drives a violet van. Val's violet van drives very fast. Val loves fresh vegetables. Let's practice saying: 'Val the Viper drives a violet van filled with fresh vegetables.' For the /v/ sound, touch your upper teeth gently to your lower lip and blow air out, making a vibrating sound. Practice the difference: 'berry' vs 'very', 'best' vs 'vest', 'boat' vs 'vote'. This is a fantastic way to train your voice!"
      },
      {
        "title": "Tongue Twister Fun: B and V - Part 3",
        "text": "Let's combine /b/ and /v/ for a giant speech challenge! Imagine Bobby the Bear driving Val's van. 'Bobby the Bear bought a violet vest and drove Val's van very fast.' Let's try saying this twister quickly: 'Bobby bought a violet vest. Drove Val's van very fast.' Repeat it three times: slow, medium, and fast! Excellent enunciation practice. This helps you sound clear and confident whenever you read aloud."
      },
      {
        "title": "Speech & Enunciation Practice",
        "text": "Phonics Focus: Contrasting /b/ and /v/\n• /b/ (Bilabial Stop): Pop lips open together (e.g., 'bear', 'bubbles').\n• /v/ (Labiodental Fricative): Upper teeth on lower lip with vibration (e.g., 'van', 'very').\n\nDaily phonics practice keeps our speech crisp!"
      },
      {
        "title": "Comprehension & Speech Tasks",
        "text": "Tasks:\n1. Say: 'Val's best violet vest.' without mixing up the /b/ and /v/ sounds.\n2. Identify three words in the slides starting with /b/ and three starting with /v/.\n3. Repeat 'very berry' five times fast."
      },
      {
        "title": "Focus: Practice and Self-Correction",
        "text": "Learning correct pronunciation takes time. If a sound is hard, listen closely, observe how your mouth moves, and adjust.\n\nDiscuss: How does speaking clearly help other people understand what you are telling them?"
      }
    ]
  },
  "thursday": {
    "type": "Short Story",
    "title": "The Pied Piper of Hamelin",
    "slides": [
      {
        "title": "Story: The Pied Piper of Hamelin - Part 1",
        "text": "A long time ago, the town of Hamelin was suffering from a terrible plague of rats. The rats were everywhere: in houses, shops, schools, and even in kitchens. They ate the food, bit the children, and made a loud scratching noise day and night. The Mayor and the town council did not know what to do. One day, a tall, thin stranger dressed in a colorful, long coat arrived. He carried a small wooden pipe. 'I can rid your town of all rats for a thousand gold coins,' said the stranger. The Mayor, desperate to get rid of the pests, agreed immediately and promised to pay him even more. The stranger stood in the town square, put the pipe to his lips, and began to play a sweet, magical tune. Instantly, all the rats came running out of the houses and followed him as he played, until he led them into the nearby river, where they all drowned."
      },
      {
        "title": "Story: The Pied Piper of Hamelin - Part 2",
        "text": "The townspeople rejoiced, celebrating their freedom from the rats. But when the Piper returned to the town hall to claim his thousand gold coins, the Mayor became greedy. 'The rats are already gone, and you only played a simple tune for an hour,' said the Mayor, offering only fifty coins instead. The Piper was very angry at this dishonesty. 'You will regret breaking your promise,' he warned, and walked out. The next morning, when the adults were at work, the Piper returned. He stood in the street, put the pipe to his lips, and began to play a different, even sweeter tune. This time, all the children of Hamelin came running out of their homes, laughing and dancing, and followed him out of the town."
      },
      {
        "title": "Story: The Pied Piper of Hamelin - Part 3",
        "text": "The Piper led the children toward a great, rocky mountain. As they reached the cliff, a magical door opened in the side of the mountain. The Piper marched inside, and all the children followed him, except for one little boy who was slow because he was lame and could not keep up. The door shut tight behind them. The boy returned to the town and told the parents what had happened. The Mayor and the parents wept in deep sorrow, realizing the terrible price of their dishonesty. They spent years searching, but the children were never seen again. This story became a legendary reminder to always keep our promises and treat others with honesty."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Plague - An unusually large number of insects or animals causing damage or disease.\n• Piper - A person who plays a pipe or bagpipes.\n• Dishonesty - Lack of honesty or integrity; deceitfulness.\n\nPhonics Focus: Practice the /p/ sound in 'pipe', 'piper', and 'promise'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. How did the Piper get rid of the rats in the town of Hamelin?\n2. Why did the Mayor refuse to pay the Piper the promised gold coins?\n3. What did the Piper do when the town broke its promise?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Honesty and keeping agreements.\n\nBreaking promises and showing greed always has negative consequences. We should treat everyone fairly and hold onto our word, regardless of how much we think we can get away with.\n\nDiscuss: Why is keeping a promise to a friend important for building trust?"
      }
    ]
  },
  "friday": {
    "type": "Short Story",
    "title": "Puss in Boots",
    "slides": [
      {
        "title": "Story: Puss in Boots - Part 1",
        "text": "Once upon a time, a poor miller passed away, leaving his mill to his oldest son, his donkey to the second, and only a clever cat to his youngest son. The youngest son was sad. 'What can I do with a cat?' he sighed. Hearing this, the cat spoke: 'Do not worry, master. Give me a bag and a pair of leather boots, and you will see you have a great fortune.' The son, surprised, spent his last coins on boots and a bag. The cat put on the boots, slung the bag over his shoulder, and went to the forest. He caught a fat rabbit in his bag and took it to the palace. He presented it to the king: 'Your Majesty, this is a gift from my master, the Marquis of Carabas' (a title the cat invented). The king was pleased and thanked him."
      },
      {
        "title": "Story: Puss in Boots - Part 2",
        "text": "For months, the cat brought gifts of wild game to the king, always in the name of the Marquis of Carabas. One day, the cat learned the king and his beautiful daughter would drive along the river. The cat told his master, 'Take off your clothes and bathe in the river.' When the royal carriage approached, the cat ran out, shouting: 'Help! Help! The Marquis of Carabas is drowning!' The king stopped the carriage, recognized the cat, and ordered his guards to save the young man. The cat explained that thieves had stolen his master's fine clothes. The king immediately gave the miller's son a beautiful suit of royal clothes. Dressed in fine garments, the young man looked handsome, and the princess fell in love with him."
      },
      {
        "title": "Story: Puss in Boots - Part 3",
        "text": "The cat ran ahead of the carriage to a large castle owned by a wealthy, terrifying Ogre. The cat stood before the Ogre and said politely, 'I heard you have the magical power to transform into any animal, even a lion.' The Ogre, proud of his power, transformed into a huge roaring lion. The cat pretended to be scared. 'That is amazing!' said the cat. 'But can you transform into a tiny animal, like a mouse?' The Ogre laughed and turned into a mouse. Instantly, the cat pounced on the mouse and ate it! When the king arrived, the cat welcomed him to the Castle of the Marquis of Carabas. The king was impressed and offered his daughter's hand in marriage. The miller's son and the princess married and lived happily in the castle, with the clever cat as their chief adviser."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Miller - A person who owns or works in a grain mill.\n• Marquis - A nobleman of high rank.\n• Ogre - A legendary giant monster that eats humans.\n\nPhonics Focus: Practice the /c/ sound in 'cat', 'castle', and 'clever'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What did the youngest son inherit from his father, and how did he feel about it?\n2. How did the cat get the king to give his master royal clothes?\n3. How did the cat defeat the wealthy Ogre in the castle?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Resourcefulness, cleverness, and gratitude.\n\nEven when we start with very little, resourcefulness and confidence can help us achieve success. We should support our friends and use our talents to overcome difficult situations.\n\nDiscuss: In what ways can a small or quiet friend be of great help to you?"
      }
    ]
  },
  "saturday": {
    "type": "Maikling Kuwento (Short Story)",
    "title": "Ang Matsing at ang Buwaya",
    "slides": [
      {
        "title": "Kuwento: Ang Matsing at ang Buwaya - Bahagi 1",
        "text": "Sa isang malawak na kagubatan, nakatira ang isang matalinong Matsing sa isang malaking puno ng bayabas sa tabi ng ilog. Araw-araw ay kumakain siya ng matatamis na bayabas. Isang araw, lumapit ang isang malaking Buwaya sa pampang ng ilog. 'Kaibigang Matsing, maaari mo ba akong bigyan ng ilang bayabas? Gutom na ako,' sabi ng Buwaya. Agad na pumitas si Matsing ng mga hinog na bayabas at inihulog sa Buwaya. Naging magkaibigan sila at nagkikita araw-araw upang magkwentuhan at kumain."
      },
      {
        "title": "Kuwento: Ang Matsing at ang Buwaya - Bahagi 2",
        "text": "Dinalhan ng Buwaya ang kanyang asawa ng ilang bayabas. Ngunit nang makain ito ng asawa, sinabi nito: 'Kung ang bayabas ay ganito katamis, tiyak na mas matamis ang puso ng Matsing na kumakain nito araw-araw! Gusto kong kainin ang kanyang puso.' Napilitan ang Buwaya na linlangin ang kanyang kaibigan. Kinabukasan, sinabi niya kay Matsing: 'Matsing, gusto kang makilala ng asawa ko. Sumakay ka sa likod ko at tatawid tayo sa kabila ng ilog kung saan nakatira ang aking pamilya.' Sumakay si Matsing, ngunit sa gitna ng ilog, sinabi ng Buwaya ang totoo."
      },
      {
        "title": "Kuwento: Ang Matsing at ang Buwaya - Bahagi 3",
        "text": "Natakot si Matsing ngunit nag-isip ng mabilis. 'Naku, Buwaya! Bakit hindi mo sinabi agad? Iniwan ko ang puso ko sa itaas ng puno ng bayabas dahil natatakot akong mabasa ito sa ilog. Bumalik tayo at kukunin ko ito,' wika ni Matsing. Naniwala ang Buwaya at lumangoy pabalik sa pampang. Pagdating sa pampang, mabilis na tumalon si Matsing sa puno at tumawa. 'Sino ang tangang hayop na nag-iiwan ng puso sa puno? Niloko mo ako, kaya niloko rin kita!' sigaw ni Matsing. Natuto ang Buwaya na hindi sapat ang lakas kung walang talino, at nawalan siya ng matapat na kaibigan."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Linlangin - Dayain o lokohin gamit ang mga matatamis na salita.\n• Puso - Ang organ na nagpapadaloy ng dugo, ginamit dito bilang simbolo ng buhay.\n• Tangang - Walang sapat na talino o madaling maniwala sa kasinungalingan.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'b' sa 'buwaya', 'bayabas', at 'buntot'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Bakit nais ng asawa ng Buwaya na kainin ang puso ng Matsing?\n2. Paano nalinlang ng Buwaya si Matsing upang sumakay sa kanyang likod?\n3. Paano nakaligtas si Matsing sa masamang balak ng Buwaya?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang mabilis na pag-iisip sa oras ng panganib ay nagliligtas sa atin sa kapahamakan.\n\nHuwag magtiwala sa mga taong sumisira sa pagkakaibigan para sa kanilang sariling interes. Ang tunay na kaibigan ay hindi naghahangad ng kapahamakan ng kanyang kasama.\n\nTalakayin: Ano ang gagawin mo kung malaman mong may hindi magandang balak ang isang kakilala sa iyo?"
      }
    ]
  },
  "sunday": {
    "type": "Maikling Kuwento (Short Story)",
    "title": "Alamat ng Bahaghari",
    "slides": [
      {
        "title": "Kuwento: Alamat ng Bahaghari - Bahagi 1",
        "text": "Noong unang panahon, ang mga kulay sa mundo ay nag-away-away. Ang bawat kulay ay nag-aangkin na siya ang pinakamahalaga at pinakamaganda sa lahat. Sigaw ni Pula: 'Ako ang simbolo ng tapang at pag-ibig! Ako ang pinakamahalaga!' Sabi ni Dilaw: 'Ako ang nagdadala ng liwanag at init ng araw! Kung wala ako, malungkot ang mundo!' Sabi naman ni Asul: 'Ako ang kulay ng malawak na karagatan at ng payapang langit!' Ang bawat kulay ay nagmamataas at hindi nakikinig sa iba."
      },
      {
        "title": "Kuwento: Alamat ng Bahaghari - Bahagi 2",
        "text": "Habang lumalaki ang kanilang away, biglang dumilim ang langit at kumidlat nang napakalakas. Bumuhos ang isang matinding bagyo at ulan sa buong mundo. Natakot ang mga kulay sa lakas ng ulan, kaya nagkumpol-kumpol sila at naghawak-hawak ng kamay upang hindi tangayin ng agos. Biglang nagsalita ang Ulan sa kanila: 'Mga kulay, bakit kayo nag-aaway? Nilikha kayo ng may likha upang maging natatangi, ngunit magkakasama kayo upang maging kumpleto. Magtulungan kayo at huwag mag-away.'"
      },
      {
        "title": "Kuwento: Alamat ng Bahaghari - Bahagi 3",
        "text": "Nahiya ang mga kulay sa kanilang pag-aaway at nagka-isa. Nang tumigil ang bagyo at sumikat ang araw, magkakahawak-kamay silang umakyat sa langit bilang isang arko ng iba't ibang magagandang kulay. Ito ang tinawag na Bahaghari (Rainbow). Simula noon, tuwing matatapos ang ulan, lumilitaw ang bahaghari sa langit bilang paalala ng pagkakaisa, pag-asa, at kapayapaan sa buong mundo pagkatapos ng unos."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Nag-aangkin - Nagpapahayag na pagmamay-ari niya ang isang bagay.\n• Nagkumpol-kumpol - Nagtipon-tipon nang malapit sa isa't isa.\n• Unos - Matinding bagyo o kalamidad.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'h' sa 'bahaghari', 'hapon', at 'hawak'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Bakit nag-aaway ang mga kulay noong simula?\n2. Ano ang nangyari nang bumuhos ang matinding bagyo?\n3. Ano ang kinakatawan ng bahaghari kapag ito ay lumilitaw sa langit?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang pagkakaisa sa kabila ng pagkakaiba-iba ay nagdudulot ng kagandahan at kapayapaan.\n\nAng bawat tao ay may sariling galing at katangian, ngunit mas nagiging maganda ang mundo kung tayo ay nagtutulungan at nagkakaisa tulad ng mga kulay sa bahaghari.\n\nDiscuss: Paano mo maipapakita ang pagkakaisa sa inyong pangkat sa paaralan?"
      }
    ]
  }
};

window.WEEK5_ADVANCED_DATA = window.WEEK5_DATA;
