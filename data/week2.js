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
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Comparing Numbers</h3>\n                  <p class=\"ws-instruction\">Compare the numbers using the comparison symbols: <strong>&lt;</strong>, <strong>&gt;</strong>, or <strong>=</strong>.</p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 18px;\">\n                    <div style=\"margin-bottom: 20px;\">1. &nbsp; 4,567 &nbsp; [ &nbsp; &nbsp; ] &nbsp; 4,576</div>\n                    <div style=\"margin-bottom: 20px;\">2. &nbsp; 8,901 &nbsp; [ &nbsp; &nbsp; ] &nbsp; 8,099</div>\n                    <div style=\"margin-bottom: 20px;\">3. &nbsp; 3,240 &nbsp; [ &nbsp; &nbsp; ] &nbsp; 3,240</div>\n                    <div style=\"margin-bottom: 20px;\">4. &nbsp; 7,112 &nbsp; [ &nbsp; &nbsp; ] &nbsp; 7,121</div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Ordering Numbers</h3>\n                  <p class=\"ws-instruction\">Arrange the following set of numbers in descending order (largest to smallest) in the writing lines below.</p>\n                  \n                  <div style=\"font-size: 16px; margin-bottom: 20px; font-weight: bold; text-align: center;\">\n                    5,678 &nbsp; | &nbsp; 5,867 &nbsp; | &nbsp; 5,687 &nbsp; | &nbsp; 5,876\n                  </div>\n                  \n                  <div class=\"ws-item-row\" style=\"margin-top: 30px;\">\n                    <div>Your Answer:</div>\n                    <div class=\"writing-line\" style=\"margin-top: 20px; width: 80%;\"></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Comparing Numbers</h3>\n                  <p class=\"ws-instruction\">Write &lt;, &gt;, or = inside the boxes using your stylus to compare the numbers.</p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 18px; margin-top: 25px; text-align: center;\">\n                    <div style=\"margin-bottom: 30px;\">4,562 &nbsp; &nbsp; [ &nbsp; &nbsp; ] &nbsp; &nbsp; 4,582</div>\n                    <div style=\"margin-bottom: 30px;\">8,901 &nbsp; &nbsp; [ &nbsp; &nbsp; ] &nbsp; &nbsp; 8,091</div>\n                    <div style=\"margin-bottom: 30px;\">3,450 &nbsp; &nbsp; [ &nbsp; &nbsp; ] &nbsp; &nbsp; 3,450</div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK2_DATA.science = {
  color: "#10b981",
  icon: "🔬",
  title: "Science",
  subtitle: "Week 2: Solid Matter - Size & Shape [SSES Enriched]",
  slides: [
    {
      title: "What is Matter?",
      text: "Matter is anything that has mass and takes up space. All the physical objects around us are made of matter. In this unit, we focus on the first state of matter: Solids.",
      examples: [
        { title: "Desk and Chairs", content: "Your wooden school desk takes up space in the classroom and has weight, which means it is matter." },
        { title: "Air in a Balloon", content: "Even invisible things like air are matter because they occupy space inside a balloon and have mass." }
      ]
    },
    {
      title: "Characteristics of Solids",
      text: "Solids are materials that have a definite shape, a definite size (volume), and a definite mass. Unlike liquids or gases, solids do not easily change their shape when placed in different containers.",
      examples: [
        { title: "A Metal Key", content: "Placing a key inside a round bowl or a square box does not change its shape or size." },
        { title: "A Plastic Toy", content: "Squeezing a hard plastic action figure does not change its volume or mass." }
      ]
    },
    {
      title: "Enriched SSES: Atomic Arrangement in Solids",
      text: "Why do solids hold their shape? At the microscopic level, the tiny particles (atoms and molecules) that make up a solid are tightly packed together in fixed, organized positions. They cannot slide past one another.",
      examples: [
        { title: "Vibrating in Place", content: "Because the particles are locked in place, they can only vibrate slightly back and forth." },
        { title: "Strong Attraction Forces", content: "The forces of attraction holding the particles together are very strong, resisting any separation." }
      ]
    },
    {
      title: "Solid Structure: Definite Shape",
      text: "A definite shape means that the boundary of a solid is fixed. A solid rock will remain a rock unless a strong external force (like a hammer blow) breaks it apart.",
      examples: [
        { title: "Carving Wood", content: "A block of wood remains a block until a carpenter carves it into a chair legs." },
        { title: "Erosion of Rocks", content: "Wind and water take hundreds of years to slowly chip away and change the shape of stone cliffs." }
      ]
    },
    {
      title: "Solid Structure: Definite Volume",
      text: "Definite volume (or size) means a solid occupies a fixed amount of space. You cannot compress a solid block to make it fit into a smaller box without breaking it.",
      examples: [
        { title: "Packing a Backpack", content: "If your hard textbooks take up all the space in your bag, you cannot squeeze another block in by squishing the books." },
        { title: "Measuring Box Volume", content: "A wooden cube measuring 5 cm on each side occupies exactly 125 cubic centimeters of space." }
      ]
    },
    {
      title: "Physical Property: Size of Solids",
      text: "Size refers to the dimensions of a solid, such as its length, width, and height. Scientists measure size using metric units like millimeters (mm), centimeters (cm), and meters (m).",
      examples: [
        { title: "Measuring a Pencil", content: "Using a ruler to find that a new yellow pencil is exactly 19 centimeters long." },
        { title: "Measuring a Seed", content: "Using a ruler to observe that a sunflower seed is 12 millimeters in length." }
      ]
    },
    {
      title: "Measuring Tools: Rulers and Tape Measures",
      text: "Rulers are ideal for measuring flat, small solids. Tape measures are flexible and are used to measure longer lengths or curved surfaces, like the circumference of a cylinder.",
      examples: [
        { title: "Ruler Measurement", content: "Aligning the zero mark of a ruler with the edge of a book to measure its width." },
        { title: "Tape Measure", content: "Wrapping a flexible tape around a tree trunk to measure its size (girth)." }
      ]
    },
    {
      title: "Enriched SSES: Precision Tools - Vernier Calipers",
      text: "Vernier calipers are high-precision measuring tools used in science to measure very small distances, thicknesses, or the inner/outer diameter of round objects.",
      examples: [
        { title: "Outer Diameter", content: "Using the main jaws of a caliper to measure the exact thickness of a single glass marble (e.g., 15.4 mm)." },
        { title: "Inner Diameter", content: "Using the upper smaller jaws of a caliper to measure the inside width of a test tube." }
      ]
    },
    {
      title: "Physical Property: Shape of Solids",
      text: "Solids come in many shapes. Some have regular geometric shapes (cubes, spheres, cylinders), while others have irregular, natural shapes (leaves, rocks, twigs).",
      examples: [
        { title: "Regular Shape", content: "A glass marble is a perfect sphere, and a dice is a perfect cube." },
        { title: "Irregular Shape", content: "A piece of broken concrete or a piece of dry ginger root has a complex, unique shape." }
      ]
    },
    {
      title: "Enriched SSES: Solid Categories - Crystals",
      text: "Solids can be classified into two categories based on how their particles are arranged. In Crystalline Solids, particles are arranged in a highly ordered, repeating 3D pattern.",
      examples: [
        { title: "Table Salt (NaCl)", content: "Look closely under a magnifier: salt grains are tiny, perfect cubes because of their crystal lattice." },
        { title: "Quartz and Diamonds", content: "These gemstones have flat, shiny faces because of their highly organized atomic structures." }
      ]
    },
    {
      title: "Enriched SSES: Solid Categories - Amorphous",
      text: "In Amorphous Solids, the internal particles are arranged randomly without a repeating pattern. They do not form geometric shapes when they break.",
      examples: [
        { title: "Glass and Plastic", content: "When glass shatters, it breaks into curved, random shards because its atoms are arranged randomly." },
        { title: "Candle Wax", content: "Wax softens gradually when heated because its amorphous particles can slide apart easily." }
      ]
    },
    {
      title: "Physical Property: Hardness",
      text: "Hardness is the ability of a solid to resist scratching or bending. A harder solid can scratch a softer solid. Scientists test this to identify minerals.",
      examples: [
        { title: "Chalk vs. Slate", content: "Slate is harder than chalk. You can easily scratch chalk with a piece of slate rock." },
        { title: "Diamond Hardness", content: "Diamond is the hardest natural solid on Earth; it can only be scratched by another diamond." }
      ]
    },
    {
      title: "Physical Property: Flexibility",
      text: "Flexibility (or elasticity) is the ability of a solid to bend easily without breaking, and sometimes return to its original shape when released.",
      examples: [
        { title: "Rubber Band", content: "Stretching a rubber band changes its length, but it snaps back to its original size when let go." },
        { title: "Copper Wire", content: "A thin copper wire is flexible enough to bend around a pole, but it stays bent." }
      ]
    },
    {
      title: "Physical Property: Brittleness",
      text: "Brittleness is the property of a solid that causes it to break or shatter easily when subjected to force or dropped, instead of bending.",
      examples: [
        { title: "Chalk", content: "Dropping a stick of blackboard chalk causes it to snap into two or three pieces." },
        { title: "Glass Window", content: "A flying baseball breaks a glass pane into many sharp shards because glass is highly brittle." }
      ]
    },
    {
      title: "Physical Property: Malleability",
      text: "Malleability is the ability of a solid metal to be hammered, rolled, or pressed into thin sheets without cracking or breaking.",
      examples: [
        { title: "Aluminum Foil", content: "Aluminum metal is hammered and pressed so thin that we use it as sheets to wrap food." },
        { title: "Gold Sheets", content: "Artisans beat gold into micro-thin leaf sheets to decorate historical statues." }
      ]
    },
    {
      title: "Physical Property: Ductility",
      text: "Ductility is the ability of a solid metal to be pulled and stretched into thin wires without snapping or breaking.",
      examples: [
        { title: "Copper Wires", content: "Copper metal is stretched into long, thin wires that conduct electricity inside our walls." },
        { title: "Steel Cables", content: "Thick steel rods are drawn into thin cables to suspend suspension bridges." }
      ]
    },
    {
      title: "Physical Property: Texture",
      text: "Texture describes how the surface of a solid feels when touched. Receptors in the skin detect if a surface is rough, smooth, bumpy, or sticky.",
      examples: [
        { title: "Sandpaper", content: "Sandpaper feels rough because of the tiny particles glued to its surface." },
        { title: "Silk Fabric", content: "Silk feels smooth because its long fibers are woven flat without bumps." }
      ]
    },
    {
      title: "Physical Property: Mass of Solids",
      text: "Mass is the amount of matter in a solid. It is measured using a balance scale in grams (g) or kilograms (kg). Mass does not change, even if you move the object to the Moon.",
      examples: [
        { title: "Measuring a Stone", content: "A balance scale shows a smooth grey river stone has a mass of 450 grams." },
        { title: "Mass vs Weight", content: "Mass is the matter inside, while weight is the pull of gravity on that mass." }
      ]
    },
    {
      title: "Solid Classifications: Magnetic Properties",
      text: "Some solids containing iron, nickel, or cobalt are attracted to magnets. We can classify solids into magnetic and non-magnetic materials.",
      examples: [
        { title: "Magnetic Solid", content: "Steel paperclips stick to a magnet because they contain iron." },
        { title: "Non-magnetic Solid", content: "Plastic rulers, wooden blocks, and brass coins are not attracted to magnets." }
      ]
    },
    {
      title: "Conductivity in Solids: Heat and Electricity",
      text: "Some solids allow heat and electricity to flow through them easily (conductors), while others block them (insulators). Metals are usually good conductors.",
      examples: [
        { title: "Metal Spoon", content: "A steel spoon placed in hot soup quickly becomes hot. It conducts heat." },
        { title: "Wooden Spoon", content: "A wooden spoon remains cool in hot soup because wood is an insulator." }
      ]
    },
    {
      title: "Density of Solids: Sink or Float",
      text: "Density is how tightly packed the mass of a solid is. If a solid is denser than water, it will sink. If it is less dense than water, it will float.",
      examples: [
        { title: "Iron Nail", content: "An iron nail is small but very dense, so it sinks to the bottom of the water cup." },
        { title: "Cork Stopper", content: "A cork block contains trapped air and is less dense than water, so it floats." }
      ]
    },
    {
      title: "Changes in Solids: Physical Changes",
      text: "A physical change alters the size, shape, or state of a solid, but does not change what the material is made of. The molecules remain the same.",
      examples: [
        { title: "Tearing Paper", content: "Tearing a sheet of paper makes it smaller, but it is still paper." },
        { title: "Melting Ice", content: "Solid ice melting into liquid water is a physical change of state; it is still water." }
      ]
    },
    {
      title: "Changes in Solids: Chemical Changes",
      text: "A chemical change occurs when a solid turns into a completely new substance with different properties. You cannot easily reverse a chemical change.",
      examples: [
        { title: "Burning Wood", content: "Burning log turns into grey ash and smoke. You cannot turn ash back into wood." },
        { title: "Rusting Iron", content: "An iron nail left in damp air forms a reddish-brown crust called rust (iron oxide)." }
      ]
    },
    {
      title: "Scientific Inquiry: Testing Solid Properties",
      text: "Scientists run tests to observe solid properties. For example, to test hardness, we scratch surfaces. To test solubility, we place solids in water.",
      examples: [
        { title: "Testing Solubility", content: "Stirring salt into water shows it dissolves, but stirring sand shows it does not dissolve." },
        { title: "Testing Elasticity", content: "Stretching different types of plastic bands to see which returns to its size." }
      ]
    },
    {
      title: "Summary: Understanding Solid Matter",
      text: "You have learned that solids have definite shapes and volumes due to their tightly packed atomic structure. We can measure and classify solids using size, shape, mass, hardness, flexibility, and conductivity.",
      examples: [
        { title: "Review Sheet", content: "Solids: Definite shape & size -> Packed particles -> Crystals (ordered) vs Amorphous (random) -> Metric measurements." },
        { title: "Science in Action", content: "Look around you today and identify three crystalline solids and three amorphous solids in your room!" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "Which of the following is a key characteristic of all solids?",
          options: [
            "They flow and take the shape of their container.",
            "They have a definite shape and a definite volume.",
            "They are always invisible.",
            "They expand to fill any size container."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "At the microscopic level, how are the particles arranged in a solid?",
          options: [
            "They are far apart and move very fast in all directions.",
            "They are tightly packed in fixed positions and only vibrate.",
            "They slide past each other easily.",
            "They do not exist in solids."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which property explains why a stone does not melt or flow when placed in a glass?",
          options: ["Definite volume", "Definite shape", "High temperature", "Elasticity"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which metric unit is most appropriate for measuring the length of a small book?",
          options: ["Grams", "Centimeters", "Liters", "Degrees Celsius"],
          answer: 1
        },
    {
          type: "choice",
          q: "What scientific tool is designed to measure the thickness of a small marble with high precision?",
          options: ["Vernier caliper", "Meter ruler", "Balance scale", "Measuring tape"],
          answer: 0
        },
    {
          type: "choice",
          q: "How are the particles arranged inside a crystalline solid like salt?",
          options: [
            "In a highly ordered, repeating 3D pattern",
            "In a completely random and messy arrangement",
            "They are far apart with empty spaces",
            "They flow like liquids"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "Which of the following is an example of an amorphous solid?",
          options: ["Table salt", "Quartz crystal", "Candle wax", "Diamond"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which property is described as the ability of a solid to resist being scratched?",
          options: ["Flexibility", "Hardness", "Malleability", "Brittleness"],
          answer: 1
        },
    {
          type: "choice",
          q: "If you can scratch a piece of copper with an iron nail, what does this tell you about their hardness?",
          options: [
            "Copper is harder than iron.",
            "Iron is harder than copper.",
            "They have the same hardness.",
            "Neither has hardness."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which solid property is demonstrated when a stretched rubber band returns to its original shape?",
          options: ["Brittleness", "Flexibility or Elasticity", "Conductivity", "Ductility"],
          answer: 1
        },
    {
          type: "choice",
          q: "What happens to a brittle solid when it is hammered?",
          options: [
            "It bends into a curved shape.",
            "It stretches into a long wire.",
            "It shatters or breaks into pieces.",
            "It flattens into a thin sheet."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "What is the term for the property that allows metals to be hammered into thin sheets?",
          options: ["Ductility", "Malleability", "Brittleness", "Density"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which metal property allows it to be drawn out into long, thin wires?",
          options: ["Malleability", "Ductility", "Texture", "Hardness"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which tool should a scientist use to measure the mass of a solid block in grams?",
          options: ["Digital thermometer", "Balance scale", "Vernier caliper", "Measuring cup"],
          answer: 1
        },
    {
          type: "choice",
          q: "A block of wood floats on water, while a stone sinks. Why does the stone sink?",
          options: [
            "The stone has a regular shape.",
            "The stone is less dense than water.",
            "The stone is denser than water.",
            "The stone is colder than wood."
          ],
          answer: 2
        },
    {
          type: "choice",
          q: "Which of the following is a magnetic solid?",
          options: ["Wooden block", "Plastic toy", "Steel screw", "Gold ring"],
          answer: 2
        },
    {
          type: "choice",
          q: "Why are electric wires coated in plastic?",
          options: [
            "Plastic is a good conductor of electricity.",
            "Plastic is a good insulator that blocks electric shock.",
            "Plastic makes the wires heavier.",
            "Plastic makes the wires magnetic."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What type of change occurs when you crush a chalk into powder?",
          options: ["Chemical change", "Physical change", "Phase change", "No change"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is a chemical change in a solid?",
          options: [
            "Cutting wood into smaller blocks",
            "An iron nail rusting in damp air",
            "Melting candle wax",
            "Tearing paper sheets"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Why does a metal spoon in hot tea become hot quickly?",
          options: [
            "Metals are good insulators.",
            "Metals are good conductors of heat.",
            "Metals generate their own heat.",
            "Metals reject heat energy."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which solid has an irregular shape?",
          options: ["A plastic toy block", "A glass marble", "A piece of garden rock", "A standard playing dice"],
          answer: 2
        },
    {
          type: "choice",
          q: "What does the volume of a solid represent?",
          options: [
            "The weight of the solid",
            "The amount of space the solid occupies",
            "The hardness of the surface",
            "The number of atoms in the solid"
          ],
          answer: 1
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: Crystalline solids have an ordered repeating atomic structure, while amorphous solids have a disordered arrangement.",
            "Statement B: Amorphous solids have an ordered repeating atomic structure, while crystalline solids have a disordered arrangement."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "What is the term for anything that has mass and takes up space?",
          answer: "matter"
        },
    {
          type: "choice",
          q: "Which of the following properties is true for all solid matter?",
          options: [
            "They change shape depending on the container.",
            "They have a definite shape and volume.",
            "They expand to fill any empty room.",
            "They flow easily like water."
          ],
          answer: 1
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "Why does heating a solid make it softer or cause it to melt?",
      options: [
        "The heat energy causes the locked particles to vibrate faster and break their rigid bonds.",
        "Heat energy makes the atoms disappear.",
        "Heat turns the solid particles into air directly.",
        "Heat causes the forces of attraction to become stronger."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "If you have a solid cube that is 2 cm on each side, what is its volume in cubic centimeters?",
      options: ["4", "6", "8", "12"],
      answer: 2 // 2 x 2 x 2 = 8
    },
    {
      type: "choice",
      q: "Which solid is a metal, magnetic, malleable, and conducts electricity?",
      options: ["Glass cup", "Iron nail", "Rubber eraser", "Wooden pencil"],
      answer: 1
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: Malleability allows metals to be hammered into sheets, and ductility allows them to be drawn into wires.",
        "Statement B: Malleability allows metals to be drawn into wires, and ductility allows them to be hammered into sheets."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "What is the name of the scale used in science class to measure the mass of solids in grams?",
      answer: "balance scale"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Solid Classification Task",
        desc: "Find three different solids in your home (e.g. a metal spoon, a rubber band, a plastic cup). Test and write down three properties for each solid (such as: magnetic or not, flexible or brittle, hard or soft). Share your observations.",
        labels: ["Three distinct solids identified", "Three physical properties recorded for each solid", "Correct classification of materials based on tests"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Solid Properties</h3>\n                  <p class=\"ws-instruction\">Match each solid object (Marble, Book, Sponge, Clay) with its primary physical property (Spherical, Rectangular, Soft/Porous, Malleable).</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. Sponge: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. Clay: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. Marble: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. Book: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Solid Classification</h3>\n                  <p class=\"ws-instruction\">Draw two solid objects from your bag: one that has a regular shape (e.g. pencil case) and one that can be easily folded or squished.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Regular shape solid</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Flexible solid</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Drawing Solid Shapes</h3>\n                  <p class=\"ws-instruction\">In the dashed boxes below, sketch one round solid and one rectangular solid object.</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 15px;\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Round Solid (e.g. Ball)</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\">\n                        <span>Draw round solid here</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Rectangular Solid (e.g. Box)</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\">\n                        <span>Draw rectangular solid here</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK2_DATA.english = {
  color: "#3b82f6",
  icon: "🙋‍♂️",
  title: "English",
  subtitle: "Week 2: My Family & Short Vowel Sounds",
  slides: [
    {
      title: "Understanding Family Members",
      text: "A family is a group of people who are related to each other. Families are made of different members: parents (father and mother), siblings (brothers and sisters), and extended family.",
      examples: [
        { title: "Nuclear Family", content: "Lina lives with her father, mother, and younger brother. This is a nuclear family." },
        { title: "Extended Family", content: "Ben lives with his parents, sister, and his grandfather. This is an extended family." }
      ]
    },
    {
      title: "Roles of Parents in a Family",
      text: "Parents take care of their children, provide food, clothing, shelter, and guide them to do what is right. They work hard to support the family.",
      examples: [
        { title: "Father's Role", content: "A father working in an office to support his family and cooking dinner on weekends." },
        { title: "Mother's Role", content: "A mother helping her children with their lessons and taking care of the home." }
      ]
    },
    {
      title: "Roles of Children in a Family",
      text: "Children show respect, listen to their parents, study hard, and help with simple chores around the house. Cooperative children make a happy family.",
      examples: [
        { title: "Helping out", content: "Washing the dishes after dinner and folding your own clean clothes." },
        { title: "Studying Hard", content: "Doing your homework every afternoon to make your parents proud." }
      ]
    },
    {
      title: "Extended Family: Grandparents and Cousins",
      text: "Grandparents are the parents of your mother or father. Uncles and aunts are the brothers and sisters of your parents. Their children are your cousins.",
      examples: [
        { title: "Grandmother's Advice", content: "Listening to your grandmother tell stories of the past." },
        { title: "Playing with Cousins", content: "Visiting your cousins during summer holidays to play tag." }
      ]
    },
    {
      title: "Expressing Family Love",
      text: "We can express love to our family through kind words, helpful actions, and spending time together. A loving family supports each other.",
      examples: [
        { title: "Kind Words", content: "Saying 'I love you, Mom' or 'Thank you for the delicious lunch, Dad'." },
        { title: "Family Time", content: "Having dinner together every night and sharing how your school day went." }
      ]
    },
    {
      title: "Introduction to Short Vowel Sounds",
      text: "Vowels are the letters A, E, I, O, U. Short vowel sounds are the basic sounds these letters make in CVC (Consonant-Vowel-Consonant) words.",
      examples: [
        { title: "Short Vowel List", content: "Short /a/ in cat, short /e/ in red, short /i/ in pin, short /o/ in mop, short /u/ in tub." },
        { title: "CVC Patterns", content: "These words always begin with a consonant, have a single vowel, and end with a consonant." }
      ]
    },
    {
      title: "The Short /a/ Sound",
      text: "The short /a/ sound is pronounced like the 'a' in 'cat', 'map', or 'van'. Open your mouth wide when pronouncing this sound.",
      examples: [
        { title: "Rhyming Words", content: "Cat, bat, rat, fat, mat, hat." },
        { title: "In a Sentence", content: "'The fat cat sat on the mat.'" }
      ]
    },
    {
      title: "The Short /e/ Sound",
      text: "The short /e/ sound is pronounced like the 'e' in 'red', 'hen', or 'wet'. Keep your mouth slightly open and relaxed.",
      examples: [
        { title: "Rhyming Words", content: "Red, bed, fed, led, net, wet, pet." },
        { title: "In a Sentence", content: "'Ten red hens are in the pen.'" }
      ]
    },
    {
      title: "The Short /i/ Sound",
      text: "The short /i/ sound is pronounced like the 'i' in 'pin', 'sit', or 'mop'? No, 'mop' is /o/. 'pin', 'sit', 'wig', or 'bin'. Your mouth is slightly open, smiling.",
      examples: [
        { title: "Rhyming Words", content: "Pin, tin, fin, win, sit, fit, bit." },
        { title: "In a Sentence", content: "'The tin pin is in the bin.'" }
      ]
    },
    {
      title: "The Short /o/ Sound",
      text: "The short /o/ sound is pronounced like the 'o' in 'mop', 'box', or 'pot'. Your mouth forms a round shape.",
      examples: [
        { title: "Rhyming Words", content: "Mop, top, hop, cop, pot, hot, cot." },
        { title: "In a Sentence", content: "'A hot pot is on the cot.'" }
      ]
    },
    {
      title: "The Short /u/ Sound",
      text: "The short /u/ sound is pronounced like the 'u' in 'tub', 'cup', or 'mud'. Keep your jaw relaxed and low.",
      examples: [
        { title: "Rhyming Words", content: "Tub, rub, sub, cub, cup, pup, mud." },
        { title: "In a Sentence", content: "'The pup is in the mud by the tub.'" }
      ]
    },
    {
      title: "Decoding CVC Words",
      text: "Decoding means sounding out each letter in a word from left to right and blending the sounds together. Practice blending the letters slowly.",
      examples: [
        { title: "Blending /b/ /a/ /g/", content: "Sound out: /b/ - /a/ - /g/. Blend: bag." },
        { title: "Blending /t/ /e/ /n/", content: "Sound out: /t/ - /e/ - /n/. Blend: ten." }
      ]
    },
    {
      title: "Short /a/ vs. Short /e/ Sounds",
      text: "It is important to hear the difference between short /a/ and short /e/ because mixing them changes the meaning of words.",
      examples: [
        { title: "Word Pairs", content: "Pan (cooking tool) vs. Pen (writing tool)." },
        { title: "Word Pairs 2", content: "Bat (sports club/animal) vs. Bet (wager)." }
      ]
    },
    {
      title: "Short /i/ vs. Short /e/ Sounds",
      text: "Listen carefully to the difference between short /i/ and short /e/. Short /i/ has a smiling shape, while short /e/ is more open.",
      examples: [
        { title: "Word Pairs", content: "Pin (sharp metal) vs. Pen (writing tool)." },
        { title: "Word Pairs 2", content: "Sit (action verb) vs. Set (group/position)." }
      ]
    },
    {
      title: "Short /o/ vs. Short /u/ Sounds",
      text: "Compare short /o/ (round mouth) and short /u/ (relaxed mouth). These sounds can sound very similar.",
      examples: [
        { title: "Word Pairs", content: "Hot (temperature) vs. Hut (small house)." },
        { title: "Word Pairs 2", content: "Cop (police officer) vs. Cup (drinking container)." }
      ]
    },
    {
      title: "Reading Sentences with Short /a/ and /e/",
      text: "Let's read simple stories containing short /a/ and /e/ words. Look at the CVC words and blend the sounds.",
      examples: [
        { title: "Short Story", content: "'Dan has a red pen. He met a cat on the bed.'" },
        { title: "Vocabulary check", content: "CVC words here: Dan, has, red, pen, met, cat, bed." }
      ]
    },
    {
      title: "Reading Sentences with Short /i/ and /o/",
      text: "Practice reading sentences with short /i/ and /o/ words. Sound out each word carefully.",
      examples: [
        { title: "Short Story", content: "'Tim has a dog. The dog can hop on the big log.'" },
        { title: "CVC words", content: "CVC words here: Tim, dog, hop, big, log." }
      ]
    },
    {
      title: "Reading Sentences with Short /u/",
      text: "Practice reading sentences with short /u/ words. Look for CVC patterns.",
      examples: [
        { title: "Short Story", content: "'The sun is hot. The pup ran to get the cup.'" },
        { title: "CVC words", content: "CVC words here: sun, hot, pup, ran, get, cup." }
      ]
    },
    {
      title: "Word Families: -at and -an",
      text: "Words with the same ending sound belong to the same word family. The -at family has a short /a/ sound, and the -an family also has short /a/.",
      examples: [
        { title: "-at family", content: "Cat, hat, bat, sat, rat." },
        { title: "-an family", content: "Can, fan, pan, man, van." }
      ]
    },
    {
      title: "Word Families: -et and -en",
      text: "The -et and -en families use the short /e/ sound. They are very common in early English readings.",
      examples: [
        { title: "-et family", content: "Net, pet, wet, let, jet." },
        { title: "-en family", content: "Ten, hen, pen, men, den." }
      ]
    },
    {
      title: "Word Families: -in and -ig",
      text: "The -in and -ig families use the short /i/ sound. They rhyme easily.",
      examples: [
        { title: "-in family", content: "Pin, tin, bin, win, fin." },
        { title: "-ig family", content: "Pig, big, wig, dig, fig." }
      ]
    },
    {
      title: "Word Families: -ot and -op",
      text: "The -ot and -op families use the short /o/ sound. Practice reading them rapidly.",
      examples: [
        { title: "-ot family", content: "Pot, hot, dot, cot, not." },
        { title: "-op family", content: "Mop, hop, top, cop, pop." }
      ]
    },
    {
      title: "Word Families: -ug and -un",
      text: "The -ug and -un families use the short /u/ sound. They are easy to blend.",
      examples: [
        { title: "-ug family", content: "Mug, bug, rug, hug, jug." },
        { title: "-un family", content: "Sun, run, fun, bun, gun." }
      ]
    },
    {
      title: "Spelling CVC Words",
      text: "To spell a CVC word, listen to the first consonant sound, then the vowel sound, and finally the ending consonant sound. Write the letters down.",
      examples: [
        { title: "Spelling /p/ /e/ /n/", content: "Sound 1: /p/ (p), Sound 2: /e/ (e), Sound 3: /n/ (n). Word: pen." },
        { title: "Spelling /b/ /u/ /g/", content: "Sound 1: /b/ (b), Sound 2: /u/ (u), Sound 3: /g/ (g). Word: bug." }
      ]
    },
    {
      title: "Summary: Families and Short Vowels",
      text: "You have reviewed the roles of family members, how to express family love, and how to decode, read, and spell CVC words using the five short vowel sounds.",
      examples: [
        { title: "Hygiene and Study", content: "Helping parents is a disciplined habit. Reading short vowels makes you a better English speaker." },
        { title: "Daily Challenge", content: "Draw your family tree today and label the members. Practice finding 5 CVC objects around your house!" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "Who are the parents of your mother or father?",
          options: ["Siblings", "Grandparents", "Cousins", "Uncles"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which word represents the brother or sister of your father?",
          options: ["Brother", "Sister", "Uncle or Aunt", "Grandfather"],
          answer: 2
        },
    {
          type: "choice",
          q: "What is a good way for children to show cooperation in a family?",
          options: [
            "Shouting at your siblings.",
            "Helping with simple chores like sweep.",
            "Leaving your toys on the floor.",
            "Refusing to do homework."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is an extended family member?",
          options: ["Father", "Mother", "Cousin", "Brother"],
          answer: 2
        },
    {
          type: "choice",
          q: "How can you show love to your parents after school?",
          options: [
            "Throw your bag on the floor.",
            "Greet them with a smile and tell them about your day.",
            "Demand toys immediately.",
            "Hide in your room without speaking."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following letters are vowels?",
          options: ["b, c, d, f", "a, e, i, o, u", "x, y, z", "m, n, p, r"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which word has a short /a/ vowel sound?",
          options: ["cat", "red", "pin", "mop"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which word has a short /e/ vowel sound?",
          options: ["bat", "hen", "sit", "hot"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which word has a short /i/ vowel sound?",
          options: ["hat", "pet", "fin", "sun"],
          answer: 2
        },
    {
          type: "choice",
          q: "Which word has a short /o/ vowel sound?",
          options: ["mop", "tub", "pen", "man"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which word has a short /u/ vowel sound?",
          options: ["wet", "dog", "bug", "can"],
          answer: 2
        },
    {
          type: "choice",
          q: "In the sentence 'The red pen is on the bed', which words have the short /e/ sound?",
          options: ["red, pen, bed", "red, is, on", "pen, on, the", "is, on, bed"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which word rhymes with 'hat' and belongs to the -at family?",
          options: ["hen", "bat", "hot", "hut"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which word rhymes with 'wet' and belongs to the -et family?",
          options: ["net", "pin", "mop", "bag"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which word rhymes with 'tin' and belongs to the -in family?",
          options: ["ten", "bin", "tub", "can"],
          answer: 1
        },
    {
          type: "choice",
          q: "Which word rhymes with 'hop' and belongs to the -op family?",
          options: ["mop", "hen", "sun", "wet"],
          answer: 0
        },
    {
          type: "choice",
          q: "Which word rhymes with 'run' and belongs to the -un family?",
          options: ["sun", "red", "tin", "cap"],
          answer: 0
        },
    {
          type: "choice",
          q: "What is the correct spelling of a tool used to fry food?",
          options: ["pen", "pin", "pan", "pun"],
          answer: 2
        },
    {
          type: "choice",
          q: "What is the correct spelling of a writing tool?",
          options: ["pan", "pen", "pin", "pun"],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the correct spelling of a sharp metal tack?",
          options: ["pan", "pen", "pin", "pon"],
          answer: 2
        },
    {
          type: "choice",
          q: "If you change the vowel /a/ in 'bag' to /e/, what new word do you get?",
          options: ["big", "beg", "bug", "bog"],
          answer: 1
        },
    {
          type: "choice",
          q: "If you change the vowel /o/ in 'cot' to /u/, what new CVC word do you get?",
          options: ["cat", "cut", "cit", "cet"],
          answer: 1
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: Short vowel sounds are found in CVC words like cat, pen, bin, hot, and rug.",
            "Statement B: Short vowel sounds are found in words like cake, bike, rope, and tube."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "Spell the CVC word that means a young dog and has a short /u/ sound.",
          answer: "pup"
        },
    {
          type: "choice",
          q: "Identify the word that has a short /a/ vowel sound:",
          options: ["cake", "rain", "hat", "play"],
          answer: 2
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "Which family member relationship is described here: 'My father's sister is my...'?",
      options: ["Grandmother", "Cousin", "Aunt", "Sister"],
      answer: 2
    },
    {
      type: "choice",
      q: "In a sentence 'The pup is in the mud by the tub', which vowel sound is repeated the most in CVC words?",
      options: ["Short /a/", "Short /e/", "Short /i/", "Short /u/"],
      answer: 3
    },
    {
      type: "choice",
      q: "Which CVC word represents a container used to hold water or liquids?",
      options: ["tub", "tab", "tan", "ten"],
      answer: 0
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: A nuclear family includes parents and siblings, while an extended family includes grandparents, aunts, uncles, and cousins.",
        "Statement B: A nuclear family includes grandparents and cousins, while an extended family includes only parents."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "I am a CVC word. My first letter is M. My last letter is D. I rhyme with bud and represent wet soil. What word am I?",
      answer: "mud"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Family Story Reading",
        desc: "Read this short story out loud to your parent or teacher: 'Ben has a red bag. Tim has a small dog. The dog can run in the sun. Ben and Tim are brothers.' Identify all the CVC words in the story.",
        labels: ["Pronounced all short vowel sounds correctly", "Identified at least five CVC words in the story", "Read with steady volume and clear articulation"]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: My Family Tree</h3>\n                  <p class=\"ws-instruction\">Fill in the family card lines with the names and traits of your mother and father.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\" style=\"border-right: 1px solid var(--border-color); padding-right: 10px;\">\n                      <h4>My Mother</h4>\n                      <div style=\"margin-bottom: 15px;\">Name: <div class=\"writing-line inline-line\" style=\"width: 60%; display:inline-block;\"></div></div>\n                      <div>Trait: <div class=\"writing-line inline-line\" style=\"width: 60%; display:inline-block;\"></div></div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"padding-left: 10px;\">\n                      <h4>My Father</h4>\n                      <div style=\"margin-bottom: 15px;\">Name: <div class=\"writing-line inline-line\" style=\"width: 60%; display:inline-block;\"></div></div>\n                      <div>Trait: <div class=\"writing-line inline-line\" style=\"width: 60%; display:inline-block;\"></div></div>\n                    </div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Short Vowel Phonics</h3>\n                  <p class=\"ws-instruction\">Complete the short vowel CVC words based on the clues.</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 20px;\">1. A animal that purrs (c _ t): <div class=\"writing-line inline-line\" style=\"width: 150px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. A red cooking utensil (p _ t): <div class=\"writing-line inline-line\" style=\"width: 150px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">3. A tool to write with (p _ n): <div class=\"writing-line inline-line\" style=\"width: 150px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">4. A large container of water (t _ b): <div class=\"writing-line inline-line\" style=\"width: 150px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Vowel Sound Connections</h3>\n                  <p class=\"ws-instruction\">Draw a line using your stylus to connect the CVC word to its correct short vowel sound group.</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 15px;\">\n                    <div class=\"ws-col-half\" style=\"font-size: 16px; line-height: 2.2;\">\n                      <div>1. c-a-t (Cat)</div>\n                      <div>2. p-e-n (Pen)</div>\n                      <div>3. p-i-g (Pig)</div>\n                      <div>4. b-u-g (Bug)</div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"font-size: 16px; line-height: 2.2; text-align: right; padding-right: 40px;\">\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Short /e/ sound</div>\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Short /i/ sound</div>\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Short /a/ sound</div>\n                      <div>[ &nbsp; &nbsp; ] &nbsp; Short /u/ sound</div>\n                    </div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK2_DATA.filipino = {
  color: "#ef4444",
  icon: "🇵🇭",
  title: "Filipino",
  subtitle: "Week 2: Kasarian ng Pangngalan",
  slides: [
    {
      title: "Ano ang Kasarian ng Pangngalan?",
      text: "<span class=\"fil-sentence\" data-translation=\"Gender of nouns divides names into male, female, either, or objects without gender.\">Ang kasarian ng pangngalan ay naghahati sa mga ngalan ayon sa kasariang panlalaki, pambabae, di-tiyak, o walang kasarian.</span>",
      examples: [
        { title: "Panlalaki", content: "<span class=\"fil-sentence\" data-translation=\"'Ama' (father) or 'kuya' (elder brother) belongs to male gender.\">Ang 'ama' o 'kuya' ay kasariang panlalaki.</span>" },
        { title: "Pambabae", content: "<span class=\"fil-sentence\" data-translation=\"'Ina' (mother) or 'ate' (elder sister) belongs to female gender.\">Ang 'ina' o 'ate' ay kasariang pambabae.</span>" }
      ]
    },
    {
      title: "Ang Apat na Kasarian ng Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"There are four classifications of noun gender: Panlalaki, Pambabae, Di-tiyak, and Walang Kasarian.\">May apat na kasarian ang pangngalan: Panlalaki, Pambabae, Di-tiyak, at Walang Kasarian.</span>",
      examples: [
        { title: "Panlalaki at Pambabae", content: "<span class=\"fil-sentence\" data-translation=\"Male and female genders are specific to male and female living creatures.\">Ang panlalaki at pambabae ay para sa mga tiyak na kasarian ng tao o hayop.</span>" },
        { title: "Di-tiyak at Walang Kasarian", content: "<span class=\"fil-sentence\" data-translation=\"Di-tiyak is for either gender, while Walang Kasarian is for inanimate objects.\">Ang di-tiyak ay maaaring babae o lalaki, samantalang ang walang kasarian ay para sa mga bagay.</span>" }
      ]
    },
    {
      title: "Kasariang Panlalaki (Masculine)",
      text: "<span class=\"fil-sentence\" data-translation=\"Panlalaki refers to proper or common names of males, whether humans or animals.\">Ang kasariang panlalaki ay tumutukoy sa tiyak o karaniwang ngalan para sa lalaki, maging tao man o hayop.</span>",
      examples: [
        { title: "Tao", content: "<span class=\"fil-sentence\" data-translation=\"Lolo (grandfather), ama (father), tito (uncle), hari (king), pari (priest).\">Lolo, ama, tito, hari, pari.</span>" },
        { title: "Hayop", content: "<span class=\"fil-sentence\" data-translation=\"Tandang (rooster), barako (wild boar/male animal).\">Tandang, barako.</span>" }
      ]
    },
    {
      title: "Kasariang Pambabae (Feminine)",
      text: "<span class=\"fil-sentence\" data-translation=\"Pambabae refers to proper or common names of females, whether humans or animals.\">Ang kasariang pambabae ay tumutukoy sa tiyak o karaniwang ngalan para sa babae, maging tao man o hayop.</span>",
      examples: [
        { title: "Tao", content: "<span class=\"fil-sentence\" data-translation=\"Lola (grandmother), ina (mother), tita (aunt), reyna (queen), madre (nun).\">Lola, ina, tita, reyna, madre.</span>" },
        { title: "Hayop", content: "<span class=\"fil-sentence\" data-translation=\"Inahin (hen), dumalaga (young female animal).\">Inahin, dumalaga.</span>" }
      ]
    },
    {
      title: "Kasariang Di-tiyak (Indeterminate/Common)",
      text: "<span class=\"fil-sentence\" data-translation=\"Di-tiyak refers to nouns that can represent either a male or a female person/animal. The gender is not specified.\">Ang kasariang di-tiyak ay tumutukoy sa mga pangngalang maaaring lalaki o babae. Hindi tiyak ang kasarian nito kung walang karagdagang detalye.</span>",
      examples: [
        { title: "Tao", content: "<span class=\"fil-sentence\" data-translation=\"Guro (teacher), doktor (doctor), mag-aaral (student), kapatid (sibling), kaibigan (friend).\">Guro, doktor, mag-aaral, kapatid, kaibigan.</span>" },
        { title: "Hayop", content: "<span class=\"fil-sentence\" data-translation=\"Aso (dog), pusa (cat), ibon (bird) - these can be male or female.\">Aso, pusa, ibon - maaari silang lalaki o babae.</span>" }
      ]
    },
    {
      title: "Kasariang Walang Kasarian (Neuter)",
      text: "<span class=\"fil-sentence\" data-translation=\"Walang kasarian refers to inanimate objects, places, or events that have no biological gender.\">Ang kasariang walang kasarian ay tumutukoy sa mga bagay, lugar, o pangyayari na walang buhay at walang biological gender.</span>",
      examples: [
        { title: "Mga Bagay", content: "<span class=\"fil-sentence\" data-translation=\"Lapis (pencil), aklat (book), mesa (table), silya (chair).\">Lapis, aklat, mesa, silya.</span>" },
        { title: "Lugar at Pangyayari", content: "<span class=\"fil-sentence\" data-translation=\"Paaralan (school), simbahan (church), Pasko (Christmas).\">Paaralan, simbahan, Pasko.</span>" }
      ]
    },
    {
      title: "Panlalaki vs. Pambabae: Pagkakaiba",
      text: "<span class=\"fil-sentence\" data-translation=\"Many masculine and feminine nouns have corresponding pairs in our language.\">Maraming pangngalang panlalaki at pambabae ang may magkatapat na kapareha sa ating wika.</span>",
      examples: [
        { title: "Mag-anak", content: "<span class=\"fil-sentence\" data-translation=\"Panlalaki: ama -> Pambabae: ina | Panlalaki: tito -> Pambabae: tita\">Panlalaki: ama -> Pambabae: ina | Panlalaki: tito -> Pambabae: tita</span>" },
        { title: "Lipunan", content: "<span class=\"fil-sentence\" data-translation=\"Panlalaki: hari -> Pambabae: reyna | Panlalaki: aktor -> Pambabae: aktres\">Panlalaki: hari -> Pambabae: reyna | Panlalaki: aktor -> Pambabae: aktres</span>" }
      ]
    },
    {
      title: "Pagtukoy sa Panlalaki sa Pangungusap",
      text: "<span class=\"fil-sentence\" data-translation=\"Look for masculine names or roles in the sentence to identify panlalaki nouns.\">Hanapin ang mga ngalang panlalaki sa pangungusap upang matukoy ang kasariang ito.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Ang aking kuya ay matangkad.' 'kuya' is panlalaki.\">'Ang aking kuya ay matangkad.' Ang 'kuya' ay panlalaki.</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Si Tatay Ben ay nagtatrabaho.' 'Tatay Ben' is panlalaki.\">'Si Tatay Ben ay nagtatrabaho.' Ang 'Tatay Ben' ay panlalaki.</span>" }
      ]
    },
    {
      title: "Pagtukoy sa Pambabae sa Pangungusap",
      text: "<span class=\"fil-sentence\" data-translation=\"Look for feminine names or roles in the sentence to identify pambabae nouns.\">Hanapin ang mga ngalang pambabae sa pangungusap upang matukoy ang kasariang ito.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Maganda ang aking ate.' 'ate' is pambabae.\">'Maganda ang aking ate.' Ang 'ate' ay pambabae.</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Si Lola Maria ay nagluluto.' 'Lola Maria' is pambabae.\">'Si Lola Maria ay nagluluto.' Ang 'Lola Maria' ay pambabae.</span>" }
      ]
    },
    {
      title: "Pagtukoy sa Di-tiyak sa Pangungusap",
      text: "<span class=\"fil-sentence\" data-translation=\"Di-tiyak nouns refer to professions or relations that can be held by either men or women.\">Ang di-tiyak ay tumutukoy sa mga trabaho o relasyon na maaaring gampanan ng lalaki o babae.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Mabait ang aming guro.' 'guro' is di-tiyak because a teacher can be a man or a woman.\">'Mabait ang aming guro.' Ang 'guro' ay di-tiyak dahil maaari itong lalaki o babae.</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Siya ay isang mag-aaral.' 'mag-aaral' is di-tiyak.\">'Siya ay isang mag-aaral.' Ang 'mag-aaral' ay di-tiyak.</span>" }
      ]
    },
    {
      title: "Pagtukoy sa Walang Kasarian",
      text: "<span class=\"fil-sentence\" data-translation=\"Identify nouns representing things, places, or events. These are always walang kasarian.\">Tukuyin ang mga pangngalang tumutukoy sa bagay, lugar, o pangyayari. Sila ay walang kasarian.</span>",
      examples: [
        { title: "Pangungusap 1", content: "<span class=\"fil-sentence\" data-translation=\"'Malinis ang aming silid-aralan.' 'silid-aralan' (classroom) is walang kasarian.\">'Malinis ang aming silid-aralan.' Ang 'silid-aralan' ay walang kasarian.</span>" },
        { title: "Pangungusap 2", content: "<span class=\"fil-sentence\" data-translation=\"'Bumili ako ng bagong sapatos.' 'sapatos' is walang kasarian.\">'Bumili ako ng bagong sapatos.' Ang 'sapatos' ay walang kasarian.</span>" }
      ]
    },
    {
      title: "Masculine Animals: Tandang",
      text: "<span class=\"fil-sentence\" data-translation=\"In animals, specific male terms exist. 'Tandang' is a rooster (male chicken).\">Sa mga hayop, may tiyak na salita para sa lalaki tulad ng 'tandang' o male chicken.</span>",
      examples: [
        { title: "Tandang", content: "<span class=\"fil-sentence\" data-translation=\"The rooster crows in the morning. (Tandang belongs to panlalaki)\">Tumitilaok ang tandang tuwing umaga. (Ang 'tandang' ay panlalaki)</span>" },
        { title: "Katapat", content: "<span class=\"fil-sentence\" data-translation=\"The female counterpart of tandang is inahin (hen).\">Ang katapat na pambabae ng tandang ay inahin.</span>" }
      ]
    },
    {
      title: "Feminine Animals: Inahin",
      text: "<span class=\"fil-sentence\" data-translation=\"In animals, 'inahin' refers to a mother animal or hen, representing the feminine gender.\">Sa mga hayop, ang 'inahin' ay tumutukoy sa inang hayop, na kumakatawan sa kasariang pambabae.</span>",
      examples: [
        { title: "Inahing Manok", content: "<span class=\"fil-sentence\" data-translation=\"The hen lays eggs in the nest. (Inahin belongs to pambabae)\">Nangitlog ang inahing manok sa pugad. (Ang 'inahin' ay pambabae)</span>" },
        { title: "Inahing Baboy", content: "<span class=\"fil-sentence\" data-translation=\"A mother pig with her piglets.\">Isang inahing baboy kasama ang kanyang mga kuligwig.</span>" }
      ]
    },
    {
      title: "Mga Propesyon bilang Di-tiyak",
      text: "<span class=\"fil-sentence\" data-translation=\"Most occupation names in Filipino are indeterminate in gender (di-tiyak) unless modified.\">Karamihan sa ngalan ng trabaho sa Filipino ay di-tiyak ang kasarian maliban kung lalagyan ng salitang lalaki o babae.</span>",
      examples: [
        { title: "Doktor", content: "<span class=\"fil-sentence\" data-translation=\"'Doktor' is di-tiyak. We can say 'doktor na lalaki' (male doctor) or 'doktor na babae'.\">Ang 'doktor' ay di-tiyak. Maaari nating sabihing 'doktor na lalaki' o 'doktor na babae'.</span>" },
        { title: "Pulis", content: "<span class=\"fil-sentence\" data-translation=\"'Pulis' is di-tiyak. We can say 'pulis na babae' (policewoman).\">Ang 'pulis' ay di-tiyak. Maaari nating sabihing 'pulis na babae'.</span>" }
      ]
    },
    {
      title: "Mga Bagay na Ginagamit sa Paaralan",
      text: "<span class=\"fil-sentence\" data-translation=\"All study supplies like pens, notebooks, and blackboards have no gender (walang kasarian).\">Lahat ng gamit sa pag-aaral tulad ng lapis at notebook ay walang kasarian.</span>",
      examples: [
        { title: "Lapis", content: "<span class=\"fil-sentence\" data-translation=\"'Lapis' is a tool without biological gender.\">Ang 'lapis' ay gamit na walang biological gender.</span>" },
        { title: "Aklat", content: "<span class=\"fil-sentence\" data-translation=\"'Aklat' is an object and belongs to walang kasarian.\">Ang 'aklat' ay isang bagay at walang kasarian.</span>" }
      ]
    },
    {
      title: "Mga Katutubong Titulo sa Kasaysayan",
      text: "<span class=\"fil-sentence\" data-translation=\"Our history has specific titles based on gender that we must remember.\">Ang ating kasaysayan ay may mga tiyak na titulo batay sa kasarian na dapat nating tandaan.</span>",
      examples: [
        { title: "Datu", content: "<span class=\"fil-sentence\" data-translation=\"'Datu' is a title for a male community leader (panlalaki).\">Ang 'datu' ay titulo para sa lalaking pinuno (panlalaki).</span>" },
        { title: "Babaylan", content: "<span class=\"fil-sentence\" data-translation=\"'Babaylan' is historically a female spiritual healer (pambabae).\">Ang 'babaylan' ay nakasulat sa kasaysayan bilang babaeng manggagamot (pambabae).</span>" }
      ]
    },
    {
      title: "Pangngalang Di-tiyak: Mga Kapatid",
      text: "<span class=\"fil-sentence\" data-translation=\"The word 'kapatid' (sibling) is indeterminate. To specify, we use 'kuya' or 'ate'.\">Ang salitang 'kapatid' ay di-tiyak. Upang tukuyin, ginagamit natin ang 'kuya' o 'ate'.</span>",
      examples: [
        { title: "Kapatid", content: "<span class=\"fil-sentence\" data-translation=\"'May kapatid ako.' (We don't know if brother or sister - di-tiyak)\">'May kapatid ako.' (Hindi natin alam kung kapatid na lalaki o babae - di-tiyak)</span>" },
        { title: "Kuya at Ate", content: "<span class=\"fil-sentence\" data-translation=\"'Si Kuya ay lalaro.' (kuya is male). 'Si Ate ay magdidilig.' (ate is female).\">'Si Kuya ay lalaro.' (panlalaki). 'Si Ate ay magdidilig.' (pambabae).</span>" }
      ]
    },
    {
      title: "Kasarian sa mga Katawagang Espanyol",
      text: "<span class=\"fil-sentence\" data-translation=\"In words borrowed from Spanish, words ending in 'o' are usually masculine, and 'a' are feminine.\">Sa mga salitang hiram sa Espanyol, ang nagtatapos sa 'o' ay karaniwang panlalaki, at 'a' naman ay pambabae.</span>",
      examples: [
        { title: "Propesyon", content: "<span class=\"fil-sentence\" data-translation=\"Panlalaki: tindero (male vendor) -> Pambabae: tindera (female vendor)\">Panlalaki: tindero -> Pambabae: tindera</span>" },
        { title: "Tao", content: "<span class=\"fil-sentence\" data-translation=\"Panlalaki: abuelo (grandfather) -> Pambabae: abuela (grandmother)\">Panlalaki: abuelo -> Pambabae: abuela</span>" }
      ]
    },
    {
      title: "Pagsasanay sa Kasarian",
      text: "<span class=\"fil-sentence\" data-translation=\"Let's practice classifying nouns into the four gender groups.\">Magsanay tayong mag-uri ng pangngalan sa apat na pangkat ng kasarian.</span>",
      examples: [
        { title: "Pagsasanay 1", content: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'pari' (priest)? Answer: Panlalaki\">Ano ang kasarian ng 'pari'? Sagot: Panlalaki</span>" },
        { title: "Pagsasanay 2", content: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'silya' (chair)? Answer: Walang kasarian\">Ano ang kasarian ng 'silya'? Sagot: Walang Kasarian</span>" }
      ]
    },
    {
      title: "Kasarian ng mga Bagay sa Bahay",
      text: "<span class=\"fil-sentence\" data-translation=\"All household furniture and appliances are walang kasarian because they are non-living.\">Lahat ng kasangkapan sa bahay ay walang kasarian dahil sila ay walang buhay.</span>",
      examples: [
        { title: "Kutsara at Tinidor", content: "<span class=\"fil-sentence\" data-translation=\"'Kutsara' (spoon) and 'tinidor' (fork) are walang kasarian.\">Ang 'kutsara' at 'tinidor' ay walang kasarian.</span>" },
        { title: "Telebisyon", content: "<span class=\"fil-sentence\" data-translation=\"'Telebisyon' is an object and has no gender.\">Ang 'telebisyon' ay isang bagay at walang kasarian.</span>" }
      ]
    },
    {
      title: "Kasarian ng mga Hayop sa Paligid",
      text: "<span class=\"fil-sentence\" data-translation=\"General names of animal species are di-tiyak, while specific sex names are panlalaki/pambabae.\">Ang mga karaniwang pangalan ng hayop ay di-tiyak, habang ang mga tiyak na tawag sa ari ay panlalaki o pambabae.</span>",
      examples: [
        { title: "Ibon", content: "<span class=\"fil-sentence\" data-translation=\"'Ibon' (bird) is di-tiyak because it can be male or female.\">Ang 'ibon' ay di-tiyak dahil maaari itong lalaki o babae.</span>" },
        { title: "Tandang at Inahin", content: "<span class=\"fil-sentence\" data-translation=\"'Tandang' is male chicken, 'inahin' is female chicken.\">Ang 'tandang' ay lalaking manok, ang 'inahin' ay babaeng manok.</span>" }
      ]
    },
    {
      title: "Kahalagahan ng Wasto sa Kasarian",
      text: "<span class=\"fil-sentence\" data-translation=\"Using the correct gender terms makes our speech accurate and polite when introducing people.\">Ang paggamit ng tamang kasarian ay nagiging wasto at magalang sa pakikipag-usap at pagpapakilala.</span>",
      examples: [
        { title: "Pagpapakilala sa Tito", content: "<span class=\"fil-sentence\" data-translation=\"'Ipinapakilala ko ang aking tito.' (Using tito correctly for a male relative)\">'Ipinapakilala ko ang aking tito.' (Paggamit ng 'tito' para sa lalaking kapatid ng magulang)</span>" },
        { title: "Pagpapakilala sa Doktora", content: "<span class=\"fil-sentence\" data-translation=\"'Siya ang aming doktora.' (Using doktora for a female doctor)\">'Siya ang aming doktora.' (Paggamit ng 'doktora' para sa babaeng doktor)</span>" }
      ]
    },
    {
      title: "Mga Pangngalang Walang Kasarian sa Likas",
      text: "<span class=\"fil-sentence\" data-translation=\"Natural landforms and bodies of water are also classified as walang kasarian.\">Ang mga anyong lupa at anyong tubig ay nauuri rin bilang walang kasarian.</span>",
      examples: [
        { title: "Bundok", content: "<span class=\"fil-sentence\" data-translation=\"'Bundok Apo' (Mount Apo) is walang kasarian.\">Ang 'Bundok Apo' ay walang kasarian.</span>" },
        { title: "Ilog", content: "<span class=\"fil-sentence\" data-translation=\"'Ilog Pasig' (Pasig River) is walang kasarian.\">Ang 'Ilog Pasig' ay walang kasarian.</span>" }
      ]
    },
    {
      title: "Pagtukoy sa Apat na Pangkat",
      text: "<span class=\"fil-sentence\" data-translation=\"Let's review the main rules: Male, Female, Either, and Objects. This covers all nouns.\">Ating balikan ang mga pangunahing tuntunin: Lalaki, Babae, Alinman sa Dalawa, at mga Bagay.</span>",
      examples: [
        { title: "Talahanayan", content: "<span class=\"fil-sentence\" data-translation=\"Panlalaki (Lolo) | Pambabae (Lola) | Di-tiyak (Guro) | Walang Kasarian (Lapis)\">Panlalaki (Lolo) | Pambabae (Lola) | Di-tiyak (Guro) | Walang Kasarian (Lapis)</span>" },
        { title: "Pangwakas", content: "<span class=\"fil-sentence\" data-translation=\"Mastering this helps in writing correct sentences in Filipino classes.\">Ang pag-master nito ay tumutulong sa pagsulat ng tamang pangungusap.</span>" }
      ]
    },
    {
      title: "Buod ng Kasarian ng Pangngalan",
      text: "<span class=\"fil-sentence\" data-translation=\"We have covered Panlalaki, Pambabae, Di-tiyak, and Walang Kasarian. Remember their definitions and writing rules.\">Ating natapos ang pag-aaral sa Panlalaki, Pambabae, Di-tiyak, at Walang Kasarian. Tandaan ang kanilang kahulugan.</span>",
      examples: [
        { title: "Tandaan", content: "<span class=\"fil-sentence\" data-translation=\"Panlalaki = male. Pambabae = female. Di-tiyak = either. Walang kasarian = objects.\">Panlalaki = lalaki. Pambabae = babae. Di-tiyak = alinman. Walang kasarian = bagay.</span>" },
        { title: "Gawain", content: "<span class=\"fil-sentence\" data-translation=\"Identify the gender of five objects and five people inside your home today.\">Tukuyin ang kasarian ng limang bagay at limang tao sa inyong bahay ngayong araw.</span>" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'hari' (king)?\">Ano ang kasarian ng pangngalang 'hari'?</span>",
          options: ["pambabae", "panlalaki", "di-tiyak", "walang kasarian"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'reyna' (queen)?\">Ano ang kasarian ng pangngalang 'reyna'?</span>",
          options: ["pambabae", "panlalaki", "di-tiyak", "walang kasarian"],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is in the common/indeterminate gender (di-tiyak)?\">Alin sa mga sumusunod ang may kasariang di-tiyak?</span>",
          options: ["pari", "madre", "mag-aaral", "lapis"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following has no gender (walang kasarian)?\">Alin sa mga sumusunod ang walang kasarian?</span>",
          options: ["tito", "tita", "doktor", "aklat"],
          answer: 3
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the feminine counterpart of the masculine noun 'ama' (father)?\">Ano ang katapat na pambabae ng pangngalang panlalaki na 'ama'?</span>",
          options: ["lola", "ina", "ate", "tita"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the masculine counterpart of 'tindera' (female vendor)?\">Ano ang katapat na panlalaki ng pangngalang pambabae na 'tindera'?</span>",
          options: ["tindero", "guro", "drayber", "pulis"],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Mabait ang aking lola.', which is the feminine noun?\">Sa: 'Mabait ang aking lola.', alin ang pangngalang pambabae?</span>",
          options: ["Mabait", "aking", "lola", "None"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Naglalaro si Lito kasama ang aso.', which is the indeterminate noun?\">Sa: 'Naglalaro si Lito kasama ang aso.', alin ang di-tiyak?</span>",
          options: ["Naglalaro", "Lito", "aso", "kasama"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Nakasulat sa papel ang pangalan.', which is the neuter noun?\">Sa: 'Nakasulat sa papel ang pangalan.', alin ang walang kasarian?</span>",
          options: ["Nakasulat", "papel", "pangalan", "ang"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a masculine animal name?\">Alin sa mga sumusunod ang pangngalang panlalaki para sa hayop?</span>",
          options: ["inahin", "tandang", "pusa", "ibon"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a feminine animal name?\">Alin sa mga sumusunod ang pangngalang pambabae para sa hayop?</span>",
          options: ["tandang", "inahin", "aso", "dagis"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'lapis' (pencil)?\">Ano ang kasarian ng 'lapis'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 3
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'kaibigan' (friend)?\">Ano ang kasarian ng 'kaibigan'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'pari' (priest)?\">Ano ang kasarian ng 'pari'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of 'madre' (nun)?\">Ano ang kasarian ng 'madre'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Si Bb. Cruz ang aming guro.', Bb. Cruz is which gender?\">Sa: 'Si Bb. Cruz ang aming guro.', anong kasarian ang 'Bb. Cruz'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In: 'Si Bb. Cruz ang aming guro.', 'guro' (teacher) is which gender?\">Sa: 'Si Bb. Cruz ang aming guro.', anong kasarian ang 'guro'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which noun borrowed from Spanish is in the feminine format?\">Aling salitang hiram sa Espanyol ang nasa anyong pambabae?</span>",
          options: ["tindero", "doktora", "abuelo", "pari"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which noun borrowed from Spanish is in the masculine format?\">Aling salitang hiram sa Espanyol ang nasa anyong panlalaki?</span>",
          options: ["tindera", "doktora", "tindero", "madre"],
          answer: 2
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In our history, what is the gender of the title 'datu'?\">Sa ating kasaysayan, anong kasarian ang titulong 'datu'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of the historic title 'babaylan'?\">Ano ang kasarian ng makasaysayang titulong 'babaylan'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of the noun 'Pasko' (Christmas)?\">Ano ang kasarian ng pangngalang 'Pasko'?</span>",
          options: ["panlalaki", "pambabae", "di-tiyak", "walang kasarian"],
          answer: 3
        },
    {
          type: "verify",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
          options: [
            "Statement A: Ang 'kuya' ay panlalaki, ang 'ate' ay pambabae, ang 'kapatid' ay di-tiyak, at ang 'bahay' ay walang kasarian.",
            "Statement B: Ang 'kuya' ay walang kasarian, ang 'ate' ay di-tiyak, ang 'kapatid' ay pambabae, at ang 'bahay' ay panlalaki."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "<span class=\"fil-sentence\" data-translation=\"Write the neuter noun in this sentence: 'Malinis ang papel.'\">Isulat ang pangngalang walang kasarian sa pangungusap na ito: 'Malinis ang papel.'</span>",
          answer: "papel"
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the gender category of the noun 'guro' (teacher)?\">Ano ang kasarian ng pangngalang 'guro'?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Masculine\">Panlalaki</span>",
            "<span class=\"fil-phrase\" data-translation=\"Feminine\">Pambabae</span>",
            "<span class=\"fil-phrase\" data-translation=\"Common (Di-tiyak)\">Di-tiyak</span>",
            "<span class=\"fil-phrase\" data-translation=\"Neuter\">Walang Kasarian</span>"
          ],
          answer: 2
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Identify the pair that does NOT represent a male-female match: \">Alin sa mga sumusunod ang HINDI tamang magkatapat na panlalaki at pambabae?</span>",
      options: [
        "ama - ina",
        "tito - tita",
        "hari - reyna",
        "guro - doktor"
      ],
      answer: 3 // guro and doktor are both di-tiyak
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"In the sentence: 'Ang drayber ay sumakay sa dyip.', what are the genders of 'drayber' and 'dyip'?\">Sa: 'Ang drayber ay sumakay sa dyip.', ano ang kasarian ng 'drayber' at 'dyip'?</span>",
      options: [
        "drayber ay di-tiyak; dyip ay walang kasarian.",
        "drayber ay panlalaki; dyip ay walang kasarian.",
        "drayber ay di-tiyak; dyip ay panlalaki.",
        "Pareho silang walang kasarian."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a masculine title?\">Alin sa mga sumusunod na titulo ang panlalaki?</span>",
      options: ["Bb. (Miss)", "Gng. (Mrs.)", "G. (Mr.)", "Doktora"],
      answer: 2
    },
    {
      type: "verify",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
      options: [
        "Statement A: Ang 'barako' ay panlalaking katawagan sa hayop, samantalang ang 'inahin' ay pambabae.",
        "Statement B: Ang 'barako' ay walang kasarian, samantalang ang 'inahin' ay di-tiyak."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "<span class=\"fil-sentence\" data-translation=\"What is the gender of the noun 'simbahan' (church)?\">Ano ang kasarian ng pangngalang 'simbahan'?</span>",
      answer: "walang kasarian"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Paggawa ng Chart ng Kasarian",
        desc: "<span class=\"fil-sentence\" data-translation=\"Draw a table with four columns labeled: Panlalaki, Pambabae, Di-tiyak, Walang Kasarian. List 3 nouns under each column that you see around your home. Share your chart with your teacher or parent.\">Gumuhit ng talahanayan na may apat na hanay para sa apat na kasarian. Maglista ng 3 pangngalan sa bawat hanay na nakikita sa inyong bahay. Ipakita ito sa iyong guro o magulang.</span>",
        labels: [
          "<span class=\"fil-phrase\" data-translation=\"Correct sorting of all 12 nouns\">Wastong pag-uuri ng 12 pangngalan</span>",
          "<span class=\"fil-phrase\" data-translation=\"Neat table layout and clear labels\">Kalinisan at lagda ng talahanayan</span>",
          "<span class=\"fil-phrase\" data-translation=\"Correct spelling of words\">Tamang baybay ng mga salita sa papel</span>"
        ]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Kasarian ng Pangngalan</h3>\n                  <p class=\"ws-instruction\">Tukuyin ang kasarian ng pangngalan: <strong>Panlalaki</strong>, <strong>Pambabae</strong>, <strong>Di-tiyak</strong>, o <strong>Walang Kasarian</strong>. <span class=\"fil-sentence\" data-translation=\"Identify the gender of the noun.\"></span></p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Pangngalan</th>\n                        <th>Kasarian</th>\n                        <th>Pangngalan</th>\n                        <th>Kasarian</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>tatay</td>\n                        <td></td>\n                        <td>lapis</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>guro</td>\n                        <td></td>\n                        <td>nanay</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>kapatid</td>\n                        <td></td>\n                        <td>mesa</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Pagsulat ng Kasarian</h3>\n                  <p class=\"ws-instruction\">Magbigay ng dalawang halimbawa ng pangngalan para sa bawat kasarian. <span class=\"fil-sentence\" data-translation=\"Give two examples for each noun gender.\"></span></p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div>1. Di-tiyak (e.g. pulis):</div>\n                      <div class=\"writing-line\" style=\"margin-top: 15px; width: 80%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 80%;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div>2. Walang Kasarian (e.g. aklat):</div>\n                      <div class=\"writing-line\" style=\"margin-top: 15px; width: 80%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 80%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Kasarian ng Pangngalan</h3>\n                  <p class=\"ws-instruction\">Tukuyin ang kasarian ng mga sumusunod na salita (Panlalaki, Pambabae, Di-tiyak, Walang Kasarian).</p>\n                  \n                  <table class=\"ws-table\" style=\"margin-top: 15px;\">\n                    <thead>\n                      <tr>\n                        <th>Pangngalan</th>\n                        <th>Kasarian</th>\n                        <th>Pangngalan</th>\n                        <th>Kasarian</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1. Ama</td>\n                        <td></td>\n                        <td>3. Lapis</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>2. Guro</td>\n                        <td></td>\n                        <td>4. Ina</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
  }
};

window.WEEK2_DATA.makabansa = {
  color: "#d97706",
  icon: "🏘️",
  title: "Makabansa",
  subtitle: "Week 2: Simbolo at Sagisag sa Aking Komunidad",
  slides: [
    {
      title: "Ano ang Simbolo at Sagisag?",
      text: "<span class=\"fil-sentence\" data-translation=\"Symbols and signs represent the unique qualities, values, and resources of a community.\">Ang simbolo at sagisag ay mga guhit o tanda na kumakatawan sa mga katangian, halaga, at yaman ng isang komunidad.</span>",
      examples: [
        { title: "Watawat ng Pilipinas", content: "<span class=\"fil-sentence\" data-translation=\"Our national flag is a symbol of our country's freedom and unity.\">Ang ating pambansang watawat ay simbolo ng kalayaan at pagkakaisa ng bansa.</span>" },
        { title: "Barangay Seal", content: "<span class=\"fil-sentence\" data-translation=\"A seal stamped on papers showing the official logo of the barangay.\">Isang selyo na nakatatak sa mga opisyal na papel ng barangay.</span>" }
      ]
    },
    {
      title: "Bakit May Simbolo ang Komunidad?",
      text: "<span class=\"fil-sentence\" data-translation=\"Symbols help identify our community quickly and tell its story or major livelihood.\">Tinutulungan tayo ng mga simbolo na mabilis na matukoy ang ating komunidad at malaman ang kwento o kabuhayan nito.</span>",
      examples: [
        { title: "Guhit ng Palay", content: "<span class=\"fil-sentence\" data-translation=\"Tells visitors that the community has vast farming lands and agricultural history.\">Ipinapaalam sa mga bisita na ang bayan ay may malalawak na sakahan ng palay.</span>" },
        { title: "Guhit ng Isda", content: "<span class=\"fil-sentence\" data-translation=\"Shows that the community is near the sea and people fish for a living.\">Nagpapakita na ang komunidad ay malapit sa dagat at pangingisda ang kabuhayan.</span>" }
      ]
    },
    {
      title: "Ang Opisyal na Selyo (Official Seal)",
      text: "<span class=\"fil-sentence\" data-translation=\"An official seal is the government mark of the community. It contains drawings of its history, assets, and goals.\">Ang opisyal na selyo ay ang pananda ng pamahalaan ng komunidad. Naglalaman ito ng mga simbolo ng kasaysayan at layunin nito.</span>",
      examples: [
        { title: "Selyo ng Lungsod", content: "<span class=\"fil-sentence\" data-translation=\"Every city in the Philippines has a unique circle seal used in documents.\">Ang bawat lungsod sa Pilipinas ay may sariling selyo na hugis bilog para sa mga dokumento.</span>" },
        { title: "Lagda ng Mayor", content: "<span class=\"fil-sentence\" data-translation=\"Documents signed by the mayor always contain the official seal next to the signature.\">Ang mga dokumentong nilagdaan ng alkalde ay may selyo ng bayan.</span>" }
      ]
    },
    {
      title: "Simbolo: Ang Uhay ng Palay",
      text: "<span class=\"fil-sentence\" data-translation=\"Rice stalks (uhay ng palay) represent agriculture, abundance, and the hard work of farmers.\">Ang uhay ng palay ay kumakatawan sa pagsasaka, kasaganaan, at sipag ng mga magsasaka sa komunidad.</span>",
      examples: [
        { title: "Selyo ng Nueva Ecija", content: "<span class=\"fil-sentence\" data-translation=\" Nueva Ecija's seal has rice stalks because it is the 'Rice Granary of the Philippines'.\">Ang selyo ng Nueva Ecija ay may palay dahil ito ang sentro ng bigas sa bansa.</span>" },
        { title: "Kahulugan ng Palay", content: "<span class=\"fil-sentence\" data-translation=\"It stands for the primary food source and farming heritage of the community.\">Ito ay simbolo ng pagkain at pamanang agrikultura.</span>" }
      ]
    },
    {
      title: "Simbolo: Ang Gulong (Gear)",
      text: "<span class=\"fil-sentence\" data-translation=\"A gear or wheel represents industry, factory progress, and modern jobs in the city.\">Ang gulong o gear ay kumakatawan sa industriya, pag-unlad ng pabrika, at makabagong trabaho sa lungsod.</span>",
      examples: [
        { title: "Selyo ng Valenzuela", content: "<span class=\"fil-sentence\" data-translation=\"Valenzuela's seal has a gear because it is a major industrial city.\">Ang selyo ng Valenzuela ay may gear dahil ito ay sikat sa mga pabrika.</span>" },
        { title: "Kahulugan ng Gear", content: "<span class=\"fil-sentence\" data-translation=\"It stands for manufacturing products and machinery technology.\">Ito ay simbolo ng paggawa ng mga produkto at makinarya.</span>" }
      ]
    },
    {
      title: "Simbolo: Ang Aklat at Sulat (Book and Quill)",
      text: "<span class=\"fil-sentence\" data-translation=\"A book or quill pen represents education, knowledge, and historical records of the town.\">Ang aklat at panulat ay kumakatawan sa edukasyon, karunungan, at mga nakasulat na kasaysayan ng bayan.</span>",
      examples: [
        { title: "Selyo ng Paaralan", content: "<span class=\"fil-sentence\" data-translation=\"Almost all schools have open books in their logos to show learning.\">Halos lahat ng paaralan ay may bukas na aklat sa logo upang ipakita ang pag-aaral.</span>" },
        { title: "Makasaysayang Kasunduan", content: "<span class=\"fil-sentence\" data-translation=\"Shows the community values literacy and laws.\">Nagpapakita na pinahahalagahan ng bayan ang karunungan at batas.</span>" }
      ]
    },
    {
      title: "Simbolo: Kalasag at Espada (Shield and Sword)",
      text: "<span class=\"fil-sentence\" data-translation=\"A shield represents defense, bravery, and how heroes protected the town from enemies.\">Ang kalasag at espada ay kumakatawan sa pagtatanggol, katapangan, at pagtatanggol ng mga bayani sa bayan laban sa mga kaaway.</span>",
      examples: [
        { title: "Selyo ng Manila", content: "<span class=\"fil-sentence\" data-translation=\"Manila's seal contains a castle shield showing its history as a fortified city.\">Ang selyo ng Maynila ay may kalasag upang ipakita ang kasaysayan nito bilang muog.</span>" },
        { title: "Lokal na Dambana", content: "<span class=\"fil-sentence\" data-translation=\"Monuments of Lapu-Lapu holding a shield symbol of native defense.\">Monumento ni Lapu-Lapu na may kalasag bilang simbolo ng pagtatanggol.</span>" }
      ]
    },
    {
      title: "Lokal na Himno (Community Hymn)",
      text: "<span class=\"fil-sentence\" data-translation=\"The local hymn is a musical symbol of community pride. It sings about the love for the homeland and unity.\">Ang himno ng bayan ay musikal na simbolo ng pagmamalaki. Iniaawit nito ang pagmamahal sa bayan.</span>",
      examples: [
        { title: "Himno ng Lalawigan", content: "<span class=\"fil-sentence\" data-translation=\"Singing the Cavite Hymn during provincial gatherings.\">Pag-awit ng himno ng Cavite tuwing may pagtitipon sa lalawigan.</span>" },
        { title: "Tuntunin ng Pag-awit", content: "<span class=\"fil-sentence\" data-translation=\"Singing with hand on chest and showing respect, just like the national anthem.\">Pag-awit na may kamay sa dibdib at pagpapakita ng paggalang tulad ng pambansang awit.</span>" }
      ]
    },
    {
      title: "Mga Palatandaan (Landmarks)",
      text: "<span class=\"fil-sentence\" data-translation=\"Landmarks are physical structures that help you identify your location. They have historical or natural value.\">Ang mga palatandaan ay mga pisikal na istruktura na tumutulong sa iyo na matukoy ang lokasyon.</span>",
      examples: [
        { title: "Monumento ng Bayani", content: "<span class=\"fil-sentence\" data-translation=\"A statue of Bonifacio in Caloocan serving as a major landmark.\">Ang estatwa ni Bonifacio sa Caloocan na nagsisilbing pangunahing palatandaan.</span>" },
        { title: "Matandang Simbahan", content: "<span class=\"fil-sentence\" data-translation=\"An old stone church that visitors use to locate the town center.\">Isang lumang simbahan na ginagamit upang matukoy ang sentro ng bayan.</span>" }
      ]
    },
    {
      title: "Monumento ni Jose Rizal",
      text: "<span class=\"fil-sentence\" data-translation=\"Jose Rizal is our national hero. Almost every plaza in the Philippines has his monument as a symbol of patriotism.\">Si Jose Rizal ay ating pambansang bayani. Halos lahat ng plasa ay may monumentong simbolo ng pagmamahal sa bayan.</span>",
      examples: [
        { title: "Rizal Monument in Luneta", content: "<span class=\"fil-sentence\" data-translation=\"The famous bronze and granite monument in Manila containing Rizal's remains.\">Ang sikat na monumento sa Maynila kung saan nakalagak ang labi ni Rizal.</span>" },
        { title: "Lokal na Plaza", content: "<span class=\"fil-sentence\" data-translation=\"A smaller stone statue of Rizal holding a book in your town plaza.\">Isang mas maliit na estatwa ni Rizal na may hawak na aklat sa inyong plasa.</span>" }
      ]
    },
    {
      title: "Mga Likas na Palatandaan (Natural Landmarks)",
      text: "<span class=\"fil-sentence\" data-translation=\"A landmark does not have to be human-made. It can be a mountain, a river, or a famous old tree.\">Ang palatandaan ay hindi kailangang gawa ng tao. Maaari itong bundok, ilog, o matandang puno.</span>",
      examples: [
        { title: "Bundok Makiling", content: "<span class=\"fil-sentence\" data-translation=\"A famous mountain shape serving as a natural landmark in Laguna.\">Isang kilalang bundok na natural na palatandaan sa Laguna.</span>" },
        { title: "Matandang Balete", content: "<span class=\"fil-sentence\" data-translation=\"A hundred-year-old balete tree preserved in the town plaza.\">Isang daang taong gulang na punong balete na inaalagaan sa plasa.</span>" }
      ]
    },
    {
      title: "Mga Simbolo sa Mapa (Map Symbols)",
      text: "<span class=\"fil-sentence\" data-translation=\"Maps use simple drawings called map symbols to represent actual buildings, resources, or terrain.\">Ang mga mapa ay gumagamit ng mga simpleng guhit upang kumatawan sa mga gusali o daan.</span>",
      examples: [
        { title: "Krus", content: "<span class=\"fil-sentence\" data-translation=\"A small cross on a map represents a church or place of worship.\">Ang maliit na krus sa mapa ay kumakatawan sa simbahan.</span>" },
        { title: "Kuwadrado na may Bandera", content: "<span class=\"fil-sentence\" data-translation=\"A square with a flag represent a school.\">Ang kuwadrado na may watawat ay kumakatawan sa paaralan.</span>" }
      ]
    },
    {
      title: "Simbolo ng Hospital sa Mapa",
      text: "<span class=\"fil-sentence\" data-translation=\"A letter H or a red cross symbol on a map shows the location of a hospital or medical clinic.\">Ang titik H o pulang krus sa mapa ay nagpapakita ng lokasyon ng ospital.</span>",
      examples: [
        { title: "Hospital Key", content: "<span class=\"fil-sentence\" data-translation=\"Looking for the 'H' symbol when drawing a safety map of your neighborhood.\">Paghahanap sa simbolo ng 'H' kapag gumagawa ng mapa ng inyong lugar.</span>" },
        { title: "Red Cross logo", content: "<span class=\"fil-sentence\" data-translation=\"Used on maps internationally to mark emergency clinics.\">Ginagamit sa buong mundo upang markahan ang mga klinika.</span>" }
      ]
    },
    {
      title: "Simbolo ng Barangay Hall sa Mapa",
      text: "<span class=\"fil-sentence\" data-translation=\"A drawing of a building with a label 'Brgy. Hall' represents the local community center on the map.\">Ang guhit ng maliit na gusali na may markang 'Brgy. Hall' ay kumakatawan sa sentro ng barangay.</span>",
      examples: [
        { title: "Barangay Office", content: "<span class=\"fil-sentence\" data-translation=\"Locating the hall near the central road on your municipal map.\">Pagtukoy sa hall malapit sa daan sa inyong mapa ng bayan.</span>" },
        { title: "Community Services", content: "<span class=\"fil-sentence\" data-translation=\"Where security guards and barangay captains report.\">Kung saan nag-uulat ang mga barangay tanod at kapitan.</span>" }
      ]
    },
    {
      title: "Simbolo ng Tubig sa Mapa",
      text: "<span class=\"fil-sentence\" data-translation=\"Blue lines represent rivers, and solid blue areas represent lakes, bays, or oceans on a map.\">Ang mga asul na linya ay kumakatawan sa ilog, at ang asul na bahagi ay lawa o dagat.</span>",
      examples: [
        { title: "Ilog Pasig sa Mapa", content: "<span class=\"fil-sentence\" data-translation=\"A winding blue line cutting through Metro Manila map.\">Isang paliko-likong asul na linya na dumadaan sa mapa ng Maynila.</span>" },
        { title: "Lawa ng Laguna", content: "<span class=\"fil-sentence\" data-translation=\"A large blue circular shape on the south side of the map.\">Isang malaking asul na bilog sa timog na bahagi ng mapa.</span>" }
      ]
    },
    {
      title: "Simbolo ng Daan at Kalye sa Mapa",
      text: "<span class=\"fil-sentence\" data-translation=\"Double parallel lines or solid black/grey lines represent roads and streets on a map.\">Ang dalawang magkahilerang linya o itim na linya ay kumakatawan sa mga kalye at daan.</span>",
      examples: [
        { title: "Highway", content: "<span class=\"fil-sentence\" data-translation=\"A thick red or yellow line showing a major national highway.\">Isang makapal na pulang linya na nagpapakita ng malaking highway.</span>" },
        { title: "Kalye Rizal", content: "<span class=\"fil-sentence\" data-translation=\"A thin black line representing a small local street in the barangay.\">Isang manipis na itim na linya na nagpapakita ng maliit na daan.</span>" }
      ]
    },
    {
      title: "Ang Legend (Paliwanag sa Mapa)",
      text: "<span class=\"fil-sentence\" data-translation=\"The legend is a key panel on the map that explains what each symbol and color represents.\">Ang legend ay ang kahon sa mapa na nagpapaliwanag ng kahulugan ng bawat simbolo at kulay.</span>",
      examples: [
        { title: "Reading a Legend", content: "<span class=\"fil-sentence\" data-translation=\"Checking the legend to confirm that the green tree drawing means a park.\">Pagsuri sa legend upang kumpirmahing ang guhit ng puno ay nangangahulugang parke.</span>" },
        { title: "Map Colors", content: "<span class=\"fil-sentence\" data-translation=\"Legend showing: Brown = Mountains, Green = Forests, Blue = Water.\">Ipinapakita sa legend: Kayumanggi = Bundok, Berde = Kagubatan, Asul = Tubig.</span>" }
      ]
    },
    {
      title: "Mga Simbolo ng Pangkabuhayan",
      text: "<span class=\"fil-sentence\" data-translation=\"Seals and maps use economic symbols to show the primary products and livelihood of the region.\">Gumagamit ang mga selyo ng mga simbolo upang ipakita ang pangunahing produkto at kabuhayan ng rehiyon.</span>",
      examples: [
        { title: "Puno ng Niyog", content: "<span class=\"fil-sentence\" data-translation=\"Coconut trees in the seal of Quezon province show it is a major copra producer.\">Ang niyog sa selyo ng Quezon ay nagpapakita na sila ay tagagawa ng copra.</span>" },
        { title: "Guhit ng Pabrika", content: "<span class=\"fil-sentence\" data-translation=\"Factories represent city jobs and modern manufacturing.\">Ang pabrika ay kumakatawan sa mga trabaho sa lungsod.</span>" }
      ]
    },
    {
      title: "Monumento ng mga Bayani sa Aking Rehiyon",
      text: "<span class=\"fil-sentence\" data-translation=\"Monuments tell stories of courage. We have local monuments dedicated to regional historical figures.\">Ang mga monumento ay nagkukwento ng katapangan ng mga lokal na bayani sa ating rehiyon.</span>",
      examples: [
        { title: "Monumento ni Lapu-Lapu", content: "<span class=\"fil-sentence\" data-translation=\"Located in Cebu to honor the chief who fought Magellan.\">Matatagpuan sa Cebu upang parangalan ang datung lumaban kay Magellan.</span>" },
        { title: "Monumento ni McArthur", content: "<span class=\"fil-sentence\" data-translation=\"Located in Leyte showing soldiers walking in water to mark the landing.\">Matatagpuan sa Leyte na nagpapakita ng mga sundalong naglalakad sa tubig.</span>" }
      ]
    },
    {
      title: "Lokal na Sagisag ng Selyo: Kulay",
      text: "<span class=\"fil-sentence\" data-translation=\"Colors in seals have meanings. Blue often means peace and water; red means courage and struggle.\">Ang mga kulay sa selyo ay may kahulugan. Ang asul ay kapayapaan; ang pula ay katapangan.</span>",
      examples: [
        { title: "Asul", content: "<span class=\"fil-sentence\" data-translation=\"Representing clean rivers and peaceful lives of the citizens.\">Kumakatawan sa malilinis na ilog at mapayapang buhay ng mamamayan.</span>" },
        { title: "Pula", content: "<span class=\"fil-sentence\" data-translation=\"Representing the blood spilled by ancestors to protect the homeland.\">Kumakatawan sa dugo ng mga ninuno na nagtanggol sa bayan.</span>" }
      ]
    },
    {
      title: "Pagguhit ng Sariling Mapa ng Barangay",
      text: "<span class=\"fil-sentence\" data-translation=\"We can use standard map symbols to draw a safety map of our street showing exit paths.\">Maaari tayong gumamit ng mga simbolo upang gumuhit ng mapa ng ating daan.</span>",
      examples: [
        { title: "Drawing Task", content: "<span class=\"fil-sentence\" data-translation=\"Draw your house as a square, the church as a cross, and the road as two lines.\">Iguhit ang inyong bahay bilang parisukat, ang simbahan bilang krus, at ang daan.</span>" },
        { title: "Adding Labels", content: "<span class=\"fil-sentence\" data-translation=\"Write 'Aking Bahay' (My House) next to the square symbol.\">Isulat ang 'Aking Bahay' sa tabi ng simbolo ng parisukat.</span>" }
      ]
    },
    {
      title: "Pagsasalin ng Simbolo sa Kwento",
      text: "<span class=\"fil-sentence\" data-translation=\"Looking at a seal allows us to write a short story about the community's history and pride.\">Ang pagsusuri sa selyo ay nagbibigay-daan sa atin na makasulat ng kwento ng komunidad.</span>",
      examples: [
        { title: "Story from Seal", content: "<span class=\"fil-sentence\" data-translation=\"A seal with rice and water tells: 'Our town was built near a river where farmers planted crops.'\">Ang selyo na may palay at tubig ay nagsasabi: 'Ang aming bayan ay itinayo sa tabi ng ilog.'</span>" },
        { title: "Analyzing Details", content: "<span class=\"fil-sentence\" data-translation=\"Every drawing has a purpose and represents a real historical fact.\">Ang bawat guhit ay may layunin at kumakatawan sa totoong kasaysayan.</span>" }
      ]
    },
    {
      title: "Pangangalaga sa Ating mga Monumento",
      text: "<span class=\"fil-sentence\" data-translation=\"Do not write names or put trash on our local hero monuments. They are sacred history spaces.\">Huwag sulatan o tapunan ng basura ang mga monumento ng bayani.</span>",
      examples: [
        { title: "Respecting Statues", content: "<span class=\"fil-sentence\" data-translation=\"Keeping the plaza statues clean and reporting damage to local officers.\">Pananatiling malinis ng mga estatwa at pag-uulat kung may sira.</span>" },
        { title: "Respecting Hymns", content: "<span class=\"fil-sentence\" data-translation=\"Standing straight and singing the hymn with pride during ceremonies.\">Pagtayo nang tuwid at pag-awit ng himno nang may pagmamalaki.</span>" }
      ]
    },
    {
      title: "Mga Simbolo sa Mapa: Compass Rose",
      text: "<span class=\"fil-sentence\" data-translation=\"A compass rose is a map symbol showing directions: North (Hilaga), South (Timog), East (Silangan), and West (Kanluran).\">Ang compass rose ay simbolo sa mapa na nagpapakita ng direksyon: Hilaga, Timog, Silangan, at Kanluran.</span>",
      examples: [
        { title: "Compass Rose", content: "<span class=\"fil-sentence\" data-translation=\"A star drawing at the corner of the map with letters N, S, E, W.\">Isang guhit na bituin sa sulok ng mapa na may mga titik N, S, E, W.</span>" },
        { title: "Finding East", content: "<span class=\"fil-sentence\" data-translation=\"The sun rises in the East (Silangan), which is on the right side of the map.\">Ang araw ay sumisikat sa Silangan, na nasa kanang bahagi ng mapa.</span>" }
      ]
    },
    {
      title: "Buod ng Simbolo at Sagisag",
      text: "<span class=\"fil-sentence\" data-translation=\"Symbols on seals, landmarks in plazas, and icons on maps tell the history and identify the location of our community.\">Ang mga simbolo sa selyo, palatandaan sa plasa, at icon sa mapa ay nagkukwento ng kasaysayan.</span>",
      examples: [
        { title: "Tandaan", content: "<span class=\"fil-sentence\" data-translation=\"Seal = identity. Landmark = physical locator. Map Symbol = drawing of real object.\">Selyo = pagkakakilanlan. Palatandaan = lokasyon. Simbolo sa Mapa = guhit ng bagay.</span>" },
        { title: "Activity", content: "<span class=\"fil-sentence\" data-translation=\"Find a map of your province and locate the legend box today.\">Maghanap ng mapa ng inyong lalawigan at tingnan ang kahon ng legend ngayong araw.</span>" }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What represents the identity, history, and values of a community in government documents?\">Ano ang kumakatawan sa pagkakakilanlan at kasaysayan ng komunidad sa mga dokumento?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A clock\">Isang orasan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Official Seal (Opisyal na Selyo)\">Opisyal na Selyo</span>",
            "<span class=\"fil-phrase\" data-translation=\"A notebook\">Isang kuwaderno</span>",
            "<span class=\"fil-phrase\" data-translation=\"A telephone\">Isang telepono</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"If a seal has a drawing of rice stalks (uhay ng palay), what does this symbolize?\">Kung ang selyo ay may guhit ng uhay ng palay, ano ang sinisimbolo nito?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Industry and factories\">Industriya at mga pabrika</span>",
            "<span class=\"fil-phrase\" data-translation=\"Agriculture and farming resources\">Agrikultura at kabuhayan sa pagsasaka</span>",
            "<span class=\"fil-phrase\" data-translation=\"Fishing in the sea\">Pangingisda sa dagat</span>",
            "<span class=\"fil-phrase\" data-translation=\"Mining minerals\">Pagmimina ng tanso</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What does a gear or wheel symbol represent in a city seal?\">Ano ang kinakatawan ng simbolo ng gulong o gear sa selyo ng lungsod?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Farming and plants\">Pagsasaka at mga halaman</span>",
            "<span class=\"fil-phrase\" data-translation=\"Industry and factory jobs\">Industriya at mga trabaho sa pabrika</span>",
            "<span class=\"fil-phrase\" data-translation=\"Forests and wood\">Kagubatan at kahoy</span>",
            "<span class=\"fil-phrase\" data-translation=\"Rivers and sea trade\">Ilog at kalakalan sa dagat</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which symbol represents education and knowledge in logos?\">Aling simbolo ang kumakatawan sa edukasyon at karunungan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Quill and book (Panulat at Aklat)\">Panulat at Aklat</span>",
            "<span class=\"fil-phrase\" data-translation=\"Shield and sword\">Kalasag at espada</span>",
            "<span class=\"fil-phrase\" data-translation=\"Gear wheel\">Gulong ng makina</span>",
            "<span class=\"fil-phrase\" data-translation=\"Coconut tree\">Puno ng niyog</span>"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What does a shield (kalasag) symbol represent in a historical monument?\">Ano ang kinakatawan ng kalasag sa isang monumentong pangkasaysayan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Trade and selling products\">Kalakalan ng mga produkto</span>",
            "<span class=\"fil-phrase\" data-translation=\"Defense, bravery, and protection\">Pagtatanggol, katapangan, at proteksyon</span>",
            "<span class=\"fil-phrase\" data-translation=\"Writing books\">Pagsusulat ng aklat</span>",
            "<span class=\"fil-phrase\" data-translation=\"Farming seeds\">Pagtatanim ng binhi</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What physical structure serves as a landmark for tourists to find the town plaza?\">Anong pisikal na istruktura ang palatandaan upang mahanap ang sentro ng bayan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A telephone wire\">Kable ng kuryente</span>",
            "<span class=\"fil-phrase\" data-translation=\"A landmark (Monumento o matandang gusali)\">Monumento o matandang simbahan</span>",
            "<span class=\"fil-phrase\" data-translation=\"A moving car\">Isang gumagalaw na kotse</span>",
            "<span class=\"fil-phrase\" data-translation=\"A plastic bottle\">Isang plastik na bote</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Who is the national hero whose monument is found in almost all Philippine plazas?\">Sino ang pambansang bayani na may monumento sa halos lahat ng plasa sa Pilipinas?</span>",
          options: ["Andres Bonifacio", "Jose Rizal", "Lapu-Lapu", "Emilio Aguinaldo"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is an example of a natural landmark?\">Alin sa mga sumusunod ang halimbawa ng natural na palatandaan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A stone monument\">Isang monumentong bato</span>",
            "<span class=\"fil-phrase\" data-translation=\"Bundok Makiling (Mount Makiling)\">Bundok Makiling</span>",
            "<span class=\"fil-phrase\" data-translation=\"The municipal hall\">Ang gusali ng munisipyo</span>",
            "<span class=\"fil-phrase\" data-translation=\"A concrete bridge\">Isang sementadong tulay</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What map symbol represents a church or place of worship?\">Anong simbolo sa mapa ang kumakatawan sa simbahan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A red cross\">Isang pulang krus</span>",
            "<span class=\"fil-phrase\" data-translation=\"A small cross (Maliit na krus)\">Maliit na krus</span>",
            "<span class=\"fil-phrase\" data-translation=\"A flag\">Isang watawat</span>",
            "<span class=\"fil-phrase\" data-translation=\"An H symbol\">Ang titik H</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What map symbol represents a school?\">Anong simbolo sa mapa ang kumakatawan sa paaralan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A square with a flag (Kuwadrado na may bandera)\">Kuwadrado na may bandera</span>",
            "<span class=\"fil-phrase\" data-translation=\"A simple cross\">Isang simpleng krus</span>",
            "<span class=\"fil-phrase\" data-translation=\"A letter H\">Titik H</span>",
            "<span class=\"fil-phrase\" data-translation=\"A blue winding line\">Asul na linya</span>"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"On a map, what does a red cross or a letter 'H' represent?\">Sa mapa, ano ang kinakatawan ng pulang krus o titik 'H'?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Barangay Hall\">Barangay Hall</span>",
            "<span class=\"fil-phrase\" data-translation=\"Hospital (Ospital)\">Ospital</span>",
            "<span class=\"fil-phrase\" data-translation=\"School\">Paaralan</span>",
            "<span class=\"fil-phrase\" data-translation=\"River\">Ilog</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What does a winding blue line on a map represent?\">Ano ang kinakatawan ng paliko-likong asul na linya sa mapa?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"A local road\">Isang kalye</span>",
            "<span class=\"fil-phrase\" data-translation=\"A river (Ilog)\">Ilog</span>",
            "<span class=\"fil-phrase\" data-translation=\"A mountain ridge\">Isang bundok</span>",
            "<span class=\"fil-phrase\" data-translation=\"A school boundary\">Paaralan</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the map panel that explains the meaning of each symbol and color?\">Ano ang tawag sa bahagi ng mapa na nagpapaliwanag ng kahulugan ng mga simbolo?</span>",
          options: ["Compass rose", "Legend", "Title", "Scale"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Which direction symbol shows North, South, East, and West on a map?\">Anong simbolo ang nagpapakita ng Hilaga, Timog, Silangan, at Kanluran?</span>",
          options: ["Legend", "Compass rose", "Scale key", "Grid line"],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"In a compass rose, what does the letter 'S' represent?\">Sa compass rose, anong direksyon ang kinakatawan ng titik 'S'?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"North (Hilaga)\">Hilaga</span>",
            "<span class=\"fil-phrase\" data-translation=\"South (Timog)\">Timog</span>",
            "<span class=\"fil-phrase\" data-translation=\"East (Silangan)\">Silangan</span>",
            "<span class=\"fil-phrase\" data-translation=\"West (Kanluran)\">Kanluran</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"Where does the sun rise?\">Saan sumisikat ang araw?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"West (Kanluran)\">Kanluran</span>",
            "<span class=\"fil-phrase\" data-translation=\"East (Silangan)\">Silangan</span>",
            "<span class=\"fil-phrase\" data-translation=\"North (Hilaga)\">Hilaga</span>",
            "<span class=\"fil-phrase\" data-translation=\"South (Timog)\">Timog</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the color commonly used on maps to represent oceans and lakes?\">Anong kulay ang ginagamit sa mapa para sa dagat at lawa?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Green\">Berde</span>",
            "<span class=\"fil-phrase\" data-translation=\"Blue (Asul)\">Asul</span>",
            "<span class=\"fil-phrase\" data-translation=\"Brown\">Kayumanggi</span>",
            "<span class=\"fil-phrase\" data-translation=\"Red\">Pula</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What does the green color on a map usually represent?\">Ano ang karaniwang kinakatawan ng kulay berde sa mapa?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Forests and parks (Kagubatan o parke)\">Kagubatan o parke</span>",
            "<span class=\"fil-phrase\" data-translation=\"Rivers and lakes\">Ilog at lawa</span>",
            "<span class=\"fil-phrase\" data-translation=\"High mountains\">Mataas na bundok</span>",
            "<span class=\"fil-phrase\" data-translation=\"Sandy deserts\">Disyerto</span>"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What does the brown color on a map represent?\">Ano ang kinakatawan ng kulay kayumanggi sa mapa?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Oceans\">Karagatan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Mountains (Bundok)\">Bundok</span>",
            "<span class=\"fil-phrase\" data-translation=\"Forests\">Kagubatan</span>",
            "<span class=\"fil-phrase\" data-translation=\"Highways\">Mga highway</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What should we do when the local community hymn is played in public?\">Ano ang dapat nating gawin kapag tinutugtog ang himno ng bayan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Sit and talk\">Maupo at makipag-usap</span>",
            "<span class=\"fil-phrase\" data-translation=\"Stand tall and sing with respect\">Tumayo nang tuwid at umawit nang may paggalang</span>",
            "<span class=\"fil-phrase\" data-translation=\"Run around the room\">Tumakbo sa paligid</span>",
            "<span class=\"fil-phrase\" data-translation=\"Write on your book\">Magsulat sa kuwaderno</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What is the proper way to care for landmarks in plazas?\">Ano ang tamang gawi sa pangangalaga ng palatandaan sa plasa?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Draw on the statue\">Gumuhit sa estatwa</span>",
            "<span class=\"fil-phrase\" data-translation=\"Clean up trash and protect the structure\">Pulutin ang basura sa paligid at huwag itong sirain</span>",
            "<span class=\"fil-phrase\" data-translation=\"Climb and play on it\">Umakyat at maglaro dito</span>",
            "<span class=\"fil-phrase\" data-translation=\"Throw plastic bottles near it\">Magtapon ng plastik na bote</span>"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"On a map, how are streets and roads usually drawn?\">Sa mapa, paano karaniwang iginuguhit ang mga kalye at daan?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Using green circles\">Gamit ang berdeng bilog</span>",
            "<span class=\"fil-phrase\" data-translation=\"Using parallel lines or black lines (Magkahilerang linya)\">Gamit ang magkahilerang linya o itim na linya</span>",
            "<span class=\"fil-phrase\" data-translation=\"Using small blue crosses\">Gamit ang asul na krus</span>",
            "<span class=\"fil-phrase\" data-translation=\"Using brown stars\">Gamit ang bituing kayumanggi</span>"
          ],
          answer: 1
        },
    {
          type: "verify",
          q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
          options: [
            "Statement A: Ang legend sa mapa ay naglalaman ng mga simbolo at kahulugan nito, habang ang compass rose ay nagpapakita ng direksyon.",
            "Statement B: Ang legend sa mapa ay nagpapakita ng direksyon, habang ang compass rose ay naglalaman ng mga simbolo at kahulugan."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "<span class=\"fil-sentence\" data-translation=\"What letter is used on maps to represent the direction North?\">Anong titik ang ginagamit sa mapa upang kumatawan sa direksyong Hilaga?</span>",
          answer: "N"
        },
    {
          type: "choice",
          q: "<span class=\"fil-sentence\" data-translation=\"What direction symbol on a map helps us locate where North, South, East, and West are?\">Anong simbolo sa mapa ang nagpapakita kung nasaan ang Hilaga, Timog, Silangan, at Kanluran?</span>",
          options: [
            "<span class=\"fil-phrase\" data-translation=\"Legend\">Legend</span>",
            "<span class=\"fil-phrase\" data-translation=\"Scale key\">Scale</span>",
            "<span class=\"fil-phrase\" data-translation=\"Compass rose (Compass rose)\">Compass rose</span>",
            "<span class=\"fil-phrase\" data-translation=\"Title bar\">Pamagat</span>"
          ],
          answer: 2
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Why do municipalities print their official seals on birth certificates and tax papers?\">Bakit ipinapatupad ang pagtatatak ng opisyal na selyo sa mga sertipiko ng kapanganakan?</span>",
      options: [
        "Upang patunayan na ang dokumento ay opisyal at galing sa pamahalaan ng komunidad.",
        "Upang gawing mas makulay ang papel.",
        "Upang malaman ng bata kung paano gumuhit ng palay.",
        "Upang madagdagan ang bigat ng dokumento."
      ],
      answer: 0
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"If you are walking North on a road and turn right, which direction are you now facing?\">Kung ikaw ay naglalakad patungong Hilaga at kumanan ka, anong direksyon ang iyong hinaharap?</span>",
      options: [
        "<span class=\"fil-phrase\" data-translation=\"West (Kanluran)\">Kanluran</span>",
        "<span class=\"fil-phrase\" data-translation=\"East (Silangan)\">Silangan</span>",
        "<span class=\"fil-phrase\" data-translation=\"South (Timog)\">Timog</span>",
        "<span class=\"fil-phrase\" data-translation=\"North (Hilaga)\">Hilaga</span>"
      ],
      answer: 1 // Right of North is East
    },
    {
      type: "choice",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following is a primary symbol of an industrial city?\">Alin sa mga sumusunod ang pangunahing simbolo ng industriyal na lungsod?</span>",
      options: [
        "Guhit ng isda at lambat",
        "Guhit ng gulong ng makina o gear",
        "Guhit ng puno ng niyog",
        "Guhit ng kalasag"
      ],
      answer: 1
    },
    {
      type: "verify",
      q: "<span class=\"fil-sentence\" data-translation=\"Which of the following statements is true?\">Alin sa mga sumusunod na pahayag ang tama?</span>",
      options: [
        "Statement A: Ang mga simbolo sa selyo ay kumakatawan sa kasaysayan at yaman ng bayan, habang ang mga simbolo sa mapa ay kumakatawan sa mga pisikal na gusali.",
        "Statement B: Ang mga simbolo sa selyo ay kumakatawan sa direksyon ng hangin, habang ang mga simbolo sa mapa ay kumakatawan sa pangalan ng alkalde."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "<span class=\"fil-sentence\" data-translation=\"What letter is used on a compass rose to represent the direction West?\">Anong titik ang ginagamit sa compass rose upang kumatawan sa direksyong Kanluran?</span>",
      answer: "W"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Paggawa ng Legend ng Mapa",
        desc: "<span class=\"fil-sentence\" data-translation=\"Draw four map symbols on a sheet of paper: a house, a church, a school, and a park. Next to each symbol, draw a legend box showing the symbol and writing its name. Present your work to a parent or teacher.\">Gumuhit ng apat na simbolo sa mapa sa papel: bahay, simbahan, paaralan, at parke. Sa tabi ng bawat isa, gumawa ng legend box at isulat ang kahulugan. Ipakita ito sa iyong magulang o guro.</span>",
        labels: [
          "<span class=\"fil-phrase\" data-translation=\"Correct representation of the four symbols\">Wastong pagguhit ng apat na simbolo</span>",
          "<span class=\"fil-phrase\" data-translation=\"Neat legend box layout with correct spelling\">Kalinisan ng legend at tamang baybay</span>",
          "<span class=\"fil-phrase\" data-translation=\"Confidence in explaining map keys\">Paliwanag sa kahalagahan ng legend sa mapa</span>"
        ]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Kahulugan ng mga Simbolo</h3>\n                  <p class=\"ws-instruction\">Tukuyin kung anong gusali o pook sa komunidad ang kinakatawan ng bawat simbolo sa ibaba. <span class=\"fil-sentence\" data-translation=\"Identify what community place is represented by each symbol.\"></span></p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 20px;\">1. Simbolo ng Krus (Red Cross): <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. Simbolo ng Aklat at Pluma: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">3. Simbolo ng Timbangan ng Hustisya: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left:10px;\"></div></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Simbolo ng Aking Komunidad</h3>\n                  <p class=\"ws-instruction\">Gumuhit ng isang simbolo na kumakatawan sa inyong sariling komunidad o barangay (halimbawa, puno para sa malikhaing kalikasan, o bangka para sa pangingisda) at ipaliwanag. <span class=\"fil-sentence\" data-translation=\"Draw a symbol representing your community and explain.\"></span></p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"drawing-box\" style=\"height: 220px;\">\n                        <span>Iguhit ang simbolo</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <p>Kahulugan ng Simbolo:</p>\n                      <div class=\"writing-line\" style=\"margin-top: 15px; width: 100%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Simbolo sa Komunidad</h3>\n                  <p class=\"ws-instruction\">Iguhit ang karaniwang simbolo o sagisag na kumakatawan sa paaralan at ospital sa komunidad.</p>\n                  \n                  <div class=\"ws-split\" style=\"margin-top: 15px;\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Paaralan (School)</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\">\n                        <span>Iguhit ang simbolo rito</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Ospital (Hospital)</div>\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\">\n                        <span>Iguhit ang simbolo rito</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "]
  }
};

window.WEEK2_DATA.gmrc = {
  color: "#8b5cf6",
  icon: "🧘‍♂️",
  title: "GMRC",
  subtitle: "Week 2: Initiative in Household Chores",
  slides: [
    {
      title: "What is Initiative at Home?",
      text: "Initiative means taking action to help out without waiting for someone to ask or tell you to do it. It is about seeing a need and choosing to fill it because you care about your family and your home.",
      examples: [
        { title: "Noticing Trash", content: "Seeing a small scrap of paper on the floor and picking it up to throw it in the bin without your parents asking." },
        { title: "Closing Doors", content: "Shutting the front door when you notice flies trying to enter the house." }
      ]
    },
    {
      title: "Why Initiative Matters",
      text: "When you show initiative, you make your home a happier and more peaceful place. It shows your family that you are growing responsible, and it reduces the amount of work your parents have to do after a long day.",
      examples: [
        { title: "Happy Parents", content: "Your mother smiles because she sees the dining table is already clean when she gets home." },
        { title: "Fewer Chores", content: "Doing small tasks early means everyone has more free time to play or relax together later." }
      ]
    },
    {
      title: "The Science of Dust and Dirt",
      text: "Dust is made of tiny particles like soil, pollen, and skin flakes. If left on the floor, it can trigger sneezing or allergies. Sweeping regularly is a scientific way to keep our air clean and protect our respiratory system.",
      examples: [
        { title: "Dust Bunnies", content: "Noticing gray dust balls under the chair and sweeping them away before they blow around." },
        { title: "Healthy Breathing", content: "Sweeping your room to keep it free from dust mites that might cause asthma." }
      ]
    },
    {
      title: "How to Sweep Properly",
      text: "Sweeping requires a good technique. Hold the broom with both hands, use short strokes, and sweep the dust from the edges of the room toward the center. Gather it in one pile, and use a dustpan to pick it up.",
      examples: [
        { title: "Corner Sweeping", content: "Using the broom bristles to reach deep into the corner behind the door." },
        { title: "Using the Dustpan", content: "Holding the dustpan flat against the floor so no dirt slips underneath it." }
      ]
    },
    {
      title: "Wiping Surfaces: Removing Bacteria",
      text: "Tables and countertops collect crumbs, spills, and bacteria from hands. Wiping them with a damp cloth keeps surfaces sanitary and prevents pests like ants and cockroaches from finding food.",
      examples: [
        { title: "After-Meal Wipe", content: "Using a clean cloth to wipe away sticky juice spills from the dining table." },
        { title: "Cleaning Desks", content: "Wiping your study desk before placing your notebooks down to study." }
      ]
    },
    {
      title: "Watering Plants: Caring for Nature",
      text: "Plants need water, sunlight, and soil to survive. Watering them is an important household chore that teaches us to care for other living things. We must give them the right amount of water—not too little, and not too much.",
      examples: [
        { title: "Morning Watering", content: "Pouring water gently at the base of the potted plants in the front yard before it gets too hot." },
        { title: "Moisture Check", content: "Touching the soil first to see if it is dry before deciding to water the plant." }
      ]
    },
    {
      title: "Arranging Your Bed",
      text: "Your day starts with a tidy space. Making your bed as soon as you wake up is a simple way to show initiative. It makes your room look clean instantly and builds a habit of neatness.",
      examples: [
        { title: "Folding Blanket", content: "Smoothing out your blanket and folding it neatly at the foot of your bed." },
        { title: "Plumping Pillows", content: "Fluffing your pillows and placing them neatly against the headboard." }
      ]
    },
    {
      title: "Organizing Toys: Safety and Order",
      text: "Leaving toys on the floor can cause accidents if someone trips on them. Putting your toys back in their proper bins right after playing keeps everyone safe and makes it easy to find them next time.",
      examples: [
        { title: "Blocks in the Box", content: "Gathering plastic building blocks from the rug and placing them in their storage box." },
        { title: "Safe Walkway", content: "Moving toy cars off the hallway floor so family members do not step on them in the dark." }
      ]
    },
    {
      title: "Sorting Laundry",
      text: "Before washing clothes, it is important to sort them. Separating white clothes from colored clothes prevents dyes from bleeding and staining your white shirts.",
      examples: [
        { title: "Color Separation", content: "Placing white socks in one pile and bright blue shirts in a different laundry basket." },
        { title: "Inside-Out Check", content: "Turning pants and shirts right side out before putting them in the wash bin." }
      ]
    },
    {
      title: "Clearing the Dining Table",
      text: "After eating, clearing your plate and cup shows gratitude for the meal. Carrying dishes carefully to the kitchen sink helps keep the dining area clean and ready for the next activity.",
      examples: [
        { title: "Scraping Leftovers", content: "Scraping food scraps into the compost or trash bin before placing the plate in the sink." },
        { title: "Stacking Plates", content: "Stacking plates of the same size carefully to make carrying them safer." }
      ]
    },
    {
      title: "Washing Your Own Plate",
      text: "Learning to wash your own plate and cup is a big step toward independence. Use a sponge with dishwashing soap to scrub away grease, rinse with clean water, and check if it feels clean.",
      examples: [
        { title: "Scrubbing Grease", content: "Using a soapy sponge to wash the oil off your plastic plate until it feels squeaky clean." },
        { title: "Rinsing Well", content: "Holding your cup under running water until all the soap bubbles are completely gone." }
      ]
    },
    {
      title: "Drying and Storing Dishes",
      text: "Dishes must be dry before they are stored in cabinets. Wet dishes can trap moisture, which allows mold or bacteria to grow. Placing them on a drying rack is a great way to let them air dry.",
      examples: [
        { title: "Rack Placement", content: "Placing bowls upside down on the drying rack so water can drain out easily." },
        { title: "Towel Drying", content: "Using a dry, clean dishcloth to wipe glass cups before putting them in the cupboard." }
      ]
    },
    {
      title: "Emptying Small Trash Bins",
      text: "Trash bins in bedrooms or bathrooms can fill up quickly. Emptying them before they overflow prevents bad odors and keeps pests away. Always wash your hands after handling trash.",
      examples: [
        { title: "Bag Replacement", content: "Taking the full bag out of the wastebasket and replacing it with a fresh, clean liner." },
        { title: "Tying the Bag", content: "Tying the top of the garbage bag securely before carrying it to the main household bin." }
      ]
    },
    {
      title: "Neat Bookshelves",
      text: "Books are valuable tools for learning. Arranging them neatly on a bookshelf keeps them in good condition and makes it easy to find what you want to read.",
      examples: [
        { title: "Size Order", content: "Placing tall books on the left and short books on the right so they look neat." },
        { title: "Spine Outward", content: "Turning all books so that their titles on the spine face outward, making them easy to read." }
      ]
    },
    {
      title: "Handling Spills Immediately",
      text: "Spilled water, milk, or juice on the floor can be slippery and dangerous. Clean it up immediately with a mop or a rag to prevent slips and protect the floor from water damage.",
      examples: [
        { title: "Juice Spill", content: "Wiping a puddle of sticky orange juice off the kitchen tiles using a damp rag, then drying the spot." },
        { title: "Pet Water Bowl", content: "Mopping up water that splashed out of the dog's drinking bowl." }
      ]
    },
    {
      title: "Folding Clean Laundry",
      text: "Folding clothes keeps them from getting wrinkled and makes them easy to store in drawers. Learning simple folding methods is a useful skill that you can practice while helping your family.",
      examples: [
        { title: "T-Shirt Fold", content: "Laying a shirt flat, folding the sleeves in, and then folding the body in half." },
        { title: "Sock Matching", content: "Finding the matching pairs of socks and folding the tops together so they stay as a pair." }
      ]
    },
    {
      title: "Organizing Your Shoes",
      text: "Shoes carry dirt, mud, and germs from the outside world. Taking off your shoes at the door and placing them neatly on a shoe rack keeps the indoor floors clean and hygienic.",
      examples: [
        { title: "Tapping Off Dirt", content: "Tapping the soles of your shoes outside to remove loose mud before placing them on the rack." },
        { title: "Neat Alignment", content: "Pointing the toes of your shoes forward and aligning them side-by-side with your family's shoes." }
      ]
    },
    {
      title: "Preparing School Clothes",
      text: "Ironed uniforms, clean socks, and polished shoes should be prepared the night before. This shows high initiative and prevents morning rushes, ensuring you start your school day calm and focused.",
      examples: [
        { title: "Uniform Prep", content: "Hanging your clean school shirt and pants on a hanger in your closet the evening before school." },
        { title: "Sock and Shoe Check", content: "Placing a clean pair of socks inside your school shoes so you do not have to search for them in the morning." }
      ]
    },
    {
      title: "Valuing All Chores",
      text: "Every household chore, no matter how small, is important. Sweeping, wiping, and throwing trash are just as valuable as cooking or repairing things. A clean house is a team effort.",
      examples: [
        { title: "No Job Too Small", content: "Understanding that wiping the dusty window sills is a big help to the family's health." },
        { title: "Appreciating Others", content: "Thanking your sibling for sweeping the kitchen floor while you water the garden." }
      ]
    },
    {
      title: "Chemical Safety at Home",
      text: "Cleaning liquids, bleach, and detergents contain strong chemicals that are dangerous if swallowed or sprayed in eyes. Never play with cleaning supplies, and always ask an adult for help.",
      examples: [
        { title: "Storing Safely", content: "Reminding parents to store dishwashing soap and detergents in high cabinets out of reach of toddler siblings." },
        { title: "Reading Labels", content: "Pointing to the warning symbols on a spray bottle to remind yourself not to touch it." }
      ]
    },
    {
      title: "Electrical & Heat Safety",
      text: "Chores around stoves, ovens, irons, and electrical outlets require adult supervision. Grade 3 learners should focus on manual chores like dusting, sweeping, and folding, and avoid hot or electric appliances.",
      examples: [
        { title: "Stove Safety", content: "Never attempting to light the gas stove or wash hot pans that were just used for cooking." },
        { title: "Plugs and Outlets", content: "Asking your father to plug in the fan instead of trying to touch the outlet yourself with wet hands." }
      ]
    },
    {
      title: "Communicating and Asking Parents",
      text: "If you want to help but do not know what to do, just ask! Good communication shows respect. You can ask your parents, 'What chore can I help with today?' to show initiative.",
      examples: [
        { title: "Offering Help", content: "Approaching your father while he is washing the car and asking, 'Can I help you rinse the tires?'" },
        { title: "Asking for Guidance", content: "Asking, 'Which towel should I use to wipe the glass table?' before starting to clean." }
      ]
    },
    {
      title: "Working as a Team",
      text: "A family is like a team. When everyone does their part, chores get finished quickly, leaving more time for family activities. Helping out builds a strong bond between family members.",
      examples: [
        { title: "Sunday Clean-up", content: "Joining the family clean-up day by sweeping the yard while your mother wipes the windows." },
        { title: "Dividing Chores", content: "Agreeing that you will wash the plates and your brother will dry them." }
      ]
    },
    {
      title: "How Chores Build Character",
      text: "Doing chores daily builds good habits like self-discipline, patience, and responsibility. These qualities help you succeed not just at home, but also at school and in your future career.",
      examples: [
        { title: "Daily Routine", content: "Setting a time every afternoon to water the plants, showing commitment." },
        { title: "Overcoming Laziness", content: "Choosing to tidy your study area even when you feel tired and want to lie down." }
      ]
    },
    {
      title: "Appreciating a Clean Home",
      text: "A clean, organized home is peaceful and comfortable. Living in a tidy environment helps your brain relax and focus better on studying. Be proud of the work you do to keep it that way!",
      examples: [
        { title: "Studying in Peace", content: "Enjoying your homework session because your desk is clean and free of clutter." },
        { title: "Welcoming Guests", content: "Feeling happy when a classmate visits because your living room is clean and organized." }
      ]
    }
  ],
  standard: [
    {
          type: "choice",
          q: "What does it mean to show initiative at home?",
          options: [
            "Waiting until your parents yell at you to clean your room.",
            "Doing helpful tasks responsibly without needing to be asked.",
            "Asking for a money reward before doing any chores.",
            "Leaving your rubbish for someone else to clear up."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is a safe and suitable chore for a Grade 3 student to do independently?",
          options: [
            "Plugging in the television extension cord with wet hands.",
            "Watering potted plants in the garden with a small watering can.",
            "Using a sharp kitchen knife to chop hot onions.",
            "Cleaning the inside of a hot gas stove while it is running."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "How does sweeping the floor help keep the family healthy?",
          options: [
            "It cools down the temperature of the room.",
            "It removes dust and dirt that can trigger allergies or asthma.",
            "It makes the tiles grow wider.",
            "It teaches you how to balance on one foot."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the correct way to sweep dust off the floor?",
          options: [
            "Sweep it under the rug so it cannot be seen.",
            "Sweep from the edges toward the center, then collect it in a dustpan.",
            "Blow it away with a high-speed electric fan.",
            "Spread it around the room so it looks thin."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Why should you wipe the dining table after eating?",
          options: [
            "To make the wood grow taller.",
            "To remove crumbs and sticky spots that attract pests like ants.",
            "To change the color of the table.",
            "To practice drawing circles with a cloth."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do first before deciding to water a household plant?",
          options: [
            "Pour a whole bucket of water on it.",
            "Check the soil with your finger to see if it is already wet.",
            "Move the plant into a dark closet.",
            "Cut off all its green leaves."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which action shows initiative after waking up in the morning?",
          options: [
            "Leaving your blanket and pillows messy on the bed",
            "Folding your blanket and arranging your pillows neatly",
            "Waiting for your mother to arrange your bed",
            "Hiding your pillows under the bed"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Where is the best place to put your toys after you are finished playing with them?",
          options: [
            "In the middle of the hallway floor",
            "Inside their proper storage bin or shelf",
            "Under the dining table chairs",
            "On the kitchen counter next to food"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Why is it important to sort laundry into whites and colors before washing?",
          options: [
            "To make the clothes dry faster in the sun",
            "To prevent dark dyes from bleeding and staining white clothes",
            "To count how many shirts you own",
            "To make the washing machine spin quieter"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do with food scraps on your plate before putting it in the sink?",
          options: [
            "Leave them on the plate for the next person to eat",
            "Scrape them neatly into the trash bin or compost bin",
            "Wash them down the sink drain all at once",
            "Pour water over them and leave them on the table"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "How can you tell if a plastic plate is clean after washing it with soap and rinsing it?",
          options: [
            "It still feels oily when you touch it.",
            "It feels squeaky clean and has no soapy bubbles.",
            "It has green spots on it.",
            "It smells strongly of old food."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Why should dishes be dried on a rack or with a clean towel before placing them in cupboards?",
          options: [
            "To make them heavier",
            "To prevent mold and bacteria from growing in wet, dark cabinets",
            "To change their shape",
            "To make them look older"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do if you notice a small wastebasket in the bathroom is full of trash?",
          options: [
            "Push the trash down to make more space.",
            "Take the bag out, tie it, and put a new liner in the basket.",
            "Ignore it until someone else notices it.",
            "Throw it out of the window."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following shows a neat and organized bookshelf?",
          options: [
            "Stacking books in messy piles with covers torn",
            "Arranging books standing upright with spines facing outward",
            "Hiding books behind the curtains",
            "Placing books upside down on the floor"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What is the safest action to take if you accidentally spill water on the kitchen floor?",
          options: [
            "Leave it to dry on its own over a few hours.",
            "Wipe it up immediately with a rag or mop to prevent slips.",
            "Walk around it and tell no one.",
            "Throw salt on it to absorb it."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Where should you place your dirty school socks when you take them off at home?",
          options: [
            "Under the living room sofa",
            "Directly into the laundry basket",
            "On top of the dining table",
            "Inside your school bag for tomorrow"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Why is putting your shoes in the shoe rack considered a hygiene habit?",
          options: [
            "It prevents outdoor dirt and germs from spreading inside the house.",
            "It makes your shoes grow larger.",
            "It helps you run faster tomorrow.",
            "It makes the shoes change color."
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "Which of these represents a disciplined routine for the evening before school?",
          options: [
            "Searching for your uniform in the morning when you are late",
            "Preparing your uniform, clean socks, and school bag the night before",
            "Going to school without checking if you have your homework",
            "Letting your sibling pack your bag in the morning"
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "How does doing chores together as a family help everyone?",
          options: [
            "It makes the chores take longer to finish.",
            "It finishes the work quickly and builds teamwork and closeness.",
            "It causes more arguments between siblings.",
            "It allows one person to do all the work alone."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "What should you do if you want to help clean but are unsure which chemical cleaner is safe?",
          options: [
            "Mix different cleaners together to see what happens.",
            "Ask an adult to guide you and use only soap and water.",
            "Use the spray bottle that has warning signs.",
            "Clean without using any instructions."
          ],
          answer: 1
        },
    {
          type: "choice",
          q: "Which of the following is an example of showing initiative to your parents?",
          options: [
            "Offering to help wipe the dining table after they finish eating",
            "Asking for a reward before picking up your own clothes",
            "Hiding your clean laundry in a messy pile in the closet",
            "Shouting when you are asked to turn off the television"
          ],
          answer: 0
        },
    {
          type: "choice",
          q: "How does keeping a clean study space affect your learning?",
          options: [
            "It makes you forget what you read.",
            "It helps you focus better without distractions.",
            "It makes writing homework harder.",
            "It has no effect on your brain."
          ],
          answer: 1
        },
    {
          type: "verify",
          q: "Which of the following statements is true?",
          options: [
            "Statement A: Initiative means doing your chores without being told, which shows you are responsible and helpful.",
            "Statement B: Initiative means waiting for your parents to ask you multiple times before starting a chore."
          ],
          answer: 0
        },
    {
          type: "blank",
          q: "What is the term for the quality of taking action to help others or complete tasks without needing to be told or asked?",
          answer: "initiative"
        },
    {
          type: "choice",
          q: "What should you do if you see dirty cups on the dining table after your family finishes drinking snacks?",
          options: [
            "Wait for your father to tell you to carry them.",
            "Offer to carry them to the kitchen sink showing initiative.",
            "Leave them there and go to play a video game.",
            "Hide them under a table towel."
          ],
          answer: 1
        }
  ],
  challenge: [
    {
      type: "choice",
      q: "Why should Grade 3 students avoid handling electrical appliances like irons or stoves when helping at home?",
      options: [
        "Because those appliances are too heavy to carry",
        "Because they pose high risks of electric shocks or burns",
        "Because children are not allowed in the kitchen",
        "Because they might make the house look too bright"
      ],
      answer: 1
    },
    {
      type: "choice",
      q: "Your sibling is busy studying, and you notice their clean clothes are unfolded. What is the best way to show initiative?",
      options: [
        "Leave the clothes alone because they are not yours.",
        "Fold their clothes neatly and place them on their bed.",
        "Tell your mother that your sibling is lazy.",
        "Throw the clothes in the laundry bin to wash again."
      ],
      answer: 1
    },
    {
      type: "choice",
      q: "How does showing initiative at home prepare you for success at school?",
      options: [
        "It teaches you how to clean the school roof.",
        "It builds habits of self-discipline, organization, and responsibility.",
        "It guarantees you will get perfect grades without studying.",
        "It helps you run faster during physical education classes."
      ],
      answer: 1
    },
    {
      type: "verify",
      q: "Which of the following statements is true?",
      options: [
        "Statement A: All chores are important, and doing them builds strong family cooperation and a healthy home environment.",
        "Statement B: Sweeping and wiping are minor tasks that have no effect on the family's health or happiness."
      ],
      answer: 0
    },
    {
      type: "blank",
      q: "What word describes the teamwork and cooperation in a family where everyone works together to keep the home clean?",
      answer: "cooperation"
    }
  ]
,
  performance: {
        type: "performance",
        title: "Household Chore Demonstration",
        desc: "Show your initiative at home by sweeping a dusty floor, wiping a table surface, or watering plants without being asked. Afterwards, report to your parent or teacher what you did.",
        labels: [
          "Identified a household task that needed attention",
          "Performed the chore safely and thoroughly",
          "Demonstrated initiative without being asked"
        ]
      },
  worksheet: {
      "pages": [
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Household Responsibilities</h3>\n                  <p class=\"ws-instruction\">Write down three chores you regularly help with at home to show self-discipline and helpfulness to parents.</p>\n                  \n                  <div style=\"margin-top: 15px;\">\n                    <div style=\"margin-bottom: 25px;\">1. <div class=\"writing-line inline-line\" style=\"width: 80%; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 25px;\">2. <div class=\"writing-line inline-line\" style=\"width: 80%; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 10px;\">3. <div class=\"writing-line inline-line\" style=\"width: 80%; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Action Commitment Sketch</h3>\n                  <p class=\"ws-instruction\">Draw a picture of yourself performing a chore at home (like sweeping the floor, washing dishes, or folding clothes).</p>\n                  \n                  <div class=\"drawing-box\" style=\"height: 240px; margin-top: 15px;\">\n                    <span>Draw yourself doing a chore here</span>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Household Initiative Check</h3>\n                  <p class=\"ws-instruction\">Write a checkmark (✓) if the action shows active initiative, and a cross (✗) if it does not.</p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 15px; margin-top: 20px;\">\n                    <div style=\"margin-bottom: 22px;\">[ &nbsp; &nbsp; ] 1. Sweeping the floor quietly because you saw it was dusty.</div>\n                    <div style=\"margin-bottom: 22px;\">[ &nbsp; &nbsp; ] 2. Pretending to sleep when your mother starts washing dishes.</div>\n                    <div style=\"margin-bottom: 22px;\">[ &nbsp; &nbsp; ] 3. Folding your blanket neatly right after waking up in the morning.</div>\n                  </div>\n                </div>\n                "]
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
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Geometric Calculations</h3>\n                  <p class=\"ws-instruction\">Find the missing values and show your computations using your stylus.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\" style=\"border-right: 1px solid var(--border-color); padding-right:10px;\">\n                      <div class=\"ws-q\">1. In △ABC, ∠A = 40° and ∠B = 75°. Find the third angle ∠C.</div>\n                      <div class=\"writing-line\" style=\"margin-top: 20px; width: 90%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 90%;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"padding-left:10px;\">\n                      <div class=\"ws-q\">2. A rectangle has a length of 12cm and width of 5cm. Find its Perimeter and Area.</div>\n                      <div class=\"writing-line\" style=\"margin-top: 20px; width: 90%;\"></div>\n                      <div class=\"writing-line\" style=\"margin-top: 25px; width: 90%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Polygon Sketching Grid</h3>\n                  <p class=\"ws-instruction\">Use the grids to draw: 1) a Right Isosceles Triangle, and 2) a Trapezoid with top base 4 units and bottom base 8 units.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">1. Right Isosceles Triangle</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <div class=\"ws-q\">2. Trapezoid</div>\n                      <div class=\"math-grid-box\" style=\"margin-top: 10px; height: 180px;\"></div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Quadrilateral Attributes Table</h3>\n                  <p class=\"ws-instruction\">Write YES or NO in the cells to compare the properties of different 4-sided shapes.</p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Quadrilateral Shape</th>\n                        <th>Opposite Sides Parallel?</th>\n                        <th>All Sides Equal?</th>\n                        <th>All Angles are 90°?</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Square</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>Rectangle</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>Parallelogram</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
    }
  },
  "science": {
    "color": "#10b981",
    "icon": "🔬",
    "title": "Science",
    "subtitle": "Week 2: Chemical Properties of Materials [Advanced]",
    "slides": [
      {
        "title": "Physical vs. Chemical Properties",
        "image": "images/chemical_changes.png",
        "text": "Materials have different properties. Physical properties (like color, shape, and state) can be observed without changing what the material is. Chemical properties describe how a substance reacts and changes into a completely new substance.",
        "examples": [
          {
            "title": "Physical Property",
            "content": "Water freezing into ice is a physical change because it is still water ($H_2O$)."
          },
          {
            "title": "Chemical Property",
            "content": "Iron turning into rust is a chemical change because rust is a new substance (iron oxide) with different properties."
          }
        ]
      },
      {
        "title": "What is a Chemical Change?",
        "text": "A chemical change (or chemical reaction) occurs when substances combine or break down to form new substances. The chemical bonds between atoms are broken and reformed in new ways.",
        "examples": [
          {
            "title": "Irreversibility",
            "content": "Most chemical changes are permanent and cannot be easily reversed. You cannot un-bake a cake or un-burn a piece of wood."
          },
          {
            "title": "Energy Change",
            "content": "Chemical reactions often release energy (heat/light) or absorb it (become cold)."
          }
        ]
      },
      {
        "title": "Clues of a Chemical Change: Color & Gas",
        "text": "We can detect chemical changes using our senses. A sudden, unexpected change in color or the production of gas bubbles are strong indicators that a reaction has occurred.",
        "examples": [
          {
            "title": "Color Change",
            "content": "Leaving a sliced apple on the counter causes it to turn brown due to oxidation (reaction with oxygen)."
          },
          {
            "title": "Gas Production",
            "content": "Mixing vinegar (acid) with baking soda (base) releases carbon dioxide gas, creating fizzy bubbles."
          }
        ]
      },
      {
        "title": "Clues: Temperature, Light & Precipitate",
        "text": "Other signs of chemical changes include a change in temperature (feeling hot or cold), emission of light, or the appearance of a solid residue called a precipitate.",
        "examples": [
          {
            "title": "Light and Heat",
            "content": "A burning matchstick emits light and heat, proving a chemical reaction (combustion) is taking place."
          },
          {
            "title": "Precipitate",
            "content": "Adding drops of lemon juice to milk causes the milk to clump into solids (curd), which is a precipitate."
          }
        ]
      },
      {
        "title": "Combustibility",
        "text": "Combustibility is the chemical property of a material that allows it to burn when exposed to oxygen and a heat source, producing ash, smoke, and energy.",
        "examples": [
          {
            "title": "Combustible Materials",
            "content": "Wood, coal, paper, and dry leaves are combustible materials used as fuels."
          },
          {
            "title": "Combustion Equation",
            "content": "Fuel + Oxygen + Heat → Carbon Dioxide + Water + Ash + Energy."
          }
        ]
      },
      {
        "title": "Flammability",
        "text": "Flammability is a specific type of combustibility. It describes how easily and quickly a material ignites or catches fire at relatively low temperatures.",
        "examples": [
          {
            "title": "Flammable Liquids",
            "content": "Gasoline, alcohol, kerosene, and LPG (liquefied petroleum gas) are highly flammable."
          },
          {
            "title": "Warning labels",
            "content": "Flammable containers have warning symbols showing a flame to tell users to keep them away from sparks."
          }
        ]
      },
      {
        "title": "Combustible vs. Flammable",
        "text": "While both terms involve burning, flammable materials ignite almost instantly upon contact with a flame, whereas combustible materials require significant heating before they burn.",
        "examples": [
          {
            "title": "Alcohol vs. Wood",
            "content": "Rubbing alcohol is flammable (ignites immediately at room temperature). A thick log of wood is combustible (requires sustained heat to catch fire)."
          },
          {
            "title": "Safety Tip",
            "content": "Always store flammable materials in cool, well-ventilated areas away from electrical outlets."
          }
        ]
      },
      {
        "title": "Biodegradability",
        "text": "Biodegradability is the chemical property of organic materials that allows them to be broken down (decomposed) by living micro-organisms like bacteria and fungi into natural elements.",
        "examples": [
          {
            "title": "Composting",
            "content": "Fruit peels, vegetables, leaves, and paper decompose in soil, turning into rich compost that feeds plants."
          },
          {
            "title": "Decomposers",
            "content": "Bacteria, fungi, and earthworms act as nature's recyclers by decomposing organic waste."
          }
        ]
      },
      {
        "title": "Non-Biodegradable Materials",
        "text": "Non-biodegradable materials cannot be decomposed by natural processes, or they take hundreds of years to break down. They accumulate in landfills and oceans, causing severe pollution.",
        "examples": [
          {
            "title": "Plastics",
            "content": "A plastic bottle can take up to 450 years to break down, breaking only into tiny toxic microplastics."
          },
          {
            "title": "Glass and Metal",
            "content": "Glass bottles and aluminum cans are non-biodegradable but can be recycled repeatedly without losing quality."
          }
        ]
      },
      {
        "title": "Chemical Reactivity",
        "text": "Reactivity is the measure of how easily a substance undergoes a chemical reaction with other materials, such as water, oxygen, acids, or other chemicals.",
        "examples": [
          {
            "title": "Highly Reactive",
            "content": "Sodium metal is so reactive that it explodes when it touches water. It must be stored in oil."
          },
          {
            "title": "Inert Materials",
            "content": "Gold and helium are inert (non-reactive) materials, which is why gold does not tarnish or rust."
          }
        ]
      },
      {
        "title": "Oxidation: Rusting of Iron",
        "text": "Rusting is a slow chemical reaction (oxidation) where iron combines with oxygen in the presence of water or moisture to form iron oxide (rust).",
        "examples": [
          {
            "title": "Rust Properties",
            "content": "Rust is a crumbly, reddish-brown solid. Unlike strong iron, rust is weak and easily breaks apart."
          },
          {
            "title": "Acceleration",
            "content": "Saltwater accelerates the rusting process, which is why ships in the ocean rust very quickly."
          }
        ]
      },
      {
        "title": "Preventing Rust: Barriers",
        "text": "Since rusting requires both oxygen and water, we can prevent it by coating the iron with a protective barrier to block air and moisture.",
        "examples": [
          {
            "title": "Painting",
            "content": "Painting gates and cars keeps oxygen and water from reaching the steel underneath."
          },
          {
            "title": "Oiling and Greasing",
            "content": "Applying oil to bicycle chains or tools blocks moisture and prevents rusting."
          }
        ]
      },
      {
        "title": "Preventing Rust: Galvanization",
        "text": "Galvanization is the process of coating iron or steel with a thin layer of zinc. Zinc reacts first, protecting the inner iron from corroding.",
        "examples": [
          {
            "title": "Galvanized Iron (GI) Sheets",
            "content": "The corrugated metal sheets used for roofs in the Philippines (yero) are galvanized to resist tropical rain."
          },
          {
            "title": "Sacrificial Protection",
            "content": "Even if the zinc coating is scratched, it still protects the iron nearby through chemical action."
          }
        ]
      },
      {
        "title": "Reaction of Materials with Acids",
        "text": "Some metals react strongly with acids, dissolving and producing hydrogen gas. Other materials, like limestone, fizz when touched by acid.",
        "examples": [
          {
            "title": "Acid on Metal",
            "content": "Dropping zinc into hydrochloric acid causes heavy bubbling as hydrogen gas is released."
          },
          {
            "title": "Acid Rain damage",
            "content": "Acid rain reacts chemically with marble and limestone buildings, slowly dissolving historical statues over time."
          }
        ]
      },
      {
        "title": "Toxicity and Hazards",
        "text": "Toxicity is the chemical property of a substance that makes it harmful or poisonous to living organisms. Many household cleaning agents are toxic.",
        "examples": [
          {
            "title": "Pesticides",
            "content": "Chemicals used to kill insects are highly toxic to humans and pets if swallowed or inhaled."
          },
          {
            "title": "Bleach",
            "content": "Chlorine bleach is corrosive and toxic; it must never be mixed with ammonia because it releases lethal gas."
          }
        ]
      },
      {
        "title": "Understanding Hazard Symbols",
        "text": "To keep users safe, chemical containers have standard pictograms showing their hazards. Knowing these symbols prevents accidents.",
        "examples": [
          {
            "title": "Skull and Crossbones",
            "content": "Represents acute toxicity (poisonous if swallowed or inhaled)."
          },
          {
            "title": "Corrosive Symbol",
            "content": "Shows test tubes pouring liquid burning a hand and a metal bar, indicating it eats away materials."
          }
        ]
      },
      {
        "title": "Household Chemical Safety Rules",
        "text": "We must handle household chemicals with care: 1) Keep in original bottles, 2) Store out of reach of children, 3) Wear gloves, 4) Use in well-ventilated areas.",
        "examples": [
          {
            "title": "No Mixing",
            "content": "Never mix different cleaning liquids. Mixing bleach with acidic toilet cleaners produces toxic chlorine gas."
          },
          {
            "title": "Original Labels",
            "content": "Never pour chemicals into juice bottles; someone might drink it by mistake."
          }
        ]
      },
      {
        "title": "Environmental Impact of Chemicals: Acid Rain",
        "text": "Burning fossil fuels releases sulfur dioxide and nitrogen oxides into the atmosphere. These gases mix with rainwater to form acid rain.",
        "examples": [
          {
            "title": "Forest damage",
            "content": "Acid rain dissolves nutrients in the soil, making it hard for trees to absorb water and survive."
          },
          {
            "title": "Aquatic Life",
            "content": "Acid rain lowers the pH of lakes, killing fish eggs and aquatic plants."
          }
        ]
      },
      {
        "title": "Photosynthesis as a Chemical Process",
        "text": "Photosynthesis is a vital chemical reaction in plants. Using chlorophyll, plants turn carbon dioxide and water into glucose (food) and oxygen.",
        "examples": [
          {
            "title": "Word Equation",
            "content": "Carbon Dioxide + Water + Sunlight → Glucose + Oxygen."
          },
          {
            "title": "Oxygen Producer",
            "content": "This reaction is the primary source of the oxygen we breathe."
          }
        ]
      },
      {
        "title": "Cellular Respiration: The Reverse Reaction",
        "text": "Cellular respiration is the chemical process where cells break down glucose using oxygen to release energy, carbon dioxide, and water.",
        "examples": [
          {
            "title": "Word Equation",
            "content": "Glucose + Oxygen → Carbon Dioxide + Water + Energy (ATP)."
          },
          {
            "title": "Everyday Action",
            "content": "Every time you breathe in oxygen and breathe out carbon dioxide, you are showing respiration."
          }
        ]
      },
      {
        "title": "Digestion: Chemical Breakdown",
        "text": "Digestion is not just physical chewing. In your stomach and intestines, acids and enzymes chemically break down food molecules into nutrients.",
        "examples": [
          {
            "title": "Saliva",
            "content": "Saliva contains amylase, an enzyme that chemically breaks down complex starches into simple sugars while you chew."
          },
          {
            "title": "Stomach Acid",
            "content": "Hydrochloric acid in the stomach dissolves food and kills harmful bacteria."
          }
        ]
      },
      {
        "title": "Plastics: The Durable Problem",
        "text": "Plastics are synthetic polymers made from petroleum. Their chemical bonds are so stable that decomposers cannot break them down.",
        "examples": [
          {
            "title": "Plastic Life",
            "content": "Every piece of plastic ever made still exists on Earth today, unless it has been burned (which releases toxic fumes)."
          },
          {
            "title": "Ocean Pollution",
            "content": "Plastics float in oceans, trapping marine animals or being eaten by fish, entering the human food chain."
          }
        ]
      },
      {
        "title": "The 5 Rs of Waste Management",
        "text": "To reduce plastic pollution, we practice the 5 Rs: Reduce (use less), Reuse (use again), Recycle (process into new products), Repair (fix it), and Rot (compost).",
        "examples": [
          {
            "title": "Rotting",
            "content": "Segregating organic waste allows it to rot naturally, reducing landfill bulk."
          },
          {
            "title": "Reducing",
            "content": "Saying 'no' to plastic straws and using reusable bags is the best way to reduce plastic use."
          }
        ]
      },
      {
        "title": "Laboratory Safety in Science class",
        "text": "When doing chemical experiments in school, safety is the number one priority. Always wear goggles, gloves, and follow instructions.",
        "examples": [
          {
            "title": "Eye Protection",
            "content": "Goggles protect your eyes from accidental chemical splashes."
          },
          {
            "title": "Clean Up",
            "content": "Dispose of chemical wastes in designated disposal bottles, never down the standard sink."
          }
        ]
      },
      {
        "title": "Review of Chemical Properties",
        "text": "Let's summarize: Chemical properties describe how materials change (chemical changes indicate color, gas, temp changes). Combustibility/flammability involve burning. Biodegradability allows decay. Reactivity involves rusting (prevented by paint/galvanization) or acid reactions. Handle toxic chemicals safely and protect the environment.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Look in your kitchen. Find one biodegradable item (e.g. banana) and one non-biodegradable item (e.g. glass jar)!"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "Which of the following is a chemical property of a material?",
        "options": [
          "Melting point",
          "Color",
          "Flammability",
          "Density"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What happens during a chemical change?",
        "options": [
          "The material changes its shape only",
          "A new substance with different properties is formed",
          "The material turns from liquid to gas without changing identity",
          "The material remains exactly the same"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is a clear sign that a chemical change has occurred?",
        "options": [
          "A block of ice melting into water",
          "Bubbling gas released when mixing baking soda and vinegar",
          "Cutting a piece of paper into small squares",
          "Crushing a soda can"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "The ability of a material to burn in the presence of oxygen is called:",
        "options": [
          "Reactivity",
          "Combustibility",
          "Toxicity",
          "Biodegradability"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "How does a flammable material differ from a combustible material?",
        "options": [
          "Flammable materials do not burn",
          "Flammable materials catch fire easily at low temperatures",
          "Combustible materials ignite instantly at room temperature",
          "There is no difference"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following liquids is highly flammable?",
        "options": [
          "Water",
          "Rubbing alcohol",
          "Vinegar",
          "Soy sauce"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Organic materials that can be broken down by bacteria and fungi are classified as:",
        "options": [
          "Flammable",
          "Non-biodegradable",
          "Biodegradable",
          "Reactive"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which material is biodegradable and can be turned into fertilizer?",
        "options": [
          "Plastic spoon",
          "Glass bottle",
          "Vegetable peels",
          "Aluminum can"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "How long does a typical plastic bottle take to decompose in a landfill?",
        "options": [
          "5 to 10 years",
          "50 years",
          "450 years",
          "It never breaks down at all"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which metal is highly reactive and must be stored in oil to prevent it from reacting with water?",
        "options": [
          "Gold",
          "Sodium",
          "Iron",
          "Copper"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Rusting of iron is a chemical reaction also known as:",
        "options": [
          "Photosynthesis",
          "Oxidation",
          "Neutralization",
          "Respiration"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which two substances are required for iron to rust?",
        "options": [
          "Oxygen and nitrogen",
          "Oxygen and water",
          "Carbon dioxide and water",
          "Helium and acid"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following prevents iron from rusting by blocking air and moisture?",
        "options": [
          "Soaking it in water",
          "Painting it",
          "Exposing it to salt",
          "Heating it"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is galvanization?",
        "options": [
          "Coating iron with a layer of rust",
          "Coating iron or steel with a protective layer of zinc",
          "Dipping iron in acid to clean it",
          "Melting iron to mold it"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What gas is produced when reactive metals react with acids?",
        "options": [
          "Oxygen",
          "Carbon dioxide",
          "Hydrogen",
          "Nitrogen"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "statues made of limestone dissolve slowly due to which environmental chemical reaction?",
        "options": [
          "Global warming",
          "Photosynthesis",
          "Acid rain",
          "Rusting"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "A chemical property that describes how poisonous or harmful a substance is to living things is:",
        "options": [
          "Flammability",
          "Toxicity",
          "Reactivity",
          "Combustibility"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What hazard symbol features a skull and crossbones?",
        "options": [
          "Corrosive",
          "Flammable",
          "Acute Toxicity / Poison",
          "Explosive"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Why is it dangerous to mix chlorine bleach with toilet cleaners containing acid?",
        "options": [
          "It produces a neutral harmless liquid",
          "It releases highly toxic chlorine gas",
          "It turns into drinkable water",
          "It causes immediate freezing"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "Rusting is a physical change because rust can easily be turned back into iron.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Glass is non-biodegradable but can be melted and recycled.",
        "answer": true
      },
      {
        "type": "tf",
        "q": "Photosynthesis is a chemical reaction that releases carbon dioxide into the air.",
        "answer": false
      },
      {
        "type": "blank",
        "q": "The chemical reaction of iron, oxygen, and water produces red-brown ______.",
        "answer": "rust"
      },
      {
        "type": "blank",
        "q": "Organic waste is decomposed by bacteria and fungi, which are natural ______.",
        "answer": "decomposers"
      },
      {
        "type": "blank",
        "q": "The protective metal layer coated on galvanized iron is ______.",
        "answer": "zinc"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "During an experiment, a student mixes two clear liquids. Which observation provides the most definitive evidence that a chemical reaction occurred?",
        "options": [
          "The total volume of the mixture increases slightly",
          "A white solid precipitate settles at the bottom of the container",
          "The container gets wet on the outside",
          "The liquids mix completely without separating"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Why does saltwater accelerate the rusting of iron compared to freshwater?",
        "options": [
          "Saltwater contains more oxygen than freshwater",
          "The dissolved salt conducts ions, completing the electrochemical process of rusting faster",
          "Salt is corrosive and eats the iron directly without oxygen",
          "Saltwater acts as a paint barrier"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If you mix hydrochloric acid and baking soda, heavy bubbling occurs. What is the gas being released?",
        "options": [
          "Hydrogen",
          "Carbon dioxide",
          "Oxygen",
          "Chlorine"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following processes is a chemical change?",
        "options": [
          "Condensing steam into liquid water",
          "Dissolving sugar in hot water",
          "Browning of a sliced banana on a plate",
          "Melting wax on a candle"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which of the 5 Rs is represented when you put food scraps and dry leaves into a compost bin to rot?",
        "options": [
          "Reduce",
          "Recycle",
          "Repair",
          "Rot"
        ],
        "answer": 3
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Household Hazard & Safety Inspection",
      "desc": "Go around your house with an adult. Find three products that have chemical hazard warnings on their labels (e.g. dishwashing liquid, bleach, insect spray, alcohol). Draw a picture of the products, copy the safety symbols you see on their labels, and write down: 1) the chemical property of the product (e.g. flammable, toxic, corrosive), 2) how it should be stored safely, and 3) what first-aid action to take if it is accidentally swallowed or splashed in the eyes. Present this safety plan to your family.",
      "labels": [
        "Identified three household products with chemical hazard warnings",
        "Accurately drew the safety symbols and identified the chemical hazard properties",
        "Provided clear storage guidelines and first-aid instructions"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Chemical Properties Matching</h3>\n                  <p class=\"ws-instruction\">Identify the chemical property (Combustibility, Flammability, Biodegradability, Reactivity, Toxicity) described.</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. Decomposes naturally in soil by bacteria: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. Catches fire instantly at room temperature (e.g. alcohol): <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. Slow reaction of iron with oxygen and water (rusting): <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. Chemical cleaner that is poisonous if swallowed: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Household Chemical Safety</h3>\n                  <p class=\"ws-instruction\">Copy a hazard warning symbol you know (e.g. toxic skull, corrosive, flammable flame) inside the box, and write three safety rules for storing cleaning agents.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\">\n                      <div class=\"drawing-box\" style=\"height: 180px; margin-top: 10px;\">\n                        <span>Draw hazard symbol here</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\">\n                      <p>Safety Rules:</p>\n                      <ol>\n                        <li><div class=\"writing-line inline-line\" style=\"width: 80%;\"></div></li>\n                        <li style=\"margin-top: 15px;\"><div class=\"writing-line inline-line\" style=\"width: 80%;\"></div></li>\n                        <li style=\"margin-top: 15px;\"><div class=\"writing-line inline-line\" style=\"width: 80%;\"></div></li>\n                      </ol>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Chemical Reactivity Questions</h3>\n                  <p class=\"ws-instruction\">Answer the questions about chemical reactions using your stylus.</p>\n                  \n                  <div style=\"font-size: 15px; margin-top: 15px;\">\n                    <div class=\"ws-q\">1. Why are some liquid medicines stored inside dark-brown bottles? (Relate to sunlight)</div>\n                    <div class=\"writing-line\" style=\"margin-top: 10px; width: 95%;\"></div>\n                    <div class=\"writing-line\" style=\"margin-top: 10px; width: 95%;\"></div>\n                  </div>\n                </div>\n                "]
    }
  },
  "english": {
    "color": "#a855f7",
    "icon": "🙋‍♂️",
    "title": "English",
    "subtitle": "Week 2: Story Elements & Phonics [Advanced]",
    "slides": [
      {
        "title": "Introduction to Narrative Texts",
        "text": "A narrative is a story written to entertain, instruct, or share a message. Narratives can be fiction (make-believe) or non-fiction (based on real events). All stories are built using core elements.",
        "examples": [
          {
            "title": "Fables",
            "content": "Stories like 'The Tortoise and the Hare' are narratives that teach a moral lesson."
          },
          {
            "title": "Biography",
            "content": "A story telling the actual life of Dr. Fe Del Mundo is a non-fiction narrative."
          }
        ]
      },
      {
        "title": "Story Elements: Characters",
        "text": "Characters are the people, animals, or creatures who take part in the action of the story. The main character is the protagonist, and the character opposing them is the antagonist.",
        "examples": [
          {
            "title": "Protagonist",
            "content": "In Cinderella, Cinderella is the protagonist who faces challenges."
          },
          {
            "title": "Antagonist",
            "content": "The Wicked Stepmother is the antagonist who creates obstacles for Cinderella."
          }
        ]
      },
      {
        "title": "Story Elements: Setting",
        "text": "The setting is the time and place in which a story occurs. It helps establish the mood, atmosphere, and constraints under which characters act.",
        "examples": [
          {
            "title": "Time",
            "content": "'Long ago in a small village...' establishes a historical and rural setting."
          },
          {
            "title": "Atmosphere",
            "content": "A story set in a dark, stormy castle feels mysterious and spooky."
          }
        ]
      },
      {
        "title": "Story Elements: Plot",
        "text": "The plot is the sequence of connected events that make up the story. It usually follows a pattern: beginning, middle, and end, structured around a central conflict.",
        "examples": [
          {
            "title": "Conflict",
            "content": "The conflict is the main struggle (e.g., trying to escape a deserted island)."
          },
          {
            "title": "Resolution",
            "content": "The resolution is how the conflict is finally solved at the end."
          }
        ]
      },
      {
        "title": "Plot Structure: Exposition",
        "text": "The exposition is the beginning of the story. It introduces the main characters, describes the setting, and sets up the normal life of the characters before the conflict starts.",
        "examples": [
          {
            "title": "Example",
            "content": "In 'The Three Little Pigs', the exposition shows the pigs leaving home to build their own houses."
          },
          {
            "title": "Information",
            "content": "The exposition answers the questions: *Who is the story about?* and *Where does it take place?*"
          }
        ]
      },
      {
        "title": "Plot Structure: Rising Action",
        "text": "The rising action consists of events where the conflict begins to develop. The characters face obstacles, and the tension or suspense in the story increases.",
        "examples": [
          {
            "title": "Example",
            "content": "The Big Bad Wolf blows down the straw house and the wood house, chasing the pigs to the brick house."
          },
          {
            "title": "Suspense",
            "content": "This is where the story gets exciting and readers wonder what will happen next."
          }
        ]
      },
      {
        "title": "Plot Structure: The Climax",
        "text": "The climax is the turning point of the story. It is the moment of highest tension, excitement, or confrontation where the main conflict is addressed directly.",
        "examples": [
          {
            "title": "Example",
            "content": "The wolf tries to climb down the chimney of the brick house, and the pigs prepare a boiling pot of water below."
          },
          {
            "title": "Decision Point",
            "content": "This is the peak of the action where the outcome of the struggle is decided."
          }
        ]
      },
      {
        "title": "Plot Structure: Falling Action",
        "text": "The falling action consists of the events that happen immediately after the climax. The tension drops, and the story begins to wrap up.",
        "examples": [
          {
            "title": "Example",
            "content": "The wolf falls into the boiling water, gets burned, and runs away screaming into the forest."
          },
          {
            "title": "Resolution Path",
            "content": "The main problem is solved, and the characters deal with the immediate results of the climax."
          }
        ]
      },
      {
        "title": "Plot Structure: Resolution",
        "text": "The resolution (or denouement) is the ending of the story. It shows the characters in their new situation, and any loose ends of the plot are tied up.",
        "examples": [
          {
            "title": "Example",
            "content": "The three little pigs live safely together in the strong brick house, never fearing the wolf again."
          },
          {
            "title": "Moral / Lesson",
            "content": "The resolution often reveals the final lesson or theme of the story."
          }
        ]
      },
      {
        "title": "Character Traits",
        "text": "Character traits are descriptive adjectives that define a character's personality. We identify traits by analyzing what they do, say, think, and how they react to events.",
        "examples": [
          {
            "title": "Actions speak louder",
            "content": "If a character shares their lunch with someone who has none, their trait is *generous*."
          },
          {
            "title": "Dialogue",
            "content": "A character who speaks politely to elders has the trait *respectful*."
          }
        ]
      },
      {
        "title": "Character Motives",
        "text": "Character motives are the reasons *why* a character behaves or acts in a certain way. Understanding motives helps us understand the plot.",
        "examples": [
          {
            "title": "Why act?",
            "content": "In Cinderella, the stepmother acts meanly because she wants her own daughters to marry the prince instead of Cinderella."
          },
          {
            "title": "Goals",
            "content": "Motives are driven by desires (love, greed, fear, survival, friendship)."
          }
        ]
      },
      {
        "title": "Inferring Traits and Motives",
        "text": "Authors rarely state traits or motives directly. Readers must 'infer' them using clues in the story combined with their own real-life knowledge.",
        "examples": [
          {
            "title": "Passage",
            "content": "'Caloy stayed up until midnight, double-checking his science experiment layout to ensure no variables were missed.'"
          },
          {
            "title": "Inference",
            "content": "We can infer Caloy is *diligent* and *thorough*. His motive is to have a fair test."
          }
        ]
      },
      {
        "title": "Identifying the Theme",
        "text": "The theme is the central message, moral, or lesson about life that the author wants to share. It is different from the plot (what happens).",
        "examples": [
          {
            "title": "Plot",
            "content": "A tortoise races a hare and wins because the hare falls asleep."
          },
          {
            "title": "Theme",
            "content": "Slow and steady wins the race. Perseverance is rewarded."
          }
        ]
      },
      {
        "title": "Point of View (POV)",
        "text": "Point of View is the perspective from which a story is told. It determines how much information the reader receives.",
        "examples": [
          {
            "title": "First-Person",
            "content": "Narrator uses 'I', 'me', 'we'. (e.g. 'I looked through the telescope and saw the stars.')."
          },
          {
            "title": "Third-Person",
            "content": "Narrator is an outside voice using 'he', 'she', 'they'. (e.g. 'She adjusted the protractor to measure the angle.')"
          }
        ]
      },
      {
        "title": "Introduction to CVC-e Words",
        "text": "Phonics helps us read. CVC-e stands for Consonant-Vowel-Consonant-silent 'E'. When a word ends with a silent 'e', the previous vowel becomes 'long' (says its name).",
        "examples": [
          {
            "title": "The Silent 'E'",
            "content": "The 'e' at the end does not make any sound. Its job is to stretch the middle vowel."
          },
          {
            "title": "Long vs Short",
            "content": "Short vowel: 'can' (/æ/). Long vowel: 'cane' (/eɪ/)."
          }
        ]
      },
      {
        "title": "CVC-e with Vowel 'A'",
        "text": "Adding a silent 'e' changes the short 'a' sound (as in cap) to a long 'a' sound (as in cape).",
        "examples": [
          {
            "title": "cap → cape",
            "content": "A cap is a hat. A cape is a cloak worn by superheroes."
          },
          {
            "title": "More pairs",
            "content": "mad → made, tap → tape, hat → hate, plan → plane."
          }
        ]
      },
      {
        "title": "CVC-e with Vowel 'I'",
        "text": "Adding a silent 'e' changes the short 'i' sound (as in pin) to a long 'i' sound (as in pine).",
        "examples": [
          {
            "title": "pin → pine",
            "content": "A pin is a sharp metal tool. A pine is an evergreen tree."
          },
          {
            "title": "More pairs",
            "content": "kit → kite, bit → bite, rid → ride, fin → fine."
          }
        ]
      },
      {
        "title": "CVC-e with Vowel 'O'",
        "text": "Adding a silent 'e' changes the short 'o' sound (as in hop) to a long 'o' sound (as in hope).",
        "examples": [
          {
            "title": "hop → hope",
            "content": "Hop means to jump on one foot. Hope is a feeling of desire for something to happen."
          },
          {
            "title": "More pairs",
            "content": "rob → robe, mop → mope, cod → code, not → note."
          }
        ]
      },
      {
        "title": "CVC-e with Vowel 'U'",
        "text": "Adding a silent 'e' changes the short 'u' sound (as in cub) to a long 'u' sound (as in cube).",
        "examples": [
          {
            "title": "cub → cube",
            "content": "A cub is a baby bear. A cube is a three-dimensional square shape."
          },
          {
            "title": "More pairs",
            "content": "tub → tube, cut → cute, hug → huge."
          }
        ]
      },
      {
        "title": "Decoding Context Clues in Narratives",
        "text": "Just like in informational texts, stories contain context clues to define hard words. Look at characters' reactions and settings.",
        "examples": [
          {
            "title": "Sentence",
            "content": "The prince was *jubilant*, cheering and jumping for joy when he found the slipper fit."
          },
          {
            "title": "Decoding",
            "content": "The actions 'cheering and jumping for joy' act as context clues showing 'jubilant' means extremely happy."
          }
        ]
      },
      {
        "title": "Analyzing Dialogue in Stories",
        "text": "Dialogue is the spoken words between characters, marked by quotation marks ('...'). It reveals motives and shifts the plot.",
        "examples": [
          {
            "title": "Dialogue Clue",
            "content": "'Let's share this blanket, Caloy. It's freezing tonight,' said Matteo."
          },
          {
            "title": "Inference",
            "content": "Matteo's motive is to keep his friend warm and show kindness. His trait is *compassionate*."
          }
        ]
      },
      {
        "title": "Foreshadowing: Clues of the Future",
        "text": "Foreshadowing is a literary device where the author leaves subtle hints about what will happen later in the story.",
        "examples": [
          {
            "title": "Example Hint",
            "content": "A character slips a small protractor into their pocket in chapter 1. Later in chapter 5, they use it to solve a lock combination."
          },
          {
            "title": "Why use it?",
            "content": "It builds suspense and makes the ending feel satisfying instead of random."
          }
        ]
      },
      {
        "title": "Summarizing Stories: The SWBST Method",
        "text": "A great way to summarize a narrative is the SWBST method: Somebody (Character), Wanted (Motive), But (Conflict), So (Action), Then (Resolution).",
        "examples": [
          {
            "title": "Applying SWBST",
            "content": "Matteo (Somebody) wanted to pass his geometry test (Wanted), but he did not have a protractor (But), so he borrowed one from Caloy and studied hard (So), then he got a perfect score (Then)."
          }
        ]
      },
      {
        "title": "Author's Purpose in Narratives",
        "text": "While informational texts write to *inform*, narrative texts are written primarily to *entertain* or to *teach a lesson* (persuade/convey values).",
        "examples": [
          {
            "title": "Entertaining",
            "content": "Making you laugh or feel suspense while reading about an adventure."
          },
          {
            "title": "Moral Lessons",
            "content": "A story showing that telling lies leads to trouble (e.g. Boy Who Cried Wolf) is written to teach a values lesson."
          }
        ]
      },
      {
        "title": "Review of Narrative Analysis",
        "text": "Let's summarize: Narratives use story elements (characters, setting, plot - exposition, rising action, climax, falling action, resolution). We infer traits and motives. Phonics includes CVC-e words where silent 'e' makes middle vowels long. Summarize using SWBST and identify themes.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Write down a CVC-e word for each vowel: A, I, O, U. (e.g. cake, kite, bone, mule)"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "Which story element refers to the time and place of the events?",
        "options": [
          "Character",
          "Setting",
          "Plot",
          "Theme"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the sequence of events in a narrative text called?",
        "options": [
          "Dialogue",
          "Setting",
          "Plot",
          "Foreshadowing"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "The beginning of a story that introduces characters and setting is the:",
        "options": [
          "Climax",
          "Exposition",
          "Rising Action",
          "Resolution"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What do we call the turning point of highest tension in a story's plot?",
        "options": [
          "Exposition",
          "Resolution",
          "Climax",
          "Falling Action"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "The final part of a story where the main conflict is resolved is the:",
        "options": [
          "Exposition",
          "Rising Action",
          "Climax",
          "Resolution"
        ],
        "answer": 3
      },
      {
        "type": "choice",
        "q": "Which part of the plot shows the conflict starting to build and tension increasing?",
        "options": [
          "Resolution",
          "Rising Action",
          "Falling Action",
          "Exposition"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Personality qualities like 'generous' or 'brave' are known as:",
        "options": [
          "Character motives",
          "Character traits",
          "Settings",
          "Themes"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "The reason *why* a character behaves or acts in a certain way is called their:",
        "options": [
          "Trait",
          "Motive",
          "Setting",
          "Climax"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If a student works silently in the library and cleans up their table, what trait can you infer?",
        "options": [
          "Noisy",
          "Irresponsible",
          "Considerate / Responsible",
          "Greedy"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "What is the central message or lesson of a story?",
        "options": [
          "Plot",
          "Theme",
          "Setting",
          "Climax"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which point of view is used when the narrator is a character in the story and uses 'I'?",
        "options": [
          "First-Person",
          "Third-Person",
          "Second-Person",
          "Objective"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "What does CVC-e stand for in phonics?",
        "options": [
          "Consonant-Vowel-Consonant-ending",
          "Consonant-Vowel-Consonant-silent E",
          "Compound-Vowel-Consonant-E",
          "Consonant-Verb-Clause-E"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "How does the silent 'e' at the end change the vowel sound in a CVC word?",
        "options": [
          "It makes the vowel sound short",
          "It makes the vowel sound long",
          "It makes the word plural",
          "It changes the consonant sound"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is a CVC-e word containing a long 'a' sound?",
        "options": [
          "cap",
          "tape",
          "tap",
          "map"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which CVC-e word has a long 'i' sound?",
        "options": [
          "pin",
          "kite",
          "kit",
          "fin"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which CVC-e word has a long 'o' sound?",
        "options": [
          "hop",
          "robe",
          "mop",
          "not"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which CVC-e word has a long 'u' sound?",
        "options": [
          "cub",
          "tube",
          "tub",
          "cut"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "In: 'The tiny puppy was *feeble*; it could not even lift its head to drink.', what does 'feeble' mean?",
        "options": [
          "Strong",
          "Weak / without strength",
          "Playful",
          "Loud"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What does the 'S' stand for in the SWBST summary method?",
        "options": [
          "Setting",
          "Somebody",
          "So",
          "Sequence"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "A story's theme is the same as the summary of the plot.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "In CVC-e words, the 'e' at the end is pronounced loudly.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "A character who works hard to achieve a goal is showing perseverance.",
        "answer": true
      },
      {
        "type": "blank",
        "q": "The silent 'e' makes the vowel sound ______ instead of short.",
        "answer": "long"
      },
      {
        "type": "blank",
        "q": "What is the CVC-e word that means a three-dimensional square block?",
        "answer": "cube"
      },
      {
        "type": "blank",
        "q": "The perspective of a narrator telling the story is called Point of ______.",
        "answer": "view"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "Read: 'Caloy saw a wallet on the classroom floor. He picked it up, opened it to find the ID card of a classmate, and immediately handed it to the teacher.' What trait and motive can be inferred?",
        "options": [
          "Caloy is dishonest and wanted the money",
          "Caloy is honest and wanted to return the wallet to its owner",
          "Caloy is lazy and did not want to carry it",
          "Caloy is greedy and wanted a reward"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which plot element represents the immediate events following the climax where tension begins to drop?",
        "options": [
          "Exposition",
          "Rising Action",
          "Falling Action",
          "Resolution"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Which CVC-e word changes the CVC word 'bit' into something you fly in the sky?",
        "options": [
          "bite",
          "kite",
          "katar",
          "bitter"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the theme of a story where a small mouse saves a large lion from a hunter's trap after the lion showed mercy to the mouse earlier?",
        "options": [
          "Lions are stronger than mice",
          "Even the smallest friend can be of great help; kindness is never wasted",
          "Hunters are dangerous",
          "Mice should avoid lions"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Identify the point of view: 'We packed our science notebooks and walked to the park to measure angles on the playground equipment.'",
        "options": [
          "Third-person limited",
          "Third-person omniscient",
          "First-person plural",
          "Second-person"
        ],
        "answer": 2
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Story Mapping & Phonics hunt",
      "desc": "Read a short story or fable of your choice (minimum 1 page). Draw a 'Story Map' on a sheet of paper. In your map, list: 1) the characters (with 2 traits each), 2) the setting, and 3) the plot sequence (Exposition, Climax, Resolution). Underneath your map, write down a list of at least five CVC-e words you found in the story. If there are none, convert five CVC words into CVC-e words (e.g. pin to pine, cap to cape) and draw a small picture for each. Share your map with your parent or teacher.",
      "labels": [
        "Correctly mapped the story elements (characters, traits, setting, plot steps)",
        "Neat and organized layout of the Story Map on paper",
        "Correct identification or conversion of 5 CVC-e words with accurate drawings"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Plot Mapping</h3>\n                  <p class=\"ws-instruction\">Identify the plot structure step (Exposition, Rising Action, Climax, Falling Action, Resolution) for the given story event.</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. The wolf falls into the boiling pot of water: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. Introducing the three pigs and their new houses: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. The wolf blows down the straw and wood houses: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. The pigs live safely together in the brick house: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: CVC to CVC-e Word Conversion</h3>\n                  <p class=\"ws-instruction\">Convert each short-vowel CVC word to a long-vowel CVC-e word by adding a silent 'e'. Draw the CVC-e object.</p>\n                  \n                  <div class=\"ws-split\">\n                    <div class=\"ws-col-half\" style=\"border-right: 1px solid var(--border-color); padding-right:10px;\">\n                      <div>1. <strong>cap</strong> (hat) → <strong>cape</strong> (cloak)</div>\n                      <div class=\"drawing-box\" style=\"height: 150px; margin-top: 10px;\">\n                        <span>Draw cape</span>\n                      </div>\n                    </div>\n                    <div class=\"ws-col-half\" style=\"padding-left:10px;\">\n                      <div>2. <strong>pin</strong> (needle) → <strong>pine</strong> (tree)</div>\n                      <div class=\"drawing-box\" style=\"height: 150px; margin-top: 10px;\">\n                        <span>Draw pine tree</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Narrative Map</h3>\n                  <p class=\"ws-instruction\">Read the story concept and label which elements represent: Exposition, Climax, and Resolution.</p>\n                  \n                  <div style=\"font-size: 14px; background: rgba(0,0,0,0.02); padding: 10px 15px; border-radius: 8px; border: 1.5px solid #e2e8f0; margin-bottom: 15px;\">\n                    \"Matteo lost his key, searched the entire house (Exposition), found it in his toy chest at the last minute (Climax), and successfully opened his learning desk (Resolution).\"\n                  </div>\n                  \n                  <div style=\"font-size: 14px; margin-top: 10px;\">\n                    <div style=\"margin-bottom: 12px;\">1. Matteo searching for the key at the beginning: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left: 10px;\"></div></div>\n                    <div style=\"margin-bottom: 12px;\">2. Finding the key in the chest right before class: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left: 10px;\"></div></div>\n                    <div style=\"margin-bottom: 12px;\">3. Opening his study desk and finishing homework: <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block; margin-left: 10px;\"></div></div>\n                  </div>\n                </div>\n                "]
    }
  },
  "filipino": {
    "color": "#f43f5e",
    "icon": "🇵🇭",
    "title": "Filipino",
    "subtitle": "Week 2: Kayarian ng Pangngalan: Inuulit at Tambalan [Advanced]",
    "slides": [
      {
        "title": "Pagbabalik-aral sa Anyo ng Pangngalan",
        "text": "Sa nakaraang linggo, inalam natin ang Payak (salitang-ugat lamang) at Maylapi (may panlapi). Ngayong linggo, dadagdagan natin ang ating kaalaman sa pamamagitan ng pag-aaral ng Inuulit at Tambalan. <span class='fil-sentence' data-translation='In the past week, we learned Simple and Affixed nouns. This week, we expand our knowledge by studying Repetitive and Compound nouns.'></span>",
        "examples": [
          {
            "title": "Anyo 1: Payak",
            "content": "araw (sun/day) <span class='fil-sentence' data-translation='simple: sun/day'></span>"
          },
          {
            "title": "Anyo 2: Maylapi",
            "content": "maulan (rainy) <span class='fil-sentence' data-translation='affixed: rainy'></span>"
          }
        ]
      },
      {
        "title": "Kayarian ng Pangngalan: Inuulit",
        "text": "Ang pangngalan ay inuulit kung ang buong salitang-ugat o bahagi nito ay inuulit upang makabuo ng bagong salita na may ibang kahulugan. <span class='fil-sentence' data-translation='A noun is repetitive (inuulit) if the entire root word or a portion of it is repeated to form a new word.'></span>",
        "examples": [
          {
            "title": "Uri ng Pag-uulit",
            "content": "Maaari itong maging ganap (buong salita) o di-ganap (bahagi lamang). <span class='fil-sentence' data-translation='It can be full (entire word) or partial (part of the word).'></span>"
          },
          {
            "title": "Halimbawa ng Gitling",
            "content": "Ang pag-uulit na ganap ay laging gumagamit ng gitling (-) sa pagitan ng mga salita. <span class='fil-sentence' data-translation='Full repetition always uses a hyphen (-) between the words.'></span>"
          }
        ]
      },
      {
        "title": "Inuulit na Ganap",
        "text": "Sa inuulit na ganap, ang buong salitang-ugat ay isinusulat nang dalawang beses na pinagdurugtong ng gitling. <span class='fil-sentence' data-translation='In full repetition, the entire root word is written twice, separated by a hyphen.'></span>",
        "examples": [
          {
            "title": "Mga Halimbawa",
            "content": "araw-araw (daily), gabi-gabi (every night), bahay-bahay (house-to-house) <span class='fil-sentence' data-translation='Examples of fully repeated nouns.'></span>"
          },
          {
            "title": "Sa Pangungusap",
            "content": "Namahagi sila ng tulong sa <span class='fil-phrase' data-translation='house-to-house'>bahay-bahay</span>. <span class='fil-sentence' data-translation='They distributed aid from house to house.'></span>"
          }
        ]
      },
      {
        "title": "Inuulit na Di-ganap (Parsyal)",
        "text": "Sa inuulit na di-ganap, bahagi lamang ng salitang-ugat (karaniwang ang unang pantig) ang inuulit. Hindi ito gumagamit ng gitling maliban kung may ibang panuntunan sa baybay. <span class='fil-sentence' data-translation='In partial repetition, only a portion of the root word (usually the first syllable) is repeated. No hyphen is used.'></span>",
        "examples": [
          {
            "title": "Mga Halimbawa",
            "content": "sali-salita (rumors), bali-balita (various news), pira-piraso (pieces) <span class='fil-sentence' data-translation='Examples of partially repeated nouns.'></span>"
          },
          {
            "title": "Pagsusuri sa 'Pira-piraso'",
            "content": "Mula sa salitang-ugat na 'piraso', inuulit ang unang bahagi na 'pira-'. <span class='fil-sentence' data-translation='From the root word piraso, the first part pira- is repeated.'></span>"
          }
        ]
      },
      {
        "title": "Kahulugan ng Pag-uulit: Pagpaparami",
        "text": "Madalas nating ginagamit ang inuulit na pangngalan upang ipahiwatig ang maramihan, paulit-ulit na kilos, o malawakang sakop. <span class='fil-sentence' data-translation='Repetition is often used to indicate plurality, repeated actions, or wide scope.'></span>",
        "examples": [
          {
            "title": "Halimbawa ng Dami",
            "content": "Ang mga bata ay naglaro sa <span class='fil-phrase' data-translation='various fields'>patak-patak</span> ng ulan. <span class='fil-sentence' data-translation='The children played in the raindrops.'></span>"
          },
          {
            "title": "Lugar-lugar",
            "content": "Nagkaroon ng pagpupulong sa <span class='fil-phrase' data-translation='various places'>lugar-lugar</span> sa Luzon. <span class='fil-sentence' data-translation='Meetings were held in various places in Luzon.'></span>"
          }
        ]
      },
      {
        "title": "Kahulugan ng Pag-uulit: Pagkukunwari",
        "text": "Minsan, ang pag-uulit (kadalasang may kasamang panlaping '-an' o '-han') ay nagpapahiwatig ng laruan, pagkukunwari, o maliit na bersyon ng isang bagay. <span class='fil-sentence' data-translation='Sometimes, repetition implies a toy, imitation, or a smaller version of something.'></span>",
        "examples": [
          {
            "title": "bahay-bahayan",
            "content": "bahay + inuulit + -an = bahay-bahayan (playing house / toy house) <span class='fil-sentence' data-translation='playing house or toy house.'></span>"
          },
          {
            "title": "tau-tauhan",
            "content": "tao + inuulit + -han = tau-tauhan (scarecrow / puppet) <span class='fil-sentence' data-translation='puppet or scarecrow.'></span>"
          }
        ]
      },
      {
        "title": "Kayarian ng Pangngalan: Tambalan",
        "text": "Ang pangngalan ay tambalan kung ito ay binubuo ng dalawang magkaibang salita na pinagsama upang makabuo ng isang bagong pangngalan. <span class='fil-sentence' data-translation='A noun is compound (tambalan) if it consists of two different words combined to form a new noun.'></span>",
        "examples": [
          {
            "title": "Dalawang Uri",
            "content": "Tambalang Karaniwan (malatambalan) at Tambalang Ganap. <span class='fil-sentence' data-translation='Two types: Ordinary Compound and Complete Compound.'></span>"
          },
          {
            "title": "Pagsasama",
            "content": "Salita A + Salita B = Bagong Salita. <span class='fil-sentence' data-translation='Word A + Word B = New Word.'></span>"
          }
        ]
      },
      {
        "title": "Tambalang Karaniwan (Malatambalan)",
        "text": "Sa tambalang karaniwan, ang kahulugan ng dalawang salitang pinagsama ay nananatili. Gumagamit ito ng gitling (-) upang iugnay ang dalawang salita. <span class='fil-sentence' data-translation='In ordinary compounds, the meanings of both combined words are retained. A hyphen (-) connects them.'></span>",
        "examples": [
          {
            "title": "silid-aralan",
            "content": "silid (room) + aralan (studying place) = silid-aralan (classroom). Nananatili ang kahulugan ng silid. <span class='fil-sentence' data-translation='room + study = classroom.'></span>"
          },
          {
            "title": "bahay-kubo",
            "content": "bahay (house) + kubo (nipa hut) = bahay-kubo (nipa hut). <span class='fil-sentence' data-translation='house + hut = nipa hut.'></span>"
          }
        ]
      },
      {
        "title": "Tambalang Ganap",
        "text": "Sa tambalang ganap, ang kahulugan ng dalawang salitang pinagsama ay ganap na nawawala. Nakabubuo sila ng isang bagong salita na may ganap na ibang kahulugan. Hindi ito gumagamit ng gitling. <span class='fil-sentence' data-translation='In complete compounds, the original meanings of both words are lost, creating a new word with a totally different meaning. No hyphen is used.'></span>",
        "examples": [
          {
            "title": "bahaghari",
            "content": "bahag (loincloth) + hari (king) = bahaghari (rainbow). Walang kinalaman sa loincloth o sa hari. <span class='fil-sentence' data-translation='rainbow, literally king's loincloth.'></span>"
          },
          {
            "title": "dalagang-bukid",
            "content": "dalaga (maiden) + bukid (field) = dalagang-bukid (isang uri ng isda). <span class='fil-sentence' data-translation='a species of red snapper fish.'></span>"
          }
        ]
      },
      {
        "title": "Pagsusuri sa Salitang 'Hampaslupa'",
        "text": "Ang 'hampaslupa' ay tambalang ganap mula sa 'hampas' (strike) at 'lupa' (ground). Ang ibig sabihin nito ay mahirap o palaboy, na walang kinalaman sa paghampas sa lupa. <span class='fil-sentence' data-translation='Hampaslupa is a complete compound from strike and ground. It means vagrant or very poor.'></span>",
        "examples": [
          {
            "title": "Salitang Pinagmulan",
            "content": "hampas + lupa = hampaslupa <span class='fil-sentence' data-translation='strike + ground = vagrant.'></span>"
          },
          {
            "title": "Sa Pangungusap",
            "content": "Huwag mong tratuhin na parang <span class='fil-phrase' data-translation='vagrant'>hampaslupa</span> ang iyong kapuwa. <span class='fil-sentence' data-translation='Do not treat your fellow human like a vagrant.'></span>"
          }
        ]
      },
      {
        "title": "Pagsusuri sa Salitang 'Anakpawis'",
        "text": "Ang 'anakpawis' ay tambalang ganap mula sa 'anak' (child) at 'pawis' (sweat). Nangangahulugan ito ng manggagawa o magsasaka na kumakatawan sa mga mahihirap na nagtatrabaho. <span class='fil-sentence' data-translation='Anakpawis is a complete compound meaning laborer or peasant.'></span>",
        "examples": [
          {
            "title": "Salitang Pinagmulan",
            "content": "anak + pawis = anakpawis <span class='fil-sentence' data-translation='child + sweat = laborer.'></span>"
          },
          {
            "title": "Kahalagahan",
            "content": "Ipinapakita nito kung paano naglalarawan ng paghihirap ang 'pawis'. <span class='fil-sentence' data-translation='It shows how sweat represents hard physical labor.'></span>"
          }
        ]
      },
      {
        "title": "Mga Halimbawa ng Tambalang Karaniwan",
        "text": "Maglista pa tayo ng mga halimbawa ng malatambalan kung saan nananatili ang kahulugan ng mga salita at ginagamitan ng gitling. <span class='fil-sentence' data-translation='More examples of ordinary compounds using hyphens.'></span>",
        "examples": [
          {
            "title": "Pamatay-sunog",
            "content": "pamatay (killer/extinguisher) + sunog (fire) = pamatay-sunog (fire extinguisher) <span class='fil-sentence' data-translation='extinguisher + fire = fire extinguisher.'></span>"
          },
          {
            "title": "Batas-trapiko",
            "content": "batas (law) + trapiko (traffic) = batas-trapiko (traffic rules) <span class='fil-sentence' data-translation='law + traffic = traffic laws.'></span>"
          }
        ]
      },
      {
        "title": "Mga Halimbawa ng Tambalang Ganap",
        "text": "Maglista pa tayo ng mga halimbawa ng tambalang ganap kung saan pinag-iisa ang dalawang salita nang walang gitling at nagbabago ang kahulugan. <span class='fil-sentence' data-translation='More examples of complete compounds without hyphens.'></span>",
        "examples": [
          {
            "title": "Kapitbahay",
            "content": "kapit (hold) + bahay (house) = kapitbahay (neighbor). <span class='fil-sentence' data-translation='hold + house = neighbor.'></span>"
          },
          {
            "title": "Tawid-gutom",
            "content": "tawid (cross) + gutom (hunger) = tawid-gutom (light snack to stave off hunger). <span class='fil-sentence' data-translation='cross + hunger = light snack.'></span>"
          }
        ]
      },
      {
        "title": "Panuntunan sa Baybay: Kailan gagamitan ng gitling?",
        "text": "Sa wikang Filipino, ang gitling (-) ay ginagamit: 1) Kapag ang salita ay ganap na inuulit, 2) Sa tambalang karaniwan kung saan nananatili ang kahulugan, 3) Kapag ang unlapi ay nagtatapos sa katinig at ang salitang-ugat ay nagsisimula sa patinig (gaya ng pag-asa). <span class='fil-sentence' data-translation='Rules for hyphen use: full repetition, ordinary compounds, and consonant-vowel junctions.'></span>",
        "examples": [
          {
            "title": "Repetitive",
            "content": "gabi-gabi, araw-araw (laging may gitling) <span class='fil-sentence' data-translation='nightly, daily always have hyphens.'></span>"
          },
          {
            "title": "Compound",
            "content": "silid-tulugan (bedroom - may gitling dahil silid pa rin ito). <span class='fil-sentence' data-translation='room for sleeping.'></span>"
          }
        ]
      },
      {
        "title": "Panuntunan: Kailan HINDI gagamitan ng gitling?",
        "text": "Hindi ginagamitan ng gitling ang tambalang ganap dahil ito ay itinuturing nang isang buong bagong salita na may sariling kahulugan. <span class='fil-sentence' data-translation='Do not use a hyphen in complete compounds as they are considered a single new word.'></span>",
        "examples": [
          {
            "title": "bahaghari",
            "content": "Mali: bahag-hari. Tama: bahaghari. <span class='fil-sentence' data-translation='Incorrect: bahag-hari. Correct: bahaghari.'></span>"
          },
          {
            "title": "kapitbahay",
            "content": "Mali: kapit-bahay. Tama: kapitbahay. <span class='fil-sentence' data-translation='Incorrect: kapit-bahay. Correct: kapitbahay.'></span>"
          }
        ]
      },
      {
        "title": "Pagkakaiba ng Inuulit at Tambalan",
        "text": "Madaling malito sa dalawang ito. Tandaan: Ang inuulit ay gumagamit ng *iisang* salitang-ugat na inuulit. Ang tambalan ay pinagsasama ang *dalawang magkaibang* salitang-ugat. <span class='fil-sentence' data-translation='Repetitive uses one repeated root word. Compound combines two different root words.'></span>",
        "examples": [
          {
            "title": "Inuulit",
            "content": "bata-bata (bata + bata) <span class='fil-sentence' data-translation='child-child.'></span>"
          },
          {
            "title": "Tambalan",
            "content": "batang-lansangan (bata + lansangan / street child) <span class='fil-sentence' data-translation='street child.'></span>"
          }
        ]
      },
      {
        "title": "Paggamit sa Ulat-Agham",
        "text": "Sa pagsulat ng ulat sa Agham, gumagamit tayo ng mga tambalang salita upang ilarawan ang mga materyales. <span class='fil-sentence' data-translation='In science reports, we use compound words to describe materials.'></span>",
        "examples": [
          {
            "title": "Halimbawa ng Tambalan",
            "content": "Bumili kami ng <span class='fil-phrase' data-translation='fire extinguisher'>pamatay-sunog</span> para sa laboratoryo. <span class='fil-sentence' data-translation='We bought a fire extinguisher for the laboratory.'></span>"
          },
          {
            "title": "Halimbawa ng Inuulit",
            "content": "Ginagawa namin ang pag-check sa mga kemikal sa <span class='fil-phrase' data-translation='daily basis'>araw-araw</span>. <span class='fil-sentence' data-translation='We perform chemical checks on a daily basis.'></span>"
          }
        ]
      },
      {
        "title": "Inuulit na may Panlapi: Sali-salita",
        "text": "May mga inuulit na di-ganap na may kasamang panlapi sa salitang-ugat. Sinusuri natin ito sa pamamagitan ng paghihiwalay ng panlapi at pag-uulit. <span class='fil-sentence' data-translation='Some partially repeated nouns have affixes attached to the root word.'></span>",
        "examples": [
          {
            "title": "sali-salita",
            "content": "salita (root) + parsyal na pag-uulit ng 'sali-' = sali-salita (various talk/rumors) <span class='fil-sentence' data-translation='rumors.'></span>"
          },
          {
            "title": "bulung-bulungan",
            "content": "bulong (whisper) + inuulit + -an = bulung-bulungan (whispering rumors). <span class='fil-sentence' data-translation='whispering rumors.'></span>"
          }
        ]
      },
      {
        "title": "Pagsusuri sa Salitang 'Silid-aklatan'",
        "text": "Ang 'silid-aklatan' ay isang tambalang karaniwan mula sa 'silid' (room) at 'aklatan' (library). Ito ay silid na naglalaman ng mga aklat para sa pag-aaral. <span class='fil-sentence' data-translation='Silid-aklatan is an ordinary compound meaning library room.'></span>",
        "examples": [
          {
            "title": "Pagsasama",
            "content": "silid + aklatan = silid-aklatan <span class='fil-sentence' data-translation='room + library = library room.'></span>"
          },
          {
            "title": "Gamit ng Gitling",
            "content": "May gitling dahil nananatili ang kahulugan ng silid. <span class='fil-sentence' data-translation='Has hyphen because it is still a room.'></span>"
          }
        ]
      },
      {
        "title": "Mga Salitang Tambalan sa Panitikan",
        "text": "Sa mga kuwento, madalas gamitin ang mga tambalang ganap upang ilarawan ang katayuan sa buhay o kapaligiran sa masining na paraan. <span class='fil-sentence' data-translation='Complete compounds are often used in literature for artistic descriptions.'></span>",
        "examples": [
          {
            "title": "Anakpawis sa bukid",
            "content": "Ang mga <span class='fil-phrase' data-translation='laborers'>anakpawis</span> ay masisipag magtanim ng palay. <span class='fil-sentence' data-translation='The laborers work hard planting rice.'></span>"
          },
          {
            "title": "Bahaghari sa langit",
            "content": "Maganda ang <span class='fil-phrase' data-translation='rainbow'>bahaghari</span> pagkatapos ng ulan. <span class='fil-sentence' data-translation='The rainbow is beautiful after the rain.'></span>"
          }
        ]
      },
      {
        "title": "Pagsusuri sa Salitang 'Urong-sulong'",
        "text": "Ang 'urong-sulong' ay isang inuulit na salita (mula sa dalawang kilos na urong at sulong) na naglalarawan ng pag-aalinlangan. <span class='fil-sentence' data-translation='Urong-sulong describes hesitation by combining retreat and advance.'></span>",
        "examples": [
          {
            "title": "Kahulugan",
            "content": "Naglalarawan ng taong hindi makapagdesisyon. <span class='fil-sentence' data-translation='Describes a person who cannot make a decision.'></span>"
          },
          {
            "title": "Sa Pangungusap",
            "content": "Siya ay <span class='fil-phrase' data-translation='hesitant'>urong-sulong</span> sa kaniyang sagot. <span class='fil-sentence' data-translation='He is hesitant in his answer.'></span>"
          }
        ]
      },
      {
        "title": "Bakit Mahalaga ang Kayarian sa Pagbasa?",
        "text": "Ang pag-unawa sa kayarian ng salita (payak, maylapi, inuulit, tambalan) ay tumutulong sa atin na mabilis na matukoy ang kahulugan ng mga bagong salitang ating nababasa sa mga aklat. <span class='fil-sentence' data-translation='Understanding word structure helps us quickly determine the meaning of new words we read.'></span>",
        "examples": [
          {
            "title": "Decoding",
            "content": "Kapag nakita ang 'silid-tulugan', alam mong ito ay silid (room) para sa pagtulog (sleeping). <span class='fil-sentence' data-translation='When seeing bedroom, you know it is a room for sleeping.'></span>"
          },
          {
            "title": "Context",
            "content": "Gumamit ng context clues kasabay ng pagsusuri sa kayarian ng salita. <span class='fil-sentence' data-translation='Use context clues alongside word structure analysis.'></span>"
          }
        ]
      },
      {
        "title": "Asimilasyon sa Tambalan: Pambansang Watawat",
        "text": "Kapag pinagsama ang 'pang-' + 'bansa' upang makabuo ng tambalang parirala na naging isang pangngalan, nagkakaroon ng asimilasyon: pambansa. <span class='fil-sentence' data-translation='Spelling changes like assimilation occur in compounds: pang- + bansa = pambansa.'></span>",
        "examples": [
          {
            "title": "Pagsasama",
            "content": "pang- + bansa = pambansa (national) <span class='fil-sentence' data-translation='prefix + nation = national.'></span>"
          },
          {
            "title": "Watawat",
            "content": "Ang <span class='fil-phrase' data-translation='national flag'>pambansang watawat</span> ng Pilipinas ay may tatlong bituin at isang araw. <span class='fil-sentence' data-translation='The national flag of the Philippines has three stars and a sun.'></span>"
          }
        ]
      },
      {
        "title": "Mabilisang Pagsasanay: Tukuyin ang Kayarian",
        "text": "Subukan nating suriin: 1) gabi-gabi (Inuulit na Ganap), 2) bahay-kubo (Tambalang Karaniwan), 3) bahaghari (Tambalang Ganap), 4) pira-piraso (Inuulit na Di-ganap). <span class='fil-sentence' data-translation='Quick practice on identifying word structures.'></span>",
        "examples": [
          {
            "title": "Pagsusuri",
            "content": "Tandaan ang pagkakaroon at kawalan ng gitling sa tambalan at inuulit! <span class='fil-sentence' data-translation='Remember the presence and absence of hyphens in compounds and repetitions.'></span>"
          }
        ]
      },
      {
        "title": "Buod ng Paksang Inuulit at Tambalan",
        "text": "Bilang pagbubuod: Ang inuulit ay pag-uulit ng salitang-ugat (ganap na may gitling gaya ng araw-araw; di-ganap gaya ng pira-piraso). Ang tambalan ay pinagsamang magkaibang salita (karaniwan na may gitling gaya ng silid-aralan; ganap na walang gitling gaya ng bahaghari). Gamitin ito nang wasto sa pagsulat! <span class='fil-sentence' data-translation='Summary: Repetitive repeats root (full with hyphen daily; partial pieces). Compound combines different words (ordinary with hyphen classroom; complete without hyphen rainbow). Use correctly in writing!'></span>",
        "examples": [
          {
            "title": "Magsanay sa Bahay",
            "content": "Maghanap ng limang tambalang salita sa loob ng iyong bahay at sabihin kung ito ay karaniwan o ganap! <span class='fil-sentence' data-translation='Find five compound words inside your house and state if they are ordinary or complete!'></span>"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What do we call a noun formed by repeating the entire root word or a part of it?\">Ano ang tawag sa pangngalan na nabubuo sa pag-uulit ng buong salitang-ugat o bahagi nito?</span>",
        "options": [
          "Payak",
          "Maylapi",
          "Inuulit",
          "Tambalan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is an example of inuulit na ganap (fully repeated)?\">Alin sa mga sumusunod ang halimbawa ng pangngalang inuulit na ganap?</span>",
        "options": [
          "pira-piraso",
          "araw-araw",
          "sali-salita",
          "bulung-bulungan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is an example of inuulit na di-ganap (partially repeated)?\">Alin sa mga sumusunod ang halimbawa ng pangngalang inuulit na di-ganap o parsyal?</span>",
        "options": [
          "taon-taon",
          "bahay-bahay",
          "pira-piraso",
          "gabi-gabi"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What punctuation mark is always used to separate the words in inuulit na ganap?\">Anong bantas ang laging ginagamit sa pagitan ng mga salita sa inuulit na ganap?</span>",
        "options": [
          "Tuldok",
          "Koma",
          "Gitling (-)",
          "Kudlit"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the meaning of 'bahay-bahayan'?\">Ano ang kahulugan ng inuulit na pangngalang 'bahay-bahayan'?</span>",
        "options": [
          "Maraming malalaking bahay",
          "Larong bahay o maliit na bahay-laruan",
          "Bahay na nasira ng bagyo",
          "Gusali ng pamahalaan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What do we call a noun formed by combining two different words?\">Ano ang tawag sa pangngalan na binubuo ng dalawang magkaibang salita na pinagsama?</span>",
        "options": [
          "Maylapi",
          "Inuulit",
          "Tambalan",
          "Payak"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which type of compound noun retains the original meanings of both words and uses a hyphen?\">Anong uri ng tambalang pangngalan ang nananatili ang kahulugan ng dalawang salita at gumagamit ng gitling?</span>",
        "options": [
          "Tambalang Ganap",
          "Tambalang Karaniwan (Malatambalan)",
          "Inuulit na Ganap",
          "Maylaping Pangngalan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is an example of a tambalang karaniwan (ordinary compound)?\">Alin sa mga sumusunod ang halimbawa ng tambalang karaniwan?</span>",
        "options": [
          "bahaghari",
          "hampaslupa",
          "silid-aralan",
          "anakpawis"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which type of compound noun loses the original meanings of its words and forms a completely new meaning without a hyphen?\">Anong uri ng tambalang pangngalan ang nawawala ang orihinal na kahulugan ng mga salita at nakabubuo ng bagong kahulugan nang walang gitling?</span>",
        "options": [
          "Tambalang Ganap",
          "Tambalang Karaniwan",
          "Inuulit na Di-ganap",
          "Maylaping laguhan"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is a tambalang ganap (complete compound) meaning 'rainbow'?\">Alin sa mga sumusunod ang tambalang ganap na nangangahulugang 'rainbow'?</span>",
        "options": [
          "bahay-kubo",
          "dalagang-bukid",
          "bahaghari",
          "silid-aklatan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In 'dalagang-bukid' (a species of red snapper fish), what is its classification?\">Sa salitang 'dalagang-bukid' (isang uri ng isda), ano ang kayarian nito?</span>",
        "options": [
          "Tambalang Karaniwan",
          "Tambalang Ganap",
          "Inuulit na parsyal",
          "Maylapi"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the meaning of 'hampaslupa' based on its compound word structure?\">Ano ang kahulugan ng tambalang ganap na 'hampaslupa'?</span>",
        "options": [
          "Taong nagbubungkal ng lupa gamit ang pala",
          "Mahirap na tao o palaboy",
          "Lupa na tinatamaan ng kidlat",
          "Isang uri ng halaman sa bukid"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the meaning of 'anakpawis' based on its compound word structure?\">Ano ang kahulugan ng tambalang ganap na 'anakpawis'?</span>",
        "options": [
          "Anak na laging pinapawisan sa laro",
          "Manggagawa o magsasaka na kumakatawan sa mga mahihirap",
          "Mayaman at tamad na bata",
          "Doktor sa pampublikong ospital"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is the CORRECT spelling of 'rainbow' in Tagalog?\">Alin sa mga sumusunod ang TAMA ang baybay para sa 'rainbow'?</span>",
        "options": [
          "bahag-hari",
          "bahaghari",
          "bahag hari",
          "bahaghari-an"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is the CORRECT spelling of 'neighbor' in Tagalog?\">Alin sa mga sumusunod ang TAMA ang baybay para sa 'neighbor'?</span>",
        "options": [
          "kapit-bahay",
          "kapitbahay",
          "kapit bahay",
          "kakapit-bahay"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In 'silid-aklatan' (library room), why is a hyphen used?\">Sa salitang 'silid-aklatan', bakit ginagamitan ito ng gitling?</span>",
        "options": [
          "Dahil ito ay inuulit na ganap",
          "Dahil ito ay tambalang karaniwan kung saan nananatili ang kahulugan ng 'silid'",
          "Dahil ito ay tambalang ganap",
          "Dahil nagsisimula ito sa patinig"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which word is an inuulit noun describing hesitation?\">Aling salita ang isang pangngalang inuulit na naglalarawan ng pag-aalinlangan?</span>",
        "options": [
          "araw-araw",
          "urong-sulong",
          "silid-tulugan",
          "bahay-bahayan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In: 'Gabi-gabi kaming nagbabasa ng kuwento.', what is the structure of the noun 'gabi-gabi'?\">Sa pangungusap: 'Gabi-gabi kaming nagbabasa ng kuwento.', ano ang kayarian ng salitang 'gabi-gabi'?</span>",
        "options": [
          "Payak",
          "Maylapi",
          "Inuulit na ganap",
          "Tambalan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is NOT a compound noun?\">Alin sa mga sumusunod ang HINDI tambalang pangngalan?</span>",
        "options": [
          "silid-aralan",
          "pamatay-sunog",
          "pira-piraso",
          "bahaghari"
        ],
        "answer": 2
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"Tambalang ganap always uses a hyphen between the two words.\">Ang tambalang ganap ay laging gumagamit ng gitling sa pagitan ng dalawang salita.</span>",
        "answer": false
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The word 'araw-araw' is an inuulit na ganap noun.\">Ang salitang 'araw-araw' ay isang pangngalang inuulit na ganap.</span>",
        "answer": true
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"'Batang-lansangan' (street child) is a compound noun.\">Ang 'batang-lansangan' ay isang tambalang pangngalan.</span>",
        "answer": true
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the root word of the repetitive noun 'taon-taon' (yearly)?\">Ano ang salitang-ugat ng inuulit na pangngalang 'taon-taon'?</span>",
        "answer": "taon"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What compound noun means 'classroom' in Tagalog?\">Anong tambalang salita ang nangangahulugang 'classroom' sa Filipino?</span>",
        "answer": "silid-aralan"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"Complete the compound word for rainbow: bahag______.\">Kumpletuhin ang tambalang salita para sa rainbow: bahag______.</span>",
        "answer": "hari"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Classify the noun 'silid-aklatan' based on its structure:\">Suriin ang kayarian ng pangngalang 'silid-aklatan':</span>",
        "options": [
          "Maylapi na may kabilaan",
          "Inuulit na di-ganap",
          "Tambalang karaniwan (malatambalan)",
          "Tambalang ganap"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is correct for 'pamatay' (killer) combined with 'sunog' (fire)?\">Alin ang tamang baybay para sa pinagsamang 'pamatay' at 'sunog'?</span>",
        "options": [
          "pamataysunog",
          "pamatay-sunog",
          "pampa sunog",
          "panunog"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the meaning of the compound word 'dalagang-bukid' in: 'Bumili si ina ng dalagang-bukid sa palengke upang iulam.'?\">Ano ang kahulugan ng tambalang salita na 'dalagang-bukid' sa pangungusap na ito?</span>",
        "options": [
          "Isang magandang dalaga na nakatira sa bukid",
          "Isang uri ng isda",
          "Isang uri ng gulay",
          "Isang pampublikong sasakyan"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is an inuulit na di-ganap noun representing rumors?\">Alin sa mga sumusunod ang pangngalang inuulit na di-ganap na tumutukoy sa mga tsismis o bali-balita?</span>",
        "options": [
          "sali-salita",
          "taon-taon",
          "bahay-bahayan",
          "kapitbahay"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In: 'Ang pambansang watawat ng Pilipinas ay iwinagayway.', what spelling change occurs in 'pambansang'?\">Sa pangungusap: 'Ang pambansang watawat ng Pilipinas ay iwinagayway.', anong pagbabago sa baybay ang naganap sa salitang 'pambansang'?</span>",
        "options": [
          "Asimilasyon ng 'pang-' + 'bansa' kung saan ang 'ng' ay naging 'm'",
          "Pag-uulit ng pantig na 'pam'",
          "Pagkakabit ng gitlapi sa 'bansa'",
          "Walang pagbabago sa orihinal na baybay"
        ],
        "answer": 0
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Album ng mga Inuulit at Tambalang Salita",
      "desc": "Kumuha ng isang blankong papel. Hatiin ito sa dalawang kolum: 'Mga Inuulit na Salita' at 'Mga Tambalang Salita'. Sumulat ng tatlong halimbawa sa bawat kolum na makikita sa loob ng inyong tahanan (halimbawa, araw-araw, pira-piraso para sa inuulit; silid-tulugan, kapitbahay para sa tambalan). Gumuhit ng maliit na simbolo o larawan para sa bawat isa at sumulat ng isang pangungusap gamit ang salita. Ipakita at ipaliwanag ito sa iyong magulang o guro. <span class='fil-sentence' data-translation='Divide a paper into two columns: Repetitive and Compound. Write 3 examples of each found at home, draw a small symbol, and write a sentence for each. Present to parent/teacher.'></span>",
      "labels": [
        "Wastong nakapagtala ng tatlong inuulit at tatlong tambalang salita mula sa tahanan",
        "Malinaw ang pagkakaguhit ng mga simbolo at tama ang paggamit ng gitling sa mga salita",
        "Wastong pagkakabuo ng mga pangungusap gamit ang mga natukoy na pangngalan"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Inuulit at Tambalan Classification</h3>\n                  <p class=\"ws-instruction\">Suriin ang mga pangngalan. Isulat kung ang kayarian ay: <strong>Inuulit na Ganap</strong>, <strong>Inuulit na Di-ganap</strong>, <strong>Tambalang Karaniwan</strong>, o <strong>Tambalang Ganap</strong>. <span class=\"fil-sentence\" data-translation=\"Classify nouns as repetitive or compound.\"></span></p>\n                  \n                  <table class=\"ws-table\">\n                    <thead>\n                      <tr>\n                        <th>Pangngalan</th>\n                        <th>Kayarian</th>\n                        <th>Pangngalan</th>\n                        <th>Kayarian</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>araw-araw</td>\n                        <td></td>\n                        <td>silid-aralan</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>bahaghari</td>\n                        <td></td>\n                        <td>pira-piraso</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>hampaslupa</td>\n                        <td></td>\n                        <td>gabi-gabi</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Pagsulat sa Pangungusap</h3>\n                  <p class=\"ws-instruction\">Sumulat ng pangungusap gamit ang ibinigay na tambalang salita. <span class=\"fil-sentence\" data-translation=\"Write a sentence using the compound noun.\"></span></p>\n                  \n                  <div class=\"ws-item-row\" style=\"margin-bottom: 25px;\">\n                    <div class=\"ws-q\">1. Salita: <strong>kapitbahay</strong> (Tambalang Ganap)</div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 90%;\"></div>\n                  </div>\n                  \n                  <div class=\"ws-item-row\">\n                    <div class=\"ws-q\">2. Salita: <strong>bahay-kubo</strong> (Tambalang Karaniwan)</div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 90%;\"></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Inuulit o Tambalan</h3>\n                  <p class=\"ws-instruction\">Tukuyin kung ang sumusunod na pangngalan ay Inuulit o Tambalan. Isulat ang sagot gamit ang stylus.</p>\n                  \n                  <table class=\"ws-table\" style=\"margin-top: 15px;\">\n                    <thead>\n                      <tr>\n                        <th>Pangngalan</th>\n                        <th>Kayarian (Inuulit o Tambalan)</th>\n                        <th>Pangngalan</th>\n                        <th>Kayarian (Inuulit o Tambalan)</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1. Bahay-kubo</td>\n                        <td></td>\n                        <td>3. Balat-sibuyas</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td>2. Araw-araw</td>\n                        <td></td>\n                        <td>4. Sabi-sabi</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                "]
    }
  },
  "makabansa": {
    "color": "#3b82f6",
    "icon": "🏘️",
    "title": "Araling Panlipunan",
    "subtitle": "Week 2: Heograpiya at Tiyak na Lokasyon ng Pilipinas [Advanced]",
    "slides": [
      {
        "title": "Ano ang Heograpiya?",
        "text": "Ang heograpiya ay ang pag-aaral ng pisikal na katangian ng mundo kabilang ang klima, anyong lupa, anyong tubig, likas na yaman, at lokasyon ng mga lugar. <span class='fil-sentence' data-translation='Geography is the study of the Earth's physical features, including climate, landforms, waters, resources, and location.'></span>",
        "examples": [
          {
            "title": "Pisikal na Mapa",
            "content": "Ipinapakita sa pisikal na mapa ang mga bundok, kapatagan, at ilog ng bansa. <span class='fil-sentence' data-translation='A physical map shows the mountains, plains, and rivers of a country.'></span>"
          },
          {
            "title": "Ugnayan ng Tao",
            "content": "Pinag-aaralan din kung paano nakikibagay ang tao sa kaniyang pisikal na kapaligiran. <span class='fil-sentence' data-translation='It also studies how humans adapt to their physical environment.'></span>"
          }
        ]
      },
      {
        "title": "Ang Globo at Mapa bilang mga Kasangkapan",
        "text": "Ginagamit ang globo (isang bilog na modelo ng mundo) at mapa (isang patag na guhit ng mundo) upang pag-aralan ang heograpiya at matukoy ang lokasyon ng mga bansa. <span class='fil-sentence' data-translation='The globe (a spherical model of Earth) and map (a flat drawing of Earth) are tools used to study geography and locate countries.'></span>",
        "examples": [
          {
            "title": "Globo",
            "content": "Ipinapakita ang tamang hugis at direksyon ng mga kontinente at karagatan. <span class='fil-sentence' data-translation='It shows the correct shape and direction of continents and oceans.'></span>"
          },
          {
            "title": "Mapa",
            "content": "Mas madaling dalhin at maaaring magpakita ng mas detalyadong detalye ng isang maliit na rehiyon. <span class='fil-sentence' data-translation='Easier to carry and can show highly detailed features of a small region.'></span>"
          }
        ]
      },
      {
        "title": "Ang Tiyak na Lokasyon (Absolute Location)",
        "text": "Ang tiyak na lokasyon ay ang pagtukoy sa kinalalagyan ng isang lugar gamit ang imaginary lines sa globo: ang mga guhit latitud (latitude) at longitud (longitude). <span class='fil-sentence' data-translation='Absolute location is identifying a place's position using imaginary lines on the globe: latitude and longitude.'></span>",
        "examples": [
          {
            "title": "Coordinates",
            "content": "Ang pagsasama ng latitud at longitud ay tinatawag na coordinate (halimbawa, 14°N, 121°E). <span class='fil-sentence' data-translation='The combination of latitude and longitude is called coordinates.'></span>"
          },
          {
            "title": "GPS Technology",
            "content": "Ang mga mobile navigation apps ay gumagamit ng tiyak na lokasyon sa pamamagitan ng satellites. <span class='fil-sentence' data-translation='Mobile navigation apps use absolute location via satellites.'></span>"
          }
        ]
      },
      {
        "title": "Ang Ekwador (Equator)",
        "text": "Ang ekwador ay ang pahalang na guhit sa gitna ng globo na may 0 degrees latitud. Hinahati nito ang mundo sa Hilagang Hemispero at Timog Hemispero. <span class='fil-sentence' data-translation='The Equator is the horizontal line at the center of the globe at 0 degrees latitude. It divides Earth into Northern and Southern hemispheres.'></span>",
        "examples": [
          {
            "title": "Klima sa Ekwador",
            "content": "Ang mga bansang malapit sa Ekwador ay nakatatanggap ng direktang sikat ng araw kaya mainit ang klima rito. <span class='fil-sentence' data-translation='Countries near the equator receive direct sunlight, making their climate hot.'></span>"
          },
          {
            "title": "Hati ng Mundo",
            "content": "Ang Pilipinas ay matatagpuan sa Hilagang Hemispero dahil ito ay nasa itaas ng Ekwador. <span class='fil-sentence' data-translation='The Philippines is in the Northern Hemisphere since it lies above the Equator.'></span>"
          }
        ]
      },
      {
        "title": "Ang Prime Meridian",
        "text": "Ang Prime Meridian ay ang patayong guhit sa gitna ng globo na may 0 degrees longitud. Hinahati nito ang mundo sa Silangang Hemispero at Kanlurang Hemispero. <span class='fil-sentence' data-translation='The Prime Meridian is the vertical line at the center of the globe at 0 degrees longitude. It divides Earth into Eastern and Western hemispheres.'></span>",
        "examples": [
          {
            "title": "Greenwich, England",
            "content": "Ang guhit na ito ay dumadaan sa Greenwich Observatory sa England kung saan itinakda ang 0° Longitud. <span class='fil-sentence' data-translation='This line passes through Greenwich, England, designated as 0 degrees Longitude.'></span>"
          },
          {
            "title": "Silangang Bahagi",
            "content": "Ang Pilipinas ay nasa Silangang Hemispero dahil ito ay nasa kanang bahagi ng Prime Meridian. <span class='fil-sentence' data-translation='The Philippines is in the Eastern Hemisphere since it lies east of the Prime Meridian.'></span>"
          }
        ]
      },
      {
        "title": "Mga Guhit Latitud (Latitude Lines)",
        "text": "Ang mga guhit latitud (tinatawag ding parallels) ay mga imaginary lines na nakahiga o pahalang sa globo na kahanay ng Ekwador mula kanluran patungong silangan. <span class='fil-sentence' data-translation='Latitude lines (also called parallels) are imaginary horizontal lines on the globe running parallel to the Equator from west to east.'></span>",
        "examples": [
          {
            "title": "Pagsukat sa Degrees",
            "content": "Sinusukat ito mula 0° sa Ekwador patungong 90° sa Hilagang Polo at Timog Polo. <span class='fil-sentence' data-translation='Measured from 0 degrees at the Equator up to 90 degrees at the North and South Poles.'></span>"
          },
          {
            "title": "Tropic of Cancer",
            "content": "Ang guhit sa 23.5° Hilagang Latitud na nagtatakda ng hangganan ng tropikal na rehiyon sa hilaga. <span class='fil-sentence' data-translation='The line at 23.5 degrees N Latitude marking the northern boundary of the tropics.'></span>"
          }
        ]
      },
      {
        "title": "Mga Guhit Longitud (Longitude Lines)",
        "text": "Ang mga guhit longitud (tinatawag ding meridians) ay mga imaginary lines na nakatayo o patayo na nagmumula sa Hilagang Polo patungong Timog Polo. <span class='fil-sentence' data-translation='Longitude lines (also called meridians) are imaginary vertical lines running from the North Pole to the South Pole.'></span>",
        "examples": [
          {
            "title": "Pagsukat",
            "content": "Sinusukat ito mula 0° sa Prime Meridian patungong 180° Silangan at 180° Kanluran. <span class='fil-sentence' data-translation='Measured from 0 degrees at the Prime Meridian up to 180 degrees East and West.'></span>"
          },
          {
            "title": "International Date Line (IDL)",
            "content": "Ang guhit sa 180° longitud kung saan nagbabago ang petsa at araw sa mundo. <span class='fil-sentence' data-translation='The line at 180 degrees longitude where the date changes globally.'></span>"
          }
        ]
      },
      {
        "title": "Ang Grid System sa Globo",
        "text": "Ang grid system ay ang lambat-lambat na pagsasalubong ng mga guhit latitud at guhit longitud sa globo o mapa. <span class='fil-sentence' data-translation='The grid system is the network of intersecting latitude and longitude lines on a globe or map.'></span>",
        "examples": [
          {
            "title": "Pagtukoy ng Pook",
            "content": "Sa pamamagitan ng grid, makukuha ang intersection point na nagbibigay ng eksaktong posisyon ng bansa sa mundo. <span class='fil-sentence' data-translation='Through the grid, one can find the intersection point giving the exact position of a country.'></span>"
          },
          {
            "title": "Coordinates ng Manila",
            "content": "Ang Maynila ay matatagpuan sa tinatayang 14.6° Hilagang Latitud at 121.0° Silangang Longitud. <span class='fil-sentence' data-translation='Manila is located at approximately 14.6 degrees N Latitude and 121.0 degrees E Longitude.'></span>"
          }
        ]
      },
      {
        "title": "Tiyak na Lokasyon ng Pilipinas",
        "text": "Ang Pilipinas ay matatagpuan sa pagitan ng 4° hanggang 21° Hilagang Latitud (NL) at 116° hanggang 127° Silangang Longitud (EL). <span class='fil-sentence' data-translation='The Philippines is located between 4 to 21 degrees North Latitude and 116 to 127 degrees East Longitude.'></span>",
        "examples": [
          {
            "title": "Sukat sa Globo",
            "content": "Ito ay nasa Timog-Silangang Asya, sa itaas ng Ekwador at sa silangan ng Prime Meridian. <span class='fil-sentence' data-translation='It lies in Southeast Asia, above the Equator and east of the Prime Meridian.'></span>"
          },
          {
            "title": "Epekto sa Klima",
            "content": "Dahil sa sakop na latitud na malapit sa Ekwador, ang Pilipinas ay isang tropikal na bansa. <span class='fil-sentence' data-translation='Due to its latitude close to the Equator, the Philippines is a tropical country.'></span>"
          }
        ]
      },
      {
        "title": "Klima ng Pilipinas: Tropikal",
        "text": "Ang tropikal na lokasyon ng Pilipinas ay nagdudulot ng dalawang pangunahing panahon sa bansa: Tag-araw (Dry season) at Tag-ulan (Wet season). <span class='fil-sentence' data-translation='The tropical location of the Philippines results in two main seasons: Dry season and Wet season.'></span>",
        "examples": [
          {
            "title": "Tag-araw",
            "content": "Mula Nobyembre hanggang Abril, kung saan mainit ang panahon at kaunti ang ulan. <span class='fil-sentence' data-translation='From November to April, featuring hot weather and minimal rain.'></span>"
          },
          {
            "title": "Tag-ulan",
            "content": "Mula Mayo hanggang Oktubre, na nagdadala ng mga habagat at bagyo sa bansa. <span class='fil-sentence' data-translation='From May to October, bringing monsoons and typhoons to the country.'></span>"
          }
        ]
      },
      {
        "title": "Tiyak vs. Relatibong Lokasyon",
        "text": "Ang tiyak na lokasyon ay hindi nagbabago dahil coordinates ang gamit. Ang relatibong lokasyon naman ay tinutukoy sa pamamagitan ng mga nakapaligid na bansa o dagat. <span class='fil-sentence' data-translation='Absolute location does not change as it uses coordinates. Relative location is determined using surrounding countries or seas.'></span>",
        "examples": [
          {
            "title": "Relative Location ng PH",
            "content": "Nasa timog ng Taiwan, silangan ng Vietnam, at hilaga ng Malaysia. <span class='fil-sentence' data-translation='South of Taiwan, east of Vietnam, and north of Malaysia.'></span>"
          },
          {
            "title": "Absolute Location",
            "content": "4°-21°N, 116°-127°E (laging pareho). <span class='fil-sentence' data-translation='4-21 degrees N, 116-127 degrees E (always the same).'></span>"
          }
        ]
      },
      {
        "title": "Relatibong Lokasyong Bisinal ng Pilipinas",
        "text": "Matutukoy ang lokasyon ng Pilipinas sa pagtingin sa mga katabing anyong lupa o bansa nito sa iba't ibang direksyon. <span class='fil-sentence' data-translation='The vicinal relative location is determined by looking at adjacent landmasses or countries in different directions.'></span>",
        "examples": [
          {
            "title": "Hilaga",
            "content": "Taiwan at Hapon. <span class='fil-sentence' data-translation='North: Taiwan and Japan.'></span>"
          },
          {
            "title": "Timog at Kanluran",
            "content": "Timog: Indonesia at Malaysia. Kanluran: Vietnam, Cambodia, at Tsina. <span class='fil-sentence' data-translation='South: Indonesia and Malaysia. West: Vietnam, Cambodia, and China.'></span>"
          }
        ]
      },
      {
        "title": "Relatibong Lokasyong Insular ng Pilipinas",
        "text": "Matutukoy ang lokasyon ng bansa sa pagtingin sa mga malalaking anyong tubig na nakapaligid dito. <span class='fil-sentence' data-translation='The insular relative location is determined by looking at the large bodies of water surrounding the country.'></span>",
        "examples": [
          {
            "title": "Silangan at Kanluran",
            "content": "Silangan: Pacific Ocean (Karagatang Pasipiko). Kanluran: West Philippine Sea. <span class='fil-sentence' data-translation='East: Pacific Ocean. West: West Philippine Sea.'></span>"
          },
          {
            "title": "Hilaga at Timog",
            "content": "Hilaga: Bashi Channel. Timog: Celebes Sea (Dagat Celebes). <span class='fil-sentence' data-translation='North: Bashi Channel. South: Celebes Sea.'></span>"
          }
        ]
      },
      {
        "title": "Sukat at Lawak ng Teritoryo ng Pilipinas",
        "text": "Ang Pilipinas ay binubuo ng higit sa 7,100 na mga isla na may kabuuang sukat na lupain na humigit-kumulang 300,000 square kilometers. <span class='fil-sentence' data-translation='The Philippines consists of over 7,100 islands with a total land area of approximately 300,000 square kilometers.'></span>",
        "examples": [
          {
            "title": "Pambansang Hangganan",
            "content": "Ang lawak ng dagat teritoryal ay umaabot sa labas ng mga baybayin batay sa kasunduan at Saligang Batas. <span class='fil-sentence' data-translation='The scope of territorial sea extends beyond the coastlines based on treaties and the Constitution.'></span>"
          },
          {
            "title": "Archipelago Coastline",
            "content": "Isa ang Pilipinas sa mga bansang may pinakamahabang baybayin (coastline) sa buong mundo. <span class='fil-sentence' data-translation='The Philippines has one of the longest coastlines in the world.'></span>"
          }
        ]
      },
      {
        "title": "Tatlong Pangunahing Pangkat ng Isla",
        "text": "Hinahati ang kapuluan ng Pilipinas sa tatlong malalaking pangkat: Luzon sa hilaga, Visayas sa gitna, at Mindanao sa timog. <span class='fil-sentence' data-translation='The Philippine archipelago is divided into three major island groups: Luzon in the north, Visayas in the center, and Mindanao in the south.'></span>",
        "examples": [
          {
            "title": "Luzon",
            "content": "Pinakamalaking isla kung saan matatagpuan ang kabisera (Maynila). <span class='fil-sentence' data-translation='Largest island where the capital (Manila) is located.'></span>"
          },
          {
            "title": "Visayas at Mindanao",
            "content": "Visayas: binubuo ng mga katamtamang isla. Mindanao: pangalawang pinakamalaking isla na may mayayamang kagubatan at mineral. <span class='fil-sentence' data-translation='Visayas: moderate-sized islands. Mindanao: second largest island rich in forests and minerals.'></span>"
          }
        ]
      },
      {
        "title": "Kahalagahan ng Lokasyon ng Pilipinas",
        "text": "Dahil sa lokasyon nito sa gitna ng Asya-Pasipiko, ang Pilipinas ay nagsisilbing mahalagang daungan para sa kalakalan at komunikasyon sa pagitan ng Silangang Asya at Kanluran. <span class='fil-sentence' data-translation='Due to its location in the Asia-Pacific center, the Philippines serves as a vital port for trade and communication between East and West.'></span>",
        "examples": [
          {
            "title": "Gateway to Asia",
            "content": "Maraming commercial flights at barkong pangkargamento ang dumaraan sa Pilipinas. <span class='fil-sentence' data-translation='Many commercial flights and cargo ships pass through the Philippines.'></span>"
          },
          {
            "title": "Geopolitical position",
            "content": "Mahalaga ang bansa sa pagpapanatili ng katatagan ng depensa sa rehiyon. <span class='fil-sentence' data-translation='Important for maintaining regional defense stability.'></span>"
          }
        ]
      },
      {
        "title": "Mga Anyong Lupa: Bundok Apo",
        "text": "Ang Bundok Apo ay ang pinakamataas na bundok sa buong Pilipinas, matatagpuan sa lalawigan ng Davao at Cotabato sa Mindanao, na may taas na 2,954 metro. <span class='fil-sentence' data-translation='Mount Apo is the highest mountain in the Philippines, located in Davao/Cotabato in Mindanao, measuring 2,954 meters high.'></span>",
        "examples": [
          {
            "title": "National Park",
            "content": "Ito ay isang pambansang parke na tahanan ng mga natatanging hayop gaya ng Philippine Eagle. <span class='fil-sentence' data-translation='A national park home to unique animals like the Philippine Eagle.'></span>"
          },
          {
            "title": "Mountain Climbing",
            "content": "Paboritong akyatin ng mga manlalakbay dahil sa ganda at hamon nito. <span class='fil-sentence' data-translation='A favorite climb for adventurers due to its beauty and challenge.'></span>"
          }
        ]
      },
      {
        "title": "Mga Anyong Lupa: Bulkang Mayon",
        "text": "Ang Bulkang Mayon ay sikat sa buong mundo dahil sa taglay nitong perpektong hugis kono (perfect cone shape). Ito ay matatagpuan sa Albay sa rehiyon ng Bicol. <span class='fil-sentence' data-translation='Mount Mayon is globally famous for its perfect cone shape, located in Albay in the Bicol region.'></span>",
        "examples": [
          {
            "title": "Aktibong Bulkan",
            "content": "Isa ito sa pinaka-aktibong bulkan sa bansa, na madalas pumutok. <span class='fil-sentence' data-translation='One of the most active volcanoes in the country, erupting frequently.'></span>"
          },
          {
            "title": "Likas na Yaman ng Lupa",
            "content": "Ang abo nito ay nagpapataba sa lupa ng Albay, na mabuti para sa pagsasaka ng abaka at niyog. <span class='fil-sentence' data-translation='Its ash fertilizes Albay's soil, ideal for farming abaca and coconut.'></span>"
          }
        ]
      },
      {
        "title": "Mga Anyong Tubig: Ilog Cagayan",
        "text": "Ang Ilog Cagayan ay ang pinakamahaba at pinakamalaking ilog sa Pilipinas, umaagos sa lambak ng Cagayan sa hilagang bahagi ng Luzon. <span class='fil-sentence' data-translation='Cagayan River is the longest and largest river in the Philippines, flowing through the Cagayan Valley in northern Luzon.'></span>",
        "examples": [
          {
            "title": "Agrikultura",
            "content": "Nagbibigay-patubig ito sa malalawak na taniman ng palay at mais sa Hilagang Luzon. <span class='fil-sentence' data-translation='Provides irrigation for vast rice and corn fields in Northern Luzon.'></span>"
          },
          {
            "title": "Haba ng Ilog",
            "content": "May haba itong humigit-kumulang 505 kilometro mula sa kabundukan ng Sierra Madre. <span class='fil-sentence' data-translation='Spans approximately 505 kilometers starting from the Sierra Madre mountains.'></span>"
          }
        ]
      },
      {
        "title": "Mga Anyong Tubig: Lawa ng Taal",
        "text": "Ang Lawa ng Taal ay isang sikat na lawa sa Batangas. Sa loob nito ay matatagpuan ang Bulkang Taal, ang pinakamaliit na aktibong bulkan sa mundo na may sariling lawa sa loob ng crater nito. <span class='fil-sentence' data-translation='Taal Lake is a famous lake in Batangas. Inside lies Taal Volcano, the world's smallest active volcano with its own crater lake.'></span>",
        "examples": [
          {
            "title": "Tawilis Fish",
            "content": "Dito lamang sa lawang ito matatagpuan ang Sardinella tawilis, ang tanging freshwater sardine sa mundo. <span class='fil-sentence' data-translation='This lake is the sole home of Sardinella tawilis, the world's only freshwater sardine.'></span>"
          },
          {
            "title": "Tourism",
            "content": "Dinarayo ng maraming lokal at dayuhang turista dahil sa kakaibang heograpiya nito. <span class='fil-sentence' data-translation='Visited by many local and foreign tourists due to its unique geography.'></span>"
          }
        ]
      },
      {
        "title": "Ang Philippine Trench (Deep)",
        "text": "Ang Philippine Trench ay isa sa pinakamalalim na trenches o trenches sa buong mundo, matatagpuan sa silangang bahagi ng Pilipinas sa Karagatang Pasipiko. <span class='fil-sentence' data-translation='The Philippine Trench is one of the deepest trenches in the world, located east of the Philippines in the Pacific Ocean.'></span>",
        "examples": [
          {
            "title": "Lalim",
            "content": "May lalim itong umaabot sa higit 10,500 metro (mas malalim kaysa sa taas ng Mount Everest!). <span class='fil-sentence' data-translation='Reaches a depth of over 10,500 meters (deeper than Mount Everest is tall!).'></span>"
          },
          {
            "title": "Plate Tectonics",
            "content": "Nabuo ito dahil sa subduction ng Philippine Sea plate sa ilalim ng Eurasian plate. <span class='fil-sentence' data-translation='Formed by the subduction of the Philippine Sea plate under the Eurasian plate.'></span>"
          }
        ]
      },
      {
        "title": "Ang Pacific Ring of Fire",
        "text": "Ang Pilipinas ay matatagpuan sa Pacific Ring of Fire, isang rehiyon sa Karagatang Pasipiko kung saan madalas nagaganap ang mga lindol at pagputok ng bulkan. <span class='fil-sentence' data-translation='The Philippines is located in the Pacific Ring of Fire, a region in the Pacific Ocean where earthquakes and volcanic eruptions are frequent.'></span>",
        "examples": [
          {
            "title": "Aktibong Bulkan",
            "content": "Naglalaman ang bansa ng higit sa 20 aktibong bulkan kabilang ang Pinatubo, Mayon, at Taal. <span class='fil-sentence' data-translation='The country contains over 20 active volcanoes, including Pinatubo, Mayon, and Taal.'></span>"
          },
          {
            "title": "Earthquake Preparedness",
            "content": "Tungkulin nating maghanda sa lindol sa pamamagitan ng 'Drop, Cover, and Hold'. <span class='fil-sentence' data-translation='It is our duty to prepare for earthquakes using Drop, Cover, and Hold.'></span>"
          }
        ]
      },
      {
        "title": "Ang Likas na Depensa at Hamon ng Tubig",
        "text": "Ang pagiging napaliligiran ng tubig ay nagbibigay sa Pilipinas ng likas na depensa laban sa pananakop, ngunit nagdudulot din ng hamon dahil sa mga bagyo. <span class='fil-sentence' data-translation='Being surrounded by water provides the Philippines with natural defense, but also brings challenges from typhoons.'></span>",
        "examples": [
          {
            "title": "Maritime Borders",
            "content": "Ang Philippine Coast Guard ay may malaking responsibilidad sa pagbabantay sa ating mahahabang baybayin. <span class='fil-sentence' data-translation='The Philippine Coast Guard has a massive responsibility guarding our long coastlines.'></span>"
          },
          {
            "title": "Typhoon Belt",
            "content": "Tinatayang 20 bagyo ang pumapasok sa bansa taon-taon dahil sa lokasyon sa Pacific Ocean. <span class='fil-sentence' data-translation='Approximately 20 typhoons enter the country yearly due to its location in the Pacific Ocean.'></span>"
          }
        ]
      },
      {
        "title": "Mapa Politikal vs. Mapa Pisikal",
        "text": "Mahalagang malaman ang pagkakaiba ng mga mapa. Ang mapa politikal ay nagpapakita ng mga hangganan ng lalawigan at lungsod. Ang mapa pisikal ay nagpapakita ng anyong lupa at tubig. <span class='fil-sentence' data-translation='It is important to differentiate maps. A political map shows provincial and city boundaries. A physical map shows landforms and bodies of water.'></span>",
        "examples": [
          {
            "title": "Gamit ng Politikal",
            "content": "Gagamitin mo ang mapa politikal upang malaman kung nasaan ang lalawigan ng Albay. <span class='fil-sentence' data-translation='You use a political map to find where the province of Albay is.'></span>"
          },
          {
            "title": "Gamit ng Pisikal",
            "content": "Gagamitin mo ang mapa pisikal upang makita ang daanan ng Ilog Cagayan. <span class='fil-sentence' data-translation='You use a physical map to see the path of the Cagayan River.'></span>"
          }
        ]
      },
      {
        "title": "Buod ng Heograpiya ng Pilipinas",
        "text": "Bilang pagbubuod: Ang tiyak na lokasyon ng Pilipinas ay nasa 4°-21°NL at 116°-127°EL. Ito ay may tropikal na klima. Ang heograpiya nito ay binubuo ng mga tanyag na anyong lupa gaya ng Mt. Apo at Bulkang Mayon, at anyong tubig gaya ng Ilog Cagayan at Lawa ng Taal. Alagaan natin ang ating likas na yaman! <span class='fil-sentence' data-translation='Summary: The absolute location of the PH is 4-21 N Lat and 116-127 E Long. It has a tropical climate. Its geography consists of landmarks like Mt. Apo, Mayon, Cagayan River, and Taal Lake. Let's protect our natural resources!'></span>",
        "examples": [
          {
            "title": "Magsanay sa Bahay",
            "content": "Ipaliwanag sa iyong pamilya kung bakit may dalawang panahon lamang sa Pilipinas batay sa lokasyon nito sa globo! <span class='fil-sentence' data-translation='Explain to your family why there are only two seasons in the Philippines based on its globe location!'></span>"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the study of the Earth's physical features, climate, and resources?\">Ano ang pag-aaral ng pisikal na katangian ng mundo kabilang ang klima, anyong lupa, at lokasyon?</span>",
        "options": [
          "Kasaysayan",
          "Heograpiya",
          "Sibika",
          "Agham"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which tool represents a spherical model of the Earth?\">Aling kasangkapan ang nagpapakita ng bilog na modelo ng mundo?</span>",
        "options": [
          "Mapa",
          "Globo",
          "Compass",
          "Grid"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What do we call the identification of location using coordinates of latitude and longitude?\">Ano ang tawag sa pagtukoy ng kinalalagyan ng isang lugar gamit ang coordinates ng latitud at longitud?</span>",
        "options": [
          "Relatibong Lokasyon",
          "Bisinal na Lokasyon",
          "Tiyak na Lokasyon (Absolute)",
          "Insular na Lokasyon"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What imaginary line divides the Earth into Northern and Southern Hemispheres?\">Anong imaginary line ang humahati sa mundo sa Hilaga at Timog Hemispero?</span>",
        "options": [
          "Prime Meridian",
          "Ekwador (Equator)",
          "Tropic of Cancer",
          "International Date Line"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What imaginary line divides the Earth into Eastern and Western Hemispheres?\">Anong imaginary line ang humahati sa mundo sa Silangan at Kanlurang Hemispero?</span>",
        "options": [
          "Ekwador",
          "Prime Meridian",
          "Tropic of Capricorn",
          "Grid"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What are the horizontal imaginary lines running parallel to the Equator?\">Ano ang tawag sa mga pahalang na imaginary lines na kahanay ng Ekwador?</span>",
        "options": [
          "Guhit Longitud",
          "Guhit Latitud (Parallels)",
          "Meridians",
          "Grid"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What are the vertical imaginary lines running from North Pole to South Pole?\">Ano ang tawag sa mga patayong imaginary lines na nagmumula sa Hilagang Polo patungong Timog Polo?</span>",
        "options": [
          "Guhit Latitud",
          "Guhit Longitud (Meridians)",
          "Parallels",
          "Ekwador"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the network of intersecting latitude and longitude lines called?\">Ano ang tawag sa lambat-lambat na pagsasalubong ng mga guhit latitud at longitud?</span>",
        "options": [
          "Compass",
          "Grid System",
          "Scale",
          "Legend"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Between what degrees of Latitude is the Philippines located?\">Sa pagitan ng aling degrees ng Latitud matatagpuan ang Pilipinas?</span>",
        "options": [
          "4° hanggang 21° Hilagang Latitud",
          "4° hanggang 21° Timog Latitud",
          "116° hanggang 127° Silangang Latitud",
          "116° hanggang 127° Kanlurang Latitud"
        ],
        "answer": 0
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Between what degrees of Longitude is the Philippines located?\">Sa pagitan ng aling degrees ng Longitud matatagpuan ang Pilipinas?</span>",
        "options": [
          "4° hanggang 21° Hilagang Latitud",
          "116° hanggang 127° Silangang Longitud",
          "116° hanggang 127° Kanlurang Longitud",
          "0° hanggang 15° Silangang Longitud"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What type of climate does the Philippines have due to its location near the Equator?\">Anong uri ng klima mayroon ang Pilipinas dahil sa lokasyon nito na malapit sa Ekwador?</span>",
        "options": [
          "Malamig na klima (Polar)",
          "Tropikal na klima",
          "Katamtamang klima (Temperate)",
          "Disyertong klima"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What are the two main seasons in the Philippines?\">Ano ang dalawang pangunahing panahon sa Pilipinas?</span>",
        "options": [
          "Tagsibol at Taglagas",
          "Tag-init (dry) at Tag-ulan (wet)",
          "Taglamig at Tag-init",
          "Tagsibol at Taglamig"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which country is located north of the Philippines as a vicinal neighbor?\">Anong bansa ang matatagpuan sa hilaga ng Pilipinas bilang kapitbahay sa lupa?</span>",
        "options": [
          "Indonesia",
          "Malaysia",
          "Taiwan",
          "Vietnam"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which body of water forms the eastern boundary of the Philippines?\">Anong anyong tubig ang bumubuo sa silangang hangganan ng Pilipinas?</span>",
        "options": [
          "West Philippine Sea",
          "Karagatang Pasipiko (Pacific Ocean)",
          "Celebes Sea",
          "Sulu Sea"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the highest mountain in the Philippines?\">Ano ang pinakamataas na bundok sa Pilipinas?</span>",
        "options": [
          "Bundok Pulag",
          "Bundok Apo",
          "Bulkang Mayon",
          "Bundok Kanlaon"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Where is Mount Apo located?\">Saan matatagpuan ang Bundok Apo?</span>",
        "options": [
          "Luzon",
          "Visayas",
          "Mindanao",
          "Palawan"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which volcano is famous for its perfect cone shape?\">Aling bulkan ang sikat sa buong mundo dahil sa perpektong hugis kono nito?</span>",
        "options": [
          "Bulkang Taal",
          "Bulkang Pinatubo",
          "Bulkang Mayon",
          "Bulkang Kanlaon"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the longest river in the Philippines?\">Ano ang pinakamahabang ilog sa Pilipinas?</span>",
        "options": [
          "Ilog Pasig",
          "Ilog Cagayan",
          "Ilog Pampanga",
          "Ilog Agno"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"In which lake can the unique Tawilis freshwater sardine be found?\">Sa aling lawa lamang matatagpuan ang Sardinella tawilis, ang tanging freshwater sardine sa mundo?</span>",
        "options": [
          "Lawa ng Laguna",
          "Lawa ng Taal",
          "Lawa ng Lanao",
          "Lawa ng Naujan"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The Philippines has one of the deepest ocean trenches in the world, the Philippine Trench.\">Ang Pilipinas ay may isa sa pinakamalalim na trenches sa mundo, ang Philippine Trench.</span>",
        "answer": true
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"A political map shows physical landforms like mountains and rivers.\">Ipinapakita sa mapang politikal ang mga pisikal na anyong lupa gaya ng bundok at ilog.</span>",
        "answer": false
      },
      {
        "type": "tf",
        "q": "<span class=\"fil-sentence\" data-translation=\"The Philippines is located in the Pacific Ring of Fire.\">Ang Pilipinas ay matatagpuan sa Pacific Ring of Fire.</span>",
        "answer": true
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What horizontal line is designated as 0 degrees latitude?\">Anong guhit latitud ang may sukat na 0 degrees?</span>",
        "answer": "ekwador"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"What island group of the Philippines is located in the south?\">Anong pangunahing pangkat ng mga isla sa Pilipinas ang nasa timog?</span>",
        "answer": "mindanao"
      },
      {
        "type": "blank",
        "q": "<span class=\"fil-sentence\" data-translation=\"How many seasons are there in a tropical climate?\">Ilang panahon mayroon sa tropikal na klima?</span>",
        "answer": "dalawa"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Why does the location of the Philippines make it prone to typhoons?\">Bakit ang lokasyon ng Pilipinas ay nagdudulot ng madalas na bagyo rito?</span>",
        "options": [
          "Dahil ito ay malapit sa Hilagang Polo",
          "Dahil ito ay nasa Pacific typhoon belt sa kanlurang bahagi ng Karagatang Pasipiko",
          "Dahil napapaligiran ito ng matataas na bundok lamang",
          "Dahil nasa Ekwador ito mismo"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"If you are at 10°N, 125°E, where are you located?\">Kung ikaw ay nasa coordinate na 10° Hilagang Latitud at 125° Silangang Longitud, nasaan ka?</span>",
        "options": [
          "Nasa labas ng Pilipinas sa Europa",
          "Nasa loob ng pambansang teritoryo ng Pilipinas",
          "Nasa Karagatang Atlantiko",
          "Nasa Hilagang Polo"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which of the following is the correct relative insular location of the Philippines on the West?\">Alin sa mga sumusunod ang tamang relatibong lokasyong insular ng Pilipinas sa Kanluran?</span>",
        "options": [
          "Karagatang Pasipiko",
          "West Philippine Sea",
          "Bashi Channel",
          "Dagat Celebes"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"What is the geological origin of the Philippine Trench?\">Ano ang heolohikal na dahilan ng pagkakabuo ng Philippine Trench?</span>",
        "options": [
          "Pag-abuso ng tao sa karagatan",
          "Subduction o paglubog ng Philippine Sea Plate sa ilalim ng Eurasian Plate",
          "Pagputok ng Bulkang Taal sa Batangas",
          "Dahil sa malalakas na bagyo"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "<span class=\"fil-sentence\" data-translation=\"Which map should a hiker use to check the elevation and slope of Mount Pulag?\">Aling mapa ang dapat gamitin ng isang hiker upang malaman ang taas at dalisdis ng Bundok Pulag?</span>",
        "options": [
          "Mapang Politikal",
          "Mapang Pisikal o Topograpikal",
          "Mapa ng Klima",
          "Mapa ng Populasyon"
        ],
        "answer": 1
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Aking Mapa ng Coordinates ng Pilipinas",
      "desc": "Kumuha ng isang papel at gumuhit ng isang Grid System. I-label ang pahalang na mga linya mula 4° hanggang 21° Hilagang Latitud, at ang mga patayong linya mula 116° hanggang 127° Silangang Longitud. Gumuhit ng simpleng balangkas (outline) ng mapa ng Pilipinas sa loob ng grid na ito. Gamit ang coordinates, i-plot at lagyan ng bituin ang lokasyon ng: 1) Maynila (15°N, 121°E), 2) Bulkang Mayon (13°N, 124°E), at 3) Bundok Apo (7°N, 125°E). Ipakita ito sa iyong magulang o guro. <span class='fil-sentence' data-translation='Draw a grid system of 4-21 N Lat and 116-127 E Long. Sketch a simple outline map of the Philippines. Plot and label: 1) Manila (15N, 121E), 2) Mayon (13N, 124E), and 3) Mount Apo (7N, 125E). Show to parent/teacher.'></span>",
      "labels": [
        "Wastong pagkakaguhit ng grid system na may tamang degrees ng latitud at longitud",
        "Tumpak na pag-plot ng lokasyon ng Maynila, Bulkang Mayon, at Bundok Apo sa mapa",
        "Kalinawan ng mga label at pagiging malikhain sa pagguhit ng mapa ng bansa"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 1: Absolute Location ng Pilipinas</h3>\n                  <p class=\"ws-instruction\">Punan ang mga patlang gamit ang tamang degree ng Latitud at Longitud ng Pilipinas. <span class=\"fil-sentence\" data-translation=\"Fill in the correct absolute location coordinates.\"></span></p>\n                  \n                  <div style=\"line-height: 2.2; font-size: 16px;\">\n                    Ang tiyak na lokasyon ng Pilipinas ay sa pagitan ng \n                    <div class=\"writing-line inline-line\" style=\"width: 150px; display:inline-block; margin: 0 5px;\"></div> (4° hanggang 21°) \n                    Hilagang Latitud at \n                    <div class=\"writing-line inline-line\" style=\"width: 150px; display:inline-block; margin: 0 5px;\"></div> (116° hanggang 127°) \n                    Silangang Longitud.\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 2: Bisinal at Insular Map Plotting</h3>\n                  <p class=\"ws-instruction\">Suriin ang lokasyon. Isulat ang mga katabing katubigan at anyong lupa ng Pilipinas sa direksyong hiningi. <span class=\"fil-sentence\" data-translation=\"Write neighboring countries and bodies of water.\"></span></p>\n                  \n                  <div class=\"ws-q-list\" style=\"font-size: 16px;\">\n                    <div style=\"margin-bottom: 20px;\">1. Anyong tubig sa SILANGAN (Insular): <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">2. Anyong lupa sa HILAGA (Bisinal): <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 20px;\">3. Anyong tubig sa KANLURAN (Insular): <div class=\"writing-line inline-line\" style=\"width: 250px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Pagsasanay 3: Tiyak na Lokasyon ng Pilipinas</h3>\n                  <p class=\"ws-instruction\">Punan ang mga patlang upang tukuyin ang absolute na lokasyon ng bansa batay sa latitud at longitud nito.</p>\n                  \n                  <div style=\"font-size: 16px; line-height: 1.8; margin-top: 25px;\">\n                    <div style=\"margin-bottom: 25px;\">1. Ang Pilipinas ay matatagpuan sa pagitan ng <div class=\"writing-line inline-line\" style=\"width: 60px; display:inline-block; text-align:center;\"></div> at <div class=\"writing-line inline-line\" style=\"width: 60px; display:inline-block; text-align:center;\"></div> Hilagang Latitud (North Latitude).</div>\n                    <div style=\"margin-bottom: 25px;\">2. Matatagpuan din ito sa pagitan ng <div class=\"writing-line inline-line\" style=\"width: 60px; display:inline-block; text-align:center;\"></div> at <div class=\"writing-line inline-line\" style=\"width: 60px; display:inline-block; text-align:center;\"></div> Silangang Longitud (East Longitude).</div>\n                  </div>\n                </div>\n                "]
    }
  },
  "gmrc": {
    "color": "#eab308",
    "icon": "🧘‍♂️",
    "title": "GMRC",
    "subtitle": "Week 2: Mapanagutang Paggamit ng Teknolohiya [Advanced]",
    "slides": [
      {
        "title": "Technology in Everyday Life",
        "text": "Devices like smartphones, tablets, computers, and the internet are powerful tools. They help us research, join online classes, play educational games, and talk with relatives who live far away.",
        "examples": [
          {
            "title": "Information access",
            "content": "You can search the internet to read about famous scientists like Marie Curie or learn about angles."
          },
          {
            "title": "Communication",
            "content": "Using video calls to talk to grandparents or cousins in the province."
          }
        ]
      },
      {
        "title": "The Power of Devices: A Moral Duty",
        "text": "Because technology is so powerful, we have a corresponding duty to use it responsibly. Being a good user means respecting yourself and others, protecting your safety, and maintaining a healthy balance.",
        "examples": [
          {
            "title": "Responsibility",
            "content": "Just as a hammer can build a house or break a window, technology can be used to help or to hurt."
          },
          {
            "title": "Digital Citizenship",
            "content": "Digital citizenship is the set of rules for behaving responsibly and safely online."
          }
        ]
      },
      {
        "title": "Online Safety Rule 1: Personal Information",
        "text": "The internet is a public place. Never share your personal information (such as your full name, home address, school name, phone number, or photos) with strangers online.",
        "examples": [
          {
            "title": "Privacy",
            "content": "If an online game or quiz asks for your home address or school, do not type it. Ask a parent for help first."
          },
          {
            "title": "Strangers online",
            "content": "Remember that people online may not be who they say they are."
          }
        ]
      },
      {
        "title": "Online Safety Rule 2: Password Security",
        "text": "Your passwords are like the keys to your house. Keep them secret from everyone, including your friends. The only people who should know your passwords are your parents or guardians.",
        "examples": [
          {
            "title": "Why keep secret?",
            "content": "If a friend gets your password, they can log into your account and send messages pretending to be you."
          },
          {
            "title": "Strong Passwords",
            "content": "Create passwords that are hard to guess, using letters, numbers, and symbols."
          }
        ]
      },
      {
        "title": "Online Safety Rule 3: Ask Before Downloading",
        "text": "Never download games, apps, files, or click on strange links/ads without asking a parent or teacher first. These can contain viruses that ruin your device or steal files.",
        "examples": [
          {
            "title": "Pop-up ads",
            "content": "Clicking a flashing button saying 'You won a free tablet!' is a trick that downloads dangerous software."
          },
          {
            "title": "App Store safety",
            "content": "Ensure all app downloads are approved and supervised by an adult."
          }
        ]
      },
      {
        "title": "What is Netiquette?",
        "text": "Netiquette (network etiquette) is the set of rules for behaving politely and respectfully when communicating online, such as in chats, emails, or comment sections.",
        "examples": [
          {
            "title": "Capital Letters",
            "content": "TYPING IN ALL CAPITAL LETTERS IS CONSIDERED SHOUTING ONLINE. Use standard sentence case instead."
          },
          {
            "title": "Polite Greetings",
            "content": "Start messages with a polite 'Hello' and end with 'Thank you'."
          }
        ]
      },
      {
        "title": "The Golden Rule Online",
        "text": "Treat others online the way you want to be treated in person. If you wouldn't say a mean comment to a classmate's face, do not type it on a screen.",
        "examples": [
          {
            "title": "Think before you post",
            "content": "Ask yourself: Is this comment kind? Is it helpful? Is it true? If not, do not send it."
          },
          {
            "title": "Empathy",
            "content": "Remember that there is a real person with real feelings reading your screen message."
          }
        ]
      },
      {
        "title": "Understanding Cyberbullying",
        "text": "Cyberbullying is using digital devices to send mean, embarrassing, or hurtful messages, photos, or rumors about someone, or intentionally leaving them out online.",
        "examples": [
          {
            "title": "Hurtful Actions",
            "content": "Posting a funny but embarrassing photo of a classmate without their permission is cyberbullying."
          },
          {
            "title": "Repeated Behavior",
            "content": "Cyberbullying is usually repeated over time, causing stress and sadness to the victim."
          }
        ]
      },
      {
        "title": "How to Handle Cyberbullying",
        "text": "If you or a friend are being bullied online, follow these four steps: 1) Do not reply, 2) Block the bully, 3) Save the messages/evidence, 4) Tell a parent or trusted adult immediately.",
        "examples": [
          {
            "title": "No Replying",
            "content": "Replying to a bully often makes them escalate. Blocking them stops them from contacting you."
          },
          {
            "title": "Adult Help",
            "content": "Adults can contact the school or authorities to stop the bullying safely."
          }
        ]
      },
      {
        "title": "Balancing Screen Time",
        "text": "Spending too much time looking at screens can hurt your physical and mental health. It can cause eye strain, neck pain, headaches, and trouble sleeping.",
        "examples": [
          {
            "title": "Physical symptoms",
            "content": "Looking at a tablet in the dark keeps your brain awake, making it hard to fall asleep."
          },
          {
            "title": "The 20-20-20 Rule",
            "content": "Every 20 minutes, look at an object 20 feet away for at least 20 seconds to rest your eyes."
          }
        ]
      },
      {
        "title": "Screen Time vs. Active Time",
        "text": "Devices are fun, but they should not replace physical play, face-to-face conversations with family, reading books, or getting enough sleep (8-10 hours).",
        "examples": [
          {
            "title": "Active Play",
            "content": "Playing tag, riding a bike, or helping in chores are vital for a healthy body and mind."
          },
          {
            "title": "Device-Free Zones",
            "content": "Designate times like family meals and bedrooms as device-free zones."
          }
        ]
      },
      {
        "title": "Ergonomics: Good Posture",
        "text": "Ergonomics is arranging your study space so that you sit comfortably and safely. Good posture prevents back and neck injuries.",
        "examples": [
          {
            "title": "Sit Straight",
            "content": "Keep your back straight, feet flat on the floor, and the tablet or laptop screen at eye level."
          },
          {
            "title": "Taking Breaks",
            "content": "Stand up and stretch your arms and legs every 30 minutes of study."
          }
        ]
      },
      {
        "title": "What is a Digital Detox?",
        "text": "A digital detox is taking a planned break from all screens (smartphones, tablets, TV, computers) for a day or a weekend to focus on real-world activities.",
        "examples": [
          {
            "title": "Real-world focus",
            "content": "Going on a family picnic, building blocks, or painting without looking at a screen once."
          },
          {
            "title": "Mental Rest",
            "content": "A detox rests your brain, reduces stress, and improves concentration when you study again."
          }
        ]
      },
      {
        "title": "Critical Thinking Online: Fake News",
        "text": "Not everything on the internet is true. Anyone can write articles or create videos online. We must use critical thinking to verify facts before believing them.",
        "examples": [
          {
            "title": "Fact-Checking",
            "content": "If you read that 'cats can talk', check other reliable sources, ask a teacher, or look in science books."
          },
          {
            "title": "Sharing rumors",
            "content": "Failing to check facts before sharing posts can spread dangerous lies."
          }
        ]
      },
      {
        "title": "Respecting Copyright Online",
        "text": "Copyright is the legal right of a creator to control how their drawings, stories, music, or videos are used. Copying someone's work and claiming it as yours is cheating.",
        "examples": [
          {
            "title": "Giving Credit",
            "content": "If you use an image from the internet in a school report, write down the website name under the photo."
          },
          {
            "title": "Plagiarism",
            "content": "Copying and pasting a paragraph from Wikipedia into your essay without writing it in your own words is wrong."
          }
        ]
      },
      {
        "title": "Online Games: Fun vs. Addiction",
        "text": "Online games are fun for relaxation, but they must not take over your life. If you get angry when asked to stop playing, or skip homework to game, it is a warning sign.",
        "examples": [
          {
            "title": "Self-Control",
            "content": "Set a timer for 30 minutes of gaming. When the timer rings, turn off the game immediately without complaining."
          },
          {
            "title": "Priorities",
            "content": "Always finish your homework and chores *before* opening any game apps."
          }
        ]
      },
      {
        "title": "Respecting Others' Privacy",
        "text": "Just as you want your privacy protected, you must respect others' privacy. Never take photos or videos of friends or family and share them online without their consent.",
        "examples": [
          {
            "title": "Asking Consent",
            "content": "'Can I post this photo of us playing tag?' always ask this question before clicking publish."
          },
          {
            "title": "Embarrassment",
            "content": "Deleting a photo immediately if a friend asks you to because they don't like how they look in it."
          }
        ]
      },
      {
        "title": "Family Rules on Device Use",
        "text": "Every family has rules to keep children safe and maintain family bonds. Respecting and obeying these rules is your duty at home.",
        "examples": [
          {
            "title": "Common Rules",
            "content": "'No devices during dinner' or 'Hand in devices to parents at 8:00 PM.'"
          },
          {
            "title": "Fulfilling Duty",
            "content": "Handing over your device without arguing shows maturity and respect for your family."
          }
        ]
      },
      {
        "title": "Technology in the Classroom",
        "text": "When using tablets or computers in school, follow your teacher's instructions exactly. Do not open games or YouTube during a science lesson.",
        "examples": [
          {
            "title": "Focus",
            "content": "Using the device only for the task assigned by the teacher (e.g. measuring angles on a virtual protractor)."
          },
          {
            "title": "Device Care",
            "content": "Carrying school tablets with two hands and returning them carefully to the charging cart."
          }
        ]
      },
      {
        "title": "The Impact of Rude Comments",
        "text": "Type comments that encourage others. A mean remark on a classmate's post can cause real sadness, anxiety, and make them feel unsafe.",
        "examples": [
          {
            "title": "Positive Comments",
            "content": "Write 'Great job on your drawing!' instead of pointing out a small mistake."
          },
          {
            "title": "Stop the hate",
            "content": "If you see others posting rude comments, do not join in or 'like' the post."
          }
        ]
      },
      {
        "title": "Creating a Safe Digital Space",
        "text": "You can help make the internet a better place by being kind, reporting bad behavior, and sharing helpful resources.",
        "examples": [
          {
            "title": "Kindness campaigns",
            "content": "Sharing a post about children's rights or environmental safety rules."
          },
          {
            "title": "Reporting",
            "content": "Clicking the 'report' button on a video that shows violence or dangerous behavior."
          }
        ]
      },
      {
        "title": "Being a Digital Role Model",
        "text": "A digital role model is a student who guides friends on how to use technology safely. They practice netiquette, safety, and balance.",
        "examples": [
          {
            "title": "Peer Guidance",
            "content": "Reminding a friend who is typing in ALL CAPS about netiquette rules."
          },
          {
            "title": "Balance",
            "content": "Inviting a friend who is gaming too much to go outside and play basketball instead."
          }
        ]
      },
      {
        "title": "Digital Footprint",
        "text": "Every action you take online leaves a permanent record called a digital footprint. Future schools and employers can search for this footprint.",
        "examples": [
          {
            "title": "Permanent Record",
            "content": "Even if you delete a post, someone might have screenshotted it. Post only things you are proud of."
          },
          {
            "title": "Positive Footprint",
            "content": "Build a footprint showing science projects, kind words, and civic participation."
          }
        ]
      },
      {
        "title": "The Role of Parents in Digital Guidance",
        "text": "Parents are your guides in the digital world. Talk to them about what you see online, especially if something makes you feel uncomfortable or scared.",
        "examples": [
          {
            "title": "Open Communication",
            "content": "If a pop-up showing scary images appears, tell your parents immediately instead of hiding it."
          },
          {
            "title": "Filter Settings",
            "content": "Allowing parents to set parental control filters on your browser to block dangerous sites."
          }
        ]
      },
      {
        "title": "Review of Digital Responsibility",
        "text": "Let's summarize: Technology helps us learn but requires responsibility. Keep personal info and passwords secret. Practice netiquette and the Golden Rule online. Block and report cyberbullying. Balance screen time with physical activity. Be a safe, kind, and responsible digital citizen.",
        "examples": [
          {
            "title": "Review Task",
            "content": "Write down three rules you will follow tonight to keep yourself safe and balanced online!"
          }
        ]
      }
    ],
    "standard": [
      {
        "type": "choice",
        "q": "What is the term for behaving responsibly, safely, and respectfully in the digital world?",
        "options": [
          "Cyber-gaming",
          "Digital Citizenship",
          "Online downloading",
          "Password sharing"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is safe to share with a stranger online?",
        "options": [
          "Your home address",
          "Your school name",
          "Your favorite color",
          "Your phone number"
        ],
        "answer": 2
      },
      {
        "type": "choice",
        "q": "Who is the ONLY person you should share your account passwords with?",
        "options": [
          "Your best friend at school",
          "Your parents or guardians",
          "An online gamer who promises free coins",
          "No one at all, not even parents"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If an online ad flashes 'Click here to win a free phone!', what should you do?",
        "options": [
          "Click it immediately before it disappears",
          "Ignore it and ask a parent, as it is likely a dangerous link",
          "Send the link to your friends",
          "Type your email address to claim the prize"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the set of rules for behaving politely in online communications called?",
        "options": [
          "Internet laws",
          "Netiquette",
          "Digital footprint",
          "Ergonomics"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Why is typing in ALL CAPITAL LETTERS avoided in online chats?",
        "options": [
          "It makes the text too small to read",
          "It is considered equivalent to shouting and is rude",
          "It takes up too much battery power",
          "It is a secret code for passwords"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is the Golden Rule of online communication?",
        "options": [
          "Post as many photos as possible",
          "Treat others online the way you want to be treated in person",
          "Never reply to emails",
          "Use the hardest words you know"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Using digital devices to repeatedly send mean, hurtful, or embarrassing messages is called:",
        "options": [
          "Digital detox",
          "Cyberbullying",
          "Netiquette",
          "Ergonomics"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If someone sends you a mean message online, what is the FIRST thing you should do?",
        "options": [
          "Write a meaner message back to them",
          "Do not reply, block them, and tell a trusted adult",
          "Delete the message and keep it a secret",
          "Invite them to play a game"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which rule helps prevent eye strain when looking at screens for a long time?",
        "options": [
          "The 10-10-10 rule",
          "The 20-20-20 rule",
          "The screen-brightness rule",
          "The dark-mode rule"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is a healthy balance for screen time compared to physical play?",
        "options": [
          "Game for 6 hours, play outside for 5 minutes",
          "Balance screen time with outdoor play, chores, and reading books",
          "Only use devices and never go outside",
          "Read books on a screen all day without breaks"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "How should you sit while studying on a tablet to practice good ergonomics?",
        "options": [
          "Slouch in a beanbag chair in the dark",
          "Sit straight with feet flat on the floor and the screen at eye level",
          "Lie flat on your stomach with the screen close to your face",
          "Hunch your neck forward close to the table"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What do we call taking a planned break from all digital screens to focus on real-world activities?",
        "options": [
          "Digital footprint",
          "Digital detox",
          "Online detox",
          "Netiquette"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is 'fake news' online?",
        "options": [
          "News about digital video games",
          "Unverified or false information shared as if it were true",
          "Scientific reports from universities",
          "Articles about children's rights"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If you copy an essay from the internet and submit it as your own schoolwork, you are violating:",
        "options": [
          "Netiquette",
          "Copyright and honesty (plagiarism)",
          "Online safety rules",
          "Screen time limits"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "How can you show self-control while playing video games?",
        "options": [
          "Cry when your parent asks you to stop",
          "Set a timer and turn off the game immediately when it rings",
          "Hide the tablet under your pillow to play at night",
          "Skip dinner to finish a level"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Before sharing a photo of a friend online, what must you do?",
        "options": [
          "Crop them out of the photo",
          "Ask for their permission/consent",
          "Share it immediately and tag them",
          "Send it to a stranger first"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "obeying family rules on device limits (like no phones at dinner) is your ______.",
        "options": [
          "Right",
          "Duty / Responsibility",
          "Option",
          "Favor"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "What is a digital footprint?",
        "options": [
          "A protective cover for your tablet screen",
          "The permanent record of all your activities and posts online",
          "A specialized digital drawing tool",
          "The physical size of your device"
        ],
        "answer": 1
      },
      {
        "type": "tf",
        "q": "Cyberbullying cannot cause real-world sadness because it only happens on a screen.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "It is okay to use your tablet during a class lesson to watch cartoon videos if the teacher is not looking.",
        "answer": false
      },
      {
        "type": "tf",
        "q": "Posting kind comments online helps build a positive digital footprint.",
        "answer": true
      },
      {
        "type": "blank",
        "q": "The permanent record of your online activities is called your digital ______.",
        "answer": "footprint"
      },
      {
        "type": "blank",
        "q": "What is the polite behavior set of rules for the internet called?",
        "answer": "netiquette"
      },
      {
        "type": "blank",
        "q": "To protect your account from hacks, you must keep your ______ secret.",
        "answer": "password"
      }
    ],
    "challenge": [
      {
        "type": "choice",
        "q": "A classmate posts a drawing online. Another student writes a comment saying: 'This is the ugliest drawing I have ever seen.' What rules are violated?",
        "options": [
          "Copyright and privacy rules",
          "Netiquette, the Golden Rule, and kindness guidelines",
          "Screen time limits and ergonomics",
          "Online safety rules only"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Why is a digital detox beneficial for your brain?",
        "options": [
          "It makes you forget your school lessons",
          "It reduces screen-induced stress, rests your eyes, and helps you appreciate real-world connections",
          "It increases your video game level",
          "It deletes your digital footprint"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "A student wants to use an online image for a school project. Which action is the most ethical?",
        "options": [
          "Copy and paste the image and claim they drew it",
          "Use the image and write a caption crediting the website or creator",
          "Download the image and sell it to classmates",
          "Use it only in the dark"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "If you notice a website is asking you to install software to view a video, what should you do?",
        "options": [
          "Install it quickly to watch the video",
          "Close the tab immediately and tell an adult, as it is likely malware",
          "Share the link with friends to see if it works for them",
          "Type your password to allow it"
        ],
        "answer": 1
      },
      {
        "type": "choice",
        "q": "Which of the following is a symptom of gaming addiction that requires adult intervention?",
        "options": [
          "Playing for 20 minutes and stopping when the timer rings",
          "Feeling extremely angry, lying about screen time, or neglecting homework to play",
          "Preferring reading books over playing online games",
          "Following all screen rules easily"
        ],
        "answer": 1
      }
    ],
    "performance": {
      "type": "performance",
      "title": "Family Digital Citizenship Contract",
      "desc": "Take a sheet of paper. Create a 'Family Digital Citizenship Contract'. Discuss with your parents and write down five clear rules for using technology at home (e.g. 1) No devices during meals, 2) Screen time is limited to 1 hour a day after homework, 3) Always ask parents before downloading, etc.). Draw a signature line for yourself and each family member at the bottom. Color the borders beautifully, sign the contract, and paste it on your refrigerator or near your study table. Show it to your teacher.",
      "labels": [
        "Wrote five clear, actionable, and responsible digital device rules",
        "Conducted a family discussion and secured signatures of family members",
        "Neatly presented contract with colorful design and placed in a visible spot"
      ]
    },
    "worksheet": {
      "pages": [
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 1: Digital Safety Scenarios</h3>\n                  <p class=\"ws-instruction\">Write 'SAFE' if the action shows safe internet use, and 'DANGEROUS' if it shows poor digital hygiene.</p>\n                  \n                  <div class=\"ws-q-list\">\n                    <div style=\"margin-bottom: 15px;\">1. Sharing your account password with your classmate: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">2. Asking parents before installing a new game app: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">3. Telling a stranger online your school name: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"></div></div>\n                    <div style=\"margin-bottom: 15px;\">4. Blocking a user who sends you rude messages: <div class=\"writing-line inline-line\" style=\"width: 200px; display:inline-block;\"></div></div>\n                  </div>\n                </div>\n                ",
        "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 2: Screen Balance Plan</h3>\n                  <p class=\"ws-instruction\">Write a short commitment plan on how you will limit screen time tonight. How many minutes of gaming? What physical play will you do instead?</p>\n                  \n                  <div style=\"margin-top: 15px;\">\n                    <div style=\"margin-bottom: 25px;\">Tonight, my device limit is: <div class=\"writing-line inline-line\" style=\"width: 50%; display:inline-block;\"></div> minutes.</div>\n                    <div>Instead of devices, I will:</div>\n                    <div class=\"writing-line\" style=\"margin-top: 15px; width: 100%;\"></div>\n                    <div class=\"writing-line\" style=\"margin-top: 25px; width: 100%;\"></div>\n                  </div>\n                </div>\n                "
      ,
          "\n                <div class=\"ws-page-content\">\n                  <h3>Exercise 3: Gadget Balance List</h3>\n                  <p class=\"ws-instruction\">Write down one major benefit of using gadgets for learning, and one major risk of screen overuse.</p>\n                  \n                  <div style=\"font-size: 15px; margin-top: 15px;\">\n                    <div class=\"ws-q\">1. Benefits of gadget in study (Mabuting Epekto):</div>\n                    <div class=\"writing-line\" style=\"margin-top: 10px; width: 95%;\"></div>\n                    \n                    <div class=\"ws-q\" style=\"margin-top: 25px;\">2. Risks of gadget overuse (Masamang Epekto):</div>\n                    <div class=\"writing-line\" style=\"margin-top: 10px; width: 95%;\"></div>\n                  </div>\n                </div>\n                "]
    }
  }
};
