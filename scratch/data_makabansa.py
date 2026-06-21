import re

# Helper to construct 8-line text
def make_text(*lines):
    if len(lines) != 8:
        raise ValueError(f"Expected exactly 8 lines, got {len(lines)}")
    return "\n".join(lines)

# Helper to format bilingual translation span
def make_translation(fil, eng):
    eng_escaped = eng.replace('"', '&quot;')
    return f'<span class="fil-sentence" data-translation="{eng_escaped}">{fil}</span>'

# =========================================================================
# MAKABANSA DATA (WEEKS 1-4)
# =========================================================================
MAKABANSA_DATA = {
  1: {
    "color": "#f59e0b",
    "icon": "🏝️",
    "title": "Makabansa",
    "subtitle": "Week 1: Kasaysayan ng Ating Komunidad",
    "slides": [
      {
        "title": "Maligayang Pagdating sa Makabansa!",
        "text": make_text(
          make_translation("Kumusta, maliit na bayani! Welcome sa Makabansa!", "Hello, little hero! Welcome to Makabansa!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa kasaysayan.", "This week, we will study about history."),
          make_translation("Ang kasaysayan ay kwento ng mga nakaraang pangyayari.", "History is the story of past events in our lives."),
          make_translation("Tutukuyin natin ang kasaysayan ng sarili nating pook.", "We will identify the history of our own local place."),
          make_translation("Pag-aaralan natin ang pinagmulan ng ating barangay.", "We will study the origin and foundation of our barangay."),
          make_translation("Alamin natin ang mga artifact at lumang dokumento.", "Let's learn about historical artifacts and old documents."),
          make_translation("Handa ka na bang maglakbay sa nakaraan ng komunidad?", "Are you ready to travel to the past of our community?"),
          make_translation("Magsimula tayong mag-explore na parang historyador ngayon!", "Let's start exploring like historical researchers today!")
        ),
        "examples": [{"title": "Linggong Layunin", "content": "Maunawaan ang mga elemento ng kasaysayan ng sariling barangay at komunidad."}]
      },
      {
        "title": "Ano ang Kasaysayan?",
        "text": make_text(
          make_translation("Ang kasaysayan ay hindi lamang basta lumang kwento.", "History is not just simply old stories from the past."),
          make_translation("Ito ay pag-aaral ng may-saysay na nakaraang yugto.", "It is the study of meaningful past events in lives."),
          make_translation("May apat na mahahalagang elemento ang kasaysayan ngayon.", "There are four important elements of history we study today."),
          make_translation("Ito ang tao, lugar, panahon, at ang pangyayari.", "These are the people, place, time, and the event itself."),
          make_translation("Sinasagot nito ang sino, saan, kailan, at ano.", "It answers who, where, when, and what happened yonder."),
          make_translation("Ang pagkakaisa ng mga ito ang bumubuo sa kwento.", "The unity of these elements creates the historical story."),
          make_translation("Nakatutulong ito sa pag-unawa ng ating kasalukuyan.", "This helps us understand our present life in communities."),
          make_translation("Suriin natin ang bawat elemento sa ating aralin!", "Let's analyze each element in our lesson today!")
        ),
        "examples": [{"title": "Apat na Elemento", "content": "Tao (People), Lugar (Place), Panahon (Time), Pangyayari (Event)"}]
      },
      {
        "title": "Ang Elemento: Tao",
        "text": make_text(
          make_translation("Ang mga tao ang gumagawa ng kasaysayan sa pook.", "People are the ones who make history in a place."),
          make_translation("Sila ang namumuno at nagtutulungan sa barangay natin.", "They lead and help one another in our local barangay."),
          make_translation("Kasama rito ang mga unang nanirahan sa ating bayan.", "This includes the first settlers who lived in our town."),
          make_translation("Kasama rin ang mga bayani na nagtanggol sa kalayaan.", "This also includes the heroes who fought for freedom yonder."),
          make_translation("E.g., si Dr. Jose Rizal sa Lungsod ng Calamba.", "E.g., Dr. Jose Rizal in the City of Calamba, Laguna."),
          make_translation("Siya ay isang tao na nag-iwan ng malaking marka.", "He is a person who left a big mark in history."),
          make_translation("Ang bawat mamamayan ay may bahagi rin sa kwento.", "Every citizen also has a part in our local story."),
          make_translation("Sino ang mga kilalang tao sa inyong sariling barangay?", "Who are the well-known people in your own barangay?")
        ),
        "examples": [{"title": "Elemento: Tao", "content": "Mga lider, bayani, at mga mamamayan ng komunidad."}]
      },
      {
        "title": "Ang Elemento: Lugar",
        "text": make_text(
          make_translation("Ang kasaysayan ay laging nagaganap sa isang lugar.", "History always takes place in a specific physical location."),
          make_translation("Ito ang pook kung saan nanirahan ang mga tao.", "This is the physical place where people lived and worked."),
          make_translation("Maaaring ito ay isang barangay, bayan, o lalawigan.", "It could be a small barangay, a town, or a province."),
          make_translation("Halimbawa: ang Lungsod ng Calamba ay isang pook.", "Example: the City of Calamba in Laguna is a place."),
          make_translation("Dito naganap ang paglaki ng ating pambansang bayani.", "This is where the childhood of our national hero happened."),
          make_translation("Ang pisikal na kapaligiran ay nakakaapekto sa kasaysayan.", "The physical environment affects how history developed yonder."),
          make_translation("May mga ilog at bundok na saksi sa nakaraan.", "There are rivers and mountains that witnessed the past events."),
          make_translation("Suriin ang mga makasaysayang pook sa inyong bayan!", "Examine the historical places in your own town today!")
        ),
        "examples": [{"title": "Elemento: Lugar", "content": "tahanan, paaralan, barangay hall, monumento"}]
      },
      {
        "title": "Ang Elemento: Panahon",
        "text": make_text(
          make_translation("Ang panahon ay tumutukoy kung kailan ito nangyari.", "Time refers to when the historical event actually happened."),
          make_translation("Maaari itong tiyak na petsa o taon sa kalendaryo.", "This could be a specific date or year in the calendar."),
          make_translation("Halimbawa: Hunyo 19, 1861 ang kapanganakan ni Rizal.", "Example: June 19, 1861 is the birth date of Rizal."),
          make_translation("Maaari ding sabihing 'Panahon ng Kastila' o 'Hapon'.", "We can also say 'Spanish Period' or 'Japanese Period'."),
          make_translation("Ipinapakita nito kung gaano na katagal ang nakaraan.", "This shows how long ago the past events took place."),
          make_translation("Ang pagkakasunod-sunod ng panahon ay tinatawag na timeline.", "The sequence of time periods is called a historical timeline."),
          make_translation("Nakatutulong ito upang hindi tayo malito sa kwento.", "This helps us avoid getting confused in the historical story."),
          make_translation("Kailan ipinanganak ang inyong sariling barangay o bayan?", "When was your own barangay or town founded in history?")
        ),
        "examples": [{"title": "Elemento: Panahon", "content": "mga taon (years), petsa (dates), mga siglo (centuries)"}]
      },
      {
        "title": "Ang Elemento: Pangyayari",
        "text": make_text(
          make_translation("Ang pangyayari ay ang mismong aksyon na naganap.", "The event is the actual action or occurrence that happened."),
          make_translation("May mga pangyayaring may malalim na saysay sa pook.", "There are events that have deep meaning for a place."),
          make_translation("Halimbawa: ang pagtatag ng unang paaralan sa bayan.", "Example: the foundation of the first school in town."),
          make_translation("O di kaya ay ang labanan para sa kalayaan natin.", "Or perhaps the historical battles fought for our freedom."),
          make_translation("Mayroon ding mga pagdiriwang tulad ng pista ng bayan.", "There are also celebrations like the local town festival."),
          make_translation("Ang mga ito ay nagbabago sa pamumuhay ng mamamayan.", "These events change the way of life of the citizens."),
          make_translation("Itinatala ito ng mga historyador sa kanilang aklat.", "Historians record these important events in their books."),
          make_translation("Ano ang pinakamahalagang pangyayari sa inyong pook?", "What is the most important historical event in your place?")
        ),
        "examples": [{"title": "Elemento: Pangyayari", "content": "pagtatag ng bayan, digmaan, pista, deklarasyon"}]
      },
      {
        "title": "Primary Sources: Artifacts",
        "text": make_text(
          make_translation("Paano natin nalalaman ang kasaysayan ng komunidad?", "How do we know the history of our local community?"),
          make_translation("Gumagamit tayo ng mga primaryang batayan sa pagsusuri.", "We use primary sources during our historical research."),
          make_translation("Ang artifact ay mga pisikal na kagamitan sa nakaraan.", "Artifacts are physical objects made and used in the past."),
          make_translation("Halimbawa: lumang palayok, barya, at mga kasangkapan.", "Examples: old clay pots, ancient coins, and old tools."),
          make_translation("Ang mga ito ay hindi nagsisinungaling sa kasaysayan.", "These physical objects do not lie about past human activities."),
          make_translation("Ipinapakita nito kung paano namuhay ang mga ninuno.", "They show us exactly how our ancestors lived their daily lives."),
          make_translation("Makikita natin ang mga ito sa mga museo ngayon.", "We can observe these historical items in museums today."),
          make_translation("Mayroon bang lumang kagamitan sa inyong sariling bahay?", "Is there an old object preserved in your own house today?")
        ),
        "examples": [{"title": "Artifacts", "content": "lumang barya (old coins), palayok (pots), lumang kasangkapan"}]
      },
      {
        "title": "Primary Sources: Dokumento",
        "text": make_text(
          make_translation("Ang mga lumang dokumento ay primaryang batayan din.", "Old documents are also very important primary sources."),
          make_translation("Ito ay mga nakasulat na tala mula sa nakaraang panahon.", "These are written records from the past time periods."),
          make_translation("Halimbawa: lumang sulat, mapa, batas, at diary.", "Examples: old letters, maps, laws, and diaries of people."),
          make_translation("Isinulat ito ng mga taong mismong nakasaksi roon.", "These were written by people who witnessed the events themselves."),
          make_translation("Ang lumang mapa ng Calamba ay nagpapakita ng sakop nito.", "An old map of Calamba shows its past physical boundaries."),
          make_translation("Ang lumang sulat ni Rizal ay naglalahad ng damdamin.", "Rizal's old letters express his thoughts and feelings yonder."),
          make_translation("Iniingatan ang mga dokumentong ito sa pook-archive.", "These documents are preserved carefully in local archives."),
          make_translation("Bakit mahalagang basahin ang mga nakasulat na tala?", "Why is it important to read written records from the past?")
        ),
        "examples": [{"title": "Dokumento", "content": "lumang sulat (old letters), mapa (maps), diary, sertipiko"}]
      },
      {
        "title": "Secondary Sources sa Kasaysayan",
        "text": make_text(
          make_translation("Mayroon ding mga sekondaryang batayan sa kasaysayan.", "There are also secondary sources of history we can use."),
          make_translation("Ito ay mga aklat o tala na isinulat pagkatapos.", "These are books or records written after the event occurred."),
          make_translation("Ang may-akda ay hindi nakasaksi sa mismong kaganapan.", "The author did not witness the actual historical event directly."),
          make_translation("Halimbawa: mga history textbooks, artikulo, at encyclopedia.", "Examples: history textbooks, articles, and encyclopedias."),
          make_translation("Sila ay nagmula sa pagsusuri ng mga primaryang batayan.", "They are based on the study of original primary sources."),
          make_translation("Nakatutulong ito upang mas madaling maunawaan ang paksa.", "These help us understand historical topics much more easily."),
          make_translation("Ang kwento ng iyong guro tungkol kay Rizal ay ganoon.", "Your teacher's stories about Rizal belong to this category."),
          make_translation("Gamitin ang parehong batayan upang maging tumpak ang tala!", "Use both sources of data to keep your records accurate!")
        ),
        "examples": [{"title": "Sekondaryang Batayan", "content": "History textbooks, encyclopedia, mga kwento sa radyo"}]
      },
      {
        "title": "Ang Kahalagahan ng Timeline",
        "text": make_text(
          make_translation("Ang timeline ay isang guhit na nagpapakita ng panahon.", "A timeline is a line that displays the sequence of time."),
          make_translation("Inaayos nito ang mga pangyayari mula una hanggang huli.", "It arranges events in order from the earliest to the latest."),
          make_translation("Binabasa natin ang timeline mula kaliwa pakanan.", "We read the horizontal timeline from left to right in books."),
          make_translation("Halimbawa: timeline ng paglaki ng isang bata sa pook.", "Example: a timeline of a child growing up in the community."),
          make_translation("2018: ipinanganak; 2024: pumasok; 2026: nasa Grade 3.", "2018: born; 2024: entered school; 2026: now in Grade 3."),
          make_translation("Ipinapakita nito ang pagbabago sa paglipas ng taon.", "This shows the physical changes over the passing of years."),
          make_translation("Ang mga timeline ng barangay ay may katulad na anyo.", "Barangay timelines follow a similar chronological structure."),
          make_translation("Gumawa ng sariling timeline sa iyong notebook ngayon!", "Create your own personal timeline in your notebook now!")
        ),
        "examples": [{"title": "Timeline", "content": "2018 (Ipinanganak) -> 2024 (Kinder) -> 2026 (Grade 3)"}]
      },
      {
        "title": "Ang Pinagmulan ng Pangalan",
        "text": make_text(
          make_translation("Ang bawat barangay ay may kwento ng kanyang pangalan.", "Every barangay has a story behind its physical name."),
          make_translation("Karaniwan itong nagmula sa mga halaman o hayop.", "Usually it originates from local plants, trees, or animals."),
          make_translation("E.g., ang 'Kawayanan' dahil sa maraming kawayan doon.", "E.g., 'Kawayanan' because of many bamboo trees growing there."),
          make_translation("O kaya ay 'San Jose' bilang parangal sa isang patron.", "Or perhaps 'San Jose' to honor a patron saint of the place."),
          make_translation("Mayroon ding nagmula sa mga lokal na salita ng katutubo.", "Some names also originate from local terms of indigenous people."),
          make_translation("Ang pag-alam sa pangalan ay simula ng paggalang sa pook.", "Knowing the name is the start of respecting the local place."),
          make_translation("Sinasalamin nito ang kultura at likas na yaman ng pook.", "It reflects the culture and natural resources of the place."),
          make_translation("Ano ang pinagmulan ng pangalan ng iyong sariling barangay?", "What is the origin of the name of your own barangay?")
        ),
        "examples": [{"title": "Pinagmulan", "content": "Kawayanan (mula sa kawayan), San Jose (mula sa patron)"}]
      },
      {
        "title": "Oral History: Saling-bibig",
        "text": make_text(
          make_translation("Hindi lahat ng kasaysayan ay nakasulat sa aklat.", "Not all history is written down in big books yonder."),
          make_translation("May mga kwentong isinasalin sa pamamagitan ng bibig.", "Some stories are passed down using the mouth and ears."),
          make_translation("Tinatawag natin itong oral history o saling-bibig.", "We call this oral history or verbal storytelling in class."),
          make_translation("Ang mga lolo at lola ay nagkukuwento sa mga bata.", "Grandfathers and grandmothers tell stories to their children."),
          make_translation("Ibinabahagi nila kung paano ang buhay noong araw sa pook.", "They share how life was yonder during the old days of town."),
          make_translation("Kahit walang aklat, napananatili natin ang alaala.", "Even without books, we can preserve the community memories."),
          make_translation("Ito ay isang mahalagang bahagi ng ating kultura.", "This oral tradition is a valuable part of our local culture."),
          make_translation("Makinig nang mabuti kapag nagkukuwento ang nakatatanda!", "Listen carefully when elders are sharing their memories!")
        ),
        "examples": [{"title": "Saling-bibig", "content": "Mga kwento ng lolo at lola tungkol sa nakaraan."}]
      },
      {
        "title": "Mga Simbolo sa Komunidad",
        "text": make_text(
          make_translation("Ang logo ng barangay ay may mga guhit at simbolo.", "The logo of our barangay has drawings and symbols on it."),
          make_translation("Ang bawat simbolo ay naglalahad ng kwento ng pook.", "Each symbol tells a unique story about our local place."),
          make_translation("Halimbawa: ang simbolo ng palay ay para sa pagsasaka.", "Example: the symbol of rice stalks represents farming."),
          make_translation("Ipinapakita nito na palay ang pangunahing kabuhayan.", "It shows that rice is the primary source of livelihood."),
          make_translation("Ang simbolo ng gear o makina ay para sa pabrika.", "The symbol of a gear represents factories and industries."),
          make_translation("Ang kulay asul naman ay sumasagisag sa malapit na dagat.", "The color blue symbolizes the nearby sea or flowing river."),
          make_translation("Ang logo ay nagbibigay-identidad sa ating barangay.", "The logo gives a visual identity to our local barangay."),
          make_translation("Suriin ang selyo o logo ng inyong sariling barangay!", "Observe the seal or logo of your own barangay hall!")
        ),
        "examples": [{"title": "Simbolo sa Logo", "content": "palay (pagsasaka), gear (industriya), asul (tubig/ilog)"}]
      },
      {
        "title": "Katutubong Sining at Disenyo",
        "text": make_text(
          make_translation("Bawat komunidad ay may sariling mga likhang sining.", "Every community has its own native art and designs."),
          make_translation("Sinasalamin nito ang kasaysayan at galing ng ninuno.", "These reflect the history and skill of our ancestors."),
          make_translation("Halimbawa: mga ukit sa kahoy, habi ng tela, at palayok.", "Examples: wood carvings, woven cloths, and clay pots."),
          make_translation("Ang mga disenyong ito ay may mga katutubong pattern.", "These designs contain native patterns from old generations."),
          make_translation("Karaniwan silang gumagamit ng mga hugis sa kalikasan.", "Usually they use shapes found in nature like leaves."),
          make_translation("Tulad ng mga bulaklak, dahon, araw, at alon ng dagat.", "Such as flowers, green leaves, sun, and sea waves."),
          make_translation("Ang sining na ito ay bahagi ng kultura ng barangay.", "This art is an important part of our barangay culture."),
          make_translation("Gumawa ng sariling disenyo gamit ang natural na hugis!", "Create your own design using natural shapes on paper!")
        ),
        "examples": [{"title": "Katutubong Sining", "content": "ukit sa kahoy, habi ng tela, palayok na may disenyo"}]
      },
      {
        "title": "Mga Lokal na Awitin at Sayaw",
        "text": make_text(
          make_translation("Ang mga lokal na awitin ay naglalarawan ng buhay.", "Local folk songs describe the daily way of life of people."),
          make_translation("Halimbawa: ang awiting 'Leron Leron Sinta' sa Laguna.", "Example: the folk song 'Leron Leron Sinta' in Laguna."),
          make_translation("Ito ay nagpapakita ng pagsasaka at pamimitas ng prutas.", "It shows farming activities and picking of sweet fruits."),
          make_translation("Mayroon ding mga katutubong sayaw sa ating komunidad.", "There are also native folk dances in our local community."),
          make_translation("Ang sayaw ay naglalahad ng pasasalamat sa magandang ani.", "Dances express gratitude for a bountiful harvest yonder."),
          make_translation("Inaawit natin ang mga ito sa mga pista ng bayan natin.", "We sing these songs during our local town festivals."),
          make_translation("Bahagi ito ng makasaysayang pamana ng ating komunidad.", "This belongs to the historical heritage of our community."),
          make_translation("Magsanay sa pag-awit ng Leron Leron Sinta sa klase!", "Practice singing Leron Leron Sinta with your classmates!")
        ),
        "examples": [{"title": "Lokal na Awitin", "content": "Leron Leron Sinta (pagsasaka at pamumuhay)"}]
      },
      {
        "title": "Guided Practice: Ang Pagsusuri",
        "text": make_text(
          make_translation("Suriin natin ang isang kwento ng ating kasaysayan.", "Let's analyze a short story of our local history."),
          make_translation("Basahin: 'Itinatag ang Barangay San Jose noong 1950.'", "Read: 'Barangay San Jose was founded in the year 1950.'"),
          make_translation("Tukuyin ang pook na binanggit sa ating pahayag.", "Identify the place mentioned in our statement yonder."),
          make_translation("Ang pook ay 'Barangay San Jose' na isang pantangi.", "The place is 'Barangay San Jose' which is proper."),
          make_translation("Tukuyin ang panahon na binanggit sa ating pahayag.", "Identify the time period mentioned in our statement."),
          make_translation("Ang panahon ay 'noong 1950' na isang tiyak na taon.", "The time is 'in 1950' which is a specific year."),
          make_translation("Ang pagtatag ay ang pangyayaring may malalim na saysay.", "The founding is the event that has deep historical meaning."),
          make_translation("Nahanap mo ba ang tatlong elemento sa pagsusuri?", "Did you find all three elements in your analysis today?")
        ),
        "examples": [{"title": "Pagsusuri", "content": "Pook -> Barangay San Jose, Panahon -> 1950, Pangyayari -> Pagtatag"}]
      },
      {
        "title": "Guided Practice: Primary vs Secondary",
        "text": make_text(
          make_translation("Suriin natin ang mga sumusunod na batayan ngayon.", "Let's check the following sources of historical data."),
          make_translation("Kung nakakita ka ng lumang barya na may taong 1900,", "If you find an old coin dated with the year 1900,"),
          make_translation("ito ay isang primaryang batayan (artifact) sa pook.", "this is a primary source (artifact) for the place."),
          make_translation("Kung binabasa mo ang aklat na 'Kasaysayan ng Laguna',", "If you read the book 'History of Laguna' in class,"),
          make_translation("ito ay isang sekondaryang batayan sa ating aralin.", "this is a secondary source in our history lesson today."),
          make_translation("Ang aklat ay isinulat ng mananaliksik pagkatapos.", "The book was written by a researcher after studying coins."),
          make_translation("Parehong mahalaga ang dalawang batayan sa kasaysayan.", "Both sources of data are valuable for historical study."),
          make_translation("Alin ang mas nais mong suriin: barya o aklat?", "Which would you prefer to examine: the coin or the book?")
        ),
        "examples": [{"title": "Batayan", "content": "lumang barya -> primary, textbook -> secondary"}]
      },
      {
        "title": "Guided Practice: Timeline ng Pook",
        "text": make_text(
          make_translation("Gumawa tayo ng timeline ng isang barangay hall.", "Let's create a timeline for our local barangay hall."),
          make_translation("2000: Itinatag ang maliit na barangay hall sa pook.", "2000: The small barangay hall was founded in the place."),
          make_translation("2010: Pinalawak ang gusali at nagdagdag ng klinika.", "2010: The building was expanded and a clinic was added."),
          make_translation("2020: Nagpatayo ng bagong sports complex sa tabi nito.", "2020: A new sports complex was built next to the hall."),
          make_translation("Pansinin ang tamang pagkakasunod-sunod ng mga taon.", "Notice the correct chronological order of the years yonder."),
          make_translation("Mula sa pinakamaaga (2000) patungo sa kasalukuyan (2020).", "From the earliest (2000) leading to the present (2020)."),
          make_translation("Ipinapakita nito ang paglago at pag-unlad ng pook.", "This shows the physical growth and development of the place."),
          make_translation("Kopyahin ang timeline na ito sa iyong sariling notebook!", "Copy this timeline structure into your own notebook now!")
        ),
        "examples": [{"title": "Timeline", "content": "2000 (Pagtatag) -> 2010 (Klinika) -> 2020 (Sports Complex)"}]
      },
      {
        "title": "Guided Practice: Pagsusuri ng Logo",
        "text": make_text(
          make_translation("Suriin natin ang logo ng isang barangay sa tabi natin.", "Let's analyze the logo of a barangay near our school."),
          make_translation("May guhit ng tatlong isda at lambat sa gitna nito.", "There is a drawing of three fish and a net in the middle."),
          make_translation("Ano ang ibig sabihin ng mga isda sa logo ng pook?", "What is the meaning of the fish on this local logo?"),
          make_translation("Ipinapakita nito na pangingisda ang kabuhayan doon.", "It shows that fishing is the main source of livelihood there."),
          make_translation("Ang pook ay malapit sa lawa o dagat kaya may isda.", "The place is near a lake or sea, hence the fish symbol."),
          make_translation("Ito ay naglalahad ng kwento ng pamumuhay ng tao.", "This expresses the story of the people's way of life."),
          make_translation("Ito ay hindi lamang palamuti; may malalim na saysay.", "It is not just decoration; it holds a deep meaning yonder."),
          make_translation("Iguhit ang logo ng iyong barangay sa isang malinis na papel!", "Draw the logo of your own barangay on a clean sheet of paper!")
        ),
        "examples": [{"title": "Pagsusuri ng Logo", "content": "isda at lambat -> kabuhayan sa pangingisda (fishing)"}]
      },
      {
        "title": "Maling Pagtukoy sa Nakaraan",
        "text": make_text(
          make_translation("Iwasan ang pagtrato sa ordinaryong bagay bilang kasaysayan.", "Avoid treating ordinary past events as historical events."),
          make_translation("Mali: 'Ang pagkain ko ng tinapay kahapon ay kasaysayan.'", "Wrong: 'My eating of bread yesterday is part of history.'"),
          make_translation("Ito ay nakaraan lamang, ngunit walang saysay sa pook.", "It is just the past, but has no major significance to the town."),
          make_translation("Ang kasaysayan ay dapat may malaking epekto sa lahat.", "History must have a major and lasting impact on the community."),
          make_translation("Halimbawa: ang pagpapatayo ng unang tulay sa ilog.", "Example: the construction of the first bridge over the river."),
          make_translation("Ito ay binago ang transportasyon ng buong komunidad.", "This changed transport for the entire local community."),
          make_translation("Tiyakin na makabuluhan ang pangyayari sa iyong logs!", "Make sure the event is significant in your history logs!"),
          make_translation("Ito ang totoong kahulugan ng kasaysayan sa atin!", "This is the true meaning of history in our social studies!")
        ),
        "examples": [{"title": "Maling Pagtukoy", "content": "nakaraan (past - ordinary) vs. kasaysayan (history - significant)"}]
      },
      {
        "title": "Maling Pagsulat ng Timeline",
        "text": make_text(
          make_translation("Iwasan ang paghahalo ng mga taon sa timeline.", "Avoid mixing up the years when writing a timeline."),
          make_translation("Mali: 2020 (Pagtatag) -> 2000 (Klinika) -> 2010 (Daan).", "Wrong: 2020 (Founding) -> 2000 (Clinic) -> 2010 (Road)."),
          make_translation("Hindi nito ipinapakita ang tamang daloy ng panahon.", "This does not show the correct flow of time in history."),
          make_translation("Dapat magsimula sa pinakamatandang taon sa kaliwa.", "We must start with the oldest year on the left side."),
          make_translation("At magtapos sa pinakabagong taon sa kanang bahagi.", "And end with the most recent year on the right side."),
          make_translation("Tama: 2000 (Pagtatag) -> 2010 (Daan) -> 2020 (Klinika).", "Correct: 2000 (Founding) -> 2010 (Road) -> 2020 (Clinic)."),
          make_translation("Ito ang wastong pagkakasunod-sunod ng mga taon natin.", "This is the correct chronological sequence of our years."),
          make_translation("Suriin ang mga taon bago iguhit ang timeline ngayon!", "Check the years carefully before drawing your timeline now!")
        ),
        "examples": [{"title": "Timeline Error", "content": "mali: naghalong taon -> tama: sunod-sunod na taon"}]
      },
      {
        "title": "Maling Paglalarawan ng Simbolo",
        "text": make_text(
          make_translation("Iwasan ang pag-imbento ng kahulugan ng logo.", "Avoid making up meanings for community symbols arbitrarily."),
          make_translation("Huwag sabihing ang gear sa logo ay gulong ng karwahe.", "Do not say the gear on the logo represents a carriage wheel."),
          make_translation("Sa makabagong selyo, ang gear ay para sa industriya.", "In modern seals, the gear represents factories and industry."),
          make_translation("Tiyakin ang kasaysayan ng pook bago maglahad ng tala.", "Verify the history of the place before writing descriptions."),
          make_translation("Maaari mong tanungin ang mga barangay officials doon.", "You can ask the barangay officials inside the barangay hall."),
          make_translation("Sila ang nakakaalam ng tunay na kahulugan ng selyo.", "They know the real meaning and history of the seal yonder."),
          make_translation("Ang tumpak na tala ay nagpapakita ng mahusay na gawa.", "Accurate records show excellent and high-quality work."),
          make_translation("Maging maingat at mapanuri sa bawat simbolo ngayon!", "Be careful and analytical with every symbol today!")
        ),
        "examples": [{"title": "Simbolo Pagsusuri", "content": "gear = industriya (pabrika), HINDI gulong ng karwahe"}]
      },
      {
        "title": "Kasaysayan ng Ating Bayan",
        "text": make_text(
          make_translation("Ang kasaysayan ng barangay ay bahagi ng bayan natin.", "Our barangay's history is part of our town's wider history."),
          make_translation("Ang bawat maliit na pook ay nag-aambag sa lalawigan.", "Each small place contributes to the history of the province."),
          make_translation("Halimbawa: ang kasaysayan ng Calamba sa Laguna natin.", "Example: the history of Calamba within our province Laguna."),
          make_translation("Ang Laguna ay kilala sa saganang palay at magandang ilog.", "Laguna is known for rich rice fields and beautiful rivers."),
          make_translation("Ang mga katutubong awitin ay nagpapakita ng kulturang ito.", "Our folk songs display this beautiful regional culture."),
          make_translation("Ipinagmamalaki natin ang kasaysayan ng ating sariling pook.", "We take pride in the history of our own local place yonder."),
          make_translation("Ito ay nagbibigay sa atin ng lakas at pagkakaisa ngayon.", "This gives us strength and unity in our community life today."),
          make_translation("Mahalin natin ang ating barangay at lalawigan palagi!", "Let's love our own barangay and province at all times!")
        ),
        "examples": [{"title": "Ugnayan", "content": "barangay -> bayan (town) -> lalawigan (province)"}]
      },
      {
        "title": "Buod ng Unang Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang apat na elemento ng kasaysayan.", "We learned about the four elements of history yonder."),
          make_translation("Natutunan natin ang tao, lugar, panahon, at pangyayari.", "We learned about people, place, time, and events."),
          make_translation("Nalaman natin ang tungkol sa primary at secondary sources.", "We discovered primary and secondary sources of history."),
          make_translation("Gumawa tayo ng timeline at nag-aral ng mga simbolo.", "We created timelines and studied community symbols."),
          make_translation("Handa ka na bang sumagot sa mga pagsusulit at hamon?", "Are you ready to answer the quiz and challenges today?"),
          make_translation("Ipakita ang iyong pagmamahal sa kasaysayan ng pook!", "Show your love for the history of your local place!"),
          make_translation("Ipagpatuloy ang pagiging mahusay na historyador ngayon!", "Continue being an excellent historical researcher today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Kasaysayan = May saysay. Elemento = Tao, Lugar, Panahon, Pangyayari."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa pag-aaral ng may-saysay na nakaraang pangyayari sa komunidad?", "options": ["heograpiya", "kasaysayan", "matematika", "sining"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang HINDI kabilang sa apat na elemento ng kasaysayan?", "options": ["tao", "lugar", "panahon", "laruan"], "answer": 3},
      {"type": "choice", "q": "Sino ang pambansang bayani na ipinanganak sa Lungsod ng Calamba, Laguna?", "options": ["Andres Bonifacio", "Dr. Jose Rizal", "Apolinario Mabini", "Emilio Aguinaldo"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa pagkakasunod-sunod ng mga taon at pangyayari sa kasaysayan?", "options": ["mapa", "timeline", "logo", "selyo"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang halimbawa ng primary source na artifact?", "options": ["history textbook", "lumang barya", "kwento ng guro", "encyclopedia"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang halimbawa ng nakasulat na primary source?", "options": ["lumang sulat o diary", "kasaysayang aklat ngayon", "monumento", "palayok"], "answer": 0},
      {"type": "choice", "q": "Ano ang tawag sa mga aklat o textbooks na isinulat pagkatapos ng pangyayari?", "options": ["primary source", "sekondaryang batayan", "artifact", "oral history"], "answer": 1},
      {"type": "choice", "q": "Saan karaniwang nagmumula ang pangalan ng mga lumang barangay?", "options": ["tatak ng sapatos", "halaman, hayop o patron ng pook", "mga dayuhang bansa", "mga modernong sasakyan"], "answer": 1},
      {"type": "choice", "q": "Ano ang isinasagisag ng simbolo ng palay sa logo ng isang barangay?", "options": ["pangingisda", "pagsasaka o agrikultura", "pabrika at makina", "pananalangin"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pag-aaral ng kasaysayan ay nakatutulong upang maunawaan ang kasalukuyan.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Ano ang tawag sa kasaysayan na isinasalin sa pamamagitan ng pagkukuwento ng mga lolo at lola?", "options": ["nakasulat na batas", "oral history (saling-bibig)", "monumento", "mapa"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang simbolo ng industriya at pabrika sa logo ng komunidad?", "options": ["palay", "gear o gulong ng makina", "ilog", "araw"], "answer": 1},
      {"type": "choice", "q": "Ano ang ipinapakita ng timeline ng paglaki ng isang bata?", "options": ["mga paboritong pagkain", "pagbabago sa paglipas ng panahon", "mga tatak ng laruan", "mga pangalan ng hayop"], "answer": 1},
      {"type": "choice", "q": "Aling awitin ang isang lokal na folk song na naglalarawan ng pamumuhay sa Laguna?", "options": ["Leron Leron Sinta", "Happy Birthday", "Lupang Hinirang", "Bahay Kubo"], "answer": 0},
      {"type": "choice", "q": "Tukuyin ang elemento ng lugar sa pahayag: 'Ipinanganak si Rizal sa Calamba noong 1861.'", "options": ["Rizal", "Calamba", "noong 1861", "Ipinanganak"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang elemento ng panahon sa pahayag: 'Itinatag ang paaralan noong taong 2005.'", "options": ["paaralan", "noong taong 2005", "Itinatag", "paaralang pook"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang lumang mapa ng isang bayan ay isang primaryang batayan ng kasaysayan nito.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook na makasaysayan?", "options": ["monumento", "Rizal Park", "Fort Santiago", "Bahay ni Rizal"], "answer": 0},
      {"type": "choice", "q": "Anong simbolo ang karaniwang ginagamit sa logo upang ipakita ang ilog o dagat?", "options": ["kulay berde", "guhit ng alon o kulay asul", "guhit ng palay", "guhit ng makina"], "answer": 1},
      {"type": "choice", "q": "Sino ang gumagawa ng mga pangyayaring nagiging bahagi ng kasaysayan?", "options": ["mga kotse", "mga tao", "mga laruan", "mga pusa"], "answer": 1},
      {"type": "choice", "q": "Paano isinusulat ang timeline ng mga taon?", "options": ["mula kasalukuyan patungong nakaraan", "mula pinakamaagang taon hanggang pinakahuli", "walang pagkakasunod-sunod", "mula pinakamalaking numero lamang"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang HINDI primary source?", "options": ["lumang barya", "diary ng sundalo", "aklat sa kasaysayan na isinulat nitong 2020", "lumang larawan"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang pagkain mo ng saging kaninang umaga ay isang makasaysayang pangyayari sa inyong barangay.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod na hugis ang katutubong disenyo mula sa kalikasan?", "options": ["kotse", "dahon at bulaklak", "telebisyon", "computer"], "answer": 1},
      {"type": "choice", "q": "Bakit mahalagang ingatan ang mga primary source tulad ng lumang sulat at barya?", "options": ["upang ibenta sa palengke", "upang mapanatili ang tumpak na tala ng kasaysayan", "upang gawing laruan ng bata", "upang itapon sa ilog"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling batayan ang pinakamahusay gamitin upang malaman ang buhay sa barangay noong panahon ng Hapon (1942)?", "options": ["isang diary na isinulat ng isang lola noong 1943 sa pook", "isang aklat na isinulat ng dayuhan nitong 2025", "isang kwento sa komiks", "isang modernong mapa ng barangay"], "answer": 0},
      {"type": "choice", "q": "Challenge: Kung ang isang barangay logo ay may simbolo ng gear at palay, ano ang mahihinuha mo sa pamumuhay doon?", "options": ["Pawang mga mangingisda ang nakatira doon.", "May ugnayan ng agrikultura at industriya sa kanilang kabuhayan.", "Walang kabuhayan ang mga mamamayan doon.", "Puro sining lamang ang ginagawa doon."], "answer": 1},
      {"type": "choice", "q": "Challenge: Aling pagkakasunod-sunod ng timeline ang tama para sa kasaysayan ng isang eskwelahan?", "options": ["2005 (Pagtatag) -> 2015 (Bagong Aklatan) -> 2025 (Sports Center)", "2025 (Sports Center) -> 2015 (Bagong Aklatan) -> 2005 (Pagtatag)", "2015 (Bagong Aklatan) -> 2005 (Pagtatag) -> 2025 (Sports Center)", "2005 (Pagtatag) -> 2025 (Sports Center) -> 2015 (Bagong Aklatan)"], "answer": 0},
      {"type": "choice", "q": "Challenge: Paano nagkakaugnay ang kasaysayan ng inyong barangay sa kasaysayan ng inyong bayan o lungsod?", "options": ["Ang barangay ay may hiwalay na bansa at batas.", "Ang kasaysayan ng bawat barangay ang bumubuo sa mas malawak na kwento ng bayan.", "Walang ugnayan ang dalawa sa kasaysayan.", "Ang bayan ay walang kinalaman sa barangay."], "answer": 1},
      {"type": "choice", "q": "Challenge: Suriin ang pahayag: 'Ang tulay na itinayo noong 1920 ay nagdugtong sa dalawang barangay.' Anong uri ng batayan ang pisikal na tulay na ito ngayon?", "options": ["Nakasulat na dokumento", "Artifact o pisikal na primary source", "Sekondaryang aklat", "Oral history lamang"], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Timeline ng Ating Pook",
      "desc": "Kausapin ang iyong magulang o lolo at lola tungkol sa kasaysayan ng inyong tahanan o barangay. Sumulat ng tatlong mahahalagang pangyayari sa nakaraan (hal. taon kung kailan lumipat sa bahay, o taon kung kailan nagkaroon ng sementadong kalsada). Iayos ang mga ito sa isang timeline sa papel. Iguhit ang bawat pangyayari at ipaliwanag ang iyong timeline sa pamilya.",
      "labels": ["Maayos na naiguhit ang timeline na may tamang pagkakasunod-sunod", "Wastong natukoy ang tatlong mahahalagang pangyayari at taon", "Malinaw na naipaliwanag ang kasaysayan batay sa saling-bibig ng pamilya"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Elemento ng Kasaysayan</h3>
                  <p class="ws-instruction">Tukuyin ang elemento ng kasaysayan (<strong>Tao</strong>, <strong>Lugar</strong>, <strong>Panahon</strong>, o <strong>Pangyayari</strong>) para sa nakasalungguhit na salita gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Ipinanganak si <u>Dr. Jose Rizal</u> sa Calamba noong Hunyo 19, 1861.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Tao</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Itinatag ang Barangay San Jose noong <u>taong 1950</u>.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Panahon</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Nagkaroon ng malaking <u>pista ng bayan</u> sa plaza.</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pangyayari</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Primary vs. Secondary Sources</h3>
                  <p class="ws-instruction">Isulat kung ang sumusunod na batayan ay <strong>Primary</strong> o <strong>Secondary</strong> gamit ang iyong stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Isang lumang barya na nakuha sa ilalim ng lupa: <span class="fil-sentence" data-translation="(An old coin dug from the ground:)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Primary</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Aklat sa kasaysayan ng Pilipinas na ginagamit sa Grade 3: <span class="fil-sentence" data-translation="(A Philippine history book used in Grade 3:)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Secondary</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Diary na isinulat ng isang sundalo noong panahon ng digmaan: <span class="fil-sentence" data-translation="(Diary written by a soldier during the war:)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Primary</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsusuri ng Barangay Timeline</h3>
                  <p class="ws-instruction">Ayusin ang mga sumusunod na taon at pangyayari sa tamang pagkakasunod-sunod sa timeline sa ibaba.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">A. 2020: Pagtatayo ng bagong tulay. <br> B. 2000: Pagtatatag ng barangay hall. <br> C. 2010: Pagpapatayo ng health center.</div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">2000: Pagtatatag ng barangay hall. -> 2010: Pagpapatayo ng health center. -> 2020: Pagtatayo ng bagong tulay.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  2: {
    "color": "#f59e0b",
    "icon": "🏝️",
    "title": "Makabansa",
    "subtitle": "Week 2: Mahahalagang Pook sa Ating Komunidad",
    "slides": [
      {
        "title": "Maligayang Pagdating sa Week 2!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikalawang linggo!", "How are you, student? Welcome to the second week!"),
          make_translation("Ngayong linggo, maglalakbay tayo sa ating sariling pook.", "This week, we will travel around our own local place."),
          make_translation("Tukuyin natin ang mahahalagang pook sa ating komunidad.", "Let's identify the important places in our community."),
          make_translation("Kasama rito ang barangay hall, simbahan, at paaralan.", "This includes the barangay hall, church, and school."),
          make_translation("Pag-aaralan natin ang tungkulin ng bawat pook na ito.", "We will study the role and function of each of these places."),
          make_translation("Alamin din natin ang kahalagahan ng mga makasaysayang lugar.", "Let's also learn the importance of historical sites here."),
          make_translation("Magmasid at suriin ang iyong paligid na parang researcher!", "Observe and analyze your surroundings like a researcher today!"),
          make_translation("Handa ka na bang matuto tungkol sa ating komunidad?", "Are you ready to learn about our community today?")
        ),
        "examples": [{"title": "Layunin ng Linggo", "content": "Matukoy ang mahahalagang pook sa sariling komunidad at ang kanilang tungkulin."}]
      },
      {
        "title": "Ang Barangay Hall: Sentro ng Pamamahala",
        "text": make_text(
          make_translation("Ang barangay hall ay isang napakahalagang pook sa atin.", "The barangay hall is a very important place for all of us."),
          make_translation("Ito ang sentro ng pamamahala sa ating sariling komunidad.", "It is the center of governance in our own local community."),
          make_translation("Dito nagpupulong ang kapitan at mga barangay kagawad.", "This is where the captain and barangay councilors meet."),
          make_translation("Gumagawa sila ng mga batas upang mapanatili ang kapayapaan.", "They make local laws to preserve peace and order yonder."),
          make_translation("Dito rin pumupunta ang mamamayan kapag may problema.", "This is also where citizens go when they have problems."),
          make_translation("Nagbibigay sila ng mga tulong at serbisyo sa lahat.", "They provide assistance and services to all the residents."),
          make_translation("Ang barangay hall ay simbolo ng pagkakaisa at serbisyo.", "The barangay hall is a symbol of unity and service."),
          make_translation("Saan matatagpuan ang barangay hall sa inyong pook?", "Where is the barangay hall located in your local place?")
        ),
        "examples": [{"title": "Barangay Hall", "content": "Dito naglilingkod ang Barangay Kapitan at mga Kagawad."}]
      },
      {
        "title": "Ang Health Center: Pook ng Kalusugan",
        "text": make_text(
          make_translation("Ang health center ay pook na nag-aalaga sa kalusugan.", "The health center is a place that cares for health."),
          make_translation("Dito pumupunta ang mga sanggol, bata, at matatanda.", "This is where babies, children, and elders go for care."),
          make_translation("Mayroong mga nars, doktor, at midwives na naglilingkod.", "There are nurses, doctors, and midwives serving the public."),
          make_translation("Nagbibigay sila ng libreng bakuna at mga gamot sa amin.", "They provide free vaccines and medicines to us in town."),
          make_translation("Sinusuri nila ang timbang at kalagayan ng mga sanggol.", "They check the weight and physical status of babies."),
          make_translation("Nakatutulong ito upang maiwasan ang sakit sa komunidad.", "This helps prevent the spread of diseases in the community."),
          make_translation("Ang health center ay bukas para sa lahat ng mamamayan.", "The health center is open to all citizens in the barangay."),
          make_translation("Nakarating ka na ba sa health center sa inyong pook?", "Have you visited the health center in your local place?")
        ),
        "examples": [{"title": "Health Center", "content": "Pook para sa libreng bakuna, gamot, at pagsusuri ng kalusugan."}]
      },
      {
        "title": "Ang Paaralan: Pook ng Karunungan",
        "text": make_text(
          make_translation("Ang paaralan ay pook kung saan tayo nakakukuha ng dunong.", "The school is a place where we acquire knowledge and wisdom."),
          make_translation("Dito nagtuturo ang mga guro sa mga mag-aaral.", "This is where teachers instruct the young students daily."),
          make_translation("Natututo tayong magbasa, magsulat, at magkuwenta rito.", "We learn to read, write, and compute numbers yonder."),
          make_translation("Kasama rito ang pag-aaral ng science at kasaysayan.", "This includes studying science, languages, and history."),
          make_translation("Mayroon tayong silid-aralan, aklatan, at palaruan.", "We have classrooms, a school library, and a playground."),
          make_translation("Ang paaralan ay naghahanda sa atin para sa hinaharap.", "The school prepares us for our future role in society."),
          make_translation("Ito ay simbolo ng pag-asa at pag-unlad ng pamayanan.", "It is a symbol of hope and development for the community."),
          make_translation("Ano ang pangalan ng inyong sariling paaralan ngayon?", "What is the specific name of your school today?")
        ),
        "examples": [{"title": "Paaralan", "content": "Tahanan ng karunungan at paggabay ng mga guro."}]
      },
      {
        "title": "Ang Simbahan: Pook ng Pananampalataya",
        "text": make_text(
          make_translation("Ang simbahan o moske ay pook para sa pananalangin.", "The church or mosque is a place for quiet prayer."),
          make_translation("Dito nagtitipon ang pamilya upang magpasalamat sa Diyos.", "Here families gather to express gratitude to God yonder."),
          make_translation("Itinuturo rito ang mabuting asal at pagmamahal sa kapwa.", "Good values and love for neighbors are taught here."),
          make_translation("May mga pari, pastor, o imam na namumuno sa pagsamba.", "There are priests, pastors, or imams leading worship services."),
          make_translation("Ang bawat pook-pagsamba ay dapat nating igalang palagi.", "Every place of worship must be respected by us at all times."),
          make_translation("Sinasalamin nito ang pananampalataya ng mga mamamayan.", "This reflects the spiritual faith of the citizens in town."),
          make_translation("Mayroon ding mga kapilya sa mas maliliit na sitio.", "There are also smaller chapels located in remote sitios."),
          make_translation("Saan kayo madalas magsimba o sumamba ng inyong pamilya?", "Where do you and your family usually go to worship?")
        ),
        "examples": [{"title": "Pook-Pagsamba", "content": "simbahan, moske, kapilya, o templo sa komunidad."}]
      },
      {
        "title": "Ang Palengke: Pook ng Kalakalan",
        "text": make_text(
          make_translation("Ang palengke ay sentro ng kalakalan sa komunidad natin.", "The market is the center of trade in our local community."),
          make_translation("Dito pumupunta ang mga tindero upang magbenta ng ani.", "This is where vendors go to sell their harvested goods."),
          make_translation("Kasama rito ang isda, karne, gulay, at mga prutas.", "This includes fresh fish, meat, vegetables, and sweet fruits."),
          make_translation("Dito rin pumupunta ang mga mamamayan upang bumili ng ulam.", "This is also where citizens buy food ingredients daily."),
          make_translation("Nakatutulong ang palengke sa kabuhayan ng maraming tao.", "The market helps support the livelihood of many families."),
          make_translation("Mayroon ding mga maliliit na tindahan sa bawat kalye.", "There are also small sari-sari stores along every street."),
          make_translation("Ang palengke ay nagpapakita ng kasiglahan ng ekonomiya.", "The market shows the active economic life of the town."),
          make_translation("Sino ang kasama mong pumunta sa palengke noong Lunes?", "Who went with you to the market last Monday morning?")
        ),
        "examples": [{"title": "Palengke", "content": "Pook kung saan nagaganap ang pagbili at pagbebenta."}]
      },
      {
        "title": "Ang Plaza at Parke: Pook ng Libangan",
        "text": make_text(
          make_translation("Ang plaza ay isang malawak at bukas na pook sa bayan.", "The plaza is a wide and open public space in the town."),
          make_translation("Dito naglalaro ang mga bata tuwing hapon pagkatapos ng klase.", "Here children play every afternoon after school classes."),
          make_translation("Dito rin ginaganap ang mga programa at pista ng barangay.", "This is also where barangay programs and festivals are held."),
          make_translation("May mga puno, upuan, at kung minsan ay wind vane.", "There are trees, benches, and sometimes a wind vane yonder."),
          make_translation("Ito ay pook para magpahinga at makipag-usap sa kapwa.", "It is a place to rest and talk with our neighbors in town."),
          make_translation("Nakatutulong ang parke sa kalusugan ng ating katawan.", "The park helps support the physical health of our bodies."),
          make_translation("Dapat nating panatilihing malinis ang ating plaza palagi.", "We must keep our public plaza clean at all times yonder."),
          make_translation("Ano ang paborito mong laro sa plaza kasama ang kaibigan?", "What is your favorite game to play in the plaza with friends?")
        ),
        "examples": [{"title": "Plaza", "content": "Pook-pasyalan para sa pamilya at mga pagdiriwang."}]
      },
      {
        "title": "Mga Makasaysayang Monumento",
        "text": make_text(
          make_translation("May mga pook na nagpapaalala sa ating mga bayani.", "There are places that remind us of our local heroes."),
          make_translation("Tinatawag natin silang mga makasaysayang monumento sa bayan.", "We call these historical monuments in our community."),
          make_translation("Halimbawa: ang monumento ni Dr. Rizal sa plaza ng bayan.", "Example: the monument of Dr. Rizal in the town plaza."),
          make_translation("Ito ay yari sa matigas na bato at makintab na metal.", "It is made of hard stone and shiny physical metal yonder."),
          make_translation("Ipinapakita nito ang kadakilaan ng mga nagtanggol sa atin.", "This displays the greatness of those who defended our land."),
          make_translation("Saksi ang mga pook na ito sa mahahalagang digmaan.", "These physical places witnessed important battles in the past."),
          make_translation("Dapat nating igalang ang mga monumento at huwag sulatan.", "We must respect monuments and never write graffiti on them."),
          make_translation("Mayroon bang monumento sa plaza ng inyong lungsod?", "Is there a historical monument in your city plaza today?")
        ),
        "examples": [{"title": "Monumento", "content": "Bantayog ng bayani upang alalahanin ang nakaraan."}]
      },
      {
        "title": "Ang Police Outpost: Pook ng Seguridad",
        "text": make_text(
          make_translation("Ang police outpost o barangay tanod outpost ay pook.", "The police outpost or tanod outpost is a physical place."),
          make_translation("Dito nagbabantay ang mga pulis at tanod sa gabi.", "This is where police officers and tanods watch at night."),
          make_translation("Sila ang nagpapanatili ng seguridad sa buong pook natin.", "They preserve the safety and security of our entire place."),
          make_translation("Tinitiyak nila na walang krimen o gulo sa mga kalye.", "They ensure there is no crime or trouble on the streets."),
          make_translation("Maaari tayong tumakbo sa kanila kapag natatakot tayo.", "We can run to them for help when we feel afraid yonder."),
          make_translation("Sila ay mga tagapagtanggol ng kapayapaan sa komunidad.", "They are the defenders of peace in our local community."),
          make_translation("Ang outpost ay may emergency numbers na nakasulat sa dingding.", "The outpost has emergency numbers written on its wall."),
          make_translation("Suriin ang lokasyon ng pinakamalapit na outpost ngayon!", "Examine the location of the nearest outpost today!")
        ),
        "examples": [{"title": "Seguridad", "content": "Pook para sa kaligtasan at paghingi ng tulong sa pulis."}]
      },
      {
        "title": "Ang Bahay-Pamahalaan ng Bayan",
        "text": make_text(
          make_translation("Ang munisipyo o kapitolyo ay mas malaking pook.", "The municipal hall or capitol is a much larger place."),
          make_translation("Ito ang bahay-pamahalaan ng buong bayan o lungsod.", "It is the government building of the entire town or city."),
          make_translation("Dito nagtatrabaho ang alkalde o mayor ng bayan natin.", "This is where the mayor of our town works every day."),
          make_translation("Dito ginagawa ang mga lisensya at malalaking batas.", "This is where licenses are made and major laws are enacted."),
          make_translation("Ang munisipyo ay mas malaki kaysa sa barangay hall.", "The municipal hall is larger than our local barangay hall."),
          make_translation("Karaniwan itong matatagpuan sa sentro ng bayan natin.", "Usually it is located at the absolute center of the town."),
          make_translation("May magandang logo ng bayan sa harap ng gusali nito.", "There is a beautiful town seal in front of the building."),
          make_translation("Nakarating ka na ba sa munisipyo ng inyong bayan?", "Have you visited the municipal hall of your town today?")
        ),
        "examples": [{"title": "Munisipyo", "content": "Sentral na tanggapan ng Mayor at pamahalaan ng bayan."}]
      },
      {
        "title": "Selyo at Logo ng Ating Pook",
        "text": make_text(
          make_translation("Ang bawat mahahalagang pook ay may selyo o logo.", "Every important public building has a seal or logo."),
          make_translation("Makikita natin ito sa barangay hall at munisipyo natin.", "We can observe this on our barangay hall and municipal hall."),
          make_translation("Ang selyo ay naglalaman ng mga simbolo ng pamumuhay.", "The seal contains drawings representing the local lifestyle."),
          make_translation("May simbolo ng palay, isda, o gulong ng makina.", "There are symbols of rice, fish, or industrial gears yonder."),
          make_translation("Ang palay ay sumasagisag sa saganang pagsasaka sa pook.", "The rice represents bountiful agriculture in our place."),
          make_translation("Ang gear naman ay para sa mga makabagong pabrika natin.", "The gear represents modern factories operating in town."),
          make_translation("Ang selyo ay nagpapatunay ng opisyal na dokumento.", "The seal verifies the official status of local documents."),
          make_translation("Suriin ang mga simbolo sa selyo ng inyong bayan ngayon!", "Observe the symbols on the seal of your town today!")
        ),
        "examples": [{"title": "Selyo ng Bayan", "content": "Opisyal na logo na kumakatawan sa kasaysayan ng bayan."}]
      },
      {
        "title": "Pook ng Likas na Yaman",
        "text": make_text(
          make_translation("May mga pook na pinagkukunan ng likas na yaman.", "There are places where we get our natural resources."),
          make_translation("Halimbawa: ang lawa ng Laguna de Bay sa lalawigan.", "Example: the lake of Laguna de Bay in our province yonder."),
          make_translation("Ito ay pook-pangingisda para sa maraming pamilya.", "This is a fishing location for many families living nearby."),
          make_translation("Ang mga bukid sa tabi ng bundok ay para sa palay.", "The fields near the mountains are for growing rice crops."),
          make_translation("Nagbibigay ito ng pagkain sa buong komunidad natin.", "This provides food resources to our entire community life."),
          make_translation("Ang pangangalaga sa mga pook na ito ay tungkulin natin.", "Caring for these natural locations is our shared duty today."),
          make_translation("Huwag magtapon ng basura sa ilog at lawa ng bayan.", "Do not throw trash into our local rivers and lakes yonder."),
          make_translation("Paano mo mapoprotektahan ang mga likas na pook na ito?", "How can you help protect these natural places today?")
        ),
        "examples": [{"title": "Likas na Yaman", "content": "lawa (lake), bukid (fields), kagubatan (forests)"}]
      },
      {
        "title": "Guided Practice: Pook at Tungkulin",
        "text": make_text(
          make_translation("Magsanay tayo sa pag-uugnay ng pook at tungkulin.", "Let's practice connecting places to their functions."),
          make_translation("Suriin: 'Saan pumupunta ang may-sakit para sa gamot?'", "Analyze: 'Where does a sick person go for medicine?'"),
          make_translation("Ang sagot ay health center o ospital ng komunidad.", "The answer is the local health center or hospital yonder."),
          make_translation("Suriin: 'Saan nag-aaral ang mga bata ng science?'", "Analyze: 'Where do children study science subjects daily?'"),
          make_translation("Ang sagot ay paaralan na pook ng karunungan natin.", "The answer is the school, which is our place of learning."),
          make_translation("Suriin: 'Saan nagpupulong ang kapitan ng barangay?'", "Analyze: 'Where does the barangay captain hold meetings?'"),
          make_translation("Ang sagot ay barangay hall na sentro ng pamamahala.", "The answer is the barangay hall, the center of governance."),
          make_translation("Nagawa mo bang iugnay ang lahat ng tungkulin ngayon?", "Did you successfully connect all the functions today?")
        ),
        "examples": [{"title": "Pagsasanay", "content": "ospital -> kalusugan, paaralan -> karunungan, hall -> pamamahala"}]
      },
      {
        "title": "Guided Practice: Simbolo sa Logo",
        "text": make_text(
          make_translation("Suriin natin ang logo ng munisipyo sa ating bayan.", "Let's analyze the logo of the municipal hall in town."),
          make_translation("May simbolo ng araw na may walong sinag sa logo.", "There is a symbol of a sun with eight rays on the logo."),
          make_translation("Ano ang ibig sabihin ng araw sa kasaysayan natin?", "What does the sun represent in our national history?"),
          make_translation("Ito ay sumasagisag sa pag-asa at kalayaan ng bansa.", "It symbolizes the hope and freedom of our nation yonder."),
          make_translation("May simbolo rin ng bundok na may berdeng puno roon.", "There is also a symbol of a mountain with green trees."),
          make_translation("Ipinapakita nito na mayaman sa kagubatan ang pook natin.", "It shows that our place is rich in forest resources today."),
          make_translation("Ang pag-unawa sa logo ay nagpapakita ng kaalaman natin.", "Understanding the logo shows our historical knowledge yonder."),
          make_translation("Bilugan ang simbolo ng araw sa inyong logo ngayon!", "Circle the sun symbol on your town logo sheet now!")
        ),
        "examples": [{"title": "Pagsasanay Simbolo", "content": "araw (freedom), bundok (forest resources)"}]
      },
      {
        "title": "Guided Practice: Makasaysayang Lugar",
        "text": make_text(
          make_translation("Suriin natin ang isang makasaysayang pook sa Laguna.", "Let's analyze a historical place in our province Laguna."),
          make_translation("Ito ay ang 'Bahay ni Rizal' sa Lungsod ng Calamba.", "This is the 'Rizal Shrine' yonder in Calamba City."),
          make_translation("Dito lumaki si Jose Rizal kasama ang kanyang pamilya.", "This is where Jose Rizal grew up with his family members."),
          make_translation("Ang bahay na ito ay gawa sa matigas na bato at kahoy.", "This house is built using hard stone and strong wood panels."),
          make_translation("Pinangangalagaan ito ng pamahalaan bilang monumento natin.", "The government protects it as our national monument today."),
          make_translation("Maraming turista ang pumupunta rito upang matuto.", "Many tourists visit this place to learn about his life story."),
          make_translation("Ito ay isang primaryang batayan ng kasaysayan sa pook.", "This is a primary source of history in our local community."),
          make_translation("Kopyahin ang pangalan ng pook na ito sa inyong papel!", "Copy the name of this historical site onto your paper!")
        ),
        "examples": [{"title": "Pagsasanay Pook", "content": "Bahay ni Rizal (Calamba) -> makasaysayang pook"}]
      },
      {
        "title": "Maling Pagtukoy sa Tungkulin",
        "text": make_text(
          make_translation("Iwasan ang pagpapalit ng tungkulin ng mga pook.", "Avoid confusing the functions of different public places."),
          make_translation("Mali: 'Pumunta kami sa barangay hall upang magpagamot.'", "Wrong: 'We went to the barangay hall for medical treatment.'"),
          make_translation("Ang barangay hall ay hindi klinika o ospital sa pook.", "The barangay hall is not a medical clinic or hospital."),
          make_translation("Dapat pumunta sa health center kapag may karamdaman.", "You must visit the health center when you are feeling sick."),
          make_translation("Tama: 'Pumunta kami sa health center upang magpagamot.'", "Correct: 'We went to the health center for treatment.'"),
          make_translation("Ang bawat pook ay may kani-kanilang tumpak na tungkulin.", "Every place has its own specific and correct function yonder."),
          make_translation("Tiyakin ang tamang pook bago sumulat sa iyong log ngayon!", "Verify the correct place before writing in your log today!"),
          make_translation("Ito ay nagpapakita ng tumpak na pag-unawa sa aralin!", "This shows an accurate understanding of our lesson today!")
        ),
        "examples": [{"title": "Tungkulin Error", "content": "mali: hall -> gamot, tama: health center -> gamot"}]
      },
      {
        "title": "Maling Paglalarawan ng Pook-Samba",
        "text": make_text(
          make_translation("Iwasan ang kawalan ng galang sa mga pook-pagsamba.", "Avoid showing lack of respect for places of worship yonder."),
          make_translation("Huwag sabihing ang simbahan ay palaruan ng mga bata.", "Do not write yonder that the church is a playground for kids."),
          make_translation("Ito ay pook para sa pananalangin at tahimik na pagsamba.", "It is a place for prayer and quiet spiritual activities."),
          make_translation("Dapat maging tahimik at maayos ang kilos sa loob nito.", "We must behave quietly and properly inside these buildings."),
          make_translation("Gayundin sa loob ng mga moske ng ating kapatid na Muslim.", "The same is true inside the mosques of our Muslim brothers."),
          make_translation("Igalang natin ang lahat ng paniniwala sa komunidad natin.", "Let's respect all religious beliefs in our local community."),
          make_translation("Ang paggalang sa pook ay nagpapakita ng mabuting asal.", "Respecting physical places shows excellent moral character today."),
          make_translation("Tiyakin na wasto ang iyong paglalarawan sa papel ngayon!", "Make sure your written description is respectful and correct!")
        ),
        "examples": [{"title": "Pook-Samba", "content": "Igalang ang simbahan, moske, at kapilya sa lahat ng oras."}]
      },
      {
        "title": "Summary ng Ikalawang Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang mga mahahalagang pook sa bayan.", "We learned about the important public places in our town."),
          make_translation("Nalaman natin ang tungkulin ng barangay hall at eskwelahan.", "We discovered the roles of the barangay hall and school."),
          make_translation("Natukoy natin ang mga simbolo sa logo ng ating pook.", "We identified the symbols on our local community logo."),
          make_translation("Nag-aral tayo ng mga makasaysayang monumento at pook.", "We studied historical monuments and important heritage sites."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggong ito?", "Are you ready for the quiz and challenges of this week now?"),
          make_translation("Ipakita ang iyong husay sa pagkilala ng ating pook!", "Show your excellence in identifying these community places!"),
          make_translation("Ipagpatuloy ang pag-aaral nang may sigla at galing ngayon!", "Continue studying with enthusiasm and excellent focus today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pook = Lugar. Tungkulin = Serbisyo. Simbolo = Kahulugan ng pook."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Aling pook ang sentro ng pamamalakad at pamamahala sa isang barangay?", "options": ["paaralan", "barangay hall", "palengke", "monumento"], "answer": 1},
      {"type": "choice", "q": "Saan pumupunta ang mga pamilya upang pabakunahan ang kanilang mga sanggol nang libre?", "options": ["palengke", "health center", "munisipyo", "plaza"], "answer": 1},
      {"type": "choice", "q": "Anong pook ang nagsisilbing tahanan ng karunungan kung saan nagtuturo ang guro?", "options": ["simbahan", "palengke", "paaralan", "outpost"], "answer": 2},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pook-pagsamba ng mga Muslim?", "options": ["simbahan", "kapilya", "moske", "plaza"], "answer": 2},
      {"type": "choice", "q": "Saan pumupunta ang mga tao upang bumili ng sariwang gulay at isda sa umaga?", "options": ["paaralan", "palengke", "barangay hall", "monumento"], "answer": 1},
      {"type": "choice", "q": "Anong malawak at bukas na pook sa bayan ang ginagamit para sa paglalaro at pista?", "options": ["health center", "police outpost", "plaza o parke", "aklatan"], "answer": 2},
      {"type": "choice", "q": "Sino ang pinuno ng pamahalaan na naglilingkod sa loob ng munisipyo ng bayan?", "options": ["Barangay Kapitan", "Alkalde o Mayor", "Pulis", "Doktor"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pook na nagpapanatili ng seguridad at kapayapaan sa kalsada?", "options": ["palengke", "police outpost o tanod outpost", "aklatan", "simbahan"], "answer": 1},
      {"type": "choice", "q": "Ano ang isinasagisag ng simbolo ng gear o makina sa selyo ng munisipyo?", "options": ["pagsasaka", "industriya o mga pabrika sa bayan", "pangingisda sa lawa", "pananalangin"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang health center ay nagbibigay ng mga libreng gamot para sa mamamayan.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang makasaysayang pook na matatagpuan sa Calamba, Laguna?", "options": ["SM City Calamba", "Bahay ni Dr. Jose Rizal", "Enchanted Kingdom", "Ospital ng Laguna"], "answer": 1},
      {"type": "choice", "q": "Sino ang nagtatrabaho sa paaralan upang gabayan ang mga mag-aaral sa Grade 3?", "options": ["Kagawad", "Guro", "Barangay Tanod", "Tindero"], "answer": 1},
      {"type": "choice", "q": "Anong simbolo sa logo ang nagpapakita ng kabuhayan sa pangingisda?", "options": ["guhit ng palay", "guhit ng isda at lambat", "guhit ng bundok", "guhit ng semento"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang tungkulin ng mga pulis at barangay tanod?", "options": ["magturo ng pagbasa", "magbenta ng gulay", "panatilihin ang seguridad at kapayapaan", "magbakuna ng sanggol"], "answer": 2},
      {"type": "choice", "q": "Ano ang pangunahing layunin ng pagtatayo ng barangay hall?", "options": ["magbenta ng laruan", "magbigay ng serbisyo at pamahalaan ang barangay", "magsilbing palaruan", "mag-alaga ng may-sakit"], "answer": 1},
      {"type": "choice", "q": "Saan matatagpuan ang opisina ng Mayor o Alkalde ng lungsod?", "options": ["barangay hall", "munisipyo o kapitolyo", "health center", "simbahan"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang simbahan o moske ay pook para sa maingay na paglalaro ng soccer.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling likas na yaman ang makukuha natin sa lawa ng Laguna de Bay?", "options": ["ginto at pilak", "sariwang isda", "gulong ng makina", "bakal na susi"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gawin ng mga mamamayan sa mga monumento ng mga bayani sa plaza?", "options": ["sulatan at sirain ito", "igalang at panatilihing malinis ito", "ipaubaya sa ulan na lamang", "itapon sa basura"], "answer": 1},
      {"type": "choice", "q": "Ano ang ibig sabihin ng asul na kulay sa selyo ng isang bayan na malapit sa ilog?", "options": ["mayaman sa kagubatan", "mayaman sa agrikultura", "mayaman sa yamang-tubig o ilog", "maraming pabrika doon"], "answer": 2},
      {"type": "choice", "q": "Saan pumupunta ang mga guro at mag-aaral upang magbasa ng maraming aklat sa paaralan?", "options": ["palikuran", "aklatan", "opisina ng principal", "kantina"], "answer": 1},
      {"type": "choice", "q": "Sino ang namumuno sa pananalangin sa loob ng isang moske?", "options": ["Pari", "Pastor", "Imam", "Kagawad"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang munisipyo ay mas maliit kaysa sa barangay hall ng komunidad.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pook kung saan tayo maaaring makabili ng mga delata sa tapat ng bahay?", "options": ["munisipyo", "sari-sari store o tindahan sa barangay", "ospital", "monumento"], "answer": 1},
      {"type": "choice", "q": "Anong katangian ng solid ang ginagamit sa paggawa ng monumento ng bayani?", "options": ["malambot na clay", "matigas na bato o bronze na metal", "magaan na papel", "stickers"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Kung ang isang komunidad ay walang health center, ano ang maaaring maging epekto nito sa mga mamamayan?", "options": ["Hindi makapag-aaral ang mga bata ng science.", "Mahihirapan ang mga tao na makakuha ng agarang libreng bakuna at gamot.", "Walang magbabantay sa trapiko sa gabi.", "Hindi makapamimili ng gulay ang mga nanay."], "answer": 1},
      {"type": "choice", "q": "Challenge: Paano nagtutulungan ang barangay hall at munisipyo sa pamamahala ng pook?", "options": ["Ang barangay hall ang nagbibigay ng ulat at serbisyo sa maliit na pook, habang ang munisipyo ang nagpapatupad ng mas malalaking programa sa bayan.", "Walang ugnayan ang dalawang pook na ito.", "Ang munisipyo ay sumusunod sa mga kagawad ng barangay lamang.", "Ang barangay hall ang nagpapasweldo sa Mayor."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling pook ang pinaka-angkop na bisitahin ng mga mag-aaral upang makakuha ng primaryang batayan (mga sulat-kamay) ng kasaysayan ng ating bayani?", "options": ["SM City Calamba mall", "Bahay-Monumento ni Dr. Jose Rizal sa Calamba", "Laguna Hospital", "isang sari-sari store"], "answer": 1},
      {"type": "choice", "q": "Challenge: Bakit mahalagang ilagay ang simbolo ng palay at isda sa logo ng lalawigan ng Laguna?", "options": ["Dahil ito ang paboritong pagkain ng Mayor lamang.", "Dahil ang Laguna ay may malawak na bukirin ng palay at malapit sa lawa ng Laguna de Bay.", "Dahil walang ibang hayop o halaman sa lalawigan.", "Dahil ito ay palamuti lamang sa selyo ng gobernador."], "answer": 1},
      {"type": "choice", "q": "Challenge: Kung may gulo o away sa inyong kapitbahayan sa gabi, aling pook ang pinakamabilis na lapitan ng tulong?", "options": ["aklatan ng paaralan", "barangay tanod outpost o police outpost", "health center", "palengke ng bayan"], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Ulat-Pook sa Ating Komunidad",
      "desc": "Gumawa ng isang panayam sa iyong magulang tungkol sa pinakamalapit na health center at barangay hall sa inyong bahay. Isulat sa papel ang pangalan ng bawat pook, ang kanilang lokasyon (kalye), at ang pangalan ng Barangay Kapitan o mga doctor doon. Iguhit ang mga gusali at ipaliwanag ang kanilang kahalagahan sa iyong pamilya.",
      "labels": ["Wastong natukoy ang pangalan at lokasyon ng dalawang pook", "Maayos na naiguhit at nailarawan ang tungkulin ng bawat pook", "Malinaw na naipaliwanag ang ulat sa magulang nang may tiwala sa sarili"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Pagtukoy sa Pook at Tungkulin</h3>
                  <p class="ws-instruction">Isulat ang ngalan ng tamang pook (<strong>Barangay Hall</strong>, <strong>Health Center</strong>, <strong>Paaralan</strong>, o <strong>Palengke</strong>) para sa sumusunod na tungkulin.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Pook kung saan nagtuturo ang guro sa mag-aaral:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Paaralan</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Pook para sa libreng bakuna at pagsusuri ng kalusugan ng sanggol:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Health Center</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Sentro ng pamamahala at pulong ng Barangay Kapitan:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Barangay Hall</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Pagsusuri ng Simbolo sa Logo</h3>
                  <p class="ws-instruction">Iugnay ang simbolo sa logo sa katapat nitong kahalagahan sa pamamagitan ng pagsulat ng tamang titik.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0;">
                      <div><strong>Simbolo sa Logo:</strong></div>
                      <div>1. palay <span class="fil-sentence" data-translation="(rice stalks)"></span></div>
                      <div>2. gear o makina <span class="fil-sentence" data-translation="(industrial gear)"></span></div>
                      <div>3. isda at lambat <span class="fil-sentence" data-translation="(fish and net)"></span></div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0; text-align: right; padding-right: 40px;">
                      <div><strong>Kahulugan:</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; A. industriya at pabrika <span class="fil-sentence" data-translation="(industry and factories)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; B. kabuhayan sa pagsasaka <span class="fil-sentence" data-translation="(farming livelihood)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; C. pangingisda sa lawa o dagat <span class="fil-sentence" data-translation="(lake or sea fishing)"></span></div>
                    </div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsusuri ng Makasaysayang Monumento</h3>
                  <p class="ws-instruction">Sagutin ang tanong gamit ang tumpak na detalye batay sa napag-aralan.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Bakit ipinapatayo ang monumento ni Dr. Jose Rizal sa plaza ng Lungsod ng Calamba? <span class="fil-sentence" data-translation="(Why is Rizal's monument built in Calamba City plaza?)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Upang alalahanin at igalang ang kadakilaan ng ating pambansang bayani.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Si Dr. Jose Rizal ay ipinanganak sa lungsod na ito kaya mahalaga siya sa kasaysayan ng pook.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  3: {
    "color": "#f59e0b",
    "icon": "🏝️",
    "title": "Makabansa",
    "subtitle": "Week 3: Mga Pangyayari sa Ating Pook",
    "slides": [
      {
        "title": "Welcome sa Week 3!",
        "text": make_text(
          make_translation("Kumusta ka, maliit na researcher? Welcome sa Week 3!", "How are you, little researcher? Welcome to Week 3!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa mga pangyayari.", "This week, we will study about events in our community."),
          make_translation("Tukuyin natin ang mga pagdiriwang at pista sa pook.", "Let's identify the festivals and celebrations in the place."),
          make_translation("Alamin natin ang kahalagahan ng mga tradisyon natin.", "Let's learn the importance of our local traditions today."),
          make_translation("May mga lokal na awitin at sayaw na sumasalamin dito.", "There are local songs and dances that reflect these events."),
          make_translation("Pag-aaralan din natin ang tamang pagkakasunod-sunod nito.", "We will also study their correct historical sequence yonder."),
          make_translation("Handa ka na bang sumali sa masayang pista ng bayan?", "Are you ready to join in the happy town festival today?"),
          make_translation("Magsimula tayong mag-explore na may kasiglahan ngayon!", "Let's start exploring with enthusiasm in our class today!")
        ),
        "examples": [{"title": "Layunin ng Aralin", "content": "Matukoy ang mahahalagang pagdiriwang at tradisyon sa sariling pook."}]
      },
      {
        "title": "Mga Tradisyon at Kasaysayan",
        "text": make_text(
          make_translation("Ang tradisyon ay mga gawi na ipinapasa ng ninuno.", "Traditions are practices passed down by our ancestors."),
          make_translation("Sinasalamin nito ang mahabang kasaysayan ng pook.", "These reflect the long history of our local place yonder."),
          make_translation("Halimbawa: ang pagsasagawa ng pista ng barangay.", "Example: the celebration of our local barangay festival."),
          make_translation("Dito nagpapasalamat ang mga tao sa magandang ani.", "Here people express gratitude for a bountiful harvest in town."),
          make_translation("Nagkakaisa ang buong komunidad sa pagdiriwang na ito.", "The entire community unites in this happy celebration daily."),
          make_translation("Ang tradisyon ay nagbibigay-buhay sa kultura natin.", "Tradition gives life to our local culture and heritage."),
          make_translation("Nakatutulong ito upang makilala ang ating komunidad.", "This helps identify and define our community in history."),
          make_translation("Anong tradisyon ang ginagawa sa inyong sariling pook?", "What tradition is practiced in your own local place today?")
        ),
        "examples": [{"title": "Tradisyon", "content": "mga pista, kapistahan ng patron, katutubong laro"}]
      },
      {
        "title": "Ang Pista ng Pahiyas sa Quezon",
        "text": make_text(
          make_translation("Ang Pista ng Pahiyas ay isang sikat na pagdiriwang.", "The Pahiyas Festival is a famous regional celebration."),
          make_translation("Ginaganap ito sa Lucban, Quezon tuwing Mayo 15.", "It is held in Lucban yonder in Quezon province on May 15."),
          make_translation("Ito ay parangal kay San Isidro Labrador na patron.", "It is a tribute to San Isidro Labrador, the patron saint."),
          make_translation("Siya ang patron ng mga magsasaka sa ating bansa.", "He is the patron saint of farmers in our country today."),
          make_translation("Pinalalamutian ng kiping ang harap ng mga bahay.", "Houses are decorated with colorful kiping on their facades."),
          make_translation("Ang kiping ay yari sa bigas na may iba't ibang kulay.", "Kiping is made of rice paste colored in vibrant shades."),
          make_translation("Nagpapasalamat sila sa saganang ani ng mga gulay.", "They express gratitude for the abundant harvest of vegetables."),
          make_translation("Isang makulay na tradisyon na dinarayo ng marami!", "A colorful tradition visited by many people yonder!")
        ),
        "examples": [{"title": "Pahiyas", "content": "Mayo 15 (Lucban, Quezon) -> parangal sa patron ng magsasaka."}]
      },
      {
        "title": "Ang Pista ng Lechon sa Batangas",
        "text": make_text(
          make_translation("Suriin natin ang isa pang kilalang pagdiriwang.", "Let's check another well-known local festival yonder."),
          make_translation("Ito ay ang Pista ng Lechon sa Balayan, Batangas.", "This is the Lechon Festival in Balayan yonder in Batangas."),
          make_translation("Ginaganap ito tuwing Hunyo 24 sa ating lalawigan.", "It is celebrated on June 24 in our neighboring province."),
          make_translation("Ito ay kasabay ng kapistahan ni San Juan Bautista.", "It coincides with the feast of Saint John the Baptist."),
          make_translation("Pinalalamutian at binibihisan ang mga inihaw na lechon.", "Roasted pigs (lechon) are dressed up in funny outfits."),
          make_translation("Ipinaparada ang mga ito sa kalsada habang nagsasaya.", "They are paraded on the streets while people have fun."),
          make_translation("May tradisyon din ng basaan ng tubig sa mga tao.", "There is also a tradition of splashing water on people."),
          make_translation("Bakit nagbabasa ng tubig kapag kapistahan ni San Juan?", "Why do we splash water during the feast of Saint John?")
        ),
        "examples": [{"title": "Pista ng Lechon", "content": "Hunyo 24 (Balayan, Batangas) -> parada ng nakadamit na lechon."}]
      },
      {
        "title": "Ang Pista ng Pinya sa Daet",
        "text": make_text(
          make_translation("Ang Pista ng Pinya ay ginaganap sa Daet, Camarines.", "The Pineapple Festival is celebrated in Daet, Camarines."),
          make_translation("Ipinagmamalaki rito ang matamis na pinya sa pook.", "They showcase the sweet pineapple variety grown in the place."),
          make_translation("Ang pinya sa Daet ay kilala sa tawag na Formosa.", "The pineapple yonder in Daet is famous as the Formosa variety."),
          make_translation("Ito ay may maliit na sukat ngunit napakatamis kainin.", "It has a small size but is extremely sweet to eat daily."),
          make_translation("May mga street dancing na naglalahad ng pagsasaka.", "There are street dancing performances showing pineapple farming."),
          make_translation("Sinasalamin ng pista ang pangunahing kabuhayan doon.", "The festival reflects the primary source of livelihood there."),
          make_translation("Ginamit nila ang prutas na ito upang makilala sa bansa.", "They used this fruit to gain recognition in the country."),
          make_translation("Nakakain ka na ba ng matamis na pinya sa inyong bayan?", "Have you tasted a sweet pineapple in your town today?")
        ),
        "examples": [{"title": "Pista ng Pinya", "content": "Pagdiriwang ng Formosa pinya bilang pangunahing ani."}]
      },
      {
        "title": "Mga Lokal na Sining at Kagamitan",
        "text": make_text(
          make_translation("Sa mga pagdiriwang, ipinapakita ang lokal na sining.", "During festivals, local arts and crafts are proudly displayed."),
          make_translation("Halimbawa: ang paggawa ng mga banig, basket, at bakya.", "Examples: making woven mats, native baskets, and wooden clogs."),
          make_translation("Ang mga ito ay gawa sa likas na materyal sa pook natin.", "These are made of natural materials found in our local place."),
          make_translation("Tulad ng dahon ng pandan, kawayan, at matigas na kahoy.", "Such as pandan leaves, bamboo twigs, and hard wood blocks."),
          make_translation("Ang sining na ito ay ipinasa ng ating mga ninuno.", "This weaving and carving art was passed down by ancestors."),
          make_translation("Bahagi ito ng makasaysayang pamana ng ating komunidad.", "This belongs to the historical heritage of our community."),
          make_translation("Nakatutulong ito sa kabuhayan ng maraming pamilya.", "This helps support the livelihood of many local families."),
          make_translation("Mayroon ka bang basket na gawa sa kawayan sa bahay?", "Do you have a basket made of bamboo in your house today?")
        ),
        "examples": [{"title": "Lokal na Sining", "content": "banig (woven mats), basket, bakya (wooden shoes)"}]
      },
      {
        "title": "Ang Timeline ng Pista",
        "text": make_text(
          make_translation("Ang pagdiriwang ay may pagkakasunod-sunod ng kaganapan.", "The celebration has a clear sequence of events yonder."),
          make_translation("Maaari natin itong ipakita sa isang timeline ngayon.", "We can display this sequence using a timeline format today."),
          make_translation("Umaga: nagsisimula ang parada ng mga banda sa kalsada.", "Morning: the parade of school bands begins on the street."),
          make_translation("Tanghali: may salo-salo at kainan sa bawat tahanan.", "Noon: there is sharing of food and lunch inside every house."),
          make_translation("Hapon: may mga palaro at street dancing sa plaza.", "Afternoon: there are games and street dancing in the plaza."),
          make_translation("Gabi: may patimpalak at paputok sa kalawakan.", "Night: there are contests and fireworks in the dark sky."),
          make_translation("Ang tamang daloy ay nagpapakita ng maayos na plano.", "The correct flow shows a well-organized community plan today."),
          make_translation("Suriin ang pagkakasunod-sunod ng inyong pista sa bayan!", "Check the sequence of events of your own town festival!")
        ),
        "examples": [{"title": "Timeline ng Pista", "content": "Umaga (Parada) -> Tanghali (Kainan) -> Hapon (Palaro) -> Gabi (Paputok)"}]
      },
      {
        "title": "Katutubong Sayaw sa Pista",
        "text": make_text(
          make_translation("Ang mga sayaw ay mahalagang bahagi ng pagdiriwang.", "Dances are an essential part of our local celebrations."),
          make_translation("Halimbawa: ang sayaw na 'Cariñosa' o 'Tinikling' sa pook.", "Examples: the dance 'Cariñosa' or 'Tinikling' in our region."),
          make_translation("Ang Tinikling ay ginagamitan ng dalawang kawayan.", "Tinikling uses two long bamboo poles tapped on the floor."),
          make_translation("Ginagaya nito ang pag-ilag ng ibong tikling sa patibong.", "It mimics the movement of the tikling bird avoiding traps."),
          make_translation("Kailangan ng bilis at koordinasyon sa pagsayaw nito.", "Speed and physical coordination are needed to dance it well."),
          make_translation("Ang sayaw ay naglalahad ng kwento ng ating kultura.", "The dance tells a visual story of our rich local culture."),
          make_translation("Inaawit din natin ang mga lokal na kanta habang sumasayaw.", "We also sing local folk songs while dancing on the stage."),
          make_translation("Nakasubok ka na bang sumayaw ng Tinikling sa paaralan?", "Have you tried dancing the Tinikling in your school today?")
        ),
        "examples": [{"title": "Katutubong Sayaw", "content": "Tinikling (pag-ilag ng ibon gamit ang kawayan)"}]
      },
      {
        "title": "Guided Practice: Pagsusuri ng Pista",
        "text": make_text(
          make_translation("Suriin natin ang isang tradisyon sa ating komunidad.", "Let's analyze a local tradition in our community today."),
          make_translation("Basahin: 'Ipinagdiwang ang Pahiyas noong Mayo 15.'", "Read: 'The Pahiyas Festival was celebrated on May 15.'"),
          make_translation("Ano ang okasyon na binanggit sa ating pangungusap?", "What is the occasion mentioned in our sentence yonder?"),
          make_translation("Ang okasyon ay 'Pahiyas' na isang pantangi sa wika.", "The occasion is 'Pahiyas' which is a proper noun of event."),
          make_translation("Kailan ito ipinagdiwang batay sa ating pahayag?", "When was it celebrated based on our written statement?"),
          make_translation("Ito ay ipinagdiwang noong 'Mayo 15' na isang petsa.", "It was celebrated on 'May 15' which is a specific date."),
          make_translation("Ito ay tradisyon ng pasasalamat sa saganang ani.", "This is a tradition of gratitude for a bountiful harvest."),
          make_translation("Nahanap mo ba ang pangyayari at panahon sa pagsusuri?", "Did you find the event and time in your analysis today?")
        ),
        "examples": [{"title": "Pagsusuri Pista", "content": "Pangyayari -> Pahiyas, Panahon -> Mayo 15, Kahulugan -> Pasasalamat"}]
      },
      {
        "title": "Guided Practice: Katutubong Sining",
        "text": make_text(
          make_translation("Suriin natin ang isang banig na gawa sa pandan.", "Let's analyze a woven mat made of pandan leaves today."),
          make_translation("Ang banig ay may kulay na berde, pula, at dilaw.", "The mat contains woven patterns of green, red, and yellow."),
          make_translation("Suriin ang mga hugis na nakahabi sa ibabaw nito.", "Observe the shapes woven on its smooth physical surface."),
          make_translation("May mga hugis ng bulaklak at alon ng malapit na dagat.", "There are shapes of flowers and waves of the nearby sea."),
          make_translation("Ang sining na ito ay tinatawag na katutubong habi.", "This weaving art is called native weaving in our culture."),
          make_translation("Ito ay ginawa gamit ang kamay ng lokal na artista.", "It was made by hand by a skilled local artist in town."),
          make_translation("Ito ay isang primaryang batayan ng sining sa pook.", "This is a primary source of art in our local community."),
          make_translation("Iguhit ang pattern ng banig na ito sa inyong papel!", "Draw the pattern of this woven mat on your drawing sheet!")
        ),
        "examples": [{"title": "Pagsasanay Sining", "content": "banig -> katutubong habi gamit ang dahon ng pandan"}]
      },
      {
        "title": "Guided Practice: Leron Leron Sinta",
        "text": make_text(
          make_translation("Aawitin natin ang 'Leron Leron Sinta' sa klase natin.", "We will sing the folk song 'Leron Leron Sinta' today."),
          make_translation("Basahin: 'Leron, leron sinta, buko ng papaya...'", "Read: 'Leron, leron sinta, bud of the papaya...'"),
          make_translation("Ano ang prutas na binanggit sa simula ng kanta?", "What is the fruit mentioned at the start of the song?"),
          make_translation("Ang prutas ay 'papaya' na isang ngalan ng bagay.", "The fruit is 'papaya' which is a common noun of thing."),
          make_translation("Ano ang ginagawa ng tao sa kanta sa itaas ng puno?", "What is the person in the song doing up yonder tree?"),
          make_translation("Siya ay pumipitas ng prutas ngunit nabali ang sanga.", "He is picking fruits but the branch broke unexpectedly."),
          make_translation("Ang kantang ito ay naglalarawan ng buhay sa bukid.", "This folk song describes the agricultural way of life yonder."),
          make_translation("Isulat ang pangalan ng prutas na ito sa inyong papel!", "Write the name of this fruit onto your writing paper now!")
        ),
        "examples": [{"title": "Pagsasanay Awitin", "content": "papaya (prutas) -> pamumuhay sa pagsasaka (agriculture)"}]
      },
      {
        "title": "Maling Pagtukoy sa Petsa ng Pista",
        "text": make_text(
          make_translation("Iwasan ang paglilito sa mga petsa ng pagdiriwang.", "Avoid confusing the dates of our local celebrations today."),
          make_translation("Mali: 'Ipinagdiriwang ang Pahiyas tuwing Disyembre 25.'", "Wrong: 'Pahiyas Festival is celebrated on December 25 yonder.'"),
          make_translation("Ang Disyembre 25 ay petsa ng Pasko, hindi ng Pahiyas.", "December 25 is the date of Christmas, not of Pahiyas."),
          make_translation("Ang Pahiyas ay ginaganap tuwing Mayo 15 sa Quezon.", "Pahiyas is celebrated on May 15 yonder in Quezon province."),
          make_translation("Tama: 'Ipinagdiriwang ang Pahiyas tuwing Mayo 15.'", "Correct: 'Pahiyas Festival is celebrated on May 15.'"),
          make_translation("Tiyakin ang tamang petsa sa inyong kasaysayang ulat.", "Make sure of the correct date in your historical reports."),
          make_translation("Magtanong sa nakatatanda o magbasa ng aklat ngayon!", "Ask the elders in your family or read history books now!"),
          make_translation("Ito ang paraan upang maging tumpak ang iyong gawa!", "This is the way to keep your school work accurate today!")
        ),
        "examples": [{"title": "Petsa Error", "content": "mali: Pahiyas -> Disyembre 25, tama: Pahiyas -> Mayo 15"}]
      },
      {
        "title": "Maling Paglalarawan ng Sayaw",
        "text": make_text(
          make_translation("Iwasan ang maling paglalarawan sa katutubong sayaw.", "Avoid incorrect descriptions of our native folk dances today."),
          make_translation("Huwag sabihing ang Tinikling ay ginagamitan ng baso.", "Do not write yonder that Tinikling uses drinking glasses."),
          make_translation("Ang sayaw na may baso sa ulo ay Pandanggo sa Ilaw.", "The dance with glasses of light on the head is Pandanggo."),
          make_translation("Ang Tinikling ay gumagamit ng malalaking kawayan.", "The Tinikling uses large bamboo poles tapped on the floor."),
          make_translation("Tiyakin ang mga kagamitan ng sayaw sa inyong ulat.", "Verify the dance props of each folk dance in your reports."),
          make_translation("Maaari mong panoorin ang sayaw upang makasiguro ka.", "You can watch the actual folk dance performed on stage yonder."),
          make_translation("Ang tumpak na detalye ay nagpapakita ng kaalaman natin.", "Accurate details show our deep knowledge of culture yonder."),
          make_translation("Maging maingat sa pagsulat ng mga katutubong sayaw ngayon!", "Be careful when writing about these native folk dances today!")
        ),
        "examples": [{"title": "Sayaw Pagsusuri", "content": "Tinikling = kawayan (bamboo), Pandanggo = baso ng ilaw (glass)"}]
      },
      {
        "title": "Ang Kasaysayan ng Pista ng Pook",
        "text": make_text(
          make_translation("Ang bawat pista ay may malalim na kasaysayan sa pook.", "Every festival has a deep history in our local place yonder."),
          make_translation("Ito ay hindi lamang kainan; may layunin ang pagtitipon.", "It is not just for eating; the gathering has a purpose."),
          make_translation("Nilalayon nitong palakasin ang pagkakaisa ng barangay.", "It aims to strengthen the unity of our local barangay life."),
          make_translation("Ipinapakita nito ang kabuhayan at produkto ng komunidad.", "It displays the products and livelihood of the community."),
          make_translation("E.g., pinya sa Daet, lechon sa Balayan, kiping sa Lucban.", "E.g., pineapple in Daet, roasted pig in Balayan, kiping in Lucban."),
          make_translation("Ipinagmamalaki natin ang mga yaman na ibinigay sa atin.", "We take pride in the abundant resources given to our place."),
          make_translation("Ito ay nagbibigay-identidad sa bawat lalawigan natin.", "This provides a unique identity to each province yonder."),
          make_translation("Mahalin natin ang sining at tradisyon ng ating pook!", "Let's love the local arts and traditions of our place!")
        ),
        "examples": [{"title": "Kasaysayan ng Pista", "content": "Pista = Pagdiriwang ng produkto, kabuhayan, at pagkakaisa."}]
      },
      {
        "title": "Buod ng Ikatlong Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang mga sikat na pista tulad ng Pahiyas.", "We learned about famous festivals like the Pahiyas yonder."),
          make_translation("Natutunan natin ang Pista ng Lechon at Pista ng Pinya.", "We learned about the Lechon Festival and Pineapple Festival."),
          make_translation("Nag-aral tayo ng mga katutubong sayaw tulad ng Tinikling.", "We studied native folk dances like the Tinikling yonder."),
          make_translation("Suriin natin ang mga sining tulad ng banig at basket.", "We examined local arts like woven mats and bamboo baskets."),
          make_translation("Gumawa tayo ng timeline ng kaganapan sa pista ng bayan.", "We created timelines of events during our town festivals."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggong ito?", "Are you ready for the quiz and challenges of this week now?"),
          make_translation("Ipagpatuloy ang pagmamahal sa kultura ng ating komunidad!", "Continue loving the rich culture of our local community today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pista = Tradisyon at Produkto. Sining = Habi at Ukit. Igalang natin!"}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang Pista ng Pahiyas na ipinagdiriwang tuwing Mayo 15?", "options": ["pambalana sa pook", "pantangi sa pangyayari", "pantangi sa tao", "pambalana sa bagay"], "answer": 1},
      {"type": "choice", "q": "Saan ipinagdiriwang ang sikat na Pista ng Pahiyas?", "options": ["Calamba, Laguna", "Lucban, Quezon", "Balayan, Batangas", "Daet, Camarines"], "answer": 1},
      {"type": "choice", "q": "Sino ang patron ng mga magsasaka na ipinagdiriwang sa Pista ng Pahiyas?", "options": ["San Juan Bautista", "San Isidro Labrador", "San Jose", "San Pablo"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa palamuti na yari sa bigas na may iba't ibang kulay sa Pahiyas?", "options": ["lechon", "kiping", "banig", "bakya"], "answer": 1},
      {"type": "choice", "q": "Saan ipinagdiriwang ang sikat na Pista ng Lechon tuwing Hunyo 24?", "options": ["Lucban, Quezon", "Balayan, Batangas", "Daet, Camarines Norte", "Calamba, Laguna"], "answer": 1},
      {"type": "choice", "q": "Sino ang patron na kasabay ng pagdiriwang ng Pista ng Lechon?", "options": ["San Isidro Labrador", "San Juan Bautista", "San Jose", "San Pablo"], "answer": 1},
      {"type": "choice", "q": "Anong prutas ang ipinagdiriwang sa Daet, Camarines Norte dahil sa tamis nito?", "options": ["papaya", "pinya", "saging", "mangga"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa sikat na katutubong sayaw na gumagamit ng kawayan sa pagsayaw?", "options": ["Cariñosa", "Tinikling", "Pandanggo sa Ilaw", "Singkil"], "answer": 1},
      {"type": "choice", "q": "Aling ibon ang ginagaya ng sayaw na Tinikling habang umiiwas sa patibong?", "options": ["agila", "loro", "tikling", "pabo"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang 'Leron Leron Sinta' ay isang lokal na folk song na naglalarawan ng buhay-bukid.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang lokal na sining na gawa sa hinabing dahon ng pandan?", "options": ["basket", "banig", "bakya", "lechon"], "answer": 1},
      {"type": "choice", "q": "Anong materyal ang ginagamit sa paggawa ng basket sa ating komunidad?", "options": ["bakal", "kawayan o rattan", "plastik", "papel"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa tradisyonal na kahoy na sapatos ng mga Pilipino?", "options": ["sapatos", "tsinelas", "bakya", "boots"], "answer": 2},
      {"type": "choice", "q": "Punan ang patlang sa kanta: 'Leron, leron sinta, buko ng ___...'", "options": ["saging", "papaya", "mangga", "pinya"], "answer": 1},
      {"type": "choice", "q": "Ano ang layunin ng pagdaraos ng Pista ng Pinya sa Daet?", "options": ["mag-import ng dayuhang prutas", "ipagmalaki ang saganang ani ng pinyang Formosa", "magbenta ng laruan", "magtayo ng bagong tulay"], "answer": 1},
      {"type": "choice", "q": "Anong okasyon ang ipinagdiriwang tuwing Hunyo 24 na may basaan ng tubig?", "options": ["Pasko", "Kapistahan ni San Juan Bautista", "Pista ng Pahiyas", "Bagong Taon"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang Pista ng Pahiyas ay ginaganap tuwing Mayo 15 sa Laguna.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa sining na yari sa kahoy?", "options": ["ukit sa kahoy", "habing tela", "banig", "lechon"], "answer": 0},
      {"type": "choice", "q": "Ano ang dapat iwasan kapag sumasayaw ng Tinikling sa ibabaw ng kawayan?", "options": ["ngumiti sa mambabasa", "maipit ang paa sa pagitan ng kawayan", "kumanta ng Leron Leron Sinta", "tumingin sa guro"], "answer": 1},
      {"type": "choice", "q": "Sino ang nagtuturo ng mga katutubong sayaw at awitin sa paaralan?", "options": ["doktor", "guro", "pulis", "tanod"], "answer": 1},
      {"type": "choice", "q": "Ano ang ginagawa sa mga inihaw na lechon sa parada sa Balayan?", "options": ["kinakain habang mainit pa sa parada", "binibihisan at pinapalamutian", "itinatapon sa ilog", "itinatago sa aklatan"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pambalana sa pangyayari: 'Masaya ang mga tao sa pista.'", "options": ["tao", "masaya", "pista", "mga"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang kiping ay palamuti na pwedeng kainin dahil ito ay gawa sa bigas.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Aling likas na yaman ang ginagamit sa paghabi ng banig?", "options": ["bakal", "dahon ng pandan o palm", "bato", "semento"], "answer": 1},
      {"type": "choice", "q": "Ano ang pangunahing mensahe ng mga lokal na pagdiriwang sa komunidad?", "options": ["pagkakaisa at pasasalamat sa mga biyaya", "pagbili ng bagong sapatos", "paggawa ng makina", "digmaan"], "answer": 0}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling pagkakaiba ang totoo sa pagitan ng Pista ng Pahiyas at Pista ng Lechon?", "options": ["Ang Pahiyas ay parangal sa patron ng magsasaka sa Quezon, habang ang Lechon ay kasabay ng pista ni San Juan sa Batangas.", "Ang Pahiyas ay gumagamit ng lechon, habang ang Lechon ay gumagamit ng kiping.", "Ang Pahiyas ay ginaganap sa Batangas, habang ang Lechon ay sa Quezon.", "Walang pagkakaiba ang dalawang pagdiriwang na ito."], "answer": 0},
      {"type": "choice", "q": "Challenge: Paano nagkakaugnay ang awiting 'Leron Leron Sinta' sa kabuhayan ng mga tao sa Laguna noong araw?", "options": ["Ipinapakita nito na pangingisda ang tanging gawa doon.", "Inilalarawan nito ang pamumuhay sa pagsasaka at pagpitas ng mga lokal na prutas.", "Wala itong kinalaman sa kabuhayan ng mga tao.", "Ipinapakita nito ang mga pabrika at makina sa lungsod."], "answer": 1},
      {"type": "choice", "q": "Challenge: Kung ang isang mag-aaral ay nais mag-aral ng kasaysayan ng sayaw na Tinikling, aling batayan ang primary source?", "options": ["isang video record ng mga katutubong sumasayaw noong 1930", "isang modernong aklat sa MAPEH na isinulat nitong 2026", "isang kwento ng kaibigan", "isang encyclopedia"], "answer": 0},
      {"type": "choice", "q": "Challenge: Bakit pinalalamutian ng kiping at gulay ang mga bahay sa Pahiyas sa halip na mga plastik na laruan?", "options": ["Dahil walang plastik na laruan sa Quezon.", "Dahil ang kiping at gulay ay sumasagisag sa pasasalamat sa saganang ani ng agrikultura.", "Dahil mas mura ang kiping kaysa sa laruan.", "Dahil ang Mayor ang nag-utos nito."], "answer": 1},
      {"type": "choice", "q": "Challenge: Aling pagkakasunod-sunod ng mga pagdiriwang sa taon ang tama batay sa kalendaryo?", "options": ["Pista ng Pahiyas (Mayo 15) -> Pista ng Lechon (Hunyo 24) -> Pasko (Disyembre 25)", "Pista ng Lechon (Hunyo 24) -> Pista ng Pahiyas (Mayo 15) -> Pasko (Disyembre 25)", "Pasko (Disyembre 25) -> Pista ng Pahiyas (Mayo 15) -> Pista ng Lechon (Hunyo 24)", "Pista ng Pahiyas (Mayo 15) -> Pasko (Disyembre 25) -> Pista ng Lechon (Hunyo 24)"], "answer": 0}
    ],
    "performance": {
      "type": "performance",
      "title": "Ulat-Pista ng Ating Pook",
      "desc": "Kausapin ang iyong magulang tungkol sa pista ng inyong sariling bayan o lungsod. Alamin kung kailan ito ipinagdiriwang, sino ang patron o anong produkto ang itinatampok, at anong mga lokal na pagkain ang inihahanda. Sumulat ng ulat sa papel, iguhit ang pagdiriwang, at awitin ang Leron Leron Sinta sa harap ng iyong pamilya.",
      "labels": ["Wastong natukoy ang petsa at produkto ng pista ng bayan", "Maayos na naiguhit ang parada o mga lokal na pagkain", "Malinaw na naawit ang folk song na may kasiglahan sa pamilya"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Pagkilala sa mga Pista</h3>
                  <p class="ws-instruction">Isulat ang ngalan ng tamang pista (<strong>Pahiyas</strong>, <strong>Pista ng Lechon</strong>, o <strong>Pista ng Pinya</strong>) batay sa produkto at lugar.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Parada ng mga nakadamit at pinalamutiang inihaw na baboy sa Balayan, Batangas:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pista ng Lechon</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Pagpapalamuti ng makukulay na kiping na yari sa bigas sa mga bahay sa Lucban, Quezon:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pahiyas</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Pagdiriwang ng saganang ani ng matatamis na pinyang Formosa sa Daet:</div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pista ng Pinya</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Katutubong Sining at Sayaw</h3>
                  <p class="ws-instruction">Iugnay ang sining o sayaw sa katapat nitong kagamitan sa pamamagitan ng pagsulat ng tamang titik.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0;">
                      <div><strong>Sining at Sayaw:</strong></div>
                      <div>1. Sayaw na Tinikling <span class="fil-sentence" data-translation="(Tinikling Dance)"></span></div>
                      <div>2. Paghabi ng Banig <span class="fil-sentence" data-translation="(Mat Weaving)"></span></div>
                      <div>3. Paggawa ng Bakya <span class="fil-sentence" data-translation="(Clog Making)"></span></div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0; text-align: right; padding-right: 40px;">
                      <div><strong>Pangunahing Kagamitan:</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; A. dahon ng pandan <span class="fil-sentence" data-translation="(pandan leaves)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; B. dalawang mahabang kawayan <span class="fil-sentence" data-translation="(two long bamboo poles)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; C. matigas na kahoy <span class="fil-sentence" data-translation="(hard wood block)"></span></div>
                    </div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsusuri ng Lokal na Awitin</h3>
                  <p class="ws-instruction">Sagutin ang tanong gamit ang tumpak na detalye batay sa awiting 'Leron Leron Sinta'.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Ano ang mahalagang aral sa kanta kapag nabali ang sanga ng puno ng papaya? <span class="fil-sentence" data-translation="(What is the moral lesson when the papaya branch broke?)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Dapat maging maingat sa pag-akyat sa mga puno at sa paggawa ng trabaho sa bukid.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Ang kawalan ng pag-iingat ay maaaring magdulot ng aksidente o pagkakahulog.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  4: {
    "color": "#f59e0b",
    "icon": "🏝️",
    "title": "Makabansa",
    "subtitle": "Week 4: Ang Ugnayan ng Barangay at Bayan",
    "slides": [
      {
        "title": "Welcome sa Week 4!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikaapat na linggo!", "How are you, student? Welcome to the fourth week!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa ugnayan.", "This week, we will study about connections yonder."),
          make_translation("Tukuyin natin ang ugnayan ng barangay at ng bayan.", "Let's identify the connection of barangay and town."),
          make_translation("Ang barangay ay maliit na bahagi ng isang bayan.", "The barangay is a small division of a wider town."),
          make_translation("Ang kasaysayan ng bawat isa ay nagkakaugnay ngayon.", "The history of each part is connected to one another."),
          make_translation("Pag-aaralan natin kung paano sila nagtutulungan.", "We will study how they work together for development."),
          make_translation("Suriin natin ang ugnayang ito sa ating aralin!", "Let's analyze this important connection in our lesson!"),
          make_translation("Handa ka na bang lumawak ang iyong kaalaman ngayon?", "Are you ready to expand your knowledge of history today?")
        ),
        "examples": [{"title": "Layunin ng Linggo", "content": "Maunawaan ang ugnayan sa kasaysayan ng barangay at ng mas malawak na bayan."}]
      },
      {
        "title": "Ang Barangay bilang Bahagi",
        "text": make_text(
          make_translation("Ang barangay ang pinakamaliit na yunit sa bansa.", "The barangay is the smallest political unit in the country."),
          make_translation("Mayroon tayong sariling pamunuan tulad ng kapitan.", "We have our own local leadership like the captain."),
          make_translation("Ngunit ang barangay ay hindi nag-iisa sa komunidad.", "But the barangay does not exist alone in the region."),
          make_translation("Ito ay kabilang sa mas malaking bayan o lungsod natin.", "It belongs to the wider municipal town or city structure."),
          make_translation("Halimbawa: ang Barangay San Jose ay bahagi ng Calamba.", "Example: Barangay San Jose is a part of Calamba City."),
          make_translation("Ang kasaysayan ng San Jose ay bahagi ng kasaysayan nito.", "The history of San Jose is part of Calamba's history."),
          make_translation("Sila ay may iisang kultura at pinagmulan sa pook.", "They share a common culture and origin in the province."),
          make_translation("Suriin ang ugnayan ng inyong barangay at bayan ngayon!", "Analyze the connection of your own barangay and town today!")
        ),
        "examples": [{"title": "Bahagi", "content": "Barangay (maliit) -> Lungsod o Bayan (malaki)"}]
      },
      {
        "title": "Ang Kasaysayan ng Bayan ng Calamba",
        "text": make_text(
          make_translation("Ang Lungsod ng Calamba ay may makulay na nakaraan.", "The City of Calamba yonder has a colorful past history."),
          make_translation("Nagmula ang pangalan nito sa salitang 'kalan-banga'.", "Its name originated from the local term 'kalan-banga'."),
          make_translation("Ito ay isang palayok ng luwad para sa pagluluto.", "This is a clay pot used by the ancestors for cooking."),
          make_translation("Ayon sa kwento, may dalawang sundalong Kastila doon.", "According to story, there were two Spanish soldiers yonder."),
          make_translation("Tinanong nila ang pangalan ng pook sa isang babae.", "They asked the name of the place to a local woman."),
          make_translation("Akala ng babae ay tinatanong ang kargang kalan-banga.", "The woman thought they were asking about her clay pot."),
          make_translation("Sumagot siya: 'kalan-banga', na naging 'Calamba'.", "She answered: 'kalan-banga', which became 'Calamba'."),
          make_translation("Isang makasaysayang kwento na ipinagmamalaki natin!", "A historical story yonder that we take pride in today!")
        ),
        "examples": [{"title": "Calamba", "content": "kalan (stove) + banga (clay pot) -> Calamba"}]
      },
      {
        "title": "Ang Kalan-Banga Monumento",
        "text": make_text(
          make_translation("May malaking monumento ng kalan-banga sa Calamba.", "There is a large kalan-banga monument built in Calamba."),
          make_translation("Ito ay matatagpuan sa plaza ng lungsod ng Calamba.", "It is located yonder in the public city plaza of Calamba."),
          make_translation("Ito ay isang malaking palayok na gawa sa semento.", "It is a huge clay pot monument built using hard concrete."),
          make_translation("Pinalalamutian ito ng mga pangalan ng mga barangay.", "It is decorated with the names of all its barangays."),
          make_translation("Ipinapakita nito ang pagkakaisa ng bawat barangay.", "This displays the unity and connection of each barangay."),
          make_translation("Ang bawat barangay ay parang bahagi ng kalan-banga.", "Each barangay is like a piece of the kalan-banga pot."),
          make_translation("Ang monumento ay isang primaryang batayan sa pook.", "The monument is a physical primary source for the city."),
          make_translation("Suriin ang guhit ng kalan-banga sa inyong aklat!", "Examine the drawing of the kalan-banga in your book now!")
        ),
        "examples": [{"title": "Monumento", "content": "Kalan-Banga Plaza (monumento ng pagkakaisa ng barangay)"}]
      },
      {
        "title": "Paano Nagtutulungan ang mga Pook?",
        "text": make_text(
          make_translation("Ang barangay at bayan ay nagtutulungan sa serbisyo.", "The barangay and town work together to provide services."),
          make_translation("Ang barangay hall ay tumutulong sa maliliit na kalye.", "The barangay hall helps manage the small local streets."),
          make_translation("Ang munisipyo naman ang gumagawa ng malalaking daan.", "Meanwhile, the municipal hall constructs the major highways."),
          make_translation("Kapag may bagyo, nagtutulungan sila sa pagbibigay-tulong.", "When a typhoon comes, they cooperate to give relief goods."),
          make_translation("Ang health center ay nakikipag-ugnayan sa ospital.", "The local health center coordinates with the town hospital."),
          make_translation("Ito ay upang masiguro ang kalusugan ng bawat pamilya.", "This is to ensure the health of every family in town."),
          make_translation("Ang pagtutulungang ito ay susi sa pag-unlad natin.", "This active cooperation is the key to our development."),
          make_translation("Bakit mahalagang magtulungan ang barangay at bayan?", "Why is it important for barangay and town to cooperate?")
        ),
        "examples": [{"title": "Pagtutulungan", "content": "tanod outpost (barangay) + police station (munisipyo)"}]
      },
      {
        "title": "Ang Lalawigan ng Laguna",
        "text": make_text(
          make_translation("Ang Lungsod ng Calamba ay kabilang sa Laguna.", "The City of Calamba belongs to the province of Laguna."),
          make_translation("Ang Laguna ay isang malawak na lalawigan sa bansa.", "Laguna is a wide and historic province in our country."),
          make_translation("Nagmula ang pangalan nito sa salitang 'la laguna'.", "Its name originated from the Spanish term 'la laguna'."),
          make_translation("Ibig sabihin nito ay 'ang lawa' sa wikang Kastila.", "This means 'the lake' in the Spanish language yonder."),
          make_translation("Ito ay dahil sa malaking lawa ng Laguna de Bay.", "This is due to the large lake of Laguna de Bay nearby."),
          make_translation("Ang lawa ay nagdugtong sa maraming bayan at barangay.", "The lake connects many towns and barangays in history."),
          make_translation("Ang kasaysayan ng lawa ay bahagi ng kasaysayan natin.", "The history of this lake is part of our shared history."),
          make_translation("Suriin ang mapa ng Laguna sa inyong silid-aralan!", "Observe the map of Laguna in your classroom today!")
        ),
        "examples": [{"title": "Laguna", "content": "la laguna (the lake) -> Laguna de Bay"}]
      },
      {
        "title": "Mga Produkto at Kalakalan",
        "text": make_text(
          make_translation("Nagkakaisa ang mga barangay sa pagbebenta ng ani.", "Barangays unite in selling their agricultural harvests."),
          make_translation("Dinadala ng mga magsasaka ang palay sa bayan natin.", "Farmers bring their rice harvests to the municipal market."),
          make_translation("Ang mga mangingisda ay nagdadala ng isda mula sa lawa.", "Fishermen bring fresh fish from the lake to town markets."),
          make_translation("Nagkakaroon ng kalakalan sa pagitan ng mga pook natin.", "Trade happens yonder between different local barangays."),
          make_translation("Ito ay nagbibigay ng trabaho sa maraming mamamayan.", "This provides jobs and livelihood to many local citizens."),
          make_translation("Ang pagtutulungan sa kalakalan ay nagpapayaman sa bayan.", "Cooperation in trade makes the entire town rich in resources."),
          make_translation("Sinasalamin nito ang kasipagan ng mga tao sa Laguna.", "This reflects the industry and hard work of Laguna people."),
          make_translation("Ano ang pangunahing produkto ng inyong sariling bayan?", "What is the primary product of your own town today?")
        ),
        "examples": [{"title": "Kalakalan", "content": "palay (pagsasaka), isda (pangingisda), mga kagamitang sining"}]
      },
      {
        "title": "Ang Kasaysayan ng Pangalan ng Lalawigan",
        "text": make_text(
          make_translation("Ang kasaysayan ng pangalan ay naglalarawan ng pook.", "The history of names describes the geographical features."),
          make_translation("Nalaman natin na ang 'Laguna' ay dahil sa lawa natin.", "We learned that 'Laguna' is named due to our large lake."),
          make_translation("Ito ay nagpapakita na ang lawa ang sentro ng buhay.", "This shows that the lake yonder is the center of life."),
          make_translation("Ang 'Calamba' ay dahil sa kalan-banga o palayok.", "The name 'Calamba' is due to the kalan-banga clay pot."),
          make_translation("Ito ay nagpapakita ng katutubong sining ng pagpapalayok.", "This shows the native art of pottery making yonder."),
          make_translation("Ang mga pangalang ito ay may malalim na kasaysayan.", "These names hold a very deep historical significance today."),
          make_translation("Dapat natin itong tandaan at ipagmalaki sa iba.", "We must remember these stories and take pride in them."),
          make_translation("Ibahagi ang kwento ng kalan-banga sa iyong pamilya!", "Share the story of the kalan-banga with your family tonight!")
        ),
        "examples": [{"title": "Pangalan ng Pook", "content": "Laguna -> Lawa, Calamba -> Kalan-Banga"}]
      },
      {
        "title": "Guided Practice: Ugnayan",
        "text": make_text(
          make_translation("Magsanay tayo sa pag-unawa ng ugnayan ng mga pook.", "Let's practice understanding the connection of places today."),
          make_translation("Suriin: 'Ang Barangay San Juan ay kabilang sa Calamba.'", "Analyze: 'Barangay San Juan belongs to Calamba City yonder.'"),
          make_translation("Ano ang ugnayan ng San Juan at Calamba sa pook?", "What is the connection between San Juan and Calamba City?"),
          make_translation("Ang Barangay San Juan ay maliit na bahagi ng lungsod.", "Barangay San Juan is a small political part of the city."),
          make_translation("Suriin: 'Ang Calamba ay kabilang sa lalawigan ng Laguna.'", "Analyze: 'Calamba City belongs to the province of Laguna.'"),
          make_translation("Ang Calamba ay lungsod na sakop ng malawak na lalawigan.", "Calamba is a city located within the wider province yonder."),
          make_translation("Ito ang tamang ugnayan ng mga yunit ng pamahalaan.", "This is the correct hierarchy of our government units."),
          make_translation("Nagawa mo bang matukoy ang sakop ng bawat isa ngayon?", "Did you successfully identify the scope of each unit today?")
        ),
        "examples": [{"title": "Hierarchy", "content": "San Juan (Barangay) -> Calamba (Lungsod) -> Laguna (Lalawigan)"}]
      },
      {
        "title": "Guided Practice: Kalan-Banga",
        "text": make_text(
          make_translation("Suriin natin ang monumento ng kalan-banga sa plaza.", "Let's analyze the kalan-banga monument in the plaza."),
          make_translation("Bakit may mga pangalan ng barangay sa palayok na ito?", "Why are there names of barangays written on this clay pot?"),
          make_translation("Ipinapakita nito na ang Calamba ay binubuo ng barangay.", "It shows that Calamba City is made up of its barangays."),
          make_translation("Ang bawat barangay ay nagkakaisa upang mabuo ang bayan.", "Each barangay unites to form the complete municipal body."),
          make_translation("Ito ay sumasagisag sa pagtutulungan ng mga mamamayan.", "This symbolizes the active cooperation of the citizens yonder."),
          make_translation("Ang pagkasira ng isa ay nakakaapekto sa buong bayan.", "The failure of one part affects the entire town's wellness."),
          make_translation("Ang ugnayang ito ay nagpapakita ng pagkakaisa natin.", "This connection shows our unity in our local community life."),
          make_translation("Iguhit ang kalan-banga na may pangalan ng barangay!", "Draw the kalan-banga pot with names of barangays on paper!")
        ),
        "examples": [{"title": "Pagsasanay Kalan-Banga", "content": "Kalan-Banga monument = simbolo ng pagkakaisa ng mga barangay."}]
      },
      {
        "title": "Guided Practice: Lawa ng Laguna",
        "text": make_text(
          make_translation("Suriin natin ang lawa ng Laguna de Bay sa mapa natin.", "Let's analyze the lake of Laguna de Bay on our map."),
          make_translation("Aling mga bayan ang nakapaligid sa malawak na lawa?", "Which municipal towns are located around the wide lake?"),
          make_translation("Mayroong Calamba, Los Baños, at marami pang iba doon.", "There is Calamba, Los Baños, and many other towns yonder."),
          make_translation("Ang lawa ay nagdugtong sa kanilang kalakalan at buhay.", "The lake connects their trade, transport, and daily lives."),
          make_translation("Ang mga mangingisda ay nagbibiyahe ng isda sa bayan.", "Fishermen transport fresh fish to the markets of these towns."),
          make_translation("Ito ay nagpapakita ng ugnayan sa likas na yaman natin.", "This shows connection based on our shared natural resources."),
          make_translation("Ang kalinisan ng lawa ay pananagutan ng bawat bayan.", "The cleanliness of the lake is the duty of every town today."),
          make_translation("Isulat ang pangalan ng lawa na ito sa inyong papel ngayon!", "Write down the name of this lake on your writing paper now!")
        ),
        "examples": [{"title": "Pagsasanay Lawa", "content": "Laguna de Bay = nagdugtong sa kalakalan ng mga bayan."}]
      },
      {
        "title": "Maling Pagtukoy sa Ugnayan",
        "text": make_text(
          make_translation("Iwasan ang pag-iisip na hiwalay ang barangay sa bayan.", "Avoid thinking that the barangay is independent of the town."),
          make_translation("Mali: 'Ang aming barangay ay may sariling bansa ngayon.'", "Wrong: 'Our barangay is its own separate nation yonder.'"),
          make_translation("Ang barangay ay kabilang sa mas malaking bayan o lungsod.", "The barangay belongs to the wider municipal town or city."),
          make_translation("Dapat sumunod ang barangay sa mga batas ng munisipyo.", "The barangay must follow the ordinances of the municipality."),
          make_translation("Tama: 'Ang aming barangay ay bahagi ng lungsod ng Calamba.'", "Correct: 'Our barangay is part of the city of Calamba.'"),
          make_translation("Ang ugnayang ito ay nagpapanatili ng kaayusan sa bansa.", "This administrative connection preserves order in our country."),
          make_translation("Tiyakin ang wastong ugnayan sa inyong mga ulat ngayon!", "Make sure of the correct connection in your history reports today!"),
          make_translation("Ito ang batayan ng tamang pamamahala sa ating bansa!", "This is the basis of proper governance in our nation today!")
        ),
        "examples": [{"title": "Ugnayan Error", "content": "mali: hiwalay na bansa -> tama: bahagi ng lungsod o bayan"}]
      },
      {
        "title": "Maling Kwento ng Kalan-Banga",
        "text": make_text(
          make_translation("Iwasan ang pag-imbento ng kwento ng kalan-banga.", "Avoid fabricating the origin story of the kalan-banga."),
          make_translation("Huwag sabihing ito ay yari sa plastik na laruan doon.", "Do not write yonder that the kalan-banga was made of plastic."),
          make_translation("Ang kalan-banga ay yari sa luwad o clay ng mga ninuno.", "The kalan-banga was a clay pot made by our early ancestors."),
          make_translation("Tiyakin ang tamang kwento ng babae at mga Kastila.", "Make sure of the correct historical legend of the soldiers."),
          make_translation("Maaari mong basahin ang opisyal na kasaysayan ng bayan.", "You can read the official history profile of Calamba City."),
          make_translation("Sila ang naglalahad ng tunay na pinagmulan ng pangalan.", "They record the authentic origin of the name in history."),
          make_translation("Ang tumpak na detalye ay nagpapakita ng pag-aaral natin.", "Accurate details show our research skills in social studies."),
          make_translation("Maging maingat at tumpak sa bawat kasaysayan ngayon!", "Be careful and accurate with every history topic today!")
        ),
        "examples": [{"title": "Kalan-Banga", "content": "kalan-banga = palayok ng luwad (clay pot), HINDI plastik."}]
      },
      {
        "title": "Ang Pagmamahal sa Ating Pook",
        "text": make_text(
          make_translation("Ang pag-alam sa ugnayan ay nagpapatibay ng pagmamahal.", "Knowing these connections strengthens our love for our place."),
          make_translation("Ipinagmamalaki natin ang ugnayan ng barangay at bayan.", "We take pride in the connection of our barangay and town."),
          make_translation("Nagtutulungan tayo upang mapanatili ang kalinisan doon.", "We help one another to preserve cleanliness in our streets."),
          make_translation("Nakikilahok tayo sa mga programa ng barangay at bayan.", "We participate in programs of both barangay and municipality."),
          make_translation("Ang mabuting mamamayan ay sumusunod sa mga batas natin.", "A good citizen obeys all local laws and national regulations."),
          make_translation("Ito ay nagbibigay ng kapayapaan sa buong lalawigan natin.", "This provides peace and harmony to our entire province yonder."),
          make_translation("Sina Jose Rizal at iba pang bayani ay nagmula rito.", "Jose Rizal and other heroes originated from this great region."),
          make_translation("Ipagpatuloy ang pagiging disiplinadong bata sa pook natin!", "Continue being a disciplined child in our local community!")
        ),
        "examples": [{"title": "Pagmamahal sa Pook", "content": "Pagkakaisa ng barangay at bayan = susi sa kaunlaran."}]
      },
      {
        "title": "Buod ng Ikaapat na Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang ugnayan ng barangay at ng bayan.", "We learned about the connection of barangay and town."),
          make_translation("Nalaman natin ang kwento ng kalan-banga sa Calamba natin.", "We discovered the legend of kalan-banga in Calamba City."),
          make_translation("Suriin natin ang monumento ng kalan-banga sa plaza natin.", "We analyzed the kalan-banga monument yonder in the plaza."),
          make_translation("Nag-aral tayo ng kasaysayan ng lawa ng Laguna de Bay.", "We studied the history of the lake of Laguna de Bay yonder."),
          make_translation("Nalaman natin ang ugnayan sa kalakalan at serbisyo doon.", "We discovered connection based on local trade and services."),
          make_translation("Handa ka na ba sa huling pagsusulit ng yunit na ito ngayon?", "Are you ready for the final quiz of this unit today?"),
          make_translation("Ipakita ang iyong galing at husay sa Makabansa ngayon!", "Show your excellence and skills in Makabansa class today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Ugnayan = Pagtutulungan. Calamba = Kalan-Banga. Laguna = Lawa."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa pinakamaliliit na yunit ng pamahalaan sa ating bansa?", "options": ["bansa", "lalawigan", "lungsod", "barangay"], "answer": 3},
      {"type": "choice", "q": "Paano nagkakaugnay ang barangay at ang bayan o lungsod?", "options": ["Ang barangay ay hiwalay na bansa.", "Ang barangay ay maliit na bahagi ng isang bayan o lungsod.", "Walang ugnayan ang dalawa.", "Ang lungsod ay sumusunod sa barangay lamang."], "answer": 1},
      {"type": "choice", "q": "Saan nagmula ang pangalan ng Lungsod ng Calamba batay sa alamat?", "options": ["sapatos", "kalan-banga o palayok ng luwad", "isang uri ng isda", "isang sikat na bundok"], "answer": 1},
      {"type": "choice", "q": "Ano ang kalan-banga na pinagmulan ng pangalan ng Calamba?", "options": ["isang kutsara", "isang palayok ng luwad para sa pagluluto", "isang laruan", "isang gintong barya"], "answer": 1},
      {"type": "choice", "q": "Saan matatagpuan ang malaking monumento ng Kalan-Banga na simbolo ng pagkakaisa?", "options": ["sa aklatan ng paaralan", "sa plaza ng Lungsod ng Calamba", "sa loob ng health center", "sa tuktok ng Bundok Makiling"], "answer": 1},
      {"type": "choice", "q": "Ano ang nakasulat sa labas ng monumento ng Kalan-Banga sa Calamba?", "options": ["mga pangalan ng mga bayani", "mga pangalan ng mga barangay ng Calamba", "mga numero ng telepono", "mga pangalan ng mga prutas"], "answer": 1},
      {"type": "choice", "q": "Sa aling lalawigan kabilang ang Lungsod ng Calamba?", "options": ["Batangas", "Laguna", "Quezon", "Cavite"], "answer": 1},
      {"type": "choice", "q": "Ano ang ibig sabihin ng pangalan ng lalawigan ng 'Laguna' sa wikang Kastila?", "options": ["ang bundok", "ang lawa (la laguna)", "ang kalsada", "ang palengke"], "answer": 1},
      {"type": "choice", "q": "Anong malawak na lawa ang nagdugtong sa kalakalan ng maraming bayan sa Laguna?", "options": ["Taal Lake", "Laguna de Bay", "Lawa ng Sampaloc", "Lawa ng Pandin"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang kasaysayan ng bawat barangay ay hindi mahalaga sa kasaysayan ng buong bayan.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Sino ang nagtutulungan upang mapanatili ang seguridad sa kalsada ng barangay at bayan?", "options": ["mga nars at doktor", "mga barangay tanod at pulis ng munisipyo", "mga tindero sa palengke", "mga guro sa eskwelahan"], "answer": 1},
      {"type": "choice", "q": "Saan dinadala ng mga mangingisda ang kanilang huling isda mula sa lawa upang ibenta?", "options": ["sa barangay hall", "sa palengke ng bayan", "sa aklatan", "sa health center"], "answer": 1},
      {"type": "choice", "q": "Ano ang ginagawa ng pamahalaan ng barangay at bayan kapag may kalamidad tulad ng bagyo?", "options": ["naglalaro sa plaza", "nagtutulungan sa pamamahagi ng relief goods", "nagsasara ng mga ospital", "nagtatago sa bahay"], "answer": 1},
      {"type": "choice", "q": "Aling monumento ang simbolo ng pinagmulan ng Lungsod ng Calamba?", "options": ["monumento ng bumbero", "Kalan-Banga monument", "monumento ng aso", "monumento ng palayok ng plastik"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa yunit na mas malaki kaysa sa lungsod o bayan sa pamamahala?", "options": ["bansa", "lalawigan", "barangay", "sitio"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang ugnayan sa pangungusap: 'Ang Barangay San Jose ay bahagi ng lungsod ng Calamba.'", "options": ["hiwalay na lungsod", "bahagi o sakop ng lungsod", "walang kinalaman", "mas malaki ang barangay"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang 'kalan-banga' ay isang palayok na gawa sa plastik na nakuha mula sa Espanya.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling likas na yaman ang nagdurugtong sa mga bayan sa Laguna para sa pangingisda?", "options": ["Bundok Makiling", "Lawa ng Laguna de Bay", "kalsadang semento", "mga pabrika"], "answer": 1},
      {"type": "choice", "q": "Sino ang namumuno sa munisipyo ng bayan o lungsod?", "options": ["Barangay Kapitan", "Mayor o Alkalde", "Pulis", "Principal"], "answer": 1},
      {"type": "choice", "q": "Ano ang pangunahing kabuhayan ng mga barangay na malapit sa lawa ng Laguna?", "options": ["pagsasaka sa bundok", "pangingisda sa lawa", "pagtatrabaho sa opisina", "paghabi ng tela"], "answer": 1},
      {"type": "choice", "q": "Ano ang ipinapakita ng mga pangalan ng barangay na nakasulat sa Kalan-Banga monument?", "options": ["mga paboritong pagkain ng Mayor", "pagkakaisa ng lahat ng barangay sa Calamba", "mga emergency numbers", "mga pangalan ng mga guro"], "answer": 1},
      {"type": "choice", "q": "Saan ipinanganak ang pambansang bayani na si Dr. Jose Rizal?", "options": ["Lungsod ng Maynila", "Lungsod ng Calamba, Laguna", "Lungsod ng Baguio", "Balayan, Batangas"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang bawat mamamayan ay may bahagi sa pag-unlad ng kanyang barangay at bayan.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang tungkulin ng munisipyo para sa kalusugan ng bayan?", "options": ["magpatakbo ng malalaking ospital at klinika", "magbenta ng gulay sa palengke", "magturo ng pagbasa", "magtapon ng basura sa ilog"], "answer": 0},
      {"type": "choice", "q": "Paano natin maipapakita ang pagmamahal sa ating barangay at bayan?", "options": ["magtapon ng basura sa kalsada", "sumunod sa mga batas at makipagtulungan sa mga programa", "makipag-away sa kapitbahay", "sirain ang mga monumento"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling pahayag ang naglalarawan ng totoong ugnayan sa pagitan ng kasaysayan ng barangay at kasaysayan ng bayan?", "options": ["Ang kasaysayan ng barangay ay walang ugnayan sa kasaysayan ng bayan.", "Ang kasaysayan ng bawat barangay ay ang mga pahina na bumubuo sa kasaysayan ng buong bayan.", "Ang kasaysayan ng bayan ay mas nauna kaysa sa kasaysayan ng mga barangay.", "Ang barangay ay walang sariling kasaysayan."], "answer": 1},
      {"type": "choice", "q": "Challenge: Bakit kalan-banga o palayok ng luwad ang napiling simbolo at pangalan ng Lungsod ng Calamba?", "options": ["Dahil ito ang paboritong lutuan ng mga Espanyol.", "Dahil ang pagpapalayok ay isang mahalagang katutubong sining at kabuhayan ng mga ninuno sa pook.", "Dahil walang ibang kagamitan sa lungsod noong araw.", "Dahil ito ay kulay pula lamang."], "answer": 1},
      {"type": "choice", "q": "Challenge: Kung ang lawa ng Laguna de Bay ay madumi at polluted, aling pook o sektor ang unang maapektuhan sa kalakalan?", "options": ["mga guro sa paaralan", "mga mangingisda at palengke na nagbebenta ng isda mula sa lawa", "mga factory workers sa munisipyo", "mga bumbero"], "answer": 1},
      {"type": "choice", "q": "Challenge: Aling pagkakaayos ng mga yunit ng pamahalaan ang nagpapakita ng tamang sakop mula sa pinakamalaki hanggang sa pinakamaliit?", "options": ["Bansa -> Lalawigan -> Bayan/Lungsod -> Barangay", "Barangay -> Bayan/Lungsod -> Lalawigan -> Bansa", "Lalawigan -> Bansa -> Barangay -> Bayan/Lungsod", "Bayan/Lungsod -> Barangay -> Lalawigan -> Bansa"], "answer": 0},
      {"type": "choice", "q": "Challenge: Paano nakatutulong ang Kalan-Banga monument sa plaza upang paalalahanan ang mga mamamayan tungkol sa kasaysayan ng pook?", "options": ["Nagsisilbi itong palamuti na walang kwento.", "Nagsisilbi itong pisikal na primary source (monumento) na nagpapaalala sa alamat ng pangalan ng lungsod at pagkakaisa ng mga barangay.", "Nagpapakita ito ng presyo ng mga palayok sa palengke.", "Wala itong kinalaman sa kasaysayan ng mga tao."], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Ang Alamat ng Kalan-Banga",
      "desc": "Kausapin ang iyong magulang tungkol sa alamat ng kalan-banga ng Lungsod ng Calamba. Ikuwento ito sa kanila gamit ang iyong sariling pananalita. Iguhit ang kalan-banga (palayok ng luwad) sa isang malinis na papel at isulat sa ibaba ang tatlong barangay na alam mo sa Calamba. Ipaliwanag ang kahalagahan ng pagkakaisa ng mga barangay sa iyong pamilya.",
      "labels": ["Maayos na naiguhit ang kalan-banga (clay pot) sa papel", "Wastong naikuwento ang alamat ng kalan-banga sa magulang", "Wastong naisulat ang tatlong barangay ng Calamba na may malaking titik"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Sakop at Ugnayan ng mga Pook</h3>
                  <p class="ws-instruction">Isulat kung ang sumusunod na yunit ay <strong>Barangay</strong>, <strong>Bayan/Lungsod</strong>, o <strong>Lalawigan</strong> batay sa sakop nito.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Laguna <span class="fil-sentence" data-translation="(Laguna)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Lalawigan</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Barangay San Jose <span class="fil-sentence" data-translation="(Barangay San Jose)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Barangay</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Lungsod ng Calamba <span class="fil-sentence" data-translation="(Calamba City)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Bayan/Lungsod</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Alamat ng Pangalan ng Pook</h3>
                  <p class="ws-instruction">Match ang pook sa katapat nitong kwento ng pinagmulan ng pangalan sa pamamagitan ng pagsulat ng titik.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0;">
                      <div><strong>Pangalan ng Pook:</strong></div>
                      <div>1. Calamba <span class="fil-sentence" data-translation="(Calamba)"></span></div>
                      <div>2. Laguna <span class="fil-sentence" data-translation="(Laguna)"></span></div>
                      <div>3. Kawayanan <span class="fil-sentence" data-translation="(Kawayanan)"></span></div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0; text-align: right; padding-right: 40px;">
                      <div><strong>Kwento ng Pinagmulan:</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; A. Nagmula sa lawa (la laguna).</div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; B. Nagmula sa kalan-banga (clay pot).</div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; C. Nagmula sa maraming puno ng kawayan.</div>
                    </div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsusuri ng Kalan-Banga Monumento</h3>
                  <p class="ws-instruction">Sagutin ang tanong gamit ang tumpak na detalye batay sa napag-aralan.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Ano ang mahalagang kahulugan ng Kalan-Banga monumento sa plaza ng Calamba? <span class="fil-sentence" data-translation="(What is the important meaning of the Kalan-Banga monument in Calamba plaza?)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Sinasagisag nito ang alamat ng lungsod at ang pagkakaisa ng lahat ng barangay.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Ipinapakita nito na ang bawat barangay ay nagtutulungan para sa kaunlaran ng bayan.</span></div>
                  </div>
                </div>"""
      ]
    }
  }
}
