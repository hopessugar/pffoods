import { useState } from 'react';
import { Header, Hero, About, Contact, TrustedPartner } from './components';
import GoogleReviews from './components/GoogleReviews/GoogleReviews';
import JustDial from './components/JustDial/JustDial';
import './App.css';

// COMPLETE PRODUCT DATA - ALL CATEGORIES
const PRODUCTS = [
  // FROZEN VEGETABLES
  {
    id: 'frozen-1',
    name: 'Green Peas',
    description: 'Premium quality frozen green peas',
    image: '/images/frozen-vegetables/green peas.jpeg',
    category: 'frozen-vegetables',
    price: '₹120',
    quantity: '1 kg'
  },
  {
    id: 'frozen-2',
    name: 'Mixed Vegetables',
    description: 'Premium frozen mixed vegetables',
    image: '/images/frozen-vegetables/mix vegetables.jpeg',
    category: 'frozen-vegetables',
    price: '₹150',
    quantity: '1 kg'
  },
  {
    id: 'frozen-3',
    name: 'Sweet Corn',
    description: 'Fresh frozen sweet corn kernels',
    image: '/images/frozen-vegetables/sweet corn.jpeg',
    category: 'frozen-vegetables',
    price: '₹180',
    quantity: '1 kg'
  },

  // FRESH EXOTIC VEGETABLES
  {
    id: 'fresh-1',
    name: 'Asparagus',
    description: 'Fresh premium asparagus spears',
    image: '/images/fresh-exotic-vegetables/Asparagus.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹300',
    quantity: '500g'
  },
  {
    id: 'fresh-2',
    name: 'Avocado',
    description: 'Fresh ripe avocados',
    image: '/images/fresh-exotic-vegetables/Avacado.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹200',
    quantity: '2 pieces'
  },
  {
    id: 'fresh-3',
    name: 'Baby Corn',
    description: 'Fresh tender baby corn',
    image: '/images/fresh-exotic-vegetables/Baby corn.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹150',
    quantity: '500g'
  },
  {
    id: 'fresh-4',
    name: 'Basil',
    description: 'Fresh aromatic basil leaves',
    image: '/images/fresh-exotic-vegetables/Basil.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹80',
    quantity: '100g'
  },
  {
    id: 'fresh-5',
    name: 'Broccoli',
    description: 'Fresh green broccoli florets',
    image: '/images/fresh-exotic-vegetables/Broccoli.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹120',
    quantity: '500g'
  },
  {
    id: 'fresh-6',
    name: 'Celery Leaves',
    description: 'Fresh celery leaves',
    image: '/images/fresh-exotic-vegetables/Celery Patta.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹60',
    quantity: '100g'
  },
  {
    id: 'fresh-7',
    name: 'Cherry Tomato',
    description: 'Sweet and juicy cherry tomatoes',
    image: '/images/fresh-exotic-vegetables/Cherry tomato.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹100',
    quantity: '250g'
  },
  {
    id: 'fresh-8',
    name: 'Chinese Cabbage',
    description: 'Fresh Chinese cabbage',
    image: '/images/fresh-exotic-vegetables/Chinese Cabbage.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹80',
    quantity: '1 piece'
  },
  {
    id: 'fresh-9',
    name: 'Gherkins',
    description: 'Fresh small gherkins',
    image: '/images/fresh-exotic-vegetables/Gerkins.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹120',
    quantity: '250g'
  },
  {
    id: 'fresh-10',
    name: 'Green Zucchini',
    description: 'Fresh green zucchini',
    image: '/images/fresh-exotic-vegetables/Green Zuccini.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹100',
    quantity: '500g'
  },
  {
    id: 'fresh-11',
    name: 'Iceberg Lettuce',
    description: 'Fresh crisp iceberg lettuce',
    image: '/images/fresh-exotic-vegetables/Ice Burg Lettuce.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹80',
    quantity: '1 piece'
  },
  {
    id: 'fresh-12',
    name: 'Lemon Grass',
    description: 'Fresh lemon grass stalks',
    image: '/images/fresh-exotic-vegetables/Lemon Grass.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹50',
    quantity: '100g'
  },
  {
    id: 'fresh-13',
    name: 'Mushrooms',
    description: 'Fresh button mushrooms',
    image: '/images/fresh-exotic-vegetables/Mushrooms.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹150',
    quantity: '250g'
  },
  {
    id: 'fresh-14',
    name: 'Parsley',
    description: 'Fresh parsley leaves',
    image: '/images/fresh-exotic-vegetables/parsely.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹60',
    quantity: '100g'
  },
  {
    id: 'fresh-15',
    name: 'Red Cabbage',
    description: 'Fresh red cabbage',
    image: '/images/fresh-exotic-vegetables/Red cabbage.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹90',
    quantity: '1 piece'
  },
  {
    id: 'fresh-16',
    name: 'Red Capsicum',
    description: 'Fresh red bell peppers',
    image: '/images/fresh-exotic-vegetables/red capsicum.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹120',
    quantity: '250g'
  },
  {
    id: 'fresh-17',
    name: 'Yellow Capsicum',
    description: 'Fresh yellow bell peppers',
    image: '/images/fresh-exotic-vegetables/yellow capsicum.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹120',
    quantity: '250g'
  },
  {
    id: 'fresh-18',
    name: 'Yellow Zucchini',
    description: 'Fresh yellow zucchini',
    image: '/images/fresh-exotic-vegetables/Yellow Zuccini.jpeg',
    category: 'fresh-exotic-vegetables',
    price: '₹100',
    quantity: '500g'
  },

  // READY TO EAT FROZEN FOODS
  {
    id: 'ready-1',
    name: 'Aloo Bonda',
    description: 'Crispy potato fritters',
    image: '/images/ready-to-eat-frozen-foods/aloo bonda.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹180',
    quantity: '500g'
  },
  {
    id: 'ready-2',
    name: 'Beetroot Kebab',
    description: 'Healthy beetroot kebabs',
    image: '/images/ready-to-eat-frozen-foods/beetroot kebab.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹200',
    quantity: '500g'
  },
  {
    id: 'ready-3',
    name: 'Cheese Cigar Rolls',
    description: 'Crispy cheese-filled rolls',
    image: '/images/ready-to-eat-frozen-foods/cheese cigar rolls.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹250',
    quantity: '500g'
  },
  {
    id: 'ready-4',
    name: 'Cheese Corn Nuggets',
    description: 'Delicious cheese and corn nuggets',
    image: '/images/ready-to-eat-frozen-foods/cheese corn nuggets.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹220',
    quantity: '500g'
  },
  {
    id: 'ready-5',
    name: 'Daal Kachori',
    description: 'Traditional lentil-filled kachoris',
    image: '/images/ready-to-eat-frozen-foods/daal kachori.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹180',
    quantity: '500g'
  },
  {
    id: 'ready-6',
    name: 'Hara Bhara Kebab',
    description: 'Green vegetable kebabs',
    image: '/images/ready-to-eat-frozen-foods/hara bhara kebab.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹200',
    quantity: '500g'
  },
  {
    id: 'ready-7',
    name: 'Jalapeno Pockets',
    description: 'Spicy jalapeno-filled pockets',
    image: '/images/ready-to-eat-frozen-foods/jalepeno pockets.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹240',
    quantity: '500g'
  },
  {
    id: 'ready-8',
    name: 'Masala Triangles',
    description: 'Spiced triangular snacks',
    image: '/images/ready-to-eat-frozen-foods/masala triangles.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹200',
    quantity: '500g'
  },
  {
    id: 'ready-9',
    name: 'Pizza Pockets',
    description: 'Pizza-flavored pockets',
    image: '/images/ready-to-eat-frozen-foods/pizza pockets.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹250',
    quantity: '500g'
  },
  {
    id: 'ready-10',
    name: 'Pizza Triangles',
    description: 'Triangular pizza bites',
    image: '/images/ready-to-eat-frozen-foods/pizza triangles.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹230',
    quantity: '500g'
  },
  {
    id: 'ready-11',
    name: 'Punjabi Samosa',
    description: 'Traditional Punjabi samosas',
    image: '/images/ready-to-eat-frozen-foods/Punjabi samosa.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹180',
    quantity: '500g'
  },
  {
    id: 'ready-12',
    name: 'Spring Rolls',
    description: 'Crispy vegetable spring rolls',
    image: '/images/ready-to-eat-frozen-foods/spring rolls.jpeg',
    category: 'ready-to-eat-frozen-foods',
    price: '₹200',
    quantity: '500g'
  },

  // MCCAIN PRODUCTS
  {
    id: 'mccain-1',
    name: 'Aloo Tikki',
    description: 'McCain Aloo Tikki',
    image: '/images/mccain/Aloo Tikki.jpeg',
    category: 'mccain',
    price: '₹225',
    quantity: '1.5 kg'
  },
  {
    id: 'mccain-2',
    name: 'Cheese Triangles',
    description: 'McCain Cheese Triangles',
    image: '/images/mccain/cheese triangles.jpeg',
    category: 'mccain',
    price: '₹700',
    quantity: '2.16 kg'
  },
  {
    id: 'mccain-3',
    name: 'Chilli Garlic Potato Pops',
    description: 'McCain Chilli Garlic Potato Pops',
    image: '/images/mccain/chilli garlic potato pops.jpeg',
    category: 'mccain',
    price: '₹295',
    quantity: '1.5 kg'
  },
  {
    id: 'mccain-4',
    name: 'Crinkle Fries',
    description: 'McCain Crinkle Fries',
    image: '/images/mccain/crinkle fries.jpeg',
    category: 'mccain',
    price: '₹380',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-5',
    name: 'CrispsONs',
    description: 'McCain CrispsONs',
    image: '/images/mccain/CrispsONs.jpeg',
    category: 'mccain',
    price: '₹275',
    quantity: '1 kg'
  },
  {
    id: 'mccain-6',
    name: 'Favorita French Fries 6mm',
    description: 'McCain Favorita French Fries 6mm',
    image: '/images/mccain/favorita french fries 6mm.jpeg',
    category: 'mccain',
    price: '₹230',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-7',
    name: 'Favorita French Fries 9mm',
    description: 'McCain Favorita French Fries 9mm',
    image: '/images/mccain/favorita french fries 9mm.jpeg',
    category: 'mccain',
    price: '₹230',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-8',
    name: 'French Fries Regular 11mm',
    description: 'McCain French Fries Regular 11mm',
    image: '/images/mccain/french-fries-regular-11mm.jpeg',
    category: 'mccain',
    price: '₹250',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-9',
    name: 'French Fries Regular 6mm',
    description: 'McCain French Fries Regular 6mm',
    image: '/images/mccain/French fries regular 6mm.jpeg',
    category: 'mccain',
    price: '₹250',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-10',
    name: 'French Fries Regular 9mm',
    description: 'McCain French Fries Regular 9mm',
    image: '/images/mccain/french fries regular 9mm.jpeg',
    category: 'mccain',
    price: '₹250',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-11',
    name: 'Herb Chilli Potato Patty',
    description: 'McCain Herb Chilli Potato Patty',
    image: '/images/mccain/herb-chilli-potato-patty.jpeg',
    category: 'mccain',
    price: '₹225',
    quantity: '1.5 kg'
  },
  {
    id: 'mccain-12',
    name: 'Masala Fries',
    description: 'McCain Masala Fries',
    image: '/images/mccain/masala fries.jpeg',
    category: 'mccain',
    price: '₹310',
    quantity: '1.5 kg'
  },
  {
    id: 'mccain-13',
    name: 'Paneer Patty',
    description: 'McCain Paneer Patty',
    image: '/images/mccain/paneer patty.jpeg',
    category: 'mccain',
    price: '₹520',
    quantity: '1.05 kg'
  },
  {
    id: 'mccain-14',
    name: 'Popular Vege Burger Patty',
    description: 'McCain Popular Vege Burger Patty',
    image: '/images/mccain/Popular vege burger patty.jpeg',
    category: 'mccain',
    price: '₹210',
    quantity: '1.2 kg'
  },
  {
    id: 'mccain-15',
    name: 'Potato Cheese Shotz',
    description: 'McCain Potato Cheese Shotz',
    image: '/images/mccain/potato-cheese-shotz.jpeg',
    category: 'mccain',
    price: '₹420',
    quantity: '1 kg'
  },
  {
    id: 'mccain-16',
    name: 'Rosti Rounds',
    description: 'McCain Rosti Rounds',
    image: '/images/mccain/rosti rounds.jpeg',
    category: 'mccain',
    price: '₹235',
    quantity: '1.5 kg'
  },
  {
    id: 'mccain-17',
    name: 'Savoury Wedges',
    description: 'McCain Savoury Wedges',
    image: '/images/mccain/savoury wedges.jpeg',
    category: 'mccain',
    price: '₹430',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-18',
    name: 'Spiced Paneer Patty',
    description: 'McCain Spiced Paneer Patty',
    image: '/images/mccain/spiced paneer patty.jpeg',
    category: 'mccain',
    price: '₹350',
    quantity: '1 kg'
  },
  {
    id: 'mccain-19',
    name: 'Super Vege Burger Patty',
    description: 'McCain Super Vege Burger Patty',
    image: '/images/mccain/super vege burger patty.jpeg',
    category: 'mccain',
    price: '₹215',
    quantity: '1.2 kg'
  },
  {
    id: 'mccain-20',
    name: 'SureCrisp Coated Fries 11mm',
    description: 'McCain SureCrisp Coated Fries 11mm',
    image: '/images/mccain/surecrisp 11mm coated fries.jpeg',
    category: 'mccain',
    price: '₹450',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-21',
    name: 'SureCrisp Coated Fries 6mm',
    description: 'McCain SureCrisp Coated Fries 6mm',
    image: '/images/mccain/surecrisp 6mm coated fries.jpeg',
    category: 'mccain',
    price: '₹450',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-22',
    name: 'SureCrisp Coated Fries 9mm',
    description: 'McCain SureCrisp Coated Fries 9mm',
    image: '/images/mccain/surecrisp 9mm coated fries.jpeg',
    category: 'mccain',
    price: '₹450',
    quantity: '2.5 kg'
  },
  {
    id: 'mccain-23',
    name: 'V Crispers',
    description: 'McCain V Crispers',
    image: '/images/mccain/V Crispers.jpeg',
    category: 'mccain',
    price: '₹465',
    quantity: '2 kg'
  },
  {
    id: 'mccain-24',
    name: 'Veggie Fingers',
    description: 'McCain Veggie Fingers',
    image: '/images/mccain/veggie fingers.jpeg',
    category: 'mccain',
    price: '₹240',
    quantity: '1 kg'
  },
  {
    id: 'mccain-25',
    name: 'Veggie Nuggets',
    description: 'McCain Veggie Nuggets',
    image: '/images/mccain/veggie nuggets.jpeg',
    category: 'mccain',
    price: '₹250',
    quantity: '1 kg'
  },

  // MONK FOODS
  {
    id: 'monk-1',
    name: 'Chilli Flakes Sprinkler',
    description: 'Premium chilli flakes in convenient sprinkler bottle',
    image: '/images/monk-foods/Chilli flakes sprinkler.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-2',
    name: 'Chocolate Shake Premix',
    description: 'Rich chocolate shake premix for instant beverages',
    image: '/images/monk-foods/choclate shake premix.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-3',
    name: 'Coffee Frappe Premix',
    description: 'Premium coffee frappe premix for cafe-style drinks',
    image: '/images/monk-foods/coffee frappe premix.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-4',
    name: 'Dark Chocolate Spread',
    description: 'Rich and creamy dark chocolate spread',
    image: '/images/monk-foods/dark choclate spread.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-5',
    name: 'Fiery Peri Peri',
    description: 'Spicy peri peri seasoning blend',
    image: '/images/monk-foods/fiery peri peri.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-6',
    name: 'Hazelnut Chocolate Spread',
    description: 'Smooth hazelnut chocolate spread',
    image: '/images/monk-foods/hazelnut choclate spread.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-7',
    name: 'Milk Chocolate Spread',
    description: 'Creamy milk chocolate spread',
    image: '/images/monk-foods/milk choclate spread.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-8',
    name: 'Pizza Oregano Sprinkler',
    description: 'Premium oregano in convenient sprinkler bottle',
    image: '/images/monk-foods/pizza oregano sprinkler.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-9',
    name: 'Pizza Spice Mix Oregano Sprinkler',
    description: 'Special pizza spice mix with oregano',
    image: '/images/monk-foods/pizza spice mix oregano sprinkler.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-10',
    name: 'Strawberry Shake Premix',
    description: 'Delicious strawberry shake premix',
    image: '/images/monk-foods/strwberry shake premix.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-11',
    name: 'Umami Pro - Taste Enhancer',
    description: 'Professional taste enhancer for enhanced flavors',
    image: '/images/monk-foods/umani pro - taste enhancer.jpeg',
    category: 'monk-foods'
  },
  {
    id: 'monk-12',
    name: 'Vanilla Frappe Premix',
    description: 'Smooth vanilla frappe premix for beverages',
    image: '/images/monk-foods/vanilla frappe premix.jpeg',
    category: 'monk-foods'
  },

  // GOLDEN CROWN
  {
    id: 'golden-1',
    name: 'Fruit Cocktail',
    description: 'Premium mixed fruit cocktail in syrup',
    image: '/images/golden-crown/fruit cocktail.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-2',
    name: 'Jalapeno Slice',
    description: 'Sliced jalapenos for spicy dishes',
    image: '/images/golden-crown/jalapeno slice.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-3',
    name: 'Panko - Japanese Style Bread Crumbs',
    description: 'Authentic Japanese style panko bread crumbs',
    image: '/images/golden-crown/panko - japanese style bread crumbs.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-4',
    name: 'Pineapple Slice',
    description: 'Sweet pineapple slices in natural juice',
    image: '/images/golden-crown/pineapple slice.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-5',
    name: 'Red Cherry',
    description: 'Premium red cherries for desserts and garnishing',
    image: '/images/golden-crown/red cherry.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-6',
    name: 'Sliced Red Paprika',
    description: 'Fresh sliced red paprika for cooking',
    image: '/images/golden-crown/sliced red paprika.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-7',
    name: 'Sweet Corn Cream Style',
    description: 'Creamy style sweet corn for soups and dishes',
    image: '/images/golden-crown/sweet corn cream style.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-8',
    name: 'Tomato Puree',
    description: 'Rich and thick tomato puree for cooking',
    image: '/images/golden-crown/tomato puree.jpeg',
    category: 'golden-crown'
  },
  {
    id: 'golden-9',
    name: 'Veg Soya Chaap',
    description: 'Vegetarian soya chaap for protein-rich meals',
    image: '/images/golden-crown/veg soya chaap.jpeg',
    category: 'golden-crown'
  },

  // LEE KUM KEE
  {
    id: 'lee-1',
    name: 'Dark Soya Sauce',
    description: 'Premium dark soya sauce for authentic Asian cooking',
    image: '/images/lee-kum-kee/dark soya sauce.jpeg',
    category: 'lee-kum-kee'
  },
  {
    id: 'lee-2',
    name: 'Hoisin Sauce',
    description: 'Traditional Chinese hoisin sauce',
    image: '/images/lee-kum-kee/hoisin sauce.jpeg',
    category: 'lee-kum-kee'
  },
  {
    id: 'lee-3',
    name: 'Light Soya Sauce',
    description: 'Light soya sauce for delicate flavoring',
    image: '/images/lee-kum-kee/light soya sauce.jpeg',
    category: 'lee-kum-kee'
  },
  {
    id: 'lee-4',
    name: 'Oyster Sauce',
    description: 'Authentic oyster sauce for rich umami flavor',
    image: '/images/lee-kum-kee/oyster sauce.jpeg',
    category: 'lee-kum-kee'
  },
  {
    id: 'lee-5',
    name: 'Spicy Black Bean Sauce',
    description: 'Spicy black bean sauce for bold flavors',
    image: '/images/lee-kum-kee/spicy black bean sauce.jpeg',
    category: 'lee-kum-kee'
  },
  {
    id: 'lee-6',
    name: 'Teriyaki Sauce',
    description: 'Sweet and savory teriyaki sauce',
    image: '/images/lee-kum-kee/teriyaki sauce.jpeg',
    category: 'lee-kum-kee'
  },
  {
    id: 'lee-7',
    name: 'Veg Oyster Flavoured Sauce',
    description: 'Vegetarian oyster flavoured sauce',
    image: '/images/lee-kum-kee/veg oyster flavoured sauce.jpeg',
    category: 'lee-kum-kee'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'frozen-vegetables', label: 'Frozen Vegetables' },
  { id: 'fresh-exotic-vegetables', label: 'Fresh Exotic Vegetables' },
  { id: 'mccain', label: 'McCain' },
  { id: 'ready-to-eat-frozen-foods', label: 'Ready to Eat Frozen Foods' },
  { id: 'monk-foods', label: 'Monk Foods' },
  { id: 'golden-crown', label: 'Golden Crown' },
  { id: 'lee-kum-kee', label: 'Lee Kum Kee' }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  // Show only first 8 products initially, or all if showAll is true
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);
  const hasMoreProducts = filteredProducts.length > 8;

  return (
    <section id="menu" className="py-12 lg:py-16 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-200/30 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-200/30 rounded-full hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary-300/40 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-primary-300/40 rounded-full hidden lg:block" />

      <div className="container-max section-padding relative z-10">
        {/* Mobile-Optimized Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary-600"></div>
            <span className="text-primary-600 font-medium tracking-wider uppercase text-xs">
              Product Portfolio
            </span>
            <div className="w-8 h-px bg-primary-600"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-800 mb-4">
            Premium Food Solutions
          </h2>
          <p className="text-base text-neutral-600 max-w-lg mx-auto leading-relaxed px-4">
            Comprehensive range of premium frozen foods, fresh produce, and specialty ingredients. 
            Trusted by businesses for consistent quality.
          </p>
        </div>

        {/* Mobile-Optimized Horizontal Scrollable Category Filter Buttons */}
        <div className="mb-12 px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false); // Reset to show limited products when changing category
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile-Optimized Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 px-4">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100/50"
            >
              {/* Product Image with 3:4 Aspect Ratio */}
              <div className="relative w-full bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden" style={{ paddingBottom: '133.33%' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={product.category !== 'mccain' ? { 
                    objectPosition: 'center top',
                    transform: 'scale(1.2) translateY(-10%)'
                  } : {}}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
              </div>
              
              {/* Product Details */}
              <div className="p-3">
                <h3 className="text-sm font-serif font-semibold text-neutral-800 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price and Quantity - Only for McCain products */}
                {product.category === 'mccain' && (
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-primary-600 leading-none">
                        {product.price}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full border border-primary-200">
                        <span className="text-xs font-medium">
                          {product.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized View More Button */}
        {hasMoreProducts && !showAll && (
          <div className="text-center mb-8 px-4">
            <button
              onClick={() => setShowAll(true)}
              className="w-full max-w-xs bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/25"
            >
              <span className="flex items-center justify-center gap-2">
                View More Products 
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                  +{filteredProducts.length - 8}
                </span>
              </span>
            </button>
          </div>
        )}

        {/* Mobile-Optimized Show Less Button */}
        {showAll && hasMoreProducts && (
          <div className="text-center mb-8 px-4">
            <button
              onClick={() => setShowAll(false)}
              className="w-full max-w-xs bg-gradient-to-r from-neutral-600 to-neutral-700 text-white px-6 py-3 rounded-full font-medium hover:from-neutral-700 hover:to-neutral-800 transition-all duration-300 shadow-lg shadow-neutral-600/25"
            >
              Show Less
            </button>
          </div>
        )}

        {/* Mobile-Optimized Products Count */}
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-200/50 shadow-sm">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-neutral-700 font-medium">
              Showing <span className="font-bold text-primary-600">{displayedProducts.length}</span> of <span className="font-bold text-primary-600">{filteredProducts.length}</span> products
              {activeCategory !== 'all' && (
                <span className="text-neutral-500 block sm:inline"> in <span className="font-semibold text-primary-600">{CATEGORIES.find(c => c.id === activeCategory)?.label}</span></span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <GoogleReviews />
        <JustDial />
        <TrustedPartner />
        <Contact />
      </main>
    </div>
  );
}

export default App;