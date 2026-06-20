window.WEEK2_DATA = {};

window.WEEK2_DATA.math = {
  color: "#3b82f6",
  icon: "🔢",
  title: "Mathematics",
  subtitle: "Week 2: Numbers up to 10,000 & Comparing",
  slides: [
    {
      title: "Introduction to Numbers up to 10,000",
      text: "As numbers get larger, we add more digits. A 4-digit number has places for Thousands, Hundreds, Tens, and Ones. Reading and writing these numbers is the key to understanding larger quantities.",
      examples: [
        { title: "Library Books", content: "A school library has 3 boxes of 1,000 books, 4 boxes of 100 books, 2 packets of 10, and 8 single books. This is written as 3,428." },
        { title: "Barangay Population", content: "A small village has a population of 5,812 people." }
      ]
    },
    {
      title: "Visualizing 4-Digit Numbers",
      text: "We can visualize 4-digit numbers using blocks: a large cube is 1,000, a flat is 100, a rod is 10, and a unit is 1. We also use number discs labeled 1000, 100, 10, and 1.",
      examples: [
        { title: "Blocks for 2,345", content: "Use 2 large cubes (2,000), 3 flats (300), 4 rods (40), and 5 unit blocks (5)." },
        { title: "Discs for 6,012", content: "Place six 1000 discs, zero 100 discs, one 10 disc, and two 1 discs." }
      ]
    },
    {
      title: "The Expanded Place Value Chart",
      text: "Our place value chart now has four columns: Thousands (Th), Hundreds (H), Tens (T), and Ones (O). The position of each digit determines its place value.",
      examples: [
        { title: "Chart for 7,856", content: "Housed as: Th = 7, H = 8, T = 5, O = 6." },
        { title: "Chart for 9,042", content: "Housed as: Th = 9, H = 0, T = 4, O = 2." }
      ]
    },
    {
      title: "Place Value vs Value up to 10,000",
      text: "Place value is the position (e.g., Thousands). Value is how much the digit is worth (e.g., a 4 in the Thousands place has a value of 4,000).",
      examples: [
        { title: "Analyzing 5,632", content: "The digit 5 is in the Thousands place. Its value is 5,000." },
        { title: "Analyzing 8,140", content: "The digit 4 is in the Tens place. Its value is 40." }
      ]
    },
    {
      title: "Understanding Place Value Relationships",
      text: "Each place value column is 10 times larger than the one to its right. Ten hundreds make exactly one thousand ($10 \times 100 = 1,000$).",
      examples: [
        { title: "Ten Flats swap", content: "Swapping 10 flat blocks of 100 gives you 1 large thousands block." },
        { title: "Value comparison", content: "A digit 3 in the Thousands place (3,000) is 10 times larger than a 3 in the Hundreds place (300)." }
      ]
    },
    {
      title: "Standard Form up to 10,000",
      text: "Standard Form uses digits to write numbers. We write a comma between the thousands and hundreds digit to make reading easier (e.g., 4,320).",
      examples: [
        { title: "Writing Five Thousand Two", content: "Written in standard form as 5,002." },
        { title: "Writing Nine Thousand Eight Hundred", content: "Written in standard form as 9,800." }
      ]
    },
    {
      title: "Expanded Form up to 10,000",
      text: "Expanded Form shows the sum of the values of each digit. This helps decompose a large number into thousands, hundreds, tens, and ones.",
      examples: [
        { title: "Expanding 4,785", content: "4,785 = 4,000 + 700 + 80 + 5." },
        { title: "Expanding 8,023", content: "8,023 = 8,000 + 0 + 20 + 3 (or 8,000 + 20 + 3)." }
      ]
    },
    {
      title: "Word Form of 4-Digit Numbers",
      text: "Word Form writes the number using words. We write the number of thousands, followed by the word 'thousand', then the hundreds, tens, and ones.",
      examples: [
        { title: "Reading 3,450", content: "Written in words as 'three thousand four hundred fifty'." },
        { title: "Reading 7,009", content: "Written in words as 'seven thousand nine'." }
      ]
    },
    {
      title: "Zero as a Placeholder in 4-Digit Numbers",
      text: "Zero is vital in 4-digit numbers to hold places where there are no hundreds, tens, or ones. Without zero, 5,002 would look like 52.",
      examples: [
        { title: "Zero in Hundreds place", content: "In 8,045, the 0 indicates there are no hundreds, keeping the 8 in the thousands place." },
        { title: "Multiple Zeros", content: "In 6,000, three zeros hold the hundreds, tens, and ones places." }
      ]
    },
    {
      title: "Comparing Numbers: Leftmost Comparison",
      text: "To compare two numbers, we look at their leftmost digit (highest place value). For 4-digit numbers, we start by comparing the thousands place.",
      examples: [
        { title: "Comparing 5,300 and 4,900", content: "Since 5 thousand is greater than 4 thousand, 5,300 > 4,900." },
        { title: "Comparing 8,120 and 7,999", content: "Since 8 > 7, 8,120 > 7,999." }
      ]
    },
    {
      title: "Comparing Numbers: Equal Thousands",
      text: "If the thousands digits are equal, we move to the next place value on the right, which is the hundreds place, and compare those digits.",
      examples: [
        { title: "Comparing 3,400 and 3,200", content: "The thousands are both 3. Compare the hundreds: 4 > 2, so 3,400 > 3,200." },
        { title: "Comparing 6,800 and 6,900", content: "The thousands are both 6. Compare hundreds: 8 < 9, so 6,800 < 6,900." }
      ]
    },
    {
      title: "Comparing Numbers: Equal Hundreds",
      text: "If both thousands and hundreds are equal, we move to the tens place and compare the digits there. If they are also equal, we compare the ones.",
      examples: [
        { title: "Comparing 4,560 and 4,520", content: "Compare tens: 6 > 2, so 4,560 > 4,520." },
        { title: "Comparing 7,893 and 7,895", content: "Compare ones: 3 < 5, so 7,893 < 7,895." }
      ]
    },
    {
      title: "The Greater Than Symbol (>)",
      text: "The symbol '>' means 'is greater than'. The open mouth of the symbol always points towards the larger number.",
      examples: [
        { title: "Example 1", content: "8,500 > 6,200 (Eight thousand five hundred is greater than six thousand two hundred)." },
        { title: "Example 2", content: "1,200 > 1,150 (One thousand two hundred is greater than one thousand one hundred fifty)." }
      ]
    },
    {
      title: "The Less Than Symbol (<)",
      text: "The symbol '<' means 'is less than'. The pointed end of the symbol always points towards the smaller number.",
      examples: [
        { title: "Example 1", content: "2,300 < 4,500 (Two thousand three hundred is less than four thousand five hundred)." },
        { title: "Example 2", content: "9,002 < 9,020 (Nine thousand two is less than nine thousand twenty)." }
      ]
    },
    {
      title: "The Equal To Symbol (=)",
      text: "The symbol '=' means 'is equal to'. It shows that both sides represent the exact same numeric value.",
      examples: [
        { title: "Example 1", content: "5,400 = 5,400." },
        { title: "Example 2", content: "3,000 + 400 + 2 = 3,402." }
      ]
    },
    {
      title: "Ascending Order (Pataas)",
      text: "Ascending order means arranging numbers from the smallest to the largest value. We compare the numbers and place the smallest first.",
      examples: [
        { title: "Sorting 3 numbers", content: "Given: 4,200; 1,500; 3,800. In ascending order: 1,500; 3,800; 4,200." },
        { title: "Sorting 4 numbers", content: "Given: 8,900; 8,200; 8,500; 8,000. Ascending: 8,000; 8,200; 8,500; 8,900." }
      ]
    },
    {
      title: "Descending Order (Pababa)",
      text: "Descending order means arranging numbers from the largest to the smallest value. We place the greatest number first.",
      examples: [
        { title: "Sorting 3 numbers", content: "Given: 5,400; 9,100; 7,300. Descending order: 9,100; 7,300; 5,400." },
        { title: "Sorting 4 numbers", content: "Given: 1,200; 2,100; 1,800; 2,500. Descending: 2,500; 2,100; 1,800; 1,200." }
      ]
    },
    {
      title: "Skip Counting by 1,000s",
      text: "Skip counting by 1,000s means adding 1,000 to the previous number at each step. Only the thousands digit changes.",
      examples: [
        { title: "Starting from 1,000", content: "1,000; 2,000; 3,000; 4,000; 5,000; 6,000." },
        { title: "Starting from 3,450", content: "3,450; 4,450; 5,450; 6,450; 7,450." }
      ]
    },
    {
      title: "Skip Counting Patterns: Deeper Look",
      text: "In number sequences, find the difference between consecutive numbers to identify the skip counting rule. It could be by 10s, 100s, or 1,000s.",
      examples: [
        { title: "Analyzing 4,500; 4,600; 4,700", content: "The difference is 100. The rule is 'add 100'." },
        { title: "Analyzing 7,230; 7,240; 7,250", content: "The difference is 10. The rule is 'add 10'." }
      ]
    },
    {
      title: "Finding the Missing Term",
      text: "Once you identify the pattern's rule, you can apply it to find missing numbers in the sequence, whether in the middle or at the end.",
      examples: [
        { title: "Pattern: 2,000; 4,000; __; 8,000", content: "The rule is add 2,000. The missing term is 6,000." },
        { title: "Pattern: 9,500; 9,000; 8,500; __", content: "The rule is subtract 500. The missing term is 8,000." }
      ]
    },
    {
      title: "Comparing Digit Values in Different Numbers",
      text: "We can compare the value of the same digit across different numbers. A digit 5 in 5,200 has a value of 5,000, but in 8,500 it has a value of 500.",
      examples: [
        { title: "Comparing digit 8", content: "In 8,421, the 8 is worth 8,000. In 1,842, the 8 is worth 800. Therefore, 8,000 > 800." },
        { title: "Comparing digit 2", content: "In 2,900, the 2 is worth 2,000. In 2,100, the 2 is also worth 2,000. Their values are equal." }
      ]
    },
    {
      title: "Rounding Off to the Nearest Thousands",
      text: "To round a number to the nearest thousands, look at the hundreds digit. If it is 5 or more, round up. If it is 4 or less, round down.",
      examples: [
        { title: "Rounding 4,800", content: "The hundreds digit is 8 (5 or more). Round up to 5,000." },
        { title: "Rounding 7,240", content: "The hundreds digit is 2 (4 or less). Round down to 7,000." }
      ]
    },
    {
      title: "Rounding Off to the Nearest Hundreds",
      text: "To round a number to the nearest hundreds, look at the tens digit. If it is 5 or more, round up. If it is 4 or less, round down.",
      examples: [
        { title: "Rounding 3,462", content: "The tens digit is 6. Round up to 3,500." },
        { title: "Rounding 8,924", content: "The tens digit is 2. Round down to 8,900." }
      ]
    },
    {
      title: "Non-Routine Logic: Multi-Digit Riddles",
      text: "We can use logical constraints and inequalities to solve non-routine riddles. Let's practice analyzing clues.",
      examples: [
        { title: "Riddle 1", content: "Clue: I am a 4-digit number. I am greater than 4,000 but less than 4,100. My tens digit is 7, and my ones digit is 9. Answer: 4,079." },
        { title: "Riddle 2", content: "Clue: I am a 4-digit number. My thousands digit is 6. My hundreds digit is twice my thousands digit? No, hundreds cannot be 12. My hundreds digit is half of 6, which is 3. My tens and ones are 0. Answer: 6,300." }
      ]
    },
    {
      title: "Summary: Numbers and Comparing",
      text: "Congratulations! You have mastered place value up to 10,000, comparing using >, <, and =, ordering in ascending/descending forms, skip counting, rounding, and number logic.",
      examples: [
        { title: "Summary Checklist", content: "Th, H, T, O place values -> Compare leftmost digit -> Ascending is small to big -> Descending is big to small." },
        { title: "Next Steps", content: "We will use these comparing rules when dealing with money, measurements, and mathematical operations!" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "In the number 8,421, which digit is in the thousands place?",
          options: ["8", "4", "2", "1"],
          answer: 0
        },
    {
          type: "choice",
          q: "What is the value of the digit 7 in the number 9,754?",
          options: ["7", "70", "700", "7,000"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which represents the number 'six thousand forty-two' in standard form?",
          options: ["642", "6,042", "6,420", "6,0042"],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the expanded form of the number 8,912?",
          options: ["800 + 900 + 10 + 2", "8,000 + 900 + 10 + 2", "8,000 + 90 + 10 + 2", "8 + 9 + 1 + 2"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which relation symbol makes this statement true: 4,500 __ 4,800?",
          options: [">", "<", "=", "+"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which relation symbol makes this statement true: 7,812 __ 7,812?",
          options: [">", "<", "=", "-"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which relation symbol makes this statement true: 9,210 __ 8,999?",
          options: [">", "<", "=", "None"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which number is greater than 5,682?",
          options: ["5,600", "5,680", "5,690", "5,599"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which number is less than 3,010?",
          options: ["3,020", "3,100", "3,009", "3,011"],
          answer: 2
        },
    {
          type: "choice",
          q: "When comparing 4,321 and 4,385, which place value determines the larger number?",
          options: ["Thousands", "Hundreds", "Tens", "Ones"],
          answer: 2
        },
    {
          type: "choice",
          q: "What are these numbers arranged in ascending order: 4,800; 1,200; 3,500?",
          options: [
            "4,800; 3,500; 1,200",
            "1,200; 3,500; 4,800",
            "3,500; 1,200; 4,800",
            "1,200; 4,800; 3,500"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What are these numbers arranged in descending order: 7,200; 9,800; 8,100?",
          options: [
            "9,800; 8,100; 7,200",
            "7,200; 8,100; 9,800",
            "8,100; 9,800; 7,200",
            "9,800; 7,200; 8,100"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "Complete the pattern: 2,000; 3,000; 4,000; __; 6,000",
          options: ["4,500", "5,000", "5,500", "7,000"],
          answer: 1
        },
    {
          type: "choice",
          q: "Complete the pattern: 7,500; 7,600; 7,700; __; 7,900",
          options: ["7,750", "7,800", "7,850", "8,000"],
          answer: 1
        },
    {
          type: "choice",
          q: "What is 4,380 rounded to the nearest thousands?",
          options: ["4,000", "5,000", "4,400", "4,300"],
          answer: 0
        },
    {
          type: "choice",
          q: "What is 7,850 rounded to the nearest thousands?",
          options: ["7,000", "8,000", "7,900", "7,800"],
          answer: 1
        },
    {
          type: "choice",
          q: "What is 5,462 rounded to the nearest hundreds?",
          options: ["5,000", "5,400", "5,500", "6,000"],
          answer: 2
        },
    {
          type: "choice",
          q: "In which of the following numbers does the digit 3 have the greatest value?",
          options: ["1,230", "3,402", "1,352", "9,813"],
          answer: 1
        },
    {
          type: "choice",
          q: "How is 8,005 written in word form?",
          options: ["Eight thousand fifty", "Eight thousand five", "Eight hundred five", "Eighty thousand five"],
          answer: 1
        },
    {
          type: "choice",
          q: "If you count backwards by 1,000s starting from 9,500, what is the next number?",
          options: ["9,400", "8,500", "7,500", "9,000"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which place value is 10 times larger than the Thousands place?",
          options: ["Hundreds", "Ten Thousands", "Ones", "Millions"],
          answer: 1
        },
    {
          type: "choice",
          q: "What number is represented by 4 large cubes, 7 flats, 0 rods, and 9 unit cubes?",
          options: ["479", "4,790", "4,709", "4,079"],
          answer: 2
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: The standard form of eight thousand forty-two is 8,042.",
            "Statement B: The standard form of eight thousand forty-two is 8,420."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "What number is missing in the pattern: 4,000; 4,250; 4,500; __; 5,000?",
          answer: "4750"
        },
    {
          type: "choice",
          q: "Which comparison symbol correctly fits in the blank: 8,450 ___ 8,504?",
          options: [">", "<", "=", "+"],
          answer: 1
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "I am a 4-digit number. My thousands digit is 7. My hundreds digit is 2 less than my thousands digit. My tens digit is 0. My ones digit is 3 more than my hundreds digit. What number am I?",
      options: ["7,508", "7,505", "7,208", "7,205"],
      answer: 0
    },
    {
      type: "choice",
      q: "Arrange these numbers in descending order: 8,420; 8,402; 8,450; 8,042.",
      options: [
        "8,450; 8,420; 8,402; 8,042",
        "8,042; 8,402; 8,420; 8,450",
        "8,450; 8,402; 8,420; 8,042",
        "8,420; 8,450; 8,402; 8,042"
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "If you add the value of 3 in 3,421 to the value of 5 in 1,582, what is the sum?",
      options: ["3,500", "3,050", "8,000", "800"],
      answer: 0
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: 6,854 rounded to the nearest thousands is 7,000, and rounded to the nearest hundreds is 6,900.",
        "Statement B: 6,854 rounded to the nearest thousands is 6,000, and rounded to the nearest hundreds is 6,800."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "I am a 4-digit number. My thousands digit is 4. My hundreds digit is 8. My tens digit is greater than 5 but less than 7. My ones digit is 0. What is my standard form?",
      answer: "4860"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Comparing Numbers Game",
        desc: "Get a sheet of paper and write down three pairs of 4-digit numbers. Use >, <, or = to compare them. Underline the place value digit that helped you decide which number is larger for each pair. Present your sheet to your teacher or parent.",
        labels: ["Three correct number pairs compared with symbols", "Correct digit underlined showing the decision point", "Neatness of writing and explanation"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Comparing Numbers</h3>\n                  <p class=\"ws-instruction\">Compare the numbers using the comparison symbols: <strong>&lt;</strong>, <strong>&gt;</strong>, or <strong>=</strong>.</p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 18px;\">\n                    <div style=\"margin-bottom: 20px;\">1. &nbsp; 4,567 &nbsp; [ &nbsp; <span class=\"ws-answer\">&lt;</span> &nbsp; ] &nbsp; 4,576</div>\n                    <div style=\"margin-bottom: 20px;\">2. &nbsp; 8,901 &nbsp; [ &nbsp; <span class=\"ws-answer\">&gt;</span> &nbsp; ] &nbsp; 8,099</div>\n                    <div style=\"margin-bottom: 20px;\">3. &nbsp; 3,240 &nbsp; [ &nbsp; <span class=\"ws-answer\">=</span> &nbsp; ] &nbsp; 3,240</div>\n                    <div style=\"margin-bottom: 20px;\">4. &nbsp; 7,112 &nbsp; [ &nbsp; <span class=\"ws-answer\">&lt;</span> &nbsp; ] &nbsp; 7,121</div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Ordering Numbers</h3>\n                  <p class=\"ws-instruction\">Arrange the following set of numbers in descending order (largest to smallest) in the writing lines below.</p>\n                  \n                  <div style=\"font-size: 16px; margin-bottom: 20px; font-weight: bold; text-align: center;\">\n                    5,678 &nbsp; | &nbsp; 5,867 &nbsp; | &nbsp; 5,687 &nbsp; | &nbsp; 5,876\n                  </div>\n                  \n                  <div class=\"ws-item-row\" style=\"margin-top: 30px;\">\n                    <div>Your Answer:</div>\n                    <div class=\"writing-line\" style=\"margin-top: 20px; width: 80%;\"><span class=\"ws-answer\">5,876 &gt; 5,867 &gt; 5,687 &gt; 5,678</span></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Comparing Numbers</h3>\n                  <p class=\"ws-instruction\">Write &lt;, &gt;, or = inside the boxes using your stylus to compare the numbers.</p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 18px; margin-top: 25px; text-align: center;\">\n                    <div style=\"margin-bottom: 30px;\">4,562 &nbsp; &nbsp; [ &nbsp; <span class=\"ws-answer\">&lt;</span> &nbsp; ] &nbsp; &nbsp; 4,582</div>\n                    <div style=\"margin-bottom: 30px;\">8,901 &nbsp; &nbsp; [ &nbsp; <span class=\"ws-answer\">&gt;</span> &nbsp; ] &nbsp; &nbsp; 8,091</div>\n                    <div style=\"margin-bottom: 30px;\">3,450 &nbsp; &nbsp; [ &nbsp; <span class=\"ws-answer\">=</span> &nbsp; ] &nbsp; &nbsp; 3,450</div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK2_DATA.science = {
  "color": "#10b981",
  "icon": "🔬",
  "title": "Science",
  "subtitle": "Week 2: Exploring and Tinkering with Materials Safely",
  "slides": [
    {
      "title": "Safe Tinkering",
      "text": "Tinkering means exploring and playing with materials to see how they work. When tinkering, we must always follow safety rules, such as carrying scissors pointing down and cleaning up our workspace.",
      "examples": [
        {
          "title": "Using Scissors",
          "content": "Always cut away from your body and hold the blades closed when passing them to others."
        },
        {
          "title": "Modeling Clay",
          "content": "Wash hands after shaping clay to keep clean and prevent ingestion."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 1)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 2)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 3)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 4)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 5)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 6)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 7)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 8)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 9)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 10)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 11)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 12)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 13)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 14)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 15)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 16)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 17)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 18)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 19)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 20)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 21)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 22)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 23)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 24)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 25)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
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
    "desc": "Create an entry in your notebook explaining Exploring and Tinkering with Materials Safely. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Science Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Exploring and Tinkering with Materials Safely? <span class=\"ws-answer\">Understanding and applying Exploring and Tinkering with Materials Safely in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK2_DATA.english = {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 2: CCVC Words, Verbs & Interrogative Pronouns",
  "slides": [
    {
      "title": "CCVC Words",
      "text": "CCVC stands for Consonant-Consonant-Vowel-Consonant. These words start with two consonants (consonant blend) followed by a vowel and consonant, like 'frog', 'plug', or 'drum'.",
      "examples": [
        {
          "title": "The word Frog",
          "content": "F, R (consonants) - O (vowel) - G (consonant)."
        },
        {
          "title": "The word Drum",
          "content": "D, R (consonants) - U (vowel) - M (consonant)."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 1)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 2)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 3)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 4)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 5)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 6)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 7)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 8)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 9)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 10)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 11)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 12)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 13)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 14)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 15)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 16)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 17)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 18)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 19)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 20)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 21)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 22)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 23)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 24)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 25)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
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
    "desc": "Create an entry in your notebook explaining CCVC Words, Verbs & Interrogative Pronouns. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>English Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of CCVC Words, Verbs & Interrogative Pronouns? <span class=\"ws-answer\">Understanding and applying CCVC Words, Verbs & Interrogative Pronouns in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK2_DATA.filipino = {
  "color": "#ec4899",
  "icon": "🗣️",
  "title": "Filipino",
  "subtitle": "Week 2: Kasarian ng Pangngalan at Pandiwa",
  "slides": [
    {
      "title": "Kasarian ng Pangngalan",
      "text": "May apat na kasarian ang pangngalan: Panlalaki (lalaki), Pambabae (babae), Di-tiyak (maaaring lalaki o babae), at Walang Kasarian (mga bagay o walang buhay).",
      "examples": [
        {
          "title": "Halimbawa",
          "content": "Panlalaki: ama, hari. Pambabae: ina, reyna."
        },
        {
          "title": "Iba pa",
          "content": "Di-tiyak: guro, sanggol. Walang Kasarian: lamesa, aklat."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 1)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 2)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 3)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 4)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 5)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 6)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 7)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 8)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 9)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 10)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 11)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 12)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 13)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 14)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 15)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 16)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 17)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 18)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 19)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 20)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 21)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 22)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 23)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 24)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 25)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
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
    "desc": "Create an entry in your notebook explaining Kasarian ng Pangngalan at Pandiwa. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Filipino Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Kasarian ng Pangngalan at Pandiwa? <span class=\"ws-answer\">Understanding and applying Kasarian ng Pangngalan at Pandiwa in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK2_DATA.makabansa = {
  "color": "#f59e0b",
  "icon": "🏝️",
  "title": "Makabansa",
  "subtitle": "Week 2: Mga Lokal na Bayani at Pinuno sa Ating Pook",
  "slides": [
    {
      "title": "Mga Bayani at Pinuno sa Ating Pook",
      "text": "Ang bawat komunidad ay may mga natatanging tao na naglingkod o nagpakita ng kabayanihan. Sila ay maaaring mga lokal na bayani, pinuno ng barangay, o mga guro at manggagamot na tumulong sa iba.",
      "examples": [
        {
          "title": "Lokal na Bayani",
          "content": "Mga taong lumaban para sa kalayaan ng pook o nagtatag ng unang pamayanan."
        },
        {
          "title": "Pinuno",
          "content": "Ang Kapitan ng Barangay at mga Kagawad na nagpapanatili ng kapayapaan."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 1)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 2)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 3)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 4)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 5)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 6)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 7)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 8)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 9)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 10)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 11)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 12)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 13)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 14)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 15)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 16)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 17)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 18)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 19)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 20)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 21)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 22)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 23)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 24)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 25)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
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
    "desc": "Create an entry in your notebook explaining Mga Lokal na Bayani at Pinuno sa Ating Pook. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Makabansa Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Mga Lokal na Bayani at Pinuno sa Ating Pook? <span class=\"ws-answer\">Understanding and applying Mga Lokal na Bayani at Pinuno sa Ating Pook in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK2_DATA.gmrc = {
  "color": "#06b6d4",
  "icon": "🧘‍♂️",
  "title": "GMRC",
  "subtitle": "Week 2: Paglinang ng Tiwala sa Sarili sa Ating Kakayahan",
  "slides": [
    {
      "title": "Pagpapaunlad ng Hilig",
      "text": "Maaari nating mapaunlad ang ating mga hilig at talento sa pamamagitan ng pagsasanay araw-araw at hindi pagkuha ng takot sa tuwing nagkakamali.",
      "examples": [
        {
          "title": "Pagsasanay",
          "content": "Kung hilig mo ang gumuhit, maglaan ng oras araw-araw upang magsanay."
        },
        {
          "title": "Lakas ng Loob",
          "content": "Ibahagi ang iyong talento sa iba sa pamamagitan ng pagpapakita nito sa paaralan."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 1)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 2)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 3)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 4)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 5)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 6)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 7)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 8)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 9)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 10)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 11)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 12)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 13)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 14)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 15)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 16)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 17)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 18)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 19)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 20)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 21)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 22)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 23)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 24)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 25)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
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
    "desc": "Create an entry in your notebook explaining Paglinang ng Tiwala sa Sarili sa Ating Kakayahan. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>GMRC Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Paglinang ng Tiwala sa Sarili sa Ating Kakayahan? <span class=\"ws-answer\">Understanding and applying Paglinang ng Tiwala sa Sarili sa Ating Kakayahan in real life.</span></div></div>\n               </div>"
    ]
  }
};

window.WEEK2_DATA.reading = {
  "monday": {
    "type": "Short Story",
    "title": "The Crow and the Pitcher",
    "slides": [
      {
        "title": "Story: The Crow and the Pitcher - Part 1",
        "text": "On a hot summer day, a very thirsty Crow flew all over the dry fields looking for water. The ground was baked hard, and the rivers were completely dry. For a very long time, she found nothing and felt like she would collapse from thirst. Just as she was about to lose hope, she spotted a large clay water pitcher sitting on a garden table. She flew down quickly and looked inside. There was indeed some clear water at the bottom, but the pitcher was deep and its neck was extremely narrow. No matter how she twisted her head, her beak could not reach the water. She tried to knock the pitcher over, but it was too heavy and did not budge at all. She was very frustrated and did not know what to do next. The Crow was extremely tired and felt her throat burning with thirst. She searched every corner of the garden, hoping to find a puddle or a water bowl, but the dry summer heat had evaporated every drop. When she saw the pitcher, she flew down with hope, but her disappointment was great when she realized she could not reach the water."
      },
      {
        "title": "Story: The Crow and the Pitcher - Part 2",
        "text": "The Crow did not despair or give up. She stood still and looked around for a solution. She saw some small, smooth pebbles lying on the gravel path nearby. A clever idea came to her mind. She picked up one small pebble in her beak and carried it to the pitcher. She dropped the pebble inside. Then, she picked up another pebble and dropped it in. She kept doing this, walking back and forth, picking up pebbles one by one. It was hard, slow work, and she was very tired. But she did not stop. With each pebble she dropped into the pitcher, the water level at the bottom slowly rose a tiny bit higher. The pebbles were replacing the empty space inside, forcing the water upwards. She was patient and did not lose hope. She knew that if she worked steadily, she could find a way. So she walked back and forth, picking up the small stones and dropping them one by one into the pitcher. It was a long and exhausting task, but she kept going, showing that persistence is key to overcoming difficult obstacles."
      },
      {
        "title": "Story: The Crow and the Pitcher - Part 3",
        "text": "She dropped twenty, thirty, forty pebbles into the pitcher. Gradually, the water level rose up the narrow neck of the clay container. Finally, the cool water reached the very top of the pitcher! The thirsty Crow dipped her beak in and drank happily until she was no longer thirsty. She felt refreshed and strong again. She chirped in joy and flew back into the sky. She proved that even a small bird can solve a big problem if she stays patient, works hard, and thinks creatively. The other birds watched in wonder. She showed everyone that determination and resourcefulness can help us overcome any difficult situation in our lives. We must never give up when things are hard. The water was cool and refreshing, and the Crow drank until she was fully satisfied. She felt her energy return and was ready to fly again. She proved that intelligence and hard work are more powerful than force. The other birds in the garden watched her and learned that patience and clever thinking can solve the hardest problems."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Pitcher - A container for holding and pouring liquids.\n• Narrow - Thin or small width.\n• Despair - Lose hope.\n• Pebble - A small, smooth, round stone.\n\nObserve how 'gravel' refers to a collection of tiny stones."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Why couldn't the Crow drink the water when she first found the pitcher?\n2. What objects did the Crow drop into the pitcher?\n3. What happened to the water level as more pebbles were added?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Resourcefulness and Problem Solving.\n\nNecessity is the mother of invention. Where there is a will, there is a way. When we face a difficult challenge, thinking creatively and working step-by-step can help us find a solution.\n\nDiscuss: When was a time you solved a tricky problem by trying a different idea?"
      }
    ]
  },
  "tuesday": {
    "type": "Poem",
    "title": "The Starry Night",
    "slides": [
      {
        "title": "Poem: The Starry Night - Part 1",
        "text": "The stars shine bright like diamonds in the sky,\nAs the silver moon goes sailing slowly by.\nThey blink their eyes and whisper from above,\nSending the sleeping world a song of love.\n\nWhen the sun sets, the night sky transforms into a beautiful canvas of twinkling lights. Thousands of stars appear, shining like tiny lanterns in the darkness. The silver moon moves gracefully across the sky, casting a soft, gentle glow over the houses and trees below. It feels like the entire universe is singing a quiet, peaceful lullaby to help the world rest. The night is quiet, and the air is cool. I look up from my window and marvel at the vastness of the sky, wondering about the distant worlds shining so far away in the dark, blinking like little eyes in the deep space. twinkling like little eyes in the deep space. The night sky is a beautiful map of stars that has existed for billions of years. When we look up, we are seeing the light of stars that are very far away. It makes us feel small but also connected to the vast and wonderful universe that surrounds our Earth."
      },
      {
        "title": "Poem: The Starry Night - Part 2",
        "text": "The dark blue sky is like a blanket spread,\nTo keep us warm and safe inside our bed.\nUntil the golden sun begins to rise,\nAnd wakes us up to open wide our eyes.\n\nThe deep blue sky stretches out above us, acting like a giant, soft blanket that wraps around the entire Earth. It makes me feel safe and protected as I sleep in my cozy bed. The twinkling stars seem to watch over us like guardians. But the night does not last forever. Soon, the dark sky begins to fade, replaced by soft pink and orange colors. The golden sun climbs slowly into the sky, sending warm rays of light to wake up the sleeping animals and children. It is time to start a new day of play and study. We open our eyes and welcome the bright morning light. We open our eyes and welcome the bright morning light. The sun brings warmth and light, helping plants grow and giving energy to all living things. The transition from the quiet, dark night to the active, bright day is a natural rhythm that repeats every single day, keeping our world balanced and healthy."
      },
      {
        "title": "Poem: The Starry Night - Part 3",
        "text": "We see the moon changes shape day by day,\nSometimes a crescent, sometimes round and gray.\nBut stars remain to guide us in the dark,\nTwinkling above the quiet meadow and park.\n\nThe moon is a wonderful sight to watch. Some nights it looks like a thin, curved silver banana, which we call a crescent moon. On other nights, it is a big, round, bright circle. Even though the moon changes its shape, the stars are always there, constant and reliable. Long ago, sailors used the positions of the stars to find their way across the dark oceans. Today, we look at the same stars and dream of traveling into space. The night sky is a source of guide, beauty, science, and endless wonder for all of us. It makes our dreams fly high and inspires us to learn astronomy. It makes our dreams fly high and inspires us to learn astronomy. By studying the stars, we can learn about gravity, light, and the history of our solar system. The moon's phases also teach us about how the Earth and moon move around the sun. The night sky is a giant science classroom waiting for us to explore it."
      },
      {
        "title": "Rhyme & Metaphor",
        "text": "Phonics Focus: Rhyming Pairs & Similes\n• Rhymes: sky / by, above / love, spread / bed, rise / eyes\n• Simile: 'stars shine bright like diamonds' (comparing stars to diamonds using 'like').\n• Simile: 'sky is like a blanket spread' (comparing the sky to a warm blanket)."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What are the stars compared to in the poem?\n2. What is the moon compared to doing in the sky?\n3. What color is the sun when it starts to rise?"
      },
      {
        "title": "Moral Focus: Nature Appreciation",
        "text": "The natural world is full of beauty and peace. Taking a moment to look at the night sky helps us relax, appreciate the universe, and prepare for a restful sleep.\n\nDiscuss: What is your favorite thing to observe in nature during the day or night?"
      }
    ]
  },
  "wednesday": {
    "type": "Tongue Twisters",
    "title": "Brave Brown Bears",
    "slides": [
      {
        "title": "Tongue Twister Fun - Part 1",
        "text": "Welcome back to our fun speech gym! Today we will visit a magical forest where brave brown bears live. These bears are very smart and hardworking. Brave brown bears build big wooden bridges. Big bridges are built by brave brown bears. The bears carry heavy logs to build bridges over the fast rivers. Let's try saying this together rapidly: 'Brave brown bears build big bridges. Big bridges are built by brave brown bears.' Make sure you make a strong /b/ sound by pressing your lips tightly together before releasing the air. Say it three times, starting slowly and then speeding up! It is a great way to train your mouth muscles for reading and speaking clearly in front of your classmates at school. To make a strong sound, we must practice saying these words slowly first. The bears worked together as a team, carrying the heavy logs and placing them carefully. They showed that cooperation and hard work can help us build strong structures and complete difficult tasks that we cannot do alone. It was a great lesson in teamwork."
      },
      {
        "title": "Tongue Twister Fun - Part 2",
        "text": "Now, let's meet Danny and his playful pet. Danny has a dirty dog who loves to dig in the garden. Danny's dirty dog dug deep holes in the dirt. Did Danny's dirty dog dig deep holes? Yes, he did! He dug holes to hide his bones and toys. Let's practice our 'D' sounds: 'Danny's dirty dog dug deep holes. Did Danny's dirty dog dig deep holes?' To make a clean /d/ sound, place the tip of your tongue against the roof of your mouth, right behind your front teeth, and release the air with your voice. Try saying it three times without getting your tongue twisted. Polly the puppy watched Danny's dog and barked happily in the warm sun. It was a funny sight. To make a clean sound, practice repeating these words with your friends. The puppy loved to chase the dog around the yard, making a lot of noise. They had so much fun playing in the dirt under the shade of the big trees, showing that playing and exercising outdoors is good for our health and happiness."
      },
      {
        "title": "Tongue Twister Fun - Part 3",
        "text": "Our final challenge is about Betty Botter, a baker who bought some butter. Betty Botter bought some fresh butter. But, she said, this butter's bitter! If I put it in my batter, it will make my batter bitter. But a bit of better butter will make my batter better. So she bought a bit of butter, better than her bitter butter, and she baked it in her batter, and her batter was not bitter! Let's also bake big batches of brown bread. Brown bread baked in big batches by the bears. Let's say: 'Bake big batches of brown bread.' Say it as fast as you can! Practicing these tongue twisters daily makes your speech very clear, helpful, and confident. You will speak like a professional speaker. Practicing these tongue twisters daily is a wonderful way to improve our pronunciation and build speaking confidence. It helps us speak clearly when we read stories, answer questions in class, or talk to our friends. Remember to breathe and speak slowly at first, then increase your speed as you get better."
      },
      {
        "title": "Speech & Pronunciation Practice",
        "text": "Phonics Focus: Contrasting /b/ and /d/\n• /b/ (Bilabial): Close both lips together, then release air with voice (e.g., 'bears', 'bridges', 'bread').\n• /d/ (Alveolar): Place the tip of your tongue against the roof of your mouth behind your teeth, then release air with voice (e.g., 'Danny', 'dog', 'dug').\n\nPracticing these keeps our tongue and lips nimble!"
      },
      {
        "title": "Comprehension & Speech Tasks",
        "text": "Tasks:\n1. Read Twister 1 and Twister 4 aloud three times, increasing speed.\n2. Say Twister 2 without letting your tongue slip on 'd'.\n3. What did Betty Botter buy, and what was wrong with it?"
      },
      {
        "title": "Focus: Practice & Focus",
        "text": "Tongue twisters help improve reading speed and speech clarity. Practice daily to train your speech muscles and build confidence.\n\nDiscuss: Why do news announcers and actors practice tongue twisters before going on air?"
      }
    ]
  },
  "thursday": {
    "type": "Short Biography",
    "title": "Thomas Edison: The Curious Inventor",
    "slides": [
      {
        "title": "Biography: Thomas Edison - Part 1",
        "text": "As a young boy in Ohio, USA, Thomas Edison was very curious but had many difficulties. He developed hearing problems after an illness, making it hard for him to listen. In school, his teacher thought he was too slow to learn because he asked too many questions instead of copying notes. Seeing this, his loving mother took him out of school and decided to teach him at home. Thomas loved reading science and history books. He was fascinated by chemical experiments. He saved his pocket money to buy jars, tubes, and chemicals, and set up his very first chemistry laboratory in the cellar of his house. He spent all his free time experimenting there, wanting to discover new facts about nature. Thomas's mother was very patient and encouraging. She believed in her son's abilities and helped him study science, history, and math. She allowed him to explore his interests and conduct experiments, which helped him develop his curiosity and love for learning. He learned that asking questions is the first step to making new discoveries."
      },
      {
        "title": "Biography: Thomas Edison - Part 2",
        "text": "When he grew up, Thomas became a full-time inventor, creating a famous laboratory in Menlo Park, New Jersey. He wanted to invent a safe, clean, and cheap electric light bulb to replace dirty oil lamps. He knew it was possible, but he needed to find the right material for the filament—the thin wire inside the bulb that glows when heated. He and his team tested thousands of different materials, including metal wires, paper, plants, and even hair! None of them lasted long enough; they all burned up in a few minutes. People laughed at him and said he was failing. But Thomas remained patient and focused on his goal, never letting the jokes bother him. Thomas and his team worked long hours in the laboratory, testing different types of materials. They did not let the failures discourage them. They knew that each failed test brought them closer to finding the right material. This showed that scientific invention requires a lot of patience, hard work, and determination."
      },
      {
        "title": "Biography: Thomas Edison - Part 3",
        "text": "Thomas Edison did not give up. When a reporter asked him about his failures, he famously said, 'I have not failed. I've just found 10,000 ways that won't work.' Eventually, after testing over six thousand materials, he found that a carbonized bamboo thread worked perfectly, glowing for over forty hours! This was the first practical electric light bulb. Edison went on to invent many other amazing things, including the phonograph (the first record player) and the motion picture camera for movies. He held over one thousand patents! He proved that resilience, curiosity, and hard work are the keys to scientific discovery and changing the world for the better. He is a great example of dedication. Edison's inventions changed the way people lived all over the world. His electric light bulb allowed people to work, study, and play safely at night, while his phonograph brought music into people's homes. He showed that anyone can be an inventor if they have a curious mind, work hard, and never give up when faced with challenges."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Cellar - An underground room, often used for storage.\n• Inventor - A person who creates new things or processes.\n• Filament - A thin wire inside a light bulb that glows when heated.\n• Bamboo - A fast-growing woody grass."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. Who taught Thomas Edison at home after he struggled in school?\n2. What did Edison say when people told him he was failing to make a light bulb?\n3. Name two other inventions Edison created besides the electric light bulb."
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Resilience and Learning from Failure.\n\nFailure is not the opposite of success; it is a step along the way. Every mistake we make teaches us what doesn't work, helping us get closer to what does work. Keep trying!\n\nDiscuss: When is a time you made a mistake on a school task, and what did you learn from it?"
      }
    ]
  },
  "friday": {
    "type": "Fable",
    "title": "The Wind and the Sun",
    "slides": [
      {
        "title": "Fable: The Wind and the Sun - Part 1",
        "text": "The North Wind and the Sun had a big argument about who was the stronger of the two. They argued for days, each claiming they had more power over nature. To settle the dispute, they agreed to test their strength on a traveler who was walking down a dusty road. Whoever could force the traveler to take off his warm, heavy cloak would be declared the winner. The North Wind took his turn first. He gathered all his air and blew as hard as he could. He whistled through the trees, howled over the hills, and sent cold blasts of air straight at the traveler, trying to rip the cloak away by force. But the traveler did not let go. The Wind believed that force and power were the only ways to show strength. He wanted to prove that he could control everything with his strong blasts. But he did not realize that true strength is not about being loud or violent, but about having a gentle and positive influence on others."
      },
      {
        "title": "Fable: The Wind and the Sun - Part 2",
        "text": "However, the harder the Wind blew and the colder the air became, the tighter the traveler wrapped his heavy cloak around his shoulders. He held onto it with both hands, shivering and walking slowly. The Wind blew and blew until he was completely tired out. Disappointed and weak, the Wind gave up his turn. Then, it was the Sun's turn. The Sun did not use force or noise. He simply shone warmly and gently through the clouds. His warm rays filled the air and touched the traveler's face. Soon, the traveler stopped shivering. He felt the pleasant warmth of the sun and unbuttoned his cloak, feeling the calm breeze. The Sun's warmth was gentle and pleasant, making the traveler feel comfortable and relaxed. The traveler did not feel threatened or forced, so he naturally decided to adjust his clothing. This showed that gentleness can make people cooperate willingly, while force only makes them resist and hold on tighter."
      },
      {
        "title": "Fable: The Wind and the Sun - Part 3",
        "text": "The Sun continued to shine, getting a little warmer and brighter. The day became hot, and the air was calm. The traveler began to sweat under the heavy wool cloak. Finally, he could stand the heat no longer. He took off his cloak completely, threw it over his shoulder, and ran to sit under the cool shade of a tree by the road. The Sun had won the contest easily without any noise or violence! The Wind watched in silence. The Sun proved that gentleness, warmth, and kind persuasion can achieve much more than force, anger, and harsh demands. We can apply this lesson in our daily lives when talking to others and resolving disagreements. The Wind apologized to the Sun and admitted that he was wrong. He learned that being gentle and kind is much more effective than being angry and forceful. This story teaches us to treat others with kindness and respect, using polite words and understanding to resolve our problems and work together peacefully. Gentleness always succeeds where force fails."
      },
      {
        "title": "Vocabulary & Word Study",
        "text": "Vocabulary:\n• Settle - Resolve or reach an agreement.\n• Traveler - A person who is traveling.\n• Cloak - A loose outer garment or coat.\n• Howling - Making a loud, wailing noise (like wind or animals)."
      },
      {
        "title": "Comprehension Questions",
        "text": "Questions:\n1. What was the contest between the Wind and the Sun?\n2. What did the traveler do when the Wind blew harder?\n3. How did the Sun get the traveler to take off his cloak?"
      },
      {
        "title": "Moral Lesson & Reflection",
        "text": "Moral Focus: Gentleness and Persuasion.\n\nGentleness and kind persuasion achieve more than force and anger. We can often convince others to cooperate by being warm, polite, and helpful rather than using harsh demands.\n\nDiscuss: How can you use kind words to ask a friend to share a toy or game?"
      }
    ]
  },
  "saturday": {
    "type": "Alamat (Legend)",
    "title": "Si Malakas at si Maganda",
    "slides": [
      {
        "title": "Kuwento: Si Malakas at si Maganda - Bahagi 1",
        "text": "Noong unang panahon, wala pang lupa at tao sa mundo. Ang mayroon lamang ay ang asul na langit, ang malawak na karagatan, at isang makapangyarihang ibon na lumilipad sa pagitan nito. Isang araw, naging pagod ang ibon sa paglipad at nagpasya na lumikha ng mga isla upang may masilungan. Nang magkaroon ng mga pulo, tumubo ang iba't ibang halaman, kabilang ang isang napakalaking puno ng kawayan sa pampang. Habang namamasyal ang ibon sa tabi ng mga kawayan, narinig niya ang isang kakaibang katok mula sa loob ng isang malaking kawayan. 'Tok! Tok! Tok!' Parang may humihingi ng tulong mula sa loob nito."
      },
      {
        "title": "Kuwento: Si Malakas at si Maganda - Bahagi 2",
        "text": "Dahil sa kuryusidad, tinuka ng ibon ang makapal na kawayan hanggang sa mabiyak ito sa gitna. Laking gulat ng ibon nang lumabas ang dalawang magagandang nilalang mula sa loob ng kawayan. Ang una ay isang lalaki na matikas, matapang, at may malalaking kalamnan. Tinawag niya ang kanyang sarili na si Malakas. Ang pangalawa ay isang napakagandang babae na may mahabang buhok, mayumi, at mahinhin kumilos. Tinawag niya ang kanyang sarili na si Maganda. Sila ang mga kauna-unahang tao na nanirahan sa mga isla ng Pilipinas. Pinakita nila sa ibon ang kanilang pasasalamat sa pagpapalaya sa kanila sa madilim na kawayan."
      },
      {
        "title": "Kuwento: Si Malakas at si Maganda - Bahagi 3",
        "text": "Nagtulungan sina Malakas at Maganda upang magtayo ng kanilang tirahan at maghanap ng pagkain. Si Malakas ang nagputol ng mga puno at nagtayo ng matibay na kubo upang maprotektahan sila sa bagyo at init, habang si Maganda naman ang nag-alaga sa kanilang bakuran at nagtanim ng mga halamang-gamot. Nagsimula silang magkaroon ng pamilya at nagturo sa kanilang mga anak ng kahalagahan ng paggawa, respeto, at pagkakaisa sa komunidad. Sila ang pinagmulan ng lahing Pilipino, na kilala sa pagiging matatag tulad ni Malakas at mapagmahal sa sining at kapayapaan tulad ni Maganda."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Matikas - Malakas ang pangangatawan at may magandang tindig.\n• Kawayan - Isang matibay na uri ng damo na parang kahoy na ginagamit sa pagtatayo ng bahay.\n• Mayumi - Mahinhin o magandang kumilos.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'm' sa 'malakas', 'maganda', at 'mundo'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Saan nagmula sina Malakas at Maganda ayon sa alamat?\n2. Ano ang mga katangian ni Malakas at Maganda?\n3. Paano sila nagtulungan sa kanilang bagong tahanan?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang pagkakaisa ng lakas at kagandahan ay nagdudulot ng magandang komunidad.\n\nAng bawat tao ay may kani-kaniyang talento at lakas na dapat gamitin para sa kabutihan ng pamilya. Ang pagtutulungan ng bawat kasapi ng pamilya ay susi sa masayang tahanan.\n\nDiscuss: Ano ang iyong sariling lakas na maaari mong ibahagi upang makatulong sa pamilya?"
      }
    ]
  },
  "sunday": {
    "type": "Maikling Kuwento (Short Story)",
    "title": "Ang Kuneho at ang Pagong",
    "slides": [
      {
        "title": "Kuwento: Ang Kuneho at ang Pagong - Bahagi 1",
        "text": "Isang umaga sa kagubatan, nagyabang si Kuneho sa kanyang bilis sa harap ng iba pang mga hayop. 'Walang sinuman sa kagubatan ang makakatalo sa akin sa takbuhan!' sigaw niya habang tumatalon-talon. Nang marinig ito ni Pagong, lumapit siya nang dahan-dahan at sinabi, 'Tinatanggap ko ang iyong hamon, Kuneho. Magpaligsahan tayo sa susunod na Linggo.' Tumawa nang malakas si Kuneho at sinabing, 'Nababaliw ka ba, Pagong? Ang bagal mo kayang maglakad!' Ngunit pumayag pa rin si Kuneho dahil nais niyang ipakita sa lahat ang kanyang bilis. Nagtakda sila ng ruta sa kagubatan patungo sa tuktok ng bundok."
      },
      {
        "title": "Kuwento: Ang Kuneho at ang Pagong - Bahagi 2",
        "text": "Nagsimula ang karera sa hudyat ng kuwago. Agad na tumakbo nang napakabilis si Kuneho at nawala sa paningin ng mga hayop. Samantala, si Pagong naman ay nagsimulang maglakad nang dahan-dahan, hakbang-hakbang nang walang hinto. Nang malapit na si Kuneho sa dulo, lumingon siya at nakitang napakalayo pa ni Pagong. 'Matutulog muna ako sa ilalim ng punong ito dahil napakabagal ni Pagong,' sabi ni Kuneho sa sarili. Humiga si Kuneho sa malambot na damo at mabilis na nakatulog dahil sa hanging malamig. Samantala, patuloy pa rin sa paglalakad si Pagong sa ilalim ng mainit na araw."
      },
      {
        "title": "Kuwento: Ang Kuneho at ang Pagong - Bahagi 3",
        "text": "Lumipas ang ilang oras. Nagpatuloy si Pagong sa paglalakad nang walang tigil hanggang sa malagpasan niya ang natutulog na si Kuneho. Nang magising si Kuneho, nagulat siya nang makitang malapit na si Pagong sa dulo ng karera. Tumakbo si Kuneho nang buong lakas, ngunit huli na ang lahat! Naabot na ni Pagong ang linya ng tagumpay at sumigaw sa tuwa ang mga hayop. Nahiya si Kuneho sa kanyang kayabangan at humingi ng paumanhin kay Pagong. Napatunayan ni Pagong na ang tiyaga at determinasyon ay mas mahalaga kaysa sa bilis na walang pagpapakumbaba."
      },
      {
        "title": "Talasalitaan at Pag-aaral ng Salita",
        "text": "Mga Bokabularyo:\n• Nagyabang - Nagmalaki o ipinakita ang sariling galing nang may kasamang pagmamataas.\n• Ruta - Daanan o direksyon ng paglalakbay.\n• Determinasyon - Katatagan ng loob upang maabot ang layunin.\n\nTutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'k' sa 'kuneho', 'karera', at 'kagubatan'."
      },
      {
        "title": "Mga Tanong sa Pag-unawa",
        "text": "Mga Tanong:\n1. Bakit tinanggap ni Pagong ang hamon ni Kuneho kahit alam niyang mabagal siya?\n2. Ano ang ginawa ni Kuneho habang tumatakbo sa karera?\n3. Sino ang nanalo sa paligsahan, at paano niya ito nagawa?"
      },
      {
        "title": "Mabuting Aral at Pagninilay",
        "text": "Kaisipan: Ang tiyaga at pagpapakumbaba ay susi sa tagumpay.\n\nHuwag maliitin ang kakayahan ng iba kahit sa tingin mo ay mas magaling ka. Ang patuloy na pagsisikap nang may katapatan ay nagdadala ng tunay na panalo.\n\nTalakayin: Ano ang gagawin mo kapag nahihirapan ka sa isang aralin sa paaralan?"
      }
    ]
  }
};

window.WEEK2_ADVANCED_DATA = {
  "math": {
    "color": "#3b82f6",
    "icon": "🔢",
    "title": "Mathematics",
    "subtitle": "Week 2: Triangles & Quadrilaterals [Advanced]",
    "slides": [
      {
        "title": "Introduction to Polygons",
        "image": "images/regular_polygons.png",
        "text": "A polygon is a closed two-dimensional shape with straight sides. The simplest polygon is a triangle, which has three sides, followed by quadrilaterals, which have four sides.",
        "examples": [
          {
            "title": "What is closed?",
            "content": "A shape is closed if you start drawing at one point and end at the exact same point without any gaps."
          },
          {
            "title": "Sides and Vertices",
            "content": "A polygon has the same number of sides, interior angles, and vertices (corners)."
          }
        ]
      },
      {
        "title": "Triangles: The 3-Sided Polygons",
        "text": "A triangle is a polygon with exactly three sides, three vertices, and three angles. Triangles are the strongest shapes in building because they do not bend easily.",
        "examples": [
          {
            "title": "Naming Triangles",
            "content": "We name a triangle by its vertices, e.g., △ABC has vertices A, B, and C."
          },
          {
            "title": "Angles",
            "content": "The angles inside a triangle are called interior angles."
          }
        ]
      },
      {
        "title": "Classifying Triangles by Sides: Equilateral",
        "text": "An equilateral triangle has three equal sides. Because all sides are equal, all three interior angles are also equal, measuring exactly 60° each.",
        "examples": [
          {
            "title": "Prefix 'Equi-'",
            "content": "'Equi-' means equal, and 'lateral' means side. So equilateral means 'equal sides'."
          },
          {
            "title": "Angle Sum",
            "content": "Since all angles are equal and add up to 180°, each angle is 180° ÷ 3 = 60°."
          }
        ]
      },
      {
        "title": "Classifying Triangles by Sides: Isosceles",
        "text": "An isosceles triangle has at least two equal sides. The angles opposite those equal sides are also equal in measure.",
        "examples": [
          {
            "title": "Base and Legs",
            "content": "The two equal sides are called legs, and the third side is the base. The base angles are equal."
          },
          {
            "title": "Real-world example",
            "content": "A slice of pizza or the roof of a typical house often forms an isosceles triangle."
          }
        ]
      },
      {
        "title": "Classifying Triangles by Sides: Scalene",
        "text": "A scalene triangle has no equal sides. This means that all three of its interior angles also have different measures.",
        "examples": [
          {
            "title": "Pronunciation",
            "content": "Pronounced 'skay-leen', from a Greek word meaning 'unequal' or 'slanting'."
          },
          {
            "title": "Different Angles",
            "content": "If a triangle has sides of 3cm, 4cm, and 5cm, it is scalene, and all its angles are different."
          }
        ]
      },
      {
        "title": "Classifying Triangles by Angles: Acute",
        "text": "An acute triangle is a triangle where all three interior angles are acute, meaning each angle measures less than 90°.",
        "examples": [
          {
            "title": "All Three",
            "content": "It is not enough for one angle to be acute; *all three* must be less than 90°."
          },
          {
            "title": "Equilateral is Acute",
            "content": "An equilateral triangle (60°, 60°, 60°) is always an acute triangle."
          }
        ]
      },
      {
        "title": "Classifying Triangles by Angles: Right",
        "text": "A right triangle has exactly one right angle measuring 90°. The side opposite the right angle is called the hypotenuse and is the longest side.",
        "examples": [
          {
            "title": "Hypotenuse",
            "content": "In a right triangle with sides 6cm, 8cm, and 10cm, the 10cm side is the hypotenuse."
          },
          {
            "title": "Other Angles",
            "content": "The other two angles in a right triangle must be acute and complementary (adding up to 90°)."
          }
        ]
      },
      {
        "title": "Classifying Triangles by Angles: Obtuse",
        "text": "An obtuse triangle has exactly one obtuse angle, which measures greater than 90° but less than 180°.",
        "examples": [
          {
            "title": "Only One",
            "content": "A triangle can have only one obtuse angle. If it had two, the sum would exceed 180° immediately!"
          },
          {
            "title": "Angle Range",
            "content": "A triangle with angles of 110°, 40°, and 30° is an obtuse triangle."
          }
        ]
      },
      {
        "title": "Triangle Angle Sum Theorem",
        "text": "In any triangle, regardless of its shape or size, the sum of all three interior angles is always exactly 180°.",
        "examples": [
          {
            "title": "Formula",
            "content": "∠A + ∠B + ∠C = 180°"
          },
          {
            "title": "Visual Proof",
            "content": "If you tear off the three corners of a paper triangle and place them side-by-side, they form a straight line (180°)."
          }
        ]
      },
      {
        "title": "Finding a Missing Angle in a Triangle",
        "text": "To find a missing angle in a triangle, add the two known angles together, then subtract that sum from 180°.",
        "examples": [
          {
            "title": "Step-by-Step",
            "content": "Given angles 50° and 70°. 1) Add: 50° + 70° = 120°. 2) Subtract: 180° - 120° = 60°. The missing angle is 60°."
          },
          {
            "title": "Right Triangle shortcut",
            "content": "If you have a right triangle and one acute angle is 35°, the other is 90° - 35° = 55°."
          }
        ]
      },
      {
        "title": "Introduction to Quadrilaterals",
        "text": "A quadrilateral is a polygon with exactly four sides, four vertices, and four interior angles. The prefix 'quad-' means four.",
        "examples": [
          {
            "title": "Interior Sum",
            "content": "The sum of the interior angles of any quadrilateral is always exactly 360°."
          },
          {
            "title": "Everyday Shapes",
            "content": "Notebook pages, doors, envelopes, and road signs are common quadrilaterals."
          }
        ]
      },
      {
        "title": "Quadrilaterals: Parallelogram",
        "text": "A parallelogram is a quadrilateral where opposite sides are parallel and equal in length, and opposite angles are equal.",
        "examples": [
          {
            "title": "Parallel Sides",
            "content": "The top and bottom sides run in the same direction, and the left and right sides run in the same direction."
          },
          {
            "title": "Consecutive Angles",
            "content": "Any two adjacent (consecutive) angles in a parallelogram add up to 180°."
          }
        ]
      },
      {
        "title": "Quadrilaterals: Rectangle",
        "text": "A rectangle is a special parallelogram that has four right angles (90°). Opposite sides are equal and parallel.",
        "examples": [
          {
            "title": "Right Angles",
            "content": "Every rectangle is a parallelogram, but not every parallelogram is a rectangle (since some have oblique angles)."
          },
          {
            "title": "Diagonals",
            "content": "The diagonals of a rectangle are equal in length and bisect (cut in half) each other."
          }
        ]
      },
      {
        "title": "Quadrilaterals: Square",
        "text": "A square is a special rectangle with four equal sides. It has four right angles, and all four sides are equal.",
        "examples": [
          {
            "title": "Perfect Regular Shape",
            "content": "A square is a regular polygon because all its sides are equal and all its angles are equal."
          },
          {
            "title": "Relationships",
            "content": "A square is both a rectangle and a rhombus."
          }
        ]
      },
      {
        "title": "Quadrilaterals: Rhombus",
        "text": "A rhombus is a parallelogram with four equal sides. Its opposite angles are equal, but they are not necessarily 90°.",
        "examples": [
          {
            "title": "Diamond Shape",
            "content": "A rhombus looks like a slanted square or a diamond. The diagonals of a rhombus always meet at a right angle (90°)."
          },
          {
            "title": "Kite vs. Rhombus",
            "content": "A kite has adjacent equal sides, whereas a rhombus has *all* four sides equal."
          }
        ]
      },
      {
        "title": "Quadrilaterals: Trapezoid",
        "text": "A trapezoid (or trapezium) is a quadrilateral with exactly one pair of parallel sides. The non-parallel sides are called legs.",
        "examples": [
          {
            "title": "Parallel Pair",
            "content": "The top and bottom sides (bases) are parallel, but the left and right sides slant toward each other."
          },
          {
            "title": "Isosceles Trapezoid",
            "content": "If the non-parallel legs are equal in length, it is called an isosceles trapezoid."
          }
        ]
      },
      {
        "title": "Quadrilateral Angle Sum Theorem",
        "text": "The sum of all four interior angles in any quadrilateral is always exactly 360°.",
        "examples": [
          {
            "title": "Why 360°?",
            "content": "You can split any quadrilateral into two triangles. Since each triangle has 180°, the total is 2 × 180° = 360°."
          },
          {
            "title": "Formula",
            "content": "∠A + ∠B + ∠C + ∠D = 360°"
          }
        ]
      },
      {
        "title": "Finding a Missing Angle in a Quadrilateral",
        "text": "To find a missing angle in a quadrilateral, add the three known angles, and subtract their sum from 360°.",
        "examples": [
          {
            "title": "Step-by-Step",
            "content": "Given angles 80°, 100°, and 70°. 1) Add: 80° + 100° + 70° = 250°. 2) Subtract: 360° - 250° = 110°. The missing angle is 110°."
          },
          {
            "title": "Rectangle check",
            "content": "In a rectangle: 90° + 90° + 90° + 90° = 360°."
          }
        ]
      },
      {
        "title": "Relationships Between Quadrilaterals",
        "text": "Quadrilaterals are classified hierarchically. A square is a rectangle, a rhombus, a parallelogram, and a quadrilateral all at once!",
        "examples": [
          {
            "title": "True Statement",
            "content": "'All squares are rectangles, but not all rectangles are squares.'"
          },
          {
            "title": "True Statement 2",
            "content": "'All rectangles are parallelograms, but not all parallelograms are rectangles.'"
          }
        ]
      },
      {
        "title": "Perimeter of Polygons",
        "text": "The perimeter is the total distance around the outside of a shape. You find it by adding the lengths of all its sides.",
        "examples": [
          {
            "title": "Triangle Perimeter",
            "content": "A triangle with sides 5cm, 6cm, and 7cm has a perimeter of 5 + 6 + 7 = 18cm."
          },
          {
            "title": "Rectangle Perimeter",
            "content": "A rectangle of length 8cm and width 5cm has a perimeter of 8 + 5 + 8 + 5 = 2(8 + 5) = 26cm."
          }
        ]
      },
      {
        "title": "Area of Rectangles and Squares",
        "text": "Area is the amount of flat space inside a shape, measured in square units (e.g. cm²). Rectangle Area = length × width. Square Area = side × side.",
        "examples": [
          {
            "title": "Rectangle Area",
            "content": "A rectangle with length 10cm and width 4cm has an area of 10 × 4 = 40 cm²."
          },
          {
            "title": "Square Area",
            "content": "A square with sides of 6cm has an area of 6 × 6 = 36 cm²."
          }
        ]
      },
      {
        "title": "Area of Triangles",
        "text": "The area of a triangle is exactly half the area of a rectangle with the same base and height. Formula: Area = ½ × base × height.",
        "examples": [
          {
            "title": "Triangle Area",
            "content": "A triangle with base 8cm and height 5cm has an area of ½ × 8 × 5 = 4 × 5 = 20 cm²."
          },
          {
            "title": "Right Triangle",
            "content": "For a right triangle, the two perpendicular legs act as the base and the height."
          }
        ]
      },
      {
        "title": "Polygons in Architecture: Trusses",
        "text": "Architects use triangles in structures because they are rigid. When pressure is applied, a triangle maintains its shape, whereas a rectangle collapses.",
        "examples": [
          {
            "title": "Truss Bridges",
            "content": "Truss bridges use interlocking triangles to support massive train and car weights."
          },
          {
            "title": "Roof Framing",
            "content": "Wooden roof rafters are arranged in triangles to keep the roof stable under wind and heavy rain."
          }
        ]
      },
      {
        "title": "Tangrams and Geometry",
        "text": "A tangram is a traditional Chinese puzzle consisting of seven flat shapes, called tans, which can be arranged to form various shapes.",
        "examples": [
          {
            "title": "The Seven Shapes",
            "content": "5 triangles (2 large, 1 medium, 2 small), 1 square, and 1 parallelogram."
          },
          {
            "title": "Geometric Play",
            "content": "By combining the tans, children learn about rotation, translation, and how composite shapes are made."
          }
        ]
      },
      {
        "title": "Review of Triangles and Quadrilaterals",
        "text": "Let's summarize: Triangles have 3 sides (equilateral, isosceles, scalene; acute, right, obtuse) and interior sum of 180°. Quadrilaterals have 4 sides (parallelogram, rectangle, square, rhombus, trapezoid) and interior sum of 360°. Perimeter is the sum of sides; area is the inner space.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Draw a triangle with angles 40°, 60°, and 80°. Does it add up to 180°? (Yes, 40+60+80 = 180°)"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "What is the sum of the interior angles of any triangle?",
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
        "q": "A triangle with three equal sides is called:",
        "options": [
          "Isosceles",
          "Equilateral",
          "Scalene",
          "Right"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the measure of each interior angle in an equilateral triangle?",
        "options": [
          "45°",
          "60°",
          "90°",
          "120°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A triangle that has two sides of equal length is classified as:",
        "options": [
          "Isosceles",
          "Scalene",
          "Equilateral",
          "Obtuse"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "A triangle with sides of 5cm, 12cm, and 13cm is classified as:",
        "options": [
          "Equilateral",
          "Isosceles",
          "Scalene",
          "Obtuse"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What type of triangle has a single angle measuring exactly 90°?",
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
        "q": "If a triangle has an angle of 115°, what is its classification by angle?",
        "options": [
          "Right",
          "Acute",
          "Obtuse",
          "Reflex"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Can a triangle have more than one right angle? Why?",
        "options": [
          "Yes, because it has three angles",
          "No, because the sum of two right angles is 180°, leaving 0° for the third",
          "Yes, in equilateral triangles",
          "No, because right angles only occur in quadrilaterals"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If two angles of a triangle measure 45° and 85°, what is the measure of the third angle?",
        "options": [
          "40°",
          "50°",
          "60°",
          "70°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In a right triangle, one acute angle measures 38°. What is the measure of the other acute angle?",
        "options": [
          "38°",
          "42°",
          "52°",
          "142°"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the sum of the interior angles of any quadrilateral?",
        "options": [
          "180°",
          "360°",
          "540°",
          "720°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which quadrilateral has four equal sides and opposite angles equal, but not necessarily 90°?",
        "options": [
          "Rectangle",
          "Rhombus",
          "Trapezoid",
          "Parallelogram"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A quadrilateral with exactly one pair of parallel sides is called a/an:",
        "options": [
          "Parallelogram",
          "Rhombus",
          "Rectangle",
          "Trapezoid"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "Which of the following statements is ALWAYS true?",
        "options": [
          "Every rectangle is a square",
          "Every parallelogram is a rectangle",
          "Every square is a rectangle",
          "Every trapezoid is a parallelogram"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Three angles of a quadrilateral measure 70°, 110°, and 100°. What is the measure of the fourth angle?",
        "options": [
          "80°",
          "90°",
          "100°",
          "110°"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "What is the perimeter of a triangle with sides measuring 7cm, 9cm, and 12cm?",
        "options": [
          "24cm",
          "26cm",
          "28cm",
          "32cm"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Find the perimeter of a rectangle with length 12cm and width 8cm.",
        "options": [
          "20cm",
          "40cm",
          "96cm",
          "80cm"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the area of a square with a side length of 9cm?",
        "options": [
          "18 cm²",
          "36 cm²",
          "81 cm²",
          "72 cm²"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Find the area of a triangle with a base of 10cm and a height of 6cm.",
        "options": [
          "16 cm²",
          "30 cm²",
          "60 cm²",
          "120 cm²"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "A scalene triangle can never be a right triangle.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Every rhombus is a square.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "An isosceles triangle has at least two sides of equal length.",
        "answer": true
      },
      {
        "type": "blank",
        "q": "The longest side of a right triangle, which is opposite the right angle, is the ______.",
        "answer": "hypotenuse"
      },
      {
        "type": "blank",
        "q": "What is the area in square centimeters of a rectangle with length 15cm and width 4cm?",
        "answer": "60"
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
        "q": "An isosceles triangle has a vertex angle measuring 50°. What is the measure of each of its equal base angles?",
        "options": [
          "50°",
          "65°",
          "75°",
          "130°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A parallelogram has one angle measuring 70°. What are the measures of the other three angles?",
        "options": [
          "70°, 70°, 70°",
          "70°, 110°, 110°",
          "110°, 110°, 110°",
          "70°, 90°, 110°"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A rectangle has a perimeter of 36cm. If its length is 10cm, what is its area?",
        "options": [
          "80 cm²",
          "100 cm²",
          "160 cm²",
          "180 cm²"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "A right triangle has legs of 6cm and 8cm, and a hypotenuse of 10cm. What is its area?",
        "options": [
          "24 cm²",
          "30 cm²",
          "40 cm²",
          "48 cm²"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "In a quadrilateral ABCD, angle A = x, angle B = 2x, angle C = 3x, and angle D = 4x. What is the measure of angle D?",
        "options": [
          "36°",
          "72°",
          "108°",
          "144°"
        ],
        "answer": 3
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Geometric Architect: House Design",
      "desc": "Get a sheet of paper and a ruler. Draw a house design using at least three different types of triangles (e.g. equilateral, isosceles, right) and three different types of quadrilaterals (e.g. square, rectangle, trapezoid). Color each polygon using a different color. Below your drawing, write a legend listing: 1) the names of the triangles and quadrilaterals you drew, 2) their properties (number of equal sides/angles), and 3) the estimated perimeter of the roof if its sides are 8cm, 8cm, and 12cm. Show this blueprint to your parent or teacher.",
      "labels": [
        "Correct drawing of at least three types of triangles and three types of quadrilaterals",
        "Neat coloring and complete legend detailing the geometric properties",
        "Correct calculation of the roof's perimeter (8 + 8 + 12 = 28cm)"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Geometric Calculations</h3>\n                  <p class=\"ws-instruction\">Find the missing values and show your computations using your stylus.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\" style=\"border-right: 1px solid var(--border-color); padding-right:10px;\">\n                      <div class=\"ws-q\">1. In △ABC, ∠A = 40° and ∠B = 75°. Find the third angle ∠C.</div>\n                      <div class=\"writing-line\" style=\"margin-top: 20px; width: 90%;\"><span class=\"ws-answer\">∠C = 180° - (40° + 75°) = 180° - 115°</span></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 90%;\"><span class=\"ws-answer\">∠C = 65°</span></div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"padding-left:10px;\">\n                      <div class=\"ws-q\">2. A rectangle has a length of 12cm and width of 5cm. Find its Perimeter and Area.</div>\n                      <div class=\"writing-line\" style=\"margin-top: 20px; width: 90%;\"><span class=\"ws-answer\">Perimeter = 2 * (12 + 5) = 34 cm</span></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 90%;\"><span class=\"ws-answer\">Area = 12 * 5 = 60 cm²</span></div>\n                    </div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Polygon Sketching Grid</h3>\n                  <p class=\"ws-instruction\">Use the grids to draw: 1) a Right Isosceles Triangle, and 2) a Trapezoid with top base 4 units and bottom base 8 units.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Right Isosceles Triangle</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Trapezoid</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Quadrilateral Attributes Table</h3>\n                  <p class=\"ws-instruction\">Write YES or NO in the cells to compare the properties of different 4-sided shapes.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Quadrilateral Shape</th>\n                        <th>Opposite Sides Parallel?</th>\n                        <th>All Sides Equal?</th>\n                        <th>All Angles are 90°?</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Square</td>\n                        <td><span class=\"ws-answer\">YES</span></td>\n                        <td><span class=\"ws-answer\">YES</span></td>\n                        <td><span class=\"ws-answer\">YES</span></td>\n                      </tr>\n                      <tr>\n                        <td>Rectangle</td>\n                        <td><span class=\"ws-answer\">YES</span></td>\n                        <td><span class=\"ws-answer\">NO</span></td>\n                        <td><span class=\"ws-answer\">YES</span></td>\n                      </tr>\n                      <tr>\n                        <td>Parallelogram</td>\n                        <td><span class=\"ws-answer\">YES</span></td>\n                        <td><span class=\"ws-answer\">NO</span></td>\n                        <td><span class=\"ws-answer\">NO</span></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
    }
  },
  "science": {
  "color": "#10b981",
  "icon": "🔬",
  "title": "Science",
  "subtitle": "Week 2: Exploring and Tinkering with Materials Safely [Advanced]",
  "slides": [
    {
      "title": "Safe Tinkering",
      "text": "Tinkering means exploring and playing with materials to see how they work. When tinkering, we must always follow safety rules, such as carrying scissors pointing down and cleaning up our workspace.",
      "examples": [
        {
          "title": "Using Scissors",
          "content": "Always cut away from your body and hold the blades closed when passing them to others."
        },
        {
          "title": "Modeling Clay",
          "content": "Wash hands after shaping clay to keep clean and prevent ingestion."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 1)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 2)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 3)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 4)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 5)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 6)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 7)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 8)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 9)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 10)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 11)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 12)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 13)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 14)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 15)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 16)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 17)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 18)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 19)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 20)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 21)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 22)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 23)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 24)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "What is the correct way to hold or carry scissors when walking? (Question 25)",
      "options": [
        "Pointing downwards",
        "Pointing upwards",
        "Open in hand",
        "By the blades"
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
    "desc": "Create an entry in your notebook explaining Exploring and Tinkering with Materials Safely [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Science Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Exploring and Tinkering with Materials Safely [Advanced]? <span class=\"ws-answer\">Understanding and applying Exploring and Tinkering with Materials Safely [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "english": {
  "color": "#8b5cf6",
  "icon": "📖",
  "title": "English",
  "subtitle": "Week 2: CCVC Words, Verbs & Interrogative Pronouns [Advanced]",
  "slides": [
    {
      "title": "CCVC Words",
      "text": "CCVC stands for Consonant-Consonant-Vowel-Consonant. These words start with two consonants (consonant blend) followed by a vowel and consonant, like 'frog', 'plug', or 'drum'.",
      "examples": [
        {
          "title": "The word Frog",
          "content": "F, R (consonants) - O (vowel) - G (consonant)."
        },
        {
          "title": "The word Drum",
          "content": "D, R (consonants) - U (vowel) - M (consonant)."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 1)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 2)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 3)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 4)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 5)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 6)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 7)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 8)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 9)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 10)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 11)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 12)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 13)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 14)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 15)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 16)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 17)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 18)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 19)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 20)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 21)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 22)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 23)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 24)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Identify the CCVC word in the choices below. (Question 25)",
      "options": [
        "Frog",
        "Tent",
        "Paper",
        "Rabbit"
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
    "desc": "Create an entry in your notebook explaining CCVC Words, Verbs & Interrogative Pronouns [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>English Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of CCVC Words, Verbs & Interrogative Pronouns [Advanced]? <span class=\"ws-answer\">Understanding and applying CCVC Words, Verbs & Interrogative Pronouns [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "filipino": {
  "color": "#ec4899",
  "icon": "🗣️",
  "title": "Filipino",
  "subtitle": "Week 2: Kasarian ng Pangngalan at Pandiwa [Advanced]",
  "slides": [
    {
      "title": "Kasarian ng Pangngalan",
      "text": "May apat na kasarian ang pangngalan: Panlalaki (lalaki), Pambabae (babae), Di-tiyak (maaaring lalaki o babae), at Walang Kasarian (mga bagay o walang buhay).",
      "examples": [
        {
          "title": "Halimbawa",
          "content": "Panlalaki: ama, hari. Pambabae: ina, reyna."
        },
        {
          "title": "Iba pa",
          "content": "Di-tiyak: guro, sanggol. Walang Kasarian: lamesa, aklat."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 1)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 2)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 3)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 4)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 5)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 6)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 7)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 8)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 9)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 10)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 11)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 12)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 13)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 14)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 15)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 16)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 17)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 18)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 19)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 20)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 21)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 22)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 23)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 24)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Ano ang kasarian ng pangngalang 'guro'? (Question 25)",
      "options": [
        "Di-tiyak",
        "Panlalaki",
        "Pambabae",
        "Walang Kasarian"
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
    "desc": "Create an entry in your notebook explaining Kasarian ng Pangngalan at Pandiwa [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Filipino Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Kasarian ng Pangngalan at Pandiwa [Advanced]? <span class=\"ws-answer\">Understanding and applying Kasarian ng Pangngalan at Pandiwa [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "makabansa": {
  "color": "#f59e0b",
  "icon": "🏝️",
  "title": "Makabansa",
  "subtitle": "Week 2: Mga Lokal na Bayani at Pinuno sa Ating Pook [Advanced]",
  "slides": [
    {
      "title": "Mga Bayani at Pinuno sa Ating Pook",
      "text": "Ang bawat komunidad ay may mga natatanging tao na naglingkod o nagpakita ng kabayanihan. Sila ay maaaring mga lokal na bayani, pinuno ng barangay, o mga guro at manggagamot na tumulong sa iba.",
      "examples": [
        {
          "title": "Lokal na Bayani",
          "content": "Mga taong lumaban para sa kalayaan ng pook o nagtatag ng unang pamayanan."
        },
        {
          "title": "Pinuno",
          "content": "Ang Kapitan ng Barangay at mga Kagawad na nagpapanatili ng kapayapaan."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 1)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 2)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 3)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 4)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 5)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 6)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 7)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 8)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 9)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 10)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 11)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 12)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 13)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 14)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 15)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 16)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 17)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 18)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 19)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 20)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 21)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 22)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 23)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 24)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Sino sa komunidad ang may tungkuling panatilihin ang kapayapaan at kaayusan? (Question 25)",
      "options": [
        "Kapitan ng Barangay at mga Kagawad",
        "Mga bata",
        "Mga banyagang bisita",
        "Mga artista"
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
    "desc": "Create an entry in your notebook explaining Mga Lokal na Bayani at Pinuno sa Ating Pook [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>Makabansa Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Mga Lokal na Bayani at Pinuno sa Ating Pook [Advanced]? <span class=\"ws-answer\">Understanding and applying Mga Lokal na Bayani at Pinuno sa Ating Pook [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
},
  "gmrc": {
  "color": "#06b6d4",
  "icon": "🧘‍♂️",
  "title": "GMRC",
  "subtitle": "Week 2: Paglinang ng Tiwala sa Sarili sa Ating Kakayahan [Advanced]",
  "slides": [
    {
      "title": "Pagpapaunlad ng Hilig",
      "text": "Maaari nating mapaunlad ang ating mga hilig at talento sa pamamagitan ng pagsasanay araw-araw at hindi pagkuha ng takot sa tuwing nagkakamali.",
      "examples": [
        {
          "title": "Pagsasanay",
          "content": "Kung hilig mo ang gumuhit, maglaan ng oras araw-araw upang magsanay."
        },
        {
          "title": "Lakas ng Loob",
          "content": "Ibahagi ang iyong talento sa iba sa pamamagitan ng pagpapakita nito sa paaralan."
        }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 1)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 2)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 3)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 4)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 5)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 6)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 7)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 8)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 9)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 10)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 11)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 12)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 13)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 14)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 15)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 16)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 17)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 18)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 19)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 20)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 21)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 22)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 23)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 24)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "q": "Paano natin mapapabuti ang ating sariling talento o hilig? (Question 25)",
      "options": [
        "Magsanay araw-araw nang may tiyaga",
        "Sumuko kapag nagkamali",
        "Itago ito at huwag ipakita",
        "Manoood na lang ng TV"
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
    "desc": "Create an entry in your notebook explaining Paglinang ng Tiwala sa Sarili sa Ating Kakayahan [Advanced]. Share your work with your parents.",
    "labels": [
      "Accuracy and understanding",
      "Cleanliness and presentation",
      "Self-expression and effort"
    ]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\">\n                 <h3>GMRC Review - Week 2</h3>\n                 <p class=\"ws-instruction\">Write the correct answer below using your stylus.</p>\n                 <div class=\"ws-item-row\"><div class=\"ws-q\">1. What is the main concept of Paglinang ng Tiwala sa Sarili sa Ating Kakayahan [Advanced]? <span class=\"ws-answer\">Understanding and applying Paglinang ng Tiwala sa Sarili sa Ating Kakayahan [Advanced] in real life.</span></div></div>\n               </div>"
    ]
  }
}
};

window.WEEK2_ADVANCED_DATA.reading = window.WEEK2_DATA.reading;
