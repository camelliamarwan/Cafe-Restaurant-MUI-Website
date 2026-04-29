import COLORS from "./colors";

export const menuItems = [
  {
    name: "Truffle Ricotta Toast",
    desc: "Sourdough, whipped ricotta, black truffle oil, microgreens",
    price: "£18",
    cat: "food",
    badge: "Chef's Pick",
    badgeBg: COLORS.lavenderLight,
    badgeColor: COLORS.violet,
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
  },
  {
    name: "Sunrise Açaí Bowl",
    desc: "Fresh açaí, seasonal fruits, house granola, honey drizzle",
    price: "£14",
    cat: "food",
    badge: "Bestseller",
    badgeBg: COLORS.yellowLight,
    badgeColor: COLORS.yellowDeep,
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
  },
  {
    name: "Lavender Latte",
    desc: "Double espresso, oat milk, house lavender syrup, vanilla foam",
    price: "£9",
    cat: "drinks",
    badge: "Fan Fav",
    badgeBg: COLORS.pinkLight,
    badgeColor: COLORS.hotpink,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80",
  },
  {
    name: "Rose Cardamom Cake",
    desc: "Light sponge, rose water buttercream, cardamom crumble",
    price: "£11",
    cat: "dessert",
    badge: "Seasonal",
    badgeBg: COLORS.tealLight,
    badgeColor: COLORS.tealDark,
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
  },
  {
    name: "Shakshuka Royale",
    desc: "Slow-cooked tomato sauce, eggs, feta, warm pita bread",
    price: "£16",
    cat: "food",
    badge: "",
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
  },
  {
    name: "Mango Chilli Spritz",
    desc: "Fresh mango juice, lime, chilli salt rim, sparkling water",
    price: "£8",
    cat: "drinks",
    badge: "New",
    badgeBg: COLORS.peachLight,
    badgeColor: COLORS.peachDeep,
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
  },
];

export const galleryImgs = [
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", title: "Plated perfection" },
  { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80", title: "Morning ritual" },
  { img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80", title: "Sweet moments" },
  { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80", title: "Our space" },
  { img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&q=80", title: "Warm corners" },
  { img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80", title: "Crafted with care" },
  { img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80", title: "Lunch hour" },
  { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80", title: "The perfect cup" },
  { img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&q=80", title: "Ambiance" },
];

export const teamData = [
  { name: "Layla Hassan", role: "Head Chef", bio: "Trained in Lyon, Layla brings French technique to Egyptian soul food.", hearts: 5, initials: "LH", color: COLORS.violet },
  { name: "Omar Khalil", role: "Pastry Chef", bio: "Omar turns seasonal fruit into edible art — one tart at a time.", hearts: 5, initials: "OK", color: COLORS.hotpink },
  { name: "Nadia Samir", role: "Barista & Drinks", bio: "Nadia's lavender latte has its own fan club. Deservedly.", hearts: 5, initials: "NS", color: COLORS.tealDark },
  { name: "Youssef Adel", role: "Sous Chef", bio: "The quiet force behind every perfectly seasoned dish that leaves the kitchen.", hearts: 5, initials: "YA", color: COLORS.peachDeep },
];

export const testiData = [
  { text: "We celebrated our anniversary here and it was pure magic. The rose cardamom cake alone is worth the visit.", name: "Sara M.", detail: "Regular guest", initials: "SM", color: COLORS.hotpink, stars: 5 },
  { text: "Best lavender latte I've had anywhere. The ambiance is just right — cozy but not cluttered.", name: "Karim A.", detail: "Food blogger", initials: "KA", color: COLORS.yellowDeep, stars: 5 },
  { text: "Came for brunch, stayed for three hours. The shakshuka royale is unreal. Will be back every weekend.", name: "Rana T.", detail: "First-time visitor", initials: "RT", color: COLORS.tealDark, stars: 5 },
  { text: "A rare place in Cairo where quality, service, and atmosphere all arrive together. Truly a gem.", name: "Hossam B.", detail: "Local foodie", initials: "HB", color: COLORS.peachDeep, stars: 4 },
];

export const occasions = [
  "Birthday Celebration",
  "Anniversary",
  "Business Lunch",
  "Casual Brunch",
  "Date Night",
  "Family Gathering",
  "Proposal Dinner",
  "Baby Shower",
];

export const menuFilters = ["All", "Food", "Drinks", "Dessert"];

export const navLinks = ["About", "Menu", "Gallery", "Chefs", "Reserve"];