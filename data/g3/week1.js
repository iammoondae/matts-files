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
  "color": "#10b981",
  "icon": "🔬",
  "title": "Science",
  "subtitle": "Week 1: Science in our Daily Life - Scientific Tools",
  "slides": [
    {
      "title": "Science in Daily Life",
      "text": "Science is the study of the natural world. In our daily lives, we use science when cooking, cleaning, observing the sky, or using tools. Observing things around us is the first step to scientific thinking.",
      "examples": [
        {
          "title": "Cooking",
          "content": "Cooking involves heat changes, which is a physical science concept."
        },
        {
          "title": "Weather",
          "content": "Looking at clouds to predict rain is an earth science observation."
        }
      ]
    },
    {
      "title": "Scientific Tools",
      "text": "We use special tools to help us observe and measure things. Some common tools are a ruler, hand lens, scissors, balloons, clay, and cardboard. A hand lens helps us see tiny details of an object clearly.",
      "examples": [
        {
          "title": "Ruler",
          "content": "Used to measure the length of books, leaves, and pencils in centimeters."
        },
        {
          "title": "Hand Lens",
          "content": "Used to inspect small insects or lines on a leaf closely."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 1)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 2)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 3)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 4)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 5)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 6)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 7)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 8)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 9)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 10)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 11)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 12)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 13)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 14)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 15)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 16)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 17)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 18)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 19)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 20)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 21)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 22)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 23)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 24)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 25)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 1)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 2)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 3)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 4)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 5)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Science Activity Task",
    "desc": "Create an entry in your notebook explaining Science in our Daily Life - Scientific Tools. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Science Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Science in our Daily Life - Scientific Tools? <span class=\"ws-answer\">Understanding and applying Science in our Daily Life - Scientific Tools in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK1_DATA.english = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 1: CVCC Words, Demonstrative Pronouns & Sentences",
  "slides": [
    {
      "title": "CVCC Words",
      "text": "CVCC stands for Consonant-Vowel-Consonant-Consonant. These words end with two consonant letters that form a blend, like 'hand', 'tent', or 'pink'.",
      "examples": [
        {
          "title": "The word Hand",
          "content": "H (consonant) - A (vowel) - N (consonant) - D (consonant)."
        },
        {
          "title": "The word Tent",
          "content": "T (consonant) - E (vowel) - N (consonant) - T (consonant)."
        }
      ]
    },
    {
      "title": "Demonstrative Pronouns",
      "text": "Demonstrative pronouns point to specific things. We use 'this' (singular) and 'these' (plural) for things near us. We use 'that' (singular) and 'those' (plural) for things far away.",
      "examples": [
        {
          "title": "Near items",
          "content": "'This is my pen.' (one item) or 'These are my pens.' (multiple)."
        },
        {
          "title": "Far items",
          "content": "'That is a bird.' (one item) or 'Those are birds.' (multiple)."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 1)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 2)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 3)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 4)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 5)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 6)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 7)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 8)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 9)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 10)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 11)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 12)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 13)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 14)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 15)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 16)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 17)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 18)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 19)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 20)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 21)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 22)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 23)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 24)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 25)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "English Activity Task",
    "desc": "Create an entry in your notebook explaining CVCC Words, Demonstrative Pronouns & Sentences. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>English Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of CVCC Words, Demonstrative Pronouns & Sentences? <span class=\"ws-answer\">Understanding and applying CVCC Words, Demonstrative Pronouns & Sentences in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK1_DATA.filipino = {
  "color": "#ec4899",
  "icon": "🗣️",
  "title": "Filipino",
  "subtitle": "Week 1: Pangngalang Pantangi at Pambalana sa Pook",
  "slides": [
    {
      "title": "Pangngalang Pantangi at Pambalana",
      "text": "Ang pangngalan ay ngalan ng tao, bagay, hayop, lugar, o pangyayari. May dalawang uri ito: Pantangi (tiyak na ngalan, nagsisimula sa malaking titik) at Pambalana (karaniwang ngalan, nagsisimula sa maliit na titik).",
      "examples": [
        {
          "title": "Pantangi",
          "content": "Matteo (tao), Pilipinas (lugar), Toyota (bagay)."
        },
        {
          "title": "Pambalana",
          "content": "bata (tao), bansa (lugar), kotse (bagay)."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 1)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 2)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 3)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 4)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 5)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 6)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 7)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 8)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 9)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 10)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 11)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 12)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 13)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 14)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 15)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 16)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 17)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 18)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 19)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 20)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 21)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 22)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 23)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 24)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 25)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Filipino Activity Task",
    "desc": "Create an entry in your notebook explaining Pangngalang Pantangi at Pambalana sa Pook. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Filipino Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Pangngalang Pantangi at Pambalana sa Pook? <span class=\"ws-answer\">Understanding and applying Pangngalang Pantangi at Pambalana sa Pook in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK1_DATA.makabansa = {
  "color": "#f59e0b",
  "icon": "🏝️",
  "title": "Makabansa",
  "subtitle": "Week 1: Mahahalagang Elemento ng Kasaysayan ng Komunidad",
  "slides": [
    {
      "title": "Kasaysayan ng Komunidad",
      "text": "Ang kasaysayan ay ang pag-aaral ng mga nakaraang pangyayari. Ang bawat komunidad ay may sariling kuwento, pinagmulan ng pangalan, at mahahalagang detalye tungkol sa pagkakatatag nito.",
      "examples": [
        {
          "title": "Pinagmulan",
          "content": "Maraming komunidad ang ipinangalan sa mga halaman, bayani, o katangiang pisikal ng lugar."
        },
        {
          "title": "Kasaysayan",
          "content": "Ang pag-alam sa nakaraan ay tumutulong sa atin na maunawaan ang ating kasalukuyan."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 1)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 2)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 3)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 4)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 5)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 6)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 7)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 8)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 9)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 10)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 11)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 12)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 13)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 14)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 15)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 16)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 17)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 18)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 19)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 20)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 21)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 22)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 23)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 24)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 25)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Makabansa Activity Task",
    "desc": "Create an entry in your notebook explaining Mahahalagang Elemento ng Kasaysayan ng Komunidad. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Makabansa Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Mahahalagang Elemento ng Kasaysayan ng Komunidad? <span class=\"ws-answer\">Understanding and applying Mahahalagang Elemento ng Kasaysayan ng Komunidad in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK1_DATA.gmrc = {
  "color": "#06b6d4",
  "icon": "🧘‍♂️",
  "title": "GMRC",
  "subtitle": "Week 1: Tiwala sa Sarili - Sariling Hilig at Kakayahan",
  "slides": [
    {
      "title": "Tiwala sa Sarili (Self-confidence)",
      "text": "Ang tiwala sa sarili ay ang paniniwala sa iyong sariling kakayahan. Nagsisimula ito sa pagkilala sa iyong mga hilig (interests) at kakayahan (talents).",
      "examples": [
        {
          "title": "Hilig",
          "content": "Ang mga bagay na gusto mong gawin tulad ng pagguhit, pagsayaw, o pagtugtog."
        },
        {
          "title": "Kakayahan",
          "content": "Ang iyong mga talento na maaari mong paunlarin tulad ng pagiging magaling sa sipnayan o pagsusulat."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 1)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 2)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 3)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 4)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 5)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 6)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 7)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 8)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 9)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 10)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 11)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 12)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 13)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 14)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 15)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 16)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 17)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 18)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 19)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 20)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 21)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 22)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 23)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 24)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 25)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "GMRC Activity Task",
    "desc": "Create an entry in your notebook explaining Tiwala sa Sarili - Sariling Hilig at Kakayahan. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>GMRC Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Tiwala sa Sarili - Sariling Hilig at Kakayahan? <span class=\"ws-answer\">Understanding and applying Tiwala sa Sarili - Sariling Hilig at Kakayahan in real life.</span></div></div>\n               </div>"
    ]
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
        "text": "Vocabulary:\n• Grains - Small, hard seeds of food plants like wheat.\n• Harvested - Gathered mature crops.\n• Lazy - Unwilling to work or use energy.\n\nPhonics Focus: Practice the ending '-ed' sound in 'harvested' (id) and 'lived' (d)."
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
        "text": "The funniest thing about him is the way he likes to grow—\nNot at all like proper children, which is always very slow;\nFor he sometimes shoots up taller like an india-rubber ball,\nAnd he sometimes gets so little that there's none of him at all.\n\nI watch him in the afternoon as the sun sinks low in the west. He grows taller and taller, like a giant reaching for the tree branches. It is amazing how fast he changes his size! Normal children take many years to grow just a few inches, but my shadow can grow ten feet in a split second! Sometimes, when the sun is directly above my head at noon, he disappears completely, shrinking under my feet as if he is playing hide-and-seek. He is a magical playmate indeed, changing his shape and height constantly throughout the day to match the sun's position. Shadows change shape depending on where the light is coming from. When the light source is low, like the sun at sunrise or sunset, the shadow becomes very long. When the light is directly above, like the sun at noon, the shadow gets very short and small. This is a basic rule of science that explains why my shadow grows and shrinks."
      },
      {
        "title": "Poem: My Shadow - Part 3",
        "text": "One morning, very early, before the sun was up,\nI rose and found the shining dew on every buttercup;\nBut my lazy little shadow, like an arrant sleepy-head,\nHad stayed at home behind me and was fast asleep in bed.\n\nI walked quietly through the wet grass, expecting my shadow to run along beside me as usual. But when I looked down, the ground was empty! There was no shadow to be seen anywhere. He was too lazy to wake up in the cool dawn. He stayed warm and cozy in my room, resting on the floor. I laughed to think that my shadow was a sleepy-head, missing the beautiful sunrise and the sparkling dew. This showed me that shadows need light to exist; without the sun, they must remain asleep in the darkness, waiting for the light to return and bring them back to life. In the complete darkness of the night, there is no light to block, so no shadows can be created. That is why my shadow was gone when I woke up before the sun. He needed the bright light to return so he could come out and play with me again in the garden, running beside me under the warm sun."
      },
      {
        "title": "Rhyme & Word Play",
        "text": "Phonics Focus: Rhyming Pairs\nIdentify these rhyming words from the poem:\n• me / see\n• head / bed\n• grow / slow\n• ball / all\n\nRhymes help us remember poems and feel their musical rhythm!"
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
        "text": "Phonics Focus: Contrasting /f/ and /p/\n• /f/ (Friction): Place your upper teeth gently on your lower lip and blow air out (e.g., 'fish', 'frogs').\n• /p/ (Plosive): Close your lips tightly, then pop them open with air (e.g., 'Peter', 'puppy').\n\nEnunciation practice keeps our speech clear!"
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
        "text": "Vocabulary:\n• Blind - Unable to see.\n• Deaf - Unable to hear.\n• Palm - The inner surface of the hand.\n• Braille - A system of writing for blind people using raised dots."
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
        "text": "Vocabulary:\n• Boastful - Showing excessive pride in oneself.\n• Steadily - In a controlled, continuous, and even way.\n• Crawled - Moved slowly on hands and knees or close to the ground.\n\nCompare the speed words: 'sprint', 'run', 'walk', 'crawl', 'creep'."
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
    "type": "Maikling Kuwento (Short Story)",
    "title": "Ang Unggoy at ang Pagong",
    "slides": [
      {
        "title": "Kuwento: Ang Unggoy at ang Pagong - Bahagi 1",
        "text": "Noong araw, may magkaibigang si Pagong at si Matsing. Kilala si Pagong sa pagiging mabagal ngunit napakatalino at mapagkumbaba, habang si Matsing naman ay kilala sa pagiging mabilis ngunit napakatuso at sakim. Isang araw, habang namamasyal sila sa pampang ng ilog, nakakita sila ng isang lumulutang na puno ng saging. 'Sa akin ang itaas na bahagi dahil may mga dahon na ito!' sigaw ni Matsing. Pumayag si Pagong at kinuha ang ibabang bahagi na walang dahon ngunit may mga ugat. Umuwi sila at itinanim ang kani-kanilang bahagi. Makalipas ang ilang linggo, nalanta at namatay ang itinanim ni Matsing dahil walang ugat ang kanyang saging. Samantala, ang saging ni Pagong ay lumago, naging malabay, at namunga ng marami. Nang makita ito ni Matsing, naisip niya na naman na lamangan ang kanyang mabait na kaibigan dahil alam niyang hindi kayang umakyat ni Pagong."
      },
      {
        "title": "Kuwento: Ang Unggoy at ang Pagong - Bahagi 2",
        "text": "Dahil hindi makapang-akyat si Pagong, nakiusap siya kay Matsing. 'Kaibigang Matsing, maaari mo ba akong tulungang pitasin ang mga hinog na saging? Hahatiin natin ang mga bunga.' Agad na umakyat si Matsing sa puno. Ngunit sa halip na ihulog ang mga saging, kinain niya ang lahat ng masasarap at matatamis na saging sa itaas. Inihulog lamang niya ang mga balat kay Pagong habang tumatawa ng malakas. 'Napakasarap ng mga saging na ito!' biro ni Matsing habang busog na busog. Labis na nalungkot at nagalit si Pagong sa kataksilan ng kanyang kaibigan. Upang makaganti, kumuha si Pagong ng mga matutulis na tinik ng suso at ipinalibot ang mga ito sa puno ng saging. Nang bumaba si Matsing, sumigaw siya sa sakit dahil natusok ang kanyang mga kamay at paa ng matutulis na tinik."
      },
      {
        "title": "Kuwento: Ang Unggoy at ang Pagong - Bahagi 3",
        "text": "Nagalit si Matsing at hinuli si Pagong. 'Ipapakain kita sa apoy o itatapon kita sa ilog!' sigaw ni Matsing. Nag-isip ng mabilis si Pagong at nagkunwaring takot sa ilog. 'Pakiusap, sunugin mo na lang ako sa apoy, huwag mo lang akong itapon sa malalim na ilog dahil malulunod ako!' pagmamakaawa ni Pagong. Akala ni Matsing ay matatalo niya si Pagong, kaya itinapon niya ito sa ilog. Ngunit laking gulat ni Matsing nang lumalangoy nang maayos si Pagong at tumatawa. 'Salamat, Matsing! Hindi mo ba alam na sa tubig ako nakatira?' sigaw ni Pagong. Natuto ng malaking leksyon si Matsing tungkol sa pagiging sakim at tuso, at mula noon ay hindi na niya niloko ang iba pang hayop sa kagubatan."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Sakim - Mapag-imbot o gustong solohin ang lahat.\n• Nalanta - Natuyo ang halaman at namatay.\n• Niloko - Dinaya o ginawan ng masama.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'ng' sa dulo ng mga salitang 'unggoy', 'pagong', at 'saging'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Anong bahagi ng puno ng saging ang pinili ni Matsing, at bakit ito namatay?\n2. Paano dinaya ni Matsing si Pagong nang umakyat siya sa puno?\n3. Paano nakaligtas si Pagong sa parusa ni Matsing?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang katapatan at kababaang-loob ay palaging nagtatagumpay.\n\nAng kasakiman at panlilinlang ay nagdadala ng kapahamakan sa sarili. Mas maganda ang maging tapat sa mga kaibigan at magbahagi ng mga biyaya sa kapwa.\n\nTalakayin: Bakit mahalagang ibahagi ang mga bagay sa iyong mga kaibigan?"
      }
    ]
  },
  "sunday": {
    "type": "Alamat (Legend)",
    "title": "Ang Alamat ng Pinya",
    "slides": [
      {
        "title": "Kuwento: Ang Alamat ng Pinya - Bahagi 1",
        "text": "Noong unang panahon, may isang mag-ina na nakatira sa isang malayong baryo. Sila ay si Aling Rosa at ang kanyang kaisa-isang anak na si Pinang. Mahal na mahal ni Aling Rosa si Pinang, ngunit lumaki si Pinang na tamad at walang ginagawa sa bahay kundi maglaro at matulog. Tuwing tuturuan siya ng kanyang ina na maglinis o magluto, palagi niyang sinasabing alam na niya ito. Ngunit kapag inutusan na siya, marami siyang idinadahilan. Isang araw, nagkasakit ng malubha si Aling Rosa at hindi makabangon sa higaan upang magluto. Nakiusap siya kay Pinang, 'Anak, pakiusap at magluto ka ng lugaw para sa ating tanghalian.' Sumang-ayon si Pinang ngunit nagreklamo pa rin habang naghahanap ng sandok sa kusina."
      },
      {
        "title": "Kuwento: Ang Alamat ng Pinya - Bahagi 2",
        "text": "Dahil tamad si Pinang, hindi siya naghanap nang mabuti sa kusina. Paulit-ulit siyang nagtatanong sa kanyang maysakit na ina. 'Inay, nasaan po ang sandok?' 'Inay, nasaan po ang bigas?' 'Inay, nasaan po ang posporo?' Dahil sa matinding pagod at yamot ng ina sa paulit-ulit na tanong ni Pinang gayong malapit lang naman ang mga gamit, nasabi ni Aling Rosa: 'Naku, Pinang! Sana ay magkaroon ka ng maraming mata upang makita mo ang lahat ng bagay at hindi ka na paulit-ulit na nagtatanong sa akin!' Natahimik si Pinang at lumabas ng kusina upang maghanap muli. Lumipas ang hapon at gabi, ngunit hindi na bumalik si Pinang sa kuwarto ng ina. Nang gumaling si Aling Rosa, hinanap niya si Pinang sa buong baryo ngunit walang nakakita sa kanya."
      },
      {
        "title": "Kuwento: Ang Alamat ng Pinya - Bahagi 3",
        "text": "Isang umaga, habang naglilinis si Aling Rosa sa kanilang bakuran, nakita niya ang isang kakaibang halaman na tumubo sa tabi ng kanilang kusina. Hindi pa siya nakakakita ng ganoong uri ng halaman. Mayroon itong prutas na may hugis-ulo ng tao at napapalibutan ng napakaraming parang mata sa buong katawan nito. Biglang naalala ni Aling Rosa ang kanyang huling sinabi sa anak bago ito mawala. Napaiyak siya dahil narealize niyang ang prutas na iyon ay ang kanyang anak na si Pinang na binago ng isang sumpa. Tinawag niya itong 'Pinang' bilang alaalang kanyang anak, at kalaunan ay tinawag itong 'Pinya'. Inalagaan niya ito nang mabuti at pinalaganap ang mga buto nito sa komunidad."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Baryo - Isang maliit na komunidad o nayon sa probinsya.\n• Yamot - Pagkainis o kawalan ng pasensya.\n• Sumpa - Isang mahiwagang salita na nagdudulot ng pagbabago.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'p' sa salitang 'pinya', 'pinang', at 'pagod'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Ano ang ugali ni Pinang na nagpahirap sa kanyang ina?\n2. Ano ang nasabi ni Aling Rosa kay Pinang dahil sa kanyang pagkainis?\n3. Ano ang kakaibang halaman na tumubo sa bakuran ni Aling Rosa?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang pagsunod sa magulang at pagkusa sa paggawa ay mahalagang katangian.\n\nHuwag maging tamad at matutong maghanap gamit ang sariling lakas bago magtanong sa iba. Ang mga salita ng magulang ay may kapangyarihan kaya dapat maging maingat sa pagsalitang iyon.\n\nTalakayin: Ano ang mga simpleng gawaing-bahay na maaari mong gawin upang makatulong sa iyong mga magulang?"
      }
    ]
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
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Angle Classification</h3>\n                  <p class=\"ws-instruction\">Classify each angle measure as: Acute, Right, Obtuse, Straight, or Reflex.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Angle Measure</th>\n                        <th>Classification</th>\n                        <th>Angle Measure</th>\n                        <th>Classification</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>45°</td>\n                        <td><span class=\"ws-answer\">Acute</span></td>\n                        <td>120°</td>\n                        <td><span class=\"ws-answer\">Obtuse</span></td>\n                      </tr>\n                      <tr>\n                        <td>90°</td>\n                        <td><span class=\"ws-answer\">Right</span></td>\n                        <td>180°</td>\n                        <td><span class=\"ws-answer\">Straight</span></td>\n                      </tr>\n                      <tr>\n                        <td>245°</td>\n                        <td><span class=\"ws-answer\">Reflex</span></td>\n                        <td>89°</td>\n                        <td><span class=\"ws-answer\">Acute</span></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Angle Construction Grid</h3>\n                  <p class=\"ws-instruction\">Use the coordinate grids to draw: 1) an Acute angle of 60°, and 2) an Obtuse angle of 135°. Label the vertex and rays.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Draw 60° angle here</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Draw 135° angle here</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Protractor Estimation</h3>\n                  <p class=\"ws-instruction\">Estimate the angle measurement and classify it (Acute, Right, Obtuse, Straight, Reflex).</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Angle Figure Concept</th>\n                        <th>Estimated Measure (Degrees)</th>\n                        <th>Angle Classification</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1. Halfway between straight vertical and horizontal (Acute)</td>\n                        <td><span class=\"ws-answer\">45°</span></td>\n                        <td><span class=\"ws-answer\">Acute</span></td>\n                      </tr>\n                      <tr>\n                        <td>2. Slightly wider than a perfect L corner (Obtuse)</td>\n                        <td><span class=\"ws-answer\">100° - 120°</span></td>\n                        <td><span class=\"ws-answer\">Obtuse</span></td>\n                      </tr>\n                      <tr>\n                        <td>3. A flat, straight horizontal line (Straight)</td>\n                        <td><span class=\"ws-answer\">180°</span></td>\n                        <td><span class=\"ws-answer\">Straight</span></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
    }
  },
  "science": {
  "color": "#10b981",
  "icon": "🔬",
  "title": "Science",
  "subtitle": "Week 1: Science in our Daily Life - Scientific Tools [Advanced]",
  "slides": [
    {
      "title": "Science in Daily Life",
      "text": "Science is the study of the natural world. In our daily lives, we use science when cooking, cleaning, observing the sky, or using tools. Observing things around us is the first step to scientific thinking.",
      "examples": [
        {
          "title": "Cooking",
          "content": "Cooking involves heat changes, which is a physical science concept."
        },
        {
          "title": "Weather",
          "content": "Looking at clouds to predict rain is an earth science observation."
        }
      ]
    },
    {
      "title": "Scientific Tools",
      "text": "We use special tools to help us observe and measure things. Some common tools are a ruler, hand lens, scissors, balloons, clay, and cardboard. A hand lens helps us see tiny details of an object clearly.",
      "examples": [
        {
          "title": "Ruler",
          "content": "Used to measure the length of books, leaves, and pencils in centimeters."
        },
        {
          "title": "Hand Lens",
          "content": "Used to inspect small insects or lines on a leaf closely."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 1)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 2)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 3)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 4)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 5)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 6)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 7)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 8)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 9)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 10)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 11)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 12)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 13)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 14)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 15)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 16)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 17)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 18)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 19)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 20)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 21)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 22)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 23)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 24)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Which tool is best used to inspect small details of a leaf closely? (Question 25)",
      "options": [
        "Hand lens",
        "Ruler",
        "Scissors",
        "Modeling clay"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 1)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 2)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 3)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 4)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: If you use a hand lens to focus sunlight on a piece of dark paper, what will happen? (Challenge 5)",
      "options": [
        "The paper will get hot and may burn",
        "Nothing will happen",
        "The paper will turn blue",
        "The lens will melt"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Science Activity Task",
    "desc": "Create an entry in your notebook explaining Science in our Daily Life - Scientific Tools [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Science Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Science in our Daily Life - Scientific Tools [Advanced]? <span class=\"ws-answer\">Understanding and applying Science in our Daily Life - Scientific Tools [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "english": {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 1: CVCC Words, Demonstrative Pronouns & Sentences [Advanced]",
  "slides": [
    {
      "title": "CVCC Words",
      "text": "CVCC stands for Consonant-Vowel-Consonant-Consonant. These words end with two consonant letters that form a blend, like 'hand', 'tent', or 'pink'.",
      "examples": [
        {
          "title": "The word Hand",
          "content": "H (consonant) - A (vowel) - N (consonant) - D (consonant)."
        },
        {
          "title": "The word Tent",
          "content": "T (consonant) - E (vowel) - N (consonant) - T (consonant)."
        }
      ]
    },
    {
      "title": "Demonstrative Pronouns",
      "text": "Demonstrative pronouns point to specific things. We use 'this' (singular) and 'these' (plural) for things near us. We use 'that' (singular) and 'those' (plural) for things far away.",
      "examples": [
        {
          "title": "Near items",
          "content": "'This is my pen.' (one item) or 'These are my pens.' (multiple)."
        },
        {
          "title": "Far items",
          "content": "'That is a bird.' (one item) or 'Those are birds.' (multiple)."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 1)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 2)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 3)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 4)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 5)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 6)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 7)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 8)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 9)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 10)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 11)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 12)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 13)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 14)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 15)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 16)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 17)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 18)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 19)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 20)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 21)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 22)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 23)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 24)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CVCC word in the choices below. (Question 25)",
      "options": [
        "Hand",
        "Frog",
        "Baby",
        "Book"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Challenge: Which pronoun correctly completes this sentence? 'Look at ___ birds flying high in the sky far away!'",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "English Activity Task",
    "desc": "Create an entry in your notebook explaining CVCC Words, Demonstrative Pronouns & Sentences [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>English Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of CVCC Words, Demonstrative Pronouns & Sentences [Advanced]? <span class=\"ws-answer\">Understanding and applying CVCC Words, Demonstrative Pronouns & Sentences [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "filipino": {
  "color": "#ec4899",
  "icon": "🗣️",
  "title": "Filipino",
  "subtitle": "Week 1: Pangngalang Pantangi at Pambalana sa Pook [Advanced]",
  "slides": [
    {
      "title": "Pangngalang Pantangi at Pambalana",
      "text": "Ang pangngalan ay ngalan ng tao, bagay, hayop, lugar, o pangyayari. May dalawang uri ito: Pantangi (tiyak na ngalan, nagsisimula sa malaking titik) at Pambalana (karaniwang ngalan, nagsisimula sa maliit na titik).",
      "examples": [
        {
          "title": "Pantangi",
          "content": "Matteo (tao), Pilipinas (lugar), Toyota (bagay)."
        },
        {
          "title": "Pambalana",
          "content": "bata (tao), bansa (lugar), kotse (bagay)."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 1)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 2)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 3)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 4)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 5)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 6)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 7)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 8)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 9)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 10)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 11)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 12)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 13)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 14)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 15)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 16)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 17)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 18)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 19)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 20)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 21)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 22)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 23)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 24)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Alin sa mga sumusunod ang halimbawa ng Pangngalang Pantangi? (Question 25)",
      "options": [
        "Matteo",
        "bata",
        "bansa",
        "libro"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Ano ang tamang aspekto ng pandiwa sa pangungusap na ito: 'Si Lina ay ___ kahapon sa plasa.'?",
      "options": [
        "sumayaw",
        "sumasayaw",
        "sasayaw",
        "nagsasayaw"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Filipino Activity Task",
    "desc": "Create an entry in your notebook explaining Pangngalang Pantangi at Pambalana sa Pook [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Filipino Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Pangngalang Pantangi at Pambalana sa Pook [Advanced]? <span class=\"ws-answer\">Understanding and applying Pangngalang Pantangi at Pambalana sa Pook [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "makabansa": {
  "color": "#f59e0b",
  "icon": "🏝️",
  "title": "Makabansa",
  "subtitle": "Week 1: Mahahalagang Elemento ng Kasaysayan ng Komunidad [Advanced]",
  "slides": [
    {
      "title": "Kasaysayan ng Komunidad",
      "text": "Ang kasaysayan ay ang pag-aaral ng mga nakaraang pangyayari. Ang bawat komunidad ay may sariling kuwento, pinagmulan ng pangalan, at mahahalagang detalye tungkol sa pagkakatatag nito.",
      "examples": [
        {
          "title": "Pinagmulan",
          "content": "Maraming komunidad ang ipinangalan sa mga halaman, bayani, o katangiang pisikal ng lugar."
        },
        {
          "title": "Kasaysayan",
          "content": "Ang pag-alam sa nakaraan ay tumutulong sa atin na maunawaan ang ating kasalukuyan."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 1)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 2)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 3)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 4)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 5)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 6)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 7)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 8)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 9)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 10)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 11)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 12)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 13)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 14)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 15)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 16)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 17)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 18)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 19)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 20)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 21)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 22)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 23)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 24)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Saan karaniwang nagmumula ang pangalan ng isang komunidad? (Question 25)",
      "options": [
        "Sa mga lokal na halaman, bayani o katangian ng pook",
        "Sa isang drowing",
        "Wala itong pinagmulan",
        "Sa ibang bansa"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Bakit kailangang pangalagaan ang mga makasaysayang estruktura sa ating komunidad?",
      "options": [
        "Upang maipreserba ang kasaysayan at kultura para sa hinaharap",
        "Upang ibenta ito sa ibang bansa",
        "Dahil ito ay walang silbi",
        "Upang gawin itong mall"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Makabansa Activity Task",
    "desc": "Create an entry in your notebook explaining Mahahalagang Elemento ng Kasaysayan ng Komunidad [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Makabansa Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Mahahalagang Elemento ng Kasaysayan ng Komunidad [Advanced]? <span class=\"ws-answer\">Understanding and applying Mahahalagang Elemento ng Kasaysayan ng Komunidad [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "gmrc": {
  "color": "#06b6d4",
  "icon": "🧘‍♂️",
  "title": "GMRC",
  "subtitle": "Week 1: Tiwala sa Sarili - Sariling Hilig at Kakayahan [Advanced]",
  "slides": [
    {
      "title": "Tiwala sa Sarili (Self-confidence)",
      "text": "Ang tiwala sa sarili ay ang paniniwala sa iyong sariling kakayahan. Nagsisimula ito sa pagkilala sa iyong mga hilig (interests) at kakayahan (talents).",
      "examples": [
        {
          "title": "Hilig",
          "content": "Ang mga bagay na gusto mong gawin tulad ng pagguhit, pagsayaw, o pagtugtog."
        },
        {
          "title": "Kakayahan",
          "content": "Ang iyong mga talento na maaari mong paunlarin tulad ng pagiging magaling sa sipnayan o pagsusulat."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 1)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 2)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 3)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 4)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 5)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 6)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 7)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 8)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 9)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 10)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 11)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 12)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 13)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 14)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 15)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 16)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 17)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 18)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 19)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 20)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 21)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 22)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 23)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 24)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kahalagahan ng pag-alam sa sariling hilig at kakayahan? (Question 25)",
      "options": [
        "Upang malinang ang tiwala sa sarili",
        "Upang magmayabang sa kapwa",
        "Upang makakuha ng pera",
        "Upang tumakbo nang mabilis"
      ],
      "answer": 0
    }
  ],
  "challenge": [
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Hamong Tanong: Nakita mong nahihirapan ang iyong ina na magbitbit ng mga pinamili. Ano ang gagawin mo?",
      "options": [
        "Tutungo ako upang tulungan siyang magbitbit ng magaan na bagay",
        "Hahayaan ko lang siya",
        "Maglalaro ako ng cellphone",
        "Tatawanan ko siya"
      ],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "GMRC Activity Task",
    "desc": "Create an entry in your notebook explaining Tiwala sa Sarili - Sariling Hilig at Kakayahan [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>GMRC Review - Week 1</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Tiwala sa Sarili - Sariling Hilig at Kakayahan [Advanced]? <span class=\"ws-answer\">Understanding and applying Tiwala sa Sarili - Sariling Hilig at Kakayahan [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
}
};

window.WEEK1_ADVANCED_DATA.reading = window.WEEK1_DATA.reading;
