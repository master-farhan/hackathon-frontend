const flavorlists = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "lg:rotate-[-10deg] rotate-0",
    size: "-translate-x-1/2 lg:-translate-x-6/9 lg:h-12/7 lg:bottom-[-4.5vw] -bottom-9 h-90",
  },
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "lg:rotate-[10deg] rotate-0",
    size: "-translate-x-1/2 lg:-translate-x-6/9 lg:h-10/8 lg:bottom-[-1.4vw] -bottom-2 h-70",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "lg:rotate-[-10deg] rotate-0",
    size: "-translate-x-1/2 lg:-translate-x-6/10 lg:h-7/5 lg:bottom-[-3.3vw] -bottom-7 h-85",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "lg:rotate-[10deg] rotate-0",
    size: "lg:-translate-x-6/10 lg:h-12/8 lg:bottom-[-2.4vw] -bottom-5  -translate-x-4/9 h-90",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "lg:rotate-[-10deg] rotate-0",
    size: "lg:-translate-x-1/2 lg:h-11/8 lg:bottom-[-1.5vw] -bottom-4 h-85  -translate-x-4/9",
  },
];

const nutrientLists = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const navLinks = [
  { link: "/", name: "Home" },
  { link: "/flavors", name: "All Flavors" },
  { link: "/about", name: "About" },
  { link: "/cart", name: "Cart" },
];

const iceCreamCategories = [
  {
    name: "Classic",
    // img: "images/classic.png",
  },
  {
    name: "Chocolate",
    // img: "images/chocolate.png",
  },
  {
    name: "Kulfi",
    // img: "images/kulfi.png",
  },
  {
    name: "Fusion Flavors",
    // img: "images/fusion.png",
  },
  {
    name: "Vegan",
    // img: "images/vegan.png",
  },
];

const cards = [
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];

export { flavorlists, nutrientLists, navLinks, cards, iceCreamCategories };
