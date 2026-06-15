window.WEEK1_DATA = {};

window.WEEK1_DATA.math = {
  color: "#3b82f6",
  icon: "🔢",
  title: "Mathematics",
  subtitle: "Week 1: Whole Numbers up to 1,000 & Place Value",
  slides: [
    {
      title: "Introduction to Numbers up to 1,000",
      text: "Numbers help us count and measure things around us. Up to 1,000, numbers consist of three digits representing Hundreds, Tens, and Ones. Understanding these positions is the key to mastering whole numbers.",
      examples: [
        { title: "Counting Apples", content: "A fruit store has 3 boxes of 100 apples, 4 bags of 10 apples, and 5 loose apples. This makes 345 apples in total." },
        { title: "School Supplies", content: "A school receives 6 crates of books (100 in each), 2 bundles (10 in each), and 8 single books. The total number of books is 628." }
      ]
    },
    {
      title: "Visualizing with Base-10 Blocks",
      text: "We can use physical blocks to see numbers: a 'flat' is a block of 100, a 'rod' represents 10, and a 'unit' represents 1. By grouping them, any 3-digit number can be visualized clearly.",
      examples: [
        { title: "Representing 254", content: "Combine 2 flats (200), 5 rods (50), and 4 unit cubes (4). This visually represents the number 254." },
        { title: "Representing 407", content: "Use 4 flats (400), 0 rods (0), and 7 unit cubes (7). This shows there are no tens in 407." }
      ]
    },
    {
      title: "The Place Value Chart",
      text: "A place value chart is a table that separates numbers into columns: Hundreds (H), Tens (T), and Ones (O). The position of each digit tells us what value it holds.",
      examples: [
        { title: "Analyzing 789", content: "In 789: '7' goes to the Hundreds column, '8' goes to the Tens column, and '9' goes to the Ones column." },
        { title: "Analyzing 902", content: "In 902: '9' is in the Hundreds, '0' is in the Tens, and '2' is in the Ones." }
      ]
    },
    {
      title: "Place Value vs. Value",
      text: "Place Value refers to the *position* of a digit (Hundreds, Tens, or Ones). Value is the *worth* of the digit in that position (e.g. 5 in the Tens column has a value of 50).",
      examples: [
        { title: "Finding Place Value", content: "In 453, the digit 5 is in the Tens place." },
        { title: "Finding Value", content: "In 453, the value of the digit 5 is 50 (5 × 10)." }
      ]
    },
    {
      title: "Understanding the Multiplier 10",
      text: "In our base-10 number system, each place value is 10 times larger than the place directly to its right. Ten units equal one rod, and ten rods equal one flat.",
      examples: [
        { title: "10 Ones to 1 Ten", content: "Gathering 10 single blocks (ones) allows you to swap them for 1 long rod of ten." },
        { title: "10 Tens to 1 Hundred", content: "Gathering 10 rods of ten allows you to swap them for 1 flat block of one hundred." }
      ]
    },
    {
      title: "Standard Form of Numbers",
      text: "Standard Form is the common way we write numbers using digits. For example, writing 'three hundred sixty' as 360 is writing it in standard form.",
      examples: [
        { title: "Writing Seven Hundred Five", content: "In standard form, this is written as 705." },
        { title: "Writing Eight Hundred Forty", content: "In standard form, this is written as 840." }
      ]
    },
    {
      title: "Expanded Form of Numbers",
      text: "Expanded Form shows the number written as the sum of the values of its digits. This helps us see how the number is constructed from its parts.",
      examples: [
        { title: "Expanding 358", content: "The number 358 in expanded form is 300 + 50 + 8." },
        { title: "Expanding 609", content: "The number 609 in expanded form is 600 + 0 + 9 (or simply 600 + 9)." }
      ]
    },
    {
      title: "Word Form of Numbers",
      text: "Word Form is writing a number using words instead of digits. When writing numbers in word form, pay attention to spelling and hyphens for numbers between 21 and 99.",
      examples: [
        { title: "Reading 492", content: "In word form, this is written as 'four hundred ninety-two'." },
        { title: "Reading 815", content: "In word form, this is written as 'eight hundred fifteen'." }
      ]
    },
    {
      title: "Understanding Zero as a Placeholder",
      text: "Zero is extremely important because it holds a place where there are no values of that type. Without zero, we couldn't tell the difference between numbers like 35 and 305.",
      examples: [
        { title: "Zero in the Tens place", content: "In 508, the 0 indicates there are no tens, ensuring the 5 stays in the hundreds place." },
        { title: "Zero in the Ones place", content: "In 740, the 0 shows there are no ones, keeping the 7 in the hundreds and 4 in the tens." }
      ]
    },
    {
      title: "Place Value Relationships in 3-Digit Numbers",
      text: "Let's investigate how digits change. If you have the number 123 and add 10, the digit in the tens place increases by 1. If you add 100, the digit in the hundreds place increases by 1.",
      examples: [
        { title: "Adding 10 to 456", content: "456 + 10 = 466. Note how only the tens place digit changed from 5 to 6." },
        { title: "Adding 100 to 456", content: "456 + 100 = 556. Only the hundreds place digit changed from 4 to 5." }
      ]
    },
    {
      title: "Place Value Puzzles: Clues and Logic",
      text: "Let's use our place value knowledge to solve puzzles. By reading clues about Hundreds, Tens, and Ones, we can identify mysterious numbers.",
      examples: [
        { title: "Mystery Number 1", content: "Clue: I have 4 hundreds, 3 tens, and 8 ones. Answer: 438." },
        { title: "Mystery Number 2", content: "Clue: I have 9 hundreds, 0 tens, and 5 ones. Answer: 905." }
      ]
    },
    {
      title: "Place Value Relationship: 10 Times Larger",
      text: "Let's explore how a digit's value changes as it moves left. A digit in the hundreds place is 10 times larger than the same digit in the tens place.",
      examples: [
        { title: "Comparing 300 and 30", content: "300 is 10 times larger than 30 because 30 × 10 = 300." },
        { title: "Comparing 700 and 70", content: "700 is 10 times larger than 70 because 70 × 10 = 700." }
      ]
    },
    {
      title: "Introduction to 4-Digit Numbers: 1,000",
      text: "When we group ten flats of 100, we get a large block called a 'cube', which represents 1,000. This is the smallest 4-digit number and has a 'Thousands' place.",
      examples: [
        { title: "Swapping Flats", content: "Swapping 10 flats (100 each) gives you 1 large cube representing 1,000." },
        { title: "Visualizing 1,000", content: "Think of 1,000 as 100 tens or 1,000 ones grouped together." }
      ]
    },
    {
      title: "Place Value columns up to Thousands",
      text: "With 4-digit numbers, our place value chart expands to the left: Thousands (Th), Hundreds (H), Tens (T), and Ones (O).",
      examples: [
        { title: "Analyzing 1,245", content: "1 is in the Thousands, 2 is in the Hundreds, 4 is in the Tens, and 5 is in the Ones." },
        { title: "Analyzing 3,082", content: "3 is in the Thousands, 0 is in the Hundreds, 8 is in the Tens, and 2 is in the Ones." }
      ]
    },
    {
      title: "Comparing Digit Values in Different Places",
      text: "A digit's value depends entirely on its position. For example, in 333, the three '3's have values of 300, 30, and 3 respectively, despite being the same digit.",
      examples: [
        { title: "Digits in 555", content: "First 5 has value 500. Second 5 has value 50. Third 5 has value 5." },
        { title: "Digits in 880", content: "The first 8 is worth 800, while the second 8 is worth 80." }
      ]
    },
    {
      title: "Intro to Roman Numerals: I, V, X",
      text: "Roman Numerals are an ancient number system. We use letters: I represents 1, V represents 5, and X represents 10.",
      examples: [
        { title: "Writing 1, 5, and 10", content: "1 = I, 5 = V, 10 = X." },
        { title: "Clock Faces", content: "Many clock faces use I, V, X to show the hours." }
      ]
    },
    {
      title: "Roman Numerals: Simple Additive Rules",
      text: "When a smaller numeral is placed after a larger numeral, we add them. For example, VI means 5 + 1 = 6.",
      examples: [
        { title: "Writing 6 and 7", content: "VI = 6 (5 + 1). VII = 7 (5 + 2)." },
        { title: "Writing 8 and 11", content: "VIII = 8 (5 + 3). XI = 11 (10 + 1)." }
      ]
    },
    {
      title: "Roman Numerals: Simple Subtractive Rules",
      text: "When a smaller numeral is placed before a larger numeral, we subtract them. For example, IV means 5 - 1 = 4.",
      examples: [
        { title: "Writing 4", content: "IV = 4 (5 - 1)." },
        { title: "Writing 9", content: "IX = 9 (10 - 1)." }
      ]
    },
    {
      title: "Skip Counting by 10s",
      text: "Skip counting by 10s means adding 10 to the previous number each time. The tens digit increases by 1 in each step (and may affect hundreds).",
      examples: [
        { title: "Starting from 120", content: "120, 130, 140, 150, 160, 170, 180." },
        { title: "Starting from 385", content: "385, 395, 405, 415, 425, 435." }
      ]
    },
    {
      title: "Skip Counting by 25s",
      text: "Skip counting by 25s is commonly used in money and time. The numbers end in a repeating pattern: 25, 50, 75, 00.",
      examples: [
        { title: "Starting from 100", content: "100, 125, 150, 175, 200, 225, 250." },
        { title: "Starting from 450", content: "450, 475, 500, 525, 550, 575." }
      ]
    },
    {
      title: "Skip Counting by 50s",
      text: "Skip counting by 50s increases the number by 50 at each step. The ending digits alternate between 50 and 00.",
      examples: [
        { title: "Starting from 200", content: "200, 250, 300, 350, 400, 450, 500." },
        { title: "Starting from 150", content: "150, 200, 250, 300, 350, 400." }
      ]
    },
    {
      title: "Skip Counting by 100s",
      text: "Skip counting by 100s means adding 100 at each step. The hundreds digit increases by 1, while the tens and ones digits remain the same.",
      examples: [
        { title: "Starting from 300", content: "300, 400, 500, 600, 700, 800, 900." },
        { title: "Starting from 248", content: "248, 348, 448, 548, 648, 748." }
      ]
    },
    {
      title: "Identifying Number Patterns",
      text: "A number pattern is a sequence of numbers that follows a specific rule. Finding the difference between adjacent numbers helps identify the rule.",
      examples: [
        { title: "Analyzing 12, 22, 32, 42", content: "The difference is 10. The rule is 'add 10'." },
        { title: "Analyzing 100, 200, 300, 400", content: "The difference is 100. The rule is 'add 100'." }
      ]
    },
    {
      title: "Non-Routine Logic: Solving Digit Riddles",
      text: "We can use logical deduction to find mystery numbers based on digit restrictions. Let's practice analyzing clues.",
      examples: [
        { title: "Riddle 1", content: "Clue: I am a 3-digit number. My ones digit is 9. My hundreds digit is 4 less than my ones digit. My tens digit is 0. Answer: 509." },
        { title: "Riddle 2", content: "Clue: I am a 3-digit number. My tens digit is 7. My hundreds and ones digits are the same, and their sum is 8. Answer: 474." }
      ]
    },
    {
      title: "Summary: Numbers and Place Value",
      text: "Congratulations! You have covered place value, value, standard and expanded forms, skip counting patterns, basic Roman numerals, and mathematical logic up to 1,000. These skills build the foundation for all math calculations.",
      examples: [
        { title: "Review Sheet", content: "Place value is position. Value is worth. Standard is digits. Expanded is sum. Word is letters. Roman is letters." },
        { title: "Real World Math", content: "We use these rules when counting money, checking page numbers, and reading digital devices." }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "In the number 843, which digit is in the hundreds place?",
          options: ["3", "4", "8", "None"],
          answer: 2
        },
    {
          type: "choice",
          q: "What is the place value of the digit 7 in the number 275?",
          options: ["Ones", "Tens", "Hundreds", "Thousands"],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the value of the digit 9 in the number 921?",
          options: ["9", "90", "900", "9000"],
          answer: 2
        },
    {
          type: "choice",
          q: "How many ones are equal to exactly one ten?",
          options: ["1", "10", "100", "1000"],
          answer: 1
        },
    {
          type: "choice",
          q: "How many tens are equal to exactly one hundred?",
          options: ["1", "5", "10", "100"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which represents the number 'four hundred fifty-six' in standard form?",
          options: ["406", "450", "456", "465"],
          answer: 2
        },
    {
          type: "choice",
          q: "What is the expanded form of the number 789?",
          options: ["70 + 80 + 9", "700 + 8 + 9", "700 + 80 + 9", "7 + 8 + 9"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which of the following represents 600 + 40 + 2 in standard form?",
          options: ["624", "642", "6042", "246"],
          answer: 1
        },
    {
          type: "choice",
          q: "In the number 508, why is the digit 0 important?",
          options: ["It holds the tens place", "It makes the number smaller", "It has no meaning", "It represents five hundreds"],
          answer: 0
        },
    {
          type: "choice",
          q: "If you add 10 to the number 345, which digit will change?",
          options: ["3", "4", "5", "All digits"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which digit has the greatest value in the number 912?",
          options: ["9", "1", "2", "They are all equal"],
          answer: 0
        },
    {
          type: "choice",
          q: "How is the number 902 written in word form?",
          options: ["Nine hundred twenty", "Nine hundred two", "Ninety-two", "Nine hundred two tens"],
          answer: 1
        },
    {
          type: "choice",
          q: "What number is represented by 9 flats, 0 rods, and 4 unit cubes?",
          options: ["94", "904", "940", "9004"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which number is 10 times larger than 70?",
          options: ["7", "70", "700", "7000"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which place value is directly to the left of the Hundreds place?",
          options: ["Ones", "Tens", "Thousands", "Ten Thousands"],
          answer: 2
        },
    {
          type: "choice",
          q: "In Roman numerals, what does the letter 'V' represent?",
          options: ["1", "5", "10", "50"],
          answer: 1
        },
    {
          type: "choice",
          q: "How is the number 4 written in Roman numerals?",
          options: ["IIII", "VI", "IV", "XV"],
          answer: 2
        },
    {
          type: "choice",
          q: "What number does the Roman numeral 'IX' represent?",
          options: ["4", "6", "9", "11"],
          answer: 2
        },
    {
          type: "choice",
          q: "What number does the Roman numeral 'XII' represent?",
          options: ["7", "9", "12", "20"],
          answer: 2
        },
    {
          type: "choice",
          q: "Complete the pattern: 120, 130, 140, __, 160",
          options: ["145", "150", "155", "170"],
          answer: 1
        },
    {
          type: "choice",
          q: "Complete the skip counting pattern: 250, 275, 300, __, 350",
          options: ["310", "325", "330", "340"],
          answer: 1
        },
    {
          type: "choice",
          q: "If you skip count by 50s starting from 150, what is the next number?",
          options: ["160", "200", "250", "300"],
          answer: 1
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: The Roman numeral VII represents the number 7.",
            "Statement B: The Roman numeral VII represents the number 8."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "What is the standard form of the number: three hundred forty-nine?",
          answer: "349"
        },
    {
          type: "choice",
          q: "Which standard number is represented by the Roman numeral XIV?",
          options: ["10", "14", "16", "24"],
          answer: 1
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "I am a 3-digit number. My ones digit is 8. My hundreds digit is half of my ones digit. My tens digit is 3 more than my hundreds digit. What number am I?",
      options: ["478", "874", "458", "854"],
      answer: 0
    },
    {
      type: "choice",
      q: "Which number is 10 times larger than the number represented by the Roman numeral IX?",
      options: ["90", "9", "900", "19"],
      answer: 0
    },
    {
      type: "choice",
      q: "If you count backwards by 25s starting from 1,000, what is the third number you say (not including 1,000)?",
      options: ["975", "950", "925", "900"],
      answer: 2
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: A digit in the hundreds place is 10 times greater than the same digit in the tens place.",
        "Statement B: A digit in the hundreds place is 100 times greater than the same digit in the tens place."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "I am a 3-digit number. My hundreds digit is 5. My ones digit is 3. The sum of my three digits is 14. What is the value of my tens digit?",
      answer: "6"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Representing Place Value",
        desc: "Use pencil and paper to draw a Place Value Chart. Represent the number 863 by drawing dots in the Hundreds, Tens, and Ones columns. Explain your representation to your parent or teacher.",
        labels: ["Correct number of dots in H, T, O columns", "Neatness and labeling of chart", "Accuracy in explaining place value vs value"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Standard and Expanded Forms</h3>\n                  <p class=\"ws-instruction\">Write the corresponding forms for each number below using your stylus.</p>\n                  \n                  <div class=\"ws-item-row\">\n                    <div class=\"ws-q\">1. Write in word form: <strong>458</strong></div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 80%;\"><span class=\"ws-answer\">four hundred fifty-eight</span></div>\n                  </div>\n                  \n                  <div class=\"ws-item-row\">\n                    <div class=\"ws-q\">2. Write in expanded form: <strong>709</strong></div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 80%;\"><span class=\"ws-answer\">700 + 0 + 9</span></div>\n                  </div>\n                  \n                  <div class=\"ws-item-row\">\n                    <div class=\"ws-q\">3. Convert <strong>300 + 40 + 5</strong> to standard form:</div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 40%;\"><span class=\"ws-answer\">345</span></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Place Value Table</h3>\n                  <p class=\"ws-instruction\">Write each number in the place value columns and state the value of the underlined digit.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Number</th>\n                        <th>Hundreds</th>\n                        <th>Tens</th>\n                        <th>Ones</th>\n                        <th>Value of Underlined Digit</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>3<u>4</u>5</td>\n                        <td><span class=\"ws-answer\">3</span></td>\n                        <td><span class=\"ws-answer\">4</span></td>\n                        <td><span class=\"ws-answer\">5</span></td>\n                        <td><span class=\"ws-answer\">40</span></td>\n                      </tr>\n                      <tr>\n                        <td><u>9</u>02</td>\n                        <td><span class=\"ws-answer\">9</span></td>\n                        <td><span class=\"ws-answer\">0</span></td>\n                        <td><span class=\"ws-answer\">2</span></td>\n                        <td><span class=\"ws-answer\">900</span></td>\n                      </tr>\n                      <tr>\n                        <td>81<u>6</u></td>\n                        <td><span class=\"ws-answer\">8</span></td>\n                        <td><span class=\"ws-answer\">1</span></td>\n                        <td><span class=\"ws-answer\">6</span></td>\n                        <td><span class=\"ws-answer\">6</span></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Place Value Puzzles</h3>\n                  <p class=\"ws-instruction\">Use your stylus to draw a matching line from each word description to its correct standard form number.</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 20px;\">\n                    <div class=\"ws-col-half\" style=\"font-size: 16px; line-height: 2.2;\">\n                      <div>A. 7 Hundreds, 2 Tens, 5 Ones</div>\n                      <div>B. 9 Hundreds, 0 Tens, 4 Ones</div>\n                      <div>C. 3 Hundreds, 8 Tens, 0 Ones</div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"font-size: 16px; line-height: 2.2; text-align: right; padding-right: 40px;\">\n                      <div>[ &nbsp; <span class=\"ws-answer\">B</span> &nbsp; ] &nbsp; 904</div>\n                      <div>[ &nbsp; <span class=\"ws-answer\">C</span> &nbsp; ] &nbsp; 380</div>\n                      <div>[ &nbsp; <span class=\"ws-answer\">A</span> &nbsp; ] &nbsp; 725</div>\n                    </div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK1_DATA.science = {
  color: "#10b981",
  icon: "🔬",
  title: "Science",
  subtitle: "Week 1: Senses & Observation",
  slides: [
    {
      title: "Science and the Power of Observation",
      text: "Science begins with observing the world. Observation is the act of gathering information about our environment using our senses or scientific tools. It is a fundamental skill for all scientists.",
      examples: [
        { title: "Observing a Flower", content: "A botanist looks at the petals of a yellow orchid, notices its smooth texture, and measures its width using a ruler." },
        { title: "Observing the Weather", content: "A meteorologist walks outside, feels a strong cool wind, and looks at dark grey clouds forming in the sky." }
      ]
    },
    {
      title: "The Five Sense Organs",
      image: "images/five_senses.png",
      text: "Humans have five primary sense organs: the eyes (sight), ears (hearing), nose (smell), tongue (taste), and skin (touch). These organs are specialized to collect specific types of information.",
      examples: [
        { title: "Hearing a Siren", content: "Your ears detect the sound waves of an ambulance siren passing by on the street." },
        { title: "Tasting Honey", content: "Your tongue detects the sweet chemicals present in a spoonful of natural honey." }
      ]
    },
    {
      title: "Sensory Receptors: Tiny Detectors",
      text: "Inside our sense organs are microscopic structures called receptors. Receptors are specialized biological cells that detect environmental changes, which we call stimuli (singular: stimulus).",
      examples: [
        { title: "Light Detectors", content: "Receptors in your eyes detect light rays, allowing you to see colors." },
        { title: "Pressure Detectors", content: "Receptors in your fingertips detect the squeeze of a handshake." }
      ]
    },
    {
      title: "Nervous System: The Message Pathway",
      text: "Once receptors detect a stimulus, they convert it into electrical signals called nerve impulses. These impulses travel through sensory nerves to reach the brain.",
      examples: [
        { title: "Touching a Cold Ice Cube", content: "Receptors in the skin detect coldness and send an electrical signal up your arm nerve to your spinal cord and brain." },
        { title: "Smelling Smoke", content: "Nerves in your nose send a fast signal to the brain when smoke particles enter your nasal cavity." }
      ]
    },
    {
      title: "The Brain: The Master Interpreter",
      text: "The brain receives electrical nerve signals and translates them into meaningful perceptions. The eyes only detect light, but the brain tells you that you are seeing a cat.",
      examples: [
        { title: "Recognizing a Voice", content: "Your ear detects sound waves, but your brain identifies the sound as your mother calling your name." },
        { title: "Warning of Danger", content: "Your brain interprets the smell of burning toast and alerts you that something is wrong in the kitchen." }
      ]
    },
    {
      title: "The Sense of Sight: How We See",
      text: "Light enters the eye through the pupil, passes through the lens, and hits the retina at the back of the eye. The retina contains photoreceptors that convert light into signals.",
      examples: [
        { title: "Reading a Book", content: "Light reflects off the page and enters your eye, allowing the retina to capture the shapes of letters." },
        { title: "Walking in the Dark", content: "In a dark room, your pupil widens to let in more light so your eyes can detect shapes." }
      ]
    },
    {
      title: "Photoreceptors: Rods and Cones",
      text: "The retina has two types of photoreceptors: Rods (which help us see in dim light but do not detect color) and Cones (which detect red, green, and blue colors in bright light).",
      examples: [
        { title: "Night Vision", content: "Walking at night, your rods are active, helping you see shapes in shades of grey." },
        { title: "Looking at a Rainbow", content: "In bright sunlight, your cones are active, detecting all the brilliant colors of the rainbow." }
      ]
    },
    {
      title: "The Sense of Hearing: How We Hear",
      text: "Sound waves travel through the air, enter the ear canal, and cause the eardrum to vibrate. These vibrations travel through three tiny bones to a fluid-filled structure called the cochlea.",
      examples: [
        { title: "Strumming a Guitar", content: "The vibrating strings create sound waves in the air, which make your eardrum vibrate." },
        { title: "Listening to a Drum", content: "The deep boom of a drum creates large vibrations that you can sometimes feel in your chest." }
      ]
    },
    {
      title: "Mechanoreceptors: Sound Detectors",
      text: "Inside the cochlea, fluid movement bends tiny microscopic hair cells. These hair cells are mechanoreceptors that convert mechanical movement into electrical nerve signals.",
      examples: [
        { title: "High-Pitched Whispers", content: "Very fast vibrations bend specific hair cells, which the brain interprets as a whisper." },
        { title: "Loud Thunderclaps", content: "Strong vibrations bend the hair cells forcefully, which the brain interprets as a loud sound." }
      ]
    },
    {
      title: "The Sense of Smell: Olfaction",
      text: "Chemical molecules floating in the air enter our nose when we breathe. These molecules dissolve in the mucus inside our nasal cavity and bind to olfactory receptors.",
      examples: [
        { title: "Smelling a Rose", content: "Chemicals released by the rose petals float into your nostrils and bind to your scent receptors." },
        { title: "Smelling Fresh Baking", content: "Molecules from fresh cookies travel through the air and tell your brain that food is nearby." }
      ]
    },
    {
      title: "Chemoreceptors: Scent Detectors",
      text: "Receptors that detect chemicals are called chemoreceptors. Olfactory cells in the nose are a type of chemoreceptor that can distinguish thousands of different odors.",
      examples: [
        { title: "Detecting Mint", content: "Chemoreceptors respond to mint chemicals, sending a signal that the brain interprets as fresh and cool." },
        { title: "Detecting Rotten Food", content: "Chemoreceptors detect decay chemicals, prompting your brain to feel disgust so you don't eat it." }
      ]
    },
    {
      title: "The Sense of Taste: Gustation",
      text: "Our tongue is covered in small bumps called papillae. Inside these papillae are taste buds containing chemoreceptors that detect chemical substances dissolved in saliva.",
      examples: [
        { title: "Eating an Orange", content: "As you chew, citric acid dissolves in saliva, triggering taste receptors on your tongue." },
        { title: "Drinking Salty Soup", content: "Sodium ions dissolve in your saliva and activate salt-sensitive receptors." }
      ]
    },
    {
      title: "The Five Basic Tastes",
      text: "Our tongue can detect five basic tastes: Sweet (energy-rich sugars), Salty (needed minerals), Sour (acids), Bitter (potential poisons), and Umami (savory/proteins).",
      examples: [
        { title: "Identifying Umami", content: "Tasting tomatoes, cheese, or meat broth activates umami receptors, showing the presence of proteins." },
        { title: "Identifying Bitter", content: "Tasting bitter gourd or coffee alerts the brain, a mechanism that protects animals from eating toxic plants." }
      ]
    },
    {
      title: "The Sense of Touch: Somatosensation",
      text: "The skin is our largest sense organ. It contains different types of receptors that detect light touch, heavy pressure, vibration, temperature, and pain.",
      examples: [
        { title: "Petting a Cat", content: "Light touch receptors in your skin detect the soft fur sliding across your hand." },
        { title: "Holding a Heavy Box", content: "Deep pressure receptors deep in your skin detect the weight of the box." }
      ]
    },
    {
      title: "Skin Receptors: Temperature and Pain",
      text: "Thermoreceptors detect hot and cold temperatures. Nociceptors detect tissue damage and send pain signals, which protect us from injury.",
      examples: [
        { title: "Touching Hot Soup", content: "Thermoreceptors send a hot warning signal, telling your hand to pull away quickly." },
        { title: "Stepping on a Sharp Pin", content: "Nociceptors send pain signals to your brain, alerting you to check your foot for injury." }
      ]
    },
    {
      title: "Qualitative Observations",
      text: "Qualitative observations describe the qualities or characteristics of an object using words. They focus on properties like color, shape, smell, texture, and state of matter without using numbers.",
      examples: [
        { title: "Describing a Leaf", content: "The leaf is green, heart-shaped, has a rough texture, and smells like fresh soil." },
        { title: "Describing Water", content: "The liquid is clear, odorless, and flows easily when poured." }
      ]
    },
    {
      title: "Quantitative Observations",
      text: "Quantitative observations involve numbers, measurements, and quantities. They are precise, objective, and require scientific tools to measure units like mass, temperature, or length.",
      examples: [
        { title: "Measuring a Leaf", content: "The leaf is 8 centimeters long, weighs 2 grams, and has a temperature of 24 degrees Celsius." },
        { title: "Counting Marbles", content: "There are exactly 15 round glass marbles in the beaker." }
      ]
    },
    {
      title: "Scientific Tools: The Magnifying Lens",
      text: "A magnifying lens bends light to make tiny objects appear larger. This allows scientists to make detailed qualitative observations of small structures.",
      examples: [
        { title: "Examining an Insect Wing", content: "Using a magnifying lens reveals tiny parallel veins and hairs on a fly's wing." },
        { title: "Examining Sand Grains", content: "A lens shows that sand grains are actually tiny rocks of different shapes and colors." }
      ]
    },
    {
      title: "Scientific Tools: The Thermometer",
      text: "A thermometer measures temperature, which is the amount of heat energy in an object. Scientists use the Celsius scale (°C) to record exact temperatures.",
      examples: [
        { title: "Measuring Boiling Water", content: "A digital thermometer shows boiling water is exactly 100°C." },
        { title: "Measuring Body Temperature", content: "A clinical thermometer shows a healthy student has a temperature of 37°C." }
      ]
    },
    {
      title: "Scientific Tools: Rulers and Balance Scales",
      text: "Rulers measure length in millimeters (mm) and centimeters (cm). Balance scales measure mass in grams (g) and kilograms (kg). These tools ensure precise data collection.",
      examples: [
        { title: "Measuring a Seed", content: "A plastic ruler shows a corn seed is exactly 8 millimeters wide." },
        { title: "Measuring Soil Mass", content: "A triple-beam balance shows a cup of dry loam soil has a mass of 150 grams." }
      ]
    },
    {
      title: "Observation vs. Inference",
      text: "An Observation is a statement of fact gathered directly through the senses. An Inference is a logical explanation, interpretation, or conclusion based on those observations.",
      examples: [
        { title: "Wet Grass Case", content: "Observation: The grass is wet. Inference: It rained last night (or a sprinkler watered the grass)." },
        { title: "Pet Behavior Case", content: "Observation: A dog is wagging its tail and jumping. Inference: The dog is happy to see its owner." }
      ]
    },
    {
      title: "Differentiating Fact from Guesswork",
      text: "Scientists must keep observations and inferences separate. Observations are facts that anyone can see. Inferences are explanations that must be tested with experiments.",
      examples: [
        { title: "Cracked Window", content: "Observation: The glass has a star-shaped crack. Inference: A rock hit the window." },
        { title: "Dark Sky", content: "Observation: The sky has dark grey clouds. Inference: It will rain soon." }
      ]
    },
    {
      title: "Science Process Skills: The Fair Test",
      text: "A fair test is an experiment where only one factor is changed, while all other factors are kept the same. This ensures that the results are caused by the factor we changed.",
      examples: [
        { title: "Sensory Test Setup", content: "Testing if blindfolded students can identify fruits. We keep the fruit size and temperature the same, changing only the fruit type." },
        { title: "Testing Sound Distance", content: "Testing how far sound travels. We drop the same metal coin from the same height on different surfaces." }
      ]
    },
    {
      title: "Understanding Experimental Variables",
      text: "In an experiment, the Independent Variable is the factor we change. The Dependent Variable is the factor we measure. The Controlled Variables are the factors we keep constant.",
      examples: [
        { title: "Melting Ice Experiment", content: "Independent Variable: Location (sun vs. shade). Dependent Variable: Time it takes to melt. Controlled Variables: Size of ice cube, shape of container." },
        { title: "Hearing Distance Experiment", content: "Independent: Volume of sound. Dependent: Distance at which it is heard. Controlled: Background noise, hearing test tool." }
      ]
    },
    {
      title: "Summary: Scientific Inquiry Skills",
      text: "You have learned how sense organs detect stimuli, send nerve signals to the brain, and how scientists use qualitative and quantitative observations, tools, inferences, and variables to run fair experiments.",
      examples: [
        { title: "Summary Checklist", content: "Receptors catch stimuli -> Nerves send signals -> Brain understands -> Scientific tools measure -> Inferences explain." },
        { title: "Become a Scientist", content: "Practice daily: look closely at objects, measure them precisely, and ask: 'Why does this happen?'" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "Which organ is responsible for sending sound signals to your brain?",
          options: ["Eye", "Skin", "Ear", "Nose"],
          answer: 2
        },
    {
          type: "choice",
          q: "What is a stimulus in science?",
          options: ["A tool for measuring mass", "A change in the environment that causes a reaction", "A type of nerve cell", "An inference made by a doctor"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which type of receptor detects light waves in our eyes?",
          options: ["Chemoreceptors", "Thermoreceptors", "Photoreceptors", "Mechanoreceptors"],
          answer: 2
        },
    {
          type: "choice",
          q: "What connects our sensory receptors to our brain?",
          options: ["Muscles", "Sensory Nerves", "Blood vessels", "Bones"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which organ translates electrical signals into what we perceive as sight, sound, or smell?",
          options: ["Heart", "Lungs", "Brain", "Skin"],
          answer: 2
        },
    {
          type: "choice",
          q: "In dim light, which photoreceptor cells help us see shapes and movements?",
          options: ["Cones", "Rods", "Hair cells", "Taste buds"],
          answer: 1
        },
    {
          type: "choice",
          q: "In bright light, which cells are active in helping us see red, green, and blue colors?",
          options: ["Rods", "Cones", "Thermoreceptors", "Nociceptors"],
          answer: 1
        },
    {
          type: "choice",
          q: "What causes our eardrum to vibrate, starting the process of hearing?",
          options: ["Chemicals in the air", "Sound waves", "Light rays", "Thermal energy"],
          answer: 1
        },
    {
          type: "choice",
          q: "Where are the mechanoreceptive hair cells located inside our ear?",
          options: ["Eardrum", "Ear canal", "Cochlea", "Auditory nerve"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which receptors in the nose detect chemical molecules floating in the air?",
          options: ["Photoreceptors", "Olfactory chemoreceptors", "Mechanoreceptors", "Thermoreceptors"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which structures on our tongue contain receptors that detect sweet, sour, salty, and bitter chemicals?",
          options: ["Papillae", "Pupils", "Nociceptors", "Cochlea"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which basic taste is triggered by protein-rich foods like meat or cheese?",
          options: ["Sweet", "Bitter", "Sour", "Umami"],
          answer: 3
        },
    {
          type: "choice",
          q: "Which receptors in the skin warn us of potential danger by detecting tissue damage?",
          options: ["Photoreceptors", "Nociceptors", "Thermoreceptors", "Chemoreceptors"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is a qualitative observation of an apple?",
          options: ["It weighs 150 grams", "It is bright red and sweet", "It is 7 centimeters wide", "It has 5 brown seeds"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is a quantitative observation?",
          options: ["The water feels warm", "The water is green", "The water is 45 degrees Celsius", "The water tastes salty"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which scientific tool is best for observing the detailed layout of veins on an insect's wing?",
          options: ["Thermometer", "Magnifying lens", "Ruler", "Balance scale"],
          answer: 1
        },
    {
          type: "choice",
          q: "What does a thermometer measure in degrees Celsius?",
          options: ["Length of an object", "Mass of a material", "Temperature of a substance", "Volume of a liquid"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which tool is used to measure the mass of soil in grams?",
          options: ["Ruler", "Thermometer", "Balance scale", "Measuring cup"],
          answer: 2
        },
    {
          type: "choice",
          q: "If you observe that a slice of bread has green fuzzy patches on it, which of the following is an observation?",
          options: ["Someone spilled green ink on it", "The bread has green fuzzy spots", "The bread is toxic and unsafe", "The bread has been sitting out for three weeks"],
          answer: 1
        },
    {
          type: "choice",
          q: "A student observes dark clouds in the sky and says, 'It is going to rain.' What is the statement 'It is going to rain'?",
          options: ["Observation", "Inference", "Variable", "Quantitative measurement"],
          answer: 1
        },
    {
          type: "choice",
          q: "In an experiment, what is the term for the factor that the scientist intentionally changes?",
          options: ["Dependent Variable", "Independent Variable", "Controlled Variable", "Constant Observation"],
          answer: 1
        },
    {
          type: "choice",
          q: "What are variables that must be kept exactly the same during an experiment to make it a fair test?",
          options: ["Independent Variables", "Controlled Variables", "Dependent Variables", "Inferences"],
          answer: 1
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: An observation is a direct fact gathered by our senses, while an inference is an explanation based on those observations.",
            "Statement B: An inference is a direct fact gathered by our senses, while an observation is an explanation based on those inferences."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "What type of skin receptors detect hot and cold temperatures?",
          answer: "thermoreceptors"
        },
    {
          type: "choice",
          q: "Which human organ contains receptors that detect temperature changes (heat and cold) when you touch a cup?",
          options: ["Eye", "Ear", "Nose", "Skin"],
          answer: 3
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "If you walk from a bright sunny yard into a dark room, why can you not see colors immediately?",
      options: [
        "Your cones need bright light to detect color, and in dim light, only your rods (which see in grey) are active.",
        "Your eyes temporarily shut down all photoreceptors in dark places.",
        "Your brain forgets how to translate color in the dark.",
        "Rods are destroyed by dark environments."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "In an experiment testing how hot water affects sugar dissolving speed, what is the dependent variable?",
      options: [
        "The temperature of the water",
        "The time it takes for the sugar to dissolve",
        "The amount of sugar used",
        "The type of cup used"
      ],
      answer: 1
    },
    {
      type: "choice",
      q: "Why do scientists use tools like thermometers and rulers instead of just relying on their senses?",
      options: [
        "Tools are cheaper than human senses.",
        "Senses can be easily fooled and are subjective, while tools provide objective, quantitative data.",
        "Senses cannot detect any changes in the environment.",
        "Tools make the experiments take longer."
      ],
      answer: 1
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: Sound waves make the eardrum vibrate, which is converted to electrical signals by hair cells in the cochlea.",
        "Statement B: Sound waves bind to chemoreceptors in the cochlea, which send light waves to the retina."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "What is the name of the scientific test where only the independent variable is changed, and all other variables are kept constant?",
      answer: "fair test"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Observation and Inference Task",
        desc: "Find any household object (like a fruit, leaf, or toy). Write down three qualitative observations, one quantitative observation (use a ruler or estimation), and one inference about how it was made or used. Share your findings.",
        labels: ["Three clear qualitative observations", "One quantitative observation with units", "One logical, distinct inference"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Senses Matching</h3>\n                  <p class=\"ws-instruction\">Write the name of the primary Sense Organ (Eyes, Ears, Nose, Tongue, Skin) used for each observation.</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 20px;\">1. The sweet taste of ripe mangoes: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Tongue</span></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. Hearing the chirping of birds at sunrise: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Ears</span></div></div>\n                    <div style=\"margin-bottom: 20px;\">3. Feeling that a metal spoon is cold: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Skin</span></div></div>\n                    <div style=\"margin-bottom: 20px;\">4. Noting that the smoke from a fire is black: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Eyes</span></div></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Object Observation Sketch</h3>\n                  <p class=\"ws-instruction\">Pick any object in your room. Draw it inside the box, and list three physical properties using your senses.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"drawing-box\" style=\"height: 220px;\">\n                        <span>Draw object here</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <p>Properties list:</p>\n                      <ol>\n                        <li>Color: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"><span class=\"ws-answer\">Varies (e.g. Red)</span></div></li>\n                        <li style=\"margin-top: 15px;\">Texture: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"><span class=\"ws-answer\">Varies (e.g. Smooth)</span></div></li>\n                        <li style=\"margin-top: 15px;\">Size (cm): <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"><span class=\"ws-answer\">Varies (e.g. 15 cm)</span></div></li>\n                      </ol>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Sensory Observation Log</h3>\n                  <p class=\"ws-instruction\">Write down the primary sense organ used to observe each item and list one descriptive property.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Object to Observe</th>\n                        <th>Primary Sense Organ</th>\n                        <th>Sensory Description (e.g. Color, Texture, Sound)</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1. Hot Cup of Cocoa</td>\n                        <td><span class=\"ws-answer\">Tongue / Skin / Nose</span></td>\n                        <td><span class=\"ws-answer\">Sweet / Hot / Chocolate smell</span></td>\n                      </tr>\n                      <tr>\n                        <td>2. Chirping Bird in a Tree</td>\n                        <td><span class=\"ws-answer\">Ears / Eyes</span></td>\n                        <td><span class=\"ws-answer\">High pitch / Small brown bird</span></td>\n                      </tr>\n                      <tr>\n                        <td>3. A slice of yellow lemon</td>\n                        <td><span class=\"ws-answer\">Tongue / Eyes</span></td>\n                        <td><span class=\"ws-answer\">Sour taste / Bright yellow</span></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
  }
};

window.WEEK1_DATA.english = {
  color: "#3b82f6",
  icon: "🙋‍♂️",
  title: "English",
  subtitle: "Week 1: Self-Introduction & 2-Step Directions",
  slides: [
    {
      title: "Introducing Yourself: The Basics",
      text: "A self-introduction is when you tell others about yourself. It helps people know who you are and builds friendships. Standard self-introductions include your name, age, and grade level.",
      examples: [
        { title: "Example 1", content: "'Good morning! My name is Clara. I am eight years old, and I study in Grade 3.'" },
        { title: "Example 2", content: "'Hello, everyone! I am Marcus. I am nine years old, and my school is Blue Valley Elementary.'" }
      ]
    },
    {
      title: "Adding Personal Details",
      text: "You can make your introduction more interesting by sharing details like your hometown, your family members, or your favorite hobbies. This helps people find things they have in common with you.",
      examples: [
        { title: "Example 1", content: "'I live in Quezon City with my parents and older brother. In my free time, I love playing soccer.'" },
        { title: "Example 2", content: "'I grew up in Cebu. I live with my grandmother, and my favorite hobby is drawing cartoon animals.'" }
      ]
    },
    {
      title: "Using Subject Pronouns correctly",
      text: "When introducing yourself, you use the subject pronoun 'I'. When speaking about your family or a friend, you use pronouns like 'He', 'She', or 'They'. This makes your speech clear.",
      examples: [
        { title: "Example 1", content: "'I love reading. This is my sister, Anna. She likes to play the piano.'" },
        { title: "Example 2", content: "'My father is a teacher. He teaches science. They are very supportive parents.'" }
      ]
    },
    {
      title: "Using Possessive Pronouns",
      text: "Possessive pronouns like 'my', 'his', 'her', and 'our' show ownership. They help you describe relationships, toys, or home locations in your introductions.",
      examples: [
        { title: "Example 1", content: "'My school bag is blue. My brother says his bag is black.'" },
        { title: "Example 2", content: "'This is our classroom. Her desk is next to mine.'" }
      ]
    },
    {
      title: "Friendly Greeting Expressions",
      text: "Always begin an introduction with a polite greeting. Depending on the time of day, you can use 'Good morning', 'Good afternoon', or a simple 'Hello' to make others feel welcome.",
      examples: [
        { title: "Morning Greeting", content: "'Good morning, teacher and classmates! It is nice to meet you today.'" },
        { title: "Casual Greeting", content: "'Hi! My name is Jose. I am excited to join the Grade 3 science club.'" }
      ]
    },
    {
      title: "Closing Expressions",
      text: "Finish your introduction with a polite closing phrase. This shows respect and signal that you are finished speaking.",
      examples: [
        { title: "Closing 1", content: "'Thank you for listening. Have a wonderful day!'" },
        { title: "Closing 2", content: "'I am happy to be in your class. Thank you very much.'" }
      ]
    },
    {
      title: "Vocal Delivery: Volume and Tone",
      text: "When speaking in front of a group, you must use a clear voice and appropriate volume. Your voice should be loud enough for the person at the back of the room to hear clearly.",
      examples: [
        { title: "Too Quiet", content: "Whispering so that others must lean forward to hear you. (Avoid this)" },
        { title: "Just Right", content: "Speaking in a steady, confident voice as if you are talking to a group of friends." }
      ]
    },
    {
      title: "Body Language: Eye Contact",
      text: "Eye contact means looking at the eyes of the people listening to you. It shows that you are confident, honest, and interested in connecting with your audience.",
      examples: [
        { title: "Good Eye Contact", content: "Looking around the room, smiling, and making eye contact with different classmates." },
        { title: "Poor Eye Contact", content: "Staring down at your shoes or the ceiling while introducing yourself." }
      ]
    },
    {
      title: "Body Language: Posture and Smile",
      text: "Stand tall with your shoulders relaxed. Avoid slouching or fidgeting with your hands. A warm smile makes you look friendly and approachable.",
      examples: [
        { title: "Confident Posture", content: "Standing straight on both feet with your hands relaxed at your sides or holding a small notes card." },
        { title: "Fidgeting Posture", content: "Leaning against the wall, crossing your arms tightly, or tapping your feet rapidly." }
      ]
    },
    {
      title: "Listening Skills: Being a Good Audience",
      text: "When a classmate is introducing themselves, pay attention. Sit quietly, look at the speaker, and clap politely when they finish speaking.",
      examples: [
        { title: "Active Listening", content: "Nodding your head when a classmate mentions they like the same video game as you." },
        { title: "Distracted Listening", content: "Doodling in your notebook or whispering to your neighbor while someone is speaking." }
      ]
    },
    {
      title: "Asking Follow-Up Questions",
      text: "After a classmate introduces themselves, you can ask polite questions to learn more. This is an excellent way to start a conversation.",
      examples: [
        { title: "Example 1", content: "'Hi Clara! You mentioned you like drawing. What kinds of animals do you draw?'" },
        { title: "Example 2", content: "'Hello Marcus! What soccer team do you play for?'" }
      ]
    },
    {
      title: "Introducing a Classmate",
      text: "Sometimes you have to introduce a friend or classmate. Use their correct name, pronouns, and share one interesting detail about them.",
      examples: [
        { title: "Introducing a Friend", content: "'This is my friend, Leo. He is from Iloilo. He is very good at solving puzzles.'" },
        { title: "Introducing a Partner", content: "'Classmates, this is my partner, Sarah. She loves reading science fiction stories.'" }
      ]
    },
    {
      title: "What are Multi-Step Directions?",
      text: "Directions are instructions that tell you how to do something. Multi-step directions contain two or more steps that must be followed in a specific order.",
      examples: [
        { title: "Recipe Directions", content: "First, add water to the pot. Second, boil the water. (If you skip step 1, you damage the pot!)" },
        { title: "Game Rules", content: "First, roll the dice. Second, move your token forward." }
      ]
    },
    {
      title: "Sequence Words in Directions",
      text: "Sequence words tell us the order of steps. Words like 'First', 'Second', 'Next', 'Then', and 'Finally' make instructions easy to follow.",
      examples: [
        { title: "Example 1", content: "'First, open your book. Next, read page five.'" },
        { title: "Example 2", content: "'First, pick up your pencil. Then, write your name at the top of the paper.'" }
      ]
    },
    {
      title: "Why Order Matters in Directions",
      text: "Following directions in the wrong order can lead to mistakes or failures. Doing the steps sequentially is crucial for a successful result.",
      examples: [
        { title: "Art Class", content: "If you glue the paper before cutting it, you will get glue on your scissors. You must cut first, then glue." },
        { title: "Washing Hands", content: "Apply soap first, then rinse with water. Doing it in reverse removes the soap before it cleans." }
      ]
    },
    {
      title: "Listening to 2-Step Directions",
      text: "A 2-step direction requires you to perform two actions. Listen carefully to the entire instruction before starting the first step.",
      examples: [
        { title: "Classroom Rule", content: "'Stand up and line up quietly by the door.'" },
        { title: "Science Lab", content: "'Put on your safety goggles and sit in your assigned seat.'" }
      ]
    },
    {
      title: "Listening to 3-Step Directions",
      text: "A 3-step direction contains three separate actions. You can repeat the steps quietly in your mind to help you remember them.",
      examples: [
        { title: "Writing Task", content: "'First, take out your workbook. Next, turn to page ten. Finally, answer question three.'" },
        { title: "Art Activity", content: "'Cut out the triangle, color it green, and glue it to your paper.'" }
      ]
    },
    {
      title: "Identifying Key Action Verbs in Directions",
      text: "Directions always begin with action verbs. Finding verbs like 'fold', 'draw', 'write', 'stand', or 'open' tells you exactly what action to take.",
      examples: [
        { title: "Underlining Verbs", content: "In 'Fold the paper and color it red', the action verbs are 'Fold' and 'color'." },
        { title: "Listening for Verbs", content: "In 'Clean your desk and sit down', the verbs are 'Clean' and 'sit'." }
      ]
    },
    {
      title: "Following Directions at Home",
      text: "We follow multi-step directions at home to help our family and maintain order. Listening closely to parents is an important practice.",
      examples: [
        { title: "Chores direction", content: "'First, take out the garbage bag. Next, place a new empty bag in the bin.'" },
        { title: "Getting Ready", content: "'Put on your shoes and grab your school backpack.'" }
      ]
    },
    {
      title: "Directions in Science Experiments",
      text: "Science experiments require following directions exactly. A small mistake in the sequence can ruin the experiment or be unsafe.",
      examples: [
        { title: "Mixing Liquids", content: "'First, measure 50 mL of water. Next, add three drops of blue dye. Finally, stir gently.'" },
        { title: "Using a Lens", content: "'Hold the magnifying lens near your eye, then move the leaf closer until it is in focus.'" }
      ]
    },
    {
      title: "Clarifying Directions: Asking for Help",
      text: "If you do not understand or forget a step in the directions, it is important to ask polite questions to clarify. Do not guess.",
      examples: [
        { title: "Polite Request 1", content: "'Excuse me, teacher. Could you please repeat the second step?'" },
        { title: "Polite Request 2", content: "'Pardon me, did you say we should write our name first or color the circle first?'" }
      ]
    },
    {
      title: "Visual Directions: Icons and Diagrams",
      text: "Directions can also be presented as icons or drawings. Diagrams show steps visually, which is very helpful for complex tasks.",
      examples: [
        { title: "Folding Paper", content: "Drawings of arrows showing how to fold paper to make an airplane." },
        { title: "Building Blocks", content: "Step-by-step images showing where to attach each plastic block." }
      ]
    },
    {
      title: "Giving Directions to Others",
      text: "When you give directions to a classmate, speak slowly, use simple action verbs, and use sequence words like first, next, and finally.",
      examples: [
        { title: "Helping a classmate", content: "'First, click on the blue button. Next, type your name in the box.'" },
        { title: "Library task", content: "'Pick up the book, then place it on the top shelf.'" }
      ]
    },
    {
      title: "Classroom Routines: Multi-Step Daily Tasks",
      text: "Our school days are filled with routines that follow directions. Knowing what to do automatically makes our classroom run smoothly.",
      examples: [
        { title: "Morning Routine", content: "'First, hang your bag on the hook. Next, submit your homework in the blue bin.'" },
        { title: "Dismissal Routine", content: "'Pack your pencils, clean your desk, and wait for your row to be called.'" }
      ]
    },
    {
      title: "Summary: Communication and Directions",
      text: "You have learned how to introduce yourself and others confidently using correct body language, and how to follow and give multi-step directions using sequence words and action verbs.",
      examples: [
        { title: "Top Rules", content: "Greet politely -> Stand tall -> Look at eyes -> Speak clearly -> Listen to all steps -> Follow order." },
        { title: "Daily Challenge", content: "Try introducing yourself to a new friend today, and practice following school instructions in order!" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "Which of the following is the most polite morning greeting to start a self-introduction?",
          options: ["Goodbye, classmates!", "Hey there!", "Good morning, teacher and classmates!", "What's up?"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which pronoun should you use when introducing yourself?",
          options: ["He", "She", "They", "I"],
          answer: 3
        },
    {
          type: "choice",
          q: "Which pronoun is best to introduce your sister?",
          options: ["He", "She", "It", "They"],
          answer: 1
        },
    {
          type: "choice",
          q: "What does eye contact show when you are speaking to others?",
          options: ["That you are tired", "That you are confident and listening", "That you want to leave", "That you are reading something"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is an example of good body language during an introduction?",
          options: ["Slouching and looking at the floor", "Crossing your arms and frowning", "Standing tall and smiling", "Tapping your feet and looking away"],
          answer: 2
        },
    {
          type: "choice",
          q: "How should you behave when a classmate is introducing themselves?",
          options: ["Talk to your neighbor", "Listen quietly and pay attention", "Read a book", "Draw on your desk"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which sentence uses a possessive pronoun correctly to describe a school bag?",
          options: ["This is my bag.", "This is he bag.", "This is they bag.", "This is she bag."],
          answer: 0
        },
    {
          type: "choice",
          q: "What is the best way to end your self-introduction?",
          options: ["I want to go home now.", "Thank you for listening.", "I am done.", "Goodbye forever."],
          answer: 1
        },
    {
          type: "choice",
          q: "What pronoun should you use to talk about your parents?",
          options: ["He", "She", "It", "They"],
          answer: 3
        },
    {
          type: "choice",
          q: "What does it mean to follow multi-step directions?",
          options: ["To skip instructions", "To do things in a random order", "To follow two or more steps in the correct order", "To write your own rules"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which of the following is a sequence word used in directions?",
          options: ["Apple", "Quickly", "First", "Write"],
          answer: 2
        },
    {
          type: "choice",
          q: "If the direction is: 'Open your book, then write your name.' What should you do first?",
          options: ["Write your name", "Open your book", "Close your book", "Ask for a pencil"],
          answer: 1
        },
    {
          type: "choice",
          q: "What happens if you follow directions in the wrong order?",
          options: ["You will always succeed", "You might make a mistake", "The task becomes easier", "Nothing changes"],
          answer: 1
        },
    {
          type: "choice",
          q: "In the instruction 'Fold the blue paper in half', what is the action verb?",
          options: ["Fold", "Blue", "Paper", "Half"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which of these is a 2-step direction?",
          options: [
            "Please stand up.",
            "Color the circle.",
            "Stand up and push in your chair.",
            "Take out your pencil, write your name, and hand in your paper."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "Which of these is a 3-step direction?",
          options: [
            "Sit down.",
            "Clean your table and wash your hands.",
            "Take out your book, turn to page 5, and read paragraph 1.",
            "Line up quietly."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "If the teacher says: 'First, write the date. Next, draw a circle. Finally, color it yellow.' What is the last step?",
          options: ["Write the date", "Draw a circle", "Color it yellow", "Get a yellow crayon"],
          answer: 2
        },
    {
          type: "choice",
          q: "What is the best way to ask for help if you did not understand a direction?",
          options: [
            "Pardon me, could you please repeat the directions?",
            "I will not do this.",
            "Hey! Tell me what to do.",
            "Raise your hand and say nothing."
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "Which action verb fits a writing direction?",
          options: ["Jump", "Listen", "Write", "Run"],
          answer: 2
        },
    {
          type: "choice",
          q: "If you want to introduce your new classmate, what can you say?",
          options: [
            "This is my classmate, Leo. He is from Iloilo.",
            "I am Leo. I am from Iloilo.",
            "She is Leo. She is from Iloilo.",
            "My bag is Leo. It is from Iloilo."
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "Why do science experiments require following directions exactly?",
          options: ["To finish faster", "To keep the lab clean", "To be safe and get accurate results", "To waste materials"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which word represents a closing statement in an introduction?",
          options: ["Hello", "Good morning", "Thank you", "First"],
          answer: 2
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: When introducing a friend, you should use pronouns like 'he' or 'she'.",
            "Statement B: When introducing yourself, you should use the pronoun 'they'."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "What sequence word is usually used to describe the very last step in directions?",
          answer: "finally"
        },
    {
          type: "choice",
          q: "If your teacher says, 'First, open your book. Next, read page 5,' what is the first thing you should do?",
          options: ["Read page 5", "Close your book", "Open your book", "Write your name"],
          answer: 2
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "You are given these instructions: 'First, put on your shoes. Next, put on your socks.' Why is this instruction incorrect?",
      options: [
        "You must put on socks before shoes.",
        "Shoes and socks are not worn together.",
        "The sequence words are missing.",
        "There are no action verbs."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "Which introduction is written with correct grammar and capitalization?",
      options: [
        "my name is anna. i live in Quezon City.",
        "My name is Anna. I live in Quezon City.",
        "My name is anna. i live in quezon city.",
        "my name is Anna. I live in quezon city."
      ],
      answer: 1
    },
    {
      type: "choice",
      q: "Which sentence represents a clear 3-step direction for drawing a house?",
      options: [
        "Draw a square, add a triangle roof, and draw a door.",
        "Draw a house.",
        "First, draw a house with a roof and door.",
        "You can draw a house if you have a pencil."
      ],
      answer: 0
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: Self-introductions help build connections, and following directions ensures tasks are completed successfully.",
        "Statement B: Self-introductions should always be whispered, and directions should be followed in a random order."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "In the direction: 'Draw a circle and write the word red inside it.' What is the first action verb?",
      answer: "draw"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Classroom Introduction Task",
        desc: "Practice introducing yourself. Stand up, smile, make eye contact, and say: 'Good day! My name is [Name]. I am eight years old, and my favorite hobby is [Hobby].' Practice this in front of a parent, teacher, or peer.",
        labels: ["Appropriate voice volume and clear pronunciation", "Confident body posture and eye contact", "Completed all details in the introduction template"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Self-Introduction Card</h3>\n                  <p class=\"ws-instruction\">Use your stylus to write complete sentences in the blank lines below.</p>\n                  \n                  <div style=\"border: 2px solid var(--border-color); padding: 15px; border-radius: 8px; background: #fafafa;\">\n                    <div style=\"margin-bottom: 25px;\">My name is: <div class=\"writing-line inline-line\" style=\"width: 70%; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">Matteo</span></div></div>\n                    <div style=\"margin-bottom: 25px;\">I am <div class=\"writing-line inline-line\" style=\"width: 100px; display:inline-block; margin-left:5px;\"><span class=\"ws-answer\">8</span></div> years old. My birthday is on: <div class=\"writing-line inline-line\" style=\"width: 40%; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">October 12</span></div></div>\n                    <div style=\"margin-bottom: 10px;\">My favorite school subject is: <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">Science</span></div></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Following Two-Step Directions</h3>\n                  <p class=\"ws-instruction\">Read the direction and perform the action using the drawing tool in the boxes.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Draw a medium square. Next, draw a small circle inside it.</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Draw a horizontal line. Then, draw a triangle on top of it.</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Identifying Nouns</h3>\n                  <p class=\"ws-instruction\">Underline the proper noun once and the common noun twice in each sentence below.</p>\n                  \n                  <div style=\"font-size: 16px; line-height: 1.8; margin-top: 20px;\">\n                    <div style=\"margin-bottom: 25px;\">1. Matteo plays with his cute dog in the park.\n                      <div class=\"ws-answer\" style=\"margin-top: 5px; font-size: 14px;\">[Proper Noun: Matteo (underline once) | Common Nouns: dog, park (underline twice)]</div>\n                    </div>\n                    <div style=\"margin-bottom: 25px;\">2. The capital city of the Philippines is Manila.\n                      <div class=\"ws-answer\" style=\"margin-top: 5px; font-size: 14px;\">[Proper Nouns: Philippines, Manila (underline once) | Common Noun: city (underline twice)]</div>\n                    </div>\n                    <div style=\"margin-bottom: 25px;\">3. Doctor Santos works in a clean hospital.\n                      <div class=\"ws-answer\" style=\"margin-top: 5px; font-size: 14px;\">[Proper Noun: Doctor Santos (underline once) | Common Noun: hospital (underline twice)]</div>\n                    </div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK1_DATA.filipino = {
  color: "#ef4444",
  icon: "🇵🇭",
  title: "Filipino",
  subtitle: "Week 1: Pangngalang Pantangi at Pambalana",
  slides: [
    {
      title: "Ano ang Pangngalan?",
      text: "<span class=\"fil-sentence\" data-translation=\"A noun is a part of speech that refers to the name of a person, thing, animal, place, or event.\">Ang pangngalan ay bahagi ng pananalita na tumutukoy sa ngalan ng tao, bagay, hayop, lugar, o pangyayari.</span>",
      examples: [
        { title: "Ngalan ng Tao", content: "<span class=\"fil-sentence\" data-translation=\"The word 'guro' (teacher) or 'bata' (child) is a noun for a person.\">Ang salitang 'guro' o 'bata' ay ngalan ng tao.</span>" },
        { title: "Ngalan ng Lugar", content: "<span class=\"fil-sentence\" data-translation=\"The word 'paaralan' (school) is a noun for a place.\">Ang salitang 'paaralan' ay ngalan ng lugar.</span>" }
      ]
    },
    {
      title: "Dalawang Uri ng Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Nouns are divided into two main types: Proper Nouns (Pantangi) and Common Nouns (Pambalana).\">Ang pangngalan ay hinahati sa dalawang pangunahing uri: Pangngalang Pantangi at Pangngalang Pambalana.</span>",
      examples: [
        { title: "Pantangi", content: "<span class=\"fil-sentence\" data-translation=\"'Ginoong Santos' is a specific name of a teacher (Proper Noun).\">Ang 'Ginoong Santos' ay tiyak na ngalan ng isang guro.</span>" },
        { title: "Pambalana", content: "<span class=\"fil-sentence\" data-translation=\"'Guro' is a general name of a teacher (Common Noun).\">Ang 'guro' ay karaniwang ngalan ng nagtuturo.</span>" }
      ]
    },
    {
      title: "Ngalan ng Tao sa Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Nouns for people can be general (common) or specific (proper) names of individuals.\">Ang ngalan ng tao ay maaaring karaniwan o tiyak na pangalan ng isang indibidwal.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Nanay' (Mother) is common, while 'Nanay Maria' is proper.\">Ang 'nanay' ay pambalana, habang ang 'Nanay Maria' ay pantangi.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Doktor' (Doctor) is common, while 'Doktor Cruz' is proper.\">Ang 'doktor' ay pambalana, habang ang 'Doktor Cruz' ay pantangi.</span>" }
      ]
    },
    {
      title: "Ngalan ng Bagay sa Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Nouns for things refer to objects around us, both living and non-living.\">Ang ngalan ng bagay ay tumutukoy sa mga gamit o bagay sa paligid natin.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Lapis' (pencil) is common, while 'Mongol' is proper.\">Ang 'lapis' ay pambalana, habang ang 'Mongol' ay pantangi.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Sapatos' (shoes) is common, while 'Nike' is proper.\">Ang 'sapatos' ay pambalana, habang ang 'Nike' ay pantangi.</span>" }
      ]
    },
    {
      title: "Ngalan ng Hayop sa Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Nouns for animals refer to different kinds of creatures. They can be species names or pets names.\">Ang ngalan ng hayop ay tumutukoy sa mga nilalang. Ito ay maaaring uri ng hayop o pangalan ng alagang hayop.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Aso' (dog) is common, while 'Bantay' is proper.\">Ang 'aso' ay pambalana, habang ang 'Bantay' ay pantangi.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Pusa' (cat) is common, while 'Muníng' is proper.\">Ang 'pusa' ay pambalana, habang ang 'Muníng' ay pantangi.</span>" }
      ]
    },
    {
      title: "Ngalan ng Lugar sa Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Nouns for places refer to geographic locations, cities, buildings, or rooms.\">Ang ngalan ng lugar ay tumutukoy sa mga lokasyon, lungsod, gusali, o silid.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Lungsod' (city) is common, while 'Lungsod ng Maynila' is proper.\">Ang 'lungsod' ay pambalana, habang ang 'Lungsod ng Maynila' ay pantangi.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Bansa' (country) is common, while 'Pilipinas' (Philippines) is proper.\">Ang 'bansa' ay pambalana, habang ang 'Pilipinas' ay pantangi.</span>" }
      ]
    },
    {
      title: "Ngalan ng Pangyayari sa Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Nouns for events refer to occasions, celebrations, holidays, or historic dates.\">Ang ngalan ng pangyayari ay tumutukoy sa mga okasyon, pagdiriwang, o mahahalagang petsa.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Pasko' (Christmas) is a proper noun for a holiday.\">Ang 'Pasko' ay pantanging ngalan ng pagdiriwang.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Kaarawan' (birthday) is a common noun, while 'Bagong Taon' (New Year) is proper.\">Ang 'kaarawan' ay pambalana, samantalang ang 'Bagong Taon' ay pantangi.</span>" }
      ]
    },
    {
      title: "Ang Pangngalang Pantangi (Proper Nouns)",
      text: "<span class=\"fil-sentence\" data-translation=\"Proper nouns are specific or particular names of people, things, places, animals, or events.\">Ang pangngalang pantangi ay ang tiyak o tanging ngalan ng tao, bagay, hayop, lugar, o pangyayari.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Jose Rizal' is a proper noun because it is a specific name of a hero.\">Ang 'Jose Rizal' ay pantangi dahil ito ay tiyak na ngalan ng bayani.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Jollijeep' is a proper noun for a specific food cart.\">Ang 'Jollijeep' ay pantangi dahil ito ay tiyak na ngalan ng tindahan.</span>" }
      ]
    },
    {
      title: "Sulat ng Pantangi: Malaking Titik",
      text: "<span class=\"fil-sentence\" data-translation=\"Proper nouns always begin with a capital letter, no matter where they are placed in a sentence.\">Ang pangngalang pantangi ay laging nagsisimula sa malaking titik, kahit saan man ito ilagay sa pangungusap.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"Writing 'manila' with a small letter is wrong. It must be 'Manila'.\">Mali ang pagsulat ng 'manila'. Dapat ito ay isulat bilang 'Manila'.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"Writing 'maria' is incorrect. It must be 'Maria'.\">Mali ang pagsulat ng 'maria'. Dapat ito ay isulat bilang 'Maria'.</span>" }
      ]
    },
    {
      title: "Pantangi sa Tao: Mga Halimbawa",
      text: "<span class=\"fil-sentence\" data-translation=\"Proper nouns for people include full names, titles, and nicknames of specific persons.\">Kasama sa pantangi sa tao ang buong pangalan, titulo, at palayaw ng mga tiyak na indibidwal.</span>",
      examples: [
        { title: "Pangalan ng Guro", content: "<span class=\"fil-sentence\" data-translation=\"'Gng. Santos' (Mrs. Santos) is a specific title and name.\">Ang 'Gng. Santos' ay tiyak na ngalan ng guro.</span>" },
        { title: "Pangalan ng Kaklase", content: "<span class=\"fil-sentence\" data-translation=\"'Lito' and 'Ana' are proper names of children.\">Ang 'Lito' at 'Ana' ay mga tiyak na ngalan ng bata.</span>" }
      ]
    },
    {
      title: "Pantangi sa Lugar: Mga Halimbawa",
      text: "<span class=\"fil-sentence\" data-translation=\"Proper nouns for places include specific names of provinces, cities, streets, schools, and countries.\">Kasama sa pantangi sa lugar ang mga tiyak na ngalan ng lalawigan, lungsod, kalye, paaralan, at bansa.</span>",
      examples: [
        { title: "Pangalan ng Paaralan", content: "<span class=\"fil-sentence\" data-translation=\"'Ramon Magsaysay Elementary School' is a specific name of a school.\">Ang 'Ramon Magsaysay Elementary School' ay tiyak na ngalan ng paaralan.</span>" },
        { title: "Pangalan ng Kalye", content: "<span class=\"fil-sentence\" data-translation=\"'Kalye Rizal' (Rizal Street) is a specific street name.\">Ang 'Kalye Rizal' ay tiyak na ngalan ng daan.</span>" }
      ]
    },
    {
      title: "Pantangi sa Bagay at Hayop",
      text: "<span class=\"fil-sentence\" data-translation=\"Proper nouns for things and animals include specific brand names and pet names.\">Kasama sa pantangi sa bagay at hayop ang mga tiyak na tatak (brands) at pangalan ng alaga.</span>",
      examples: [
        { title: "Tatak ng Gadget", content: "<span class=\"fil-sentence\" data-translation=\"'Samsung' and 'iPad' are proper nouns for brands.\">Ang 'Samsung' at 'iPad' ay mga pantanging ngalan ng gadget.</span>" },
        { title: "Pangalan ng Alaga", content: "<span class=\"fil-sentence\" data-translation=\"'Snoopy' is a proper noun for a specific dog.\">Ang 'Snoopy' ay pantanging ngalan ng aso.</span>" }
      ]
    },
    {
      title: "Ang Pangngalang Pambalana (Common Nouns)",
      text: "<span class=\"fil-sentence\" data-translation=\"Common nouns are general names of people, things, places, animals, or events. They do not refer to a specific brand or person.\">Ang pangngalang pambalana ay ang karaniwang ngalan ng tao, bagay, hayop, lugar, o pangyayari. Hindi ito tumutukoy sa tiyak na tatak o tao.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"'Aklat' (book) is a common noun because it refers to any book.\">Ang 'aklat' ay pambalana dahil ito ay tumutukoy sa kahit anong aklat.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"'Pusa' (cat) is a common noun because it refers to any cat.\">Ang 'pusa' ay pambalana dahil ito ay tumutukoy sa kahit anong pusa.</span>" }
      ]
    },
    {
      title: "Sulat ng Pambalana: Maliit na Titik",
      text: "<span class=\"fil-sentence\" data-translation=\"Common nouns begin with a small letter, unless they are placed at the very beginning of a sentence.\">Ang pangngalang pambalana ay isinusulat sa maliit na titik, maliban na lamang kung ito ay nasa simula ng pangungusap.</span>",
      examples: [
        { title: "Sa loob ng pangungusap", content: "<span class=\"fil-sentence\" data-translation=\"'Ang aking nanay ay mabait.' Note 'nanay' starts with a small letter.\">'Ang aking nanay ay mabait.' Pansining maliit ang titik ng 'nanay'.</span>" },
        { title: "Sa simula ng pangungusap", content: "<span class=\"fil-sentence\" data-translation=\"'Guro ang aking ate.' Here, 'guro' starts with a capital G because it is the first word.\">'Guro ang aking ate.' Dito, malaki ang G sa 'guro' dahil ito ang unang salita.</span>" }
      ]
    },
    {
      title: "Pambalana sa Tao at Lugar: Mga Halimbawa",
      text: "<span class=\"fil-sentence\" data-translation=\"Common nouns for people and places are general words used in our daily lives.\">Ang pambalana sa tao at lugar ay mga karaniwang salitang ginagamit natin sa araw-araw.</span>",
      examples: [
        { title: "Karaniwang Tao", content: "<span class=\"fil-sentence\" data-translation=\"'Pulis' (police), 'drayber' (driver), 'bumbero' (firefighter) are common nouns.\">Ang 'pulis', 'drayber', at 'bumbero' ay mga pambalana.</span>" },
        { title: "Karaniwang Lugar", content: "<span class=\"fil-sentence\" data-translation=\"'Ospital' (hospital), 'palengke' (market), 'simbahan' (church) are common nouns.\">Ang 'ospital', 'palengke', at 'simbahan' ay mga pambalana.</span>" }
      ]
    },
    {
      title: "Pambalana sa Bagay at Hayop: Mga Halimbawa",
      text: "<span class=\"fil-sentence\" data-translation=\"Common nouns for things and animals do not specify brands or names.\">Ang pambalana sa bagay at hayop ay hindi nagsasabi ng tatak o pangalan.</span>",
      examples: [
        { title: "Karaniwang Bagay", content: "<span class=\"fil-sentence\" data-translation=\"'Lapis' (pencil), 'papel' (paper), 'pisara' (blackboard) are common nouns.\">Ang 'lapis', 'papel', at 'pisara' ay mga pambalana.</span>" },
        { title: "Karaniwang Hayop", content: "<span class=\"fil-sentence\" data-translation=\"'Ibon' (bird), 'isda' (fish), 'koneho' (rabbit) are common nouns.\">Ang 'ibon', 'isda', at 'koneho' ay mga pambalana.</span>" }
      ]
    },
    {
      title: "Paghahambing ng Pantangi at Pambalana",
      text: "<span class=\"fil-sentence\" data-translation=\"Let us compare the differences in how we write proper and common nouns.\">Ating ihambing ang pagkakaiba sa pagsulat ng pantangi at pambalana.</span>",
      examples: [
        { title: "Tao", content: "<span class=\"fil-sentence\" data-translation=\"Pambalana: guro -> Pantangi: Gng. Alcaraz\">Pambalana: guro -> Pantangi: Gng. Alcaraz</span>" },
        { title: "Bagay", content: "<span class=\"fil-sentence\" data-translation=\"Pambalana: toothpaste -> Pantangi: Colgate\">Pambalana: toothpaste -> Pantangi: Colgate</span>" }
      ]
    },
    {
      title: "Pantangi sa Pangungusap: Paghahanap",
      text: "<span class=\"fil-sentence\" data-translation=\"We can easily spot proper nouns because of their capital letters in the sentence.\">Madali nating matutukoy ang pantangi dahil sa malaking titik nito sa pangungusap.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Si Ben ay tumatakbo.' 'Ben' is the proper noun.\">'Si Ben ay tumatakbo.' Ang 'Ben' ay ang pangngalang pantangi.</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Pumunta kami sa Boracay.' 'Boracay' is the proper noun.\">'Pumunta kami sa Boracay.' Ang 'Boracay' ay ang pangngalang pantangi.</span>" }
      ]
    },
    {
      title: "Pambalana sa Pangungusap: Paghahanap",
      text: "<span class=\"fil-sentence\" data-translation=\"Common nouns are often preceded by articles like 'ang', 'mga', or pronouns.\">Ang mga pangngalang pambalana ay karaniwang pinangungunahan ng 'ang', 'mga', o 'ng'.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Matalas ang lapis.' 'lapis' is the common noun.\">'Matalas ang lapis.' Ang 'lapis' ay ang pangngalang pambalana.</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Lumilipad ang mga ibon.' 'ibon' is the common noun.\">'Lumilipad ang mga ibon.' Ang 'ibon' ay ang pangngalang pambalana.</span>" }
      ]
    },
    {
      title: "Paano Isulat ang Tiyak na Ngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"Always remember to capitalize proper nouns. This is a very important rule in writing.\">Laging tandaan na simulan sa malaking titik ang pantangi. Ito ay mahalagang tuntunin sa pagsulat.</span>",
      examples: [
        { title: "Tatak ng Gatas", content: "<span class=\"fil-sentence\" data-translation=\"'Nido' must be written with a capital N.\">Ang 'Nido' ay dapat isulat gamit ang malaking titik N.</span>" },
        { title: "Pangalan ng Aso", content: "<span class=\"fil-sentence\" data-translation=\"'Brownie' must be written with a capital B.\">Ang 'Brownie' ay dapat isulat gamit ang malaking titik B.</span>" }
      ]
    },
    {
      title: "Pambalana sa Gitna ng Pangungusap",
      text: "<span class=\"fil-sentence\" data-translation=\"Do not write common nouns with capital letters in the middle of a sentence.\">Huwag isulat ang pambalana gamit ang malaking titik sa gitna ng pangungusap.</span>",
      examples: [
        { title: "Maling Pagsulat", content: "<span class=\"fil-sentence\" data-translation=\"'Bumili ako ng Bagong Lapis.' (Incorrect capitalization of Bagong Lapis)\">'Bumili ako ng Bagong Lapis.' (Mali ang malaking titik ng Bagong Lapis)</span>" },
        { title: "Tamang Pagsulat", content: "<span class=\"fil-sentence\" data-translation=\"'Bumili ako ng bagong lapis.' (Correct small letters)\">'Bumili ako ng bagong lapis.' (Tama ang maliit na titik)</span>" }
      ]
    },
    {
      title: "Pangngalan sa Araw-araw",
      text: "<span class=\"fil-sentence\" data-translation=\"We use proper and common nouns every day to name the things we see and interact with.\">Ginagamit natin ang pantangi at pambalana araw-araw upang pangalanan ang mga bagay na ating nakikita.</span>",
      examples: [
        { title: "Pakikipag-usap sa Guro", content: "<span class=\"fil-sentence\" data-translation=\"'Gng. Santos, narito po ang aking aklat.' (Santos is proper, aklat is common)\">'Gng. Santos, narito po ang aking aklat.' (Santos ay pantangi, aklat ay pambalana)</span>" },
        { title: "Pagbili sa Tindahan", content: "<span class=\"fil-sentence\" data-translation=\"'Pabili po ng Colgate na toothpaste.' (Colgate is proper, toothpaste is common)\">'Pabili po ng Colgate na toothpaste.' (Colgate ay pantangi, toothpaste ay pambalana)</span>" }
      ]
    },
    {
      title: "Pagsasama ng Dalawang Uri",
      text: "<span class=\"fil-sentence\" data-translation=\"A sentence can contain both proper and common nouns. Identifying both helps in grammar analysis.\">Ang isang pangungusap ay maaaring maglaman ng pantangi at pambalana nang sabay.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Si Bb. Ramos ay isang guro.' (Bb. Ramos is proper, guro is common)\">'Si Bb. Ramos ay isang guro.' (Bb. Ramos ay pantangi, guro ay pambalana)</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Ang asong si Bantay ay matapang.' (aso is common, Bantay is proper)\">'Ang asong si Bantay ay matapang.' (aso ay pambalana, Bantay ay pantangi)</span>" }
      ]
    },
    {
      title: "Pagsasanay sa Pagtukoy",
      text: "<span class=\"fil-sentence\" data-translation=\"Let's practice identifying proper and common nouns. This makes writing clear and correct.\">Magsanay tayo sa pagtukoy. Ginagawa nitong malinaw at wasto ang pagsulat.</span>",
      examples: [
        { title: "Pagsasanay 1", content: "<span class=\"fil-sentence\" data-translation=\"Identify proper noun in: 'Si Lito ay may bagong aso.' Answer: Lito\">Tukuyin ang pantangi sa: 'Si Lito ay may bagong aso.' Sagot: Lito</span>" },
        { title: "Pagsasanay 2", content: "<span class=\"fil-sentence\" data-translation=\"Identify common noun in: 'Masaya ang mga bata sa parke.' Answer: bata, parke\">Tukuyin ang pambalana sa: 'Masaya ang mga bata sa parke.' Sagot: bata, parke</span>" }
      ]
    },
    {
      title: "Buod ng Ating Aralin",
      text: "<span class=\"fil-sentence\" data-translation=\"Proper nouns are specific and capitalized (e.g. Pilipinas). Common nouns are general and in small letters (e.g. bansa).\">Ang pantangi ay tiyak na ngalan at nagsisimula sa malaking titik (hal. Pilipinas). Ang pambalana ay karaniwang ngalan at nasa maliit na titik (hal. bansa).</span>",
      examples: [
        { title: "Tandaan", content: "<span class=\"fil-sentence\" data-translation=\"Pantangi = Tiyak (malaking titik). Pambalana = Karaniwan (maliit na titik).\">Pantangi = Tiyak (malaking titik). Pambalana = Karaniwan (maliit na titik).</span>" },
        { title: "Paglalapat", content: "<span class=\"fil-sentence\" data-translation=\"Always check your letters when writing specific names in school tasks.\">Laging suriin ang mga titik kapag isinusulat ang mga tiyak na ngalan.</span>" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a proper noun (pantangi)?\">Alin sa mga sumusunod ang pangngalang pantangi?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"school\">paaralan</span>", "<span class=\"fil-sentence\" data-translation=\"Jose Rizal\">Jose Rizal</span>", "<span class=\"fil-sentence\" data-translation=\"book\">aklat</span>", "<span class=\"fil-sentence\" data-translation=\"teacher\">guro</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a common noun (pambalana)?\">Alin sa mga sumusunod ang pangngalang pambalana?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Manila\">Maynila</span>", "<span class=\"fil-sentence\" data-translation=\"Nike\">Nike</span>", "<span class=\"fil-sentence\" data-translation=\"dog\">aso</span>", "<span class=\"fil-sentence\" data-translation=\"Bantay (Guard)\">Bantay</span>"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the proper noun corresponding to the common noun 'bansa'?\">Ano ang katapat na pangngalang pantangi ng pambalanang 'bansa'?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"city\">lungsod</span>", "<span class=\"fil-sentence\" data-translation=\"Philippines\">Pilipinas</span>", "<span class=\"fil-sentence\" data-translation=\"continent\">kontinente</span>", "<span class=\"fil-sentence\" data-translation=\"ocean\">karagatan</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the common noun corresponding to 'Colgate'?\">Ano ang katapat na pangngalang pambalana ng pantanging 'Colgate'?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"soap\">sabon</span>", "<span class=\"fil-sentence\" data-translation=\"toothpaste\">toothpaste</span>", "<span class=\"fil-sentence\" data-translation=\"shampoo\">shampoo</span>", "<span class=\"fil-sentence\" data-translation=\"comb\">suklay</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"How should a proper noun (pantangi) always be written?\">Paano dapat isulat ang pangngalang pantangi?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Always starting with a small letter\">Laging simulan sa maliit na titik</span>",
            "<span class=\"fil-phrase\" data-translation=\"Always starting with a capital letter\">Laging simulan sa malaking titik</span>",
            "<span class=\"fil-phrase\" data-translation=\"All letters capitalized\">Lahat ng titik ay malaki</span>",
            "<span class=\"fil-phrase\" data-translation=\"It doesn't matter\">Kahit paano ay maaari</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In the sentence: 'Si Sarah ay sumasayaw.', which is the proper noun?\">Sa pangungusap na: 'Si Sarah ay sumasayaw.', alin ang pangngalang pantangi?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Si (personal article)\">Si</span>", "<span class=\"fil-sentence\" data-translation=\"Sarah\">Sarah</span>", "<span class=\"fil-sentence\" data-translation=\"ay (linking particle)\">ay</span>", "<span class=\"fil-sentence\" data-translation=\"dancing\">sumasayaw</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In the sentence: 'Bumili ng bagong aklat ang bata.', which is the common noun for a person?\">Sa pangungusap: 'Bumili ng bagong aklat ang bata.', alin ang pambalana sa tao?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"book\">aklat</span>", "<span class=\"fil-sentence\" data-translation=\"child\">bata</span>", "<span class=\"fil-sentence\" data-translation=\"new\">bagong</span>", "<span class=\"fil-sentence\" data-translation=\"To buy\">Bumili</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which sentence is written with correct capitalization?\">Aling pangungusap ang may tamang paggamit ng malaking titik?</span>",
          options: [
            "Pumunta si maria sa lungsod.",
            "Pumunta si Maria sa Lungsod.",
            "Pumunta si Maria sa lungsod.",
            "pumunta si maria sa Lungsod."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a proper noun for a place?\">Alin sa mga sumusunod ang pantangi para sa lugar?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"classroom\">silid-aralan</span>", "<span class=\"fil-sentence\" data-translation=\"Quezon City\">Quezon City</span>", "<span class=\"fil-sentence\" data-translation=\"house\">bahay</span>", "<span class=\"fil-sentence\" data-translation=\"store\">tindahan</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What category of noun is 'Pasko' (Christmas)?\">Saang kategorya ng pangngalan nabibilang ang 'Pasko'?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Name of Person\">Ngalan ng Tao</span>",
            "<span class=\"fil-phrase\" data-translation=\"Name of Thing\">Ngalan ng Bagay</span>",
            "<span class=\"fil-phrase\" data-translation=\"Name of Place\">Ngalan ng Lugar</span>",
            "<span class=\"fil-phrase\" data-translation=\"Name of Event\">Ngalan ng Pangyayari</span>"
          ],
          answer: 3
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a common noun for an animal?\">Alin sa mga sumusunod ang pambalana sa hayop?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"kitten\">kuting</span>", "<span class=\"fil-sentence\" data-translation=\"Muning (Cat)\">Muníng</span>", "<span class=\"fil-sentence\" data-translation=\"Bantay (Guard)\">Bantay</span>", "<span class=\"fil-sentence\" data-translation=\"Snoopy\">Snoopy</span>"],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the proper noun for a dog?\">Alin ang pantangi sa aso?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"puppy\">tuta</span>", "<span class=\"fil-sentence\" data-translation=\"Bantay (Guard)\">Bantay</span>", "<span class=\"fil-sentence\" data-translation=\"cat\">pusa</span>", "<span class=\"fil-sentence\" data-translation=\"mouse / rat\">dagis</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which noun is in the correct small letter format in the middle of a sentence?\">Aling pangngalan ang nasa tamang maliit na titik sa gitna ng pangungusap?</span>",
          options: [
            "May nakita akong Pusa sa daan.",
            "May nakita akong pusa sa daan.",
            "May nakita akong PUSA sa daan.",
            "May nakita akong Pusa sa Daan."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which is a common noun for a school?\">Alin ang pambalana sa paaralan?</span>",
          options: [
            "Ramon Magsaysay Elementary School",
            "paaralan",
            "Silid-aralan",
            "Eskwela"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Mabait ang guro na si Gng. Cruz.', identify the common noun.\">Sa: 'Mabait ang guro na si Gng. Cruz.', alin ang pangngalang pambalana?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Kind / Good\">Mabait</span>", "<span class=\"fil-sentence\" data-translation=\"teacher\">guro</span>", "<span class=\"fil-sentence\" data-translation=\"Mrs.\">Gng.</span>", "<span class=\"fil-sentence\" data-translation=\"Cruz\">Cruz</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Identify the proper noun in: 'Masaya ang Pasko sa Pilipinas.'\">Tukuyin ang mga pantangi sa: 'Masaya ang Pasko sa Pilipinas.'</span>",
          options: [
            "Masaya",
            "Pasko at Pilipinas",
            "sa",
            "Pasko lamang"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the common noun for 'Mongol'?\">Ano ang pambalana sa 'Mongol'?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"book\">aklat</span>", "<span class=\"fil-sentence\" data-translation=\"pencil\">lapis</span>", "<span class=\"fil-sentence\" data-translation=\"paper\">papel</span>", "<span class=\"fil-sentence\" data-translation=\"erase\">bura</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the common noun for 'Bagong Taon'?\">Ano ang pambalana sa 'Bagong Taon'?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"place\">lugar</span>", "<span class=\"fil-sentence\" data-translation=\"thing\">bagay</span>", "<span class=\"fil-sentence\" data-translation=\"event\">pangyayari</span>", "<span class=\"fil-sentence\" data-translation=\"person / human\">tao</span>"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which noun refers to a general name of a place?\">Aling pangngalan ang tumutukoy sa karaniwang ngalan ng lugar?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Manila\">Maynila</span>", "<span class=\"fil-sentence\" data-translation=\"park\">parke</span>", "<span class=\"fil-sentence\" data-translation=\"Cebu\">Cebu</span>", "<span class=\"fil-sentence\" data-translation=\"Baguio\">Baguio</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Bumili ako ng Mongol na lapis.', which is proper?\">Sa: 'Bumili ako ng Mongol na lapis.', alin ang pantangi?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"To buy\">Bumili</span>", "<span class=\"fil-sentence\" data-translation=\"Mongol (pencil brand)\">Mongol</span>", "<span class=\"fil-sentence\" data-translation=\"pencil\">lapis</span>", "<span class=\"fil-sentence\" data-translation=\"I / me\">ako</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which proper noun refers to a specific name of a day?\">Aling pantangi ang tumutukoy sa tiyak na ngalan ng araw?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"day / sun\">araw</span>", "<span class=\"fil-sentence\" data-translation=\"Monday\">Lunes</span>", "<span class=\"fil-sentence\" data-translation=\"month / moon\">buwan</span>", "<span class=\"fil-sentence\" data-translation=\"Christmas\">Pasko</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which common noun refers to a writing tool?\">Aling pambalana ang tumutukoy sa gamit sa pagsulat?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"chair\">silya</span>", "<span class=\"fil-sentence\" data-translation=\"pencil\">lapis</span>", "<span class=\"fil-sentence\" data-translation=\"shoes\">sapatos</span>", "<span class=\"fil-sentence\" data-translation=\"bag\">bag</span>"],
          answer: 1
        },
    {
          type: "verify",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
          options: [
            "Statement A: Ang 'Pilipinas' ay pangngalang pantangi, habang ang 'bansa' ay pangngalang pambalana.",
            "Statement B: Ang 'Pilipinas' ay pangngalang pambalana, habang ang 'bansa' ay pangngalang pantangi."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "<span class=\"fil-sentence\" data-translation=\"Write the proper noun in this sentence: 'Si Jose ay mabait.'\">Isulat ang pangngalang pantangi sa pangungusap na ito: 'Si Jose ay mabait.'</span>",
          answer: "Jose"
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a proper noun (pantangi)?\">Alin sa mga sumusunod ang pangngalang pantangi?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"teacher\">guro</span>",
            "<span class=\"fil-phrase\" data-translation=\"Manila (Maynila)\">Maynila</span>",
            "<span class=\"fil-phrase\" data-translation=\"pencil\">lapis</span>",
            "<span class=\"fil-phrase\" data-translation=\"dog\">aso</span>"
          ],
          answer: 1
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"In: 'Si Gng. Santos ay nagtuturo sa Ramon Magsaysay Elementary School.', how many proper nouns are there?\">Sa: 'Si Gng. Santos ay nagtuturo sa Ramon Magsaysay Elementary School.', ilang pantangi ang mayroon?</span>",
      options: ["1", "2", "3", "4"],
      answer: 1 // Gng. Santos and Ramon Magsaysay Elementary School are 2 distinct entity names
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Which classification is correct for: 'Nike, sapatos, Boracay, lugar'?\">Aling pag-uuri ang tama para sa: 'Nike, sapatos, Boracay, lugar'?</span>",
      options: [
        "Nike at Boracay ay pantangi; sapatos at lugar ay pambalana.",
        "Nike at sapatos ay pantangi; Boracay at lugar ay pambalana.",
        "Lahat sila ay pantangi.",
        "Lahat sila ay pambalana."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is written incorrectly inside the sentence?\">Alin sa mga sumusunod ang may maling pagsulat sa loob ng pangungusap?</span>",
      options: [
        "Bumili si Tatay ng bagong Lapis.",
        "Bumili si Tatay ng bagong lapis.",
        "Bumili si tatay ng bagong lapis.",
        "Bumili si Tatay ng Mongol na lapis."
      ],
      answer: 0 // Lapis has capital L, which is incorrect for common noun
    },
    {
      type: "verify",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
      options: [
        "Statement A: Ang mga pangngalang pantangi ay nagsisimula sa malaking titik dahil sila ay tiyak na ngalan.",
        "Statement B: Ang mga pangngalang pambalana ay laging isinusulat sa malaking titik kahit nasaan sa pangungusap."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "<span class=\"fil-sentence\" data-translation=\"What is the common noun for the proper noun 'Lunes' (Monday)?\">Ano ang pangngalang pambalana para sa pantanging 'Lunes'?</span>",
      answer: "araw"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Paggawa ng Listahan ng Pangngalan",
        desc: "<span class=\"fil-sentence\" data-translation=\"Get a sheet of paper. List 5 things inside your classroom or room. For each, write its common noun (pambalana) and think of a specific proper noun brand or name (pantangi). Show this list to your teacher or parent.\">Kumuha ng papel. Maglista ng 5 gamit sa loob ng iyong silid. Para sa bawat isa, isulat ang pambalana nito at mag-isip ng katapat na pantangi (brand o pangalan). Ipakita ito sa iyong guro o magulang.</span>",
        labels: [
          "<span class=\"fil-phrase\" data-translation=\"Correct classification of proper and common nouns\">Wastong pag-uuri ng pantangi at pambalana</span>",
          "<span class=\"fil-phrase\" data-translation=\"Correct capitalization of proper nouns\">Tamang paggamit ng malaking titik sa pantangi</span>",
          "<span class=\"fil-phrase\" data-translation=\"Neatness of writing\">Kalinisan ng pagsulat sa papel</span>"
        ]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Pantangi o Pambalana</h3>\n                  <p class=\"ws-instruction\">Isulat kung ang pangngalan ay <strong>Pantangi</strong> (Proper) o <strong>Pambalana</strong> (Common). <span class=\"fil-sentence\" data-translation=\"Write if the noun is Pantangi or Pambalana.\"></span></p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. Dr. Fe Del Mundo: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">Pantangi</span></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. aklat: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">Pambalana</span></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. Pilipinas: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">Pantangi</span></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. aso: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"><span class=\"ws-answer\">Pambalana</span></div></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Pagsulat ng Pangungusap</h3>\n                  <p class=\"ws-instruction\">Sumulat ng pangungusap gamit ang ibinigay na pangngalan. <span class=\"fil-sentence\" data-translation=\"Write a sentence using the given noun.\"></span></p>\n                  \n                  <div class=\"ws-item-row\" style=\"margin-bottom: 25px;\">\n                    <div class=\"ws-q\">1. Salita: <strong>paaralan</strong> (Pambalana)</div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 90%;\"><span class=\"ws-answer\">Mabait ang mga guro sa aming paaralan.</span></div>\n                  </div>\n                  \n                  <div class=\"ws-item-row\">\n                    <div class=\"ws-q\">2. Salita: <strong>Matteo</strong> (Pantangi)</div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 90%;\"><span class=\"ws-answer\">Si Matteo ay masipag mag-aral.</span></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Uri ng Pangngalan</h3>\n                  <p class=\"ws-instruction\">Tukuyin kung Pantangi o Pambana ang bawat may salungguhit na salita. Isulat ang sagot gamit ang stylus.</p>\n                  \n                  <div style=\"font-size: 16px; line-height: 1.8; margin-top: 25px;\">\n                    <div style=\"margin-bottom: 25px;\">1. Ang aking <u>guro</u> ay mabait at mapag-aruga. <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Pambalana</span></div></div>\n                    <div style=\"margin-bottom: 25px;\">2. Kami ay mamamasyal sa magandang parke ng <u>Luneta</u>. <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Pantangi</span></div></div>\n                    <div style=\"margin-bottom: 25px;\">3. Si <u>Bantay</u> ay matapat na aso na nagbabantay sa bahay. <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Pantangi</span></div></div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK1_DATA.makabansa = {
  color: "#d97706",
  icon: "🏘️",
  title: "Makabansa",
  subtitle: "Week 1: Kahulugan at Elemento ng Kasaysayan",
  slides: [
    {
      title: "Ano ang Kasaysayan ng Komunidad?",
      text: "<span class=\"fil-sentence\" data-translation=\"History is the study of past events that occurred in a specific place. It explains how our community grew.\">Ang kasaysayan ay ang pag-aaral ng mga nakaraang pangyayari na naganap sa isang partikular na lugar. Ipinapaliwanag nito kung paano lumago ang ating komunidad.</span>",
      examples: [
        { title: "Kasaysayan ng Pangalan", content: "<span class=\"fil-sentence\" data-translation=\"Learning how your barangay got its name from an old tree or a local hero.\">Pag-alam kung paano nakuha ng iyong barangay ang pangalan nito mula sa isang matandang puno o lokal na bayani.</span>" },
        { title: "Kasaysayan ng Gusali", content: "<span class=\"fil-sentence\" data-translation=\"Finding out that the town hall was built fifty years ago and used to be a clinic.\">Pagtuklas na ang munisipyo ay itinayo limampung taon na ang nakalipas at dating klinika.</span>" }
      ]
    },
    {
      title: "Ang Apat na Elemento ng Kasaysayan",
      text: "<span class=\"fil-sentence\" data-translation=\"Every historical event has four key elements: People (Tao), Place (Lugar), Time (Panahon), and Event (Pangyayari).\">Ang bawat makasaysayang pangyayari ay may apat na elemento: Tao, Lugar, Panahon, at Pangyayari.</span>",
      examples: [
        { title: "Halimbawa 1", content: "<span class=\"fil-sentence\" data-translation=\"Without people, there is no history, because history is about human actions in the past.\">Kung walang tao, walang kasaysayan, dahil ang kasaysayan ay tungkol sa mga kilos ng tao sa nakaraan.</span>" },
        { title: "Halimbawa 2", content: "<span class=\"fil-sentence\" data-translation=\"Every event must happen somewhere and at a specific time (like in 1945).\">Ang bawat pangyayari ay kailangang maganap sa isang lugar at sa tiyak na panahon (tulad ng taong 1945).</span>" }
      ]
    },
    {
      title: "Elemento 1: Ang Tao (People)",
      text: "<span class=\"fil-sentence\" data-translation=\"People are the actors who make history. They include leaders, heroes, and ordinary citizens.\">Ang tao ang mga aktor na lumilikha ng kasaysayan. Kasama rito ang mga pinuno, bayani, at mga karaniwang mamamayan.</span>",
      examples: [
        { title: "Lokal na Bayani", content: "<span class=\"fil-sentence\" data-translation=\"A brave mayor who protected the town during a strong flood in the past.\">Isang matapang na alkalde na nagligtas sa bayan noong panahon ng malaking baha.</span>" },
        { title: "Mga Unang Nanirahan", content: "<span class=\"fil-sentence\" data-translation=\"The early families who cleared the forest to build houses and farms.\">Ang mga unang pamilyang naghawan ng kagubatan upang magtayo ng mga bahay at bukid.</span>" }
      ]
    },
    {
      title: "Elemento 2: Ang Lugar (Place)",
      text: "<span class=\"fil-sentence\" data-translation=\"The place is the geographic location where the historical event happened. Geography affects how events unfold.\">Ang lugar ay ang heograpikal na lokasyon kung saan naganap ang pangyayari. Ang heograpiya ay nakakaapekto sa mga pangyayari.</span>",
      examples: [
        { title: "Tabing-ilog", content: "<span class=\"fil-sentence\" data-translation=\"Early communities settled near rivers for water, fishing, and transportation.\">Ang mga unang komunidad ay nanirahan sa tabi ng ilog para sa tubig, pangingisda, at transportasyon.</span>" },
        { title: "Makasaysayang Plaza", content: "<span class=\"fil-sentence\" data-translation=\"The central plaza where local assemblies and trade took place.\">Ang sentral na plasa kung saan nagaganap ang mga pagtitipon at kalakalan.</span>" }
      ]
    },
    {
      title: "Elemento 3: Ang Panahon (Time)",
      text: "<span class=\"fil-sentence\" data-translation=\"Time tells us when the event happened. It can be a specific date, year, or a broad historical era.\">Ang panahon ay nagsasabi kung kailan naganap ang pangyayari. Ito ay maaaring tiyak na petsa, taon, o mahabang yugto.</span>",
      examples: [
        { title: "Tiyak na Petsa", content: "<span class=\"fil-sentence\" data-translation=\"June 12, 1898: The declaration of Philippine Independence.\">Hunyo 12, 1898: Ang deklarasyon ng Kalayaan ng Pilipinas.</span>" },
        { title: "Yugto ng Panahon", content: "<span class=\"fil-sentence\" data-translation=\"'Panahon ng Hapon' refers to the World War II occupation years.\">Ang 'Panahon ng Hapon' ay tumutukoy sa mga taon ng pananakop noong Ikalawang Digmaang Pandaigdig.</span>" }
      ]
    },
    {
      title: "Elemento 4: Ang Pangyayari (Event)",
      text: "<span class=\"fil-sentence\" data-translation=\"The event is the actual incident or action that took place and caused changes in the community.\">Ang pangyayari ay ang mismong aksyon o kaganapan na nagdulot ng pagbabago sa komunidad.</span>",
      examples: [
        { title: "Pagtatayo ng Paaralan", content: "<span class=\"fil-sentence\" data-translation=\"The opening of the first public school, which allowed all children to learn to read.\">Ang pagbubukas ng unang paaralang pampubliko na nagbigay-daan sa mga bata na matutong magbasa.</span>" },
        { title: "Pagkakatatag ng Barangay", content: "<span class=\"fil-sentence\" data-translation=\"The official signing of the law creating the new barangay division.\">Ang opisyal na paglagda sa batas na nagtatag ng bagong barangay.</span>" }
      ]
    },
    {
      title: "Bakit Mahalaga ang Kasaysayan?",
      text: "<span class=\"fil-sentence\" data-translation=\"History teaches us about our identity. It shows us where we came from and helps us plan for a better future.\">Itinuturo sa atin ng kasaysayan ang ating pagkakakilanlan. Ipinapakita nito ang ating pinagmulan.</span>",
      examples: [
        { title: "Pag-iwas sa Pagkakamali", content: "<span class=\"fil-sentence\" data-translation=\"Learning how previous generations resolved water shortages helps us protect our water resources today.\">Ang pag-alam kung paano nilutas ng mga naunang tao ang kakulangan sa tubig ay tumutulong sa atin ngayon.</span>" },
        { title: "Pagmamalaki", content: "<span class=\"fil-sentence\" data-translation=\"Feeling proud of the handloom weaving tradition started by your great-grandparents.\">Pagkakaroon ng pagmamalaki sa tradisyon ng paghahabi na sinimulan ng ating mga ninuno.</span>" }
      ]
    },
    {
      title: "Mga Sanggunian ng Kasaysayan (Sources)",
      text: "<span class=\"fil-sentence\" data-translation=\"We find historical facts in historical sources. Sources are divided into Primary and Secondary sources.\">Nakakakuha tayo ng impormasyon mula sa mga sanggunian ng kasaysayan, na nahahati sa primarya at sekundarya.</span>",
      examples: [
        { title: "Primaryang Sanggunian", content: "<span class=\"fil-sentence\" data-translation=\"An old photograph of the plaza taken in 1930. (Direct evidence)\">Isang lumang larawan ng plasa na kinuha noong 1930.</span>" },
        { title: "Sekundaryang Sanggunian", content: "<span class=\"fil-sentence\" data-translation=\"A history textbook written by a professor in 2010. (Interpretation)\">Isang aklat ng kasaysayan na isinulat ng isang propesor noong 2010.</span>" }
      ]
    },
    {
      title: "Primaryang Sanggunian: Mga Halimbawa",
      text: "<span class=\"fil-sentence\" data-translation=\"Primary sources are direct, first-hand accounts created during the time of the event.\">Ang mga primaryang sanggunian ay ang mga orihinal na dokumento o bagay na nilikha noong mismong panahon ng pangyayari.</span>",
      examples: [
        { title: "Mga Talaarawan", content: "<span class=\"fil-sentence\" data-translation=\"A diary written by an old soldier during the war.\">Isang talaarawan na isinulat ng isang lumang sundalo noong digmaan.</span>" },
        { title: "Mga Lumang Kagamitan", content: "<span class=\"fil-sentence\" data-translation=\"Clay pots and copper tools dug up from underneath the old church.\">Mga palayok at kagamitang tanso na nahukay sa ilalim ng lumang simbahan.</span>" }
      ]
    },
    {
      title: "Sekundaryang Sanggunian: Mga Halimbawa",
      text: "<span class=\"fil-sentence\" data-translation=\"Secondary sources analyze, discuss, or summarize primary sources. They are created after the event.\">Ang mga sekundaryang sanggunian ay talakayin o buod ng mga primaryang sanggunian, na isinulat matapos ang kaganapan.</span>",
      examples: [
        { title: "Mga Aklat sa Paaralan", content: "<span class=\"fil-sentence\" data-translation=\"Social Studies textbooks that explain the history of provinces.\">Mga aklat ng Araling Panlipunan na nagpapaliwanag sa kasaysayan ng mga lalawigan.</span>" },
        { title: "Mga Kuwentong Muling Sinulat", content: "<span class=\"fil-sentence\" data-translation=\"A modern biography written about Jose Rizal.\">Isang modernong talambuhay na isinulat tungkol kay Jose Rizal.</span>" }
      ]
    },
    {
      title: "Oral History: Kuwento ng mga Nakakatanda",
      text: "<span class=\"fil-sentence\" data-translation=\"Oral history is passing stories down through speech. Interviewing elders is an important historical process.\">Ang oral history ay ang paglilipat ng mga kwento gamit ang pananalita. Ang pakikipanayam sa mga nakakatanda ay mahalaga.</span>",
      examples: [
        { title: "Kuwento ni Lolo", content: "<span class=\"fil-sentence\" data-translation=\"Grandfather describing how the town celebrated fiestas when he was a little boy.\">Paglalarawan ni Lolo kung paano ipinagdiriwang ang pista noong siya ay bata pa.</span>" },
        { title: "Mga Alamat", content: "<span class=\"fil-sentence\" data-translation=\"Spoken legends about the origin of a local mountain or lake.\">Mga pasalitang alamat tungkol sa pinagmulan ng bundok o lawa.</span>" }
      ]
    },
    {
      title: "Ang Konsepto ng Timeline (Guhit ng Panahon)",
      text: "<span class=\"fil-sentence\" data-translation=\"A timeline is a visual line showing events in the order they happened. It helps us understand the flow of history.\">Ang timeline ay isang guhit na nagpapakita ng mga pangyayari ayon sa tamang pagkakasunod-sunod.</span>",
      examples: [
        { title: "Personal Timeline", content: "<span class=\"fil-sentence\" data-translation=\"2018: Born -> 2022: Kindergarten -> 2026: Grade 3.\">2018: Ipinanganak -> 2022: Kindergarten -> 2026: Baitang 3.</span>" },
        { title: "Barangay Timeline", content: "<span class=\"fil-sentence\" data-translation=\"1970: Founded -> 1990: Built Hall -> 2010: Built Park.\">1970: Itinatag -> 1990: Itinayo ang Hall -> 2010: Itinayo ang Parke.</span>" }
      ]
    },
    {
      title: "Pagbabago sa Aking Komunidad",
      text: "<span class=\"fil-sentence\" data-translation=\"History shows that communities change over time. Changes happen to roads, buildings, and lifestyles.\">Ipinapakita ng kasaysayan na ang mga komunidad ay nagbabago. Ang pagbabago ay nagaganap sa daan at mga gusali.</span>",
      examples: [
        { title: "Daanan", content: "<span class=\"fil-sentence\" data-translation=\"Dirt roads in the past were paved with asphalt and concrete as time passed.\">Ang mga daang lupa noon ay naging semento at aspalto sa paglipas ng panahon.</span>" },
        { title: "Komunikasyon", content: "<span class=\"fil-sentence\" data-translation=\"Writing paper letters in the past shifted to sending instant messages on mobile devices today.\">Ang pagsulat ng sulat-papel noon ay napalitan ng mga mensahe sa cellphone ngayon.</span>" }
      ]
    },
    {
      title: "Mga Bagay na Nananatili (Continuity)",
      text: "<span class=\"fil-sentence\" data-translation=\"While many things change, some things remain the same. Continuity preserves the traditions of our community.\">Habang maraming nagbabago, may mga bagay na nananatili pa rin. Ito ay nagpapanatili ng ating tradisyon.</span>",
      examples: [
        { title: "Lokal na Simbahan", content: "<span class=\"fil-sentence\" data-translation=\"The old stone church still stands and remains the center of weekly worship.\">Ang lumang simbahan ay nakatayo pa rin at nananatiling sentro ng pagsamba.</span>" },
        { title: "Tradisyon ng Pista", content: "<span class=\"fil-sentence\" data-translation=\"Celebrating the annual town fiesta with local games and shared food.\">Ang taunang pagdiriwang ng pista na may mga laro at salu-salo.</span>" }
      ]
    },
    {
      title: "Mga Simbolo sa Aking Komunidad",
      text: "<span class=\"fil-sentence\" data-translation=\"Symbols represent the identity and history of our community. They include seals, flags, and monuments.\">Ang mga simbolo ay kumakatawan sa pagkakakilanlan ng komunidad tulad ng selyo, watawat, at monumento.</span>",
      examples: [
        { title: "Monumento ng Bayani", content: "<span class=\"fil-sentence\" data-translation=\"A statue of Jose Rizal erected at the center of the town plaza.\">Ang estatwa ni Jose Rizal na nakatayo sa gitna ng plasa.</span>" },
        { title: "Opisyal na Selyo", content: "<span class=\"fil-sentence\" data-translation=\"The barangay seal showing a gear for industry and a rice stalk for farming.\">Ang selyo ng barangay na nagpapakita ng gulong at palay.</span>" }
      ]
    },
    {
      title: "Ang Selyo at Sagisag ng Komunidad",
      text: "<span class=\"fil-sentence\" data-translation=\"A seal contains small drawings that tell what resources or livelihood are important in the community.\">Ang selyo ay naglalaman ng mga guhit na nagpapakita ng kabuhayan o yaman ng komunidad.</span>",
      examples: [
        { title: "Guhit ng Isda", content: "<span class=\"fil-sentence\" data-translation=\"A fish in the seal indicates that the community is located near water and fishing is important.\">Ang isda sa selyo ay nagpapakita na ang pangingisda ay mahalagang hanapbuhay.</span>" },
        { title: "Guhit ng Palay", content: "<span class=\"fil-sentence\" data-translation=\"Rice stalks show that agricultural farming is the main source of income.\">Ang palay ay nagpapakita na pagsasaka ang pangunahing kabuhayan.</span>" }
      ]
    },
    {
      title: "Lokal na Himno (Hymn)",
      text: "<span class=\"fil-sentence\" data-translation=\"A local hymn is an official song that praises the beauty, history, and values of the community's people.\">Ang himno ay opisyal na awit na nagpupuri sa kagandahan at kasaysayan ng komunidad.</span>",
      examples: [
        { title: "Pag-awit sa Flag Ceremony", content: "<span class=\"fil-sentence\" data-translation=\"Singing the municipal hymn right after the national anthem on Mondays.\">Pag-awit ng himno ng bayan tuwing Lunes pagkatapos ng Lupang Hinirang.</span>" },
        { title: "Liriko ng Kanta", content: "<span class=\"fil-sentence\" data-translation=\"Lyrics that talk about unity, hard work, and the natural beauty of the local river.\">Mga liriko na naglalarawan ng pagkakaisa at kagandahan ng ilog.</span>" }
      ]
    },
    {
      title: "Mga Makasaysayang Pook (Historical Sites)",
      text: "<span class=\"fil-sentence\" data-translation=\"Historical sites are locations where important events occurred in the past. They are protected for children to visit.\">Ang makasaysayang pook ay mga lugar kung saan naganap ang mahahalagang pangyayari sa nakaraan.</span>",
      examples: [
        { title: "Lumang Bahay-na-Bato", content: "<span class=\"fil-sentence\" data-translation=\"An old Spanish-era house where revolutionary meetings were held.\">Isang lumang bahay-na-bato kung saan ginanap ang pagtitipon ng mga katipunero.</span>" },
        { title: "Dambana ng Bayani", content: "<span class=\"fil-sentence\" data-translation=\"A shrine dedicated to local soldiers who fought in the past.\">Isang dambana para sa mga lokal na sundalong lumaban noon.</span>" }
      ]
    },
    {
      title: "Kaugalian at Tradisyon",
      text: "<span class=\"fil-sentence\" data-translation=\"Traditions are practices passed down across generations. They include festivals, respect habits, and crafts.\">Ang tradisyon ay mga kaugaliang ipinasa sa mga sumunod na henerasyon tulad ng pista at crafts.</span>",
      examples: [
        { title: "Mano Po", content: "<span class=\"fil-sentence\" data-translation=\"Pressing the forehead to the hand of an elder to ask for their blessing.\">Ang paglapat ng noo sa kamay ng nakatatanda bilang paggalang.</span>" },
        { title: "Lokal na Paghahabi", content: "<span class=\"fil-sentence\" data-translation=\"Grandmothers teaching young girls how to weave mats from dried leaves.\">Pagtuturo ng paghahabi ng banig mula sa mga tuyong dahon.</span>" }
      ]
    },
    {
      title: "Lokal na Pagdiriwang: Pista",
      text: "<span class=\"fil-sentence\" data-translation=\"Fiestas are celebrations honoring patron saints or thanksgiving for good harvest of local crops.\">Ang pista ay pagdiriwang para sa pasasalamat sa magandang ani ng mga lokal na produkto.</span>",
      examples: [
        { title: "Pista ng Palay", content: "<span class=\"fil-sentence\" data-translation=\"Decorating houses with colorful rice wafers called kiping during Pahiyas.\">Pagnonobena at pagpapalamuti ng bahay gamit ang makukulay na kiping.</span>" },
        { title: "Pista ng Manga", content: "<span class=\"fil-sentence\" data-translation=\"Parades showing giant mango floats to celebrate a bountiful fruit harvest.\">Parada ng mga float na may hugis mangga para ipagdiwang ang ani.</span>" }
      ]
    },
    {
      title: "Makasaysayang Sining ng Gupit-Papel",
      text: "<span class=\"fil-sentence\" data-translation=\"Paper cutting art (pastillas wrapper) is a historic craft still practiced in provinces like Bulacan.\">Ang gupit-papel (pabalat ng pastillas) ay isang makasaysayang sining sa mga lalawigan tulad ng Bulacan.</span>",
      examples: [
        { title: "Sining ng Pabalat", content: "<span class=\"fil-sentence\" data-translation=\"Cutting intricate floral designs into colorful Japanese paper to wrap sweets.\">Paggupit ng mga disenyo ng bulaklak sa papel-Hapon upang ibalot sa pastillas.</span>" },
        { title: "Bayan ng San Miguel", content: "<span class=\"fil-sentence\" data-translation=\"Elders passing down the steel-scissor cutting method to Grade 3 students.\">Pagtuturo ng mga nakatatanda sa mga mag-aaral ng paggupit gamit ang gunting.</span>" }
      ]
    },
    {
      title: "Pangangalaga sa mga Makasaysayang Pook",
      text: "<span class=\"fil-sentence\" data-translation=\"It is our duty to protect historical monuments. We must avoid vandalism and keep the areas clean.\">Tungkulin nating alagaan ang mga monumentong pangkasaysayan. Huwag sulatan o sirain ang mga ito.</span>",
      examples: [
        { title: "Bawal Mag-vandal", content: "<span class=\"fil-sentence\" data-translation=\"Keeping the statue of heroes free from graffiti and trash.\">Pananatiling malinis ng estatwa ng mga bayani laban sa sulat o dumi.</span>" },
        { title: "Pagbisita sa Museo", content: "<span class=\"fil-sentence\" data-translation=\"Walking quietly and following rules not to touch ancient display items.\">Tahimik na paglalakad at pagsunod sa tuntunin na huwag hawakan ang mga lumang bagay.</span>" }
      ]
    },
    {
      title: "Ang Relasyon ng Heograpiya at Kasaysayan",
      text: "<span class=\"fil-sentence\" data-translation=\"Geography (mountains, coastlines) shapes history. Coastal towns focus on trading and fishing history.\">Ang heograpiya (bundok, dagat) ay humuhubog sa kasaysayan ng komunidad at hanapbuhay.</span>",
      examples: [
        { title: "Komunidad sa Bundok", content: "<span class=\"fil-sentence\" data-translation=\"Highland history centers around terraces building and mining minerals.\">Ang kasaysayan ng mga komunidad sa bundok ay nakasentro sa pagtatanim sa terraces.</span>" },
        { title: "Komunidad sa Kapatagan", content: "<span class=\"fil-sentence\" data-translation=\"Flat plains history centers around vast rice fields development and milling.\">Ang kasaysayan sa kapatagan ay nakasentro sa malalawak na sakahan.</span>" }
      ]
    },
    {
      title: "Paano Magsulat ng Maikling Tala ng Kasaysayan",
      text: "<span class=\"fil-sentence\" data-translation=\"To write community history, collect interviews from elders, check old photos, and list the dates in a timeline.\">Upang makapagsulat ng kasaysayan, kapanayamin ang mga nakatatanda at ayusin ang mga petsa.</span>",
      examples: [
        { title: "Pagsulat ng Ulat", content: "<span class=\"fil-sentence\" data-translation=\"Writing: 'Our barangay was built in 1982. First, there were only ten houses...' (Using sequence details)\">Pagsulat: 'Ang aking barangay ay itinatag noong 1982. Noong una, may sampung bahay lamang...'</span>" },
        { title: "Paghahanda ng Tsart", content: "<span class=\"fil-sentence\" data-translation=\"Creating a poster showing three historical events of your school.\">Paggawa ng poster na nagpapakita ng tatlong pangyayari sa paaralan.</span>" }
      ]
    },
    {
      title: "Buod ng Ating Aralin sa Kasaysayan",
      text: "<span class=\"fil-sentence\" data-translation=\"History consists of Tao, Lugar, Panahon, and Pangyayari. We study it using primary and secondary sources to understand community changes.\">Ang kasaysayan ay binubuo ng Tao, Lugar, Panahon, at Pangyayari. Pinag-aaralan natin ito upang maunawaan ang pagbabago.</span>",
      examples: [
        { title: "Pangunahing Kaisipan", content: "<span class=\"fil-sentence\" data-translation=\"History helps us love our community. We must preserve its symbols and story.\">Ang kasaysayan ay tumutulong sa atin na mahalin ang ating komunidad.</span>" },
        { title: "Gawain sa Bahay", content: "<span class=\"fil-sentence\" data-translation=\"Ask your parents about what your street looked like when they were kids.\">Tungkol sa hitsura ng inyong daan noong bata pa ang inyong mga magulang.</span>" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the definition of community history?\">Ano ang kahulugan ng kasaysayan ng komunidad?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Study of future space travel\">Pag-aaral ng paglalakbay sa kalawakan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Study of past events in a specific place\">Pag-aaral ng mga nakaraang kaganapan sa isang lugar</span>",
            "<span class=\"fil-phrase\" data-translation=\"Study of weather conditions\">Pag-aaral ng mga kondisyon ng panahon</span>",
            "<span class=\"fil-phrase\" data-translation=\"Study of computer games\">Pag-aaral ng mga laro sa kompyuter</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is NOT a key element of history?\">Alin sa mga sumusunod ang HINDI kabilang sa mga elemento ng kasaysayan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"People (Tao)\">Tao</span>",
            "<span class=\"fil-phrase\" data-translation=\"Place (Lugar)\">Lugar</span>",
            "<span class=\"fil-phrase\" data-translation=\"Television (Telebisyon)\">Telebisyon</span>",
            "<span class=\"fil-phrase\" data-translation=\"Time (Panahon)\">Panahon</span>"
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Who are the actors that create historical events in a community?\">Sino ang mga aktor na lumilikha ng kasaysayan sa komunidad?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Animals\">Mga Hayop</span>",
            "<span class=\"fil-phrase\" data-translation=\"People\">Mga Tao</span>",
            "<span class=\"fil-phrase\" data-translation=\"Buildings\">Mga Gusali</span>",
            "<span class=\"fil-phrase\" data-translation=\"Computers\">Mga Kompyuter</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What historical element answers the question 'When did it happen?'\">Aling elemento ng kasaysayan ang sumasagot sa tanong na 'Kailan ito naganap?'</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Place\">Lugar</span>",
            "<span class=\"fil-phrase\" data-translation=\"People\">Tao</span>",
            "<span class=\"fil-phrase\" data-translation=\"Time\">Panahon</span>",
            "<span class=\"fil-phrase\" data-translation=\"Event\">Pangyayari</span>"
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"If an event happened in '1945', which element does this refer to?\">Kung ang pangyayari ay naganap noong '1945', aling elemento ito?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Time\">Panahon</span>",
            "<span class=\"fil-phrase\" data-translation=\"Place\">Lugar</span>",
            "<span class=\"fil-phrase\" data-translation=\"People\">Tao</span>",
            "<span class=\"fil-phrase\" data-translation=\"Event\">Pangyayari</span>"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What historical element answers the question 'Where did it happen?'\">Aling elemento ang sumasagot sa tanong na 'Saan ito naganap?'</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Time\">Panahon</span>",
            "<span class=\"fil-phrase\" data-translation=\"Place\">Lugar</span>",
            "<span class=\"fil-phrase\" data-translation=\"People\">Tao</span>",
            "<span class=\"fil-phrase\" data-translation=\"Event\">Pangyayari</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a primary source of history?\">Alin sa mga sumusunod ang primaryang sanggunian ng kasaysayan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"An old diary written during the war\">Isang lumang talaarawan na isinulat noong digmaan</span>",
            "<span class=\"fil-phrase\" data-translation=\"A modern history textbook\">Isang makabagong aklat sa paaralan</span>",
            "<span class=\"fil-phrase\" data-translation=\"An encyclopedia published in 2020\">Isang ensiklopedya na inilathala noong 2020</span>",
            "<span class=\"fil-phrase\" data-translation=\"A movie about the heroes\">Isang pelikula tungkol sa mga bayani</span>"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which is a secondary source of history?\">Alin sa mga sumusunod ang sekundaryang sanggunian?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Old photograph of plaza\">Lumang larawan ng plasa</span>",
            "<span class=\"fil-phrase\" data-translation=\"Ancient clay pot dug from church\">Lumang palayok na nahukay sa simbahan</span>",
            "<span class=\"fil-phrase\" data-translation=\"A history book in the library\">Aklat ng kasaysayan sa silid-aklatan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Original birth certificate\">Orihinal na sertipiko ng kapanganakan</span>"
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the term for stories and history passed down verbally by elders?\">Ano ang tawag sa mga kwento at kasaysayang sinasabi ng mga nakatatanda?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Written records\">Written records</span>", "<span class=\"fil-sentence\" data-translation=\"Secondary source\">Secondary source</span>", "<span class=\"fil-sentence\" data-translation=\"Oral History\">Oral History</span>", "<span class=\"fil-sentence\" data-translation=\"Scientific experiment\">Scientific experiment</span>"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What visual tool shows historical events in their correct chronological order?\">Anong kagamitang biswal ang nagpapakita ng mga pangyayari ayon sa pagkakasunod-sunod?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Pie chart\">Pie chart</span>", "Bar graph", "<span class=\"fil-sentence\" data-translation=\"Timeline\">Timeline (Guhit ng Panahon)</span>", "<span class=\"fil-sentence\" data-translation=\"Scientific map\">Scientific map</span>"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which is an example of community change over time?\">Alin ang halimbawa ng pagbabago sa komunidad?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"The name of the country remains same\">Manatili ang pangalan ng bansa</span>",
            "<span class=\"fil-phrase\" data-translation=\"Dirt roads paved into concrete highways\">Ang daang lupa na naging sementadong highway</span>",
            "<span class=\"fil-phrase\" data-translation=\"The local mountain location\">Ang lokasyon ng bundok sa komunidad</span>",
            "<span class=\"fil-phrase\" data-translation=\"The sun rising in east\">Ang pagsikat ng araw sa silangan</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is an example of continuity (remaining the same)?\">Alin ang halimbawa ng bagay na nananatili o hindi nagbago?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Introduction of cellphones\">Ang pagdating ng mga cellphone</span>",
            "<span class=\"fil-phrase\" data-translation=\"Construction of tall malls\">Pagtatayo ng malalaking mall</span>",
            "<span class=\"fil-phrase\" data-translation=\"The historic stone church built in 1800\">Ang lumang simbahan na itinayo pa noong 1800</span>",
            "<span class=\"fil-phrase\" data-translation=\"The modern jeepney engines\">Ang mga makabagong makina ng jeepney</span>"
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What represents the identity of a barangay, often showing symbols of crops or sea?\">Ano ang kumakatawan sa pagkakakilanlan ng barangay, na nagpapakita ng palay o isda?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Computer screen\">Kamera sa kalsada</span>",
            "<span class=\"fil-phrase\" data-translation=\"Official Seal (Opisyal na Selyo)\">Opisyal na Selyo</span>",
            "<span class=\"fil-phrase\" data-translation=\"Store sign\">Pangalan ng tindahan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Classroom schedule\">Talaan ng klase</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"If a seal has a drawing of a boat, what does this indicate about history?\">Kung ang selyo ng bayan ay may guhit ng bangka, ano ang ipinapahiwatig nito?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"The community is in desert\">Ang bayan ay nasa disyerto</span>",
            "<span class=\"fil-phrase\" data-translation=\"Fishing or sea trade is historic\">Mahalaga ang pangingisda sa kasaysayan nito</span>",
            "<span class=\"fil-phrase\" data-translation=\"People only climb mountains\">Walang tubigan sa komunidad</span>",
            "<span class=\"fil-phrase\" data-translation=\"They build spaceships\">Gumagawa sila ng sasakyang pangkalawakan</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the official song of a town or province praising its people?\">Ano ang opisyal na awit ng bayan na nagpupuri sa mga mamamayan nito?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Lupang Hinirang (National Anthem)\">Lupang Hinirang</span>", "<span class=\"fil-sentence\" data-translation=\"Local Hymn\">Lokal na Himno (Hymn)</span>", "<span class=\"fil-sentence\" data-translation=\"Pop song\">Pop song</span>", "<span class=\"fil-sentence\" data-translation=\"National Anthem\">National Anthem</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a historical site in the Philippines?\">Alin sa mga sumusunod ang halimbawa ng makasaysayang pook?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A newly built park\">Isang bagong tayong palaruan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Intramuros in Manila\">Intramuros sa Maynila</span>",
            "<span class=\"fil-phrase\" data-translation=\"A modern cinema\">Isang makabagong sinehan</span>",
            "<span class=\"fil-phrase\" data-translation=\"A toy store\">Isang tindahan ng laruan</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is a traditional Filipino way of showing respect to elders?\">Ano ang tradisyonal na paraan ng pagpapakita ng paggalang sa nakatatanda?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Handshake\">Pakikipagkamay</span>",
            "<span class=\"fil-phrase\" data-translation=\"Mano Po\">Pagmamano (Mano po)</span>",
            "<span class=\"fil-phrase\" data-translation=\"Waving hand\">Paway-kamay</span>",
            "<span class=\"fil-phrase\" data-translation=\"Singing loudly\">Pag-awit nang malakas</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which festival celebrates bountiful harvest with decorations made of rice?\">Anong pista ang nagdiriwang ng masaganang ani gamit ang dekorasyong palay?</span>",
          options: ["<span class=\"fil-sentence\" data-translation=\"Christmas\">Christmas</span>", "<span class=\"fil-sentence\" data-translation=\"Pahiyas Festival\">Pahiyas Festival</span>", "<span class=\"fil-sentence\" data-translation=\"New Year\">New Year</span>", "<span class=\"fil-sentence\" data-translation=\"Halloween\">Halloween</span>"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What traditional paper cutting craft is famous Bulacan art?\">Anong tradisyonal na sining ng gupit-papel ang sikat sa Bulacan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Wrapper cutting (pabalat)\">Gupit-papel na pabalat ng pastillas</span>",
            "<span class=\"fil-phrase\" data-translation=\"Origami folding\">Pagtiklop ng origami</span>",
            "<span class=\"fil-phrase\" data-translation=\"Painting shapes\">Pagpinta ng hugis</span>",
            "<span class=\"fil-phrase\" data-translation=\"Clay modeling\">Paghuhubog ng luwad</span>"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the correct way to protect historical monuments in plazas?\">Ano ang tamang paraan ng pangangalaga sa mga monumento sa plasa?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Write names on statues\">Sulatan ang estatwa ng pangalan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Keep it clean and avoid garbage dumping\">Panatilihing malinis at huwag tapunan ng basura</span>",
            "<span class=\"fil-phrase\" data-translation=\"Climb on the monument\">Umakyat sa monumento</span>",
            "<span class=\"fil-phrase\" data-translation=\"Ignore the area\">Huwag pansinin ang lugar</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"How does geography affect community history?\">Paano nakakaapekto ang heograpiya sa kasaysayan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"No effect at all\">Walang epekto ito</span>",
            "<span class=\"fil-phrase\" data-translation=\"Coastal locations lead to fishing and trading history\">Ang lokasyon sa dagat ay nagdadala ng kasaysayan sa pangingisda</span>",
            "<span class=\"fil-phrase\" data-translation=\"It changes the calendar months\">Binabago nito ang mga buwan sa kalendaryo</span>",
            "<span class=\"fil-phrase\" data-translation=\"It makes writing history impossible\">Ginagawa nitong mahirap ang pagsulat</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a primary source for community founding?\">Alin ang primaryang sanggunian para sa pagtatag ng komunidad?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"The original signed founding document\">Ang orihinal na dokumento ng pagkakatatag na may lagda</span>",
            "<span class=\"fil-phrase\" data-translation=\"A story told in a television show\">Kuwentong napanood sa palabas sa TV</span>",
            "<span class=\"fil-phrase\" data-translation=\"A drawing of a fantasy town\">Guhit ng isang kathang-isip na bayan</span>",
            "<span class=\"fil-phrase\" data-translation=\"A modern online post\">Isang post sa internet ngayong taon</span>"
          ],
          answer: 0
        },
    {
          type: "verify",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
          options: [
            "Statement A: Ang kasaysayan ay binubuo ng mga elemento ng tao, lugar, panahon, at pangyayari.",
            "Statement B: Ang kasaysayan ay walang elemento at binubuo lamang ng haka-haka."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "<span class=\"fil-sentence\" data-translation=\"What historical element refers to the geographic location of an event?\">Anong elemento ng kasaysayan ang tumutukoy sa heograpikal na lokasyon ng kaganapan?</span>",
          answer: "lugar"
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What do we call the chronological record of past events in a community?\">Ano ang tawag sa sunod-sunod na talaan ng mga nakaraang pangyayari sa isang komunidad?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Weather chart\">Ulat-panahon</span>",
            "<span class=\"fil-phrase\" data-translation=\"History (Kasaysayan)\">Kasaysayan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Community map\">Mapa ng komunidad</span>",
            "<span class=\"fil-phrase\" data-translation=\"Classroom schedule\">Iskedyul ng klase</span>"
          ],
          answer: 1
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Why is an original letter written by a town founder in 1900 called a primary source?\">Bakit itinuturing na primaryang sanggunian ang orihinal na liham ng nagtatag ng bayan noong 1900?</span>",
      options: [
        "Sapagkat isinulat ito ng mismong tao na nakaranas ng kaganapan noong panahong iyon.",
        "Sapagkat ito ay isinulat ng isang makabagong manunulat sa kompyuter.",
        "Sapagkat ito ay aklat sa paaralan na binili sa mall.",
        "Sapagkat ito ay kwentong kathang-isip lamang."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"If we arrange these events: A) Grade 3, B) Kindergarten, C) Birth in a timeline, what is the correct order?\">Kung aayusin ang mga ito sa timeline: A) Baitang 3, B) Kindergarten, C) Kapanganakan, alin ang tama?</span>",
      options: ["A, B, C", "C, B, A", "B, C, A", "C, A, B"],
      answer: 1
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Which symbol represents the agriculture or food source of a farming community?\">Aling simbolo ang kumakatawan sa pagsasaka ng isang komunidad?</span>",
      options: [
        "Guhit ng gulong o makina",
        "Guhit ng isda at lambat",
        "Guhit ng uhay ng palay",
        "Guhit ng mga bituin sa langit"
      ],
      answer: 2
    },
    {
      type: "verify",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
      options: [
        "Statement A: Ang primaryang sanggunian ay nagbibigay ng direktang ebidensya, samantalang ang sekundaryang sanggunian ay pagsusuri lamang ng mga naunang ulat.",
        "Statement B: Ang sekundaryang sanggunian ay nagbibigay ng direktang ebidensya, samantalang ang primaryang sanggunian ay isinulat matapos ang limampung taon."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "<span class=\"fil-sentence\" data-translation=\"What historical element refers to the human actors who participate in events?\">Anong elemento ng kasaysayan ang tumutukoy sa mga aktor na tao?</span>",
      answer: "tao"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Pagguhit ng Timeline ng Buhay",
        desc: "<span class=\"fil-sentence\" data-translation=\"Draw a timeline showing three important events in your life (e.g., birth, starting school, entering Grade 3). Write the years and a brief description for each step. Show your timeline to your parent or teacher.\">Gumuhit ng timeline na nagpapakita ng tatlong mahahalagang pangyayari sa iyong buhay. Isulat ang mga taon at maikling paglalarawan sa bawat isa. Ipakita ito sa iyong magulang o guro.</span>",
        labels: [
          "<span class=\"fil-phrase\" data-translation=\"Chronological order of events\">Tamang pagkakasunod-sunod ng mga taon</span>",
          "<span class=\"fil-phrase\" data-translation=\"Visual neatness and labels\">Kalinisan at lagda ng guhit</span>",
          "<span class=\"fil-phrase\" data-translation=\"Clear explanation of details\">Malinaw na paliwanag sa mga kaganapan</span>"
        ]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Mga Elemento ng Kasaysayan</h3>\n                  <p class=\"ws-instruction\">Punan ang mga patlang upang makumpleto ang kahulugan ng Kasaysayan. <span class=\"fil-sentence\" data-translation=\"Fill in the blanks to complete the definition of History.\"></span></p>\n                  \n                  <div style=\"line-height: 2.2; font-size: 16px;\">\n                    Ang kasaysayan ay pag-aaral tungkol sa mga pangyayaring naganap sa \n                    <div class=\"writing-line inline-line\" style=\"width: 180px; display:inline-block; margin: 0 5px;\"></div> (panahon) \n                    na may kinalaman sa buhay ng mga \n                    <div class=\"writing-line inline-line\" style=\"width: 180px; display:inline-block; margin: 0 5px;\"><span class=\"ws-answer\">tao (people)</span></div> (tao), \n                    batay sa mga nakasulat at hindi nakasulat na mga \n                    <div class=\"writing-line inline-line\" style=\"width: 180px; display:inline-block; margin: 0 5px;\"><span class=\"ws-answer\">ebidensya (evidence)</span></div> (dokumento/ebidensya).\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Pagsusuri ng Artifact</h3>\n                  <p class=\"ws-instruction\">Gumuhit ng isang lumang bagay (artifact) na makikita sa inyong bahay at isulat ang kuwento nito. <span class=\"fil-sentence\" data-translation=\"Draw an old artifact found at home and write its story.\"></span></p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"drawing-box\" style=\"height: 220px;\">\n                        <span>Iguhit ang artifact</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <p>Kuwento ng Bagay:</p>\n                      <div class=\"writing-line\" style=\"margin-top: 15px; width: 100%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Aking Komunidad</h3>\n                  <p class=\"ws-instruction\">Isulat sa linya ang angkop na institusyon ng komunidad (Paaralan, Simbahan, Ospital) na inilalarawan.</p>\n                  \n                  <div style=\"font-size: 16px; line-height: 1.8; margin-top: 25px;\">\n                    <div style=\"margin-bottom: 25px;\">1. Dito nag-aaral ang mga bata upang matutong magbasa at sumulat: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Paaralan</span></div></div>\n                    <div style=\"margin-bottom: 25px;\">2. Dito nagdarasal at sumasamba ang mga tao sa Panginoon: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Simbahan</span></div></div>\n                    <div style=\"margin-bottom: 25px;\">3. Dito dinadala ang mga may sakit upang magpagamot at kumonsulta: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Ospital</span></div></div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK1_DATA.gmrc = {
  color: "#8b5cf6",
  icon: "🧘‍♂️",
  title: "GMRC",
  subtitle: "Week 1: Personal Hygiene & Self-Discipline",
  slides: [
    {
      title: "What is Personal Hygiene?",
      text: "Personal hygiene is the practice of keeping our bodies clean and neat. It is essential for staying healthy, preventing diseases, and showing respect to ourselves and the people around us.",
      examples: [
        { title: "Feeling Fresh", content: "Taking a warm bath in the morning makes you feel awake and ready for school." },
        { title: "Staying Healthy", content: "Keeping your body clean prevents harmful germs from making you sick." }
      ]
    },
    {
      title: "The Importance of Washing Hands",
      text: "Germs are tiny organisms that we cannot see. They cover our hands when we touch doorknobs, toys, and desks. Washing hands with soap removes these germs and keeps us safe.",
      examples: [
        { title: "Before Meals", content: "Always wash your hands with running water and soap before touching your sandwich." },
        { title: "After Using the Toilet", content: "Washing hands immediately after using the restroom blocks the spread of dangerous germs." }
      ]
    },
    {
      title: "Proper Handwashing Steps",
      text: "Washing hands is not just wetting them with water. You must apply soap, scrub your palms, the backs of your hands, between your fingers, and under your nails for at least 20 seconds.",
      examples: [
        { title: "The 20-Second Rule", content: "Hum the 'Happy Birthday' song twice while scrubbing your hands to make sure you wash long enough." },
        { title: "Drying Hands", content: "Use a clean towel or air dry your hands instead of wiping them on your dirty pants." }
      ]
    },
    {
      title: "Bathing Daily",
      text: "Bathing every day removes sweat, dirt, and body odor. Clean skin is healthy skin and prevents itchy rashes and skin infections.",
      examples: [
        { title: "Bathing in the Morning", content: "Taking a bath before putting on your clean school uniform." },
        { title: "Washing Hair", content: "Using shampoo to keep your hair clean and free from lice or dandruff." }
      ]
    },
    {
      title: "Caring for Your Teeth",
      text: "Brush your teeth at least twice a day—after breakfast and before going to bed. Brushing removes food particles and plaque, preventing cavities and bad breath.",
      examples: [
        { title: "Morning Brush", content: "Brushing your teeth after eating breakfast so your breath is fresh at school." },
        { title: "Night Brush", content: "Brushing before sleeping so bacteria cannot grow on your teeth overnight." }
      ]
    },
    {
      title: "Trimming Nails",
      text: "Germs and dirt hide easily under long fingernails. Keeping your fingernails and toenails short and clean is a key hygiene practice.",
      examples: [
        { title: "Fingernail Check", content: "Checking your nails every Sunday and asking an adult to help you trim them if they are long." },
        { title: "Cleaning Nails", content: "Using a small brush to scrub out black dirt from under your fingernails during a bath." }
      ]
    },
    {
      title: "Wearing Clean Clothes",
      text: "Clean clothes make you look neat and feel comfortable. Wearing dirty or sweaty clothes can cause skin irritation and bad odors.",
      examples: [
        { title: "Fresh Uniform", content: "Hanging up your school uniform after it is washed and ironed, ready for the next day." },
        { title: "Changing Socks", content: "Never wearing the same pair of socks two days in a row because feet sweat inside shoes." }
      ]
    },
    {
      title: "Sneeze and Cough Etiquette",
      text: "When you cough or sneeze, tiny droplets fly into the air. Cover your mouth and nose with a tissue or your elbow to prevent spreading germs to others.",
      examples: [
        { title: "Elbow Cover", content: "Snoozing directly into the inner fold of your elbow when you do not have a tissue." },
        { title: "Disposing Tissues", content: "Throwing used tissues directly into the trash bin and washing your hands immediately." }
      ]
    },
    {
      title: "Caring for Your Hair and Ears",
      text: "Comb your hair neatly before leaving home. Clean the outer parts of your ears with a soft cloth. Never insert sharp objects or cotton buds deep into your ears.",
      examples: [
        { title: "Combing Hair", content: "Using your own comb to style your hair neatly after taking a bath." },
        { title: "Ear Cleaning", content: "Using a damp towel to wipe the outer ear during your face wash." }
      ]
    },
    {
      title: "Hygiene as Respect for Others",
      text: "When we practice good hygiene, we show that we care about the comfort of our classmates and teachers. Cleanliness makes working together pleasant.",
      examples: [
        { title: "Smelling Clean", content: "Using deodorant or baby powder so you do not smell bad when sitting close to a seatmate." },
        { title: "Clean Desk", content: "Keeping your hands clean so you do not leave sticky marks on shared books." }
      ]
    },
    {
      title: "What is Self-Discipline?",
      text: "Self-discipline is the ability to control your actions, words, and habits. It means doing what is right and responsible, even when no one is watching or telling you what to do.",
      examples: [
        { title: "Homework Time", content: "Turning off the TV to finish your homework first without being asked by your parents." },
        { title: "Waiting Patiently", content: "Staying in line quietly in the school canteen instead of pushing ahead." }
      ]
    },
    {
      title: "Organizing Your Belongings",
      text: "A disciplined student takes care of their personal things. Putting items back in their proper places saves time and prevents them from being lost or broken.",
      examples: [
        { title: "School Bag Routine", content: "Packing your books and notebooks every night according to your school schedule." },
        { title: "Shoe Rack Rule", content: "Placing your outdoor shoes neatly on the rack by the door as soon as you enter the house." }
      ]
    },
    {
      title: "Handling Toys and Playthings",
      text: "Discipline means cleaning up after playing. Gathering your toys and placing them in their storage boxes keeps your home safe and neat.",
      examples: [
        { title: "Cleaning Up", content: "Putting your toy cars and blocks back in the plastic bin once you are finished playing." },
        { title: "Sharing Toys", content: "Allowing a friend to play with your toy and taking care not to damage it." }
      ]
    },
    {
      title: "Managing Screen Time",
      text: "Self-discipline means knowing when to stop using gadgets like tablets, phones, or computers. Setting a time limit protects your eyes and leaves time for study and play.",
      examples: [
        { title: "Setting a Timer", content: "Deciding to play a tablet game for only 30 minutes, then turning it off when the timer rings." },
        { title: "Outdoor Play", content: "Leaving the computer to go play tag with friends outside in the yard." }
      ]
    },
    {
      title: "Waking Up on Time",
      text: "Going to bed early and waking up on time is a disciplined habit. It prevents rushing in the morning and ensures you are never late for class.",
      examples: [
        { title: "Alarm Alarm", content: "Getting out of bed as soon as your alarm rings instead of hitting sleep." },
        { title: "Bedtime Routine", content: "Going to sleep at 8:30 PM so you get a full 9 hours of rest." }
      ]
    },
    {
      title: "Keeping Your Study Space Clean",
      text: "A clean study desk helps you focus. Keep pencils, papers, and books organized. Throw away pencil shavings and scrap papers in the trash bin.",
      examples: [
        { title: "Desk Organization", content: "Using a cup to hold your colored pencils and stacking your textbooks neatly." },
        { title: "Trash Disposal", content: "Standing up to throw paper scraps in the bin instead of leaving them on the floor." }
      ]
    },
    {
      title: "Following Classroom Rules",
      text: "Classroom rules are there to help everyone learn. Self-discipline means following these rules even when the teacher is looking away.",
      examples: [
        { title: "Raising Your Hand", content: "Waiting for the teacher to call your name before speaking out loud." },
        { title: "Quiet Seatwork", content: "Finishing your writing task quietly without disturbing your seatmate." }
      ]
    },
    {
      title: "Honesty as Self-Discipline",
      text: "Honesty is telling the truth. It takes self-discipline to tell the truth, especially when you have made a mistake and are afraid of being scolded.",
      examples: [
        { title: "Admitting a Mistake", content: "Telling your parents that you accidentally broke a glass bowl instead of blaming the cat." },
        { title: "Returning Lost Items", content: "Finding a pencil case on the floor and handing it to the teacher so it can be returned." }
      ]
    },
    {
      title: "Controlling Your Temper",
      text: "When we are angry or frustrated, we might want to shout or hit. Self-discipline helps us stay calm, take deep breaths, and use polite words to explain how we feel.",
      examples: [
        { title: "Taking a Breath", content: "Counting to ten slowly when a classmate accidentally knocks over your block tower." },
        { title: "Using Words", content: "Saying: 'Please do not take my pencil without asking' instead of pulling it back angrily." }
      ]
    },
    {
      title: "Being Responsible for Homework",
      text: "Your homework is your responsibility, not your parents'. Write down your assignments, do your best to solve them, and check your work before packing it.",
      examples: [
        { title: "Homework Logbook", content: "Writing down math exercises in your logbook so you do not forget them at home." },
        { title: "Checking Answers", content: "Reading your spelling words one more time to ensure all letters are correct." }
      ]
    },
    {
      title: "Helping with Simple Household Chores",
      text: "We show love and discipline at home by doing simple chores without being told. This helps our parents and teaches us valuable life skills.",
      examples: [
        { title: "Watering Plants", content: "Using a small watering can to water the potted herbs on the balcony every afternoon." },
        { title: "Wiping the Table", content: "Using a damp cloth to wipe the dining table clean after breakfast." }
      ]
    },
    {
      title: "Respecting Others' Boundaries",
      text: "Self-discipline includes respecting other people's space and things. Always ask for permission before borrowing a toy or book.",
      examples: [
        { title: "Asking to Borrow", content: "Saying: 'May I borrow your green crayon, please?' and waiting for a yes." },
        { title: "Returning on Time", content: "Returning a borrowed book as soon as you finish reading it so your friend can have it back." }
      ]
    },
    {
      title: "Healthy Eating Habits",
      text: "Discipline applies to what we eat. Choose healthy foods like fruits and vegetables over candy and junk food, even when you have money to buy anything.",
      examples: [
        { title: "Snack Choice", content: "Choosing an apple instead of a bag of salty chips for your morning school snack." },
        { title: "Drinking Water", content: "Drinking clean water instead of sugary soda when you feel thirsty after playing." }
      ]
    },
    {
      title: "Reflecting on Your Day",
      text: "At the end of the day, think about your actions. Celebrate your good habits and think about how you can improve tomorrow. This is how we grow.",
      examples: [
        { title: "Bedtime Reflection", content: "Thinking: 'Today I was helpful in class, but I need to sleep earlier tonight so I am not tired.'" },
        { title: "GMRC Logbook", content: "Drawing a star in your notebook for every day you washed your hands and kept your desk neat." }
      ]
    },
    {
      title: "Summary: Cleanliness and Discipline",
      text: "Personal hygiene protects our health, while self-discipline builds our character. Together, they help us become responsible children, good classmates, and helpful family members.",
      examples: [
        { title: "Daily Rules", content: "Clean body -> Brush teeth -> Trim nails -> Organize toys -> Do homework -> Speak calmly." },
        { title: "Your Commitment", content: "Decide on one self-discipline goal today (like packing your bag) and practice it all week!" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "Why is personal hygiene important for our health?",
          options: ["It makes us run faster.", "It removes dirt and prevents germs from causing sickness.", "It helps us read books quickly.", "It changes our eye color."],
          answer: 1
        },
    {
          type: "choice",
          q: "How long should you scrub your hands with soap to remove germs effectively?",
          options: ["2 seconds", "5 seconds", "20 seconds", "60 minutes"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which of the following is a proper handwashing habit?",
          options: [
            "Wiping dirty hands on your shirt.",
            "Wetting your hands with only water without soap.",
            "Scrubbing palms, fingers, and under nails with soap.",
            "Washing hands only once a week."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "When is the most critical time to wash your hands to prevent getting sick?",
          options: ["Before reading a book", "Before eating meals", "After brushing your hair", "Before sleeping"],
          answer: 1
        },
    {
          type: "choice",
          q: "How often should you brush your teeth to maintain good oral health?",
          options: ["Once a week", "At least twice a day", "Only on Sundays", "Every hour"],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do if your fingernails are long and dirty?",
          options: [
            "Bite them off with your teeth.",
            "Ask an adult to help you trim them neatly.",
            "Paint them to cover the dirt.",
            "Ignore them."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the correct sneeze and cough etiquette to prevent spreading germs?",
          options: [
            "Sneeze directly towards your classmate.",
            "Cover your mouth and nose with your hands.",
            "Cover your mouth and nose with your inner elbow or a tissue.",
            "Sneeze loudly without covering."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "Why should we change our socks every day?",
          options: [
            "Socks get smaller if worn twice.",
            "Socks collect sweat and bacteria, leading to foot odor.",
            "Clean socks help us jump higher.",
            "To match our shirt color."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which object should NEVER be inserted into your ear canal?",
          options: ["Cotton bud or sharp stick", "Soft washcloth", "Warm water during bath", "Nothing, ears don't need inserting objects"],
          answer: 0
        },
    {
          type: "choice",
          q: "What is self-discipline?",
          options: [
            "Doing whatever you want all the time.",
            "Doing what is right and responsible, even when no one is watching.",
            "Waiting for someone to tell you to clean your room.",
            "Shouting when you are angry."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of these is a disciplined habit after playing with toys?",
          options: [
            "Leave them on the living room floor.",
            "Kick them under the bed.",
            "Gather and put them back in the toy bin.",
            "Ask your mother to clean them up."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "Where should you place your school shoes when you arrive home from school?",
          options: ["On the kitchen table", "In the middle of the living room", "Neatly on the shoe rack", "Under the dining chair"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which action shows self-discipline regarding screen time?",
          options: [
            "Playing games on the phone until midnight.",
            "Turning off the tablet when your time limit is reached.",
            "Crying when your parents ask you to put away the phone.",
            "Hiding the tablet under your pillow to play later."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the best routine to prepare for school the next morning?",
          options: [
            "Pack your school bag in the morning when you are rushing.",
            "Pack your school bag the night before based on your schedule.",
            "Go to school without checking your bag.",
            "Let your classmates pack your bag."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do to maintain a clean study space at home?",
          options: [
            "Leave food crumbs and pencil shavings on the desk.",
            "Stack books neatly and throw paper scraps in the bin.",
            "Write on the desk with crayons.",
            "Keep dirty plates on your study books."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "How should you behave when you want to speak in the classroom?",
          options: [
            "Shout your answer immediately.",
            "Whisper to your seatmate.",
            "Raise your hand and wait for the teacher to call your name.",
            "Stand up and walk to the front."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "What does it mean to show honesty when you make a mistake?",
          options: [
            "Blame someone else so you don't get in trouble.",
            "Lie about what happened.",
            "Tell the truth and accept responsibility.",
            "Run away and hide."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "What is a responsible way to handle your school homework?",
          options: [
            "Ask your parents to do it for you.",
            "Copy your friend's answers at school.",
            "Write down assignments and complete them on time.",
            "Forget about it."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "If your friend has a toy you want to play with, what should you do?",
          options: [
            "Pull it out of their hands.",
            "Wait until they put it down, then take it without asking.",
            "Ask politely if you can borrow it or play together.",
            "Cry until they give it to you."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "Which of these snack choices shows self-discipline for a healthy body?",
          options: [
            "Buying three bags of candy.",
            "Choosing an apple and water.",
            "Eating sweet chocolates for lunch.",
            "Drinking soda instead of water."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do when you feel very angry at a classmate?",
          options: [
            "Hit them immediately.",
            "Shout mean words at them.",
            "Take a deep breath, stay calm, and use polite words.",
            "Throw a pencil at them."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "Which household chore is suitable for a Grade 3 student to show helpfulness?",
          options: [
            "Operating the heavy gas stove",
            "Wiping the dining table and watering plants",
            "Climbing a high ladder to clean the roof",
            "Repairing broken electrical wires"
          ],
          answer: 1
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: Self-discipline means doing your chores and homework only when a parent is watching you.",
            "Statement B: Self-discipline means doing your duties responsibly without needing constant supervision."
          ],
          answer: 1
        },
    {
          type: "blank",
          q: "What is the term for the microscopic organisms on our hands that can cause diseases and must be washed away with soap?",
          answer: "germs"
        },
    {
          type: "choice",
          q: "Which of the following shows high self-discipline after playing with block toys in your bedroom?",
          options: [
            "Leaving them on the rug so you can play tomorrow.",
            "Asking your mother to sweep them under the bed.",
            "Gathering and storing them neatly back in their toy box.",
            "Kicking them into the hallway corner."
          ],
          answer: 2
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "If a classmate forgets their pencil and you have an extra one, what should you do to show good manners?",
      options: [
        "Hide your extra pencil.",
        "Lend it to them politely and remind them to return it later.",
        "Sell it to them for money.",
        "Throw it at them."
      ],
      answer: 1
    },
    {
      type: "choice",
      q: "Why is copying homework from a classmate a lack of self-discipline?",
      options: [
        "Because it is too easy.",
        "Because it is dishonest and prevents you from learning the lesson.",
        "Because the teacher will not see it.",
        "Because your classmate might write slow."
      ],
      answer: 1
    },
    {
      type: "choice",
      q: "You are playing a game and notice a wrapper on the floor. What should you do?",
      options: [
        "Kick it under the sofa.",
        "Pick it up and throw it in the trash bin.",
        "Leave it there because you did not throw it.",
        "Wait for your mother to clean it."
      ],
      answer: 1
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: Keeping clean protects your health, and keeping organized helps your mind focus better on studying.",
        "Statement B: Hygiene has no effect on health, and keeping your desk messy makes it easier to find pencils."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "What virtue describes telling the truth even when you might face consequences?",
      answer: "honesty"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Hygiene and Organization Checklist",
        desc: "Perform this task at home: Wash your hands using the correct 6-step method for 20 seconds, tidy your study area by stack your books neatly, and place your shoes on the shoe rack. Have a parent check your work.",
        labels: ["Washed hands correctly for 20 seconds", "Tidied study desk and stacked books", "Placed shoes in their proper rack location"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Hygiene Actions</h3>\n                  <p class=\"ws-instruction\">Put a checkmark (✓) inside the box if the action shows good personal hygiene, and a cross (✗) if it does not.</p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 16px;\">\n                    <div style=\"margin-bottom: 20px;\">[ &nbsp;<span class=\"ws-answer\">✓</span>&nbsp; ] 1. Washing hands before and after meals.</div>\n                    <div style=\"margin-bottom: 20px;\">[ &nbsp;<span class=\"ws-answer\">✗</span>&nbsp; ] 2. Wearing the same dirty socks for three days.</div>\n                    <div style=\"margin-bottom: 20px;\">[ &nbsp;<span class=\"ws-answer\">✓</span>&nbsp; ] 3. Brushing teeth twice a day (morning and night).</div>\n                    <div style=\"margin-bottom: 20px;\">[ &nbsp;<span class=\"ws-answer\">✓</span>&nbsp; ] 4. Taking a bath daily to wash off sweat and dirt.</div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Personal Hygiene Commitment</h3>\n                  <p class=\"ws-instruction\">Write three personal hygiene habits you promise to perform daily to keep your body clean and healthy.</p>\n                  \n                  <div style=\"margin-top: 10px;\">\n                    <div style=\"margin-bottom: 25px;\">1. I promise to: <div class=\"writing-line inline-line\" style=\"width: 70%; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Wash my hands with soap and water</span></div></div>\n                    <div style=\"margin-bottom: 25px;\">2. I promise to: <div class=\"writing-line inline-line\" style=\"width: 70%; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Brush my teeth after every meal</span></div></div>\n                    <div style=\"margin-bottom: 10px;\">3. I promise to: <div class=\"writing-line inline-line\" style=\"width: 70%; display:inline-block; margin-left: 10px;\"><span class=\"ws-answer\">Take a bath daily</span></div></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Clean Habits Connection</h3>\n                  <p class=\"ws-instruction\">Draw lines connecting the hygiene tools to their correct purpose.</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 20px;\">\n                    <div class=\"ws-col-half\" style=\"font-size: 16px; line-height: 2.2;\">\n                      <div>1. Toothbrush & Toothpaste</div>\n                      <div>2. Soap & Water</div>\n                      <div>3. Nail Cutter</div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"font-size: 16px; line-height: 2.2; text-align: right; padding-right: 20px;\">\n                      <div>[ &nbsp;<span class=\"ws-answer\">2</span>&nbsp; ] &nbsp; Washing hands and bathing</div>\n                      <div>[ &nbsp;<span class=\"ws-answer\">3</span>&nbsp; ] &nbsp; Trimming long fingernails</div>\n                      <div>[ &nbsp;<span class=\"ws-answer\">1</span>&nbsp; ] &nbsp; Brushing teeth to prevent decay</div>\n                    </div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK1_ADVANCED_DATA = {
  "math": {
    "color": "#3b82f6",
    "icon": "🔢",
    "title": "Mathematics",
    "subtitle": "Week 1: Angles & Protractor [Advanced]",
    "slides": [
      {
        "title": "Introduction to Angles",
        "image": "images/angle_types.png",
        "text": "An angle is formed when two rays meet at a common endpoint called a vertex. In geometry, we measure the size of this opening in degrees (°) using a protractor.",
        "examples": [
          {
            "title": "Rays and Vertex",
            "content": "Think of a clock's hands. The point where they meet in the center is the vertex, and the hands themselves are the rays."
          },
          {
            "title": "Angle Notation",
            "content": "An angle formed by rays AB and AC is written as ∠BAC or ∠CAB, with the vertex letter 'A' always in the middle."
          }
        ]
      },
      {
        "title": "Understanding Degrees",
        "text": "A full rotation is divided into 360 equal parts, each representing 1 degree. The degree symbol (°) indicates the size of the angle's rotation.",
        "examples": [
          {
            "title": "Full Circle",
            "content": "A circular pizza sliced into 360 tiny equal pieces would have slices that are exactly 1° each."
          },
          {
            "title": "Protractors",
            "content": "Protractors have two scales (inner and outer) from 0° to 180° to read angles from both left and right directions."
          }
        ]
      },
      {
        "title": "The Right Angle",
        "text": "A right angle measures exactly 90 degrees. It forms a perfect 'L' shape and represents a quarter of a full rotation. It is represented by a small square corner symbol.",
        "examples": [
          {
            "title": "L-Shape",
            "content": "The corner of a book, a tablet screen, or where a wall meets the floor are common right angles."
          },
          {
            "title": "Measurement",
            "content": "If you align a protractor, the vertical line pointing straight up to 90° forms a right angle with the base line."
          }
        ]
      },
      {
        "title": "Acute Angles",
        "text": "An acute angle is any angle that measures greater than 0 degrees but less than 90 degrees. The word 'acute' comes from the Latin word for 'sharp'.",
        "examples": [
          {
            "title": "Sharp Angles",
            "content": "A slice of cake, a half-opened pair of scissors, or the beak of a bird are typical acute angles."
          },
          {
            "title": "Range",
            "content": "Angles measuring 15°, 45°, and 89° are all classified as acute angles."
          }
        ]
      },
      {
        "title": "Obtuse Angles",
        "text": "An obtuse angle measures greater than 90 degrees but less than 180 degrees. The word 'obtuse' means 'blunt' or 'dull'.",
        "examples": [
          {
            "title": "Blunt Angles",
            "content": "An open laptop screen tilted backwards, a fan spread out wide, or a reclining chair form obtuse angles."
          },
          {
            "title": "Range",
            "content": "Angles measuring 95°, 120°, and 179° are all classified as obtuse angles."
          }
        ]
      },
      {
        "title": "Straight Angles",
        "text": "A straight angle measures exactly 180 degrees. It forms a perfectly straight line and represents a half rotation of a circle.",
        "examples": [
          {
            "title": "Straight Line",
            "content": "A flat ruler or a clock showing exactly 6:00 forms a straight angle of 180°."
          },
          {
            "title": "Two Right Angles",
            "content": "Adding two right angles together (90° + 90°) creates a straight angle of 180°."
          }
        ]
      },
      {
        "title": "Reflex Angles",
        "text": "A reflex angle measures greater than 180 degrees but less than 360 degrees. It represents the outer opening of a standard angle.",
        "examples": [
          {
            "title": "Outer Opening",
            "content": "If a slice of pie is cut out, the remaining larger portion of the pie forms a reflex angle at the center."
          },
          {
            "title": "Range",
            "content": "Angles measuring 200°, 270°, and 345° are all classified as reflex angles."
          }
        ]
      },
      {
        "title": "Measuring with a Protractor: Step 1",
        "text": "To measure an angle, place the center mark (or hole) of the protractor directly over the angle's vertex.",
        "examples": [
          {
            "title": "Centering",
            "content": "Make sure the center intersection point of the protractor lies precisely on the point where the two lines meet."
          },
          {
            "title": "Common Mistake",
            "content": "Do not align the bottom edge of the plastic protractor. Align the printed 0° baseline instead."
          }
        ]
      },
      {
        "title": "Measuring with a Protractor: Step 2",
        "text": "Align the baseline of the protractor (the 0° line) with one of the rays of the angle.",
        "examples": [
          {
            "title": "0-Degree Alignment",
            "content": "Rotate the protractor keeping the center fixed on the vertex until the flat black line aligns with the bottom ray."
          },
          {
            "title": "Left or Right",
            "content": "If the ray points to the right, use the scale that starts with 0 on the right (usually the inner scale)."
          }
        ]
      },
      {
        "title": "Measuring with a Protractor: Step 3",
        "text": "Follow the second ray of the angle to the curved edge of the protractor and read the degree measure.",
        "examples": [
          {
            "title": "Reading the Scale",
            "content": "If you aligned 0 on the right scale, read the numbers going up from that side (e.g., 0, 10, 20, 30...)."
          },
          {
            "title": "Double Checking",
            "content": "If the angle is clearly sharp (acute), your reading must be less than 90°. If you read 130° for a sharp angle, you used the wrong scale!"
          }
        ]
      },
      {
        "title": "Drawing Angles: Step 1",
        "text": "To draw an angle of a specific size, first use a straight edge to draw a single ray and mark the vertex point.",
        "examples": [
          {
            "title": "Base Ray",
            "content": "Draw a horizontal line of about 5cm. Put a dot at the left end to represent the vertex 'O'."
          },
          {
            "title": "Labeling",
            "content": "Draw an arrowhead at the right end to complete the ray 'OA'."
          }
        ]
      },
      {
        "title": "Drawing Angles: Step 2",
        "text": "Place the protractor's center on the vertex dot and align the baseline with your drawn ray.",
        "examples": [
          {
            "title": "Alignment Check",
            "content": "Keep the center on 'O' and the 0° line lying exactly on ray OA."
          },
          {
            "title": "Marking the Angle",
            "content": "Find the desired angle (e.g. 50°) on the scale and make a small pencil mark 'B' right next to that number."
          }
        ]
      },
      {
        "title": "Drawing Angles: Step 3",
        "text": "Remove the protractor and use its straight edge to connect the vertex dot 'O' to your pencil mark 'B'.",
        "examples": [
          {
            "title": "Connecting",
            "content": "Draw a straight line from 'O' through the mark 'B' and add an arrowhead."
          },
          {
            "title": "Final Check",
            "content": "You now have ∠AOB = 50°, which is an acute angle."
          }
        ]
      },
      {
        "title": "Adjacent Angles",
        "text": "Adjacent angles are two angles that share a common vertex and a common ray, but do not overlap.",
        "examples": [
          {
            "title": "Side-by-Side",
            "content": "Think of a divided window pane. The two adjacent panels form two angles sharing the divider line."
          },
          {
            "title": "Common Boundary",
            "content": "If ∠AOB and ∠BOC share ray OB and vertex O, they are adjacent angles."
          }
        ]
      },
      {
        "title": "Complementary Angles",
        "text": "Complementary angles are two angles whose measures add up to exactly 90 degrees.",
        "examples": [
          {
            "title": "Right Angle Split",
            "content": "A 90° corner divided into a 30° angle and a 60° angle creates complementary angles."
          },
          {
            "title": "Sum Formula",
            "content": "If ∠1 + ∠2 = 90°, then ∠1 and ∠2 are complementary."
          }
        ]
      },
      {
        "title": "Supplementary Angles",
        "text": "Supplementary angles are two angles whose measures add up to exactly 180 degrees.",
        "examples": [
          {
            "title": "Straight Line Split",
            "content": "A straight road with a dividing line branching off at 120° leaves an adjacent angle of 60° (120° + 60° = 180°)."
          },
          {
            "title": "Sum Formula",
            "content": "If ∠A + ∠B = 180°, they are supplementary."
          }
        ]
      },
      {
        "title": "Vertical Angles",
        "text": "Vertical angles are opposite angles formed by two intersecting straight lines. They are always equal in measure.",
        "examples": [
          {
            "title": "Intersecting Lines",
            "content": "Draw an 'X'. The top and bottom angles are vertical, and the left and right angles are vertical."
          },
          {
            "title": "Congruence",
            "content": "If the left angle is 70°, the right angle opposite to it must also be exactly 70°."
          }
        ]
      },
      {
        "title": "Angles in a Triangle",
        "text": "In any triangle, the sum of all three interior angles is always exactly 180 degrees.",
        "examples": [
          {
            "title": "Angle Sum Theorem",
            "content": "If a triangle has angles of 50° and 60°, the third angle must be 180° - 50° - 60° = 70°."
          },
          {
            "title": "Right Triangle",
            "content": "A right triangle has one 90° angle. The other two angles must add up to 90° (complementary)."
          }
        ]
      },
      {
        "title": "Angles in a Quadrilateral",
        "text": "In any four-sided shape (quadrilateral), the sum of all four interior angles is always exactly 360 degrees.",
        "examples": [
          {
            "title": "Rectangle and Square",
            "content": "A rectangle has four right angles: 90° + 90° + 90° + 90° = 360°."
          },
          {
            "title": "Decomposing",
            "content": "Any quadrilateral can be split into two triangles. Since each triangle has 180°, the total sum is 2 * 180° = 360°."
          }
        ]
      },
      {
        "title": "Angles in Everyday Life: Architecture",
        "text": "Engineers and builders use angles to ensure structures are stable and safe.",
        "examples": [
          {
            "title": "Sloped Roofs",
            "content": "Roofs are built at acute angles (e.g. 35°) to allow rainwater and snow to slide off easily."
          },
          {
            "title": "Bridges",
            "content": "Truss bridges use triangles with acute angles (often 60°) to distribute heavy loads evenly."
          }
        ]
      },
      {
        "title": "Angles in Sports",
        "text": "Athletes use angles to improve their performance and target accuracy.",
        "examples": [
          {
            "title": "Soccer Kicks",
            "content": "A soccer player shoots at an angle to bypass the goalkeeper. The wider the angle of the shot, the harder it is to defend."
          },
          {
            "title": "Basketball Shots",
            "content": "A high arching basketball shot (around 45° to 52° entry angle) has a larger target area in the rim than a flat shot."
          }
        ]
      },
      {
        "title": "Angles in Nature",
        "text": "Nature shows geometric angles in structures made by animals and plants.",
        "examples": [
          {
            "title": "Honeycomb Cells",
            "content": "Bees build hexagonal cells. Each interior angle of a regular hexagon is exactly 120°, providing maximum strength and space."
          },
          {
            "title": "Spider Webs",
            "content": "Webs have radial threads branching out at equal acute angles to distribute impact forces from trapped insects."
          }
        ]
      },
      {
        "title": "Angles in Navigation",
        "text": "Navigators and pilots use angles (bearings) to steer ships and planes in the correct direction.",
        "examples": [
          {
            "title": "Compass Bearings",
            "content": "A bearing is an angle measured clockwise from North (0°). East is 90°, South is 180°, and West is 270°."
          },
          {
            "title": "Heading Adjustments",
            "content": "A pilot adjusts the flight angle by 5° to correct for wind drift."
          }
        ]
      },
      {
        "title": "Protractors: History & Design",
        "text": "Protractors have been used for centuries for mapmaking and astronomy. Modern protractors are made of clear plastic to see lines underneath.",
        "examples": [
          {
            "title": "Scale Markings",
            "content": "Most protractors have markings every 1°, with longer lines every 5° and 10° for easy counting."
          },
          {
            "title": "Circular Protractors",
            "content": "Circular 360° protractors are used in advanced navigation and drafting to measure reflex angles directly."
          }
        ]
      },
      {
        "title": "Review of Angles",
        "text": "Let's summarize: Angles are formed by two rays sharing a vertex. They are measured in degrees using a protractor. Angles are classified as acute (<90°), right (90°), obtuse (91°-179°), straight (180°), or reflex (181°-359°). Complementary angles add to 90°, and supplementary add to 180°.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Find three angles in your room and classify them as acute, right, or obtuse!"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "What is the common endpoint where two rays meet to form an angle?",
        "options": [
          "Ray",
          "Vertex",
          "Degree",
          "Protractor"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "An angle that measures exactly 90 degrees is called a/an ______ angle.",
        "options": [
          "Acute",
          "Obtuse",
          "Right",
          "Straight"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "An angle measuring 45° is classified as:",
        "options": [
          "Obtuse",
          "Acute",
          "Right",
          "Reflex"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "An angle measuring 135° is classified as:",
        "options": [
          "Acute",
          "Right",
          "Obtuse",
          "Straight"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "An angle that measures exactly 180 degrees is called a ______ angle.",
        "options": [
          "Right",
          "Obtuse",
          "Straight",
          "Reflex"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the classification of an angle measuring 240°?",
        "options": [
          "Obtuse",
          "Straight",
          "Reflex",
          "Acute"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which tool is primarily used to measure and draw angles?",
        "options": [
          "Ruler",
          "Compass",
          "Protractor",
          "Thermometer"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Two angles are complementary if their sum is exactly:",
        "options": [
          "45°",
          "90°",
          "180°",
          "360°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Two angles are supplementary if their sum is exactly:",
        "options": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If ∠A and ∠B are vertical angles, and ∠A = 75°, what is the measure of ∠B?",
        "options": [
          "15°",
          "75°",
          "105°",
          "180°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "The sum of the interior angles of any triangle is always:",
        "options": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "The sum of the interior angles of a quadrilateral is:",
        "options": [
          "180°",
          "270°",
          "360°",
          "540°"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What type of angle is formed by the hands of a clock showing exactly 3:00?",
        "options": [
          "Acute",
          "Obtuse",
          "Right",
          "Straight"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "If one angle in a complementary pair measures 25°, what is the measure of the other angle?",
        "options": [
          "25°",
          "65°",
          "75°",
          "155°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If one angle in a supplementary pair measures 110°, what is the measure of the other angle?",
        "options": [
          "70°",
          "80°",
          "90°",
          "110°"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "If a triangle has angles of 90° and 40°, what is the measure of the third angle?",
        "options": [
          "40°",
          "50°",
          "60°",
          "90°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What scale should you read on a protractor if the base ray points to the left?",
        "options": [
          "Inner scale starting with 0 on the right",
          "Outer scale starting with 0 on the left",
          "Either scale",
          "Neither scale"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following angle measures represents a reflex angle?",
        "options": [
          "85°",
          "180°",
          "195°",
          "90°"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Opposite angles formed by two intersecting lines are called ______ angles.",
        "options": [
          "Adjacent",
          "Complementary",
          "Vertical",
          "Supplementary"
        ],
        "answer": 2
      },
      {
        "type": "tf",
        "q": "A reflex angle is smaller than a straight angle.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "All acute angles measure less than 90 degrees.",
        "answer": true
      },
      {
        "type": "tf",
        "q": "An angle measuring 90.5° is classified as an obtuse angle.",
        "answer": true
      },
      {
        "type": "blank",
        "q": "If two adjacent angles share a vertex and a ray, and they add up to 180°, they form a linear ______.",
        "answer": "pair"
      },
      {
        "type": "blank",
        "q": "What is the measure in degrees of a right angle?",
        "answer": "90"
      },
      {
        "type": "blank",
        "q": "If a triangle has three equal angles, each angle measures ______ degrees.",
        "answer": "60"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "If an angle is three times its complement, what is the measure of the angle?",
        "options": [
          "22.5°",
          "30°",
          "45°",
          "67.5°"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "Angle A and Angle B form a linear pair. If Angle A is 20° more than double Angle B, what is Angle A?",
        "options": [
          "53.3°",
          "60°",
          "120°",
          "126.7°"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "A quadrilateral has three angles measuring 80°, 100°, and 75°. What is the measure of the fourth angle?",
        "options": [
          "85°",
          "95°",
          "105°",
          "115°"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the angle formed between the hands of a clock showing exactly 4:00?",
        "options": [
          "90°",
          "120°",
          "150°",
          "180°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What do you call two angles that have a common vertex, a common ray, and whose sum equals 90 degrees?",
        "options": [
          "Complementary adjacent angles",
          "Supplementary adjacent angles",
          "Vertical angles",
          "Linear pairs"
        ],
        "answer": 0
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Angle Hunt & Measurement",
      "desc": "Get a sheet of paper. Hunt around your room to locate three distinct items: one with an acute angle, one with a right angle, and one with an obtuse angle. Use a protractor to measure the size of these angles. Draw a sketch of the objects on your paper, label the vertex and rays, and write the measured degrees. Show this sheet to your parent or teacher.",
      "labels": [
        "Correct identification and drawing of acute, right, and obtuse angles",
        "Accurate alignment and degree reading using a protractor",
        "Clear labeling of vertex, rays, and angle name (e.g. ∠AOB)"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Angle Classification</h3>\n                  <p class=\"ws-instruction\">Classify each angle measure as: Acute, Right, Obtuse, Straight, or Reflex.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Angle Measure</th>\n                        <th>Classification</th>\n                        <th>Angle Measure</th>\n                        <th>Classification</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>45°</td>\n                        <td></td>\n                        <td>120°</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>90°</td>\n                        <td></td>\n                        <td>180°</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>245°</td>\n                        <td></td>\n                        <td>89°</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Angle Construction Grid</h3>\n                  <p class=\"ws-instruction\">Use the coordinate grids to draw: 1) an Acute angle of 60°, and 2) an Obtuse angle of 135°. Label the vertex and rays.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Draw 60° angle here</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Draw 135° angle here</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Protractor Estimation</h3>\n                  <p class=\"ws-instruction\">Estimate the angle measurement and classify it (Acute, Right, Obtuse, Straight, Reflex).</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Angle Figure Concept</th>\n                        <th>Estimated Measure (Degrees)</th>\n                        <th>Angle Classification</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1. Halfway between straight vertical and horizontal (Acute)</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>2. Slightly wider than a perfect L corner (Obtuse)</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>3. A flat, straight horizontal line (Straight)</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
    }
  },
  "science": {
    "color": "#10b981",
    "icon": "🔬",
    "title": "Science",
    "subtitle": "Week 1: Famous Scientists & Inquiry [Advanced]",
    "slides": [
      {
        "title": "What is Science?",
        "text": "Science is a systematic body of knowledge based on facts, observations, and experiments. Scientists use the scientific method to discover how things work in the universe.",
        "examples": [
          {
            "title": "Observing Phenomena",
            "content": "Noticing that leaves change color in autumn and asking *why* is the first step in science."
          },
          {
            "title": "Evidence-Based",
            "content": "Science does not rely on guesses; it requires physical evidence gathered through fair testing."
          }
        ]
      },
      {
        "title": "The Scientific Method: Overview",
        "text": "The scientific method is a step-by-step process used by scientists to investigate questions and solve problems. It ensures that experiments are logical and unbiased.",
        "examples": [
          {
            "title": "Step Order",
            "content": "Question -> Hypothesis -> Experiment -> Observation -> Conclusion."
          },
          {
            "title": "Repeatability",
            "content": "Other scientists must be able to repeat the same steps and get the same results for it to be accepted."
          }
        ]
      },
      {
        "title": "Defining Variables: Independent Variable",
        "text": "In a scientific experiment, variables are factors that can change. The independent variable is the one factor that the scientist changes on purpose.",
        "examples": [
          {
            "title": "Watering Plants",
            "content": "If you test how the amount of water affects plant growth, the independent variable is the amount of water you give to each plant."
          },
          {
            "title": "One Variable",
            "content": "A fair test changes only *one* independent variable at a time."
          }
        ]
      },
      {
        "title": "Defining Variables: Dependent Variable",
        "text": "The dependent variable is the factor that you observe or measure to see how it responds. It 'depends' on the independent variable.",
        "examples": [
          {
            "title": "Plant Height",
            "content": "In the plant growth experiment, the dependent variable is the height of the plant measured in centimeters."
          },
          {
            "title": "Data Collection",
            "content": "The dependent variable provides the numbers or observations that make up your data."
          }
        ]
      },
      {
        "title": "Defining Variables: Controlled Variables",
        "text": "Controlled variables are all the other factors that must be kept exactly the same throughout the experiment to ensure a fair test.",
        "examples": [
          {
            "title": "Fair Environment",
            "content": "In the plant test, controlled variables include the type of plant, type of soil, pot size, and amount of sunlight."
          },
          {
            "title": "Why Control?",
            "content": "If you don't keep these the same, you won't know if the water or something else caused the plant to grow."
          }
        ]
      },
      {
        "title": "Formulating a Hypothesis",
        "text": "A hypothesis is an educated, testable guess about the outcome of an experiment. It is often written as an 'If... then...' statement.",
        "examples": [
          {
            "title": "Example Hypothesis",
            "content": "'If I increase the amount of sunlight a plant receives, then the plant will grow taller.'"
          },
          {
            "title": "Testable",
            "content": "A hypothesis must be something you can prove right or wrong through an experiment."
          }
        ]
      },
      {
        "title": "Scientific Attitudes: Curiosity & Objectivity",
        "text": "Successful scientists possess specific attitudes. Curiosity is the desire to learn and ask questions, while objectivity is the ability to look at facts without letting personal feelings interfere.",
        "examples": [
          {
            "title": "Curiosity",
            "content": "Dr. Angel Alcala wondered how reef fish populations were affected by fishing, leading to his research on marine sanctuaries."
          },
          {
            "title": "Objectivity",
            "content": "Accepting that your hypothesis was wrong because the data proved it wrong is showing scientific objectivity."
          }
        ]
      },
      {
        "title": "Scientific Attitudes: Open-Mindedness & Perseverance",
        "text": "Open-mindedness is the willingness to accept new ideas, and perseverance is the determination to keep trying even when experiments fail.",
        "examples": [
          {
            "title": "Perseverance",
            "content": "Thomas Edison tried thousands of materials before finding the correct carbon filament for the light bulb."
          },
          {
            "title": "Learning from Failure",
            "content": "In science, a failed experiment is valuable because it tells you what *doesn't* work."
          }
        ]
      },
      {
        "title": "Filipino Scientists: Dr. Angel Alcala",
        "text": "Dr. Angel Alcala was a renowned Filipino biologist and environmentalist. He was a pioneer in creating the first artificial coral reefs and marine sanctuaries in the Philippines.",
        "examples": [
          {
            "title": "Marine Sanctuary Impact",
            "content": "His work in Apo Island helped restore depleted fish populations, providing food security for local fishermen."
          },
          {
            "title": "Conservation Legacy",
            "content": "He was named a National Scientist of the Philippines for his contributions to marine biology."
          }
        ]
      },
      {
        "title": "Filipino Scientists: Maria Orosa",
        "text": "Maria Orosa was a Filipino food scientist and humanitarian. During World War II, she invented nutrient-rich food products that saved thousands of lives in concentration camps.",
        "examples": [
          {
            "title": "Banana Ketchup",
            "content": "She invented banana ketchup using local bananas to reduce dependence on imported tomato ketchup."
          },
          {
            "title": "Soyalac & Darak",
            "content": "She created Soyalac (a powdered soybean drink) and Darak (rice bran powder rich in Vitamin B-1) to fight malnutrition."
          }
        ]
      },
      {
        "title": "Filipino Scientists: Dr. Fe Del Mundo",
        "text": "Dr. Fe Del Mundo was a pediatrician and the first woman admitted to Harvard Medical School. She founded the first pediatric hospital in the Philippines.",
        "examples": [
          {
            "title": "Bamboo Incubator",
            "content": "She invented a low-cost incubator made of bamboo for rural communities without electricity."
          },
          {
            "title": "Immunization Research",
            "content": "Her studies on infectious diseases led to better vaccination programs for children across the country."
          }
        ]
      },
      {
        "title": "Filipino Scientists: Dr. Ramon Barba",
        "text": "Dr. Ramon Barba was a horticulturalist who revolutionized the mango industry in the Philippines.",
        "examples": [
          {
            "title": "Mango Flowering",
            "content": "He discovered that spraying mango trees with potassium nitrate induces year-round flowering, multiplying harvest yields."
          },
          {
            "title": "Economic Impact",
            "content": "His invention transformed mangoes into a major export product, boosting the livelihood of local farmers."
          }
        ]
      },
      {
        "title": "Global Scientists: Galileo Galilei",
        "text": "Galileo was an Italian astronomer who used a modified telescope to observe space, confirming that Earth and other planets revolve around the Sun.",
        "examples": [
          {
            "title": "Sun-Centered System",
            "content": "His observations supported the Copernican heliocentric theory, which contradicted the belief that Earth was the center of the universe."
          },
          {
            "title": "Scientific Courage",
            "content": "He defended his findings despite facing house arrest for his ideas."
          }
        ]
      },
      {
        "title": "Global Scientists: Isaac Newton",
        "text": "Sir Isaac Newton was an English mathematician and physicist who formulated the laws of motion and universal gravitation.",
        "examples": [
          {
            "title": "The Falling Apple",
            "content": "Legend says watching an apple fall from a tree inspired him to realize that the same force pulling the apple pulls the Moon toward Earth."
          },
          {
            "title": "Principia",
            "content": "He wrote *Principia*, which laid the foundation for classical physics."
          }
        ]
      },
      {
        "title": "Global Scientists: Albert Einstein",
        "text": "Albert Einstein was a theoretical physicist who developed the theory of relativity, changing how we understand space, time, gravity, and energy.",
        "examples": [
          {
            "title": "Mass-Energy Equivalence",
            "content": "He formulated the famous equation $E = mc^2$, showing that mass and energy are interchangeable."
          },
          {
            "title": "Photoelectric Effect",
            "content": "His research on light won him the Nobel Prize in Physics in 1921."
          }
        ]
      },
      {
        "title": "Global Scientists: Marie Curie",
        "text": "Marie Curie was a Polish-French physicist and chemist who pioneered research on radioactivity. She was the first person to win two Nobel Prizes in different scientific fields.",
        "examples": [
          {
            "title": "New Elements",
            "content": "She discovered two new radioactive elements: Polonium (named after Poland) and Radium."
          },
          {
            "title": "Mobile X-Rays",
            "content": "She developed mobile X-ray units during World War I to help doctors treat wounded soldiers on the battlefield."
          }
        ]
      },
      {
        "title": "Impact of Inventions: Medicine",
        "text": "Medical inventions have increased human life expectancy and eradicated deadly diseases.",
        "examples": [
          {
            "title": "Penicillin",
            "content": "Alexander Fleming discovered penicillin in 1928, the world's first effective antibiotic, saving millions from bacterial infections."
          },
          {
            "title": "Vaccines",
            "content": "Edward Jenner developed the smallpox vaccine, leading to the eradication of a disease that once killed millions."
          }
        ]
      },
      {
        "title": "Impact of Inventions: Communication",
        "text": "Inventions in communication have connected people globally, allowing instant sharing of information.",
        "examples": [
          {
            "title": "The Telephone",
            "content": "Alexander Graham Bell invented the telephone in 1876, replacing telegraphs with real-time voice transmission."
          },
          {
            "title": "The Internet",
            "content": "Developed in the late 20th century, the internet allows instant access to human knowledge and global connectivity."
          }
        ]
      },
      {
        "title": "Impact of Inventions: Transportation",
        "text": "Transportation inventions have shrunk distances, making travel faster and trade more efficient.",
        "examples": [
          {
            "title": "Steam Engine",
            "content": "James Watt improved the steam engine, powering trains and steamships during the Industrial Revolution."
          },
          {
            "title": "The Airplane",
            "content": "Orville and Wilbur Wright made the first controlled flight in 1903, paving the way for global aviation."
          }
        ]
      },
      {
        "title": "Impact of Inventions: Energy",
        "text": "Energy inventions power our homes, schools, and factories, transitioning from fossil fuels to renewable sources.",
        "examples": [
          {
            "title": "Electricity Generators",
            "content": "Michael Faraday discovered electromagnetic induction, leading to the invention of the electric generator."
          },
          {
            "title": "Solar Cells",
            "content": "Modern solar panels convert sunlight directly into clean electricity, reducing pollution."
          }
        ]
      },
      {
        "title": "Scientific Tools: The Microscope",
        "image": "images/microscope.png",
        "text": "Microscopes allow scientists to observe objects that are too small to be seen by the naked eye.",
        "examples": [
          {
            "title": "Cell Biology",
            "content": "Robert Hooke first observed plant cells under a microscope in 1665, calling them 'cells'."
          },
          {
            "title": "Electron Microscopes",
            "content": "Advanced electron microscopes can magnify objects up to 10 million times, showing individual atoms."
          }
        ]
      },
      {
        "title": "Scientific Tools: The Telescope",
        "text": "Telescopes collect light from space, allowing astronomers to study stars, planets, and distant galaxies.",
        "examples": [
          {
            "title": "Reflecting Telescope",
            "content": "Isaac Newton invented the reflecting telescope, using mirrors instead of lenses to avoid color distortion."
          },
          {
            "title": "Hubble Space Telescope",
            "content": "Launched into orbit, Hubble has provided clear images of space without atmospheric distortion."
          }
        ]
      },
      {
        "title": "Laboratory Safety Rules",
        "text": "Safety is the most important attitude in any science experiment. Laboratory rules prevent accidents and injuries.",
        "examples": [
          {
            "title": "Protective Gear",
            "content": "Always wear safety goggles, gloves, and lab coats when handling chemicals."
          },
          {
            "title": "Chemical Handling",
            "content": "Never taste or directly smell chemicals. Use the 'wafting' technique to smell fumes safely."
          }
        ]
      },
      {
        "title": "Ethics in Science",
        "text": "Scientific ethics ensure that research is conducted honestly and does not harm humans, animals, or the environment.",
        "examples": [
          {
            "title": "Honesty in Data",
            "content": "Recording exact observations, even if they disprove your favorite theory, is an ethical duty."
          },
          {
            "title": "Environmental Impact",
            "content": "Scientists must evaluate if new chemical inventions might pollute waterways or harm wildlife before mass production."
          }
        ]
      },
      {
        "title": "Review of Scientific Inquiry",
        "text": "Let's summarize: Science uses the scientific method to test ideas. Experiments involve independent, dependent, and controlled variables. Famous scientists have improved life through medical, communication, and energy inventions. Laboratory safety and ethics protect researchers and society.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Write down the name of one scientist and explain how their work helps you in your daily life!"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "What is the name of the step-by-step process scientists use to investigate questions?",
        "options": [
          "Scientific Method",
          "Variable Testing",
          "Observation Scale",
          "Data Logging"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "In a fair test, how many independent variables should be changed at a time?",
        "options": [
          "None",
          "Exactly one",
          "Two or three",
          "As many as possible"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What do we call the factor in an experiment that is measured to observe the response?",
        "options": [
          "Independent variable",
          "Controlled variable",
          "Dependent variable",
          "Constant factor"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "The variables in an experiment that must be kept exactly the same to ensure a fair test are called:",
        "options": [
          "Independent variables",
          "Dependent variables",
          "Controlled variables",
          "Response factors"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which scientist is recognized for creating the first artificial coral reefs and marine sanctuaries in the Philippines?",
        "options": [
          "Dr. Ramon Barba",
          "Maria Orosa",
          "Dr. Angel Alcala",
          "Dr. Fe Del Mundo"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Who invented banana ketchup, Soyalac, and Darak powder to help fight malnutrition?",
        "options": [
          "Dr. Ramon Barba",
          "Maria Orosa",
          "Dr. Fe Del Mundo",
          "Angel Alcala"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which pediatrician invented a bamboo incubator for rural areas without electricity?",
        "options": [
          "Maria Orosa",
          "Dr. Fe Del Mundo",
          "Angel Alcala",
          "Dr. Ramon Barba"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Dr. Ramon Barba induced mango trees to flower year-round using which chemical spray?",
        "options": [
          "Sodium chloride",
          "Potassium nitrate",
          "Calcium carbonate",
          "Distilled water"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which astronomer used a telescope to confirm the theory that Earth revolves around the Sun?",
        "options": [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Marie Curie"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Who formulated the laws of motion and universal gravitation?",
        "options": [
          "Galileo Galilei",
          "Sir Isaac Newton",
          "Albert Einstein",
          "Marie Curie"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which physicist developed the theory of relativity and the equation E = mc²?",
        "options": [
          "Isaac Newton",
          "Marie Curie",
          "Albert Einstein",
          "Galileo Galilei"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Marie Curie is famous for her pioneering research on which topic?",
        "options": [
          "Gravity",
          "Radioactivity",
          "Electricity",
          "Horticulture"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the world's first effective antibiotic, discovered by Alexander Fleming?",
        "options": [
          "Insulin",
          "Penicillin",
          "Aspirin",
          "Vaccine"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which scientific tool is used to observe microscopic objects like cells and bacteria?",
        "options": [
          "Telescope",
          "Microscope",
          "Thermometer",
          "Protractor"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which tool uses mirrors or lenses to observe distant stars and planets?",
        "options": [
          "Microscope",
          "Telescope",
          "Spectrometer",
          "Barometer"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What scientific attitude is shown when a researcher keeps trying to solve a problem despite repeated failures?",
        "options": [
          "Curiosity",
          "Perseverance",
          "Objectivity",
          "Open-mindedness"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the correct way to smell chemical fumes in a laboratory?",
        "options": [
          "Sniff the container directly",
          "Waft the fumes toward your nose with your hand",
          "Pour the chemical on your hand first",
          "Do not smell anything in the lab"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A testable, educated guess about the outcome of an experiment is called a/an:",
        "options": [
          "Observation",
          "Hypothesis",
          "Inference",
          "Variable"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which invention revolutionized transportation during the Industrial Revolution?",
        "options": [
          "Telephone",
          "Steam engine",
          "Internet",
          "Solar panel"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "A hypothesis is a proven fact that cannot be changed.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Objectivity means letting personal opinions decide the results of your experiment.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Marie Curie won Nobel Prizes in both Physics and Chemistry.",
        "answer": true
      },
      {
        "type": "blank",
        "q": "What is the name of the low-cost baby incubator invented by Dr. Fe Del Mundo made of?",
        "answer": "bamboo"
      },
      {
        "type": "blank",
        "q": "The scientific attitude of wanting to learn and ask questions about the world is called ______.",
        "answer": "curiosity"
      },
      {
        "type": "blank",
        "q": "The factor in an experiment that is deliberately changed by the scientist is the ______ variable.",
        "answer": "independent"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "An experiment tests how different temperatures affect the speed of a chemical reaction. What is the independent variable?",
        "options": [
          "Reaction speed",
          "Temperature",
          "Amount of chemical",
          "Type of container"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In the same experiment, what is the dependent variable?",
        "options": [
          "Temperature",
          "Reaction speed",
          "Amount of chemical",
          "Duration of the test"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Why is it critical to have controlled variables in a scientific experiment?",
        "options": [
          "To ensure the hypothesis is proven correct",
          "To make sure that only the independent variable causes the observed change",
          "To speed up the experiment",
          "To record more data points"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which scientific attitude is demonstrated when a scientist publishes experimental data that contradicts their own hypothesis?",
        "options": [
          "Curiosity",
          "Objectivity",
          "Subjectivity",
          "Creativity"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following describes the difference between an observation and an inference?",
        "options": [
          "An observation is a guess; an inference is a fact",
          "An observation is made using the senses; an inference is a logical interpretation based on observations",
          "An observation uses tools; an inference does not",
          "There is no difference"
        ],
        "answer": 1
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Young Inventor's Experimental Design",
      "desc": "Identify a common daily problem at home (e.g. how to keep ice from melting quickly, or how to dry clothes faster). Write a hypothesis using an 'If... then...' statement to solve it. List the independent variable (what you change), the dependent variable (what you measure), and at least three controlled variables (what you keep the same) to test your hypothesis. Draw a diagram of your test setup. Present this design to your parent or teacher.",
      "labels": [
        "Identified a testable hypothesis written in 'If... then...' format",
        "Correctly identified independent, dependent, and controlled variables",
        "Completed a clear test setup diagram with step-by-step instructions"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Experimental Variables</h3>\n                  <p class=\"ws-instruction\">Read the experiment scenario and identify the variables: \"A scientist tests how different weights of soil affect the height of tomato plants.\"</p>\n                  \n                  <div style=\"margin-top: 15px;\">\n                    <div style=\"margin-bottom: 20px;\">1. Independent Variable (What is changed): <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. Dependent Variable (What is measured): <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">3. Controlled Variable (What stays the same): <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Scientist & Impact Match</h3>\n                  <p class=\"ws-instruction\">Write a short explanation of how the work of Dr. Angel Alcala (Marine Sanctuaries) helps coastal fishermen today.</p>\n                  \n                  <div class=\"ws-item-row\">\n                    <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                    <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                    <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Hypothesis Writing</h3>\n                  <p class=\"ws-instruction\">Write a testable hypothesis statement (If... then...) for each research question below.</p>\n                  \n                  <div style=\"font-size: 15px; margin-top: 15px;\">\n                    <div class=\"ws-q\">1. Does temperature affect how fast sugar dissolves in water?</div>\n                    <div class=\"writing-line\" style=\"margin-top: 10px; width: 95%;\"></div>\n                    \n                    <div class=\"ws-q\" style=\"margin-top: 25px;\">2. Does the weight of a paper airplane affect how far it flies?</div>\n                    <div class=\"writing-line\" style=\"margin-top: 10px; width: 95%;\"></div>\n                  </div>\n                </div>\n                "]
    }
  },
  "english": {
    "color": "#a855f7",
    "icon": "🙋‍♂️",
    "title": "English",
    "subtitle": "Week 1: Informational Text Structures [Advanced]",
    "slides": [
      {
        "title": "What is an Informational Text?",
        "text": "Informational texts are non-fiction writings designed to inform, instruct, or explain a topic to the reader. They are based on real-world facts, not stories.",
        "examples": [
          {
            "title": "Science Articles",
            "content": "A textbook chapter explaining how solar panels convert sunlight into electricity is an informational text."
          },
          {
            "title": "Recipe Guides",
            "content": "A cooking recipe detailing the steps to bake bread is an informational text."
          }
        ]
      },
      {
        "title": "Text Structure: Cause and Effect",
        "text": "The Cause-Effect text structure explains *why* something happened (cause) and *what* happened as a result (effect). Key transition words include *because, as a result, therefore, consequently, due to*.",
        "examples": [
          {
            "title": "Example Paragraph",
            "content": "Due to heavy rains, the local river overflowed. Consequently, the lower streets of the town were flooded."
          },
          {
            "title": "Key Clues",
            "content": "Heavy rain (Cause) -> Flooding (Effect). Connecting word: 'Consequently'."
          }
        ]
      },
      {
        "title": "Text Structure: Problem and Solution",
        "text": "The Problem-Solution text structure identifies a conflict or issue (problem) and details one or more ways to resolve it (solution). Key transition words include *the problem is, to solve this, one solution, resolution, fix*.",
        "examples": [
          {
            "title": "Example Paragraph",
            "content": "Soil erosion was destroying local farmland. To solve this, farmers planted cover crops with deep roots to hold the soil in place."
          },
          {
            "title": "Key Clues",
            "content": "Erosion (Problem) -> Planting cover crops (Solution). Connecting word: 'To solve this'."
          }
        ]
      },
      {
        "title": "Text Structure: Compare and Contrast",
        "text": "The Compare-Contrast text structure highlights similarities (compare) and differences (contrast) between two or more subjects. Key transition words include *similar to, unlike, on the other hand, in contrast, both, while*.",
        "examples": [
          {
            "title": "Example Paragraph",
            "content": "Both microscopes and telescopes use lenses to magnify objects. However, unlike microscopes which look at tiny cells, telescopes observe distant stars."
          },
          {
            "title": "Key Clues",
            "content": "Similar: Lenses. Different: Target scale. Connecting words: 'Both', 'unlike'."
          }
        ]
      },
      {
        "title": "Text Structure: Chronological / Sequence",
        "text": "The Chronological text structure explains events or steps in the order they occurred in time. Key transition words include *first, next, then, after, finally, dates, years*.",
        "examples": [
          {
            "title": "Example Paragraph",
            "content": "In 1876, Bell invented the telephone. Next, in 1903, the Wright brothers achieved flight. Finally, in the late 20th century, the internet was born."
          },
          {
            "title": "Key Clues",
            "content": "Timeline of inventions. Connecting words: 'In 1876', 'Next', 'Finally'."
          }
        ]
      },
      {
        "title": "What are Context Clues?",
        "text": "Context clues are hints found in the surrounding sentences that help readers define difficult or unfamiliar words without looking them up in a dictionary.",
        "examples": [
          {
            "title": "Active Decoding",
            "content": "Instead of skipping a hard word, look at the words next to it for synonyms, antonyms, or definitions."
          },
          {
            "title": "Types of Clues",
            "content": "Context clues can be direct definitions, synonyms, antonyms, or examples."
          }
        ]
      },
      {
        "title": "Context Clues: Definition / Explanation",
        "text": "A definition context clue directly explains the meaning of the difficult word in the same sentence or the next one.",
        "examples": [
          {
            "title": "Example Sentence",
            "content": "The scientist observed the *vertex*, which is the common endpoint where two intersecting lines meet."
          },
          {
            "title": "Decoding",
            "content": "The word 'vertex' is defined right after 'which is...'"
          }
        ]
      },
      {
        "title": "Context Clues: Synonym / Restatement",
        "text": "A synonym context clue uses a simpler word with the same or similar meaning near the difficult word.",
        "examples": [
          {
            "title": "Example Sentence",
            "content": "Dr. Fe Del Mundo's *perseverance* was clear; her determination kept her working in the lab for hours."
          },
          {
            "title": "Decoding",
            "content": "The word 'determination' acts as a synonym for 'perseverance'."
          }
        ]
      },
      {
        "title": "Context Clues: Antonym / Contrast",
        "text": "An antonym context clue uses a word with the opposite meaning to help show what the difficult word is *not*.",
        "examples": [
          {
            "title": "Example Sentence",
            "content": "Unlike the *combustible* dry leaves that caught fire instantly, the wet logs were completely fire-resistant."
          },
          {
            "title": "Decoding",
            "content": "'Combustible' is contrasted with 'fire-resistant' using the word 'Unlike'."
          }
        ]
      },
      {
        "title": "Context Clues: Example / Illustration",
        "text": "An example context clue provides instances of the difficult word to illustrate its meaning.",
        "examples": [
          {
            "title": "Example Sentence",
            "content": "The lab had many *hazards*, such as exposed wires, flammable liquids, and broken glassware."
          },
          {
            "title": "Decoding",
            "content": "Exposed wires, flammable liquids, and broken glassware are examples of 'hazards' (dangers)."
          }
        ]
      },
      {
        "title": "Fact vs. Opinion in Informational Texts",
        "text": "Informational texts must rely on facts (statements that can be proven true) rather than opinions (feelings or personal beliefs).",
        "examples": [
          {
            "title": "Factual Statement",
            "content": "'The atomic weight of gold is 196.97.' (Can be measured and proven)."
          },
          {
            "title": "Opinion Statement",
            "content": "'Gold is the most beautiful element in the periodic table.' (Personal preference)."
          }
        ]
      },
      {
        "title": "Identifying Main Idea",
        "text": "The main idea is the primary point or message the author wants the reader to understand about the topic. It is often stated in the first or last sentence of a paragraph.",
        "examples": [
          {
            "title": "Topic Sentence",
            "content": "'Filipino scientists have made inventions that greatly improved agricultural harvests.' (Main idea)."
          },
          {
            "title": "Supporting Details",
            "content": "Details about Dr. Ramon Barba's mango spray support this main idea."
          }
        ]
      },
      {
        "title": "Supporting Details",
        "text": "Supporting details are facts, examples, statistics, or explanations that build on and prove the main idea.",
        "examples": [
          {
            "title": "Adding Proof",
            "content": "If the main idea is that marine sanctuaries restore fish populations, a supporting detail would be the specific percentage increase of fish count in Apo Island."
          },
          {
            "title": "Fact-Based",
            "content": "Supporting details must be concrete facts, not opinions."
          }
        ]
      },
      {
        "title": "Text Features: Headings and Subheadings",
        "text": "Headings and subheadings divide informational texts into sections, letting the reader know what topic will be covered next.",
        "examples": [
          {
            "title": "Visual Hierarchy",
            "content": "Heading: 'Famous Inventions'. Subheading: 'The History of the Telescope'."
          },
          {
            "title": "Skimming",
            "content": "Readers use headings to scan the text quickly for specific facts."
          }
        ]
      },
      {
        "title": "Text Features: Captions and Labels",
        "text": "Captions are short descriptions underneath diagrams, charts, or images that explain what the visual is showing.",
        "examples": [
          {
            "title": "Diagram Labeling",
            "content": "A diagram of an eye has labels pointing to the pupil, iris, lens, and retina."
          },
          {
            "title": "Context",
            "content": "A photo of Apo Island has a caption: 'Figure 1: Coral reef sanctuary established by Dr. Angel Alcala.'"
          }
        ]
      },
      {
        "title": "Glossaries and Indexes",
        "text": "Glossaries act as mini-dictionaries at the end of a book defining key words, while indexes list the page numbers where specific terms appear.",
        "examples": [
          {
            "title": "Glossary",
            "content": "*Vertex (n.)*: The point where two lines meet."
          },
          {
            "title": "Index",
            "content": "Curie, Marie: pages 45, 48, 52."
          }
        ]
      },
      {
        "title": "Author's Purpose: To Inform",
        "text": "The main purpose of an informational text is to inform. The author write facts to explain a process, describe an event, or list achievements without taking sides.",
        "examples": [
          {
            "title": "Objective Voice",
            "content": "Informational texts use a neutral, objective tone instead of emotional language."
          },
          {
            "title": "Purpose Check",
            "content": "Does the text explain *how* a protractor works, or is it trying to sell you one? (If explaining, the purpose is to inform)."
          }
        ]
      },
      {
        "title": "Scanning for Key Information",
        "text": "Scanning is reading a text quickly to locate a specific name, date, number, or word without reading every sentence.",
        "examples": [
          {
            "title": "Scanning Practice",
            "content": "Looking at an encyclopedia page to find the year Galileo was born by searching for digits (e.g. 1564)."
          },
          {
            "title": "Visual Anchors",
            "content": "Capital letters, bold text, and numbers act as anchors during scanning."
          }
        ]
      },
      {
        "title": "Summarizing Informational Paragraphs",
        "text": "A summary is a brief restatement of the main idea and key supporting details of a text, written in your own words.",
        "examples": [
          {
            "title": "Concise",
            "content": "A 300-word article about Marie Curie can be summarized in 3 sentences highlighting her radioactivity research and Nobel Prizes."
          },
          {
            "title": "No Opinions",
            "content": "Do not add your own thoughts in a summary."
          }
        ]
      },
      {
        "title": "Reading Charts and Tables",
        "text": "Charts and tables organize quantitative data visually, making comparisons easy.",
        "examples": [
          {
            "title": "Data Tables",
            "content": "A table showing the melting points of five different metals in degrees Celsius."
          },
          {
            "title": "Column and Row headers",
            "content": "Always read the top headers and left headers to understand the unit of measure."
          }
        ]
      },
      {
        "title": "Understanding Diagram Flowcharts",
        "text": "Flowcharts are diagrams that show the step-by-step progress of a system or experiment.",
        "examples": [
          {
            "title": "Water Cycle Flow",
            "content": "Evaporation -> Condensation -> Precipitation -> Collection. Arrows indicate the direction of movement."
          },
          {
            "title": "Step Sequences",
            "content": "Flowcharts make chronological sequences easier to understand than block paragraphs."
          }
        ]
      },
      {
        "title": "Suffixes in Scientific Vocabulary",
        "text": "Suffixes added to root words change their part of speech and help us decode scientific terms.",
        "examples": [
          {
            "title": "-ist (Person who does)",
            "content": "Science + -ist = Scientist (person who does science). Biology + -ist = Biologist."
          },
          {
            "title": "-ity (State of being)",
            "content": "Active + -ity = Activity (state of being active). Conductive + -ity = Conductivity."
          }
        ]
      },
      {
        "title": "Prefixes in Scientific Vocabulary",
        "text": "Prefixes added to the beginning of root words alter their meaning.",
        "examples": [
          {
            "title": "de- (Remove / Reduce)",
            "content": "De- + compose = decompose (to break down / rot). De- + forest = deforest."
          },
          {
            "title": "tri- (Three)",
            "content": "Tri- + angle = triangle (three angles). Tri- + cycle = tricycle."
          }
        ]
      },
      {
        "title": "Note-Taking in Informational Reading",
        "text": "Note-taking helps us remember facts. We use bullet points, keywords, and mind maps.",
        "examples": [
          {
            "title": "Bulleted Notes",
            "content": "- Ramon Barba: mango flowering spray.<br>- Potassium nitrate used.<br>- Increased harvest yield."
          },
          {
            "title": "Mind Maps",
            "content": "Put the main topic in a center circle and draw branching lines to subtopics."
          }
        ]
      },
      {
        "title": "Review of Informational Reading",
        "text": "Let's summarize: Informational texts explain real-world facts using structures like Cause-Effect, Problem-Solution, Compare-Contrast, and Chronology. Context clues (definition, synonym, antonym) help define difficult words. Text features like headings, diagrams, and captions guide readers to scan and summarize information efficiently.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Read a science paragraph and list two context clues you found in it!"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "Which text structure explains why an event occurred and the resulting consequences?",
        "options": [
          "Problem and Solution",
          "Compare and Contrast",
          "Cause and Effect",
          "Chronological"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which text structure organizes events or steps based on the order of time?",
        "options": [
          "Compare and Contrast",
          "Cause and Effect",
          "Chronological / Sequence",
          "Problem and Solution"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What do we call hints in a paragraph that help readers define an unfamiliar word?",
        "options": [
          "Text features",
          "Context clues",
          "Subheadings",
          "Summaries"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In: 'The river was *turbid*; the muddy water was so cloudy that we could not see the bottom.', what type of context clue is used for 'turbid'?",
        "options": [
          "Antonym",
          "Synonym / Explanation",
          "Chronological",
          "Prefix clue"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In: 'Unlike my talkative brother, Caloy is *taciturn* and rarely speaks.', what is the meaning of 'taciturn' based on the antonym context clue?",
        "options": [
          "Loud",
          "Friendly",
          "Quiet / reserved",
          "Smart"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which of the following is a statement of FACT?",
        "options": [
          "Science is the most interesting school subject.",
          "Dr. Fe Del Mundo founded the first pediatric hospital in the Philippines.",
          "Bamboo incubators are beautiful inventions.",
          "Mangoes are the tastiest fruits in the world."
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is an OPINION?",
        "options": [
          "Sir Isaac Newton wrote the Principia.",
          "Marie Curie discovered Polonium and Radium.",
          "Banana ketchup is much tastier than tomato ketchup.",
          "Alexander Fleming discovered penicillin in 1928."
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the primary message or main point the author wants the reader to understand about a topic?",
        "options": [
          "Supporting detail",
          "Main idea",
          "Text structure",
          "Caption"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Short descriptions located directly underneath a diagram or photo are called:",
        "options": [
          "Headings",
          "Glossaries",
          "Captions",
          "Indexes"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which text feature is an alphabetical list of terms and their definitions at the end of a book?",
        "options": [
          "Index",
          "Glossary",
          "Table of contents",
          "Subheading"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In: 'To solve the issue of night blindness, scientists introduced biofortified golden rice.', what is the text structure?",
        "options": [
          "Compare and Contrast",
          "Problem and Solution",
          "Chronological",
          "Cause and Effect"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the meaning of the suffix '-ist' in the word 'botanist'?",
        "options": [
          "A state of being",
          "A person who studies or does something",
          "Having the quality of",
          "Without"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In: 'Due to the lack of electricity, the clinic used a bamboo incubator.', what is the cause?",
        "options": [
          "The clinic used a bamboo incubator",
          "The lack of electricity",
          "Dr. Fe Del Mundo's invention",
          "Rural clinics"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In the same sentence, what is the effect?",
        "options": [
          "The lack of electricity",
          "The clinic used a bamboo incubator",
          "The doctor traveled to the province",
          "The baby was healthy"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which prefix means 'three', as in 'triangle' or 'tricycle'?",
        "options": [
          "de-",
          "bi-",
          "tri-",
          "uni-"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which transition word is commonly used in Compare-Contrast text structures?",
        "options": [
          "Because",
          "Consequently",
          "On the other hand",
          "First"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which transition word is commonly used in Cause-Effect text structures?",
        "options": [
          "Similarly",
          "Therefore",
          "Finally",
          "Solution"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A quick reading method used to find a specific name, date, or number is called:",
        "options": [
          "Skimming",
          "Scanning",
          "Summarizing",
          "Paraphrasing"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In: 'The material was highly *combustible*, meaning it caught fire easily.', what type of context clue is used?",
        "options": [
          "Antonym",
          "Direct definition",
          "Contrast",
          "Prefix"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "A summary of an informational text should include your personal opinions.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Flowcharts use arrows to indicate a chronological sequence of steps.",
        "answer": true
      },
      {
        "type": "tf",
        "q": "The prefix 'de-' means to repeat or do again.",
        "answer": false
      },
      {
        "type": "blank",
        "q": "The alphabetical index of key terms and page numbers is located at the ______ of a book.",
        "answer": "end"
      },
      {
        "type": "blank",
        "q": "A word with the opposite meaning used to define a difficult word is an ______ clue.",
        "answer": "antonym"
      },
      {
        "type": "blank",
        "q": "Complete the CVC-e word: A shape with three vertices is a tri____.",
        "answer": "angle"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "Read: 'Unlike the ephemeral flowers that bloom and wither in a day, the redwood trees are perennial, living for thousands of years.' What is the meaning of 'ephemeral'?",
        "options": [
          "Long-lived",
          "Short-lived",
          "Colorful",
          "Giant"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In the same sentence, what is the meaning of 'perennial'?",
        "options": [
          "Short-lived",
          "Enduring / long-lived",
          "Water-absorbing",
          "Fragile"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Identify the text structure: 'Although coal and solar energy both generate electricity, coal is a fossil fuel that releases greenhouse gases, while solar panels harvest sunlight cleanly without emissions.'",
        "options": [
          "Cause and Effect",
          "Problem and Solution",
          "Compare and Contrast",
          "Chronological"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which of the following is a supporting detail for the main idea: 'Dr. Ramon Barba significantly boosted the Philippine agricultural economy'?",
        "options": [
          "Mangoes are sweet and delicious tropical fruits.",
          "His potassium nitrate spray allowed year-round mango exports, generating millions in revenue.",
          "Farmers prefer mango trees over coconut trees.",
          "Horticulture is the science of plant cultivation."
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the primary purpose of an author writing a scientific article explaining the lifecycle of a virus?",
        "options": [
          "To persuade the reader to wash hands",
          "To inform the reader about the biological process of virus replication",
          "To entertain the reader with a story about micro-organisms",
          "To express personal feelings about illnesses"
        ],
        "answer": 1
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Text Structure Analysis & Diagram",
      "desc": "Read a short paragraph about how Dr. Ramon Barba invented the mango spray to solve seasonal harvesting limitations. Write down what the main idea is. Classify its text structure (e.g. Problem-Solution or Cause-Effect). Create a visual flowchart showing the step-by-step causes, actions, and effects described in the text. Highlight any context clues that helped you identify vocabulary words. Present this analysis to your parent or teacher.",
      "labels": [
        "Correctly identified the main idea and the text structure",
        "Completed a logical flowchart showing the relationship of steps",
        "Identified and explained context clues for vocabulary words"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Text Structure Identification</h3>\n                  <p class=\"ws-instruction\">Identify the text structure (Cause-Effect, Compare-Contrast, Chronological, Problem-Solution) for each paragraph description.</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. Explains why a bridge fell and what happened as a result: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. Shows similarities and differences of plant and animal cells: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. Details the timeline of discoveries of Marie Curie: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. Identifies plastic pollution and how recycling fixes it: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Context Clues Challenge</h3>\n                  <p class=\"ws-instruction\">Read the sentence, write the meaning of the bold word, and identify the type of clue (synonym, antonym, definition).</p>\n                  \n                  <div style=\"border: 1px solid var(--border-color); padding: 10px; border-radius: 6px; background: #fafafa; font-style: italic;\">\n                    \"Unlike the fragile glass, the titanium rod is <strong>durable</strong>; it does not break even under heavy pressure.\"\n                  </div>\n                  \n                  <div style=\"margin-top: 20px;\">\n                    <div style=\"margin-bottom: 20px;\">1. Meaning of <strong>durable</strong>: <div class=\"writing-line inline-line\" style=\"width: 60%; display:inline-block;\"></div></div>\n                    <div>2. Type of Context Clue: <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Text Structure Matching</h3>\n                  <p class=\"ws-instruction\">Match paragraph summaries to text structures (Cause/Effect, Compare/Contrast, Chronological).</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 15px;\">\n                    <div class=\"ws-col-half\" style=\"font-size: 14px; line-height: 1.8;\">\n                      <div>1. Paragraph explaining how to bake a cake step-by-step.</div>\n                      <div style=\"margin-top: 15px;\">2. Paragraph comparing a frog and a toad side-by-side.</div>\n                      <div style=\"margin-top: 15px;\">3. Paragraph explaining why leaves fall because of changing seasons.</div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"font-size: 14px; line-height: 1.8; text-align: right; padding-right: 40px;\">\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Compare / Contrast</div>\n                      <div style=\"margin-top: 15px;\">[ &nbsp; &nbsp; ] &nbsp; Cause and Effect</div>\n                      <div style=\"margin-top: 15px;\">[ &nbsp; &nbsp; ] &nbsp; Chronological / Sequence</div>\n                    </div>\n                  </div>\n                </div>\n                "]
    }
  },
  "filipino": {
    "color": "#f43f5e",
    "icon": "🇵🇭",
    "title": "Filipino",
    "subtitle": "Week 1: Kayarian ng Pangngalan: Payak/Maylapi [Advanced]",
    "slides": [
      {
        "title": "Ano ang Pangngalan?",
        "text": "Ang pangngalan ay bahagi ng pananalita na tumutukoy sa ngalan ng tao, bagay, hayop, pook, o pangyayari. Sa antas na ito, pag-aaralan natin ang anyo o kayarian ng mga pangngalan. <span class='fil-sentence' data-translation='Nouns refer to names of people, things, animals, places, or events. We will study their structures.'></span>",
        "examples": [
          {
            "title": "Halimbawa 1",
            "content": "tao (guro), bagay (lapis), hayop (aso) <span class='fil-sentence' data-translation='people (teacher), thing (pencil), animal (dog)'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "pook (Maynila), pangyayari (Pasko) <span class='fil-sentence' data-translation='place (Manila), event (Christmas)'></span>"
          }
        ]
      },
      {
        "title": "Kayarian ng Pangngalan: Payak",
        "text": "Ang pangngalan ay payak kung ito ay binubuo lamang ng salitang-ugat (root word). Walang kasamang panlapi o hindi inuulit, at walang katambal na ibang salita. <span class='fil-sentence' data-translation='A noun is payak (simple) if it consists only of the root word, without affixes, repetition, or compounding.'></span>",
        "examples": [
          {
            "title": "Halimbawa 1: Mga Salitang-ugat",
            "content": "tubig, aklat, bata, daan, kahoy <span class='fil-sentence' data-translation='water, book, child, road, wood'></span>"
          },
          {
            "title": "Halimbawa 2: Sa Pangungusap",
            "content": "Ang <span class='fil-phrase' data-translation='water'>tubig</span> ay malinis. <span class='fil-sentence' data-translation='The water is clean.'></span>"
          }
        ]
      },
      {
        "title": "Kayarian ng Pangngalan: Maylapi",
        "text": "Ang pangngalan ay maylapi kung ito ay binubuo ng salitang-ugat na may kasamang isa o higit pang panlapi (affixes). <span class='fil-sentence' data-translation='A noun is maylapi if it consists of a root word combined with one or more affixes.'></span>",
        "examples": [
          {
            "title": "Pagbuo ng Salita",
            "content": "guro (payak) + ka- -an = kaguruan (maylapi) <span class='fil-sentence' data-translation='teacher + affixes = faculty/group of teachers'></span>"
          },
          {
            "title": "Halimbawa",
            "content": "tubig (salitang-ugat) + -um- = tumubig <span class='fil-sentence' data-translation='water + infix = turned to water'></span>"
          }
        ]
      },
      {
        "title": "Ano ang Panlapi?",
        "text": "Ang panlapi ay mga pantig (syllables) na ikinakabit sa salitang-ugat upang makabuo ng bagong salita na may bagong kahulugan. <span class='fil-sentence' data-translation='Affixes are syllables attached to root words to create new words with new meanings.'></span>",
        "examples": [
          {
            "title": "Halimbawa: Panlaping 'ka-'",
            "content": "ka- + laro = kalaro (playmate) <span class='fil-sentence' data-translation='affix + play = playmate'></span>"
          },
          {
            "title": "Halimbawa: Panlaping 'taga-'",
            "content": "taga- + luto = tagaluto (cook) <span class='fil-sentence' data-translation='affix + cook = cook (person)'></span>"
          }
        ]
      },
      {
        "title": "Uri ng Panlapi: Unlapi",
        "text": "Ang unlapi ay panlaping ikinakabit sa unahan ng salitang-ugat. <span class='fil-sentence' data-translation='Unlapi is an prefix attached to the beginning of the root word.'></span>",
        "examples": [
          {
            "title": "Pagkakabit",
            "content": "taga- (unlapi) + lungsod = tagalungsod (city dweller) <span class='fil-sentence' data-translation='from + city = city dweller'></span>"
          },
          {
            "title": "Iba pang halimbawa",
            "content": "mag-aaral, kasama, pambura <span class='fil-sentence' data-translation='student, companion, eraser'></span>"
          }
        ]
      },
      {
        "title": "Uri ng Panlapi: Gitlapi",
        "text": "Ang gitlapi ay panlaping isinisingit sa gitna ng salitang-ugat. Karaniwang ginagamit ang gitlaping '-um-' at '-in-'. <span class='fil-sentence' data-translation='Gitlapi is an infix inserted inside the root word, usually -um- or -in-.'></span>",
        "examples": [
          {
            "title": "Pagkakabit",
            "content": "-um- (gitlapi) + sikat = sumikat (became famous) <span class='fil-sentence' data-translation='infix + famous = became famous/shone'></span>"
          },
          {
            "title": "Pagkakabit ng -in-",
            "content": "-in- + tulong = tinulong (helped) <span class='fil-sentence' data-translation='infix + help = helped'></span>"
          }
        ]
      },
      {
        "title": "Uri ng Panlapi: Hulapi",
        "text": "Ang hulapi ay panlaping ikinakabit sa hulihan ng salitang-ugat. Karaniwang ginagamit ang '-an', '-han', '-in', at '-hin'. <span class='fil-sentence' data-translation='Hulapi is a suffix attached to the end of the root word.'></span>",
        "examples": [
          {
            "title": "Pagkakabit ng -an",
            "content": "aklat + -an = aklatan (library) <span class='fil-sentence' data-translation='book + suffix = library'></span>"
          },
          {
            "title": "Pagkakabit ng -in",
            "content": "aral + -in = aralin (lesson) <span class='fil-sentence' data-translation='study + suffix = lesson'></span>"
          }
        ]
      },
      {
        "title": "Uri ng Panlapi: Kabilaan",
        "text": "Ang kabilaan ay panlaping ikinakabit sa unahan at hulihan ng salitang-ugat nang sabay. <span class='fil-sentence' data-translation='Kabilaan refers to affixes attached to both the beginning and the end of the root word simultaneously.'></span>",
        "examples": [
          {
            "title": "Pagkakabit",
            "content": "ka- + laya + -an = kalayaan (freedom) <span class='fil-sentence' data-translation='prefix + free + suffix = freedom'></span>"
          },
          {
            "title": "Iba pang halimbawa",
            "content": "kabataan, tahanan, pamahalaan <span class='fil-sentence' data-translation='youth, home/residence, government'></span>"
          }
        ]
      },
      {
        "title": "Uri ng Panlapi: Laguhan",
        "text": "Ang laguhan ay panlaping ikinakabit sa unahan, gitna, at hulihan ng salitang-ugat nang sabay-sabay. <span class='fil-sentence' data-translation='Laguhan refers to affixes attached to the beginning, middle, and end of the root word all at once.'></span>",
        "examples": [
          {
            "title": "Pagkakabit",
            "content": "mag- + -in- + dugo + -an = magdinuguan <span class='fil-sentence' data-translation='prefix + infix + blood + suffix = bled heavily / fought bloodily'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "pag- + -um- + sikap + -an = pagsumikapan <span class='fil-sentence' data-translation='prefix + infix + strive + suffix = to strive for something'></span>"
          }
        ]
      },
      {
        "title": "Pagtukoy sa Salitang-Ugat",
        "text": "Upang malaman ang kayarian ng salita, alisin ang mga panlapi upang maiwan ang orihinal na salitang-ugat. <span class='fil-sentence' data-translation='To identify word structure, remove the affixes to isolate the original root word.'></span>",
        "examples": [
          {
            "title": "Pagsusuri sa 'Kagubatan'",
            "content": "Alisin ang 'ka-' at '-an' -> gubat (forest). Ang salitang-ugat ay gubat. <span class='fil-sentence' data-translation='Remove affixes from kagubatan to get gubat (forest).'></span>"
          },
          {
            "title": "Pagsusuri sa 'Tinulungan'",
            "content": "Alisin ang '-in-' at '-an' -> tulong (help). <span class='fil-sentence' data-translation='Remove -in- and -an from tinulungan to get tulong (help).'></span>"
          }
        ]
      },
      {
        "title": "Pangngalang Maylapi para sa Tao",
        "text": "Gumagamit tayo ng mga partikular na panlapi upang tumukoy sa propesyon o gawain ng isang tao. <span class='fil-sentence' data-translation='We use specific affixes to denote a person's profession or role.'></span>",
        "examples": [
          {
            "title": "Panlaping 'taga-'",
            "content": "taga- + sulat = tagasulat (writer) <span class='fil-sentence' data-translation='prefix + write = writer'></span>"
          },
          {
            "title": "Panlaping 'tagapag-'",
            "content": "tagapag- + tanggol = tagapagtanggol (defender/lawyer) <span class='fil-sentence' data-translation='prefix + defend = defender/lawyer'></span>"
          }
        ]
      },
      {
        "title": "Pangngalang Maylapi para sa Lugar",
        "text": "Maraming pangngalang tumutukoy sa lugar ang nabubuo gamit ang kabilaan o hulapi. <span class='fil-sentence' data-translation='Many place nouns are formed using circumfixes or suffixes.'></span>",
        "examples": [
          {
            "title": "Hulaping '-an'",
            "content": "tubig + -an = tubigan (water fields) <span class='fil-sentence' data-translation='water + suffix = wet field/paddy'></span>"
          },
          {
            "title": "Kabilaang 'paaralan'",
            "content": "pa- + aral + -an = paaralan (school) <span class='fil-sentence' data-translation='prefix + study + suffix = school'></span>"
          }
        ]
      },
      {
        "title": "Gamit ng Payak sa Pangungusap",
        "text": "Ang mga payak na pangngalan ay karaniwang ginagamit sa tuwirang pagtukoy sa mga pangunahing bagay sa ating paligid. <span class='fil-sentence' data-translation='Simple nouns are typically used to refer directly to basic objects around us.'></span>",
        "examples": [
          {
            "title": "Pangungusap 1",
            "content": "May dalang <span class='fil-phrase' data-translation='book'>aklat</span> ang guro. <span class='fil-sentence' data-translation='The teacher brought a book.'></span>"
          },
          {
            "title": "Pangungusap 2",
            "content": "Malago ang <span class='fil-phrase' data-translation='tree'>puno</span> sa bakuran. <span class='fil-sentence' data-translation='The tree in the yard is lush.'></span>"
          }
        ]
      },
      {
        "title": "Gamit ng Maylapi sa Pangungusap",
        "text": "Ang mga maylaping pangngalan ay nagbibigay ng mas tiyak na kahulugan o detalye sa pangungusap. <span class='fil-sentence' data-translation='Affixed nouns provide more specific meanings or details in a sentence.'></span>",
        "examples": [
          {
            "title": "Pagsusuri",
            "content": "Bumili siya ng <span class='fil-phrase' data-translation='writing pad'>sulatang-papel</span>. <span class='fil-sentence' data-translation='He bought writing paper.'></span>"
          },
          {
            "title": "Pagsusuri 2",
            "content": "Ipinagmamalaki ko ang aking <span class='fil-phrase' data-translation='citizenship'>pagkamamamayan</span>. <span class='fil-sentence' data-translation='I am proud of my citizenship.'></span>"
          }
        ]
      },
      {
        "title": "Mabilisang Pagsusuri: Taga-ilog",
        "text": "Ang 'Tagalog' ay nagmula sa maylaping salita na 'taga-ilog' na nangangahulugang mga taong nakatira sa tabi ng ilog. <span class='fil-sentence' data-translation='The word Tagalog originated from taga-ilog, meaning people living by the river.'></span>",
        "examples": [
          {
            "title": "Pagsusuri",
            "content": "taga- (unlapi) + ilog (salitang-ugat) = tagailog <span class='fil-sentence' data-translation='from + river = river dweller'></span>"
          },
          {
            "title": "Kahulugan sa Kasaysayan",
            "content": "Ipinapakita nito kung paano naglalarawan ng tirahan ang panlapi. <span class='fil-sentence' data-translation='This shows how affixes describe places of residence.'></span>"
          }
        ]
      },
      {
        "title": "Panlaping Pang-uri na naging Pangngalan",
        "text": "Minsan, ang mga salitang may panlapi na orihinal na pang-uri (adjective) ay nagagamit bilang pangngalan sa pangungusap. <span class='fil-sentence' data-translation='Sometimes, affixed words that are originally adjectives are used as nouns.'></span>",
        "examples": [
          {
            "title": "Halimbawa",
            "content": "Ang <span class='fil-phrase' data-translation='kindness'>kabaitan</span> ni Caloy ay huwaran. (Ang 'kabaitan' ay pangngalan mula sa pang-uring 'mabait'). <span class='fil-sentence' data-translation='Caloy's kindness is exemplary.'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "Hahangaan mo ang <span class='fil-phrase' data-translation='bravery'>katapangan</span> ng sundalo. <span class='fil-sentence' data-translation='You will admire the soldier's bravery.'></span>"
          }
        ]
      },
      {
        "title": "Mga Panuntunan sa Pagbabaybay ng Maylapi",
        "text": "Kapag nagkakabit ng panlapi, may mga pagkakataong nagbabago ang titik ng salitang-ugat upang mas madali itong bigkasin. <span class='fil-sentence' data-translation='When attaching affixes, spelling changes sometimes occur to facilitate pronunciation.'></span>",
        "examples": [
          {
            "title": "Pagbabagong Asimilasyon",
            "content": "pang- + bata = pambata (hindi pangbata) <span class='fil-sentence' data-translation='prefix + child = for children (ng changes to m before b/p)'></span>"
          },
          {
            "title": "Pang- + paaralan",
            "content": "pang- + paaralan = pampaaralan <span class='fil-sentence' data-translation='prefix + school = school-related'></span>"
          }
        ]
      },
      {
        "title": "Asimilasyong Patalab: Pang- + tali",
        "text": "Ang titik 'ng' ng 'pang-' ay nagiging 'n' kapag ang kasunod na titik ng salitang-ugat ay d, l, r, s, t. <span class='fil-sentence' data-translation='The letter ng of pang- changes to n before d, l, r, s, t.'></span>",
        "examples": [
          {
            "title": "Halimbawa 1",
            "content": "pang- + tali = panali (hindi pangtali) <span class='fil-sentence' data-translation='prefix + tie = tie (noun)'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "pang- + lunas = panlunas <span class='fil-sentence' data-translation='prefix + cure = cure / remedy'></span>"
          }
        ]
      },
      {
        "title": "Asimilasyong Patalab: Pang- + kagat",
        "text": "Ang titik 'ng' ay nananatiling 'ng' kapag ang kasunod na titik ay mga patinig (a, e, i, o, u) o mga katinig tulang ng k, g, h, m, n, w, y. <span class='fil-sentence' data-translation='The letter ng remains unchanged before vowels or consonants like k, g, h, m, n, w, y.'></span>",
        "examples": [
          {
            "title": "Halimbawa 1",
            "content": "pang- + ahas = pang-ahas <span class='fil-sentence' data-translation='prefix + snake = snake catcher'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "pang- + gulat = panggulat <span class='fil-sentence' data-translation='prefix + surprise = surprise object'></span>"
          }
        ]
      },
      {
        "title": "Paghahambing: Payak vs. Maylapi",
        "text": "Mahalagang makita ang pagkakaiba ng payak at maylapi upang mas lumalim ang paggamit ng bokabularyong Filipino. <span class='fil-sentence' data-translation='It is important to differentiate simple and affixed nouns to expand Filipino vocabulary.'></span>",
        "examples": [
          {
            "title": "Pagsusuri",
            "content": "payak: laro (game) | maylapi: kalaro (playmate), palaruan (playground) <span class='fil-sentence' data-translation='simple: game | affixed: playmate, playground'></span>"
          },
          {
            "title": "Pagsusuri 2",
            "content": "payak: gubat (forest) | maylapi: kagubatan (forestlands) <span class='fil-sentence' data-translation='simple: forest | affixed: forestlands'></span>"
          }
        ]
      },
      {
        "title": "Mga Salitang Hiram na Payak",
        "text": "Ang mga hiram na salita mula sa Ingles o Kastila na walang panlaping Filipino ay itinuturing pa ring payak. <span class='fil-sentence' data-translation='Borrowed words from English or Spanish without Filipino affixes are still considered payak.'></span>",
        "examples": [
          {
            "title": "Halimbawa",
            "content": "tsokolate, kompyuter, kotse, pamilya <span class='fil-sentence' data-translation='chocolate, computer, car, family'></span>"
          },
          {
            "title": "Sa Pangungusap",
            "content": "Bumili ng bagong <span class='fil-phrase' data-translation='computer'>kompyuter</span> ang paaralan. <span class='fil-sentence' data-translation='The school bought a new computer.'></span>"
          }
        ]
      },
      {
        "title": "Panlaping Kabilaan sa Propesyon",
        "text": "Ang ilang propesyon ay gumagamit ng kabilaang panlapi upang ilarawan ang katungkulan sa isang tanggapan. <span class='fil-sentence' data-translation='Some professions use circumfixes to denote official roles.'></span>",
        "examples": [
          {
            "title": "Kabilaang 'pamunuan'",
            "content": "pa- + puno + -an = pamunuan (administration / board of directors) <span class='fil-sentence' data-translation='prefix + leader + suffix = administration'></span>"
          },
          {
            "title": "Kabilaang 'panuruan'",
            "content": "pa- + turo + -an = panuruan (school year / teaching board) <span class='fil-sentence' data-translation='prefix + teach + suffix = academic board'></span>"
          }
        ]
      },
      {
        "title": "Kahalagahan ng Panlapi sa Agham",
        "text": "Sa pag-aaral ng Agham (Science), madalas tayong gumamit ng mga salitang maylapi upang ipahayag ang mga proseso. <span class='fil-sentence' data-translation='In Science, we often use affixed words to express processes.'></span>",
        "examples": [
          {
            "title": "Halimbawa",
            "content": "tunaw (melt) + -in- + -an = tinunawan (dissolved place) <span class='fil-sentence' data-translation='melt + infixes = dissolved place'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "sunog (burn) + -an = sunugan (burning chamber) <span class='fil-sentence' data-translation='burn + suffix = incinerator/combustion area'></span>"
          }
        ]
      },
      {
        "title": "Laguhang Panlapi: Pagsusuri",
        "text": "Bagamat bihira, ang laguhang panlapi ay nagpapakita ng yaman ng wikang Filipino sa pagbuo ng mga pandiwa na nagiging pangngalang kilos. <span class='fil-sentence' data-translation='Although rare, laguhan shows the richness of Filipino in creating activity-based nouns.'></span>",
        "examples": [
          {
            "title": "Pagsusuri",
            "content": "pag- + -um- + sumikap + -an = pagsumikapan (to strive for) <span class='fil-sentence' data-translation='analysis of circumfix + infix combination'></span>"
          },
          {
            "title": "Halimbawa ng Kilos",
            "content": "Ang <span class='fil-phrase' data-translation='striving'>pagsumusikap</span> ng mga mag-aaral ay nagbunga. <span class='fil-sentence' data-translation='The striving of the students bore fruit.'></span>"
          }
        ]
      },
      {
        "title": "Pagbubuod ng Kayarian ng Pangngalan",
        "text": "Bilang pagbubuod: Ang payak ay salitang-ugat lamang. Ang maylapi ay may kasamang panlapi na maaaring unlapi (unahan), gitlapi (gitna), hulapi (hulihan), kabilaan (magkabila), o laguhan (lahat). Ginagamit natin ito sa pagsulat ng mga ulat at pangungusap. <span class='fil-sentence' data-translation='Summary: Payak is root word only. Maylapi has affixes: prefix, infix, suffix, circumfix, or mixed. We use these in report writing and sentences.'></span>",
        "examples": [
          {
            "title": "Magsanay sa Bahay",
            "content": "Maglista ng limang payak na pangngalan sa iyong kusina at gawin itong maylapi! <span class='fil-sentence' data-translation='List five simple nouns in your kitchen and make them affixed!'></span>"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What do we call a noun that consists only of a root word without any affixes?\">Ano ang tawag sa pangngalan na binubuo lamang ng salitang-ugat?</span>",
        "options": [
          "Maylapi",
          "Payak",
          "Inuulit",
          "Tambalan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is a payak (simple) noun?\">Alin sa mga sumusunod ang halimbawa ng pangngalang payak?</span>",
        "options": [
          "aklatan",
          "tagaluto",
          "kahoy",
          "kabataan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the root word of the affixed noun 'aklatan' (library)?\">Ano ang salitang-ugat ng pangngalang maylapi na 'aklatan'?</span>",
        "options": [
          "akla",
          "lat",
          "aklat",
          "aklatang"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of affix is attached to the beginning of a root word?\">Anong uri ng panlapi ang ikinakabit sa unahan ng salitang-ugat?</span>",
        "options": [
          "Hulapi",
          "Gitlapi",
          "Unlapi",
          "Kabilaan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In 'tagasulat' (writer), which part of the word is the unlapi (prefix)?\">Sa salitang 'tagasulat', alin ang unlapi?</span>",
        "options": [
          "sulat",
          "taga-",
          "-ulat",
          "tagasulat"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of affix is inserted in the middle of a root word, such as -um- or -in-?\">Anong uri ng panlapi ang isinisingit sa gitna ng salitang-ugat tulad ng -um- at -in-?</span>",
        "options": [
          "Unlapi",
          "Gitlapi",
          "Hulapi",
          "Laguhan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following contains a gitlapi (infix)?\">Alin sa mga sumusunod na salita ang may gitlapi?</span>",
        "options": [
          "magsulat",
          "tumakbo",
          "sumikat",
          "aralin"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of affix is attached to the end of a root word?\">Anong uri ng panlapi ang ikinakabit sa hulihan ng salitang-ugat?</span>",
        "options": [
          "Unlapi",
          "Gitlapi",
          "Hulapi",
          "Kabilaan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In 'aralin' (lesson), what is the hulapi (suffix)?\">Sa salitang 'aralin', ano ang hulapi?</span>",
        "options": [
          "aral",
          "-in",
          "ara",
          "-lin"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What do we call affixes attached to both the beginning and the end of a root word?\">Ano ang tawag sa panlaping ikinakabit sa unahan at hulihan ng salitang-ugat nang sabay?</span>",
        "options": [
          "Unlapi",
          "Gitlapi",
          "Hulapi",
          "Kabilaan"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is an example of a kabilaan (circumfixed) noun?\">Alin sa mga sumusunod ang halimbawa ng pangngalang may panlaping kabilaan?</span>",
        "options": [
          "tahanan",
          "pamahalaan",
          "binasa",
          "tagasulat"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In 'kabataan' (youth), what are the affixes used?\">Sa salitang 'kabataan', ano-anong panlapi ang ginamit sa salitang-ugat na 'bata'?</span>",
        "options": [
          "ka- at -an",
          "kab- at -an",
          "ka- at -taan",
          "kabat- at -an"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of affix is attached to the beginning, middle, and end of a root word simultaneously?\">Anong uri ng panlapi ang ikinakabit sa unahan, gitna, at hulihan ng salitang-ugat nang sabay-sabay?</span>",
        "options": [
          "Kabilaan",
          "Gitlapi",
          "Laguhan",
          "Unlapi"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which word contains a laguhan (mixed) affix?\">Aling salita ang nagpapakita ng panlaping laguhan?</span>",
        "options": [
          "magdinuguan",
          "kabataan",
          "tagaluto",
          "sulatang-papel"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the root word of 'pamahalaan' (government)?\">Ano ang salitang-ugat ng pangngalang 'pamahalaan'?</span>",
        "options": [
          "pamahala",
          "hala",
          "pamuno",
          "pamahalaang"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is a payak (simple) noun representing a place?\">Alin sa mga sumusunod ang pangngalang payak na tumutukoy sa pook?</span>",
        "options": [
          "paaralan",
          "aklatan",
          "gubat",
          "palaisdaan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What spelling change happens when combining 'pang-' and 'bata'?\">Anong pagbabago sa baybay ang nagaganap kapag pinagsama ang 'pang-' at 'bata'?</span>",
        "options": [
          "pangbata",
          "pambata",
          "panbata",
          "pabata"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What spelling change happens when combining 'pang-' and 'tali' (tie)?\">Anong pagbabago sa baybay ang nagaganap kapag pinagsama ang 'pang-' at 'tali'?</span>",
        "options": [
          "pangtali",
          "pantali",
          "panali",
          "patali"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following words does NOT change its 'ng' to 'n' or 'm' when prefixed with 'pang-'?\">Aling salita ang HINDI nagbabago ang 'ng' ng unlaping 'pang-'?</span>",
        "options": [
          "paaralan",
          "tali",
          "gulat",
          "bata"
        ],
        "answer": 2
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The word 'tsokolate' (chocolate) is a maylapi noun because it is long.\">Ang salitang 'tsokolate' ay isang pangngalang maylapi dahil ito ay mahaba.</span>",
        "answer": false
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The infix -um- is added at the end of the root word.\">Ang gitlaping -um- ay ikinakabit sa hulihan ng salitang-ugat.</span>",
        "answer": false
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The noun 'kagubatan' contains a circumfix (kabilaan) on the root word 'gubat'.\">Ang pangngalang 'kagubatan' ay may panlaping kabilaan sa salitang-ugat na 'gubat'.</span>",
        "answer": true
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the root word of 'kalaro' (playmate)?\">Ano ang salitang-ugat ng pangngalang 'kalaro'?</span>",
        "answer": "laro"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What prefix (unlapi) is used in 'tagaluto' (cook)?\">Anong unlapi ang ginamit sa salitang 'tagaluto'?</span>",
        "answer": "taga-"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What suffix (hulapi) is used in 'aralin' (lesson)?\">Anong hulapi ang ginamit sa salitang 'aralin'?</span>",
        "answer": "-in"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Classify the noun 'pagkamamamayan' (citizenship) based on its structure:\">Suriin ang kayarian ng pangngalang 'pagkamamamayan':</span>",
        "options": [
          "payak",
          "maylapi",
          "inuulit",
          "tambalan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the root word of the complex noun 'pagkamamamayan'?\">Ano ang salitang-ugat ng pangngalang 'pagkamamamayan'?</span>",
        "options": [
          "bayan",
          "mamamayan",
          "tao",
          "pagkama"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is correct for 'pang-' combined with 'kagat' (bite)?\">Alin ang tamang baybay para sa pinagsamang 'pang-' at 'kagat'?</span>",
        "options": [
          "pan kagat",
          "pangkagat",
          "pangkagatan",
          "panagat"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which noun contains a suffix (hulapi) indicating a place where actions are done?\">Aling pangngalan ang may hulapi na nagpapahiwatig ng lugar kung saan ginagawa ang kilos?</span>",
        "options": [
          "tagasulat",
          "tinapay",
          "sulatan",
          "guro"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In: 'Ang pamunuan ng paaralan ay nagpulong.', what is the structure of the noun 'pamunuan'?\">Sa pangungusap: 'Ang pamunuan ng paaralan ay nagpulong.', ano ang kayarian ng pangngalang 'pamunuan'?</span>",
        "options": [
          "payak",
          "maylapi na may kabilaan",
          "maylapi na may gitlapi",
          "tambalan"
        ],
        "answer": 1
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Puno ng Salita at Panlapi",
      "desc": "Kumuha ng papel at gumuhit ng isang 'Puno ng Salita'. Sa ugat ng puno, sumulat ng tatlong payak na pangngalan (salitang-ugat) tulad ng 'sulat', 'aral', at 'laro'. Sa mga sanga ng puno, isulat ang mga bagong pangngalang maylapi na nabuo sa pamamagitan ng pagdaragdag ng iba't ibang panlapi (unlapi, gitlapi, hulapi, at kabilaan). Lagyan ng label kung anong uri ng panlapi ang ginamit sa bawat sanga. Ipakita at ipaliwanag ang iyong puno sa iyong magulang o guro. <span class='fil-sentence' data-translation='Draw a Word Tree. Write three root words at the roots. On branches, write Maylapi variations using prefixes, infixes, suffixes, and circumfixes. Label the affixes used. Explain it to a parent/teacher.'></span>",
      "labels": [
        "Tumpak na natukoy ang mga salitang-ugat (payak) sa ugat ng puno",
        "Wastong nakabuo ng mga maylaping salita sa mga sanga",
        "Malinaw na na-label ang uri ng panlapi (unlapi, gitlapi, hulapi, kabilaan) na ginamit"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Salitang-Ugat at Panlapi</h3>\n                  <p class=\"ws-instruction\">Suriin ang mga maylaping salita sa ibaba. Ibigay ang salitang-ugat at uri ng panlapi na ginamit. <span class=\"fil-sentence\" data-translation=\"Analyze root words and affixes.\"></span></p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Salitang Maylapi</th>\n                        <th>Salitang-Ugat</th>\n                        <th>Uri ng Panlapi (Unlapi / Gitlapi / Hulapi / Kabilaan)</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>aklatan</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>tagaluto</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>sumikat</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>kabataan</td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Asimilasyon ng 'Pang-'</h3>\n                  <p class=\"ws-instruction\">Isulat ang tamang anyo ng unlaping 'pang-' kapag ikinabit sa salitang-ugat. <span class=\"fil-sentence\" data-translation=\"Write the correct form of prefix 'pang-'.\"></span></p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 20px;\">1. pang- + bata = <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. pang- + tali = <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">3. pang- + gulat = <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Payak o Maylapi</h3>\n                  <p class=\"ws-instruction\">Isulat sa linya kung ang salita ay Payak o Maylapi at salungguhitan ang panlapi nito kung mayroon.</p>\n                  \n                  <table class=\"ws-table\" style=\"margin-top: 15px;\">\n                    <thead>\n                      <tr>\n                        <th>Pangngalan</th>\n                        <th>Kayarian (Payak o Maylapi)</th>\n                        <th>Pangngalan</th>\n                        <th>Kayarian (Payak o Maylapi)</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1. Aklat</td>\n                        <td></td>\n                        <td>3. Simbahan</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>2. Magsasaka</td>\n                        <td></td>\n                        <td>4. Bahay</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
    }
  },
  "makabansa": {
    "color": "#3b82f6",
    "icon": "🏘️",
    "title": "Araling Panlipunan",
    "subtitle": "Week 1: Ang Teritoryo at Elemento ng Bansa [Advanced]",
    "slides": [
      {
        "title": "Ano ang Bansa?",
        "text": "Ang bansa ay isang teritoryo na may naninirahang grupo ng mga tao na may sariling pamahalaan at soberanya o kalayaan. Hindi lahat ng lugar sa mundo ay matatawag na bansa. <span class='fil-sentence' data-translation='A country is a territory inhabited by a group of people with its own government and sovereignty or freedom. Not all places are countries.'></span>",
        "examples": [
          {
            "title": "Halimbawa 1",
            "content": "Ang Pilipinas, Hapon, at Estados Unidos ay mga bansa dahil taglay nila ang lahat ng elemento. <span class='fil-sentence' data-translation='The Philippines, Japan, and the United States are countries because they possess all elements.'></span>"
          },
          {
            "title": "Halimbawa 2",
            "content": "Ang Hawaii at California ay hindi hiwalay na bansa kundi mga estado lamang ng bansang Estados Unidos. <span class='fil-sentence' data-translation='Hawaii and California are not separate countries but states of the USA.'></span>"
          }
        ]
      },
      {
        "title": "Ang Apat na Elemento ng Bansa",
        "text": "Upang maituring na bansa ang isang lugar, kailangan nitong taglayin ang apat na mahalagang elemento: Tao, Teritoryo, Pamahalaan, at Soberanya. Kung may kulang na isa, hindi ito matatawag na bansa. <span class='fil-sentence' data-translation='To be considered a country, a place must possess four essential elements: People, Territory, Government, and Sovereignty.'></span>",
        "examples": [
          {
            "title": "Listahan ng Elemento",
            "content": "1. Tao (People)<br>2. Teritoryo (Territory)<br>3. Pamahalaan (Government)<br>4. Soberanya (Sovereignty) <span class='fil-sentence' data-translation='List of the four elements in English.'></span>"
          },
          {
            "title": "Soberanya bilang Kalayaan",
            "content": "Ang soberanya ang natatanging kapangyarihan na nagbibigay-laya sa pamahalaan na gumawa ng sariling batas nang walang pakialam ng ibang bansa. <span class='fil-sentence' data-translation='Sovereignty is the supreme power that frees the government to make its own laws without foreign interference.'></span>"
          }
        ]
      },
      {
        "title": "Elemento 1: Tao (Mamamayan)",
        "text": "Ang tao ay tumutukoy sa grupong naninirahan sa loob ng teritoryo ng bansa. Sila ang nagtataguyod sa komunidad, sumusunod sa batas, at gumagawa ng yaman ng bansa. <span class='fil-sentence' data-translation='People refers to the population living inside the territory of the country. They support the community, follow laws, and produce wealth.'></span>",
        "examples": [
          {
            "title": "Populasyon ng Pilipinas",
            "content": "Ang mga Pilipino ang bumubuo sa elemento ng tao sa bansang Pilipinas. <span class='fil-sentence' data-translation='Filipinos make up the population element of the Philippines.'></span>"
          },
          {
            "title": "Tungkulin ng Mamamayan",
            "content": "Ang pakikipagtulungan sa mga proyekto ng pamahalaan ay tungkulin ng tao upang mapanatili ang kaayusan. <span class='fil-sentence' data-translation='Cooperating with government projects is a duty of the people to maintain order.'></span>"
          }
        ]
      },
      {
        "title": "Elemento 2: Teritoryo",
        "text": "Ang teritoryo ay ang lawak ng lupain, katubigan (kabilang ang ilalim ng dagat), at himpapawid na sakop ng isang bansa kung saan may hurisdiksyon ang pamahalaan nito. <span class='fil-sentence' data-translation='Territory is the scope of land, waters (including undersea), and airspace covered by a country under its government's jurisdiction.'></span>",
        "examples": [
          {
            "title": "Lawak ng Pilipinas",
            "content": "Ang Pilipinas ay isang kapuluan (archipelago) na binubuo ng higit sa 7,100 na mga isla. <span class='fil-sentence' data-translation='The Philippines is an archipelago consisting of more than 7,100 islands.'></span>"
          },
          {
            "title": "Teritoryo sa Dagat",
            "content": "Kasama sa teritoryo ng bansa ang Exclusive Economic Zone (EEZ) na may lawak na 200 nautical miles mula sa baybayin. <span class='fil-sentence' data-translation='The country's territory includes the EEZ stretching 200 nautical miles from the coast.'></span>"
          }
        ]
      },
      {
        "title": "Elemento 3: Pamahalaan",
        "text": "Ang pamahalaan ay ang samahan o institusyong nagpapatupad ng mga batas, nagpapanatili ng kaayusan, at nagbibigay ng serbisyo sa mga mamamayan upang maprotektahan sila. <span class='fil-sentence' data-translation='Government is the organization or institution that enforces laws, maintains order, and provides services to protect citizens.'></span>",
        "examples": [
          {
            "title": "Tatlong Sanga ng Pamahalaan",
            "content": "Ehekutibo (tagapagpatupad), Lehislatibo (tagagawa ng batas), at Hudisyal (tagahatol). <span class='fil-sentence' data-translation='Executive (enforces), Legislative (makes laws), and Judicial (interprets).'></span>"
          },
          {
            "title": "Demokratikong Pamahalaan",
            "content": "Sa Pilipinas, ang pamahalaan ay demokratiko kung saan ang mga pinuno ay inihahalal ng mga mamamayan. <span class='fil-sentence' data-translation='In the Philippines, the government is democratic where leaders are elected by the citizens.'></span>"
          }
        ]
      },
      {
        "title": "Elemento 4: Soberanya",
        "text": "Ang soberanya ay ang sukdulang kapangyarihan ng bansa na mamahala sa sarili nitong teritoryo at mga tao nang malaya mula sa kontrol o panghihimasok ng ibang mga bansa. <span class='fil-sentence' data-translation='Sovereignty is the supreme power of a country to govern itself and its people free from foreign control or interference.'></span>",
        "examples": [
          {
            "title": "Dalawang Uri ng Soberanya",
            "content": "Soberanyang Panloob (kapangyarihang mamahala sa loob ng bansa) at Soberanyang Panlabas (kalayaan mula sa ibang bansa). <span class='fil-sentence' data-translation='Internal Sovereignty (govern within) and External Sovereignty (freedom from other countries).'></span>"
          },
          {
            "title": "Simbolo ng Kalayaan",
            "content": "Ang ating pambansang watawat at opisyal na selyo ay mga simbolo ng ating soberanya. <span class='fil-sentence' data-translation='Our national flag and official seal are symbols of our sovereignty.'></span>"
          }
        ]
      },
      {
        "title": "Teritoryo ng Pilipinas ayon sa Saligang Batas",
        "text": "Ang teritoryo ng Pilipinas ay nakasaad sa Unang Artikulo ng Saligang Batas ng 1987. Nililinaw nito ang sakop ng pambansang teritoryo kabilang ang mga isla at karagatang nakapaligid dito. <span class='fil-sentence' data-translation='The Philippine territory is defined in Article I of the 1987 Constitution, detailing islands and surrounding waters.'></span>",
        "examples": [
          {
            "title": "Doktrinang Arkipelago",
            "content": "Itinuturing na isang buong teritoryo ang kapuluan ng Pilipinas kung saan ang mga karagatan sa pagitan ng mga isla ay bahagi ng panloob na tubig nito. <span class='fil-sentence' data-translation='The Archipelagic Doctrine treats the archipelago as a single unit, with waters between islands as internal waters.'></span>"
          },
          {
            "title": "Lupang Sakop",
            "content": "Kabilang dito ang Luzon, Visayas, Mindanao, at lahat ng maliliit na islang nasasakupan nito sa ilalim ng batas. <span class='fil-sentence' data-translation='This includes Luzon, Visayas, Mindanao, and all small islands under jurisdiction.'></span>"
          }
        ]
      },
      {
        "title": "Ang Kahalagahan ng Soberanyang Panlabas",
        "text": "Ang soberanyang panlabas ay nagbibigay ng karapatan sa Pilipinas na makipag-ugnayan sa ibang bansa bilang kapantay na bansa sa mundo. <span class='fil-sentence' data-translation='External sovereignty gives the Philippines the right to interact with other nations as equals in the global community.'></span>",
        "examples": [
          {
            "title": "Pagsali sa United Nations",
            "content": "Bilang isang malayang bansa, ang Pilipinas ay isa sa mga nagtatag ng United Nations (UN) noong 1945. <span class='fil-sentence' data-translation='As a free country, the Philippines was a founding member of the UN in 1945.'></span>"
          },
          {
            "title": "Kasunduan",
            "content": "Maaari tayong pumirma ng mga kasunduang pang-ekonomiya at pang-depensa sa ibang bansa. <span class='fil-sentence' data-translation='We can sign economic and defense treaties with other nations.'></span>"
          }
        ]
      },
      {
        "title": "Ang Kahalagahan ng Soberanyang Panloob",
        "text": "Ang soberanyang panloob ay nagpapahintulot sa ating pamahalaan na magpatupad ng sarili nating mga batas para sa kapayapaan at kaligtasan ng mga Pilipino. <span class='fil-sentence' data-translation='Internal sovereignty allows our government to implement its own laws for the peace and safety of Filipinos.'></span>",
        "examples": [
          {
            "title": "Pagpapatupad ng Batas trapiko",
            "content": "Ang Republic Act 10586 (Anti-Drunk Driving Act) ay ipinatutupad sa loob ng bansa upang maprotektahan ang mga motorista. <span class='fil-sentence' data-translation='Republic Act 10586 is implemented internally to protect motorists.'></span>"
          },
          {
            "title": "Pagpataw ng Buwis",
            "content": "Ang pamahalaan lamang natin ang may karapatang mangolekta ng buwis sa loob ng ating teritoryo. <span class='fil-sentence' data-translation='Only our government has the right to collect taxes inside our territory.'></span>"
          }
        ]
      },
      {
        "title": "Mga Uri ng Teritoryo: Kalupaan (Territorial Land)",
        "text": "Ito ang bahaging lupa ng bansa kabilang ang mga bundok, kapatagan, lambak, at mga mineral na matatagpuan sa ilalim nito. <span class='fil-sentence' data-translation='This is the land portion of the country, including mountains, plains, valleys, and underground minerals.'></span>",
        "examples": [
          {
            "title": "Likas na Yaman ng Lupa",
            "content": "Ang Bulkang Mayon at Chocolate Hills ay bahagi ng kalupaan ng Pilipinas na dinarayo ng mga turista. <span class='fil-sentence' data-translation='Mount Mayon and Chocolate Hills are tourist spots on Philippine land.'></span>"
          },
          {
            "title": "Pagsasaka",
            "content": "Ang kapatagan ng Gitnang Luzon ay tinuturing na 'Rice Granary' ng bansa dahil sa malawak na taniman ng palay. <span class='fil-sentence' data-translation='The plains of Central Luzon are the country's rice granary due to vast rice fields.'></span>"
          }
        ]
      },
      {
        "title": "Mga Uri ng Teritoryo: Katubigan (Territorial Waters)",
        "text": "Ito ang sakop na mga ilog, lawa, look, at ang dagat teritoryal na nakapaligid sa mga isla ng kapuluan. <span class='fil-sentence' data-translation='This covers rivers, lakes, bays, and the territorial sea surrounding the islands of the archipelago.'></span>",
        "examples": [
          {
            "title": "Dagat Teritoryal",
            "content": "May lawak na 12 nautical miles mula sa baseline kung saan ang bansa ay may ganap na kapangyarihang mamahala. <span class='fil-sentence' data-translation='The territorial sea extends 12 nautical miles from the baseline under absolute government power.'></span>"
          },
          {
            "title": "Panloob na Katubigan",
            "content": "Ang Lawa ng Laguna at Look ng Maynila ay bahagi ng panloob na katubigan ng Pilipinas. <span class='fil-sentence' data-translation='Laguna Lake and Manila Bay are internal waters of the Philippines.'></span>"
          }
        ]
      },
      {
        "title": "Mga Uri ng Teritoryo: Himpapawid (Airspace)",
        "text": "Ito ang espasyo sa itaas ng kalupaan at katubigan ng bansa. Walang dayuhang eroplano ang maaaring dumaan dito nang walang pahintulot. <span class='fil-sentence' data-translation='This is the space above the country's land and waters. No foreign plane may enter without permission.'></span>",
        "examples": [
          {
            "title": "Air Defense Identification Zone (ADIZ)",
            "content": "Binabantayan ng Philippine Air Force ang ating himpapawid upang harangan ang mga hindi awtorisadong eroplano. <span class='fil-sentence' data-translation='The Philippine Air Force monitors our airspace to intercept unauthorized planes.'></span>"
          },
          {
            "title": "Komersyal na Flight",
            "content": "Ang mga dayuhang eroplano ay nagbabayad ng 'overflight fee' kapag dumadaan sa ating himpapawid patungo sa ibang bansa. <span class='fil-sentence' data-translation='Foreign planes pay overflight fees when passing through our airspace.'></span>"
          }
        ]
      },
      {
        "title": "Ang Exclusive Economic Zone (EEZ)",
        "text": "Ang EEZ ay isang bahagi ng karagatan na umaabot ng 200 nautical miles mula sa baybayin kung saan ang bansa ay may eksklusibong karapatang kumuha ng likas na yaman. <span class='fil-sentence' data-translation='The EEZ is an ocean zone stretching 200 nautical miles where the country has exclusive resource rights.'></span>",
        "examples": [
          {
            "title": "Pangingisda at Enerhiya",
            "content": "Ang mga Pilipinong mangingisda lamang ang may karapatang mangisda sa EEZ, kabilang ang pagkuha ng natural gas sa Malampaya. <span class='fil-sentence' data-translation='Only Filipino fishermen have the right to fish in the EEZ, and extract natural gas in Malampaya.'></span>"
          },
          {
            "title": "UNCLOS",
            "content": "Ito ay batay sa United Nations Convention on the Law of the Sea (UNCLOS) na pinirmahan ng maraming bansa. <span class='fil-sentence' data-translation='This is based on the UNCLOS signed by many nations.'></span>"
          }
        ]
      },
      {
        "title": "Bakit Mahalaga ang Teritoryo?",
        "text": "Ang teritoryo ay nagbibigay ng espasyo para mabuhay ang mamamayan at naglalaman ng mga likas na yaman na kailangan sa ekonomiya ng bansa. <span class='fil-sentence' data-translation='Territory provides living space for citizens and contains natural resources needed for the economy.'></span>",
        "examples": [
          {
            "title": "Tahanan ng Tao",
            "content": "Kung walang teritoryo, walang matitirhan ang mga tao at hindi makabubuo ng komunidad. <span class='fil-sentence' data-translation='Without territory, people have nowhere to live and cannot form communities.'></span>"
          },
          {
            "title": "Likas na Yaman",
            "content": "Ang ating mga ginto, tanso, kagubatan, at isda ay matatagpuan sa loob ng ating teritoryo. <span class='fil-sentence' data-translation='Our gold, copper, forests, and fish are found inside our territory.'></span>"
          }
        ]
      },
      {
        "title": "Ang Papel ng Pamahalaan: Serbisyo Publiko",
        "text": "Ang pamahalaan ay nagbibigay ng libreng edukasyon, serbisyong pangkalusugan, at nagpapatayo ng mga kalsada at tulay para sa mamamayan. <span class='fil-sentence' data-translation='The government provides free education, healthcare, and builds roads and bridges for citizens.'></span>",
        "examples": [
          {
            "title": "Libreng Edukasyon",
            "content": "Ang mga pampublikong paaralan sa Pilipinas ay pinopondohan ng pamahalaan upang makapag-aral ang mga bata nang libre. <span class='fil-sentence' data-translation='Public schools in the Philippines are funded by the government to educate children for free.'></span>"
          },
          {
            "title": "Kalusugan",
            "content": "Ang PhilHealth ay nagbibigay ng tulong pinansyal sa mga may sakit na nagpapagamot sa ospital. <span class='fil-sentence' data-translation='PhilHealth provides financial assistance to sick people in hospitals.'></span>"
          }
        ]
      },
      {
        "title": "Ang Papel ng Pamahalaan: Pagtatanggol sa Bansa",
        "text": "Binabantayan ng pamahalaan ang ating mga hangganan upang maprotektahan ang teritoryo at mamamayan mula sa dayuhang banta o pananakop. <span class='fil-sentence' data-translation='The government guards our borders to protect territory and citizens from foreign threats.'></span>",
        "examples": [
          {
            "title": "Armed Forces of the Philippines (AFP)",
            "content": "Ang Philippine Army, Navy, at Air Force ang nagbabantay sa ating kalupaan, katubigan, at himpapawid. <span class='fil-sentence' data-translation='The AFP guards our land, waters, and airspace.'></span>"
          },
          {
            "title": "Philippine Coast Guard (PCG)",
            "content": "Binabantayan ng Coast Guard ang ating mga baybayin laban sa mga ilegal na dayuhang barko. <span class='fil-sentence' data-translation='The Coast Guard monitors our coastlines against illegal foreign vessels.'></span>"
          }
        ]
      },
      {
        "title": "Ang Konstitusyon: Gabay ng Pamahalaan",
        "text": "Ang Konstitusyon o Saligang Batas ang pinakamataas na batas ng bansa. Dito nakasaad ang kapangyarihan ng pamahalaan at karapatan ng mamamayan. <span class='fil-sentence' data-translation='The Constitution is the supreme law of the land, stating government powers and citizen rights.'></span>",
        "examples": [
          {
            "title": "Saligang Batas ng 1987",
            "content": "Ito ang kasalukuyang konstitusyon ng Pilipinas na nagpapanatili ng demokrasya sa bansa. <span class='fil-sentence' data-translation='This is the current constitution of the Philippines maintaining democracy.'></span>"
          },
          {
            "title": "Bill of Rights",
            "content": "Nakasaad dito ang karapatan natin sa malayang pagpapahayag at malayang pagpili ng relihiyon. <span class='fil-sentence' data-translation='It states our rights to free speech and freedom of religion.'></span>"
          }
        ]
      },
      {
        "title": "Paano Ipinagtatanggol ang Soberanya?",
        "text": "Ipinagtatanggol ang soberanya sa pamamagitan ng diplomasya (pakikipag-usap sa ibang bansa) at pagpapalakas ng ating depensang militar. <span class='fil-sentence' data-translation='Sovereignty is defended through diplomacy (international talks) and strengthening military defense.'></span>",
        "examples": [
          {
            "title": "Internasyonal na Korte",
            "content": "Noong 2016, nanalo ang Pilipinas sa Arbitral Ruling sa The Hague upang patunayan ang ating karapatan sa West Philippine Sea. <span class='fil-sentence' data-translation='In 2016, the Philippines won the Arbitral Ruling at The Hague confirming our rights in the West Philippine Sea.'></span>"
          },
          {
            "title": "Pakikipagkaibigan",
            "content": "Nakikipagtulungan tayo sa ASEAN upang mapanatili ang kapayapaan sa rehiyon. <span class='fil-sentence' data-translation='We cooperate with ASEAN to maintain peace in the region.'></span>"
          }
        ]
      },
      {
        "title": "Ang Konsepto ng Pagkabansa (Nationhood)",
        "text": "Ang pagkabansa ay ang damdamin ng pagkakaisa at pagmamahal sa sariling bansa ng mga tao na may magkakatulad na kasaysayan, kultura, at mithiin. <span class='fil-sentence' data-translation='Nationhood is the feeling of unity and love for one's country among people with shared history, culture, and goals.'></span>",
        "examples": [
          {
            "title": "Makabayang Awitin",
            "content": "Ang pag-awit ng Lupang Hinirang nang may kamay sa dibdib ay nagpapakita ng pagkabansa. <span class='fil-sentence' data-translation='Singing Lupang Hinirang with hand on chest shows nationhood.'></span>"
          },
          {
            "title": "Pagtulong sa Kapuwa",
            "content": "Ang 'bayanihan' sa panahon ng kalamidad ay patunay ng ating pagkakaisa bilang isang lahi. <span class='fil-sentence' data-translation='Bayanihan during disasters is proof of our unity as one race.'></span>"
          }
        ]
      },
      {
        "title": "Likas na Yaman ng Teritoryo: Enerhiya",
        "text": "Sa loob ng ating teritoryo matatagpuan ang mga mapagkukunan ng malinis na enerhiya upang magkaroon ng kuryente ang ating mga tahanan. <span class='fil-sentence' data-translation='Inside our territory lie clean energy resources to power our homes.'></span>",
        "examples": [
          {
            "title": "Geothermal Energy",
            "content": "Ang Tiwi Geothermal Plant sa Albay ay gumagamit ng init mula sa ilalim ng lupa upang makagawa ng kuryente. <span class='fil-sentence' data-translation='Tiwi Geothermal Plant uses underground heat to generate electricity.'></span>"
          },
          {
            "title": "Hydroelectric Power",
            "content": "Ang Maria Cristina Falls sa Lanao del Norte ay nagbibigay ng kuryente sa malaking bahagi ng Mindanao gamit ang lakas ng tubig. <span class='fil-sentence' data-translation='Maria Cristina Falls provides electricity to Mindanao using water power.'></span>"
          }
        ]
      },
      {
        "title": "Ang Tungkulin ng Mamamayan sa Teritoryo",
        "text": "Tungkulin ng bawat Pilipino na pangalagaan ang ating teritoryo sa pamamagitan ng pagprotekta sa kalikasan laban sa polusyon. <span class='fil-sentence' data-translation='It is the duty of every Filipino to care for our territory by protecting nature from pollution.'></span>",
        "examples": [
          {
            "title": "Bawal Magtapon sa Ilog",
            "content": "Ang hindi pagtatapon ng plastik sa mga ilog ay tumutulong na mapanatiling malinis ang ating territorial waters. <span class='fil-sentence' data-translation='Not throwing plastic in rivers keeps our territorial waters clean.'></span>"
          },
          {
            "title": "Pagtatanim ng Puno",
            "content": "Ang pagsali sa tree planting activities ay nagpapanatili ng katatagan ng ating kalupaan laban sa landslide. <span class='fil-sentence' data-translation='Joining tree planting activities protects our land from landslides.'></span>"
          }
        ]
      },
      {
        "title": "Ang Lokasyong Bisinal at Insular",
        "text": "Matutukoy natin ang lokasyon ng Pilipinas sa pamamagitan ng pagtingin sa mga katabing bansa (bisinal) at mga nakapaligid na dagat (insular). <span class='fil-sentence' data-translation='We locate the Philippines by looking at neighboring countries (vicinal) and surrounding seas (insular).'></span>",
        "examples": [
          {
            "title": "Bisinal na Kapitbahay",
            "content": "Ang Taiwan ay nasa hilaga ng Pilipinas, at ang Malaysia naman ay nasa timog-kanluran. <span class='fil-sentence' data-translation='Taiwan is north of the Philippines, and Malaysia is southwest.'></span>"
          },
          {
            "title": "Insular na Katubigan",
            "content": "Ang Pacific Ocean ay nasa silangan ng bansa, at ang West Philippine Sea naman ay nasa kanluran. <span class='fil-sentence' data-translation='The Pacific Ocean is east of the country, and the West Philippine Sea is west.'></span>"
          }
        ]
      },
      {
        "title": "Bakit Hindi Bansa ang Hong Kong?",
        "text": "Ang Hong Kong ay may sariling teritoryo, pamahalaan, at mga mamamayan, ngunit wala silang ganap na soberanya dahil sila ay sakop ng bansang Tsina. <span class='fil-sentence' data-translation='Hong Kong has territory, government, and citizens, but lacks sovereignty because it is under China.'></span>",
        "examples": [
          {
            "title": "Soberanya sa Tsina",
            "content": "Ang mga pangunahing desisyong pang-internasyonal at pang-depensa ng Hong Kong ay pinamamahalaan ng Tsina. <span class='fil-sentence' data-translation='Hong Kong's major international and defense decisions are managed by China.'></span>"
          },
          {
            "title": "Bansa check",
            "content": "Dahil kulang ng isang elemento (soberanya), ang Hong Kong ay tinuturing na Special Administrative Region at hindi isang hiwalay na bansa. <span class='fil-sentence' data-translation='Lacking one element (soberancy), Hong Kong is a Special Administrative Region, not a separate country.'></span>"
          }
        ]
      },
      {
        "title": "Ang Pagkilala ng Ibang Bansa",
        "text": "Upang maging ganap ang pakikipag-ugnayan, mahalagang kilalanin ng ibang mga bansa ang soberanya ng Pilipinas. <span class='fil-sentence' data-translation='For full interaction, it is important that other countries recognize the sovereignty of the Philippines.'></span>",
        "examples": [
          {
            "title": "Mga Embahada",
            "content": "Ang pagkakaroon ng mga embahada ng ibang bansa sa Maynila (gaya ng US Embassy) ay simbolo ng kanilang pagkilala sa ating pamahalaan. <span class='fil-sentence' data-translation='Having foreign embassies in Manila (like the US Embassy) is a symbol of their recognition of our government.'></span>"
          },
          {
            "title": "Kasunduang Diplomatiko",
            "content": "Ipinapakita nito na tayo ay pinagkakatiwalaan sa mga pandaigdigang kasunduan. <span class='fil-sentence' data-translation='This shows we are trusted in international treaties.'></span>"
          }
        ]
      },
      {
        "title": "Buod ng Paksang Teritoryo at Elemento",
        "text": "Bilang pagbubuod: Ang bansa ay may apat na elemento: Tao, Teritoryo, Pamahalaan, at Soberanya. Ang teritoryo ng Pilipinas ay binubuo ng kalupaan, katubigan, at himpapawid. Ang pamahalaan ang nagpapatupad ng batas at nagtatanggol sa soberanya o kalayaan ng ating bansa. <span class='fil-sentence' data-translation='Summary: A country has four elements: People, Territory, Government, and Sovereignty. The Philippine territory consists of land, water, and air. The government enforces laws and defends our sovereignty or freedom.'></span>",
        "examples": [
          {
            "title": "Magsanay sa Bahay",
            "content": "Ipaliwanag sa iyong kapatid kung bakit isang bansa ang Pilipinas gamit ang apat na elemento! <span class='fil-sentence' data-translation='Explain to a sibling why the Philippines is a country using the four elements!'></span>"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following refers to a territory with a group of people, a government, and sovereignty?\">Alin sa mga sumusunod ang tumutukoy sa isang teritoryo na may naninirahang mga tao, pamahalaan, at soberanya?</span>",
        "options": [
          "Lungsod",
          "Bansa",
          "Estado ng US",
          "Rehiyon"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"How many elements must a place possess to be considered a country?\">Ilang elemento ang kailangang taglayin ng isang lugar upang maituring itong bansa?</span>",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What element of a country refers to the citizens living within its boundaries?\">Anong elemento ng bansa ang tumutukoy sa mga mamamayang naninirahan sa loob nito?</span>",
        "options": [
          "Teritoryo",
          "Tao",
          "Pamahalaan",
          "Soberanya"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What element of a country refers to the scope of land, water, and airspace under its jurisdiction?\">Anong elemento ng bansa ang tumutukoy sa lawak ng lupain, katubigan, at himpapawid na nasasakupan nito?</span>",
        "options": [
          "Soberanya",
          "Pamahalaan",
          "Teritoryo",
          "Tao"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What element refers to the institution that enforces laws and maintains order?\">Anong elemento ang tumutukoy sa institusyong nagpapatupad ng mga batas at nagpapanatili ng kaayusan?</span>",
        "options": [
          "Tao",
          "Teritoryo",
          "Soberanya",
          "Pamahalaan"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What element refers to the supreme power of a country to govern itself and be free from foreign control?\">Anong elemento ang tumutukoy sa sukdulang kapangyarihan ng bansa na mamahala sa sarili at maging malaya sa dayuhang kontrol?</span>",
        "options": [
          "Tao",
          "Teritoryo",
          "Soberanya",
          "Pamahalaan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of sovereignty is the power to govern and enforce laws within the territory?\">Anong uri ng soberanya ang kapangyarihang mamahala at magpatupad ng batas sa loob ng teritoryo ng bansa?</span>",
        "options": [
          "Soberanyang Panlabas",
          "Soberanyang Panloob",
          "Soberanyang Pambansa",
          "Soberanyang Militar"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of sovereignty refers to freedom from foreign control and interference?\">Anong uri ng soberanya ang tumutukoy sa kalayaan ng bansa mula sa kontrol at pakikialam ng ibang bansa?</span>",
        "options": [
          "Soberanyang Panloob",
          "Soberanyang Panlabas",
          "Soberanyang Teritoryal",
          "Soberanyang Sibil"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Where in the 1987 Constitution is the national territory of the Philippines defined?\">Saan sa Saligang Batas ng 1987 nakasaad ang kahulugan at sakop ng pambansang teritoryo ng Pilipinas?</span>",
        "options": [
          "Artikulo I",
          "Artikulo II",
          "Artikulo III",
          "Artikulo IV"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What doctrine treats the Philippine archipelago as a single unit with the waters in between as internal waters?\">Anong doktrina ang tumuturing sa kapuluan ng Pilipinas bilang isang buong teritoryo kung saan ang tubig sa pagitan ay bahagi ng panloob na tubig?</span>",
        "options": [
          "Exclusive Economic Zone",
          "Doktrinang Arkipelago",
          "UNCLOS",
          "Constitutional Amendment"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"How far does the territorial sea of a country extend from its baselines?\">Gaano kalawak ang dagat teritoryal ng bansa kung saan may ganap itong kapangyarihan mula sa baseline?</span>",
        "options": [
          "12 nautical miles",
          "24 nautical miles",
          "100 nautical miles",
          "200 nautical miles"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"How far does the Exclusive Economic Zone (EEZ) extend from the baseline?\">Gaano kalawak ang Exclusive Economic Zone (EEZ) ng bansa batay sa UNCLOS?</span>",
        "options": [
          "12 nautical miles",
          "50 nautical miles",
          "200 nautical miles",
          "350 nautical miles"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is NOT part of the territory of the Philippines?\">Alin sa mga sumusunod ang HINDI bahagi ng teritoryo ng Pilipinas?</span>",
        "options": [
          "Kalupaan",
          "Katubigan",
          "Himpapawid",
          "Karagatan sa tapat ng Amerika"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which country is located north of the Philippines as a vicinal neighbor?\">Anong bansa ang matatagpuan sa hilaga ng Pilipinas bilang bisinal na kapitbahay?</span>",
        "options": [
          "Malaysia",
          "Taiwan",
          "Indonesia",
          "Vietnam"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which body of water is located east of the Philippines?\">Anong anyong tubig ang matatagpuan sa silangan ng Pilipinas?</span>",
        "options": [
          "West Philippine Sea",
          "Pacific Ocean",
          "Celebes Sea",
          "Sulu Sea"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is a symbol of Philippine sovereignty?\">Alin sa mga sumusunod ang simbolo ng soberanya ng Pilipinas?</span>",
        "options": [
          "Dollar bills",
          "Pambansang Watawat",
          "Foreign passport",
          "Imported cars"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Why is Hong Kong not considered a separate country?\">Bakit hindi itinuturing na hiwalay na bansa ang Hong Kong?</span>",
        "options": [
          "Dahil wala silang tao",
          "Dahil wala silang teritoryo",
          "Dahil wala silang pamahalaan",
          "Dahil wala silang ganap na soberanya mula sa Tsina"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"The supreme law of the land which guides the government is the:\">Ang pinakamataas na batas ng bansa na nagbibigay-gabay sa pamahalaan ay ang:</span>",
        "options": [
          "Trapiko Act",
          "Konstitusyon o Saligang Batas",
          "Municipal Ordinansa",
          "Barangay Memo"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What government branch is responsible for creating and writing the laws of the country?\">Anong sanga ng pamahalaan ang may tungkuling gumawa at sumulat ng mga batas ng bansa?</span>",
        "options": [
          "Ehekutibo",
          "Lehislatibo (Kongreso)",
          "Hudisyal",
          "Militar"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"A country can exist even if it lacks a territory.\">Maaaring maging bansa ang isang lugar kahit wala itong teritoryo.</span>",
        "answer": false
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The Philippines is an archipelagic country.\">Ang Pilipinas ay isang bansang arkipelago.</span>",
        "answer": true
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"Internal sovereignty means foreign countries can dictate our laws.\">Ang soberanyang panloob ay nangangahulugang maaaring magdikta ng batas ang ibang bansa sa atin.</span>",
        "answer": false
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the tagalog word for Sovereignty?\">Ano ang salitang Filipino para sa 'Sovereignty'?</span>",
        "answer": "soberanya"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"The current constitution of the Philippines was ratified in what year?\">Anong taon naratipika ang kasalukuyang Saligang Batas ng Pilipinas?</span>",
        "answer": "1987"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What ocean is located on the east of the Philippines?\">Anong malaking karagatan ang nasa silangan ng Pilipinas?</span>",
        "answer": "pacific ocean"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In: 'Ang isang barkong pandigma ng ibang bansa ay pumasok sa dagat teritoryal ng Pilipinas nang walang pahintulot.', what element of the country is violated?\">Sa sitwasyon: 'Ang isang barkong pandigma ng ibang bansa ay pumasok sa dagat teritoryal ng Pilipinas nang walang pahintulot.', aling elemento ng bansa ang nilabag?</span>",
        "options": [
          "Tao",
          "Teritoryo at Soberanya",
          "Pamahalaan lamang",
          "Wala sa mga ito"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What international court ruled in favor of the Philippines regarding maritime claims in the West Philippine Sea in 2016?\">Anong pandaigdigang korte ang nagpasya pabor sa Pilipinas hinggil sa maritime claims sa West Philippine Sea noong 2016?</span>",
        "options": [
          "Supreme Court",
          "Arbitral Tribunal at The Hague",
          "United Nations Security Council",
          "International Monetary Fund"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Explain the difference between Insular and Bisinal relative locations of the Philippines:\">Ano ang pagkakaiba ng relatibong lokasyong Insular at Bisinal ng Pilipinas?</span>",
        "options": [
          "Ang Insular ay batay sa mga katabing anyong lupa; ang Bisinal ay batay sa anyong tubig.",
          "Ang Insular ay batay sa mga nakapaligid na anyong tubig; ang Bisinal ay batay sa mga kalapit na anyong lupa.",
          "Ang Insular ay gamit ang coordinates; ang Bisinal ay gamit ang compass.",
          "Walang pagkakaiba ang dalawa."
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Why does the democratic government of the Philippines split its power into three branches?\">Bakit hinahati ng pamahalaan ng Pilipinas ang kapangyarihan nito sa tatlong sanga?</span>",
        "options": [
          "Upang mapabilis ang paniningil ng buwis.",
          "Upang maiwasan ang pang-aabuso sa kapangyarihan sa pamamagitan ng 'checks and balances'.",
          "Upang magkaroon ng mas maraming pinuno sa telebisyon.",
          "Upang hindi na kailanganin ang Saligang Batas."
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following bodies of water forms the western boundary (insular location) of the Philippines?\">Aling anyong tubig ang bumubuo sa kanlurang hangganan (lokasyong insular) ng Pilipinas?</span>",
        "options": [
          "Pacific Ocean",
          "Celebes Sea",
          "West Philippine Sea",
          "Bashi Channel"
        ],
        "answer": 2
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Poster ng Apat na Elemento ng Bansa",
      "desc": "Kumuha ng isang blankong papel. Gumawa ng isang makulay na poster o infographic na nagpapakita ng apat na elemento ng isang bansa: Tao, Teritoryo, Pamahalaan, at Soberanya. Gumuhit ng simbolo para sa bawat elemento na kumakatawan sa Pilipinas (halimbawa, pamilyang Pilipino para sa Tao, mapa ng kapuluan para sa Teritoryo, gusali ng pamahalaan para sa Pamahalaan, at pambansang watawat para sa Soberanya). Sumulat ng maikling paliwanag sa ilalim ng bawat guhit. Ipakita ito sa iyong magulang o guro. <span class='fil-sentence' data-translation='Create a poster showing the four elements of a country. Draw symbols representing the Philippines for each (Filipino family, map of archipelago, government building, national flag). Write a brief explanation under each. Present to a parent/teacher.'></span>",
      "labels": [
        "Tumpak na nailarawan ang apat na elemento (Tao, Teritoryo, Pamahalaan, Soberanya)",
        "Kalinawan at pagiging malikhain ng mga iginuhit na simbolo para sa Pilipinas",
        "Wastong paliwanag kung bakit itinuturing na isang ganap na bansa ang Pilipinas"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Ang Apat na Elemento ng Bansa</h3>\n                  <p class=\"ws-instruction\">Isulat ang pangalan ng elemento ng bansa (Tao, Teritoryo, Pamahalaan, Soberanya) na inilalarawan. <span class=\"fil-sentence\" data-translation=\"Write the element of country described.\"></span></p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. Ang sukdulang kapangyarihang mamahala nang malaya: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. Ang mga mamamayang naninirahan sa loob ng bansa: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. Ang institusyong nagpapatupad ng batas: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. Ang lawak ng lupain, katubigan, at himpapawid: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Doktrinang Arkipelago</h3>\n                  <p class=\"ws-instruction\">Gumuhit ng simpleng mapa ng Pilipinas na nagpapakita ng 200-mile Exclusive Economic Zone (EEZ) at ipaliwanag ang kahalagahan nito sa mga mangingisdang Pilipino. <span class=\"fil-sentence\" data-translation=\"Draw a simple map showing EEZ and explain its importance.\"></span></p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"drawing-box\" style=\"height: 220px;\">\n                        <span>Iguhit ang mapa at EEZ</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <p>Kahalagahan ng EEZ:</p>\n                      <div class=\"writing-line\" style=\"margin-top: 15px; width: 100%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Elemento ng Estado</h3>\n                  <p class=\"ws-instruction\">Isulat sa linya ang angkop na elemento ng Estado (Tao, Teritoryo, Pamahalaan, Soberanya).</p>\n                  \n                  <div style=\"font-size: 16px; line-height: 1.8; margin-top: 25px;\">\n                    <div style=\"margin-bottom: 25px;\">1. Ang kapangyarihan ng bansa na pamahalaan ang sarili nito: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"></div></div>\n                    <div style=\"margin-bottom: 25px;\">2. Ang grupo ng mga mamamayan na naninirahan sa bansa: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"></div></div>\n                    <div style=\"margin-bottom: 25px;\">3. Ang lupain, katubigan, at himpapawid na sakop ng bansa: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block; margin-left: 10px;\"></div></div>\n                  </div>\n                </div>\n                "]
    }
  },
  "gmrc": {
    "color": "#eab308",
    "icon": "🧘‍♂️",
    "title": "GMRC",
    "subtitle": "Week 1: Karapatan at Tungkulin ng Bata [Advanced]",
    "slides": [
      {
        "title": "Introduction to Children's Rights",
        "text": "Every child has inherent rights, which are basic needs and freedoms protected by law to help them grow up safe, healthy, and happy. The United Nations Convention on the Rights of the Child protects these worldwide.",
        "examples": [
          {
            "title": "What are Rights?",
            "content": "Rights are not privileges or rewards; they are essential guarantees that every child deserves simply because they are human."
          },
          {
            "title": "Convention",
            "content": "The UN Convention on the Rights of the Child is a treaty signed by countries promising to protect children's lives and health."
          }
        ]
      },
      {
        "title": "The Right to Life and Identity",
        "text": "A child has the right to be born, to have a name, and to belong to a nationality from birth. This establishes their legal identity in the world.",
        "examples": [
          {
            "title": "Birth Certificate",
            "content": "When a baby is born, parents register their name at the civil registry, creating an official birth certificate."
          },
          {
            "title": "Nationality",
            "content": "A child born to Filipino parents has the right to be recognized as a citizen of the Philippines."
          }
        ]
      },
      {
        "title": "The Right to a Family and Care",
        "text": "Every child has the right to live with a family who loves, protects, and cares for them. If a child cannot live with their family, they have the right to be cared for by special guardians.",
        "examples": [
          {
            "title": "Family Environment",
            "content": "Living in a home with parents who provide food, clothing, and love supports a child's emotional growth."
          },
          {
            "title": "Alternative Care",
            "content": "Orphaned children are placed in foster families or shelters supported by the government to ensure they are not neglected."
          }
        ]
      },
      {
        "title": "The Right to Basic Health and Nutrition",
        "text": "Children have the right to clean drinking water, nutritious food, medical care, and a clean environment to prevent illnesses.",
        "examples": [
          {
            "title": "Medical Checkups",
            "content": "Pampublikong health centers provide free vaccinations and checkups for children under the government's healthcare program."
          },
          {
            "title": "Nutritious Meals",
            "content": "Eating a balanced diet of fruits, vegetables, and proteins at home is an exercise of your right to health."
          }
        ]
      },
      {
        "title": "The Right to Quality Education",
        "text": "Every child has the right to go to school to develop their talents, skills, and mental capabilities. Primary education should be free and accessible to all.",
        "examples": [
          {
            "title": "Free Schooling",
            "content": "Going to a public school without paying tuition fees is a direct exercise of a child's right to education."
          },
          {
            "title": "School Supplies",
            "content": "Receiving textbooks, classrooms, and guidance from qualified teachers are parts of quality education."
          }
        ]
      },
      {
        "title": "The Right to Play and Recreation",
        "text": "Play is essential for a child's physical and mental development. Children have the right to rest, play, and participate in cultural and artistic activities.",
        "examples": [
          {
            "title": "Playgrounds",
            "content": "Playing with friends at the park, drawing, or playing sports are ways children exercise this right."
          },
          {
            "title": "Balanced Schedule",
            "content": "A child should not spend all their time working or studying; they need balanced rest and play time."
          }
        ]
      },
      {
        "title": "The Right to Protection from Harm",
        "text": "Children have the right to be protected from abuse, violence, neglect, bullying, and dangerous work that could harm their physical or mental health.",
        "examples": [
          {
            "title": "Bullying Prevention",
            "content": "Schools have strict anti-bullying policies to ensure that classrooms are safe spaces for learning."
          },
          {
            "title": "Child Labor Laws",
            "content": "It is illegal to force children to work in factories or mines instead of going to school."
          }
        ]
      },
      {
        "title": "The Right to Express Your Views",
        "text": "Children have the right to share their opinions and have them listened to by adults in matters that affect their lives.",
        "examples": [
          {
            "title": "Speaking Up Respectfully",
            "content": "Sharing your thoughts with parents about what school club to join is an exercise of this right."
          },
          {
            "title": "Student Councils",
            "content": "Participating in classroom discussions and voting for class officers allow kids to express their views."
          }
        ]
      },
      {
        "title": "What is a Duty (Tungkulin)?",
        "text": "A duty or responsibility is an action that you are expected or obligated to perform. For every right you receive, there is a corresponding duty you must fulfill.",
        "examples": [
          {
            "title": "The Balance",
            "content": "Rights and duties are like two sides of a coin. You cannot enjoy a right without respecting the duties that go with it."
          },
          {
            "title": "Example",
            "content": "You have the right to a clean bedroom (Right), and your corresponding duty is to help clean and organize it (Duty)."
          }
        ]
      },
      {
        "title": "Duty matching: Right to Education",
        "text": "Because you have the right to receive an education, you have the corresponding duty to study hard and respect your teachers and peers.",
        "examples": [
          {
            "title": "Doing Homework",
            "content": "Completing your homework on time and listening in class is fulfilling your duty to study."
          },
          {
            "title": "Classroom Respect",
            "content": "Not interrupting the teacher and cooperating in group activities are parts of your duty in school."
          }
        ]
      },
      {
        "title": "Duty matching: Right to a Clean Environment",
        "text": "Since you have the right to live in a clean and safe environment, you have the duty to dispose of trash properly and help keep surroundings clean.",
        "examples": [
          {
            "title": "Segregation",
            "content": "Sorting plastic, paper, and food waste into correct bins at home and school is a practical duty."
          },
          {
            "title": "Saving Water",
            "content": "Turning off the faucet while brushing your teeth is your duty to protect natural resources."
          }
        ]
      },
      {
        "title": "Duty matching: Right to Health",
        "text": "Because you have the right to a healthy body, you have the duty to take care of yourself by eating healthy food and practicing hygiene.",
        "examples": [
          {
            "title": "Healthy Habits",
            "content": "Choosing fruits over junk food and sleeping 8-10 hours a night are ways to fulfill your duty to your health."
          },
          {
            "title": "Handwashing",
            "content": "Washing hands before meals prevents the spread of germs, protecting yourself and others."
          }
        ]
      },
      {
        "title": "Duty matching: Right to Express Views",
        "text": "Since you have the right to speak and express your thoughts, you have the duty to listen to the opinions of others and speak respectfully.",
        "examples": [
          {
            "title": "Active Listening",
            "content": "When a classmate shares an idea you disagree with, listening quietly instead of laughing is your duty."
          },
          {
            "title": "Polite Language",
            "content": "Using kind words to explain your point of view shows respect and responsibility."
          }
        ]
      },
      {
        "title": "Duty matching: Right to Play",
        "text": "Since you have the right to play and use shared spaces like parks, you have the duty to play safely and share toys with others.",
        "examples": [
          {
            "title": "Sharing Toys",
            "content": "Allowing other kids to take turns on the playground swings is fulfilling your duty to share."
          },
          {
            "title": "Game Rules",
            "content": "Following the rules of a game and showing good sportsmanship are duties during play."
          }
        ]
      },
      {
        "title": "Respecting the Rights of Other Children",
        "text": "Your rights end where the rights of another child begin. Fulfilling your duties means never violating the rights of others.",
        "examples": [
          {
            "title": "No Bullying",
            "content": "You have the right to speak, but you do not have the right to say hurtful words that bully a classmate."
          },
          {
            "title": "No Stealing",
            "content": "You have the right to own school supplies, but you have the duty to respect others' property by not taking their pencils without asking."
          }
        ]
      },
      {
        "title": "The Role of Parents in Protecting Rights",
        "text": "Parents have the primary responsibility to guide, feed, and protect their children, ensuring their rights are met at home.",
        "examples": [
          {
            "title": "Providing Nutrition",
            "content": "Parents prepare balanced meals to support the child's right to health and growth."
          },
          {
            "title": "Guidance and Discipline",
            "content": "Parents teach children right from wrong, helping them understand their duties as they grow."
          }
        ]
      },
      {
        "title": "The Role of the Government in Protecting Rights",
        "text": "The government creates laws, builds public hospitals, and funds free public schools to protect and guarantee children's rights on a national scale.",
        "examples": [
          {
            "title": "Child Protection Agencies",
            "content": "Agencies like the DSWD protect children who face neglect or abuse, providing them with safe shelters."
          },
          {
            "title": "Public Infrastructure",
            "content": "Building public parks and sports centers supports the child's right to play and recreation."
          }
        ]
      },
      {
        "title": "The Role of Teachers in Protecting Rights",
        "text": "Teachers protect children's rights inside the school by providing a safe, encouraging, and informative classroom environment.",
        "examples": [
          {
            "title": "Fair Grading",
            "content": "Evaluating students based on their actual performance is an exercise of fairness and the right to education."
          },
          {
            "title": "Classroom Safety",
            "content": "Stopping any teasing or physical fights immediately protects the students' right to safety."
          }
        ]
      },
      {
        "title": "Understanding the Child's Duty to Parents",
        "text": "At home, children have the duty to show respect, obedience, and helpfulness to their parents and elders.",
        "examples": [
          {
            "title": "Polite Greetings",
            "content": "Saying 'Po' and 'Opo' and performing the 'Mano' gesture to show respect to grandparents."
          },
          {
            "title": "Helping in Chores",
            "content": "Volunteering to set the table, wash dishes, or sweep the floor shows helpfulness and gratitude."
          }
        ]
      },
      {
        "title": "Understanding the Child's Duty to the Community",
        "text": "As young citizens, children have the duty to follow community rules, show respect to neighbors, and care for public property.",
        "examples": [
          {
            "title": "Public Property Care",
            "content": "Not writing graffiti on public walls or destroying park benches protects shared assets."
          },
          {
            "title": "Crossing Streets Safely",
            "content": "Using pedestrian crossings and following traffic lights is your duty to keep roads safe."
          }
        ]
      },
      {
        "title": "What Happens When Rights Are Violated?",
        "text": "If a child's rights are violated (such as being abused, neglected, or kept out of school), adults must step in to report the issue to authorities.",
        "examples": [
          {
            "title": "DSWD Hotline",
            "content": "Adults can call the child protection hotline to report cases of child abuse or labor."
          },
          {
            "title": "School Counselors",
            "content": "If a student feels unsafe at home or school, talking to a school counselor is a safe first step."
          }
        ]
      },
      {
        "title": "Rights and Duties in the Classroom",
        "text": "A harmonious classroom is built when every student enjoys their rights while performing their daily duties.",
        "examples": [
          {
            "title": "Right in Class",
            "content": "Right to ask questions when you don't understand the lesson."
          },
          {
            "title": "Duty in Class",
            "content": "Duty to wait for your turn, raise your hand, and not shout out answers."
          }
        ]
      },
      {
        "title": "Developing Empathy for Others",
        "text": "Understanding rights helps us develop empathy—the ability to put ourselves in another person's shoes and care for their feelings.",
        "examples": [
          {
            "title": "Helping a Peer",
            "content": "If a new classmate doesn't know where the library is, guiding them exercises empathy and supports their right to adapt."
          },
          {
            "title": "Inclusive Play",
            "content": "Inviting a quiet student who is sitting alone to join your game of tag is an empathetic action."
          }
        ]
      },
      {
        "title": "UNICEF: The Global Guardian",
        "text": "UNICEF is the United Nations agency dedicated to defending children's rights and improving their lives in over 190 countries.",
        "examples": [
          {
            "title": "Emergency Aid",
            "content": "UNICEF delivers clean water, food, and vaccines to children in war zones or areas hit by natural disasters."
          },
          {
            "title": "Advocacy",
            "content": "UNICEF works with governments to create better laws protecting children from exploitation."
          }
        ]
      },
      {
        "title": "Review of Rights and Duties",
        "text": "Let's summarize: Children's rights include life, identity, family care, health, education, play, and protection. For every right, there is a duty. Studying is the duty for the right to education; protecting nature is the duty for a clean environment. Fulfilling your duties keeps the community harmonious and safe.",
        "examples": [
          {
            "title": "Review Task",
            "content": "List three rights you enjoyed today and match them to three duties you performed!"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "What do we call the basic needs and freedoms protected by law that every child deserves?",
        "options": [
          "Privileges",
          "Rewards",
          "Rights",
          "Tasks"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which international treaty is signed by countries to protect children's rights globally?",
        "options": [
          "United Nations charter",
          "Convention on the Rights of the Child",
          "Geneva Convention",
          "Declaration of Independence"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Having a name and belonging to a nationality from birth belongs to the right to:",
        "options": [
          "Recreation",
          "Identity",
          "Education",
          "Protection"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Going to a pampublikong school without paying tuition is an exercise of your right to:",
        "options": [
          "Play",
          "Identity",
          "Quality Education",
          "Protection"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Playing with friends at the local park or drawing are ways to exercise your right to:",
        "options": [
          "Education",
          "Health",
          "Rest and Play",
          "Identity"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the term for a responsibility or action that you are expected or obligated to perform?",
        "options": [
          "Right",
          "Privilege",
          "Duty (Tungkulin)",
          "Benefit"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is your corresponding duty for having the right to receive an education?",
        "options": [
          "To play all day",
          "To study hard and respect teachers",
          "To watch television",
          "To ignore classroom rules"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is your corresponding duty for having the right to live in a clean and safe environment?",
        "options": [
          "To throw trash anywhere",
          "To help clean and dispose of waste properly",
          "To leave the faucet running",
          "To draw on walls"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is your corresponding duty for having the right to express your views and opinions?",
        "options": [
          "To shout at others",
          "To listen to others and speak respectfully",
          "To interrupt when others speak",
          "To ignore other opinions"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is a duty to your parents at home?",
        "options": [
          "Demanding expensive toys",
          "Helping in household chores and showing respect",
          "Refusing to study",
          "Sleeping late every night"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is a duty to your community?",
        "options": [
          "Littering in the park",
          "Respecting neighbors and protecting public property",
          "Scribbling on road signs",
          "Shouting late at night"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the United Nations agency dedicated to protecting children's lives and rights globally?",
        "options": [
          "WHO",
          "UNICEF",
          "UNESCO",
          "DSWD"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If you witness a classmate being bullied at school, what is your duty?",
        "options": [
          "Join in the teasing",
          "Ignore it and walk away",
          "Report it to a teacher or trusted adult",
          "Record it on a phone and laugh"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which right is violated when a child is forced to work all day in a factory instead of attending school?",
        "options": [
          "Right to education and protection from labor",
          "Right to identity",
          "Right to express views",
          "Right to a name"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "Eating fruits and vegetables and practicing hand hygiene at home supports your right to:",
        "options": [
          "Recreation",
          "Identity",
          "Basic Health and Nutrition",
          "Free Speech"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the highest law of a country that guarantees your rights and outlines government duties?",
        "options": [
          "School handbook",
          "Constitution / Saligang Batas",
          "Traffic code",
          "Library rules"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Why do rights and duties always go together?",
        "options": [
          "Because they are the same thing",
          "Because performing duties respects and protects the rights of everyone",
          "To make school harder",
          "They do not go together"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Showing respect to grandparents by doing the 'Mano' gesture is a/an:",
        "options": [
          "Right",
          "Duty",
          "Option",
          "Favor"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is an example of an ethical duty in science?",
        "options": [
          "Changing observations to fit a theory",
          "Recording data honestly and safely",
          "Using unverified materials",
          "Ignoring safety rules"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "Children have only rights but no duties.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Your right to speak means you can bully others.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "UNICEF stands for the United Nations Children's Fund.",
        "answer": true
      },
      {
        "type": "blank",
        "q": "What is the corresponding duty for your right to play? To play ______ and share toys.",
        "answer": "safely"
      },
      {
        "type": "blank",
        "q": "What document registers a child's name and nationality at birth?",
        "answer": "birth certificate"
      },
      {
        "type": "blank",
        "q": "A supreme power that allows a nation to govern itself is called ______.",
        "answer": "sovereignty"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "In: 'A ten-year-old child works in a fireworks factory to earn money, causing them to miss school and breathe toxic smoke.' Which rights are violated?",
        "options": [
          "Right to identity and name",
          "Right to education, health, and protection from dangerous labor",
          "Right to expression and play only",
          "No rights are violated"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Why is it important to balance your rights with your duties in a community?",
        "options": [
          "To make the government rich",
          "Because a community functions peacefully only when everyone respects each other's rights through their duties",
          "To get rewards from teachers",
          "To avoid going to school"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A student raises their hand and waits patiently for their turn to speak in a debate. Which duty is being exercised?",
        "options": [
          "Duty to study",
          "Duty to show respect to others' right to express their views",
          "Duty to clean the classroom",
          "Duty to stay safe"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following represents a child's duty to the environment?",
        "options": [
          "Using plastic bags once and throwing them away",
          "Segregating waste at home and turning off running taps",
          "Buying imported goods",
          "Planting non-native species randomly"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the primary objective of the UN Convention on the Rights of the Child?",
        "options": [
          "To force children to study longer",
          "To outline government laws on trade",
          "To establish universal standards for the protection, development, and survival of all children",
          "To replace family guidance"
        ],
        "answer": 2
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Rights and Duties Balance Sheet",
      "desc": "Take a sheet of paper and divide it into two columns: 'My Rights' and 'My Duties'. In the 'My Rights' column, list five fundamental rights you enjoy in your daily life (e.g. right to study, right to play). In the 'My Duties' column, write down the corresponding responsibility you must perform for each of those rights (e.g. study hard, share toys and play safely). Draw a small icon next to each. Present this sheet to your parent or teacher.",
      "labels": [
        "Listed five valid rights of a child",
        "Correctly matched corresponding duties for each right",
        "Clear layout with icons and neat explanation"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Rights and Duties Matching</h3>\n                  <p class=\"ws-instruction\">For each child right, write the corresponding duty/responsibility you must perform.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Child's Right</th>\n                        <th>Corresponding Duty (Responsibility)</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Right to receive quality education</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>Right to live in a clean environment</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>Right to express views and opinions</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>Right to play and recreation</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Case Study</h3>\n                  <p class=\"ws-instruction\">Read the scenario and answer the questions using your stylus: \"Matteo enjoys his right to play by playing tag with friends, but he refuses to share the playground swing and pushes a classmate.\"</p>\n                  \n                  <div style=\"margin-top: 10px;\">\n                    <div style=\"margin-bottom: 20px;\">1. What duty did Matteo fail to perform? <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. Whose right did Matteo violate? <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div></div>\n                    <div>3. Write a advice message for Matteo: <div class=\"writing-line\" style=\"margin-top: 15px; width: 90%;\"></div></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Rights and Duties</h3>\n                  <p class=\"ws-instruction\">Draw lines to connect the child's Right to its corresponding Responsibility or Duty.</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 15px;\">\n                    <div class=\"ws-col-half\" style=\"font-size: 14px; line-height: 2.2;\">\n                      <div>1. Right to study in a school</div>\n                      <div>2. Right to live in a clean home</div>\n                      <div>3. Right to play and relax</div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"font-size: 14px; line-height: 2.2; text-align: right; padding-right: 20px;\">\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Duty to keep your bedroom clean</div>\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Duty to pack away toys after playing</div>\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Duty to listen to teacher and study hard</div>\n                    </div>\n                  </div>\n                </div>\n                "]
    }
  }
};

window.WEEK1_DATA.reading = {
  "monday": {
    "type": "Short Story",
    "title": "The Little Red Hen",
    "slides": [
      {
        "title": "Story: The Little Red Hen - Part 1",
        "text": "Once upon a time, a hardworking and friendly little red hen lived on a sunny farm alongside three very lazy companions: a dog, a cat, and a duck. The lazy dog spent all his hours lying on the soft, warm wooden porch, sleeping in the hot sun and refusing to chase any sticks or play with the children. The sleepy cat loved to curl up in a cozy, cushioned chair in the farmer's kitchen, purring loudly and dreaming of drinking fresh milk all day. The noisy duck stayed in the cool pond all day, swimming in circles, quacking loudly, and playing in the mud without a care in the world. One bright morning, as the little red hen was busy scratching in the dark dirt looking for worms to feed her babies, she found some golden grains of wheat. She realized they could grow food. 'Who will help me plant this wheat?' she asked. 'Not I,' barked the lazy dog from the porch. 'Not I,' purred the sleepy cat from the chair. 'Not I,' quacked the noisy duck from the pond. 'Then I will plant it all by myself,' said the hen. And she did, working hard under the morning sun."
      },
      {
        "title": "Story: The Little Red Hen - Part 2",
        "text": "The little red hen worked hard to plant the grains of wheat in the soil, digging small holes and watering them every morning. The warm sun shone down, and soon the green wheat grew tall, strong, and golden. 'Who will help me cut this tall wheat?' she asked the others. 'Not I,' barked the lazy dog from the porch. 'Not I,' purred the sleepy cat from the chair. 'Not I,' quacked the noisy duck from the pond. So the little red hen harvested the wheat all by herself, cutting each stem carefully. Next, she needed to grind the wheat into flour. 'Who will help me carry this heavy sack of wheat to the mill?' she asked. 'Not I,' said the dog. 'Not I,' said the cat. 'Not I,' said the duck. So she carried the heavy sack to the mill herself, watched the miller grind it into fresh white flour, and walked all the way back to the farm alone, carrying the heavy flour bag without complaining once."
      },
      {
        "title": "Story: The Little Red Hen - Part 3",
        "text": "When she finally returned to the farmyard, she asked, 'Who will help me bake this white flour into bread?' 'Not I,' said the dog. 'Not I,' said the cat. 'Not I,' said the duck. So the little red hen mixed the dough and baked a warm, golden loaf of fresh bread. The delicious smell spread all over the farmyard. The lazy dog woke up and ran to the kitchen. The sleepy cat jumped down from the chair. The noisy duck waddled in from the pond. 'Who will help me eat this bread?' asked the hen. 'I will!' barked the dog. 'I will!' purred the cat. 'I will!' quacked the duck. 'No, you won't,' said the hen. 'None of you helped me plant the seed, cut the wheat, carry it to the mill, or bake the bread. I did all the work myself. Now, my little chicks and I will eat it ourselves.' And they did, eating every single crumb while the other animals watched hungrily, regretting their laziness."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n\u2022 Grains - Small, hard seeds of food plants like wheat.\n\u2022 Harvested - Gathered mature crops.\n\u2022 Lazy - Unwilling to work or use energy.\n\nPhonics Focus: Practice the ending '-ed' sound in 'harvested' (id) and 'lived' (d)."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Which animals lived with the little red hen?\n2. What did the other animals say when asked to help plant the wheat?\n3. Why did the hen decide not to share her bread at the end?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Hard work and cooperation.\n\nThose who do not participate in the work should not expect to share in the rewards. Cooperation makes tasks easier and builds a kind community.\n\nDiscuss: What is a chore you did recently to help your family?"
      }
    ]
  },
  "tuesday": {
    "type": "Poem",
    "title": "My Shadow",
    "slides": [
      {
        "title": "Poem: My Shadow - Part 1",
        "text": "I have a little shadow that goes in and out with me,\nAnd what can be the use of him is more than I can see.\nHe is very, very like me from the heels up to the head;\nAnd I see him jump before me, when I jump into my bed.\n\nThis curious dark shadow copies every single move I make. If I wave my left hand, he waves his hand on the ground. If I tilt my head to the side, he tilts his head too. Sometimes he seems to mimic my walks and runs. When the morning sun shines brightly behind me, he stretches long and wide across the green grass. He is my silent companion, walking beside me all day. He never speaks a single word, but he is always there, following my footsteps wherever I decide to go. He makes me feel like I am never alone, playing with me in the yard and running under the tall trees. This shadow appears because my body blocks the light from the sun or a lamp. Light travels in straight lines, and when it hits an object it cannot pass through, it leaves a dark area behind it. I love to watch how my shadow stretches across the wooden floor and climbs up the wall as I move around my room."
      },
      {
        "title": "Poem: My Shadow - Part 2",
        "text": "The funniest thing about him is the way he likes to grow\u2014\nNot at all like proper children, which is always very slow;\nFor he sometimes shoots up taller like an india-rubber ball,\nAnd he sometimes gets so little that there's none of him at all.\n\nI watch him in the afternoon as the sun sinks low in the west. He grows taller and taller, like a giant reaching for the tree branches. It is amazing how fast he changes his size! Normal children take many years to grow just a few inches, but my shadow can grow ten feet in a split second! Sometimes, when the sun is directly above my head at noon, he disappears completely, shrinking under my feet as if he is playing hide-and-seek. He is a magical playmate indeed, changing his shape and height constantly throughout the day to match the sun's position. Shadows change shape depending on where the light is coming from. When the light source is low, like the sun at sunrise or sunset, the shadow becomes very long. When the light is directly above, like the sun at noon, the shadow gets very short and small. This is a basic rule of science that explains why my shadow grows and shrinks."
      },
      {
        "title": "Poem: My Shadow - Part 3",
        "text": "One morning, very early, before the sun was up,\nI rose and found the shining dew on every buttercup;\nBut my lazy little shadow, like an arrant sleepy-head,\nHad stayed at home behind me and was fast asleep in bed.\n\nI walked quietly through the wet grass, expecting my shadow to run along beside me as usual. But when I looked down, the ground was empty! There was no shadow to be seen anywhere. He was too lazy to wake up in the cool dawn. He stayed warm and cozy in my room, resting on the floor. I laughed to think that my shadow was a sleepy-head, missing the beautiful sunrise and the sparkling dew. This showed me that shadows need light to exist; without the sun, they must remain asleep in the darkness, waiting for the light to return and bring them back to life. In the complete darkness of the night, there is no light to block, so no shadows can be created. That is why my shadow was gone when I woke up before the sun. He needed the bright light to return so he could come out and play with me again in the garden, running beside me under the warm sun."
      },
      {
        "title": "Rhyme & Word Play",
        "text": "Phonics Focus: Rhyming Pairs\nIdentify these rhyming words from the poem:\n\u2022 me / see\n\u2022 head / bed\n\u2022 grow / slow\n\u2022 ball / all\n\nRhymes help us remember poems and feel their musical rhythm!"
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Where does the shadow jump when the child gets into bed?\n2. How does the shadow's growth differ from a normal child's growth?\n3. What does the shadow look like according to the poem?"
      },
      {
        "title": "Moral Focus: Wonder & Science",
        "text": "Observing our environment with curiosity helps us learn. Shadows are formed when light is blocked by an object. By watching how they change, we explore physics!\n\nDiscuss: When is a shadow longest: at noon or in the late afternoon? Why?"
      }
    ]
  },
  "wednesday": {
    "type": "Tongue Twisters",
    "title": "Phonics Fun with F and P",
    "slides": [
      {
        "title": "Tongue Twister Fun - Part 1",
        "text": "Welcome to our speech gym! Let's start with a funny story about Peter and Freddy. Peter the Piper was a cheerful boy who loved pickled peppers. He decided to pack a picnic for his friends. Peter picked a peck of pickled peppers. A peck is a large basket full of fresh peppers. Peter put the peppers in a purple bag. His dog, Polly, was a pink puppy. Polly loved to play in the green park. Polly's pink puppy plays in the park all day, chasing paper airplanes and popping bubbles. Let's practice saying this fast: 'Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. Polly's pink puppy plays in the park.' Slow down if your tongue twists, then try again! Repeat it three times to get better. This helps you speak clearly and confidently in front of others. Peter loved to share his delicious pickled peppers with all his animal friends on the farm, making sure they had enough food. Polly the puppy would run in circles, barking with pure joy as the autumn leaves fell. She liked to catch the falling leaves in her mouth and roll in the soft green grass."
      },
      {
        "title": "Tongue Twister Fun - Part 2",
        "text": "Next, let's meet Freddy the Frog. Freddy was a friendly frog who lived in a fresh, cool pond. Freddy and his three frog brothers loved to swim. Four fine fresh fish fly fast in the clear stream. The fish that fly fast are four fine fresh fish. Freddy watched the fish and laughed. 'Friendly frogs float in fresh water,' said Freddy. Indeed, friendly frogs float in the fresh flow. The water was cool and clean. Let's try saying this together: 'Four fine fresh fish fly fast. The fish that fly fast are four fine fresh fish. Friendly frogs float in fresh water. Float, frogs, float in the fresh flow.' Keep your lips open slightly to make a clean /f/ sound, letting the air flow smoothly and clearly. It is a wonderful exercise for your voice. Freddy the frog also enjoyed the company of the fish, watching them swim gracefully through the clear, cool pond water. He would sit on a large green lily pad and practice his deep croaks, feeling the warm sunshine on his smooth green skin as the gentle breeze blew through the trees."
      },
      {
        "title": "Tongue Twister Fun - Part 3",
        "text": "Now, let's combine the /p/ and /f/ sounds in a giant speech challenge! Peter Piper and Freddy the Frog met at the park for their big picnic. Polly the puppy ran around them. 'Pass the pink peppers, please,' quacked the duck. 'No, fish are finer for a frog,' croaked Freddy. They ate, played, and laughed. Practicing tongue twisters is like stretching your speech muscles. It trains your brain to switch between different lip and tongue positions quickly. Let's try our final super twister: 'Peter Piper picked a peck of pickled peppers, while four friendly frogs floated in fresh pools.' Say it three times: slowly first, then medium, then super fast! You will be a master of clear speech and pronunciation. Clear speech helps you explain your ideas to everyone. By practicing these tongue twisters every day, we train our tongues and lips to move quickly and accurately. This makes it much easier to read aloud in class and present our ideas clearly to our teachers and friends. Remember, practice makes perfect, and taking your time is the best way to learn any new skill."
      },
      {
        "title": "Speech & Enunciation Practice",
        "text": "Phonics Focus: Contrasting /f/ and /p/\n\u2022 /f/ (Friction): Place your upper teeth gently on your lower lip and blow air out (e.g., 'fish', 'frogs').\n\u2022 /p/ (Plosive): Close your lips tightly, then pop them open with air (e.g., 'Peter', 'puppy').\n\nEnunciation practice keeps our speech clear!"
      },
      {
        "title": "Comprehension & Speech Tasks",
        "text": "Tasks:\n1. Say Twister 1 and Twister 4 rapidly without mixing up the 'f' sounds.\n2. Say Twister 2 and Twister 3 while focusing on clean 'p' pops.\n3. Identify three words in the slides that start with 'f' and three with 'p'."
      },
      {
        "title": "Focus: Perseverance & Clear Speech",
        "text": "Practicing difficult sounds builds speaking confidence. It's okay to make mistakes; just slow down, breathe, and try again.\n\nDiscuss: Why is speaking clearly important when explaining a science experiment or telling a story?"
      }
    ]
  },
  "thursday": {
    "type": "Short Biography",
    "title": "Helen Keller: Overcoming Obstacles",
    "slides": [
      {
        "title": "Biography: Helen Keller - Part 1",
        "text": "Helen Keller was born in Alabama, USA, as a healthy baby. However, when she was just nineteen months old, she fell very sick with a high fever. This illness left her both blind and deaf. Because she could not see or hear, she had no way to speak, write, or understand the people around her. As she grew older, she felt like she was trapped in a dark, silent prison. She wanted to express her feelings, but she could not. This made her feel extremely frustrated, angry, and wild. She would throw tantrums, break dishes, and scream because she felt completely cut off from the world. Her worried family did not know how to help her learn, but they kept hoping. They looked for doctors and teachers everywhere to help their daughter. During this difficult time, Helen's parents felt very sad and worried. They did not know how to communicate with their little girl, who was often confused and scared in her dark and silent world. She wanted to tell them what she needed, but since she could not hear or see, she was locked inside her own mind."
      },
      {
        "title": "Biography: Helen Keller - Part 2",
        "text": "Everything changed when Helen was seven years old. A patient and clever teacher named Anne Sullivan came to live with the family. Anne was determined to reach Helen's mind. She began spelling words into Helen's hand using a special sign language alphabet. For weeks, Helen copied the finger movements like a game, but she did not understand that the letters represented real things. One spring morning, Anne took Helen outside to the water pump. She held Helen's hand under the cool, running water. On Helen's other hand, Anne spelled the letters 'W-A-T-E-R' over and over. Suddenly, Helen understood! She realized that the cool flow on her hand had a name. That magic moment opened her entire world. She went inside and touched other things, wanting to learn their names. This breakthrough at the water pump was the key that unlocked Helen's mind. She realized that everything in the world had a name, and that Anne's finger movements were the secret code to learning those names. She was filled with joy and excitement, running around the yard touching flowers, trees, and stones, eager to learn their names."
      },
      {
        "title": "Biography: Helen Keller - Part 3",
        "text": "From that day on, Helen was eager to learn everything. She touched objects and Anne spelled their names. Helen was a brilliant student. She learned to read Braille, which is a system of writing using raised dots on paper. She also learned to write using a special board, and she even learned to speak by feeling the vibrations in her teacher's throat. When she grew up, Helen went to college and became the first blind and deaf person in history to earn a college degree. She traveled all over the world, writing books and giving lectures to help other disabled people. She proved that with determination, patience, and good teachers, we can overcome any obstacle. She remains a famous symbol of hope and courage for everyone. Helen's life became a shining example of hope and perseverance for millions of people around the world. She wrote several books about her experiences and spoke in many countries, advocating for better education and support for people with disabilities. She showed the world that with patience, dedication, and love, even the greatest challenges can be overcome."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n\u2022 Blind - Unable to see.\n\u2022 Deaf - Unable to hear.\n\u2022 Palm - The inner surface of the hand.\n\u2022 Braille - A system of writing for blind people using raised dots."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What illness-related challenges did Helen have as a baby?\n2. What word did Helen understand when she felt the cold running water?\n3. What did Helen accomplish when she grew up?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Determination and Perseverance.\n\nNo obstacle is too big to overcome when we have determination and the support of others. Hard work and patience can turn darkness into light.\n\nDiscuss: How can we help classmates who learn differently or have physical challenges?"
      }
    ]
  },
  "friday": {
    "type": "Fable",
    "title": "The Tortoise and the Hare",
    "slides": [
      {
        "title": "Fable: The Tortoise and the Hare - Part 1",
        "text": "A boastful Hare lived in a green valley, and he always bragged about how fast he could run. He would tease the other animals, showing off his speed. 'I am the fastest animal in the forest!' he laughed. 'Nobody can beat me!' Tired of his constant boasting, a slow and quiet Tortoise decided to challenge him to a race. The Hare laughed out loud. 'A race against you? This is a joke!' he chuckled. The other animals gathered to watch. The start signal was given, and the Hare zoomed ahead like a rocket. Soon, he was so far ahead that he looked back and could not even see the Tortoise. Confident of his victory, the Hare decided to stop and take a nap under a shady tree. He fell asleep quickly, breathing slowly in the cool shade. The Hare was so confident of his victory that he thought he had plenty of time to rest. He walked over to a shady oak tree, lay down on the soft grass, and closed his eyes. The gentle breeze blew through the leaves, and soon the Hare was fast asleep, snoring loudly and dreaming of his certain success."
      },
      {
        "title": "Fable: The Tortoise and the Hare - Part 2",
        "text": "While the Hare slept soundly in the cool grass, dreaming of his trophy, the Tortoise crawled slowly and steadily. The road was hot and long, and the Tortoise was very tired, but he never stopped. He kept his eyes on the finish line and moved his feet, one slow step after another. He did not look back or rest. Hours passed. The sun began to go down. The Tortoise kept walking. He passed the shady tree where the Hare was sleeping, but he did not make a sound. He walked past the sleeping Hare quietly. The Hare was snoring loudly, completely unaware that the slow Tortoise was already ahead of him, creeping closer and closer to victory. The other animals watched in quiet excitement. Step by step, the Tortoise moved forward along the dusty road under the hot sun. He did not let the heat or the long distance discourage him. He kept his mind focused on the goal and refused to stop for a rest. His slow but steady progress showed that determination is more important than speed when completing a long journey."
      },
      {
        "title": "Fable: The Tortoise and the Hare - Part 3",
        "text": "Finally, the Tortoise was just a few feet away from the finish line. The other animals began to cheer loudly. The noise woke up the Hare. He stood up, rubbed his eyes, and looked towards the finish line. To his horror, he saw the Tortoise almost there! The Hare ran as fast as his long legs could carry him, sprinting like the wind. But it was too late. The slow Tortoise crossed the finish line just as the Hare reached it! All the animals cheered for the Tortoise. The Hare was quiet and ashamed. The Tortoise smiled and said, 'Slow and steady wins the race.' The Hare learned that boasting and laziness lead to failure, while steady work leads to success. He promised never to tease the others again. The other animals cheered and congratulated the Tortoise for his amazing victory, celebrating his hard work and perseverance. The Hare, humbled by his defeat, realized that his boastful attitude and laziness had cost him the race. From that day on, he treated everyone with respect and never bragged about his speed again."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n\u2022 Boastful - Showing excessive pride in oneself.\n\u2022 Steadily - In a controlled, continuous, and even way.\n\u2022 Crawled - Moved slowly on hands and knees or close to the ground.\n\nCompare the speed words: 'sprint', 'run', 'walk', 'crawl', 'creep'."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Why did the Hare decide to take a nap during the race?\n2. What did the Tortoise do while the Hare was sleeping?\n3. Who won the race, and why?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Perseverance and Humility.\n\nSlow and steady wins the race. Overconfidence and laziness lead to failure, while patience, steady work, and determination lead to success.\n\nDiscuss: Tell about a time you succeeded at something by not giving up, even if it took a long time."
      }
    ]
  },
  "saturday": {
    "type": "Short Story",
    "title": "The Lion and the Mouse",
    "slides": [
      {
        "title": "Story: The Lion and the Mouse - Part 1",
        "text": "One warm afternoon, a huge Lion was sleeping peacefully under a shady tree in the jungle. A tiny Mouse, searching for seeds, accidentally ran across the Lion's nose. The Lion woke up with a loud yawn and caught the Mouse in his sharp claws. The Lion raised his huge paw, ready to crush the tiny creature. 'Please spare me!' cried the Mouse. 'Please do not eat me, King of the Jungle! I did not mean to wake you. If you let me go, I promise I will help you one day.' The Lion roared with laughter. He thought it was a very funny joke. How could a tiny mouse help the strong King of the Jungle? But since he was in a good mood, he opened his paw and let her go. She scampered away quickly into the tall grass. The Mouse was very frightened, shaking from head to toe in the Lion's huge paw. She looked up at the King of the Jungle with pleading eyes, hoping he would show mercy. She explained that she had only been searching for some seeds to eat and did not mean to disturb his peaceful sleep."
      },
      {
        "title": "Story: The Lion and the Mouse - Part 2",
        "text": "A few weeks later, the Lion was walking through the forest when he stepped into a hunter's trap. A strong, thick rope net fell over him, trapping him tightly. The Lion struggled and pulled, but the knots were too tight. He was stuck! In anger and helplessness, the Lion roared loudly, shaking the leaves on the trees. The tiny Mouse heard the familiar roar from her nest. 'The King is in trouble,' she thought. She ran to the spot and found the Lion trapped. 'Do not worry, my friend,' she said. 'I will save you.' The Lion looked at her sadly, but the Mouse did not waste time. She began to chew and gnaw the thick ropes with her sharp little teeth, working hard to cut them. The Lion was surprised to see the tiny Mouse run to his side, but he was too weak and trapped to do anything. He watched as the small creature immediately began to bite the thick fibers of the rope. The Lion realized that even the smallest friend can be of great help in times of trouble."
      },
      {
        "title": "Story: The Lion and the Mouse - Part 3",
        "text": "The Mouse worked quickly and steadily, chewing through one rope fiber after another. The Lion watched in amazement as a small knot broke apart. The Mouse kept gnawing and biting. Finally, she chewed through the main ropes, and the net fell open. The Lion stepped out of the net, completely free! He looked at the tiny Mouse with great respect. 'You saved my life,' said the Lion softly. 'I am sorry I laughed at your promise.' The Mouse smiled and replied, 'You see, even a tiny mouse can help a great lion.' From that day on, the Lion and the Mouse were best friends, proving that kindness is never wasted and everyone has unique strengths. They always walked together in the jungle. This experience taught the Lion a valuable lesson about humility and friendship. He learned that every creature, no matter how small or weak, has value and can make a difference in the world. He promised to protect the Mouse and her family, and the two remained close friends, sharing many peaceful days in the forest."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n\u2022 Paw - An animal's foot having claws and pads.\n\u2022 Spare - Refrain from harming or killing.\n\u2022 Gnawed - Bitten or chewed repeatedly.\n\nNotice how the prefix 'helpless-' combines with '-ness' to form a noun meaning state of having no help."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Why did the Lion laugh at the Mouse's promise?\n2. How did the Lion get trapped?\n3. How did the Mouse save the Lion?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Kindness and Respect.\n\nNo act of kindness is ever wasted. We should never look down on someone because they are small or different; everyone has unique strengths that can help others.\n\nDiscuss: How can you show kindness to a friend at school today?"
      }
    ]
  },
  "sunday": {
    "type": "Inspirational Biography",
    "title": "Marie Curie: The Passionate Scientist",
    "slides": [
      {
        "title": "Biography: Marie Curie - Part 1",
        "text": "Marie Curie was born in Poland, a country where women were not allowed to attend university. Marie was an exceptionally smart girl who loved science and books. She dreamed of studying physics, so she worked hard for years as a governess to save money. She studied in secret at a hidden school called the 'Flying University'. Finally, she moved to Paris, France, to study physics and mathematics at the famous Sorbonne University. She lived in a cold attic and had very little money for food, sometimes eating only bread and tea. Despite these hardships, she studied day and night because she had a great passion for learning and discovering the secrets of nature. She never complained about her difficulties, always focused on her tests. Marie had to work very hard to support herself while studying in Paris. She lived in a small, poorly heated room and often had to survive on just a few pieces of bread and a cup of tea. However, her passion for science was so strong that she ignored her hunger and cold, focusing all her energy on her university lectures."
      },
      {
        "title": "Biography: Marie Curie - Part 2",
        "text": "In Paris, Marie met Pierre Curie, a brilliant scientist who shared her love for research. They got married and began working together. They set up a laboratory in a cold, drafty wooden shed. They wanted to investigate mysterious rays coming from a mineral called uranium. Working in the dusty shed, they spent years stirring heavy pots of pitchblende. Through hard work and scientific observation, they discovered two new radioactive elements. Marie named the first one Polonium, after her beloved home country, Poland. The second element was called Radium because it was extremely radioactive. Their discoveries opened a brand-new field of science called radioactivity, changing chemistry and physics forever. It was exciting. Their laboratory was not a modern, well-equipped room, but a simple, drafty shed with a leaking roof. They had to work in difficult conditions, handling heavy materials and breathing in smoke and dust. Despite these challenges, their love for research kept them motivated, and they spent hours discussing their scientific observations under the dim light."
      },
      {
        "title": "Biography: Marie Curie - Part 3",
        "text": "Marie Curie's amazing discoveries changed the world of medicine, especially in treating diseases like cancer. In 1903, Marie and Pierre won the Nobel Prize in Physics, making Marie the first woman in history to win this prestigious award. In 1911, Marie won a second Nobel Prize, this time in Chemistry. She remains the only person in history to win Nobel Prizes in two different sciences! During World War I, she created mobile X-ray machines to help wounded soldiers. Marie Curie proved that with curiosity, determination, and hard work, anyone can achieve great things. She stands as one of the most famous scientists in history, inspiring girls and boys to follow their dreams and explore nature. Marie's legacy continues to inspire generations of scientists, especially young women who dream of pursuing careers in science. She showed that curiosity, patience, and hard work can break down barriers and lead to discoveries that benefit all of humanity. Her story teaches us to never give up on our dreams, no matter how difficult the path may seem."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n\u2022 University - A school of high-level learning.\n\u2022 Radioactivity - The release of energy from tiny particles.\n\u2022 Shed - A simple one-story structure for storage or work.\n\u2022 Governess - A woman employed to teach children in a private household."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Why did Marie Curie have to move to France to study?\n2. What two elements did Marie and Pierre discover?\n3. What record does Marie Curie hold regarding Nobel Prizes?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Passion and Curiosity.\n\nFollow your curiosity and stand up for your dreams, even when others say it is impossible. True science requires dedication, observation, and hard work.\n\nDiscuss: If you could discover a new element or invention, what would you want it to do?"
      }
    ]
  }
};

window.WEEK1_ADVANCED_DATA.reading = window.WEEK1_DATA.reading;
