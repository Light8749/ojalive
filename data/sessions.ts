export type Category = "Fashion" | "Electronics" | "Phones" | "Beauty" | "Home";

export type LiveSession = {
  id: number;
  title: string;
  vendor: string;
  verified: boolean;
  category: Category;
  price: number;
  viewers: number;
  location: string;
  image: string;
};

// photos from Unsplash (free to use)
const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&q=75&auto=format&fit=crop`;

export const categories: Category[] = [
  "Fashion",
  "Electronics",
  "Phones",
  "Beauty",
  "Home",
];

export const sessions: LiveSession[] = [
  {
    id: 1,
    title: "Ankara two-piece set, sizes 8 to 16",
    vendor: "Ankara Avenue",
    verified: true,
    category: "Fashion",
    price: 28500,
    viewers: 1243,
    location: "Yaba, Lagos",
    image: photo("1696962678565-bee84e6b9cb6"),
  },
  {
    id: 2,
    title: "JBL Flip 6 Bluetooth speaker",
    vendor: "GadgetHub Lagos",
    verified: true,
    category: "Electronics",
    price: 94000,
    viewers: 876,
    location: "Computer Village, Ikeja",
    image: photo("1608043152269-423dbba4e7e1"),
  },
  {
    id: 3,
    title: "iPhone 13 128GB, UK used, 90% battery",
    vendor: "Phone Plug Ikeja",
    verified: true,
    category: "Phones",
    price: 415000,
    viewers: 2310,
    location: "Ikeja, Lagos",
    image: photo("1726574686436-5ef90358e032"),
  },
  {
    id: 4,
    title: "Vitamin C serum and shea butter bundle",
    vendor: "Glow by Tola",
    verified: false,
    category: "Beauty",
    price: 17500,
    viewers: 402,
    location: "Ibadan, Oyo",
    image: photo("1620916297397-a4a5402a3c6c"),
  },
  {
    id: 5,
    title: "6-seater dining set with cushioned chairs",
    vendor: "Casa Naija Furniture",
    verified: true,
    category: "Home",
    price: 320000,
    viewers: 318,
    location: "Wuse, Abuja",
    image: photo("1758977403341-0104135995af"),
  },
  {
    id: 6,
    title: "Nike Air Force 1, sizes 42 to 45",
    vendor: "Sneaker Vault",
    verified: false,
    category: "Fashion",
    price: 62000,
    viewers: 954,
    location: "Lekki, Lagos",
    image: photo("1712168332222-c1996322f935"),
  },
  {
    id: 7,
    title: "Tecno Camon 30 Pro, brand new in box",
    vendor: "Tecno Zone",
    verified: true,
    category: "Phones",
    price: 289000,
    viewers: 1587,
    location: "Onitsha, Anambra",
    image: photo("1598965402089-897ce52e8355"),
  },
  {
    id: 8,
    title: "Anker 20,000mAh power bank",
    vendor: "PowerUp Store",
    verified: true,
    category: "Electronics",
    price: 38000,
    viewers: 640,
    location: "Port Harcourt, Rivers",
    image: photo("1566554738544-d962991c3fee"),
  },
  {
    id: 9,
    title: "Human hair bundle, 22 inches",
    vendor: "Beauty Bar Abuja",
    verified: true,
    category: "Beauty",
    price: 85000,
    viewers: 1102,
    location: "Garki, Abuja",
    image: photo("1618566909269-a09202832ac6"),
  },
  {
    id: 10,
    title: "Memory foam mattress, 6 by 6",
    vendor: "Homely Touch",
    verified: false,
    category: "Home",
    price: 145000,
    viewers: 271,
    location: "Kano, Kano",
    image: photo("1635594202056-9ea3b497e5c0"),
  },
  {
    id: 11,
    title: "Agbada with cap, hand embroidered",
    vendor: "Kings Native Wears",
    verified: true,
    category: "Fashion",
    price: 75000,
    viewers: 689,
    location: "Abeokuta, Ogun",
    image: photo("1663044022557-7d5d4c1d5318"),
  },
  {
    id: 12,
    title: "Samsung Galaxy A55, 256GB",
    vendor: "Mobile World NG",
    verified: false,
    category: "Phones",
    price: 398000,
    viewers: 1034,
    location: "Benin City, Edo",
    image: photo("1707438095940-1eee18e85400"),
  },
];
