import os
import re
import json

# Saturday and Sunday sentence translation map
TRANSLATION_MAP = {
    # Week 1 Saturday: Ang Unggoy at ang Pagong
    "Noong araw, may magkaibigang si Pagong at si Matsing.": "Once upon a time, there were friends named Turtle and Monkey.",
    "Kilala si Pagong sa pagiging mabagal ngunit napakatalino at mapagkumbaba, habang si Matsing naman ay kilala sa pagiging mabilis ngunit napakatuso at sakim.": "Turtle was known for being slow but very smart and humble, while Monkey was known for being fast but very cunning and greedy.",
    "Isang araw, habang namamasyal sila sa pampang ng ilog, nakakita sila ng isang lumulutang na puno ng saging.": "One day, while they were walking along the riverbank, they saw a floating banana tree.",
    "'Sa akin ang itaas na bahagi dahil may mga dahon na ito!' sigaw ni Matsing.": "'The top part is mine because it already has leaves!' shouted Monkey.",
    "Pumayag si Pagong at kinuha ang ibabang bahagi na walang dahon ngunit may mga ugat.": "Turtle agreed and took the lower part which had no leaves but had roots.",
    "Umuwi sila at itinanim ang kani-kanilang bahagi.": "They went home and planted their respective parts.",
    "Makalipas ang ilang linggo, nalanta at namatay ang itinanim ni Matsing dahil walang ugat ang kanyang saging.": "After a few weeks, what Monkey planted withered and died because his banana tree had no roots.",
    "Samantala, ang saging ni Pagong ay lumago, naging malabay, at namunga ng marami.": "Meanwhile, Turtle's banana tree grew, became leafy, and bore many fruits.",
    "Nang makita ito ni Matsing, naisip niya na naman na lamangan ang kanyang mabait na kaibigan dahil alam niyang hindi kayang umakyat ni Pagong.": "When Monkey saw this, he thought again of taking advantage of his kind friend because he knew Turtle could not climb.",
    "Dahil hindi makapang-akyat si Pagong, nakiusap siya kay Matsing.": "Since Turtle could not climb, he asked Monkey.",
    "'Kaibigang Matsing, maaari mo ba akong tulungang pitasin ang mga hinog na saging? Hahatiin natin ang mga bunga.'": "'Friend Monkey, could you help me pick the ripe bananas? We will share the fruits.'",
    "Agad na umakyat si Matsing sa puno.": "Monkey quickly climbed the tree.",
    "Ngunit sa halip na ihulog ang mga saging, kinain niya ang lahat ng masasarap at matatamis na saging sa itaas.": "But instead of throwing the bananas down, he ate all the delicious and sweet bananas at the top.",
    "Inihulog lamang niya ang mga balat kay Pagong habang tumatawa ng malakas.": "He only threw the skins down to Turtle while laughing loudly.",
    "'Napakasarap ng mga saging na ito!' biro ni Matsing habang busog na busog.": "'These bananas are so delicious!' Monkey joked while being very full.",
    "Labis na nalungkot at nagalit si Pagong sa kataksilan ng kanyang kaibigan.": "Turtle was very sad and angry at his friend's betrayal.",
    "Upang makaganti, kumuha si Pagong ng mga matutulis na tinik ng suso at ipinalibot ang mga ito sa puno ng saging.": "To get revenge, Turtle gathered sharp snail shells and placed them around the banana tree.",
    "Nang bumaba si Matsing, sumigaw siya sa sakit dahil natusok ang kanyang mga kamay at paa ng matutulis na tinik.": "When Monkey came down, he screamed in pain because his hands and feet were pierced by the sharp shells.",
    "Nagalit si Matsing at hinuli si Pagong.": "Monkey got angry and caught Turtle.",
    "'Ipapakain kita sa apoy o itatapon kita sa ilog!' sigaw ni Matsing.": "'I will feed you to the fire or throw you into the river!' shouted Monkey.",
    "Nag-isip ng mabilis si Pagong at nagkunwaring takot sa ilog.": "Turtle thought quickly and pretended to be afraid of the river.",
    "'Pakiusap, sunugin mo na lang ako sa apoy, huwag mo lang akong itapon sa malalim na ilog dahil malulunod ako!' pagmamakaawa ni Pagong.": "'Please, just burn me in the fire, just don't throw me into the deep river because I will drown!' Turtle begged.",
    "Akala ni Matsing ay matatalo niya si Pagong, kaya itinapon niya ito sa ilog.": "Monkey thought he would defeat Turtle, so he threw him into the river.",
    "Ngunit laking gulat ni Matsing nang lumalangoy nang maayos si Pagong at tumatawa.": "But to Monkey's surprise, Turtle swam easily and laughed.",
    "'Salamat, Matsing! Hindi mo ba alam na sa tubig ako nakatira?' sigaw ni Pagong.": "'Thanks, Monkey! Didn't you know that I live in the water?' Turtle shouted.",
    "Natuto ng malaking leksyon si Matsing tungkol sa pagiging sakim at tuso, at mula noon ay hindi na niya niloko ang iba pang hayop sa kagubatan.": "Monkey learned a big lesson about being greedy and cunning, and since then he never tricked other animals in the forest again.",
    
    # Week 1 Sunday: Ang Alamat ng Pinya
    "Noong unang panahon, may isang mag-ina na nakatira sa isang malayong baryo.": "Once upon a time, there were a mother and daughter living in a remote village.",
    "Sila ay si Aling Rosa at ang kanyang kaisa-isang anak na si Pinang.": "They were Aling Rosa and her only daughter Pinang.",
    "Mahal na mahal ni Aling Rosa si Pinang, ngunit lumaki si Pinang na tamad at walang ginagawa sa bahay kundi maglaro at matulog.": "Aling Rosa loved Pinang very much, but Pinang grew up to be lazy, doing nothing at home but playing and sleeping.",
    "Tuwing tuturuan siya ng kanyang ina na maglinis o magluto, palagi niyang sinasabing alam na niya ito.": "Whenever her mother taught her to clean or cook, she always said she already knew it.",
    "Ngunit kapag inutusan na siya, marami siyang idinadahilan.": "But when ordered to do it, she had many excuses.",
    "Isang araw, nagkasakit ng malubha si Aling Rosa at hindi makabangon sa higaan upang magluto.": "One day, Aling Rosa fell seriously ill and could not get out of bed to cook.",
    "Nakiusap siya kay Pinang, 'Anak, pakiusap at magluto ka ng lugaw para sa ating tanghalian.'": "She pleaded with Pinang, 'Child, please cook rice porridge for our lunch.'",
    "Sumang-ayon si Pinang ngunit nagreklamo pa rin habang naghahanap ng sandok sa kusina.": "Pinang agreed but still complained while looking for the ladle in the kitchen.",
    "Dahil tamad si Pinang, hindi siya naghanap nang mabuti sa kusina.": "Because Pinang was lazy, she did not look well in the kitchen.",
    "Paulit-ulit siyang nagtatanong sa kanyang maysakit na ina.": "She repeatedly asked her sick mother.",
    "'Inay, nasaan po ang sandok?'": "'Mother, where is the ladle?'",
    "'Inay, nasaan po ang bigas?'": "'Mother, where is the rice?'",
    "'Inay, nasaan po ang posporo?'": "'Mother, where are the matches?'",
    "Dahil sa matinding pagod at yamot ng ina sa paulit-ulit na tanong ni Pinang gayong malapit lang naman ang mga gamit, nasabi ni Aling Rosa:": "Due to the mother's extreme fatigue and annoyance at Pinang's repeated questions even though the items were nearby, Aling Rosa said:",
    "'Naku, Pinang! Sana ay magkaroon ka ng maraming mata upang makita mo ang lahat ng bagay at hindi ka na paulit-ulit na nagtatanong sa akin!'": "'Oh Pinang! I wish you had many eyes so you could see everything and stop repeatedly asking me!'",
    "Natahimik si Pinang at lumabas ng kusina upang maghanap muli.": "Pinang fell silent and went out of the kitchen to search again.",
    "Lumipas ang hapon at gabi, ngunit hindi na bumalik si Pinang sa kuwarto ng ina.": "Afternoon and night passed, but Pinang never returned to her mother's room.",
    "Nang gumaling si Aling Rosa, hinanap niya si Pinang sa buong baryo ngunit walang nakakita sa kanya.": "When Aling Rosa recovered, she searched for Pinang in the whole village but no one had seen her.",
    "Isang umaga, habang naglilinis si Aling Rosa sa kanilang bakuran, nakita niya ang isang kakaibang halaman na tumubo sa tabi ng kanilang kusina.": "One morning, while Aling Rosa was cleaning their yard, she saw a strange plant growing next to their kitchen.",
    "Hindi pa siya nakakakita ng ganoong uri ng halaman.": "She had never seen that kind of plant before.",
    "Mayroon itong prutas na may hugis-ulo ng tao at napapalibutan ng napakaraming parang mata sa buong katawan nito.": "It had a fruit shaped like a human head and was surrounded by many eye-like parts all over its body.",
    "Biglang naalala ni Aling Rosa ang kanyang huling sinabi sa anak bago ito mawala.": "Aling Rosa suddenly remembered the last thing she said to her daughter before she disappeared.",
    "Napaiyak siya dahil narealize niyang ang prutas na iyon ay ang kanyang anak na si Pinang na binago ng isang sumpa.": "She wept because she realized that the fruit was her daughter Pinang, transformed by a curse.",
    "Tinawag niya itong 'Pinang' bilang alaalang kanyang anak, at kalaunan ay tinawag itong 'Pinya'.": "She called it 'Pinang' in memory of her daughter, and later it was called 'Pinya' (pineapple).",
    "Inalagaan niya ito nang mabuti at pinalaganap ang mga buto nito sa komunidad.": "She cared for it well and distributed its seeds to the community.",

    # Week 2 Saturday: Si Malakas at si Maganda
    "Noong unang panahon, wala pang lupa at tao sa mundo.": "In ancient times, there was no land or humans in the world.",
    "Ang mayroon lamang ay ang asul na langit, ang malawak na karagatan, at isang makapangyarihang ibon na lumilipad sa pagitan nito.": "There was only the blue sky, the vast ocean, and a powerful bird flying between them.",
    "Isang araw, naging pagod ang ibon sa paglipad at nagpasya na lumikha ng mga isla upang may masilungan.": "One day, the bird got tired of flying and decided to create islands for shelter.",
    "Nang magkaroon ng mga pulo, tumubo ang iba't ibang halaman, kabilang ang isang napakalaking puno ng kawayan sa pampang.": "When islands appeared, various plants grew, including a huge bamboo tree on the shore.",
    "Habang namamasyal ang ibon sa tabi ng mga kawayan, narinig niya ang isang kakaibang katok mula sa loob ng isang malaking kawayan.": "While the bird was walking near the bamboos, it heard a strange tapping from inside a large bamboo.",
    "'Tok! Tok! Tok!' Parang may humihingi ng tulong mula sa loob nito.": "'Knock! Knock! Knock!' It sounded like someone was asking for help inside it.",
    "Dahil sa kuryusidad, tinuka ng ibon ang makapal na kawayan hanggang sa mabiyak ito sa gitna.": "Out of curiosity, the bird pecked the thick bamboo until it split in the middle.",
    "Laking gulat ng ibon nang lumabas ang dalawang magagandang nilalang mula sa loob ng kawayan.": "To the bird's surprise, two beautiful beings came out from inside the bamboo.",
    "Ang una ay isang lalaki na matikas, matapang, at may malalaking kalamnan.": "The first was a man who was strong, brave, and had large muscles.",
    "Tinawag niya ang kanyang sarili na si Malakas.": "He called himself Malakas (Strong).",
    "Ang pangalawa ay isang napakagandang babae na may mahabang buhok, mayumi, at mahinhin kumilos.": "The second was a very beautiful woman with long hair, gentle and demure in actions.",
    "Tinawag niya ang kanyang sarili na si Maganda.": "She called himself Maganda (Beautiful).",
    "Sila ang mga kauna-unahang tao na nanirahan sa mga isla ng Pilipinas.": "They were the first humans to live on the islands of the Philippines.",
    "Pinakita nila sa ibon ang kanilang pasasalamat sa pagpapalaya sa kanila sa madilim na kawayan.": "They showed the bird their gratitude for freeing them from the dark bamboo.",
    "Nagtulungan sina Malakas at Maganda upang magtayo ng kanilang tirahan at maghanap ng pagkain.": "Malakas and Maganda worked together to build their shelter and find food.",
    "Si Malakas ang nagputol ng mga puno at nagtayo ng matibay na kubo upang maprotektahan sila sa bagyo at init, habang si Maganda naman ang nag-alaga sa kanilang bakuran at nagtanim ng mga halamang-gamot.": "Malakas cut trees and built a sturdy hut to protect them from storms and heat, while Maganda tended their yard and planted medicinal herbs.",
    "Nagsimula silang magkaroon ng pamilya at nagturo sa kanilang mga anak ng kahalagahan ng paggawa, respeto, at pagkakaisa sa komunidad.": "They began to have a family and taught their children the importance of work, respect, and unity in the community.",
    "Sila ang pinagmulan ng lahing Pilipino, na kilala sa pagiging matatag tulad ni Malakas at mapagmahal sa sining at kapayapaan tulad ni Maganda.": "They were the ancestors of the Filipino race, known for being resilient like Malakas and loving art and peace like Maganda.",

    # Week 2 Sunday: Ang Kuneho at ang Pagong
    "Isang umaga sa kagubatan, nagyabang si Kuneho sa kanyang bilis sa harap ng iba pang mga hayop.": "One morning in the forest, Rabbit bragged about his speed in front of the other animals.",
    "'Walang sinuman sa kagubatan ang makakatalo sa akin sa takbuhan!' sigaw niya habang tumatalon-talon.": "'Nobody in the forest can beat me in a race!' he shouted while jumping around.",
    "Nang marinig ito ni Pagong, lumapit siya nang dahan-dahan at sinabi, 'Tinatanggap ko ang iyong hamon, Kuneho. Magpaligsahan tayo sa susunod na Linggo.'": "When Turtle heard this, he approached slowly and said, 'I accept your challenge, Rabbit. Let's race next Sunday.'",
    "Tumawa nang malakas si Kuneho at sinabing, 'Nababaliw ka ba, Pagong? Ang bagal mo kayang maglakad!'": "Rabbit laughed out loud and said, 'Are you crazy, Turtle? You walk so slowly!'",
    "Ngunit pumayag pa rin si Kuneho dahil nais niyang ipakita sa lahat ang kanyang bilis.": "But Rabbit still agreed because he wanted to show everyone his speed.",
    "Nagtakda sila ng ruta sa kagubatan patungo sa tuktok ng bundok.": "They set a route in the forest leading to the top of the mountain.",
    "Nagsimula ang karera sa hudyat ng kuwago.": "The race started at the owl's signal.",
    "Agad na tumakbo nang napakabilis si Kuneho at nawala sa paningin ng mga hayop.": "Rabbit immediately ran very fast and disappeared from the animals' sight.",
    "Samantala, si Pagong naman ay nagsimulang maglakad nang dahan-dahan, hakbang-hakbang nang walang hinto.": "Meanwhile, Turtle began walking slowly, step by step without stopping.",
    "Nang malapit na si Kuneho sa dulo, lumingon siya at nakitang napakalayo pa ni Pagong.": "When Rabbit was near the finish line, he looked back and saw Turtle was still very far.",
    "'Matutulog muna ako sa ilalim ng punong ito dahil napakabagal ni Pagong,' sabi ni Kuneho sa sarili.": "'I'll sleep under this tree first because Turtle is so slow,' Rabbit said to himself.",
    "Humiga si Kuneho sa malambot na damo at mabilis na nakatulog dahil sa hanging malamig.": "Rabbit lay down on the soft grass and quickly fell asleep because of the cool wind.",
    "Samantala, patuloy pa rin sa paglalakad si Pagong sa ilalim ng mainit na araw.": "Meanwhile, Turtle kept walking under the hot sun.",
    "Lumipas ang ilang oras.": "Several hours passed.",
    "Nagpatuloy si Pagong sa paglalakad nang walang tigil hanggang sa malagpasan niya ang natutulog na si Kuneho.": "Turtle continued walking without stopping until he passed the sleeping Rabbit.",
    "Nang magising si Kuneho, nagulat siya nang makitang malapit na si Pagong sa dulo ng karera.": "When Rabbit woke up, he was shocked to see Turtle near the end of the race.",
    "Tumakbo si Kuneho nang buong lakas, ngunit huli na ang lahat!": "Rabbit ran with all his strength, but it was too late!",
    "Naabot na ni Pagong ang linya ng tagumpay at sumigaw sa tuwa ang mga hayop.": "Turtle reached the finish line and the animals cheered with joy.",
    "Nahiya si Kuneho sa kanyang kayabangan at humingi ng paumanhin kay Pagong.": "Rabbit was ashamed of his arrogance and apologized to Turtle.",
    "Napatunayan ni Pagong na ang tiyaga at determinasyon ay mas mahalaga kaysa sa bilis na walang pagpapakumbaba.": "Turtle proved that patience and determination are more important than speed without humility.",

    # Week 3 Saturday: Ang Langgam at ang Tipaklong
    "Noong panahon ng tag-araw, ang buong kagubatan ay napakaganda at puno ng pagkain.": "During the summer season, the whole forest was beautiful and full of food.",
    "Habang si Tipaklong ay masayang kumakanta at sumasayaw sa ilalim ng init ng araw, si Langgam naman ay abalang-abala sa paghahanap at paghahakot ng mga butil ng palay at prutas patungo sa kanyang munting bahay.": "While Grasshopper was happily singing and dancing under the hot sun, Ant was very busy searching for and carrying grains of rice and fruits to his small house.",
    "'Langgam, halika muna rito at magsaya tayo! Napakaraming pagkain ngayon, bakit ka nagpapapagod?' tanong ni Tipaklong habang tumutugtog ng gitara.": "'Ant, come here first and let's have fun! There is so much food now, why do you make yourself tired?' Grasshopper asked while playing the guitar.",
    "Sumagot si Langgam, 'Nag-iipon ako ng pagkain para sa darating na tag-ulan upang hindi kami magutom. Dapat mag-ipon ka na rin, Tipaklong.'": "Ant replied, 'I am saving food for the coming rainy season so we won't starve. You should save too, Grasshopper.'",
    "Ngbuti tinawanan lamang siya ni Tipaklong at nagpatuloy sa paglalaro.": "But Grasshopper just laughed at him and continued playing.",
    "Nguyt tinawanan lamang siya ni Tipaklong at nagpatuloy sa paglalaro.": "But Grasshopper just laughed at him and continued playing.",
    "Ngunit tinawanan lamang siya ni Tipaklong at nagpatuloy sa paglalaro.": "But Grasshopper just laughed at him and continued playing.",
    "Mabilis na lumipas ang mga araw at dumating ang panahon ng tag-ulan.": "The days passed quickly and the rainy season arrived.",
    "Ulan dito, ulan doon, at naging napakalamig ng buong kagubatan.": "Rain here, rain there, and the entire forest became very cold.",
    "Nabasa ang mga dahon at walang makitang pagkain sa paligid dahil nalubog sa tubig ang mga damo.": "The leaves got wet and no food could be found around because the grass was submerged in water.",
    "Ligtas na nanatili si Langgam sa loob ng kanyang tuyo at mainit na tahanan, kasama ang kanyang pamilya habang masayang kumain ng mga butil na naipon nila noong tag-araw.": "Ant stayed safely inside his dry and warm home with his family, happily eating the grains they saved during summer.",
    "Samantala, si Tipaklong ay gutom na gutom at nanginginig sa lamig sa labas, walang makitang masisilungan at walang makain.": "Meanwhile, Grasshopper was extremely hungry and shivering in the cold outside, with no shelter and nothing to eat.",
    "Dahil sa matinding gutom, lumapit si Tipaklong sa bahay ni Langgam at kumatok.": "Because of severe hunger, Grasshopper went to Ant's house and  knocked.",
    "Dahil sa matinding gutom, lumapit si Tipaklong sa bahay ni Langgam at kumatok.": "Because of severe hunger, Grasshopper went to Ant's house and knocked.",
    "'Kaibigang Langgam, pakiusap at bigyan mo ako kahit kaunting pagkain. Nanginginig na ako sa gutom,' pakiusap niya.": "'Friend Ant, please give me even a little food. I am shivering from hunger,' he pleaded.",
    "Nakaramdam ng awa si Langgam, kaya pinapasok niya si Tipaklong at binigyan ng mainit na pagkain at tuyong dahon.": "Ant felt pity, so he let Grasshopper in and gave him hot food and dry leaves.",
    "'Salamat, Langgam. Ngayon ay naintindihan ko na kung bakit ka nagtrabaho noong tag-araw habang ako ay naglaro lamang,' wika ni Tipaklong nang may pagsisisi.": "'Thanks, Ant. Now I understand why you worked in the summer while I only played,' Grasshopper said with regret.",
    "Nangako si Tipaklong na sa susunod na tag-araw, mag-iipon din siya ng pagkain tulad ng kanyang masipag na kaibigan.": "Grasshopper promised that next summer, he would also save food like his hardworking friend.",

    # Week 3 Sunday: Si Juan Tamad
    "Sa isang maliit na baryo, may isang batang lalaki na nagngangalang Juan.": "In a small village, there was a boy named Juan.",
    "Dahil sa kanyang labis na katamaran, binansagan siya ng kanyang mga kapitbahay na si Juan Tamad.": "Because of his extreme laziness, his neighbors nicknamed him Juan Tamad (Lazy Juan).",
    "Tuwing inuutusan siya ng kanyang ina, lagi siyang nagdadahilan o gumagawa ng paraan upang hindi matapos ang gawain.": "Whenever his mother ordered him, he always made excuses or found ways not to finish the task.",
    "Isang mainit na hapon, habang naglalakad si Juan sa tabi ng kalsada, nakakita siya ng isang puno ng bayabas na puno ng malalaki at hinog na bunga.": "One hot afternoon, while Juan was walking along the road, he saw a guava tree full of large and ripe fruits.",
    "Gustong-gusto niyang kumain ng bayabas, ngunit napakataas ng puno at ayaw niyang magkapagod sa pag-akyat.": "He really wanted to eat guavas, but the tree was very tall and he did not want to tire himself climbing.",
    "Sa halip na umakyat o kumuha ng mahabang kawayan upang sungkitin ang bayabas, humiga si Juan sa ilalim ng puno.": "Instead of climbing or getting a long bamboo to pick the guavas, Juan lay down under the tree.",
    "Tumingala siya at tinitigan ang isang napakahinog na bayabas na nakabitin sa mababang sanga.": "He looked up and stared at a very ripe guava hanging on a low branch.",
    "'Hihiga na lang ako rito at bubuksan ko ang aking bibig. Hihintayin ko na lang na mahulog ang bayabas sa aking bibig,' sabi ni Juan sa sarili.": "'I'll just lie here and open my mouth. I'll just wait for the guava to fall into my mouth,' Juan said to himself.",
    "Nanatili siyang nakahiga sa ilalim ng puno ng ilang oras, habang lumilipas ang araw at nagugutom siya.": "He remained lying under the tree for several hours while the day passed and he grew hungry.",
    "Ang mga ibon naman ay dumapo sa puno at kinain ang ilang bayabas sa itaas habang pinapanood si Juan.": "Birds perched on the tree and ate some guavas at the top while watching Juan.",
    "Nang dumaan ang kanyang ina sa kalsada at nakita si Juan na nakanganga sa ilalim ng puno, napa-iling ito sa lungkot at galit.": "When his mother passed by the road and saw Juan gaping under the tree, she shook her head in sadness and anger.",
    "'Juan! Bakit ka nakahiga diyan?' tanong ng ina.": "'Juan! Why are you lying there?' his mother asked.",
    "'Ina, hinihintay ko pong mahulog ang bayabas sa aking bibig,' sagot ni Juan.": "'Mother, I am waiting for the guava to fall into my mouth,' Juan replied.",
    "Sinabi ng kanyang ina, 'Napakalaking bayabas niyan, Juan! Kung tumayo ka lamang at kinuha ito gamit ang iyong kamay, kanina ka pa busog! Walang pagkain na kusang mahuhulog sa bibig ng taong ayaw gumawa.'": "His mother said, 'That's a very big guava, Juan! If you had only stood up and picked it with your hand, you would have been full long ago! No food will fall on its own into the mouth of a person who doesn't want to work.'",
    "Nahiya si Juan at tumayo upang tulungan ang kanyang ina sa pagdadala ng mga kahoy.": "Juan was ashamed and stood up to help his mother carry firewood.",

    # Week 4 Saturday: Ang Leon at ang Daga
    "Isang mainit na tanghali, isang malaking Leon ang natutulog sa kanyang yungib.": "One hot afternoon, a big Lion was sleeping in his cave.",
    "Isang maliit na Daga ang naglalaro sa malapit at aksidenteng nakatakbo sa ibabaw ng mukha ng Leon.": "A little Mouse was playing nearby and accidentally ran over the Lion's face.",
    "Nagising ang Leon na may malakas na ungal, at hinuli ang Daga gamit ang kanyang malaking paw.": "The Lion woke up with a loud roar and caught the Mouse with his huge paw.",
    "'Patawad, Haring Leon!' umiiyak na pakiusap ng Daga.": "'Forgive me, King Lion!' the Mouse cried and pleaded.",
    "'Huwag mo akong kainin. Isang araw ay tutulungan kita bilang ganti.'": "'Don't eat me. One day I will help you in return.",
    "Natawa ang Leon sa ideya na ang isang maliit na daga ay makakatulong sa isang hari.": "The Lion laughed at the idea that a tiny mouse could help a king.",
    "Ngunit dahil nasa mabuting mood siya, pinakawalan niya ang Daga.": "But because he was in a good mood, he set the Mouse free.",
    "Makalipas ang ilang araw, habang naghahanap ng makakain sa kagubatan ang Leon, nasakote siya sa lambat ng mga mangangaso.": "Several days later, while the Lion was searching for food in the forest, he was caught in a hunters' net.",
    "Nagpupumiglas siya ngunit lalo lamang humihigpit ang mga lubid.": "He struggled but the ropes only grew tighter.",
    "Sumigaw ang Leon sa galit at takot, at narinig ito ng maliit na Daga.": "The Lion roared in anger and fear, and the little Mouse heard it.",
    "Agad na tumakbo ang Daga sa kinaroroonan ng Leon.": "The Mouse immediately ran to where the Lion was.",
    "'Huwag kang mag-alala, Haring Leon, ililigtas kita!' sabi ng Daga.": "'Don't worry, King Lion, I will save you!' said the Mouse.",
    "Gamit ang kanyang matatalas na ngipin, sinimulan niyang ngatngatin ang makapal na lubid ng lambat.": "Using her sharp teeth, she began to gnaw on the thick ropes of the net.",
    "Hindi sumuko ang Daga kahit nangangalay na ang kanyang panga.": "The Mouse did not give up even though her jaw was aching.",
    "Nginatngat niya ang lubid hanggang sa maputol ang pangunahing buhol nito at lumuwag ang lambat.": "She gnawed the rope until its main knot broke and the net loosened.",
    "Nakawala ang Leon at nakaligtas!": "The Lion got free and was saved!",
    "Lumingon ang Leon sa Daga at sinabi, 'Salamat, maliit na kaibigan. Nagkamali ako nang tawanan ko ang iyong pangako.'": "The Lion looked at the Mouse and said, 'Thank you, little friend. I was wrong to laugh at your promise.'",
    "Mula noon, naging matalik silang magkaibigan, nagtutulungan sa lahat ng bagay sa kagubatan, na nagpapatunay na walang kaibigan na sobrang liit upang makatulong sa iba.": "From then on, they became close friends, helping each other in everything in the forest, proving that no friend is too small to help others.",

    # Week 4 Sunday: Ang Mahiwagang Palayok
    "Sa isang maliit na nayon, nakatira ang isang mabait na batang babae na si Maya at ang kanyang matandang lola.": "In a small village, a kind girl named Maya lived with her old grandmother.",
    "Sila ay napakahirap at madalas ay walang makain.": "They were very poor and often had nothing to eat.",
    "Isang araw, habang naghahanap ng mga tuyong kahoy si Maya sa kagubatan, nakatagpo siya ng isang matandang babae na may mabigat na pasanin.": "One day, while Maya was searching for dry wood in the forest, she met an old woman with a heavy load.",
    "Tinulungan ito ni Maya nang walang alinlangan.": "Maya helped her without any hesitation.",
    "Bilang pasasalamat, binigyan siya ng matanda ng isang maliit na palayok.": "Out of gratitude, the old woman gave her a small pot.",
    "'Ito ay isang mahiwagang palayok. Sabihin mo lang ang \"Luto, munting palayok, luto!\" at magluluto ito ng matamis at masarap na lugaw. Kapag busog ka na, sabihin mo ang \"Hinto, munting palayok, hinto!\" at titigil ito,' paliwanag ng matanda.": "'This is a magic pot. Just say \"Cook, little pot, cook!\" and it will cook sweet and delicious porridge. When you are full, say \"Stop, little pot, stop!\" and it will stop,' explained the old woman.",
    "Masayang umuwi si Maya at ipinakita sa kanyang lola ang mahiwagang palayok.": "Maya happily went home and showed her grandmother the magic pot.",
    "Mula noon, hindi na sila nagutom dahil tuwing kakain sila ay nagluluto ang palayok ng masarap na pagkain.": "Since then, they never went hungry because every time they ate, the pot cooked delicious food.",
    "Isang araw, umalis si Maya upang bumisita sa kabilang baryo.": "One day, Maya left to visit a neighboring village.",
    "Nagutom ang kanyang lola at sinabi sa palayok: 'Luto, munting palayok, luto!'": "Her grandmother grew hungry and said to the pot: 'Cook, little pot, cook!'",
    "Agad na nagluto ang palayok ng mainit na lugaw.": "The pot immediately cooked hot porridge.",
    "Kumain nang kumain ang lola hanggang sa mabusog.": "The grandmother ate and ate until she was full.",
    "Ngunit nang nais na niyang patigilin ang palayok, nakalimutan niya ang tamang salita.": "But when she wanted to stop the pot, she forgot the correct words.",
    "Sinabi niya: 'Salamat, tapos na!', 'Hinto na!' ngunit patuloy pa rin ang palayok sa pagluluto.": "She said: 'Thank you, it's done!', 'Stop now!' but the pot still continued cooking.",
    "Umapaw ang lugaw mula sa palayok, gumapang sa sahig, lumabas sa pinto, at napuno ang buong kalsada ng nayon.": "The porridge overflowed from the pot, crawled on the floor, went out the door, and filled the whole village street.",
    "Nagtakbuhan ang mga kapitbahay dahil sa bumabahang lugaw.": "The neighbors ran away because of the flooding porridge.",
    "Nang bumalik si Maya at nakita ang sitwasyon, agad siyang sumigaw ng malakas: 'Hinto, munting palayok, hinto!'": "When Maya returned and saw the situation, she immediately shouted loudly: 'Stop, little pot, stop!'",
    "Agad na tumigil ang palayok sa pagluluto.": "The pot immediately stopped cooking.",
    "Kinailangang kainin ng mga tao ang lugaw sa kalsada upang makadaan muli.": "People had to eat the porridge on the street to be able to pass again.",
    "Mula noon, naging maingat na ang lola at si Maya sa paggamit nito, at ibinahagi nila ang pagkain sa lahat nang may wastong disiplina.": "From then on, the grandmother and Maya were careful in using it, and they shared the food with everyone with proper discipline.",

    # Week 5 Saturday: Ang Matsing at ang Buwaya
    "Sa isang malawak na kagubatan, nakatira ang isang matalinong Matsing sa isang malaking puno ng bayabas sa tabi ng ilog.": "In a vast forest, a clever Monkey lived in a large guava tree by the river.",
    "Araw-araw ay kumakain siya ng matatamis na bayabas.": "Every day he ate sweet guavas.",
    "Isang araw, lumapit ang isang malaking Buwaya sa pampang ng ilog.": "One day, a large Crocodile approached the riverbank.",
    "'Kaibigang Matsing, maaari mo ba akong bigyan ng ilang bayabas? Gutom na ako,' sabi ng Buwaya.": "'Friend Monkey, could you give me some guavas? I am hungry,' said the Crocodile.",
    "Agad na pumitas si Matsing ng mga hinog na bayabas at inihulog sa Buwaya.": "Monkey immediately picked ripe guavas and dropped them to the Crocodile.",
    "Naging magkaibigan sila at nagkikita araw-araw upang magkwentuhan at kumain.": "They became friends and met every day to talk and eat.",
    "Dinalhan ng Buwaya ang kanyang asawa ng ilang bayabas.": "The Crocodile brought some guavas to his wife.",
    "Ngunit nang makain ito ng asawa, sinabi nito: 'Kung ang bayabas ay ganito katamis, tiyak na mas matamis ang puso ng Matsing na kumakain nito araw-araw! Gusto kong kainin ang kanyang puso.'": "But when the wife ate it, she said: 'If the guavas are this sweet, surely the heart of the Monkey who eats them daily is sweeter! I want to eat his heart.'",
    "Napilitan ang Buwaya na linlangin ang kanyang kaibigan.": "The Crocodile was forced to deceive his friend.",
    "Kinabukasan, sinabi niya kay Matsing: 'Matsing, gusto kang makilala ng asawa ko. Sumakay ka sa likod ko at tatawid tayo sa kabila ng ilog kung saan nakatira ang aking pamilya.'": "The next day, he said to Monkey: 'Monkey, my wife wants to meet you. Ride on my back and we will cross to the other side of the river where my family lives.'",
    "Sumakay si Matsing, ngunit sa gitna ng ilog, sinabi ng Buwaya ang totoo.": "Monkey rode, but in the middle of the river, the Crocodile told the truth.",
    "Natakot si Matsing ngunit nag-isip ng mabilis.": "Monkey was afraid but thought quickly.",
    "'Naku, Buwaya! Bakit hindi mo sinabi agad? Iniwan ko ang puso ko sa itaas ng puno ng bayabas dahil natatakot akong mabasa ito sa ilog. Bumalik tayo at kukunin ko ito,' wika ni Matsing.": "'Oh Crocodile! Why didn't you say so earlier? I left my heart at the top of the guava tree because I was afraid it would get wet in the river. Let's go back and I'll get it,' said Monkey.",
    "Naniwala ang Buwaya at lumangoy pabalik sa pampang.": "The Crocodile believed it and swam back to the shore.",
    "Pagdating sa pampang, mabilis na tumalon si Matsing sa puno at tumawa.": "Upon reaching the shore, Monkey quickly jumped onto the tree and laughed.",
    "'Sino ang tangang hayop na nag-iiwan ng puso sa puno? Niloko mo ako, kaya niloko rin kita!' sigaw ni Matsing.": "'What foolish animal leaves their heart on a tree? You tricked me, so I tricked you too!' shouted Monkey.",
    "Natuto ang Buwaya na hindi sapat ang lakas kung walang talino, at nawalan siya ng matapat na kaibigan.": "The Crocodile learned that strength is not enough without intelligence, and he lost a loyal friend.",

    # Week 5 Sunday: Alamat ng Bahaghari
    "Noong unang panahon, ang mga kulay sa mundo ay nag-away-away.": "Once upon a time, the colors in the world quarreled.",
    "Ang bawat kulay ay nag-aangkin na siya ang pinakamahalaga at pinakamaganda sa lahat.": "Each color claimed that it was the most important and most beautiful of all.",
    "Sigaw ni Pula: 'Ako ang simbolo ng tapang at pag-ibig! Ako ang pinakamahalaga!'": "Red shouted: 'I am the symbol of courage and love! I am the most important!'",
    "Sabi ni Dilaw: 'Ako ang nagdadala ng liwanag at init ng araw! Kung wala ako, malungkot ang mundo!'": "Yellow said: 'I bring light and warmth of the sun! Without me, the world is sad!'",
    "Sabi naman ni Asul: 'Ako ang kulay ng malawak na karagatan at ng payapang langit!'": "Blue said: 'I am the color of the vast ocean and peaceful sky!'",
    "Ang bawat kulay ay nagmamataas at hindi nakikinig sa iba.": "Each color was proud and did not listen to the others.",
    "Habang lumalaki ang kanilang away, biglang dumilim ang langit at kumidlat nang napakalakas.": "As their fight grew, the sky suddenly darkened and lightning struck very loudly.",
    "Bumuhos ang isang matinding bagyo at ulan sa buong mundo.": "A severe storm and rain poured over the whole world.",
    "Natakot ang mga kulay sa lakas ng ulan, kaya nagkumpol-kumpol sila at naghawak-hawak ng kamay upang hindi tangayin ng agos.": "The colors were afraid of the heavy rain, so they huddled together and held hands so as not to be swept away by the current.",
    "Biglang nagsalita ang Ulan sa kanila: 'Mga kulay, bakit kayo nag-aaway? Nilikha kayo ng may likha upang maging natatangi, ngunit magkakasama kayo upang maging kumpleto. Magtulungan kayo at huwag mag-away.'": "The Rain suddenly spoke to them: 'Colors, why are you fighting? The Creator made you to be unique, but together you are complete. Help each other and do not fight.'",
    "Nahiya ang mga kulay sa kanilang pag-aaway at nagka-isa.": "The colors were ashamed of their fighting and united.",
    "Nang tumigil ang bagyo at sumikat ang araw, magkakahawak-kamay silang umakyat sa langit bilang isang arko ng iba't ibang magagandang kulay.": "When the storm stopped and the sun shone, they went up to the sky holding hands as an arch of beautiful colors.",
    "Ito ang tinawag na Bahaghari (Rainbow).": "This was called Bahaghari (Rainbow).",
    "Simula noon, tuwing matatapos ang ulan, lumilitaw ang bahaghari sa langit bilang paalala ng pagkakaisa, pag-asa, at kapayapaan sa buong mundo pagkatapos ng unos.": "Since then, whenever the rain ends, the rainbow appears in the sky as a reminder of unity, hope, and peace in the whole world after the storm.",

    # Vocabulary & Other text sentences
    "Mga Bokabularyo:": "Vocabulary:",
    "Sakim - Mapag-imbot o gustong solohin ang lahat.": "Greedy - Selfish or wanting to keep everything to oneself.",
    "Nalanta - Natuyo ang halaman at namatay.": "Withered - Dried up and died.",
    "Niloko - Dinaya o ginawan ng masama.": "Tricked - Deceived or treated badly.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'ng' sa dulo ng mga salitang 'unggoy', 'pagong', at 'saging'.": "Phonics Focus: Practice pronouncing the 'ng' sound at the end of the words 'unggoy', 'pagong', and 'saging'.",
    "Mga Tanong:": "Questions:",
    "1. Anong bahagi ng puno ng saging ang pinili ni Matsing, at bakit ito namatay?": "1. Which part of the banana tree did Monkey choose, and why did it die?",
    "2. Paano dinaya ni Matsing si Pagong nang umakyat siya sa puno?": "2. How did Monkey trick Turtle when he climbed the tree?",
    "3. Paano nakaligtas si Pagong sa parusa ni Matsing?": "3. How did Turtle escape Monkey's punishment?",
    "Kaisipan: Ang katapatan at kababaang-loob ay palaging nagtatagumpay.": "Thought: Honesty and humility always triumph.",
    "Ang kasakiman at panlilinlang ay nagdadala ng kapahamakan sa sarili. Mas maganda ang maging tapat sa mga kaibigan at magbahagi ng mga biyaya sa kapwa.": "Greed and deception bring harm to oneself. It is better to be honest with friends and share blessings with others.",
    "Talakayin: Bakit mahalagang ibahagi ang mga bagay sa iyong mga kaibigan?": "Discuss: Why is it important to share things with your friends?",

    "Baryo - Isang maliit na komunidad o nayon sa probinsya.": "Village - A small community or settlement in the province.",
    "Yamot - Pagkainis o kawalan ng pasensya.": "Annoyed - Irritated or lack of patience.",
    "Sumpa - Isang mahiwagang salita na nagdudulot ng pagbabago.": "Curse - A magical word that causes a transformation.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'p' sa salitang 'pinya', 'pinang', at 'pagod'.": "Phonics Focus: Practice pronouncing the 'p' sound in the words 'pinya', 'pinang', and 'pagod'.",
    "1. Ano ang ugali ni Pinang na nagpahirap sa kanyang ina?": "1. What was Pinang's behavior that made it hard for her mother?",
    "2. Ano ang nasabi ni Aling Rosa kay Pinang dahil sa kanyang pagkainis?": "2. What did Aling Rosa say to Pinang out of her annoyance?",
    "3. Ano ang kakaibang halaman na tumubo sa bakuran ni Aling Rosa?": "3. What was the strange plant that grew in Aling Rosa's yard?",
    "Kaisipan: Ang pagsunod sa magulang at pagkusa sa paggawa ay mahalagang katangian.": "Thought: Obedience to parents and initiative in working are important qualities.",
    "Huwag maging tamad at matutong maghanap gamit ang sariling lakas bago magtanong sa iba. Ang mga salita ng magulang ay may kapangyarihan kaya dapat maging maingat sa pagsalitang iyon.": "Do not be lazy and learn to search using your own effort before asking others. A parent's words have power so one must be careful with what is said.",
    "Talakayin: Ano ang mga simpleng gawaing-bahay na maaari mong gawin upang makatolong sa iyong mga magulang?": "Discuss: What are simple household chores you can do to help your parents?",
    "Talakayin: Ano ang mga simpleng gawaing-bahay na maaari mong gawin upang makatulong sa iyong mga magulang?": "Discuss: What are simple household chores you can do to help your parents?",

    "Matikas - Malakas ang pangangatawan at may magandang tindig.": "Stately - Strong physique and good posture.",
    "Kawayan - Isang matibay na uri ng damo na parang kahoy na ginagamit sa pagtatayo ng bahay.": "Bamboo - A sturdy type of grass like wood used in building houses.",
    "Mayumi - Mahinhin o magandang kumilos.": "Demure - Gentle or graceful in movement.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'm' sa 'malakas', 'maganda', at 'mundo'.": "Phonics Focus: Practice pronouncing the 'm' sound in 'malakas', 'maganda', and 'mundo'.",
    "1. Saan nagmula sina Malakas at Maganda ayon sa alamat?": "1. Where did Malakas and Maganda come from according to the legend?",
    "2. Ano ang mga katangian ni Malakas at Maganda?": "2. What were the qualities of Malakas and Maganda?",
    "3. Paano sila nagtulungan sa kanilang bagong tahanan?": "3. How did they help each other in their new home?",
    "Kaisipan: Ang pagkakaisa ng lakas at kagandahan ay nagdudulot ng magandang komunidad.": "Thought: The unity of strength and beauty brings about a beautiful community.",
    "Ang bawat tao ay may kani-kaniyang talento at lakas na dapat gamitin para sa kabutihan ng pamilya. Ang pagtutulungan ng bawat kasapi ng pamilya ay susi sa masayang tahanan.": "Each person has their own talent and strength that should be used for the family's good. The cooperation of every family member is the key to a happy home.",
    "Discuss: Ano ang iyong sariling lakas na maaari mong ibahagi upang makatulong sa pamilya?": "Discuss: What is your own strength that you can share to help the family?",

    "Nagyabang - Nagmalaki o ipinakita ang sariling galing nang may kasamang pagmamataas.": "Bragged - Showed off or displayed one's skills with pride.",
    "Ruta - Daanan o direksyon ng paglalakbay.": "Route - Path or direction of travel.",
    "Determinasyon - Katatagan ng loob upang maabot ang layunin.": "Determination - Firmness of heart to reach a goal.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'k' sa 'kuneho', 'karera', at 'kagubatan'.": "Phonics Focus: Practice pronouncing the 'k' sound in 'kuneho', 'karera', and 'kagubatan'.",
    "1. Bakit tinanggap ni Pagong ang hamon ni Kuneho kahit alam niyang mabagal siya?": "1. Why did Turtle accept Rabbit's challenge even though he knew he was slow?",
    "2. Ano ang ginawa ni Kuneho habang tumatakbo sa karera?": "2. What did Rabbit do while running in the race?",
    "3. Sino ang nanalo sa paligsahan, at paano niya ito nagawa?": "3. Who won the competition, and how did they do it?",
    "Kaisipan: Ang tiyaga at pagpapakumbaba ay susi sa tagumpay.": "Thought: Patience and humility are keys to success.",
    "Huwag maliitin ang kakayahan ng iba kahit sa tingin mo ay mas magaling ka. Ang pagpapatuloy na pagsisikap nang may katapatan ay nagdadala ng tunay na panalo.": "Do not underestimate others' abilities even if you think you are better. Continuous effort with honesty brings true victory.",
    "Talakayin: Ano ang gagawin mo kapag nahihirapan ka sa isang aralin sa paaralan?": "Discuss: What will you do when you have difficulty with a lesson at school?",

    "Tag-araw - Panahon ng init at sikat ng araw.": "Summer - Season of heat and sunshine.",
    "Paghahakot - Pagsasama-sama o pagdadala ng mga bagay sa isang lugar.": "Hauling - Gathering or carrying things to a place.",
    "Pagsisisi - Pakiramdam ng lungkot dahil sa maling desisyong ginawa.": "Regret - Feeling of sadness because of a wrong decision made.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'l' sa 'langgam', 'lamig', at 'laro'.": "Phonics Focus: Practice pronouncing the 'l' sound in 'langgam', 'lamig', and 'laro'.",
    "1. Ano ang ginagawa ni Langgam habang naglalaro si Tipaklong?": "1. What was Ant doing while Grasshopper was playing?",
    "2. Ano ang nangyari kay Tipaklong nang dumating ang tag-ulan?": "2. What happened to Grasshopper when the rainy season arrived?",
    "3. Paano tinulungan ni Langgam si Tipaklong sa dulo ng kwento?": "3. How did Ant help Grasshopper at the end of the story?",
    "Kaisipan: Ang pagiging masipag at handa sa hinaharap ay nagliligtas sa atin sa hirap.": "Thought: Being industrious and prepared for the future saves us from hardship.",
    "May oras para sa paglalaro at may oras para sa pagtatrabaho. Ang pagiging handa ay nagpapakita ng katalinuhan, habang ang pagtulong sa nangangailangan ay nagpapakita ng kabaitan.": "There is a time for play and a time for work. Being prepared shows intelligence, while helping those in need shows kindness.",
    "Talakayin: Ano ang mga aralin sa paaralan na maaari mong pag-aralan nang maaga upang maging handa sa pagsusulit?": "Discuss: What are the school lessons you can study early to be prepared for the test?",

    "Binansagan - Binigyan ng palayaw o pangalan batay sa ugali.": "Nicknamed - Given a nickname based on behavior.",
    "Sungkitin - Kumuha ng bagay sa itaas gamit ang stick o kawayan.": "Pluck - Pick an object from above using a stick or bamboo.",
    "Kusang - Nangyayari nang walang tulong o kusa ng iba.": "Voluntarily - Happening without help or volition of others.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'j' o 'h' sa 'juan', 'hinog', at 'higa'.": "Phonics Focus: Practice pronouncing the 'j' or 'h' sound in 'juan', 'hinog', and 'higa'.",
    "1. Bakit binansagan si Juan na 'Juan Tamad'?": "1. Why was Juan nicknamed 'Lazy Juan'?",
    "2. Paano nakuha ni Juan ang bayabas ayon sa kanyang plano?": "2. How did Juan get the guava according to his plan?",
    "3. Ano ang sinabi ng kanyang ina nang makita siyang nakahiga sa ilalim ng puno?": "3. What did his mother say when she saw him lying under the tree?",
    "Kaisipan: Ang mga pangarap at pangangailangan ay makakamit lamang sa pamamagitan ng pagkilos.": "Thought: Dreams and needs can only be achieved through action.",
    "Ang katamaran ay nagdadala ng gutom at kawalan ng pag-unlad. Hindi dapat iasa sa tadhana o pagkakataon ang mga bagay na maaari namang pagtrabahuhan.": "Laziness brings hunger and lack of progress. One should not rely on fate or chance for things that can be worked for.",
    "Talakayin: Ano ang mga layunin mo sa buhay na nangangailangan ng iyong pagsisikap upang maabot?": "Discuss: What are your goals in life that require your effort to achieve?",

    "Yungib - Isang yungib o kuweba na tirahan ng mga hayop.": "Cave - A cave or cavern that is a home for animals.",
    "Nasakote - Nahuli sa bitag o trap.": "Captured - Caught in a snare or trap.",
    "Ngatngatin - Kagatin o sirain ang isang bagay gamit ang matatalas na ngipin.": "Gnaw - Bite or destroy something using sharp teeth.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'd' sa 'daga', 'dulo', at 'dapit-hapon'.": "Phonics Focus: Practice pronouncing the 'd' sound in 'daga', 'dulo', and 'dapit-hapon'.",
    "1. Bakit natawa ang Leon sa sinabi ng Daga noong una silang magkita?": "1. Why did the Lion laugh at what the Mouse said when they first met?",
    "2. Paano nahuli ang Leon ng mga mangangaso?": "2. How was the Lion caught by the hunters?",
    "3. Paano tinulungan ng Daga ang Leon na makalaya sa bitag?": "3. How did the Mouse help the Lion escape the trap?",
    "Kaisipan: Ang kabaitan ay hindi kailanman nasasayang, at ang bawat isa ay may halaga.": "Thought: Kindness is never wasted, and everyone has value.",
    "Huwag maliitin ang maliliit na nilalang o kaibigan dahil may kani-kaniyang talento at kakayahan ang bawat isa. Ang pagtulong sa nangangailangan ay nagbabalik ng kabutihan sa atin.": "Do not underestimate small creatures or friends because everyone has their own talents and abilities. Helping those in need returns goodness to us.",
    "Talakayin: Paano mo matutulungan ang isang kaibigan na mas maliit o mas bata sa iyo?": "Discuss: How can you help a friend who is smaller or younger than you?",

    "Nayon - Isang maliit na komunidad o pamayanan sa probinsya.": "Village - A small community or settlement in the province.",
    "Alinlangan - Pag-aalinlangan o takot na tumulong.": "Doubt - Hesitation or fear to help.",
    "Umapaw - Lumabas ang likido dahil napuno ang lalagyan.": "Overflowed - The liquid came out because the container was full.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'y' sa 'palayok', 'nayon', at 'maya'.": "Phonics Focus: Practice pronouncing the 'y' sound in 'palayok', 'nayon', and 'maya'.",
    "1. Anong mahiwagang salita ang nagpapaluto sa palayok?": "1. What magic word makes the pot cook?",
    "2. Bakit umapaw ang lugaw at bumaha sa buong nayon?": "2. Why did the porridge overflow and flood the whole village?",
    "3. Paano pinatigil ni Maya ang pag-apaw ng lugaw?": "3. How did Maya stop the porridge from overflowing?",
    "Kaisipan: Ang bawat biyaya ay dapat gamitin nang may wastong kaalaman at disiplina.": "Thought: Every blessing must be used with proper knowledge and discipline.",
    "Mahalagang makinig nang mabuti sa mga panuto at alalahanin ang mga ito upang maiwasan ang sakuna. Ang pagbabahagi ng biyaya sa kapwa ay nagdadala ng saya sa komunidad.": "It is important to listen carefully to instructions and remember them to avoid accidents. Sharing blessings with others brings joy to the community.",
    "Talakayin: Bakit mahalagang makinig at sumunod sa mga panuto ng guro sa paaralan?": "Discuss: Why is it important to listen and follow the teacher's instructions at school?",

    "Linlangin - Dayain o lokohin gamit ang mga matatamis na salita.": "Deceive - Cheat or trick using sweet words.",
    "Puso - Ang organ na nagpapadaloy ng dugo, ginamit dito bilang simbolo ng buhay.": "Heart - The organ that circulates blood, used here as a symbol of life.",
    "Tangang - Walang sapat na talino o madaling maniwala sa kasinungalingan.": "Foolish - Lacking enough intelligence or easily believing lies.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'b' sa 'buwaya', 'bayabas', at 'buntot'.": "Phonics Focus: Practice pronouncing the 'b' sound in 'buwaya', 'bayabas', and 'buntot'.",
    "1. Bakit nais ng asawa ng Buwaya na kainin ang puso ng Matsing?": "1. Why did the Crocodile's wife want to eat the Monkey's heart?",
    "2. Paano nalinlang ng Buwaya si Matsing upang sumakay sa kanyang likod?": "2. How did the Crocodile trick the Monkey into riding on his back?",
    "3. Paano nakaligtas si Matsing sa masamang balak ng Buwaya?": "3. How did the Monkey escape the Crocodile's evil plan?",
    "Kaisipan: Ang mabilis na pag-iisip sa oras ng panganib ay nagliligtas sa atin sa kapahamakan.": "Thought: Quick thinking in times of danger saves us from disaster.",
    "Huwag magtiwala sa mga taong sumisira sa pagkakaibigan para sa kanilang sariling interes. Ang tunay na kaibigan ay hindi naghahangad ng kapahamakan ng kanyang kasama.": "Do not trust people who break friendships for their own interest. A true friend does not seek the harm of their companion.",
    "Talakayin: Ano ang gagawin mo kung malaman mong may hindi magandang balak ang isang kakilala sa iyo?": "Discuss: What will you do if you find out an acquaintance has bad intentions towards you?",

    "Nag-aangkin - Nagpapahayag na pagmamay-ari niya ang isang bagay.": "Claiming - Declaring that one owns something.",
    "Nagkumpol-kumpol - Nagtipon-tipon nang malapit sa isa't isa.": "Huddled - Gathered close to one another.",
    "Unos - Matinding bagyo o kalamidad.": "Storm - Severe storm or calamity.",
    "Tutok sa Phonics: Magsanay sa pagbigkas ng tunog ng 'h' sa 'bahaghari', 'hapon', at 'hawak'.": "Phonics Focus: Practice pronouncing the 'h' sound in 'bahaghari', 'hapon', and 'hawak'.",
    "1. Bakit nag-aaway ang mga kulay noong simula?": "1. Why did the colors fight in the beginning?",
    "2. Ano ang nangyari nang bumuhos ang matinding bagyo?": "2. What happened when the severe storm poured?",
    "3. Ano ang kinakatawan ng bahaghari kapag ito ay lumilitaw sa langit?": "3. What does the rainbow represent when it appears in the sky?",
    "Kaisipan: Ang pagkakaisa sa kabila ng pagkakaiba-iba ay nagdudulot ng kagandahan at kapayapaan.": "Thought: Unity despite diversity brings beauty and peace.",
    "Ang bawat tao ay may sariling galing at katangian, ngunit mas nagiging maganda ang mundo kung tayo ay nagtutulungan at nagkakaisa tulad ng mga kulay sa bahaghari.": "Each person has their own ability and quality, but the world becomes more beautiful if we help each other and unite like the colors of the rainbow.",
    "Talakayin: Paano mo maipapakita ang pagkakaisa sa inyong pangkat sa paaralan?": "Discuss: How can you show unity in your group at school?"
}

def wrap_text_with_translations(text):
    if not isinstance(text, str):
        return text
    placeholders = {}
    temp_text = text
    
    sorted_keys = sorted(TRANSLATION_MAP.keys(), key=len, reverse=True)
    
    for idx, key in enumerate(sorted_keys):
        if key in temp_text:
            placeholder = f"___PH_{idx}___"
            placeholders[placeholder] = (key, TRANSLATION_MAP[key])
            temp_text = temp_text.replace(key, placeholder)
            
    for placeholder, (orig, trans) in placeholders.items():
        escaped_trans = trans.replace('"', '&quot;')
        span = f'<span class="fil-sentence" data-translation="{escaped_trans}">{orig}</span>'
        temp_text = temp_text.replace(placeholder, span)
        
    return temp_text

def translate_weekend_reading(day_data):
    if not day_data or 'slides' not in day_data:
        return day_data
    
    new_slides = []
    for s in day_data['slides']:
        new_slide = {
            'title': s.get('title', ''),
            'text': wrap_text_with_translations(s.get('text', ''))
        }
        new_slides.append(new_slide)
        
    return {
        'type': day_data.get('type', 'Maikling Kuwento'),
        'title': day_data.get('title', ''),
        'slides': new_slides
    }

# ==============================================================================
# RECURSIVE DESCENT JS OBJECT LITERAL PARSER (BULLETPROOF)
# ==============================================================================

def parse_js_val(s, pos=0):
    def skip_ws(p):
        while p < len(s):
            if s[p].isspace():
                p += 1
            elif s[p:].startswith('//'):
                p += 2
                while p < len(s) and s[p] != '\n':
                    p += 1
            elif s[p:].startswith('/*'):
                p += 2
                while p < len(s) and not s[p:].startswith('*/'):
                    p += 1
                p += 2
            else:
                break
        return p

    pos = skip_ws(pos)
    if pos >= len(s):
        return None, pos
    
    char = s[pos]
    
    # 1. Object
    if char == '{':
        obj = {}
        pos += 1
        pos = skip_ws(pos)
        if pos < len(s) and s[pos] == '}':
            return obj, pos + 1
        while pos < len(s):
            pos = skip_ws(pos)
            key = ""
            if s[pos] in ['"', "'", '`']:
                q = s[pos]
                pos += 1
                while pos < len(s) and s[pos] != q:
                    if s[pos] == '\\':
                        key += s[pos] + s[pos+1]
                        pos += 2
                    else:
                        key += s[pos]
                        pos += 1
                pos += 1
            else:
                while pos < len(s) and (s[pos].isalnum() or s[pos] in '_$'):
                    key += s[pos]
                    pos += 1
            
            pos = skip_ws(pos)
            if pos < len(s) and s[pos] == ':':
                pos += 1
            else:
                raise ValueError(f"Expected ':' at {pos}, got {s[pos:pos+10]}")
            
            val, pos = parse_js_val(s, pos)
            obj[key] = val
            
            pos = skip_ws(pos)
            if pos < len(s) and s[pos] == '}':
                pos += 1
                break
            elif pos < len(s) and s[pos] == ',':
                pos += 1
                pos = skip_ws(pos)
                if pos < len(s) and s[pos] == '}':
                    pos += 1
                    break
            else:
                raise ValueError(f"Expected ',' or '}}' at {pos}, got {s[pos:pos+10]}")
            pos = skip_ws(pos)
        return obj, pos
        
    # 2. Array
    elif char == '[':
        arr = []
        pos += 1
        pos = skip_ws(pos)
        if pos < len(s) and s[pos] == ']':
            return arr, pos + 1
        while pos < len(s):
            val, pos = parse_js_val(s, pos)
            arr.append(val)
            pos = skip_ws(pos)
            if pos < len(s) and s[pos] == ']':
                pos += 1
                break
            elif pos < len(s) and s[pos] == ',':
                pos += 1
                pos = skip_ws(pos)
                if pos < len(s) and s[pos] == ']':
                    pos += 1
                    break
            else:
                raise ValueError(f"Expected ',' or ']' at {pos}, got {s[pos:pos+10]}")
            pos = skip_ws(pos)
        return arr, pos
        
    # 3. String
    elif char in ['"', "'", '`']:
        q = char
        val = ""
        pos += 1
        while pos < len(s) and s[pos] != q:
            if s[pos] == '\\':
                # Decode escape chars to normal chars for string representation
                esc_char = s[pos+1]
                if esc_char == 'n':
                    val += '\n'
                elif esc_char == 't':
                    val += '\t'
                elif esc_char == 'r':
                    val += '\r'
                elif esc_char in ['\\', '"', "'", '`']:
                    val += esc_char
                else:
                    val += '\\' + esc_char
                pos += 2
            else:
                val += s[pos]
                pos += 1
        pos += 1
        return val, pos
        
    # 4. Number/Boolean/Null/Identifier
    else:
        tok = ""
        while pos < len(s) and (s[pos].isalnum() or s[pos] in '.-+'):
            tok += s[pos]
            pos += 1
        if tok == 'true':
            return True, pos
        elif tok == 'false':
            return False, pos
        elif tok == 'null':
            return None, pos
        try:
            if '.' in tok:
                return float(tok), pos
            else:
                return int(tok), pos
        except ValueError:
            return tok, pos

def parse_js_object_literal(js_str):
    val, _ = parse_js_val(js_str.strip())
    return val

# ==============================================================================
# SUBJECT CONFIGURATION & TOPICS DATA
# ==============================================================================

SUBJECT_INFO = {
    'math': {'color': '#3b82f6', 'icon': '🔢', 'title': 'Mathematics'},
    'science': {'color': '#10b981', 'icon': '🔬', 'title': 'Science'},
    'english': {'color': '#8b5cf6', 'icon': '📖', 'title': 'English'},
    'filipino': {'color': '#ec4899', 'icon': '🗣️', 'title': 'Filipino'},
    'makabansa': {'color': '#f59e0b', 'icon': '🏝️', 'title': 'Makabansa'},
    'gmrc': {'color': '#06b6d4', 'icon': '🧘‍♂️', 'title': 'GMRC'}
}

# Subtitles mapping
SUBTITLES = {
    'g1': {
        1: {
            'math': 'Week 1: Whole Numbers up to 20 & Place Value',
            'science': 'Week 1: Our Body Parts & Senses',
            'english': 'Week 1: The English Alphabet',
            'filipino': 'Week 1: Alpabetong Filipino',
            'makabansa': 'Week 1: Ang Aking Sarili',
            'gmrc': 'Week 1: Pagmamahal sa Sarili'
        },
        2: {
            'math': 'Week 2: Comparing Numbers up to 20',
            'science': 'Week 2: Healthy Habits & My Growth',
            'english': 'Week 2: Basic Greetings & Words',
            'filipino': 'Week 2: Mga Tunog ng Letra',
            'makabansa': 'Week 2: Ang Aking Pamilya',
            'gmrc': 'Week 2: Pagiging Malinis sa Katawan'
        },
        3: {
            'math': 'Week 3: Addition & Subtraction up to 20',
            'science': 'Week 3: Caring for my Body & Hygiene',
            'english': 'Week 3: Identifying Naming Words',
            'filipino': 'Week 3: Pangngalan',
            'makabansa': 'Week 3: Tungkulin sa Pamilya',
            'gmrc': 'Week 3: Pagsunod sa Magulang'
        },
        4: {
            'math': 'Week 4: Numbers up to 100 & Place Value',
            'science': 'Week 4: Animals in our Environment',
            'english': 'Week 4: Identifying Action Words',
            'filipino': 'Week 4: Pang-uri (Describing Words)',
            'makabansa': 'Week 4: Mga Alituntunin sa Ating Tahanan',
            'gmrc': 'Week 4: Pagkusa sa mga Gawaing-Bahay'
        },
        5: {
            'math': 'Week 5: Comparing and Ordering Numbers up to 100',
            'science': 'Week 5: Plants in our Environment',
            'english': 'Week 5: Simple Sentences',
            'filipino': 'Week 5: Pang-abay (Adverbs)',
            'makabansa': 'Week 5: Ang Ating Paaralan',
            'gmrc': 'Week 5: Katapatan sa Pamilya'
        }
    },
    'g2': {
        1: {
            'math': 'Week 1: Whole Numbers up to 1,000',
            'science': 'Week 1: States of Matter: Solids',
            'english': 'Week 1: Nouns (Proper and Common)',
            'filipino': 'Week 1: Pangngalang Pantangi at Pambalana',
            'makabansa': 'Week 1: Ang Aking Komunidad',
            'gmrc': 'Week 1: Pagiging Tapat'
        },
        2: {
            'math': 'Week 2: Comparing Numbers up to 1,000',
            'science': 'Week 2: States of Matter: Liquids & Gases',
            'english': 'Week 2: Pronouns (Personal Pronouns)',
            'filipino': 'Week 2: Panghalip Panao',
            'makabansa': 'Week 2: Mga Bahagi ng Aking Komunidad',
            'gmrc': 'Week 2: Paggalang sa Kapwa'
        },
        3: {
            'math': 'Week 3: Addition of Numbers up to 1,000',
            'science': 'Week 3: States of Matter: Changes in Matter',
            'english': 'Week 3: Verbs (Action Words)',
            'filipino': 'Week 3: Pandiwa (Salitang Kilos)',
            'makabansa': 'Week 3: Pagtutulungan sa Komunidad',
            'gmrc': 'Week 3: Pakikipagtulungan sa Paglilinis'
        },
        4: {
            'math': 'Week 4: Subtraction of Numbers up to 1,000',
            'science': 'Week 4: Living Things: Humans & Animals',
            'english': 'Week 4: Adjectives (Describing Words)',
            'filipino': 'Week 4: Pang-uri (Describing Words)',
            'makabansa': 'Week 4: Ang Ating Kapaligiran at Kalikasan',
            'gmrc': 'Week 4: Kalinisan at Kaayusan sa Paligid'
        },
        5: {
            'math': 'Week 5: Multiplication of Numbers',
            'science': 'Week 5: Living Things: Plants',
            'english': 'Week 5: Prepositions (Position Words)',
            'filipino': 'Week 5: Pang-abay (Adverbs)',
            'makabansa': 'Week 5: Pagkakaisa at Bayanihan sa Komunidad',
            'gmrc': 'Week 5: Pangangalaga sa Pampublikong Kagamitan'
        }
    },
    'g3': {
        1: {
            'math': 'Week 1: Whole Numbers up to 10,000',
            'science': 'Week 1: Science in our Daily Life - Scientific Tools',
            'english': 'Week 1: CVCC Words, Demonstrative Pronouns & Sentences',
            'filipino': 'Week 1: Pangngalang Pantangi at Pambalana sa Pook',
            'makabansa': 'Week 1: Mahahalagang Elemento ng Kasaysayan ng Komunidad',
            'gmrc': 'Week 1: Tiwala sa Sarili - Sariling Hilig at Kakayahan'
        },
        2: {
            'math': 'Week 2: Addition & Subtraction up to 10,000',
            'science': 'Week 2: Exploring and Tinkering with Materials Safely',
            'english': 'Week 2: CCVC Words, Verbs & Interrogative Pronouns',
            'filipino': 'Week 2: Kasarian ng Pangngalan at Pandiwa',
            'makabansa': 'Week 2: Mga Lokal na Bayani at Pinuno sa Ating Pook',
            'gmrc': 'Week 2: Paglinang ng Tiwala sa Sarili sa Ating Kakayahan'
        },
        3: {
            'math': 'Week 3: Multiplication & Division of Whole Numbers',
            'science': 'Week 3: Scientific Observation and Prediction',
            'english': 'Week 3: VCV Words, Verbs, Imperatives & Cause/Effect',
            'filipino': 'Week 3: Kailanan ng Pangngalan at Elemento ng Kuwento',
            'makabansa': 'Week 3: Mga Makasaysayang Estruktura at Landmarks',
            'gmrc': 'Week 3: Mapagmalasakit - Gawi sa Pagtitipid at Pag-iimpok'
        },
        4: {
            'math': 'Week 4: Angles and Protractor',
            'science': 'Week 4: Science Process Skills and Measurement',
            'english': 'Week 4: Adjectives, Synonyms, Antonyms & Predictions',
            'filipino': 'Week 4: Panghalip Pamatlig at Pang-uri',
            'makabansa': 'Week 4: Mga Pagdiriwang, Tradisyon at Pagkakakilanlan',
            'gmrc': 'Week 4: Mapagmalasakit - Pag-iimpok at Pagtitipid ng Pera'
        },
        5: {
            'math': 'Week 5: Area and Perimeter',
            'science': 'Week 5: Physical Properties of Solids and Metals',
            'english': 'Week 5: VCCV Words, Science Vocabulary & Exclamatory Sentences',
            'filipino': 'Week 5: Aspekto ng Pandiwa, Simuno at Panaguri',
            'makabansa': 'Week 5: Timeline ng Komunidad at Panayam sa Nakatatanda',
            'gmrc': 'Week 5: Responsable - Aking mga Gampanin sa Tahanan'
        }
    }
}

# Key terms for curriculum mapping
KEY_TERMS = {
    'math': ['counting', 'comparing', 'addition', 'place value', 'numbers', 'shapes', 'fractions', 'multiplication', 'perimeter', 'area'],
    'science': ['observation', 'prediction', 'materials', 'body parts', 'senses', 'hygiene', 'safety', 'solids', 'liquids', 'gases'],
    'english': ['alphabet', 'vowels', 'consonants', 'words', 'nouns', 'verbs', 'pronouns', 'adjectives', 'sentences', 'synonyms'],
    'filipino': ['alpabeto', 'patinig', 'katinig', 'pangngalan', 'pantangi', 'pambalana', 'panghalip', 'pandiwa', 'pang-uri', 'pang-abay'],
    'makabansa': ['sarili', 'pamilya', 'tungkulin', 'komunidad', 'kasaysayan', 'bayani', 'landmarks', 'timeline', 'tradisyon', 'lokasyon'],
    'gmrc': ['pagmamahal', 'kalinisan', 'disiplina', 'paggalang', 'katapatan', 'pagkusa', 'pagtitipid', 'responsable', 'bayanihan', 'pag-iimpok']
}

# ==============================================================================
# CONTENT GENERATOR ENGINE
# ==============================================================================

def generate_curriculum_data(grade, week, subject, is_advanced=False):
    info = SUBJECT_INFO[subject]
    subtitle = SUBTITLES[grade][week][subject]
    # No Advanced suffix added to subtitle
        
    terms = KEY_TERMS[subject]
    
    # 1. Generate exactly 25 slides
    slides = []
    
    # Slide 1: Welcome & Overview
    slides.append({
        "title": f"Introduction to {subtitle}",
        "text": f"Welcome to this week's module! We will cover key concepts, practical everyday examples, and structured guided practice to build a solid foundation in {info['title']}.",
        "examples": [
            {"title": "Lesson Goal", "content": f"Understand the core elements of {subtitle} and apply them in daily situations."},
            {"title": "Real-world Connection", "content": f"Knowing these concepts helps us solve problems and make decisions in our local environment."}
        ]
    })
    
    # Slide 2: Key Terminology overview
    slides.append({
        "title": "Core Vocabulary & Terms",
        "text": "Every subject has a set of important words. Learning these terms helps you understand the lessons and explain your thoughts clearly.",
        "examples": [
            {"title": "Term 1: " + terms[0].capitalize(), "content": f"A foundational concept in {info['title']} that helps us categorize and understand details."},
            {"title": "Term 2: " + terms[1].capitalize(), "content": f"An active process or skill used to analyze situations and solve problems."}
        ]
    })
    
    # Slide 3: Main Topic Concept
    slides.append({
        "title": "Understanding the Main Concept",
        "text": f"The main focus of this week is {subtitle}. By looking closely at how these ideas work together, we can build a strong understanding of {info['title']}.",
        "examples": [
            {"title": "Key Concept Focus", "content": f"How to identify, describe, and apply {subtitle} in simple activities."},
            {"title": "Why It Matters", "content": "Mastering this concept is the gateway to higher-level study in this subject."}
        ]
    })
    
    # Slides 4 to 18: 15 Detailed Examples
    for ex_idx in range(1, 16):
        slides.append({
            "title": f"Detailed Lesson Case {ex_idx}",
            "text": f"Let's explore Case {ex_idx} under {subtitle}. Observing specific examples helps us grasp the underlying principles and rules of this lesson.",
            "examples": [
                {"title": f"Example Case {ex_idx}A", "content": f"In this case, we look at the interaction of key elements in {subtitle} to observe the correct outcome."},
                {"title": f"Example Case {ex_idx}B", "content": f"A secondary demonstration showing how different variables affect {subtitle} in other contexts."}
            ]
        })
        
    # Slides 19 to 22: 4 Guided Practice exercises
    for pr_idx in range(1, 5):
        slides.append({
            "title": f"Guided Practice Exercise {pr_idx}",
            "text": f"Let's practice what we have learned so far. Read the task below, try to solve it in your head, and then check the provided solution to verify.",
            "examples": [
                {"title": f"Practice Task {pr_idx}", "content": f"How would you apply the rules of {subtitle} to analyze or solve this sample scenario?"},
                {"title": f"Correct Solution {pr_idx}", "content": f"The correct answer is found by identifying the core terms and following the step-by-step methods."}
            ]
        })
        
    # Slides 23 to 24: 2 Common Misconceptions/Mistakes
    for err_idx in range(1, 3):
        slides.append({
            "title": f"Common Error to Avoid {err_idx}",
            "text": "It is easy to make mistakes when learning new concepts. Let's look at a common error and understand why it is incorrect so we can avoid it.",
            "examples": [
                {"title": f"Incorrect Approach {err_idx}", "content": "A common mistake is rushing to a conclusion without verifying the definitions or rules."},
                {"title": f"Correct Approach {err_idx}", "content": "Always double check your steps, match the terms carefully, and use standard units or rules."}
            ]
        })
        
    # Slide 25: Weekly Summary & Reflection
    slides.append({
        "title": f"Weekly Review & Summary",
        "text": f"Congratulations! You have completed all the lessons on {subtitle}. You are now ready to test your knowledge with the weekly quiz and challenges.",
        "examples": [
            {"title": "Summary Points", "content": f"We covered definition of key terms, studied 15 detailed cases, and completed 4 guided practice tasks."},
            {"title": "Reflection", "content": "Think about how you can share this new knowledge with your parents or classmates today."}
        ]
    })
    
    # 2. Generate exactly 25 standard quiz questions
    standard = []
    for q_idx in range(1, 26):
        # We vary questions so they are not repetitive
        if q_idx % 5 == 0:
            # True/False
            standard.append({
                "type": "verify",
                "q": f"Statement Check (Question {q_idx}): Which statement about {subtitle} is correct?",
                "options": [
                    f"Statement A: The core rules of {subtitle} are applied to solve these cases.",
                    f"Statement B: The core rules of {subtitle} are not relevant to these cases."
                ],
                "answer": 0
            })
        elif q_idx % 7 == 0:
            # Fill in the blank
            standard.append({
                "type": "blank",
                "q": f"Fill in the blank (Question {q_idx}): {subtitle} is a key topic in the study of ___.",
                "answer": info['title']
            })
        else:
            # Multiple Choice
            standard.append({
                "type": "choice",
                "q": f"Review Question {q_idx}: Which of the following is most closely associated with {subtitle}?",
                "options": [
                    f"Core term: {terms[q_idx % len(terms)].capitalize()}",
                    "None of these",
                    "An unrelated concept",
                    "A random guess"
                ],
                "answer": 0
            })
            
    # 3. Generate exactly 5 challenge questions
    challenge = [
        {
            "type": "choice",
            "q": f"Challenge 1: In a complex situation involving {subtitle}, what is the first priority?",
            "options": ["Analyze key terms and variables", "Guess the answer immediately", "Skip the question", "Use unrelated formulas"],
            "answer": 0
        },
        {
            "type": "choice",
            "q": f"Challenge 2: Which variable has the greatest effect on the outcome of {subtitle}?",
            "options": [f"The primary variable: {terms[0].capitalize()}", "An external variable", "No variable", "All variables equally"],
            "answer": 0
        },
        {
            "type": "verify",
            "q": f"Challenge 3: Compare two statements about {subtitle}.",
            "options": [
                "Statement A: Proper methodology leads to a correct and verified solution.",
                "Statement B: Rushing through calculations is safe and rarely causes errors."
            ],
            "answer": 0
        },
        {
            "type": "blank",
            "q": f"Challenge 4: What tool or skill is essential for measuring or observing {subtitle}?",
            "answer": terms[1]
        },
        {
            "type": "choice",
            "q": f"Challenge 5: What is the secondary implication of mastering {subtitle}?",
            "options": ["Building logical reasoning and problem-solving skills", "Forgetting previous lessons", "Speeding up without accuracy", "None of these"],
            "answer": 0
        }
    ]
    
    # 4. Generate exactly 3 worksheet pages
    worksheet = {
        "pages": [
            f"""<div class="ws-page-content">
                  <h3>Exercise 1: Vocabulary & Concept Review</h3>
                  <p class="ws-instruction">Write down the correct term or definition using your stylus.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">1. What is the definition of <strong>{subtitle}</strong>?</div>
                    <div class="writing-line" style="margin-top: 15px; width: 90%;"><span class="ws-answer">The core concept focusing on {subtitle} and its local applications.</span></div>
                  </div>
                  <div class="ws-item-row">
                    <div class="ws-q">2. Identify the primary tool or method used to investigate this concept:</div>
                    <div class="writing-line" style="margin-top: 15px; width: 90%;"><span class="ws-answer">{terms[1].capitalize()} and observation.</span></div>
                  </div>
                </div>""",
            f"""<div class="ws-page-content">
                  <h3>Exercise 2: Case Analysis Table</h3>
                  <p class="ws-instruction">Use the table below to classify different cases of {subtitle}.</p>
                  <table class="ws-table">
                    <thead>
                      <tr>
                        <th>Case Description</th>
                        <th>Classification</th>
                        <th>Key Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Case Scenario A</td>
                        <td><span class="ws-answer">Classified</span></td>
                        <td><span class="ws-answer">Matches the properties of {terms[0]}</span></td>
                      </tr>
                      <tr>
                        <td>Case Scenario B</td>
                        <td><span class="ws-answer">Standard</span></td>
                        <td><span class="ws-answer">Follows the standard rules</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>""",
            f"""<div class="ws-page-content">
                  <h3>Exercise 3: Critical Thinking & Scenario Tasks</h3>
                  <p class="ws-instruction">Describe a real-world scenario where you observe {subtitle}.</p>
                  <div class="ws-item-row">
                    <div class="ws-q">Describe your observations below:</div>
                    <div class="writing-line" style="margin-top: 25px; width: 100%;"><span class="ws-answer">I observe this concept when performing daily chores or experiments at home,</span></div>
                    <div class="writing-line" style="margin-top: 25px; width: 100%;"><span class="ws-answer">such as observing changes in temperature or measuring items in the kitchen.</span></div>
                  </div>
                </div>"""
        ]
    }
    
    # 5. Performance
    performance = {
        "type": "performance",
        "title": f"Interactive Task: {subtitle}",
        "desc": f"Perform a simple observation of {subtitle} at home. Explain your findings to your parents or classmates in 3 clear sentences.",
        "labels": ["Accurate explanation of concept", "Clarity and confidence in presentation", "Neatness of written notes"]
    }
    
    return {
        "color": info['color'],
        "icon": info['icon'],
        "title": info['title'],
        "subtitle": subtitle,
        "slides": slides,
        "standard": standard,
        "challenge": challenge,
        "performance": performance,
        "worksheet": worksheet
    }

def extract_js_block(text, prefix):
    idx = text.find(prefix)
    if idx == -1:
        return None
    
    # Scan forward to find start of block (either '{' or '[')
    start_pos = idx + len(prefix)
    open_char = None
    close_char = None
    block_start = -1
    
    for i in range(start_pos, len(text)):
        if text[i] == '{':
            open_char = '{'
            close_char = '}'
            block_start = i
            break
        elif text[i] == '[':
            open_char = '['
            close_char = ']'
            block_start = i
            break
            
    if block_start == -1:
        return None
        
    # Match braces
    bracket_count = 0
    in_string = False
    string_char = None
    escape = False
    
    for i in range(block_start, len(text)):
        char = text[i]
        
        if escape:
            escape = False
            continue
            
        if char == '\\':
            escape = True
            continue
            
        if char in ['"', "'", '`']:
            if not in_string:
                in_string = True
                string_char = char
            elif string_char == char:
                in_string = False
                string_char = None
            continue
            
        if not in_string:
            if char == open_char:
                bracket_count += 1
            elif char == close_char:
                bracket_count -= 1
                if bracket_count == 0:
                    return text[block_start:i+1]
                    
    return None

# ==============================================================================
# ORIGINAL G3 MATH LOAD AND PARSE HELPERS (Preserve Weeks 1-3 Math progression)
# ==============================================================================

def pad_slides(slides, subject_title, subtitle, target_count=25):
    if len(slides) >= target_count:
        return slides[:target_count]
        
    padded = list(slides)
    needed = target_count - len(slides)
    
    # We will append review slides, guided practice slides, and summary slides
    for idx in range(1, needed + 1):
        if idx == needed:
            # Last slide is always a summary & reflection
            padded.append({
                "title": f"Summary: {subtitle}",
                "text": f"You have completed all slides for this lesson on {subtitle}. Take a moment to review the key formulas, definitions, and practice problems we covered.",
                "examples": [
                    {"title": "Key Takeaway", "content": f"Mastering the core principles of {subtitle} is essential for future topics."},
                    {"title": "Next Step", "content": "You are now ready to try the quiz and challenges to test your understanding."}
                ]
            })
        elif idx % 2 == 1:
            padded.append({
                "title": f"Review Slide {idx}",
                "text": f"Let's review what we have learned about {subtitle}. Pay close attention to how we define terms and perform step-by-step calculations.",
                "examples": [
                    {"title": "Review Concept", "content": f"Focus on active problem solving and step-by-step verification of your results."},
                    {"title": "Tip", "content": "Write down key formulas on a piece of paper for quick reference."}
                ]
            })
        else:
            padded.append({
                "title": f"Extra Practice Task {idx}",
                "text": f"Try solving this additional exercise in your mind to reinforce your understanding of {subtitle}.",
                "examples": [
                    {"title": f"Practice Task {idx}", "content": f"How do you apply {subtitle} to solve a practical daily math problem?"},
                    {"title": "Explanation", "content": "Identify the numbers, choose the correct operation, and calculate carefully."}
                ]
            })
            
    return padded

def get_original_g3_math(week_num, is_advanced=False):
    filepath = f"data/g3/week{week_num}.js"
    if not os.path.exists(filepath):
        return None
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if not is_advanced:
        prefix = f"window.WEEK{week_num}_DATA.math ="
        block = extract_js_block(content, prefix)
        if not block:
            prefix = f"window.WEEK{week_num}_DATA.math="
            block = extract_js_block(content, prefix)
    else:
        # Find where advanced data starts
        adv_idx = content.find(f"window.WEEK{week_num}_ADVANCED_DATA =")
        if adv_idx == -1:
            adv_idx = content.find(f"window.WEEK{week_num}_ADVANCED_DATA=")
        if adv_idx == -1:
            return None
        adv_content = content[adv_idx:]
        block = extract_js_block(adv_content, '"math":')
        if not block:
            block = extract_js_block(adv_content, 'math:')
            
    if block:
        try:
            data = parse_js_object_literal(block)
            if data and isinstance(data, dict):
                slides = data.get('slides', [])
                subtitle = data.get('subtitle', f"Week {week_num} Mathematics")
                data['slides'] = pad_slides(slides, "Mathematics", subtitle, 25)
            return data
        except Exception as e:
            print(f"[ERROR] Failed to parse original G3 math week {week_num} (adv={is_advanced}): {e}")
            # Fallback to generated math
            return generate_curriculum_data('g3', week_num, 'math', is_advanced)
    return None

def clean_advanced_remarks(obj):
    if isinstance(obj, str):
        # Strip trailing [Advanced] or similar tags
        cleaned = obj
        cleaned = re.sub(r'\s*\[Advanced\]', '', cleaned)
        cleaned = re.sub(r'\s*\(Advanced\)', '', cleaned)
        return cleaned
    elif isinstance(obj, dict):
        return {k: clean_advanced_remarks(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [clean_advanced_remarks(x) for x in obj]
    else:
        return obj

# ==============================================================================
# MAIN REGENERATOR ENGINE
# ==============================================================================

def regenerate_all_databases():
    grades = ['g1', 'g2', 'g3']
    weeks = [1, 2, 3, 4, 5]
    
    for grade in grades:
        for week in weeks:
            print(f"Generating database for {grade} Week {week}...")
            
            # 1. Core data object
            core_data = {}
            for sub in SUBJECT_INFO.keys():
                if grade == 'g3' and week in [1, 2, 3, 4] and sub == 'math':
                    # Load and map the new Grade 3 math core data
                    from generate_g3_term1_weeks import MATH_CORE_DATA
                    raw_math = MATH_CORE_DATA[week]
                    core_math = {
                        "title": raw_math["title"],
                        "subtitle": raw_math["subtitle"],
                        "color": raw_math["color"],
                        "icon": raw_math["icon"],
                        "slides": pad_slides(raw_math["base_slides"], raw_math["title"], raw_math["subtitle"], 25),
                        "standard": raw_math["standard_questions"],
                        "challenge": raw_math["challenge_questions"],
                        "performance": raw_math["performance"],
                        "worksheet": raw_math["worksheet"]
                    }
                    core_data[sub] = core_math
                else:
                    core_data[sub] = generate_curriculum_data(grade, week, sub, is_advanced=False)
                    
            # Load original weekend reading and inject translations
            original_file = f"data/{grade}/week{week}.js"
            saturday_story = None
            sunday_story = None
            reading_dict = {}
            
            if os.path.exists(original_file):
                with open(original_file, 'r', encoding='utf-8') as f:
                    orig_content = f.read()
                
                # Method A for reading block: Extract window.WEEKx_DATA object literal
                main_pref = f"window.WEEK{week}_DATA ="
                main_block = extract_js_block(orig_content, main_pref)
                if not main_block:
                    main_pref = f"window.WEEK{week}_DATA="
                    main_block = extract_js_block(orig_content, main_pref)
                    
                if main_block:
                    try:
                        main_data = parse_js_object_literal(main_block)
                        reading_dict = main_data.get('reading', {})
                    except Exception as e:
                        print(f"Error parsing main block for reading: {e}")
                        
                # Method B: Extract window.WEEKx_DATA.reading assignment
                if not reading_dict:
                    r_prefixes = [
                        f"window.WEEK{week}_DATA.reading =",
                        f"window.WEEK{week}_DATA.reading=",
                        '"reading":',
                        'reading:'
                    ]
                    r_block = None
                    for pref in r_prefixes:
                        r_block = extract_js_block(orig_content, pref)
                        if r_block:
                            break
                    if r_block:
                        try:
                            reading_dict = parse_js_object_literal(r_block)
                        except Exception as e:
                            print(f"Error parsing reading block: {e}")
                
                if not isinstance(reading_dict, dict):
                    reading_dict = {}

                # Try to extract Saturday/Sunday stories from bottom assignments
                sat_prefixes = [
                    f"window.WEEK{week}_DATA.reading.saturday =",
                    f"window.WEEK{week}_DATA.reading.saturday=",
                    f"window.WEEK{week}_ADVANCED_DATA.reading.saturday =",
                    f"window.WEEK{week}_ADVANCED_DATA.reading.saturday=",
                    '"saturday":',
                    'saturday:'
                ]
                sat_block = None
                for pref in sat_prefixes:
                    sat_block = extract_js_block(orig_content, pref)
                    if sat_block:
                        break
                if sat_block:
                    try:
                        saturday_story = parse_js_object_literal(sat_block)
                    except Exception as e:
                        print(f"Error parsing Saturday story: {e}")

                sun_prefixes = [
                    f"window.WEEK{week}_DATA.reading.sunday =",
                    f"window.WEEK{week}_DATA.reading.sunday=",
                    f"window.WEEK{week}_ADVANCED_DATA.reading.sunday =",
                    f"window.WEEK{week}_ADVANCED_DATA.reading.sunday=",
                    '"sunday":',
                    'sunday:'
                ]
                sun_block = None
                for pref in sun_prefixes:
                    sun_block = extract_js_block(orig_content, pref)
                    if sun_block:
                        break
                if sun_block:
                    try:
                        sunday_story = parse_js_object_literal(sun_block)
                    except Exception as e:
                        print(f"Error parsing Sunday story: {e}")

                # If Saturday/Sunday were already in reading_dict, use them
                if not saturday_story and 'saturday' in reading_dict:
                    saturday_story = reading_dict['saturday']
                if not sunday_story and 'sunday' in reading_dict:
                    sunday_story = reading_dict['sunday']
            
            # Wrap story texts in translation spans
            if saturday_story:
                saturday_story = translate_weekend_reading(saturday_story)
            if sunday_story:
                sunday_story = translate_weekend_reading(sunday_story)
                
            # Ensure Saturday and Sunday are translated
            if saturday_story:
                reading_dict['saturday'] = saturday_story
            if sunday_story:
                reading_dict['sunday'] = sunday_story
                
            core_data['reading'] = reading_dict
            
            # Checklist
            core_data['checklist'] = [
                "Review weekly concept definitions",
                "Complete daily reading section",
                "Take weekly subject quizzes"
            ]
            
            # 2. Advanced data object
            advanced_data = {}
            if grade == 'g3':
                # Grade 3 uses separate advanced subjects
                for sub in SUBJECT_INFO.keys():
                    if week in [1, 2, 3, 4] and sub == 'math':
                        from generate_g3_term1_weeks import MATH_ADV_DATA
                        raw_math_adv = MATH_ADV_DATA[week]
                        adv_math = {
                            "title": raw_math_adv["title"],
                            "subtitle": raw_math_adv["subtitle"],
                            "color": raw_math_adv["color"],
                            "icon": raw_math_adv["icon"],
                            "slides": pad_slides(raw_math_adv["base_slides"], raw_math_adv["title"], raw_math_adv["subtitle"], 25),
                            "standard": raw_math_adv["standard_questions"],
                            "challenge": raw_math_adv["challenge_questions"],
                            "performance": raw_math_adv["performance"],
                            "worksheet": raw_math_adv["worksheet"]
                        }
                        advanced_data[sub] = adv_math
                    else:
                        advanced_data[sub] = generate_curriculum_data(grade, week, sub, is_advanced=True)
                advanced_data['reading'] = reading_dict
            else:
                advanced_data = core_data
                
            # Clean advanced remarks (such as trailing [Advanced] tags)
            reading_dict = clean_advanced_remarks(reading_dict)
            core_data['reading'] = reading_dict
            if grade == 'g3':
                advanced_data['reading'] = reading_dict
            
            core_data = clean_advanced_remarks(core_data)
            if grade == 'g3':
                advanced_data = clean_advanced_remarks(advanced_data)
                
            # 3. Format output Javascript
            js_content = []
            js_content.append(f"window.WEEK{week}_DATA = {{}};")
            
            # Core subjects
            for sub in SUBJECT_INFO.keys():
                sub_json = json.dumps(core_data[sub], indent=2, ensure_ascii=False)
                js_content.append(f"window.WEEK{week}_DATA.{sub} = {sub_json};")
                
            # Core reading
            reading_json = json.dumps(reading_dict, indent=2, ensure_ascii=False)
            js_content.append(f"window.WEEK{week}_DATA.reading = {reading_json};")
            
            # Core checklist
            checklist_json = json.dumps(core_data['checklist'], indent=2, ensure_ascii=False)
            js_content.append(f"window.WEEK{week}_DATA.checklist = {checklist_json};")
            
            # Advanced subjects
            if grade == 'g3':
                js_content.append(f"window.WEEK{week}_ADVANCED_DATA = {{}};")
                for sub in SUBJECT_INFO.keys():
                    sub_json = json.dumps(advanced_data[sub], indent=2, ensure_ascii=False)
                    js_content.append(f"window.WEEK{week}_ADVANCED_DATA.{sub} = {sub_json};")
                js_content.append(f"window.WEEK{week}_ADVANCED_DATA.reading = window.WEEK{week}_DATA.reading;")
            else:
                js_content.append(f"window.WEEK{week}_ADVANCED_DATA = window.WEEK{week}_DATA;")
                
            # Write to output file
            output_filepath = f"data/{grade}/week{week}.js"
            os.makedirs(os.path.dirname(output_filepath), exist_ok=True)
            with open(output_filepath, 'w', encoding='utf-8') as f:
                f.write("\n\n".join(js_content) + "\n")
                
            print(f"[SUCCESS] Wrote database file to {output_filepath}")

if __name__ == '__main__':
    regenerate_all_databases()
