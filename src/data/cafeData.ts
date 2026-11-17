import { TeamMember, MenuItem, CafeZone, QuizQuestion, VocabWord } from '../types/cafe';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'aisyah',
    name: 'Aisyah Nurul Rahma',
    role: 'Project Lead & English Report Author',
    nis: '9A-2024-001',
    avatar: '👩‍🎓',
    contributions: [
      'Drafted the comprehensive academic Report Text following Grade 9 generic structures.',
      'Organized weekly group research meetings and presentation deck.',
      'Edited all bilingual presentation materials and vocabulary glossaries.'
    ],
    favoriteDrink: 'Brain Boost Matcha Latte',
    quote: '"Technology and language go hand in hand to solve real school community problems."'
  },
  {
    id: 'kevin',
    name: 'Kevin Pratama Wijaya',
    role: 'IoT & Automation Systems Architect',
    nis: '9A-2024-014',
    avatar: '👨‍💻',
    contributions: [
      'Designed the robotic barista arm 5-step servo control and pressure algorithm.',
      'Built circuit simulations for RFID student ID contactless transactions.',
      'Calibrated environmental telemetry sensors (temperature, CO2, solar watts).'
    ],
    favoriteDrink: 'Exam Cram Cold Brew',
    quote: '"Automating repetitive brewing frees human staff to offer genuine warmth and hospitality."'
  },
  {
    id: 'sarah',
    name: 'Sarah Amalia Putri',
    role: 'Spatial & Eco-Architectural Designer',
    nis: '9A-2024-023',
    avatar: '👩‍🎨',
    contributions: [
      'Rendered the 3D isometric cafe layout and ergonomic study pod diagrams.',
      'Integrated solar rooftop orientation and daylight harvesting windows.',
      'Designed the hydroponic live plant wall for indoor natural air purification.'
    ],
    favoriteDrink: 'Quantum Berry Sparkler',
    quote: '"A study space should boost serotonin and mental focus through natural light and greenery."'
  },
  {
    id: 'farhan',
    name: 'Farhan Rizky Maulana',
    role: 'Nutrition & Smart Menu Developer',
    nis: '9A-2024-009',
    avatar: '👨‍🔬',
    contributions: [
      'Analyzed caloric density, glycemic index, and L-theanine cognitive benefits.',
      'Conducted student taste tests with 45 Grade 9 classmates.',
      'Formulated low-sugar, high-energy recipes within student allowance budgets.'
    ],
    favoriteDrink: 'Robo-Choc Cocoa Frappe',
    quote: '"Students need steady, clean cognitive fuel instead of sugar crashes during exam week."'
  },
  {
    id: 'nadia',
    name: 'Nadia Azzahra Putri',
    role: 'Finance & Promotional Strategist',
    nis: '9A-2024-019',
    avatar: '👩‍💼',
    contributions: [
      'Surveyed 120 students to determine price elasticity (Rp 12.000 - Rp 25.000 sweet spot).',
      'Calculated startup capital expenditure, IoT sensor payback, and break-even point.',
      'Created the "Straight-A Report Card Promo" and "BYOT Bring Your Own Tumbler" campaigns.'
    ],
    favoriteDrink: 'Brain Boost Matcha Latte',
    quote: '"Smart pricing ensures even students with modest daily allowances can participate."'
  }
];

export const TEACHER_MENTORS = [
  {
    name: 'Mrs. Ratna Dewi, M.Pd.',
    subject: 'English Language & Academic Writing Advisor',
    feedback: 'Commended the team for flawless adherence to Grade 9 Report Text generic structure (General Classification followed by systematic Descriptions) and sophisticated passive voice usage.'
  },
  {
    name: 'Mr. Bambang Sutrisno, S.T.',
    subject: 'Informatics & Science Integration Mentor',
    feedback: 'Praised the realistic micro-controller telemetry models and practical application of green solar technology within school premises.'
  }
];

export const PROJECT_TIMELINE = [
  {
    week: 'Week 1',
    title: 'Problem Discovery & Survey',
    desc: 'Surveyed 120 students across grades 7, 8, and 9 about canteen crowding and lack of charging stations during recess.'
  },
  {
    week: 'Week 2',
    title: 'IoT & Architectural Blueprints',
    desc: 'Researched Arduino/ESP32 microcontrollers, robotic servos, and 3D isometric interior layout.'
  },
  {
    week: 'Week 3',
    title: 'Menu Nutrition & Business Plan',
    desc: 'Formulated student-friendly recipes, calculated calories and ingredient costs, and built the SWOT matrix.'
  },
  {
    week: 'Week 4',
    title: 'English Report Text Drafting',
    desc: 'Authored the formal Report Text following Indonesian Grade 9 curriculum standards and reviewed grammar.'
  },
  {
    week: 'Week 5',
    title: 'Interactive Web Prototype',
    desc: 'Integrated all modules into an interactive digital showcase for classroom exhibition and peer evaluation.'
  }
];

export const CAFE_ZONES: CafeZone[] = [
  {
    id: 'entrance',
    name: 'Zone 1: Smart Arrival & RFID Turnstile',
    area: '15 m²',
    specs: 'Infrared temperature scanner + 13.56MHz NFC reader + digital guest display',
    purpose: 'Seamless contactless entry, student ID check-in, and instant digital attendance logging.',
    iotFeature: 'ESP32 IoT reader linked to the school student database for one-tap entry.',
    energyUse: '45W average (low standby draw)'
  },
  {
    id: 'barista',
    name: 'Zone 2: Robotic Barista Bar Counter',
    area: '24 m²',
    specs: '6-axis articulated robotic arm + precision steam wand + conveyor delivery lane',
    purpose: 'Automated espresso extraction and milk foaming with consistent 45-second preparation time.',
    iotFeature: 'Real-time telemetry showing pressure (9 bar), water temperature (92.5°C), and bean dosage.',
    energyUse: '1,450W during active brew cycle (offset by solar array)'
  },
  {
    id: 'tables',
    name: 'Zone 3: Interactive Touchscreen Smart Tables',
    area: '48 m²',
    specs: 'Tempered glass surfaces + multi-touch 1080p panel + dual Qi fast wireless chargers',
    purpose: 'Students place orders directly from their seats, set group study timers, and recharge laptops/phones.',
    iotFeature: 'Capacitive touch controls with digital tabletop study whiteboard and menu selector.',
    energyUse: '180W per 4-student table cluster'
  },
  {
    id: 'study-pods',
    name: 'Zone 4: Acoustic Silent Study Pods',
    area: '32 m²',
    specs: 'Sound-dampening recycled wool panels + circadian daylight LED strip + USB-C PD 65W ports',
    purpose: 'Provides distraction-free spaces for exam cramming, homework completion, or solo reading.',
    iotFeature: 'Air quality sensors (CO2 and VOC) that automatically adjust silent ventilation intake.',
    energyUse: '65W per individual acoustic booth'
  },
  {
    id: 'garden',
    name: 'Zone 5: Hydroponic Indoor Green Wall',
    area: '18 m²',
    specs: 'Vertical NFT (Nutrient Film Technique) hydroponic system + full-spectrum plant lights',
    purpose: 'Cultivates fresh organic peppermint, stevia leaves, and basil utilized directly in cafe drinks.',
    iotFeature: 'Automated pH/EC nutrient dosage pumps and moisture telemetry.',
    energyUse: '95W (runs on excess solar battery storage)'
  },
  {
    id: 'eco-bin',
    name: 'Zone 6: AI Computer Vision Waste Station',
    area: '12 m²',
    specs: 'High-speed camera sensor + servo motor lids + ultrasonic fill-level monitors',
    purpose: 'Classifies waste into Plastics, Clean Paper, Organics, and Liquids to achieve 90%+ recycling rates.',
    iotFeature: 'Edge-AI neural model identifies cup materials in 300ms and pops open the appropriate chute.',
    energyUse: '35W continuous monitoring'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Brain Boost Matcha Latte',
    category: 'Brain Boosters',
    priceIdr: 18000,
    priceUsd: 1.15,
    calories: 145,
    focusRating: 5,
    sugarGrams: 8,
    allergens: ['Dairy or Oat (Optional)'],
    description: 'Ceremonial Uji matcha whisked with velvety oat milk and a touch of natural honey. Rich in L-Theanine for calm, sustained alertness without jittery caffeine spikes.',
    studentBenefit: 'Increases alpha brain waves for sustained study focus and memory retention during exam preparation.',
    badge: 'Class Favorite'
  },
  {
    id: 'm2',
    name: 'Exam Cram Cold Brew',
    category: 'Brain Boosters',
    priceIdr: 15000,
    priceUsd: 0.95,
    calories: 25,
    focusRating: 5,
    sugarGrams: 0,
    allergens: ['None'],
    description: 'Single-origin Indonesian Arabica beans steeped for 18 hours in cold filtered water, infused with a hint of cinnamon stick. Naturally low in acidity and ultra-smooth.',
    studentBenefit: 'Maximum clean caffeine extraction with zero added sugar to power late afternoon study sessions.',
    badge: 'High Energy'
  },
  {
    id: 'm3',
    name: 'Robo-Choc Cocoa Frappe',
    category: 'Brain Boosters',
    priceIdr: 17000,
    priceUsd: 1.10,
    calories: 210,
    focusRating: 4,
    sugarGrams: 14,
    allergens: ['Dairy / Soy'],
    description: 'Raw Sulawesi dark cacao blended with fresh milk, crushed ice, and topped with chocolate micro-shavings crafted by our robotic barista arm.',
    studentBenefit: 'High flavonol antioxidants that enhance cerebral blood flow and uplift mood after challenging tests.',
    badge: 'Best Taste'
  },
  {
    id: 'm4',
    name: 'Quantum Berry Sparkler',
    category: 'Refreshers',
    priceIdr: 14000,
    priceUsd: 0.90,
    calories: 85,
    focusRating: 3,
    sugarGrams: 11,
    allergens: ['None'],
    description: 'Crushed highland strawberries, sparkling mountain spring water, and fresh mint leaves picked directly from our indoor hydroponic vertical garden.',
    studentBenefit: 'Vitamin C booster that rehydrates the body during hot tropical afternoons between sports and class.',
    badge: 'Hydroponic Mint'
  },
  {
    id: 'm5',
    name: 'Citrus Smart Refresher',
    category: 'Refreshers',
    priceIdr: 12000,
    priceUsd: 0.80,
    calories: 65,
    focusRating: 4,
    sugarGrams: 7,
    allergens: ['None'],
    description: 'Fresh calamansi lime and lemongrass brew, lightly sweetened with organic stevia and garnished with chia seeds for sustained electrolyte hydration.',
    studentBenefit: 'Electrolytes and mild natural citrus terpenes combat midday mental drowsiness.'
  },
  {
    id: 'm6',
    name: 'Coding Cookie (Oat & Dark Choc)',
    category: 'Smart Bakery',
    priceIdr: 10000,
    priceUsd: 0.65,
    calories: 150,
    focusRating: 4,
    sugarGrams: 9,
    allergens: ['Gluten', 'Eggs'],
    description: 'Baked fresh every morning with rolled oats, roasted chia seeds, crushed walnuts, and 70% dark chocolate chips. Shaped in a fun circuit microchip pattern.',
    studentBenefit: 'Complex carbohydrates offer slow glucose release to sustain brain metabolism during long study sessions.',
    badge: 'Freshly Baked'
  },
  {
    id: 'm7',
    name: 'Focus Protein Snack Bento',
    category: 'Smart Bakery',
    priceIdr: 20000,
    priceUsd: 1.30,
    calories: 290,
    focusRating: 5,
    sugarGrams: 4,
    allergens: ['Eggs', 'Soy'],
    description: 'A compact snack bento box featuring organic edamame pods, two hard-boiled omega-3 eggs, whole-grain rice crackers, and seasonal melon cubes.',
    studentBenefit: '16g of balanced lean protein for neuro-transmitter synthesis and steady physical stamina.'
  }
];

export const REPORT_TEXT_DATA = {
  title: 'Report Text: The Architecture and Social Dynamics of Smart Cafes',
  targetLevel: 'Junior High School English Curriculum (Grade 9 / SMP Kelas 9)',
  subject: 'Information & Communication Technology in Hospitality and Student Spaces',
  sections: [
    {
      heading: 'General Classification',
      type: 'classification',
      paragraph: 'A smart cafe is an innovative food and beverage establishment that integrates the Internet of Things (IoT), artificial intelligence (AI), and automated robotics into its hospitality operations. Unlike traditional cafes where human labor handles every single transaction and preparation step, a smart cafe utilizes microcontrollers, wireless sensor networks, and cloud computing architectures to optimize service speed, resource conservation, and customer engagement. In contemporary urban and educational environments, smart cafes represent a vital fusion of hospitality, digital infrastructure, and sustainable technology.',
      analysis: 'This opening section provides the formal definition, general classification, and taxonomic boundaries of what constitutes a "smart cafe" before detailing individual components.'
    },
    {
      heading: 'Description: Physical Layout and Hardware Components',
      type: 'description',
      paragraph: 'In terms of physical architecture, a smart cafe consists of several interconnected technological zones. At the entrance, automated contactless access barriers verify customer identification through Radio-Frequency Identification (RFID) or Near-Field Communication (NFC) cards. The central counter houses robotic manipulator arms engineered with multi-axis stepper motors, pressure gauges, and thermal sensors capable of brewing espresso with micrometer precision. Furthermore, collaborative dining tables are embedded with capacitive touchscreen panels, wireless Qi electromagnetic charging coils, and low-latency Wi-Fi 6 transceivers that permit users to interact seamlessly with the internal operating system.',
      analysis: 'Describes specific physical hardware, components, and machinery using technical vocabulary (RFID, stepper motors, capacitive touchscreen, Qi coils).'
    },
    {
      heading: 'Description: Operational Mechanisms and Digital Workflows',
      type: 'description',
      paragraph: 'Smart cafes operate through distributed client-server systems. When a patron places a beverage order via a mobile application or an interactive tabletop interface, the digital transaction data is dispatched to an edge server queue. The robotic barista retrieves the digital recipe parameters, regulates water temperature to exactly 92 degrees Celsius, and prepares the requested beverage within 45 seconds. Meanwhile, computer vision cameras monitor seating capacity, ambient noise levels, and indoor carbon dioxide concentrations. Automated environmental control units adjust air filtration and dimmable circadian LED illumination in response to sensory telemetry.',
      analysis: 'Explains the chronological and causal mechanics of operations using Simple Present Tense and precise procedural language.'
    },
    {
      heading: 'Description: Environmental and Educational Implications',
      type: 'description',
      paragraph: 'Beyond transactional speed, modern smart cafes are designed with strict environmental sustainability benchmarks. Rooftop photovoltaic solar arrays supply renewable electrical power to the brewing equipment, reducing dependency on fossil-fuel grids. In addition, intelligent waste segregation receptacles employ optical classification algorithms to distinguish between recyclable plastics, paper products, and organic refuse with over 90 percent accuracy. For secondary school students, smart cafes serve as empirical educational laboratories where young learners witness the real-world convergence of computer programming, electrical engineering, and sustainable entrepreneurship.',
      analysis: 'Concludes by detailing the broader socio-economic, ecological, and educational value for modern youth and educational institutions.'
    }
  ],
  grammarFeatures: {
    simplePresentVerbs: [
      'integrates', 'utilizes', 'represent', 'consists', 'houses', 'operate', 'retrieves', 'regulates', 'prepares', 'monitor', 'adjust', 'supply', 'employ', 'serve'
    ],
    technicalTerms: [
      'Internet of Things (IoT)', 'artificial intelligence (AI)', 'microcontrollers', 'Radio-Frequency Identification (RFID)', 'Near-Field Communication (NFC)', 'stepper motors', 'capacitive touchscreen', 'Qi electromagnetic coils', 'client-server systems', 'edge server', 'computer vision', 'photovoltaic solar arrays'
    ],
    passiveVoice: [
      'are embedded', 'is dispatched', 'are designed', 'is powered', 'are monitored', 'was engineered'
    ],
    relationalVerbs: [
      'is', 'consists of', 'represent', 'are', 'features'
    ]
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'According to the Report Text, what is the primary difference between a traditional cafe and a smart cafe?',
    options: [
      'Smart cafes sell only packaged convenience snacks.',
      'Smart cafes integrate IoT, automated robotics, and sensor networks to streamline preparation and service.',
      'Traditional cafes do not serve warm coffee drinks.',
      'Smart cafes operate exclusively on battery-powered mobile carts.'
    ],
    correctAnswer: 1,
    explanation: 'Paragraph 1 clearly notes that a smart cafe utilizes microcontrollers, wireless sensors, and robotics rather than relying purely on manual human labor for every step.'
  },
  {
    id: 2,
    question: 'What is the generic structure of a standard English Report Text as demonstrated in this project?',
    options: [
      'Orientation -> Complication -> Resolution -> Coda (Narrative)',
      'Goal -> Materials -> Steps 1-5 (Procedure)',
      'General Classification followed by systematic Descriptions of parts, qualities, and functions',
      'Thesis -> Arguments -> Reiteration (Analytical Exposition)'
    ],
    correctAnswer: 2,
    explanation: 'In Grade 9 English curriculum, a Report Text begins with a General Classification (defining the subject) followed by detailed Descriptions of parts, behavior, and functions.'
  },
  {
    id: 3,
    question: 'How do the collaborative smart tables benefit student patrons in the cafe?',
    options: [
      'They prevent students from doing homework.',
      'They provide integrated Qi wireless chargers, ordering screens, and digital study timers.',
      'They replace student school teachers entirely.',
      'They require coin-operated physical tokens to activate.'
    ],
    correctAnswer: 1,
    explanation: 'Zone 3 and the Report Text specify that smart tables have touchscreen ordering, Qi wireless phone/laptop charging coils, and built-in study aids.'
  },
  {
    id: 4,
    question: 'Why are rooftop photovoltaic solar panels included in the cafe’s design specifications?',
    options: [
      'To make the cafe look like an airplane hangar.',
      'To produce renewable electrical power and reduce dependence on fossil fuel grids.',
      'To replace natural window daylight entirely.',
      'Because school rules require all roofs to be painted dark blue.'
    ],
    correctAnswer: 1,
    explanation: 'The Report Text highlights that solar panels provide clean electrical power for brewing equipment, reinforcing eco-friendly school sustainability.'
  },
  {
    id: 5,
    question: 'Which grammatical tense is predominantly required in an English Report Text to state scientific facts?',
    options: [
      'Past Continuous Tense',
      'Simple Present Tense',
      'Future Perfect Tense',
      'Past Perfect Tense'
    ],
    correctAnswer: 1,
    explanation: 'Report texts state timeless scientific facts and generalized truths, which strictly require the Simple Present Tense (e.g., operates, utilizes, regulates).'
  }
];

export const VOCAB_WORDS: VocabWord[] = [
  {
    term: 'Autonomous',
    partOfSpeech: 'adjective',
    definitionEn: 'Acting independently or having the freedom to do so without direct human intervention.',
    meaningId: 'Beroperasi secara mandiri tanpa campur tangan manusia langsung.',
    example: 'The autonomous robotic barista brews lattes following digital telemetry recipes.'
  },
  {
    term: 'Telemetry',
    partOfSpeech: 'noun',
    definitionEn: 'The process of recording and transmitting the readings of an instrument automatically.',
    meaningId: 'Perekaman dan pengiriman data sensor secara nirkabel dan otomatis.',
    example: 'Sensor telemetry displays coffee extraction pressure at exactly 9 bars.'
  },
  {
    term: 'Photovoltaic',
    partOfSpeech: 'adjective',
    definitionEn: 'Relating to the production of electric current at the junction of two substances exposed to light.',
    meaningId: 'Berkaitan dengan pembangkitan listrik dari sinar matahari (tenaga surya).',
    example: 'The photovoltaic roof generates 4.2 kW of clean energy during peak daylight.'
  },
  {
    term: 'Ergonomic',
    partOfSpeech: 'adjective',
    definitionEn: 'Designed for efficiency and comfort in the working or studying environment.',
    meaningId: 'Dirancang ergonomis demi kenyamanan dan kesehatan postur tubuh.',
    example: 'Ergonomic study chairs reduce back fatigue during long revision sessions.'
  },
  {
    term: 'Hydroponic',
    partOfSpeech: 'adjective',
    definitionEn: 'The process of growing plants in sand, gravel, or liquid with added nutrients but without soil.',
    meaningId: 'Bercocok tanam tanpa menggunakan tanah, melainkan air bernutrisi.',
    example: 'Fresh mint is harvested from our indoor hydroponic vertical wall.'
  }
];

export const BUSINESS_SWOT = {
  strengths: [
    'Ultra-rapid 45-second beverage turnaround fits short 20-minute school breaks.',
    'Transparent nutritional data (calories, sugar, focus ratings) tailored for adolescents.',
    'On-site solar power minimizes municipal electricity utility bills by up to 40%.',
    'Interactive tabletop ordering eliminates noisy, crowded queue congestion.'
  ],
  weaknesses: [
    'Higher initial prototype expenditure for robotic stepper arms and capacitive screens.',
    'Requires scheduled weekly sensor calibration and sanitary robotic arm flushing.',
    'Dependence on school Wi-Fi network uptime for cloud order synchronization.'
  ],
  opportunities: [
    'Cashless integration with official school student ID cards (Kartu Pelajar).',
    'Hosting afternoon student coding clubs, robotic demos, and peer tutoring sessions.',
    'Offering "Grade Reward Discounts" to incentivize academic achievements.',
    'Partnering with local agricultural cooperatives for direct organic oat and bean sourcing.'
  ],
  threats: [
    'Unregulated street food vendors outside the school gate offering sugary low-cost snacks.',
    'Sudden power outages if battery backup storage is depleted during rainy monsoon weeks.',
    'Accidental liquid spills onto tabletop touch surfaces requiring ruggedized waterproof glass.'
  ]
};

export const FINANCIAL_METRICS = {
  initialCapexIdr: 45000000, // Rp 45,000,000 prototype scale
  monthlyOpexIdr: 7200000,
  averageDrinkPriceIdr: 15000,
  grossMarginPercent: 62,
  breakEvenDailyUnits: 28, // 28 cups per day to break even
  projectedPaybackMonths: 9.5
};
