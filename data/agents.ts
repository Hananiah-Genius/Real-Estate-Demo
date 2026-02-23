export type Agent = {
  id: number;
  name: string;
  role: string;
  photo: string;
  email: string;
  phone: string;
  whatsapp?: string;
  description: string;
  experience: string;
  specialties: string[];
  certifications?: string[];
  achievements?: string[];
  languages?: string[];
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
};

export const agents: Agent[] = [
  {
    id: 1,
    name: "Jane Mwangi",
    role: "Senior Real Estate Agent",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    email: "jane@primeestates.co.ke",
    phone: "+254113388120",
    whatsapp: "+254113388120",
    description:
      "Jane has over 10 years of experience in residential real estate in Nairobi. She is known for her personalized approach and deep market knowledge.",
    experience:
      "10+ years in residential and luxury real estate across Nairobi and Mombasa.",
    specialties: ["Residential Sales", "Luxury Homes", "Property Valuation"],
    certifications: [
      "Certified Residential Specialist (CRS)",
      "Kenya REA License",
    ],
    achievements: [
      "Top 10 Agents in Kenya 2023",
      "Over 200 properties sold annually",
    ],
    languages: ["English", "Swahili"],
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "John Ochieng",
    role: "Commercial Properties Specialist",
    photo:
      "https://images.unsplash.com/photo-1648293822097-b027a1470d64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    email: "john@primeestates.co.ke",
    phone: "+254113388120",
    whatsapp: "+254113388120",
    description:
      "John specializes in commercial properties across Kenya, helping investors find high-return opportunities with confidence.",
    experience: "8 years advising investors in commercial and office spaces.",
    specialties: [
      "Commercial Leasing",
      "Investment Properties",
      "Market Analysis",
    ],
    certifications: [
      "Kenya REA License",
      "Property Investment Advisor Certificate",
    ],
    achievements: [
      "Closed deals worth 500M KES in 2023",
      "Featured in Business Daily",
    ],
    languages: ["English", "Swahili"],
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Mercy Kamau",
    role: "Residential Sales Agent",
    photo:
      "https://images.unsplash.com/photo-1617244148472-3566e69ae9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    email: "mercy@primeestates.co.ke",
    phone: "+254113388120",
    whatsapp: "+254113388120",
    description:
      "Mercy is passionate about finding dream homes for families. Her expertise in residential sales ensures smooth transactions.",
    experience:
      "5 years in residential property sales with excellent client satisfaction.",
    specialties: ["Family Homes", "Apartments", "Negotiation"],
    certifications: ["Kenya REA License"],
    achievements: [
      "Client Satisfaction Award 2022",
      "Top 20 Sales Agents Nairobi",
    ],
    languages: ["English", "Swahili"],
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "David Njoroge",
    role: "Luxury Homes Specialist",
    photo:
      "https://images.unsplash.com/photo-1685376104208-fc94af0786e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    email: "david@primeestates.co.ke",
    phone: "+254113388120",
    whatsapp: "+254113388120",
    description:
      "David focuses on luxury properties and high-end clients, providing unmatched service and privacy in premium real estate.",
    experience:
      "12 years in luxury and high-end real estate in Nairobi and Mombasa.",
    specialties: ["Luxury Villas", "High-End Apartments", "Exclusive Listings"],
    certifications: ["Luxury Home Marketing Specialist"],
    achievements: [
      "Sold 50+ luxury properties in 2023",
      "Featured in Forbes Africa",
    ],
    languages: ["English", "Swahili", "French"],
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Lilian Wanjiku",
    role: "Property Investment Advisor",
    photo:
      "https://images.unsplash.com/photo-1573496782432-8690d8148c46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    email: "lilian@primeestates.co.ke",
    phone: "+254113388120",
    whatsapp: "+254113388120",
    description:
      "Lilian advises investors on high-yield real estate opportunities and guides them through every step of the investment process.",
    experience:
      "7 years providing investment insights and portfolio management.",
    specialties: [
      "Investment Strategy",
      "High-Yield Properties",
      "Market Forecasting",
    ],
    certifications: ["Certified Investment Advisor", "Kenya REA License"],
    achievements: [
      "Helped clients earn 20% ROI annually",
      "Featured in Investor Weekly",
    ],
    languages: ["English", "Swahili"],
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Samuel Otieno",
    role: "Real Estate Consultant",
    photo:
      "https://images.unsplash.com/photo-1620511469298-7c119cc6982c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8", // Clear Unsplash image
    email: "samuel@primeestates.co.ke",
    phone: "+254113388120",
    whatsapp: "+254113388120",
    description:
      "Samuel specializes in both residential and commercial properties, helping clients make informed investment decisions. He is known for his attention to detail and excellent negotiation skills.",
    experience:
      "9 years of experience in real estate advisory, residential and commercial sales across Nairobi and Mombasa.",
    specialties: [
      "Residential Sales",
      "Commercial Leasing",
      "Property Investment",
    ],
    certifications: ["Kenya REA License", "Certified Real Estate Consultant"],
    achievements: [
      "Successfully closed over 150 property deals in 2023",
      "Featured in Nairobi Real Estate Magazine",
    ],
    languages: ["English", "Swahili"],
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
];
