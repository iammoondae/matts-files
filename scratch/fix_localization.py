import os
import json

base_dir = "/home/moondae/Antigravity Projects/Matts Files_apk"
sources_dir = os.path.join(base_dir, "data", "sources", "g3")

def fix_filipino_week1(fpath):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. bundok makiling spelling options
    old_opts = """        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">bundok matutum</span>",
        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">Bundok makiling</span>",
        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">Bundok Matutum</span>",
        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">bundok Makiling</span>\""""
    
    new_opts = """        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">bundok matutum</span>",
        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">Bundok matutum</span>",
        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">Bundok Matutum</span>",
        "<span class=\\"fil-sentence\\" data-translation=\\"mountain slope\\">bundok Matutum</span>\""""
    
    content = content.replace(old_opts, new_opts)

    # 2. Pasig river walk translation/Filipino mismatch
    old_walk = '"<span class=\\"fil-sentence\\" data-translation=\\"Caloy went to the Pasig river for a walk.\\">Pumunta si Caloy sa ilog ng Pasig upang mamasyal.</span>"'
    new_walk = '"<span class=\\"fil-sentence\\" data-translation=\\"Caloy went to Lake Sebu for a walk.\\">Pumunta si Caloy sa Lawa ng Sebu upang mamasyal.</span>"'
    content = content.replace(old_walk, new_walk)

    # 3. Pasig river is clean today translation/Filipino mismatch
    old_clean = '<span class=\\"fil-sentence\\" data-translation=\\"Pasig river is clean today.\\">Malinis ang lawa ng sebu ngayon.</span>'
    new_clean = '<span class=\\"fil-sentence\\" data-translation=\\"Lake Sebu is clean today.\\">Malinis ang Lawa ng Sebu ngayon.</span>'
    content = content.replace(old_clean, new_clean)

    # 4. Capital letter rules (I and P -> L and S)
    content = content.replace("Capital letter I and capital letter P are both required.", "Capital letter L and capital letter S are both required.")
    content = content.replace("Malaki ang titik I at malaki rin ang titik P.", "Malaki ang titik L at malaki rin ang titik S.")

    # 5. Jose Rizal birth in Koronadal (Slide 7 standard)
    old_birth_std = """      "text": "<span class=\\"fil-sentence\\" data-translation=\\"Many places are named after our national heroes.\\">Maraming pook ang ipinangalan sa mga bayani natin.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"Examples: 'Rizal Street' or 'Town of Bonifacio'.\\\">Halimbawa: 'Kalye Rizal' o 'Bayan ng Bonifacio'.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"These historical places are proper nouns.\\\">Ang mga pook na ito ay mga pangngalang pantangi.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"A capital letter is needed due to the specific name.\\\">Kailangan ang malaking titik dahil may tiyak na ngalan.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"Dr. Jose Rizal was born in Koronadal, Timog Cotabato.\\\">Si Dr. Jose Rizal ay ipinanganak sa Koronadal, Timog Cotabato.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"Both 'Koronadal' and 'Timog Cotabato' are proper nouns.\\\">Ang 'Koronadal' at 'Timog Cotabato' ay parehong pantangi.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"They start with the capital letters C and L.\\\">Sila ay nagsisimula sa malalaking titik na C at L.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"This shows respect to these important places!\\\">Ito ay nagpapakita ng paggalang sa mga pook na ito!</span>\","""
    
    new_birth_std = """      "text": "<span class=\\"fil-sentence\\" data-translation=\\\"Many places are named after our national heroes.\\\">Maraming pook ang ipinangalan sa mga bayani natin.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"Examples: 'Rizal Street' or 'Town of Bonifacio'.\\\">Halimbawa: 'Kalye Rizal' o 'Bayan ng Bonifacio'.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"These historical places are proper nouns.\\\">Ang mga pook na ito ay mga pangngalang pantangi.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"A capital letter is needed due to the specific name.\\\">Kailangan ang malaking titik dahil may tiyak na ngalan.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"Matteo's cousin was born in Koronadal, Timog Cotabato.\\\">Ang pinsan ni Matteo ay ipinanganak sa Koronadal, Timog Cotabato.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"Both 'Koronadal' and 'Timog Cotabato' are proper nouns.\\\">Ang 'Koronadal' at 'Timog Cotabato' ay parehong pantangi.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"They start with the capital letters K and T.\\\">Sila ay nagsisimula sa malalaking titik na K at T.</span>\\n<span class=\\"fil-sentence\\" data-translation=\\\"This shows respect to these important places!\\\">Ito ay nagpapakita ng paggalang sa mga pook na ito!</span>\","""
    content = content.replace(old_birth_std, new_birth_std)

    # 6. Jose Rizal birth in Koronadal (Slide 7 advanced)
    old_birth_adv = """<span class=\\"fil-sentence\\" data-translation=\\\"Dr. Jose Rizal was born in Koronadal, Timog Cotabato.\\\">Si Dr. Jose Rizal ay ipinanganak sa Koronadal, Timog Cotabato.</span> <span class=\\"fil-sentence\\" data-translation=\\\"Both 'Koronadal' and 'Timog Cotabato' are proper nouns.\\\">Ang 'Koronadal' at 'Timog Cotabato' ay parehong pantangi.</span> <span class=\\"fil-sentence\\" data-translation=\\\"They start with the capital letters C and L.\\\">Sila ay nagsisimula sa malalaking titik na C at L.</span>"""
    new_birth_adv = """<span class=\\"fil-sentence\\" data-translation=\\\"Matteo's cousin was born in Koronadal, Timog Cotabato.\\\">Ang pinsan ni Matteo ay ipinanganak sa Koronadal, Timog Cotabato.</span> <span class=\\"fil-sentence\\" data-translation=\\\"Both 'Koronadal' and 'Timog Cotabato' are proper nouns.\\\">Ang 'Koronadal' at 'Timog Cotabato' ay parehong pantangi.</span> <span class=\\"fil-sentence\\" data-translation=\\\"They start with the capital letters K and T.\\\">Sila ay nagsisimula sa malalaking titik na K at T.</span>"""
    content = content.replace(old_birth_adv, new_birth_adv)

    # 7. Health hospital capitalization letters check (O and L -> O, T, and C)
    content = content.replace("capital letters O and L.", "capital letters O, T, and C.")
    content = content.replace("titik O at L.", "titik O, T, at C.")

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed {fpath}")

def fix_filipino_week3(fpath):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    old_text = '"Si Matteo ay pumunta sa magandang ilog ng Pasig.'
    new_text = '"Si Matteo ay pumunta sa magandang Lawa ng Sebu.'
    content = content.replace(old_text, new_text)

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed {fpath}")

def fix_makabansa_week1(fpath):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Who is the national hero born in Koronadal...
    content = content.replace("Who is the national hero born in the Koronadal City, Timog Cotabato?", "Who is the national hero born in Calamba City, Laguna?")
    content = content.replace("Sino ang pambansang bayani na ipinanganak sa Lungsod ng Koronadal, Timog Cotabato?", "Sino ang pambansang bayani na ipinanganak sa Lungsod ng Calamba, Laguna?")

    # 2. E.g., Dr. Jose Rizal in Koronadal...
    content = content.replace("E.g., Dr. Jose Rizal in the Koronadal City, Timog Cotabato.", "E.g., Dr. Jose Rizal in Calamba City, Laguna.")
    content = content.replace("E.g., si Dr. Jose Rizal sa Lungsod ng Koronadal.", "E.g., si Dr. Jose Rizal sa Lungsod ng Calamba, Laguna.")

    # 3. Example: Koronadal City childhood...
    content = content.replace("Example: the Koronadal City in Timog Cotabato is a place.", "Example: the Calamba City in Laguna is a place.")
    content = content.replace("Halimbawa: ang Lungsod ng Koronadal ay isang pook.", "Halimbawa: ang Lungsod ng Calamba sa lalawigan ng Laguna ay isang pook.")

    # 4. Rizal born in Koronadal in 1861
    content = content.replace("Rizal was born in Koronadal in 1861.", "Rizal was born in Calamba in 1861.")
    content = content.replace("Ipinanganak si Rizal sa Koronadal noong 1861.", "Ipinanganak si Rizal sa Calamba noong 1861.")
    content = content.replace("Born Dr. Jose Rizal in Koronadal on June 19, 1861.", "Born Dr. Jose Rizal in Calamba on June 19, 1861.")
    content = content.replace("Ipinanganak si Dr. Jose Rizal sa Koronadal noong Hunyo 19, 1861.", "Ipinanganak si Dr. Jose Rizal sa Calamba noong Hunyo 19, 1861.")

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed {fpath}")

def fix_makabansa_week2(fpath, is_advanced=False):
    with open(fpath, "r", encoding="utf-8") as f:
        data = json.load(f)

    # 1. Slide 15: Guided Practice: Historic Sites
    # Let's find slide with title containing "Historic Sites" or "Makasaysayang Lugar"
    for slide in data.get("slides", []):
        title_clean = slide.get("title", "")
        if "Historic Sites" in title_clean or "Makasaysayang Lugar" in title_clean:
            if is_advanced:
                slide["text"] = '<span class="fil-sentence" data-translation="Let\'s analyze a historical place in our province South Cotabato.">Suriin natin ang isang makasaysayang pook sa Timog Cotabato.</span> <span class="fil-sentence" data-translation="This is the \'T\'nalak Weaving Center\' in Lake Sebu.">Ito ay ang \'T\'nalak Weaving Center\' sa Lake Sebu.</span> <span class="fil-sentence" data-translation="This is where T\'boli weavers preserve their traditional weaving culture.">Dito pinangangalagaan ng mga T\'boli ang kanilang tradisyon sa paghahabi.</span> <span class="fil-sentence" data-translation="This center is built using local bamboo and strong wood panels.">Ang center na ito ay gawa sa kawayan at matigas na kahoy.</span> <span class="fil-sentence" data-translation="The government protects it as a cultural heritage site today.">Pinangangalagaan ito ng pamahalaan bilang pook-pamana natin.</span> <span class="fil-sentence" data-translation="Many tourists visit this place to learn about their ancestral stories.">Maraming turista ang pumupunta rito upang matuto tungkol sa kanilang kultura.</span> <span class="fil-sentence" data-translation="This is a primary source of history in our local community.">Ito ay isang primaryang batayan ng kasaysayan sa pook.</span> <span class="fil-sentence" data-translation="Copy the name of this historical site onto your paper!">Kopyahin ang pangalan ng pook na ito sa inyong papel!</span> <span class="fil-sentence" data-translation="For instance, consider the example of Training Area: T\'nalak Weaving Center (Lake Sebu) -&gt; historical place">Halimbawa, tingnan natin ang tungkol sa Pagsasanay Pook: T\'nalak Weaving Center (Lake Sebu) -&gt; makasaysayang pook</span> <span class="fil-sentence" data-translation="For instance, consider the example of HOTS Challenge: How will you apply this concept to your daily decision-making?">Halimbawa, tingnan natin ang tungkol sa HOTS Hamon: Paano mo gagamitin ang konseptong ito sa iyong pang-araw-araw na pagpapasiya?</span> <span class="fil-sentence" data-translation="To understand this concept deeply, we must look at how it applies to different situations in our daily lives.">Upang maunawaan ang konseptong ito nang malalim, kailangan nating tingnan kung paano ito nalalapat sa iba\'t ibang sitwasyon sa ating pang-araw-araw na buhay.</span>'
            else:
                slide["text"] = '<span class="fil-sentence" data-translation="Let\'s analyze a historical place in our province South Cotabato.">Suriin natin ang isang makasaysayang pook sa Timog Cotabato.</span>\n<span class="fil-sentence" data-translation="This is the \'T\'nalak Weaving Center\' in Lake Sebu.">Ito ay ang \'T\'nalak Weaving Center\' sa Lake Sebu.</span>\n<span class="fil-sentence" data-translation="This is where T\'boli weavers preserve their traditional weaving culture.">Dito pinangangalagaan ng mga T\'boli ang kanilang tradisyon sa paghahabi.</span>\n<span class="fil-sentence" data-translation="This center is built using local bamboo and strong wood panels.">Ang center na ito ay gawa sa kawayan at matigas na kahoy.</span>\n<span class="fil-sentence" data-translation="The government protects it as a cultural heritage site today.">Pinangangalagaan ito ng pamahalaan bilang pook-pamana natin.</span>\n<span class="fil-sentence" data-translation="Many tourists visit this place to learn about their ancestral stories.">Maraming turista ang pumupunta rito upang matuto tungkol sa kanilang kultura.</span>\n<span class="fil-sentence" data-translation="This is a primary source of history in our local community.">Ito ay isang primaryang batayan ng kasaysayan sa pook.</span>\n<span class="fil-sentence" data-translation="Copy the name of this historical site onto your paper!">Kopyahin ang pangalan ng pook na ito sa inyong papel!</span>'
            
            slide["examples"] = [
                {
                    "title": '<span class="fil-sentence" data-translation="Training Area">Pagsasanay Pook</span>',
                    "content": '<span class="fil-sentence" data-translation="T\'nalak Weaving Center (Lake Sebu) -&gt; historical place">T\'nalak Weaving Center (Lake Sebu) -> makasaysayang pook</span>'
                }
            ]

    # 2. Worksheet Exercise 3
    # Check if worksheet exists and has pages
    if "worksheet" in data and "pages" in data["worksheet"]:
        pages = data["worksheet"]["pages"]
        for i, page in enumerate(pages):
            if "Analysis of Historical Monuments" in page or "Pagsusuri ng Makasaysayang Monumento" in page:
                # Replace Rizal monument question with T'nalak Weaving Center
                old_page = page
                
                # We need to replace the question and answers
                old_q_fil = 'Bakit ipinapatayo ang monumento ni Dr. Jose Rizal sa plaza ng Lungsod ng Koronadal?'
                old_q_eng = 'Why is Rizal&#x27;s monument built in Koronadal City plaza?'
                new_q_fil = 'Bakit itinayo ang T\'nalak Weaving Center sa Lake Sebu?'
                new_q_eng = 'Why is the T\'nalak Weaving Center built in Lake Sebu?'
                
                old_a1 = 'Upang alalahanin at igalang ang kadakilaan ng ating pambansang bayani.'
                new_a1 = 'Upang alalahanin at igalang ang sining ng paghahabi ng mga T\'boli.'
                
                old_a2 = 'Si Dr. Jose Rizal ay ipinanganak sa lungsod na ito kaya mahalaga siya sa kasaysayan ng pook.'
                new_a2 = 'Ang Lake Sebu ay tanyag sa mga dream weavers kaya mahalaga ito sa pook.'
                
                page = page.replace(old_q_fil, new_q_fil)
                page = page.replace(old_q_eng, new_q_eng)
                page = page.replace(old_a1, new_a1)
                page = page.replace(old_a2, new_a2)
                
                pages[i] = page

    with open(fpath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Fixed {fpath}")

def main():
    # Filipino Week 1
    fix_filipino_week1(os.path.join(sources_dir, "filipino", "week1.json"))
    fix_filipino_week1(os.path.join(sources_dir, "filipino_advanced", "week1.json"))
    
    # Filipino Week 3
    fix_filipino_week3(os.path.join(sources_dir, "filipino", "week3.json"))
    fix_filipino_week3(os.path.join(sources_dir, "filipino_advanced", "week3.json"))
    
    # Makabansa Week 1
    fix_makabansa_week1(os.path.join(sources_dir, "makabansa", "week1.json"))
    fix_makabansa_week1(os.path.join(sources_dir, "makabansa_advanced", "week1.json"))
    
    # Makabansa Week 2
    fix_makabansa_week2(os.path.join(sources_dir, "makabansa", "week2.json"), is_advanced=False)
    fix_makabansa_week2(os.path.join(sources_dir, "makabansa_advanced", "week2.json"), is_advanced=True)

if __name__ == "__main__":
    main()
