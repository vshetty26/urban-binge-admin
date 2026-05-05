module.exports = [
"[project]/lib/defaultMenu.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultMenu",
    ()=>defaultMenu
]);
const defaultMenu = {
    "restaurant": {
        "name": "Urban Binge",
        "address": "Mumbai",
        "timings": "9:00 AM to 11:00 PM",
        "notes": [
            "Pure Veg | Indian | Asian",
            "Free Home Deliveries",
            "Call: +91 79001 98888 / +91 7385554255"
        ]
    },
    "menu": [
        {
            "category": "Breakfast Meal",
            "cuisine": "South Indian",
            "type": "Vegetarian",
            "section": "Breakfast",
            "timing": "9AM TO 6PM",
            "items": [
                {
                    "name": "Medu Vada",
                    "price": 95
                },
                {
                    "name": "Thatte Idli",
                    "price": 115
                },
                {
                    "name": "Steamed Idli",
                    "price": 85
                },
                {
                    "name": "Pineapple Sheera",
                    "price": 95
                },
                {
                    "name": "Upma",
                    "price": 95
                }
            ]
        },
        {
            "category": "Indian Mini Meal",
            "cuisine": "South Indian",
            "type": "Vegetarian",
            "section": "Breakfast",
            "timing": "ALL DAY",
            "items": [
                {
                    "name": "Classic Butter Pav Bhaji",
                    "price": 145
                },
                {
                    "name": "Loni Pav Bhaji",
                    "price": 175
                },
                {
                    "name": "Masala Pav",
                    "price": 125
                },
                {
                    "name": "Misal Pav",
                    "price": 115
                },
                {
                    "name": "Dahi Vada",
                    "price": 115
                }
            ]
        },
        {
            "category": "South Indian",
            "cuisine": "South Indian",
            "type": "Vegetarian",
            "section": "Dosa",
            "timing": "ALL DAY",
            "items": [
                {
                    "name": "Plain Dosa",
                    "price": 85
                },
                {
                    "name": "Masala Dosa",
                    "price": 125
                },
                {
                    "name": "Butter Dosa",
                    "price": 115
                },
                {
                    "name": "Mysore Masala Dosa",
                    "price": 145
                },
                {
                    "name": "Gulmohar Dosa",
                    "price": 185,
                    "description": "Masala, Cheese, Paneer, Mayo"
                },
                {
                    "name": "Ghee Roast Paneer Masala Dosa",
                    "price": 215,
                    "description": "Ghee-roasted crispy dosa filled with rich, spicy paneer masala"
                },
                {
                    "name": "Ghee Podi Dosa",
                    "price": 145,
                    "description": "Ghee-roasted dosa tossed with aromatic podi masala"
                },
                {
                    "name": "Gennie Dosa",
                    "price": 185,
                    "description": "Loaded Mumbai-style dosa stuffed with spicy masala, cheese, and bold street-style flavors"
                },
                {
                    "name": "Rava Masala",
                    "price": 145
                },
                {
                    "name": "Rava Sada",
                    "price": 115
                },
                {
                    "name": "Set Dosa",
                    "price": 115
                },
                {
                    "name": "Classic Benne",
                    "price": 155
                },
                {
                    "name": "Benne Mysore Masala Dosa",
                    "price": 165,
                    "description": "Buttery benne dosa layered with spicy red chutney and potato masala"
                },
                {
                    "name": "Onion Uttapam",
                    "price": 125
                },
                {
                    "name": "Cheese Chilli Uttapam",
                    "price": 165
                },
                {
                    "name": "Masala Uttapam",
                    "price": 145
                }
            ]
        },
        {
            "category": "Beverages",
            "cuisine": "South Indian",
            "type": "Vegetarian",
            "section": "Beverages",
            "items": [
                {
                    "name": "Aerated Beverages 250ml",
                    "price": 65,
                    "description": "Fanta / Coke / Diet Coke / Thums Up"
                },
                {
                    "name": "Masala Soda",
                    "price": 75
                },
                {
                    "name": "Lassi",
                    "price": 95
                },
                {
                    "name": "Buttermilk",
                    "price": 75
                },
                {
                    "name": "Fresh Lime Soda",
                    "price": 75
                },
                {
                    "name": "Fresh Watermelon Juice",
                    "price": 125
                },
                {
                    "name": "Fresh Pineapple Juice",
                    "price": 125
                },
                {
                    "name": "Fresh Orange Juice",
                    "price": 125
                },
                {
                    "name": "Water Bottle",
                    "price": 35
                }
            ]
        },
        {
            "category": "Milk Shake & Falooda",
            "cuisine": "South Indian",
            "type": "Vegetarian",
            "section": "Beverages",
            "items": [
                {
                    "name": "Dry Fruit Milk Shake",
                    "price": 225
                },
                {
                    "name": "Chocolate Milk Shake",
                    "price": 145
                },
                {
                    "name": "Strawberry / Mango Milkshake",
                    "price": 155
                },
                {
                    "name": "Oreo Milk Shake",
                    "price": 145
                },
                {
                    "name": "Cold Coffee",
                    "price": 125
                },
                {
                    "name": "Cold Coffee with Icecream",
                    "price": 175
                },
                {
                    "name": "Royal Falooda",
                    "price": 185
                },
                {
                    "name": "Kesar Falooda",
                    "price": 185
                },
                {
                    "name": "Butter Scotch Falooda",
                    "price": 185
                }
            ]
        },
        {
            "category": "Hot Beverages",
            "cuisine": "South Indian",
            "type": "Vegetarian",
            "section": "Beverages",
            "items": [
                {
                    "name": "Tea",
                    "price": 30
                },
                {
                    "name": "Filter Coffee",
                    "price": 55
                }
            ]
        },
        {
            "category": "Soup and Starters",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Soups",
            "items": [
                {
                    "name": "Khow Suey Soup",
                    "price": 175
                },
                {
                    "name": "Corn & Palak Shorba",
                    "price": 175
                },
                {
                    "name": "Tulsi & Turmeric Rasam",
                    "price": 175
                },
                {
                    "name": "Asian Greens Clear Soup",
                    "price": 175
                },
                {
                    "name": "Classic Soups",
                    "price": 165,
                    "description": "Manchow | Hot & Sour | Lemon Coriander | Tomato Soup | Sweet Corn"
                }
            ]
        },
        {
            "category": "Indian Starters",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Starters",
            "items": [
                {
                    "name": "Karari Paneer",
                    "price": 295,
                    "description": "Soft paneer coated in a crisp papad crust, fried to a perfect golden crunch"
                },
                {
                    "name": "Paneer Makai Ki Seekh",
                    "price": 295,
                    "description": "Juicy paneer & sweet corn blended with spices, shaped on skewers and grilled"
                },
                {
                    "name": "Rampuri Stuffed Paneer Tikka",
                    "price": 295,
                    "description": "Paneer stuffed with a rich, spiced filling and marinated in bold Rampuri masalas & chargrilled"
                },
                {
                    "name": "Gunpowder Ghee Paneer Tikka",
                    "price": 295,
                    "description": "South Indian Podi"
                },
                {
                    "name": "Kharda Paneer Tikka",
                    "price": 295,
                    "description": "Kolhapuri-style"
                },
                {
                    "name": "Green Onion Chilli Paneer Tikka",
                    "price": 295
                },
                {
                    "name": "Peshwari Mirch Paneer Tikka",
                    "price": 295
                },
                {
                    "name": "Chowk Ki Tikki",
                    "price": 265,
                    "description": "Crisp potato patties stuffed with spiced green peas made street style"
                },
                {
                    "name": "Cheese Bhara Chana Tikki",
                    "price": 295,
                    "description": "Delhi-inspired chana tikki stuffed with cheese, pan-fried and finished with chaat spices"
                },
                {
                    "name": "Lucknowi Seekh Kebab",
                    "price": 265
                },
                {
                    "name": "Veg Galouti",
                    "price": 295
                },
                {
                    "name": "Chimichurri Veg Tikka",
                    "price": 275
                },
                {
                    "name": "Multani Mushroom",
                    "price": 295,
                    "description": "Juicy Lucy Piri Piri Veg Tandoori"
                },
                {
                    "name": "Juicy Lucy Piri Piri Veg Tandoori",
                    "price": 295,
                    "description": "Veggies dip in cream butter and piri piri sauce"
                },
                {
                    "name": "Volcano Cheese Chilli Cigars",
                    "price": 295
                }
            ]
        },
        {
            "category": "Dal Rice",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Dal & Rice",
            "items": [
                {
                    "name": "Ghee Roasted Akkha Masoor Dal",
                    "price": 275
                },
                {
                    "name": "Classic Dal Tadka/fry",
                    "price": 235
                },
                {
                    "name": "Dal Makhani",
                    "price": 275
                }
            ]
        },
        {
            "category": "Khichadi",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Khichadi",
            "items": [
                {
                    "name": "Exotic Veg Masala Khichdi",
                    "price": 285
                },
                {
                    "name": "Karnataka Bisibele Bhaat",
                    "price": 225
                },
                {
                    "name": "Achari Dal Khichdi",
                    "price": 245
                },
                {
                    "name": "Classic Dal Khichdi",
                    "price": 225
                },
                {
                    "name": "Curd Rice",
                    "price": 175
                },
                {
                    "name": "Khandeshi Masale Bhat",
                    "price": 315,
                    "description": "Maharahstrian style"
                },
                {
                    "name": "Hyderabadi Dum Biryani",
                    "price": 285,
                    "description": "Veg / Paneer"
                },
                {
                    "name": "Steamed Basmati Rice",
                    "price": 165
                },
                {
                    "name": "Jeera Rice",
                    "price": 175
                },
                {
                    "name": "Veg Pulao",
                    "price": 255
                },
                {
                    "name": "Tawa Pulao",
                    "price": 255
                }
            ]
        },
        {
            "category": "Indian Mains",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Mains",
            "items": [
                {
                    "name": "Hariyali Butter Paneer",
                    "price": 335,
                    "description": "Paneer cooked in a creamy green herb gravy finished with butter and mild spices"
                },
                {
                    "name": "Nandan Paneer Curry",
                    "price": 335,
                    "description": "Kerala-inspired coconut curry with peppery spice and fragrant curry leaves"
                },
                {
                    "name": "Kothmir Paneer Masala",
                    "price": 325
                },
                {
                    "name": "Junglee Paneer Curry",
                    "price": 325
                },
                {
                    "name": "Chettinad Paneer Masala",
                    "price": 325
                },
                {
                    "name": "Paneer Musallam",
                    "price": 335
                },
                {
                    "name": "Anjeer Paneer Korma",
                    "price": 365,
                    "description": "Soft paneer in a mildly sweet fig and cashew korma with delicate spices"
                },
                {
                    "name": "Sindhi Paneer Chole",
                    "price": 315
                },
                {
                    "name": "Paneer Nazakat",
                    "price": 315,
                    "description": "Stuffed Paneer cheese, dry Nuts, saffron, chatpata tomato gravy"
                },
                {
                    "name": "Chura Paneer Saag",
                    "price": 315
                },
                {
                    "name": "Mumbai Mirch Masala Paneer",
                    "price": 315
                },
                {
                    "name": "Paneer Tikka Masala",
                    "price": 285
                },
                {
                    "name": "Paneer Lababdar",
                    "price": 285
                },
                {
                    "name": "Paneer Kadhai",
                    "price": 285
                },
                {
                    "name": "Paneer Khurchan Kadhai",
                    "price": 285
                },
                {
                    "name": "Veg Kolhapuri",
                    "price": 265
                },
                {
                    "name": "Veg Handi",
                    "price": 265
                },
                {
                    "name": "Bhindi Ka Salan",
                    "price": 265
                },
                {
                    "name": "Kaju Masala",
                    "price": 325
                },
                {
                    "name": "Sev Tamatar",
                    "price": 265
                },
                {
                    "name": "Pindi Chole",
                    "price": 265
                },
                {
                    "name": "Kurkuri Veg Makhani",
                    "price": 285
                },
                {
                    "name": "Angrezi Tarkari",
                    "price": 285
                },
                {
                    "name": "Mix Veg Pineapple Curry",
                    "price": 285,
                    "description": "Seasonal vegetables simmered in a lightly sweet-spicy pineapple gravy"
                },
                {
                    "name": "Panch Tattva Curry",
                    "price": 285
                },
                {
                    "name": "Konkan Masala Handi",
                    "price": 285
                },
                {
                    "name": "Dhaba Style Mix Sabzi",
                    "price": 285
                },
                {
                    "name": "Desi Tawa Vegetable",
                    "price": 285
                },
                {
                    "name": "Veg Gassi",
                    "price": 285
                },
                {
                    "name": "Subz Diwani Handi",
                    "price": 285
                },
                {
                    "name": "Royal Veg Bhuna",
                    "price": 285
                },
                {
                    "name": "Green Peas & Makhana",
                    "price": 285
                },
                {
                    "name": "Kesar & nuts Paneer Kofta",
                    "price": 325
                },
                {
                    "name": "Spicy Kofta Salan",
                    "price": 325
                },
                {
                    "name": "Khubani Kofta & Red Pepper Curry",
                    "price": 355
                }
            ]
        },
        {
            "category": "Asian Mains",
            "cuisine": "Asian",
            "type": "Vegetarian",
            "section": "Asian Mains",
            "items": [
                {
                    "name": "Nasi Goreng",
                    "price": 345
                },
                {
                    "name": "Koyla Butter Veg Rice",
                    "price": 285,
                    "description": "Fragrant rice tossed in buttery vegetables and finished with a hint of smoky koyla infusion"
                },
                {
                    "name": "Japanese Teriyaki Rice",
                    "price": 315,
                    "description": "Sticky rice glazed with sweet-spicy teriyaki sauce and sesame seeds"
                },
                {
                    "name": "Korean Gochujang Rice",
                    "price": 315,
                    "description": "Spicy Korean-style rice tossed in gochujang chilli paste with greens"
                },
                {
                    "name": "Crispy Chilli Garlic Fried Rice",
                    "price": 265
                },
                {
                    "name": "Classic Veg Fried Rice",
                    "price": 285
                },
                {
                    "name": "Butter Crispy Veg Fried Rice",
                    "price": 285
                },
                {
                    "name": "Colombo Chilli Paneer",
                    "price": 285,
                    "description": "Sri Lankan-style"
                },
                {
                    "name": "Burma Burma Paneer",
                    "price": 275,
                    "description": "Paneer tossed in smoky red chilli Burmese-style sauce with garlic and umami depth"
                },
                {
                    "name": "Paneer Satay With Peanut Sauce",
                    "price": 285
                },
                {
                    "name": "Korean Chilli Paneer",
                    "price": 285,
                    "description": "Wok-tossed paneer glazed in spicy-sweet gochujang with sesame and scallions"
                },
                {
                    "name": "Shanghai Paneer Triangles",
                    "price": 285
                },
                {
                    "name": "Hunan Style Crispy Mushrooms",
                    "price": 295
                },
                {
                    "name": "Thai Basil Spring Rolls",
                    "price": 295
                },
                {
                    "name": "Kung Pao Veg",
                    "price": 275,
                    "description": "Wok-tossed exotic vegetables with dry red chillies, roasted peanuts, garlic, and bold Sichuan heat"
                },
                {
                    "name": "Cheese Burst Manchurian",
                    "price": 295
                },
                {
                    "name": "Spinach & Corn Manchurian",
                    "price": 285
                },
                {
                    "name": "Asian Stir Fry Veg",
                    "price": 285,
                    "description": "Wok-tossed seasonal vegetables with garlic, ginger, soy, and crushed pepper in a bold Asian glaze"
                },
                {
                    "name": "Dragon Fire Baby Corn",
                    "price": 275
                },
                {
                    "name": "Tangy Crispy Exotic Veg",
                    "price": 295
                }
            ]
        },
        {
            "category": "Noodles",
            "cuisine": "Asian",
            "type": "Vegetarian",
            "section": "Noodles",
            "items": [
                {
                    "name": "Burma Noodles (Dry Style)",
                    "price": 285,
                    "description": "Northern Thai-style noodles tossed with aromatic curry spices"
                },
                {
                    "name": "Asian Street Spicy Noodles",
                    "price": 285,
                    "description": "Wok-tossed noodles in a fiery sesame-chilli-lime sauce with fresh herbs and vegetables"
                },
                {
                    "name": "Crispy Chilli Garlic Noodles",
                    "price": 285
                },
                {
                    "name": "Fiery Gochujang Wok Noodles",
                    "price": 315,
                    "description": "Wok-tossed noodles in bold Korean chilli paste with vegetables"
                },
                {
                    "name": "Teriyaki Wok Noodles",
                    "price": 315,
                    "description": "Wok-tossed noodles glazed in rich teriyaki sauce with crisp exotic vegetables"
                },
                {
                    "name": "Bangkok Peanut Wok Noodles",
                    "price": 315,
                    "description": "Creamy peanut satay sauce tossed with noodles and fresh vegetables"
                },
                {
                    "name": "Greens Stir-fry Noodles",
                    "price": 285,
                    "description": "Noodles tossed with bok choy, spinach, broccoli, spring onions, snow peas, and sesame glaze"
                },
                {
                    "name": "Koyla Butter Hakka Noodles",
                    "price": 285,
                    "description": "Wok-tossed Hakka noodles infused with buttery smoked flavors and vegetables"
                }
            ]
        },
        {
            "category": "Triple Rice",
            "cuisine": "Asian",
            "type": "Vegetarian",
            "section": "Triple Rice",
            "items": [
                {
                    "name": "Veg Khow Suey Triple Rice",
                    "price": 325,
                    "description": "Burmese Fusion"
                },
                {
                    "name": "Mex-Chinese Triple Rice",
                    "price": 325,
                    "description": "Mexican-style corn rice, jalapeño cheese noodles & bean-veggie tangy gravy"
                },
                {
                    "name": "Korean Triple Gochuchang Rice",
                    "price": 325,
                    "description": "Gochujang fried rice, sesame noodles & spicy vegetable bulgogi-style gravy"
                },
                {
                    "name": "Peri-Peri Veg Triple Rice",
                    "price": 325,
                    "description": "Peri-peri rice, cheesy masala noodles, and vegetable fritters in hot chilli gravy"
                },
                {
                    "name": "Classic Szechwan Triple Rice",
                    "price": 325
                },
                {
                    "name": "Triple Manchurian Rice",
                    "price": 325
                }
            ]
        },
        {
            "category": "Sides",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Sides",
            "items": [
                {
                    "name": "Mooli Ka Thecha",
                    "price": 155
                },
                {
                    "name": "Bharleli Mirchi (Stuffed Bhavnagri Chilli)",
                    "price": 155
                },
                {
                    "name": "French Fries",
                    "price": 245
                },
                {
                    "name": "Masala Cheese Fries",
                    "price": 275
                },
                {
                    "name": "Roasted /Fried Papad",
                    "price": 30,
                    "description": "30/50"
                },
                {
                    "name": "Green Salad",
                    "price": 125
                },
                {
                    "name": "Carrot Pachadi",
                    "price": 125
                },
                {
                    "name": "Raita",
                    "price": 125,
                    "description": "Veg / Pineapple / Boondi"
                }
            ]
        },
        {
            "category": "Indian Breads",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Breads",
            "items": [
                {
                    "name": "Roti",
                    "price": 30
                },
                {
                    "name": "Naan",
                    "price": 55
                },
                {
                    "name": "Laccha Naan",
                    "price": 65
                },
                {
                    "name": "Paratha",
                    "price": 55
                },
                {
                    "name": "Laccha Paratha",
                    "price": 65
                },
                {
                    "name": "Garlic Naan",
                    "price": 75
                },
                {
                    "name": "Cheese Naan",
                    "price": 110
                },
                {
                    "name": "Kulcha",
                    "price": 45
                },
                {
                    "name": "Stuffed Paratha",
                    "price": 110,
                    "description": "Aloo/Veg/Paneer"
                },
                {
                    "name": "Matar Paratha",
                    "price": 140
                },
                {
                    "name": "Masala Roti",
                    "price": 55
                },
                {
                    "name": "Warqi Paratha",
                    "price": 85
                },
                {
                    "name": "Chura Naan",
                    "price": 85
                },
                {
                    "name": "Add Butter",
                    "price": 10
                }
            ]
        },
        {
            "category": "Gravies",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Gravies",
            "items": [
                {
                    "name": "Thai Red Curry with Jasmine Rice",
                    "price": 375
                },
                {
                    "name": "Basil Chilli Sauce",
                    "price": 295
                },
                {
                    "name": "Mongolian Gravy",
                    "price": 295
                }
            ]
        },
        {
            "category": "Desserts",
            "cuisine": "Indian",
            "type": "Vegetarian",
            "section": "Desserts",
            "items": [
                {
                    "name": "Mango flavoured Mix-Fruit Custard",
                    "price": 225
                },
                {
                    "name": "Gulab Jamun Cheese Cake",
                    "price": 245
                },
                {
                    "name": "Assorted Ice Cream",
                    "price": 185
                }
            ]
        }
    ]
};
}),
"[project]/lib/menu.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMenu",
    ()=>getMenu,
    "saveMenu",
    ()=>saveMenu,
    "subscribeToMenu",
    ()=>subscribeToMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$defaultMenu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/defaultMenu.ts [app-ssr] (ecmascript)");
;
;
;
const MENU_COLLECTION = "menuData";
const MENU_DOC_ID = "current";
async function getMenu() {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], MENU_COLLECTION, MENU_DOC_ID);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (snap.exists()) {
        return snap.data();
    }
    return null;
}
async function saveMenu(menuData) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], MENU_COLLECTION, MENU_DOC_ID);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(docRef, menuData);
}
function subscribeToMenu(callback) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], MENU_COLLECTION, MENU_DOC_ID);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(docRef, (snap)=>{
        if (snap.exists()) {
            callback(snap.data());
        } else {
            // Save the default menu to firebase if it never existed
            saveMenu(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$defaultMenu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultMenu"]).then(()=>{
                callback(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$defaultMenu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultMenu"]);
            });
        }
    });
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/status.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRestaurantStatus",
    ()=>getRestaurantStatus,
    "setRestaurantStatus",
    ()=>setRestaurantStatus,
    "subscribeToRestaurantStatus",
    ()=>subscribeToRestaurantStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
const SETTINGS_COLLECTION = "settings";
const RESTAURANT_DOC_ID = "restaurant";
async function getRestaurantStatus() {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], SETTINGS_COLLECTION, RESTAURANT_DOC_ID);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (snap.exists()) {
        return snap.data();
    }
    // Default to open if not set
    return {
        isOpen: true
    };
}
async function setRestaurantStatus(isOpen) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], SETTINGS_COLLECTION, RESTAURANT_DOC_ID);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
        isOpen,
        lastUpdated: new Date().toISOString()
    });
}
function subscribeToRestaurantStatus(callback) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], SETTINGS_COLLECTION, RESTAURANT_DOC_ID);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(docRef, (snap)=>{
        if (snap.exists()) {
            callback(snap.data());
        } else {
            callback({
                isOpen: true
            });
        }
    });
}
}),
"[project]/components/StoreStatusToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreStatusToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/status.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function StoreStatusToggle() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToRestaurantStatus"])((status)=>{
            setIsOpen(status.isOpen);
        });
        return ()=>unsub();
    }, []);
    const toggleStatus = async ()=>{
        const nextState = !isOpen;
        if (confirm(`Are you sure you want to ${nextState ? "OPEN" : "CLOSE"} the restaurant for new orders?`)) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRestaurantStatus"])(nextState);
            } catch (e) {
                console.error("Firestore Update Error:", e);
                alert(`Failed to update restaurant status: ${e.message || "Unknown error"}`);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleStatus,
        className: `flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer shadow-sm border ${isOpen ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100" : "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCircle"], {
                className: `text-[8px] ${isOpen ? "text-green-500 animate-pulse" : "text-red-500"}`
            }, void 0, false, {
                fileName: "[project]/components/StoreStatusToggle.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStore"], {
                        className: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/StoreStatusToggle.tsx",
                        lineNumber: 39,
                        columnNumber: 19
                    }, this),
                    " STORE OPEN"
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStoreSlash"], {
                        className: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/StoreStatusToggle.tsx",
                        lineNumber: 41,
                        columnNumber: 19
                    }, this),
                    " STORE CLOSED"
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StoreStatusToggle.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/AdminNavbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreStatusToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoreStatusToggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AdminNavbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            href: "/orders",
            label: "Orders",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUtensils"]
        },
        {
            href: "/menu",
            label: "Menu",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"]
        },
        {
            href: "/inquiries",
            label: "Inquiries",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border-b border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex gap-6 overflow-x-auto no-scrollbar",
                    children: links.map((link)=>{
                        const isActive = pathname === link.href;
                        const Icon = link.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: `flex items-center gap-2 py-3 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${isActive ? "border-red-600 text-red-600" : "border-transparent text-gray-500 hover:text-gray-900"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "text-base"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminNavbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 33
                                }, this),
                                link.label
                            ]
                        }, link.href, true, {
                            fileName: "[project]/components/AdminNavbar.tsx",
                            lineNumber: 25,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/AdminNavbar.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 ml-4 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreStatusToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/AdminNavbar.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AdminNavbar.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AdminNavbar.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AdminNavbar.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/menu/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminMenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/menu.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AdminNavbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreStatusToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoreStatusToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function AdminMenuPage() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCategoryIdx, setEditingCategoryIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingItemInfo, setEditingItemInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Modal States
    const [categoryModal, setCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemModal, setItemModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToMenu"])((menu)=>{
            if (menu) {
                setData(menu);
            }
            setLoading(false);
        });
        return ()=>unsub();
    }, []);
    const handleSavePrimary = async ()=>{
        if (!data) return;
        setSaving(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMenu"])(data);
            alert("Menu saved successfully!");
        } catch (e) {
            console.error(e);
            alert("Failed to save menu");
        }
        setSaving(false);
    };
    const openCreateCategory = ()=>{
        setEditingCategoryIdx(null);
        setCategoryModal({
            category: "",
            cuisine: "Indian",
            type: "Vegetarian",
            section: "Main Course",
            items: []
        });
    };
    const openEditCategory = (idx)=>{
        if (!data) return;
        setEditingCategoryIdx(idx);
        // Deep copy safely
        setCategoryModal(JSON.parse(JSON.stringify(data.menu[idx])));
    };
    const saveCategoryModal = ()=>{
        if (!data || !categoryModal) return;
        const newData = {
            ...data
        };
        if (editingCategoryIdx !== null) {
            newData.menu[editingCategoryIdx] = categoryModal;
        } else {
            newData.menu.unshift(categoryModal);
        }
        setData(newData);
        setCategoryModal(null);
    };
    const deleteCategory = (idx)=>{
        if (!data) return;
        if (!confirm("Are you sure you want to delete an entire category?")) return;
        const newData = {
            ...data
        };
        newData.menu.splice(idx, 1);
        setData(newData);
    };
    const openCreateItem = (catIdx)=>{
        setEditingItemInfo({
            catIdx,
            itemIdx: -1
        });
        setItemModal({
            name: "",
            price: 0,
            half: null,
            full: null
        });
    };
    const openEditItem = (catIdx, itemIdx)=>{
        if (!data) return;
        setEditingItemInfo({
            catIdx,
            itemIdx
        });
        setItemModal(JSON.parse(JSON.stringify(data.menu[catIdx].items[itemIdx])));
    };
    const handleImageUpload = async (file)=>{
        if (!file || !itemModal) return;
        setUploading(true);
        console.log("Starting upload for:", file.name, "to bucket:", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].app.options.storageBucket);
        try {
            const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"], `menu-items/${Date.now()}-${file.name}`);
            const uploadResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, file);
            console.log("Upload successful:", uploadResult);
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
            setItemModal({
                ...itemModal,
                image: url
            });
        } catch (error) {
            console.error("Firebase Storage Upload Error:", error);
            alert(`Image upload failed: ${error?.message || "Unknown error"}. Check console for details.`);
        } finally{
            setUploading(false);
        }
    };
    const saveItemModal = ()=>{
        if (!data || !itemModal || !editingItemInfo) return;
        const newData = {
            ...data
        };
        const cat = newData.menu[editingItemInfo.catIdx];
        if (editingItemInfo.itemIdx >= 0) {
            cat.items[editingItemInfo.itemIdx] = itemModal;
        } else {
            cat.items.push(itemModal);
        }
        setData(newData);
        setItemModal(null);
    };
    const deleteItem = (catIdx, itemIdx)=>{
        if (!data) return;
        if (!confirm("Delete this item?")) return;
        const newData = {
            ...data
        };
        newData.menu[catIdx].items.splice(itemIdx, 1);
        setData(newData);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading menu editor..."
            }, void 0, false, {
                fileName: "[project]/app/menu/page.tsx",
                lineNumber: 175,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/menu/page.tsx",
            lineNumber: 174,
            columnNumber: 13
        }, this);
    }
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No menu data found in database."
                }, void 0, false, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400",
                    children: "Please make sure the frontend or admin initialized it."
                }, void 0, false, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/menu/page.tsx",
            lineNumber: 182,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-gray-200 sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUtensils"], {
                                    className: "text-red-600 text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold text-gray-900",
                                            children: "Chopstick Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Live Menu Editor"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreStatusToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSavePrimary,
                                    disabled: saving,
                                    className: "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg flex gap-2 items-center cursor-pointer transition-colors disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSave"], {}, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        saving ? "Saving..." : "Save to Live Database"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 192,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/menu/page.tsx",
                lineNumber: 191,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/menu/page.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Menu Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/app/menu/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: 'Add, reorder, or update sections like "Starters", "Chinese" etc.'
                                    }, void 0, false, {
                                        fileName: "[project]/app/menu/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/menu/page.tsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openCreateCategory,
                                className: "bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 font-bold rounded-lg flex items-center gap-2 cursor-pointer transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                        fileName: "[project]/app/menu/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 25
                                    }, this),
                                    " Add Category"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/menu/page.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/menu/page.tsx",
                        lineNumber: 216,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: data.menu.map((category, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-100 px-6 py-4 flex items-center justify-between border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-900",
                                                        children: category.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/menu/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded font-medium",
                                                                children: category.cuisine
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/menu/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded font-medium",
                                                                children: category.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/menu/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded font-medium",
                                                                children: category.section
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/menu/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/menu/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/menu/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openEditCategory(catIdx),
                                                        className: "p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-gray-600 cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/menu/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteCategory(catIdx),
                                                        className: "p-2 bg-white border border-red-200 rounded hover:bg-red-50 text-red-600 cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/menu/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/menu/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/menu/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-0",
                                        children: [
                                            category.items.map((item, itemIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: item.image,
                                                                        alt: item.name,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/menu/page.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/menu/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/menu/page.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500 font-bold",
                                                                            children: [
                                                                                item.price ? `₹${item.price}` : "",
                                                                                item.half ? `Half: ₹${item.half} ` : "",
                                                                                item.full ? `Full: ₹${item.full}` : ""
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/menu/page.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/menu/page.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>openEditItem(catIdx, itemIdx),
                                                                    className: "p-1.5 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                                        fileName: "[project]/app/menu/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/menu/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>deleteItem(catIdx, itemIdx),
                                                                    className: "p-1.5 text-gray-400 hover:text-red-600 transition-colors cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                                                        fileName: "[project]/app/menu/page.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/menu/page.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, itemIdx, true, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 37
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-6 py-3 bg-gray-50/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openCreateItem(catIdx),
                                                    className: "text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 41
                                                        }, this),
                                                        " Add Item to ",
                                                        category.category
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/menu/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/menu/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, catIdx, true, {
                                fileName: "[project]/app/menu/page.tsx",
                                lineNumber: 231,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/menu/page.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/menu/page.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this),
            categoryModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl w-full max-w-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: editingCategoryIdx !== null ? "Edit Category" : "Add Category"
                        }, void 0, false, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 309,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-1",
                                            children: 'Display Name (e.g. "Main Course Non-Veg")'
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: categoryModal.category,
                                            onChange: (e)=>setCategoryModal({
                                                    ...categoryModal,
                                                    category: e.target.value
                                                }),
                                            className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-1",
                                                    children: 'Cuisine (e.g. "Indian")'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: categoryModal.cuisine,
                                                    onChange: (e)=>setCategoryModal({
                                                            ...categoryModal,
                                                            cuisine: e.target.value
                                                        }),
                                                    className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-1",
                                                    children: "Type (Veg/Non-Vegetarian)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: categoryModal.type,
                                                    onChange: (e)=>setCategoryModal({
                                                            ...categoryModal,
                                                            type: e.target.value
                                                        }),
                                                    className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 310,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCategoryModal(null),
                                    className: "px-4 py-2 font-bold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveCategoryModal,
                                    className: "px-4 py-2 font-bold text-white bg-gray-900 hover:bg-black rounded-lg cursor-pointer transition-colors",
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 341,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 308,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/menu/page.tsx",
                lineNumber: 307,
                columnNumber: 17
            }, this),
            itemModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 overflow-hidden flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: editingItemInfo && editingItemInfo.itemIdx >= 0 ? "Edit Item" : "Add Item"
                        }, void 0, false, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 352,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 overflow-y-auto no-scrollbar pr-1 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-1",
                                            children: "Item Image"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onDragOver: (e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                            },
                                            onDrop: (e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                const file = e.dataTransfer.files?.[0];
                                                if (file) handleImageUpload(file);
                                            },
                                            onClick: ()=>fileInputRef.current?.click(),
                                            className: `relative border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${itemModal.image ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-blue-50"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    ref: fileInputRef,
                                                    onChange: (e)=>{
                                                        const file = e.target.files?.[0];
                                                        if (file) handleImageUpload(file);
                                                    },
                                                    className: "hidden",
                                                    accept: "image/*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 37
                                                }, this),
                                                uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 border-3 border-blue-600 border-t-transparent animate-spin rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-blue-600 font-bold",
                                                            children: "Uploading..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 41
                                                }, this) : itemModal.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: itemModal.image,
                                                            className: "w-24 h-24 object-cover rounded-lg shadow-sm",
                                                            alt: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCloudUploadAlt"], {
                                                                className: "text-white text-xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/menu/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-white rounded-full shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaImage"], {
                                                                className: "text-gray-400 text-xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/menu/page.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-gray-700",
                                                                    children: "Drag & drop or click"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/menu/page.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-gray-400",
                                                                    children: "JPG, PNG or WEBP (Max 5MB)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/menu/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/menu/page.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 357,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-1",
                                            children: "Item Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: itemModal.name,
                                            onChange: (e)=>setItemModal({
                                                    ...itemModal,
                                                    name: e.target.value
                                                }),
                                            className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-1",
                                            children: "Flat Price (₹)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: itemModal.price || "",
                                            onChange: (e)=>setItemModal({
                                                    ...itemModal,
                                                    price: e.target.value ? Number(e.target.value) : null
                                                }),
                                            className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-1",
                                                    children: "Half Price (₹)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: itemModal.half || "",
                                                    onChange: (e)=>setItemModal({
                                                            ...itemModal,
                                                            half: e.target.value ? Number(e.target.value) : null
                                                        }),
                                                    className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium",
                                                    placeholder: "Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-1",
                                                    children: "Full Price (₹)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: itemModal.full || "",
                                                    onChange: (e)=>setItemModal({
                                                            ...itemModal,
                                                            full: e.target.value ? Number(e.target.value) : null
                                                        }),
                                                    className: "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium",
                                                    placeholder: "Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/menu/page.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/menu/page.tsx",
                                            lineNumber: 436,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 355,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end gap-3 pt-4 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setItemModal(null),
                                    className: "px-4 py-2 font-bold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveItemModal,
                                    className: "px-4 py-2 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors",
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/app/menu/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 448,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 351,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/menu/page.tsx",
                lineNumber: 350,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/menu/page.tsx",
        lineNumber: 190,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__797cc147._.js.map