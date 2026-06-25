import os
import glob
from PIL import Image, ImageDraw, ImageFont

# Base directories
WORKSPACE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
IMAGES_DIR = os.path.join(WORKSPACE_DIR, "images")
os.makedirs(IMAGES_DIR, exist_ok=True)

# Theme colors for subjects
SUBJECT_COLORS = {
    "math": "#0284c7",       # Sky blue
    "science": "#10b981",    # Emerald green
    "english": "#4f46e5",    # Indigo
    "filipino": "#ec4899",   # Pink
    "makabansa": "#8b5cf6",  # Violet
    "gmrc": "#f43f5e"        # Rose
}

# Find a standard TTF font on the Linux system for professional typography
def get_fonts():
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf"
    ]
    for path in font_paths:
        if os.path.exists(path):
            try:
                bold = ImageFont.truetype(path.replace(".ttf", "-Bold.ttf") if "Bold" not in path else path, 24)
                reg = ImageFont.truetype(path, 16)
                title_font = ImageFont.truetype(path.replace(".ttf", "-Bold.ttf") if "Bold" not in path else path, 28)
                sm_font = ImageFont.truetype(path, 13)
                return bold, reg, title_font, sm_font
            except:
                pass
    # Fallback search
    ttf_files = glob.glob("/usr/share/fonts/**/*.ttf", recursive=True)
    if ttf_files:
        try:
            bold = ImageFont.truetype(ttf_files[0], 24)
            reg = ImageFont.truetype(ttf_files[0], 16)
            title_font = ImageFont.truetype(ttf_files[0], 28)
            sm_font = ImageFont.truetype(ttf_files[0], 13)
            return bold, reg, title_font, sm_font
        except:
            pass
    # Default Pillow font fallback
    def_font = ImageFont.load_default()
    return def_font, def_font, def_font, def_font

bold_font, reg_font, title_font, sm_font = get_fonts()

# Base template builder
def create_card_template(subject, week_num, title, subtitle):
    # Create 800x800 white image
    img = Image.new("RGB", (800, 800), "#f8fafc")
    draw = ImageDraw.Draw(img)
    
    # Outer thin border
    draw.rectangle([10, 10, 790, 790], outline="#cbd5e1", width=2)
    
    # Top theme header block
    theme_color = SUBJECT_COLORS.get(subject, "#0284c7")
    draw.rectangle([10, 10, 790, 140], fill=theme_color)
    
    # Text headers
    subject_label = f"MATTEO'S LEARNING HUB  |  {subject.upper()} STUDY GUIDE"
    draw.text((30, 25), subject_label, fill="#ffffff", font=sm_font)
    draw.text((30, 45), f"Week {week_num}: {title}", fill="#ffffff", font=title_font)
    draw.text((30, 95), subtitle, fill="#ffffff", font=reg_font)
    
    # Bottom footer caption card
    draw.rectangle([10, 720, 790, 790], fill="#f1f5f9")
    draw.line([10, 720, 790, 720], fill="#e2e8f0", width=1)
    
    return img, draw

# Helper to wrap text to fit a given maximum pixel width
def wrap_text(text, font, max_width):
    lines = []
    paragraphs = text.split("\n")
    for paragraph in paragraphs:
        if not paragraph.strip():
            lines.append("")
            continue
        words = [w for w in paragraph.split(" ") if w]
        current_line = []
        for word in words:
            test_line = " ".join(current_line + [word])
            bbox = font.getbbox(test_line)
            width = bbox[2] - bbox[0]
            if width <= max_width:
                current_line.append(word)
            else:
                if current_line:
                    lines.append(" ".join(current_line))
                    current_line = [word]
                else:
                    lines.append(word)
                    current_line = []
        if current_line:
            lines.append(" ".join(current_line))
    return lines

# Helper to draw centered rounded text boxes
def draw_textbox(draw, coords, text, fill_color, border_color, text_color, font, align="center"):
    draw.rectangle(coords, fill=fill_color, outline=border_color, width=2)
    
    # Calculate box dimensions
    box_width = coords[2] - coords[0]
    
    # Wrap text to fit width with padding
    max_text_width = box_width - 24
    wrapped_lines = wrap_text(text, font, max_text_width)
    
    # Calculate line height
    try:
        ascent, descent = font.getmetrics()
        line_height = ascent + descent + 2
    except:
        line_height = font.getbbox("A")[3] + 4
        
    total_text_height = len(wrapped_lines) * line_height
    
    # Center text vertically and horizontally
    x_center = (coords[0] + coords[2]) // 2
    y_start = (coords[1] + coords[3]) // 2 - total_text_height // 2
    
    for idx, line in enumerate(wrapped_lines):
        y_pos = y_start + idx * line_height + line_height // 2
        draw.text((x_center, y_pos), line, fill=text_color, font=font, anchor="mm")


# Helper to draw clean directional arrows
def draw_arrow(draw, start, end, fill="#475569", width=3):
    draw.line([start, end], fill=fill, width=width)
    # Draw arrow head
    import math
    angle = math.atan2(end[1] - start[1], end[0] - start[0])
    arrow_len = 10
    head_p1 = (end[0] - arrow_len * math.cos(angle - math.pi/6), end[1] - arrow_len * math.sin(angle - math.pi/6))
    head_p2 = (end[0] - arrow_len * math.cos(angle + math.pi/6), end[1] - arrow_len * math.sin(angle + math.pi/6))
    draw.polygon([end, head_p1, head_p2], fill=fill)

# Draw all 72 images
def generate_images():
    print("Starting generation of 72 professional diagrams...")
    
    # Loop over subjects, weeks, and images
    for subject, color in SUBJECT_COLORS.items():
        for week in [1, 2, 3, 4]:
            for img_idx in [1, 2, 3]:
                # Unique filename
                filename = f"{subject}_w{week}_img{img_idx}.png"
                filepath = os.path.join(IMAGES_DIR, filename)
                
                # Fetch metadata descriptions
                meta = get_image_metadata(subject, week, img_idx)
                img, draw = create_card_template(subject, week, meta["title"], meta["subtitle"])
                
                # Draw the specific core diagram
                draw_core_diagram(draw, subject, week, img_idx)
                
                # Footer text
                draw.text((30, 745), f"Educational Diagram: {meta['footer']}", fill="#475569", font=reg_font)
                
                # Save card
                img.save(filepath, "PNG")
                
    print("Successfully generated all 72 professional PNG diagrams under images/!")

# Metadata configurations
def get_image_metadata(subject, week, idx):
    data = {
        "math": {
            1: [
                {"title": "Area of Squares & Rectangles using Tiles", "subtitle": "Visualizing Area with Grid Units", "footer": "Counting columns and rows of identical squares to find area."},
                {"title": "Area of Composite Shapes", "subtitle": "Splitting Complex Regions into Standard Shapes", "footer": "Dividing L-shaped surfaces into separate rectangles to add their areas."},
                {"title": "Area and Perimeter Relationships", "subtitle": "Different Shapes Can Have the Same Perimeter", "footer": "Comparing areas for a constant perimeter of 20 cm."}
            ],
            2: [
                {"title": "Metric Area and Geometry Basics", "subtitle": "Points, Lines, Line Segments, and Rays", "footer": "Illustrating fundamental geometric entities and symbols."},
                {"title": "Understanding Angles in Geometry", "subtitle": "Angles formed by Joining Two Rays at a Vertex", "footer": "Classifying Acute (45°), Right (90°), and Obtuse (120°) angles."},
                {"title": "Metric Area Unit Conversions", "subtitle": "Conversions between Standard Square Units", "footer": "Conversion scale showing square meters (sq. m) to square centimeters (sq. cm)."}
            ],
            3: [
                {"title": "Parallel, Intersecting, & Perpendicular Lines", "subtitle": "Identifying Basic Line Relationships", "footer": "Parallel (never cross), Intersecting (cross), and Perpendicular (form 90°)."},
                {"title": "Angles Formed by Transversal Lines", "subtitle": "Intersections Across Parallel Paths", "footer": "A transversal line cutting parallel lines and forming equal angles."},
                {"title": "Coordinate Lines & Slopes", "subtitle": "Drawing Line Relations on a Coordinate Grid", "footer": "Visualizing perpendicular and parallel lines with slopes on a grid."}
            ],
            4: [
                {"title": "Whole Numbers up to 1,000,000", "subtitle": "Six-Digit Place Value Columns", "footer": "Place value table highlighting Thousands and Units periods."},
                {"title": "The Expanded Form of Numbers", "subtitle": "Decomposing Numbers by Digit Values", "footer": "Expanded notation showing the value of each place holder digit."},
                {"title": "Visualizing Rounding Hill rules", "subtitle": "Deciding to Round Up or Round Down", "footer": "A rounding hill: digits 0-4 slide down, digits 5-9 slide up."}
            ]
        },
        "science": {
            1: [
                {"title": "Grouping Objects in Daily Life", "subtitle": "Comparing the Three States of Matter", "footer": "Visualizing molecular arrangement of Solid, Liquid, and Gas particles."},
                {"title": "Matter Phase Transformations", "subtitle": "How Heat Changes States of Materials", "footer": "Phase changes cycle: Melting, Freezing, Evaporating, Condensing."},
                {"title": "Solids, Liquids, & Gases Examples", "subtitle": "Everyday Objects Representing States of Matter", "footer": "Classification card listing local examples for each phase."}
            ],
            2: [
                {"title": "Physical Properties of Solids", "subtitle": "Measuring Hardness, Malleability, and Shape", "footer": "Illustrating malleability (hammering copper) and hardness (scratch test)."},
                {"title": "Solid Densities comparison", "subtitle": "Comparing Density of Different Materials", "footer": "A balance scale holding equal-volume blocks of Wood vs. Iron."},
                {"title": "Molecular Particle structure of Solids", "subtitle": "Tightly Packed Molecules in a Lattice", "footer": "Highlighting strong attractive forces and fixed shapes of solids."}
            ],
            3: [
                {"title": "Physical Properties of Liquids", "subtitle": "Viscosity and Liquid Flow Rates", "footer": "Viscosity flow rate comparison between honey (slow) and water (fast)."},
                {"title": "Liquid Surface Tension", "subtitle": "Intermolecular Forces Creating Surface Membrane", "footer": "Water droplet bead formation and cohesive forces on a leaf."},
                {"title": "Molecular Particle structure of Liquids", "subtitle": "Loose Molecules Sliding Past Each Other", "footer": "Molecules packed close but free to move, taking container shape."}
            ],
            4: [
                {"title": "Physical Properties of Gases", "subtitle": "Invisible Gas Pressure & Space Occupation", "footer": "A balloon model showing gas molecules pushing force vectors outwards."},
                {"title": "Molecular Particle structure of Gases", "subtitle": "Widely Spaced Molecules in Rapid Motion", "footer": "Molecules in high-speed random motion with long free paths."},
                {"title": "Atmospheric Air Pressure", "subtitle": "Air Column Weight Pushing Down on Earth", "footer": "Density of air column decreasing with higher elevation."}
            ]
        },
        "english": {
            1: [
                {"title": "Nouns: Common vs. Proper", "subtitle": "Naming General and Specific Entities", "footer": "Comparison chart showing common categories vs. proper names."},
                {"title": "Concrete vs. Abstract Nouns", "subtitle": "Physical Objects vs. Conceptual Ideas", "footer": "Concrete nouns (tangible) vs. Abstract nouns (feelings/concepts)."},
                {"title": "Singular vs. Plural Noun counts", "subtitle": "Representing Quantities of Nouns", "footer": "Singular (one item) vs. Plural (multiple items) visual count."}
            ],
            2: [
                {"title": "Standard Pluralization Rules", "subtitle": "Spelling Changes for Plural Nouns", "footer": "Guide rules table: adding -s, adding -es, and changing -y to -ies."},
                {"title": "Irregular Plural Nouns", "subtitle": "Nouns that Change Forms Completely", "footer": "Examples: child/children, tooth/teeth, mouse/mice, goose/geese."},
                {"title": "Understanding Collective Nouns", "subtitle": "Naming Groups of Individuals", "footer": "Visual representations of a school of fish, pack of wolves, flock of birds."}
            ],
            3: [
                {"title": "Pronoun Classifications", "subtitle": "Replacing Nouns to Avoid Repetition", "footer": "Pronouns chart: Subject (I/You/He) vs. Possessive (My/Your/His)."},
                {"title": "Pronoun-Antecedent Agreement", "subtitle": "Matching Pronouns in Number and Gender", "footer": "Agreement mapping connecting a subject noun to its pronoun."},
                {"title": "Reflexive & Intensive Pronouns", "subtitle": "Pronouns that Reflect Back to the Subject", "footer": "Examples showing -self/-selves endings in sentences."}
            ],
            4: [
                {"title": "Action Verbs in Sentences", "subtitle": "Verbs representing Physical/Mental Actions", "footer": "Verbs illustrations: run, jump, read, write, listen."},
                {"title": "Subject-Verb Agreement Present Tense", "subtitle": "Singular and Plural Verb Form Rules", "footer": "S-V rules: Singular subject + verb-s; Plural subject + base verb."},
                {"title": "Verb Tenses Timeline", "subtitle": "Mapping Actions in Past, Present, and Future", "footer": "Horizontal timeline showing action progression over time."}
            ]
        },
        "filipino": {
            1: [
                {"title": "Uri ng Pangngalan", "subtitle": "Pangngalang Pantangi at Pambalana", "footer": "Tsart na nagpapakita ng Pantangi (Specific) vs Pambalana (Common)."},
                {"title": "Kasarian ng Pangngalan", "subtitle": "Panlalaki, Pambabae, Di-tiyak, at Walang Kasarian", "footer": "Apat na kasarian ng pangngalan na may kaukulang halimbawa."},
                {"title": "Tahas, Basal, at Lansakan", "subtitle": "Klasipikasyon ng Pangngalang Pambalana", "footer": "Tahas (material), Basal (idea/feeling), at Lansakan (collective)."}
            ],
            2: [
                {"title": "Panghalip Panao", "subtitle": "Mga Salitang Panghalili sa ngalan ng Tao", "footer": "Talahanayan ng Panghalip Panao sa iba't ibang Panauhan."},
                {"title": "Panauhan at Kailanan ng Panghalip", "subtitle": "Una, Ikalawa, at Ikatlong Panauhan sa Isahan/Maramihan", "footer": "Kombinasyon ng kailanan at panauhan sa panghalili."},
                {"title": "Panghalip Pananong", "subtitle": "Mga Panghalip na Ginagamit sa Pagtatanong", "footer": "Sino, Ano, Saan, Kailan, Alin, at Paano na may halimbawa."}
            ],
            3: [
                {"title": "Panghalip Pamatlig", "subtitle": "Panghalip na Ginagamit sa Pagtuturo ng Lugar", "footer": "Posisyon ng Ito (hawak), Iyan (malapit sa kausap), at Iyon (malayo)."},
                {"title": "Pamatlig - Dito, Diyan, Doon", "subtitle": "Pagtuturo ng Pook batay sa Distansya", "footer": "Distansya ng Dito (hawak/malapit), Diyan (malapit), at Doon (malayo)."},
                {"title": "Panghalip Pamanggit", "subtitle": "Panghalip na Nag-uugnay sa mga Pangungusap", "footer": "Talahanayan ng panghalip pamanggit sa wikang Filipino."}
            ],
            4: [
                {"title": "Aspekto ng Pandiwa", "subtitle": "Naganap, Nagaganap, at Magaganap", "footer": "Timeline ng aspektong perpektibo, imperpektibo, at kontemplatibo."},
                {"title": "Pandiwa: Mga Salitang Kilos", "subtitle": "Halimbawa ng mga Kilos sa Pang-araw-araw na Buhay", "footer": "Mga kilos: tumakbo, sumulat, nagbasa, kumakain."},
                {"title": "Pokus ng Pandiwa", "subtitle": "Pokus sa Tagaganap at Pokus sa Layon", "footer": "Tsart ng pokus sa aktor (sino) vs pokus sa paksa/layon (ano)."}
            ]
        },
        "makabansa": {
            1: [
                {"title": "Mga Sektor ng Pamahalaan", "subtitle": "Mga Namumuno at Tungkulin sa Komunidad", "footer": "Organisasyonal na tsart ng Sangguniang Barangay."},
                {"title": "Tungkulin ng Pamahalaan at Mamamayan", "subtitle": "Serbisyo sa Kalusugan, Seguridad, at Edukasyon", "footer": "Infographic showing community services and citizen duties."},
                {"title": "Administratibong Dibisyon ng Pilipinas", "subtitle": "Mga Rehiyon, Lalawigan, at Bayan", "footer": "Administrative division levels map chart."}
            ],
            2: [
                {"title": "Kasaysayan ng Ating Komunidad", "subtitle": "Makasaysayang Timeline ng South Cotabato", "footer": "Timeline showing historical milestones from 1914 to today."},
                {"title": "Mga Lupang Katutubo (Ancestral Domains)", "subtitle": "Mga Katutubong Tribo ng South Cotabato", "footer": "Ancestral regions of B'laan and Maguindanaon tribes."},
                {"title": "Mga Makasaysayang Monumento sa South Cotabato", "subtitle": "Rizal Monument at Roundball Monument sa Koronadal", "footer": "Infographic detail chart of historical city points."}
            ],
            3: [
                {"title": "Sining at Kultura ng Komunidad", "subtitle": "Tradisyonal na Paghahabi ng T'nalak sa Lake Sebu", "footer": "Step-by-step schematic of abaca dyeing and weaving."},
                {"title": "Mga Pista sa South Cotabato", "subtitle": "T'nalak at Lemlunay Cultural Festivals", "footer": "Vibrant chart listing key cultural festivals and dates."},
                {"title": "Tangible at Intangible Cultural Heritage", "subtitle": "Pagpapahalaga at Pagrerehistro sa DepEd at UNESCO", "footer": "Chart explaining heritage preservation categories."}
            ],
            4: [
                {"title": "Kabuhayan at Ekonomiya sa Komunidad", "subtitle": "Mga Pangunahing Sektor ng Industriya", "footer": "Agriculture (pineapple/tilapia), Industry, and Services sectors."},
                {"title": "Likas-Kayang Pagsasaka at Abaca", "subtitle": "Sustainable Agriculture and Soil Protection", "footer": "Sustainable farming and soil preservation flow diagram."},
                {"title": "Ikutang Pang-ekonomiya ng South Cotabato", "subtitle": "Daloy ng Produkto mula Bukid patungo sa Mamimili", "footer": "Local product distribution cycle map."}
            ]
        },
        "gmrc": {
            1: [
                {"title": "Sariling Disiplina at Karangalan", "subtitle": "Mga Pamamaraan ng Self-Regulation sa Pag-aaral", "footer": "Self-discipline tips card: time management, focus, routine."},
                {"title": "Etika, Integridad at Katotohanan", "subtitle": "Pagpapahalaga sa Pagsasabi ng Katotohanan", "footer": "Moral integrity and personal truthfulness indicator chart."},
                {"title": "Mga Pangunahing Pagpapahalaga (Core Values)", "subtitle": "Disiplina, Paggalang, at Pananagutan", "footer": "Core values wheel layout showing character pillars."}
            ],
            2: [
                {"title": "Paggalang sa Magulang at Nakatatanda", "subtitle": "Ang Tradisyon ng Pagmamano sa Pamilyang Pilipino", "footer": "Visual diagram representing filial respect and courtesy."},
                {"title": "Karapatan at Tungkulin ng mga Bata", "subtitle": "UNCRC Rights vs. Personal Obligations", "footer": "Table linking children's rights to corresponding responsibilities."},
                {"title": "Paggalang sa Pagkakaiba-iba ng Kultura", "subtitle": "Pagrespeto sa Iba't Ibang Paniniwala at Relihiyon", "footer": "Infographic showing respectful inter-faith interactions."}
            ],
            3: [
                {"title": "Pagpapakita ng Empathy (Pakikipagkapwa)", "subtitle": "Aktibong Pakikinig at Pag-unawa sa Kapwa", "footer": "Empathy visual steps: listen, understand, help."},
                {"title": "Resolusyon ng Alitan (Conflict Resolution)", "subtitle": "Apat na Hakbang sa Paglutas ng Problema nang Payapa", "footer": "Conflict resolution chart: stop, listen, discuss, agree."},
                {"title": "Mga Gawaing Pangkawanggawa sa Komunidad", "subtitle": "Pagtulong sa Pamilya at Kapitbahay nang Kusa", "footer": "Cooperation diagram listing volunteering activities."}
            ],
            4: [
                {"title": "Pananagutang Sibil at Panlipunan", "subtitle": "Pagsunod sa mga Batas at Kautusan ng Bayan", "footer": "Civic duties: following rules, cleaning environment."},
                {"title": "Pangangalaga sa Likas na Yaman", "subtitle": "Environmental Stewardship and Waste Management", "footer": "Infographic detailing 3Rs: Reduce, Reuse, Recycle."},
                {"title": "Tungkulin sa Paaralan at Tahanan", "subtitle": "Mga Responsibilidad ng Isang Mabuting Mag-aaral", "footer": "Student responsibilities checklist layout."}
            ]
        }
    }
    
    return data[subject][week][idx - 1]

# Draw actual custom diagrams depending on the subject/week/idx
def draw_core_diagram(draw, subject, week, idx):
    # Standard coordinate range for center drawing is Y: 180 to 700, X: 30 to 770
    center_y = 440
    center_x = 400
    
    if subject == "math":
        if week == 1:
            if idx == 1: # Area Grid
                # Draw grid lines
                draw.rectangle([250, 240, 550, 480], fill="#e0f2fe", outline="#0284c7", width=3)
                for c in range(1, 5):
                    x = 250 + c * 60
                    draw.line([x, 240, x, 480], fill="#0284c7", width=2)
                for r in range(1, 4):
                    y = 240 + r * 60
                    draw.line([250, y, 550, y], fill="#0284c7", width=2)
                # Labels
                draw.text((400, 210), "COLUMNS (5 units wide)", fill="#475569", font=bold_font, anchor="mm")
                draw.text((150, 360), "ROWS\n(4 units\nhigh)", fill="#475569", font=bold_font, anchor="mm")
                draw_textbox(draw, [250, 520, 550, 600], "Area = 5 columns x 4 rows = 20 Sq. Tiles", "#bae6fd", "#0284c7", "#0369a1", bold_font)
            elif idx == 2: # Composite Area
                # Draw composite shape (L-shape)
                # Split into Region A (200x300 at 200, 240) and Region B (200x150 at 400, 390)
                draw.rectangle([200, 240, 400, 540], fill="#e0f2fe", outline="#0284c7", width=3)
                draw.rectangle([400, 390, 600, 540], fill="#dbeafe", outline="#1d4ed8", width=3)
                # Text labels inside
                draw.text((300, 390), "Region A\n6m x 10m\nArea = 60m²", fill="#0369a1", font=bold_font, anchor="mm")
                draw.text((500, 465), "Region B\n6m x 5m\nArea = 30m²", fill="#1e3a8a", font=bold_font, anchor="mm")
                draw_textbox(draw, [200, 580, 600, 660], "Total Area = Region A + Region B = 90 square meters", "#bae6fd", "#0284c7", "#0369a1", bold_font)
            elif idx == 3: # Area & Perimeter
                # Draw shape 1 (5x5 square) and shape 2 (6x4 rectangle)
                draw.rectangle([150, 240, 350, 440], fill="#e0f2fe", outline="#0284c7", width=3)
                draw.text((250, 340), "Shape 1: Square\nSide = 5 cm\nArea = 25 cm²\nPerimeter = 20 cm", fill="#0369a1", font=reg_font, anchor="mm")
                
                draw.rectangle([450, 240, 690, 400], fill="#dbeafe", outline="#1d4ed8", width=3)
                draw.text((570, 320), "Shape 2: Rectangle\nLength=6cm, Width=4cm\nArea = 24 cm²\nPerimeter = 20 cm", fill="#1e3a8a", font=reg_font, anchor="mm")
                draw_textbox(draw, [150, 540, 690, 620], "Rule: Shapes can have the SAME perimeter (20 cm) but DIFFERENT areas!", "#fef08a", "#eab308", "#854d0e", bold_font)
        elif week == 2:
            if idx == 1: # Point, Line, Segment, Ray
                # Point A
                draw.ellipse([150, 240, 166, 256], fill="#0284c7")
                draw.text((180, 248), "Point A (Exact location)", fill="#1e293b", font=bold_font, anchor="lm")
                # Line BC
                draw_arrow(draw, (150, 340), (450, 340), fill="#10b981")
                draw_arrow(draw, (450, 340), (150, 340), fill="#10b981")
                draw.ellipse([230, 332, 246, 348], fill="#047857")
                draw.ellipse([360, 332, 376, 348], fill="#047857")
                draw.text((470, 340), "Line BC (Extends infinitely)", fill="#1e293b", font=bold_font, anchor="lm")
                # Segment DE
                draw.line([(150, 440), (450, 440)], fill="#f59e0b", width=4)
                draw.ellipse([142, 432, 158, 448], fill="#d97706")
                draw.ellipse([442, 432, 458, 448], fill="#d97706")
                draw.text((470, 440), "Segment DE (Definite length)", fill="#1e293b", font=bold_font, anchor="lm")
                # Ray FG
                draw_arrow(draw, (150, 540), (450, 540), fill="#ec4899")
                draw.ellipse([142, 532, 158, 548], fill="#be185d")
                draw.ellipse([300, 532, 316, 548], fill="#be185d")
                draw.text((470, 540), "Ray FG (Starts at F, goes infinitely)", fill="#1e293b", font=bold_font, anchor="lm")
            elif idx == 2: # Angles
                # Draw acute, right, obtuse angles
                # Right angle
                draw.line([(150, 380), (150, 240)], fill="#475569", width=4)
                draw.line([(150, 380), (280, 380)], fill="#475569", width=4)
                draw.rectangle([150, 360, 170, 380], outline="#ef4444", width=2)
                draw.text((215, 410), "Right Angle (90°)", fill="#1e293b", font=bold_font, anchor="mm")
                # Acute Angle
                draw.line([(400, 380), (500, 260)], fill="#475569", width=4)
                draw.line([(400, 380), (530, 380)], fill="#475569", width=4)
                draw.text((465, 410), "Acute Angle (<90°)", fill="#1e293b", font=bold_font, anchor="mm")
                # Obtuse Angle
                draw.line([(250, 580), (150, 480)], fill="#475569", width=4)
                draw.line([(250, 580), (380, 580)], fill="#475569", width=4)
                draw.text((265, 610), "Obtuse Angle (>90°)", fill="#1e293b", font=bold_font, anchor="mm")
            elif idx == 3: # Metric Conversions Table
                draw_textbox(draw, [150, 240, 650, 310], "Metric Area Conversion Scale", "#e0f2fe", "#0284c7", "#0369a1", bold_font)
                draw_textbox(draw, [150, 330, 650, 420], "1 Square Meter (sq. m) = 10,000 Square Centimeters (sq. cm)\nConversion rule: Multiply square meters by 10,000", "#f8fafc", "#bae6fd", "#334155", reg_font)
                draw_textbox(draw, [150, 440, 650, 530], "1 Square Kilometer (sq. km) = 1,000,000 Square Meters (sq. m)\nConversion rule: Multiply square kilometers by 1,000,000", "#f8fafc", "#bae6fd", "#334155", reg_font)
                draw_textbox(draw, [150, 560, 650, 630], "Example: 4 sq. m = 4 x 10,000 = 40,000 sq. cm", "#bae6fd", "#0284c7", "#0369a1", bold_font)
        elif week == 3:
            if idx == 1: # Parallel, Intersecting, Perpendicular
                # Parallel
                draw_arrow(draw, (100, 260), (350, 260), fill="#0284c7")
                draw_arrow(draw, (100, 310), (350, 310), fill="#0284c7")
                draw.text((225, 340), "Parallel Lines\n(Never meet, same distance)", fill="#334155", font=reg_font, anchor="mm")
                # Intersecting
                draw_arrow(draw, (450, 240), (700, 320), fill="#10b981")
                draw_arrow(draw, (450, 320), (700, 240), fill="#10b981")
                draw.ellipse([570, 275, 580, 285], fill="#047857")
                draw.text((575, 340), "Intersecting Lines\n(Cross at a single point)", fill="#334155", font=reg_font, anchor="mm")
                # Perpendicular
                draw_arrow(draw, (200, 520), (550, 520), fill="#f59e0b")
                draw_arrow(draw, (375, 420), (375, 600), fill="#f59e0b")
                draw.rectangle([375, 500, 395, 520], fill=None, outline="#ef4444", width=2)
                draw.text((375, 630), "Perpendicular Lines\n(Cross at a perfect 90-degree right angle)", fill="#334155", font=reg_font, anchor="mm")
            elif idx == 2: # Transversals
                # Two parallel lines
                draw.line([(150, 300), (650, 300)], fill="#475569", width=4)
                draw.line([(150, 480), (650, 480)], fill="#475569", width=4)
                # Diagonal transversal
                draw.line([(250, 200), (550, 580)], fill="#ec4899", width=4)
                # Labels for angles
                draw.text((330, 270), "Angle A (120°)", fill="#be185d", font=bold_font)
                draw.text((360, 320), "Angle B (60°)", fill="#be185d", font=bold_font)
                draw.text((420, 450), "Angle C (120°)", fill="#be185d", font=bold_font)
                draw.text((450, 500), "Angle D (60°)", fill="#be185d", font=bold_font)
                draw_textbox(draw, [150, 590, 650, 660], "Angle A = Angle C (Alternate Interior Angles are equal)", "#fdf2f8", "#ec4899", "#9d174d", bold_font)
            elif idx == 3: # Coordinate Lines
                # Draw a simple grid
                for i in range(150, 660, 40):
                    draw.line([150, i, 650, i], fill="#e2e8f0", width=1)
                    draw.line([i, 150, i, 650], fill="#e2e8f0", width=1)
                # Axes
                draw.line([150, 400, 650, 400], fill="#1e293b", width=3) # X-axis
                draw.line([400, 150, 400, 650], fill="#1e293b", width=3) # Y-axis
                draw.text((640, 415), "X", fill="#1e293b", font=bold_font)
                draw.text((415, 160), "Y", fill="#1e293b", font=bold_font)
                # Parallel lines drawn on grid
                draw.line([(200, 250), (600, 450)], fill="#3b82f6", width=4) # Line 1
                draw.line([(200, 330), (600, 530)], fill="#3b82f6", width=4) # Line 2
                draw.text((500, 360), "Line 1", fill="#1d4ed8", font=bold_font)
                draw.text((500, 440), "Line 2 (Parallel)", fill="#1d4ed8", font=bold_font)
        elif week == 4:
            if idx == 1: # Place Value Chart
                # Draw table headers
                draw.rectangle([100, 240, 700, 310], fill="#bae6fd", outline="#0284c7", width=2)
                draw.text((200, 275), "Thousands", fill="#0369a1", font=bold_font, anchor="mm")
                draw.text((350, 275), "Hundreds", fill="#0369a1", font=bold_font, anchor="mm")
                draw.text((500, 275), "Tens", fill="#0369a1", font=bold_font, anchor="mm")
                draw.text((640, 275), "Ones", fill="#0369a1", font=bold_font, anchor="mm")
                
                # Draw table cells for number 4,532
                draw.rectangle([100, 310, 700, 420], fill="#ffffff", outline="#bae6fd", width=2)
                draw.text((200, 365), "4\n(4,000)", fill="#334155", font=bold_font, anchor="mm")
                draw.text((350, 365), "5\n(500)", fill="#334155", font=bold_font, anchor="mm")
                draw.text((500, 365), "3\n(300)", fill="#334155", font=bold_font, anchor="mm")
                draw.text((640, 365), "2\n(2)", fill="#334155", font=bold_font, anchor="mm")
                
                draw_textbox(draw, [100, 460, 700, 540], "Value = Digit x Position Place Value", "#bae6fd", "#0284c7", "#0369a1", bold_font)
                draw_textbox(draw, [100, 560, 700, 640], "4,532 = 4 Thousands + 5 Hundreds + 3 Tens + 2 Ones", "#f8fafc", "#bae6fd", "#334155", reg_font)
            elif idx == 2: # Expanded Form
                draw_textbox(draw, [150, 240, 650, 310], "Expanded Form Equation", "#bae6fd", "#0284c7", "#0369a1", bold_font)
                draw_textbox(draw, [200, 330, 600, 400], "Standard: 8,743", "#ffffff", "#0284c7", "#334155", bold_font)
                draw_textbox(draw, [200, 420, 600, 600], "Expanded Breakdown:\n\n8,000 (Thousands)\n+ 700 (Hundreds)\n+ 40 (Tens)\n+ 3 (Ones)", "#f8fafc", "#bae6fd", "#334155", reg_font)
            elif idx == 3: # Rounding Hill
                # Draw rounded hill curve
                draw.arc([200, 300, 600, 600], 180, 360, fill="#475569", width=4)
                # Numbers on left side sliding down
                draw.text((250, 420), "0, 1, 2, 3, 4\nSlide Down!", fill="#dc2626", font=bold_font, anchor="mm")
                # Numbers on right side sliding up
                draw.text((550, 420), "5, 6, 7, 8, 9\nSlide Up!", fill="#16a34a", font=bold_font, anchor="mm")
                # Peak
                draw.text((400, 300), "Peak\nRound Gate", fill="#ea580c", font=bold_font, anchor="mm")
                draw_textbox(draw, [150, 550, 650, 630], "Rule: If digit is 5 or more, round up. Less than 5, round down.", "#fef08a", "#eab308", "#854d0e", bold_font)
                
    elif subject == "science":
        # Draw simple, elegant schematic diagrams for Science lessons
        if week == 1:
            if idx == 1: # Three States of Matter (Particles arrangement)
                # Draw three boxes for Solid, Liquid, Gas
                draw.rectangle([100, 240, 280, 480], fill="#e0f2fe", outline="#10b981", width=2)
                draw.text((190, 460), "Solid (Packed)", fill="#065f46", font=bold_font, anchor="mm")
                # Solid circles
                for r in range(5):
                    for c in range(5):
                        draw.ellipse([120+c*25, 260+r*25, 140+c*25, 280+r*25], fill="#0284c7")
                        
                draw.rectangle([310, 240, 490, 480], fill="#e0f2fe", outline="#10b981", width=2)
                draw.text((400, 460), "Liquid (Loose)", fill="#065f46", font=bold_font, anchor="mm")
                # Liquid circles
                import random
                random.seed(42)
                for _ in range(25):
                    x = random.randint(330, 470)
                    y = random.randint(350, 430)
                    draw.ellipse([x-10, y-10, x+10, y+10], fill="#3b82f6")
                    
                draw.rectangle([520, 240, 700, 480], fill="#e0f2fe", outline="#10b981", width=2)
                draw.text((610, 460), "Gas (Far apart)", fill="#065f46", font=bold_font, anchor="mm")
                # Gas circles
                for _ in range(8):
                    x = random.randint(540, 680)
                    y = random.randint(260, 420)
                    draw.ellipse([x-8, y-8, x+8, y+8], fill="#f59e0b")
                
                draw_textbox(draw, [100, 520, 700, 600], "Comparison of Molecular Particle Arrangement in Matter", "#d1fae5", "#10b981", "#065f46", bold_font)
            elif idx == 2: # Phase changes cycle
                draw_textbox(draw, [300, 220, 500, 280], "Solid", "#fca5a5", "#ef4444", "#991b1b", bold_font)
                draw_textbox(draw, [100, 420, 300, 480], "Liquid", "#93c5fd", "#3b82f6", "#1e3a8a", bold_font)
                draw_textbox(draw, [500, 420, 700, 480], "Gas", "#fcd34d", "#f59e0b", "#7c2d12", bold_font)
                # Arrows
                draw_arrow(draw, (330, 280), (200, 420), fill="#3b82f6") # Solid to liquid (Melting)
                draw.text((180, 320), "Melting\n(+Heat)", fill="#1e293b", font=sm_font)
                
                draw_arrow(draw, (230, 420), (360, 280), fill="#ef4444") # Liquid to solid (Freezing)
                draw.text((320, 350), "Freezing\n(-Heat)", fill="#1e293b", font=sm_font)
                
                draw_arrow(draw, (300, 440), (500, 440), fill="#f59e0b") # Liquid to gas (Evaporation)
                draw.text((400, 415), "Evaporating (+Heat)", fill="#1e293b", font=sm_font, anchor="mm")
                
                draw_arrow(draw, (500, 460), (300, 460), fill="#3b82f6") # Gas to liquid (Condensation)
                draw.text((400, 485), "Condensing (-Heat)", fill="#1e293b", font=sm_font, anchor="mm")

            elif idx == 3: # Solid/Liquid/Gas Examples
                # Simple table listing examples of solids, liquids, gases
                draw.rectangle([100, 240, 700, 600], outline="#10b981", width=3)
                draw.line([100, 300, 700, 300], fill="#10b981", width=2)
                draw.line([300, 240, 300, 600], fill="#10b981", width=2)
                draw.line([500, 240, 500, 600], fill="#10b981", width=2)
                
                # Headers
                draw.text((200, 270), "SOLIDS", fill="#065f46", font=bold_font, anchor="mm")
                draw.text((400, 270), "LIQUIDS", fill="#065f46", font=bold_font, anchor="mm")
                draw.text((600, 270), "GASES", fill="#065f46", font=bold_font, anchor="mm")
                
                # Rows text
                solids = "• Ice cubes\n• Pineapples\n• Rocks\n• Wood boards\n• Metal keys"
                liquids = "• Water\n• Tilapia ponds\n• Honey syrup\n• Coconut milk\n• Fruit juice"
                gases = "• Invisible air\n• Oxygen gas\n• Carbon dioxide\n• Water vapor\n• Balloon helium"
                draw.text((120, 330), solids, fill="#334155", font=reg_font)
                draw.text((320, 330), liquids, fill="#334155", font=reg_font)
                draw.text((520, 330), gases, fill="#334155", font=reg_font)
        elif week == 2:
            if idx == 1: # Solid properties: malleability and hardness
                # Draw hammer striking copper plate (malleability)
                draw.rectangle([150, 240, 350, 480], fill="#fef3c7", outline="#10b981", width=2)
                draw.text((250, 270), "Malleability", fill="#065f46", font=bold_font, anchor="mm")
                draw.rectangle([180, 400, 320, 420], fill="#d97706", outline="#92400e") # copper sheet
                draw.rectangle([210, 330, 290, 370], fill="#78350f") # hammer head
                draw.text((250, 450), "Can be hammered\ninto flat sheets", fill="#475569", font=reg_font, anchor="mm")
                # Draw scratch test (hardness)
                draw.rectangle([450, 240, 650, 480], fill="#fef3c7", outline="#10b981", width=2)
                draw.text((550, 270), "Hardness", fill="#065f46", font=bold_font, anchor="mm")
                draw.rectangle([480, 380, 620, 410], fill="#94a3b8", outline="#475569") # iron bar
                draw.line([500, 340, 550, 395], fill="#ef4444", width=3) # diamond tip scratching
                draw.text((550, 450), "Resists scratches\nwhen rubbed hard", fill="#475569", font=reg_font, anchor="mm")
            elif idx == 2: # Solid Density Balance Scale
                # Draw a simple balance scale comparing iron (dense) and wood (less dense)
                draw.line([(400, 240), (400, 480)], fill="#334155", width=6) # Stand
                draw.line([(250, 280), (550, 370)], fill="#334155", width=4) # Balanced bar tilted (iron lower Y, wood higher Y)
                # Pans
                # Wood Pan (left - Y starts at 280, hangs down to 350)
                draw.line([(250, 280), (220, 350)], fill="#475569", width=2)
                draw.line([(250, 280), (280, 350)], fill="#475569", width=2)
                draw.rectangle([200, 350, 300, 370], fill="#334155")
                draw.rectangle([220, 300, 280, 350], fill="#78350f") # wood block
                draw.text((250, 390), "Wood block (floats)\nLess Dense", fill="#334155", font=reg_font, anchor="mm")
                
                # Iron Pan (right - Y starts at 370, hangs down to 440)
                draw.line([(550, 370), (520, 440)], fill="#475569", width=2)
                draw.line([(550, 370), (580, 440)], fill="#475569", width=2)
                draw.rectangle([500, 440, 600, 460], fill="#334155")
                draw.rectangle([530, 390, 570, 440], fill="#94a3b8") # iron block
                draw.text((550, 480), "Iron block (sinks)\nMore Dense", fill="#334155", font=reg_font, anchor="mm")

            elif idx == 3: # Molecular packing grid
                draw.rectangle([250, 240, 550, 480], fill="#ffffff", outline="#10b981", width=3)
                for r in range(6):
                    for c in range(7):
                        draw.ellipse([270+c*38, 260+r*36, 300+c*38, 290+r*36], fill="#ef4444")
                draw_textbox(draw, [200, 520, 600, 600], "Strong Intermolecular Forces keep molecules\nlocked in a rigid, fixed crystalline grid.", "#d1fae5", "#10b981", "#065f46", bold_font)
        elif week == 3:
            if idx == 1: # Liquid Flow Rates (Viscosity)
                # Honey slow vs water fast
                # Honey jar pouring slow
                draw.rectangle([150, 240, 350, 480], fill="#eff6ff", outline="#10b981", width=2)
                draw.text((250, 270), "Honey Viscosity", fill="#065f46", font=bold_font, anchor="mm")
                draw.ellipse([220, 330, 280, 390], fill="#f59e0b", outline="#d97706") # Honey jar
                draw.rectangle([240, 390, 260, 470], fill="#f59e0b") # Thick honey drip
                draw.text((250, 450), "High Viscosity\nFlows slowly", fill="#475569", font=reg_font, anchor="mm")
                # Water pouring fast
                draw.rectangle([450, 240, 650, 480], fill="#eff6ff", outline="#10b981", width=2)
                draw.text((550, 270), "Water Viscosity", fill="#065f46", font=bold_font, anchor="mm")
                draw.ellipse([520, 330, 580, 390], fill="#93c5fd", outline="#3b82f6") # water cup
                draw.rectangle([545, 390, 555, 470], fill="#3b82f6") # Thin water drip
                draw.text((550, 450), "Low Viscosity\nFlows quickly", fill="#475569", font=reg_font, anchor="mm")
            elif idx == 2: # Surface Tension Droplet
                # Large water droplet showing surface molecules pull inwards
                draw.arc([200, 300, 600, 600], 180, 360, fill="#3b82f6", width=5)
                draw.line([(200, 450), (600, 450)], fill="#3b82f6", width=5)
                # Draw surface molecules with arrows pulling inward
                for x in range(250, 580, 60):
                    draw.ellipse([x-10, 440, x+10, 460], fill="#60a5fa")
                    draw_arrow(draw, (x, 440), (x, 380), fill="#1d4ed8", width=2)
                draw.text((400, 340), "Surface Tension pulls water\nmolecules inward, forming a dome", fill="#1e3a8a", font=bold_font, anchor="mm")
            elif idx == 3: # Loose liquid molecules
                draw.rectangle([250, 240, 550, 480], fill="#ffffff", outline="#10b981", width=3)
                # Random loose molecules
                import random
                random.seed(123)
                for _ in range(40):
                    x = random.randint(260, 540)
                    y = random.randint(350, 470)
                    draw.ellipse([x-12, y-12, x+12, y+12], fill="#3b82f6")
                draw_textbox(draw, [200, 520, 600, 600], "Liquid molecules have weaker attractive forces,\nallowing them to flow and slide over each other.", "#d1fae5", "#10b981", "#065f46", bold_font)
        elif week == 4:
            if idx == 1: # Gas balloon pressure
                # Draw circular balloon with arrows pushing out
                draw.ellipse([250, 240, 550, 540], fill="#fecdd3", outline="#f43f5e", width=3)
                draw.text((400, 390), "Gas Pressure\nPushes Outwards", fill="#9f1239", font=bold_font, anchor="mm")
                # Outward arrows
                draw_arrow(draw, (400, 340), (400, 260), fill="#ef4444", width=3) # Up
                draw_arrow(draw, (400, 440), (400, 520), fill="#ef4444", width=3) # Down
                draw_arrow(draw, (350, 390), (270, 390), fill="#ef4444", width=3) # Left
                draw_arrow(draw, (450, 390), (530, 390), fill="#ef4444", width=3) # Right
            elif idx == 2: # Gas molecules in rapid motion
                draw.rectangle([250, 240, 550, 480], fill="#ffffff", outline="#10b981", width=3)
                # Gas molecules with speed vectors
                points = [(280, 280, 30, 20), (480, 300, -20, 30), (320, 420, 30, -30), (500, 440, -30, -10), (390, 350, -10, -30)]
                for px, py, dx, dy in points:
                    draw.ellipse([px-10, py-10, px+10, py+10], fill="#f59e0b")
                    draw_arrow(draw, (px, py), (px+dx, py+dy), fill="#d97706", width=2)
                draw_textbox(draw, [200, 520, 600, 600], "Gas molecules are widely spaced and move at\nvery high speeds in random directions.", "#d1fae5", "#10b981", "#065f46", bold_font)
            elif idx == 3: # Atmospheric pressure column
                # Mountain diagram with air column
                draw.polygon([(150, 550), (400, 300), (650, 550)], fill="#cbd5e1", outline="#475569")
                # Density bars
                draw.rectangle([350, 200, 450, 280], fill="#93c5fd", outline="#3b82f6") # low density at peak
                draw.text((400, 240), "Low Density\n(Peak)", fill="#1e3a8a", font=sm_font, anchor="mm")
                draw.rectangle([550, 420, 650, 540], fill="#1e3a8a", outline="#172554") # high density at base
                draw.text((600, 480), "High Density\n(Sea Level)", fill="#ffffff", font=sm_font, anchor="mm")
                draw_textbox(draw, [150, 580, 650, 660], "Gravity pulls air molecules down, creating\nhigher atmospheric pressure at sea level.", "#fef08a", "#eab308", "#854d0e", bold_font)
                
    else:
        # Default drawings for language & social/moral subjects (English, Filipino, Makabansa, GMRC)
        # These subjects are best supported by clear infographics, tables, grids, and concept maps.
        theme_color = SUBJECT_COLORS.get(subject, "#cbd5e1")
        
        if idx == 1: # Concept Map / Column Comparison
            # Draw two main blocks comparing ideas
            draw_textbox(draw, [120, 240, 430, 300], "Category A", theme_color, theme_color, "#ffffff", bold_font)
            draw_textbox(draw, [470, 240, 680, 300], "Category B", theme_color, theme_color, "#ffffff", bold_font)
            
            # Content boxes below
            draw_textbox(draw, [120, 320, 430, 580], get_infographic_text(subject, week, 1, "left"), "#ffffff", "#cbd5e1", "#334155", reg_font)
            draw_textbox(draw, [470, 320, 680, 580], get_infographic_text(subject, week, 1, "right"), "#ffffff", "#cbd5e1", "#334155", reg_font)
            
            # Connection or compare banner at bottom
            draw_textbox(draw, [120, 610, 680, 670], get_infographic_text(subject, week, 1, "bottom"), "#f1f5f9", "#e2e8f0", "#475569", bold_font)
            
        elif idx == 2: # Grid layout / Process / Timeline
            # Three sequential step boxes
            draw_textbox(draw, [100, 230, 700, 290], get_infographic_text(subject, week, 2, "header"), "#f8fafc", theme_color, "#334155", bold_font)
            
            # Step 1
            draw_textbox(draw, [100, 320, 280, 500], get_infographic_text(subject, week, 2, "step1"), "#f0fdf4", "#22c55e", "#15803d", reg_font)
            draw.text((190, 520), "Step 1", fill="#16a34a", font=bold_font, anchor="mm")
            draw_arrow(draw, (290, 410), (330, 410), fill=theme_color, width=3)
            
            # Step 2
            draw_textbox(draw, [340, 320, 520, 500], get_infographic_text(subject, week, 2, "step2"), "#eff6ff", "#3b82f6", "#1d4ed8", reg_font)
            draw.text((430, 520), "Step 2", fill="#2563eb", font=bold_font, anchor="mm")
            draw_arrow(draw, (530, 410), (570, 410), fill=theme_color, width=3)
            
            # Step 3
            draw_textbox(draw, [580, 320, 700, 500], get_infographic_text(subject, week, 2, "step3"), "#fffbeb", "#f59e0b", "#b45309", reg_font)
            draw.text((640, 520), "Step 3", fill="#d97706", font=bold_font, anchor="mm")
            
            draw_textbox(draw, [100, 580, 700, 660], get_infographic_text(subject, week, 2, "summary"), "#bae6fd", "#0284c7", "#0369a1", bold_font)
            
        elif idx == 3: # Concept checklist / Hierarchy / Board
            # Visual board style
            draw_textbox(draw, [100, 220, 700, 280], get_infographic_text(subject, week, 3, "header"), theme_color, theme_color, "#ffffff", bold_font)
            
            # Checklist items list inside a large white container card
            draw.rectangle([100, 300, 700, 600], fill="#ffffff", outline="#cbd5e1", width=2)
            
            items = get_infographic_text(subject, week, 3, "items")
            for i_idx, item in enumerate(items):
                y = 330 + i_idx * 50
                # Draw check box
                draw.rectangle([130, y-10, 150, y+10], fill="#d1fae5", outline="#10b981", width=2)
                # Check mark inside box
                draw.line([(133, y), (140, y+6)], fill="#047857", width=2)
                draw.line([(140, y+6), (148, y-6)], fill="#047857", width=2)
                # Text label next to check
                draw.text((170, y), item, fill="#334155", font=reg_font, anchor="lm")
                
            draw_textbox(draw, [100, 620, 700, 680], get_infographic_text(subject, week, 3, "footer"), "#fef08a", "#eab308", "#854d0e", bold_font)


# Text contents for the standard infographics template generator
def get_infographic_text(subject, week, idx, part):
    # This stores the structured text lists representing each subject and week concept map
    contents = {
        "english": {
            1: {
                1: {"left": "COMMON NOUNS\n\nGeneral names of people,\nplaces, or things.\nAlways lowercase.\n\nExamples:\n• boy\n• city\n• dog\n• school\n• book", "right": "PROPER NOUNS\n\nSpecific names of people,\nplaces, or things.\nAlways capitalized.\n\nExamples:\n• Matteo\n• Koronadal City\n• Golden Retriever\n• DepEd MATATAG\n• Harry Potter", "bottom": "Grammar rule: Capitalize proper nouns in all writing tasks."},
                2: {"header": "Infographic: Concrete vs. Abstract Nouns", "step1": "Concrete Nouns\n(Physical)\n\nCan be perceived by the five senses:\n• table (sight/touch)\n• chime (hearing)\n• perfume (smell)", "step2": "Abstract Nouns\n(Conceptual)\n\nIdeas, feelings,\nor conditions:\n• courage\n• intelligence\n• friendship\n• patience", "step3": "Comparison\n\nYou can touch a book (concrete) but you cannot touch knowledge (abstract)!", "summary": "Core standard: Concrete nouns are tangible; Abstract nouns are ideas."},
                3: {"header": "Singular and Plural Noun rules", "items": ["Singular represents exactly one item.", "Plural represents more than one item.", "Plural nouns typically end in -s or -es.", "Irregular plurals change spelling completely.", "Plural: one box -> two boxes."], "footer": "Singular: apple | Plural: apples"}
            },
            2: {
                1: {"left": "REGULAR PLURALS\n\nFollow standard spelling\nrules to denote more\nthan one.\n\nExamples:\n• cup -> cups\n• box -> boxes\n• baby -> babies\n• watch -> watches", "right": "IRREGULAR PLURALS\n\nDo not follow standard\nrules; change word\nstructure completely.\n\nExamples:\n• child -> children\n• man -> men\n• tooth -> teeth\n• person -> people", "bottom": "Spelling check: Double check irregular plural nouns in spelling tests."},
                2: {"header": "Infographic: Collective Nouns for Groups", "step1": "Group of Animals\n\n• a flock of birds\n• a school of fish\n• a herd of cows\n• a pack of wolves", "step2": "Group of People\n\n• a team of players\n• a crowd of fans\n• a class of students\n• a choir of singers", "step3": "Group of Things\n\n• a bunch of keys\n• a fleet of ships\n• a stack of books\n• a set of tools", "summary": "Collective nouns treat a group of items as a single unit."},
                3: {"header": "Checklist: Plural Noun Spelling Guide", "items": ["Add -s to most singular nouns.", "Add -es to nouns ending in ch, sh, s, x, z.", "Change -y to -ies if preceded by a consonant.", "Keep same form for some nouns (deer, sheep).", "Change -f or -fe to -ves (leaf -> leaves)."], "footer": "Spelling practice builds strong vocabulary!"}
            },
            3: {
                1: {"left": "PERSONAL PRONOUNS\n\nUsed to replace standard\nnames of people or\nthings in sentences.\n\nExamples:\n• I / me\n• you / your\n• he / him\n• she / her\n• they / them", "right": "POSSESSIVE PRONOUNS\n\nUsed to show ownership\nor possession of\nobjects.\n\nExamples:\n• mine / ours\n• yours / theirs\n• his / hers\n• its / whose", "bottom": "Grammar rule: Match pronouns to their antecedent noun in gender."},
                2: {"header": "Infographic: Pronoun-Antecedent Agreement", "step1": "Antecedent Noun\n\nExample:\n'Sarah is going to\nthe local market\nto buy pineapples.'", "step2": "Pronoun replacement\n\nWe replace 'Sarah'\nwith 'She':\n'She is going to\nthe local market.'", "step3": "Agreement match\n\nSarah is female\nand singular, so\nwe must use 'she'\n(not 'he' or 'they').", "summary": "Pronoun and its antecedent must match in number and gender."},
                3: {"header": "Checklist: Pronoun Classifications", "items": ["Subject pronouns act as sentence subjects (I, we).", "Object pronouns receive action (me, us).", "Possessive pronouns show ownership (mine, ours).", "Reflexive pronouns end in -self/-selves.", "Demonstrative pronouns point to things (this, that)."], "footer": "Pronouns prevent repeating names over and over."}
            },
            4: {
                1: {"left": "ACTION VERBS\n\nVerbs that express\nphysical or mental\nactions done by\na subject.\n\nExamples:\n• run\n• jump\n• write\n• think\n• listen", "right": "HELPING VERBS\n\nVerbs that assist the\nmain verb in showing\ntime or possibility.\n\nExamples:\n• am / is / are\n• was / were\n• do / did\n• can / could\n• will / would", "bottom": "Sentence rule: Every complete sentence must contain a verb."},
                2: {"header": "Infographic: Verb Tenses Timeline", "step1": "Past Tense\n\nAction already\ncompleted:\n• 'Matteo wrote'\n• 'I walked'", "step2": "Present Tense\n\nAction happening\nnow or regularly:\n• 'Matteo writes'\n• 'I walk'", "step3": "Future Tense\n\nAction that will\nhappen later:\n• 'Matteo will write'\n• 'I will walk'", "summary": "Verb tenses explain when an action takes place in time."},
                3: {"header": "Checklist: Subject-Verb Agreement Rules", "items": ["Singular subject takes a singular verb (ends in -s).", "Plural subject takes a plural verb (base form).", "Pronoun 'I' takes a plural verb (I walk).", "Pronoun 'You' takes a plural verb (You run).", "Collective nouns take singular verbs (The team plays)."], "footer": "S-V Agreement: The boy runs vs. The boys run."}
            }
        },
        "filipino": {
            1: {
                1: {"left": "PANTANGI\n\nTiyak na ngalan ng\ntao, bagay, hayop,\nlugar, o pangyayari.\nNagsisimula sa malaking\ntitk.\n\nHalimbawa:\n• Matteo\n• Lake Sebu\n• T'nalak\n• Pasko", "right": "PAMBALANA\n\nKaraniwang ngalan ng\ntao, bagay, hayop,\nlugar, o pangyayari.\nNagsisimula sa maliit na\ntitk.\n\nHalimbawa:\n• bata\n• lawa\n• tela\n• pista", "bottom": "Tuntunin: Pantangi = tiyak | Pambalana = karaniwan"},
                2: {"header": "Infographic: Kasarian ng Pangngalan", "step1": "Panlalaki & Pambabae\n\nTukoy na kasarian:\n• kuya / tito (lalaki)\n• ate / tita (babae)\n• hari (lalaki)\n• reyna (babae)", "step2": "Di-tiyak\n\nMaaaring lalaki o babae\nang tinutukoy:\n• guro\n• doktor\n• mag-aaral\n• kapatid", "step3": "Walang Kasarian\n\nMga bagay na walang\nbuhay:\n• aklat\n• lamesa\n• lapis\n• papel", "summary": "Tandaan ang apat na kasarian upang magamit nang wasto sa pangungusap."},
                3: {"header": "Tsart: Tahas, Basal, at Lansakan", "items": ["Tahas: pangngalang nakikita o nahahawakan (aso, aklat).", "Basal: pangngalang di-nahahawakan, ideya o damdamin (pagmamahal, galak).", "Lansakan: pangngalang nagpapahayag ng grupo o kaisahan (tropa, kawan).", "Pambalana ang kinabibilangan ng tahas, basal, at lansakan.", "Halimbawa ng Lansakan: kumpol ng bulaklak."], "footer": "Pag-aralan ang kayarian ng mga pangngalan!"}
            },
            2: {
                1: {"left": "ISAHAN\n\nPanghalili sa ngalan\nng isang tao lamang.\n\nHalimbawa:\n• ako (1st person)\n• ikaw / ka (2nd person)\n• siya (3rd person)\n• ko / mo / niya (ari)", "right": "MARAMIHAN\n\nPanghalili sa ngalan\nng dalawa o higit\npang tao.\n\nHalimbawa:\n• kami / tayo (1st person)\n• kayo (2nd person)\n• sila (3rd person)\n• namin / ninyo / nila (ari)", "bottom": "Tuntunin: Gamitin ang kailanan batay sa dami ng tao."},
                2: {"header": "Infographic: Mga Panauhan ng Panghalip", "step1": "Unang Panauhan\n\nAng taong nagsasalita:\n• ako (isahan)\n• kami (maramihan)\n• tayo (maramihan)", "step2": "Ikalawang Panauhan\n\nAng taong kinakausap:\n• ikaw / ka (isahan)\n• kayo (maramihan)", "step3": "Ikatlong Panauhan\n\nAng taong pinag-uusapan:\n• siya (isahan)\n• sila (maramihan)", "summary": "Ang panauhan ay nagpapakita ng papel ng tao sa usapan."},
                3: {"header": "Checklist: Mga Panghalip Pananong", "items": ["Sino: para sa ngalan ng tao (Sino ang guro?).", "Ano: para sa ngalan ng bagay o hayop (Ano iyan?).", "Saan: para sa ngalan ng lugar o pook (Saan ka pupunta?).", "Kailan: para sa oras o panahon (Kailan ang pista?).", "Alin: para sa pagpili ng bagay (Alin ang gusto mo?)."], "footer": "Ang panghalip pananong ay ginagamit sa pagtatanong."}
            },
            3: {
                1: {"left": "MALAPIT SA NAGSASALITA\n\nIto / Dito\n\nGinagamit kapag ang\nbagay ay hawak o\nmalapit sa taong\nnagsasalita.\n\nHalimbawa:\n• 'Ito ang aking aklat.'\n• 'Dito ka maupo.'", "right": "MALAYO SA NAGSASALITA\n\nIyan (malapit sa kausap)\nIyon (malayo sa dalawa)\n\nGinagamit kapag ang\nbagay ay malayo sa\nnagsasalita.\n\nHalimbawa:\n• 'Iyan ang payong mo.'\n• 'Iyon ang bundok.'", "bottom": "Tuntunin: Piliin ang pamatlig ayon sa layo ng bagay."},
                2: {"header": "Infographic: Distansya ng Pamatlig", "step1": "Ito / Dito\n\nHawak o katabi\nng nagsasalita:\n• distansya: 0-1 metro\n• 'Ito ang lapis ko.'", "step2": "Iyan / Diyan\n\nMalapit sa kausap\nng nagsasalita:\n• distansya: 1-3 metro\n• 'Iyan ang hawak mo.'", "step3": "Iyon / Doon\n\nMalayo sa parehong\nnagsasalita at kausap:\n• distansya: higit sa 3m\n• 'Iyon ang ulap.'", "summary": "Ang panghalip pamatlig ay nagpapakita ng kinalalagyan ng bagay."},
                3: {"header": "Checklist: Panghalip Pamanggit at Pamatlig", "items": ["Ito at Dito (malapit sa nagsasalita).", "Iyan at Diyan (malapit sa kausap).", "Iyon at Doon (malayo sa dalawa).", "Panghalip pamanggit: na, ng, g (nag-uugnay).", "Halimbawa: Ang bata na masipag ay matalino."], "footer": "Magsanay sa pagturo ng tamang lokasyon!"}
            },
            4: {
                1: {"left": "ASPEKTONG NAGANAP\n\nPerpektibo\n\nKilos na tapos na o\nnagawa na sa nakaraan.\n\nHalimbawa:\n• tumakbo kahapon\n• sumulat kanina\n• nagluto kagabi\n• kumain na", "right": "ASPEKTONG MAGAGANAP\n\nKontemplatibo\n\nKilos na hindi pa\numpisa; gagawin pa\nlang sa hinaharap.\n\nHalimbawa:\n• tatakbo bukas\n• susulat mamaya\n• magluluto susunod\n• kakain pa lang", "bottom": "Tuntunin: Aspekto ng pandiwa = panahon ng kilos"},
                2: {"header": "Infographic: Tatlong Aspekto ng Pandiwa", "step1": "Naganap (Past)\n\nTapos na ang kilos:\n• nagbasa\n• sumayaw\n• uminom", "step2": "Nagaganap (Present)\n\nKasalukuyang ginagawa:\n• nagbabasa\n• sumasayaw\n• umiinom", "step3": "Magaganap (Future)\n\nGagawin pa lamang:\n• magbabasa\n• sasayaw\n• iinom", "summary": "Ang aspekto ay nagpapakita kung kailan ginawa ang kilos."},
                3: {"header": "Checklist: Pandiwa at Pokus ng Kilos", "items": ["Pandiwa ay salitang nagsasaad ng kilos o galaw.", "Naganap (Perpektibo) - tapos na ang kilos.", "Nagaganap (Imperpektibo) - ginagawa pa ang kilos.", "Magaganap (Kontemplatibo) - gagawin pa lang.", "Pokus ng pandiwa: relasyon ng pandiwa sa paksa."], "footer": "Mag-aral ng pandiwa para sa mahusay na pagsasalita!"}
            }
        },
        "makabansa": {
            1: {
                1: {"left": "SANGGUNIANG BARANGAY\n\nAng lokal na pamahalaan\nsa pinakamababang antas\nng komunidad.\n\nBinubuo ng:\n• Punong Barangay (Kapitan)\n• Pitong Barangay Kagawad\n• SK Chairman (Kabataan)", "right": "TUNGKULIN NG PINUNO\n\nMga responsibilidad ng\nmga lider sa barangay:\n• Pagpapanatili ng kapayapaan\n• Kalinisan ng komunidad\n• Ayusin ang mga hidwaan\n• Serbisyong pangkalusugan", "bottom": "Pamumuno: Ang lider ay naglilingkod sa komunidad."},
                2: {"header": "Infographic: Serbisyo ng Pamahalaan", "step1": "Kalusugan (Health)\n\n• Libreng gamot sa Center\n• Bakuna para sa mga bata\n• Emergency ambulance\n• Feeding program", "step2": "Edukasyon (Education)\n\n• Pagpapatayo ng paaralan\n• Libreng aklat at gamit\n• Day care center program\n• Scholarships", "step3": "Seguridad (Security)\n\n• Barangay tanod patrol\n• Pagpapanatili ng batas\n• Fire protection tools\n• Disaster rescue team", "summary": "Ang lokal na pamahalaan ay nagbibigay ng pangunahing serbisyo."},
                3: {"header": "Checklist: Dibisyon ng Pamahalaan sa Pilipinas", "items": ["Pambansang Pamahalaan (National Government).", "Panlalawigang Pamahalaan (Provincial - South Cotabato).", "Pambayang Pamahalaan (Municipal - Koronadal/Polomolok).", "Barangay (Pinakamababang antas ng pamamahala).", "Tungkulin ng mamamayan na sumunod sa batas."], "footer": "Maging aktibong bahagi ng iyong komunidad!"}
            },
            2: {
                1: {"left": "KASAYSAYAN\n\nAng pinagmulan at\nmga pagbabagong naganap\nsa komunidad sa paglipas\nng panahon.\n\nMilestones:\n• 1914: Settlement programs\n• 1966: South Cotabato province\n• Ngayon: Modernong pag-unlad", "right": "KULTURANG PAMANA\n\nMga tradisyon at mga\nkatutubong kaalaman ng\nating mga ninuno.\n\nHalimbawa:\n• Paniniwala ng B'laan\n• Maguindanaon culture\n• Kwento ng mga nakatatanda", "bottom": "Kasaysayan: Ang nakaraan ay gabay sa ating kinabukasan."},
                2: {"header": "Infographic: Lupang Katutubo at Monumento", "step1": "Tribong B'laan\n\n• Katutubong mamamayan\n• Tagapangalaga ng kalikasan\n• Tradisyonal na sining\n• Lake Sebu ancestral lands", "step2": "Tribong Maguindanaon\n\n• Kultura ng kapatagan\n• Makasaysayang ugnayan\n• Tradisyonal na musika\n• Pamana sa South Cotabato", "step3": "Mga Monumento\n\n• Rizal Monument (Calamba)\n• Roundball Monument\n• Tnalak weaving houses\n• Historical markers", "summary": "Pinapahalagahan natin ang mga katutubo at kasaysayan."},
                3: {"header": "Checklist: Pagsusuri ng Makasaysayang Lugar", "items": ["Alamin ang pinagmulan ng pangalan ng lugar.", "Tukuyin ang mga unang nanirahan (mga katutubo).", "Suriin ang mga pagbabago sa transportasyon at gusali.", "Bisitahin ang mga monumento at museum sa lalawigan.", "Itala ang mga kwento ng mga bayani sa komunidad."], "footer": "Ang South Cotabato ay mayaman sa kasaysayan!"}
            },
            3: {
                1: {"left": "TANGIBLE HERITAGE\n\nMga pamanang materyal\nna nakikita at\nnahahawakan.\n\nHalimbawa:\n• Rizal at Roundball monument\n• Weaving looms sa Lake Sebu\n• Lumang simbahan at gusali\n• Tradisyonal na kasuotan", "right": "INTANGIBLE HERITAGE\n\nMga pamanang hindi\nnahahawakan tulad ng\ntradisyon, kwento, at\nkatutubong sining.\n\nHalimbawa:\n• Paghahabi ng T'nalak\n• Lemlunay at T'nalak festival\n• Katutubong sayaw at kanta", "bottom": "Kultura: Ang pamana ay nagpapakita ng ating pagkakakilanlan."},
                2: {"header": "Infographic: Paghahabi ng T'nalak sa Lake Sebu", "step1": "Pagkuha ng Abaca\n\n• Pag-ani ng hibla ng saging\n• Pagpapatuyo sa araw\n• Pag-uuri ng mga hibla\n• Paghahanda ng sinulid", "step2": "Pangkukulay (Dyeing)\n\n• Paggamit ng likas na kulay\n• Itim mula sa dahon ng Knalum\n• Pula mula sa ugat ng Loko\n• Tradisyonal na pagpapakulo", "step3": "Paghahabi (Weaving)\n\n• Pag-ayos sa habihan (loom)\n• Paghabi ayon sa panaginip\n• Pagpapakinis gamit ang shell\n• Pagbuo ng T'nalak cloth", "summary": "Ang T'nalak ay tinatawag na 'Dream Weaving' ng mga T'boli."},
                3: {"header": "Checklist: Kulturang Pamana at Pagdiriwang", "items": ["Pista ng T'nalak (Hulyo sa Koronadal City).", "Pista ng Lemlunay (Lake Sebu cultural festival).", "Pista ng Helobung (T'boli arts and traditions).", "Pagpapatala ng mga pamana sa DepEd at UNESCO.", "Pangangalaga sa katutubong wika at tradisyon."], "footer": "Ipagmalaki ang sining at kultura ng South Cotabato!"}
            },
            4: {
                1: {"left": "AGRIKULTURA\n\nPangunahing kabuhayan\nsa South Cotabato\ntulad ng pagsasaka at\npananaliksik sa tilapia.\n\nHalimbawa:\n• Pinya sa Polomolok\n• Tilapia sa Lake Sebu\n• Abaca sa Tupi\n• Rice fields sa Norala", "right": "INDUSTRIYA AT SERBISYO\n\nMga kabuhayan sa lungsod\nna nagpoproseso ng\nprodukto at nagbibigay\nng serbisyo.\n\nHalimbawa:\n• Pineapple processing factory\n• Fish public markets\n• Transportasyon at tricycle\n• Bangko at tindahan", "bottom": "Ekonomiya: Ang kabuhayan ay nagbibigay ng pag-unlad."},
                2: {"header": "Infographic: Likas-Kayang Pagsasaka", "step1": "Pag-aalaga sa Lupa\n\n• Paggamit ng natural fertilizer\n• Crop rotation methods\n• Pag-iwas sa kemikal\n• Pagtatanim ng puno", "step2": "Pangangalaga sa Tubig\n\n• Sustainable water systems\n• Pag-iwas sa polusyon sa lawa\n• Wastewater recycling\n• Tilapia cage monitoring", "step3": "Lokal na Produksyon\n\n• Abaca organic farming\n• Pineapple soil conservation\n• Tinalak natural weaving\n• Local market priority", "summary": "Ang likas-kayang pag-unlad ay nagpoprotekta sa ating kalikasan."},
                3: {"header": "Checklist: Ikutang Pang-ekonomiya ng Komunidad", "items": ["Paggawa ng produkto sa bukid (production).", "Pag-transport ng produkto sa merkado (distribution).", "Pagbebenta sa public market sa Koronadal (trade).", "Pagbili at pagkonsumo ng pamilya (consumption).", "Pagbabayad ng lokal na buwis para sa proyekto."], "footer": "Suportahan ang mga lokal na produkto ng ating lalawigan!"}
            }
        },
        "gmrc": {
            1: {
                1: {"left": "SARILING DISIPLINA\n\nAng kakayahang kontrolin\nang sariling kilos,\noras, at damdamin sa\nlahat ng pagkakataon.\n\nHalimbawa:\n• Paggising nang maaga\n• Paggawa ng takdang-aralin\n• Pagkain ng masustansya\n• Paglilimita sa screen time", "right": "INTEGRIDAD AT ETIKA\n\nAng paggawa ng tama at\npagsasabi ng totoo kahit\nwalang nakakatingin\nsa iyo.\n\nHalimbawa:\n• Pagsasabi ng totoo sa magulang\n• Pagbabalik ng sobrang sukli\n• Hindi pangongopya sa pagsusulit\n• Pag-amin sa sariling pagkakamali", "bottom": "Karakter: Ang disiplina at integridad ay pundasyon ng mabuting tao."},
                2: {"header": "Infographic: Apat na Pangunahing Pagpapahalaga", "step1": "Disiplina (Discipline)\n\n• Pagkakaroon ng routine\n• Pagsunod sa iskedyul\n• Pag-iwas sa tamad na kilos\n• Pagtapos ng gawain", "step2": "Paggalang (Respect)\n\n• Pagmamano sa nakatatanda\n• Pagsasalita ng po at opo\n• Pakikinig kapag may nagsasalita\n• Respeto sa opinyon ng iba", "step3": "Pananagutan (Responsibility)\n\n• Pag-aalaga sa sariling gamit\n• Paglilinis ng sariling kwarto\n• Pag-aaral nang mabuti\n• Pagtulong sa pamilya", "summary": "Ang mga pagpapahalagang ito ay gabay sa araw-araw na buhay."},
                3: {"header": "Checklist: Mga Paraan ng Self-Regulation", "items": ["Gumawa ng pang-araw-araw na iskedyul ng pag-aaral.", "Magtakda ng layunin (goals) bago magsimula.", "Iwasan ang mga distractions (TV, cellphone).", "Maglaan ng oras para sa pahinga at laro.", "Suriin ang sariling pag-unlad bawat gabi."], "footer": "Ang mabuting ugali ay nagsisimula sa sarili!"}
            },
            2: {
                1: {"left": "PAGGALANG SA MAGULANG\n\nPagkilala sa awtoridad\nat pagmamahal ng ating\nmga magulang sa pamamagitan\nng masunuring kilos.\n\nHalimbawa:\n• Pagsunod sa kanilang payo\n• Pagtulong sa gawaing-bahay\n• Pagsasabi ng po at opo\n• Pag-alaga sa kanila sa sakit", "right": "PAGGALANG SA NAKATATANDA\n\nPagbibigay-pugay sa mga\nlolo, lola, tito, tita,\nat iba pang nakatatanda\nsa komunidad.\n\nHalimbawa:\n• Pagmamano sa pagdating\n• Pag-alok ng upuan sa bus\n• Hindi pagsasabay sa pagsasalita\n• Paggamit ng magalang na salita", "bottom": "Pamilya: Ang paggalang sa pamilya ay nagpapakita ng magandang asal."},
                2: {"header": "Infographic: Karapatan vs. Tungkulin ng Bata", "step1": "Mga Karapatan (Rights)\n\n• Karapatang makapag-aral\n• Karapatang maglaro at maglibang\n• Karapatang maging ligtas sa saktan\n• Karapatan sa sapat na pagkain", "step2": "Kaukulang Tungkulin\n\n• Mag-aral nang mabuti at seryoso\n• Iligpit ang mga laruan pagkatapos\n• Sumunod sa mga panuntunang ligtas\n• Huwag mag-aksaya ng pagkain", "step3": "Pagsasama\n\nSa bawat karapatan na\niyong tinatamasa, may\nkatapat na tungkulin\nna dapat gampanan.", "summary": "Ang karapatan ay may kasamang responsibilidad sa kapwa."},
                3: {"header": "Checklist: Pagpapakita ng Paggalang sa Iba", "items": ["Paggamit ng magagalang na tawag (Lolo, Lola, Po, Opo).", "Pakikinig nang may atensyon sa payo ng magulang.", "Respeto sa relihiyon at paniniwala ng kapwa.", "Pagtulong sa nakatatanda sa pagtawid o pagbuhat.", "Pag-iwas sa pagsagot nang pabalang o pasigaw."], "footer": "Ang paggalang ay susi sa kapayapaan sa tahanan!"}
            },
            3: {
                1: {"left": "EMPATHY\n\nAng kakayahang umunawa\nat maramdaman ang\nnararamdaman ng ibang\ntao (paglalagay ng sarili\nsa kanilang kalagayan).\n\nHalimbawa:\n• Pag-comfort sa malungkot\n• Pagtulong sa nahulugan ng gamit\n• Pag-intindi sa may kapansanan\n• Pakikiramay sa may sakit", "right": "PAKIKIPAGKAPWA-TAO\n\nAng bukas at tapat\nna pakikitungo sa\nkapwa nang may pagmamahal\nat walang diskriminasyon.\n\nHalimbawa:\n• Pagbabahagi ng baon o pagkain\n• Pagpapasali sa laro sa kaklase\n• Pagsasalita ng mabubuting salita\n• Pag-iwas sa pangbu-bully", "bottom": "Pakikipagkapwa: Ang pag-unawa sa kapwa ay nagbubuklod sa atin."},
                2: {"header": "Infographic: Resolusyon ng Alitan (Conflict Resolution)", "step1": "Huminto at Kumalma\n\n• Huminga nang malalim\n• Iwasan ang sumigaw\n• Palamigin ang ulo\n• Makinig muna sa iba", "step2": "Mag-usap nang Maayos\n\n• Sabihin ang nararamdaman\n• Gumamit ng 'I' statements\n• Huwag manisi ng kapwa\n• Maging tapat at bukas", "step3": "Magkasundo (Agree)\n\n• Maghanap ng solusyon\n• Magpatawad sa mali\n• Makipagkamay sa kapwa\n• Iwasan ang paghihiganti", "summary": "Lutasin ang mga hidwaan sa pamamagitan ng mapayapang usapan."},
                3: {"header": "Checklist: Paano Magpakita ng Empathy bawat araw", "items": ["Makinig nang mabuti kapag may nagkukuwento.", "Itanong sa kaklase kung kamusta ang kanyang araw.", "Tulungan ang kaibigan na nahihirapan sa aralin.", "Humingi ng paumanhin kung nakagawa ng mali.", "Ibahagi ang laruan o pagkain sa walang sapat."], "footer": "Ang empathy ay nagpapakita ng busilak na puso!"}
            },
            4: {
                1: {"left": "PANANAGUTANG SIBIL\n\nMga tungkulin bilang\nmabuting mamamayan sa\nating komunidad at\nbansa.\n\nHalimbawa:\n• Pagsunod sa traffic rules\n• Pagpapanatili ng kapayapaan\n• Paggalang sa watawat ng bansa\n• Pagbabayad ng tamang buwis", "right": "PANGANGALAGA SA KALIKASAN\n\nAng ating responsibilidad\nna protektahan at\npahalagahan ang kapaligiran\nat mga likas na yaman.\n\nHalimbawa:\n• Pagrerecycle (Reduce/Reuse)\n• Pagtatanim ng mga puno\n• Pag-iwas sa pagtapon ng basura\n• Pagtitipid sa tubig at kuryente", "bottom": "Tungkulin: Ang mabuting mamamayan ay nagmamahal sa bayan at kalikasan."},
                2: {"header": "Infographic: Pangangalaga sa Kalikasan (3Rs)", "step1": "Reduce (Bawasan)\n\n• Bawasan ang paggamit ng plastic\n• Magdala ng eco-bag sa palengke\n• Iwasan ang pag-aksaya ng papel\n• Bawasan ang basura sa bahay", "step2": "Reuse (Gamitin Muli)\n\n• Gamitin muli ang mga lumang bote\n• Ipamahagi ang mga lumang laruan\n• Gamitin ang magkabilang panig ng papel\n• Reusable food containers", "step3": "Recycle (I-proseso)\n\n• Ihiwalay ang nabubulok sa di-nabubulok\n• Gumawa ng compost mula sa dahon\n• I-recycle ang mga lumang karton\n• Paglikha ng sining mula sa basura", "summary": "Ang pangangalaga sa kalikasan ay pananagutan nating lahat."},
                3: {"header": "Checklist: Tungkulin sa Paaralan at Tahanan", "items": ["Gawin ang takdang-aralin bago maglaro.", "Sundin ang mga utos at paalala ng mga magulang.", "Itapon ang basura sa tamang tapunan sa paaralan.", "Igalang ang guro at makipagtulungan sa kaklase.", "Iligpit ang sariling higaan pagkapasok sa umaga."], "footer": "Ang responsableng bata ay kinagigiliwan ng lahat!"}
            }
        }
    }
    
    return contents[subject][week][idx][part]

if __name__ == "__main__":
    generate_images()
