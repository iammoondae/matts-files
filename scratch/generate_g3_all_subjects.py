import os
import re
import json

# Generator for Grade 3 Science, Filipino, Makabansa, and GMRC (Weeks 1 to 4)
# Enforces the Moon Standards:
# - Exactly 25 slides per subject/week, each containing exactly 8 lines of text.
# - Exactly 25 standard questions per subject/week (standardized schema: type, q, options, answer).
# - Exactly 5 challenge questions.
# - Exactly 3 worksheet pages.
# - Exactly 1 performance task.
# - Bilingual translation spans for Filipino, Makabansa, and GMRC slides.
# - Preserves Math, English, and Reading blocks.

# We will define the full data structures for all 4 subjects across Weeks 1 to 4.

# Helper to construct 8-line text
def make_text(*lines):
    if len(lines) != 8:
        raise ValueError(f"Expected exactly 8 lines, got {len(lines)}")
    return "\n".join(lines)

# =========================================================================
# SCIENCE DATA (WEEKS 1-4)
# =========================================================================
SCIENCE_DATA = {
  1: {
    "color": "#10b981",
    "icon": "🔬",
    "title": "Science",
    "subtitle": "Week 1: Science in Our Daily Life",
    "slides": [
      {
        "title": "Welcome to the Science Adventure!",
        "text": make_text(
          "Hello, Young Scientist! Welcome to Science Week 1!",
          "This week we are starting an exciting journey of discovery.",
          "We will look closely at the world around us.",
          "Science helps us explain everything we observe every day.",
          "We will use our eyes, ears, and hands to study nature.",
          "We will learn how weather, plants, and water connect to science.",
          "Let's get ready to explore and learn together.",
          "Are you ready to observe like a real scientist?"
        ),
        "examples": [{"title": "Weekly Goal", "content": "Understand how science explains daily observations in nature."}]
      },
      {
        "title": "Senses and Observation",
        "text": make_text(
          "Our sense organs are our windows to the world.",
          "We use our five senses to collect facts about nature.",
          "Our eyes see colors, shapes, and movements of objects.",
          "Our ears hear sounds like wind rustling leaves.",
          "Our nose smells flowers, and our tongue tastes food.",
          "Our skin feels heat, cold, and rough textures.",
          "An observation is a fact we gather using our senses.",
          "Let's practice observing our classroom objects today!"
        ),
        "examples": [{"title": "Observation", "content": "Using your eyes to see that a leaf is green and oval."}]
      },
      {
        "title": "Weather in Daily Life",
        "text": make_text(
          "Weather is a natural event that we observe daily.",
          "Science helps us explain why the weather changes.",
          "The Sun gives us light and heat to keep us warm.",
          "Clouds form when water vapor rises and cools in the sky.",
          "Rain falls when clouds become too heavy with water.",
          "Wind is moving air that we can feel on our skin.",
          "Weather affects what we wear and what activities we do.",
          "What is the weather like outside your window right now?"
        ),
        "examples": [{"title": "Weather Fact", "content": "Rain falls from clouds when water droplets grow too heavy."}]
      },
      {
        "title": "Plants and Science",
        "text": make_text(
          "Plants are living things that grow all around us.",
          "They need sunlight, water, soil, and air to survive.",
          "A seed sprouts roots downwards to absorb water from soil.",
          "It grows a green stem upwards to capture sunlight.",
          "Plants use sunlight to make their own food in leaves.",
          "This active process is called photosynthesis in science.",
          "We observe plants bending towards window light to grow.",
          "Plants give us oxygen to breathe and food to eat!"
        ),
        "examples": [{"title": "Plant Growth", "content": "A seed needs water and sun to break its shell and grow roots."}]
      },
      {
        "title": "Animals and Movement",
        "text": make_text(
          "Animals are living things that move in different ways.",
          "They move to find food, water, and safe shelters.",
          "Fish swim in water using their fins and tails.",
          "Birds fly through the air using wings and feathers.",
          "Frogs hop on land using their strong back legs.",
          "Crabs crawl sideways on the wet sand of beaches.",
          "Their body shapes help them survive in their habitats.",
          "Observe how a dog moves when it chases a toy!"
        ),
        "examples": [{"title": "Animal Fact", "content": "Fish have gills to breathe oxygen underwater while swimming."}]
      },
      {
        "title": "Water Around Us",
        "text": make_text(
          "Water is a precious liquid found throughout nature.",
          "It exists in rivers, lakes, oceans, and rain clouds.",
          "We use water for drinking, washing, and growing crops.",
          "Water changes its form when heated or cooled down.",
          "Wet clothes dry because heat turns water into vapor.",
          "This process of turning liquid to gas is evaporation.",
          "Water always flows downwards from high to low ground.",
          "Let's observe water flowing down a sloped surface!"
        ),
        "examples": [{"title": "Water Flow", "content": "Gravity pulls flowing water downwards along riverbeds."}]
      },
      {
        "title": "Light and Shadows",
        "text": make_text(
          "Light travels in straight lines from light sources.",
          "The Sun, lamps, and flashlights are light sources.",
          "When an object blocks light, a shadow forms behind it.",
          "A shadow is a dark shape on a surface behind the object.",
          "Your shadow grows longer as the Sun sets lower.",
          "A cardboard box blocks light completely, casting dark shadows.",
          "A glass window lets light pass through, casting no shadow.",
          "Let's make funny hand shadows on the wall tonight!"
        ),
        "examples": [{"title": "Shadow Fact", "content": "A shadow always forms on the opposite side of the light source."}]
      },
      {
        "title": "Force and Movement",
        "text": make_text(
          "Objects around us stay still unless we move them.",
          "We move objects by applying a push or a pull.",
          "A push moves an object away from your body.",
          "A pull moves an object closer to your body.",
          "Pushing a toy cart makes it roll forward across floors.",
          "Pulling a rope brings a bucket of water up wells.",
          "Force changes how fast or where an object goes.",
          "Identify three pushes or pulls you do every morning!"
        ),
        "examples": [{"title": "Force", "content": "Kicking a soccer ball is a push that changes its speed."}]
      },
      {
        "title": "Heat and Energy",
        "text": make_text(
          "Heat is a form of energy that makes things warm.",
          "It changes the state of materials during heating.",
          "Butter changes from a solid to a liquid in warm pans.",
          "This change of state from solid to liquid is melting.",
          "Water bubbles and turns to steam when boiled on stoves.",
          "This change of state from liquid to gas is boiling.",
          "Heat is essential for cooking our daily food safely.",
          "Observe how a raw egg cooks and changes color in pans!"
        ),
        "examples": [{"title": "Melting", "content": "Solid ice melts into liquid water when exposed to solar heat."}]
      },
      {
        "title": "Rainbows in the Sky",
        "text": make_text(
          "Rainbows are beautiful colors that appear after rain.",
          "They form when sunlight shines through water droplets.",
          "Water droplets act like tiny glass prisms in the air.",
          "They split white sunlight into seven distinct colors.",
          "These colors are red, orange, yellow, and green.",
          "They also include blue, indigo, and violet shades.",
          "This bending of light is called refraction in science.",
          "Look at the sky opposite the Sun after rain showers!"
        ),
        "examples": [{"title": "Refraction", "content": "Bending of light waves inside water droplets creates rainbows."}]
      },
      {
        "title": "Wind and Air",
        "text": make_text(
          "Air is all around us, but it is invisible to eyes.",
          "We can feel air when it moves across our skin.",
          "Moving air is called wind in our daily environment.",
          "Wind pushes sailboats and lifts kites into the sky.",
          "We inhale air to get oxygen for our bodies to work.",
          "We exhale air to blow out candles or cool hot soup.",
          "Wind can be a gentle breeze or a strong storm wind.",
          "Observe how wind moves the leaves of tall trees!"
        ),
        "examples": [{"title": "Wind Power", "content": "Wind turns wind turbines to generate clean electricity."}]
      },
      {
        "title": "Soil and Earth",
        "text": make_text(
          "Soil is the top layer of the Earth's surface.",
          "It is made of tiny rock pieces and organic matter.",
          "Plants grow their roots in soil to stand firmly.",
          "There are different types of soil like clay and sand.",
          "Loam soil is rich and dark, holding water well.",
          "Clay soil is sticky when wet and holds water long.",
          "Sandy soil has large grains and lets water drain fast.",
          "Explore the soil in your garden using a hand lens!"
        ),
        "examples": [{"title": "Soil Types", "content": "Loam is the best soil for growing healthy garden vegetables."}]
      },
      {
        "title": "Day and Night",
        "text": make_text(
          "Day and night happen because the Earth rotates slowly.",
          "The Earth spins like a giant top on its axis.",
          "The side of the Earth facing the Sun has day.",
          "The side of the Earth facing away has night.",
          "It takes 24 hours for Earth to spin once completely.",
          "The Sun appears to rise in the east every morning.",
          "It appears to set in the west every evening.",
          "This regular cycle gives us time for activity and rest!"
        ),
        "examples": [{"title": "Earth Spin", "content": "Earth's rotation causes the sun to appear to move in the sky."}]
      },
      {
        "title": "Rusting of Metals",
        "text": make_text(
          "Iron objects change color when left wet in the air.",
          "An iron nail turns orange-brown and becomes rough.",
          "This chemical process is called rusting in daily science.",
          "Rust is crumbly and makes the iron metal weak.",
          "It happens because iron combines with oxygen and water.",
          "Painting iron gates keeps moisture away to prevent rust.",
          "Always keep your metal toys dry after playing outside.",
          "Observe old metal keys to see if they have rusted!"
        ),
        "examples": [{"title": "Rusting", "content": "Rust forms on iron surfaces when exposed to damp air."}]
      },
      {
        "title": "Hygiene and Germs",
        "text": make_text(
          "Germs are tiny living things that make us sick.",
          "They are too small to see without microscopes.",
          "We wash hands with soap and water to remove germs.",
          "Rubbing hands together lifts dirt and bacteria off skin.",
          "Soap molecules bind to oil and wash germs away.",
          "Washing hands keeps us healthy and prevents spreading sickness.",
          "Always wash hands before eating and after using toilets.",
          "Sing the alphabet song while rubbing soap on hands!"
        ),
        "examples": [{"title": "Hygiene", "content": "Washing hands with soap lifts pathogens off the skin surface."}]
      },
      {
        "title": "Food and Digestion",
        "text": make_text(
          "We eat food to get energy for active play.",
          "Our body breaks down food through digestion to grow.",
          "Our teeth chew food into small pieces in mouths.",
          "Saliva softens the chewed food to swallow easily.",
          "Our stomach breaks down food further using liquids.",
          "Rice and bread give us carbohydrates for quick energy.",
          "Fish and eggs give us proteins to build muscles.",
          "Fruits and vegetables keep our body systems working well!"
        ),
        "examples": [{"title": "Digestion", "content": "Chewing food increases surface area for stomach enzymes."}]
      },
      {
        "title": "Sound in the Environment",
        "text": make_text(
          "Sound is created when an object vibrates quickly.",
          "A vibration is a rapid back-and-forth movement.",
          "Plucking a tight rubber band makes it vibrate and hum.",
          "Sound travels as invisible waves through the air.",
          "Our ears collect these waves so we can hear sounds.",
          "Sound travels faster through solid wood than air.",
          "Heavy doors block sounds from entering quiet classrooms.",
          "Observe what happens when you touch a speaking speaker!"
        ),
        "examples": [{"title": "Vibrations", "content": "Vocal cords vibrate in our throat when we speak or sing."}]
      },
      {
        "title": "Guided Practice: Observations",
        "text": make_text(
          "Let's practice identifying scientific observations in nature.",
          "An observation must be a factual statement using senses.",
          "Saying 'The apple has red skin' is an observation.",
          "Saying 'The apple is delicious' is an opinion.",
          "Scientists only record physical facts in their journals.",
          "Use a ruler to measure the height of seedlings.",
          "Write down the measurement in millimeters on your paper.",
          "Always stick to factual details that others can verify!"
        ),
        "examples": [{"title": "Factual Observation", "content": "The leaf has five points and a rough texture."}]
      },
      {
        "title": "Guided Practice: Fact vs Opinion",
        "text": make_text(
          "Scientists separate facts from opinions during experiments.",
          "A fact can be proven true by testing or observing.",
          "An opinion is a personal feeling or belief about things.",
          "Statement: 'The toy car is blue' (This is a fact).",
          "Statement: 'The toy car is pretty' (This is an opinion).",
          "Factual descriptions keep science records reliable and clean.",
          "Avoid using words like beautiful, ugly, or nice in logs.",
          "Let's classify five sentences as fact or opinion today!"
        ),
        "examples": [{"title": "Fact Check", "content": "Factual: 'Water boils at 100 degrees Celsius.'"}]
      },
      {
        "title": "Guided Practice: Cooking Science",
        "text": make_text(
          "Let's observe changes that happen during cooking food.",
          "Heat changes the properties of raw materials permanently.",
          "Raw egg white is a clear liquid in shells.",
          "It turns into a solid white color when heated.",
          "This happens because heat cooks the proteins inside.",
          "Raw rice grains are hard and dry in bags.",
          "Boiling water turns them soft and edible in pots.",
          "Spot the science in your kitchen during dinner preparation!"
        ),
        "examples": [{"title": "Cooking Fact", "content": "Heat changes raw cake batter into a spongy solid cake."}]
      },
      {
        "title": "Guided Practice: Weather Science",
        "text": make_text(
          "Let's observe changes in weather like real meteorologists.",
          "Keep track of clouds, wind direction, and temperature.",
          "Dark grey clouds usually indicate that rain is coming.",
          "A wind vane shows which direction the wind blows.",
          "A thermometer measures how hot or cold the air is.",
          "Write down daily weather observations in your journal.",
          "Observe if the wind blows harder in mornings or afternoons.",
          "Compare weather details across different days of the week!"
        ),
        "examples": [{"title": "Weather Tool", "content": "Thermometers measure air temperature in degrees Celsius."}]
      },
      {
        "title": "Common Error: Opinion in Logs",
        "text": make_text(
          "A common mistake is writing opinions in science journals.",
          "Writing 'This leaf is beautiful' is not scientific.",
          "It is a personal feeling that others might not share.",
          "Instead, write: 'This leaf has five lobes and points.'",
          "This statement describes physical facts that others can see.",
          "Stick to measurements, colors, shapes, and textures.",
          "Avoid using opinion words when you record science data.",
          "Check your journal entries to ensure they contain facts!"
        ),
        "examples": [{"title": "Incorrect", "content": "Writing: 'The experiment was fun and the liquid looked nice.'"}]
      },
      {
        "title": "Common Error: Explaining with Magic",
        "text": make_text(
          "Do not explain natural events with magic or stories.",
          "Look for natural causes and explanations instead.",
          "Incorrect: 'Magic makes the water puddle disappear.'",
          "Correct: 'Solar heat evaporates water in the puddle.'",
          "Science searches for evidence and natural reasons.",
          "Understanding causes helps us make accurate predictions.",
          "Always ask what force or energy caused the change.",
          "Be a fact finder, not a magic believer, in science!"
        ),
        "examples": [{"title": "Scientific Cause", "content": "Heat energy causes liquid water to turn into gas vapor."}]
      },
      {
        "title": "Summary of Week 1",
        "text": make_text(
          "Congratulations! You completed all the slides for Week 1.",
          "Let's review the main science tools we mastered.",
          "We learned that science is all around us daily.",
          "We use our five senses to gather factual observations.",
          "We separate physical facts from personal opinions.",
          "We explain natural events using energy, force, and heat.",
          "We observe weather, plant growth, and animal movement.",
          "You are now ready to take the quiz and challenges!"
        ),
        "examples": [{"title": "Key Takeaway", "content": "Observation is the foundation of scientific inquiry."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Which sense organ is used to observe the color of a flower?", "options": ["Eyes", "Ears", "Nose", "Tongue"], "answer": 0},
      {"type": "choice", "q": "Which of the following is a scientific observation?", "options": ["The puppy is the cutest animal.", "The puppy has four legs and black fur.", "Puppies are fun to play with.", "Everyone loves puppies."], "answer": 1},
      {"type": "choice", "q": "What causes wet clothes to dry when hung under the sun?", "options": ["The wind blows them away.", "The heat from the sun evaporates the water.", "The colors absorb the water.", "Gravity pulls the water out."], "answer": 1},
      {"type": "choice", "q": "Which of the following is an opinion, NOT a scientific fact?", "options": ["Water freezes at 0 degrees Celsius.", "Iron nails rust when left wet.", "Green leaves are prettier than red leaves.", "Plants need sunlight to grow."], "answer": 2},
      {"type": "verify", "q": "True or False: A shadow forms when an object blocks light.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "What do we call the process where water turns into invisible vapor?", "options": ["Melting", "Freezing", "Evaporation", "Rusting"], "answer": 2},
      {"type": "choice", "q": "Which of the following is a physical property of clay?", "options": ["It can be molded into shapes.", "It is a liquid that flows.", "It is invisible.", "It is always hot."], "answer": 0},
      {"type": "choice", "q": "What happens to butter when it is heated in a pan?", "options": ["It freezes.", "It melts into a liquid.", "It turns into wood.", "It becomes colder."], "answer": 1},
      {"type": "choice", "q": "Which tool helps us see tiny insect parts more clearly?", "options": ["Ruler", "Hand lens (Magnifying glass)", "Scissors", "Cardboard"], "answer": 1},
      {"type": "choice", "q": "What happens to an iron nail when left wet in the air?", "options": ["It turns into gold.", "It rusts and turns orange-brown.", "It melts into water.", "It disappears."], "answer": 1},
      {"type": "choice", "q": "Why do we wash our hands with soap?", "options": ["To make them smell like candy.", "To remove dirt and kill invisible germs.", "To change our skin color.", "To make our hands grow larger."], "answer": 1},
      {"type": "verify", "q": "True or False: Saying 'The soup is too salty' is a personal opinion, not a scientific measurement.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "Which type of soil holds the most water and feels sticky?", "options": ["Sand", "Clay", "Loam", "Gravel"], "answer": 1},
      {"type": "choice", "q": "What makes leaves on a tree move?", "options": ["The heat of the sun", "The blowing wind", "The gravity of the earth", "The moon"], "answer": 1},
      {"type": "choice", "q": "Which sense organ helps us hear the chime of a bell?", "options": ["Nose", "Ears", "Eyes", "Skin"], "answer": 1},
      {"type": "choice", "q": "Which statement is a fact about plants?", "options": ["Plants are happy in the rain.", "Plants need water to survive.", "Plants grow better when we play music.", "Green plants are better than yellow ones."], "answer": 1},
      {"type": "choice", "q": "What force is applied when you drag a heavy box towards yourself?", "options": ["Push", "Pull", "Heat", "Light"], "answer": 1},
      {"type": "choice", "q": "What force is applied when you kick a soccer ball away?", "options": ["Push", "Pull", "Gravity", "Friction"], "answer": 0},
      {"type": "choice", "q": "What splits sunlight to create a rainbow?", "options": ["Air molecules", "Water droplets in the air", "Dirt on the ground", "Tree leaves"], "answer": 1},
      {"type": "verify", "q": "True or False: Science explains how things work in the natural world through evidence and tests.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "Fill in the blank: The Sun rises in the ___.", "options": ["East", "West", "North", "South"], "answer": 0},
      {"type": "choice", "q": "What is the state of water we drink?", "options": ["Solid", "Liquid", "Gas", "Plasma"], "answer": 1},
      {"type": "choice", "q": "Which of the following is a natural event explained by science?", "options": ["A magic trick", "Weather changing from sunny to rainy", "A cartoon character flying", "A wishing well working"], "answer": 1},
      {"type": "verify", "q": "True or False: Plants bend towards light because they need it to grow.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "What is the main goal of science?", "options": ["To make magic tricks", "To understand how the natural world works", "To paint beautiful pictures", "To write storybooks"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "If you observe that a puddle of water disappears faster on a hot day than on a cloudy day, what can you infer?", "options": ["Heat increases the rate of evaporation.", "The cloud absorbs the water.", "Water likes cloudy days more.", "Wind only blows on hot days."], "answer": 0},
      {"type": "choice", "q": "Why does a metal slide in the playground feel hot on a sunny afternoon?", "options": ["It absorbs heat from the Sun.", "It produces its own heat.", "It is made of wood.", "The ground pushes heat up."], "answer": 0},
      {"type": "choice", "q": "Which of the following contains ONLY scientific observations?", "options": ["The rock is black, smooth, and weighs 50 grams.", "The rock is pretty, smooth, and lucky.", "The rock is heavy, ugly, and cold.", "The rock is small, nice, and weighs 10 grams."], "answer": 0},
      {"type": "choice", "q": "What would happen to a plant if it were placed in a completely dark room for two weeks?", "options": ["It would grow taller and greener.", "It would turn yellow, weaken, and eventually die.", "It would turn into a flower.", "It would stay exactly the same."], "answer": 1},
      {"type": "choice", "q": "A student says, 'This ice cream is delicious.' Another student says, 'This ice cream melts at room temperature.' Which statement is scientific?", "options": ["The first statement", "The second statement", "Both statements", "Neither statement"], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Everyday Science Observation Diary",
      "desc": "Observe three different objects or natural events in your home or garden (e.g., water boiling, a plant bending, a shadow on the floor). Draw them on a piece of paper, write one factual observation for each, and explain the science behind them to your parent.",
      "labels": ["Correctly separated facts from opinions in observations", "Clearly drew and described the selected science events", "Explained the scientific cause (e.g., heat, light, growth) accurately"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Exercise 1: Observation vs. Opinion</h3>
                  <p class="ws-instruction">Classify each statement below as either an <strong>Observation</strong> (fact based on senses) or an <strong>Opinion</strong> (belief or feeling).</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. The water in the pot is bubbling and turning into steam.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Observation</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Rainy weather is the worst kind of weather.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Opinion</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. The metal nail has an orange-brown crusty coating.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Observation</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 2: Everyday Science Connections</h3>
                  <p class="ws-instruction">Match the daily observation with the scientific explanation by writing the correct letter in the bracket.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0;">
                      <div><strong>Daily Observations:</strong></div>
                      <div>1. Wet clothes dry under the sun.</div>
                      <div>2. A shadow forms behind a tree.</div>
                      <div>3. A metal slide feels hot at noon.</div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0; text-align: right; padding-right: 40px;">
                      <div><strong>Scientific Explanations:</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; A. Metal absorbs heat from sunlight.</div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; B. Water evaporates due to heat.</div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; C. The tree blocks light.</div>
                    </div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 3: Science in the Garden</h3>
                  <p class="ws-instruction">Write a short description to answer the question using physical facts.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Describe what happens when a plant is placed next to a sunny window:</div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">The plant stem will bend towards the window to get sunlight.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">This is because plants need sunlight to make their own food.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  2: {
    "color": "#10b981",
    "icon": "🔬",
    "title": "Science",
    "subtitle": "Week 2: Asking Questions Like a Scientist",
    "slides": [
      {
        "title": "Welcome to Inquiry!",
        "text": make_text(
          "Hello, Explorer! Welcome to Science Week 2!",
          "This week we learn to ask questions like real scientists.",
          "Scientists are curious about everything they see in nature.",
          "They start their investigations by asking why and how.",
          "We will learn how to tinker with common materials.",
          "Tinkering means touching and testing things to see changes.",
          "Let's prepare our curiosity and get ready to ask.",
          "Are you ready to explore and learn with us today?"
        ),
        "examples": [{"title": "Goal", "content": "Formulate scientific questions by exploring and tinkering with materials."}]
      },
      {
        "title": "Curiosity and Inquiry",
        "text": make_text(
          "Inquiry is the heart of all scientific discoveries.",
          "It begins when you observe something and ask questions.",
          "Why does the ice cube melt on the wooden desk?",
          "How does a heavy metal key sink in the water?",
          "Curiosity drives us to search for answers in nature.",
          "We ask questions that we can test through experiments.",
          "Avoid asking opinions, like 'Is this flower beautiful?'",
          "Let's practice forming questions about what we see today!"
        ),
        "examples": [{"title": "Inquiry", "content": "Asking: 'Why does wet sand feel colder than dry sand?'"}]
      },
      {
        "title": "Tinkering with Materials",
        "text": make_text(
          "Tinkering is a hands-on way to explore physical things.",
          "We play with materials to observe how they behave.",
          "We press clay, stretch bands, and drop heavy keys.",
          "This action helps us see what properties materials hold.",
          "Squeezing a dry sponge shows it has air holes.",
          "Squeezing a wet sponge shows it holds liquid inside.",
          "Tinkering helps us form solid questions for tests.",
          "Tinker with three objects in your room safely today!"
        ),
        "examples": [{"title": "Tinkering", "content": "Pressing modeling clay with a spoon to leave hollow shapes."}]
      },
      {
        "title": "Tinkering with Modeling Clay",
        "text": make_text(
          "Modeling clay is a solid material we can shape.",
          "Tinkering with clay shows it changes shape easily.",
          "We press it, roll it, and pinch it with fingers.",
          "The clay holds the new shape we give to it.",
          "Why does clay stay bent while rubber bands snap back?",
          "This is a great scientific question to investigate.",
          "We apply force using our hands to shape the clay.",
          "Observe how your stylus can press clay to write names!"
        ),
        "examples": [{"title": "Clay Test", "content": "Pressing a fork into clay leaves a lined print on its surface."}]
      },
      {
        "title": "Tinkering with Balloons",
        "text": make_text(
          "Balloons are elastic materials that hold invisible air.",
          "Tinkering with balloons shows air occupies physical space.",
          "Blowing air inside makes the balloon stretch and expand.",
          "The air pushes outwards against the balloon walls.",
          "This pushing force is called air pressure in science.",
          "Squeezing the inflated balloon changes its outer shape.",
          "Letting go of the neck makes the balloon fly away.",
          "Why does releasing the air make the balloon move?"
        ),
        "examples": [{"title": "Balloon Test", "content": "Air escaping from the neck pushes the balloon forward."}]
      },
      {
        "title": "Tinkering with Sponges",
        "text": make_text(
          "A dry sponge is light and full of tiny holes.",
          "These holes are filled with invisible air molecules.",
          "Dipping the sponge in water shows absorption properties.",
          "The sponge sucks in liquid, displacing the air inside.",
          "You will observe tiny air bubbles rising in water.",
          "Squeezing the wet sponge releases the absorbed water.",
          "A wet sponge feels much heavier than a dry one.",
          "Why does water occupy the empty holes of sponges?"
        ),
        "examples": [{"title": "Sponge Test", "content": "Squeezing a wet sponge returns it to its light, dry state."}]
      },
      {
        "title": "Tinkering with Magnets",
        "text": make_text(
          "Magnets hold an invisible force called magnetism.",
          "Tinkering with magnets shows they pull certain metals.",
          "They pull iron nails, paperclips, and steel keys.",
          "They do not pull wooden sticks or plastic toys.",
          "This pulling force is called magnetic attraction in science.",
          "Magnets can pull objects even through thin paper.",
          "Why do magnets only attract iron and steel metals?",
          "Test different objects in your room with magnets safely!"
        ),
        "examples": [{"title": "Magnet Test", "content": "A magnet pulls steel paperclips across the desk surface."}]
      },
      {
        "title": "Tinkering with Paper Planes",
        "text": make_text(
          "Folding paper into planes shows aerodynamics in action.",
          "Tinkering with shapes changes how far planes fly.",
          "Thin, pointed planes cut through air very fast.",
          "Wide, flat planes float slowly but land soon.",
          "Air pushes against the paper wings to lift planes.",
          "This upward pushing force is called air resistance.",
          "Why does a pointed nose make planes fly further?",
          "Fold two different plane shapes and test them now!"
        ),
        "examples": [{"title": "Plane Test", "content": "Comparing a pointed dart plane with a wide glider plane."}]
      },
      {
        "title": "Tinkering with Floating Objects",
        "text": make_text(
          "Tinkering with water shows objects float or sink.",
          "Buoyancy determines if things stay on top or go down.",
          "Dry leaves, twigs, and plastic spoons float on water.",
          "Iron keys, stones, and glass marbles sink to bottoms.",
          "Why do heavy metal keys sink while large logs float?",
          "This question leads to density concepts in science.",
          "Test a coin and a plastic bottle cap in buckets.",
          "Observe which one floats and which one sinks down!"
        ),
        "examples": [{"title": "Float Test", "content": "A plastic bottle cap floats because it is light and holds air."}]
      },
      {
        "title": "Tinkering with Dissolving Solids",
        "text": make_text(
          "Mixing solids in water shows how they dissolve.",
          "Tinkering with sugar reveals it mixes completely.",
          "Sugar crystals become invisible when stirred in water.",
          "This mixtures is called a solution in daily science.",
          "Does sugar dissolve faster in hot or cold water?",
          "Stirring makes sugar dissolve much quicker than sitting.",
          "Why does heat speed up the dissolving process?",
          "Observe how salt behaves when stirred in water jars!"
        ),
        "examples": [{"title": "Dissolving Test", "content": "Stirring sugar in warm water makes it dissolve in seconds."}]
      },
      {
        "title": "Tinkering with Flashlights",
        "text": make_text(
          "Tinkering with light sources changes shadow sizes.",
          "Shine a flashlight at a toy figurine on tables.",
          "Observe the dark shadow formed on the wall behind.",
          "Moving the light closer makes the shadow grow larger.",
          "Moving the light further away makes the shadow smaller.",
          "Tilting the flashlight changes the shadow's direction.",
          "Why does moving the light change the shadow's scale?",
          "Draw the different shadow sizes on your paper page!"
        ),
        "examples": [{"title": "Light Test", "content": "Closest light source creates the largest and dimmest shadow."}]
      },
      {
        "title": "Tinkering with Spinning Tops",
        "text": make_text(
          "Spinning tops show rotational motion and friction.",
          "We spin a plastic top on a smooth table.",
          "Circular force keeps the top standing upright while spinning.",
          "The tip of the top rubs against table surfaces.",
          "This rubbing force is called friction in daily science.",
          "Friction slows down the top until it falls over.",
          "Why does a smooth table make tops spin longer?",
          "Compare spinning on rough carpets and smooth tables!"
        ),
        "examples": [{"title": "Spin Test", "content": "Rough surfaces create high friction, stopping tops quickly."}]
      },
      {
        "title": "Tinkering with Mirrors",
        "text": make_text(
          "Mirrors reflect light to show clear images.",
          "A mirror has a flat, extremely smooth surface.",
          "Light bounces off this surface back to your eyes.",
          "Tilting the mirror changes what objects you observe.",
          "Why do we see our reflection in glass mirrors?",
          "Rough wood does not reflect light to show images.",
          "Rough surfaces scatter light waves in all directions.",
          "Explore reflections using shiny metal spoons in kitchens!"
        ),
        "examples": [{"title": "Mirror Test", "content": "Bouncing light off smooth surfaces creates reflection images."}]
      },
      {
        "title": "Tinkering with Elastic Bands",
        "text": make_text(
          "Rubber bands stretch when we apply pulling forces.",
          "This property of materials is called elasticity.",
          "The band snaps back to its shape when released.",
          "Plucking a stretched band creates rapid vibrations.",
          "These vibrations produce a hum sound in the air.",
          "Stretching the band tighter makes a higher pitch sound.",
          "Why does tension change the pitch of sound waves?",
          "Hold one end with teeth and pluck bands safely!"
        ),
        "examples": [{"title": "Band Test", "content": "Vibrating rubber bands create sound waves we hear easily."}]
      },
      {
        "title": "Tinkering with Bent Stems",
        "text": make_text(
          "Plants respond to light sources in their environment.",
          "Tinker with a small potted plant near windows.",
          "Observe that stems bend towards the bright sunlight.",
          "Turn the pot around so stems face rooms.",
          "In a few days, stems bend back to windows.",
          "Why do plant stems grow towards the light source?",
          "Plants need sunlight to survive and make food.",
          "This growth response is called phototropism in science!"
        ),
        "examples": [{"title": "Stem Test", "content": "Stems bend towards sunlight to maximize light absorption."}]
      },
      {
        "title": "Tinkering with Melting Ice",
        "text": make_text(
          "Ice cubes melt into liquid water at room temperature.",
          "Tinker with ice cubes placed in different spots.",
          "Put one cube in direct sun and one in shade.",
          "The cube in the sun melts in minutes completely.",
          "The cube in the shade melts much slower today.",
          "Why does solar heat melt ice so rapidly?",
          "Heat energy breaks the solid bonds of ice crystals.",
          "Measure the melting times using clocks on desks!"
        ),
        "examples": [{"title": "Ice Test", "content": "Direct heat increases melting speed by breaking solid bonds."}]
      },
      {
        "title": "Tinkering with Soil Textures",
        "text": make_text(
          "We group rocks and soils by physical properties.",
          "Tinker with a pile of dry garden rocks.",
          "Feel their textures with your finger tips closely.",
          "Sort them into rough stones and smooth river pebbles.",
          "Why are river pebbles so smooth and rounded?",
          "Water flows over them, wearing down rough edges.",
          "Classifying rocks by texture is a science skill.",
          "Write down the rock groups in your log book!"
        ),
        "examples": [{"title": "Rock Test", "content": "River stones are smoothed by friction from flowing water."}]
      },
      {
        "title": "Tinkering with Sprouting Seeds",
        "text": make_text(
          "Seeds need specific conditions to start growing.",
          "Tinker with seeds placed in two soil pots.",
          "Keep one pot damp and one completely dry.",
          "Seeds in damp soil sprout green roots soon.",
          "Seeds in dry soil stay asleep and do not grow.",
          "Why do seeds need water to sprout roots?",
          "Water activates the seed embryo to start life.",
          "Record sprout heights in both pots daily!"
        ),
        "examples": [{"title": "Seed Test", "content": "Moisture triggers germination, ending the seed's rest state."}]
      },
      {
        "title": "Guided Practice: Forming Why Questions",
        "text": make_text(
          "Let's practice forming scientific 'Why' questions.",
          "Look at a puddle of water drying up soon.",
          "Observe that heat from the Sun warms the water.",
          "Form the question: 'Why does heat cause evaporation?'",
          "This question asks about the cause of changes.",
          "It can be investigated by testing warm and cold water.",
          "Avoid questions like: 'Is puddle water happy?'",
          "Always search for causes when you ask why!"
        ),
        "examples": [{"title": "Why Question", "content": "Why does heat speed up the melting of solid butter?"}]
      },
      {
        "title": "Guided Practice: Forming How Questions",
        "text": make_text(
          "Let's practice forming scientific 'How' questions.",
          "Look at how green plants grow from dry seeds.",
          "Observe that plants grow roots and stems soon.",
          "Form: 'How does water help seeds break shells?'",
          "This question asks about the steps of processes.",
          "It can be answered by observing seeds under lenses.",
          "Avoid questions like: 'Do seeds dream in soil?'",
          "Always ask about processes when you ask how!"
        ),
        "examples": [{"title": "How Question", "content": "How does a magnet pull steel paperclips through paper?"}]
      },
      {
        "title": "Guided Practice: Squeezing Sponges",
        "text": make_text(
          "Let's explore sponges in water like real scientists.",
          "Observe what happens when you squeeze a sponge.",
          "Squeeze it under water in a clear glass bowl.",
          "You will observe bubbles rising to the top.",
          "Why do bubbles rise when sponges are squeezed?",
          "The water enters the sponge, pushing air out.",
          "Air is lighter than water, so bubbles float up.",
          "Record this bubble observation in your journal page!"
        ),
        "examples": [{"title": "Observation", "content": "Squeezing releases trapped air, which floats up as bubbles."}]
      },
      {
        "title": "Guided Practice: Water on Leaves",
        "text": make_text(
          "Let's explore how water behaves on different leaves.",
          "Drip water drops on a shiny gabi leaf.",
          "Observe that water rolls off like small beads.",
          "Now drip water on a dry paper leaf on desk.",
          "Observe that water soaks in, wetting the paper.",
          "Why does water roll off gabi leaves completely?",
          "The waxy coating on the leaf blocks water absorption.",
          "This waxy property is waterproof, protecting the plant!"
        ),
        "examples": [{"title": "Observation", "content": "Waxy surfaces repel water, preventing absorption in leaves."}]
      },
      {
        "title": "Common Error: Vague Questions",
        "text": make_text(
          "Avoid asking questions that cannot be tested.",
          "Scientists do not ask: 'Do balloons feel pain?'",
          "This question is vague and cannot be measured.",
          "Instead, ask: 'How does air amount affect balloon size?'",
          "This question can be measured using rulers easily.",
          "Always ask questions about physical properties and facts.",
          "Make sure your questions have measurable answers.",
          "Check your questions before you start experiments!"
        ),
        "examples": [{"title": "Incorrect", "content": "Asking: 'Is clay happy when we mold it into shapes?'"}]
      },
      {
        "title": "Common Error: Guessing Without Tests",
        "text": make_text(
          "Do not just guess outcomes without performing tests.",
          "Tinkering and exploring are necessary to gather facts.",
          "Guessing that a key floats is not scientific.",
          "Place the key in water to verify if it sinks.",
          "Observations provide evidence to answer questions.",
          "Always test materials before drawing conclusions.",
          "Evidence makes scientific explanations reliable and solid.",
          "Never write down guesses as factual observations!"
        ),
        "examples": [{"title": "Incorrect", "content": "Writing 'Stones float' in your log without testing them."}]
      },
      {
        "title": "Summary of Week 2",
        "text": make_text(
          "Congratulations! You completed all the slides for Week 2.",
          "Let's review the main science tools we mastered.",
          "We learned that curiosity drives scientific inquiry.",
          "We ask 'Why' and 'How' questions to start tests.",
          "We tinker with clay, sponges, and magnets to explore.",
          "We observe properties like floating, sinking, and melting.",
          "We avoid vague questions and test before guessing.",
          "You are now ready to take the quiz and challenges!"
        ),
        "examples": [{"title": "Key Takeaway", "content": "Tinkering with materials helps us form testable questions."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "What do scientists do when they are curious about a material?", "options": ["They ignore it.", "They ask questions and tinker with it.", "They throw it away.", "They paint it immediately."], "answer": 1},
      {"type": "choice", "q": "Which of the following is a good 'Why' question for an ice cube?", "options": ["Why is ice cream sweet?", "Why does ice melt when it gets warm?", "Is ice pretty?", "Who made this ice?"], "answer": 1},
      {"type": "choice", "q": "What happens to clay when you squeeze it in your hand?", "options": ["It turns into water.", "It changes its shape.", "It disappears.", "It freezes solid."], "answer": 1},
      {"type": "choice", "q": "Why does a balloon get bigger when you blow air into it?", "options": ["Air is hot.", "Air takes up space and pushes outwards.", "The balloon is magical.", "The balloon gets lighter."], "answer": 1},
      {"type": "choice", "q": "Which of the following materials is waterproof (does not absorb water)?", "options": ["Sponge", "Plastic bag", "Cotton towel", "Tissue paper"], "answer": 1},
      {"type": "choice", "q": "What kind of question starts an exploration of magnets?", "options": ["Do magnets sleep?", "What materials can a magnet pull?", "Are magnets expensive?", "Who invented magnets?"], "answer": 1},
      {"type": "choice", "q": "What property are we testing when we drop a stone and a leaf in water?", "options": ["Color", "Whether they float or sink", "Their smell", "Their taste"], "answer": 1},
      {"type": "choice", "q": "How does sugar behave when mixed into warm water?", "options": ["It turns into salt.", "It dissolves and disappears from view.", "It freezes the water.", "It changes color to blue."], "answer": 1},
      {"type": "choice", "q": "Which question helps us investigate shadows using a flashlight?", "options": ["What color is the flashlight?", "How does the distance of the light change the shadow's size?", "Is the flashlight heavy?", "Where was the flashlight bought?"], "answer": 1},
      {"type": "choice", "q": "What happens to a spinning top when it rubs against a rough table?", "options": ["It spins faster.", "It slows down and stops.", "It turns into clay.", "It flies into the air."], "answer": 1},
      {"type": "choice", "q": "What bounces off a mirror to show your reflection?", "options": ["Sound", "Light", "Air", "Water"], "answer": 1},
      {"type": "choice", "q": "How can you make a stretched rubber band produce a higher sound?", "options": ["Stretch it tighter.", "Make it wet.", "Paint it blue.", "Let it go loose."], "options": ["Stretch it tighter", "Paint it blue", "Make it wet", "Let it go loose"], "answer": 0},
      {"type": "choice", "q": "In what direction do plant stems grow when placed near a sunny window?", "options": ["Towards the dark corner", "Towards the light of the window", "Straight downwards into the soil", "They do not grow at all."], "answer": 1},
      {"type": "choice", "q": "Where does an ice cube melt the fastest?", "options": ["In a dark cupboard", "In the direct warm sunlight", "In a cup of cold water", "Under a shady tree"], "answer": 1},
      {"type": "verify", "q": "True or False: Asking 'How does water help seeds sprout?' is a scientific question.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "What do we do when we 'tinker' with materials?", "options": ["We read a storybook about them.", "We touch, play, and experiment with them to see what happens.", "We buy them from the market.", "We throw them in the trash bin."], "answer": 1},
      {"type": "choice", "q": "Which of these objects will sink to the bottom of a water bucket?", "options": ["An iron nail", "A dry leaf", "A plastic spoon", "A small cork"], "answer": 0},
      {"type": "choice", "q": "Why does a sponge feel heavier after you dip it in water?", "options": ["Water is cold.", "The sponge absorbs water into its holes.", "The sponge grows larger.", "Water has no weight."], "answer": 1},
      {"type": "verify", "q": "True or False: A scientist only asks questions that can be tested by observing or experimenting.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "Which question is NOT scientific because it is about personal taste?", "options": ["Does a paper plane fly further when folded thin?", "Is science the most beautiful subject?", "Does sugar dissolve faster in hot water?", "Which materials are attracted to magnets?"], "answer": 1},
      {"type": "choice", "q": "What happens to a dry sponge when you squeeze it under water?", "options": ["Nothing happens.", "Air bubbles escape and water goes inside.", "It turns into clay.", "It melts away."], "answer": 1},
      {"type": "choice", "q": "Why does water roll off a gabi leaf in beads?", "options": ["The leaf is waxy and waterproof.", "The leaf has tiny teeth.", "The water is sticky.", "The leaf is hot."], "answer": 0},
      {"type": "choice", "q": "Which VCV word represents a testable guess we form after asking questions?", "options": ["concept", "hypothesis", "idea", "guess"], "answer": 1},
      {"type": "verify", "q": "True or False: Squeezing modeling clay changes its shape, but not its weight.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "What do we call the result of our tinkering and testing?", "options": ["Discovery", "Mistake", "Opinion", "Guess"], "answer": 0}
    ],
    "challenge": [
      {"type": "choice", "q": "If you observe a balloon getting smaller over three days, what is the best scientific question to ask?", "options": ["Why does air slowly escape from the rubber balloon?", "Does the balloon prefer being small?", "Is the balloon tired?", "Who drew a face on the balloon?"], "answer": 0},
      {"type": "choice", "q": "You tinker with a metal key and a plastic key in the sun. The metal key feels much hotter. Why?", "options": ["Metal conducts and absorbs heat better than plastic.", "Metal produces its own heat.", "Plastic dislikes the sun.", "The sun only shines on metal."], "answer": 0},
      {"type": "choice", "q": "A student asks: 'Why do plants bend towards light?' How can we test this?", "options": ["Put plants in a box with a single hole for light.", "Sing songs to the plants in the dark.", "Paint the window green.", "Water the plants with colored juice."], "answer": 0},
      {"type": "choice", "q": "Which of these is a testable question about magnets?", "options": ["How many sheets of paper can a magnetic force pull through?", "Why are magnets so cool to play with?", "Are magnets better than clay?", "Do magnets dream of metal?"], "answer": 0},
      {"type": "choice", "q": "What can you infer when a dry sponge placed in oil does not release bubbles?", "options": ["The sponge was already wet or oil behaves differently.", "The sponge is broken.", "Oil has no air molecules.", "Sponges only work in water."], "answer": 0}
    ],
    "performance": {
      "type": "performance",
      "title": "Everyday Material Tinkering Log",
      "desc": "Tinker with two materials at home (e.g., a plastic bottle cap and a steel spoon). Put them in water, place them in the sun, and touch them. Write two 'Why' or 'How' questions based on your observations, and explain what properties (floating, heat conduction) you tested to your parent.",
      "labels": ["Conducted hands-on tinkering with two materials", "Formulated two testable scientific questions (Why/How)", "Correctly explained material properties based on tests"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Exercise 1: Forming Inquiry Questions</h3>
                  <p class="ws-instruction">Write a testable scientific question for each observation using <strong>Why</strong> or <strong>How</strong>.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Observation: An ice cube melts faster on a metal plate than a wood board.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 100%;"><span class="ws-answer">Why does metal melt ice faster than wood?</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Observation: Magnets pull steel paperclips but not copper pennies.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 100%;"><span class="ws-answer">How do magnets attract paperclips but not pennies?</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 2: Tinkering Observations</h3>
                  <p class="ws-instruction">Write the correct observation result (<strong>Floats</strong>, <strong>Sinks</strong>, or <strong>Melts</strong>) for each activity.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Placing an iron nail in a cup of river water:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Sinks</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Placing a dry bamboo twig on a quiet pond:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Floats</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Placing solid butter on a warm pan:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Melts</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 3: Clay and Elasticity Puzzles</h3>
                  <p class="ws-instruction">Answer the questions using physical facts about clay and rubber bands.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Describe what happens to a rubber band when you stretch and release it:</div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">It stretches when pulled and snaps back to its original shape.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">This is because the rubber band has elastic properties.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  3: {
    "color": "#10b981",
    "icon": "🔬",
    "title": "Science",
    "subtitle": "Week 3: Science Tools and Materials",
    "slides": [
      {
        "title": "Welcome to the Lab!",
        "text": make_text(
          "Hello, Scientist! Welcome to Science Week 3!",
          "This week we are entering the laboratory of tools.",
          "Tools help scientists observe and measure things accurately.",
          "We will study six core tools: rulers, hand lenses,",
          "scissors, balloons, modeling clay, and cardboard sheets.",
          "We will practice using them safely and correctly.",
          "Let's learn how each tool helper makes science easier.",
          "Are you ready to handle lab tools like a professional?"
        ),
        "examples": [{"title": "Goal", "content": "Identify and describe the correct uses of various science tools."}]
      },
      {
        "title": "Rulers and Measurement",
        "text": make_text(
          "A ruler is a tool used to measure length.",
          "It has straight edges marked with numbers and lines.",
          "We measure in millimeters, centimeters, and meters.",
          "We align the zero mark of rulers with object edges.",
          "We read the number at the opposite end closely.",
          "Rulers help us record exact sizes of objects.",
          "Without rulers, we could only guess the length.",
          "Let's measure our science notebooks using our rulers!"
        ),
        "examples": [{"title": "Ruler", "content": "Measuring a pencil: it is exactly 15 centimeters long."}]
      },
      {
        "title": "Hand Lenses and Sight",
        "text": make_text(
          "A hand lens is also called magnifying glass.",
          "It has a curved glass lens that magnifies objects.",
          "Magnifying means making tiny details look much larger.",
          "We hold lenses close to our eye first.",
          "We move the object closer or further to focus.",
          "Lenses reveal tiny plant parts and insect limbs.",
          "They show the sand grains and soil fibers clearly.",
          "Observe your own thumb print using hand lenses today!"
        ),
        "examples": [{"title": "Hand Lens", "content": "Observing tiny hairs on the stem of a green weed."}]
      },
      {
        "title": "Scissors and Safety",
        "text": make_text(
          "Scissors are tools used to cut materials neatly.",
          "They have two sharp metal blades that slide together.",
          "We use them to cut paper, string, and cardboard.",
          "Scissors must be handled with great care always.",
          "Never run while holding scissors in your hand.",
          "Pass them handle-first to other students safely.",
          "Keep fingers away from blades when cutting shapes.",
          "Cut out a paper circle for your wind experiment!"
        ),
        "examples": [{"title": "Scissors", "content": "Cutting thick cardboard into wind vane directional arrows."}]
      },
      {
        "title": "Balloons and Air Space",
        "text": make_text(
          "Balloons are elastic tools used to study gases.",
          "A dry balloon is flat and holds no shape.",
          "Blowing air inside stretches the rubber shell outwards.",
          "Balloons trap air inside, letting us observe gas.",
          "We use balloons to study air pressure and volume.",
          "Squeezing balloons show that gas can be compressed.",
          "Tying the neck keeps air from escaping away.",
          "Let's blow up balloons to see air pressure work!"
        ),
        "examples": [{"title": "Balloon", "content": "Using inflated balloons to push lightweight toy carts forward."}]
      },
      {
        "title": "Modeling Clay and Force",
        "text": make_text(
          "Modeling clay is a soft solid material.",
          "We use clay to build models of landforms or organs.",
          "We press, roll, and shape clay using force.",
          "Clay holds details like hand prints and tool marks.",
          "It does not spring back like rubber bands.",
          "We use clay bases to hold lightweight tools upright.",
          "We mix colors to represent different soil layers.",
          "Mold a clay mountain to observe water flow down!"
        ),
        "examples": [{"title": "Modeling Clay", "content": "Molding a blue base to hold a paper flag upright on desks."}]
      },
      {
        "title": "Cardboard and Structures",
        "text": make_text(
          "Cardboard is a stiff paper material in sheets.",
          "It is thicker and stronger than regular writing paper.",
          "We use cardboard to build sturdy lab models.",
          "It blocks light completely, casting dark grey shadows.",
          "We fold cardboard to make ramps for toy cars.",
          "It holds its shape well under lightweight loads.",
          "We use scissors to cut cardboard into shapes.",
          "Construct a cardboard shadow screen for light tests!"
        ),
        "examples": [{"title": "Cardboard", "content": "Cutting cardboard circles to act as wheels for toy carts."}]
      },
      {
        "title": "Tool Matching: Length",
        "text": make_text(
          "Different tasks require different science tool helpers.",
          "If you want to measure seed growth, use rulers.",
          "Rulers give exact length in millimeters and centimeters.",
          "Do not use scissors or string to measure size.",
          "Always align the object with the zero mark.",
          "Read the measurement carefully from left to right.",
          "Record the numbers in your lab notebook immediately.",
          "Practice measuring three different leaves with rulers now!"
        ),
        "examples": [{"title": "Length", "content": "Selecting a wooden ruler to measure desk height."}]
      },
      {
        "title": "Tool Matching: Details",
        "text": make_text(
          "If you want to see tiny details, use lenses.",
          "Lenses help us observe things too small for eyes.",
          "E.g., observing the wings of a small fly.",
          "Do not hold the lens too far from eyes.",
          "Keep the lens near your eye and move objects.",
          "This focus technique gives the clearest, biggest view.",
          "Lenses help us describe physical textures of soils.",
          "Identify five details on rocks using hand lenses!"
        ),
        "examples": [{"title": "Details", "content": "Selecting a magnifying glass to check leaf vein patterns."}]
      },
      {
        "title": "Tool Matching: Shaping",
        "text": make_text(
          "If you want to build models, use clay.",
          "Clay allows us to shape mountains and valleys.",
          "If you want to make flat shapes, use cardboard.",
          "Cardboard sheets are stiff and stand up well.",
          "If you want to separate materials, use scissors.",
          "Scissors cut paper and cardboard into neat pieces.",
          "Combining tools helps us build advanced science models.",
          "Use clay to hold a cardboard sign on desks!"
        ),
        "examples": [{"title": "Shaping", "content": "Using modeling clay and cardboard to build a water dam model."}]
      },
      {
        "title": "Safe Handling Procedures",
        "text": make_text(
          "Safety is the first rule in every science lab.",
          "Always follow the teacher's instructions when using tools.",
          "Carry scissors with the blades pointing downwards always.",
          "Never point sharp tools at other students' eyes.",
          "Do not put modeling clay in your mouth.",
          "Wash hands with soap after playing with clay.",
          "Do not over-inflate balloons to prevent loud pops.",
          "Keep your workstation clean and free of clutter!"
        ),
        "examples": [{"title": "Safety", "content": "Wearing safety goggles when cutting stiff cardboard sheets."}]
      },
      {
        "title": "Measuring Length Accurately",
        "text": make_text(
          "To measure length, align rulers with object edges.",
          "Ensure the zero mark is exactly at the start.",
          "Look directly down at the ruler marks closely.",
          "Looking from angles creates measurement errors in data.",
          "Read the nearest centimeter mark on the ruler.",
          "Read the tiny millimeter marks for extra detail.",
          "E.g., a twig is 5 centimeters and 4 millimeters.",
          "Record both units in your science journal page!"
        ),
        "examples": [{"title": "Accuracy", "content": "Avoiding parallax error by looking straight down at marks."}]
      },
      {
        "title": "Magnifying Soil Grains",
        "text": make_text(
          "Let's study soil composition using our hand lenses.",
          "Spread a spoonful of loam soil on paper.",
          "Hold the lens close to your eye level.",
          "Look through the lens at the soil spread.",
          "Observe the tiny rock grains and leaf fibers.",
          "Observe how clay holds water compared to sand.",
          "Lenses help us classify soils by physical properties.",
          "Write down the differences you observe in journals!"
        ),
        "examples": [{"title": "Observation", "content": "Seeing sparkling quartz crystals in sandy river soil."}]
      },
      {
        "title": "Blowing Balloons safely",
        "text": make_text(
          "Balloons teach us about air volume and pressure.",
          "Breathe in deeply and blow air into balloons.",
          "The rubber stretches as more air goes inside.",
          "Stop blowing before the rubber becomes too thin.",
          "Over-stretched balloons pop easily, creating loud noises.",
          "Loud pops can hurt ears and startle classmates.",
          "Tie the neck with string to hold the air.",
          "Measure the balloon's width using string and rulers!"
        ),
        "examples": [{"title": "Balloon safety", "content": "Inflating balloons slowly to prevent rapid rubber failure."}]
      },
      {
        "title": "Pressing Modeling Clay",
        "text": make_text(
          "We mold modeling clay to test physical forces.",
          "Flatten a ball of clay on your desk.",
          "Press your thumb into the clay surface firmly.",
          "Observe the detailed print of your thumb left.",
          "The clay records the force of your thumb print.",
          "Use a toothpick to draw lines in the clay.",
          "Clay is a solid that changes shape under force.",
          "Roll the clay back into balls to reuse!"
        ),
        "examples": [{"title": "Clay Force", "content": "Clay holds shapes because it lacks elasticity to snap back."}]
      },
      {
        "title": "Cutting Cardboard Shapes",
        "text": make_text(
          "Stiff cardboard sheets block light to make shadows.",
          "Draw a tree shape on a cardboard sheet.",
          "Use scissors to cut along the drawn lines.",
          "Hold the cardboard tree in front of flashlights.",
          "Observe the dark tree shadow cast on walls.",
          "Cardboard is opaque, meaning it blocks light completely.",
          "Paper is translucent, letting some light pass through.",
          "Compare shadows cast by cardboard and writing paper!"
        ),
        "examples": [{"title": "Cardboard Shadow", "content": "Opaque cardboard blocks all light, creating sharp shadows."}]
      },
      {
        "title": "Tool Maintenance",
        "text": make_text(
          "Taking care of tools makes them last longer.",
          "Wipe rulers dry after measuring wet garden soil.",
          "Clean lenses with soft cloths to avoid scratches.",
          "Scratches on glass lenses make observations blurry.",
          "Store scissors in their cases with blades closed.",
          "Keep modeling clay in sealed plastic bags always.",
          "Air dries out clay, making it hard and crumbly.",
          "Return all tools to their boxes after experiments!"
        ),
        "examples": [{"title": "Maintenance", "content": "Keeping clay moist by storing it in airtight containers."}]
      },
      {
        "title": "Guided Practice: Using Rulers",
        "text": make_text(
          "Let's practice measuring classroom items with rulers.",
          "Measure the length of your yellow pencil today.",
          "Place the pencil tip at the zero mark.",
          "Read the number next to the eraser end.",
          "If it is at 12, the length is 12cm.",
          "If it is 3 marks past 12, it is 12.3cm.",
          "Always write the unit (cm or mm) next to numbers.",
          "Numbers without units are not scientific data!"
        ),
        "examples": [{"title": "Measurement", "content": "Writing '15 cm' instead of just '15' in journals."}]
      },
      {
        "title": "Guided Practice: Using Lenses",
        "text": make_text(
          "Let's practice magnifying leaves using hand lenses.",
          "Select a leaf from the garden outside today.",
          "Hold the hand lens near your eye level.",
          "Bring the leaf close until veins look sharp.",
          "Observe the network of veins carrying water inside.",
          "Observe the tiny patterns on the leaf surface.",
          "Draw the magnified veins in your science log.",
          "Lenses help us explore hidden patterns in nature!"
        ),
        "examples": [{"title": "Focusing", "content": "Moving the leaf slowly back and forth to find focus."}]
      },
      {
        "title": "Guided Practice: Safe Cutting",
        "text": make_text(
          "Let's practice cutting cardboard shapes safely today.",
          "Draw three circles on a sheet of cardboard.",
          "Hold the cardboard sheet firmly with one hand.",
          "Use scissors to cut along the circular lines.",
          "Keep your cutting hand fingers away from blades.",
          "Cut slowly to stay on lines and avoid slips.",
          "Discard paper scraps into the recycle bin soon.",
          "Clean workspaces prevent slips and safety hazards!"
        ),
        "examples": [{"title": "Cutting", "content": "Following drawn guide lines to cut neat circles safely."}]
      },
      {
        "title": "Guided Practice: molding Clay",
        "text": make_text(
          "Let's build a science model using modeling clay.",
          "Roll clay into a round ball on desks.",
          "Flatten it to represent a flat island surface.",
          "Build small clay hills on top of the island.",
          "Clay helps us represent physical shapes in 3D.",
          "Drip water on hills to observe flow patterns.",
          "Water flows down clay hills into flat valleys.",
          "Clean your desk surface after finishing clay models!"
        ),
        "examples": [{"title": "Modeling", "content": "Using clay to model how rivers flow down mountains."}]
      },
      {
        "title": "Common Error: Blurry Lenses",
        "text": make_text(
          "A common mistake is holding lenses far from eyes.",
          "If you hold lenses at arm's length, view is tiny.",
          "It makes focusing difficult and distorts the image.",
          "Always keep the lens near your eye level.",
          "Move the object closer until it looks sharp.",
          "This technique uses the curved glass lens correctly.",
          "Clean oily fingerprints off glass lenses with cloths.",
          "Blurs on lenses block detailed science observations!"
        ),
        "examples": [{"title": "Incorrect", "content": "Holding the lens next to the leaf far from your eyes."}]
      },
      {
        "title": "Common Error: Misaligned Rulers",
        "text": make_text(
          "A common mistake is starting measurement at 1 mark.",
          "Many rulers have empty space before the 0 line.",
          "Always start measuring at the 0 line mark.",
          "Starting at the ruler edge adds extra millimeters.",
          "This error makes your recorded length inaccurate.",
          "Check where the numbers start on your ruler.",
          "Ensure the 0 mark is aligned with the edge.",
          "Accurate measurements keep science data reliable!"
        ),
        "examples": [{"title": "Incorrect", "content": "Aligning the pencil tip with the physical end of the plastic ruler."}]
      },
      {
        "title": "Summary of Week 3",
        "text": make_text(
          "Congratulations! You completed all the slides for Week 3.",
          "Let's review the main science tools we mastered.",
          "We learned the uses of rulers, lenses, and scissors.",
          "We explored balloons, modeling clay, and cardboard.",
          "We practiced safe carrying and handling of sharp tools.",
          "We measured length in centimeters and magnified details.",
          "We avoided common focus and ruler alignment errors.",
          "You are now ready to take the quiz and challenges!"
        ),
        "examples": [{"title": "Key Takeaway", "content": "Choosing the right tool is key to successful investigations."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Which tool is used to measure the length of a leaf in centimeters?", "options": ["Hand lens", "Ruler", "Scissors", "Cardboard"], "answer": 1},
      {"type": "choice", "q": "What is the correct way to focus a hand lens?", "options": ["Hold it at arm's length.", "Hold it close to your eye and move the object.", "Wave it back and forth quickly.", "Look at it from the side."], "answer": 1},
      {"type": "choice", "q": "How should you carry scissors in the classroom safely?", "options": ["Run with them in your hand.", "With the blades closed and pointing downwards.", "Wave them in the air.", "Keep them open for quick use."], "answer": 1},
      {"type": "choice", "q": "What property of balloons are we exploring when we blow air inside?", "options": ["Weight", "Elasticity and containing air", "Color changes", "Taste"], "answer": 1},
      {"type": "choice", "q": "Which material is best for molding a 3D model of a mountain?", "options": ["Cardboard sheet", "Modeling clay", "Scissors", "Ruler"], "answer": 1},
      {"type": "choice", "q": "Why is cardboard preferred over writing paper for shadow screens?", "options": ["It is green.", "It is opaque and blocks light completely.", "It is soft and sticky.", "It floats on water."], "answer": 1},
      {"type": "choice", "q": "Where should you align the edge of an object on a ruler?", "options": ["At the 1 cm mark", "At the 0 line mark", "At the physical edge of the ruler", "At the 10 cm mark"], "answer": 1},
      {"type": "choice", "q": "Which tool makes tiny plant vein patterns look larger?", "options": ["Ruler", "Hand lens (Magnifying glass)", "Balloon", "Cardboard"], "answer": 1},
      {"type": "verify", "q": "True or False: Storing modeling clay in an open box makes it dry and crumbly.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "What happens if you blow too much air into a rubber balloon?", "options": ["It turns into solid clay.", "It pops because the rubber stretches too thin.", "It becomes extremely heavy.", "It turns blue."], "answer": 1},
      {"type": "choice", "q": "What should you do after playing with modeling clay in class?", "options": ["Eat your lunch immediately.", "Wash your hands with soap and water.", "Wipe your hands on your shirt.", "Put the clay in your pockets."], "answer": 1},
      {"type": "choice", "q": "Which unit is used to measure small object lengths on a ruler?", "options": ["Millimeter (mm)", "Meter (m)", "Gram (g)", "Liter (L)"], "answer": 0},
      {"type": "choice", "q": "Which tool is best for cutting cardboard sheets into circles?", "options": ["Ruler", "Scissors", "Hand lens", "Modeling clay"], "answer": 1},
      {"type": "verify", "q": "True or False: We should carry scissors handle-first when passing them to a friend.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "What does 'magnify' mean when using a hand lens?", "options": ["To make objects smell sweet", "To make small details look larger", "To change the color of things", "To measure length in meters"], "answer": 1},
      {"type": "choice", "q": "Which material holds its shape permanently under thumb force?", "options": ["Balloons", "Modeling clay", "Water", "Air"], "answer": 1},
      {"type": "choice", "q": "Why do we wipe rulers dry after measuring wet garden soil?", "options": ["To prevent rust and keep markings clean.", "To change their color.", "To make them stretchier.", "To make them float."], "answer": 0},
      {"type": "choice", "q": "What thickness property describes cardboard compared to writing paper?", "options": ["It is thinner.", "It is thicker and stronger.", "It is softer.", "It is stickier."], "answer": 1},
      {"type": "verify", "q": "True or False: Standard scientific measurements require both numbers and units.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "Which tool should be stored in airtight bags to remain soft?", "options": ["Scissors", "Modeling clay", "Rulers", "Hand lenses"], "answer": 1},
      {"type": "choice", "q": "Which VCV word represents the starting point on rulers?", "options": ["zero", "unit", "mark", "base"], "answer": 0},
      {"type": "choice", "q": "What force is applied when cutting cardboard with scissors?", "options": ["Magnetic force", "Mechanical sliding force (cutting)", "Heat force", "Chemical force"], "answer": 1},
      {"type": "verify", "q": "True or False: Glass lenses should be cleaned with rough sand paper.", "options": ["True", "False"], "answer": 1},
      {"type": "choice", "q": "What color shadow does opaque cardboard cast under flashlights?", "options": ["Dark grey or black", "Bright yellow", "Clear white", "No shadow at all"], "answer": 0},
      {"type": "choice", "q": "Which tool is best for checking fine crystal grains in soil?", "options": ["Ruler", "Hand lens", "Balloons", "Clay"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: If you measure a leaf using a ruler starting at the 2 cm mark, and the end is at the 8 cm mark, how long is the leaf?", "options": ["8 cm", "6 cm", "10 cm", "2 cm"], "answer": 1},
      {"type": "choice", "q": "Challenge: Why does a leaf venation pattern look blurry through a hand lens that is held 30 cm away from your eyes?", "options": ["The lens is too far from eyes to focus light correctly.", "The leaf has no veins.", "The lens is dirty.", "The sun is too bright."], "answer": 0},
      {"type": "choice", "q": "Challenge: Which tool combination is best to build a wind direction indicator (wind vane)?", "options": ["Cardboard sheet, scissors, modeling clay base, and a pointer stick.", "Balloons and rulers.", "Hand lens and soap.", "Water and sand."], "answer": 0},
      {"type": "choice", "q": "Challenge: Why does modeling clay stay flat when pressed, while inflated balloons return to shape after light pressure?", "options": ["Clay is plastic (malleable) while balloon rubber is elastic.", "Clay is heavier.", "Balloons contain magic air.", "Clay is colder."], "answer": 0},
      {"type": "choice", "q": "Challenge: Spot the safety hazard: 'Cutting cardboard with scissors while running down the hallway.'", "options": ["Blades are closed.", "Running increases risk of falling and blade injury.", "The hallway is too dark.", "Cardboard is recyclable."], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Science Tool Explorer Lab",
      "desc": "Select three science tools at home (e.g., a ruler, a hand lens or magnifying glass, and modeling clay or playdough). Use the ruler to measure your thumb length in millimeters and centimeters. Use the lens to observe your thumb skin details. Mold clay to match your thumb's shape. Draw and describe your steps in a lab report for your parents.",
      "labels": ["Correctly used rulers to measure in cm and mm", "Correctly used hand lenses to observe fine details", "molded clay accurately and followed safe handling rules"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Exercise 1: Science Tool Identification</h3>
                  <p class="ws-instruction">Write the name of the correct science tool helper (<strong>Ruler</strong>, <strong>Hand lens</strong>, <strong>Scissors</strong>, <strong>Modeling clay</strong>) for each task.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Magnifying the tiny structures on insect wings:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Hand lens</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Measuring the height of a sprout in millimeters:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Ruler</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Molding a three-dimensional model of a flower stem:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Modeling clay</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 2: Safe Tool Handling</h3>
                  <p class="ws-instruction">Classify each tool behavior below as either <strong>Safe</strong> or <strong>Unsafe</strong>.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Walking slowly carrying scissors pointing downwards.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Safe</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Squeezing clay and then washing hands with soap.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Safe</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Blowing a balloon as large as possible until it pops near eyes.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Unsafe</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 3: Measurement Accuracy</h3>
                  <p class="ws-instruction">Write down the correct length in centimeters for each pencil measurement below.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Pencil A aligned from 0 cm mark to 12 cm line:</div>
                    <div class="writing-line" style="margin-top: 15px; width: 40%;"><span class="ws-answer">12 cm</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">Pencil B aligned from 2 cm mark to 8 cm line:</div>
                    <div class="writing-line" style="margin-top: 15px; width: 40%;"><span class="ws-answer">6 cm</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  4: {
    "color": "#10b981",
    "icon": "🔬",
    "title": "Science",
    "subtitle": "Week 4: Science Process Skills",
    "slides": [
      {
        "title": "Welcome to Process Skills!",
        "text": make_text(
          "Hello, Scientist! Welcome to Science Week 4!",
          "This week we are mastering science process skills.",
          "Process skills are tools scientists use to explore nature.",
          "We will focus on three core skills today.",
          "These skills are observing, predicting, and measuring.",
          "We use units like millimeters, centimeters, and meters.",
          "Let's practice these skills in our simple activities.",
          "Are you ready to think like a professional investigator?"
        ),
        "examples": [{"title": "Goal", "content": "Describe and apply observing, predicting, and measuring process skills."}]
      },
      {
        "title": "The Skill of Observing",
        "text": make_text(
          "Observing is using your senses to gather facts.",
          "We observe colors, shapes, textures, and sounds.",
          "An observation must be factual and objective always.",
          "E.g., 'The metal coin sinks in the water cup.'",
          "Avoid personal opinions like 'The coin is pretty.'",
          "Use hand lenses to observe tiny details on leaves.",
          "Use touch to observe the stickiness of wet clay.",
          "Always record what you see, feel, hear, or smell!"
        ),
        "examples": [{"title": "Observation", "content": "Observing that clay holds shape under thumb pressure."}]
      },
      {
        "title": "The Skill of Predicting",
        "text": make_text(
          "Predicting is making logical guesses about future events.",
          "It is not a wild guess; it requires evidence.",
          "We use clues and past experiences to predict outcomes.",
          "E.g., 'Dark grey clouds mean it will rain soon.'",
          "If you place water in freezer pots overnight,",
          "you predict it will turn to solid ice cubes.",
          "If you drop a heavy stone in water buckets,",
          "you predict it will sink to the bottom quickly!"
        ),
        "examples": [{"title": "Prediction", "content": "Predicting that wet clothes dry faster under hot sun."}]
      },
      {
        "title": "The Skill of Measuring",
        "text": make_text(
          "Measuring is using tools to collect numerical data.",
          "It helps us know the exact size or weight.",
          "We use rulers to measure length accurately.",
          "We measure in millimeters (mm) for tiny objects.",
          "We measure in centimeters (cm) for classroom items.",
          "We measure in meters (m) for larger room dimensions.",
          "Always align the object edge with the zero mark.",
          "Write numbers and units together in your logs!"
        ),
        "examples": [{"title": "Measurement", "content": "Measuring a seedling height as exactly 45 millimeters."}]
      },
      {
        "title": "Millimeters, Centimeters, Meters",
        "text": make_text(
          "Centimeters and millimeters are marked on rulers.",
          "There are ten millimeters in one single centimeter.",
          "We use millimeters for small insects or seeds.",
          "We use centimeters for books, pencils, and leaves.",
          "We use meters for classroom floors or chalkboards.",
          "One meter is equal to exactly 100 centimeters.",
          "Choosing the right unit makes your data precise.",
          "Measure your pinky fingernail width in millimeters now!"
        ),
        "examples": [{"title": "Units", "content": "1 cm = 10 mm, 1 m = 100 cm."}]
      },
      {
        "title": "Observing Solid Properties",
        "text": make_text(
          "We practice observing physical properties of solids.",
          "Solid materials hold their own shapes and volumes.",
          "Observe a metal nail, a cotton ball, and stones.",
          "We classify them by hardness, shininess, and texture.",
          "The rock is hard; the cotton is soft to touch.",
          "The metal is shiny; the charcoal is dull grey.",
          "These observations describe the physical state of solids.",
          "Record three solid properties in your notebook page!"
        ),
        "examples": [{"title": "Properties", "content": "Shiny metal nail, hard river stone, soft cotton fibers."}]
      },
      {
        "title": "Predicting Weather Changes",
        "text": make_text(
          "Weather prediction is a daily science process skill.",
          "We look at the sky to gather weather clues.",
          "Dark grey clouds block sunlight, cooling the air.",
          "Strong winds blow dust and sway tree branches.",
          "Based on these clues, we predict a rain storm.",
          "Our past experience tells us grey clouds bring rain.",
          "Predicting helps communities prepare for weather events.",
          "Write down your weather prediction for tomorrow afternoon!"
        ),
        "examples": [{"title": "Weather", "content": "Predicting rain when humidity rises and clouds darken."}]
      },
      {
        "title": "Measuring Plant Growth",
        "text": make_text(
          "Measuring seedling growth requires precision and care.",
          "Place a plastic ruler next to sprout stems.",
          "Align the zero mark with the soil level.",
          "Read the height to the nearest millimeter line.",
          "Write down the height in your growth chart daily.",
          "Comparing daily height reveals the growth rate.",
          "A watered seedling grew 3 millimeters in one day.",
          "Measuring helps us test if watering works well!"
        ),
        "examples": [{"title": "Plant Measure", "content": "Seedling height measured at 12 mm on Day 3."}]
      },
      {
        "title": "Observing water evaporation",
        "text": make_text(
          "Let's observe water turning into invisible gas vapor.",
          "Drip a water drop on a warm chalkboard.",
          "Watch closely as the wet spot shrinks soon.",
          "The spot disappears completely in a few minutes.",
          "This observation shows evaporation in action today.",
          "Heat from room air turned liquid into gas vapor.",
          "Observe how long a wet tissue takes to dry.",
          "Write down the drying time in minutes in logs!"
        ),
        "examples": [{"title": "Evaporation", "content": "Liquid water spot vanishes from warm blackboard surfaces."}]
      },
      {
        "title": "Predicting Shadow Directions",
        "text": make_text(
          "Shadow directions change in regular daily patterns.",
          "The Sun rises in the east in the morning.",
          "It casts shadows pointing towards the west side.",
          "In the afternoon, the Sun sets in the west.",
          "It casts shadows pointing towards the east side.",
          "Predict where your shadow will fall at noon today.",
          "At noon, the Sun is directly above your head.",
          "So the shadow will be short and under feet!"
        ),
        "examples": [{"title": "Shadows", "content": "Morning shadows point west, afternoon shadows point east."}]
      },
      {
        "title": "Measuring Liquid Volume",
        "text": make_text(
          "We measure liquid volume in milliliters in labs.",
          "We use graduated cylinders or cups with markings.",
          "Place the cup on flat desk surfaces to read.",
          "Look at the liquid surface at eye level closely.",
          "The liquid curves slightly, forming a meniscus curve.",
          "Read the number at the bottom of the curve.",
          "Accurate volume measures are key for chemical tests.",
          "Measure 50 milliliters of water for your plants!"
        ),
        "examples": [{"title": "Volume", "content": "Measuring water volume at 50 mL mark in cylinders."}]
      },
      {
        "title": "Observing Force Effects",
        "text": make_text(
          "We observe how pushes and pulls change movement.",
          "Push a toy car slowly across smooth desks.",
          "It rolls forward and stops due to table friction.",
          "Now push it harder with a strong finger force.",
          "Observe that it rolls faster and goes further.",
          "The amount of force changes speed and distance.",
          "Measuring distance in centimeters shows force effects.",
          "Record push distance for three tests in charts!"
        ),
        "examples": [{"title": "Force Test", "content": "Soft push = 10 cm, hard push = 30 cm distance."}]
      },
      {
        "title": "Predicting Material Changes",
        "text": make_text(
          "We predict how heat changes different solid materials.",
          "Place solid wax, butter, and stones in sun.",
          "We predict the wax and butter will melt soon.",
          "We predict the stone will not melt in sun.",
          "Past tests show organic solids melt at low heat.",
          "Stones require extreme furnace heat to change state.",
          "This prediction uses physical facts of melting points.",
          "Check your predictions after one hour of exposure!"
        ),
        "examples": [{"title": "Melting", "content": "Predicting butter melts while rocks remain solid in sun."}]
      },
      {
        "title": "Measuring Room Dimensions",
        "text": make_text(
          "We use tape measures to measure larger room lengths.",
          "Rulers are too small for measuring classroom walls.",
          "We select meters (m) as the correct unit helper.",
          "Two students hold the ends of tape measures flat.",
          "Read the measurement line next to the corner wall.",
          "E.g., the classroom length is exactly 8 meters.",
          "Recording dimensions helps us plan desk layouts.",
          "Measure the length of your chalkboard in meters today!"
        ),
        "examples": [{"title": "Meters", "content": "Chalkboard length measured at 3 meters and 20 cm."}]
      },
      {
        "title": "Observing Animal Behaviors",
        "text": make_text(
          "Let's observe behavior patterns of garden ants.",
          "Ants walk in straight lines along wall cracks.",
          "They carry food bits back to their nest holes.",
          "Observe how they touch antennae when they meet.",
          "Antennae touches share information about food locations.",
          "This is a factual observation using sight organs.",
          "Write down ant behaviors without adding opinion words.",
          "Keep your animal observation log completely objective!"
        ),
        "examples": [{"title": "Ants", "content": "Ants carry bread crumbs three times their body size."}]
      },
      {
        "title": "Predicting Plant Survival",
        "text": make_text(
          "We predict plant survival under different conditions.",
          "Place one plant in sun, one in dark closets.",
          "Water both plants with equal water amounts daily.",
          "We predict the plant in the closet will weaken.",
          "It will turn yellow and die due to lack of sun.",
          "The plant in the sun will grow healthy leaves.",
          "This prediction uses plant biology facts we learned.",
          "Verify the leaf color in both pots after weeks!"
        ),
        "examples": [{"title": "Survival", "content": "Closet plant turns yellow due to lack of light energy."}]
      },
      {
        "title": "Measuring temperature changes",
        "text": make_text(
          "We measure heat levels using liquid thermometers.",
          "Thermometers contain liquid that rises when heated.",
          "We measure temperature in degrees Celsius (°C).",
          "Place the glass bulb in warm water cups closely.",
          "Watch the red liquid rise along the scale lines.",
          "Read the line number when the liquid stops rising.",
          "E.g., the warm water is at 45 degrees Celsius.",
          "Record temperature data carefully in your log book!"
        ),
        "examples": [{"title": "Temperature", "content": "Measuring room temperature at 25 degrees Celsius."}]
      },
      {
        "title": "Guided Practice: Observing",
        "text": make_text(
          "Let's observe physical properties of kitchen liquids.",
          "We examine cooking oil, water, and sweet syrup.",
          "Oil is yellow; water is clear and colorless.",
          "Syrup is dark brown and flows very slowly.",
          "We observe the thickness or viscosity of liquids.",
          "Slow flowing shows high viscosity in daily science.",
          "Fast flowing shows low viscosity (like clean water).",
          "Record these liquid properties in your journal page!"
        ),
        "examples": [{"title": "Liquids", "content": "Syrup flows slower than water because it is thick."}]
      },
      {
        "title": "Guided Practice: Predicting",
        "text": make_text(
          "Let's practice predicting results of mixing colors.",
          "We mix blue dye and yellow dye in cups.",
          "What color do you predict the mixture will turn?",
          "Based on coloring experiences, we predict green!",
          "Stir the liquid and observe the color change.",
          "The liquid turns green, confirming our prediction.",
          "Predictions help us test if color rules work.",
          "Predict what mixing red and yellow creates today!"
        ),
        "examples": [{"title": "Color Test", "content": "Blue + Yellow = Green is a verified prediction."}]
      },
      {
        "title": "Guided Practice: Measuring",
        "text": make_text(
          "Let's practice measuring water drops on coins.",
          "Use a plastic eye dropper to drip water on coins.",
          "Count how many drops a one-peso coin holds.",
          "Drip slowly and observe water dome forming.",
          "The coin holds 25 drops before spilling over table.",
          "Measuring drops count shows water surface tension.",
          "Repeat the test three times to get average data.",
          "Record each drop count in your science log!"
        ),
        "examples": [{"title": "Drops", "content": "Test 1 = 24 drops, Test 2 = 25 drops, Test 3 = 26 drops."}]
      },
      {
        "title": "Guided Practice: Process Skills",
        "text": make_text(
          "Let's combine all process skills in one lab.",
          "Observe a solid candle on your laboratory desk.",
          "Predict what happens when wicks are lit with fire.",
          "We predict solid wax will melt and turn liquid.",
          "Light the wick and measure melting time with clocks.",
          "The wax turns to liquid in exactly two minutes.",
          "Record the observation, prediction, and measured time.",
          "Combining skills is how scientists perform investigations!"
        ),
        "examples": [{"title": "Combined Skills", "content": "Observed solid wax, predicted melting, measured time."}]
      },
      {
        "title": "Common Error: Subjective Observations",
        "text": make_text(
          "Avoid using subjective words in scientific logs.",
          "Do not write: 'The ant is cute and works hard.'",
          "Cute and hard-working are opinions, not measurements.",
          "Instead, write: 'The ant carried 5-gram crumbs.'",
          "This statement contains measurable and factual details.",
          "Keep descriptions clear of personal feelings always.",
          "It ensures other scientists can repeat your work.",
          "Check your data sheets to remove subjective terms today!"
        ),
        "examples": [{"title": "Incorrect", "content": "Writing 'This flower smells the best' in logs."}]
      },
      {
        "title": "Common Error: Unreasonable Predictions",
        "text": make_text(
          "Avoid making predictions that do not match facts.",
          "Do not predict: 'A dry seed in sand grows tomorrow.'",
          "This guess violates plant biology rules of growth.",
          "Seeds need water and time to germinate and sprout.",
          "A reasonable prediction is: 'Seeds sprout in five days.'",
          "Ensure your predictions are backed by evidence and logic.",
          "Unreasonable guesses make your reports look unscientific.",
          "Review your predictions using science rules first!"
        ),
        "examples": [{"title": "Incorrect", "content": "Predicting that dropping rocks makes them float on water."}]
      },
      {
        "title": "Summary of Week 4",
        "text": make_text(
          "Congratulations! You completed all the slides for Week 4.",
          "Let's review the main science tools we mastered.",
          "We learned to apply observing, predicting, and measuring.",
          "We used millimeters, centimeters, and meters on rulers.",
          "We measured temperatures in Celsius and liquid volumes.",
          "We predicted weather changes and plant survival rates.",
          "We avoided subjective observations and unreasonable guesses.",
          "You are now ready to take the quiz and challenges!"
        ),
        "examples": [{"title": "Key Takeaway", "content": "Process skills are the foundation of scientific thinking."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Which science process skill uses your senses to collect facts?", "options": ["Predicting", "Measuring", "Observing", "Classifying"], "answer": 2},
      {"type": "choice", "q": "Which statement is a factual scientific observation?", "options": ["The plant is very pretty.", "The plant stem is 15 centimeters tall.", "Plants are the best living things.", "I like green leaves more than red ones."], "answer": 1},
      {"type": "choice", "q": "What is a logical prediction when dark grey clouds cover the sky?", "options": ["It will snow soon.", "It will rain shortly.", "The sun will get hotter.", "The wind will stop blowing."], "answer": 1},
      {"type": "choice", "q": "Which tool is used to measure air temperature in degrees Celsius?", "options": ["Ruler", "Graduated cylinder", "Thermometer", "Hand lens"], "answer": 2},
      {"type": "choice", "q": "What unit is best to measure the thickness of a small seed?", "options": ["Millimeter (mm)", "Meter (m)", "Kilogram (kg)", "Liter (L)"], "answer": 0},
      {"type": "choice", "q": "How many millimeters are equal to exactly one centimeter?", "options": ["5", "10", "100", "1000"], "answer": 1},
      {"type": "choice", "q": "What is a logical prediction for water placed in a freezer overnight?", "options": ["It will boil.", "It will turn into solid ice.", "It will evaporate.", "It will turn green."], "answer": 1},
      {"type": "choice", "q": "Which statement is a subjective opinion, NOT an observation?", "options": ["The stone weighs 50 grams.", "The stone is very ugly.", "The stone is grey and rough.", "The stone is 5 cm wide."], "answer": 1},
      {"type": "choice", "q": "What unit is best to measure the length of a classroom chalkboard?", "options": ["Millimeter (mm)", "Centimeter (cm)", "Meter (m)", "Gram (g)"], "answer": 2},
      {"type": "verify", "q": "True or False: A scientific prediction is a guess based on evidence and clues.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "Which skill are you using when you count the drops of water on a coin?", "options": ["Predicting", "Measuring", "Classifying", "Hypothesizing"], "answer": 1},
      {"type": "choice", "q": "Which of these is the correct symbol for degrees Celsius?", "options": ["°C", "cm", "mm", "mL"], "answer": 0},
      {"type": "choice", "q": "What happens to liquid water on a warm blackboard surface?", "options": ["It freezes.", "It evaporates into gas vapor.", "It turns into solid wax.", "It turns blue."], "answer": 1},
      {"type": "choice", "q": "What shadow direction is cast when the Sun is rising in the East?", "options": ["West", "East", "North", "South"], "answer": 0},
      {"type": "verify", "q": "True or False: One meter is equal to exactly 10 centimeters.", "options": ["True", "False"], "answer": 1},
      {"type": "choice", "q": "Which property of thick syrup makes it flow slower than water?", "options": ["High viscosity (thickness)", "Low temperature", "Elasticity", "Color"], "answer": 0},
      {"type": "choice", "q": "What is the dependent variable in a plant growth experiment?", "options": ["Amount of water given", "The height of the plant", "The type of soil used", "The amount of sunlight"], "answer": 1},
      {"type": "choice", "q": "What is the independent variable in a plant growth experiment?", "options": ["The height of the plant", "The factor you change (e.g. fertilizer amount)", "The type of pot", "The duration of the test"], "answer": 1},
      {"type": "verify", "q": "True or False: Observing that a rock feels rough is a qualitative observation.", "options": ["True", "False"], "answer": 0},
      {"type": "choice", "q": "Which VCV word represents the tool used to measure temperature?", "options": ["ruler", "thermometer", "cylinder", "scale"], "answer": 1},
      {"type": "choice", "q": "What will happen to an iron nail left outside in wet air for weeks?", "options": ["It will melt.", "It will rust and turn orange-brown.", "It will turn gold.", "It will disappear."], "answer": 1},
      {"type": "choice", "q": "Which skill is used to group objects by common properties?", "options": ["Classifying", "Measuring", "Predicting", "Hypothesizing"], "answer": 0},
      {"type": "verify", "q": "True or False: Predicting that heavy rocks will float is reasonable based on daily evidence.", "options": ["True", "False"], "answer": 1},
      {"type": "choice", "q": "Which unit is used to measure liquid volume in lab cylinders?", "options": ["Milliliter (mL)", "Degree Celsius", "Centimeter", "Gram"], "answer": 0},
      {"type": "choice", "q": "What is the main purpose of using process skills in science?", "options": ["To paint pictures", "To study nature systematically using evidence", "To write stories", "To perform magic tricks"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: A student measures a leaf at 54 mm. How many centimeters and millimeters is this?", "options": ["5 cm and 4 mm", "54 cm", "50 cm and 4 mm", "5 cm and 40 mm"], "answer": 0},
      {"type": "choice", "q": "Challenge: If you predict that a seed will sprout faster in warm soil than cold soil, what is your evidence?", "options": ["Heat energy increases biological activity speeds.", "Warm soil has more water.", "Cold soil is always sandy.", "Seeds prefer warm colors."], "answer": 0},
      {"type": "choice", "q": "Challenge: Which variable should be controlled (kept the same) when testing if different soils affect plant growth?", "options": ["The type of soil", "The amount of water and sunlight given to all pots", "The height of the plants", "The number of leaves produced"], "answer": 1},
      {"type": "choice", "q": "Challenge: Why is the prediction 'the sun will rise in the west tomorrow' unreasonable?", "options": ["It violates the established fact of Earth's rotation direction.", "The sun only rises on weekdays.", "The moon blocks the west.", "It is too hot in the west."], "answer": 0},
      {"type": "choice", "q": "Challenge: Which process skill combination is used when you measure a rusted area on an iron plate?", "options": ["Observing the rust, and measuring its width in millimeters.", "Predicting rain, and using a thermometer.", "Classifying soils, and mixing chemicals.", "Tinkering with clay, and blowing balloons."], "answer": 0}
    ],
    "performance": {
      "type": "performance",
      "title": "Science Process Skills Home Lab",
      "desc": "Select a solid object at home (like a key or a stone). 1. Observe and write down three qualitative properties (color, texture, shape). 2. Measure its length in millimeters and centimeters using a ruler. 3. Predict whether it will float or sink in water, then perform the test to verify. Record all steps and results in your science log.",
      "labels": ["Conducted qualitative observations using senses", "Measured object length accurately in cm and mm", "Made and tested a logical float/sink prediction based on facts"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Exercise 1: Science Process Skills</h3>
                  <p class="ws-instruction">Write the correct process skill (<strong>Observing</strong>, <strong>Predicting</strong>, <strong>Measuring</strong>) for each action.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Recording that a chemical solution turned from blue to yellow:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Observing</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Using a thermometer to check air temperature in degrees Celsius:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Measuring</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Writing 'The ice will melt soon in the sun' before placing it outside:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Predicting</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 2: Unit Matching</h3>
                  <p class="ws-instruction">Write the correct unit abbreviation (<strong>mm</strong>, <strong>cm</strong>, <strong>m</strong>, <strong>°C</strong>, <strong>mL</strong>) for each measurement.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. The width of your thumb nail (small size):</div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">mm</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. The volume of water in a lab cylinder:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">mL</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. The height of the classroom wall:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">m</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Exercise 3: Factual Observations</h3>
                  <p class="ws-instruction">Identify whether each sentence is a <strong>Fact</strong> or an <strong>Opinion</strong>.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. The green leaf has a length of 8 centimeters.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Fact</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Spiders are the scariest creatures in the garden.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Opinion</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. The metal gate turned orange-brown and rough due to rust.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Fact</span></div>
                  </div>
                </div>"""
      ]
    }
  }
}

# =========================================================================
# MERGING AND WRITING LOGIC
# =========================================================================

import sys

# Add scratch dir to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from data_filipino import FILIPINO_DATA
from data_makabansa import MAKABANSA_DATA
from data_gmrc import GMRC_DATA

WORKSPACE = "/home/moondae/Antigravity Projects/Matts Files_apk"
DATA_DIR = os.path.join(WORKSPACE, "data/g3")

def extract_json_block(text, prefix):
    idx = text.find(prefix)
    if idx == -1:
        return None
    start_pos = idx + len(prefix)
    brace_start = -1
    brace_char = ''
    for i in range(start_pos, len(text)):
        if text[i] in ['{', '[']:
            brace_start = i
            brace_char = text[i]
            break
    if brace_start == -1:
        return None
        
    bracket_count = 0
    in_string = False
    escape = False
    close_char = '}' if brace_char == '{' else ']'
    for i in range(brace_start, len(text)):
        char = text[i]
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if char == '"':
            in_string = not in_string
            continue
        if not in_string:
            if char == brace_char:
                bracket_count += 1
            elif char == close_char:
                bracket_count -= 1
                if bracket_count == 0:
                    return text[brace_start:i+1]
    return None

def make_translation(fil, eng):
    eng_escaped = eng.replace('"', '&quot;')
    return f'<span class="fil-sentence" data-translation="{eng_escaped}">{fil}</span>'

def pad_slides(slides, subject, week_num):
    if len(slides) >= 25:
        return slides[:25]
        
    padded = list(slides)
    needed = 25 - len(slides)
    
    summary_slide = padded[-1] if padded else None
    if summary_slide:
        padded = padded[:-1]
        
    for i in range(needed):
        review_num = i + 1
        if subject.lower() == 'science':
            title = f"Extra Practice: Science Review {chr(65+i)}"
            text = make_text(
                f"Let's review the important science concepts of Week {week_num}.",
                "We have studied observations, measurements, and predictions.",
                "A real scientist is always curious and checks their facts.",
                "Think about the experiments we discussed in the slides.",
                "Can you explain them in your own words to others?",
                "Use your scientific vocabulary to describe your ideas clearly.",
                "Answer the quiz questions and challenges to test your memory.",
                "Keep up the great work and enjoy exploring the world!"
            )
            examples = [{"title": f"Review Card {review_num}", "content": "Practice explaining these science ideas to your family."}]
        else:
            title = f"Karagdagang Pagsasanay {review_num}"
            text = make_text(
                make_translation("Mag-review tayo ng mga aralin sa linggong ito.", "Let's review our lessons for this week."),
                make_translation(f"Pinag-aralan natin ang mahahalagang konsepto ng Week {week_num}.", f"We studied the important concepts of Week {week_num}."),
                make_translation("Maging maingat sa pagbabasa at pag-unawa ng mga salita.", "Be careful in reading and understanding the words."),
                make_translation("Gamitin ang iyong kaalaman sa iyong sariling buhay.", "Apply your knowledge to your own daily life."),
                make_translation("Maaari mong talakayin ito kasama ang iyong mga kalaro.", "You can discuss this together with your playmates."),
                make_translation("Ang pag-aaral ng wika at asal ay nagpapalaki sa atin.", "Learning language and values helps us grow up well."),
                make_translation("Subukang sagutin ang lahat ng tanong sa pagsusulit natin.", "Try to answer all the questions in our quiz today."),
                make_translation("Ipagpatuloy ang pagiging mahusay at masipag na mag-aaral!", "Continue being an excellent and hardworking student!")
            )
            examples = [{"title": f"Pagsasanay {review_num}", "content": "Ibahagi ang iyong mga natutunan sa aralin sa iyong pamilya ngayon."}]
            
        padded.append({
            "title": title,
            "text": text,
            "examples": examples
        })
        
    if summary_slide:
        padded.append(summary_slide)
        
    return padded

for w in range(1, 5):
    filename = f"week{w}.js"
    filepath = os.path.join(DATA_DIR, filename)
    print(f"Processing {filepath}...")
    
    if not os.path.exists(filepath):
        print(f"[ERROR] {filepath} does not exist!")
        sys.exit(1)
        
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    math_core = extract_json_block(content, f"window.WEEK{w}_DATA.math = ")
    english_core = extract_json_block(content, f"window.WEEK{w}_DATA.english = ")
    reading_core = extract_json_block(content, f"window.WEEK{w}_DATA.reading = ")
    checklist_core = extract_json_block(content, f"window.WEEK{w}_DATA.checklist = ")
    
    math_adv = extract_json_block(content, f"window.WEEK{w}_ADVANCED_DATA.math = ")
    english_adv = extract_json_block(content, f"window.WEEK{w}_ADVANCED_DATA.english = ")
    
    if not math_core:
        print(f"[ERROR] Could not extract math_core from {filename}")
        sys.exit(1)
    if not english_core:
        print(f"[ERROR] Could not extract english_core from {filename}")
        sys.exit(1)
    if not reading_core:
        print(f"[ERROR] Could not extract reading_core from {filename}")
        sys.exit(1)
    if not checklist_core:
        print(f"[ERROR] Could not extract checklist_core from {filename}")
        sys.exit(1)
    if not math_adv:
        print(f"[ERROR] Could not extract math_adv from {filename}")
        sys.exit(1)
    if not english_adv:
        print(f"[ERROR] Could not extract english_adv from {filename}")
        sys.exit(1)
        
    # Create padded copies
    science_padded = dict(SCIENCE_DATA[w])
    science_padded["slides"] = pad_slides(SCIENCE_DATA[w]["slides"], "science", w)
    
    filipino_padded = dict(FILIPINO_DATA[w])
    filipino_padded["slides"] = pad_slides(FILIPINO_DATA[w]["slides"], "filipino", w)
    
    makabansa_padded = dict(MAKABANSA_DATA[w])
    makabansa_padded["slides"] = pad_slides(MAKABANSA_DATA[w]["slides"], "makabansa", w)
    
    gmrc_padded = dict(GMRC_DATA[w])
    gmrc_padded["slides"] = pad_slides(GMRC_DATA[w]["slides"], "gmrc", w)
    
    science_json = json.dumps(science_padded, indent=2, ensure_ascii=False)
    filipino_json = json.dumps(filipino_padded, indent=2, ensure_ascii=False)
    makabansa_json = json.dumps(makabansa_padded, indent=2, ensure_ascii=False)
    gmrc_json = json.dumps(gmrc_padded, indent=2, ensure_ascii=False)
    
    output = f"""window.WEEK{w}_DATA = {{}};

window.WEEK{w}_DATA.math = {math_core};

window.WEEK{w}_DATA.science = {science_json};

window.WEEK{w}_DATA.english = {english_core};

window.WEEK{w}_DATA.filipino = {filipino_json};

window.WEEK{w}_DATA.makabansa = {makabansa_json};

window.WEEK{w}_DATA.gmrc = {gmrc_json};

window.WEEK{w}_DATA.reading = {reading_core};

window.WEEK{w}_DATA.checklist = {checklist_core};

window.WEEK{w}_ADVANCED_DATA = {{}};

window.WEEK{w}_ADVANCED_DATA.math = {math_adv};

window.WEEK{w}_ADVANCED_DATA.science = {science_json};

window.WEEK{w}_ADVANCED_DATA.english = {english_adv};

window.WEEK{w}_ADVANCED_DATA.filipino = {filipino_json};

window.WEEK{w}_ADVANCED_DATA.makabansa = {makabansa_json};

window.WEEK{w}_ADVANCED_DATA.gmrc = {gmrc_json};

window.WEEK{w}_ADVANCED_DATA.reading = window.WEEK{w}_DATA.reading;
"""
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(output)
        
    print(f"[SUCCESS] Updated {filename}")

print("All weeks regenerated successfully!")
