import os

OUTPUT_PATH = "/home/moondae/Antigravity Projects/Matts Files_apk/week2_image_prompts.md"

PROMPTS_DATA = {
    "math": [
        {
            "index": 1,
            "slide": "Slide 5",
            "title": "Measuring in Square Meters",
            "desc": "A visual demonstration of measuring a larger floor area in square meters.",
            "prompt": "An educational 2D vector illustration showing a child layout large square cardboard grids representing square meters on the floor of a bright classroom. A teacher stands nearby smiling. Clean vector style, soft colors, high contrast, white background.",
            "style": "Friendly, flat 2D vector illustration style with clean outlines and soft shadows."
        },
        {
            "index": 2,
            "slide": "Slide 9",
            "title": "Drawing a Metric Rectangle",
            "desc": "A clean geometric diagram of drawing a rectangle with a ruler.",
            "prompt": "A minimalist 2D vector educational diagram showing a wooden ruler drawing a precise rectangle on grid paper. The ruler has clear tick marks (no numbers). The rectangle has a dashed blue outline and a light blue fill. Flat vector design, bold colors, white background.",
            "style": "Minimalist, precise geometric diagram style."
        },
        {
            "index": 3,
            "slide": "Slide 13",
            "title": "Representing Lines",
            "desc": "A geometric concept of a line passing through points with arrows showing infinity.",
            "prompt": "An educational 2D vector diagram of a straight horizontal line passing through two distinct dots labeled A and B. The line has clear arrowheads on both ends showing it extends infinitely. Modern flat style, bold blue colors, light grey background.",
            "style": "Clean geometric line drawing style."
        },
        {
            "index": 4,
            "slide": "Slide 17",
            "title": "Rays in Daily Life",
            "desc": "Flashlight beam representing a ray extending in one direction.",
            "prompt": "A beautiful 2D vector illustration of a child holding a yellow flashlight in a dark room. A bright, focused cone of light extends straight from the flashlight to the opposite wall, acting as a real-world model of a geometric ray. Cute cartoon style, warm colors.",
            "style": "Vibrant cartoon illustration with soft glow effects."
        },
        {
            "index": 5,
            "slide": "Slide 21",
            "title": "Fish Cage Grids in Lake Sebu",
            "desc": " Tilapia fish cages floating in Lake Sebu represented as a grid.",
            "prompt": "A colorful 2D vector illustration of scenic Lake Sebu with green hills in the background. In the calm water, a neat rectangular grid of floating fish cages contains small tilapia fish swimming. A local wooden canoe is parked at the side. Warm child-friendly colors.",
            "style": "Watercolor-like digital painting with clean vector elements."
        }
    ],
    "science": [
        {
            "index": 1,
            "slide": "Slide 5",
            "title": "Tinkering with Air Pressure",
            "desc": "Shows a plastic tube syringe compressing air under finger pressure.",
            "prompt": "A simple 2D vector educational illustration of a pair of hands pushing the plunger of a plastic syringe connected by a clear tube to another syringe. Wavy blue lines inside represent air compression under force. Clear, clean vector shapes, white background.",
            "style": "Clean, technical educational illustration style."
        },
        {
            "index": 2,
            "slide": "Slide 9",
            "title": "Tinkering with Surface Tension",
            "desc": "Liquid dish soap disperses pepper flakes on water surface.",
            "prompt": "An educational 2D vector diagram showing a bowl filled with water and dark pepper flakes floating on top. A drop of liquid soap from a bottle is dripping into the center, causing the pepper flakes to scatter quickly to the outer edges. High clarity, simple composition.",
            "style": "Flat design infographic style with bold colors."
        },
        {
            "index": 3,
            "slide": "Slide 13",
            "title": "Tinkering with Light Reflection",
            "desc": "Illustrates mirror angles creating multiple reflection paths.",
            "prompt": "A stylized 2D vector illustration of a red laser pointer beam hitting a small glass mirror at an angle and bouncing cleanly off to hit another mirror. Shiny reflections and clean straight light lines. Minimalist vector design, dark blue background for contrast.",
            "style": "Futuristic neon-vector style with high-contrast lines."
        },
        {
            "index": 4,
            "slide": "Slide 17",
            "title": "Tinkering with Rock Density",
            "desc": "Measuring volume of irregular stone using water overflow container.",
            "prompt": "An educational 2D vector diagram showing a clear plastic jar filled to the brim with water. A hand drops a brown stone inside, causing water to spill over the spout into a smaller measuring cup nearby. Clean vector outlines, blue water accents, white background.",
            "style": "Friendly laboratory science workbook style."
        },
        {
            "index": 5,
            "slide": "Slide 21",
            "title": "Guided Practice: Liquid Viscosity",
            "desc": "Comparing flow speed of different liquids like water vs maple syrup.",
            "prompt": "A comparative 2D vector illustration showing two identical glass bottles tilted downwards. One bottle pours water quickly in a thin, fast splash. The other bottle pours thick brown maple syrup slowly in a heavy, viscous glob. Clear visual difference in flow speed, white background.",
            "style": "Flat vector educational comparison style."
        }
    ],
    "english": [
        {
            "index": 1,
            "slide": "Slide 5",
            "title": "Phonics Hunt: In the Pond",
            "desc": "A small fish swimming in a pond to teach 'sw' phonics.",
            "prompt": "A bright 2D vector illustration of a clear garden pond. A cute, colorful fish swims happily in the blue water near green water lily pads. A shiny metallic drain plug is visible at the bottom of the pond. Child-friendly vector design, vibrant colors, white background.",
            "style": "Vibrant cartoon flat vector style with bold outlines."
        },
        {
            "index": 2,
            "slide": "Slide 9",
            "title": "Grammar: Action Words (Verbs)",
            "desc": "Children performing physical actions like jumping, running, writing.",
            "prompt": "A lively 2D vector illustration of three happy children playing. One boy is jumping high in the air, a girl is running on the green grass, and another boy is sitting at a desk writing in a book. Style is simple, friendly, child-focused flat vector, clean outlines.",
            "style": "Playful, organic cartoon style with soft pastels."
        },
        {
            "index": 3,
            "slide": "Slide 13",
            "title": "Question Words",
            "desc": "Speech bubbles containing icons representing Who, What, Where, When, Why.",
            "prompt": "A conceptual 2D vector illustration featuring a friendly cartoon owl mascot standing next to a blackboard. On the board are five colorful speech bubbles, each containing a simple representative icon: a person's silhouette (Who), a gift box (What), a map pin (Where), a clock (When), and a lightbulb (Why). Clean flat vector.",
            "style": "Modern minimalist educational icon style."
        },
        {
            "index": 4,
            "slide": "Slide 17",
            "title": "Grammar: Possessive Pronouns",
            "desc": "Children sharing and pointing to toys representing possessive terms.",
            "prompt": "A warm 2D vector illustration of a boy and a girl sharing toys. The boy points to a toy car in his hand, and the girl points to a teddy bear on the table, representing concepts of 'my', 'your', and 'our'. Friendly cartoon style, warm colors, clean outlines.",
            "style": "Soft, friendly children's storybook illustration style."
        },
        {
            "index": 5,
            "slide": "Slide 21",
            "title": "Guided Practice: Spotting CCVC",
            "desc": "A child sitting on a flat rock in nature.",
            "prompt": "A peaceful 2D vector illustration of a young child sitting quietly on a large, flat gray rock in a forest clearing. Wild flowers grow around the rock. The sun shines softly through tree branches. Simple composition, flat vector design, natural green colors.",
            "style": "Calming nature-focused flat vector style."
        }
    ],
    "filipino": [
        {
            "index": 1,
            "slide": "Slide 5",
            "title": "Ngalan ng Pangyayari (Event Name)",
            "desc": "Visual representation of major life events or celebrations.",
            "prompt": "A happy 2D vector illustration of a children's birthday party. A large chocolate cake with candles sits on a table, surrounded by colorful balloons, party hats, and hanging decorations. Warm, festive atmosphere, clean cartoon outlines, white background.",
            "style": "Festive, colorful flat vector design."
        },
        {
            "index": 2,
            "slide": "Slide 9",
            "title": "Pangyayari: Mga Pagdiriwang (Event: Celebrations)",
            "desc": "Traditional Filipino celebration like Christmas or Fiesta.",
            "prompt": "A lively 2D vector illustration of a traditional Filipino town fiesta. Colorful paper pennant banners (banderitas) hang across the street. A decorated house front displays a round Christmas star lantern (parol). Happy cartoon style, rich colors, sunny day.",
            "style": "Detailed, cultural flat vector illustration style."
        },
        {
            "index": 3,
            "slide": "Slide 13",
            "title": "Guided Practice: Pangyayari",
            "desc": "Representing a Christmas celebration scene.",
            "prompt": "A warm 2D vector illustration of a Filipino family gathered around a table for Noche Buena during Christmas. A glowing star lantern (parol) hangs by the window. They are smiling and sharing food. Warm lighting, friendly cartoon outlines.",
            "style": "Cozy, warm illustration style with soft gradients."
        },
        {
            "index": 4,
            "slide": "Slide 17",
            "title": "Kategorya ng Tao: Mga Tungkulin (Category of Person: Duties)",
            "desc": "Professional roles of people in the community.",
            "prompt": "A split 2D vector illustration showing three common community roles: a smiling teacher holding a book, a friendly doctor with a stethoscope, and a hard-working farmer holding fresh vegetables. Simple composition, high clarity, white background.",
            "style": "Minimalist character design style."
        },
        {
            "index": 5,
            "slide": "Slide 21",
            "title": "Pagsasanay sa Kategorya: Tao",
            "desc": "Identifying category of person in a school setting.",
            "prompt": "A friendly 2D vector illustration of a school classroom. A female teacher stands next to a blackboard, smiling and writing, while a young boy and girl sit at their desks, listening and taking notes. Simple classroom setup, clean vector lines.",
            "style": "Clean, educational vector character design style."
        }
    ],
    "makabansa": [
        {
            "index": 1,
            "slide": "Slide 5",
            "title": "Ang Simbahan: Pook ng Pananampalataya (The Church: Place of Faith)",
            "desc": "A place of worship in the community representing faith.",
            "prompt": "A beautiful 2D vector illustration of a clean white community church and a mosque sitting side-by-side under a calm blue sky with soft white clouds. A green garden path leads to their entrances. Peaceful and respectful mood, clean flat vector.",
            "style": "Peaceful architectural vector illustration style."
        },
        {
            "index": 2,
            "slide": "Slide 9",
            "title": "Ang Police Outpost: Pook ng Seguridad",
            "desc": "A community security outpost with tanods.",
            "prompt": "A friendly 2D vector illustration of a small community police outpost (barangay outpost) in the Philippines. A smiling police officer and a barangay tanod stand next to it, waving hello. Bright, safe neighborhood setting, clean lines.",
            "style": "Bright, community-friendly flat vector style."
        },
        {
            "index": 3,
            "slide": "Slide 13",
            "title": "Guided Practice: Pook at Tungkulin",
            "desc": "Connecting places in community to their functions.",
            "prompt": "An educational 2D vector diagram showing a marketplace on one side with fresh fruits, and a health clinic on the other side with a medical cross icon. Stylized lines connect them to represent community roles and functions. Flat vector, clean outlines.",
            "style": "Sleek infographic connector layout style."
        },
        {
            "index": 4,
            "slide": "Slide 17",
            "title": "Maling Paglalarawan ng Pook-Samba",
            "desc": "Showing respect for sacred places of worship.",
            "prompt": "An educational 2D vector illustration showing children entering a quiet place of worship with respectful, quiet postures. A green checkmark icon is displayed at the top corner. Simple, clear composition emphasizing good behavior, white background.",
            "style": "Moral instruction flat vector style."
        },
        {
            "index": 5,
            "slide": "Slide 21",
            "title": "Additional Training 4 (Community Map)",
            "desc": "A simple map of community locations.",
            "prompt": "A simple, child-friendly 2D vector map layout showing a school, a church, a marketplace, and a playground connected by gray streets. Small green trees and houses fill the empty spaces. Highly readable, simple isometric grid style.",
            "style": "Cute, simplified isometric map design style."
        }
    ],
    "gmrc": [
        {
            "index": 1,
            "slide": "Slide 5",
            "title": "Pakikipaglaro nang may Disiplina (Playing with Discipline)",
            "desc": "Children playing games in a clean plaza in a disciplined way.",
            "prompt": "A happy 2D vector illustration of children playing a traditional game like 'piko' or hopscotch in a clean public park plaza. They are taking turns patiently and smiling. Sunlit day, clean environment, warm colors, flat vector outlines.",
            "style": "Vibrant park illustration style with friendly characters."
        },
        {
            "index": 2,
            "slide": "Slide 9",
            "title": "Guided Practice: Pagtulong sa Pagsulat (Guided Practice: Writing Help)",
            "desc": "Helping a classmate with their writing exercises.",
            "prompt": "A warm 2D vector illustration of two children sitting together at a wooden school desk. One child is gently helping the other classmate write letters in their notebook, pointing to the page. Friendly and encouraging mood, flat vector outlines.",
            "style": "Warm, cooperative classroom vector style."
        },
        {
            "index": 3,
            "slide": "Slide 13",
            "title": "Maling Pakikipag-away sa Palaro (Wrong Game Fighting)",
            "desc": "Avoiding arguments when losing in playground games.",
            "prompt": "An educational 2D vector illustration showing a child looking disappointed after losing a game, but a friend is smiling and shaking their hand to show good sportsmanship. Simple, positive resolution composition, clean cartoon outlines.",
            "style": "Character-focused moral education illustration style."
        },
        {
            "index": 4,
            "slide": "Slide 17",
            "title": "Additional Training 3 (Family Sharing)",
            "desc": "Sharing learning materials with family members.",
            "prompt": "A warm 2D vector illustration of a child sitting on a living room sofa next to their mother, proudly showing her their completed homework book. The mother is smiling and hugging the child. Cozy home setting, soft warm colors.",
            "style": "Cozy domestic flat vector storybook style."
        },
        {
            "index": 5,
            "slide": "Slide 21",
            "title": "Additional Training 7 (Plaza Game Clean)",
            "desc": "Cleaning up play area after a plaza game.",
            "prompt": "A helpful 2D vector illustration of two children picking up plastic wrappers and placing them into a green recycling bin in a public plaza playground. Clean, tidy surroundings, bright colors, friendly flat vector outlines.",
            "style": "Eco-friendly, community-service flat vector style."
        }
    ]
}

def generate_markdown():
    lines = []
    lines.append("# Google Nano Banana Image Prompts - Grade 3 Study Guide (Week 2)")
    lines.append("")
    lines.append("This document contains a comprehensive set of image-generating prompts for **Week 2** across all six subjects of Grade 3 (Math, Science, English, Filipino, Makabansa, GMRC). There are 5 images per subject, making a total of 30 images.")
    lines.append("")
    lines.append("These prompts follow the **Presentation Image Prompt Generation Framework** (educational value, age appropriateness for Grade 3, visual clarity, consistency, and negative prompting).")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## Style Guide (Consistent Across All Prompts)")
    lines.append("To ensure the study guide feels professional, cohesive, and appealing to Grade 3 students, all prompts request a **consistent visual style**:")
    lines.append("* **Aesthetic**: Friendly, clean, 2D vector educational illustration style with clear outlines and soft shadows.")
    lines.append("* **Palette**: Clean, harmonious, child-friendly color palettes tailored to the subject theme.")
    lines.append("* **Target Audience**: 8-year-old child level. Simple compositions with high clarity and clear visual hierarchy.")
    lines.append("* **Important Constraint**: **No text, numbers, letters, labels, or watermarks** inside the generated images.")
    lines.append("* **Style-independence clause**: Each prompt includes a distinct stylistic variant descriptor to prevent style bleeding or identical compositions across slides of the same week.")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## Index Mapping Summary")
    lines.append("")
    lines.append("| Subject | Image Index | Slide Index | Slide Title | Recommended Filename |")
    lines.append("| :--- | :---: | :---: | :--- | :--- |")
    
    for sub, images in PROMPTS_DATA.items():
        for img in images:
            sub_name = sub.capitalize()
            lines.append(f"| **{sub_name}** | {img['index']} | {img['slide']} | {img['title']} | `{sub}_w2_img{img['index']}.png` |")
            
    lines.append("")
    lines.append("---")
    lines.append("")
    
    subject_counter = 1
    for sub, images in PROMPTS_DATA.items():
        lines.append(f"## {subject_counter}. {sub.upper()} Week 2 Prompts")
        lines.append("")
        
        for img in images:
            lines.append(f"### Image {img['index']}: {img['title']}")
            lines.append(f"* **Filename**: `{sub}_w2_img{img['index']}.png`")
            lines.append(f"* **Slide Index**: {img['slide']}")
            lines.append(f"* **Slide Title**: {img['title']}")
            lines.append(f"* **Description**: {img['desc']}")
            lines.append(f"* **Google Nano Banana Prompt**:")
            lines.append(f"  > **Prompt**: {img['prompt']} Style variant: {img['style']} Note: Make sure the output visual style is completely fresh and independent of previous slide designs in this week.")
            lines.append(f"  > **Negative Prompt**: text, words, letters, numbers, labels, 3D, photorealistic, busy background, shadows, watermarks.")
            lines.append("")
            
        lines.append("---")
        lines.append("")
        subject_counter += 1
        
    content = "\n".join(lines)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Generated {OUTPUT_PATH} successfully!")

if __name__ == "__main__":
    generate_markdown()
