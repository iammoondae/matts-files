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
# GMRC DATA (WEEKS 1-4)
# =========================================================================
GMRC_DATA = {
  1: {
    "color": "#06b6d4",
    "icon": "🧘‍♂️",
    "title": "GMRC",
    "subtitle": "Week 1: Tiwala sa Sarili - Aking Hilig at Kakayahan",
    "slides": [
      {
        "title": "Maligayang Pagdating sa GMRC!",
        "text": make_text(
          make_translation("Kumusta, magandang buhay! Welcome sa GMRC Week 1!", "Hello, good life! Welcome to GMRC Week 1!"),
          make_translation("Ngayong linggo, mag-aaral tayo tungkol sa tiwala sa sarili.", "This week, we will study about self-confidence."),
          make_translation("Ang tiwala sa sarili ay naniniwala sa sariling galing.", "Self-confidence is believing in your own abilities yonder."),
          make_translation("Kilalanin natin ang ating mga sariling hilig o interes.", "Let's recognize our own personal hobbies and interests."),
          make_translation("Tukuyin din natin ang ating mga talento at kakayahan ngayon.", "Let's also identify our talents and unique abilities today."),
          make_translation("Nakatutulong ito upang maging masaya at matagumpay tayo.", "This helps us become happy and successful in our lives."),
          make_translation("Handa ka na bang tuklasin ang iyong mga natatanging galing?", "Are you ready to discover your unique and special talents?"),
          make_translation("Magsimula tayong mag-explore nang may ngiti at tiwala ngayon!", "Let's start exploring with a smile and confidence today!")
        ),
        "examples": [{"title": "Layunin ng Linggo", "content": "Makilala ang sariling hilig at kakayahan bilang bahagi ng tiwala sa sarili."}]
      },
      {
        "title": "Ano ang Tiwala sa Sarili?",
        "text": make_text(
          make_translation("Ang tiwala sa sarili ay isang mahalagang katangian natin.", "Self-confidence is a very important personal quality."),
          make_translation("Ito ay ang paniniwala na kaya mong gawin ang isang bagay.", "It is the belief that you can achieve and do things yonder."),
          make_translation("E.g., ang paniniwala na kaya mong magsalita sa klase.", "E.g., believing that you can speak in front of the class."),
          make_translation("Hindi ka natatakot magkamali dahil alam mong matututo ka.", "You are not afraid to make mistakes because you learn."),
          make_translation("Ang tiwala sa sarili ay nagsisimula sa ating puso ngayon.", "Self-confidence begins in our hearts yonder in our lives."),
          make_translation("Tinatanggap natin ang ating mga hilig at kakayahan doon.", "We accept our own hobbies and unique abilities yonder."),
          make_translation("Nakatutulong ito upang maging bukas tayo sa mga pagsubok.", "This helps keep us open to challenges and new tasks."),
          make_translation("Paano mo maipapakita ang tiwala sa sarili sa paaralan?", "How can you show self-confidence in your school today?")
        ),
        "examples": [{"title": "Tiwala sa Sarili", "content": "Paniniwala sa sariling lakas at kakayahang matuto."}]
      },
      {
        "title": "Ang Aking Hilig at Interes",
        "text": make_text(
          make_translation("Ang hilig ay mga bagay na gusto mong gawin araw-araw.", "Hobbies are activities you love doing every single day."),
          make_translation("Ito ang nagbibigay sa atin ng saya sa ating libreng oras.", "These give us joy and happiness in our free time yonder."),
          make_translation("Halimbawa: pagbabasa ng aklat, pagguhit, o pag-awit.", "Examples: reading books, drawing pictures, or singing songs."),
          make_translation("Ang iba ay hilig ang maglaro ng sports tulad ng sipa.", "Others love playing local sports activities like sipa."),
          make_translation("Ang iba naman ay hilig ang mag-alaga ng halaman sa hardin.", "Some love caring for green plants in the school garden."),
          make_translation("Ang bawat bata ay may kani-kanilang sariling interes.", "Every single child has their own unique interest in life."),
          make_translation("Ang pag-alam sa hilig ay simula ng pagkilala sa sarili.", "Knowing your hobbies is the start of knowing yourself yonder."),
          make_translation("Ano ang pinakagusto mong hilig kapag walang pasok?", "What is your absolute favorite hobby during weekends?")
        ),
        "examples": [{"title": "Mga Hilig", "content": "pagguhit (drawing), pag-awit (singing), pagbasa (reading)"}]
      },
      {
        "title": "Ang Aking Talento at Kakayahan",
        "text": make_text(
          make_translation("Ang kakayahan ay mga bagay na mahusay mong nagagawa.", "Abilities are things that you perform and do very well."),
          make_translation("Ito ay tinatawag ding talento na ibinigay sa atin.", "These are also called talents given to us in our lives."),
          make_translation("Halimbawa: mahusay sumayaw, kumanta, o mag-drawing.", "Examples: good at dancing, singing, or drawing pictures."),
          make_translation("Ang iba ay magaling sa matematika o science sa klase.", "Others are excellent in math or science subjects yonder."),
          make_translation("Ang iba naman ay magaling magkwento o magsalita.", "Some are very good at storytelling or speaking in public."),
          make_translation("Ang bawat isa sa atin ay may natatanging talento ngayon.", "Every one of us has a unique and special talent today."),
          make_translation("Kailangan natin itong linangin at gamitin sa mabuti.", "We need to practice and use these talents for good things."),
          make_translation("Ano ang iyong natatanging talento sa inyong klase?", "What is your own special talent in your school class?")
        ),
        "examples": [{"title": "Kakayahan", "content": "pagsayaw (dancing), pagkuwenta (computing), pagsulat (writing)"}]
      },
      {
        "title": "Pagtanggap sa Sariling Kakayahan",
        "text": make_text(
          make_translation("Mahalagang tanggapin natin kung ano ang kaya natin.", "It is important to accept what we can do in our lives."),
          make_translation("Hindi natin kailangang ihambing ang sarili sa iba.", "We do not need to compare ourselves with other students."),
          make_translation("Kung magaling sumayaw ang iyong katabi sa paaralan,", "If your seatmate in school is very good at dancing,"),
          make_translation("huwag malungkot kung mas gusto mo ang mag-drawing.", "do not be sad if you prefer drawing pictures instead."),
          make_translation("Ang bawat galing ay mahalaga at may sariling ganda.", "Every talent is valuable and has its own beauty yonder."),
          make_translation("Ang pagtanggap sa sarili ay nagpapatibay ng tiwala.", "Accepting yourself strengthens your inner self-confidence."),
          make_translation("Ipagmalaki ang iyong sariling hilig nang walang takot.", "Be proud of your own hobbies without any fear yonder today."),
          make_translation("Magsulat ng dalawang bagay na ipinagmamalaki mo ngayon!", "Write down two things you are proud of about yourself now!")
        ),
        "examples": [{"title": "Pagtanggap", "content": "Ipagmalaki ang sariling galing nang walang pag-aalinlangan."}]
      },
      {
        "title": "Ang Pagsasanay at Pag-unlad",
        "text": make_text(
          make_translation("Ang talento ay lumalago sa pamamagitan ng pagsasanay.", "Talent grows through constant practice and dedication."),
          make_translation("Walang taong naging mahusay nang hindi nag-eensayo.", "Nobody becomes excellent without practicing their craft daily."),
          make_translation("Kung nais mong maging pintor, gumuhit ka araw-araw.", "If you want to be a painter, draw pictures every single day."),
          make_translation("Kung nais mong maging manunulat, sumulat ka sa papel.", "If you want to be a writer, write sentences on your paper."),
          make_translation("Huwag sumuko kapag nagkamali ka sa simula ng laro.", "Do not give up when you make mistakes at the start yonder."),
          make_translation("Ang pagkakamali ay bahagi ng pagkatuto sa eskwela.", "Making mistakes is a natural part of learning in school."),
          make_translation("Ang pagsisikap ay nagpapakita ng tiwala sa sarili natin.", "Putting in effort shows our self-confidence and strength."),
          make_translation("Magsanay tayo kasama ang ating guro at mga kaibigan!", "Let's practice together with our teachers and friends today!")
        ),
        "examples": [{"title": "Pag-unlad", "content": "Pagsasanay + Pagsisikap = Paghusay ng Kakayahan"}]
      },
      {
        "title": "Ang Pagtagumpay sa Takot",
        "text": make_text(
          make_translation("Karaniwan sa mga bata ang maramdaman ang takot.", "It is very common for children to feel afraid yonder."),
          make_translation("Natatakot tayong magsalita sa harap ng maraming tao.", "We are afraid to speak in front of a large group of people."),
          make_translation("Ngunit ang tiwala sa sarili ay tumutulong sa takot.", "But self-confidence helps us overcome this fear yonder."),
          make_translation("Huminga nang malalim bago magsimula ng iyong ulat.", "Breathe in deeply before starting your report in class."),
          make_translation("Isipin na kaya mong ibahagi ang iyong karunungan doon.", "Think yonder that you can share your knowledge with others."),
          make_translation("Ang lakas ng loob ay susi sa pagtagumpay sa takot.", "Courage is the key to defeating fear in our daily lives."),
          make_translation("Subukan mong magsalita sa harap ng iyong pamilya muna.", "Try speaking in front of your family members first yonder."),
          make_translation("Ito ay magandang paraan upang masanay ang iyong tinig!", "This is a great way to train your voice and posture!")
        ),
        "examples": [{"title": "Lakas ng Loob", "content": "Paghahanda + Lakas ng loob = Pagtalo sa Takot"}]
      },
      {
        "title": "Tiwala sa Sarili at Komunidad",
        "text": make_text(
          make_translation("Ang tiwala sa sarili ay nagpapasaya sa komunidad natin.", "Self-confidence makes our local community happy today."),
          make_translation("Kapag may tiwala ka, handa kang tumulong sa iba.", "When you have confidence, you are ready to help others yonder."),
          make_translation("Maaari mong ituro ang pagsusulat sa iyong kalaro.", "You can teach writing to your playmate in the barangay."),
          make_translation("Maaari ka ring sumali sa mga programa sa barangay hall.", "You can also join activities inside the local barangay hall."),
          make_translation("Tulad ng mga palaruan ng katutubong laro o sayaw.", "Such as playground events for native games or folk dances."),
          make_translation("Ang iyong galing ay nagbibigay-inspirasyon sa marami.", "Your talent provides inspiration to many people around you."),
          make_translation("Huwag itago ang iyong talento; ibahagi ito sa pook!", "Do not hide your talent; share it with your local place!"),
          make_translation("Paano mo matutulungan ang iyong barangay gamit ang galing?", "How can you help your barangay using your unique talent?")
        ),
        "examples": [{"title": "Ibahagi ang Talento", "content": "Gamitin ang galing upang makatulong sa mga kalaro at kapwa."}]
      },
      {
        "title": "Guided Practice: Pagtukoy sa Hilig",
        "text": make_text(
          make_translation("Magsanay tayo sa pagtukoy ng hilig at kakayahan ngayon.", "Let's practice identifying hobbies and talents today."),
          make_translation("Suriin: 'Gustong-gusto ni Matteo ang gumuhit ng ibon.'", "Analyze: 'Matteo loves drawing pictures of flying birds.'"),
          make_translation("Ang pagguhit ng ibon ay ang kanyang 'hilig' sa buhay.", "Drawing birds is his personal interest or hobby in life."),
          make_translation("Dahil madalas siyang mag-ensayo sa kanyang notebook,", "Because he practices frequently in his school notebook,"),
          make_translation("siya ay naging napakahusay mag-drawing ng mga hayop.", "he became very skilled at drawing different animals yonder."),
          make_translation("Ang pagiging mahusay mag-drawing ay ang kanyang kakayahan.", "Being good at drawing is his developed talent or ability."),
          make_translation("Nagawa mo bang pag-ibahin ang hilig at kakayahan ngayon?", "Were you able to distinguish hobby and ability today?"),
          make_translation("Ito ay makatutulong sa pag-unawa ng iyong sariling galing!", "This will help in understanding your own personal talents!")
        ),
        "examples": [{"title": "Pagsusuri", "content": "Gusto (Hilig) -> pagguhit, Galing (Kakayahan) -> mahusay mag-drawing"}]
      },
      {
        "title": "Guided Practice: Tiwala sa Klase",
        "text": make_text(
          make_translation("Suriin natin ang kilos ni Lani sa silid-aralan.", "Let's observe Lani's behavior inside the classroom."),
          make_translation("Tinaas niya ang kanyang kamay upang sumagot sa guro.", "She raised her hand to answer the teacher's question."),
          make_translation("Kahit hindi siya sigurado, sumubok pa rin siyang magsalita.", "Even if unsure, she still tried her best to speak yonder."),
          make_translation("Ang kilos na ito ay nagpapakita ng tiwala sa sarili.", "This action displays a strong sense of self-confidence."),
          make_translation("Hindi siya sumuko sa takot na magkamali sa klase.", "She did not give up due to the fear of making mistakes."),
          make_translation("Ngumiti ang guro at tinulungan siyang mahanap ang sagot.", "The teacher smiled and guided her to find the correct answer."),
          make_translation("Ang pagsubok ay simula ng pag-unlad ng ating isip.", "Trying is the absolute beginning of developing our minds."),
          make_translation("Itaas ang iyong kamay kapag may tanong ang guro ngayon!", "Raise your hand when the teacher asks a question today!")
        ),
        "examples": [{"title": "Pagsasanay Tiwala", "content": "Pagtataas ng kamay = pagpapakita ng tiwala sa sarili."}]
      },
      {
        "title": "Guided Practice: Ibahagi ang Talento",
        "text": make_text(
          make_translation("Suriin natin kung paano nagtutulungan ang magkakaibigan.", "Let's check how friends help one another in school."),
          make_translation("Si Kiko ay magaling sa matematika sa aming klase ngayon.", "Kiko is very good at math in our classroom today yonder."),
          make_translation("Tinulungan niya ang kanyang kalaro na magkuwenta ng barya.", "He guided his playmate to compute coins and savings safely."),
          make_translation("Ang pagbabahagi ng talento ay nagpapakita ng mabuting asal.", "Sharing your talent displays excellent moral values in life."),
          make_translation("Ginagamit niya ang kanyang kakayahan upang maglingkod.", "He uses his ability to serve and help his classmates today."),
          make_translation("Ito ay nagpapasaya sa kanyang guro at mga magulang.", "This makes his teacher and parents very happy and proud."),
          make_translation("Ang pagtutulungan ay nagpapatibay ng tiwala ng grupo natin.", "Cooperation strengthens the confidence of our entire group."),
          make_translation("Ibahagi ang iyong galing sa matematika sa iyong katabi ngayon!", "Share your math skills with your seatmate right now!")
        ),
        "examples": [{"title": "Pagsasanay Pagbabahagi", "content": "Kiko -> tinuruan ang kalaro magkuwenta ng barya."}]
      },
      {
        "title": "Maling Pag-iisip sa Sariling Galing",
        "text": make_text(
          make_translation("Iwasan ang pag-iisip na wala kang kakayahan o talento.", "Avoid thinking yonder that you have no talent or ability."),
          make_translation("Mali: 'Wala akong galing, hindi ko kaya ang science.'", "Wrong: 'I have no talent, I cannot do science subjects.'"),
          make_translation("Ang bawat bata ay may sariling galing na kailangang tuklasin.", "Every child has a unique strength waiting to be discovered."),
          make_translation("Maaaring kailangan mo lang ng pagsasanay at gabay ng guro.", "Maybe you just need practice and guidance from your teacher."),
          make_translation("Tama: 'Magsasanay ako upang maging mahusay sa science.'", "Correct: 'I will practice to become good at science today.'"),
          make_translation("Ang tiwala sa sarili ay hindi sumusuko sa unang subok.", "Self-confidence does not surrender at the very first try."),
          make_translation("Tiyakin na positibo ang iyong kaisipan sa pagsusulat ngayon!", "Make sure your thoughts are positive in your writing today!"),
          make_translation("Ito ang susi sa tagumpay sa lahat ng iyong ginagawa!", "This is the key to success in everything you perform today!")
        ),
        "examples": [{"title": "Kaisipan Error", "content": "mali: wala akong galing -> tama: mag-eensayo ako upang matuto"}]
      },
      {
        "title": "Maling Pagyayabang ng Talento",
        "text": make_text(
          make_translation("Iwasan ang pagmamayabang kapag ikaw ay mahusay na.", "Avoid boasting or showing off when you are already skilled."),
          make_translation("Mali: 'Mas magaling ako sa inyong lahat sa pagbasa!'", "Wrong: 'I am better than all of you at reading books yonder!'"),
          make_translation("Ang pagyayabang ay hindi nagpapakita ng tiwala sa sarili.", "Boasting does not display true and healthy self-confidence."),
          make_translation("Ito ay nagpapakita ng kawalan ng kababaang-loob sa kapwa.", "It displays lack of humility and respect for your classmates."),
          make_translation("Ang tunay na may tiwala ay tahimik na naglilingkod.", "The truly confident student serves others quietly in school."),
          make_translation("Tinutulungan niya ang mga nahihirapan nang walang yabang.", "He helps those who struggle without making them feel bad."),
          make_translation("Ito ang wastong asal na itinuturo sa ating GMRC.", "This is the correct moral value taught in our GMRC class."),
          make_translation("Maging mababa ang loob at palaging magbahagi ng biyaya!", "Be humble at all times and share your talents with others!")
        ),
        "examples": [{"title": "Yabang Error", "content": "mali: magyabang sa klase -> tama: tumulong nang may kababaang-loob"}]
      },
      {
        "title": "Ang Pagtatasa sa Sariling Galing",
        "text": make_text(
          make_translation("Suriin natin ang ating sariling pag-unlad araw-araw.", "Let's check our own progress and development every day."),
          make_translation("Gumawa ng listahan ng iyong mga hilig at kakayahan ngayon.", "Make a written list of your hobbies and abilities today."),
          make_translation("Isulat kung anong mga pagsasanay ang iyong ginagawa.", "Write down what practice routines you are doing at home."),
          make_translation("E.g., nag-eensayo ng pagpapakinis ng guhit sa hapon.", "E.g., practicing refining drawings in the afternoon hours."),
          make_translation("Ang pagtatasa sa sarili ay nagpapakita ng disiplina natin.", "Self-assessment displays our personal discipline yonder."),
          make_translation("Nalalaman natin kung saan pa natin kailangang mag-aral.", "We find out where we still need to study and put in effort."),
          make_translation("Humingi ng tulong sa guro o magulang para sa pagsusuri.", "Ask for guidance from your teacher or parents in this task."),
          make_translation("Ipagpatuloy ang pag-unlad ng iyong sariling talento ngayon!", "Continue developing your own special talents in the community!")
        ),
        "examples": [{"title": "Pagtatasa", "content": "Suriin ang sarili: Ano ang aking galing? Paano ko ito mapapahusay?"}]
      },
      {
        "title": "Buod ng Unang Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa Week 1.", "Congratulations! You completed all the slides for Week 1."),
          make_translation("Natutunan natin ang kahulugan ng tiwala sa sarili ngayon.", "We learned the meaning of self-confidence today in class."),
          make_translation("Natukoy natin ang pagkakaiba ng hilig at kakayahan natin.", "We identified the difference between hobbies and abilities."),
          make_translation("Nalaman natin ang kahalagahan ng pagsasanay at lakas-loob.", "We discovered the importance of practice and inner courage."),
          make_translation("Iniwasan natin ang pagyayabang at maling pag-iisip doon.", "We avoided boasting and negative thinking in our daily lives."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggong ito?", "Are you ready for the quiz and challenges of this week now?"),
          make_translation("Ipakita ang iyong tiwala sa sarili sa pagsagot ngayon!", "Show your self-confidence in answering the questions today!"),
          make_translation("Ipagpatuloy ang pagiging disiplinadong mag-aaral ng GMRC!", "Continue being a disciplined student of GMRC at all times!")
        ),
        "examples": [{"title": "Tandaan", "content": "Tiwala = Paniniwala sa sarili. Hilig = Gusto. Kakayahan = Galing."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa paniniwala sa sariling galing at kakayahan?", "options": ["takot", "pagyayabang", "tiwala sa sarili", "kawalang-pag-asa"], "answer": 2},
      {"type": "choice", "q": "Alin sa mga sumusunod ang halimbawa ng 'hilig' o interes?", "options": ["mahusay mag-drawing ng hayop", "gustong magbasa ng mga aklat sa hapon", "magaling magkuwenta ng barya", "mabilis tumakbo sa kalsada"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang halimbawa ng 'kakayahan' o talento?", "options": ["gustong manood ng sining", "mahusay sumayaw ng Tinikling", "gustong maglakad sa plaza", "gustong makinig ng kanta"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat mong gawin upang mapahusay ang iyong talento sa pagguhit?", "options": ["itago ang mga krayola", "magsanay gumuhit araw-araw", "ihambing ang sarili sa iba", "sumuko sa unang pagkakamali"], "answer": 1},
      {"type": "choice", "q": "Paano mo maipapakita ang tiwala sa sarili sa loob ng silid-aralan?", "options": ["matulog sa klase", "itaas ang kamay upang sumagot sa tanong ng guro", "makipag-away sa katabi", "magtago sa ilalim ng desk"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang HINDI nagpapakita ng tiwala sa sarili?", "options": ["sumubok sumagot kahit hindi sigurado", "sumuko agad dahil natatakot magkamali", "mag-ensayo ng pag-awit", "humingi ng tulong sa guro"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na asal kapag ikaw ay mas magaling sa matematika kaysa sa iyong kalaro?", "options": ["pagtawanan siya", "turuan siya nang may kababaang-loob", "magyabang sa buong klase", "huwag siyang pansinin"], "answer": 1},
      {"type": "choice", "q": "Paano lumalago ang talento ng isang bata sa pag-awit?", "options": ["sa pamamagitan ng panonood lamang", "sa pamamagitan ng araw-araw na pagsasanay", "sa pamamagitan ng pagbili ng bagong sapatos", "sa pamamagitan ng pagtulog"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gawin kapag nagkamali ka sa pagguhit sa iyong klase?", "options": ["itapon ang papel at umiyak", "tanggapin ito bilang bahagi ng pagkatuto at sumubok muli", "makipag-away sa katabi", "sumuko na sa pagguhit"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang bawat bata ay may kani-kanilang sariling hilig at kakayahan.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Aling katangian ang ipinapakita ng batang hindi natatakot magsalita sa harap ng klase?", "options": ["takot", "lakas ng loob at tiwala sa sarili", "pagyayabang", "katamaran"], "answer": 1},
      {"type": "choice", "q": "Ano ang layunin ng pagbabahagi ng iyong talento sa iyong kapwa?", "options": ["upang makakuha ng pera", "upang maglingkod at magbigay-inspirasyon sa iba", "upang maging sikat sa barangay", "upang magyabang"], "answer": 1},
      {"type": "choice", "q": "Punan ang patlang: 'Ang pagsasanay at pagsisikap ay nagdudulot ng ___ ng kakayahan.'", "options": ["pagkasira", "pag-unlad at paghusay", "pagkawala", "pagkatakot"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa tungkulin ng tao na nagtuturo ng mabuting asal?", "options": ["guro", "doktor", "pulis", "tanod"], "answer": 0},
      {"type": "choice", "q": "Ano ang dapat iwasan kapag ikaw ay nagpapakita ng iyong talento sa pagtugtog?", "options": ["pagngiti sa mambabasa", "pagyayabang at pagmamaliit sa hindi marunong", "pag-ensayo bago magsimula", "paghingi ng gabay sa guro"], "answer": 1},
      {"type": "choice", "q": "Saan natin maaaring gamitin ang ating kakayahan sa pagguhit sa barangay?", "options": ["sa pagsira ng pader", "sa paggawa ng mga poster para sa kalinisan sa barangay hall", "sa pagtapon ng basura sa ilog", "sa pagsusulat sa mga libro ng aklatan"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang paghahambing ng sarili sa iba ay nakatutulong upang tumibay ang tiwala sa sarili.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling ugali ang ipinapakita ng mag-aaral na nagpapasalamat sa puna ng kanyang guro?", "options": ["katigasan ng ulo", "kababaang-loob at kagustuhang matuto", "pagkatakot", "katamaran"], "answer": 1},
      {"type": "choice", "q": "Aling salita ang naglalarawan ng kilos na may tiwala sa sarili?", "options": ["pag-iyak", "pagsubok at pagsisikap", "pagtatago", "pagsuko"], "answer": 1},
      {"type": "choice", "q": "Ano ang tinutukoy ng araling GMRC?", "options": ["wastong pagkuwenta ng barya", "mabuting asal at tamang pag-uugali (Character Education)", "pagbasa ng mga mapa", "pag-uri ng mga solid"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang tamang kaisipan kapag nahihirapan sa science?", "options": ["'Hindi ko talaga kaya ito.'", "'Magsisikap ako at magtatanong sa aking guro upang matuto.'", "'Hindi mahalaga ang science.'", "'Ipagpapaliban ko na lang ang pag-aaral.'"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang hilig sa pangungusap: 'Gusto ni Kiko na mag-alaga ng mga halaman sa hardin.'", "options": ["Kiko", "halaman", "mag-alaga ng mga halaman", "hardin"], "answer": 2},
      {"type": "verify", "q": "Tama o Mali: Ang tiwala sa sarili ay nangangahulugang alam mo na ang lahat at hindi mo na kailangang mag-aral.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang magandang gawin kapag nakakaramdam ng takot sa harap ng klase?", "options": ["tumakbo palabas ng silid-aralan", "huminga nang malalim at isiping kaya mong magbahagi", "umiyak sa harap ng guro", "huwag magsalita kailanman"], "answer": 1},
      {"type": "choice", "q": "Saan dapat magsimula ang pag-unlad ng iyong talento?", "options": ["sa panonood ng iba lamang", "sa iyong sariling puso, pagsasanay, at pagsisikap", "sa pagbili ng mga laruan", "sa pagtulog nang mahaba"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Aling kilos ang pinakamahusay na nagpapakita ng ugnayan ng tiwala sa sarili at pagtulong sa kapwa?", "options": ["pagyayabang sa kalaro na ikaw ang pinakamabilis tumakbo", "pagtuturo sa iyong kaklase na nahihirapan sa pagbasa nang may pasensya at tiwala", "pagtatago ng iyong mga aklat upang hindi sila makabasa", "pagsasabing hindi nila kayang matutunan ang iyong galing"], "answer": 1},
      {"type": "choice", "q": "Challenge: Paano mo mapagtatagumpayan ang takot na sumali sa street dancing sa pista ng inyong barangay?", "options": ["magtago sa loob ng bahay tuwing pista", "magsanay nang mabuti kasama ang grupo at magtiwala na kaya mong sumayaw sa harap ng tao", "sabihing hindi maganda ang sayaw", "pagtawanan ang mga sumasayaw sa parada"], "answer": 1},
      {"type": "choice", "q": "Challenge: Kung ang iyong katabi sa klase ay tahimik at natatakot magsalita, paano mo siya matutulungan gamit ang iyong tiwala?", "options": ["sabihan siyang duwag siya sa harap ng iba", "ganyakin siya nang malumanay at sabihing kaya rin niyang sumubok sumagot", "huwag siyang pansinin dahil hindi mo naman siya kamag-anak", "sumagot para sa kanya sa lahat ng pagkakataon"], "answer": 1},
      {"type": "choice", "q": "Challenge: Bakit ang pagsuko agad sa unang pagkakamali ay itinuturing na kawalan ng tiwala sa sarili?", "options": ["Dahil naniniwala ka na hindi ka na matututo o mapapahusay ang iyong galing sa pamamagitan ng pagsasanay.", "Dahil ang pagkakamali ay isang permanenteng kabiguan sa science.", "Dahil mas madali ang matulog kaysa mag-ensayo.", "Dahil ang guro ay nagagalit kapag may mali."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling katangian ang pinaka-kailangan ng isang Grade 3 student upang malinang ang kanyang natatanging talento sa sining?", "options": ["pagbili ng pinakamahal na krayola", "disiplina sa araw-araw na pagsasanay at bukas na isip sa paggabay ng guro", "pagyayabang sa mga kaibigan", "pag-iwas sa pagguhit ng mga bagay sa kalikasan"], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Aking Kwento ng Galing",
      "desc": "Sumulat ng isang talata o maikling kwento tungkol sa iyong paboritong hilig at kakayahan sa papel. Iguhit ang iyong sarili habang ginagawa ang talento na ito (hal. kumakanta, nag-aaral ng math, o nagtatanim). Ipakita ang iyong drawing at basahin ang iyong talata sa iyong magulang nang may tiwala at malinaw na tinig.",
      "labels": ["Wastong natukoy at nailarawan ang sariling hilig at kakayahan", "Maayos na naiguhit ang sarili habang ginagawa ang talento", "Malinaw at may lakas ng loob na naibahagi ang ulat sa pamilya"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Hilig vs. Kakayahan</h3>
                  <p class="ws-instruction">Isulat kung ang sitwasyon ay nagpapakita ng <strong>Hilig</strong> (gusto) o <strong>Kakayahan</strong> (talento/galing) gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Mahusay sumayaw ng Tinikling si Caloy sa programa. <span class="fil-sentence" data-translation="(Caloy is good at dancing Tinikling in the program.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Kakayahan</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Gustong-gustong manood ng mga bituin si Matteo sa gabi. <span class="fil-sentence" data-translation="(Matteo loves watching stars at night.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Hilig</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Magaling magkuwenta ng matematika si Lani sa klase. <span class="fil-sentence" data-translation="(Lani is good at computing math in class.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Kakayahan</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Asal ng may Tiwala sa Sarili</h3>
                  <p class="ws-instruction">Isulat kung ang ipinapakitang pag-uugali ay <strong>Mabuti</strong> (karapat-dapat) o <strong>Mali</strong> (dapat iwasan).</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Pagtuturo sa kalaro ng pagbasa nang walang pagyayabang. <span class="fil-sentence" data-translation="(Teaching a playmate to read without boasting.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Mabuti</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Pagsuko agad sa pagguhit dahil nabahiran ng dumi ang papel. <span class="fil-sentence" data-translation="(Giving up drawing immediately because the paper was smudged.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Mali</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Pagtataas ng kamay upang sumubok sumagot sa tanong ng guro. <span class="fil-sentence" data-translation="(Raising hand to try and answer the teacher's question.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Mabuti</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Paglutas sa Takot</h3>
                  <p class="ws-instruction">Sagutin ang tanong gamit ang tumpak na detalye batay sa iyong sariling karanasan at aralin.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Ano ang gagawin mo kapag natatakot kang mag-report sa harap ng iyong mga kaklase? <span class="fil-sentence" data-translation="(What will you do when you are afraid to report in front of classmates?)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Hihinga ako nang malalim, maghahanda nang mabuti, at magtitiwala na kaya kong magbahagi.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Iisipin ko na ang aking guro at kaklase ay naroon upang makinig at tumulong sa akin.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  2: {
    "color": "#06b6d4",
    "icon": "🧘‍♂️",
    "title": "GMRC",
    "subtitle": "Week 2: Tiwala sa Sarili - Pagbabahagi ng Ating Galing",
    "slides": [
      {
        "title": "Welcome sa Week 2!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikalawang linggo!", "How are you, student? Welcome to the second week!"),
          make_translation("Ngayong linggo, ipagpapatuloy natin ang ating aralin.", "This week, we will continue our self-confidence lesson."),
          make_translation("Tukutubing-ugnayan natin ang tiwala sa ating kapwa.", "Let's connect our self-confidence to helping others yonder."),
          make_translation("Pag-aaralan natin ang pagbabahagi ng ating talento.", "We will study the value of sharing our talents in school."),
          make_translation("Paano natin matutulungan ang mga nahihirapang kaklase?", "How can we assist our classmates who are struggling today?"),
          make_translation("Alamin natin ang kahalagahan ng paglahok sa mga aktibidad.", "Let's learn the importance of joining school activities."),
          make_translation("Handa ka na bang maging inspirasyon sa inyong eskwela?", "Are you ready to become an inspiration in your school today?"),
          make_translation("Simulan natin ang talakayan nang may sigla at tiwala!", "Let's start the discussion with enthusiasm and confidence!")
        ),
        "examples": [{"title": "Layunin ng Linggo", "content": "Ibahagi ang sariling kakayahan at talento upang makatulong sa kapwa."}]
      },
      {
        "title": "Ang Halaga ng Pagbabahagi",
        "text": make_text(
          make_translation("Ang talento ay hindi dapat itinatago sa dilim.", "Talents should not be hidden away in the dark yonder."),
          make_translation("Ito ay ibinigay sa atin upang ibahagi sa kapwa.", "These were given to us to share with others in life."),
          make_translation("Kapag ibinahagi mo ang galing, lalo itong lumalago.", "When you share your talent, it grows even stronger yonder."),
          make_translation("Halimbawa: ang pagtulong sa kalaro na magbasa.", "Example: helping your playmate in the barangay to read books."),
          make_translation("Tinutulungan mo siyang matuto habang nagpapakapino ka.", "You help them learn while you refine your own skills today."),
          make_translation("Ito ay nagbibigay-saya sa nagsasalita at nakikinig.", "This provides happiness to both the speaker and listener."),
          make_translation("Ang pagbabahagi ay nagpapakita ng pagmamahal sa kapwa.", "Sharing displays our love and care for our neighbors yonder."),
          make_translation("Sino ang huling tinulungan mo gamit ang iyong galing?", "Who was the last person you helped using your talents today?")
        ),
        "examples": [{"title": "Pagbabahagi", "content": "Gamitin ang talento sa pagtulong at pagpapasaya sa kapwa."}]
      },
      {
        "title": "Pagtulong sa Nahihirapang Kaklase",
        "text": make_text(
          make_translation("Sa ating silid-aralan, may mga batang nahihirapan.", "Inside our classroom, there are children who struggle daily."),
          make_translation("Maaaring nahihirapan sila sa matematika o pagsulat.", "Perhaps they find math calculations or writing difficult."),
          make_translation("Kung ikaw ay magaling doon, huwag silang pagtawanan.", "If you are good at those, do not laugh at them yonder."),
          make_translation("Lapitan sila at sabihing: 'Tutulungan kita sa aralin.'", "Approach them and say: 'I will help you with the lesson.'"),
          make_translation("Ipaliwanag ang leksyon nang may pasensya at linaw.", "Explain the lesson with patience and clarity in your voice."),
          make_translation("Ang pagtulong na ito ay nagpapatibay ng kanilang tiwala.", "This help strengthens their self-confidence to study yonder."),
          make_translation("Ito ay nagpapakita ng pagiging mabuting kaklase natin.", "This shows yonder that we are good classmates in school."),
          make_translation("Magsanay sa pagbabahagi ng karunungan sa iyong katabi!", "Practice sharing your knowledge with your seatmate today!")
        ),
        "examples": [{"title": "Pagtulong", "content": "Pagtuturo sa kaklase nang may pasensya at walang yabang."}]
      },
      {
        "title": "Paglahok sa mga Aktibidad sa Paaralan",
        "text": make_text(
          make_translation("Ang paaralan ay may iba't ibang programa at palaro.", "The school organizes different programs and games yonder."),
          make_translation("Mayroong mga patimpalak sa pag-awit at pagguhit.", "There are competitions for singing and drawing pictures."),
          make_translation("Ang paglahok sa mga ito ay nagpapakita ng tiwala.", "Participating in these events displays your self-confidence."),
          make_translation("Huwag matakot na sumali kahit may mas magaling pa.", "Do not be afraid to join even if others are highly skilled."),
          make_translation("Ang layunin ng pagsali ay upang masanay ang talento.", "The main goal of joining is to practice and develop talent."),
          make_translation("Dito natin natututuhan ang disiplina at pakikipagkapwa.", "Here we learn self-discipline and socializing with others."),
          make_translation("Ipagmalaki ang iyong paaralan sa pamamagitan ng pagsali!", "Show pride in your school by participating in programs!"),
          make_translation("Sa aling paligsahan mo nais sumali sa darating na pista?", "Which school contest would you like to join in the future?")
        ),
        "examples": [{"title": "Paglahok", "content": "Sali sa kanta, guhit, o sports upang masanay ang galing."}]
      },
      {
        "title": "Pakikipaglaro nang may Disiplina",
        "text": make_text(
          make_translation("Ang mga laro sa plaza ay nagpapakita ng talento natin.", "Games in the plaza display our physical talents yonder."),
          make_translation("Tulad ng sipa, patintero, o pagtakbo sa kalsada.", "Such as sipa, tag games, or running along the streets."),
          make_translation("Sa pakikipaglaro, kailangan ang disiplina at tiwala.", "In playing, we require self-discipline and mutual trust."),
          make_translation("Sundin ang mga panuntunan ng laro upang maiwasan ang away.", "Follow game rules carefully to prevent arguments and fights."),
          make_translation("Igalang ang kakayahan ng iyong mga kalaro sa pook.", "Respect the physical abilities of your playmates in town."),
          make_translation("Tanggapin nang maluwag sa loob kapag ikaw ay natalo.", "Accept it gracefully when your team loses the game yonder."),
          make_translation("Batiin ang nanalo nang may ngiti at kababaang-loob.", "Congratulate the winners with a smile and humble heart."),
          make_translation("Ito ang tunay na ugali ng isang sport sa GMRC natin!", "This is the true attitude of sportsmanship in GMRC class!")
        ),
        "examples": [{"title": "Disiplina sa Laro", "content": "Sundin ang regulasyon at igalang ang kalaro sa lahat ng oras."}]
      },
      {
        "title": "Ang Pagpapalakas ng Loob ng Kalaro",
        "text": make_text(
          make_translation("May mga kalaro na madaling mahiya sa paglalaro.", "There are playmates who are very shy during team games."),
          make_translation("Natatakot silang sumubok dahil baka sila magkamali.", "They are afraid to try because they might make mistakes."),
          make_translation("Bilang kaibigan, tungkulin mong palakasin ang loob nila.", "As a friend, it is your duty to encourage them yonder."),
          make_translation("Sabihin sa kanila: 'Kaya mo yan! Sumubok ka sa laro.'", "Tell them: 'You can do it! Give it a try in the game.'"),
          make_translation("Ang iyong mga positibong salita ay may malaking kapangyarihan.", "Your positive words carry great encouraging power yonder."),
          make_translation("Nakatutulong ito upang magkaroon sila ng tiwala sa sarili.", "This helps them build their own self-confidence today."),
          make_translation("Ang pagkakaisa ng koponan ay nagdudulot ng saya sa lahat.", "Team unity brings joy and happiness to all participants."),
          make_translation("Sino ang kalaro na palagi mong pinapalakas ang loob?", "Who is the playmate you always encourage during play?")
        ),
        "examples": [{"title": "Palakasin ang Loob", "content": "Gumamit ng positibong salita upang suportahan ang kaibigan."}]
      },
      {
        "title": "Overcoming Shyness: Pagtalo sa Hiyang Sarili",
        "text": make_text(
          make_translation("Ang pagkamahiyain ay natural na pakiramdam ng bata.", "Shyness is a natural feeling for many young children."),
          make_translation("Ngunit maaari natin itong talunin gamit ang tiwala.", "But we can overcome it using active self-confidence."),
          make_translation("Mag-ensayo sa harap ng salamin sa inyong tahanan.", "Practice speaking in front of a mirror in your house."),
          make_translation("Tumingin sa mata ng iyong kausap nang may ngiti.", "Look into the eyes of the listener with a warm smile."),
          make_translation("Magsimula sa maliliit na pangkat sa silid-aralan.", "Start participating in small groups inside the classroom."),
          make_translation("Ibahagi ang iyong mga ideya nang malinaw at maayos.", "Share your ideas clearly and properly with classmates."),
          make_translation("Sa bawat subok, mababawasan ang takot sa iyong puso.", "With every try, the fear in your heart will decrease today."),
          make_translation("Tiyakin na handa ka nang magsalita sa harap ng klase!", "Make sure you are ready to speak in front of the class!")
        ),
        "examples": [{"title": "Pagtalo sa Hiya", "content": "Smile + Eye contact + Small group practice = Less shyness."}]
      },
      {
        "title": "Tiwala sa Sarili at Pamilya",
        "text": make_text(
          make_translation("Ang pamilya ang unang sumusuporta sa ating galing.", "Our family is the first to support our talents yonder."),
          make_translation("Ipagmalaki ang iyong talento sa iyong mga magulang.", "Showcase your special talents to your parents at home."),
          make_translation("Maaari kang umawit para sa kanila tuwing hapon.", "You can sing songs for them during quiet afternoon hours."),
          make_translation("Maaari mo ring ipakita ang iyong mga iginuhit na larawan.", "You can also show them your drawing projects from school."),
          make_translation("Ang kanilang mga papuri ay nagpapasigla sa ating puso.", "Their encouraging praises bring joy to our hearts yonder."),
          make_translation("Nakatutulong ito upang lalo tayong mag-ensayo sa bahay.", "This helps motivate us to practice more inside our homes."),
          make_translation("Ang pamilyang may tiwala ay nagpapalaki ng masayang bata.", "A supportive family raises a happy and confident child."),
          make_translation("Paano mo natutulungan ang iyong pamilya gamit ang galing?", "How do you help your family using your unique skills today?")
        ),
        "examples": [{"title": "Suporta ng Pamilya", "content": "Ibahagi ang talento sa tahanan upang makakuha ng gabay."}]
      },
      {
        "title": "Guided Practice: Pagtulong sa Pagsulat",
        "text": make_text(
          make_translation("Magsanay tayo sa pagtulong sa kaklase sa pagsusulat.", "Let's practice helping a classmate with their writing."),
          make_translation("Si Kiko ay nahihirapang sumulat ng malalaking titik.", "Kiko finds it difficult to write capital letters properly."),
          make_translation("Lapitan mo siya at ipakita ang tamang pagsulat ng M.", "Approach him and show the correct way to trace letter M."),
          make_translation("Sabihin: 'Gawin natin ito nang dahan-dahan sa papel.'", "Say: 'Let's do this step-by-step on your writing paper.'"),
          make_translation("Ang iyong paggabay ay nagpapakita ng tiwala sa kanya.", "Your guidance shows that you have confidence in his ability."),
          make_translation("Natuwa si Kiko at nagpasalamat sa iyong mabuting asal.", "Kiko was happy and thanked you for your kind behavior today."),
          make_translation("Nagawa mo bang magturo nang may pasensya at ngiti?", "Did you manage to instruct him with patience and a smile?"),
          make_translation("Ito ang tunay na diwa ng pagtulong sa ating paaralan!", "This is the true spirit of helping inside our school!")
        ),
        "examples": [{"title": "Pagsasanay", "content": "Kiko -> tinuruan magsulat ng malaking titik Ramos."}]
      },
      {
        "title": "Guided Practice: Paglahok sa Palaro",
        "text": make_text(
          make_translation("Suriin natin ang paglahok ni Matteo sa paligsahan.", "Let's observe Matteo's participation in a school contest."),
          make_translation("Sumali siya sa patimpalak ng pagguhit ng kalikasan.", "He joined the drawing competition about environmental science."),
          make_translation("Kahit may mga mas matatandang mag-aaral doon sa klase,", "Even though there were older students participating yonder,"),
          make_translation("nagtitiwala siya sa kanyang sariling disenyong gawa.", "he trusted yonder in his own artistic design and layout."),
          make_translation("Gumuhit siya ng Bundok Makiling at malinis na ilog.", "He drew Mount Makiling and a clean, flowing river on paper."),
          make_translation("Ang kanyang gawa ay nagpakita ng saganang likas na yaman.", "His work displayed our rich natural resources beautifully."),
          make_translation("Ang paglahok na ito ay nagpapatibay ng kanyang galing.", "This participation strengthens his artistic skills further."),
          make_translation("Suriin ang mga poster sa inyong silid-aralan ngayon!", "Observe the posters displayed in your classroom today!")
        ),
        "examples": [{"title": "Pagsasanay Paglahok", "content": "Matteo -> sumali sa pagguhit ng Bundok Makiling."}]
      },
      {
        "title": "Guided Practice: Pagbabahagi sa Barangay",
        "text": make_text(
          make_translation("Suriin natin ang isang programa sa ating barangay hall.", "Let's check a program inside our local barangay hall."),
          make_translation("May paligsahan ng katutubong awitin para sa mga bata.", "There is a folk singing competition organized for children."),
          make_translation("Si Lani ay sumali at umawit ng Leron Leron Sinta.", "Lani participated and sang the song Leron Leron Sinta."),
          make_translation("Ang kanyang tinig ay malakas at narinig ng mga tanod.", "Her voice was loud and clear, heard by all the tanods."),
          make_translation("Natuwa ang kapitan at binigyan siya ng parangal doon.", "The captain was happy and gave her a special certificate."),
          make_translation("Ito ay nagpapakita ng pagbabahagi ng galing sa pook.", "This shows sharing of talent within our local community."),
          make_translation("Sinasalamin nito ang tiwala sa sariling kultura natin.", "This reflects our confidence in our own national culture."),
          make_translation("Magsanay sa pag-awit ng Leron Leron Sinta sa pamilya!", "Practice singing Leron Leron Sinta for your family today!")
        ),
        "examples": [{"title": "Pagsasanay Barangay", "content": "Lani -> umawit ng Leron Leron Sinta sa barangay hall."}]
      },
      {
        "title": "Maling Pagmamaliit sa Sarili",
        "text": make_text(
          make_translation("Iwasan ang pag-iisip na wala kang maitutulong sa iba.", "Avoid thinking yonder that you have nothing to offer others."),
          make_translation("Mali: 'Hindi ako magaling, hindi ko sila matutulungan.'", "Wrong: 'I am not smart, I cannot help my classmates yonder.'"),
          make_translation("Ang bawat bata ay may simpleng paraan upang tumulong.", "Every child has a simple and unique way to assist others."),
          make_translation("Maaari mong ipahiram ang iyong krayola sa katabi mo.", "You can share your crayons with the classmate next to you."),
          make_translation("Maaari mo ring pakinggan ang kanyang ulat nang maayos.", "You can also listen to their classroom report attentively."),
          make_translation("Ang pagiging mabuting tagapakinig ay tulong din sa klase.", "Being a good listener is also a form of help in class."),
          make_translation("Tiyakin na wasto ang iyong tiwala sa iyong kapwa ngayon!", "Make sure your trust in your classmates is strong today!"),
          make_translation("Ito ang tunay na ugali ng pakikipagkapwa sa GMRC natin!", "This is the true spirit of friendship in our GMRC class today!")
        ),
        "examples": [{"title": "Pagmamaliit Error", "content": "mali: wala akong maitutulong -> tama: makikinig ako nang maayos"}]
      },
      {
        "title": "Maling Pakikipag-away sa Palaro",
        "text": make_text(
          make_translation("Iwasan ang pakikipag-away kapag natatalo sa palaro.", "Avoid starting arguments when losing in playground games."),
          make_translation("Mali: 'Nadaya ako! Hindi na ako makikipaglaro sa inyo!'", "Wrong: 'I was cheated! I will never play with you again!'"),
          make_translation("Ang galit ay hindi nagpapakita ng disiplina sa sarili.", "Anger does not display self-discipline or moral maturity."),
          make_translation("Ito ay nagpapakita ng kawalan ng pagtanggap sa laro natin.", "It shows a lack of acceptance of game outcomes yonder."),
          make_translation("Dapat maging mahinahon at tanggapin ang resulta nang maayos.", "We must remain calm and accept the results gracefully."),
          make_translation("Ang layunin ng palaro ay upang magsaya at makipagkaibigan.", "The main purpose of play is to have fun and make friends."),
          make_translation("Ito ang wastong asal na itinuturo sa ating komunidad.", "This is the correct value taught in our local community."),
          make_translation("Tiyakin na sportsmanship ang iyong ipapakita sa plaza!", "Make sure to show sportsmanship in the plaza at all times!")
        ),
        "examples": [{"title": "Palaro Error", "content": "mali: makipag-away kapag natalo -> tama: ngumiti at bumati sa nanalo"}]
      },
      {
        "title": "Ang Pagpaplano ng Pagtulong",
        "text": make_text(
          make_translation("Gumawa tayo ng plano ng pagtulong sa ating pamilya.", "Let's create a plan to help out inside our households."),
          make_translation("Isulat sa papel ang tatlong simpleng gawaing-bahay.", "Write down three simple household chores on your paper."),
          make_translation("E.g., pag-aayos ng higaan paggising, pagdidilig ng halaman.", "E.g., making your bed in the morning, watering plants."),
          make_translation("Ang pagkusa sa paggawa ay nagpapakita ng tiwala sa sarili.", "Having initiative to work shows your developed confidence."),
          make_translation("Hindi mo na kailangang hintayin ang utos ng magulang.", "You do not need to wait for your parents' command to work."),
          make_translation("Ang pagtulong na ito ay nagpapagaan sa trabaho sa bahay.", "This help makes household work much lighter for everyone."),
          make_translation("Ibahagi ang iyong plano ng pagtulong sa iyong nanay ngayon!", "Share your plan of helping with your mother this evening!"),
          make_translation("Ipakita ang iyong disiplina at pagmamahal sa pamilya!", "Show your self-discipline and love for your family today!")
        ),
        "examples": [{"title": "Plano ng Pagtulong", "content": "pag-aayos ng higaan, pagdidilig ng halaman sa hardin."}]
      },
      {
        "title": "Buod ng Ikalawang Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang pagbabahagi ng talento sa ating kapwa.", "We learned about sharing our talents with our neighbors."),
          make_translation("Nalaman natin ang kahalagahan ng pagtuturo sa kalaro natin.", "We discovered the value of teaching our playmates in town."),
          make_translation("Nag-aral tayong lumahok sa mga paligsahan sa paaralan.", "We studied how to participate in school competitions."),
          make_translation("Iniwasan natin ang pakikipag-away at pagyayabang sa plaza.", "We avoided fighting and boasting yonder in the plaza."),
          make_translation("Gumawa tayo ng plano ng pagtulong sa ating pamilya ngayon.", "We created plans to help out inside our family households."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggong ito?", "Are you ready for the quiz and challenges of this week now?"),
          make_translation("Ipagpatuloy ang pagiging disiplinadong bata sa GMRC natin!", "Continue being a disciplined child in our GMRC class today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pagbabahagi = Pagmamahal. Lakas ng loob = Pagtalo sa hiya. Pagtulungang lagi!"}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang dapat gawin sa iyong talento o kakayahan ayon sa GMRC?", "options": ["itago ito sa baul", "ibahagi ito upang makatulong sa kapwa", "magyabang sa mga kalaro", "huwag itong gamitin"], "answer": 1},
      {"type": "choice", "q": "Paano mo matutulungan ang iyong kaklase na nahihirapan sa matematika?", "options": ["pagtawanan ang kanyang mga mali", "turuan siya nang may pasensya at linaw", "isumbong siya sa principal", "huwag siyang kausapin"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na asal kapag natalo ang iyong koponan sa laro sa plaza?", "options": ["makipag-away sa kalaban", "tanggapin ang resulta nang maayos at bumati sa nanalo", "iyakan ang kapitan ng barangay", "sabihing nadaya ka"], "answer": 1},
      {"type": "choice", "q": "Paano mo mapagtatagumpayan ang pagkamahiyain sa pagsasalita sa harap ng klase?", "options": ["magtago sa likod ng pintuan", "magsanay magsalita sa harap ng salamin sa bahay", "tumangging sumagot kailanman", "umiyak sa harap ng guro"], "answer": 1},
      {"type": "choice", "q": "Sino ang unang dapat nating pagbahagian ng ating mga talento at drawing?", "options": ["mga dayuhan", "ang ating sariling pamilya at magulang", "mga pulis sa outpost", "mga tindero sa palengke"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa pag-uugnayan kung saan ang mga mag-aaral ay nagtutulungan sa klase?", "options": ["pakikipag-away", "pakikipagkapwa-tao at pagtutulungan", "pagyayabang", "katamaran"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat mong sabihin sa kalaro na natatakot sumubok sumali sa patimpalak?", "options": ["'Huwag ka nang sumali dahil matatalo ka lang.'", "'Kaya mo yan! Sumubok ka at mag-ensayo tayo.'", "'Hindi maganda ang iyong talento.'", "'Matulog ka na lang sa bahay.'"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang magandang gawi ng pagkusa sa tahanan?", "options": ["maghintay ng utos bago mag-ayos ng higaan", "kusang mag-ayos ng higaan paggising sa umaga", "maglaro ng computer buong araw", "itapon ang basura sa ilalim ng higaan"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na reaksyon kapag pinuri ng iyong magulang ang iyong iginuhit na larawan?", "options": ["magyabang sa mga kapatid", "magpasalamat nang may kababaang-loob at magpatuloy sa pagsasanay", "itapon ang drawing sa basura", "huwag silang pansinin"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pagbabahagi ng galing sa pagsusulat sa kalaro ay nagpapababa ng iyong sariling talento.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook kung saan tayo maaaring magpatulong sa pagbasa ng aklat?", "options": ["aklatan", "palengke", "ospital", "outpost"], "answer": 0},
      {"type": "choice", "q": "Sino ang nagtuturo sa atin ng disiplina sa paglalaro ng sports sa paaralan?", "options": ["Principal", "Guro o Coach", "Tanod", "Tindero"], "answer": 1},
      {"type": "choice", "q": "Ano ang ibig sabihin ng pagiging 'sportsman' sa palaro sa plaza?", "options": ["makipag-away kapag natalo", "pagiging patas, disiplinado, at magalang sa kalaban", "pagbili ng bagong bola", "pagtatago ng sipa"], "answer": 1},
      {"type": "choice", "q": "Punan ang patlang: 'Ang pagtulong sa gawaing-bahay ay nagpapakita ng ___ sa ating pamilya.'", "options": ["pagkatakot", "pagmamahal at disiplina", "katamaran", "pagyayabang"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gawin kapag nakita mong nahihirapang magbasa ang iyong kalaro sa barangay?", "options": ["pagtawanan siya sa kalsada", "basahan siya ng kwento at turuan siya nang may pasensya", "isumbong sa kanyang nanay", "huwag siyang salihan sa laro"], "answer": 1},
      {"type": "choice", "q": "Saan ginaganap ang mga opisyal na patimpalak ng katutubong awitin sa barangay?", "options": ["sa aklatan", "sa barangay hall o plaza", "sa loob ng health center", "sa daan ng sasakyan"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pag-awit ng Leron Leron Sinta sa harap ng pamilya ay nakatutulong upang mabawasan ang kahiyaang sarili.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Aling ugali ang ipinapakita ng batang kusang nagdidilig ng mga halaman sa hardin?", "options": ["katamaran", "pagkukusa at responsibilidad", "pagkatakot", "pagyayabang"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na salita kapag tinuturuan ang kalaro na magbilang ng barya?", "options": ["'Napakabagal mo namang matuto!'", "'Dahan-dahan nating bilangin, kaya mo ito.'", "'Huwag ka na lang mag-aral.'", "'Akin na lang ang iyong barya.'"], "answer": 1},
      {"type": "choice", "q": "Ano ang pangunahing layunin ng pakikipagkapwa sa klase?", "options": ["makipag-away upang sumikat", "magtulungan at magkaunawaan ang bawat mag-aaral", "magpaligsahan sa tatak ng sapatos", "magtago sa likod ng guro"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang tamang kilos kapag tinutulungan ang kapatid sa pagsulat?", "options": ["sulatan ang kanyang papel para sa kanya", "ganyakin siya at gabayan ang kanyang kamay nang may pasensya", "gupitin ang kanyang papel", "sabihing hindi siya matututo kailanman"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pambalana sa tao na nag-aalaga ng katawan sa health center:", "options": ["guro", "doktor o nars", "tanod", "pulis"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pagbabahagi ng talento ay isang paraan ng pagpapasalamat sa biyayang ibinigay sa atin.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang nagpapakita ng tamang lakas ng loob sa eskwela?", "options": ["makipag-away sa mas malaking bata", "sumali sa programa at umawit nang malinaw sa entablado", "magtapon ng basura sa pasilyo", "sumigaw sa loob ng aklatan"], "answer": 1},
      {"type": "choice", "q": "Saan natin dapat ilapat ang ating mga natutunang mabubuting asal sa GMRC?", "options": ["sa paaralan lamang", "sa tahanan, paaralan, at sa buong komunidad araw-araw", "tuwing may pagsusulit lamang", "kapag nakatingin ang guro lamang"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Kung ang lahat ng mag-aaral sa Grade 3 ay tumangging ibahagi ang kanilang talento, ano ang maaaring mangyari sa paaralan?", "options": ["Mas mabilis na matututo ang lahat.", "Walang magiging pagtutulungan at mawawalan ng masayang programa ang eskwelahan.", "Mas magiging sikat ang mga guro.", "Walang magbabago sa klase."], "answer": 1},
      {"type": "choice", "q": "Challenge: Paano nagkakaugnay ang disiplina sa paglalaro ng patintero sa kapayapaan ng barangay?", "options": ["Ang disiplinado sa laro ay umiiwas sa away, na nagdudulot ng kapayapaan at pagkakaibigan sa mga kabataan sa komunidad.", "Walang ugnayan ang dalawang ito.", "Ang patintero ay nagpapasikat sa kapitan ng barangay.", "Ang gulo sa laro ay nagpapasaya sa mga tanod."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling paraan ang pinakamahusay upang tulungan ang isang kalaro na laging tinutukso dahil sa kanyang pagkakamali sa pag-awit?", "options": ["tumawa rin kasama ang ibang bata", "sabihan ang mga nanunukso na mali ang kanilang ginagawa, at sabay silang mag-ensayo ng kanta", "sabihan siyang huwag na lang kumanta kailanman", "isumbong sa pulis outpost agad"], "answer": 1},
      {"type": "choice", "q": "Challenge: Bakit ang pagkusa sa pagdidilig ng mga halaman sa bahay ay nagpapakita ng tiwala sa sarili ng isang Grade 3 student?", "options": ["Dahil nagpapatunay ito na kaya niyang gampanan ang responsibilidad nang mag-isa nang hindi inuutusan.", "Dahil ang mga halaman ay kailangang mamatay sa sun.", "Dahil mas madali itong gawin kaysa sa math.", "Dahil binabayaran siya ng kanyang nanay."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling pag-uugnay ang pinakatumpak sa pagitan ng kababaang-loob at pagbabahagi ng talento?", "options": ["Ibinabahagi ang galing upang maging sikat at mapuri ng lahat.", "Ibinabahagi ang galing upang makatulong sa kapwa nang walang hinihintay na kapalit o pagyayabang.", "Hindi ibinabahagi ang galing dahil baka may mas gumaling pa.", "Ibinabahagi ang galing kapalit ng mga laruan."], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Aking Tsart ng Pagkusa",
      "desc": "Gumawa ng isang Tsart ng Pagkusa sa isang malinis na papel. Ilista ang tatlong gawaing-bahay na gagawin mo araw-araw nang may pagkusa (hal. pag-aayos ng higaan, pagliligpit ng laruan, pagdidilig ng halaman). Lagyan ng checkmark ang bawat araw na nagawa mo ito. Ipakita ang tsart sa iyong magulang at hingin ang kanilang lagda bilang patunay.",
      "labels": ["Maayos na naisulat ang tsart na may tatlong gawaing-bahay", "Kusang isinagawa ang mga gawain nang may disiplina sa sarili", "Maayos na naipaliwanag ang tsart at nakakuha ng lagda ng magulang"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Pagbabahagi ng Talento</h3>
                  <p class="ws-instruction">Tukuyin kung ang sitwasyon ay nagpapakita ng <strong>Pagbabahagi</strong> (pagtulong sa kapwa) o <strong>Pagyayabang</strong> (dapat iwasan) gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Tinuturuan ni Caloy ang kanyang kalaro na magbasa ng kwento sa hapon. <span class="fil-sentence" data-translation="(Caloy teaches his playmate to read stories in the afternoon.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pagbabahagi</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Sinasabi ni Matteo sa lahat na siya lang ang magaling gumuhit sa buong klase. <span class="fil-sentence" data-translation="(Matteo tells everyone that only he is good at drawing in class.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pagyayabang</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Tinutulungan ni Lani ang kanyang kapatid na magkuwenta ng kanyang barya. <span class="fil-sentence" data-translation="(Lani helps her sibling compute their coins.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pagbabahagi</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Sportsmanship sa Palaro</h3>
                  <p class="ws-instruction">Isulat ang tamang kilos (<strong>Batiin ang nanalo</strong>, <strong>Makipag-away</strong>, o <strong>Umiyak</strong>) kapag natalo sa sipa sa plaza.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Ang karapat-dapat na kilos ng isang sportsman sa komunidad: <span class="fil-sentence" data-translation="(The worthy action of a sportsman in the community:)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Batiin ang nanalo</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Ang maling kilos na nagdudulot ng gulo sa kalsada: <span class="fil-sentence" data-translation="(The wrong action that causes trouble on the street:)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Makipag-away</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagkusa sa Tahanan</h3>
                  <p class="ws-instruction">Sumulat ng isang pangungusap upang ilarawan kung paano mo gagawin ang pagkusa sa inyong bahay paggising sa umaga.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Describe what you will do with your bed when you wake up: <span class="fil-sentence" data-translation="(Describe what you will do with your bed when you wake up:)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Kusang aayusin ko ang aking higaan at itutupi ang aking kumot nang maayos.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Ito ay nagpapakita ng aking disiplina sa sarili nang hindi inuutusan ng aking nanay.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  3: {
    "color": "#06b6d4",
    "icon": "🧘‍♂️",
    "title": "GMRC",
    "subtitle": "Week 3: Pag-iimpok at Pagtitipid sa Pamilya",
    "slides": [
      {
        "title": "Welcome sa Week 3!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa GMRC Week 3!", "How are you, student? Welcome to GMRC Week 3!"),
          make_translation("Ngayong linggo, may mahalagang aralin tayo sa buhay.", "This week, we have an important lesson for our life."),
          make_translation("Pag-aaralan natin ang pag-iimpok at pagtitipid.", "We will study about saving money and conservation today."),
          make_translation("Ang pag-iimpok ay pagtatabi ng barya para sa bukas.", "Saving is putting aside coins and money for our future."),
          make_translation("Ang pagtitipid ay ang matalinong paggamit ng yaman.", "Frugality is the wise and careful use of our resources."),
          make_translation("Gagawa tayo nito kasama ang ating sariling pamilya.", "We will practice this together with our own family members."),
          make_translation("Handa ka na bang matutong mag-impok ng iyong barya?", "Are you ready to learn how to save your daily coins?"),
          make_translation("Simulan natin ang aralin nang may sigla ngayon!", "Let's start the lesson with active enthusiasm today!")
        ),
        "examples": [{"title": "Layunin ng Aralin", "content": "Maunawaan ang kahalagahan ng pag-iimpok at pagtitipid sa pamilya."}]
      },
      {
        "title": "Ano ang Pag-iimpok?",
        "text": make_text(
          make_translation("Ang pag-iimpok ay ang pagtatabi ng labis na pera.", "Saving is the act of putting aside extra money yonder."),
          make_translation("E.g., kapag binigyan ka ng baon na sampung piso,", "E.g., if you are given ten pesos for school allowance,"),
          make_translation("itatabi mo ang dalawang piso sa iyong alkansya.", "you put aside two pesos inside your coin piggy bank."),
          make_translation("Ang perang itinabi ay tinatawag nating impok.", "The money put aside is what we call savings in GMRC."),
          make_translation("Magagamit natin ito sa oras ng pangangailangan natin.", "We can use this yonder during times of sudden need in life."),
          make_translation("Tulad ng pagbili ng bagong lapis kapag nabali.", "Such as buying a new writing pencil when it breaks down."),
          make_translation("Ang pag-iimpok ay nagpapakita ng disiplina sa sarili.", "Saving money displays a strong sense of self-discipline."),
          make_translation("Mayroon ka bang sariling alkansya sa inyong kuwarto?", "Do you have your own piggy bank in your room today?")
        ),
        "examples": [{"title": "Pag-iimpok", "content": "Pagtatabi ng barya (savings) sa alkansya para sa hinaharap."}]
      },
      {
        "title": "Ano ang Pagtitipid?",
        "text": make_text(
          make_translation("Ang pagtitipid ay ang matipid na paggamit ng yaman.", "Frugality is the careful use of our natural resources."),
          make_translation("Hindi lamang pera ang ating tinipid araw-araw.", "It is not only money that we conserve and save every day."),
          make_translation("Kasama rito ang tubig, kuryente, pagkain, at gamit.", "This includes clean water, electricity, food, and tools."),
          make_translation("E.g., ang pagpatay ng ilaw kapag walang tao sa silid.", "E.g., turning off the lights when no one is inside the room."),
          make_translation("Ang pagdidilig ng halaman gamit ang pinaghugasan.", "Or watering plants using recycled water from washing rice."),
          make_translation("Nakatutulong ito upang makatipid ang ating pamilya.", "This helps our family reduce expenses in the monthly budget."),
          make_translation("Ang pagtitipid ay nagpapakita ng paggalang sa yaman.", "Conservation shows respect for the resources given to us."),
          make_translation("Paano mo ititipid ang tubig kapag naliligo ka?", "How can you conserve clean water when taking a bath today?")
        ),
        "examples": [{"title": "Pagtitipid", "content": "Matalinong paggamit ng tubig, kuryente, pagkain, at gamit."}]
      },
      {
        "title": "Ang Pag-iimpok ng Barya sa Bahay",
        "text": make_text(
          make_translation("Ang pag-iimpok ay masayang gawi sa ating bahay.", "Saving coins is a fun and rewarding habit yonder."),
          make_translation("Maaari tayong gumamit ng alkansya na yari sa kawayan.", "We can use a piggy bank made of natural bamboo poles."),
          make_translation("O kaya ay isang recycled na bote ng gatas sa desk.", "Or perhaps a recycled plastic bottle sitting on our desk."),
          make_translation("Hulugan ito ng barya tuwing hapon pag-uwi sa klase.", "Drop coins inside it every afternoon returning from school."),
          make_translation("Kahit piso o dalawang piso ay malaki ang tulong.", "Even a single peso or two pesos makes a big difference yonder."),
          make_translation("Sa paglipas ng buwan, ang barya ay dadami nang marami.", "Over the months, the coins will accumulate to a large sum."),
          make_translation("Magagamit natin ito sa pagbili ng mga gamit sa eskwela.", "We can use this to buy our school supplies next school year."),
          make_translation("Simulan ang pag-iimpok sa inyong tahanan ngayong gabi!", "Start saving yonder in your own house this very evening!")
        ),
        "examples": [{"title": "Alkansyang Kawayan", "content": "Matalinong paraan upang magtabi ng barya araw-araw."}]
      },
      {
        "title": "Ang Pagtitipid sa Pagkain",
        "text": make_text(
          make_translation("Ang pagkain ay biyaya na hindi dapat sinasayang natin.", "Food is a blessing yonder that must never be wasted."),
          make_translation("Sa bawat hapag-kainan, kumuha lamang ng sapat sa iyo.", "At every mealtime, take only the amount you can consume."),
          make_translation("Ubusin ang lahat ng kanin at ulam sa inyong plato.", "Eat all the rice and food served yonder on your plate."),
          make_translation("Huwag magtira ng pagkain upang hindi ito mabulok.", "Do not leave leftovers yonder to go bad or rot in trash bins."),
          make_translation("Ang pagsasayang ng pagkain ay nagpapakita ng katamaran.", "Wasting food displays a lack of gratitude for blessings."),
          make_translation("Maraming magsasaka ang naghirap upang makamit ang kanin.", "Many farmers worked hard yonder to produce the rice crop."),
          make_translation("Igalang ang kanilang gawa sa pamamagitan ng pag-ubos.", "Respect their hard work yonder by finishing your food today."),
          make_translation("Suriin ang iyong plato ngayon kung may natirang kanin!", "Check your plate now to ensure no rice is left wasted today!")
        ),
        "examples": [{"title": "Ubusin ang Pagkain", "content": "Kumuha lamang ng sapat upang maiwasan ang pagsasayang."}]
      },
      {
        "title": "Ang Pagtitipid sa Kuryente",
        "text": make_text(
          make_translation("Ang kuryente ay mahalagang enerhiya sa komunidad.", "Electricity is a valuable source of energy in town."),
          make_translation("Nagbibigay ito ng liwanag sa ating lamp sa desk.", "It provides power to light up our study lamp at night."),
          make_translation("Ngunit kailangan natin itong tipirin upang makatipid.", "But we must conserve it to reduce our family bill yonder."),
          make_translation("Patayin ang bentilador kapag lalabas ng silid-aralan.", "Turn off the fan when leaving the school classroom today."),
          make_translation("Bunutin ang plug ng telebisyon kapag hindi nanonood.", "Unplug the television set when no one is watching yonder."),
          make_translation("Gamitin ang liwanag ng araw sa umaga kapag nagbabasa.", "Use the natural sunlight in the morning hours when reading."),
          make_translation("Ang pagtitipid sa kuryente ay nagliligtas sa kalikasan.", "Saving electricity helps protect our natural environment today."),
          make_translation("Suriin ang mga nakasaksing kagamitan sa inyong bahay!", "Check yonder the plugged appliances inside your house now!")
        ),
        "examples": [{"title": "Tipid Kuryente", "content": "Patayin ang ilaw at bentilador kapag walang gumagamit."}]
      },
      {
        "title": "Ang Pagtitipid sa Tubig",
        "text": make_text(
          make_translation("Ang tubig ay likas na yaman na kailangan sa buhay.", "Water is a natural resource needed for human survival."),
          make_translation("Gagamit tayo ng tubig sa paghuhugas, paliligo at iba.", "We use water for washing clothes, taking baths and cooking."),
          make_translation("Isara ang gripo habang nagsesepilyo ng inyong ngipin.", "Turn off the faucet while brushing your teeth yonder today."),
          make_translation("Gumamit ng baso sa halip na hayaang tumulo ang gripo.", "Use a glass of water instead of letting the tap flow away."),
          make_translation("Gumamit ng tabo at balde kapag naliligo sa banyo.", "Use a dipper and pail when taking a bath inside the restroom."),
          make_translation("Huwag hayaang sumobra ang tubig sa pagdidilig doon.", "Do not let water overflow yonder when watering the garden."),
          make_translation("Ang bawat patak ng tubig ay may malaking halaga.", "Every single drop of clean water carries a high value yonder."),
          make_translation("Paano mo matutulungan ang nanay sa pagtipid ng tubig?", "How can you help your mother conserve water in the house?")
        ),
        "examples": [{"title": "Tipid Tubig", "content": "Isara ang gripo habang nagsesepilyo; gumamit ng balde."}]
      },
      {
        "title": "Ang Pag-iimpok at Pamilya",
        "text": make_text(
          make_translation("Ang pag-iimpok ay nagpapabuti sa buhay ng pamilya.", "Saving money improves the welfare of the family yonder."),
          make_translation("Nagtutulungan ang magulang at anak sa pag-iimpok.", "Parents and children cooperate yonder to save money daily."),
          make_translation("Maaari tayong magkaroon ng pangkalahatang alkansya.", "We can establish a shared family savings box in the house."),
          make_translation("Dito inilalagay ang barya para sa emergency ng pamilya.", "Here we drop coins yonder for sudden family emergencies today."),
          make_translation("Tulad ng pagbili ng gamot kapag may nagkasakit sa bahay.", "Such as buying medicines yonder when someone falls ill at home."),
          make_translation("Ang pagtitipid ng anak ay tulong sa badyet ng nanay.", "A child's frugality is a big help to the mother's budget."),
          make_translation("Ipinapakita nito na may pakialam tayo sa pamilya natin.", "This shows yonder that we care about our family's future."),
          make_translation("Gumawa ng plano ng pagtitipid kasama ang magulang ngayon!", "Create a frugality plan with your parents this evening!")
        ),
        "examples": [{"title": "Badyet ng Pamilya", "content": "Ang pagtitipid ng anak ay nagpapagaan sa gastos ng magulang."}]
      },
      {
        "title": "Guided Practice: Pag-iimpok ng Barya",
        "text": make_text(
          make_translation("Magsanay tayo sa pag-iimpok ng ating mga barya.", "Let's practice saving our daily coins yonder in school."),
          make_translation("Si Matteo ay may baong bente pesos mula sa nanay.", "Matteo has twenty pesos allowance from his mother today."),
          make_translation("Bumili siya ng saging sa kantina sa halagang labing-walo.", "He bought a banana at the canteen yonder for eighteen pesos."),
          make_translation("May natirang dalawang piso sa kanyang kamay pagkatapos.", "There are two pesos left inside his hand after buying food."),
          make_translation("Inilagay niya ang dalawang piso sa kanyang alkansya.", "He placed the two pesos surplus yonder in his piggy bank."),
          make_translation("Ang dalawang piso na ito ay ang kanyang sariling impok.", "These two pesos represent his savings for the day yonder."),
          make_translation("Nagawa mo bang mag-impok ng barya mula sa iyong baon?", "Did you manage to save some coins from your own allowance?"),
          make_translation("Ito ay mahusay na gawi na dapat mong ipagpatuloy!", "This is a great habit that you must continue every day!")
        ),
        "examples": [{"title": "Pagsasanay Impok", "content": "20 pesos (baon) - 18 pesos (saging) = 2 pesos (impok)"}]
      },
      {
        "title": "Guided Practice: Pagtitipid ng Tubig",
        "text": make_text(
          make_translation("Suriin natin ang paghuhugas ng kamay sa paaralan.", "Let's check handwashing procedures inside our school today."),
          make_translation("Si Lani ay gumamit ng sabon upang maghugas ng kamay.", "Lani used soap to wash her hands at the school washbasin."),
          make_translation("Habang kinukuskos niya ang kamay ng sabon sa gripo,", "While rubbing soap yonder on her hands at the faucet,"),
          make_translation("isinara niya ang gripo upang hindi tumulo ang tubig.", "she turned off the faucet so water does not flow wasted."),
          make_translation("Binuksan niya lang ulit ito nang magbabanlaw na siya.", "She only turned it back on when she was ready to rinse."),
          make_translation("Ang kilos na ito ay nagpapakita ng pagtitipid sa tubig.", "This simple action displays frugality and water conservation."),
          make_translation("Nakatipid siya ng maraming litro ng malinis na tubig.", "She saved many liters of clean water yonder in school today."),
          make_translation("Gawin din ito kapag naghuhugas ka sa inyong kusina!", "Do the same thing when washing dishes in your kitchen now!")
        ),
        "examples": [{"title": "Pagsasanay Tubig", "content": "Lani -> isinara ang gripo habang nagsasabon ng kamay."}]
      },
      {
        "title": "Guided Practice: Pagtitipid ng Pagkain",
        "text": make_text(
          make_translation("Suriin natin ang pagkain ng tanghalian sa bahay.", "Let's check the family lunch routine inside our house."),
          make_translation("Si Kiko ay kumuha ng kanin at ulam sa kanyang plato.", "Kiko took rice and side dishes yonder on his lunch plate."),
          make_translation("Kumuha siya ng sapat na sukat na kaya niyang ubusin.", "He took only a sufficient portion that he could finish eating."),
          make_translation("Inubos niya ang bawat butil ng kanin nang walang tira.", "He finished every grain of rice yonder without any leftovers."),
          make_translation("Walang pagkain na naitapon sa basura pagkatapos kumain.", "No food was thrown into the kitchen garbage bin after lunch."),
          make_translation("Ang kilos na ito ay nagpapakita ng pagtitipid sa pagkain.", "This action displays food conservation and gratitude for blessings."),
          make_translation("Natuwa ang kanyang nanay dahil disiplinado si Kiko.", "His mother was happy because Kiko has excellent self-discipline."),
          make_translation("Ubusin ang iyong pagkain sa bawat kainan kasama ang pamilya!", "Finish your food yonder at every mealtime with your family!")
        ),
        "examples": [{"title": "Pagsasanay Pagkain", "content": "Kiko -> kumuha ng sapat at inubos ang kanin sa plato."}]
      },
      {
        "title": "Maling Pagsasayang ng Tubig",
        "text": make_text(
          make_translation("Iwasan ang paglalaro ng tubig kapag naliligo ka.", "Avoid playing with water yonder when you are taking a bath."),
          make_translation("Mali: 'Hayaang tumakbo ang gripo habang naglalaro sa tub.'", "Wrong: 'Let the faucet flow yonder while playing inside the tub.'"),
          make_translation("Ang malinis na tubig ay limitado at mahal sa komunidad.", "Clean water is limited and expensive in our local community."),
          make_translation("Ang pagsasayang nito ay nagdudulot ng kakulangan sa iba.", "Wasting it causes water shortage yonder for other households."),
          make_translation("Dapat gumamit ng tabo at balde upang kontrolin ang tubig.", "We must use a dipper and pail to control the water volume."),
          make_translation("Tama: 'Gumamit ng balde at tabo sa pagligo sa banyo.'", "Correct: 'Use a pail and dipper yonder for bathing in bathroom.'"),
          make_translation("Tiyakin na isinasara ang mga gripo pagkatapos gamitin ngayon!", "Make sure all faucets are shut off yonder after using today!"),
          make_translation("Ito ay nagpapakita ng pagmamahal sa ating likas na yaman!", "This shows love and respect yonder for our natural resources!")
        ),
        "examples": [{"title": "Tubig Error", "content": "mali: hayaang tumulo ang gripo -> tama: isara ang gripo kapag tapos na"}]
      },
      {
        "title": "Maling Pagbili ng Hindi Kailangan",
        "text": make_text(
          make_translation("Iwasan ang pagbili ng mga bagay na hindi naman kailangan.", "Avoid buying things yonder that are not actually needed."),
          make_translation("Mali: 'Bumili ng maraming laruan kahit mayroon pa sa bahay.'", "Wrong: 'Buying many toys even if there are toys yonder at home.'"),
          make_translation("Ito ay pagsasayang ng pera na maaari sanang maiimpok.", "This is a waste of money that could have been saved yonder."),
          make_translation("Dapat nating bilhin lamang ang mga gamit sa paaralan.", "We must buy only the essential items needed for our classes."),
          make_translation("Tulad ng lapis, papel, at aklat na ginagamit sa klase.", "Such as pencils, writing paper, and books used in school."),
          make_translation("Ang pag-iwas sa luho ay bahagi ng pagtitipid sa pamilya.", "Avoiding luxury is part of frugality yonder in the family."),
          make_translation("Tiyakin na matalino ang iyong paggastos ng baon ngayon!", "Make sure your spending of school allowance is wise today!"),
          make_translation("Ito ang wastong asal na nagpapasaya sa ating magulang!", "This is the correct moral value that makes our parents happy!")
        ),
        "examples": [{"title": "Pagbili Error", "content": "mali: bumili ng laruan -> tama: mag-impok ng barya sa alkansya"}]
      },
      {
        "title": "Ang Pagtitipid sa mga Gamit sa Eskwela",
        "text": make_text(
          make_translation("Ang mga gamit sa eskwela ay yaman na may halaga.", "School supplies are resources yonder that have financial value."),
          make_translation("Dapat natin silang tipirin at ingatan sa klase.", "We must conserve and take care of them inside our classrooms."),
          make_translation("Gamitin ang lapis hanggang sa ito ay maging munti.", "Use the writing pencil until it becomes short and small."),
          make_translation("Huwag punitin ang mga blankong pahina ng iyong notebook.", "Do not tear blank pages yonder out of your school notebook."),
          make_translation("Maaari mo pa itong sulatan ng mga leksyon sa science.", "You can still write science lessons on those blank pages."),
          make_translation("Ang pag-iingat sa gamit ay bawas-gastos sa magulang.", "Caring for supplies reduces expenses yonder for our parents."),
          make_translation("Ipinapakita nito na ikaw ay matipid at disiplinado.", "This shows yonder that you are frugal and well-disciplined."),
          make_translation("Suriin ang iyong bag ngayon kung maayos ang iyong gamit!", "Check your bag now to ensure your supplies are well-kept!")
        ),
        "examples": [{"title": "Tipid Gamit", "content": "Ingatan ang lapis at notebook; huwag punitin ang papel."}]
      },
      {
        "title": "Buod ng Ikatlong Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang kahulugan ng pag-iimpok at pagtitipid.", "We learned about saving money and resource conservation today."),
          make_translation("Nalaman natin ang pagtatabi ng barya sa alkansyang kawayan.", "We discovered saving coins inside a bamboo piggy bank yonder."),
          make_translation("Natutunan natin ang pagtitipid sa pagkain, tubig, at ilaw.", "We learned about conserving food, clean water, and lights."),
          make_translation("Iniwasan natin ang pagsasayang ng yaman at maling pagbili.", "We avoided wasting resources and buying unnecessary things yonder."),
          make_translation("Gumawa tayo ng plano ng pagtitipid kasama ang pamilya.", "We created a frugality plan together with our family members."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng linggong ito?", "Are you ready for the quiz and challenges of this week now?"),
          make_translation("Ipagpatuloy ang pagiging matipid at disiplinadong bata!", "Continue being a frugal and well-disciplined child today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Pag-iimpok = Pera para sa bukas. Pagtitipid = Matalinong paggamit. Tipirin ang yaman!"}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa pagtatabi ng labis na barya o pera para sa hinaharap?", "options": ["paghahambing", "pag-iimpok", "pagtitipid", "pagyayabang"], "answer": 1},
      {"type": "choice", "q": "Ano ang tawag sa matalino at maingat na paggamit ng mga likas na yaman?", "options": ["pag-iimpok", "pagtitipid", "pagkusa", "katamaran"], "answer": 1},
      {"type": "choice", "q": "Saan karaniwang inilalagay ng mga bata ang kanilang naimpok na barya sa bahay?", "options": ["sa basurahan", "sa alkansya", "sa ilalim ng pader", "sa paaralan"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang nagpapakita ng pagtitipid sa kuryente?", "options": ["hayaang nakabukas ang bentilador kapag walang tao", "patayin ang ilaw at bentilador kapag lalabas ng silid-aralan", "isaksak ang telebisyon buong gabi", "gamitin ang lamp kahit maliwanag ang araw"], "answer": 1},
      {"type": "choice", "q": "Paano mo maiiwasan ang pagsasayang ng pagkain sa inyong hapag-kainan?", "options": ["kumuha ng napakaraming pagkain at magtira sa plato", "kumuha lamang ng sapat na sukat at ubusin ang nasa plato", "itapon ang kanin sa basurahan", "huwag kumain kailanman"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gawin sa gripo habang nagsesepilyo ng ngipin sa banyo?", "options": ["hayaang nakabukas at tumutulo ang tubig", "isara ang gripo at gumamit ng baso", "sirain ang gripo", "maglaro ng tubig sa gripo"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang nagpapakita ng pagtitipid sa mga gamit sa eskwela?", "options": ["punitin ang mga blankong papel sa notebook", "gamitin ang lapis hanggang sa ito ay maging munti nang may pag-iingat", "itapon ang krayola kapag nabali ang dulo", "bumili ng bagong bag buwan-buwan"], "answer": 1},
      {"type": "choice", "q": "Sino ang makikinabang kapag ang buong pamilya ay nagtutulungan sa pag-iimpok at pagtitipid?", "options": ["ang kapitan ng barangay lamang", "ang buong pamilya at magulang", "ang mga pulis sa outpost lamang", "ang mga tindero sa palengke"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na gamitin sa paliligo upang makatipid sa tubig kumpara sa shower?", "options": ["tub ng paliguan", "balde at tabo", "gripo na walang tigil ang tulo", "hose ng tubig"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pagtitipid ng kuryente sa pamamagitan ng pagpatay ng ilaw ay nakatutulong sa badyet ng pamilya.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Ano ang dapat gawin sa mga tirang pagkain na maaari pang kainin sa susunod na kainan?", "options": ["itapon sa trash bin agad", "itabi nang maayos sa refrigerator upang maiinit muli", "ipakain sa aso ng kapitbahay", "iwanan sa mesa nang walang takip"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook kung saan tayo nag-iimpok ng pera sa komunidad?", "options": ["palengke", "bangko o alkansya", "aklatan", "ospital"], "answer": 1},
      {"type": "choice", "q": "Anong materyal sa kalikasan ang karaniwang ginagamit sa paggawa ng katutubong alkansya?", "options": ["plastik na tasa", "kawayan o luwad", "bakal na susi", "semento"], "answer": 1},
      {"type": "choice", "q": "Punan ang patlang: 'Ang bawat ___ ng naimpok na barya ay may halaga para sa hinaharap.'", "options": ["punit ng papel", "piso o barya", "tapon ng pagkain", "patak ng luho"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat mong gawin kapag nais mong bumili ng bagong laruan ngunit may laruan ka pa sa bahay?", "options": ["umiyak sa harap ng nanay upang ibili ka", "magtiyaga sa lumang laruan at iimpok ang barya sa alkansya", "sirain ang lumang laruan", "manghingi ng pera sa kapitbahay"], "answer": 1},
      {"type": "choice", "q": "Saan maaaring gamitin ang pinaghugasan ng bigas sa bahay upang makatipid sa tubig?", "options": ["itapon sa sahig ng kusina", "ipangdilig sa mga halaman sa hardin", "ipanghugas ng mukha", "itapon sa basura"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pagbili ng mga mamahaling gamit na hindi kailangan sa paaralan ay bahagi ng pagtitipid.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling ugali ang ipinapakita ng batang nagsusulat sa likod ng mga lumang papel na malinis pa?", "options": ["katamaran", "pagkamatipid at pagpapahalaga sa gamit", "pagkatakot", "pagyayabang"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na sabihin sa kapatid na hinayaang nakabukas ang TV kahit walang nanonood?", "options": ["'Hayaan mo lang yan para maingay.'", "'Patayin natin ang telebisyon upang makatipid tayo sa kuryente.'", "'Ilipat natin sa cartoon kahit matutulog na tayo.'", "'Huwag mong hawakan ang TV.'"], "answer": 1},
      {"type": "choice", "q": "Ano ang pangunahing benepisyo ng pag-iimpok para sa isang Grade 3 student?", "options": ["makabili ng pinakamataas na tatak ng sapatos", "makabili ng sariling gamit sa eskwela sa pasukan nang hindi umaasa sa magulang", "maging sikat sa klase", "makabili ng computer agad"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang tamang kilos kapag nakita mong umaapaw ang tubig sa drum ng barangay?", "options": ["paglaruan ang tubig na umaapaw", "isara ang gripo nang kusa upang hindi masayang ang tubig", "huwag pansinin dahil hindi mo naman drum ito", "isumbong sa bumbero agad"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pambalana sa bagay na nagbibigay-liwanag sa desk na ginagamitan ng kuryente:", "options": ["lapis", "lamp o ilaw", "papel", "aklatan"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pagkusa sa pagpatay ng ilaw kapag umaalis sa silid ay nagpapakita ng disiplina sa sarili.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang nagpapakita ng tamang pagtitipid sa pagkain sa paaralan?", "options": ["magbaon ng napakaraming pagkain at itapon ang hindi naubos", "magbaon ng sapat na pagkain at ubusin ito sa oras ng recess", "bumili ng junk food sa labas ng gate", "huwag kumain ng recess"], "answer": 1},
      {"type": "choice", "q": "Saan dapat magsimula ang pagtuturo ng pagtitipid at pag-iimpok?", "options": ["sa banko lamang", "sa loob ng tahanan kasama ang pamilya araw-araw", "sa palengke lamang", "kapag malaki na at nagtatrabaho na"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Kung ang isang pamilya ay patuloy na nagsasayang ng kuryente at tubig, ano ang maaaring mangyari sa kanilang badyet?", "options": ["Lalaki ang kanilang babayarang bill na magdudulot ng kakulangan sa pera para sa pagkain at iba pang pangangailangan.", "Mababawasan ang kanilang bayarin sa bangko.", "Mas magiging masaya ang Mayor ng bayan.", "Walang magiging epekto ito sa pamilya."], "answer": 0},
      {"type": "choice", "q": "Challenge: Paano nakatutulong ang pag-iimpok ng barya sa alkansya sa paghahanda para sa mga hindi inaasahang pangyayari (emergencies)?", "options": ["Ang naimpok na pera ay magagamit upang ibili ng gamot o kagamitan sa oras ng biglaang pangangailangan nang hindi nangungutang.", "Ang pera ay mabubulok sa loob ng kawayan.", "Hindi na kailangang magtrabaho ng mga magulang.", "Maaaring ipamigay ang pera sa mga kalaro sa plaza."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling paraan ang pinakamahusay upang makatipid sa pagbili ng mga aklat sa paaralan kung may kapatid kang katatapos lang sa Grade 3?", "options": ["bumili ng bago at mamahaling aklat sa mall", "gamitin at ingatan ang mga lumang aklat ng kapatid na maaari pang basahin", "huwag nang mag-aklat kailanman sa klase", "punitin ang mga aklat ng kapatid"], "answer": 1},
      {"type": "choice", "q": "Challenge: Bakit ang paggamit ng pinaghugasan ng bigas o gulay sa pagdidilig ng halaman ay itinuturing na matalinong pagtitipid?", "options": ["Dahil nakakatipid ito sa paggamit ng malinis na tubig mula sa gripo sa pamamagitan ng pag-recycle ng tubig.", "Dahil mas gusto ng halaman ang tubig-bigas kaysa sa ulan.", "Dahil mas madali itong gawin kaysa sa paglilinis ng pader.", "Dahil binabayaran ng barangay ang pamilya sa pag-recycle."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling ugnayan ang pinakatumpak sa pagitan ng disiplina sa pag-iimpok at pagmamahal sa magulang?", "options": ["Ang matipid na bata ay nagpapagaan sa pinansyal na gastusin ng kanyang mga magulang na nagpapakita ng pagmamahal at pag-aalaga sa pamilya.", "Walang ugnayan ang pagtitipid ng anak sa pagmamahal sa magulang.", "Nag-iimpok ang bata upang bigyan ng laruan ang kanyang sarili lamang.", "Nagtitipid ang bata upang hindi na siya pakainin ng magulang."], "answer": 0}
    ],
    "performance": {
      "type": "performance",
      "title": "Aking Plano ng Pagtitipid sa Bahay",
      "desc": "Gumawa ng isang simpleng listahan o tsart ng pagtitipid sa inyong bahay. Isulat ang tatlong paraan kung paano mo titipirin ang tubig at kuryente sa inyong tahanan (hal. pagpatay ng ilaw kapag walang tao, paggamit ng baso sa pagse-sepilyo). Ipakita ang tsart na ito sa iyong magulang at talakayin kung paano ito makatutulong sa badyet ng pamilya.",
      "labels": ["Wastong natukoy ang tatlong paraan ng pagtitipid sa bahay", "Maayos na naisulat at naiguhit ang tsart ng pagtitipid sa papel", "Malinaw na naipaliwanag ang badyet at plano ng pagtitipid sa magulang"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Pag-iimpok vs. Pagtitipid</h3>
                  <p class="ws-instruction">Tukuyin kung ang sitwasyon ay nagpapakita ng <strong>Pag-iimpok</strong> (saving money) o <strong>Pagtitipid</strong> (conserving resources) gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Nagtabi ng limang piso si Matteo mula sa kanyang baon sa kanyang alkansya. <span class="fil-sentence" data-translation="(Matteo put aside five pesos from his allowance in his piggy bank.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pag-iimpok</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Isinara ni Lani ang gripo habang sinasabon ang kanyang mga kamay. <span class="fil-sentence" data-translation="(Lani turned off the faucet while soaping her hands.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pagtitipid</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Pinatay ni Kiko ang bentilador bago lumabas ng silid-aralan. <span class="fil-sentence" data-translation="(Kiko turned off the fan before leaving the classroom.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Pagtitipid</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Matalinong Paggamit ng Yaman</h3>
                  <p class="ws-instruction">Isulat kung ang gawi sa bahay ay <strong>Matipid</strong> (karapat-dapat) o <strong>Matalak</strong> (dapat iwasan/sinasayang ang yaman).</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Paggamit ng pinaghugasan ng bigas sa pagdidilig ng halaman. <span class="fil-sentence" data-translation="(Using rice wash water to water plants.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Matipid</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Hayaang nakasaksak ang TV kahit natutulog na ang lahat. <span class="fil-sentence" data-translation="(Leaving the TV plugged in even when everyone is asleep.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Matalak</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. Kumuha ng sapat na pagkain lamang at ubusin ang nasa plato. <span class="fil-sentence" data-translation="(Taking only enough food and finishing what is on the plate.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Matipid</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagpaplano ng Pag-iimpok</h3>
                  <p class="ws-instruction">Sagutin ang tanong gamit ang tumpak na detalye batay sa iyong sariling alkansya at aralin.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Bakit mahalagang mag-impok ng barya ang isang bata sa kanyang alkansya araw-araw? <span class="fil-sentence" data-translation="(Why is it important for a child to save coins in a piggy bank daily?)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Upang may magamit na sariling pera sa oras ng pangangailangan o pambili ng gamit sa eskwela.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Nakatutulong din ito upang matutong maging disiplinado at matipid sa paglipas ng panahon.</span></div>
                  </div>
                </div>"""
      ]
    }
  },
  4: {
    "color": "#06b6d4",
    "icon": "🧘‍♂️",
    "title": "GMRC",
    "subtitle": "Week 4: Pagtitipid sa Bahay - Matalinong Pamumuhay",
    "slides": [
      {
        "title": "Welcome sa Week 4!",
        "text": make_text(
          make_translation("Kumusta ka, mag-aaral? Welcome sa ikaapat na linggo!", "How are you, student? Welcome to the fourth week!"),
          make_translation("Ngayong linggo, maglalapat tayo ng pagtitipid sa bahay.", "This week, we will apply frugality inside our homes."),
          make_translation("Tukuyin natin ang matalinong pamumuhay araw-araw.", "Let's identify smart and wise living every single day."),
          make_translation("Gagamit tayo ng mga praktikal na paraan sa pagtitipid.", "We will use practical methods of conservation in the house."),
          make_translation("Paano natin maiiwasan ang pagsasayang ng pagkain?", "How can we avoid wasting food and resources yonder?"),
          make_translation("Pag-aaralan din natin ang matipid na pagbili sa palengke.", "We will also study smart and wise shopping at the market."),
          make_translation("Handa ka na bang makatulong sa badyet ng inyong pamilya?", "Are you ready to help with your family's budget today?"),
          make_translation("Simulan natin ang talakayan nang may sigla at galing!", "Let's start the discussion with enthusiasm and skill today!")
        ),
        "examples": [{"title": "Layunin ng Linggo", "content": "Ilapat ang matalinong pagtitipid sa kuryente, tubig, at pagkain sa tahanan."}]
      },
      {
        "title": "Matalinong Pamumuhay sa Tahanan",
        "text": make_text(
          make_translation("Ang matalinong pamumuhay ay nagsisimula sa tahanan.", "Wise living begins right inside our own family home."),
          make_translation("Ito ay ang hindi paggastos sa mga hindi kailangang luho.", "It is avoiding spending money on unnecessary luxuries yonder."),
          make_translation("Nalalaman natin ang pagkakaiba ng gusto sa kailangan.", "We learn the difference between our wants and our needs."),
          make_translation("Ang 'kailangan' ay pagkain, tubig, aklat, at gamot.", "Our 'needs' are food, clean water, books, and medicine."),
          make_translation("Ang 'gusto' ay mga laruan, kendi, o mamahaling sapatos.", "Our 'wants' are toys, sweet candies, or expensive shoes."),
          make_translation("Sa pagtitipid, inuuna natin ang ating mga kailangan.", "In practicing frugality, we prioritize our basic needs."),
          make_translation("Nakatutulong ito upang hindi maubos ang badyet ng pamilya.", "This helps ensure our family budget is not spent wasted."),
          make_translation("Suriin ang iyong mga gamit kung alin ang kailangan!", "Analyze your belongings and identify which are basic needs!")
        ),
        "examples": [{"title": "Kailangan vs Gusto", "content": "bigas (need) vs. tsokolate (want), lapis (need) vs. laruan (want)"}]
      },
      {
        "title": "Ang Pagtitipid sa mga Tirang Pagkain",
        "text": make_text(
          make_translation("Minsan ay may natitirang pagkain pagkatapos kumain.", "Sometimes we have extra food left over after mealtime."),
          make_translation("Huwag itapon ang mga pagkaing ito sa basurahan.", "Do not throw these edible foods into the garbage bin yonder."),
          make_translation("Maaari itong itabi nang maayos sa refrigerator natin.", "We can store them safely inside our family refrigerator."),
          make_translation("O kaya ay takpan ng tudlong upang hindi madapuan ng langaw.", "Or cover them with a food cover so flies do not touch them."),
          make_translation("Maaari itong initin muli sa susunod na kainan sa gabi.", "We can heat them up again for our dinner later in the evening."),
          make_translation("Ang pag-init ng pagkain ay nakakatipid sa badyet natin.", "Heating up leftovers saves money in our food budget today."),
          make_translation("Ipinapakita nito ang disiplina sa paggamit ng pagkain.", "This displays discipline in managing our food resources today."),
          make_translation("Suriin kung paano iniingatan ng nanay ang tirang pagkain!", "Check how your mother preserves leftover food in your house!")
        ),
        "examples": [{"title": "Tirang Pagkain", "content": "Initin at kainin muli ang mga pagkaing malinis pa."}]
      },
      {
        "title": "Matalinong Pamimili sa Palengke",
        "text": make_text(
          make_translation("Ang pagtitipid ay ginagawa rin sa pamimili sa palengke.", "Frugality is also practiced when shopping at the market."),
          make_translation("Ang nanay ay gumagawa ng listahan ng bibilhin niya.", "The mother creates a written shopping list of needed items."),
          make_translation("Binibili lamang niya ang nakasulat sa kanyang listahan.", "She buys only the specific items written on her list yonder."),
          make_translation("Iniiwasan niyang bumili ng mga luho na labas sa badyet.", "She avoids buying luxury items that are outside the budget."),
          make_translation("Naghahanap siya ng mga sariwang gulay na mura ang presyo.", "She searches for fresh vegetables that have reasonable prices."),
          make_translation("Ang paghahambing ng presyo ay matalinong pamumuhay.", "Comparing prices of goods is a sign of wise living in town."),
          make_translation("Nakatutulong ito upang may maimpok na barya ang nanay.", "This helps the mother save extra coins for family savings."),
          make_translation("Sumama sa nanay sa palengke upang masdan ang pamimili!", "Go with your mother to the market to observe her shopping!")
        ),
        "examples": [{"title": "Pamimili sa Palengke", "content": "Gumamit ng shopping list upang maiwasan ang labis na gastos."}]
      },
      {
        "title": "Ang Pagtitipid sa Papel at Lapis",
        "text": make_text(
          make_translation("Ang papel at lapis ay mga yaman na galing sa puno.", "Paper and pencils are resources made from forest trees yonder."),
          make_translation("Ang pagtitipid sa kanila ay pag-aalaga sa kalikasan.", "Conserving them is a way of caring for our environment today."),
          make_translation("Gamitin ang likod ng mga lumang papel na malinis pa.", "Use the back of old papers yonder that are still clean to write."),
          make_translation("Maaari mo itong gawing scratch paper sa matematika.", "You can use them as scratch paper during math lessons in class."),
          make_translation("Huwag itapon ang lapis kapag nabali ang dulo nito.", "Do not discard your writing pencil when its tip breaks yonder."),
          make_translation("Tasin ito gamit ang sharpener upang magamit muli.", "Sharpen it using a pencil sharpener to write sentences again."),
          make_translation("Ang pag-iingat sa gamit ay nagpapakita ng disiplina natin.", "Caring for supplies displays our personal self-discipline today."),
          make_translation("Tiyakin na walang nasasayang na papel sa iyong bag ngayon!", "Make sure yonder no paper is wasted inside your school bag now!")
        ),
        "examples": [{"title": "Tipid Papel at Lapis", "content": "Gamitin ang likod ng papel; tasin ang nabaling lapis."}]
      },
      {
        "title": "Ang Pagtutulungan sa mga Utility Bills",
        "text": make_text(
          make_translation("Ang pamilya ay nagbabayad ng bill sa tubig at ilaw.", "The family pays monthly bills for clean water and lights."),
          make_translation("Ang bawat bawas sa paggamit ay bawas sa babayaran.", "Every reduction in use reduces the amount we pay yonder."),
          make_translation("Bilang anak, malaki ang maitutulong mo sa badyet.", "As a child, you can help greatly in reducing bills at home."),
          make_translation("Ipaalala sa pamilya na isara ang gripo nang mahigpit.", "Remind family members to shut off faucets tightly yonder."),
          make_translation("Ipaalala rin na patayin ang TV kapag natutulog na.", "Remind them also to turn off the TV when sleeping at night."),
          make_translation("Ang mga simpleng paalala ay nagpapakita ng malasakit.", "These simple reminders show your care and responsibility today."),
          make_translation("Nagtutulungan ang lahat upang makatipid sa tahanan natin.", "Everyone cooperates yonder to save resources inside our house."),
          make_translation("Ipagmalaki ang iyong tulong sa badyet ng inyong pamilya!", "Be proud of your contribution to your family's budget today!")
        ),
        "examples": [{"title": "Utility Bills", "content": "Ipaalala ang pagpatay ng gripo at ilaw upang makatipid."}]
      },
      {
        "title": "Matalinong Pag-recycle sa Bahay",
        "text": make_text(
          make_translation("Ang pag-recycle ay isang matalinong paraan ng pagtitipid.", "Recycling is a wise and smart method of conservation yonder."),
          make_translation("May mga basura na maaari pa nating magamit muli.", "There are trash items that we can reuse for other purposes."),
          make_translation("Halimbawa: mga plastik na bote ng gatas at lata.", "Examples: plastic milk bottles and empty metal food cans."),
          make_translation("Maaari natin silang gawing paso para sa mga halaman.", "We can turn them into plant pots for our garden flowers."),
          make_translation("O kaya ay alkansya para sa ating naimpok na barya.", "Or coin piggy banks yonder for our saved daily allowance."),
          make_translation("Ang pag-recycle ay bawas-gastos sa pagbili ng paso.", "Recycling reduces expenses on buying new plant pots in store."),
          make_translation("Nakatutulong din ito upang mabawasan ang basura sa pook.", "This also helps decrease garbage yonder in our local barangay."),
          make_translation("Gumawa ng sariling paso gamit ang bote ngayong hapon!", "Create your own plant pot yonder using a plastic bottle today!")
        ),
        "examples": [{"title": "Pag-recycle", "content": "bote ng gatas -> paso ng halaman, lata -> alkansya ng barya"}]
      },
      {
        "title": "Ang Pagpaplano ng Badyet ng Bata",
        "text": make_text(
          make_translation("Mabuting matutong magplano ng badyet habang bata pa.", "It is good to learn budget planning while you are young yonder."),
          make_translation("Kung bibigyan ka ng baon na bente pesos araw-araw,", "If you are given twenty pesos school allowance every day,"),
          make_translation("hatiin ito sa dalawang bahagi sa iyong isip ngayon.", "divide it into two parts yonder in your mind today."),
          make_translation("Labinlimang piso para sa pagkain sa recess ng paaralan.", "Fifteen pesos for buying healthy snacks during recess hours."),
          make_translation("Limang piso naman para sa iyong alkansya sa bahay.", "Five pesos yonder for your coin savings box at home."),
          make_translation("Ang paghahating ito ay nagpapakita ng tamang badyet.", "This division displays proper money budgeting and planning today."),
          make_translation("Naiiwasan mong maubos ang pera sa mga hindi kailangan.", "You avoid spending all your allowance yonder on candies."),
          make_translation("Simulan ang pagpaplano ng iyong badyet sa eskwela ngayon!", "Start planning yonder your own school budget this week!")
        ),
        "examples": [{"title": "Badyet ng Bata", "content": "15 pesos (pagkain) + 5 pesos (impok) = 20 pesos (baon)"}]
      },
      {
        "title": "Guided Practice: Paggawa ng Paso",
        "text": make_text(
          make_translation("Magsanay tayo sa pag-recycle ng plastik na bote.", "Let's practice recycling a plastic bottle yonder today."),
          make_translation("Kumuha ng isang malinis na bote ng gatas sa bahay.", "Get a clean plastic milk bottle inside your house today."),
          make_translation("Gupitin ang itaas na bahagi gamit ang gunting.", "Cut the top portion off carefully yonder using scissors."),
          make_translation("Lagyan ng maliliit na butas sa ilalim para sa tubig.", "Make small holes yonder at the bottom for water drainage."),
          make_translation("Punan ang bote ng loam soil mula sa inyong hardin.", "Fill the bottle yonder with rich loam soil from your garden."),
          make_translation("Itanim ang isang munting halaman o seed sa loob nito.", "Plant a small seedling or flower seed inside this recycled pot."),
          make_translation("Nagawa mo bang mag-recycle ng bote para sa halaman ngayon?", "Did you successfully recycle a bottle for a green plant today?"),
          make_translation("Ito ay mahusay na gawi na nagpapakita ng pagtitipid!", "This is a great habit yonder displaying resource conservation!")
        ),
        "examples": [{"title": "Pagsasanay", "content": "bote ng gatas -> ginupit -> paso ng halaman sa hardin."}]
      },
      {
        "title": "Guided Practice: Pamimili sa Palengke",
        "text": make_text(
          make_translation("Suriin natin ang pamimili ng nanay ni Matteo.", "Let's check the shopping habits of Matteo's mother yonder."),
          make_translation("Bago pumunta sa palengke ng bayan, sumulat siya.", "Before going yonder to the town market, she wrote a list."),
          make_translation("Isinulat niya: bigas, isda, gulay, at asin sa papel.", "She wrote: rice, fish, vegetables, and salt on paper sheet."),
          make_translation("Sa palengke, binili niya lamang ang apat na bagay na ito.", "At the market, she bought yonder only these four needed things."),
          make_translation("Hindi siya bumili ng mamahaling tsokolate sa tindahan.", "She did not buy expensive chocolates from the store yonder."),
          make_translation("Nakatipid siya ng limampung piso sa kanyang badyet.", "She saved fifty pesos yonder in her family food budget today."),
          make_translation("Ang kilos na ito ay nagpapakita ng matalinong pamumuhay.", "This action displays wise budgeting and smart shopping yonder."),
          make_translation("Kopyahin ang listahan ng nanay sa inyong papel ngayon!", "Copy this shopping list structure yonder onto your paper now!")
        ),
        "examples": [{"title": "Pagsasanay Pamimili", "content": "listahan -> binili lamang ang nakasulat -> nakatipid ng pera."}]
      },
      {
        "title": "Guided Practice: Scratch Paper",
        "text": make_text(
          make_translation("Suriin natin ang paglutas ng math problem sa klase.", "Let's check solving math problems in our classroom today."),
          make_translation("Si Lani ay nangangailangan ng papel para sa scratch.", "Lani needs extra paper yonder for scratch calculations."),
          make_translation("Kumuha siya ng lumang liham na malinis ang likod.", "She got an old letter yonder that has a clean back side."),
          make_translation("Doon niya isinulat ang pagkuwenta ng barya sa math.", "There she wrote her coin computations during math class."),
          make_translation("Hindi siya kumuha ng bagong papel sa kanyang notebook.", "She did not tear a new sheet of paper yonder from notebook."),
          make_translation("Ang kilos na ito ay nagpapakita ng pagtitipid sa papel.", "This action displays paper conservation and care for trees."),
          make_translation("Nakatipid siya ng yaman habang natututo ng matematika.", "She saved resources yonder while learning math calculations."),
          make_translation("Gawin din ito kapag naglutas ka ng mga pagsasanay ngayon!", "Do the same thing when solving your math exercises today!")
        ),
        "examples": [{"title": "Pagsasanay Scratch", "content": "Lani -> ginamit ang likod ng lumang sulat para sa math scratch."}]
      },
      {
        "title": "Maling Pagtatapon ng Gamit",
        "text": make_text(
          make_translation("Iwasan ang pagtatapon ng gamit na maaari pang gamitin.", "Avoid throwing away supplies yonder that can still be used."),
          make_translation("Mali: 'Itapon ang maikling lapis kahit maaari pang itasa.'", "Wrong: 'Discarding short pencils even if they can be sharpened.'"),
          make_translation("Ang maikling lapis ay maaari pa ring isulat sa papel natin.", "Short pencils yonder can still be used to write sentences."),
          make_translation("Ang pagsasayang nito ay nagdudulot ng gastos sa magulang.", "Wasting them causes unnecessary expenses yonder for parents."),
          make_translation("Dapat nating gamitin ang gamit hanggang sa dulo ng buhay.", "We must use our supplies yonder until the end of usefulness."),
          make_translation("Tama: 'Gamitin ang lapis hanggang sa ito ay maging munti.'", "Correct: 'Use the pencil yonder until it becomes short and small.'"),
          make_translation("Tiyakin na pinahahalagahan mo ang bawat gamit sa klase ngayon!", "Make sure yonder you value every supply inside the classroom today!"),
          make_translation("Ito ang tunay na ugali ng matipid na bata sa GMRC natin!", "This is the true spirit of a frugal child in our GMRC class!")
        ),
        "examples": [{"title": "Gamit Error", "content": "mali: itapon ang maikling lapis -> tama: itasa at gamitin muli"}]
      },
      {
        "title": "Maling Paggamit ng Scratch Paper",
        "text": make_text(
          make_translation("Iwasan ang pagsusulat ng scratch sa bagong notebook.", "Avoid using brand new notebooks yonder for scratch writing."),
          make_translation("Mali: 'Sumulat ng math scratch sa gitna ng bagong notebook.'", "Wrong: 'Writing math scratch yonder in new notebooks.'"),
          make_translation("Inilalaan ang bagong notebook para sa opisyal na aralin.", "New notebooks yonder are reserved for clean lesson records."),
          make_translation("Ang math scratch ay dapat isulat sa mga lumang papel.", "Math scratch calculations must be written on old papers yonder."),
          make_translation("Tiyakin na iniingatan mo ang mga pahina ng notebook mo.", "Make sure yonder you preserve the pages of your notebooks."),
          make_translation("Ang pagkasira ng notebook ay nagpapakita ng kawalan ng ingat.", "Tearing pages displays a lack of care and self-discipline."),
          make_translation("Ang tumpak na pag-iingat ay nagpapakita ng mabuting asal.", "Proper care of supplies displays excellent moral values today."),
          make_translation("Maging maingat at disiplinado sa inyong mga aklat ngayon!", "Be careful and disciplined with your books yonder today!")
        ),
        "examples": [{"title": "Notebook Pagsusuri", "content": "Mali: gamitin ang bagong notebook para sa math scratch."}]
      },
      {
        "title": "Ang Kasaysayan ng Pagtitipid sa Bahay",
        "text": make_text(
          make_translation("Ang pagtitipid ay bahagi ng kasaysayan ng ating bansa.", "Frugality is part of the history of our country yonder."),
          make_translation("Ang ating mga ninuno ay kilala sa pagiging matipid.", "Our ancestors were well-known yonder for being frugal."),
          make_translation("Gumagamit sila ng mga likas na yaman nang may pag-iingat.", "They used natural resources yonder with care and respect."),
          make_translation("Walang yaman na itinapon nang walang saysay sa pook.", "No resource was thrown away wasted yonder in the community."),
          make_translation("Ang pag-iimpok ng barya ay ipinasa sa mga sumunod na salinlahi.", "Saving coins was passed down to succeeding generations yonder."),
          make_translation("Ipinagpapatuloy natin ang magandang tradisyong ito ngayon.", "We continue yonder this beautiful and wise tradition today."),
          make_translation("Ito ay nagbibigay ng katatagan sa badyet ng pamilya natin.", "This provides stability to our family budget yonder today."),
          make_translation("Mahalin natin ang gawi ng pagtitipid sa ating tahanan!", "Let's love the habit of frugality inside our family homes!")
        ),
        "examples": [{"title": "Kasaysayan ng Tipid", "content": "Tradisyon ng pagtitipid at pag-iimpok mula sa ninuno."}]
      },
      {
        "title": "Buod ng Ikaapat na Linggo",
        "text": make_text(
          make_translation("Binabati kita! Natapos mo ang lahat ng slide sa linggong ito.", "Congratulations! You completed all the slides for this week."),
          make_translation("Natutunan natin ang matalinong pamumuhay sa ating tahanan.", "We learned about wise and smart living inside our family homes."),
          make_translation("Nalaman natin ang pagtitipid sa pagkain at pamimili doon.", "We discovered conserving leftover food and smart shopping yonder."),
          make_translation("Nag-recycle tayo ng plastik na bote upang gawing paso.", "We recycled plastic bottles yonder to make plant pots."),
          make_translation("Nag-impok tayo ng barya at nagtipid ng papel at lapis natin.", "We saved coins and conserved writing paper and pencils today."),
          make_translation("Nalaman natin ang ugnayan sa pagitan ng tipid at badyet.", "We discovered connection between frugality and family budgets."),
          make_translation("Handa ka na ba sa pagsusulit at hamon ng yunit ngayon?", "Are you ready for the quiz and challenges of the unit today?"),
          make_translation("Ipakita ang iyong disiplina at galing sa GMRC ngayon!", "Show your self-discipline and excellence in GMRC today!")
        ),
        "examples": [{"title": "Tandaan", "content": "Tipid = Matalinong pamumuhay. Recycle = Bawas-gastos. Badyet = Disiplina."}]
      }
    ],
    "standard": [
      {"type": "choice", "q": "Ano ang tawag sa matalino at disiplinadong paraan ng pamumuhay sa tahanan?", "options": ["pagyayabang", "matalinong pamumuhay o pagtitipid", "katamaran", "pagkatakot"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang pangunahing 'kailangan' ng isang bata sa eskwela?", "options": ["laruang robot", "lapis at aklat", "tsokolate", "mamahaling relo"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang isang 'gusto' o luho na maaaring ipagpaliban ang pagbili?", "options": ["bigas", "bagong laruang kotse", "gamot sa lagnat", "tubig na inumin"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gawin sa mga tirang pagkain pagkatapos ng hapunan?", "options": ["itapon sa basurahan ng kusina", "itabi nang maayos sa refrigerator upang maiinit muli", "iwanan sa mesa nang walang takip", "ipakain sa aso ng kapitbahay"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gamitin ng nanay kapag namimili sa palengke upang maiwasan ang labis na gastos?", "options": ["kredit kard", "shopping list o listahan ng bibilhin", "malaking bag na walang laman", "tindahan ng laruan"], "answer": 1},
      {"type": "choice", "q": "Paano mo titipirin ang pagsulat sa iyong notebook sa paaralan?", "options": ["punitin ang mga pahina kapag nagkamali", "gamitin ang likod ng mga lumang papel para sa scratch", "sumulat nang malalaking letra upang maubos agad ang papel", "bumili ng bagong notebook araw-araw"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na gawin sa nabaling dulo ng iyong lapis?", "options": ["itapon ang lapis sa basurahan", "itasa ito gamit ang sharpener upang magamit muli", "hingi ng bagong lapis sa guro", "itago sa ilalim ng desk"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang halimbawa ng pag-recycle ng plastik na bote ng gatas?", "options": ["itapon sa ilog ng barangay", "gupitin at gawing paso para sa halaman sa hardin", "sunugin sa bakuran", "gawing laruan ng aso"], "answer": 1},
      {"type": "choice", "q": "Sino ang makakatipid sa pamilya kapag pinatay mo ang ilaw kapag umaalis sa silid?", "options": ["ang kapitan ng barangay lamang", "ang iyong mga magulang sa babayarang bill", "ang mga tanod sa outpost", "ang bumbero"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pag-recycle ng mga lata bilang alkansya ay nagpapakita ng matalinong pagtitipid.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Ano ang pinakamahusay na paraan upang magplano ng iyong badyet sa baon na 20 pesos?", "options": ["gastusin ang lahat sa kendi", "itabi ang 5 pesos sa alkansya at gamitin ang 15 pesos sa sapat na pagkain", "itapon ang barya sa kalsada", "manghingi pa ng 50 pesos"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang pambalana sa pook kung saan tayo namimili ng gulay at isda?", "options": ["aklatan", "palengke", "munisipyo", "monumento"], "answer": 1},
      {"type": "choice", "q": "Anong yunit ng enerhiya ang binabayaran ng pamilya buwan-buwan na ginagamit para sa bentilador?", "options": ["tubig", "kuryente", "palay", "kawayan"], "answer": 1},
      {"type": "choice", "q": "Punan ang patlang: 'Ang pag-iwas sa pagsasayang ng pagkain ay nagpapakita ng ___ sa mga magsasaka.'", "options": ["pagkatakot", "pagpapahalaga at paggalang", "katamaran", "pagyayabang"], "answer": 1},
      {"type": "choice", "q": "Ano ang dapat gawin sa mga papel na may sulat sa harap ngunit malinis pa ang likod?", "options": ["gawing eroplanong papel at itapon", "gamiting scratch paper sa pagkuwenta sa math", "sunugin sa bakuran", "itapon sa drum ng tubig"], "answer": 1},
      {"type": "choice", "q": "Saan galing ang mga hilaw na materyal sa paggawa ng papel na ating sinusulatan?", "options": ["sa mga plastik na bote", "sa mga puno sa kagubatan", "sa mga metal na susi", "sa semento ng pader"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pagbili ng bagong bag kahit maayos pa ang luma ay isang halimbawa ng pagtitipid.", "options": ["Tama", "Mali"], "answer": 1},
      {"type": "choice", "q": "Aling ugali ang ipinapakita ng batang nagpapaalala sa kanyang ama na patayin ang TV kapag matutulog na?", "options": ["katamaran", "malasakit at pagiging matipid sa pamilya", "pagkatakot", "pagyayabang"], "answer": 1},
      {"type": "choice", "q": "Ano ang angkop na gamitin upang patubuin ang isang seedling sa klase ng science?", "options": ["bakal na susi", "recycled na bote ng gatas na ginawang paso", "plastik na laruan", "alkansyang kawayan"], "answer": 1},
      {"type": "choice", "q": "Ano ang pangunahing benepisyo ng pag-recycle ng mga lata at bote sa bahay?", "options": ["makabili ng bagong sapatos", "mabawasan ang basura at makatipid sa pagbili ng mga bagong kagamitan", "maging sikat sa plaza", "makasali sa parade ng lechon"], "answer": 1},
      {"type": "choice", "q": "Alin sa mga sumusunod ang tamang kilos kapag nakita mong bukas ang ilaw sa silid kahit walang tao?", "options": ["hayaang nakabukas upang maging maliwanag", "patayin ang ilaw nang kusa upang makatipid sa kuryente", "isumbong sa pulis outpost", "tawanan ang nakalimot"], "answer": 1},
      {"type": "choice", "q": "Tukuyin ang pangkalahatang bagay na ginagamit sa pagtatabi ng barya sa inyong kuwarto:", "options": ["basurahan", "alkansya", "bag ng paaralan", "mesa ng guro"], "answer": 1},
      {"type": "verify", "q": "Tama o Mali: Ang pag-iimpok ng barya sa alkansyang kawayan ay tradisyon na ipinasa ng ating mga ninuno.", "options": ["Tama", "Mali"], "answer": 0},
      {"type": "choice", "q": "Alin sa mga sumusunod ang nagpapakita ng tamang pagtitipid sa tubig sa inyong tahanan?", "options": ["hayaang nakabukas ang gripo habang nagsasabon ng pinggan", "gumamit ng balde at baso at isara ang gripo kapag tapos na", "maglaro ng hose sa bakuran", "itapon ang tubig sa kalsada"], "answer": 1},
      {"type": "choice", "q": "Saan natin dapat ilapat ang ating mga natutunang matalinong pagtitipid sa GMRC?", "options": ["sa paaralan lamang tuwing may guro", "sa tahanan kasama ang pamilya sa araw-araw na pamumuhay", "tuwing pista ng bayan lamang", "kapag binibigyan ng baon lamang"], "answer": 1}
    ],
    "challenge": [
      {"type": "choice", "q": "Challenge: Kung ang isang mag-aaral ay nais makatulong sa pagbawas ng utility bills ng kanyang pamilya, aling kilos ang pinakamahusay?", "options": ["magpatakbo ng bentilador buong araw kahit malamig ang panahon", "kusang patayin ang mga ilaw at bentilador kapag walang tao sa silid at isara ang gripo nang mahigpit", "maglaro ng computer habang nakabukas ang TV", "huwag gumamit ng tubig kailanman sa bahay"], "answer": 1},
      {"type": "choice", "q": "Challenge: Paano nagkakaugnay ang pagtitipid ng papel sa pag-aalaga ng mga puno sa kagubatan?", "options": ["Dahil ang papel ay yari sa kahoy ng puno, kaya ang pagtitipid ng papel ay nagpapababa sa pangangailangang putulin ang mga puno.", "Walang ugnayan ang papel sa mga puno sa gubat.", "Ang pagtitipid ng papel ay nagpaparami ng mga plastik na bote.", "Ang pagtitipid ng papel ay nagpapasikat sa mga historyador."], "answer": 0},
      {"type": "choice", "q": "Challenge: Kung ang nanay ni Matteo ay may listahan ng pamimili ngunit bumili pa rin siya ng tatlong mamahaling laruan na labas sa badyet, ano ang epekto nito?", "options": ["Mas makakatipid ang pamilya sa pagkain.", "Mababawasan ang pera para sa mga pangunahing kailangan tulad ng bigas at gamot.", "Magiging masaya ang kapitan ng barangay.", "Walang magiging epekto sa badyet ng pamilya."], "answer": 1},
      {"type": "choice", "q": "Challenge: Bakit ang paggamit ng likod ng lumang sulat bilang scratch paper ay nagpapakita ng matalinong pamumuhay ng isang Grade 3 student?", "options": ["Dahil iniiwasan nitong masayang ang mga blankong pahina ng bagong notebook na inilaan sa klase.", "Dahil mas madali itong sulatan kaysa sa pader.", "Dahil binabayaran siya ng kanyang guro sa paggamit nito.", "Dahil ang lumang sulat ay may gintong barya sa likod."], "answer": 0},
      {"type": "choice", "q": "Challenge: Aling ugnayan ang pinakatumpak sa pagitan ng pag-recycle ng bote at pagtitipid sa badyet ng pamilya?", "options": ["Nag-recycle ng bote upang ibenta sa palengke ng bansa.", "Gumawa ng paso gamit ang bote upang hindi na kailangang bumili ng bagong paso sa tindahan, na bawas-gastos sa magulang.", "Hindi nag-recycle dahil mas maganda ang bumili ng bagong paso.", "Gumawa ng alkansya upang itapon sa ilog."], "answer": 1}
    ],
    "performance": {
      "type": "performance",
      "title": "Tsart ng Pag-recycle ng Pamilya",
      "desc": "Gumawa ng isang recycled na kagamitan sa inyong bahay (tulad ng paso mula sa bote ng gatas, o alkansya mula sa lata). Ipakita ang iyong nagawa sa iyong magulang. Sumulat ng maikling paliwanag sa papel kung paano nakakatipid ang pag-recycle na ito sa badyet ng inyong pamilya. Talakayin ang ulat na ito nang may tiwala sa harap ng iyong pamilya.",
      "labels": ["Wastong nakagawa ng isang recycled na kagamitan mula sa bote o lata", "Maayos na naisulat ang paliwanag tungkol sa pagtitipid sa badyet", "Malinaw at may lakas ng loob na naipaliwanag ang ulat sa pamilya"]
    },
    "worksheet": {
      "pages": [
        """<div class="ws-page-content">
                  <h3>Pagsasanay 1: Kailangan vs. Gusto sa Pamumuhay</h3>
                  <p class="ws-instruction">Tukuyin kung ang sumusunod na bagay ay <strong>Kailangan</strong> (essential) o <strong>Gusto</strong> (luho/hindi kailangan) gamit ang stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. bigas para sa pamilya <span class="fil-sentence" data-translation="(rice for the family)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Kailangan</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. bagong laruang robot <span class="fil-sentence" data-translation="(new toy robot)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Gusto</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">3. gamot para sa may-sakit <span class="fil-sentence" data-translation="(medicine for the sick)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Kailangan</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 2: Pagsusuri ng Scratch Paper</h3>
                  <p class="ws-instruction">Isulat kung ang gawi ay <strong>Matipid</strong> (karapat-dapat) o <strong>Matalak</strong> (dapat iwasan/pagsasayang ng papel).</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. Pagsusulat ng scratch sa likod ng mga lumang sulat na malinis pa. <span class="fil-sentence" data-translation="(Writing scratch on the back of old letters that are clean.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Matipid</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Punitin ang mga blankong pahina ng bagong notebook para gawing scratch paper. <span class="fil-sentence" data-translation="(Tearing blank pages of new notebook to make scratch paper.)"></span></div>
                    <div class="writing-line" style="margin-top: 10px; width: 60%;"><span class="ws-answer">Matalak</span></div>
                  </div>
                </div>""",
        """<div class="ws-page-content">
                  <h3>Pagsasanay 3: Pagsusuri ng Pamimili</h3>
                  <p class="ws-instruction">Sagutin ang tanong gamit ang tumpak na detalye batay sa matalinong pamimili.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Bakit kailangang gumawa ng listahan ng bibilhin ang nanay bago pumunta sa palengke ng bayan? <span class="fil-sentence" data-translation="(Why does mother need to make a shopping list before going to the town market?)"></span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Upang bilhin lamang ang mga kailangan at maiwasan ang paggastos sa mga hindi kailangang bagay.</span></div>
                    <div class="writing-line" style="margin-top: 20px; width: 100%;"><span class="ws-answer">Nakatutulong ito upang makatipid sa badyet ng pamilya at makapag-impok ng barya.</span></div>
                  </div>
                </div>"""
      ]
    }
  }
}
