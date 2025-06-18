export interface GaneshaForm {
  id: string;
  name: string;
  tagline: string;
  story: string[];
  mantra: string;
  meaning: string;
  videoId?: string;
  imagePath?: string;
}

// Mapping of form IDs to uploaded image paths
export const ganeshaImages: Record<string, string> = {
  "bala-ganapati": "/lovable-uploads/71dbedae-8020-4528-8c1b-4ca1a1ea8161.png",
  "taruna-ganapati": "/lovable-uploads/a2bd7591-6a95-4115-80c7-0a35ec0ce56b.png",
  "veera-ganapati": "/lovable-uploads/23cc524e-6446-4e37-acf8-cb02c997d926.png",
  "siddhi-ganapati": "/lovable-uploads/c5d6f463-3d8b-4d40-a82b-f8f235c90573.png",
  "shakti-ganapati": "/lovable-uploads/79e847bb-0d1f-497f-ab4a-8fc35db0c505.png",
  "heramba-ganapati": "/lovable-uploads/e9b339db-5f60-4817-83c9-ecfaf5277dbb.png",
  "kshipra-ganapati": "/lovable-uploads/c0bf9183-1ddd-4366-a273-c8bf428d8628.png",
  "ucchishta-ganapati": "/lovable-uploads/61864101-b55b-45b0-b3a9-d61fd36c0e4d.png"
};

export const ganeshaForms: GaneshaForm[] = [
  {
    id: "bala-ganapati",
    name: "Bala Ganapati",
    tagline: "The sweet childlike Ganesha who brings joy and innocence!",
    story: [
      "Bala Ganapathi is the child form of Ganesha, depicted as a playful and sweet baby who shines like the morning sun. He is always happy and friendly, reminding everyone to enjoy the good things in life, such as delicious fruits and sweet treats.",
      "The story tells of a girl named Maya who, on a gloomy day, finds happiness by thinking of Bala Ganapathi's joyful nature. He teaches that it's okay to be childlike, to have fun, and to find joy even when things are difficult.",
      "With a golden-yellow body, Bala Ganapathi holds a mango, a banana, a sugarcane stalk, and a jackfruit, symbolizing the sweetness and abundance of life. When children pray to Bala Ganapati, he helps them learn new things easily and keeps them happy and safe."
    ],
    mantra: "Om Bala Ganapataye Namaha",
    meaning: "I bow to the child-like Ganesha who brings innocence and joy",
    videoId: "OVIz8M8fva0",
    imagePath: ganeshaImages["bala-ganapati"]
  },
  {
    id: "taruna-ganapati",
    name: "Taruna Ganapati",
    tagline: "The youthful Ganesha full of energy and strength!",
    story: [
      "Taruna Ganapathi is depicted as a vibrant, strong, and wise young man, embodying energy and purpose. He is portrayed with a determined look, ready to face any challenge, and is as strong as a mountain and as focused as an archer.",
      "With eight arms, he carries items like a noose, a goad, various fruits, a sugarcane stalk, and his broken tusk, symbolizing control over obstacles, guidance, and the sweet rewards of hard work.",
      "The story tells of a boy named Rohan who, inspired by Taruna Ganapathi's confident posture, finds the courage to tackle a difficult project. Taruna Ganapathi teaches the importance of ambition, responsibility, and using one's energy wisely to achieve goals and overcome fear."
    ],
    mantra: "Om Taruna Ganapataye Namaha",
    meaning: "I bow to the youthful Ganesha who gives energy and strength",
    videoId: "DMahAaelLvQ",
    imagePath: ganeshaImages["taruna-ganapati"]
  },
  {
    id: "bhakti-ganapati",
    name: "Bhakti Ganapati",
    tagline: "The loving Ganesha who teaches us devotion and kindness!",
    story: [
      "Bhakti Ganapathi is the form of Ganesha representing pure love and devotion, with a face that glows with peace and serenity. He is likened to a gentle prayer and quiet meditation, guiding followers to find inner peace by opening their hearts.",
      "This form of Ganapathi teaches the importance of kindness, compassion, and connecting with one's inner self through prayer and reflection. The story tells of a woman named Priya, who finds relief from stress by remembering Bhakti Ganapathi and performing an act of charity.",
      "Bhakti Ganapathi holds a coconut, mango, banana, and a bowl of sweet payasam, symbolizing the sweetness of devotion and the nourishing fruits of a surrendered heart. When children pray to Bhakti Ganapati, their hearts become full of love and they learn to be kind to everyone around them."
    ],
    mantra: "Om Bhakti Ganapataye Namaha",
    meaning: "I bow to the devotional Ganesha who fills our hearts with love",
    videoId: "Zyz8sJZxoDs"
  },
  {
    id: "veera-ganapati",
    name: "Veera Ganapati",
    tagline: "The brave warrior who protects us from fear!",
    story: [
      "Veera Ganapathi is presented as a mighty and courageous warrior, with a radiant complexion and sixteen arms fearlessly wielding various weapons. These tools, including a mace, trident, discus, and bow, symbolize his power to conquer evil, protect righteousness, and uphold justice.",
      "He is depicted as a fierce hero, ready to fight for what is right and defend the innocent against darkness. The story tells of three friends who, inspired by Veera Ganapathi's bravery, find the courage to stand up to a bully and protect a younger child.",
      "Veera Ganapathi reminds us to be brave, protect others, and stand firm for our beliefs every day. When children feel scared or face bullies, they can pray to Veera Ganapati for courage and protection."
    ],
    mantra: "Om Veera Ganapataye Namaha",
    meaning: "I bow to the brave Ganesha who gives us courage and protection",
    videoId: "P1NsIQ8DLGk",
    imagePath: ganeshaImages["veera-ganapati"]
  },
  {
    id: "shakti-ganapati",
    name: "Shakti Ganapati",
    tagline: "The powerful Ganesha who gives us inner strength!",
    story: [
      "Shakti Ganapathi is the form of Ganesha united with his divine energy, or Shakti, who sits on his lap, symbolizing the perfect harmony of strength and love. He is depicted in the color of the evening sun, with his consort having an emerald-green hue.",
      "This form represents the union of divine masculine and feminine energies and teaches the importance of gender equality, showing that true power comes from combining strength with love and compassion.",
      "A story of two children, Leo and Lily, illustrates this lesson, as they learn to cooperate and build something beautiful together. Shakti Ganapathi reminds us that working in unity makes us stronger and that kindness is a powerful force."
    ],
    mantra: "Om Shakti Ganapataye Namaha",
    meaning: "I bow to the powerful Ganesha who awakens our inner strength",
    videoId: "kvtEwGXIVGY",
    imagePath: ganeshaImages["shakti-ganapati"]
  },
  {
    id: "dvija-ganapati",
    name: "Dvija Ganapati",
    tagline: "The wise Ganesha who loves learning and knowledge!",
    story: [
      "Dwija Ganapathi, the 'twice-born,' is a magnificent form of Ganesha who embodies profound knowledge and the lifelong journey of learning. He is depicted with four gentle, elephant-like faces that radiate wisdom and peace, symbolizing his ability to understand all perspectives.",
      "In his hands, he holds treasures like a japamala (prayer beads), a kamandalu (water pot), a danda (staff), and a pustaka (ancient texts), which represent the rhythm of learning, the purity of knowledge, and discipline.",
      "The story of Neha, a student who overcomes frustration by seeking help and collaborating with others, highlights the importance of perseverance and learning from others to achieve mastery. This form encourages the pursuit of both worldly and spiritual wisdom."
    ],
    mantra: "Om Dvija Ganapataye Namaha",
    meaning: "I bow to the scholarly Ganesha who blesses us with wisdom",
    videoId: "0BC5WZZLytI"
  },
  {
    id: "siddhi-ganapati",
    name: "Siddhi Ganapati",
    tagline: "The accomplished Ganesha who helps us achieve our dreams!",
    story: [
      "Siddhi Ganapathi is the embodiment of accomplishment, fulfillment, and abundance, blessing his devotees with prosperity and success. He is depicted as radiant and golden, representing the sweet taste of achievement after dedicated effort.",
      "In his hands, he holds a ripe mango, an axe, a bunch of flowers, and sugarcane, symbolizing the sweet fruits of labor, the power to overcome obstacles, and the beauty of creation.",
      "The story tells of Anya, a dancer who overcomes her clumsiness and self-doubt by focusing on Siddhi Ganapathi's promise of accomplishment. By embracing his spirit of confidence and focus, she perseveres and achieves her dream, reminding us that with dedication, we can all reach our goals."
    ],
    mantra: "Om Siddhi Ganapataye Namaha",
    meaning: "I bow to the accomplished Ganesha who grants success",
    videoId: "qW7laQs5Yll",
    imagePath: ganeshaImages["siddhi-ganapati"]
  },
  {
    id: "ucchishta-ganapati",
    name: "Ucchishta Ganapati",
    tagline: "The unique Ganesha who teaches us to be grateful!",
    story: [
      "Uchchhishta Ganapathi is a unique and powerful form of Ganesha, often depicted with his divine consort, Shakti, symbolizing harmony and the sacredness of all creation. With a captivating dark blue complexion, he holds items like a blue lotus, a pomegranate, and a veena.",
      "This form teaches the profound lesson of finding divine potential in all aspects of life, even in things others might overlook or consider imperfect. The story of Rupa, an artist who learns to embrace her unique style, illustrates how accepting every part of our experience can unlock creativity and joy.",
      "Uchchhishta Ganapati reminds us that true fulfillment comes from embracing life fully and recognizing the divine in everything. When children pray to him, they learn to say 'thank you' more often and find joy in simple pleasures."
    ],
    mantra: "Om Ucchishta Ganapataye Namaha",
    meaning: "I bow to the grateful Ganesha who teaches appreciation",
    videoId: "Igglm4Q9Vn0",
    imagePath: ganeshaImages["ucchishta-ganapati"]
  },
  {
    id: "vighna-ganapati",
    name: "Vighna Ganapati",
    tagline: "The obstacle-removing Ganesha who clears our path!",
    story: [
      "Vighna Ganapathi, whose name means 'remover of obstacles,' is a powerful and radiant form of Ganesha, shining as brilliantly as gold. He is depicted with eight arms, holding various divine instruments like a conch, a discus, a noose, and a goad.",
      "His bright golden color represents success, purity, and auspicious beginnings, inspiring hope and confidence in those who seek his blessings. The story tells of two friends building a sandcastle who, inspired by Vighna Ganapathi, find a creative solution to overcome the obstacle of other children running past.",
      "Vighna Ganapathi teaches that with focus, effort, and divine blessings, we can overcome any challenge and find a way forward. When children face challenges at school or home, he helps remove those difficulties and makes things better."
    ],
    mantra: "Om Vighna Ganapataye Namaha",
    meaning: "I bow to the obstacle-removing Ganesha who clears our path",
    videoId: "gvgPQcurlPw"
  },
  {
    id: "kshipra-ganapati",
    name: "Kshipra Ganapati",
    tagline: "The quick-acting Ganesha who helps us right away!",
    story: [
      "Kshipra Ganapathi is known for his ability to provide 'super-fast help,' as his name Kshipra means quick or swift. He is the one to turn to for immediate blessings and rapid solutions, granting the wishes of sincere devotees with remarkable speed.",
      "With a vibrant red hue like a hibiscus flower, he symbolizes energy and swift action. In his four hands, he holds his broken tusk, a wish-fulfilling creeper, and other divine items, representing his power to grant desires and remove obstacles quickly.",
      "The story of Latha, who instantly finds her lost library book after a quick prayer, illustrates his ability to provide immediate focus and clarity, even in moments of panic. When children need urgent help with something important, Kshipra Ganapati comes to their aid right away."
    ],
    mantra: "Om Kshipra Ganapataye Namaha",
    meaning: "I bow to the swift Ganesha who grants quick blessings",
    videoId: "8zaJqwCbp74",
    imagePath: ganeshaImages["kshipra-ganapati"]
  },
  {
    id: "heramba-ganapati",
    name: "Heramba Ganapati",
    tagline: "The powerful five-faced Ganesha who protects from all directions!",
    story: [
      "Heramba Ganapathi is revered as the 'Mighty Protector,' a guardian for the timid and helpless. He is the one to turn to for courage and a divine shield against fear, offering solace to those who feel lost or overwhelmed.",
      "With five watchful heads facing all directions, he symbolizes omnipresent awareness and constant vigilance. He rides a mighty lion, signifying his immense courage and fearless nature. In his ten hands, he wields his broken tusk, a noose, and an axe, while also offering gestures of fearlessness and blessings.",
      "The story of Arya, who finds herself lost and panicked in a crowded market, illustrates his ability to bring instant calm and a sense of security, proving that under his gaze, no one is ever truly alone or unprotected."
    ],
    mantra: "Om Heramba Ganapataye Namaha",
    meaning: "I bow to the five-faced protector Ganesha",
    videoId: "pRvV_WOuOYU",
    imagePath: ganeshaImages["heramba-ganapati"]
  },
  {
    id: "lakshmi-ganapati",
    name: "Lakshmi Ganapati",
    tagline: "The prosperous Ganesha who brings abundance and wealth!",
    story: [
      "Lakshmi Ganapathi is revered as the 'embodiment of prosperity and auspiciousness,' with his name directly linking him to Lakshmi, the goddess of wealth. He is the bestower of wealth in all its forms, offering both spiritual and material abundance to his devotees.",
      "Seated with his two Shaktis (divine energies) and glowing with a fair, golden radiance, he symbolizes the harmonious union of power and prosperity. In his eight hands, he holds a wish-fulfilling Kalpalata vine, a gem-filled pot, a pomegranate, and other divine symbols.",
      "The story of Shruti, the struggling potter whose fortunes gradually improve after her prayers, illustrates that faith in him, combined with sincere effort, opens the doors to holistic abundance in life."
    ],
    mantra: "Om Lakshmi Ganapataye Namaha",
    meaning: "I bow to the prosperous Ganesha who brings abundance",
    videoId: "B0bhXGFNInM"
  },
  {
    id: "maha-ganapati",
    name: "Maha Ganapati",
    tagline: "The great ten-armed Ganesha with supreme power!",
    story: [
      "Maha Ganapathi is hailed as 'The Great One,' the supreme and all-powerful form of Ganesha. He is the one to invoke for ultimate strength, success in grand endeavors, and boundless fulfillment, bestowing his blessings on those who seek true greatness.",
      "With a majestic red hue symbolizing divine energy and passion, he sits with ten mighty arms, signifying his mastery over all realms and his limitless power. In his hands, he holds his broken tusk, a pomegranate, a powerful mace, and a pot of jewels.",
      "The story of Rohan, who feels overwhelmed by challenges, illustrates that focusing on Maha Ganapathi's magnificent form provides the inner strength and clarity needed to conquer any adversity."
    ],
    mantra: "Om Maha Ganapataye Namaha",
    meaning: "I bow to the great Ganesha with supreme power",
    videoId: "LwIZMHcvyXU",
    imagePath: ganeshaImages["maha-ganapati"]
  },
  {
    id: "vijaya-ganapati",
    name: "Vijaya Ganapati",
    tagline: "The victorious Ganesha who ensures success!",
    story: [
      "Vijaya Ganapathi is revered as the 'Ganesha of Victory,' the divine champion to call upon for success in any endeavor. He is the one who ensures triumph over challenges, guiding devotees to overcome obstacles and achieve their goals.",
      "With a radiant red hue symbolizing energy and passion, he rides his swift mouse, Mushika, demonstrating that he can reach his devotees quickly to ensure their success. In his four hands, he holds his broken tusk, a noose, a goad, and a sweet mango.",
      "The story of Krish, the nervous football player who finds confidence by thinking of him, illustrates that true victory lies not just in the outcome but in conquering one's inner fears and giving your absolute best."
    ],
    mantra: "Om Vijaya Ganapataye Namaha",
    meaning: "I bow to the victorious Ganesha",
    videoId: "bDrDhZ9C7bE"
  },
  {
    id: "nritya-ganapati",
    name: "Nritya Ganapati",
    tagline: "The dancing Ganesha who brings joy and celebration!",
    story: [
      "Nritya Ganapati is celebrated as the 'Master of the Dance,' the divine patron of all artists and performers. He is the one to invoke for inspiration, helping devotees find joy, unleash their creativity, and express themselves with grace and confidence.",
      "With a radiant golden hue, he is often depicted in a joyous dance pose under the wish-fulfilling Kalpavriksha tree, embodying the beautiful rhythm of life and creation. In his four hands, he holds his broken tusk, an axe, a noose, and a goad.",
      "The story of Hari, a drummer frustrated by his attempts at perfection, illustrates that embracing one's own flow—as inspired by Nritya Ganapati—is where true art and happiness are found."
    ],
    mantra: "Om Nritya Ganapataye Namaha",
    meaning: "I bow to the dancing Ganesha",
    videoId: "ubGVmEgh4ls"
  },
  {
    id: "urdhva-ganapati",
    name: "Urdhva Ganapati",
    tagline: "The elevated Ganesha who lifts our spirits high!",
    story: [
      "Urdhva Ganapati is revered as 'The Elevated One,' the radiant deity who lifts devotees to higher states of being. He is the one to invoke for spiritual growth and the loving support needed to rise to our best selves.",
      "Shining with a beautiful golden hue and seated with his Shakti (divine consort) on his lap, he symbolizes the immense power found in love, partnership, and upward progress. In his eight hands, he holds his broken tusk, flowers, a paddy sprig, and a sugarcane bow.",
      "The story of Leela, a shy girl who finds the confidence to recite a poem after thinking of his loving embrace, illustrates his power to help us overcome hesitation and achieve our full potential."
    ],
    mantra: "Om Urdhva Ganapataye Namaha",
    meaning: "I bow to the elevated Ganesha",
    videoId: "mMzSVPyoBe4"
  },
  {
    id: "ekakshara-ganapati",
    name: "Ekakshara Ganapati",
    tagline: "The single-syllable Ganesha of pure sound!",
    story: [
      "Ekakshara Ganapathi is revered as 'The Deity of the Single Syllable,' the supreme deity of focus and concentration. He is the one to invoke for mental clarity and the power to control desires, helping devotees cut through distractions to find their inner strength.",
      "With a radiant red hue symbolizing energy and passion, he sits in a meditative lotus pose, representing the deep focus required to attain true potential. In his four hands, he holds his broken tusk, a goad, a noose, and a citron fruit.",
      "The story of Anya, a baker whose mind wanders like squirrels, illustrates how focusing her attention—inspired by Ekakshara Ganapati—helps her silence distractions and unlock her true creative power."
    ],
    mantra: "Om Ekakshara Ganapataye Namaha",
    meaning: "I bow to the single-syllable Ganesha",
    videoId: "VhlaS1zwz-o"
  },
  {
    id: "varada-ganapati",
    name: "Varada Ganapati",
    tagline: "The blessing-giving Ganesha who grants our wishes!",
    story: ["This is the story of Varada Ganapati..."],
    mantra: "Om Varada Ganapataye Namaha",
    meaning: "I bow to the blessing-giving Ganesha"
  },
  {
    id: "tryakshara-ganapati",
    name: "Tryakshara Ganapati",
    tagline: "The three-syllable Ganesha of sacred sound!",
    story: ["This is the story of Tryakshara Ganapati..."],
    mantra: "Om Tryakshara Ganapataye Namaha",
    meaning: "I bow to the three-syllable Ganesha"
  },
  {
    id: "kshipra-prasada-ganapati",
    name: "Kshipra Prasada Ganapati",
    tagline: "The quick-blessing Ganesha who responds immediately!",
    story: ["This is the story of Kshipra Prasada Ganapati..."],
    mantra: "Om Kshipra Prasada Ganapataye Namaha",
    meaning: "I bow to the quick-blessing Ganesha"
  },
  {
    id: "haridra-ganapati",
    name: "Haridra Ganapati",
    tagline: "The golden turmeric Ganesha who brings purity!",
    story: ["This is the story of Haridra Ganapati..."],
    mantra: "Om Haridra Ganapataye Namaha",
    meaning: "I bow to the golden turmeric Ganesha"
  },
  {
    id: "ekadanta-ganapati",
    name: "Ekadanta Ganapati",
    tagline: "The single-tusked Ganesha who shows determination!",
    story: ["This is the story of Ekadanta Ganapati..."],
    mantra: "Om Ekadanta Ganapataye Namaha",
    meaning: "I bow to the single-tusked Ganesha"
  },
  {
    id: "srishti-ganapati",
    name: "Srishti Ganapati",
    tagline: "The creative Ganesha who brings new beginnings!",
    story: ["This is the story of Srishti Ganapati..."],
    mantra: "Om Srishti Ganapataye Namaha",
    meaning: "I bow to the creative Ganesha"
  },
  {
    id: "uddanda-ganapati",
    name: "Uddanda Ganapati",
    tagline: "The enforcer Ganesha who maintains cosmic order!",
    story: ["This is the story of Uddanda Ganapati..."],
    mantra: "Om Uddanda Ganapataye Namaha",
    meaning: "I bow to the enforcer Ganesha"
  },
  {
    id: "rinamochana-ganapati",
    name: "Rinamochana Ganapati",
    tagline: "The debt-freeing Ganesha who relieves all burdens!",
    story: ["This is the story of Rinamochana Ganapati..."],
    mantra: "Om Rinamochana Ganapataye Namaha",
    meaning: "I bow to the debt-freeing Ganesha"
  },
  {
    id: "dhundhi-ganapati",
    name: "Dhundhi Ganapati",
    tagline: "The seeking Ganesha who helps find what's lost!",
    story: ["This is the story of Dhundhi Ganapati..."],
    mantra: "Om Dhundhi Ganapataye Namaha",
    meaning: "I bow to the seeking Ganesha"
  },
  {
    id: "dvimukha-ganapati",
    name: "Dvimukha Ganapati",
    tagline: "The two-faced Ganesha who sees all perspectives!",
    story: ["This is the story of Dvimukha Ganapati..."],
    mantra: "Om Dvimukha Ganapataye Namaha",
    meaning: "I bow to the two-faced Ganesha"
  },
  {
    id: "trimukha-ganapati",
    name: "Trimukha Ganapati",
    tagline: "The three-faced Ganesha of past, present, and future!",
    story: ["This is the story of Trimukha Ganapati..."],
    mantra: "Om Trimukha Ganapataye Namaha",
    meaning: "I bow to the three-faced Ganesha"
  },
  {
    id: "simha-ganapati",
    name: "Simha Ganapati",
    tagline: "The lion-riding Ganesha who shows royal courage!",
    story: ["This is the story of Simha Ganapati..."],
    mantra: "Om Simha Ganapataye Namaha",
    meaning: "I bow to the lion-riding Ganesha"
  },
  {
    id: "yoga-ganapati",
    name: "Yoga Ganapati",
    tagline: "The meditative Ganesha who brings inner peace!",
    story: ["This is the story of Yoga Ganapati..."],
    mantra: "Om Yoga Ganapataye Namaha",
    meaning: "I bow to the meditative Ganesha"
  },
  {
    id: "durga-ganapati",
    name: "Durga Ganapati",
    tagline: "The fortress Ganesha who provides unshakeable protection!",
    story: ["This is the story of Durga Ganapati..."],
    mantra: "Om Durga Ganapataye Namaha",
    meaning: "I bow to the fortress Ganesha"
  },
  {
    id: "sankatahara-ganapati",
    name: "Sankatahara Ganapati",
    tagline: "The trouble-removing Ganesha who solves all problems!",
    story: ["This is the story of Sankatahara Ganapati..."],
    mantra: "Om Sankatahara Ganapataye Namaha",
    meaning: "I bow to the trouble-removing Ganesha"
  }
];
