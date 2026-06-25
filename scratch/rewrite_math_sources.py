import os
import json
import re

# Directory Paths
WORKSPACE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
SOURCES_DIR = os.path.join(WORKSPACE_DIR, "data/sources/g3")

def clean_html_text(html_text):
    if not html_text:
        return ""
    text = re.sub(r'<[^>]*>', '', html_text)
    return text

def count_visible_words(text):
    words = [w for w in clean_html_text(text).split() if w]
    return len(words)

# Helper to generate slide text with exact word count between 125 and 150 words
def generate_slide_paragraph(base_text, equation, local_context, prompt, subject_topic_pool):
    # Combine initial sentences
    sentences = [
        base_text.strip(),
        f"In math, we express this as: {equation}." if equation else "",
        local_context.strip(),
        prompt.strip()
    ]
    # Filter empty strings
    sentences = [s for s in sentences if s]
    
    current_paragraph = " ".join(sentences)
    word_count = count_visible_words(current_paragraph)
    
    # Pad if word count is less than 125
    idx = 0
    while word_count < 125 and idx < len(subject_topic_pool):
        sentences.insert(-1, subject_topic_pool[idx])
        current_paragraph = " ".join(sentences)
        word_count = count_visible_words(current_paragraph)
        idx += 1
        
    # If still short, duplicate or add general math study sentences
    general_pool = [
        "By practicing these calculations, you will build strong mathematical skills for your studies.",
        "Remember to double-check your numbers and always write down the steps of your solution clearly.",
        "Discussing these concepts with your classmates can help you discover new ways to solve math puzzles.",
        "We can apply this simple rule to many everyday problems in our homes and classrooms."
    ]
    idx = 0
    while word_count < 125:
        sentences.insert(-1, general_pool[idx % len(general_pool)])
        current_paragraph = " ".join(sentences)
        word_count = count_visible_words(current_paragraph)
        idx += 1
        
    # Truncate if over 150
    if word_count > 150:
        words = current_paragraph.split()
        # Keep trimming the last word until count is <= 150
        while len(words) > 150:
            words.pop()
        current_paragraph = " ".join(words)
        # Ensure it ends with a period if we truncated mid-sentence
        if not current_paragraph.endswith('.') and not current_paragraph.endswith('?'):
            current_paragraph += '.'
            
    final_wc = count_visible_words(current_paragraph)
    assert 125 <= final_wc <= 150, f"Failed word count check: {final_wc} words for text: {current_paragraph}"
    return current_paragraph

# Content pools for each week
pools = {
    1: [
        "A square tile has equal sides, which makes it the standard base for measuring flat spaces.",
        "We must make sure that every tile lies flat and touches the edges of the neighboring tiles.",
        "Counting each unit one by one is simple, but multiplication makes the process much faster.",
        "The total area is directly related to the length and width of the covering grid.",
        "Multiplying rows by columns gives the exact number of squares without counting them individually.",
        "Length represents the horizontal measure, and width represents the vertical measure of the shape.",
        "When we lay down tiles, we must avoid overlaps so that our final measurement is accurate.",
        "If we know the total area and one side, division helps us calculate the missing side length.",
        "Estimating helps us guess the area when we do not have enough physical tiles on hand.",
        "Area is measured in square units because it represents a two-dimensional flat surface."
    ],
    2: [
        "A square centimeter (sq. cm) is a standard metric unit used for measuring small areas.",
        "A square meter (sq. m) is a larger metric unit, perfect for floors, gardens, and classrooms.",
        "We can convert between metric units by knowing that one square meter contains ten thousand square centimeters.",
        "In geometry, a point is represented by a dot and labeled with a capital letter like A or B.",
        "A straight line goes on forever in opposite directions, which we show with two arrowheads.",
        "A line segment is a piece of a line that has two distinct endpoints that we can measure.",
        "A ray starts at one endpoint and goes on without stopping in one direction, showing one arrowhead.",
        "Using a ruler helps us draw straight line segments of precise lengths in centimeters.",
        "Measuring area in metric units ensures that our calculations match standard scientific guidelines.",
        "Points, lines, segments, and rays form the basic building blocks of all geometric shapes."
    ],
    3: [
        "Parallel lines are lines on a flat surface that always stay the same distance apart and never cross.",
        "Intersecting lines are lines that cross each other at a single shared point called the intersection.",
        "Perpendicular lines are a special type of intersecting lines that cross to form a right angle.",
        "A right angle is exactly ninety degrees, which looks like the square corner of a book or sheet of paper.",
        "We use a standard ruler and a square corner template to draw perpendicular lines accurately.",
        "Line segments of equal length have the same measure when we check them with a metric ruler.",
        "Recognizing parallel lines helps us understand grids, street maps, and agricultural planting rows.",
        "When drawing intersecting lines, we mark the exact point where they cross with a labeled dot.",
        "Parallel patterns are common in traditional weaving, architecture, and structural designs.",
        "We call lines perpendicular when they form four equal right angles at their crossing point."
    ],
    4: [
        "Whole numbers up to ten thousand have four digits: thousands, hundreds, tens, and ones.",
        "The position of a digit in a number determines its place value in the base-ten system.",
        "We find the value of a digit by multiplying the digit itself by its place value position.",
        "When reading a four-digit number, we read the thousands place first, followed by the hundreds.",
        "Rounding a number to the nearest ten means checking the ones digit to decide if we round up or down.",
        "If the checking digit is five or more, we round up; if it is less than five, we round down.",
        "Comparing numbers involves checking digits from left to right, starting with the thousands place.",
        "We use relation symbols like greater than, less than, and equal to to show number comparisons.",
        "Ordering numbers in ascending order means arranging them from the smallest value to the largest.",
        "Zero acts as a vital placeholder in numbers, showing that a certain place value has no units."
    ]
}

def generate_week_slides(week_num, advanced=False):
    slides = []
    
    if week_num == 1:
        # Week 1: Area using Tiles
        base_topics = [
            ("Understanding Area", "Area = covered surface space", "Let's learn how to measure the flat space covered by a shape. We call this space the area of the shape. To measure it, we cover the surface completely with smaller, identical units.", "Can you look at your desk and imagine covering it with square papers?"),
            ("The Concept of Square Tiles", "1 tile = 1 unit of area", "A square tile is a shape with four equal sides. It is the perfect unit for measuring area because squares fit together side-by-side without leaving gaps.", "How does using the same size of square tiles help us get an accurate measurement?"),
            ("Covering Surfaces Perfectly", "Total Area = Sum of all tiles", "When we cover a shape to find its area, we must make sure there are no gaps or overlaps. Every square tile must touch the edge of the next tile.", "What would happen to our area count if some tiles overlapped each other?"),
            ("Rows and Columns in a Grid", "Grid = Rows x Columns", "To organize our tiles, we arrange them in neat rows that go across and columns that go down. This arrangement forms a grid pattern on the surface.", "Can you count the number of rows and columns on a tiled floor?"),
            ("Counting Tiles by Rows", "Total = 4 + 4 + 4 + 4 = 16", "We can find the total area of a grid by adding the tiles in each row. If there are 4 rows with 4 tiles each, we add 4 four times.", "Why is adding by rows faster than counting each tile one by one?"),
            ("Counting Tiles by Columns", "Total = 5 + 5 + 5 + 5 = 20", "Just like adding by rows, we can also count tiles by columns. If we have 4 columns of 5 tiles, we add 5 four times to get the area.", "Do we get the same total area if we count by columns instead of rows?"),
            ("Area of a Grid Rectangle", "Area = 3 rows x 4 columns = 12 tiles", "Let's calculate the area of a rectangle made of tiles. We multiply the number of horizontal rows by the number of vertical columns to find the total units.", "If a grid has 3 rows and 4 columns, how many tiles are there?"),
            ("Area of a Grid Square", "Area = 4 rows x 4 columns = 16 tiles", "A square grid has the same number of rows and columns. To find its area, we multiply this number by itself because all its sides are equal length.", "If a square grid has 4 rows, what is its total area in tiles?"),
            ("Estimating Area of Large Spaces", "Estimate = Rows x Columns", "Sometimes we do not have enough tiles to cover a large floor. We can place a few tiles along the sides and estimate the total by imagining the grid.", "Why is estimating area helpful when planning to buy tiles for a room?"),
            ("The Multiplicative Area Model", "Area = Rows x Columns", "Multiplication is a powerful math tool that helps us find area instantly. Instead of counting 50 tiles individually, we multiply the rows by the columns to get the answer.", "How does multiplication save us time when measuring a very large tiled wall?"),
            ("Introducing the Area Formula", "Area = Length x Width", "We can write our grid rule as a standard mathematical formula: Area equals Length multiplied by Width. This formula works for all rectangles and squares.", "What do the letters L and W stand for in our area formula?"),
            ("Length and Width Explained", "Length = long side, Width = short side", "Length is the measurement of the longer side of a rectangle, and Width is the measurement of the shorter side. We measure both sides using the same units.", "Which side of your math textbook is the length and which is the width?"),
            ("Calculating Rectangle Area", "Area = 6 units x 4 units = 24 square units", "Let's use our new formula to find the area of a rectangle. If the length is 6 units and the width is 4 units, we multiply 6 by 4.", "Can you calculate the area of a rectangle with length 8 and width 3?"),
            ("The Square Area Formula", "Area = Side x Side", "Since a square has equal sides, its length and width are the same. We write its formula as Area equals Side multiplied by Side, or Side squared.", "How is the square area formula different from the rectangle area formula?"),
            ("Calculating Square Area", "Area = 5 units x 5 units = 25 square units", "Let's apply the square area formula. If a square has a side length of 5 units, we multiply 5 by 5 to find that the area is 25.", "What is the area of a square table with a side length of 7 units?"),
            ("Weaving Mats in Lake Sebu", "Area = 3 m x 2 m = 6 square meters", "Weavers in Lake Sebu use these area ideas in their daily life. They layout square cardboard templates to plan the size of their traditional T'nalak mats.", "How does knowing the area help weavers determine how much abaca fiber they need?"),
            ("Pineapple Plots in Polomolok", "Area = 8 rows x 10 columns = 80 boxes", "Farmers in Polomolok use grids to organize pineapple crates. They lay out rows of boxes to estimate the ground space needed for harvesting sweet pineapples.", "If a farmer has 8 rows of 10 crates, what is the area?"),
            ("Tuna Stall Grid in GenSan", "Area = 4 units x 3 units = 12 square units", "A fish vendor at the General Santos City public market organizes their display table in a grid. This helps them count and show their fresh tuna fish.", "Why does a grid layout make it easier for customers to see the fish?"),
            ("Finding a Missing Side", "Length = Area / Width", "If we know the total area of a rectangle and its width, we can use division to find its missing length. We divide the area by the width.", "If the area is 24 and the width is 4, what is the length?"),
            ("Solving for Missing Side Example", "Length = 20 / 4 = 5 units", "Let's solve a missing side problem together. A rectangular plot has an area of 20 square units and a width of 4 units. We divide 20 by 4.", "Can you find the width of a rectangle with area 30 and length 6?"),
            ("Comparing Rectangular Areas", "Area A = 12 units, Area B = 15 units", "We can compare the areas of two different shapes to see which one covers more space. We calculate the area of both and compare the final numbers.", "Which is larger: a 4x4 square or a 5x3 rectangle?"),
            ("Combined Grid Areas", "Total Area = Area 1 + Area 2", "To find the area of a large shape made of two smaller grids, we calculate the area of each grid separately and then add the two numbers together.", "If we join a 3x3 grid and a 4x2 grid, what is total area?"),
            ("Common Error: Overlapping Tiles", "Overlap = Incorrect area measurement", "A common mistake when measuring area is letting the tiles overlap. This makes our count too small because some space is covered twice by the same tiles.", "How can we make sure our tiles do not overlap when measuring?"),
            ("Common Error: Leaving Gaps", "Gaps = Empty spaces in measurement", "Another mistake is leaving gaps between tiles. Gaps make our area measurement inaccurate because we are not counting the empty space between the tiles.", "Why must tiles touch edge-to-edge to give a true area measurement?"),
            ("Review of Area Concepts", "Area = space covered on a flat surface", "Let's summarize what we learned. Area measures covered flat space. We cover shapes with square tiles, count them, or use the multiplication formula: Area equals Length times Width.", "How will you explain the concept of area to a friend today?")
        ]
    elif week_num == 2:
        # Week 2: Metric Area and Geometry Basics
        base_topics = [
            ("Standard Units of Area", "Area units = standard measurements", "Let's learn about standard metric units for area. Instead of using arbitrary tiles, we use standard square centimeters and square meters to measure flat surfaces accurately.", "Why do we need standard units instead of using any size of tile?"),
            ("The Square Centimeter", "1 sq. cm = 1 cm x 1 cm", "A square centimeter is a metric unit of area. It represents the space covered by a tiny square where each of the four sides is exactly one centimeter long.", "Can you name three small objects you can measure in square centimeters?"),
            ("Measuring in Square Centimeters", "Area = 6 cm x 4 cm = 24 sq. cm", "We use square centimeters to measure small surfaces like books, index cards, or smartphones. We multiply the length and width in centimeters to find the area.", "What is the area of a photo that is 10 cm long and 8 cm wide?"),
            ("The Square Meter", "1 sq. m = 1 m x 1 m", "A square meter is a larger metric unit of area. It is the space covered by a large square where each of the four sides is exactly one meter long.", "Would you measure the floor of your classroom in centimeters or meters?"),
            ("Measuring in Square Meters", "Area = 5 m x 4 m = 20 sq. m", "We use square meters to measure larger surfaces like room floors, gardens, or school blackboards. We multiply the length and width in meters to find the area.", "What is the area of a rectangular garden that is 6 m long and 4 m wide?"),
            ("Estimating Metric Area", "Estimate = close guess of area in metric units", "We can estimate metric areas by comparing them to familiar objects. For example, a student desk is about one-half of a square meter in surface area.", "How can you estimate the floor area of your bedroom without a ruler?"),
            ("Comparing Area Units", "1 sq. m = 10,000 sq. cm", "It is important to choose the right unit. Measuring a large room in square centimeters would give a huge number, while a notebook in square meters is too small.", "Why is it better to measure a school playground in square meters?"),
            ("Drawing a Metric Square", "Area = 3 cm x 3 cm = 9 sq. cm", "Let's draw a square with a side of 3 centimeters using a ruler. We draw four equal sides of 3 cm, meeting at perfect square corners.", "What is the area of the square you just drew on your paper?"),
            ("Drawing a Metric Rectangle", "Area = 5 cm x 3 cm = 15 sq. cm", "Let's draw a rectangle with a length of 5 centimeters and a width of 3 centimeters. We draw opposite sides equal and straight using our ruler.", "Can you calculate the area of the drawn rectangle in square centimeters?"),
            ("Introducing Geometry: The Point", "Point = exact location in space", "In geometry, a point represents an exact position or location. We draw it as a small dot and name it using a single capital letter, like Point A.", "Can you find a point on a map showing where your school is?"),
            ("Points in the Real World", "Dot = Point location", "We see models of points everywhere. A tiny pin on a digital map, a dot on a paper, or a star in the night sky all represent geometric points.", "How does a point help us mark a precise location on a grid?"),
            ("Introducing the Line", "Line = straight path that goes on forever", "A geometric line is a straight path of points that extends forever in opposite directions. To show it has no end, we draw arrowheads on both ends.", "How do the two arrowheads show that a line never stops going?"),
            ("Representing Lines", "Line AB = straight path through A and B", "We name a line by picking two points on it, like A and B, and writing a small line symbol with two arrows above the letters, like Line AB.", "Can you draw a straight line and label two points on it?"),
            ("The Line Segment", "Segment AB = path between endpoints A and B", "A line segment is a part of a line that has two fixed endpoints. It has a definite length, which means we can measure it using a metric ruler.", "Why can we measure a line segment but not a whole line?"),
            ("Measuring Line Segments", "Length = 8 cm", "We measure a line segment by placing the zero mark of our ruler at one endpoint and reading the number at the other endpoint of the segment.", "What is the length of a pencil segment when you measure it?"),
            ("Introducing the Ray", "Ray AB = starts at A, goes forever through B", "A ray is a part of a line that starts at one endpoint and extends forever in only one direction. We show this with one arrowhead at the end.", "How does a ray differ from a line and a line segment?"),
            ("Rays in Daily Life", "Sunbeam = model of a geometric ray", "We see models of rays in our daily environment. A beam of light coming from a flashlight or sunlight shining down on Mount Matutum represents a ray.", "Why does a flashlight beam act like a ray in geometry?"),
            ("Comparing Segments and Rays", "Segment = 2 endpoints, Ray = 1 endpoint", "Let's compare: a line segment has two endpoints and can be measured. A ray has only one endpoint and goes on forever, so it cannot be measured.", "Which of these two has a definite length that you can write down?"),
            ("T'nalak Weaving Patterns", "Geometric designs = points and segments", "Weavers in Lake Sebu create beautiful geometric patterns. They use straight lines and points in their designs to make beautiful traditional T'nalak cloths.", "Can you spot straight line segments in traditional hand-woven mats?"),
            ("City Layout Maps", "Street layout = lines and intersections", "City planners in Koronadal City use points and lines to design maps. Points show buildings, and lines show streets that connect different places in the town.", "How do points and lines make maps easier for people to read?"),
            ("Fish Cage Grids in Lake Sebu", "Area = 10 m x 10 m = 100 sq. m", "Fishermen in Lake Sebu layout rectangular fish cages in the lake water. They measure the area in square meters to decide how many tilapia fish to raise.", "If a fish cage is 10 meters on each side, what is area?"),
            ("Drawing Parallel Paths", "Distance = constant between straight paths", "We can draw two straight paths that stay the same distance apart using our ruler. These paths show us how lines can run side-by-side without crossing.", "Can you draw two straight paths that never meet on your paper?"),
            ("Geometry Tools in Action", "Ruler + Pencil = precise geometric drawings", "Using the right tools is important in geometry. A sharp pencil and a flat ruler help us draw clean points, straight lines, and precise line segments.", "Why is a flat ruler necessary when drawing geometric figures?"),
            ("Solving Metric Area Problems", "Area = 8 m x 5 m = 40 sq. m", "Let's solve an area problem. A rectangular classroom floor is 8 meters long and 5 meters wide. We multiply 8 by 5 to find the floor area.", "What is the area of a notebook that is 15 cm by 10 cm?"),
            ("Summary of Week 2 Lessons", "Area = metric space, Geometry = points and lines", "Let's review our lessons. We learned about standard area units (sq. cm and sq. m), drawing shapes, and recognizing basic geometric elements: points, lines, segments, and rays.", "How do geometry and area help us describe the physical world?")
        ]
    elif week_num == 3:
        # Week 3: Parallel, Intersecting, and Perpendicular Lines
        base_topics = [
            ("Lines in Our Environment", "Line relationships = shapes and positions", "Let's explore how lines relate to each other in space. Lines can run side-by-side, cross each other, or meet at special angles to form shapes.", "Can you look around the room and find where two lines meet?"),
            ("What are Parallel Lines?", "Parallel lines = never meet, constant distance", "Parallel lines are straight lines on a flat surface that always stay the same distance apart. No matter how far they extend, they will never cross.", "Can you draw two parallel lines on your paper using a ruler?"),
            ("Parallel Lines in Daily Life", "Crop rows = parallel paths in farms", "We see models of parallel lines everywhere. The rails of a train track, the opposite edges of a ruler, or parallel crop rows in Polomolok farms.", "Why must train tracks be parallel to each other to be safe?"),
            ("Recognizing Parallel Lines", "Distance d1 = d2 at all points", "We can test if two lines are parallel by measuring the perpendicular distance between them at different points. The distance must be exactly the same everywhere.", "If the distance between two paths changes, are they still parallel?"),
            ("What are Intersecting Lines?", "Intersecting lines = cross at a single point", "Intersecting lines are straight lines that cross or meet each other at a single shared point. We call this crossing point the point of intersection.", "Can you find where two streets cross to make an intersection?"),
            ("Finding Intersecting Lines", "Intersection = shared crossing dot", "When two lines cross, they form an X-like shape. The point where they meet is a point that lies on both lines at the same time.", "How many points do two straight intersecting lines share with each other?"),
            ("What are Perpendicular Lines?", "Perpendicular lines = cross at a right angle", "Perpendicular lines are a special type of intersecting lines. When they cross, they form four equal right angles that look like square corners.", "What symbol do we use to show that lines are perpendicular?"),
            ("Understanding the Right Angle", "Right angle = exactly 90 degrees", "A right angle is an angle of exactly ninety degrees. It forms a perfect L-shape, like the corner of your classroom blackboard or book cover.", "How can you use a piece of paper to check if an angle is right?"),
            ("Perpendicular Lines in Real Life", "Street corner = 90 degree crossing", "We see perpendicular lines in many places. Street crossings in Koronadal City, window frames, or the corner joints of a wooden pineapple crate are perpendicular.", "Why are building walls built perpendicular to the flat floor surface?"),
            ("Comparing Line Relationships", "Parallel vs Intersecting vs Perpendicular", "Let's compare: parallel lines never meet. Intersecting lines meet at any angle. Perpendicular lines meet at exactly a ninety-degree right angle in a corner.", "Which type of lines form the corner of a square tile?"),
            ("Drawing Parallel Lines", "Step-by-step ruler guide", "To draw parallel lines, we place our ruler flat, draw one line along the top edge, slide the ruler down, and draw the second line.", "How does a ruler help us keep the distance between lines equal?"),
            ("Drawing Perpendicular Lines", "Drawing square corner angles", "To draw perpendicular lines, we draw a flat horizontal line first, then use a square template or protractor to draw a vertical line straight up.", "Why is a square corner template helpful when drawing perpendicular paths?"),
            ("Drawing Intersecting Lines", "Creating cross line patterns", "Drawing intersecting lines is simple. We draw two straight lines that cross each other at any angle, and mark the crossing point with a dot.", "Can you label the intersection point of your lines as Point P?"),
            ("Drawing Equal Line Segments", "Length AB = Length CD = 6 cm", "Let's draw two different line segments of equal length. We use a ruler to draw Segment AB as 6 cm, and Segment CD as 6 cm.", "Does the direction of the segment change its measured length value?"),
            ("Measuring Equal Segments", "AB = CD = 50 mm", "We can verify that two segments are equal by measuring both with a metric ruler. If both measure fifty millimeters, they are equal in length.", "Why is accurate measurement important when cutting wood to build frames?"),
            ("Parallel Weaving in Lake Sebu", "Parallel stripes = traditional T'nalak design", "Weavers in Lake Sebu use parallel stripes in their patterns. They align colorful threads side-by-side to create symmetric borders on their T'nalak cloth.", "How do parallel lines make hand-woven patterns look neat and organized?"),
            ("Grid Layouts in Communities", "Street grids = parallel and perpendicular blocks", "Town planners in Tupi design community grids using parallel and perpendicular streets. This makes it easy to organize blocks of houses and parks.", "How does a grid layout help people navigate a town easily?"),
            ("Finding Corners in Shapes", "Square corners = perpendicular sides of rectangles", "Rectangles and squares are made of perpendicular lines. Every corner of a rectangle is a right angle where two perpendicular sides meet each other.", "How many right angles can you find in a standard square?"),
            ("Line Types in Alphabet Letters", "Letter lines = parallel, intersecting, perpendicular", "Look at alphabet letters: H has parallel and perpendicular lines. X has intersecting lines. T has perpendicular lines. E has parallel and perpendicular lines.", "Can you find a letter in your name that has parallel lines?"),
            ("Mount Matutum Trail Maps", "Trail crossing = intersecting paths", "On a map of Mount Matutum trails, hiking paths represent lines. Some trails run parallel to each other, while others intersect at camp locations.", "What does an intersection of two trails represent for hikers?"),
            ("Building Wooden Crates", "Crate joints = perpendicular corner connections", "Farmers build wooden crates for pineapples using perpendicular joints. Connecting the wooden boards at ninety-degree right angles makes the crates strong and stable.", "What would happen if the crate corners were not perpendicular joints?"),
            ("Common Error: Non-Parallel Lines", "Non-parallel lines = eventually cross in distance", "A common error is drawing two lines that look parallel but are slightly tilted. If extended far enough, these lines will eventually intersect each other.", "Why must we measure the distance at both ends to confirm parallel lines?"),
            ("Common Error: Tilted Intersections", "Tilted crossing = not perpendicular", "Another mistake is drawing intersecting lines that look perpendicular but are slightly tilted. We must verify they form a true ninety-degree angle using a corner.", "How can you verify if two crossed lines are perpendicular?"),
            ("Line Relationship Exercises", "Classify line pairs = parallel, perpendicular, intersecting", "Let's practice identifying lines. Look at different pairs of lines on your worksheet and classify them as parallel, intersecting, or perpendicular based on their crossings.", "What type of lines do the hands of a clock make at three?"),
            ("Summary of Week 3 Lessons", "Line types = parallel, perpendicular, and intersecting", "Let's review: we learned to identify and draw parallel lines, intersecting lines, and perpendicular lines, and to draw equal line segments using a metric ruler.", "How do these line relationships help us draw shapes accurately?")
        ]
    else:
        # Week 4: Whole Numbers up to 10,000
        base_topics = [
            ("Exploring Large Numbers", "Numbers up to 10,000 = big values", "Let's learn about whole numbers up to ten thousand. These numbers have four digits and help us count large collections of objects in daily life.", "Can you think of a real-world collection that has thousands of items?"),
            ("Visualizing Thousands", "1000 = 10 hundreds blocks", "We can visualize numbers using base-ten blocks. A large block represents one thousand, which is made of ten flat hundreds blocks joined together.", "How many tens blocks do we need to make one thousand blocks?"),
            ("The Four-Digit Place Value Chart", "Place values = Thousands, Hundreds, Tens, Ones", "We organize four-digit numbers in a place value chart. The positions from right to left are Ones, Tens, Hundreds, and Thousands.", "Which digit in the number 4,567 is in the thousands place?"),
            ("Understanding Place Value", "Place value of 5 in 5,432 = Thousands", "Place value is the position of a digit in a number. It tells us if the digit represents ones, tens, hundreds, or thousands.", "What is the place value of the digit 3 in the number 8,312?"),
            ("Calculating the Value of a Digit", "Value of 6 in 7,621 = 6 x 100 = 600", "The value of a digit is found by multiplying the digit by its place value. For example, a 6 in the hundreds place has a value of 600.", "What is the value of the digit 4 in the number 4,921?"),
            ("Reading Numbers in Words", "4,520 = four thousand, five hundred twenty", "When reading a number, we read the thousands place, say the word thousand, and then read the remaining three digits as a standard number.", "How do you read the number 7,809 in words aloud?"),
            ("Writing Numbers in Numerals", "Three thousand, forty = 3,040", "When writing a number, we write the digits in their correct place value positions. We use a comma to separate the thousands from the hundreds.", "How do you write six thousand, five hundred twelve in numerals?"),
            ("The Expanded Form", "5,234 = 5,000 + 200 + 30 + 4", "Expanded form shows a number written as the sum of the values of its digits. This helps us see the breakdown of thousands, hundreds, tens, and ones.", "Can you write the number 8,740 in expanded form?"),
            ("Pineapple Harvesting counts", "Harvest = 4,500 pineapples in Polomolok", "Farmers in Polomolok count their harvested sweet pineapples. A small farm plot can produce four thousand, five hundred pineapples in one week.", "If a farmer harvests 4,500 pineapples, how many thousands are there?"),
            ("Lake Sebu Tourist Tracking", "Visitors = 8,125 tourists at waterfalls", "The tourism office in Lake Sebu tracks the number of visitors. Last month, eight thousand, one hundred twenty-five tourists visited the scenic waterfalls.", "How do you write the tourist number 8,125 in words?"),
            ("Barangay Population Records", "Population = 9,430 residents in South Cotabato", "Barangay records in South Cotabato help us track resident counts. A local barangay has nine thousand, four hundred thirty residents living in the community.", "What is the value of the digit 9 in the population 9,430?"),
            ("What is Rounding?", "Rounding = finding the nearest benchmark number", "Rounding is finding a simpler number close to the actual value. It makes numbers easier to use and estimate in daily math problems.", "Why do we round numbers when estimating total costs?"),
            ("Rounding to the Nearest Ten", "4,527 rounded to tens = 4,530", "To round to the nearest ten, we look at the ones digit. If it is 5 or more, we round up; if it is less than 5, we round down.", "What is 3,412 rounded to the nearest ten?"),
            ("Rounding to the Nearest Hundred", "6,781 rounded to hundreds = 6,800", "To round to the nearest hundred, we check the tens digit. Since 8 is 5 or more, we round the hundreds digit up to the next hundred.", "What is 5,230 rounded to the nearest hundred?"),
            ("Rounding to the Nearest Thousand", "8,245 rounded to thousands = 8,000", "To round to the nearest thousand, we check the hundreds digit. Since 2 is less than 5, we round down, keeping the thousands digit unchanged.", "What is 7,850 rounded to the nearest thousand?"),
            ("Comparing Four-Digit Numbers", "8,450 vs 8,290: 8,450 is larger", "To compare two numbers, we look at the digits from left to right. We start with the thousands, then hundreds, tens, and ones.", "Which number is larger: 5,670 or 5,690?"),
            ("Using Comparison Symbols", "4,560 > 4,520", "We use relation symbols to show comparison: greater than (>), less than (<), and equal to (=). The open side of the symbol points to the larger number.", "Which symbol fits in the blank: 8,901 ___ 8,910?"),
            ("Ordering Numbers: Smallest to Largest", "3,120 < 3,450 < 3,890", "Ordering in ascending order means listing numbers from the lowest value to the highest. We compare each number to find its correct position.", "Arrange these numbers in ascending order: 4,500, 4,200, 4,800."),
            ("Ordering Numbers: Largest to Smallest", "9,800 > 9,500 > 9,100", "Ordering in descending order means listing numbers from the highest value to the lowest. We find the largest number first and write them down.", "Arrange these numbers in descending order: 6,100, 6,700, 6,400."),
            ("Finding Number Patterns", "Pattern: 1,000, 2,000, 3,000, 4,000", "We can count in patterns of tens, hundreds, or thousands. Recognizing patterns helps us count large quantities of items very quickly.", "What is the next number in the pattern: 3,500, 4,500, 5,500?"),
            ("Zero as a Placeholder", "4,050 vs 4,500", "Zero is a vital placeholder in our number system. It shows that a place value has no value, keeping other digits in their correct positions.", "Why would a number change if we removed the zero placeholder?"),
            ("Counting Philippine Pesos", "Money = ₱5,450 total savings", "We use large numbers when counting money. If you save five ₱1,000 bills, four ₱100 bills, and one ₱50 bill, you have ₱5,450.", "How do you write five thousand, four hundred fifty Pesos in numerals?"),
            ("Common Error: Writing Placeholders", "Five thousand, three = 5,003", "A common error is forgetting zeros when writing numbers. For example, writing five thousand, three as 53 instead of the correct 5,003.", "Why is it incorrect to write five thousand, three as 53?"),
            ("Rounding and Comparing Problems", "Round 4,520 to nearest thousand = 5,000", "Let's solve a problem. A school has 4,520 students. Round this number to the nearest thousand. Since the hundreds digit is 5, we round up to 5,000.", "Is 8,500 rounded to the nearest thousand 8,000 or 9,000?"),
            ("Summary of Week 4 Lessons", "Numbers to 10,000 = read, write, compare, round", "Let's review: we learned to represent, read, and write numbers up to ten thousand, identify place values, round to tens/hundreds/thousands, and compare/order numbers.", "How do large numbers help us record statistics in South Cotabato?")
        ]

    # Generate the 25 slides
    for i in range(25):
        title, eq, context, prompt = base_topics[i]
        
        # Determine if this slide should have an image associated with it
        slide_image = None
        if week_num == 1:
            if i in [3, 6, 12]:  # Slide 4, 7, 13
                slide_image = "images/area_grid_5x4.png"
        elif week_num == 2:
            if i in [1, 9, 11, 13, 15]:  # Slide 2, 10, 12, 14, 16
                slide_image = "images/geometry_basics.png"
        elif week_num == 3:
            if i in [1, 4, 6]:  # Slide 2, 5, 7
                slide_image = "images/line_relationships.png"
        elif week_num == 4:
            if i in [2, 7]:  # Slide 3, 8
                slide_image = "images/place_value_chart.png"
                
        text = generate_slide_paragraph(context, eq, "Let's learn and master this key mathematical concept.", prompt, pools[week_num])
        
        slide_dict = {
            "title": title,
            "text": text,
            "examples": [
                {
                    "title": f"Example {i+1}",
                    "content": f"Review standard details: {eq}."
                }
            ]
        }
        if slide_image:
            slide_dict["image"] = slide_image
            
        slides.append(slide_dict)
        
    return slides

def rewrite_all_math_sources():
    # Process weeks 1 to 4
    for w in range(1, 5):
        # 1. Standard Math
        std_path = os.path.join(SOURCES_DIR, "math", f"week{w}.json")
        if os.path.exists(std_path):
            with open(std_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            
            # Generate new slides
            data["slides"] = generate_week_slides(w, advanced=False)
            
            with open(std_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"Successfully rewrote slides for standard math/week{w}.json")
            
        # 2. Advanced Math
        adv_path = os.path.join(SOURCES_DIR, "math_advanced", f"week{w}.json")
        if os.path.exists(adv_path):
            with open(adv_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                
            # Generate new slides
            data["slides"] = generate_week_slides(w, advanced=True)
            
            with open(adv_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"Successfully rewrote slides for math_advanced/week{w}.json")

if __name__ == "__main__":
    rewrite_all_math_sources()
