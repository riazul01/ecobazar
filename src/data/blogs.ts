export interface BlogComment {
  id: number | string;
  name: string;
  avatar?: string;
  date: string;
  comment: string;
}

export interface Blog {
  id: number | string;
  title: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  authorBio?: string;
  comments: number;
  publishDate: string;
  link?: string;
  readTime?: string;
  desc?: string;
  content?: string[];
  quote?: {
    text: string;
    author: string;
  };
  commentsList?: BlogComment[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding Food Labels: What to Look For",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    category: "Healthy",
    tags: ["Food", "Healthy", "Nutrition", "Organic"],
    author: "Cameron Williamson",
    authorRole: "Senior Nutritionist",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    authorBio:
      "Cameron is a certified dietary expert and health journalist committed to helping families make wholesome grocery decisions.",
    comments: 65,
    publishDate: "18 Nov 2024",
    readTime: "5 min read",
    desc: "Deciphering ingredient lists, certified organic seals, and nutritional breakdowns to make smarter grocery choices for you and your family.",
    quote: {
      text: "When you read food labels with intention, you regain control over your health, energy, and wellness.",
      author: "Cameron Williamson",
    },
    content: [
      "Navigating grocery aisles can feel overwhelming with endless marketing claims on colorful packaging. From 'all-natural' to 'sugar-free', knowing what genuinely nourishes your body starts with decoding the nutrition label on the back rather than believing the bold graphics on the front.",
      "Always start with the ingredient list. Ingredients are ordered by weight from highest to lowest. If sugar, enriched flours, or hydrogenated oils occupy the top three spots, the product is likely ultra-processed regardless of whatever health claims are printed on the box.",
      "Check serving sizes carefully. A small bottle of beverage or packet of baked snacks often contains two or more servings, meaning you must double or triple the sodium, calorie, and sugar numbers if consuming the entire item.",
      "Prioritize whole foods with minimal, recognizable ingredients. Organic certifications guarantee non-GMO farming and zero synthetic chemical pesticides, making them an excellent benchmark for cleaner pantry staples.",
    ],
    commentsList: [
      {
        id: 101,
        name: "Eleanor Pena",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        date: "19 Nov 2024",
        comment:
          "This completely changed how I shop for granola and plant milks! Hidden sugars are everywhere.",
      },
      {
        id: 102,
        name: "Devon Lane",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        date: "20 Nov 2024",
        comment:
          "Very concise and practical advice. The serving size trick caught me off guard multiple times before.",
      },
    ],
  },
  {
    id: 6,
    title: "Effective Tips for Staying Well Hydrated All Day Long",
    image:
      "https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=1000&q=80",
    category: "Beverages",
    tags: ["Hydration", "Wellness", "Healthy", "Vitamins"],
    author: "Kristin Watson",
    authorRole: "Wellness Consultant",
    authorAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    authorBio:
      "Kristin specializes in daily restorative routines, natural hydration, and functional herbal infusions.",
    comments: 22,
    publishDate: "16 Nov 2024",
    readTime: "4 min read",
    desc: "Discover creative ways to boost daily fluid intake with fruit-infused water, electrolyte-rich produce, and mindful daily drinking habits.",
    quote: {
      text: "Hydration is not just about drinking water; it's about nourishing every cell with clean, mineral-rich fluids.",
      author: "Kristin Watson",
    },
    content: [
      "Water constitutes over 60% of our body weight, regulating body temperature, keeping joints lubricated, and transporting essential nutrients across cells. Yet millions experience chronic low-grade dehydration daily.",
      "Infusing fresh cucumbers, mint leaves, berries, and citrus slices transforms plain water into a refreshing elixir without artificial additives or refined sweeteners.",
      "Remember that hydration also comes from food. Cucumbers, watermelons, celery, and leafy greens have more than 90% water content along with key trace minerals that aid cell absorption.",
    ],
    commentsList: [
      {
        id: 103,
        name: "Courtney Henry",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        date: "17 Nov 2024",
        comment:
          "Infusing cucumber and lime into my daily pitcher has been a total game changer at work!",
      },
    ],
  },
  {
    id: 4,
    title: "Meal Prepping Tips for Busy Professionals",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
    category: "Cooking",
    tags: ["Meal Prep", "Lifestyle", "Cooking", "Tiffin"],
    author: "Robert Fox",
    authorRole: "Executive Chef & Author",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    authorBio:
      "Chef Robert creates time-saving batch recipes that make wholesome home cooking effortless and delicious.",
    comments: 30,
    publishDate: "15 Nov 2024",
    readTime: "6 min read",
    desc: "Save hours each week and eat healthier by mastering batch-cooking staples, proper storage containers, and multi-use ingredients.",
    quote: {
      text: "Meal prep is an act of self-care that gives you back hours of peace during hectic weekdays.",
      author: "Robert Fox",
    },
    content: [
      "When weekday schedules get chaotic, takeout and fast foods frequently become default choices. Meal prepping gives you nutritious, balanced meals ready in minutes.",
      "The key to sustainable meal prep is batching versatile components rather than identical full dishes. Roast a tray of mixed seasonal vegetables, boil a pot of quinoa, and marinate lean proteins.",
      "Invest in airtight glass containers that can go seamlessly from the refrigerator to the oven or microwave, maintaining flavor and crispness throughout the week.",
    ],
    commentsList: [
      {
        id: 104,
        name: "Jenny Wilson",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        date: "16 Nov 2024",
        comment:
          "Component prepping changed my life. I never get bored of lunches anymore!",
      },
    ],
  },
  {
    id: 2,
    title: "The Future of Plant-Based Diets",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
    category: "Vegetables",
    tags: ["Diet", "Vegan", "Vegetarian", "Sustainability"],
    author: "John Doe",
    authorRole: "Agricultural Researcher",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    authorBio:
      "John specializes in sustainable agronomy, plant proteins, and ecological food systems.",
    comments: 120,
    publishDate: "12 Nov 2024",
    readTime: "7 min read",
    desc: "How regenerative agriculture, plant proteins, and organic farming innovations are reshaping global cuisine and everyday nutrition.",
    quote: {
      text: "Eating plant-forward is not merely a diet; it is an investment in human vitality and the planet's future.",
      author: "John Doe",
    },
    content: [
      "Plant-based eating has transitioned from a niche dietary trend to a global nutritional movement. Modern culinary methods highlight the vibrant textures and deep flavors of whole grains, legumes, root vegetables, and fresh herbs.",
      "Incorporating more plant diversity into your diet supports gut microbiome health, lowers cardiovascular risk markers, and significantly reduces personal carbon footprints.",
    ],
    commentsList: [
      {
        id: 105,
        name: "Arlene McCoy",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        date: "13 Nov 2024",
        comment:
          "The section on soil microbiome and nutrient density is so eye-opening.",
      },
    ],
  },
  {
    id: 3,
    title: "Top 10 Superfoods to Boost Immunity",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80",
    category: "Fresh Fruit",
    tags: ["Health", "Superfoods", "Vitamins", "Healthy"],
    author: "Jane Smith",
    authorRole: "Clinical Dietitian",
    authorAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    authorBio:
      "Jane combines clinical nutritional science with wholesome organic cooking principles.",
    comments: 45,
    publishDate: "15 Nov 2024",
    readTime: "5 min read",
    desc: "Strengthen your natural defenses with nutrient-dense berries, dark leafy greens, citrus fruits, fermented foods, and potent herbal spices.",
    quote: {
      text: "Nature provides the most sophisticated pharmacy in the colors of fresh harvest.",
      author: "Jane Smith",
    },
    content: [
      "A resilient immune system relies on consistent intake of antioxidants, zinc, and vitamins A, C, and E. Colorful produce contains concentrated polyphenols that combat cellular oxidative stress.",
      "Top contenders include wild blueberries, turmeric with black pepper, fresh ginger root, garlic, kale, and fermented kefir. Consuming these daily builds robust seasonal immunity.",
    ],
  },
  {
    id: 5,
    title: "Sustainable Eating: How to Start in Your Own Kitchen",
    image:
      "https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=1000&q=80",
    category: "Vegetables",
    tags: ["Sustainability", "Eco-Friendly", "Organic", "Vegetarian"],
    author: "Lucy Brown",
    authorRole: "Eco Lifestyle Advocate",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    authorBio:
      "Lucy guides conscious consumers toward zero-waste kitchens, local sourcing, and compost systems.",
    comments: 85,
    publishDate: "10 Nov 2024",
    readTime: "6 min read",
    desc: "Small, impactful changes in how you shop, store produce, and minimize food waste to live more harmoniously with nature.",
    content: [
      "Sustainable eating is about fostering a conscious relationship with what we consume. Simple habits like meal planning and using vegetable scraps for savory homemade broths cut food waste drastically.",
      "Shopping from local organic farmers reduces transport emissions and guarantees peak nutrient freshness on your dinner table.",
    ],
  },
  {
    id: 7,
    title: "The Best Healthy Snacks for Sustained Energy and Focus",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=1000&q=80",
    category: "Snacks",
    tags: ["Weight Loss", "Snacks", "Low fat", "Healthy"],
    author: "Admin",
    authorRole: "Ecobazar Health Team",
    comments: 67,
    publishDate: "8 Nov 2024",
    readTime: "4 min read",
    desc: "Swap refined snacks for protein-packed raw nuts, seed blends, roasted chickpeas, and fresh fruit for steady all-day vitality.",
    content: [
      "Mid-afternoon energy crashes are often caused by blood sugar spikes from high-glycemic snacks. Pairing dietary fiber with healthy fats keeps blood glucose level.",
      "Raw almonds, walnuts, chia pudding, and sliced apples with almond butter provide lasting fuel without the crash.",
    ],
  },
  {
    id: 8,
    title: "Eating Clean on a Budget: Practical Grocery Strategies",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80",
    category: "Cooking",
    tags: ["Budget", "Clean Eating", "Lifestyle", "Healthy"],
    author: "Mark Thompson",
    authorRole: "Budget Nutritionist",
    comments: 54,
    publishDate: "7 Nov 2024",
    readTime: "5 min read",
    desc: "How to buy seasonal produce in bulk, utilize dried pulses and whole grains, and eat clean without overspending.",
    content: [
      "Clean eating does not need to carry a luxury price tag. Dried beans, lentils, whole oats, brown rice, and seasonal root crops are among the most economical superfoods available.",
      "Buy frozen organic fruits for morning smoothies and buy seasonal produce when harvests are abundant and prices are lowest.",
    ],
  },
  {
    id: 9,
    title: "How to Incorporate More Fiber into Your Daily Diet",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    category: "Fresh Fruit",
    tags: ["Fiber", "Diet", "Healthy", "Vitamins"],
    author: "Admin",
    authorRole: "Ecobazar Health Team",
    comments: 43,
    publishDate: "5 Nov 2024",
    readTime: "4 min read",
    desc: "Enhance digestive wellness, maintain satiety, and support heart health by including soluble and insoluble fiber sources.",
    content: [
      "Fiber is essential for healthy digestion, gut flora balance, and cholesterol regulation. Adding chia seeds, flaxseeds, legumes, and cruciferous vegetables makes hitting daily fiber goals effortless.",
    ],
  },
  {
    id: 10,
    title: "The Proven Benefits of a Mediterranean Diet",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    category: "Cooking",
    tags: ["Mediterranean", "Healthy", "Cooking", "Dinner"],
    author: "Paul Williams",
    authorRole: "Culinary Historian",
    comments: 33,
    publishDate: "4 Nov 2024",
    readTime: "6 min read",
    desc: "Why the classic Mediterranean pattern of extra virgin olive oil, fresh greens, seafood, and herbs remains the gold standard.",
    content: [
      "Celebrated by physicians and food lovers alike, the Mediterranean diet emphasizes extra virgin olive oil as the primary fat source, alongside plentiful leafy greens, wild seafood, whole grains, and garlic.",
    ],
  },
  {
    id: 11,
    title: "Healthy Eating for Beginners: A Step-by-Step Guide",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80",
    category: "Healthy",
    tags: ["Healthy Eating", "Lifestyle", "Kid foods", "Healthy"],
    author: "Jane Doe",
    authorRole: "Family Wellness Guide",
    comments: 100,
    publishDate: "2 Nov 2024",
    readTime: "5 min read",
    desc: "Simple, sustainable nutritional foundations that build long-term wellness without restrictive crash diets.",
    content: [
      "Start small by replacing sugary beverages with herbal teas and sparkling water, and fill half your plate at dinner with colorful roasted or fresh vegetables.",
    ],
  },
  {
    id: 12,
    title: "Top 5 Myths About Nutrition Debunked by Science",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80",
    category: "Beauty & Health",
    tags: ["Nutrition", "Myths", "Health", "Low fat"],
    author: "Admin",
    authorRole: "Ecobazar Research Desk",
    comments: 71,
    publishDate: "30 Oct 2024",
    readTime: "6 min read",
    desc: "We look at scientific evidence surrounding dietary fat, late-night eating, detox cleanses, and carbohydrate consumption.",
    content: [
      "From fearing wholesome dietary fats like avocados and nuts to believing extreme juice cleanses detoxify organs, we separate modern nutrition facts from marketing fads.",
    ],
  },
  {
    id: 13,
    title: "The Importance of Wholesome Breakfast for Energy",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
    category: "Bread & Bakery",
    tags: ["Breakfast", "Energy", "Bread", "Healthy"],
    author: "Laura Green",
    authorRole: "Holistic Health Coach",
    comments: 44,
    publishDate: "28 Oct 2024",
    readTime: "4 min read",
    desc: "How a morning combination of complex carbohydrates and clean protein establishes mental focus and steady metabolic rate.",
    content: [
      "A balanced morning meal replenishes glycogen stores after an overnight fast and stabilizes hormones that control appetite throughout the rest of the day.",
    ],
  },
  {
    id: 14,
    title: "The Best Protein Sources for Vegetarians and Vegans",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    category: "Vegetables",
    tags: ["Protein", "Vegetarian", "Vegan", "Launch"],
    author: "Mike Turner",
    authorRole: "Sports Nutritionist",
    comments: 53,
    publishDate: "25 Oct 2024",
    readTime: "5 min read",
    desc: "Complete your amino acid requirements effortlessly with tempeh, organic tofu, lentils, hemp hearts, and quinoa.",
    content: [
      "Getting adequate protein on a vegetarian diet is straightforward with versatile whole foods like edamame, organic non-GMO tofu, chickpeas, and ancient grain bowls.",
    ],
  },
  {
    id: 15,
    title: "How to Overcome Emotional Eating with Mindful Habits",
    image:
      "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=1000&q=80",
    category: "Beauty & Health",
    tags: ["Emotional Eating", "Mental Health", "Wellness"],
    author: "Sarah Jones",
    authorRole: "Behavioral Psychologist",
    comments: 61,
    publishDate: "22 Oct 2024",
    readTime: "6 min read",
    desc: "Understanding biological hunger cues versus emotional cravings and building healthier coping rituals.",
    content: [
      "Mindful eating invites you to pause before reaching for comfort snacks, creating space to understand true physical cues and nourish emotional needs constructively.",
    ],
  },
  {
    id: 16,
    title: "Balancing Carbs and Proteins for Optimal Daily Health",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80",
    category: "Cooking",
    tags: ["Carbs", "Proteins", "Meat", "Dinner"],
    author: "James Carter",
    authorRole: "Strength & Conditioning Coach",
    comments: 36,
    publishDate: "19 Oct 2024",
    readTime: "5 min read",
    desc: "Optimize physical recovery, cognitive stamina, and muscle repair through intelligent macronutrient pairing.",
    content: [
      "Carbohydrates are our primary fuel, while proteins provide building blocks for cell repair. Pairing both together tempers glycemic impact and fosters continuous energy.",
    ],
  },
  {
    id: 17,
    title: "How to Read a Nutrition Facts Label Like a Pro",
    image:
      "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=1000&q=80",
    category: "Healthy",
    tags: ["Nutrition", "Labels", "Healthy", "Food"],
    author: "Admin",
    authorRole: "Ecobazar Editorial Team",
    comments: 87,
    publishDate: "16 Oct 2024",
    readTime: "4 min read",
    desc: "Key metrics on percent daily values (%DV), sodium levels, and hidden chemical preservatives.",
    content: [
      "Understanding %DV (Daily Value) allows quick assessment: 5% DV or less is low, while 20% DV or more is high. Use this to spot excessive sodium or added sweeteners.",
    ],
  },
  {
    id: 18,
    title: "Healthy Snack Ideas for Busy Work and School Days",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    category: "Snacks",
    tags: ["Snacks", "Healthy Eating", "Kid foods", "Tiffin"],
    author: "Emily White",
    authorRole: "Parent & Food Blogger",
    comments: 59,
    publishDate: "12 Oct 2024",
    readTime: "4 min read",
    desc: "Portable, mess-free, and wholesome snack combinations that kids and adults will genuinely love.",
    content: [
      "Prep snack bento boxes filled with cherry tomatoes, baby carrots, hummus dip, cubed cheddar, and mixed roasted nuts for satisfying on-the-go nourishment.",
    ],
  },
  {
    id: 19,
    title: "Anti-Inflammatory Foods That Help Your Body Heal",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    category: "Beauty & Health",
    tags: ["Anti-inflammatory", "Diet", "Vitamins", "Healthy"],
    author: "Admin",
    authorRole: "Ecobazar Health Team",
    comments: 46,
    publishDate: "10 Oct 2024",
    readTime: "5 min read",
    desc: "Harness the natural power of dark berries, extra virgin olive oil, green tea, and leafy greens to soothe systemic inflammation.",
    content: [
      "Chronic low-grade inflammation is linked to numerous lifestyle ailments. Consuming antioxidant-rich whole foods provides natural bioflavonoids that protect cellular pathways.",
    ],
  },
  {
    id: 20,
    title: "The Importance of Portion Control for Lasting Wellness",
    image:
      "https://images.unsplash.com/photo-1546069901-d579c0584551?auto=format&fit=crop&w=1000&q=80",
    category: "Healthy",
    tags: ["Portion Control", "Weight Management", "Low fat"],
    author: "Anna Brown",
    authorRole: "Certified Nutritionist",
    comments: 78,
    publishDate: "7 Oct 2024",
    readTime: "4 min read",
    desc: "Intuitive strategies for recognizing genuine fullness, using smaller plates, and enjoying your favorite meals in moderation.",
    content: [
      "Portion control is not about restriction; it is about learning to appreciate flavors, eating without distraction, and honoring your body's natural satiety signals.",
    ],
  },
];
