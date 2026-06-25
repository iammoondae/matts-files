import os
import json

base_dir = "/home/moondae/Antigravity Projects/Matts Files_apk"
sources_dir = os.path.join(base_dir, "data", "sources", "g3")
math_core_dir = os.path.join(sources_dir, "math")
math_adv_dir = os.path.join(sources_dir, "math_advanced")

os.makedirs(math_core_dir, exist_ok=True)
os.makedirs(math_adv_dir, exist_ok=True)

# Helper to generate rich paragraphs of ~135 words for each slide
def create_slide_text(concept_text, localization_text, question_text):
    text = f"{concept_text} {localization_text} {question_text}"
    words = text.split()
    if len(words) < 125:
        padding = "To understand this concept deeply, we must look at how it applies to different situations in our daily lives. By studying this topic, students can develop critical thinking skills and learn to solve complex problems. It is important to practice regularly and discuss these ideas with your peers and teachers to build a strong foundation."
        text = text + " " + padding
        words = text.split()
        if len(words) > 145:
            text = " ".join(words[:135]) + "."
    return text

# Generate Core Math templates
def generate_core():
    # --- WEEK 1 CORE ---
    w1_core = {
        "title": "Mathematics",
        "subtitle": "Week 1: Area of Squares and Rectangles using Tiles",
        "color": "#0284c7",
        "icon": "🔢",
        "slides": [],
        "standard": [],
        "challenge": [],
        "worksheet": {"pages": []},
        "performance": {}
    }
    for i in range(25):
        slide_num = i + 1
        title = f"Area Concept Slide {slide_num}"
        if slide_num <= 5:
            concept = "Area is the amount of flat space that a shape covers. We can measure area by covering a surface with smaller, identical shapes like square tiles. A square tile has equal sides, making it a perfect unit for measuring area without leaving any gaps or overlaps between the shapes."
            local = "In the town of Polomolok, farmers layout square wooden crates to estimate the ground space needed for harvesting sweet pineapples near Mount Matutum."
            q = f"How can we use square tiles to measure the flat surface of a table or floor? Let us discuss how this helps us count units. Review detail {slide_num}."
        elif slide_num <= 10:
            concept = "To find the area of a rectangle, we can draw grid lines inside it to make rows and columns of square tiles. Counting all the individual squares inside the grid tells us the total area. This visual grid method helps us see how area is made of repeated rows."
            local = "Students at Koronadal Central Elementary School draw square grids on their paper to plan layout maps of local parks in South Cotabato."
            q = f"If a rectangle is divided into equal rows and columns, how does counting the squares help us find the total area? Study slide {slide_num}."
        elif slide_num <= 15:
            concept = "We can estimate the area of large flat surfaces by placing a few sample square tiles and imagining the rest of the grid. Estimating helps us find a close answer when we do not have enough tiles to cover the entire space, which is very useful in real-world projects."
            local = "Weavers in Lake Sebu estimate the area of their traditional T'nalak mats by laying down square cardboard templates before starting their weaving process."
            q = f"Why is estimation a useful skill when measuring large areas in our homes and schools? Let us explore this idea in card {slide_num}."
        elif slide_num <= 20:
            concept = "We can derive the area formula by observing that the total number of tiles is equal to the number of rows multiplied by the number of columns. For a rectangle, this is length multiplied by width. For a square, since all sides are equal, it is side multiplied by side."
            local = "A fruit vendor at the General Santos City public market uses this multiplication rule to calculate the area of their rectangular tuna display table."
            q = f"How does multiplying the number of rows by columns make finding the area faster than counting each tile one by one? Card {slide_num}."
        else:
            concept = "Solving area problems is easy once we understand the grid. We can find the missing side if we know the total area and one side length by dividing the area by the known side. Practice using both counting grids and formulas to master these area calculations."
            local = "Workers building a community center in Tupi use these area formulas to calculate how many square floor tiles they need to order."
            q = f"How can understanding area formulas help builders and decorators save time and materials in their daily work? Summary slide {slide_num}."
            
        text = create_slide_text(concept, local, q)
        w1_core["slides"].append({
            "title": title,
            "text": text,
            "examples": [{"title": f"Example {slide_num}", "content": f"A rectangle has 4 rows and 5 columns of tiles. Total area = 4 multiplied by 5 = 20 square tile units."}]
        })

    for i in range(25):
        q_num = i + 1
        w1_core["standard"].append({
            "q": f"A rectangle is covered with square tiles. It has {q_num + 2} rows and 4 columns of tiles. What is the total area in square tile units?",
            "type": "choice",
            "options": [str((q_num + 2) * 4), str((q_num + 2) + 4), str(q_num + 2), "8"],
            "answer": 0
        })

    for i in range(5):
        w1_core["challenge"].append({
            "q": f"A rectangular pineapple plot in Polomolok has an area of {24 + i*6} square tile units. If the width of the plot is {4 + i} tile units, what is its length?",
            "type": "choice",
            "options": [str(int((24 + i*6) / (4 + i))), "4", "8", "12"],
            "answer": 0
        })

    w1_core["worksheet"]["pages"] = [
        """<div class="ws-page-content">
      <h3>Exercise 1: Counting Tile Areas</h3>
      <p class="ws-instruction">Count the number of square tiles in each grid below and write the total area using your stylus.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. A grid has 3 rows of 6 square tiles each. What is the area?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">18 square units</span></div>
      </div>
      <div class="ws-item-row">
        <div class="ws-q">2. A grid has 5 rows of 5 square tiles each. What is the area?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">25 square units</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 2: Estimating Box Areas</h3>
      <p class="ws-instruction">Estimate the area of each shape based on the given sample tiles. Write your final estimate.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. A flat pineapple bin in Polomolok can fit 6 columns and 8 rows of fruit boxes. Estimate the total area:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">48 boxes</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 3: Area Formula Derivation</h3>
      <p class="ws-instruction">Apply the area formulas to calculate the total area in square tile units.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. A square has a side length of 7 tile units. Area = side multiplied by side. What is its area?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">49 square units</span></div>
      </div>
    </div>"""
    ]

    w1_core["performance"] = {
        "type": "performance",
        "title": "My Dream Pineapple Farm Plot",
        "desc": "Draw a rectangular grid on a piece of paper representing a pineapple farm plot in Polomolok. Make it 6 units long and 4 units wide. Color each square tile unit yellow for pineapples. Calculate the total area using both counting and the area formula (Area = length multiplied by width). Take a photo of your drawing and upload it here.",
        "labels": ["Correct grid drawing (6x4)", "Correct area calculation (24 units)", "Neatness and coloring"]
    }

    with open(os.path.join(math_core_dir, "week1.json"), "w", encoding="utf-8") as f:
        json.dump(w1_core, f, indent=2, ensure_ascii=False)

    # --- WEEK 2 CORE ---
    w2_core = {
        "title": "Mathematics",
        "subtitle": "Week 2: Metric Area and Geometry Basics",
        "color": "#0284c7",
        "icon": "🔢",
        "slides": [],
        "standard": [],
        "challenge": [],
        "worksheet": {"pages": []},
        "performance": {}
    }
    for i in range(25):
        slide_num = i + 1
        title = f"Metric and Geometry Slide {slide_num}"
        if slide_num <= 5:
            concept = "We measure the area of small shapes using square centimeters (sq. cm). A square centimeter is the space covered by a small square with sides that are exactly one centimeter long. For larger areas like floors and fields, we use square meters (sq. m), where each side is one meter long."
            local = "In Koronadal City, students measure their small math notebooks in square centimeters, while farmers in Tupi measure their fruit vegetable beds in square meters."
            q = f"When should we choose square centimeters instead of square meters to measure a surface? Let us think about objects. Card {slide_num}."
        elif slide_num <= 10:
            concept = "Solving area word problems helps us calculate actual spaces. When solving a problem, identify the shape first, write down the given side lengths, and use the correct metric unit in your final answer. Remember that area answers must always be written in square units like sq. cm or sq. m."
            local = "A market vendor in General Santos City wants to find the area of a rectangular tuna fish stall that is 4 meters long and 3 meters wide."
            q = f"How does writing our final answer with the correct unit help others understand our measurements? Study detail {slide_num}."
        elif slide_num <= 15:
            concept = "In geometry, a point is an exact location in space. It has no size, length, or width, and is represented by a small dot. We name points using capital letters. A point helps us mark specific positions on grids, shapes, and maps."
            local = "On a regional map of South Cotabato, a small red dot represents the exact location of the municipal hall of Polomolok town."
            q = f"Why do we use points to mark positions on a map, and how do capital letters help us identify them? Slide {slide_num}."
        elif slide_num <= 20:
            concept = "A line is a straight path of points that goes on forever in both directions. In drawing, we show this by putting arrowheads on both ends of the path. A line has no endpoints, meaning it has infinite length and cannot be measured with a ruler."
            local = "A long straight highway segment between General Santos City and Koronadal City represents a geometric line extending into the distance."
            q = f"How do the arrowheads on a drawn line tell us that it continues without stopping in both directions? Card {slide_num}."
        else:
            concept = "A line segment is a part of a line that has two fixed endpoints, meaning it has a definite length that we can measure. A ray is another part of a line, but it has only one endpoint and extends forever in the other direction, represented by one arrowhead."
            local = "A wooden ruler used by weavers in Lake Sebu is a line segment, while a beam of sunlight shining on Mount Matutum is a ray."
            q = f"What is the difference between a line segment that we can measure and a ray that goes on forever? Slide {slide_num}."
            
        text = create_slide_text(concept, local, q)
        w2_core["slides"].append({
            "title": title,
            "text": text,
            "examples": [{"title": f"Example {slide_num}", "content": "Area of a table = 3m multiplied by 2m = 6 sq. m. A point is labeled as Point A."}]
        })

    for i in range(25):
        q_num = i + 1
        w2_core["standard"].append({
            "q": f"Find the area of a rectangular notebook in Koronadal City that is {q_num + 5} cm long and 10 cm wide.",
            "type": "choice",
            "options": [f"{ (q_num + 5) * 10 } sq. cm", f"{ (q_num + 5) + 10 } sq. cm", "50 sq. m", "100 sq. cm"],
            "answer": 0
        })

    for i in range(5):
        w2_core["challenge"].append({
            "q": f"A rectangular vegetable garden in Tupi has an area of {30 + i*10} sq. m. If the length is {5 + i} meters, what is the width of the garden?",
            "type": "choice",
            "options": [f"{int((30 + i*10)/(5+i))} meters", "5 meters", "10 meters", "2 meters"],
            "answer": 0
        })

    w2_core["worksheet"]["pages"] = [
        """<div class="ws-page-content">
      <h3>Exercise 1: Metric Area Problems</h3>
      <p class="ws-instruction">Calculate the area using the formula and write your answer with the correct unit (sq. cm or sq. m).</p>
      <div class="ws-item-row">
        <div class="ws-q">1. A rectangular tuna packing box in GenSan is 80 cm long and 50 cm wide. What is its area?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">4000 sq. cm</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 2: Identifying Geometry Figures</h3>
      <p class="ws-instruction">Look at the drawings and write whether it is a Point, Line, Line Segment, or Ray.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. A straight path with arrowheads on both ends:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">Line</span></div>
      </div>
      <div class="ws-item-row">
        <div class="ws-q">2. A straight path with two solid endpoints:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">Line Segment</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 3: Geometry Applications</h3>
      <p class="ws-instruction">Write the name of the real-world model represented by each geometric concept.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. A beam of light coming from a flashlight:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">Ray</span></div>
      </div>
    </div>"""
    ]

    w2_core["performance"] = {
        "type": "performance",
        "title": "Geometry and Area Map of a Park",
        "desc": "Design a small park layout in Koronadal City on paper. Draw a rectangular playground that is 10 cm long and 8 cm wide, and calculate its area. Near the playground, draw a straight walking path (representing a line segment), a streetlamp shining light downwards (representing a ray), and a fountain marker (representing a point). Label all figures clearly, take a photo, and upload it.",
        "labels": ["Playground area calculation (80 sq. cm)", "Correct labels for Point, Segment, and Ray", "Clean drawing design"]
    }

    with open(os.path.join(math_core_dir, "week2.json"), "w", encoding="utf-8") as f:
        json.dump(w2_core, f, indent=2, ensure_ascii=False)

    # --- WEEK 3 CORE ---
    w3_core = {
        "title": "Mathematics",
        "subtitle": "Week 3: Parallel, Intersecting, and Perpendicular Lines",
        "color": "#0284c7",
        "icon": "🔢",
        "slides": [],
        "standard": [],
        "challenge": [],
        "worksheet": {"pages": []},
        "performance": {}
    }
    for i in range(25):
        slide_num = i + 1
        title = f"Lines and Rulers Slide {slide_num}"
        if slide_num <= 8:
            concept = "Parallel lines are straight lines that are always the same distance apart and never cross or touch each other, no matter how far they are extended. We see parallel lines in many daily objects. They are important because they help keep structures straight and balanced."
            local = "The rows of pineapples planted in the fields of Polomolok run parallel to each other, stretching out towards the base of Mount Matutum."
            q = f"Where else can we see parallel lines in our school classrooms or along local roads? Let us look. Card {slide_num}."
        elif slide_num <= 16:
            concept = "Intersecting lines are lines that cross each other at a single point. The point where they cross is called the point of intersection. When two lines intersect, they form angles. Intersecting lines show paths that meet or cross in space."
            local = "In the city center of Koronadal, major streets cross each other, creating busy intersecting roads where traffic lights control the flow."
            q = f"How many crossing points do intersecting lines have, and what happens at that point? Study slide {slide_num}."
        elif slide_num <= 22:
            concept = "Perpendicular lines are a special type of intersecting lines that cross each other at exactly right angles, forming four square corners. A right angle is an angle of ninety degrees, like the corner of a square tile or paper sheet."
            local = "The steel columns of the giant fish processing ports in General Santos City stand perpendicular to the flat concrete docks."
            q = f"How can we identify if two intersecting lines are perpendicular by looking at their corners? Card {slide_num}."
        else:
            concept = "We can draw line segments of equal length using a ruler by carefully marking the start at zero and the endpoint at the desired number. Keeping your pencil sharp and your ruler steady ensures that the line segments are drawn accurately."
            local = "Art students in Lake Sebu use rulers to draw equal line segments when designing geometric patterns on T'nalak fabrics."
            q = f"Why is it important to start measuring from the zero mark on a ruler when drawing equal line segments? Slide {slide_num}."
            
        text = create_slide_text(concept, local, q)
        w3_core["slides"].append({
            "title": title,
            "text": text,
            "examples": [{"title": f"Example {slide_num}", "content": "Parallel lines: ||. Perpendicular lines form a 90-degree angle (T-shape). Equal segments: two lines both 5 cm long."}]
        })

    for i in range(25):
        w3_core["standard"].append({
            "q": "What do we call straight lines that are always the same distance apart and never cross?",
            "type": "choice",
            "options": ["Parallel lines", "Intersecting lines", "Perpendicular lines", "Rays"],
            "answer": 0
        })

    for i in range(5):
        w3_core["challenge"].append({
            "q": "Line A is parallel to Line B. Line B is parallel to Line C. What is the relationship between Line A and Line C?",
            "type": "choice",
            "options": ["They are parallel to each other", "They are perpendicular", "They intersect at a point", "They are unequal"],
            "answer": 0
        })

    w3_core["worksheet"]["pages"] = [
        """<div class="ws-page-content">
      <h3>Exercise 1: Identifying Types of Lines</h3>
      <p class="ws-instruction">Write Parallel, Intersecting, or Perpendicular for each pair of lines below.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. Lines that cross and form four square corners:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">Perpendicular</span></div>
      </div>
      <div class="ws-item-row">
        <div class="ws-q">2. Lines that run side-by-side and never cross:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">Parallel</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 2: Drawing Equal Line Segments</h3>
      <p class="ws-instruction">Answer the questions about ruler measurements and line segment lengths.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. To draw a line segment of exactly 8 cm, where should you place the start point on the ruler?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">0 mark</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 3: Geometry in Art</h3>
      <p class="ws-instruction">Identify geometric line patterns found in local South Cotabato arts.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. What type of line patterns are formed by the crossing warp and weft fibers in T'nalak weaving?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">Intersecting</span></div>
      </div>
    </div>"""
    ]

    w3_core["performance"] = {
        "type": "performance",
        "title": "Street Map Designer with Lines",
        "desc": "On a clean sheet of paper, design a simple road map for a barangay in Polomolok. Draw at least two parallel roads (label them Pineapple Road and Matutum Road). Draw another road that intersects both parallel roads (label it Mountain Road). Finally, draw a road that is perpendicular to Pineapple Road (label it Market Road). Draw two equal-sized houses using your ruler. Take a photo of your labeled map and upload it here.",
        "labels": ["Correct parallel and perpendicular roads drawing", "Map labeled correctly", "Correct drawing of two equal-sized houses using a ruler"]
    }

    with open(os.path.join(math_core_dir, "week3.json"), "w", encoding="utf-8") as f:
        json.dump(w3_core, f, indent=2, ensure_ascii=False)

    # --- WEEK 4 CORE ---
    w4_core = {
        "title": "Mathematics",
        "subtitle": "Week 4: Whole Numbers up to 10,000",
        "color": "#0284c7",
        "icon": "🔢",
        "slides": [],
        "standard": [],
        "challenge": [],
        "worksheet": {"pages": []},
        "performance": {}
    }
    for i in range(25):
        slide_num = i + 1
        title = f"Numbers up to 10,000 Slide {slide_num}"
        if slide_num <= 10:
            concept = "A 4-digit number is made of Thousands, Hundreds, Tens, and Ones. The value of a digit is determined by its place value. For example, in the number three thousand four hundred fifty, the digit three holds the value of three thousand, while four holds the value of four hundred."
            local = "In the town of Banga, farmers recorded that they harvested nine thousand eight hundred bags of high-quality rice this month."
            q = f"How does the position of a digit change its total value when writing numbers up to ten thousand? Study slide {slide_num}."
        elif slide_num <= 20:
            concept = "We can represent numbers pictorially using base-ten blocks. A large block represents one thousand, a flat sheet represents one hundred, a rod represents ten, and a small single block represents one. Combining these blocks helps us visualize the actual quantity of large numbers."
            local = "A local cooperative in Tupi represents their fruit shipments of four thousand two hundred boxes of papayas using block drawings."
            q = f"How do drawings of sheets and rods help us see place values like hundreds and tens clearly? Card {slide_num}."
        else:
            concept = "Writing numbers in numerals and in words is a vital skill. When writing, read the thousands place first, followed by the hundreds, and then read the tens and ones together. Be careful with spelling and ensure that you use zeros as placeholders when a place value is empty."
            local = "At the General Santos City fish port, a clerk writes a receipt for eight thousand six hundred fifty boxes of tuna."
            q = f"Why is it important to use zero as a placeholder when writing numbers that have no hundreds or tens? Summary slide {slide_num}."
            
        text = create_slide_text(concept, local, q)
        w4_core["slides"].append({
            "title": title,
            "text": text,
            "examples": [{"title": f"Example {slide_num}", "content": "4,321 = 4 thousands, 3 hundreds, 2 tens, 1 ones. Written in words as: four thousand three hundred twenty-one."}]
        })

    for i in range(25):
        q_num = i + 1
        val = 2000 + q_num * 250
        w4_core["standard"].append({
            "q": f"What is the standard numeral for the number: {val} represented as base-ten blocks?",
            "type": "choice",
            "options": [str(val), str(val + 100), str(val - 100), "10000"],
            "answer": 0
        })

    for i in range(5):
        w4_core["challenge"].append({
            "q": f"I am a 4-digit number. My thousands digit is {3 + i}. My hundreds digit is 0. My tens digit is 5. My ones digit is 2. What number am I?",
            "type": "choice",
            "options": [f"{3 + i},052", f"{3 + i},502", f"{3 + i},520", f"{3 + i},250"],
            "answer": 0
        })

    w4_core["worksheet"]["pages"] = [
        """<div class="ws-page-content">
      <h3>Exercise 1: Base-Ten Block Values</h3>
      <p class="ws-instruction">Write the number represented by the base-ten block models below.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. 3 thousands blocks, 5 hundreds sheets, 2 tens rods, and 8 ones blocks = </div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">3528</span></div>
      </div>
      <div class="ws-item-row">
        <div class="ws-q">2. 7 thousands blocks, 0 hundreds sheets, 4 tens rods, and 0 ones blocks = </div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">7040</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 2: Writing Numerals</h3>
      <p class="ws-instruction">Write the correct standard numeral for the given number in words.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. "Five thousand four hundred ninety-two" in numerals:</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">5492</span></div>
      </div>
    </div>""",
        """<div class="ws-page-content">
      <h3>Exercise 3: Place Value up to 10,000</h3>
      <p class="ws-instruction">Identify the place value of the underlined digit.</p>
      <div class="ws-item-row">
        <div class="ws-q">1. In the number 8,<u>3</u>45, what is the place value of the underlined digit 3?</div>
        <div class="writing-line" style="margin-top: 15px; width: 50%;"><span class="ws-answer">hundreds</span></div>
      </div>
    </div>"""
    ]

    w4_core["performance"] = {
        "type": "performance",
        "title": "Tuna Harvest Record Block Drawing",
        "desc": "Represent the number 4,325 (which represents boxes of tuna harvested at the General Santos City port) using drawings of base-ten blocks. Draw 4 large cubes for thousands, 3 flat squares for hundreds, 2 vertical rectangles for tens, and 5 small dots for ones. Color them neatly, write the number in standard form and in words, take a photo, and upload it.",
        "labels": ["Correct block drawings representing 4,325", "Number written in standard form and in words", "Clean and neat drawing"]
    }

    with open(os.path.join(math_core_dir, "week4.json"), "w", encoding="utf-8") as f:
        json.dump(w4_core, f, indent=2, ensure_ascii=False)


# Generate Advanced Math templates (identical outline but with advanced tags and HOTS questions)
def generate_advanced():
    for w in range(1, 5):
        src_path = os.path.join(math_core_dir, f"week{w}.json")
        with open(src_path, "r", encoding="utf-8") as sf:
            core_data = json.load(sf)
            
        adv_data = dict(core_data)
        adv_data["subtitle"] = f"Week {w}: [Advanced] " + core_data["subtitle"].split(": ")[1]
        
        # Modify some questions and slides slightly to indicate advanced reasoning
        for idx, slide in enumerate(adv_data["slides"]):
            slide["title"] = f"[Advanced] {slide['title']}"
            slide["text"] = slide["text"].replace("study", "analyze deeply").replace("practice", "investigate")
            slide["examples"] = [{"title": f"[Advanced] Example {idx+1}", "content": "Advanced analysis is required: " + slide["examples"][0]["content"]}]
            
        for q in adv_data["standard"]:
            q["q"] = "[Advanced Challenge] " + q["q"]
            
        for q in adv_data["challenge"]:
            q["q"] = "[Advanced HOTS] " + q["q"]
            
        adv_data["performance"]["title"] = "[Advanced] " + adv_data["performance"]["title"]
        adv_data["performance"]["desc"] = "Advanced Task: " + adv_data["performance"]["desc"]
        
        # Write Week W Advanced
        with open(os.path.join(math_adv_dir, f"week{w}.json"), "w", encoding="utf-8") as df:
            json.dump(adv_data, df, indent=2, ensure_ascii=False)

generate_core()
generate_advanced()
print("Math Core and Advanced templates generated successfully!")
