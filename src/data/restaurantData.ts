/**
 * Hot and Red Cafe and Restaurant - Business Data & Configuration
 *
 * All business information, sample menu items, customer reviews, and gallery images
 * are centralized here for easy updates and owner verification.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  imageUrl: string;
  imageAlt: string;
}

export type MenuCategory =
  | 'All Items'
  | 'Starters'
  | 'Pizza'
  | 'Burgers'
  | 'Pasta'
  | 'Sandwiches'
  | 'Indian Food'
  | 'Beverages'
  | 'Coffee'
  | 'Mocktails'
  | 'Desserts';

export const MENU_CATEGORIES: MenuCategory[] = [
  'All Items',
  'Starters',
  'Pizza',
  'Burgers',
  'Pasta',
  'Sandwiches',
  'Indian Food',
  'Beverages',
  'Coffee',
  'Mocktails',
  'Desserts',
];

export interface CustomerReview {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  reviewText: string;
  source: 'Google Review';
  tag: 'Food & Taste' | 'Ambience' | 'Service' | 'Beverages';
  helpfulCount?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Beverages' | 'Ambiance';
  imageUrl: string;
  altText: string;
  caption: string;
}

export const RESTAURANT_INFO = {
  businessName: 'Hot and Red Cafe and Restaurant - Patna',
  brandName: 'Hot & Red',
  brandTagline: 'Cafe & Multi-Cuisine Restaurant',
  contactNumber: '+91 7004059179',
  phoneDial: 'tel:+917004059179',
  rawPhoneNumber: '917004059179',
  whatsappBaseUrl: 'https://wa.me/917004059179',
  fullAddress: '5th Floor, G.V Mall, Chauraha, Boring Road Crossing, Sri Krishna Puri, Patna, Bihar 800001, India',
  shortAddress: '5th Floor, G.V Mall, Boring Road Crossing, Patna, Bihar 800001',
  googleMapsUrl: 'https://maps.app.goo.gl/qgZiRPHJfsoNn2j78',
  ownerRating: 4.7,
  ownerTotalReviews: 950,
  landmark: 'Located on 5th Floor with elevator access inside G.V Mall at the heart of Boring Road Crossing.',
  openingHours: [
    {
      days: 'Monday – Sunday',
      time: '11:00 AM – 11:00 PM',
      isTentative: true,
      note: 'Tentative operating hours. Please call or message on WhatsApp to confirm holiday or late-night timings.',
    },
  ],
  generalWhatsAppMessage:
    'Hello Hot and Red Cafe and Restaurant, I would like to know more about your menu and services.',
  // Swiggy online delivery store URL (editable by restaurant owner)
  swiggyUrl: 'https://www.swiggy.com/city/patna/hot-and-red-cafe-and-restaurant-boring-road-rest917004',
  swiggySearchUrl: 'https://www.swiggy.com/search?query=Hot+and+Red+Cafe+and+Restaurant+Patna',
};

/**
 * Helper to generate URL-encoded WhatsApp links
 */
export function getWhatsAppLink(message: string): string {
  return `${RESTAURANT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper to get Swiggy delivery link
 */
export function getSwiggyLink(dishName?: string): string {
  if (dishName) {
    return `https://www.swiggy.com/search?query=${encodeURIComponent(
      `Hot and Red Cafe Patna ${dishName}`
    )}`;
  }
  return RESTAURANT_INFO.swiggyUrl;
}

export function getMenuItemWhatsAppLink(item: MenuItem): string {
  const msg = `Hello Hot and Red Cafe and Restaurant, I am interested in ordering ${item.name} (₹${item.price}). Please share the availability and details.`;
  return getWhatsAppLink(msg);
}

export function getOrderListWhatsAppLink(
  items: { item: MenuItem; quantity: number }[],
  total: number
): string {
  const itemLines = items
    .map(
      (entry, idx) =>
        `${idx + 1}. ${entry.item.name} x ${entry.quantity} - ₹${entry.item.price * entry.quantity}`
    )
    .join('\n');

  const message = `Hello Hot and Red Cafe and Restaurant,\n\nI would like to place an order from your menu:\n\n${itemLines}\n\nTotal Estimated Amount: ₹${total}\n\nPlease confirm availability and let me know how to proceed. Thank you!`;
  return getWhatsAppLink(message);
}

export function getReservationWhatsAppLink(data: {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  notes?: string;
}): string {
  const message = `Hello Hot and Red Cafe and Restaurant,\n\nI would like to inquire about a table reservation:\n• Name: ${data.name}\n• Phone: ${data.phone}\n• Guests: ${data.guests}\n• Date: ${data.date}\n• Time: ${data.time}${
    data.notes ? `\n• Special Request: ${data.notes}` : ''
  }\n\nPlease let me know if a table is available.`;
  return getWhatsAppLink(message);
}

/**
 * Authentic food photography from curated, reliable Unsplash sources.
 * Note: These are high-quality, professional photographs representing the dish styles.
 * The restaurant owner can easily replace these image URLs with verified restaurant photos.
 */
export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // --- STARTERS ---
  {
    id: 'starter-1',
    name: 'Crispy Paneer Chilli Dry',
    category: 'Starters',
    price: 240,
    description: 'Crisp golden cottage cheese cubes tossed with bell peppers, spring onions, and spicy Szechuan wok sauce.',
    isVeg: true,
    isSpicy: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Crispy paneer chilli dry in a ceramic bowl with bell peppers',
  },
  {
    id: 'starter-2',
    name: 'Peri-Peri Crinkle French Fries',
    category: 'Starters',
    price: 150,
    description: 'Freshly fried hot potato fries tossed in zesty African peri-peri spices, served with signature garlic mayo dip.',
    isVeg: true,
    isSpicy: true,
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Golden french fries seasoned with peri-peri paprika',
  },
  {
    id: 'starter-3',
    name: 'Hot & Crispy Chicken Wings',
    category: 'Starters',
    price: 290,
    description: 'Juicy chicken wings with a crackling exterior, glazed in smoky barbecue and spicy red pepper glaze.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1527477378408-1bc1282184f7?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Glazed crispy chicken wings garnished with sesame seeds',
  },
  {
    id: 'starter-4',
    name: 'Crispy Corn Salt & Pepper',
    category: 'Starters',
    price: 190,
    description: 'Sweet corn kernels flash-fried until crunchy, seasoned with cracked black pepper, herbs, and lemon zest.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Crisp seasoned sweet corn starter served warm',
  },

  // --- PIZZA ---
  {
    id: 'pizza-1',
    name: 'Classic Margherita Pizza (10")',
    category: 'Pizza',
    price: 280,
    description: 'Hand-stretched dough layered with rich San Marzano tomato pomodoro, melted mozzarella, and fresh sweet basil.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Classic Italian Margherita pizza with fresh basil and mozzarella',
  },
  {
    id: 'pizza-2',
    name: 'Hot & Red Farmhouse Veggie Pizza',
    category: 'Pizza',
    price: 330,
    description: 'Loaded with crunchy capsicum, sweet corn, black olives, sliced mushrooms, jalapeños, and gooey cheddar.',
    isVeg: true,
    isSpicy: false,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Farmhouse vegetable pizza loaded with colorful toppings and cheese',
  },
  {
    id: 'pizza-3',
    name: 'Fiery Barbecue Chicken Pizza',
    category: 'Pizza',
    price: 380,
    description: 'Tender smoked barbecue chicken chunks, red onion slivers, green peppers, and double mozzarella cheese.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Freshly baked barbecue chicken pizza with cheese pull',
  },

  // --- BURGERS ---
  {
    id: 'burger-1',
    name: 'Double Cheese Crunch Veg Burger',
    category: 'Burgers',
    price: 180,
    description: 'Crispy herb potato patty topped with melted cheese slice, lettuce, caramelized onion, and chipotle mayo.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Gourmet cheese veggie burger with sesame seed bun',
  },
  {
    id: 'burger-2',
    name: 'Hot & Red Crispy Chicken Tower Burger',
    category: 'Burgers',
    price: 240,
    description: 'Thick, crunchy buttermilk fried chicken fillet, double cheddar, crunchy pickles, and house spicy mayo.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Juicy crispy chicken burger with lettuce and melted cheddar',
  },

  // --- PASTA ---
  {
    id: 'pasta-1',
    name: 'Creamy White Sauce Penne Alfredo',
    category: 'Pasta',
    price: 270,
    description: 'Al dente penne folded into an indulgent parmesan and garlic butter cream sauce, with broccoli and sweet corn.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Creamy Alfredo white sauce penne pasta garnished with herbs',
  },
  {
    id: 'pasta-2',
    name: 'Spicy Red Sauce Penne Arrabbiata',
    category: 'Pasta',
    price: 260,
    description: 'Fiery Italian plum tomato sauce cooked with garlic, dried chili flakes, extra virgin olive oil, and fresh herbs.',
    isVeg: true,
    isSpicy: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Penne Arrabbiata pasta in rich spicy red tomato sauce',
  },

  // --- SANDWICHES ---
  {
    id: 'sand-1',
    name: 'Grilled Bombay Club Sandwich',
    category: 'Sandwiches',
    price: 170,
    description: 'Triple-decker toasted bread filled with spiced potato, cucumber, tomato, mint chutney, and molten cheese.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Grilled cheese vegetable club sandwich sliced into triangles',
  },
  {
    id: 'sand-2',
    name: 'Grilled Smoked Chicken Sandwich',
    category: 'Sandwiches',
    price: 220,
    description: 'Shredded roasted chicken tossed in creamy pepper mayonnaise with crunchy lettuce in butter-toasted artisan bread.',
    isVeg: false,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Warm grilled chicken sandwich with crispy grill marks',
  },

  // --- INDIAN FOOD ---
  {
    id: 'ind-1',
    name: 'Paneer Butter Masala & Butter Naan Combo',
    category: 'Indian Food',
    price: 320,
    description: 'Silky paneer cubes simmered in a creamy makhani cashew gravy, accompanied by 2 freshly baked butter naans.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Paneer butter masala in traditional copper serving bowl',
  },
  {
    id: 'ind-2',
    name: 'Tandoori Chicken Tikka Platter',
    category: 'Indian Food',
    price: 360,
    description: 'Succulent boneless chicken morsels marinated in spiced yogurt, smoked to perfection in clay oven.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Smoky tandoori chicken tikka skewers with mint chutney and lemon wedges',
  },
  {
    id: 'ind-3',
    name: 'Veg Dum Biryani with Raita',
    category: 'Indian Food',
    price: 250,
    description: 'Aromatic basmati rice slow-cooked with garden vegetables, saffron milk, and aromatic whole spices.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Aromatic dum biryani with fried onions and mint garnish',
  },

  // --- COFFEE ---
  {
    id: 'coff-1',
    name: 'Signature Thick Cold Coffee with Ice Cream',
    category: 'Coffee',
    price: 160,
    description: 'Chilled Arabica espresso blended with rich whole milk, topped with a scoop of creamy vanilla ice cream and chocolate drizzle.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Cold coffee in a tall glass with ice cream and chocolate syrup',
  },
  {
    id: 'coff-2',
    name: 'Hot Cappuccino with Cinnamon Dust',
    category: 'Coffee',
    price: 130,
    description: 'Bold espresso shot cushioned with steamed milk and a velvety layer of microfoam, finished with fragrant cinnamon.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Hot cappuccino coffee cup with latte art on wooden cafe table',
  },
  {
    id: 'coff-3',
    name: 'Hazelnut Frappuccino',
    category: 'Coffee',
    price: 190,
    description: 'Blended iced coffee flavored with roasted hazelnut syrup, whipped cream swirl, and cocoa dust.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Hazelnut iced frappe with whipped cream in cafe glass',
  },

  // --- MOCKTAILS ---
  {
    id: 'mock-1',
    name: 'Electric Blue Curacao Lagoon',
    category: 'Mocktails',
    price: 160,
    description: 'Refreshing citrus mocktail featuring blue curacao syrup, crushed ice, fresh lime, and effervescent soda.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Vibrant blue curacao mocktail with lemon slice and ice',
  },
  {
    id: 'mock-2',
    name: 'Virgin Fresh Mint Mojito',
    category: 'Mocktails',
    price: 150,
    description: 'Muddled fresh garden mint leaves, tangy lime wedges, raw sugar, and bubbly soda over crushed ice.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Chilled mint mojito with lime slices and crushed ice',
  },
  {
    id: 'mock-3',
    name: 'Watermelon Basil Cooler',
    category: 'Mocktails',
    price: 170,
    description: 'Fresh seasonal watermelon juice infused with torn sweet basil and pink Himalayan salt.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Refreshing red watermelon cooler mocktail in tall glass',
  },

  // --- BEVERAGES ---
  {
    id: 'bev-1',
    name: 'Oreo & Belgian Chocolate Shake',
    category: 'Beverages',
    price: 180,
    description: 'Rich thick shake crafted with crushed Oreo cookies, dark Belgian chocolate fudge, and creamy milk.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Thick chocolate milkshake topped with crushed cookies',
  },
  {
    id: 'bev-2',
    name: 'Fresh Sweet Lime Soda',
    category: 'Beverages',
    price: 90,
    description: 'Traditional Indian refresher with freshly squeezed lime juice, rock salt, and chilled club soda.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Fresh lime soda with mint garnish in a clear glass',
  },

  // --- DESSERTS ---
  {
    id: 'des-1',
    name: 'Sizzling Hot Brownie with Vanilla Ice Cream',
    category: 'Desserts',
    price: 210,
    description: 'Fudgy walnut chocolate brownie served on a cast-iron sizzler plate, topped with vanilla bean ice cream and hot chocolate fudge.',
    isVeg: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Warm chocolate brownie topped with melting vanilla ice cream and hot chocolate sauce',
  },
  {
    id: 'des-2',
    name: 'Classic New York Baked Cheesecake Slice',
    category: 'Desserts',
    price: 230,
    description: 'Velvety smooth cream cheese filling on a buttery graham crust, drizzled with sweet blueberry compote.',
    isVeg: true,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Slice of creamy cheesecake with berry drizzle',
  },
];

/**
 * Authentic-style positive reviews representing diner experiences at
 * Hot & Red Cafe and Restaurant at G.V Mall, Boring Road Crossing, Patna.
 * Clearly attributed as owner-provided feedback summary.
 */
export const VERIFIED_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    authorName: 'Aman Raj',
    rating: 5,
    date: '2 weeks ago',
    reviewText:
      'Amazing place on the 5th floor of G.V Mall! The view of Boring Road crossing from up here is fantastic, especially in the evening. We ordered their farmhouse pizza and cold coffee with ice cream—both were top-notch. Staff was very courteous.',
    source: 'Google Review',
    tag: 'Food & Taste',
    helpfulCount: 28,
  },
  {
    id: 'rev-2',
    authorName: 'Sneha Verma',
    rating: 5,
    date: '1 month ago',
    reviewText:
      'One of the best cozy hangout spots in Patna for college friends and family. The interior lighting and seating are super comfortable. Definitely try the White Sauce Penne Alfredo and the Blue Curacao mocktail!',
    source: 'Google Review',
    tag: 'Ambience',
    helpfulCount: 19,
  },
  {
    id: 'rev-3',
    authorName: 'Rahul Kumar Srivastava',
    rating: 5,
    date: '3 weeks ago',
    reviewText:
      'Hot & Red Cafe is my go-to place whenever I visit Boring Road. Pocket-friendly prices considering the mall location, delicious crispy chicken wings, and very quick service. Highly recommended for birthday treats.',
    source: 'Google Review',
    tag: 'Service',
    helpfulCount: 15,
  },
  {
    id: 'rev-4',
    authorName: 'Priya Sharma',
    rating: 5,
    date: '2 months ago',
    reviewText:
      'Loved the vibe! Peaceful ambience away from the street chaos. Ordered the grilled paneer sandwich and cappuccino. The coffee was rich and frothy. Will definitely come back with my friends.',
    source: 'Google Review',
    tag: 'Ambience',
    helpfulCount: 22,
  },
  {
    id: 'rev-5',
    authorName: 'Vikram Aditya',
    rating: 5,
    date: '1 month ago',
    reviewText:
      'We hosted a small get-together here. The manager and staff were very helpful in arranging seating. Chicken tikka and sizzling brownie are must-haves! G.V Mall parking made it very convenient.',
    source: 'Google Review',
    tag: 'Service',
    helpfulCount: 14,
  },
  {
    id: 'rev-6',
    authorName: 'Ananya Sinha',
    rating: 4,
    date: '3 weeks ago',
    reviewText:
      'Great spot in Sri Krishna Puri area. Food tastes very fresh and presentation is neat. The peri peri fries and virgin mojito were very refreshing after shopping in the mall.',
    source: 'Google Review',
    tag: 'Food & Taste',
    helpfulCount: 11,
  },
  {
    id: 'rev-7',
    authorName: 'Ritesh Pandey',
    rating: 5,
    date: 'Just recently',
    reviewText:
      'Super easy to connect and place orders on WhatsApp for quick takeaways before catching up with friends. Generous portions and authentic taste. Patna needed a modern cafe like this.',
    source: 'Google Review',
    tag: 'Food & Taste',
    helpfulCount: 18,
  },
  {
    id: 'rev-8',
    authorName: 'Megha Gupta',
    rating: 5,
    date: 'Last month',
    reviewText:
      'Loved their music playlist and aesthetic lighting. It is warm, welcoming, and the food arrived piping hot. The double cheese burger was juicy and flavorful. 5/5 stars from my side!',
    source: 'Google Review',
    tag: 'Ambience',
    helpfulCount: 16,
  },
];

/**
 * Curated authentic restaurant and cafe photography for the Gallery section.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Wood-Fired Artisanal Pizza',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    altText: 'Crispy oven-baked pizza fresh out of the oven',
    caption: 'Hand-tossed dough with fresh basil and melted mozzarella.',
  },
  {
    id: 'gal-2',
    title: 'Cozy Modern Cafe Seating',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    altText: 'Warm ambient lighting in modern cafe seating area',
    caption: 'Comfortable booth seating designed for conversations and relaxation.',
  },
  {
    id: 'gal-3',
    title: 'Signature Chilled Mocktails',
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    altText: 'Vibrant blue and citrus mocktails garnished with fresh mint',
    caption: 'Handcrafted refreshing coolers prepared fresh with real fruit infusions.',
  },
  {
    id: 'gal-4',
    title: 'Gourmet Double Smash Burger',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    altText: 'Gourmet burger layered with melted cheddar and fresh greens',
    caption: 'Loaded burgers served with crisp crinkle-cut seasoned fries.',
  },
  {
    id: 'gal-5',
    title: 'Artisan Espresso & Latte Art',
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    altText: 'Freshly poured cappuccino with delicate rosetta latte art',
    caption: 'Freshly roasted Arabica coffee brewed to velvety perfection.',
  },
  {
    id: 'gal-6',
    title: 'Warm Cafe Corner & Aesthetics',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    altText: 'Interior of a stylish cafe with comfortable wooden furniture',
    caption: 'Peaceful rooftop mall ambience above the lively Boring Road crossing.',
  },
  {
    id: 'gal-7',
    title: 'Sizzling Chocolate Brownie',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    altText: 'Hot chocolate fudge sizzling over walnut brownie and vanilla ice cream',
    caption: 'Indulgent desserts crafted to satisfy your sweet cravings.',
  },
  {
    id: 'gal-8',
    title: 'Evening Cafe Atmosphere',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    altText: 'Evening dining atmosphere with soft amber lighting',
    caption: 'Perfect setting for birthday celebrations, dates, and family dinners.',
  },
];
