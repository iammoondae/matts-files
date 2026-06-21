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
# FILIPINO DATA (WEEKS 1-4)
# =========================================================================
FILIPINO_DATA = {
  1: {
    "color": "#ec4899",
    "icon": "🗣️",
    "title": "Filipino",
    "subtitle": "Week 1: Pangngalang Pantangi at Pambalana sa Pook",
    "slides": [
      {
        "title": "Maligayang Pagdating sa Filipino!",
        "text": make_text(
          make_translation("Kumusta, mag-aaral sa Grade Three! Maligayang pagdating!", "Hello, Grade Three student! Welcome!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa mga pangngalan.", "This week, we will study about nouns."),
          make_translation("Ang pangngalan ay ngalan ng tao, bagay, o pook.", "A noun is a name of a person, thing, or place."),
          make_translation("Gagamit tayo ng mga halimbawa sa ating sariling komunidad.", "We will use examples from our own community."),
          make_translation("Pag-aaralan natin ang pangngalang pantangi at pambalana sa pook.", "We will study proper and common nouns of places."),
          make_translation("Malaki ang maitutulong nito sa paglalarawan ng paligid.", "This will help greatly in describing our surroundings."),
          make_translation("Handa ka na bang sumulat at magbasa kasama ko ngayon?", "Are you ready to write and read with me today?"),
          make_translation("Simulan natin ang masayang paglalakbay sa ating wika!", "Let's start the happy journey in our language!")
        ),
        "examples": [{"title": "Layunin ng Linggo", "content": "Matukoy ang pangngalang pantangi at pambalana sa mga pook sa komunidad."}]
      },
      {
        "title": "Ano ang Pangngalan?",
        "text": make_text(
          make_translation("Ang pangngalan ay tawag sa ngalan ng mga bagay.", "A noun is a word used to name things in the world."),
          make_translation("Kasama rito ang tao, hayop, pook, at mga pangyayari.", "This includes people, animals, places, and events."),
          make_translation("Sa paligid natin, may mga iba't ibang uri ng pook.", "Around us, there are different types of places."),
          make_translation("Mayroon tayong tahanan, paaralan, simbahan, at palengke.", "We have homes, schools, churches, and markets."),
          make_translation("Ang bawat pook na ito ay may kani-kanilang pangalan.", "Each of these places has its own name."),
          make_translation("May pangkalahatang tawag at may tiyak ding tawag.", "There is a general name and there is a specific name."),
          make_translation("Ito ang dalawang pangunahing uri ng pangngalan sa wika.", "These are the two main types of nouns in language."),
          make_translation("Alamin natin kung paano sila nagkakaiba sa pagsulat!", "Let's find out how they differ in writing!")
        ),
        "examples": [{"title": "Halimbawa ng Pook", "content": "paaralan (school), barangay (village), parke (park)"}]
      },
      {
        "title": "Pangngalang Pambalana",
        "text": make_text(
          make_translation("Ang pambalana ay pangkalahatang ngalan ng pook.", "A common noun is a general name of a place."),
          make_translation("Ito ay hindi tiyak at tumutukoy sa pangkalahatan.", "It is not specific and refers to general categories."),
          make_translation("Nagsisimula ito sa maliit na titik kapag isinusulat.", "It starts with a lowercase letter when written."),
          make_translation("Halimbawa: lungsod, lalawigan, ospital, at ilog.", "Examples: city, province, hospital, and river."),
          make_translation("Kapag sinabi nating 'ilog', hindi natin alam kung alin.", "When we say 'river', we do not know which one."),
          make_translation("Maraming ilog sa Pilipinas na maaari nating puntahan.", "There are many rivers in the Philippines we can go to."),
          make_translation("Kaya ang salitang 'ilog' ay pangkalahatang pambalana.", "So the word 'river' is a general common noun."),
          make_translation("Maaari mo bang hulaan ang iba pang halimbawa?", "Can you guess other examples of common nouns?")
        ),
        "examples": [{"title": "Pambalana", "content": "ospital (hospital), bundok (mountain), aklatan (library)"}]
      },
      {
        "title": "Pangngalang Pantangi",
        "text": make_text(
          make_translation("Ang pantangi ay tiyak na ngalan ng isang pook.", "A proper noun is a specific name of a place."),
          make_translation("Ito ay tumutukoy sa isang tanging lugar lamang.", "It refers to one unique and specific place only."),
          make_translation("Lagi itong nagsisimula sa malaking titik sa pagsulat.", "It always starts with a capital letter in writing."),
          make_translation("Halimbawa: Maynila, Laguna, Barangay San Jose, Ilog Pasig.", "Examples: Manila, Laguna, Barangay San Jose, Pasig River."),
          make_translation("Kapag sinabi nating 'Maynila', tiyak na lungsod ito.", "When we say 'Manila', it is a specific city."),
          make_translation("Ito ang tanging pangalan ng kabisera ng bansa natin.", "This is the unique name of our nation's capital."),
          make_translation("Kaya ito ay isinusulat gamit ang malaking titik.", "Therefore it is written using a capital letter."),
          make_translation("Tandaan ang panuntunang ito sa bawat pagsusulat!", "Remember this rule in every writing activity!")
        ),
        "examples": [{"title": "Pantangi", "content": "Ilog Pasig (Pasig River), Mt. Makiling, Lungsod ng Calamba"}]
      },
      {
        "title": "Pagkukumpara sa Pagsulat",
        "text": make_text(
          make_translation("Pagkumparahin natin ang dalawang uri ng pangngalan.", "Let's compare the two types of nouns side by side."),
          make_translation("Ang pambalana ay 'bansa', ang pantangi ay 'Pilipinas'.", "The common noun is 'country', the proper is 'Philippines'."),
          make_translation("Ang pambalana ay 'lalawigan', ang pantangi ay 'Laguna'.", "The common noun is 'province', the proper is 'Laguna'."),
          make_translation("Ang pambalana ay 'paaralan', ang pantangi ay 'Paaralang Calamba'.", "The common noun is 'school', the proper is 'Calamba School'."),
          make_translation("Napansin mo ba ang paggamit ng malaking titik?", "Did you notice the use of the capital letter?"),
          make_translation("Ang pantangi ay may sariling pagkakakilanlan sa wika.", "Proper nouns have their own identity in language."),
          make_translation("Ang pambalana ay nananatiling pangkalahatan ang anyo.", "Common nouns remain general in their written form."),
          make_translation("Sanayin ang mata sa pagkilala sa dalawang ito!", "Train your eyes to recognize these two forms!")
        ),
        "examples": [
          {"title": "Pambalana vs Pantangi", "content": "bayan (town) vs. Bayan ng Los Baños"},
          {"title": "Tandaan", "content": "Pantangi = Malaking titik (Capital letter)"}
        ]
      },
      {
        "title": "Ang Tahanan at Komunidad",
        "text": make_text(
          make_translation("Ang ating tahanan ay isang mahalagang pook sa atin.", "Our home is an important place for all of us."),
          make_translation("Ang pambalana para rito ay 'tahanan' o 'bahay'.", "The common noun for it is 'home' or 'house'."),
          make_translation("Ang pantangi naman ay ang iyong sariling address ngayon.", "The proper noun is your own specific address today."),
          make_translation("Halimbawa: '123 Kalye Rizal' ay isang pangngalang pantangi.", "Example: '123 Rizal Street' is a proper noun."),
          make_translation("Sa labas ng bahay, makikita natin ang barangay hall.", "Outside the house, we can see the barangay hall."),
          make_translation("Ang 'barangay hall' ay pambalana sa ating wika.", "The term 'barangay hall' is a common noun in our language."),
          make_translation("Ngunit ang 'Barangay San Juan Hall' ay pantangi na.", "But 'Barangay San Juan Hall' is a proper noun already."),
          make_translation("Masdan ang iyong paligid at maglista ng pook!", "Look at your surroundings and list down places!")
        ),
        "examples": [{"title": "Komunidad", "content": "tahanan (common) -> 45 Kalye Mabini (proper)"}]
      },
      {
        "title": "Ang Paaralan sa Pagsusuri",
        "text": make_text(
          make_translation("Ang paaralan ay pook kung saan tayo nag-aaral.", "The school is a place where we study together."),
          make_translation("Ang 'paaralan' ay pangkalahatang pangngalang pambalana.", "The word 'school' is a general common noun."),
          make_translation("Mayroon tayong iba't ibang silid sa loob nito.", "We have different rooms inside the school building."),
          make_translation("May silid-aralan, aklatan, opisina, at palikuran.", "There is the classroom, library, office, and restroom."),
          make_translation("Ang lahat ng silid na ito ay pambalana sa wika.", "All of these rooms are common nouns in language."),
          make_translation("Ngunit ang pangalan ng iyong eskwelahan ay pantangi.", "But the specific name of your school is a proper noun."),
          make_translation("Halimbawa: 'Paaralang Elementarya ng Calamba' ay pantangi.", "Example: 'Calamba Elementary School' is proper."),
          make_translation("Lagi itong isulat gamit ang malalaking titik!", "Always write it using capital letters!")
        ),
        "examples": [{"title": "Paaralan", "content": "aklatan (library - pambalana), Paaralang San Jose (proper)"}]
      },
      {
        "title": "Mga Lugar ng Pagsamba",
        "text": make_text(
          make_translation("Ang simbahan ay pook para sa ating pananalangin.", "The church is a place for our quiet prayers."),
          make_translation("Ang 'simbahan' ay pangkalahatang pambalana na salita.", "The word 'church' is a general common noun."),
          make_translation("May iba't ibang simbahan at kapilya sa komunidad.", "There are different churches and chapels in the community."),
          make_translation("Halimbawa: 'Katedral ng San Pablo' ay isang pantangi.", "Example: 'San Pablo Cathedral' is a proper noun."),
          make_translation("Ito ay tiyak na ngalan ng isang katedral sa Laguna.", "It is the specific name of a cathedral in Laguna."),
          make_translation("Mayroon ding 'Moske ng Quiapo' sa Lungsod ng Maynila.", "There is also the 'Quiapo Mosque' in the City of Manila."),
          make_translation("Ang mga tiyak na ngalan ng moske ay pantangi rin.", "The specific names of mosques are also proper nouns."),
          make_translation("Tandaan na igalang ang lahat ng pook ng pagsamba!", "Remember to respect all places of worship!")
        ),
        "examples": [{"title": "Simbahan", "content": "kapilya (chapel - pambalana), Simbahan ng Quiapo (proper)"}]
      },
      {
        "title": "Mga Pook ng Kalusugan",
        "text": make_text(
          make_translation("Ang ospital ay pook na nag-aalaga sa may-sakit.", "The hospital is a place that cares for sick people."),
          make_translation("Ang 'ospital' at 'health center' ay mga pambalana.", "The words 'hospital' and 'health center' are common nouns."),
          make_translation("Ginagamit natin ang mga ito sa pangkalahatang usapan.", "We use them in general everyday conversations."),
          make_translation("Ngunit ang tiyak na ngalan ng klinika ay pantangi.", "But the specific name of a clinic is a proper noun."),
          make_translation("Halimbawa: 'Ospital ng Laguna' ay tiyak na ngalan.", "Example: 'Laguna Hospital' is a specific name."),
          make_translation("Dapat itong isulat na malaki ang titik O at L.", "It must be written with capital letters O and L."),
          make_translation("Ang 'klinika ni Dr. Santos' ay pantangi rin sa wika.", "The 'clinic of Dr. Santos' is also a proper noun."),
          make_translation("Bakit mahalagang malaman ang ngalan ng ospital?", "Why is it important to know the hospital name?")
        ),
        "examples": [{"title": "Kalusugan", "content": "klinika (clinic - pambalana), Ospital ng Maynila (proper)"}]
      },
      {
        "title": "Mga Likas na Pook",
        "text": make_text(
          make_translation("Ang kalikasan ay puno ng magagandang likas na pook.", "Nature is full of beautiful natural places."),
          make_translation("Halimbawa: bundok, burol, ilog, dagat, at talon.", "Examples: mountain, hill, river, sea, and waterfall."),
          make_translation("Ang mga salitang ito ay mga pambalana sa Filipino.", "These words are common nouns in Filipino."),
          make_translation("Kapag binigyan natin ng tiyak na ngalan, ito ay pantangi.", "When we give a specific name, it becomes proper."),
          make_translation("Halimbawa: Bundok Makiling, Bulkang Taal, Ilog Pasig.", "Examples: Mount Makiling, Taal Volcano, Pasig River."),
          make_translation("Isinusulat ang mga ito gamit ang malaking titik.", "These are written using capital letters."),
          make_translation("Ang Bundok Makiling ay isang kilalang bundok sa Laguna.", "Mount Makiling is a famous mountain in Laguna."),
          make_translation("Suriin ang mga likas na pook sa inyong probinsya!", "Examine the natural places in your province!")
        ),
        "examples": [{"title": "Likas na Pook", "content": "bundok (mountain - pambalana) -> Bundok Banahaw (proper)"}]
      },
      {
        "title": "Mga Makasaysayang Pook",
        "text": make_text(
          make_translation("May mga pook na may malaking bahagi sa kasaysayan.", "There are places that play a big part in history."),
          make_translation("Ang 'makasaysayang pook' ay isang pangngalang pambalana.", "The term 'historical place' is a common noun."),
          make_translation("Ngunit ang tiyak na monumento ay pantangi sa wika.", "But the specific monument is proper in language."),
          make_translation("Halimbawa: 'Rizal Park' sa Maynila ay isang pantangi.", "Example: 'Rizal Park' in Manila is a proper noun."),
          make_translation("Ang 'Bahay ni Rizal sa Calamba' ay pantangi rin.", "The 'Rizal House in Calamba' is also proper."),
          make_translation("Dito ipinanganak ang ating pambansang bayani.", "This is where our national hero was born."),
          make_translation("Isinusulat natin ang mga ito na may malaking titik.", "We write these historical names with capital letters."),
          make_translation("Bisitahin natin ang mga pook na ito upang matuto!", "Let's visit these places in order to learn!")
        ),
        "examples": [{"title": "Kasaysayan", "content": "monumento (monument - pambalana), Fort Santiago (proper)"}]
      },
      {
        "title": "Mga Lugar ng Pamimili",
        "text": make_text(
          make_translation("Ang palengke ay pook kung saan tayo namimili.", "The market is a place where we buy our food."),
          make_translation("Ang 'palengke' at 'tindahan' ay mga pambalana.", "The words 'market' and 'store' are common nouns."),
          make_translation("Maraming tindahan sa ating sariling barangay.", "There are many stores in our own barangay."),
          make_translation("Ngunit ang tiyak na ngalan ng mall ay pantangi.", "But the specific name of a mall is proper."),
          make_translation("Halimbawa: 'SM City Calamba' ay isang pantangi.", "Example: 'SM City Calamba' is a proper noun."),
          make_translation("Ang 'Tindahan ni Aling Maria' ay pantangi rin.", "The 'Store of Aling Maria' is also proper."),
          make_translation("Isinusulat ang mga ito nang may malaking titik.", "These names are written with capital letters."),
          make_translation("Saan kayo madalas mamili ng inyong pagkain?", "Where do you usually buy your family food?")
        ),
        "examples": [{"title": "Pamimili", "content": "tindahan (store - pambalana), Rustan's Supermarket (proper)"}]
      },
      {
        "title": "Mga Lugar ng Libangan",
        "text": make_text(
          make_translation("Ang parke ay magandang pook para sa paglalaro.", "The park is a beautiful place for playing."),
          make_translation("Ang 'parke' at 'laruan' ay mga pambalana sa wika.", "The words 'park' and 'playground' are common nouns."),
          make_translation("Dito tayo tumatakbo at nakikipaglaro sa mga kaibigan.", "Here we run around and play with our friends."),
          make_translation("Kung ang parke ay may tiyak na pangalan, ito ay pantangi.", "If the park has a specific name, it is proper."),
          make_translation("Halimbawa: 'Laguna Plaza' ay isang pangngalang pantangi.", "Example: 'Laguna Plaza' is a proper noun."),
          make_translation("Maging ang 'Enchanted Kingdom' ay pantangi rin.", "Even 'Enchanted Kingdom' is a proper noun."),
          make_translation("Lagi nating tandaan ang wastong pagsulat nito.", "Let's always remember the correct way to write it."),
          make_translation("Gumamit ng malaking titik sa simula ng bawat salita!", "Use a capital letter at the start of each word!")
        ),
        "examples": [{"title": "Libangan", "content": "parke (park - pambalana), Luneta Park (proper)"}]
      },
      {
        "title": "Pagsusuri sa Pangungusap",
        "text": make_text(
          make_translation("Suriin natin ang mga pook sa pangungusap.", "Let's analyze the place nouns in sentences."),
          make_translation("Pahayag: 'Pumunta kami sa isang malaking paaralan.'", "Statement: 'We went to a big school.'"),
          make_translation("Ang pook dito ay 'paaralan' na isang pambalana.", "The place here is 'school' which is a common noun."),
          make_translation("Isa pang pahayag: 'Kami ay nag-aaral sa Calamba.'", "Another statement: 'We are studying in Calamba.'"),
          make_translation("Ang pook dito ay 'Calamba' na isang pantangi.", "The place here is 'Calamba' which is a proper noun."),
          make_translation("Ito ay tiyak na ngalan ng lungsod sa Laguna.", "It is the specific name of a city in Laguna."),
          make_translation("Kaya nagsisimula ito sa malaking titik na C.", "So it starts with the capital letter C."),
          make_translation("Madali lang bang matukoy ang mga pook na ito?", "Is it easy to identify these places in sentences?")
        ),
        "examples": [{"title": "Pagsusuri", "content": "paaralan (common noun) vs. Calamba (proper noun)"}]
      },
      {
        "title": "Panuntunan sa Malaking Titik",
        "text": make_text(
          make_translation("Bakit mahalaga ang malaking titik sa pantangi?", "Why is the capital letter important for proper nouns?"),
          make_translation("Ito ay nagpapakita ng tiyak na ngalan ng pook.", "It indicates the specific and unique name of a place."),
          make_translation("Kung isusulat natin ang 'pilipinas', ito ay mali.", "If we write 'pilipinas' in lowercase, it is wrong."),
          make_translation("Dapat itong isulat na 'Pilipinas' na may malaking P.", "It must be written as 'Pilipinas' with a capital P."),
          make_translation("Gayundin sa 'ilog pasig', dapat ay 'Ilog Pasig'.", "Likewise for 'ilog pasig', it must be 'Ilog Pasig'."),
          make_translation("Malaki ang titik I at malaki rin ang titik P.", "Capital letter I and capital letter P are both required."),
          make_translation("Ito ang wastong bantas at baybay sa ating wika.", "This is the correct spelling and grammar in our language."),
          make_translation("Sanayin ang sarili sa pagsulat nito araw-araw!", "Practice writing this correctly every single day!")
        ),
        "examples": [{"title": "Wastong Pagsulat", "content": "mali: ilog pasig -> tama: Ilog Pasig"}]
      },
      {
        "title": "Pambalana sa Ating Paligid",
        "text": make_text(
          make_translation("Tumingin ka sa labas ng inyong bintana ngayon.", "Look outside your window right now."),
          make_translation("Ano-anong mga pangkalahatang pook ang iyong nakikita?", "What general places can you observe out there?"),
          make_translation("Maaaring may kalsada, bukid, ilog, o kabahayan.", "Maybe there is a road, field, river, or houses."),
          make_translation("Ang mga salitang ito ay mga pangkalahatang pook.", "These words represent general types of places."),
          make_translation("Kaya sila ay mga pangngalang pambalana sa wika.", "So they are common nouns in our language."),
          make_translation("Isulat ang mga ito gamit ang maliit na titik lamang.", "Write them using lowercase letters only."),
          make_translation("Hindi natin kailangang lakihan ang simula ng salita.", "We do not need to capitalize the start of the word."),
          make_translation("Ito ay isang pangunahing tuntunin sa ating balarila!", "This is a basic rule in our grammar lessons!")
        ),
        "examples": [{"title": "Pambalana", "content": "kalsada (road), bukid (field), bundok (mountain)"}]
      },
      {
        "title": "Mga Bayani at Kanilang Pook",
        "text": make_text(
          make_translation("Maraming pook ang ipinangalan sa mga bayani natin.", "Many places are named after our national heroes."),
          make_translation("Halimbawa: 'Kalye Rizal' o 'Bayan ng Bonifacio'.", "Examples: 'Rizal Street' or 'Town of Bonifacio'."),
          make_translation("Ang mga pook na ito ay mga pangngalang pantangi.", "These historical places are proper nouns."),
          make_translation("Kailangan ang malaking titik dahil may tiyak na ngalan.", "A capital letter is needed due to the specific name."),
          make_translation("Si Dr. Jose Rizal ay ipinanganak sa Calamba, Laguna.", "Dr. Jose Rizal was born in Calamba, Laguna."),
          make_translation("Ang 'Calamba' at 'Laguna' ay parehong pantangi.", "Both 'Calamba' and 'Laguna' are proper nouns."),
          make_translation("Sila ay nagsisimula sa malalaking titik na C at L.", "They start with the capital letters C and L."),
          make_translation("Ito ay nagpapakita ng paggalang sa mga pook na ito!", "This shows respect to these important places!")
        ),
        "examples": [{"title": "Bayani at Pook", "content": "Rizal (bayani) -> Kalye Rizal (proper noun of place)"}]
      },
      {
        "title": "Pagsasanay: Paghahanap ng Pook",
        "text": make_text(
          make_translation("Maglaro tayo ng paghahanap ng mga pook ngayon.", "Let's play a game of finding places today."),
          make_translation("Basahin: 'Pumunta si Matteo sa malaking palengke.'", "Read: 'Matteo went to the big market.'"),
          make_translation("Saan pumunta si Matteo sa ating pangungusap?", "Where did Matteo go in our sentence?"),
          make_translation("Pumunta siya sa 'palengke' na isang pangkalahatang pook.", "He went to the 'market' which is a general place."),
          make_translation("Ang salitang 'palengke' ay pangngalang pambalana.", "The word 'market' is a common noun of place."),
          make_translation("Isinusulat ito gamit ang maliit na titik p.", "It is written using a lowercase letter p."),
          make_translation("Subukan mong maghanap ng pook sa iba pang kwento!", "Try to find other places in different stories!"),
          make_translation("Ito ay isang mahusay na paraan ng pagsasanay!", "This is a great way to practice your skills!")
        ),
        "examples": [{"title": "Pagsasanay", "content": "palengke (common noun - place)"}]
      },
      {
        "title": "Pagsasanay: Tiyak na Pook",
        "text": make_text(
          make_translation("Basahin natin ang isa pang pangungusap sa wika.", "Let's read another sentence in our language."),
          make_translation("Pahayag: 'Sila ay nagbakasyon sa Lungsod ng Baguio.'", "Statement: 'They went on vacation to Baguio City.'"),
          make_translation("Ano ang tiyak na pook na binanggit sa pahayag?", "What is the specific place mentioned in the statement?"),
          make_translation("Ang tiyak na pook ay 'Lungsod ng Baguio' sa Luzon.", "The specific place is 'Baguio City' in Luzon."),
          make_translation("Ito ay isang pangngalang pantangi sa ating wika.", "This is a proper noun in our language."),
          make_translation("Nagsisimula ito sa malaking titik L at malaking B.", "It starts with a capital letter L and capital B."),
          make_translation("Ito ay nagpapakita ng tiyak na ngalan ng lungsod.", "This shows the specific name of the city."),
          make_translation("Maaari mo ba itong isulat sa iyong papel ngayon?", "Can you write it down on your paper right now?")
        ),
        "examples": [{"title": "Pagsasanay", "content": "Lungsod ng Baguio (proper noun - place)"}]
      },
      {
        "title": "Pagsasanay: Tama o Mali?",
        "text": make_text(
          make_translation("Suriin natin ang pagsulat ng mga sumusunod na pook.", "Let's check the spelling of the following places."),
          make_translation("Pahayag: 'Nakatira siya sa barangay san Juan.'", "Statement: 'He lives in barangay san Juan.'"),
          make_translation("Mayroon bang pagkakamali sa pagsulat ng pook na ito?", "Is there a mistake in writing this place name?"),
          make_translation("Oo, ang 'barangay san Juan' ay dapat maging pantangi.", "Yes, 'barangay san Juan' should be a proper noun."),
          make_translation("Dapat itong isulat na 'Barangay San Juan' na malaki.", "It must be written as 'Barangay San Juan' with capitals."),
          make_translation("Malaki ang titik B, malaki ang S, at malaki ang J.", "Capital B, capital S, and capital J are all needed."),
          make_translation("Ito ang tamang paraan ng pagsulat ng ating barangay.", "This is the correct way to write our barangay name."),
          make_translation("Palaging maging maingat sa malalaking titik sa pagsulat!", "Always be careful with capital letters in your writing!")
        ),
        "examples": [{"title": "Pagsasanay", "content": "mali: barangay san juan -> tama: Barangay San Juan"}]
      },
      {
        "title": "Maling Paggamit ng Titik",
        "text": make_text(
          make_translation("Iwasan ang pagsusulat ng pambalana sa malaking titik.", "Avoid writing common nouns with capital letters."),
          make_translation("Mali: 'Pumunta kami sa isang Ospital.'", "Wrong: 'We went to a Hospital.' (common noun capitalized)"),
          make_translation("Ang 'ospital' ay pambalana lamang sa pangungusap.", "The word 'hospital' is just a common noun here."),
          make_translation("Kaya dapat itong isulat sa maliit na titik o.", "So it should be written with a lowercase letter o."),
          make_translation("Tama: 'Pumunta kami sa isang ospital.'", "Correct: 'We went to a hospital.' (lowercase o)"),
          make_translation("Huwag lakihan ang titik kung hindi ito tiyak.", "Do not capitalize the letter if it is not specific."),
          make_translation("Ito ay isang karaniwang pagkakamali ng mga bata.", "This is a common mistake made by young learners."),
          make_translation("Tiyakin na tama ang iyong mga titik sa pagsulat ngayon!", "Make sure your letters are correct in your writing now!")
        ),
        "examples": [{"title": "Maling Titik", "content": "mali: Ospital -> tama: ospital"}]
      },
      {
        "title": "Pagkilala sa mga Kategorya",
        "text": make_text(
          make_translation("Huwag ipagpalit ang tao o bagay sa pook.", "Do not confuse people or things with places."),
          make_translation("Ang 'guro' ay tao; ang 'paaralan' ay pook.", "The 'teacher' is a person; the 'school' is a place."),
          make_translation("Ang 'aklat' ay bagay; ang 'aklatan' ay pook.", "The 'book' is a thing; the 'library' is a place."),
          make_translation("Ang 'doktor' ay tao; ang 'ospital' ay pook.", "The 'doctor' is a person; the 'hospital' is a place."),
          make_translation("Suriin nang mabuti kung ano ang tinutukoy ng salita.", "Analyze carefully what the word is referring to."),
          make_translation("Ito ba ay isang lugar o kagamitan o tao?", "Is it a location, or an object, or a person?"),
          make_translation("Ang pag-uri sa kategorya ay mahalagang kasanayan.", "Classifying into categories is an important skill."),
          make_translation("Makatutulong ito sa pag-unawa ng kahulugan ng salita!", "This will help in understanding the meaning of words!")
        ),
        "examples": [{"title": "Kategorya", "content": "aklat (bagay) vs. aklatan (pook - place)"}]
      },
      {
        "title": "Bakit Mahalaga ang Pook?",
        "text": make_text(
          make_translation("Ang mga pook ay nagbibigay ng setting sa kwento.", "Places provide the setting for our stories."),
          make_translation("Dito nagaganap ang lahat ng mahahalagang pangyayari.", "This is where all important events take place."),
          make_translation("Sa pagsulat ng kwento, kailangan natin ang pook.", "In writing stories, we need to specify the place."),
          make_translation("Ang pagtukoy sa pook ay nagbibigay-linaw sa mambabasa.", "Specifying the place gives clarity to the reader."),
          make_translation("Maaari nating gamitin ang pambalana o pantangi.", "We can use either common or proper nouns."),
          make_translation("Depende ito kung nais nating maging tiyak o hindi.", "This depends on whether we want to be specific or not."),
          make_translation("Gamitin ang iyong kaalaman upang sumulat ng kwento!", "Use your knowledge to write a short story!"),
          make_translation("Ibahagi ito sa iyong guro at mga kamag-aral ngayon!", "Share it with your teacher and classmates today!")
        ),
        "examples": [{"title": "Kahalagahan", "content": "Ang pook ay sumasagot sa tanong na: Saan? (Where?)"}]
      },
      {
        "title": "Gabay sa Pagsusulat ng Pook",
        "text": make_text(
          make_translation("Narito ang mabilis na gabay sa pagsusulat ng pook.", "Here is a quick guide to writing places correctly."),
          make_translation("Una, alamin kung ito ay pambalana o pantangi.", "First, determine if it is common or proper."),
          make_translation("Pangalawa, kung ito ay pantangi, lakihan ang titik.", "Second, if it is proper, capitalize the first letter."),
          make_translation("Pangatlo, kung pambalana, gamitin ang maliit na titik.", "Third, if common, use lowercase first letters."),
          make_translation("Pang-apat, tiyakin ang tamang baybay ng mga salita.", "Fourth, make sure of the correct spelling of words."),
          make_translation("Halimbawa: 'Lungsod ng San Pablo' ay may malaking L at S.", "Example: 'Lungsod ng San Pablo' has capital L and S."),
          make_translation("Ang salitang 'ng' ay nananatiling maliit ang titik.", "The connecting word 'ng' remains in lowercase."),
          make_translation("Sundan ang gabay na ito sa iyong mga pagsasanay ngayon!", "Follow this guide in your practice exercises today!")
        ),
        "examples": [{"title": "Gabay", "content": "Pantangi -> Malaking titik. Pambalana -> Maliit na titik."}]
      },
      {
        "title": "Buod ng Unang Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang mga slide sa Week 1.", "Congratulations! You completed the slides for Week 1."),
          make_translation("Natutunan natin ang mga pangngalang pambalana sa pook.", "We learned about common nouns of places."),
          make_translation("Natutunan din natin ang pangngalang pantangi sa pook.", "We also learned about proper nouns of places."),
          make_translation("Nalaman natin ang wastong paggamit ng malaking titik.", "We discovered the correct use of capital letters."),
          make_translation("Ginamit natin ang mga halimbawa sa ating komunidad.", "We used examples from our local community."),
          make_translation("Handa ka na bang subukan ang pagsusulit at hamon?", "Are you ready to try the quiz and challenges?"),
          make_translation("Ipakita ang iyong galing sa pagtukoy ng mga pook!", "Show your skill in identifying these places!"),
          make_translation("Ipagpatuloy ang pag-aaral ng wikang Filipino!", "Continue studying the Filipino language!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pook = Lugar. Pantangi = Tiyak. Pambalana = Karaniwan."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Alin sa mga sumusunod ang pangngalang pambalana sa pook?", "options": ["ospital", "Laguna", "Ilog Pasig", "Rizal Park"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pangngalang pantangi sa pook?", "options": ["paaralan", "simbahan", "Lungsod ng Calamba", "palengke"], "answer": 2},
      {"type": "choice", "q": "Paano isinusulat ang pangngalang pantangi sa pook?", "options": ["Nagsisimula sa maliit na titik", "Nagsisimula sa malaking titik", "Lahat ay malalaking titik", "Lahat ay maliliit na titik"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pook sa pangungusap: 'Pumunta si Matteo sa parke.'", "options": ["Matteo", "Pumunta", "parke", "sa"], "answer": 2},
      {"type": "choice", "q": "Alin ang may wastong pagsulat ng pangngalang pantangi ng barangay?", "options": ["barangay san jose", "Barangay san jose", "Barangay San Jose", "barangay San Jose"], "answer": 2},
      {"type": "choice", "q": "Ano ang pambalana ng 'Ilog Pasig'?", "options": ["bundok", "ilog", "dagat", "lawa"], "answer": 1},
      {"type": "choice", "q": "Ano ang pantangi ng 'bansa'?", "options": ["lalawigan", "lungsod", "Pilipinas", "barangay"], "answer": 2},
      {"type": "choice", "q": "Tukuyin ang pangngalang pambalana sa pook: 'Ang silid-aralan ay malinis.'", "options": ["silid-aralan", "malinis", "Ang", "ay"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang HINDI pook?", "options": ["aklatan", "palikuran", "guro", "palengke"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang salitang 'lalawigan' ay isang pangngalang pantangi.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin ang wastong baybay ng tiyak na ngalan ng sikat na bundok sa Laguna?", "options": ["bundok makiling", "Bundok makiling", "Bundok Makiling", "bundok Makiling"], "answer": 2},
      {"type": "choice", "q": "Tukuyin ang pantangi sa pook sa pangungusap: 'Nakatira ang aking lola sa Laguna.'", "options": ["Nakatira", "lola", "Laguna", "aking"], "answer": 2},
      {"type": "choice", "q": "Ano ang pambalana ng 'SM City Calamba'?", "options": ["tahanan", "paaralan", "mall", "simbahan"], "answer": 2},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook na ginagamit para sa pag-aalaga ng may-sakit?", "options": ["palengke", "ospital", "simbahan", "parke"], "answer": 1},
      {"type": "choice", "q": "Ano ang pantangi ng 'lalawigan'?", "options": ["bansa", "Cavite", "lungsod", "bayan"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pambalana sa pook: 'Maraming bata ang naglalaro sa plaza.'", "options": ["bata", "naglalaro", "plaza", "maraming"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang 'ospital ng maynila' ay isinusulat nang may maliliit na titik lamang.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook na ngalan ng daan ng sasakyan?", "options": ["kalsada", "ilog", "bundok", "dagat"], "answer": 0},
      {"type": "choice", "q": "Aling salita ang may pagkakamali sa pagkakagamit ng malaking titik sa pangungusap: 'Pumunta kami sa isang Simbahan kahapon.'?", "options": ["Pumunta", "Simbahan", "kami", "kahapon"], "answer": 1},
      {"type": "choice", "q": "Ano ang tinutukoy ng pangngalang pook?", "options": ["ngalan ng tao", "ngalan ng lugar o pook", "ngalan ng bagay", "ngalan ng hayop"], "answer": 1},
      {"type": "choice", "q": "Alin ang pantangi ng 'simbahan'?", "options": ["Moske ng Quiapo", "paaralan", "ospital", "bahay"], "answer": 0},
      {"type": "choice", "q": "Tukuyin ang pambalana sa pook: 'Malilim ang puno sa aming bakuran.'", "options": ["puno", "bakuran", "malilim", "aming"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang 'Pilipinas' ay isang pangngalang pantangi dahil ito ay tiyak na ngalan ng bansa.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook kung saan binabasa ang mga aklat?", "options": ["aklatan", "palikuran", "opisina", "tindahan"], "answer": 0},
      {"type": "choice", "q": "Saan dapat magsimula ang pagsulat ng pangngalang pantangi?", "options": ["maliit na titik", "gitnang titik", "malaking titik", "huling titik"], "answer": 2}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling pangungusap ang naglalaman ng parehong pangngalang pambalana at pantangi sa pook?", "options": ["Pumunta si Caloy sa ilog ng Pasig upang mamasyal.", "Nakatira kami sa isang malaking lungsod.", "Maganda ang Lungsod ng Baguio dahil ito ay malamig.", "Ang Paaralang Elementarya ng Calamba ay isang malaking paaralan."], "answer": 3},
      {"type": "choice", "q": "Challenge: Alin sa mga sumusunod ang may wastong pagsulat ng lahat ng pantangi sa pook?", "options": ["Lungsod Ng Calamba, bulkang Taal", "Lungsod ng Calamba, Bulkang Taal", "lungsod ng calamba, Bulkang taal", "Lungsod ng calamba, bulkang taal"], "answer": 1},
      {"type": "choice", "q": "Challenge: Kung ang 'silid-aralan' ay pambalana, alin ang maaaring maging katapat nitong pantangi sa isang paaralan?", "options": ["Silid ng Grade 3-Rizal", "aklatan", "Paaralang Elementarya", "guro"], "answer": 0},
      {"type": "choice", "q": "Challenge: Tukuyin kung gaano karaming pangngalang pook ang nasa pangungusap: 'Mula sa aming tahanan, dumaan ako sa kalsada patungo sa paaralan.'", "options": ["isa", "dalawa", "tatlo", "apat"], "answer": 2},
      {"type": "choice", "q": "Challenge: Suriin ang pahayag: 'Pumunta si Dr. Rizal sa Europa.' Ano ang kategorya ng 'Europa' sa pangngalan?", "options": ["Pantangi sa tao", "Pambalana sa pook", "Pantangi sa pook", "Pambalana sa bagay"], "answer": 2}
    ],
    "performance": {
      "type": "performance",
      "title": "Pagguhit ng Mapa ng Ating Pook",
      "desc": "Gumuhit ng isang simpleng mapa ng iyong komunidad o barangay sa isang papel. Ipakita ang iyong tahanan at dalawang iba pang pook (tulad ng simbahan, paaralan, o barangay hall). Isulat ang pambalana at pantangi na ngalan ng bawat pook na iginuhit (hal. paaralan -> Paaralang San Jose). Ipaliwanag ang iyong gawa sa magulang.",
      "labels": ["Maayos na naiguhit ang mapa ng sariling komunidad", "Wastong naisulat ang pambalana at pantangi na ngalan ng bawat pook", "Wastong nagamit ang malaking titik sa mga pangngalang pantangi"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Pambalana vs. Pantangi sa Pook</h3>
                  <p class="ws-instruction">Isulat kung ang sumusunod na pook ay <strong>Pambalana</strong> o <strong>Pantangi</strong> gamit ang iyong stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Bundok Makiling <span class="fil-sentence" data-translation="(Mount Makiling)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pantangi</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. silid-aralan <span class="fil-sentence" data-translation="(classroom)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pambalana</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Lungsod ng Calamba <span class="fil-sentence" data-translation="(Calamba City)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pantangi</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Pagtutugma ng mga Pook</h3>
                  <p class="ws-instruction">Iugnay ang pambalanang pook sa katapat nitong pantangi sa pamamagitan ng pagsulat ng tamang titik sa loob ng bracket.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0;">
                      <div><strong>Pangkalahatan (Pambalana):</strong></div>
                      <div>1. bansa <span class="fil-sentence" data-translation="(country)"></span></div>
                      <div>2. ilog <span class="fil-sentence" data-translation="(river)"></span></div>
                      <div>3. ospital <span class="fil-sentence" data-translation="(hospital)"></span></div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0; text-align: right; padding-right: 40px;">
                      <div><strong>Tiyak (Pantangi):</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; A. Ilog Pasig <span class="fil-sentence" data-translation="(Pasig River)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; B. Pilipinas <span class="fil-sentence" data-translation="(Philippines)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; C. Ospital ng Laguna <span class="fil-sentence" data-translation="(Laguna Hospital)"></span></div>
                    </div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagwawasto ng mga Titik</h3>
                  <p class="ws-instruction">Isulat ang tamang pagsulat ng mga pangalan ng pook na may pagkakamali sa paggamit ng titik.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Nakatira kami sa lungsod ng calamba. <span class="fil-sentence" data-translation="(We live in calamba city.)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Nakatira kami sa Lungsod ng Calamba.</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Malinis ang ilog pasig ngayon. <span class="fil-sentence" data-translation="(Pasig river is clean today.)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Malinis ang Ilog Pasig ngayon.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  2: {
    "color": "#ec4899",
    "icon": "🗣️",
    "title": "Filipino",
    "subtitle": "Week 2: Pangngalan sa Tao, Bagay, Hayop, at Pangyayari",
    "slides": [
      {
        "title": "Maligayang Pagdating sa Week 2!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikalawang linggo!", "How are you, student? Welcome to the second week!"),
          make_translation("Ngayong linggo, palalawakin natin ang ating kaalaman.", "This week, we will expand our language knowledge."),
          make_translation("Pag-aaralan natin ang iba pang kategorya ng pangngalan.", "We will study other categories of nouns."),
          make_translation("Ito ang ngalan ng tao, bagay, hayop, at pangyayari.", "These are names of people, things, animals, and events."),
          make_translation("Tukuyin natin ang pambalana at pantangi sa bawat isa.", "Let's identify the common and proper noun in each."),
          make_translation("Sanayin din natin ang ating sarili sa tamang pagsulat.", "Let's also practice the correct way of writing them."),
          make_translation("Napaka-kapaki-pakinabang nito sa pagbuo ng pangungusap.", "This is very useful in constructing proper sentences."),
          make_translation("Simulan natin ang talakayan nang may sigla ngayon!", "Let's start the discussion with enthusiasm today!")
        ),
        "examples": [{"title": "Layunin", "content": "Matukoy ang pambalana at pantangi sa tao, bagay, hayop, at pangyayari."}]
      },
      {
        "title": "Ngalan ng Tao sa Balarila",
        "text": make_text(
          make_translation("Ang tao ay may iba't ibang papel sa ating buhay.", "People play different roles in our daily lives."),
          make_translation("Ang pangkalahatang tawag sa kanila ay pambalana.", "The general term we use for them is a common noun."),
          make_translation("Halimbawa: guro, doktor, bayani, pulis, at nanay.", "Examples: teacher, doctor, hero, police, and mother."),
          make_translation("Ang mga salitang ito ay nagsisimula sa maliit na titik.", "These words start with a lowercase letter in writing."),
          make_translation("Ang tiyak na pangalan ng tao naman ay pantangi.", "Meanwhile, the specific name of a person is proper."),
          make_translation("Halimbawa: Dr. Jose Rizal, Gng. Santos, Matteo.", "Examples: Dr. Jose Rizal, Mrs. Santos, Matteo."),
          make_translation("Ito ay isinusulat na laging may malaking titik.", "These are written always beginning with a capital letter."),
          make_translation("Sino ang paborito mong guro sa paaralan ngayon?", "Who is your favorite teacher in your school today?")
        ),
        "examples": [{"title": "Tao", "content": "guro (teacher - pambalana), Dr. Jose Rizal (proper)"}]
      },
      {
        "title": "Ngalan ng Bagay sa Balarila",
        "text": make_text(
          make_translation("Ang bagay ay mga walang-buhay na gamit natin.", "Things are non-living objects that we use daily."),
          make_translation("Ang pangkalahatang tawag sa bagay ay pambalana.", "The general term for objects is a common noun."),
          make_translation("Halimbawa: sapatos, gatas, kotse, papel, at lapis.", "Examples: shoes, milk, car, paper, and pencil."),
          make_translation("Isinusulat natin ang mga ito sa maliit na titik.", "We write these common objects in lowercase letters."),
          make_translation("Ngunit ang tiyak na tatak o brand nito ay pantangi.", "But the specific brand or trademark is a proper noun."),
          make_translation("Halimbawa: Nike, Bear Brand, Toyota, Mongol.", "Examples: Nike, Bear Brand, Toyota, Mongol."),
          make_translation("Lagi nating lakihan ang unang titik ng tatak.", "Let's always capitalize the first letter of the brand."),
          make_translation("Tingnan ang iyong lapis ngayon at suriin ang tatak!", "Look at your pencil now and check its brand!")
        ),
        "examples": [{"title": "Bagay", "content": "gatas (milk - pambalana), Bear Brand (proper)"}]
      },
      {
        "title": "Ngalan ng Hayop sa Balarila",
        "text": make_text(
          make_translation("Ang mga hayop ay may buhay ring kasama natin.", "Animals are living creatures that live with us."),
          make_translation("Ang pangkalahatang tawag sa hayop ay pambalana.", "The general name of an animal is a common noun."),
          make_translation("Halimbawa: aso, pusa, ibon, kalabaw, at isda.", "Examples: dog, cat, bird, carabao, and fish."),
          make_translation("Ang mga ito ay isinusulat sa maliit na titik.", "These are written using lowercase letters in sentences."),
          make_translation("Kung bibigyan natin sila ng pangalan, ito ay pantangi.", "If we give them a specific pet name, it is proper."),
          make_translation("Halimbawa: Bantay, Muning, Tagpi, Tweetie.", "Examples: Bantay, Muning, Tagpi, Tweetie."),
          make_translation("Isinusulat ang pangalan ng alagang hayop sa malaki.", "The specific pet names are written in capital letters."),
          make_translation("Mayroon ka bang alagang hayop sa inyong bahay?", "Do you have a pet animal in your home right now?")
        ),
        "examples": [{"title": "Hayop", "content": "aso (dog - pambalana), Bantay (proper)"}]
      },
      {
        "title": "Ngalan ng Pangyayari",
        "text": make_text(
          make_translation("Ang pangyayari ay mga okasyon na ating dinaranas.", "Events are occasions that we experience or celebrate."),
          make_translation("Ang pangkalahatang tawag sa okasyon ay pambalana.", "The general term for an occasion is a common noun."),
          make_translation("Halimbawa: kaarawan, kasal, binyag, at pista.", "Examples: birthday, wedding, baptism, and festival."),
          make_translation("Ngunit ang tiyak na pagdiriwang ay pantangi.", "But the specific name of a holiday is proper."),
          make_translation("Halimbawa: Pasko, Bagong Taon, Araw ng Kalayaan.", "Examples: Christmas, New Year, Independence Day."),
          make_translation("Dahil sila ay mga tiyak at tanging okasyon sa taon.", "Because they are specific and unique occasions of the year."),
          make_translation("Kailangan natin silang isulat gamit ang malaking titik.", "We need to write them using capital letters at the start."),
          make_translation("Ano ang pinakagusto mong pagdiriwang sa inyong bayan?", "What is your favorite celebration in your town?")
        ),
        "examples": [{"title": "Pangyayari", "content": "pista (festival - pambalana), Pasko (proper)"}]
      },
      {
        "title": "Tao: Pangkalahatan at Tiyak",
        "text": make_text(
          make_translation("Mag-ehersisyo tayo sa pagkilala ng ngalan ng tao.", "Let's practice identifying names of people."),
          make_translation("Basahin: 'Si Gng. Santos ay isang mabait na guro.'", "Read: 'Mrs. Santos is a kind teacher.'"),
          make_translation("Ang 'guro' dito ay pambalana dahil ito ay tungkulin.", "The word 'teacher' here is common because it's a role."),
          make_translation("Ang 'Gng. Santos' ay pantangi dahil ito ay tiyak na ngalan.", "The word 'Mrs. Santos' is proper because it's a specific name."),
          make_translation("Dapat na malaki ang G at malaki rin ang S sa Santos.", "Capital G and capital S in Santos are required."),
          make_translation("Ito ang wastong paraan upang isulat ang guro natin.", "This is the correct way to write our teacher's name."),
          make_translation("Nakatutulong ito sa pagpapakita ng galang sa kanila.", "This helps in showing our respect to them."),
          make_translation("Sumulat ng pangungusap tungkol sa iyong nanay!", "Write a short sentence about your mother today!")
        ),
        "examples": [{"title": "Tao Pagsasanay", "content": "guro (pambalana) -> Gng. Santos (pantangi)"}]
      },
      {
        "title": "Bagay: Tiyak na Tatak",
        "text": make_text(
          make_translation("Tingnan natin ang mga sapatos na suot mo ngayon.", "Let's look at the shoes you are wearing today."),
          make_translation("Ang salitang 'sapatos' ay isang pangngalang pambalana.", "The word 'shoes' is a common noun of thing."),
          make_translation("Kung ang sapatos ay tatak Nike, paano ito isusulat?", "If the shoes are brand Nike, how do we write it?"),
          make_translation("Isusulat natin ito na 'Nike' gamit ang malaking N.", "We will write it as 'Nike' using a capital N."),
          make_translation("Hindi natin isusulat ang brand sa maliit na titik.", "We will not write the brand name in lowercase."),
          make_translation("Ang mga tatak ng gatas tulad ng 'Bear Brand' ay gayundin.", "The brands of milk like 'Bear Brand' are the same."),
          make_translation("Malaki ang titik B sa Bear at malaki sa Brand.", "Capital B in Bear and capital B in Brand."),
          make_translation("Suriin ang mga tatak ng pagkain sa inyong kusina!", "Check the food brands in your kitchen cupboard!")
        ),
        "examples": [{"title": "Bagay Pagsasanay", "content": "sapatos (pambalana) -> Nike (pantangi)"}]
      },
      {
        "title": "Hayop: Pangalan ng Alaga",
        "text": make_text(
          make_translation("Mayroon ka bang paboritong aso o pusa sa bahay?", "Do you have a favorite dog or cat at home?"),
          make_translation("Ang salitang 'aso' at 'pusa' ay mga pambalana lamang.", "The words 'dog' and 'cat' are common nouns only."),
          make_translation("Ngunit kung tinawag mo ang iyong aso na 'Bantay',", "But if you name your dog 'Bantay',"),
          make_translation("ang 'Bantay' ay magiging pangngalang pantangi sa wika.", "the name 'Bantay' becomes a proper noun in language."),
          make_translation("Dapat itong isulat na malaki ang unang titik na B.", "It must be written with a capital first letter B."),
          make_translation("Halimbawa: 'Masaya si Bantay habang kumakain ng pagkain.'", "Example: 'Bantay is happy while eating his food.'"),
          make_translation("Ang 'Bantay' ay may malaking B; ang 'pagkain' ay pambalana.", "The name 'Bantay' has capital B; 'food' is common."),
          make_translation("Tandaan ang panuntunan sa inyong sariling alaga!", "Remember this rule for your own pet animals!")
        ),
        "examples": [{"title": "Hayop Pagsasanay", "content": "pusa (pambalana) -> Muning (pantangi)"}]
      },
      {
        "title": "Pangyayari: Mga Pagdiriwang",
        "text": make_text(
          make_translation("Ang bawat taon ay puno ng masasayang okasyon.", "Every year is full of happy occasions for us."),
          make_translation("Ang 'kaarawan' ay pambalana sa ating wika.", "The word 'birthday' is common in our language."),
          make_translation("Milyun-milyong tao ang nagdiriwang ng kaarawan.", "Millions of people celebrate their birthdays daily."),
          make_translation("Ngunit ang 'Pasko' ay tiyak na okasyon sa Disyembre.", "But 'Christmas' is a specific occasion in December."),
          make_translation("Kaya ang 'Pasko' ay pangngalang pantangi sa wika.", "So 'Christmas' is a proper noun in language."),
          make_translation("Isinusulat natin ang Pasko na may malaking titik P.", "We write Christmas with a capital letter P."),
          make_translation("Gayundin ang 'Bagong Taon' na may malaking B at T.", "Likewise for 'New Year' with capital B and T."),
          make_translation("Wasto bang isulat ang okasyon sa maliit na titik?", "Is it correct to write holidays in lowercase?")
        ),
        "examples": [{"title": "Pangyayari Pagsasanay", "content": "kasal (wedding - pambalana), Pasko (proper)"}]
      },
      {
        "title": "Guided Practice: Tao",
        "text": make_text(
          make_translation("Suriin natin ang mga tao sa ating paligid ngayon.", "Let's examine the people around us today."),
          make_translation("Sino ang nagtuturo sa atin sa silid-aralan?", "Who is teaching us inside our classroom?"),
          make_translation("Siya ay ang ating 'guro' na isang pambalana.", "She is our 'teacher' which is a common noun."),
          make_translation("Kung ang pangalan niya ay Gng. Cruz, paano isusulat?", "If her name is Mrs. Cruz, how do we write it?"),
          make_translation("Isusulat natin ito na 'Gng. Cruz' sa malalaking titik.", "We will write it as 'Mrs. Cruz' with capital letters."),
          make_translation("Ang 'Gng.' ay may malaking G at ang 'Cruz' ay malaking C.", "The abbreviation 'Gng.' has capital G; 'Cruz' has capital C."),
          make_translation("Ito ay nagpapakita ng tamang pagsulat ng pantangi.", "This shows the correct way of writing proper nouns."),
          make_translation("Sanayin ito sa pagsusulat ng pangalan ng iyong ama!", "Practice this by writing the name of your father!")
        ),
        "examples": [{"title": "Guro", "content": "guro (pambalana) -> Gng. Cruz (pantangi)"}]
      },
      {
        "title": "Guided Practice: Bagay",
        "text": make_text(
          make_translation("Hawakan mo ang iyong lapis na ginagamit sa pagsulat.", "Hold your pencil that you are using to write."),
          make_translation("Ang salitang 'lapis' ay pangkalahatang bagay o pambalana.", "The word 'pencil' is a general thing or common noun."),
          make_translation("Ano ang tatak ng iyong lapis na nakasulat dito?", "What is the brand of your pencil written on it?"),
          make_translation("Maaaring ito ay 'Mongol' na isang pangngalang pantangi.", "Perhaps it is 'Mongol' which is a proper noun."),
          make_translation("Kailangan nating simulan ang Mongol sa malaking titik M.", "We need to start Mongol with a capital letter M."),
          make_translation("Ito ay panuntunan sa pagsulat ng tatak ng bagay.", "This is the rule for writing product brand names."),
          make_translation("Isulat sa iyong notebook ang tatak ng iyong lapis!", "Write down the brand of your pencil in your notebook!"),
          make_translation("Ipakita sa iyong katabi ang iyong naisulat ngayon!", "Show your seatmate what you have written today!")
        ),
        "examples": [{"title": "Lapis", "content": "lapis (pambalana) -> Mongol (pantangi)"}]
      },
      {
        "title": "Guided Practice: Hayop",
        "text": make_text(
          make_translation("Suriin natin ang aso na tumatahol sa kalsada.", "Let's check the dog barking on the street."),
          make_translation("Ang 'aso' ay pangkalahatang tawag sa hayop na ito.", "The word 'dog' is the general name of this animal."),
          make_translation("Kaya ang aso ay isang pangngalang pambalana.", "Therefore, the word dog is a common noun."),
          make_translation("Kung ang aso ni Matteo ay pinangalanang 'Tagpi',", "If the dog of Matteo is named 'Tagpi',"),
          make_translation("ang salitang 'Tagpi' ay pantangi na may malaking T.", "the word 'Tagpi' is proper with a capital T."),
          make_translation("Isusulat natin si Tagpi nang may wastong malaking titik.", "We will write Tagpi with the correct capital letter."),
          make_translation("Ito ay dahil si Tagpi ay may sariling pangalan.", "This is because Tagpi has his own unique name."),
          make_translation("Maaari mo bang isulat ang pangalan ng iyong aso?", "Can you write down the name of your pet dog?")
        ),
        "examples": [{"title": "Aso", "content": "aso (pambalana) -> Tagpi (pantangi)"}]
      },
      {
        "title": "Guided Practice: Pangyayari",
        "text": make_text(
          make_translation("Isipin natin ang okasyon ng Pasko sa Disyembre.", "Let's think of the Christmas occasion in December."),
          make_translation("Ang salitang 'Pasko' ay tiyak na pangyayari o okasyon.", "The word 'Christmas' is a specific event or holiday."),
          make_translation("Kaya ito ay isang pangngalang pantangi sa Filipino.", "So it is a proper noun in the Filipino language."),
          make_translation("Paano natin isusulat ang salitang Pasko sa papel?", "How do we write the word Christmas on paper?"),
          make_translation("Isusulat natin ito na 'Pasko' na may malaking titik P.", "We will write it as 'Pasko' with a capital letter P."),
          make_translation("Ang salitang 'pagdiriwang' naman ay pambalana lamang.", "Meanwhile, the word 'celebration' is only common."),
          make_translation("Isinusulat ang pagdiriwang sa maliit na titik p.", "We write celebration using a lowercase letter p."),
          make_translation("Tandaan ang dalawang anyo na ito sa pagsusulat!", "Remember these two forms in your writing activities!")
        ),
        "examples": [{"title": "Pasko", "content": "pagdiriwang (pambalana) -> Pasko (pantangi)"}]
      },
      {
        "title": "Pagwawasto sa Pangungusap",
        "text": make_text(
          make_translation("Suriin natin ang mga titik sa pangungusap na ito.", "Let's check the letters in this sentence."),
          make_translation("Mali: 'Bumili si matteo ng sapatos na nike.'", "Wrong: 'Bumili si matteo ng sapatos na nike.' (lowercase names)"),
          make_translation("Bakit mali ang pagsulat ng pangungusap na ito?", "Why is the writing of this sentence incorrect?"),
          make_translation("Dahil ang 'matteo' at 'nike' ay mga pantangi.", "Because 'matteo' and 'nike' are proper nouns."),
          make_translation("Dapat silang magsimula sa malaking titik M at N.", "They should begin with capital letters M and N."),
          make_translation("Tama: 'Bumili si Matteo ng sapatos na Nike.'", "Correct: 'Bumili si Matteo ng sapatos na Nike.'"),
          make_translation("Ang 'sapatos' ay nananatiling maliit ang titik s.", "The word 'shoes' remains in lowercase letter s."),
          make_translation("Ito ang wastong balarila na dapat nating sundin!", "This is the correct grammar we must follow!")
        ),
        "examples": [{"title": "Pagwawasto", "content": "matteo -> Matteo, nike -> Nike"}]
      },
      {
        "title": "Maling Pagsulat ng Hayop",
        "text": make_text(
          make_translation("Iwasan ang pagsusulat ng pangalan ng hayop sa maliit.", "Avoid writing the specific name of pets in lowercase."),
          make_translation("Mali: 'Naglalaro ang pusa kong si muning sa bahay.'", "Wrong: 'Naglalaro ang pusa kong si muning sa bahay.' (muning lowercase)"),
          make_translation("Dahil ang 'muning' ay tiyak na ngalan ng iyong pusa.", "Because 'muning' is the specific name of your cat."),
          make_translation("Dapat itong isulat na 'Muning' na may malaking M.", "It must be written as 'Muning' with a capital M."),
          make_translation("Tama: 'Naglalaro ang pusa kong si Muning sa bahay.'", "Correct: 'Naglalaro ang pusa kong si Muning sa bahay.'"),
          make_translation("Ang salitang 'pusa' ay nananatiling maliit ang titik p.", "The word 'cat' remains with a lowercase letter p."),
          make_translation("Suriin ang iyong pagsulat upang maiwasan ang mali!", "Check your writing to avoid making this error!"),
          make_translation("Ang tamang pagsulat ay nagpapakita ng husay sa wika!", "Correct writing shows proficiency in the language!")
        ),
        "examples": [{"title": "Hayop Pagsusuri", "content": "muning -> Muning, pusa -> pusa"}]
      },
      {
        "title": "Maling Pagsulat ng Bagay",
        "text": make_text(
          make_translation("Huwag lakihan ang unang titik ng pangkalahatang bagay.", "Do not capitalize the first letter of general objects."),
          make_translation("Mali: 'Kumuha ako ng Lapis sa aking bag kanina.'", "Wrong: 'Kumuha ako ng Lapis sa aking bag kanina.' (Lapis capitalized)"),
          make_translation("Ang 'lapis' ay pangkalahatang pambalana lamang sa wika.", "The word 'lapis' is just a general common noun."),
          make_translation("Kaya dapat itong isulat sa maliit na titik l.", "So it should be written with a lowercase letter l."),
          make_translation("Tama: 'Kumuha ako ng lapis sa aking bag kanina.'", "Correct: 'Kumuha ako ng lapis sa aking bag kanina.'"),
          make_translation("Gayundin ang 'bag', maliit na titik b ang dapat.", "The same goes for 'bag', it should use a lowercase b."),
          make_translation("Tiyakin na pambalana ay maliit na titik lagi!", "Make sure common nouns are always in lowercase letters!"),
          make_translation("Ito ang susi sa malinis at wastong pagsusulat!", "This is the key to clean and correct writing!")
        ),
        "examples": [{"title": "Bagay Pagsusuri", "content": "Lapis -> lapis, Bag -> bag"}]
      },
      {
        "title": "Kategorya ng Tao: Mga Tungkulin",
        "text": make_text(
          make_translation("Ang mga tungkulin ng tao ay mga pambalana.", "The professional roles of people are common nouns."),
          make_translation("Halimbawa: inhinyero, nars, bumbero, at sundalo.", "Examples: engineer, nurse, firefighter, and soldier."),
          make_translation("Isinusulat natin ang mga ito sa maliit na titik.", "We write these roles using lowercase letters."),
          make_translation("Ngunit ang tiyak na ngalan ng sundalo ay pantangi.", "But the specific name of a soldier is proper."),
          make_translation("Halimbawa: 'Sgt. Ramos' ay isang pangngalang pantangi.", "Example: 'Sgt. Ramos' is a proper noun of person."),
          make_translation("Nagsisimula ang Ramos sa malaking titik na R.", "The name Ramos begins with a capital letter R."),
          make_translation("Ito ay nagpapakita ng tiyak na pagkakakilanlan niya.", "This shows his specific identity in the sentence."),
          make_translation("Kilalanin ang mga tungkulin ng tao sa komunidad!", "Recognize the roles of people in your community!")
        ),
        "examples": [{"title": "Tungkulin", "content": "sundalo (pambalana) -> Sgt. Ramos (pantangi)"}]
      },
      {
        "title": "Kategorya ng Bagay: Mga Laruan",
        "text": make_text(
          make_translation("Ang mga laruan ay kabilang sa ngalan ng bagay.", "Toys belong to the category of thing names."),
          make_translation("Ang 'laruan' at 'manika' ay mga pambalana.", "The words 'toy' and 'doll' are common nouns."),
          make_translation("Maraming laruan ang makikita sa silid ng bata.", "Many toys can be found in a child's playroom."),
          make_translation("Ngunit ang tiyak na tatak ng laruan ay pantangi.", "But the specific brand of the toy is proper."),
          make_translation("Halimbawa: 'Barbie' o 'Lego' ay mga pantangi.", "Examples: 'Barbie' or 'Lego' are proper nouns."),
          make_translation("Kailangan natin silang simulan sa malalaking titik.", "We need to begin them with capital letters."),
          make_translation("Ito ay nagpapakita ng tatak ng laruan sa wika.", "This indicates the toy's brand name in language."),
          make_translation("Ano ang tatak ng iyong paboritong laruan ngayon?", "What is the brand of your favorite toy today?")
        ),
        "examples": [{"title": "Laruan", "content": "manika (doll - pambalana), Barbie (proper)"}]
      },
      {
        "title": "Kategorya ng Hayop: Mga Ibon",
        "text": make_text(
          make_translation("Ang mga ibon ay mga hayop na lumilipad sa hangin.", "Birds are animals that fly through the air."),
          make_translation("Ang salitang 'ibon' at 'loro' ay mga pambalana.", "The words 'bird' and 'parrot' are common nouns."),
          make_translation("Ang agila ay pambalana rin sa ating balarila.", "The eagle is also a common noun in our grammar."),
          make_translation("Ngunit kung may tiyak na ngalan ang alagang loro,", "But if your pet parrot has a specific name,"),
          make_translation("tulad ng 'Polly', ito ay magiging pantangi.", "like 'Polly', it becomes a proper noun."),
          make_translation("Isusulat natin si Polly na may malaking titik P.", "We will write Polly with a capital letter P."),
          make_translation("Ito ay nagpapakita ng pangalan ng iyong alagang ibon.", "This shows the specific name of your pet bird."),
          make_translation("Suriin ang mga ibon sa inyong kapaligiran ngayon!", "Observe the birds in your local environment today!")
        ),
        "examples": [{"title": "Ibon", "content": "ibon (bird - pambalana), Polly (proper)"}]
      },
      {
        "title": "Kategorya ng Pangyayari: Mga Pista",
        "text": make_text(
          make_translation("Ang pista ay isang mahalagang pangyayari sa bayan.", "The festival is an important event in our town."),
          make_translation("Ang salitang 'pista' ay isang pangngalang pambalana.", "The word 'pista' is a common noun of event."),
          make_translation("Maraming bayan ang may kani-kanilang pista taon-taon.", "Many towns have their own festivals every year."),
          make_translation("Ngunit ang 'Pista ng Pahiyas' ay pantangi sa wika.", "But 'Pahiyas Festival' is a proper noun of event."),
          make_translation("Ito ay tiyak na okasyon na ipinagdiriwang sa Lucban.", "It is a specific festival celebrated in Lucban."),
          make_translation("Isinusulat natin ang Pahiyas sa malaking titik P.", "We write Pahiyas with a capital letter P."),
          make_translation("Ito ay nagpapakita ng tiyak na ngalan ng okasyon.", "This indicates the specific name of the occasion."),
          make_translation("Nakadalo ka na ba sa pista sa inyong lalawigan?", "Have you attended a festival in your province?")
        ),
        "examples": [{"title": "Pista", "content": "pista (pambalana) -> Pista ng Pahiyas (pantangi)"}]
      },
      {
        "title": "Pagsasanay sa Kategorya: Tao",
        "text": make_text(
          make_translation("Tukuyin natin ang kategorya ng tao sa pagsasanay.", "Let's identify the category of person in practice."),
          make_translation("Basahin: 'Si Dr. Rizal ay isang mahusay na doktor.'", "Read: 'Dr. Rizal is an excellent doctor.'"),
          make_translation("Ano ang pangkalahatang ngalan ng tao sa pahayag?", "What is the general name of person in the statement?"),
          make_translation("Ang pangkalahatang ngalan ay 'doktor' na pambalana.", "The general name is 'doctor' which is common."),
          make_translation("Ano ang tiyak na ngalan ng tao sa pahayag?", "What is the specific name of person in the statement?"),
          make_translation("Ang tiyak na ngalan ay 'Dr. Rizal' na pantangi.", "The specific name is 'Dr. Rizal' which is proper."),
          make_translation("Nagsisimula ang Dr. Rizal sa malaking titik D at R.", "Dr. Rizal starts with capital letters D and R."),
          make_translation("Ito ay nagpapakita ng tamang kategorya ng tao ngayon!", "This shows the correct category of person today!")
        ),
        "examples": [{"title": "Pagsasanay Tao", "content": "doktor (pambalana) -> Dr. Rizal (pantangi)"}]
      },
      {
        "title": "Pagsasanay sa Kategorya: Bagay",
        "text": make_text(
          make_translation("Suriin natin ang mga bagay na ginagamit sa klase.", "Let's check the things we use in our classroom."),
          make_translation("Basahin: 'Ginamit niya ang krayola na Crayola.'", "Read: 'He used the crayon of brand Crayola.'"),
          make_translation("Ang unang 'krayola' ay pangkalahatang pambalana.", "The first 'krayola' is a general common noun."),
          make_translation("Ang ikalawang 'Crayola' ay tiyak na tatak o pantangi.", "The second 'Crayola' is a specific brand or proper noun."),
          make_translation("Kailangan ang malaking titik C sa tatak na Crayola.", "A capital letter C is needed for the brand Crayola."),
          make_translation("Ang pambalana ay isinusulat sa maliit na titik k.", "The common noun is written with a lowercase letter k."),
          make_translation("Ito ay nagpapakita ng pagkakaiba sa pagsulat ng dalawa.", "This shows the difference in writing these two words."),
          make_translation("Maaari mo ba itong kopyahin sa iyong papel ngayon?", "Can you copy this down on your paper right now?")
        ),
        "examples": [{"title": "Pagsasanay Bagay", "content": "krayola (pambalana) -> Crayola (pantangi)"}]
      },
      {
        "title": "Pagsasanay sa Kategorya: Hayop",
        "text": make_text(
          make_translation("Tukuyin natin ang mga hayop sa pangungusap na ito.", "Let's identify the animals in this sentence."),
          make_translation("Basahin: 'May alagang pusa si Matteo na si Muning.'", "Read: 'Matteo has a pet cat named Muning.'"),
          make_translation("Ang 'pusa' ay pangkalahatang tawag sa hayop na ito.", "The word 'cat' is the general name for this animal."),
          make_translation("Kaya ito ay isang pangngalang pambalana sa wika.", "So it is a common noun in our language."),
          make_translation("Ang 'Muning' ay tiyak na pangalan ng alagang hayop.", "The word 'Muning' is the specific pet name."),
          make_translation("Kaya ito ay pangngalang pantangi na may malaking M.", "So it is a proper noun with a capital letter M."),
          make_translation("Isulat ang pangungusap na ito nang may wastong titik!", "Write this sentence using the correct capital letters!"),
          make_translation("Ipakita ang iyong galing sa pagtukoy ng hayop ngayon!", "Show your skill in identifying animals today!")
        ),
        "examples": [{"title": "Pagsasanay Hayop", "content": "pusa (pambalana) -> Muning (pantangi)"}]
      },
      {
        "title": "Pagsasanay sa Kategorya: Pangyayari",
        "text": make_text(
          make_translation("Suriin natin ang mga okasyon na ipinagdiriwang natin.", "Let's check the occasions we celebrate in our lives."),
          make_translation("Basahin: 'Masaya ang bawat pista tulad ng Pahiyas.'", "Read: 'Every festival like Pahiyas is happy.'"),
          make_translation("Ang 'pista' ay pangkalahatang ngalan ng pangyayari.", "The word 'pista' is a general name of an event."),
          make_translation("Kaya ito ay isang pangngalang pambalana sa balarila.", "So it is a common noun in our grammar lessons."),
          make_translation("Ang 'Pahiyas' ay tiyak na ngalan ng pagdiriwang natin.", "The word 'Pahiyas' is the specific name of the holiday."),
          make_translation("Kaya ito ay isinusulat na may malaking titik P.", "Therefore, it is written using a capital letter P."),
          make_translation("Ito ay nagpapakita ng tiyak na ngalan ng pangyayari.", "This indicates the specific name of the event."),
          make_translation("Magsanay sa pagsulat ng mga okasyon sa iyong notebook!", "Practice writing occasions in your school notebook!")
        ),
        "examples": [{"title": "Pagsasanay Pangyayari", "content": "pista (pambalana) -> Pahiyas (pantangi)"}]
      },
      {
        "title": "Buod ng Ikalawang Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide ngayon.", "Congratulations! You completed all the slides today."),
          make_translation("Natutunan natin ang pambalana at pantangi sa tao.", "We learned about common and proper nouns of people."),
          make_translation("Natutunan din natin ang pambalana at pantangi sa bagay.", "We also learned about common and proper nouns of things."),
          make_translation("Natutunan natin ang mga ito sa hayop at pangyayari.", "We learned these concepts for animals and events too."),
          make_translation("Nalaman natin ang wastong paggamit ng malalaking titik.", "We discovered the correct use of capital letters."),
          make_translation("Ginamit natin ang mga halimbawa ng tatak at alagang hayop.", "We used examples of brand names and pet names."),
          make_translation("Handa ka na bang sumagot sa maikling pagsusulit natin?", "Are you ready to answer our short quiz today?"),
          make_translation("Ipakita ang iyong husay sa wikang Filipino ngayon!", "Show your language skill in Filipino today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pantangi = Tiyak. Pambalana = Karaniwan. Gamitin ang malaking titik!"}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Alin sa mga sumusunod ang pangngalang pantangi sa tao?", "options": ["guro", "doktor", "Gng. Santos", "nanay"], "answer": 2},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pangngalang pambalana sa bagay?", "options": ["Nike", "sapatos", "Toyota", "Mongol"], "answer": 1},
      {"type": "choice", "q": "Ano ang tiyak na ngalan (pantangi) ng hayop?", "options": ["pusa", "aso", "Bantay", "kalabaw"], "answer": 2},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pangkalahatang ngalan (pambalana) ng pangyayari?", "options": ["Pasko", "kaarawan", "Bagong Taon", "Araw ng Kalayaan"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pantangi sa tao sa pangungusap: 'Si Matteo ay nag-aaral ng leksyon.'", "options": ["nag-aaral", "Matteo", "leksyon", "Si"], "answer": 1},
      {"type": "choice", "q": "Ano ang pambalana ng 'Mongol'?", "options": ["sapatos", "lapis", "papel", "gatas"], "answer": 1},
      {"type": "choice", "q": "Ano ang pantangi ng 'pusa'?", "options": ["aso", "ibon", "Muning", "hayop"], "answer": 2},
      {"type": "choice", "q": "Paano isinusulat ang tatak ng isang bagay tulad ng 'Toyota'?", "options": ["Maliit na titik", "Malaking titik sa simula", "Lahat ay malalaking titik", "Lahat ay maliliit na titik"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pambalana sa tao: 'Ang bumbero ay tumulong sa pamilya.'", "options": ["bumbero", "tumulong", "pamilya", "Ang"], "answer": 0},
      {"type": "verify", "q": "Tama o Mali: Ang salitang 'sapatos' ay isang pangngalang pantangi.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling okasyon ang isang pangngalang pantangi sa pangyayari?", "options": ["kasal", "pista", "Bagong Taon", "binyag"], "answer": 2},
      {"type": "choice", "q": "Tukuyin ang pantangi sa bagay sa pangungusap: 'Bumili si nanay ng bagong gatas na Bear Brand.'", "options": ["gatas", "nanay", "Bear Brand", "bagong"], "answer": 2},
      {"type": "choice", "q": "Ano ang pambalana ng 'Dr. Jose Rizal'?", "options": ["doktor", "bayani", "guro", "pulis"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa hayop na nagbibigay ng gatas?", "options": ["Bantay", "kalabaw", "Muning", "Tweetie"], "answer": 1},
      {"type": "choice", "q": "Ano ang pantangi ng 'bagay'?", "options": ["sapatos", "kotse", "Lego", "manika"], "answer": 2},
      {"type": "choice", "q": "Tukuyin ang pambalana sa bagay: 'Naglalaro ang bata gamit ang kanyang pulang bola.'", "options": ["bata", "pulang", "bola", "gamit"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang 'Pasko' ay isinusulat gamit ang maliit na titik p.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa tao na nag-aalaga ng ngipin?", "options": ["doktor", "dentista", "guro", "pulis"], "answer": 1},
      {"type": "choice", "q": "Aling salita ang may pagkakamali sa pagkakagamit ng malaking titik sa pangungusap: 'May alagang Pusa si Kiko.'?", "options": ["May", "Pusa", "Kiko", "alagang"], "answer": 1},
      {"type": "choice", "q": "Ano ang tinutukoy ng pangngalang hayop?", "options": ["ngalan ng tao", "ngalan ng lugar", "ngalan ng hayop", "ngalan ng okasyon"], "answer": 2},
      {"type": "choice", "q": "Alin ang pantangi ng 'kaarawan'?", "options": ["Pasko", "okasyon", "pista", "kaarawan ni Matteo"], "answer": 3},
      {"type": "choice", "q": "Tukuyin ang pambalana sa hayop: 'Lumipad ang ibon sa sanga ng puno.'", "options": ["ibon", "sanga", "puno", "Lumipad"], "answer": 0},
      {"type": "verify", "q": "Tama o Mali: Ang 'Mongol' ay isang pangngalang pantangi dahil ito ay tiyak na tatak ng lapis.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa tao na nagtatanggol sa bayan?", "options": ["guro", "sundalo", "doktor", "dentista"], "answer": 1},
      {"type": "choice", "q": "Saan dapat magsimula ang pagsulat ng pangalan ng iyong alagang aso?", "options": ["maliit na titik", "gitnang titik", "malaking titik", "huling titik"], "answer": 2}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling pangungusap ang naglalaman ng parehong pantangi sa tao at pantangi sa bagay?", "options": ["Bumili si Matteo ng bagong sapatos na Nike.", "Naglalaro ang aso sa malawak na kalsada.", "Si Gng. Santos ay nagtuturo sa silid-aralan.", "Masaya si Muning habang kumakain ng isda."], "answer": 0},
      {"type": "choice", "q": "Challenge: Alin sa mga sumusunod ang may wastong pagsulat ng lahat ng pantangi?", "options": ["dr. Rizal, Bear brand, Muning", "Dr. Rizal, Bear Brand, Muning", "Dr. rizal, Bear brand, muning", "dr. rizal, bear brand, Muning"], "answer": 1},
      {"type": "choice", "q": "Challenge: Kung ang 'laruan' ay pambalana, alin ang maaaring maging katapat nitong pantangi?", "options": ["Lego", "bola", "manika", "krayola"], "answer": 0},
      {"type": "choice", "q": "Challenge: Tukuyin kung gaano karaming pangngalan ang nasa kategorya ng bagay at tao sa pangungusap: 'Binigyan ng guro ang bata ng bagong lapis.'", "options": ["isa", "dalawa", "tatlo", "apat"], "answer": 2},
      {"type": "choice", "q": "Challenge: Suriin ang pahayag: 'Ipinagdiwang ang Pasko sa buong komunidad.' Ano ang kategorya ng 'Pasko' sa pangngalan?", "options": ["Pantangi sa tao", "Pambalana sa pangyayari", "Pantangi sa pangyayari", "Pambalana sa pook"], "answer": 2}
    ],
    "performance": {
      "type": "performance",
      "title": "Paggawa ng Tsart ng Aking Pangngalan",
      "desc": "Kumuha ng isang malinis na papel at hatiin ito sa apat na kolum: Tao, Bagay, Hayop, at Pangyayari. Sumulat ng dalawang pambalana at dalawang pantangi sa ilalim ng bawat kolum batay sa mga makikita sa inyong tahanan (hal. aso -> Bantay). Kulayan at palamutian ang iyong tsart, at ipaliwanag ito sa iyong magulang o kapatid.",
      "labels": ["Maayos na nagawa ang tsart na may apat na kategorya", "Wastong naisulat ang dalawang pambalana at pantangi sa bawat kolum", "Wastong nagamit ang malaking titik sa lahat ng pangngalang pantangi"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Kategorya ng Pangngalan</h3>
                  <p class="ws-instruction">Isulat kung ang sumusunod na salita ay ngalan ng <strong>Tao</strong>, <strong>Bagay</strong>, <strong>Hayop</strong>, o <strong>Pangyayari</strong> gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Mongol (lapis) <span class="fil-sentence" data-translation="(Mongol pencil)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Bagay</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Gng. Santos (guro) <span class="fil-sentence" data-translation="(Mrs. Santos - teacher)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Tao</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Pasko (pagdiriwang) <span class="fil-sentence" data-translation="(Christmas - event)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pangyayari</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Pagtutugma ng Tatak at Alaga</h3>
                  <p class="ws-instruction">Iugnay ang pangkalahatang pambalana sa katapat nitong tiyak na pantangi sa pamamagitan ng pagsulat ng tamang titik.</p>
                  <div class="ws-split" style="margin-top: 20px;">
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0;">
                      <div><strong>Pangkalahatan (Pambalana):</strong></div>
                      <div>1. gatas <span class="fil-sentence" data-translation="(milk)"></span></div>
                      <div>2. aso <span class="fil-sentence" data-translation="(dog)"></span></div>
                      <div>3. laruan <span class="fil-sentence" data-translation="(toy)"></span></div>
                    </div>
                    <div class="ws-col-half" style="font-size: 15px; line-height: 2.0; text-align: right; padding-right: 40px;">
                      <div><strong>Tiyak (Pantangi):</strong></div>
                      <div>[ &nbsp; <span class="ws-answer">B</span> &nbsp; ] &nbsp; A. Bantay <span class="fil-sentence" data-translation="(Bantay - dog name)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">A</span> &nbsp; ] &nbsp; B. Bear Brand <span class="fil-sentence" data-translation="(Bear Brand - milk brand)"></span></div>
                      <div>[ &nbsp; <span class="ws-answer">C</span> &nbsp; ] &nbsp; C. Lego <span class="fil-sentence" data-translation="(Lego - toy brand)"></span></div>
                    </div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagwawasto sa Pangungusap</h3>
                  <p class="ws-instruction">Isulat ang tamang pagsulat ng mga pangngalan na may pagkakamali sa paggamit ng titik sa pangungusap.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Naglaro si matteo gamit ang kanyang laruang lego. <span class="fil-sentence" data-translation="(Matteo played using his lego toy.)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Naglaro si Matteo gamit ang kanyang laruang Lego.</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Kumuha si gng. santos ng lapis sa aking Bag. <span class="fil-sentence" data-translation="(Mrs. Santos got a pencil from my bag.)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Kumuha si Gng. Santos ng lapis sa aking bag.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  3: {
    "color": "#ec4899",
    "icon": "🗣️",
    "title": "Filipino",
    "subtitle": "Week 3: Panghalip Panao at Pamatlig",
    "slides": [
      {
        "title": "Maligayang Pagdating sa Week 3!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikatlong linggo natin!", "How are you, student? Welcome to our third week!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa mga panghalip.", "This week, we will study about pronouns in grammar."),
          make_translation("Ang panghalip ay mga salitang humahalili sa pangngalan.", "Pronouns are words that replace nouns in sentences."),
          make_translation("Pag-aaralan natin ang dalawang uri ng panghalip ngayon.", "We will study two types of pronouns in our lesson today."),
          make_translation("Ito ang panghalip panao at ang panghalip pamatlig.", "These are personal pronouns and demonstrative pronouns."),
          make_translation("Nakatutulong ang mga ito upang maiwasan ang pag-uulit.", "These help us avoid repeating the same names over and over."),
          make_translation("Matututuhan din natin ang tamang paggamit sa pangungusap.", "We will also learn the correct way to use them in sentences."),
          make_translation("Handa ka na bang mag-aral nang may sigla at galing?", "Are you ready to study with enthusiasm and skill?")
        ),
        "examples": [{"title": "Layunin ng Aralin", "content": "Tukuyin at gamitin ang panghalip panao at pamatlig sa pangungusap."}]
      },
      {
        "title": "Ano ang Panghalip?",
        "text": make_text(
          make_translation("Ang panghalip ay isang mahalagang bahagi ng pananalita.", "Pronouns are an important part of speech in grammar."),
          make_translation("Ito ay ginagamit na pamalit sa ngalan ng tao o bagay.", "It is used to replace names of people or things."),
          make_translation("E.g., sa halip na sabihing 'si Matteo ay nag-aaral',", "E.g., instead of saying 'Matteo is studying',"),
          make_translation("maaari nating sabihing 'siya ay nag-aaral sa klase'.", "we can say 'he is studying in the classroom'."),
          make_translation("Ang salitang 'siya' ay isang panghalip panao sa wika.", "The word 'he' is a personal pronoun in language."),
          make_translation("Pinapadali nito ang ating pakikipag-usap araw-araw.", "This makes our daily conversations simpler and faster."),
          make_translation("May iba't ibang kategorya ang panghalip sa wika.", "There are different categories of pronouns in language."),
          make_translation("Alamin natin ang unang uri: ang panghalip panao!", "Let's learn the first type: the personal pronoun!")
        ),
        "examples": [{"title": "Halimbawa ng Pamalit", "content": "Matteo -> siya (he), aso -> ito (it)"}]
      },
      {
        "title": "Panghalip Panao: Ako at Ikaw",
        "text": make_text(
          make_translation("Ang panghalip panao ay pamalit sa ngalan ng tao.", "Personal pronouns are replacements for names of people."),
          make_translation("Mayroon itong tatlong panauhan na dapat tandaan.", "There are three persons of pronouns that we should remember."),
          make_translation("Ang 'ako' ay ginagamit kapag ang nagsasalita ang tinutukoy.", "The word 'I' is used when referring to the speaker."),
          make_translation("Halimbawa: 'Ako ay nag-aaral sa ikatlong baitang ngayon.'", "Example: 'I am studying in the third grade today.'"),
          make_translation("Ang 'ikaw' ay ginagamit kapag ang kausap ang tinutukoy.", "The word 'you' is used when referring to the listener."),
          make_translation("Halimbawa: 'Ikaw ba ay handa na sa ating maikling pagsusulit?'", "Example: 'Are you ready for our short quiz now?'"),
          make_translation("Ito ay ginagamit sa pakikipag-usap sa isang tao.", "These are used when talking directly to one person."),
          make_translation("Magsanay sa paggamit ng ako at ikaw sa inyong klase!", "Practice using I and you in your classroom today!")
        ),
        "examples": [{"title": "Panao (Isahan)", "content": "ako (I - nagsasalita), ikaw (you - kausap)"}]
      },
      {
        "title": "Panghalip Panao: Siya at Sila",
        "text": make_text(
          make_translation("Suriin natin ang iba pang panghalip panao sa wika.", "Let's check other personal pronouns in our language."),
          make_translation("Ang 'siya' ay ginagamit para sa isang taong pinag-uusapan.", "The word 'he/she' is used for one person spoken of."),
          make_translation("Halimbawa: 'Siya ay mabait na guro sa aming eskwelahan.'", "Example: 'She is a kind teacher in our school.'"),
          make_translation("Ang 'sila' ay ginagamit para sa maraming taong pinag-uusapan.", "The word 'they' is used for multiple people spoken of."),
          make_translation("Halimbawa: 'Sila ay naglalaro sa malawak na plaza.'", "Example: 'They are playing in the wide town plaza.'"),
          make_translation("Ginagamit din natin ang 'kami' para sa nagsasalita at iba.", "We also use 'we' for the speaker and others."),
          make_translation("Halimbawa: 'Kami ay pumunta sa magandang ilog kanina.'", "Example: 'We went to the beautiful river earlier.'"),
          make_translation("Pansinin ang bilang ng taong tinutukoy sa pangungusap!", "Pay attention to the number of people referred to!")
        ),
        "examples": [{"title": "Panao (Maramihan)", "content": "kami (we - group with speaker), sila (they - group spoken of)"}]
      },
      {
        "title": "Panghalip Pamatlig: Ito",
        "text": make_text(
          make_translation("Ang pamatlig ay ginagamit sa pagtuturo ng bagay.", "Demonstrative pronouns are used to point to objects."),
          make_translation("Ipinapakita nito ang distansya ng bagay sa tao.", "It shows the distance of the object from the speaker."),
          make_translation("Ang 'ito' ay ginagamit kapag hawak ng nagsasalita.", "The word 'this' is used when held by the speaker."),
          make_translation("O di kaya ay napakalapit ng bagay sa nagsasalita.", "Or if the object is very close to the speaker."),
          make_translation("Halimbawa: 'Ang hawak kong lapis na ito ay Mongol.'", "Example: 'This pencil I am holding is brand Mongol.'"),
          make_translation("Hawak mo ba ang iyong lapis habang nag-aaral ngayon?", "Are you holding your pencil while studying right now?"),
          make_translation("Kaya maaari mong sabihing 'ito ay aking lapis sa klase'.", "So you can say 'this is my writing pencil in class'."),
          make_translation("Gamitin ang 'ito' para sa mga bagay na abot-kamay!", "Use 'this' for objects that are within your reach!")
        ),
        "examples": [{"title": "Pamatlig (Malapit)", "content": "ito (this - hawak o malapit sa nagsasalita)"}]
      },
      {
        "title": "Panghalip Pamatlig: Iyan",
        "text": make_text(
          make_translation("Suriin natin ang ikalawang panghalip pamatlig.", "Let's analyze the second demonstrative pronoun."),
          make_translation("Ang 'iyan' ay ginagamit kapag malapit sa kausap.", "The word 'that' (near listener) is used when near the listener."),
          make_translation("Ang bagay ay malayo sa nagsasalita ngunit malapit sa iyo.", "The object is far from the speaker but near the listener."),
          make_translation("Halimbawa: 'Ang aklat na iyan sa iyong mesa ay bago.'", "Example: 'That book on your desk is brand new.'"),
          make_translation("Ang nagsasalita ay itinuturo ang aklat na hawak mo.", "The speaker is pointing to the book that you hold."),
          make_translation("Kaya ginagamit ang salitang 'iyan' sa pangungusap.", "Therefore, the word 'that' (near you) is used in the sentence."),
          make_translation("Ito ay nagbibigay-linaw kung nasaan ang bagay sa silid.", "This clarifies where the object is located in the room."),
          make_translation("Tukuyin ang mga bagay na malapit sa iyong katabi ngayon!", "Identify objects that are near your classmate right now!")
        ),
        "examples": [{"title": "Pamatlig (Katamtaman)", "content": "iyan (that - malapit sa kausap)"}]
      },
      {
        "title": "Panghalip Pamatlig: Iyon",
        "text": make_text(
          make_translation("Suriin natin ang ikatlong panghalip pamatlig ngayon.", "Let's check the third demonstrative pronoun today."),
          make_translation("Ang 'iyon' ay ginagamit kapag malayo sa dalawang tao.", "The word 'that' (far) is used when far from both people."),
          make_translation("Ibig sabihin, malayo ito sa nagsasalita at kausap.", "It means it is far from both the speaker and listener."),
          make_translation("Halimbawa: 'Ang ibon na iyon sa tuktok ng bundok.'", "Example: 'That bird yonder on the mountaintop.'"),
          make_translation("Ang ibon ay malayo sa ating dalawa habang nag-uusap.", "The bird is far from both of us while we are talking."),
          make_translation("Kaya ginagamit natin ang 'iyon' sa ating pagsulat.", "So we use 'iyon' (that far) in our writing exercises."),
          make_translation("Maaari mo ring sabihing 'ang ulap na iyon sa langit'.", "You can also say 'that cloud yonder in the sky'."),
          make_translation("Ituro ang mga bagay na malayo sa inyong paaralan!", "Point to objects that are far away from your school!")
        ),
        "examples": [{"title": "Pamatlig (Malayo)", "content": "iyon (that yonder - malayo sa kapwa)"}]
      },
      {
        "title": "Pagsusuri sa Pangungusap: Panao",
        "text": make_text(
          make_translation("Suriin natin ang panghalip panao sa pangungusap.", "Let's check the personal pronoun in this sentence."),
          make_translation("Pahayag: 'Si Caloy ay naglaro. Siya ay masaya.'", "Statement: 'Caloy played. He is happy.'"),
          make_translation("Ano ang panghalip panao na ginamit sa pahayag?", "What is the personal pronoun used in the statement?"),
          make_translation("Ang panghalip ay 'siya' na pumalit sa ngalang 'Caloy'.", "The pronoun is 'siya' (he) replacing the name 'Caloy'."),
          make_translation("Nakatulong ito upang hindi maulit ang pangalang Caloy.", "This helped so we do not repeat the name Caloy again."),
          make_translation("Ito ay nagbibigay-daloy sa ating mga pangungusap.", "This provides a smooth flow to our written sentences."),
          make_translation("Isulat ang pangungusap na ito sa inyong papel ngayon!", "Write this sentence down on your writing paper now!"),
          make_translation("Suriin ang iba pang halimbawa sa inyong kwento!", "Examine other examples of pronouns in your stories!")
        ),
        "examples": [{"title": "Pagsusuri Panao", "content": "Caloy (noun) -> siya (pronoun)"}]
      },
      {
        "title": "Pagsusuri sa Pangungusap: Pamatlig",
        "text": make_text(
          make_translation("Suriin natin ang panghalip pamatlig sa pangungusap.", "Let's check the demonstrative pronoun in this sentence."),
          make_translation("Pahayag: 'Hawak ko ang lapis na ito. Ito ay bago.'", "Statement: 'I am holding this pencil. This is new.'"),
          make_translation("Ano ang panghalip pamatlig na ginamit sa pahayag?", "What is the demonstrative pronoun used in the statement?"),
          make_translation("Ang panghalip ay 'ito' na tumutukoy sa hawak na lapis.", "The pronoun is 'ito' (this) referring to the held pencil."),
          make_translation("Ito ay nagpapakita na ang bagay ay napakalapit sa atin.", "This shows that the object is very close to the speaker."),
          make_translation("Kaya 'ito' ang wastong salita na dapat gamitin.", "So 'ito' is the correct grammar word we must use."),
          make_translation("Gamitin ang iyong stylus upang bilugan ang salitang ito!", "Use your stylus to encircle this word on the screen!"),
          make_translation("Magsanay sa pagsulat ng sarili mong pangungusap ngayon!", "Practice writing your own short sentences right now!")
        ),
        "examples": [{"title": "Pagsusuri Pamatlig", "content": "lapis na hawak -> ito (this)"}]
      },
      {
        "title": "Pagsasanay: Ako, Ikaw, Siya",
        "text": make_text(
          make_translation("Punan natin ang mga patlang ng tamang panghalip.", "Let's fill in the blanks with the correct pronouns."),
          make_translation("Pahayag: 'Ako si Matteo. ___ ay nag-aaral ngayon.'", "Statement: 'I am Matteo. ___ am studying now.'"),
          make_translation("Dahil ako ang nagsasalita, gamitin ang 'Ako' sa dulo.", "Since I am the speaker, use the word 'Ako' (I) in the blank."),
          make_translation("Pahayag: 'Kausap ko si Kiko. ___ ba ay Grade 3?'", "Statement: 'I am talking to Kiko. Are ___ Grade 3?'"),
          make_translation("Dahil si Kiko ang kausap, gamitin ang 'Ikaw' sa patlang.", "Since Kiko is the listener, use 'Ikaw' (you) in the blank."),
          make_translation("Pahayag: 'Si Lani ay mabait. ___ ay aking kapatid.'", "Statement: 'Lani is kind. ___ is my sister.'"),
          make_translation("Dahil si Lani ang pinag-uusapan, gamitin ang 'Siya'.", "Since Lani is the person spoken of, use 'Siya' (she)."),
          make_translation("Madali lang bang pumili ng tamang panghalip panao?", "Is it easy to choose the correct personal pronoun?")
        ),
        "examples": [{"title": "Panao Pagsasanay", "content": "nagsasalita -> ako, kausap -> ikaw, pinag-uusapan -> siya"}]
      },
      {
        "title": "Pagsasanay: Ito, Iyan, Iyon",
        "text": make_text(
          make_translation("Piliin natin ang tamang pamatlig batay sa pahiwatig.", "Let's choose the correct demonstrative based on clues."),
          make_translation("Pahayag: 'Hawak ko ang bulaklak na ___. Mabango ito.'", "Statement: 'I am holding ___ flower. This is fragrant.'"),
          make_translation("Dahil hawak ko ang bulaklak, gamitin ang 'ito'.", "Since I am holding the flower, use the word 'ito' (this)."),
          make_translation("Pahayag: 'Itinuro ko ang ibon sa malayong puno: ___ ay agila.'", "Statement: 'I pointed to the bird on the far tree: ___ is an eagle.'"),
          make_translation("Dahil malayo ang ibon, gamitin ang salitang 'iyon'.", "Since the bird is far away, use the word 'iyon' (that far)."),
          make_translation("Pahayag: 'Tingnan mo ang lapis na ___ sa iyong kamay.'", "Statement: 'Look at ___ pencil in your hand.'"),
          make_translation("Dahil nasa kamay mo ang lapis, gamitin ang 'iyan'.", "Since the pencil is in your hand, use the word 'iyan' (that near you)."),
          make_translation("Tandaan ang distansya ng bagay sa bawat pagsagot!", "Remember the distance of the object in every answer!")
        ),
        "examples": [{"title": "Pamatlig Pagsasanay", "content": "hawak -> ito, malayo -> iyon, nasa kausap -> iyan"}]
      },
      {
        "title": "Maling Paggamit ng Pamatlig",
        "text": make_text(
          make_translation("Iwasan ang paggamit ng 'ito' sa malayong bagay.", "Avoid using 'ito' (this) for distant objects yonder."),
          make_translation("Mali: 'Tingnan mo ang bituin na ito sa langit.'", "Wrong: 'Look at this star yonder in the sky.' (star is too far)"),
          make_translation("Ang bituin ay napakalayo sa ating dalawa sa gabi.", "The star is extremely far from both of us at night."),
          make_translation("Kaya dapat gamitin ang 'iyon' sa halip na 'ito'.", "So we must use 'iyon' (that yonder) instead of 'ito'."),
          make_translation("Tama: 'Tingnan mo ang bituin na iyon sa langit.'", "Correct: 'Look at that star yonder in the sky.'"),
          make_translation("Gayundin sa mga bundok, gamitin ang 'iyon' lagi.", "The same applies to mountains, always use 'iyon'."),
          make_translation("Suriin ang distansya bago isulat ang pamatlig ngayon!", "Analyze the distance before writing the demonstrative pronoun!"),
          make_translation("Ito ang wastong tuntunin sa ating balarilang Filipino!", "This is the correct rule in our Filipino grammar lessons!")
        ),
        "examples": [{"title": "Pamatlig Error", "content": "mali: bituin na ito -> tama: bituin na iyon"}]
      },
      {
        "title": "Maling Paggamit ng Panao",
        "text": make_text(
          make_translation("Huwag gamitin ang 'siya' para sa maraming tao.", "Do not use 'siya' (he/she) for multiple people in a group."),
          make_translation("Mali: 'Si Matteo at Kiko ay naglaro. Siya ay masaya.'", "Wrong: 'Matteo and Kiko played. He is happy.' (referring to both)"),
          make_translation("Dahil dalawang tao ang pinag-uusapan natin ngayon,", "Because we are talking about two people in the sentence,"),
          make_translation("dapat gamitin ang 'sila' sa halip na 'siya'.", "we must use 'sila' (they) instead of 'siya' (he/she)."),
          make_translation("Tama: 'Si Matteo at Kiko ay naglaro. Sila ay masaya.'", "Correct: 'Matteo and Kiko played. They are happy.'"),
          make_translation("Ang 'sila' ay maramihan; ang 'siya' ay isahan lamang.", "The word 'sila' is plural; 'siya' is singular only."),
          make_translation("Tiyakin ang bilang ng tao bago isulat ang panao!", "Make sure of the count of people before writing the pronoun!"),
          make_translation("Ito ay makatutulong upang maging malinaw ang kwento!", "This will help in making your written story very clear!")
        ),
        "examples": [{"title": "Panao Error", "content": "mali: Matteo at Kiko -> siya, tama: Matteo at Kiko -> sila"}]
      },
      {
        "title": "Panghalip sa Ating Kwento",
        "text": make_text(
          make_translation("Basahin natin ang maikling kwento tungkol kay Matteo:", "Let's read a short story about Matteo's day:"),
          make_translation("'Si Matteo ay pumunta sa magandang ilog ng Pasig.", "'Matteo went to the beautiful Pasig River."),
          make_translation("Siya ay nagdala ng munting banca para sa laro.", "He brought a small outrigger boat for play."),
          make_translation("Itinuro niya ang agila sa langit: Iyon ay mabilis!'", "He pointed to the eagle in the sky: That is fast!'"),
          make_translation("Sa kwentong ito, ginamit ang 'siya' at 'iyon'.", "In this short story, we used 'siya' and 'iyon'."),
          make_translation("Ang 'siya' ay panao na pumalit sa ngalang Matteo.", "The word 'siya' is a personal pronoun replacing Matteo."),
          make_translation("Ang 'iyon' ay pamatlig na tumukoy sa malayong ibon.", "The word 'iyon' is a demonstrative pointing to the bird."),
          make_translation("Gawin din ito sa pagsulat ng sarili mong kwento!", "Do the same thing when writing your own short stories!")
        ),
        "examples": [{"title": "Kwento", "content": "siya (he), iyon (that yonder - pointing to eagle)"}]
      },
      {
        "title": "Buod ng Ikatlong Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang paggamit ng panghalip panao sa tao.", "We learned the use of personal pronouns for people."),
          make_translation("Natutunan natin ang ako, ikaw, siya, kami, at sila.", "We learned about I, you, he/she, we, and they."),
          make_translation("Natutunan din natin ang panghalip pamatlig sa bagay.", "We also learned about demonstrative pronouns for objects."),
          make_translation("Natutunan natin ang ito, iyan, at iyon sa pagtuturo.", "We learned about this, that (near you), and that (far away)."),
          make_translation("Nalaman natin ang wastong pagtukoy ng distansya at bilang.", "We discovered how to identify distance and number correctly."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggo?", "Are you ready for the quiz and challenges of the week?"),
          make_translation("Ipagpatuloy ang pagpapakita ng galing sa Filipino ngayon!", "Continue showing your excellent skills in Filipino today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Panao = Tao. Pamatlig = Bagay at Distansya. Magsanay lagi!"}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa mga salitang ginagamit na pamalit sa pangngalan?", "options": ["pang-uri", "panghalip", "pandiwa", "pangatnig"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang panghalip panao?", "options": ["lapis", "siya", "paaralan", "Pasko"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang panghalip pamatlig?", "options": ["ako", "iyon", "sila", "siya"], "answer": 1},
      {"type": "choice", "q": "Anong panghalip panao ang gagamitin kung ang nagsasalita ang tinutukoy?", "options": ["ikaw", "ako", "siya", "sila"], "answer": 1},
      {"type": "choice", "q": "Anong panghalip panao ang gagamitin kung ang kausap ang tinutukoy?", "options": ["ako", "ikaw", "siya", "kami"], "answer": 1},
      {"type": "choice", "q": "Anong panghalip panao ang gagamitin para kay Matteo na iyong pinag-uusapan?", "options": ["ako", "ikaw", "siya", "sila"], "answer": 2},
      {"type": "choice", "q": "Punan ang patlang: 'Si Matteo at Kiko ay masaya. ___ ay naglalaro.'", "options": ["Siya", "Sila", "Kami", "Ako"], "answer": 1},
      {"type": "choice", "q": "Anong pamatlig ang gagamitin para sa lapis na hawak mo ngayon?", "options": ["ito", "iyan", "iyon", "sila"], "answer": 0},
      {"type": "choice", "q": "Anong pamatlig ang gagamitin para sa aklat na hawak ng iyong kausap?", "options": ["ito", "iyan", "iyon", "ako"], "answer": 1},
      {"type": "choice", "q": "Anong pamatlig ang gagamitin para sa saranggola na lumilipad sa malayang langit?", "options": ["ito", "iyan", "iyon", "ikaw"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang 'kami' ay ginagamit kapag kasama ang nagsasalita sa grupo.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Tukuyin ang panghalip panao sa pangungusap: 'Siya ay pumunta sa malaking aklatan.'", "options": ["pumunta", "aklatan", "Siya", "malaking"], "answer": 2},
      {"type": "choice", "q": "Tukuyin ang panghalip pamatlig sa pangungusap: 'Ang hawak kong laruan na ito ay maganda.'", "options": ["hawak", "laruan", "ito", "maganda"], "answer": 2},
      {"type": "choice", "q": "Punan ang patlang: 'Itinuro ko ang malayong bundok: ___ ang Bundok Makiling.'", "options": ["Ito", "Iyan", "Iyon", "Sila"], "answer": 2},
      {"type": "choice", "q": "Anong panghalip ang pumapalit sa ngalang 'Lani'?", "options": ["ako", "ikaw", "siya", "sila"], "answer": 2},
      {"type": "choice", "q": "Punan ang patlang: 'Tingnan mo ang papel na ___ sa iyong mesa.'", "options": ["ito", "iyan", "iyon", "sila"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ginagamit ang 'iyon' kapag hawak ng nagsasalita ang bagay.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling panghalip panao ang angkop sa nagsasalita at kanyang mga kaibigan?", "options": ["ako", "ikaw", "kami", "siya"], "answer": 2},
      {"type": "choice", "q": "Aling salita ang panghalip sa pangungusap: 'Binigyan sila ni Gng. Santos ng aklat.'?", "options": ["Santos", "aklat", "sila", "Binigyan"], "answer": 2},
      {"type": "choice", "q": "Ano ang tinutukoy ng panghalip pamatlig na 'ito'?", "options": ["bagay na hawak o malapit sa nagsasalita", "bagay na malapit sa kausap", "bagay na malayo sa kapwa", "isang tao"], "answer": 0},
      {"type": "choice", "q": "Alin ang angkop na panghalip panao para sa kausap mo na si Kiko?", "options": ["ako", "ikaw", "siya", "kami"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang panghalip pamatlig: 'Ang krayola na iyan sa iyong kamay ay mapula.'", "options": ["krayola", "iyan", "kamay", "mapula"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang 'sila' ay panghalip panao para sa isang tao lamang na pinag-uusapan.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang panghalip panao na maramihan?", "options": ["ako", "ikaw", "siya", "sila"], "answer": 3},
      {"type": "choice", "q": "Anong pamatlig ang angkop gamitin para sa ibon na nasa mataas na sanga ng malayong puno?", "options": ["ito", "iyan", "iyon", "kami"], "answer": 2}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling pangungusap ang naglalaman ng parehong panghalip panao at panghalip pamatlig?", "options": ["Siya ay nagdala ng bangka na ito sa malaking ilog.", "Naglalaro ang mga aso sa malawak na plaza.", "Kami ay nag-aaral ng balarila sa paaralan.", "Itinuro ko ang ibon na iyon sa aking guro kahapon."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling panghalip panao ang pumapalit sa mga nakasalungguhit na pangngalan sa pangungusap: 'Si Matteo at ako ay magkasamang pumunta sa aklatan.'?", "options": ["Sila", "Kami", "Kayo", "Siya"], "answer": 1},
      {"type": "choice", "q": "Challenge: Suriin ang pahayag: 'Ang bituin na iyon ay kumukutikutitap.' Bakit 'iyon' ang ginamit na panghalip pamatlig?", "options": ["Dahil hawak ng nagsasalita ang bituin.", "Dahil malapit sa kausap ang bituin.", "Dahil malayo sa nagsasalita at kausap ang bituin.", "Dahil ang bituin ay isang hayop."], "answer": 2},
      {"type": "choice", "q": "Challenge: Tukuyin kung gaano karaming panghalip panao at pamatlig ang nasa pangungusap: 'Sinabi niya sa akin na ang lapis na ito ay bago.'", "options": ["isa", "dalawa", "tatlo", "apat"], "answer": 2},
      {"type": "choice", "q": "Challenge: Aling panghalip pamatlig ang dapat gamitin kung ang bagay ay malayo sa nagsasalita ngunit hawak ng kausap?", "options": ["ito", "iyan", "iyon", "sila"], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Dula-dulaan ng Ating Panghalip",
      "desc": "Gumawa ng isang simpleng dula-dulaan o diyalogo kasama ang iyong magulang o kapatid sa tahanan. Sumulat ng limang pangungusap sa isang papel na naglalaman ng mga panghalip panao (ako, ikaw, siya, kami, sila) at pamatlig (ito, iyan, iyon) batay sa inyong pag-uusap at pagtuturo ng mga bagay sa bahay. Bigkasin ang diyalogo nang malinaw at may damdamin.",
      "labels": ["Wastong nagamit ang hindi bababa sa tatlong panghalip panao sa diyalogo", "Wastong nagamit ang hindi bababa sa dalawang panghalip pamatlig batay sa distansya", "Maayos at malinaw ang pagbigkas ng mga linya sa dula-dulaan"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Pagkilala sa Panghalip</h3>
                  <p class="ws-instruction">Tukuyin kung ang salita ay <strong>Panao</strong> (personal) o <strong>Pamatlig</strong> (demonstrative) gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. siya <span class="fil-sentence" data-translation="(he/she)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Panao</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. iyon <span class="fil-sentence" data-translation="(that yonder)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pamatlig</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. kami <span class="fil-sentence" data-translation="(we)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Panao</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Pagtutugma ng Distansya</h3>
                  <p class="ws-instruction">Isulat ang tamang panghalip pamatlig (<strong>ito</strong>, <strong>iyan</strong>, o <strong>iyon</strong>) batay sa pahiwatig ng distansya.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Hawak ko ang aklat na _____. <span class="fil-sentence" data-translation="(I am holding this book.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">ito</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Hawak ng kausap ko ang lapis na _____. <span class="fil-sentence" data-translation="(My listener is holding that pencil.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">iyan</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Nakaturo sa malayong ulap na _____. <span class="fil-sentence" data-translation="(Pointing to that cloud far away.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 40%;"><span class="ws-answer">iyon</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsulat ng Wastong Panghalip</h3>
                  <p class="ws-instruction">Punan ang patlang ng tamang panghalip panao upang mabuo ang pangungusap.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Si Lani at ako ay magkaibigan. _____ ay nag-aaral sa Grade 3. <span class="fil-sentence" data-translation="(Lani and I are friends. We study in Grade 3.)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Kami</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Si Kiko ay masipag. _____ ay laging tumutulong sa kanyang nanay. <span class="fil-sentence" data-translation="(Kiko is industrious. He always helps his mother.)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Siya</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  4: {
    "color": "#ec4899",
    "icon": "🗣️",
    "title": "Filipino",
    "subtitle": "Week 4: Pang-uri at Katangian ng Materyal",
    "slides": [
      {
        "title": "Maligayang Pagdating sa Week 4!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikaapat na linggo!", "How are you, student? Welcome to the fourth week!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa pang-uri.", "This week, we will study about adjectives in grammar."),
          make_translation("Ang pang-uri ay salitang naglalarawan sa pangngalan.", "Adjectives are words that describe nouns or pronouns."),
          make_translation("Ikokonekta natin ito sa ating aralin sa Science.", "We will connect this grammar lesson to our Science class."),
          make_translation("Ilarawan natin ang mga katangian ng iba't ibang solid.", "Let's describe the properties of different solid materials."),
          make_translation("Gagamit tayo ng mga salitang naglalarawan ng texture.", "We will use words that describe texture and appearance."),
          make_translation("Matututuhan din natin ang tamang baybay at paggamit nito.", "We will also learn their correct spelling and usage."),
          make_translation("Handa ka na bang maging mahusay na tagapaglalarawan?", "Are you ready to become a great describer today?")
        ),
        "examples": [{"title": "Layunin ng Aralin", "content": "Tukuyin at gamitin ang pang-uri sa paglalarawan ng mga solid na materyal."}]
      },
      {
        "title": "Ano ang Pang-uri?",
        "text": make_text(
          make_translation("Ang pang-uri ay nagbibigay-turing sa pangngalan.", "Adjectives describe the characteristics of nouns."),
          make_translation("Ipinapakita nito ang kulay, hugis, laki, at katangian.", "It shows the color, shape, size, and physical properties."),
          make_translation("E.g., sa 'pulang krayola', ang pang-uri ay 'pulang'.", "E.g., in 'red crayon', the adjective is 'red'."),
          make_translation("Sa 'matigas na bato', ang pang-uri ay 'matigas'.", "In 'hard stone', the adjective is the word 'hard'."),
          make_translation("Tinutulungan tayo nitong ilarawan ang ating paligid.", "This helps us explain our physical surroundings clearly."),
          make_translation("Nalalaman natin ang katangian ng bawat bagay.", "We find out the unique qualities of every single object."),
          make_translation("May iba't ibang pang-uri para sa bawat pandama.", "There are different adjectives for each of our senses."),
          make_translation("Alamin natin ang mga pang-uri para sa mga solid!", "Let's learn the adjectives we use for solid objects!")
        ),
        "examples": [{"title": "Pang-uri", "content": "matigas (hard), makintab (shiny), malambot (soft)"}]
      },
      {
        "title": "Ang Katangiang: Matigas",
        "text": make_text(
          make_translation("Ang katigasan ay isang katangian ng maraming solid.", "Hardness is a physical property of many solid things."),
          make_translation("Ang pang-uring 'matigas' ay naglalarawan sa kanila.", "The adjective 'hard' describes these sturdy materials."),
          make_translation("Hindi sila madaling mayupi o mabago ang hugis.", "They do not easily bend or change shape under pressure."),
          make_translation("Halimbawa: 'Ang malaking bato sa daan ay matigas.'", "Example: 'The big stone on the road is very hard.'"),
          make_translation("Ang 'matigas' ay naglalarawan sa pangngalang 'bato'.", "The word 'hard' describes the common noun 'stone'."),
          make_translation("Ang mga bakal na susi ay matigas din sa hawak.", "The metal keys are also hard when held in your hand."),
          make_translation("Kailangan natin ng lakas upang sila ay mapagalaw.", "We need force to move or change these hard objects."),
          make_translation("Mag-isip ng tatlong matitigas na bagay sa inyong silid!", "Think of three hard objects inside your classroom now!")
        ),
        "examples": [{"title": "Matigas", "content": "bato (stone), bakal (iron key), semento (concrete)"}]
      },
      {
        "title": "Ang Katangiang: Malambot",
        "text": make_text(
          make_translation("Ang kalambutan ay kabaligtaran ng katigasan.", "Softness is the opposite of hardness in materials."),
          make_translation("Ang pang-uring 'malambot' ay naglalarawan sa kanila.", "The adjective 'soft' describes these flexible things."),
          make_translation("Madali silang pisilin o baguhin ang hugis.", "They are easy to squeeze or reshape using hand force."),
          make_translation("Halimbawa: 'Ang bulak sa klinika ay malambot.'", "Example: 'The cotton in the clinic is very soft.'"),
          make_translation("Ang 'malambot' ay naglalarawan sa pangngalang 'bulak'.", "The word 'soft' describes the common noun 'cotton'."),
          make_translation("Ang modeling clay ay malambot din kapag nilalaro.", "Modeling clay is also soft when played with on desks."),
          make_translation("Maging ang unan sa ating higaan ay malambot din.", "Even the pillow on our bed is soft to rest our head."),
          make_translation("Hawakan ang iyong damit at damhin ang kalambutan!", "Touch your shirt and feel its soft physical texture!")
        ),
        "examples": [{"title": "Malambot", "content": "bulak (cotton), modeling clay, unan (pillow)"}]
      },
      {
        "title": "Ang Katangiang: Makintab",
        "text": make_text(
          make_translation("May mga bagay na sumasalamin sa liwanag ng araw.", "Some objects reflect the light of the sun beautifully."),
          make_translation("Ang pang-uring 'makintab' ay naglalarawan sa kanila.", "The adjective 'shiny' describes these bright materials."),
          make_translation("Halimbawa: 'Ang bagong metal na susi ay makintab.'", "Example: 'The new metal key is very shiny.'"),
          make_translation("Ang 'makintab' ay naglalarawan sa bagay na 'susi'.", "The word 'shiny' describes the common noun 'key'."),
          make_translation("Ang mga salamin at gintong barya ay makintab din.", "The mirrors and gold coins are also shiny to look at."),
          make_translation("Ang mga dahon na may waks ay tila makintab sa araw.", "Leaves with wax look shiny under the direct sunlight."),
          make_translation("Nakakukuha sila ng pansin dahil sa kanilang ningning.", "They attract attention due to their bright reflection."),
          make_translation("Maghanap ng makintab na bagay sa inyong kusina ngayon!", "Search for a shiny object in your kitchen cabinet now!")
        ),
        "examples": [{"title": "Makintab", "content": "susi (metal key), barya (coin), salamin (mirror)"}]
      },
      {
        "title": "Ang Katangiang: Magaspang",
        "text": make_text(
          make_translation("Ang texture ng bagay ay nararamdaman ng balat.", "The texture of objects is felt by our sense of touch."),
          make_translation("Ang pang-uring 'magaspang' ay naglalarawan sa kanila.", "The adjective 'rough' describes uneven surfaces."),
          make_translation("May mga uka at hindi pantay ang ibabaw ng solid.", "There are bumps and uneven parts on the solid surface."),
          make_translation("Halimbawa: 'Ang balat ng puno ng narra ay magaspang.'", "Example: 'The bark of the narra tree is very rough.'"),
          make_translation("Ang 'magaspang' ay naglalarawan sa pangngalang 'balat'.", "The word 'rough' describes the common noun 'bark'."),
          make_translation("Ang buhangin sa riverbank ay magaspang din sa paa.", "The sand on the riverbank is also rough under our feet."),
          make_translation("Gayundin ang liha na ginagamit sa pagpapakinis ng kahoy.", "The same is true for sandpaper used to smooth down wood."),
          make_translation("Damhin ang ibabaw ng pader gamit ang iyong daliri!", "Feel the surface of the wall using your fingers now!")
        ),
        "examples": [{"title": "Magaspang", "content": "balat ng puno (tree bark), buhangin (sand), liha (sandpaper)"}]
      },
      {
        "title": "Ang Katangiang: Makinis",
        "text": make_text(
          make_translation("May mga solid na may pantay at madulas na ibabaw.", "Some solids have flat and slippery physical surfaces."),
          make_translation("Ang pang-uring 'makinis' ay naglalarawan sa kanila.", "The adjective 'smooth' describes these even textures."),
          make_translation("Walang mga uka o guhit kapag hinawakan ng kamay.", "There are no bumps or lines when touched by your hand."),
          make_translation("Halimbawa: 'Ang ibabaw ng glass desk ay makinis.'", "Example: 'The surface of the glass desk is very smooth.'"),
          make_translation("Ang 'makinis' ay naglalarawan sa pangngalang 'ibabaw'.", "The word 'smooth' describes the common noun 'surface'."),
          make_translation("Ang mga plastik na plato at papel ay makinis din.", "The plastic plates and writing paper are also smooth."),
          make_translation("Madaling idulas ang daliri sa mga makinis na pook.", "It is easy to slide your finger across smooth places."),
          make_translation("Suriin ang ibabaw ng iyong desk kung ito ay makinis!", "Check the surface of your desk if it is smooth today!")
        ),
        "examples": [{"title": "Makinis", "content": "papel (paper), plato (plate), salamin (glass)"}]
      },
      {
        "title": "Paglalarawan sa Pook",
        "text": make_text(
          make_translation("Maaari din nating ilarawan ang mga pook sa atin.", "We can also describe the physical places around us."),
          make_translation("Gamit ang mga pang-uri tulad ng malawak o malinis.", "Using adjectives like wide, spacious, or clean."),
          make_translation("Halimbawa: 'Ang malawak na plaza ay puno ng tao.'", "Example: 'The wide town plaza is full of people.'"),
          make_translation("Ang 'malawak' ay pang-uri na naglalarawan sa 'plaza'.", "The word 'wide' is the adjective describing 'plaza'."),
          make_translation("Isa pang halimbawa: 'Ang malinis na ilog ay malamig.'", "Another example: 'The clean river is cold to touch.'"),
          make_translation("Ang 'malinis' at 'malamig' ay mga pang-uri sa pook.", "The words 'clean' and 'cold' are adjectives for places."),
          make_translation("Ito ay nagbibigay-buhay sa paglalarawan ng komunidad.", "This gives life to our descriptions of the community."),
          make_translation("Sumulat ng pang-uri para sa inyong silid-aralan!", "Write down an adjective for your school classroom today!")
        ),
        "examples": [{"title": "Pook", "content": "malawak na plaza (wide plaza), malinis na ilog (clean river)"}]
      },
      {
        "title": "Pang-uri at Pandama",
        "text": make_text(
          make_translation("Ang pang-uri ay nakukuha gamit ang limang pandama.", "Adjectives are gathered using our five senses daily."),
          make_translation("Nakikita natin ang kulay at hugis ng solid.", "We can see the color and shape of solid objects."),
          make_translation("Nararamdaman ng skin ang texture at temperature nito.", "Our skin feels their physical texture and temperature."),
          make_translation("E.g., 'malamig na yelo' o 'magaspang na pader'.", "E.g., 'cold ice' or 'rough wall' in our surroundings."),
          make_translation("Naririnig natin ang lakas ng tunog ng mga bagay.", "We hear the volume of sound waves produced by things."),
          make_translation("E.g., 'malakas na tunog' ng kampana sa simbahan.", "E.g., 'loud sound' of the bell in the town church."),
          make_translation("Ang pang-uri ay naglalahad ng katotohanan sa science.", "Adjectives express physical facts in science class."),
          make_translation("Gamitin ang iyong pandama sa pagsulat ng pang-uri!", "Use your senses when writing descriptive adjectives!")
        ),
        "examples": [{"title": "Pandama", "content": "malamig na yelo (cold ice), malakas na tunog (loud sound)"}]
      },
      {
        "title": "Pagsusuri sa Pangungusap",
        "text": make_text(
          make_translation("Suriin natin ang pang-uri sa pangungusap na ito.", "Let's analyze the adjective in this sentence."),
          make_translation("Pahayag: 'Kumuha si Matteo ng matigas na bato sa ilog.'", "Read: 'Matteo got a hard stone from the local river.'"),
          make_translation("Ano ang pang-uri na ginamit sa ating pahayag?", "What is the adjective used in our statement here?"),
          make_translation("Ang pang-uri ay 'matigas' na naglalarawan sa 'bato'.", "The adjective is 'hard' describing the common noun 'stone'."),
          make_translation("Ang 'bato' ay pangngalan; ang 'matigas' ay katangian.", "The 'stone' is the noun; 'hard' is the physical property."),
          make_translation("Isa pang pook na binanggit ay ang ilog na pambalana.", "Another place mentioned is the river which is common."),
          make_translation("Ang pagkilala sa pang-uri ay nagbibigay ng detalye.", "Identifying adjectives helps us understand the details."),
          make_translation("Isulat ang pang-uring ito sa iyong notebook ngayon!", "Write down this adjective in your notebook right now!")
        ),
        "examples": [{"title": "Pagsusuri", "content": "matigas (pang-uri) -> bato (pangngalan)"}]
      },
      {
        "title": "Pagsasanay: Matigas o Malambot?",
        "text": make_text(
          make_translation("Tukuyin natin ang tamang pang-uri para sa solid.", "Let's identify the correct adjective for the solid."),
          make_translation("Pahayag: 'Ang unan na ginagamit sa gabi ay ___.'", "Statement: 'The pillow we use at night is ___.'"),
          make_translation("Dahil ang unan ay yari sa cotton, ito ay 'malambot'.", "Since the pillow is made of cotton, it is 'soft'."),
          make_translation("Pahayag: 'Ang bakal na susi sa pintuan ay ___.'", "Statement: 'The metal key on the door is ___.'"),
          make_translation("Dahil ang bakal ay metal, ito ay 'matigas' sa hawak.", "Since the iron is metal, it is 'hard' to touch."),
          make_translation("Pahayag: 'Ang modeling clay sa mesa ay ___.'", "Statement: 'The modeling clay on the desk is ___.'"),
          make_translation("Dahil maaari itong mapisa ng kamay, ito ay 'malambot'.", "Since it can be squeezed by hand, it is 'soft'."),
          make_translation("Wastong pag-uri ang susi sa pagsusuri ng solid!", "Correct classification is key to analyzing solids!")
        ),
        "examples": [{"title": "Pagsasanay", "content": "unan -> malambot, susi -> matigas, clay -> malambot"}]
      },
      {
        "title": "Pagsasanay: Makinis o Magaspang?",
        "text": make_text(
          make_translation("Tukuyin ang texture ng mga sumusunod na solid.", "Identify the texture of the following solid objects."),
          make_translation("Pahayag: 'Ang liha na pampakinis ng kahoy ay ___.'", "Statement: 'The sandpaper used for wood is ___.'"),
          make_translation("Dahil may mga uka ito, ito ay 'magaspang' sa balat.", "Since it has bumps, it is 'rough' to the touch."),
          make_translation("Pahayag: 'Ang ibabaw ng bagong papel ay ___.'", "Statement: 'The surface of the new paper is ___.'"),
          make_translation("Dahil pantay ang ibabaw nito, ito ay 'makinis' isulat.", "Since the surface is even, it is 'smooth' to write on."),
          make_translation("Pahayag: 'Ang balat ng puno sa hardin ay ___.'", "Statement: 'The bark of the tree in the garden is ___.'"),
          make_translation("Dahil may mga uka ang puno, ito ay 'magaspang'.", "Since the tree bark has bumps, it is 'rough' to feel."),
          make_translation("Gamitin ang iyong pandama sa pagtukoy ng texture!", "Use your sense of touch to identify textures!")
        ),
        "examples": [{"title": "Pagsasanay Texture", "content": "liha -> magaspang, papel -> makinis, puno -> magaspang"}]
      },
      {
        "title": "Maling Pagtukoy ng Katangian",
        "text": make_text(
          make_translation("Iwasan ang maling paglalarawan sa mga solid.", "Avoid incorrect descriptions of solid materials."),
          make_translation("Huwag sabihing 'makinis' ang isang magaspang na liha.", "Do not say a rough piece of sandpaper is 'smooth'."),
          make_translation("O di kaya ay 'malambot' ang isang matigas na bakal.", "Or that a hard piece of metal iron key is 'soft'."),
          make_translation("Ito ay hindi tumutugma sa pisikal na katotohanan.", "This does not match the physical reality of the object."),
          make_translation("Sa science, kailangan natin ng tumpak na data.", "In science class, we require accurate physical data."),
          make_translation("Ang pang-uri ay dapat maglahad ng totoong katangian.", "The adjective must express the real properties of things."),
          make_translation("Suriin nang mabuti ang bagay bago ito isulat ngayon!", "Examine the object carefully before writing it down now!"),
          make_translation("Ito ay magbibigay ng tamang impormasyon sa lahat!", "This will provide the correct information to everyone!")
        ),
        "examples": [{"title": "Maling Katangian", "content": "mali: matigas na bulak -> tama: malambot na bulak"}]
      },
      {
        "title": "Wastong Pagsulat at Pangkopla",
        "text": make_text(
          make_translation("Gamitin ang pang-angkop na 'na' o 'ng' sa pagsulat.", "Use the ligatures 'na' or 'ng' in your writing."),
          make_translation("Kung ang pang-uri ay nagtatapos sa katinig, gamitin ang 'na'.", "If the adjective ends in a consonant, use 'na'."),
          make_translation("Halimbawa: 'matigas na key' o 'malambot na papel'.", "Example: 'matigas na key' or 'malambot na papel'."),
          make_translation("Kung nagtatapos sa patinig, idikit ang 'ng' sa dulo.", "If it ends in a vowel, attach 'ng' at the end."),
          make_translation("Halimbawa: 'makinis na mesa' -> 'makinis' ay nagtatapos sa s.", "Example: 'makinis' ends in s, so use 'makinis na mesa'."),
          make_translation("Ang 'maganda' ay nagtatapos sa a, kaya 'magandang'.", "The word 'maganda' ends in a, so it becomes 'magandang'."),
          make_translation("Ito ang wastong tuntunin sa pagsulat ng pang-uri.", "This is the correct rule in writing adjectives in Filipino."),
          make_translation("Magsanay sa paglalapat nito sa inyong papel ngayon!", "Practice applying this ligature rule on your paper now!")
        ),
        "examples": [{"title": "Pang-angkop", "content": "matigas + na = matigas na, maganda + ng = magandang"}]
      },
      {
        "title": "Buod ng Ikaapat na Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang paggamit ng pang-uri sa pagsulat.", "We learned the use of adjectives in our writing classes."),
          make_translation("Ikinonekta natin ang pang-uri sa katangian ng solid.", "We connected adjectives to the properties of solids."),
          make_translation("Natutunan natin ang matigas, malambot, at makintab.", "We learned about hard, soft, and shiny properties."),
          make_translation("Natutunan din natin ang makinis at magaspang na texture.", "We also learned about smooth and rough physical textures."),
          make_translation("Nalaman natin ang wastong paggamit ng pang-angkop.", "We discovered the correct use of grammatical ligatures."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggo ngayon?", "Are you ready for the quiz and challenges of the week today?"),
          make_translation("Ipakita ang iyong husay at galing sa wikang Filipino!", "Show your excellence and skills in the Filipino language!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pang-uri = Naglalarawan. Solid = Matigas, malambot, makinis, magaspang."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa mga salitang naglalarawan sa katangian ng pangngalan?", "options": ["pandiwa", "panghalip", "pang-uri", "pangatnig"], "answer": 2},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang pang-uri na naglalarawan ng texture?", "options": ["bato", "magaspang", "lapis", "pusa"], "answer": 1},
      {"type": "choice", "q": "Aling pang-uri ang angkop para sa bulak na ginagamit sa klinika?", "options": ["matigas", "malambot", "makintab", "mabigat"], "answer": 1},
      {"type": "choice", "q": "Aling pang-uri ang angkop para sa bakal na susi sa pintuan?", "options": ["malambot", "matigas", "magaan", "mabango"], "answer": 1},
      {"type": "choice", "q": "Ano ang texture ng isang salamin o glass desk?", "options": ["magaspang", "makinis", "malambot", "mabuhangin"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pang-uri sa parirala: 'pulang krayola'", "options": ["krayola", "pulang", "pulang krayola", "walang pang-uri"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pang-uri sa pangungusap: 'Ang matigas na semento ay hindi mabali.'", "options": ["semento", "mabali", "matigas", "hindi"], "answer": 2},
      {"type": "choice", "q": "Ano ang angkop na pang-uri para sa liha na ginagamit sa kahoy?", "options": ["makinis", "magaspang", "malambot", "makintab"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pang-uri na naglalarawan ng hitsura ng gintong barya?", "options": ["malambot", "makintab", "magaspang", "magaan"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang salitang 'bato' ay isang pang-uri.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling pang-uri ang angkop para sa unan na ginagamit sa higaan?", "options": ["matigas", "mabigat", "malambot", "magaspang"], "answer": 2},
      {"type": "choice", "q": "Tukuyin ang pang-uri sa pangungusap: 'Bumili si Matteo ng makintab na coin.'", "options": ["Matteo", "coin", "makintab", "Bumili"], "answer": 2},
      {"type": "choice", "q": "Ano ang angkop na pang-uri para sa pader na semento na hindi pa napapakinis?", "options": ["makinis", "magaspang", "malambot", "makintab"], "answer": 1},
      {"type": "choice", "q": "Aling pang-uri ang naglalarawan sa ibabaw ng bagong papel sa pagsulat?", "options": ["magaspang", "makinis", "malambot", "mabigat"], "answer": 1},
      {"type": "choice", "q": "Ano ang naglalarawan sa 'modeling clay' kapag ito ay pinipisa ng kamay?", "options": ["matigas", "malambot", "makintab", "magaspang"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pang-uri sa pangungusap: 'Malilim ang malawak na plaza.'", "options": ["Malilim", "malawak", "plaza", "ang"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang 'makinis' at 'magaspang' ay mga pang-uri na tumutukoy sa texture ng bagay.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod na parirala ang may wastong pang-angkop sa wika?", "options": ["matigas ng semento", "matigas na semento", "matigas semento", "matigasang semento"], "answer": 1},
      {"type": "choice", "q": "Aling salita ang pang-uri sa pangungusap: 'Si Gng. Santos ay nagdala ng pulang bulaklak.'?", "options": ["Santos", "bulaklak", "pulang", "nagdala"], "answer": 2},
      {"type": "choice", "q": "Ano ang tinutukoy ng pang-uri sa pangungusap?", "options": ["katangian ng pangngalan", "kilos ng tao", "lugar ng pangyayari", "ngalan ng hayop"], "answer": 0},
      {"type": "choice", "q": "Aling pang-uri ang angkop para sa tuyong balat ng puno ng narra?", "options": ["makinis", "magaspang", "malambot", "makintab"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pang-uri: 'Ang malinis na ilog ay malamig sa paa.'", "options": ["ilog", "malinis", "paa", "sa"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang 'makintab' ay ginagamit para sa mga bagay na hindi sumasalamin sa liwanag.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pang-uri na naglalarawan ng sukat ng isang pook?", "options": ["malawak", "mabango", "matigas", "makintab"], "answer": 0},
      {"type": "choice", "q": "Paano isinusulat ang pariralang 'maganda + papel' gamit ang pang-angkop?", "options": ["maganda na papel", "magandang papel", "magandag papel", "maganda papel"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling pangungusap ang naglalaman ng parehong pang-uri para sa texture at pang-uri para sa hardness?", "options": ["Ang makinis na glass desk ay may matigas na paa na bakal.", "Naglalaro ang aso sa malawak na kalsada.", "Si Gng. Santos ay nagdala ng pulang bulaklak.", "Masaya si Muning habang kumakain ng malambot na isda."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling parirala ang may pagkakamali sa pagkakagamit ng pang-angkop?", "options": ["makinis na papel", "matigas na bakal", "malambot na bulak", "makintab na aso"], "answer": 3},
      {"type": "choice", "q": "Challenge: Suriin ang pahayag: 'Ang bagong coin ay makintab.' Ano ang pangngalan na inilalarawan ng 'makintab'?", "options": ["bagong", "coin", "ay", "barya"], "answer": 1},
      {"type": "choice", "q": "Challenge: Tukuyin kung gaano karaming pang-uri ang nasa pangungusap: 'Ang malinis at malawak na plaza ay may pulang bulaklak.'", "options": ["isa", "dalawa", "tatlo", "apat"], "answer": 2},
      {"type": "choice", "q": "Challenge: Aling pang-uri ang HINDI angkop gamitin para sa solid na materyal na 'modeling clay'?", "options": ["malambot", "malleable", "matigas", "makulay"], "answer": 2}
    ],
    "performance": {
      "type": "performance",
      "title": "Pagsusuri ng Materyal sa Bahay",
      "desc": "Pumili ng tatlong magkakaibang bagay sa inyong tahanan (tulad ng kutsara, unan, at bato). Hawakan at suriin ang kanilang pisikal na katangian. Isulat sa isang papel ang ngalan ng bawat bagay at ilarawan ang mga ito gamit ang hindi bababa sa dalawang pang-uri (hal. kutsara -> matigas, makinis). Basahin at ipaliwanag ang iyong mga isinulat na pang-uri sa iyong magulang.",
      "labels": ["Wastong nakapili ng tatlong magkakaibang bagay sa bahay", "Wastong nagamit ang dalawang pang-uri para sa bawat napiling bagay", "Maayos na naipaliwanag ang mga katangian (texture, hardness) sa magulang"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Tukuyin ang Pang-uri</h3>
                  <p class="ws-instruction">Isulat ang pang-uri na ginamit sa bawat parirala sa ibaba gamit ang iyong stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. matigas na bato <span class="fil-sentence" data-translation="(hard stone)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">matigas</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. makinis na papel <span class="fil-sentence" data-translation="(smooth paper)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">makinis</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. pulang krayola <span class="fil-sentence" data-translation="(red crayon)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">pulang</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Katangian ng Solid</h3>
                  <p class="ws-instruction">Isulat kung ang bagay ay <strong>Matigas</strong> o <strong>Malambot</strong> batay sa pisikal na katangian nito.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. bulak na pampunas <span class="fil-sentence" data-translation="(cotton wipe)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Malambot</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. bakal na susi <span class="fil-sentence" data-translation="(metal key)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Matigas</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. unan sa higaan <span class="fil-sentence" data-translation="(sleeping pillow)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Malambot</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsulat ng Paglalarawan</h3>
                  <p class="ws-instruction">Sumulat ng isang pangungusap upang ilarawan ang ibinigay na bagay gamit ang angkop na pang-uri.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Ilarawan ang texture ng isang magaspang na liha: <span class="fil-sentence" data-translation="(Describe the texture of a rough sandpaper:)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Ang liha ay magaspang kapag hinawakan ng kamay.</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Ilarawan ang hitsura ng isang makintab na barya sa araw: <span class="fil-sentence" data-translation="(Describe the appearance of a shiny coin in the sun:)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Ang barya ay makintab dahil sumasalamin ito sa liwanag.</span></div>
                  </div>
                </div>"""
      ]
    }
  }
}
