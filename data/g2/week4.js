window.WEEK4_DATA = {};

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
  window.WEEK4_DATA[sub] = {
    color: subjectInfo[sub].color,
    icon: subjectInfo[sub].icon,
    title: subjectInfo[sub].title,
    subtitle: `Week 4: Advanced Learning in ${subjectInfo[sub].title}`,
    slides: [
      {
        title: `Introduction to ${subjectInfo[sub].title} Week 4`,
        text: `Welcome to the extension module for ${subjectInfo[sub].title} Week 4. This week we will explore advanced topics, applications, and revision worksheets to solidify your understanding.`,
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

window.WEEK4_DATA.checklist = [
  "Review weekly concept definitions",
  "Complete daily reading section",
  "Take weekly subject quizzes"
];

window.WEEK4_DATA.reading = {
  "monday": {
    "type": "Short Story",
    "title": "The Frog Prince",
    "slides": [
      {
        "title": "Story: The Frog Prince - Part 1",
        "text": "Once upon a time, in a grand kingdom far away, lived a young princess who was incredibly beautiful. Her favorite toy was a heavy golden ball. On hot afternoons, she loved to sit by a deep, cool well in the palace gardens, tossing the golden ball high into the air and catching it. One sunny day, she threw the ball too high. It slipped through her fingers, bounced off the stone rim, and fell directly into the dark, deep water of the well. The well was so deep that she could not see the bottom. The princess sat by the well and began to cry loudly. 'Oh dear, I will do anything to get my golden ball back!' she cried. Suddenly, an ugly frog popped his head out of the green water. 'Why are you crying, princess?' croaked the frog. She explained her problem, and the frog made a proposal. 'I will retrieve your ball if you promise to let me be your companion, eat from your golden plate, and sleep in your cozy bed.' The princess, eager to get her toy, quickly agreed, thinking the frog was silly and could never leave his well."
      },
      {
        "title": "Story: The Frog Prince - Part 2",
        "text": "The frog dove deep into the cold water and soon returned with the golden ball in his mouth. He dropped it on the grass, and the princess, filled with joy, grabbed her toy and ran back to the palace without thanking him. The poor frog croaked after her, but she ignored him completely. That evening, as the princess sat at the dining table with the king and her sisters, they heard a strange tapping sound at the palace door. 'Princess, open the door and let me in!' called a small voice. The princess opened the door, saw the ugly frog, and shut it in fear. The king noticed her worry and asked what was wrong. After she explained, the king said firmly, 'A promise is a promise. You must keep your word. Let the frog in and share your dinner with him.' The princess reluctantly let the frog sit on the table and eat from her plate, though it made her feel very uncomfortable."
      },
      {
        "title": "Story: The Frog Prince - Part 3",
        "text": "After dinner, the frog said, 'I am tired. Please carry me to your room so I can sleep in your bed.' The princess refused and cried, but the king insisted she keep her promise. She carried the frog upstairs and placed him in the corner. But the frog hopped onto her pillow, demanding to sleep next to her. In anger, the princess picked up the frog and threw him gently against the wall. The moment the frog touched the wall, he transformed into a handsome prince! He explained that an evil witch had cursed him, and only a princess's companion could break it. With the king's blessing, they became best friends and eventually ruled the kingdom together, proving that keeping promises and looking beyond appearance leads to true happiness."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Retrieve - To get or bring something back from a place.\n• Proposal - A plan or suggestion put forward for consideration.\n• Reluctantly - In an unwilling and hesitant way.\n\nPhonics Focus: Practice the /pr/ blend in 'prince', 'princess', and 'promise'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What was the princess's favorite toy, and how did she lose it?\n2. What did the frog ask in return for retrieving the ball?\n3. Why did the king force the princess to let the frog eat from her plate?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Honesty and keeping promises.\n\nWe must always keep our promises, even when it is difficult or inconvenient. True character is shown by holding onto our word and not judging others solely by their appearance.\n\nDiscuss: Tell about a time you made a promise. Did you keep it?"
      }
    ]
  },
  "tuesday": {
    "type": "Short Story",
    "title": "Rapunzel",
    "slides": [
      {
        "title": "Story: Rapunzel - Part 1",
        "text": "A long time ago, a husband and wife lived next to a beautiful walled garden owned by a powerful witch named Dame Gothel. The wife fell ill and longed for the fresh green rampion (a salad herb) growing in the witch's garden. The husband, desperate to save his wife, climbed the high wall at night to steal some rampion. But on his second trip, the witch caught him. 'How dare you steal from me!' she screeched. The husband begged for mercy, explaining his wife's illness. The witch agreed to let him take the rampion under one condition: they must give her their firstborn child. Terrified, the husband agreed. When a beautiful baby girl was born, the witch took her away and named her Rapunzel. As Rapunzel grew into a lovely girl with incredibly long, golden hair that shone like spun gold, the witch locked her in a tall tower in the middle of a deep forest. The tower had no doors or stairs, only a single window at the very top."
      },
      {
        "title": "Story: Rapunzel - Part 2",
        "text": "Whenever Dame Gothel wanted to enter the tower, she stood at the bottom and called out: 'Rapunzel, Rapunzel, let down your hair!' Hearing the call, Rapunzel would unwind her long, braided golden hair, loop it over a hook by the window, and let it drop seventy feet to the ground. The witch would then climb up using the hair as a rope. Rapunzel lived a lonely life in the tower, spending her days singing beautiful songs to pass the time. One day, a young prince riding through the forest heard her sweet voice and was enchanted. He watched the tower and saw the witch climb up. The next evening, after the witch left, the prince stood at the base of the tower and called in a disguised voice: 'Rapunzel, Rapunzel, let down your hair!' The golden hair tumbled down, and the prince climbed up."
      },
      {
        "title": "Story: Rapunzel - Part 3",
        "text": "Rapunzel was frightened at first, but the prince was kind and gentle. They quickly became close friends and made a plan for her escape. The prince promised to bring silk threads every visit so Rapunzel could weave a ladder. However, during a visit by the witch, Rapunzel accidentally revealed the secret. In a rage, Dame Gothel cut off Rapunzel's long golden hair and cast her out into a wilderness. When the prince returned, the witch let down the cut hair, and when he reached the window, she mocked him. In despair, the prince fell from the tower into some thorn bushes, which scratched his eyes. He wandered the forest blind for years, until he heard Rapunzel's sweet voice singing. They reunited, and Rapunzel's tears of joy fell onto his eyes, restoring his sight. They returned to his kingdom and lived happily ever after."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Walled - Enclosed or surrounded by a wall.\n• Enchanted - Filled with delight; captivated.\n• Wilderness - A wild, uncultivated, and uninhabited region.\n\nPhonics Focus: Practice the /l/ sounds in 'lovely', 'long', and 'golden'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Why did the husband steal rampion from the witch's garden?\n2. How did the witch and the prince get inside the tall tower?\n3. How did the prince regain his sight at the end of the story?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Love, patience, and hope through difficult times.\n\nEven in the darkest and loneliest times, we must keep hope in our hearts. True friendship and love can overcome great obstacles and bring healing.\n\nDiscuss: What is something you do to stay happy when you feel lonely?"
      }
    ]
  },
  "wednesday": {
    "type": "Tongue Twisters",
    "title": "Phonics Fun with Ch and Sh",
    "slides": [
      {
        "title": "Tongue Twister Fun: Ch and Sh - Part 1",
        "text": "Welcome to our speech playground! Today we are practicing the soft /sh/ and crisp /ch/ sounds. Meet Charlie the Chef, who loves to chop vegetables in his kitchen. Charlie chips and chops cheap cheese. He makes delicious cherry soup. Let's try saying this together slowly: 'Charlie the Chef chips and chops cheap cheese in the kitchen.' Notice how your tongue touches the roof of your mouth for the /ch/ sound. Now let's try it faster! 'Charlie chops cheap cheese. Cheap cheese Charlie chops.' Repeat it three times to train your speech muscles. This helps you pronounce words clearly when you talk to others."
      },
      {
        "title": "Tongue Twister Fun: Ch and Sh - Part 2",
        "text": "Now, let's practice the /sh/ sound. Meet Sally, who sells sea shells by the sea shore. The shells she sells are surely sea shells. Sally's sister, Sharon, washes shiny shoes in the shop. Sharon shines six shiny shoes. Let's try saying: 'Sally sells sea shells by the sea shore. Sharon shines shiny shoes.' For the /sh/ sound, blow air out gently without letting your tongue touch the roof of your mouth. Practice this difference: 'chips' vs 'ships', 'cheat' vs 'sheet', 'chop' vs 'shop'. This is an excellent way to train your ears and tongue."
      },
      {
        "title": "Tongue Twister Fun: Ch and Sh - Part 3",
        "text": "Let's combine /ch/ and /sh/ for the ultimate phonics challenge! Imagine Charlie the Chef cooking on a big ship. 'Charlie the Chef chose shiny shells to decorate his ship kitchen.' Let's try saying this fast: 'Charlie chose shiny shells. Shiny shells Charlie chose.' Repeat it three times: slow, medium, and fast! Congratulations, you are practicing clear speech. This helps you sound confident and clear when you speak at home or at school."
      },
      {
        "title": "Speech & Enunciation Practice",
        "text": "Phonics Focus: Contrasting /ch/ and /sh/\n• /ch/ (Stop-Fricative): Touch tongue to roof, then release air quickly (e.g., 'choose', 'chair').\n• /sh/ (Continuous Fricative): Keep tongue down, blow air continuously (e.g., 'shoe', 'shine').\n\nDaily enunciation practice builds reading confidence!"
      },
      {
        "title": "Comprehension & Speech Tasks",
        "text": "Tasks:\n1. Read: 'Sharon shines cheap shoes.' without mixing up the /sh/ and /ch/ sounds.\n2. List three words starting with /ch/ and three starting with /sh/ from the slides.\n3. Practice saying 'cheap sheep' five times fast."
      },
      {
        "title": "Focus: Perseverance & Speech Confidence",
        "text": "Speech exercises help us express our thoughts clearly. It is okay if you make mistakes—just pause, take a deep breath, and try again.\n\nDiscuss: When is it important to speak slowly and clearly?"
      }
    ]
  },
  "thursday": {
    "type": "Short Story",
    "title": "The Goose that Laid the Golden Eggs",
    "slides": [
      {
        "title": "Story: The Goose that Laid the Golden Eggs - Part 1",
        "text": "Once upon a time, a poor farmer and his wife lived in a small, humble cottage. They worked hard every day planting vegetables and caring for their few farm animals, but they barely made enough money to buy food. One morning, the farmer went to the nest of his favorite goose and found a heavy, shiny yellow egg. To his astonishment, the egg was made of pure, solid gold! He ran to the village and sold it for a large sum of money. The next morning, the goose laid another golden egg. The farmer could hardly believe his luck. Every single morning, without fail, the goose laid one shiny golden egg. Within a few months, the poor farmer and his wife became incredibly wealthy, building a huge stone house and buying fine clothes."
      },
      {
        "title": "Story: The Goose that Laid the Golden Eggs - Part 2",
        "text": "As the farmer and his wife grew richer, they also became very greedy. They were no longer satisfied with getting just one golden egg a day. They wanted to buy more land and horses immediately. 'Why should we wait for just one egg each morning?' the farmer's wife said one evening. 'The goose must be filled with gold inside. If we cut it open, we can get all the gold at once and become the richest people in the world tonight!' The farmer, blinded by his greed, agreed with his wife's plan. They went to the coop, caught the goose, and killed it. However, when they cut the goose open, they were shocked to find that its inside was just like any other ordinary goose. There was no gold at all inside it."
      },
      {
        "title": "Story: The Goose that Laid the Golden Eggs - Part 3",
        "text": "The farmer and his wife realized their terrible mistake. In their greed to get everything at once, they had lost the precious goose that had made them rich. Now, they would never get another golden egg. They sat in their wealthy home and wept, regretting their foolish decision. This story shows that greed can make us lose the good things we already have. Being content with steady progress is far better than trying to get everything instantly through greed."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Astonishment - Great surprise or amazement.\n• Greedy - Having an excessive desire for wealth or food.\n• Content - Satisfied with what one has.\n\nPhonics Focus: Practice the /g/ sound in 'goose', 'gold', and 'greedy'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What did the farmer find in the goose's nest on the first morning?\n2. Why did the farmer and his wife decide to kill the goose?\n3. What did they find when they cut the goose open?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Greed and Contentment.\n\nGreed often overrides wisdom and results in losing what we have. We should appreciate steady blessings and avoid rushing to acquire wealth at the expense of others or common sense.\n\nDiscuss: What is the difference between wanting to improve and being greedy?"
      }
    ]
  },
  "friday": {
    "type": "Short Story",
    "title": "The Emperor's New Clothes",
    "slides": [
      {
        "title": "Story: The Emperor's New Clothes - Part 1",
        "text": "Many years ago, there lived an Emperor who cared more about fine clothes than about running his empire. He spent all his money on new suits and changed his outfits every hour. One day, two clever swindlers arrived in the city, claiming to be weavers. They declared they could weave a magical fabric that was invisible to anyone who was either stupid or unfit for their job. The Emperor, thinking this was a wonderful way to find out who was wise in his court, paid the swindlers a large sum of gold to make him a new suit of clothes immediately. The swindlers set up two looms and pretended to work, although there was nothing on the looms at all."
      },
      {
        "title": "Story: The Emperor's New Clothes - Part 2",
        "text": "The Emperor sent his honest old minister to check on the weavers' progress. When the minister saw the empty looms, he was shocked, but he thought, 'Oh dear, if I say I see nothing, they will think I am stupid or unfit for my post!' So he pretended to see the beautiful patterns and reported this to the Emperor. Later, the Emperor went himself, accompanied by his courtiers. None of them could see anything, but they all feared being called foolish, so they praised the invisible cloth. 'It is magnificent!' they all said. The swindlers worked through the night, pretending to stitch the invisible suit, and finally presented it to the Emperor."
      },
      {
        "title": "Story: The Emperor's New Clothes - Part 3",
        "text": "The Emperor took off his old clothes, and the swindlers pretended to dress him in the new suit. The Emperor marched in a grand procession through the city. The citizens, not wanting to be labeled stupid, cried, 'How beautiful the Emperor's new clothes are!' Suddenly, a little child in the crowd pointed and said: 'But he has nothing on!' The words spread, and soon the entire crowd began to whisper and laugh, shouting, 'He has no clothes on!' The Emperor realized they were right, but he held his head high and continued the procession, feeling very foolish for letting his vanity blind him to the truth."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Swindlers - People who use deception to steal money.\n• Courtiers - Attendants at a royal court.\n• Procession - A number of people moving forward in an orderly, formal way.\n\nPhonics Focus: Practice the /c/ sound in 'clothes', 'clever', and 'court'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What was the Emperor's main interest in life?\n2. What was special about the magical fabric according to the swindlers?\n3. Who was the first person to speak the truth during the procession?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Honesty and avoiding vanity.\n\nWe should speak the truth honestly, even when others are afraid to do so. Pride and fear of what others think can make us blind to simple truths.\n\nDiscuss: Why do you think the little child was the only one who spoke the truth?"
      }
    ]
  },
  "saturday": {
    "type": "Maikling Kuwento (Short Story)",
    "title": "Ang Leon at ang Daga",
    "slides": [
      {
        "title": "Kuwento: Ang Leon at ang Daga - Bahagi 1",
        "text": "Isang mainit na tanghali, isang malaking Leon ang natutulog sa kanyang yungib. Isang maliit na Daga ang naglalaro sa malapit at aksidenteng nakatakbo sa ibabaw ng mukha ng Leon. Nagising ang Leon na may malakas na ungal, at hinuli ang Daga gamit ang kanyang malaking paw. 'Patawad, Haring Leon!' umiiyak na pakiusap ng Daga. 'Huwag mo akong kainin. Isang araw ay tutulungan kita bilang ganti.' Natawa ang Leon sa ideya na ang isang maliit na daga ay makakatulong sa isang hari. Ngunit dahil nasa mabuting mood siya, pinakawalan niya ang Daga."
      },
      {
        "title": "Kuwento: Ang Leon at ang Daga - Bahagi 2",
        "text": "Makalipas ang ilang araw, habang naghahanap ng makakain sa kagubatan ang Leon, nasakote siya sa lambat ng mga mangangaso. Nagpupumiglas siya ngunit lalo lamang humihigpit ang mga lubid. Sumigaw ang Leon sa galit at takot, at narinig ito ng maliit na Daga. Agad na tumakbo ang Daga sa kinaroroonan ng Leon. 'Huwag kang mag-alala, Haring Leon, ililigtas kita!' sabi ng Daga. Gamit ang kanyang matatalas na ngipin, sinimulan niyang ngatngatin ang makapal na lubid ng lambat."
      },
      {
        "title": "Kuwento: Ang Leon at ang Daga - Bahagi 3",
        "text": "Hindi sumuko ang Daga kahit nangangalay na ang kanyang panga. Nginatngat niya ang lubid hanggang sa maputol ang pangunahing buhol nito at lumuwag ang lambat. Nakawala ang Leon at nakaligtas! Lumingon ang Leon sa Daga at sinabi, 'Salamat, maliit na kaibigan. Nagkamali ako nang tawanan ko ang iyong pangako.' Mula noon, naging matalik silang magkaibigan, nagtutulungan sa lahat ng bagay sa kagubatan, na nagpapatunay na walang kaibigan na sobrang liit upang makatulong sa iba."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Yungib - Isang yungib o kuweba na tirahan ng mga hayop.\n• Nasakote - Nahuli sa bitag o trap.\n• Ngatngatin - Kagatin o sirain ang isang bagay gamit ang matatalas na ngipin.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'd' sa 'daga', 'dulo', at 'dapit-hapon'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Bakit natawa ang Leon sa sinabi ng Daga noong una silang magkita?\n2. Paano nahuli ang Leon ng mga mangangaso?\n3. Paano tinulungan ng Daga ang Leon na makalaya sa bitag?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang kabaitan ay hindi kailanman nasasayang, at ang bawat isa ay may halaga.\n\nHuwag maliitin ang maliliit na nilalang o kaibigan dahil may kani-kaniyang talento at kakayahan ang bawat isa. Ang pagtulong sa nangangailangan ay nagbabalik ng kabutihan sa atin.\n\nTalakayin: Paano mo matutulungan ang isang kaibigan na mas maliit o mas bata sa iyo?"
      }
    ]
  },
  "sunday": {
    "type": "Maikling Kuwento (Short Story)",
    "title": "Ang Mahiwagang Palayok",
    "slides": [
      {
        "title": "Kuwento: Ang Mahiwagang Palayok - Bahagi 1",
        "text": "Sa isang maliit na nayon, nakatira ang isang mabait na batang babae na si Maya at ang kanyang matandang lola. Sila ay napakahirap at madalas ay walang makain. Isang araw, habang naghahanap ng mga tuyong kahoy si Maya sa kagubatan, nakatagpo siya ng isang matandang babae na may mabigat na pasanin. Tinulungan ito ni Maya nang walang alinlangan. Bilang pasasalamat, binigyan siya ng matanda ng isang maliit na palayok. 'Ito ay isang mahiwagang palayok. Sabihin mo lang ang \"Luto, munting palayok, luto!\" at magluluto ito ng matamis at masarap na lugaw. Kapag busog ka na, sabihin mo ang \"Hinto, munting palayok, hinto!\" at titigil ito,' paliwanag ng matanda."
      },
      {
        "title": "Kuwento: Ang Mahiwagang Palayok - Bahagi 2",
        "text": "Masayang umuwi si Maya at ipinakita sa kanyang lola ang mahiwagang palayok. Mula noon, hindi na sila nagutom dahil tuwing kakain sila ay nagluluto ang palayok ng masarap na pagkain. Isang araw, umalis si Maya upang bumisita sa kabilang baryo. Nagutom ang kanyang lola at sinabi sa palayok: 'Luto, munting palayok, luto!' Agad na nagluto ang palayok ng mainit na lugaw. Kumain nang kumain ang lola hanggang sa mabusog. Ngunit nang nais na niyang patigilin ang palayok, nakalimutan niya ang tamang salita. Sinabi niya: 'Salamat, tapos na!', 'Hinto na!' ngunit patuloy pa rin ang palayok sa pagluluto."
      },
      {
        "title": "Kuwento: Ang Mahiwagang Palayok - Bahagi 3",
        "text": "Umapaw ang lugaw mula sa palayok, gumapang sa sahig, lumabas sa pinto, at napuno ang buong kalsada ng nayon. Nagtakbuhan ang mga kapitbahay dahil sa bumabahang lugaw. Nang bumalik si Maya at nakita ang sitwasyon, agad siyang sumigaw ng malakas: 'Hinto, munting palayok, hinto!' Agad na tumigil ang palayok sa pagluluto. Kinailangang kainin ng mga tao ang lugaw sa kalsada upang makadaan muli. Mula noon, naging maingat na ang lola at si Maya sa paggamit nito, at ibinahagi nila ang pagkain sa lahat nang may wastong disiplina."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Nayon - Isang maliit na komunidad o pamayanan sa probinsya.\n• Alinlangan - Pag-aalinlangan o takot na tumulong.\n• Umapaw - Lumabas ang likido dahil napuno ang lalagyan.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'y' sa 'palayok', 'nayon', at 'maya'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Anong mahiwagang salita ang nagpapaluto sa palayok?\n2. Bakit umapaw ang lugaw at bumaha sa buong nayon?\n3. Paano pinatigil ni Maya ang pag-apaw ng lugaw?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang bawat biyaya ay dapat gamitin nang may wastong kaalaman at disiplina.\n\nMahalagang makinig nang mabuti sa mga panuto at alalahanin ang mga ito upang maiwasan ang sakuna. Ang pagbabahagi ng biyaya sa kapwa ay nagdadala ng saya sa komunidad.\n\nTalakayin: Bakit mahalagang makinig at sumunod sa mga panuto ng guro sa paaralan?"
      }
    ]
  }
};

window.WEEK4_ADVANCED_DATA = window.WEEK4_DATA;
