// Data Statis — Platform Perjalanan TravEase

export type Region = "Semua" | "Eropa" | "Asia" | "Amerika" | "Oseania";

export const destinationData = [
  {
    id: 1,
    image: "/images/e1.jpg",
    country: "Prancis",
    region: "Eropa" as Region,
    travelers: "150.000",
    highlight: "Menara Eiffel & Riviera",
  },
  {
    id: 2,
    image: "/images/e3.jpg",
    country: "Amerika Serikat",
    region: "Amerika" as Region,
    travelers: "250.000",
    highlight: "Taman Nasional & Kota-kota",
  },
  {
    id: 3,
    image: "/images/e4.jpg",
    country: "Italia",
    region: "Eropa" as Region,
    travelers: "180.000",
    highlight: "Roma, Florence & Amalfi",
  },
  {
    id: 4,
    image: "/images/e5.jpg",
    country: "Jepang",
    region: "Asia" as Region,
    travelers: "200.000",
    highlight: "Tokyo, Kyoto & Osaka",
  },
  {
    id: 5,
    image: "/images/e2.jpg",
    country: "Australia",
    region: "Oseania" as Region,
    travelers: "120.000",
    highlight: "Great Barrier Reef & Sydney",
  },
  {
    id: 6,
    image: "/images/e6.jpg",
    country: "Kanada",
    region: "Amerika" as Region,
    travelers: "175.000",
    highlight: "Pegunungan Rocky & Air Terjun Niagara",
  },
  {
    id: 7,
    image: "/images/e7.jpg",
    country: "Jerman",
    region: "Eropa" as Region,
    travelers: "160.000",
    highlight: "Bavaria & Berlin",
  },
  {
    id: 8,
    image: "/images/e8.jpg",
    country: "Brasil",
    region: "Amerika" as Region,
    travelers: "140.000",
    highlight: "Amazon & Rio de Janeiro",
  },
];

export const hotelsData = [
  {
    id: 1,
    image: "/images/a1.jpg",
    name: "The Grand London Resort and Spa",
    location: "Westminster, London",
    rating: 4.6,
    reviews: "2.345",
    price: "72",
  },
  {
    id: 2,
    image: "/images/a2.jpg",
    name: "Barcelona City Suites Deluxe Hotel",
    location: "Ciutat Vella, Barcelona",
    rating: 4.7,
    reviews: "1.912",
    price: "85",
  },
  {
    id: 3,
    image: "/images/a3.jpg",
    name: "Times Square Premium Stay Hotel",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: "3.420",
    price: "95",
  },
  {
    id: 4,
    image: "/images/a4.jpg",
    name: "Hilton Roma Luxury Hotel Palace",
    location: "Vaticano Prati, Rome",
    rating: 4.5,
    reviews: "2.876",
    price: "68",
  },
];

export const toursData = [
  {
    id: 1,
    image: "/images/t1.jpg",
    title: "Tur Keajaiban Bersejarah Stonehenge & Oxford",
    location: "Wiltshire, England",
    time: "12+ jam",
    type: "Budaya & Sejarah",
    rating: 4.9,
    reviews: "1.245",
    price: "65",
  },
  {
    id: 2,
    image: "/images/t2.jpg",
    title: "Tur Jalan Kaki Kuartal Gothic Barcelona",
    location: "Ciutat Vella, Barcelona",
    time: "3+ jam",
    type: "Jalan Kaki & Wisata",
    rating: 4.7,
    reviews: "876",
    price: "50",
  },
  {
    id: 3,
    image: "/images/t3.jpg",
    title: "Pesiar Mewah Thames dengan Makan Malam",
    location: "London, United Kingdom",
    time: "2–3 jam",
    type: "Pesiar Pribadi & Mewah",
    rating: 4.8,
    reviews: "2.300",
    price: "110",
  },
  {
    id: 4,
    image: "/images/t4.jpg",
    title: "Tur Jalan Kaki Sejarah Berhantu Edinburgh",
    location: "Edinburgh, Scotland",
    time: "2+ jam",
    type: "Hantu & Misteri",
    rating: 4.6,
    reviews: "1.050",
    price: "40",
  },
];

export const reviewData = [
  {
    id: 1,
    name: "Daniel Parker",
    role: "Adventure Traveler",
    review:
      "Booking was incredibly easy and fast. I found the perfect stay within minutes. Definitely using Voya again!",
    image: "/images/u1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Lucas Mitchell",
    role: "Business Traveler",
    review:
      "Excellent service and smooth experience. I got quick responses and the whole trip was hassle-free!",
    image: "/images/u2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Nathan Brooks",
    role: "Solo Explorer",
    review:
      "Great platform! I booked a last-minute trip and everything worked out perfectly. Very reliable service.",
    image: "/images/u3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Aaron Wright",
    role: "Family Traveler",
    review:
      "The site was easy to navigate, and I found great deals quickly. Saved me time and money for our family holiday!",
    image: "/images/u1.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Ethan Carter",
    role: "Luxury Traveler",
    review:
      "Super helpful and convenient. Their recommendations really made my vacation better. Highly recommended!",
    image: "/images/u2.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Julian Hayes",
    role: "Frequent Flyer",
    review:
      "Everything went smoothly from start to finish. It felt like they really cared about my travel experience.",
    image: "/images/u3.jpg",
    rating: 5,
  },
];

export const statsData = [
  { value: 500, suffix: "K+", label: "Happy Travelers" },
  { value: 120, suffix: "+", label: "Destinations" },
  { value: 2, suffix: "K+", label: "Luxury Hotels" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export const newsData = [
  {
    id: 1,
    image: "/images/p1.jpg",
    category: "Travel Guide",
    title: "Top 10 Hidden Gems to Visit in Australia",
    date: "15 November 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "/images/p2.jpg",
    category: "Culture",
    title: "Exploring the Ancient Temples of Southeast Asia",
    date: "25 November 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    image: "/images/p3.jpg",
    category: "Adventure",
    title: "Best Hiking Trails in the Himalayas for 2025",
    date: "22 November 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    image: "/images/p4.jpg",
    category: "Luxury",
    title: "Exclusive Resorts in New Zealand Worth Every Penny",
    date: "5 November 2024",
    readTime: "4 min read",
  },
];
