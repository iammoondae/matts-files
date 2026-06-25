import os
import json

base_dir = "/home/moondae/Antigravity Projects/Matts Files_apk"
sources_dir = os.path.join(base_dir, "data", "sources", "g3")

def fix_week2(fpath):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Timog Cotabato de Bay -> Lake Sebu / Lawa ng Sebu
    content = content.replace("lawa ng Timog Cotabato de Bay", "Lawa ng Sebu")
    content = content.replace("Timog Cotabato de Bay lake", "Lake Sebu")
    content = content.replace("Timog Cotabato de Bay Lake", "Lake Sebu")
    content = content.replace("lake of Timog Cotabato de Bay", "Lake Sebu")
    content = content.replace("Lawa ng Timog Cotabato de Bay", "Lawa ng Sebu")

    # 2. Rizal Monument Calamba -> Koronadal leftovers
    content = content.replace("Bahay-Monumento ni Dr. Jose Rizal sa Koronadal", "Bahay-Monumento ni Dr. Jose Rizal sa Calamba")
    content = content.replace("House-Monument of Dr. Jose Rizal in Koronadal", "House-Monument of Dr. Jose Rizal in Calamba")

    # 3. Question about Rizal's house in Koronadal -> T'nalak Weaving Center in Lake Sebu
    old_q = "Which of the following is a historical site located in Koronadal, Timog Cotabato?"
    new_q = "Which of the following is a historical site located in Lake Sebu, Timog Cotabato?"
    content = content.replace(old_q, new_q)

    old_q_fil = "Alin sa mga sumusunod ang isang makasaysayang pook na matatagpuan sa Koronadal, Timog Cotabato?"
    new_q_fil = "Alin sa mga sumusunod ang isang makasaysayang pook na matatagpuan sa Lake Sebu, Timog Cotabato?"
    content = content.replace(old_q_fil, new_q_fil)

    old_opt = '"House of Dr. Jose Rizal"'
    new_opt = '"T\'nalak Weaving Center in Lake Sebu"'
    content = content.replace(old_opt, new_opt)

    old_opt_fil = "Bahay ni Dr. Jose Rizal"
    new_opt_fil = "T'nalak Weaving Center sa Lake Sebu"
    content = content.replace(old_opt_fil, new_opt_fil)

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed week 2 at {fpath}")

def fix_week4(fpath):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Slide 3: Name origin of Koronadal
    content = content.replace("Its name originated from the local term 'kalan-banga'.", 
                              "The name Koronadal came from the B'laan word koron meaning cogon grass.")
    content = content.replace("Nagmula ang pangalan nito sa salitang 'kalan-banga'.", 
                              "Ang pangalang Koronadal ay nagmula sa salitang B'laan na koron na ang ibig sabihin ay damong cogon.")
    content = content.replace("This is a clay pot used by the ancestors for cooking.", 
                              "And nadal meaning plain, describing the wide cogon plains that settlers saw.")
    content = content.replace("Ito ay isang palayok ng luwad para sa pagluluto.", 
                              "At nadal na nangangahulugang kapatagan, na naglalarawan sa malawak na kapatagan ng cogon.")
    content = content.replace("According to story, there were two Spanish soldiers yonder.", 
                              "In addition to this, the city is also famously called Marbel.")
    content = content.replace("Ayon sa kwento, may dalawang sundalong Kastila doon.", 
                              "Bukod dito, ang lungsod ay tanyag ding tinatawag na Marbel ngayon.")
    content = content.replace("They asked the name of the place to a local woman.", 
                              "The word Marbel originated from the Blaan term Marb-el which means murky waters.")
    content = content.replace("Tinanong nila ang pangalan ng pook sa isang babae.", 
                              "Ang salitang Marbel ay nagmula sa B'laan na Marb-el na ang ibig sabihin ay malabong tubig.")
    content = content.replace("The woman thought they were asking about her clay pot.", 
                              "This refers to the local river that becomes murky during heavy rains.")
    content = content.replace("Akala ng babae ay tinatanong ang kargang kalan-banga.", 
                              "Tumutukoy ito sa ilog sa pook na nagiging malabo kapag umuulan nang malakas.")
    content = content.replace("She answered: 'kalan-banga', which became 'Koronadal'.", 
                              "Understanding these origins helps us respect the history of our city.")
    content = content.replace("Sumagot siya: 'kalan-banga', na naging 'Koronadal'.", 
                              "Ang pag-alam sa pinagmulan na ito ay tumutulong sa atin na igalang ang kasaysayan.")
    content = content.replace("stove + clay pot -> Koronadal", 
                              "cogon + plain -> Koronadal. murky water -> Marbel")
    content = content.replace("stove + clay pot -> Koronadal", 
                              "cogon + plain -> Koronadal. murky water -> Marbel")
    content = content.replace("kalan (stove) + banga (clay pot) -> Koronadal", 
                              "cogon (koron) + kapatagan (nadal) -> Koronadal. malabong tubig (marb-el) -> Marbel")

    # 2. Slide 4: Monument
    content = content.replace("The Kalan-Banga Monument", "The Roundball Monument")
    content = content.replace("Ang Kalan-Banga Monumento", "Ang Monumento ng Roundball")
    content = content.replace("There is a large kalan-banga monument built in Koronadal.", 
                              "There is a famous Roundball Monument built in Koronadal.")
    content = content.replace("May malaking monumento ng kalan-banga sa Koronadal.", 
                              "May tanyag na Monumento ng Roundball na itinayo sa Koronadal.")
    content = content.replace("It is located yonder in the public city plaza of Koronadal.", 
                              "It is located yonder at the busy intersection plaza of Koronadal.")
    content = content.replace("Ito ay matatagpuan sa plaza ng lungsod ng Koronadal.", 
                              "Ito ay matatagpuan sa abalang interseksyon sa plaza ng Koronadal.")
    content = content.replace("It is a huge clay pot monument built using hard concrete.", 
                              "It is a large circular monument built using hard concrete.")
    content = content.replace("Ito ay isang malaking palayok na gawa sa semento.", 
                              "Ito ay isang malaking pabilog na bantayog na yari sa semento.")
    content = content.replace("It is decorated with the names of all its barangays.", 
                              "It is decorated with local designs representing different cultural groups.")
    content = content.replace("Pinalalamutian ito ng mga pangalan ng mga barangay.", 
                              "Pinalalamutian ito ng mga disenyo na kumakatawan sa iba't ibang kultura.")
    content = content.replace("This displays the unity and connection of each barangay.", 
                              "This displays the unity and connection of all settlers in our area.")
    content = content.replace("Ipinapakita nito ang pagkakaisa ng bawat barangay.", 
                              "Ipinapakita nito ang pagkakaisa at ugnayan ng bawat naninirahan sa pook.")
    content = content.replace("Each barangay is like a piece of the kalan-banga pot.", 
                              "Each group works together to build a strong community life.")
    content = content.replace("Ang bawat barangay ay parang bahagi ng kalan-banga.", 
                              "Ang bawat pangkat ay nagtutulungan upang mabuo ang maunlad na pamayanan.")
    content = content.replace("The monument is a physical primary source for the city.", 
                              "The monument is a physical primary source for our city's history.")
    content = content.replace("Ang monumento ay isang primaryang batayan sa pook.", 
                              "Ang monumento ay isang primaryang batayan sa kasaysayan ng lungsod.")
    content = content.replace("Examine the drawing of the kalan-banga in your book now!", 
                              "Examine the drawing of the monument in your book now!")
    content = content.replace("Suriin ang guhit ng kalan-banga sa inyong aklat!", 
                              "Suriin ang guhit ng monumento sa inyong aklat ngayon!")
    content = content.replace("Kalan-Banga Plaza (barangay unity monument)", 
                              "Roundball Plaza (cultural unity monument)")
    content = content.replace("Kalan-Banga Plaza (monumento ng pagkakaisa ng barangay)", 
                              "Roundball Plaza (monumento ng pagkakaisa ng kultura)")

    # 3. Slide 6: Province Origin
    content = content.replace("Its name originated from the Spanish term 'la timog cotabato'.", 
                              "Its name originated from the term 'kuta wato' meaning stone fort.")
    content = content.replace("Nagmula ang pangalan nito sa salitang 'la timog cotabato'.", 
                              "Nagmula ang pangalan nito sa salitang 'kuta wato' na ang ibig sabihin ay kutang bato.")
    content = content.replace("This means 'the lake' in the Spanish language yonder.", 
                              "This refers to the historical stone fort of the early Maguindanaon.")
    content = content.replace("Ibig sabihin nito ay 'ang lawa' sa wikang Kastila.", 
                              "Tumutukoy ito sa makasaysayang kutang bato ng mga naunang Maguindanaon.")
    content = content.replace("This is due to the large lake of Timog Cotabato de Bay nearby.", 
                              "The prefix 'Timog' describes its location in the southern region.")
    content = content.replace("Ito ay dahil sa malaking lawa ng Timog Cotabato de Bay.", 
                              "Ang salitang 'Timog' naman ay naglalarawan ng lokasyon nito sa timog na bahagi.")
    content = content.replace("The lake connects many towns and barangays in history.", 
                              "The province is rich in resources and has beautiful lakes like Lake Sebu.")
    content = content.replace("Ang lawa ay nagdugtong sa maraming bayan at barangay.", 
                              "Ang lalawigan ay mayaman sa likas na yaman at may magagandang lawa tulad ng Lawa ng Sebu.")
    content = content.replace("The history of this lake is part of our shared history.", 
                              "The history of this province is part of our shared culture today.")
    content = content.replace("Ang kasaysayan ng lawa ay bahagi ng kasaysayan natin.", 
                              "Ang kasaysayan ng lalawigang ito ay bahagi ng ating kultura ngayon.")
    content = content.replace("la timog cotabato (the lake) -> Timog Cotabato de Bay", 
                              "kuta wato (stone fort) -> Cotabato. Timog (South)")
    content = content.replace("la timog cotabato (the lake) -> Timog Cotabato de Bay", 
                              "kuta wato (stone fort) -> Cotabato. Timog (South)")

    # 4. Slide 8: Province name history
    content = content.replace("The history of names describes the geographical features.", 
                              "The history of names describes the geographical features and culture.")
    content = content.replace("Ang kasaysayan ng pangalan ay naglalarawan ng pook.", 
                              "Ang kasaysayan ng pangalan ay naglalarawan ng pook at kultura.")
    content = content.replace("We learned that 'Timog Cotabato' is named due to our large lake.", 
                              "We learned that 'Timog Cotabato' is named after the stone fort kuta wato.")
    content = content.replace("Nalaman natin na ang 'Timog Cotabato' ay dahil sa lawa natin.", 
                              "Nalaman natin na ang 'Timog Cotabato' ay mula sa kutang bato o kuta wato.")
    content = content.replace("This shows that the lake yonder is the center of life.", 
                              "This shows the strength and defense of our early ancestors yonder.")
    content = content.replace("Ito ay nagpapakita na ang lawa ang sentro ng buhay.", 
                              "Ito ay nagpapakita ng katatagan at pagtatanggol ng ating mga ninuno.")
    content = content.replace("The name 'Koronadal' is due to the kalan-banga clay pot.", 
                              "The name 'Koronadal' is derived from cogon plains or flat grassy land.")
    content = content.replace("Ang 'Koronadal' ay dahil sa kalan-banga o palayok.", 
                              "Ang pangalang 'Koronadal' naman ay mula sa kapatagan ng cogon.")
    content = content.replace("This shows the native art of pottery making yonder.", 
                              "This shows the vast and fertile agricultural plains of our city.")
    content = content.replace("Ito ay nagpapakita ng katutubong sining ng pagpapalayok.", 
                              "Ito ay nagpapakita ng malawak at matabang kapatagan ng ating lungsod.")
    content = content.replace("Share the story of the kalan-banga with your family tonight!", 
                              "Share the story of Koronadal with your family tonight!")
    content = content.replace("Ibahagi ang kwento ng kalan-banga sa iyong pamilya!", 
                              "Ibahagi ang kwento ng Koronadal sa iyong pamilya ngayong gabi!")
    content = content.replace("Timog Cotabato -> Lake, Koronadal -> Kalan-Banga", 
                              "Timog Cotabato -> Stone Fort, Koronadal -> Cogon Plains")
    content = content.replace("Timog Cotabato -> Lawa, Koronadal -> Kalan-Banga", 
                              "Timog Cotabato -> Kutang Bato, Koronadal -> Kapatagan ng Cogon")
    content = content.replace("Timog Cotabato = Lake", "Timog Cotabato = Stone Fort")
    content = content.replace("Timog Cotabato = Lawa", "Timog Cotabato = Kutang Bato")
    content = content.replace("Koronadal = Kalan-Banga", "Koronadal = Cogon Plains")
    content = content.replace("Koronadal = Kapatagan ng Cogon", "Koronadal = Kapatagan ng Cogon") # safety check

    # 5. Slide 10: Guided Practice Roundball
    content = content.replace("Guided Practice: Kalan-Banga", "Guided Practice: Roundball Monument")
    content = content.replace("Suriin natin ang monumento ng kalan-banga sa plaza.", 
                              "Suriin natin ang monumento ng Roundball sa plaza natin.")
    content = content.replace("Let's analyze the kalan-banga monument in the plaza.", 
                              "Let's analyze the Roundball Monument in the plaza.")
    content = content.replace("Why are there names of barangays written on this clay pot?", 
                              "Why are there local cultural designs carved on this monument?")
    content = content.replace("Bakit may mga pangalan ng barangay sa palayok na ito?", 
                              "Bakit may mga katutubong disenyo ng kultura sa bantayog na ito?")
    content = content.replace("It shows that Koronadal City is made up of its barangays.", 
                              "It shows that Koronadal City is made up of different cultures.")
    content = content.replace("Ipinapakita nito na ang Koronadal ay binubuo ng barangay.", 
                              "Ipinapakita nito na ang Koronadal ay binubuo ng iba't ibang kultura.")
    content = content.replace("Each barangay unites to form the complete municipal body.", 
                    "Each group unites to form the complete peace of the city.")
    content = content.replace("Ang bawat barangay ay nagkakaisa upang mabuo ang bayan.", 
                              "Ang bawat pangkat ay nagkakaisa upang mabuo ang kapayapaan sa lungsod.")
    content = content.replace("This symbolizes the active cooperation of the citizens yonder.", 
                              "This symbolizes the active cooperation of the settlers yonder.")
    content = content.replace("Ito ay sumasagisag sa pagtutulungan ng mga mamamayan.", 
                              "Ito ay sumasagisag sa pagtutulungan ng mga naninirahan sa pook.")
    content = content.replace("The failure of one part affects the entire town's wellness.", 
                              "The failure of one part affects the entire town's peace.")
    content = content.replace("Ang pagkasira ng isa ay nakakaapekto sa buong bayan.", 
                              "Ang pagkasira ng isa ay nakakaapekto sa buong kapayapaan ng bayan.")
    content = content.replace("Draw the kalan-banga pot with names of barangays on paper!", 
                              "Draw the Roundball monument with cultural symbols on paper!")
    content = content.replace("Iguhit ang kalan-banga na may pangalan ng barangay!", 
                              "Iguhit ang monumento ng Roundball na may mga simbolo sa papel!")
    content = content.replace("Training Kalan-Banga", "Training Roundball")
    content = content.replace("Pagsasanay Kalan-Banga", "Pagsasanay Roundball")
    content = content.replace("Kalan-Banga monument = symbol of the unity of the barangays.", 
                              "Roundball monument = symbol of the unity of the settlers.")
    content = content.replace("Kalan-Banga monument = simbolo ng pagkakaisa ng mga barangay.", 
                              "Roundball monument = simbolo ng pagkakaisa ng mga naninirahan.")

    # 6. Slide 12: Lake
    content = content.replace("Guided Practice: Timog Cotabato Lake", "Guided Practice: Lake Sebu")
    content = content.replace("Guided Practice: Lawa ng Timog Cotabato", "Guided Practice: Lawa ng Sebu")
    content = content.replace("Training Lake", "Training Lake Sebu")
    content = content.replace("Pagsasanay Lawa", "Pagsasanay Lawa ng Sebu")
    content = content.replace("Timog Cotabato de Bay = connected the trade of the towns.", 
                              "Lake Sebu = connected the trade of the towns.")
    content = content.replace("Timog Cotabato de Bay = nagdugtong sa kalakalan ng mga bayan.", 
                              "Lawa ng Sebu = nagdugtong sa kalakalan ng mga bayan.")

    # 7. Slide 14: False story
    content = content.replace("False Story of Kalan-Banga", "False Story of Koronadal's Name")
    content = content.replace("Maling Kwento ng Kalan-Banga", "Maling Kwento ng Pangalan ng Koronadal")
    content = content.replace("Avoid fabricating the origin story of the kalan-banga.", 
                              "Avoid fabricating the origin story of Koronadal's name.")
    content = content.replace("Iwasan ang pag-imbento ng kwento ng kalan-banga.", 
                              "Iwasan ang pag-imbento ng kwento ng pangalan ng Koronadal.")
    content = content.replace("Do not write yonder that the kalan-banga was made of plastic.", 
                              "Do not write yonder that Koronadal was named after a Spanish ruler.")
    content = content.replace("Huwag sabihing ito ay yari sa plastik na laruan doon.", 
                              "Huwag sabihing ang Koronadal ay ipinangalan sa pinunong Kastila.")
    content = content.replace("The kalan-banga was a clay pot made by our early ancestors.", 
                              "The name Koronadal came from cogon plains in the B'laan language.")
    content = content.replace("Ang kalan-banga ay yari sa luwad o clay ng mga ninuno.", 
                              "Ang pangalang Koronadal ay mula sa kapatagan ng cogon sa B'laan.")
    content = content.replace("Make sure of the correct historical legend of the soldiers.", 
                              "Make sure of the correct historical origins of the B'laan settlers.")
    content = content.replace("Tiyakin ang tamang kwento ng babae at mga Kastila.", 
                              "Tiyakin ang tamang kasaysayan at pinagmulan ng mga B'laan.")
    content = content.replace("kalan-banga = clay pot (clay pot), NOT plastic.", 
                              "Koronadal = cogon plains, NOT Spanish name.")
    content = content.replace("kalan-banga = palayok ng luwad (clay pot), HINDI plastik.", 
                              "Koronadal = kapatagan ng cogon, HINDI pangalang Kastila.")

    # 8. Slide 25: Summary
    content = content.replace("We discovered the legend of kalan-banga in Koronadal City.", 
                              "We discovered the name origins of Koronadal City.")
    content = content.replace("Nalaman natin ang kwento ng kalan-banga sa Koronadal natin.", 
                              "Nalaman natin ang kwento ng mga pangalan sa Koronadal natin.")
    content = content.replace("We analyzed the kalan-banga monument yonder in the plaza.", 
                              "We analyzed the Roundball monument yonder in the plaza.")
    content = content.replace("Suriin natin ang monumento ng kalan-banga sa plaza natin.", 
                              "Suriin natin ang monumento ng Roundball sa plaza natin.")
    content = content.replace("We studied the history of the lake of Timog Cotabato de Bay yonder.", 
                              "We studied the history of Lake Sebu yonder.")
    content = content.replace("Nag-aral tayo ng kasaysayan ng lawa ng Timog Cotabato de Bay.", 
                              "Nag-aral tayo ng kasaysayan ng Lawa ng Sebu.")

    # 9. General Timog Cotabato de Bay references in Week 4
    content = content.replace("Timog Cotabato de Bay lake", "Lake Sebu")
    content = content.replace("lawa ng Timog Cotabato de Bay", "Lawa ng Sebu")
    content = content.replace("Lawa ng Timog Cotabato de Bay", "Lawa ng Sebu")
    content = content.replace("Timog Cotabato de Bay", "Lake Sebu")

    # 10. Quiz Questions
    content = content.replace("Which monument is the symbol of the origin of the Koronadal City?", 
                              "Which of the following is a famous cultural monument located in Koronadal City?")
    content = content.replace("Aling monumento ang simbolo ng pinagmulan ng Lungsod ng Koronadal?", 
                              "Aling monumento ang sikat na bantayog ng kultura na matatagpuan sa Lungsod ng Koronadal?")
    content = content.replace("Kalan-Banga monument", "Roundball monument")
    content = content.replace("monumento ng palayok ng plastik", "monumento ng boteng plastik")
    content = content.replace("plastic bottle monument", "plastic bottle monument")

    # True or False
    content = content.replace("True or False: A &#x27;pot&#x27; is a pot made of plastic obtained from Spain.", 
                              "True or False: The name Koronadal came from words meaning 'cogon plains'.")
    content = content.replace("Tama o Mali: Ang 'kalan-banga' ay isang palayok na gawa sa plastik na nakuha mula sa Espanya.", 
                              "Tama o Mali: Ang pangalang Koronadal ay nagmula sa mga salitang nangangahulugang 'kapatagan ng cogon'.")

    # What do the barangay names...
    content = content.replace("What do the barangay names written on the Kalan-Banga monument show?", 
                              "What does the Roundball Monument in Koronadal City show?")
    content = content.replace("Ano ang ipinapakita ng mga pangalan ng barangay na nakasulat sa Kalan-Banga monument?", 
                              "Ano ang ipinapakita ng Monumento ng Roundball sa Lungsod ng Koronadal?")
    content = content.replace("unity of all barangays in Koronadal", 
                              "unity of all cultures in the community")
    content = content.replace("pagkakaisa ng lahat ng barangay sa Koronadal", 
                              "pagkakaisa ng lahat ng kultura sa komunidad")

    # Challenge quiz questions
    content = content.replace("Challenge: Why is a pot or clay pot chosen as the symbol and name of the Koronadal City?", 
                              "Challenge: Why was 'Koronadal' chosen as the name of the city?")
    content = content.replace("Challenge: Bakit kalan-banga o palayok ng luwad ang napiling simbolo at pangalan ng Lungsod ng Koronadal?", 
                              "Challenge: Bakit Koronadal ang naging pangalan ng lungsod?")
    content = content.replace("Because pottery is an important indigenous art and livelihood of the ancestors in the area.", 
                              "Because it describes the wide cogon plains (koron and nadal) seen by B'laan settlers.")
    content = content.replace("Dahil ang pagpapalayok ay isang mahalagang katutubong sining at kabuhayan ng mga ninuno sa pook.", 
                              "Dahil inilalarawan nito ang malawak na kapatagan ng cogon (koron at nadal) na nakita ng mga B'laan.")
    content = content.replace("Because it is the favorite dish of the Spanish.", 
                              "Because it was named after a Spanish governor.")
    content = content.replace("Dahil ito ang paboritong lutuan ng mga Espanyol.", 
                              "Dahil ipinangalan ito sa isang gobernador na Kastila.")
    content = content.replace("Because there was no other equipment in the city back in the day.", 
                              "Because there was a large river named Koronadal.")
    content = content.replace("Dahil walang ibang kagamitan sa lungsod noong araw.", 
                              "Dahil mayroong malaking ilog na ang pangalan ay Koronadal.")

    content = content.replace("Challenge: How does the Kalan-Banga monument in the square help to remind the people about the history of the area?", 
                              "Challenge: How does the Roundball monument in Koronadal help to remind the people about the history of the area?")
    content = content.replace("Challenge: Paano nakatutulong ang Kalan-Banga monument sa plaza upang paalalahanan ang mga mamamayan tungkol sa kasaysayan ng pook?", 
                              "Challenge: Paano nakatutulong ang monumento ng Roundball sa Koronadal upang paalalahanan ang mga mamamayan tungkol sa kasaysayan ng pook?")
    content = content.replace("It serves as a physical primary source (monument) that reminds the legend of the city&#x27;s name and the unity of the barangays.", 
                              "It serves as a physical primary source (monument) that represents the unity of different cultures and settlers in the city.")
    content = content.replace("Nagsisilbi itong pisikal na primary source (monumento) na nagpapaalala sa alamat ng pangalan ng lungsod at pagkakaisa ng mga barangay.", 
                              "Nagsisilbi itong pisikal na primary source (monumento) na kumakatawan sa pagkakaisa ng iba't ibang kultura at naninirahan sa lungsod.")

    # 11. Performance Task & Worksheet
    content = content.replace("The Legend of Kalan-Banga", "The Name Origins of South Cotabato")
    content = content.replace("Ang Alamat ng Kalan-Banga", "Ang Pinagmulan ng mga Pangalan sa Timog Cotabato")
    content = content.replace("Talk to your parents about the legend of Koronadal City&#x27;s pot-pot. Tell them about it in your own words. Draw the kalan-banga (clay pot) on a clean piece of paper and write below the three barangays you know in Koronadal. Explain the importance of barangay unity in your family.", 
                              "Talk to your parents about the origins of the names Koronadal and Timog Cotabato. Tell them about the B'laan word origins and the Maguindanaon 'kuta wato' meaning. Draw a simple sketch representing a cogon plain or a stone fort on a clean piece of paper, and write three municipal towns in South Cotabato below it. Explain the importance of unity among different cultures to your family.")
    content = content.replace("Kausapin ang iyong magulang tungkol sa alamat ng kalan-banga ng Lungsod ng Koronadal. Ikuwento ito sa kanila gamit ang iyong sariling pananalita. Iguhit ang kalan-banga (palayok ng luwad) sa isang malinis na papel at isulat sa ibaba ang tatlong barangay na alam mo sa Koronadal. Ipaliwanag ang kahalagahan ng pagkakaisa ng mga barangay sa iyong pamilya.", 
                              "Kausapin ang iyong magulang tungkol sa pinagmulan ng mga pangalang Koronadal at Timog Cotabato. Ikuwento ito sa kanila gamit ang mga salitang B'laan at ang kahulugan ng Maguindanaon na 'kuta wato'. Gumuhit ng simpleng larawan ng kapatagan o kutang bato sa isang malinis na papel, at isulat sa ibaba ang tatlong bayan sa Timog Cotabato na alam mo. Ipaliwanag ang kahalagahan ng pagkakaisa ng iba't ibang kultura sa iyong pamilya.")
    content = content.replace("The kalan-banga (clay pot) is neatly drawn on the paper", 
                              "The drawing representing plains or stone fort is neatly drawn")
    content = content.replace("Maayos na naiguhit ang kalan-banga (clay pot) sa papel", 
                              "Maayos na naiguhit ang larawan ng kapatagan o kutang bato sa papel")
    content = content.replace("The legend of kalan-banga was properly told to the parents", 
                              "The name origins of the province and city were properly told to parents")
    content = content.replace("Wastong naikuwento ang alamat ng kalan-banga sa magulang", 
                              "Wastong naikuwento ang pinagmulan ng pangalan ng lalawigan at lungsod sa magulang")
    content = content.replace("The three barangays of Koronadal are correctly written with capital letters", 
                              "The three towns of South Cotabato are correctly written with capital letters")
    content = content.replace("Wastong naisulat ang tatlong barangay ng Koronadal na may malaking titik", 
                              "Wastong naisulat ang tatlong bayan ng Timog Cotabato na may malaking titik")

    # Worksheet pages
    content = content.replace("A. Nagmula sa lawa (la timog cotabato).", "A. Nagmula sa kutang bato (kuta wato).")
    content = content.replace("B. Nagmula sa kalan-banga (clay pot).", "B. Nagmula sa kapatagan ng cogon (koron-nadal).")
    content = content.replace("Exercise 3: Analysis of the Kalan-Banga Monument", "Exercise 3: Analysis of the Roundball Monument")
    content = content.replace("Pagsasanay 3: Pagsusuri ng Kalan-Banga Monumento", "Pagsasanay 3: Pagsusuri ng Monumento ng Roundball")
    content = content.replace("What is the important meaning of the Kalan-Banga monument in Koronadal plaza?", 
                              "What is the important meaning of the Roundball monument in Koronadal plaza?")
    content = content.replace("Ano ang mahalagang kahulugan ng Kalan-Banga monumento sa plaza ng Koronadal?", 
                              "Ano ang mahalagang kahulugan ng monumento ng Roundball sa plaza ng Koronadal?")
    content = content.replace("Sinasagisag nito ang alamat ng lungsod at ang pagkakaisa ng lahat ng barangay.", 
                              "Sinasagisag nito ang ugnayan at pagkakaisa ng iba't ibang kultura at mga naninirahan.")
    content = content.replace("Ipinapakita nito na ang bawat barangay ay nagtutulungan para sa kaunlaran ng bayan.", 
                              "Ipinapakita nito na ang bawat pangkat ay nagtutulungan para sa kapayapaan at kaunlaran.")

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed week 4 at {fpath}")

def main():
    fix_week2(os.path.join(sources_dir, "makabansa", "week2.json"))
    fix_week2(os.path.join(sources_dir, "makabansa_advanced", "week2.json"))

    fix_week4(os.path.join(sources_dir, "makabansa", "week4.json"))
    fix_week4(os.path.join(sources_dir, "makabansa_advanced", "week4.json"))

if __name__ == "__main__":
    main()
