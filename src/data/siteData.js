// ─────────────────────────────────────────
//  src/data/siteData.js
//  Single source of truth for all static data
//  Easy to replace with API/DB calls later
// ─────────────────────────────────────────

export const featuredProjects = [
  {
    id: 1,
    label: 'FEATURED PROJECTS-01',
    title: 'LACASA VILLA',
    description:
      'We create refined, functional spaces where aesthetics meet purpose. Each project is a dialogue between form and feeling — crafted with precision, shaped by context, and inspired by timeless design principles.',
    tags: ['Hyderabad', '2025', 'Residential'],
    image: '/images/lacasa-villa.png',
    overlayColor: 'rgba(33,33,33,0.60)',
  },
  {
    id: 2,
    label: 'FEATURED PROJECTS-02',
    title: 'RIVER EDGE',
    description:
      'Exclusive, spacious villas nestled in a peaceful environment, perfect for those seeking luxury and privacy.',
    tags: ['Hyderabad', '2025', 'Residential'],
    image: '/images/river-edge.jpg',
    overlayColor: 'rgba(33,33,33,0.60)',
  },
  {
    id: 3,
    label: 'FEATURED PROJECT-03',
    title: 'SKYLINE HEIGHTS',
    description:
      'A luxury high-rise offering stunning city views and top-tier amenities designed for modern living.',
    tags: ['Hyderabad', '2025', 'Residential'],
    image: '/images/skyline-heights.png',
    overlayColor: 'rgba(10,10,20,0.55)',
  },
];

export const ourProjects = [
  {
    id: 1,
    image: '/images/project1.png',
    name: "LA'PALOMA",
    type: 'Luxury Villas',
    badge: 'COMPLETED PROJECT',
  },
  {
    id: 2,
    image: '/images/project2.png',
    name: 'SKYILA',
    type: 'Luxury Apartments',
    badge: 'COMPLETED PROJECT',
  },
  {
    id: 3,
    image: '/images/project3.png',
    name: 'RIVER EDGE',
    type: 'Residential',
    badge: 'COMPLETED PROJECT',
  },
];

export const services = [
  {
    id: 1,
    title: 'High-Rise Apartments',
    description:
      'Modern living with panoramic views. Our high-rise projects are designed with a focus on luxury, convenience, and sustainability.',
  },
  {
    id: 2,
    title: 'Luxury Villas',
    description:
      'We specialize in creating exclusive, spacious luxury villas that provide unparalleled comfort, privacy, and elegance, tailored to your lifestyle.',
  },
  {
    id: 3,
    title: 'Commercial Spaces',
    description:
      'Our commercial spaces are designed to foster productivity and innovation, with a focus on functionality, sophistication, and the needs of modern businesses.',
  },
  {
    id: 4,
    title: 'Open Plots',
    description:
      'Prime locations for investment or personal development. Our open plots offer the freedom to create your ideal space.',
  },
];

export const stats = [
  { number: '20+',   label: 'Years of Experience' },
  { number: '1500+', label: 'Satisfied Home Owners' },
  { number: '30+',   label: 'Projects Completed' },
];

export const newsItems = [
  {
    id: 1,
    image: '/images/news&updates1.png',
    project: 'River Edge',
    date: '01.08.2025',
    title: 'The Future of Urban Living: Trends in Real Estate Development',
  },
  {
    id: 2,
    image: '/images/news&updates2.png',
    project: "La'Paloma",
    date: '01.06.2024',
    title: 'Building Your Dream Home: How E-Infra Delivers Luxury Villas',
  },
  {
    id: 3,
    image: '/images/news&updates3.png',
    project: 'River Edge',
    date: '01.24.2027',
    title: 'How to Choose the Perfect Commercial Space for Your Business',
  },
];

export const clientReviews = [
  {
    id: 1,
    project: 'Skyline Heights',
    review: '"Living in Skyline Heights has been a dream come true. The views are absolutely breathtaking, and the modern amenities make every day feel luxurious. The location in Gachibowli is perfect — close to everything yet peaceful. Highly recommend this place!"',
    author: 'Ravi Kumar, Resident',
  },
  {
    id: 2,
    project: 'Green Park Towers',
    review: '"As an eco-conscious buyer, Green Park Towers was exactly what I was looking for. The blend of modern design and sustainable features made it an easy choice. I feel good knowing that my home is energy-efficient, and the community is equally forward-thinking."',
    author: 'Suresh Reddy, Resident',
  },
  {
    id: 3,
    project: 'Sapphire Residences',
    review: '"From the first visit, I knew Sapphire Residences was special. The luxurious interiors, amazing amenities, and prime location exceeded my expectations. It\'s more than a home — it\'s a lifestyle."',
    author: 'Priya Desai, Resident',
  },
  {
    id: 4,
    project: 'The Corporate Hub',
    review: '"The Corporate Hub was a game-changer for our business. The space is not only visually impressive but also strategically located. It provides the perfect environment for our team to collaborate and innovate."',
    author: 'Prakash Mehta, CEO of Tech Innovations Pvt. Ltd.',
  },
  {
    id: 5,
    project: 'The Villas at Maple Grove',
    review: '"The Villas at Maple Grove offered the perfect balance of elegance and serenity. The quiet neighborhood and expansive design make it the ideal sanctuary. I couldn\'t be happier!"',
    author: 'Anjali Sharma, Villa Owner',
  },
];