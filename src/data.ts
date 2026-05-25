import { Product, FlavorComponent, ShopItem, TimelineEvent } from './types';

export const products: Product[] = [
  {
    id: 'dp-classic',
    name: 'Dr Pepper Classic',
    tagline: 'The Authentic 23 Flavors Craft',
    category: 'classic',
    description: 'The recipe that started it all in 1885. A unique blend of 23 secret fruit, herb, spice, and wood extracts. Rich, bold, and delightfully complex.',
    calories: 150,
    sugar: '40g',
    canColor: 'bg-gradient-to-b from-[#711324] to-[#45030d]',
    accentColor: '#711324',
    textColor: 'text-white',
    flavorsHighlighted: ['Amaretto', 'Cherry', 'Blackberry', 'Vanilla', 'Anise', 'Sarsaparilla'],
    bannerText: 'Est. Waco, TX, 1885',
    nutrition: {
      sodium: '55mg',
      carbs: '40g',
      protein: '0g'
    }
  },
  {
    id: 'dp-cherry',
    name: 'Dr Pepper Cherry',
    tagline: 'Extra Smooth, Extra Bold',
    category: 'classic',
    description: 'Our legendary 23-flavor blend kissed with a deeper, richer note of smooth sweet black cherry. An elevated classic for the true aficionado.',
    calories: 160,
    sugar: '42g',
    canColor: 'bg-gradient-to-b from-[#8C001A] to-[#3B0007]',
    accentColor: '#8C001A',
    textColor: 'text-white',
    flavorsHighlighted: ['Deep Cherry', 'Almond', 'Plum', 'Brown Sugar', 'Clove'],
    bannerText: 'Extra Smooth Finish',
    nutrition: {
      sodium: '55mg',
      carbs: '43g',
      protein: '0g'
    }
  },
  {
    id: 'dp-diet',
    name: 'Diet Dr Pepper',
    tagline: 'All the Flavors, Zero Worries',
    category: 'diet-zero',
    description: 'Why compromise? Savour the full, mind-boggling complexity of our legendary 23 secret flavors with absolutely zero calories and zero sugar.',
    calories: 0,
    sugar: '0g',
    canColor: 'bg-gradient-to-b from-[#F2F1EA] via-[#DDD9CE] to-[#A09B8E]',
    accentColor: '#8E172C',
    textColor: 'text-[#4A0E17]',
    flavorsHighlighted: ['Licorice', 'Ginger', 'Cardamom', 'Malt', 'Lemon'],
    bannerText: 'No Calories, Full Flavor',
    nutrition: {
      sodium: '100mg',
      carbs: '0g',
      protein: '0g'
    }
  },
  {
    id: 'dp-zero-sugar',
    name: 'Dr Pepper Zero Sugar',
    tagline: 'Taste it to Believe it',
    category: 'diet-zero',
    description: 'Specially engineered to deliver the identical, robust full-bodied sweetness profile of original Dr Pepper, but with absolutely zero sugars.',
    calories: 0,
    sugar: '0g',
    canColor: 'bg-gradient-to-b from-[#1A1A1A] via-[#333333] to-[#121212]',
    accentColor: '#C8102E',
    textColor: 'text-white',
    flavorsHighlighted: ['Vanilla', 'Cinnamon', 'Birch', 'Prune', 'Orange'],
    bannerText: 'The Zero Sugar Revolution',
    nutrition: {
      sodium: '100mg',
      carbs: '0g',
      protein: '0g'
    }
  },
  {
    id: 'dp-creamy-coconut',
    name: 'Creamy Coconut (Limited)',
    tagline: 'A Tropical Dr Pepper Escape',
    category: 'drops',
    description: 'The sensation of the summer! Our classic 23-flavor recipe collides with layers of velvety rich toasted coconut cream. A sublime, dreamy vacation in a can.',
    calories: 150,
    sugar: '39g',
    canColor: 'bg-gradient-to-b from-[#0F4A61] via-[#2F88A3] to-[#124254]',
    accentColor: '#0F4A61',
    textColor: 'text-white',
    flavorsHighlighted: ['Toasted Coconut', 'Vanilla Pod', 'Caramel', 'Nutmeg', 'Fig'],
    bannerText: 'Limited Summer Season Drop',
    nutrition: {
      sodium: '50mg',
      carbs: '39g',
      protein: '0g'
    }
  },
  {
    id: 'dp-strawberries-cream',
    name: 'Strawberries & Cream',
    tagline: 'Sweeter Moments Await',
    category: 'drops',
    description: 'An elegant addition to the permanent roster. Ripe, succulent strawberry notes blended with rich, silky sweet cream, dancing over our signature carbonated recipe.',
    calories: 140,
    sugar: '37g',
    canColor: 'bg-gradient-to-b from-[#D23D51] via-[#E88E99] to-[#8C1B2A]',
    accentColor: '#D23D51',
    textColor: 'text-white',
    flavorsHighlighted: ['Strawberry', 'Sweet Cream', 'Marshmallow', 'Wintergreen'],
    bannerText: 'Creamy Smooth Delight',
    nutrition: {
      sodium: '55mg',
      carbs: '38g',
      protein: '0g'
    }
  }
];

export const flavorList: FlavorComponent[] = [
  { id: 1, name: 'Amaretto', intensity: 'High', note: 'Rich, sweet, and faintly bitter almond extract', emoji: '🌰', color: 'from-[#6E4226] to-[#422212]' },
  { id: 2, name: 'Cherry', intensity: 'High', note: 'Bold, tart, and deeply fruity stone fruit essence', emoji: '🍒', color: 'from-[#BC0E2D] to-[#6A0413]' },
  { id: 3, name: 'Vanilla', intensity: 'High', note: 'Creamy, warm, orchid-pod background roundness', emoji: '🍦', color: 'from-[#F3E5AB] to-[#D4B26F]' },
  { id: 4, name: 'Cinnamon', intensity: 'Medium', note: 'Prickly, energetic, comforting bakery spice', emoji: '🪵', color: 'from-[#A0522D] to-[#5C2E16]' },
  { id: 5, name: 'Sarsaparilla', intensity: 'Medium', note: 'Old-school earthy root-beer style undertone', emoji: '🌿', color: 'from-[#3A5F0B] to-[#1E3304]' },
  { id: 6, name: 'Plum', intensity: 'Subtle', note: 'Deep, dark dark fruit chewiness with dynamic acidity', emoji: '🫐', color: 'from-[#4D1C52] to-[#2B0F2F]' },
  { id: 7, name: 'Licorice', intensity: 'Medium', note: 'Sweet, herbal, aromatic aniseed-like depth', emoji: '🍬', color: 'from-[#1C1C1C] to-[#0A0A0A]' },
  { id: 8, name: 'Almond', intensity: 'Medium', note: 'Toasty, nutty richness providing solid base warmth', emoji: '🥜', color: 'from-[#D2B48C] to-[#8A6638]' },
  { id: 9, name: 'Prune', intensity: 'High', note: 'Classic caramelised dry-fruit sweetness and syrup weight', emoji: '🍇', color: 'from-[#190C1E] to-[#050106]' },
  { id: 10, name: 'Caramel', intensity: 'High', note: 'Burnt sugar richness that rounds out acidic elements', emoji: '🍯', color: 'from-[#B35C1E] to-[#71330A]' },
  { id: 11, name: 'Orange', intensity: 'Subtle', note: 'Zesty, bright citrus highlights from natural peel oils', emoji: '🍊', color: 'from-[#FF7F50] to-[#CC4E1F]' },
  { id: 12, name: 'Lemon', intensity: 'Subtle', note: 'Vibrant citric acid cut that balances syrup sweetness', emoji: '🍋', color: 'from-[#FFD700] to-[#E6B800]' },
  { id: 13, name: 'Clove', intensity: 'Subtle', note: 'Warm, intense, highly fragrant oil extract', emoji: '🌱', color: 'from-[#805D3F] to-[#422D1D]' },
  { id: 14, name: 'Nutmeg', intensity: 'Subtle', note: 'Spicy, nutty, woody, very aromatic backing flavor', emoji: '🌰', color: 'from-[#DEB887] to-[#8B5A2B]' },
  { id: 15, name: 'Cardamom', intensity: 'Subtle', note: 'Earthy, piney, complex citrus spice notes', emoji: '🪴', color: 'from-[#7F8D67] to-[#4E5B37]' },
  { id: 16, name: 'Anise', intensity: 'Medium', note: 'Sharp candy-herbal anise aromatics', emoji: '⭐', color: 'from-[#BC8F8F] to-[#5F3D3D]' },
  { id: 17, name: 'Coriander', intensity: 'Subtle', note: 'Peppery, slightly floral, and sweet seed extract', emoji: '🌾', color: 'from-[#CD853F] to-[#8B5A2B]' },
  { id: 18, name: 'Ginger', intensity: 'Medium', note: 'Zesty, electric, tongue-tingling ginger warmth', emoji: '🫚', color: 'from-[#E4C988] to-[#917B49]' },
  { id: 19, name: 'Blackberry', intensity: 'Medium', note: 'Jammy dark forest berry accents with pleasant bite', emoji: '🫐', color: 'from-[#301934] to-[#120414]' },
  { id: 20, name: 'Allspice', intensity: 'Medium', note: 'Combination of cinnamon, nutmeg, and cloves profiles', emoji: '🍂', color: 'from-[#A0522D] to-[#5E321C]' },
  { id: 21, name: 'Molasses', intensity: 'High', note: 'Heavy, earthy, iron-rich cane sugar syrup', emoji: '🪵', color: 'from-[#2A1E17] to-[#100B08]' },
  { id: 22, name: 'Birch Bark', intensity: 'Subtle', note: 'Minty, root-like freshness from sweet birch wood', emoji: '🪵', color: 'from-[#8F9489] to-[#464A41]' },
  { id: 23, name: 'Pepper Root', intensity: 'Subtle', note: 'Unique signature herbal spicy kick that defines "The Pepper"', emoji: '🌶️', color: 'from-[#8B0000] to-[#400000]' }
];

export const shopItems: ShopItem[] = [
  {
    id: 'shop-jacket',
    name: "Dr Pepper '85 Varsity Jacket",
    category: 'apparel',
    price: 89.99,
    rating: 4.9,
    image: '🧥',
    description: 'Wool body, vegan leather sleeves, custom 1885 back embroidery and 23-flavor patches. Keep it warm and retro.',
    isNew: true
  },
  {
    id: 'shop-hoodie',
    name: 'Waco Heritage Heavyweight Hoodie',
    category: 'apparel',
    price: 54.99,
    rating: 4.8,
    image: '🧥',
    description: 'Thick custom waffle-weave knit in rich brand burgundy. Features the beautiful original cursive Waco logo.',
    isNew: false
  },
  {
    id: 'shop-cap',
    name: 'Vintage Distressed Corduroy Cap',
    category: 'apparel',
    price: 24.99,
    rating: 4.7,
    image: '🧢',
    description: 'Ultra-comfy pre-washed corduroy cap with stitched historic 10-2-4 clock logo. Adjustable brass clasp.',
    isNew: false
  },
  {
    id: 'shop-sign',
    name: 'Classic Embossed Metal Sign',
    category: 'vintage',
    price: 19.99,
    rating: 4.9,
    image: '🖼️',
    description: 'Heavy duty, rust-finish retro steel sign with "Drink a Bite to Eat at 10, 2 and 4" motif.',
    isNew: true
  },
  {
    id: 'shop-clock',
    name: 'Original 10-2-4 Neon Wall Clock',
    category: 'vintage',
    price: 119.99,
    rating: 5.0,
    image: '⏰',
    description: 'Real hand-blown neon crimson tube ring surrounding the vintage 1930s clock facade. Absolute gaming room centerpiece.',
    isNew: true
  },
  {
    id: 'shop-pool',
    name: 'Creamy Coconut Giant Pool Float',
    category: 'novelty',
    price: 34.99,
    rating: 4.6,
    image: '🏖️',
    description: 'Celebrate the summer drop in style! Over-sized premium vinyl inflatable Dr Pepper can with built-in coconut cup holders.',
    isNew: true
  },
  {
    id: 'shop-sauce',
    name: 'Pepper-Infused Bold BBQ Glaze',
    category: 'novelty',
    price: 9.99,
    rating: 4.8,
    image: '🌶️',
    description: 'The sweet of cherry, the fire of spices, and our unique carbonated reduction. A match made in rib heaven.',
    isNew: false
  },
  {
    id: 'shop-socks',
    name: 'Retro 23 Flavors Crew Socks',
    category: 'seasonal',
    price: 12.99,
    rating: 4.5,
    image: '🧦',
    description: 'High elasticity compression socks patterned with small retro soda cans and bright cherry logos. Cozy fit.',
    isNew: false
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '1885',
    title: 'An Original is Born',
    description: 'Crafted in Waco, Texas by pharmacist Charles Alderton at Morrison\'s Old Corner Drug Store. Pre-dates Coca-Cola by one year!',
    iconType: 'history'
  },
  {
    year: '1904',
    title: 'World Fair Exhibition',
    description: 'Dr Pepper is introduced to almost 20 million visitors at the legendary St. Louis World\'s Fair, instantly becoming a national fascination.',
    iconType: 'rocket'
  },
  {
    year: '1920s',
    title: 'The Great 10-2-4 Study',
    description: 'Medical research reveals that blood sugar drops drastically at 10 AM, 2 PM, and 4 PM. Dr Pepper launches the iconic slogan "Drink a bite to eat at 10, 2, and 4!"',
    iconType: 'crown'
  },
  {
    year: '2008',
    title: 'Keurig Dr Pepper Forming',
    description: 'Spanning across North America with an incredible beverage footprint, committing to massive sustainability initiatives, and corporate progress.',
    iconType: 'globe'
  },
  {
    year: 'Today',
    title: 'The 23 Flavors Hub & Forever Fans',
    description: 'Spanning gaming partnerships, iconic college football tuition programs, and limited-edition fan integrations like Creamy Coconut!',
    iconType: 'history'
  }
];
