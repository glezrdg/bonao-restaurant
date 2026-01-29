export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  image?: string;
}

export interface MenuCategory {
  name: string;
  nameEs?: string;
  items: MenuItem[];
}

const IMAGE_BASE = "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=600,height=530,quality=80,format=auto/menu-photos";

export const menu: MenuCategory[] = [
  {
    name: "Appetizers",
    nameEs: "Aperitivos",
    items: [
      {
        name: "Crispy Chicken Wings",
        description: "Passion fruit sweet chili glaze, crispy onions, thai chili, avocado lime crema.",
        price: 16,
        image: `${IMAGE_BASE}/aa9021df-b454-4460-8600-0d744acd102c.jpeg`
      },
      {
        name: "Braised Goat Dumplings",
        description: "Pan seared braised goat dumpling, creamy truffled corn sauce roasted corn salsa, parmigiano regiano.",
        price: 18,
        image: `${IMAGE_BASE}/cf10b857-92b3-4a4a-b689-812ea6fdd078.jpeg`
      },
      {
        name: "Seafood Citrus Salad (Salpicon)",
        description: "Mango escovitch, mixed seafood, coconut, lime & cilantro vinaigrette, sweet potato puree, crispy fried dough.",
        price: 22,
        image: `${IMAGE_BASE}/239c6474-53b0-4463-a560-0bf5c710abca.jpeg`
      },
      {
        name: "Grilled Octopus",
        description: "Grilled octopus over creamy potato salad and cashew romesco topped with chimichurri sauce.",
        price: 18,
        image: `${IMAGE_BASE}/b7590c39-846c-4a56-88fc-2f000ab07da6.jpeg`
      },
      {
        name: "Chicken Empanadas",
        description: "Stewed chicken pastelitos, lemongrass coconut sauce, orange, jalapeño, red onion & herb slaw.",
        price: 18,
        image: `${IMAGE_BASE}/bb9d572a-1b90-4ade-99e9-e9cb0cdb0b6e.jpeg`
      },
      {
        name: "Oxtail Croquettes",
        description: "Slow braised Dominican oxtail, spiced plantain al caldero, lime pickled green mango, cashew romesco, avocado crema.",
        price: 18,
        image: `${IMAGE_BASE}/0d9eac42-367d-491b-af54-30df9af8d9bb.jpeg`
      },
      {
        name: "Crispy Pork Belly Sliders",
        description: "Tamarind glaze, garlic-citrus aioli, charred scallion chimichurri, pickled cubanela peppers.",
        price: 17,
        image: `${IMAGE_BASE}/94392238-62ed-4a82-afb1-360665e773e0.jpeg`
      },
      {
        name: "Cassava Cheese Bites",
        description: "Filled with aged cheddar, spicy guava chipotle sauce, garlic-citrus aioli, crispy prosciutto.",
        price: 15,
        image: `${IMAGE_BASE}/e2b5072a-ac39-4f4e-b1f8-d1f338cefa7a.jpeg`
      },
      {
        name: "Guacamole (Housemade)",
        description: "Housemade guac, mango salsa, jalapeño, queso frito, tostones.",
        price: 16,
        image: `${IMAGE_BASE}/5c6b8171-97c1-4442-9b56-12e1330dcc23.jpeg`
      },
      {
        name: "Tuna Tartare",
        description: "Green sofrito & sour orange vinaigrette, pickled onions, marinated charred pineapple, habanero aioli, crispy corn arepitas on the side.",
        price: 19,
        image: `${IMAGE_BASE}/efc5c901-2f0d-4de7-9105-a105cd900339.jpeg`
      },
      {
        name: "Sweet Potato & Plantain Mofongo",
        description: "Mushroom, blue cheese & port cream, crispy slow roasted pork belly, avocado, citrus.",
        price: 18,
        image: `${IMAGE_BASE}/bbb1a7d4-9815-4bd7-aa9c-8d017d39cff5.jpeg`
      }
    ]
  },
  {
    name: "Main Courses",
    nameEs: "Platos Fuertes",
    items: [
      {
        name: "Guava Chipotle Ribs",
        description: "Topped with crispy shallots & chives, avocado lime crema, cassava & garlic confit mofongo, pickled starfruit.",
        price: 25,
        image: `${IMAGE_BASE}/2cbb5d72-0656-416f-b250-c1a6460988f3.jpeg`
      },
      {
        name: "Achiote Marinated Salmon",
        description: "Grilled & brushed with our homemade garlic-citrus sauce, spiced sweet plantain gnocchi in a creamy cilantro pesto sauce, marinated cherry tomatoes.",
        price: 22,
        image: `${IMAGE_BASE}/5b220f56-9275-4174-b5a4-65eb1c341daf.jpeg`
      },
      {
        name: "Bonao Burger",
        description: "Brioche, classic chimichurri-style burger patty, house smoked Dominican soft cheese, guava bacon jam, spicy aioli, cabbage slaw.",
        price: 25,
        image: `${IMAGE_BASE}/77936d0b-22fe-4066-89cc-bcb05a123b5b.jpeg`
      },
      {
        name: "Grilled Skirt Steak",
        description: "Grilled Angus skirt steak, charred scallion chimichurri, burnt onion beef gravy, pickled red onions, cheesy creamy boniato sweet potato puree.",
        price: 24,
        image: `${IMAGE_BASE}/3a923a8d-f0d3-486c-9ef9-f61b71249ab6.jpeg`
      },
      {
        name: "Crispy Coconut Crusted Mahi Mahi",
        description: "Creamy rice with pigeon peas, lemongrass coconut sauce, citrus arugula herby slaw, marinated charred pineapple.",
        price: 22,
        image: `${IMAGE_BASE}/afbbf347-5834-4b7e-aeed-15be0a55ea2d.jpeg`
      },
      {
        name: "Sancocho",
        description: "Traditional Dominican stew served with white rice, avocado, house hot sauce.",
        price: 17,
        image: `${IMAGE_BASE}/0433c32d-f578-4387-8bfc-4a567a9ab9d1.jpeg`
      },
      {
        name: "Braised Short Rib",
        description: "Tamarind braised short ribs over stewed red bean risotto, avocado crema, escovitch, tostones.",
        price: 23,
        image: `${IMAGE_BASE}/df852a7c-09d3-4a48-bc9f-950d3d39c649.jpeg`
      },
      {
        name: "Caribbean Grilled Chicken Salad",
        description: "Passion fruit dressing, avocado, pickled onions, mixed greens, ripe plantain, arugula, crispy bacon, goat cheese, cilantro yogurt.",
        price: 18,
        image: `${IMAGE_BASE}/a4703dba-e254-4192-ab32-2f978cca9ed8.jpeg`
      },
      {
        name: "Shrimp Fettuccine (Aglio e Olio)",
        description: "Rum flambé shrimp al aglio e olio, parmigiano regiano, cherry tomatoes.",
        price: 20,
        image: `${IMAGE_BASE}/5d99ea77-98f8-4171-8977-736ea88e2cba.jpeg`
      },
      {
        name: "Coal Grilled Pork Tenderloin",
        description: "Coal grilled pork tenderloin, tamarind sauce, creamy & crispy yuca, orange, jalapeño & herb slaw.",
        price: 24,
        image: `${IMAGE_BASE}/63ddc393-421a-4cd2-a1fd-52a32abaa475.jpeg`
      },
      {
        name: "Braised Goat Paccheri",
        description: "Paccheri pasta in a creamy truffled corn sauce, pulled braised goat, cilantro oil, ricotta.",
        price: 16,
        image: `${IMAGE_BASE}/73e0ab3f-ff8c-4dd7-870e-231d74cfb9ad.jpeg`
      }
    ]
  },
  {
    name: "Sides",
    nameEs: "Acompañantes",
    items: [
      {
        name: "Mashed Potatoes",
        description: "Creamy mashed potatoes",
        price: 7,
        image: `${IMAGE_BASE}/5ab70d7a-a7c7-45a5-845a-130932dac0f5.jpeg`
      },
      {
        name: "Sweet Plantains",
        description: "Fried ripe plantains (maduros)",
        price: 7,
        image: `${IMAGE_BASE}/ba2f23f2-3ad2-45fb-bb13-8fe57089f7cc.jpeg`
      },
      {
        name: "Rice",
        description: "White rice",
        price: 6,
        image: `${IMAGE_BASE}/6b503627-010f-4187-824f-68edfc33fe5d.jpeg`
      },
      {
        name: "Tostones",
        description: "Fried green plantains",
        price: 7,
        image: `${IMAGE_BASE}/7c8e823b-e855-4859-9cb1-7d8a9e96a033.jpeg`
      },
      {
        name: "Yuca Fries",
        description: "Crispy fried yuca",
        price: 7,
        image: `${IMAGE_BASE}/21a03fd0-6d4d-4ff8-b8c6-410bf36440bb.jpeg`
      },
      {
        name: "Yuca Mash",
        description: "Creamy mashed yuca",
        price: 7,
        image: `${IMAGE_BASE}/622b29d1-a940-4689-b46b-833a9925bf4c.jpeg`
      }
    ]
  },
  {
    name: "Desserts",
    nameEs: "Postres",
    items: [
      {
        name: "Coconut Panna Cotta",
        description: "Coconut panna cotta, textures of mango, mango sorbet, crispy coconut.",
        price: 16,
        image: `${IMAGE_BASE}/f53eba0a-a10e-4fa4-b93f-38fcfb9fc170.jpeg`
      },
      {
        name: "Majarete Crème Brûlée",
        description: "Salted caramel popcorn, vanilla ice cream.",
        price: 16,
        image: `${IMAGE_BASE}/c2a568dc-14b6-4d67-afae-a373d68aabcd.jpeg`
      },
      {
        name: "Date Steamed Cake",
        description: "Toffee sauce, Dominican dark chocolate ganache, vanilla ice cream, spiced pecan & date crumble, caramelized banana.",
        price: 16,
        image: `${IMAGE_BASE}/65fa1c18-f4b1-4725-af37-fef2d37d8886.jpeg`
      }
    ]
  },
  {
    name: "Juices & Drinks",
    nameEs: "Jugos y Bebidas",
    items: [
      {
        name: "Passion Fruit Juice (16 oz)",
        description: "Smooth passion fruit juice made from premium passion fruit pulp, naturally tangy and refreshing.",
        price: 7,
        image: `${IMAGE_BASE}/b3e0ccb4-939d-4976-a6f5-5e04bf6a9f8f.jpeg`
      },
      {
        name: "Tamarind Juice (16 oz)",
        description: "Smooth tamarind juice made from premium tamarind pulp, lightly sweet with a tangy finish.",
        price: 7,
        image: `${IMAGE_BASE}/1b496134-fb14-4791-a890-69f0b63c57c0.jpeg`
      },
      {
        name: "Mango Juice (16 oz)",
        description: "Smooth mango juice made from premium mango pulp, naturally sweet and refreshing.",
        price: 7,
        image: `${IMAGE_BASE}/9c29a15a-6e00-4247-9c2b-2f3cd09483f1.jpeg`
      },
      {
        name: "Strawberry Juice (16 oz)",
        description: "Smooth strawberry juice made from premium strawberry pulp, naturally sweet and refreshing.",
        price: 7,
        image: `${IMAGE_BASE}/d7207c01-d69a-400c-bd93-47c796c2c32c.jpeg`
      },
      {
        name: "Coconut Water (12 oz)",
        description: "Pure coconut water, refreshing and naturally hydrating.",
        price: 3,
        image: `${IMAGE_BASE}/c941cc91-3276-4fa3-a895-6cfe2ba6139b.jpeg`
      },
      {
        name: "Coca Cola (12 oz)",
        description: "Carbonated soft drink with a classic cola flavor.",
        price: 3,
        image: `${IMAGE_BASE}/b9dda9ad-4b01-4330-bd46-67f622115b30.jpeg`
      },
      {
        name: "Pepsi (12 oz)",
        description: "Carbonated soft drink with a bold cola flavor.",
        price: 3,
        image: `${IMAGE_BASE}/632aaec0-12b3-4df4-8867-7ffe598bbaf5.jpeg`
      },
      {
        name: "Sprite (12 oz)",
        description: "Carbonated soft drink with a crisp lemon-lime flavor.",
        price: 3,
        image: `${IMAGE_BASE}/184dc2ff-c318-4f86-b917-76dc297bf5f3.jpeg`
      },
      {
        name: "Ginger Ale (12 oz)",
        description: "Carbonated soft drink with a crisp ginger flavor.",
        price: 3,
        image: `${IMAGE_BASE}/bcc51b5f-2342-4997-823d-a0ec859c684a.jpeg`
      },
      {
        name: "Seltzer Water (12 oz)",
        description: "Carbonated water with no added flavors or sweeteners.",
        price: 3,
        image: `${IMAGE_BASE}/afcf35e9-e0e9-4e64-9994-9a984b30fed0.jpeg`
      },
      {
        name: "Saratoga Still Water (28 oz)",
        description: "Premium still spring water in a glass bottle.",
        price: 8,
        image: `${IMAGE_BASE}/2939ba52-308a-4cb7-aaa6-16bc990220c0.jpeg`
      },
      {
        name: "Saratoga Sparkling Water (28 oz)",
        description: "Premium sparkling spring water in a glass bottle.",
        price: 8,
        image: `${IMAGE_BASE}/c4984d8e-485c-483a-8d97-7149c37d91b5.jpeg`
      }
    ]
  }
];

export const restaurantInfo = {
  name: "Bonao Restaurant",
  tagline: "Modern Dominican Cuisine",
  address: "123 Jamaica Avenue, Brooklyn, NY 11207",
  phone: "(718) 346-0285",
  whatsapp: "https://wa.me/17183460285",
  email: "Bonaobarandgrill@gmail.com",
  orderOnlineUrl: "https://order.tryotter.com/s/bonao-bar-and-grill/123-jamaica-avenue-brooklyn/ed2b0b35-8b82-4b5a-b5b2-bf708f5b4e96",
  cuisine: "Modern Dominican / Caribbean",
  hours: {
    weekdays: "Monday - Thursday: 4pm - 12am",
    weekends: "Friday - Sunday: 4pm - 1am"
  },
  social: {
    instagram: "https://www.instagram.com/bonaorestaurant/",
    facebook: "https://www.facebook.com/bonaobarandgrill",
    tiktok: "https://www.tiktok.com/@bonaorestaurant"
  },
  features: [
    "Live Music",
    "Full Bar",
    "Outdoor Seating",
    "Private Events",
    "Online Ordering"
  ]
};
