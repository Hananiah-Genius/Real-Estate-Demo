// /data/properties.ts

export interface Property {
  id: string;
  isfeatured?: boolean;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  plotSize: string;
  image: string;
  shortDescription: string;
  description: string;
  gallery: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    isfeatured: true,
    title: "Modern Apartment in Westlands",
    price: 19800000,
    location: "Nairobi, Westlands",
    bedrooms: 3,
    bathrooms: 2,
    plotSize: "1,850 sq.ft",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
    shortDescription:
      "Premium 3-bedroom apartment in the heart of Westlands featuring spacious interiors, a private balcony, modern finishes, and close proximity to shopping malls, offices, and entertainment hubs.",
    description:
      "This elegant 3-bedroom apartment is located in the heart of Westlands, one of Nairobi’s most sought-after addresses. Designed with modern urban living in mind, the property features an expansive open-plan lounge and dining area, a fully fitted contemporary kitchen with granite countertops, and premium cabinetry. The master bedroom is ensuite with built-in wardrobes, while the additional bedrooms offer ample natural lighting and storage space.\n\nResidents enjoy 24/7 security, high-speed lifts, backup generator, borehole water supply, fully equipped gym, rooftop entertainment area, and two dedicated parking spaces. Conveniently positioned near shopping malls, international schools, fine dining restaurants, and major transport links, this apartment is ideal for both homeowners and investors seeking strong rental returns.",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    ],
  },

  {
    id: "2",
    isfeatured: true,
    title: "Luxury Villa in Karen",
    price: 82000000,
    location: "Nairobi, Karen",
    bedrooms: 5,
    bathrooms: 5,
    plotSize: "0.5 Acre",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    shortDescription:
      "Exquisite 5-bedroom all-ensuite villa in the serene suburb of Karen, set on half an acre with landscaped gardens, a private pool, and premium modern architectural design.",
    description:
      "Situated in the serene and leafy suburb of Karen, this luxurious 5-bedroom all-ensuite villa offers privacy, sophistication, and timeless architectural design. Built on a generous half-acre plot, the property boasts manicured gardens, a private swimming pool, and a spacious cabro-paved driveway.\n\nThe interior features double-volume ceilings, expansive glass windows for natural lighting, a designer kitchen fitted with premium appliances, a separate family TV lounge, home office, and a grand master suite complete with walk-in closet and spa-style bathroom. Additional amenities include staff quarters, CCTV surveillance, electric fencing, solar water heating, and backup power.\n\nLocated within a secure gated community near international schools, shopping centers, and top-tier hospitals, this villa offers a perfect blend of tranquility and modern luxury.",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
  },

  {
    id: "3",
    isfeatured: true,
    title: "Beachfront House in Nyali",
    price: 46500000,
    location: "Mombasa, Nyali",
    bedrooms: 4,
    bathrooms: 3,
    plotSize: "4,200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    shortDescription:
      "Elegant 4-bedroom beachfront residence in Nyali offering uninterrupted ocean views, direct beach access, spacious outdoor terraces, and modern coastal-inspired interiors.",
    description:
      "Experience coastal luxury in this stunning 4-bedroom beachfront residence located in the prestigious Nyali area of Mombasa. Designed for comfort and relaxation, the property offers uninterrupted ocean views, direct beach access, and expansive outdoor terraces perfect for entertaining.\n\nThe home features an open-plan living and dining space, modern fitted kitchen, spacious ensuite master bedroom with balcony overlooking the sea, and three additional well-appointed bedrooms. Large sliding glass doors enhance airflow and natural lighting while seamlessly connecting indoor and outdoor living areas.\n\nAdditional features include a private swimming pool, landscaped tropical garden, perimeter wall, secure parking, and backup water supply. Ideal as a holiday home, Airbnb investment, or permanent coastal residence.",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80",
    ],
  },
  {
    id: "4",
    isfeatured: true,
    title: "Contemporary Townhouse in Lavington",
    price: 34500000,
    location: "Nairobi, Lavington",
    bedrooms: 4,
    bathrooms: 4,
    plotSize: "3,200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    shortDescription:
      "Stylish 4-bedroom townhouse in Lavington featuring open-plan living spaces, a private garden, secure gated community setting, and modern architectural finishes throughout.",
    description:
      "Located in the tranquil and highly desirable neighborhood of Lavington, this contemporary 4-bedroom townhouse offers comfort, privacy, and refined urban living. The property is part of an exclusive gated development with 24/7 security and controlled access.\n\nThe ground floor features a spacious open-plan lounge and dining area with large windows that allow for abundant natural light. A modern fitted kitchen with quality cabinetry and ample storage connects seamlessly to the backyard garden, ideal for entertaining or family relaxation. All bedrooms are ensuite, with the master suite boasting a walk-in closet and a luxurious bathroom.\n\nAdditional features include a private garage for two cars, staff quarters, backup water supply, solar water heating, and landscaped common areas. The property is conveniently located near top schools, shopping malls, and major road networks.",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    ],
  },

  {
    id: "5",
    isfeatured: true,
    title: "Elegant Condo in Kilimani",
    price: 23500000,
    location: "Nairobi, Kilimani",
    bedrooms: 2,
    bathrooms: 2,
    plotSize: "1,400 sq.ft",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80",
    shortDescription:
      "Modern 2-bedroom condo in Kilimani offering high-end finishes, balcony city views, premium security, and convenient access to shopping, dining, and business hubs.",
    description:
      "This elegant 2-bedroom condominium in Kilimani combines contemporary design with everyday practicality. The unit features a bright open-plan living and dining area that opens onto a private balcony with sweeping city views. The kitchen is fully fitted with modern appliances, granite countertops, and custom cabinetry.\n\nBoth bedrooms are spacious with built-in wardrobes, while the master bedroom includes an ensuite bathroom finished with premium fixtures. Residents benefit from high-speed lifts, a fully equipped gym, rooftop lounge, borehole water supply, backup generator, and secure basement parking.\n\nSituated within close proximity to shopping centers, international schools, hospitals, and major business districts, this condo is ideal for professionals, young families, or investors seeking strong rental demand.",
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    ],
  },

  {
    id: "6",
    isfeatured: true,
    title: "Modern Penthouse in Upper Hill",
    price: 105000000,
    location: "Nairobi, Upper Hill",
    bedrooms: 4,
    bathrooms: 4,
    plotSize: "3,800 sq.ft",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80",
    shortDescription:
      "Exclusive 4-bedroom penthouse in Upper Hill featuring panoramic skyline views, private lift access, expansive terrace space, and premium executive-level finishes.",
    description:
      "Positioned in Nairobi’s prime commercial district of Upper Hill, this luxurious 4-bedroom penthouse offers unmatched city skyline views and executive-level living. The residence features direct private lift access, ensuring exclusivity and privacy.\n\nThe expansive living area opens onto a large terrace ideal for entertaining, outdoor dining, or simply enjoying panoramic sunset views. The designer kitchen comes fully equipped with premium integrated appliances, sleek cabinetry, and a separate pantry. All bedrooms are ensuite, with the master suite offering a walk-in closet and spa-inspired bathroom.\n\nResidents enjoy world-class amenities including a heated swimming pool, fully equipped gym, rooftop entertainment lounge, backup generator, borehole water, CCTV surveillance, and secure underground parking. Perfect for executives, diplomats, or high-end investors.",
    gallery: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80",
    ],
  },
  {
    id: "7",
    title: "Cozy Bungalow in Kitengela",
    price: 21000000,
    location: "Nairobi, Kitengela",
    bedrooms: 3,
    bathrooms: 2,
    plotSize: "50 x 100 ft",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    shortDescription:
      "Charming 3-bedroom bungalow in Kitengela set on a spacious 50x100 plot, featuring a private garden, modern interiors, and a peaceful family-friendly environment.",
    description:
      "This beautifully designed 3-bedroom bungalow in Kitengela offers the perfect blend of affordability, comfort, and modern living. Set on a generous 50x100 ft plot, the property provides ample outdoor space for gardening, children’s play, or future extensions.\n\nThe home features a spacious lounge and dining area with large windows that allow for natural light and ventilation. The kitchen is thoughtfully designed with quality cabinetry, granite countertops, and sufficient storage space. The master bedroom is ensuite, while the additional bedrooms share a well-finished bathroom.\n\nAdditional features include cabro-paved parking, perimeter wall with electric fencing, secure gate, and reliable water supply. Located in a rapidly growing residential area with access to schools, shopping centers, and major highways, this bungalow is ideal for first-time homeowners or growing families.",
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
    ],
  },

  {
    id: "8",
    title: "Luxury Estate in Runda",
    price: 165000000,
    location: "Nairobi, Runda",
    bedrooms: 7,
    bathrooms: 6,
    plotSize: "1 Acre",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
    shortDescription:
      "Magnificent 7-bedroom luxury estate in Runda set on one acre, featuring expansive gardens, a private swimming pool, guest house, and top-tier security systems.",
    description:
      "Located in the prestigious and highly secure neighborhood of Runda, this magnificent 7-bedroom estate sits on a full acre of beautifully landscaped grounds. The property offers unmatched privacy, grandeur, and architectural excellence.\n\nThe main residence features multiple living areas, a formal dining room, a high-end designer kitchen with premium appliances, and spacious ensuite bedrooms finished with imported fittings. The master suite includes a walk-in closet, private lounge area, and spa-style bathroom.\n\nOutdoors, the estate boasts a large swimming pool, mature gardens, entertainment gazebo, guest house, and ample parking space. Additional features include CCTV surveillance, electric fencing, backup generator, solar water heating, and staff quarters. Ideal for diplomats, executives, or high-net-worth individuals seeking exclusivity and comfort.",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    ],
  },

  {
    id: "9",
    title: "Seaside Villa in Diani",
    price: 92000000,
    location: "Mombasa, Diani",
    bedrooms: 5,
    bathrooms: 4,
    plotSize: "5,000 sq.ft",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
    shortDescription:
      "Stunning 5-bedroom seaside villa in Diani offering private beach access, infinity pool, tropical gardens, and elegant coastal-inspired interiors.",
    description:
      "This exceptional 5-bedroom seaside villa in Diani offers the ultimate coastal lifestyle with breathtaking ocean views and direct private beach access. Designed with elegance and relaxation in mind, the property seamlessly blends modern luxury with tropical charm.\n\nThe villa features expansive indoor and outdoor living spaces, a fully fitted modern kitchen, spacious ensuite bedrooms, and large sliding glass doors that open onto a sun-drenched terrace overlooking the infinity pool. The master suite includes a private balcony with panoramic sea views.\n\nAdditional amenities include landscaped tropical gardens, secure perimeter wall, backup water supply, ample parking, and staff quarters. Whether as a high-end holiday retreat, Airbnb investment, or permanent residence, this property presents a rare opportunity in one of Kenya’s most sought-after coastal destinations.",
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
  },
  {
    id: "10",
    title: "Modern Family Home in Narok Town",
    price: 16500000,
    location: "Narok, Narok Town",
    bedrooms: 4,
    bathrooms: 3,
    plotSize: "50 x 100 ft",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80",
    shortDescription:
      "Spacious 4-bedroom modern family home in Narok Town set on a 50x100 plot, featuring contemporary finishes, secure perimeter wall, and close proximity to schools and business centers.",
    description:
      "Located in a rapidly developing residential area of Narok Town, this well-designed 4-bedroom home offers comfort, security, and long-term value. Sitting on a 50x100 ft plot, the property provides ample outdoor space for parking, gardening, or future expansion.\n\nThe home features a generous lounge and dining area, modern fitted kitchen with quality cabinetry, and well-ventilated bedrooms with built-in wardrobes. The master bedroom is ensuite, while the additional bedrooms are spacious and thoughtfully finished.\n\nAdditional features include cabro-paved driveway, perimeter wall, secure gate, reliable water supply, and ready electricity connection. With Narok’s steady urban growth and strategic location along the Nairobi–Bomet highway, this property presents an excellent opportunity for both homeowners and investors.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
    ],
  },

  {
    id: "11",
    title: "Maasai Mara View Villa in Narok",
    price: 48000000,
    location: "Narok, Near Maasai Mara",
    bedrooms: 5,
    bathrooms: 4,
    plotSize: "1 Acre",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    shortDescription:
      "Elegant 5-bedroom countryside villa near Maasai Mara set on one acre, offering scenic savannah views, expansive outdoor spaces, and high-end modern finishes.",
    description:
      "Positioned near the world-renowned Maasai Mara reserve, this exceptional 5-bedroom villa offers breathtaking views of the surrounding savannah landscape. Built on a full acre, the property blends luxury living with natural serenity.\n\nThe villa features expansive living areas, a fully fitted contemporary kitchen, large ensuite bedrooms, and wide verandas designed to capture sunrise and sunset views. The master suite includes a walk-in closet and private balcony overlooking the countryside.\n\nIdeal as a private residence, eco-lodge conversion, or high-end Airbnb investment, the property benefits from growing tourism traffic in the Narok region. Additional amenities include solar power backup, borehole water supply, secure perimeter fencing, and ample parking space.",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    ],
  },

  {
    id: "12",
    title: "Prime Investment Land in Narok",
    price: 8500000,
    location: "Narok, Along Narok-Bomet Highway",
    bedrooms: 0,
    bathrooms: 0,
    plotSize: "2 Acres",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    shortDescription:
      "Prime 2-acre investment land along Narok-Bomet Highway, ideal for commercial development, residential subdivision, or tourism-related projects.",
    description:
      "This strategically located 2-acre parcel of land sits along the busy Narok-Bomet Highway, offering exceptional visibility and accessibility. The flat, well-drained terrain makes it ideal for commercial development, mixed-use projects, or residential subdivision.\n\nNarok continues to experience rapid growth driven by tourism, agriculture, and infrastructure development. Its proximity to Maasai Mara National Reserve significantly enhances investment potential.\n\nThe property has ready access to electricity, road frontage, and nearby water sources. With rising land demand in the region, this parcel presents a strong capital appreciation opportunity for investors seeking long-term growth.",
    gallery: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    ],
  },
  {
    id: "13",
    title: "Modern Bungalow in Milimani, Nakuru",
    price: 18500000,
    location: "Nakuru, Milimani",
    bedrooms: 4,
    bathrooms: 3,
    plotSize: "60 x 100 ft",
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=1200&q=80",
    shortDescription:
      "Elegant 4-bedroom bungalow in Milimani, Nakuru set on a 60x100 plot, featuring contemporary interiors, landscaped compound, and proximity to top schools and shopping centers.",
    description:
      "Situated in the prestigious Milimani area of Nakuru, this beautifully designed 4-bedroom bungalow offers comfort, privacy, and long-term value. Built on a generous 60x100 ft plot, the home provides ample outdoor space ideal for family living.\n\nThe property features a spacious lounge and dining area, a modern fitted kitchen with granite countertops and quality cabinetry, and well-ventilated bedrooms with built-in wardrobes. The master bedroom is ensuite, complemented by additional bathrooms finished with premium fittings.\n\nThe compound includes a cabro-paved driveway, perimeter wall, secure gate, and sufficient parking space. Located near reputable schools, hospitals, shopping malls, and easy access to the Nakuru-Nairobi highway, this home is ideal for families or investors seeking rental income in Nakuru’s fast-growing property market.",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
    ],
  },

  {
    id: "14",
    title: "Lakeview Villa in Nakuru",
    price: 62000000,
    location: "Nakuru, Near Lake Nakuru",
    bedrooms: 5,
    bathrooms: 5,
    plotSize: "0.75 Acre",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    shortDescription:
      "Luxurious 5-bedroom lakeview villa near Lake Nakuru set on 0.75 acres, offering panoramic scenery, expansive living spaces, and premium executive finishes.",
    description:
      "This exceptional 5-bedroom all-ensuite villa is located near the scenic Lake Nakuru area, offering breathtaking panoramic views and serene surroundings. Sitting on 0.75 acres, the property blends luxury architecture with natural beauty.\n\nThe villa features grand living areas with high ceilings, floor-to-ceiling windows, a designer kitchen equipped with premium appliances, and spacious bedrooms with modern bathrooms. The master suite includes a walk-in closet and private balcony overlooking the lake landscape.\n\nOutdoor amenities include landscaped gardens, a spacious terrace, entertainment gazebo, and ample parking. With Nakuru’s rapid economic growth and tourism appeal, this property is perfect as a luxury residence, holiday home, or high-end Airbnb investment.",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    ],
  },

  {
    id: "15",
    title: "Prime Commercial Plot in Nakuru CBD",
    price: 35000000,
    location: "Nakuru, CBD",
    bedrooms: 0,
    bathrooms: 0,
    plotSize: "0.5 Acre",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    shortDescription:
      "Prime 0.5-acre commercial plot in Nakuru CBD with high visibility and road frontage, ideal for mixed-use development, retail complex, or office block investment.",
    description:
      "Strategically positioned within Nakuru’s Central Business District, this 0.5-acre commercial plot offers outstanding development potential. The property benefits from excellent road frontage, high foot traffic, and easy access to major transport links.\n\nWith Nakuru now a city and experiencing rapid commercial expansion, demand for retail, office, and mixed-use developments continues to rise. This flat, well-drained parcel is ideal for constructing a shopping complex, office block, hotel, or apartment development.\n\nUtilities including electricity, water, and sewer connections are available nearby, making development convenient and cost-effective. This is a rare opportunity to secure prime commercial land in one of Kenya’s fastest-growing urban centers.",
    gallery: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    ],
  },
  {
    id: "16",
    title: "Executive Family Home in Eldoret",
    price: 22500000,
    location: "Eldoret, Elgon View",
    bedrooms: 5,
    bathrooms: 4,
    plotSize: "0.25 Acre",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1200&q=80",
    shortDescription:
      "Spacious 5-bedroom executive residence in Elgon View, Eldoret set on a quarter acre, featuring modern interiors, landscaped gardens, and a secure upscale neighborhood setting.",
    description:
      "Located in the prestigious Elgon View estate in Eldoret, this executive 5-bedroom home offers comfort, elegance, and strong long-term value. Sitting on a quarter-acre plot, the property provides ample outdoor space ideal for family living and entertainment.\n\nThe home features expansive living areas, a modern fitted kitchen with high-quality cabinetry, large ensuite bedrooms, and a master suite complete with walk-in closet and premium bathroom finishes. The compound includes landscaped gardens, a cabro-paved driveway, perimeter wall, and secure gated access.\n\nWith Eldoret’s continued growth as an education, agricultural, and commercial hub, this property is ideal for established families or investors seeking stable rental returns.",
    gallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    ],
  },

  {
    id: "17",
    title: "Lakefront Apartment in Kisumu",
    price: 28500000,
    location: "Kisumu, Milimani",
    bedrooms: 3,
    bathrooms: 3,
    plotSize: "2,100 sq.ft",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80",
    shortDescription:
      "Modern 3-bedroom lakefront apartment in Kisumu Milimani offering panoramic Lake Victoria views, high-end finishes, and premium lifestyle amenities.",
    description:
      "Overlooking the beautiful waters of Lake Victoria, this stunning 3-bedroom apartment in Kisumu’s Milimani estate offers luxury lakeside living. The property features open-plan living spaces, a contemporary fully fitted kitchen, and floor-to-ceiling windows that maximize natural light and scenic views.\n\nAll bedrooms are ensuite with modern fittings, while the master suite includes a private balcony overlooking the lake. Residents enjoy secure parking, backup generator, borehole water supply, gym facilities, and 24/7 security.\n\nIdeal for executives, diaspora investors, or Airbnb operators targeting Kisumu’s growing tourism and business market.",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
  },

  {
    id: "18",
    title: "Beachside Luxury Home in Mombasa",
    price: 98000000,
    location: "Mombasa, Nyali",
    bedrooms: 6,
    bathrooms: 5,
    plotSize: "0.8 Acre",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    shortDescription:
      "Magnificent 6-bedroom beachside residence in Nyali set on 0.8 acres, featuring tropical gardens, private pool, and direct coastal access.",
    description:
      "This exquisite 6-bedroom luxury home in Nyali offers a rare opportunity to own prime coastal real estate. Built on 0.8 acres, the property features lush tropical landscaping, expansive verandas, and a private swimming pool ideal for entertaining.\n\nThe interior showcases grand living spaces, a designer kitchen with premium appliances, spacious ensuite bedrooms, and a master suite with private balcony and sea breeze views. Additional amenities include staff quarters, backup generator, solar water heating, and secure perimeter fencing.\n\nPerfect as a high-end residence, holiday retreat, or luxury Airbnb investment.",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80",
    ],
  },

  {
    id: "19",
    title: "Modern Maisonette in Thika",
    price: 19500000,
    location: "Thika, Makongeni",
    bedrooms: 4,
    bathrooms: 3,
    plotSize: "50 x 100 ft",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80",
    shortDescription:
      "Stylish 4-bedroom maisonette in Thika Makongeni set on a 50x100 plot, offering contemporary design, secure compound, and easy access to Thika Superhighway.",
    description:
      "Located in Makongeni, Thika, this modern 4-bedroom maisonette provides an excellent opportunity for families and investors. The property features spacious living areas, a fitted modern kitchen, and generously sized bedrooms with built-in wardrobes.\n\nThe master bedroom is ensuite, complemented by additional well-finished bathrooms. The compound includes cabro parking, perimeter wall, secure gate, and reliable water supply.\n\nWith Thika’s proximity to Nairobi via the Superhighway and continued residential growth, this property offers both comfortable living and strong investment potential.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=1200&q=80",
    ],
  },

  {
    id: "20",
    title: "Ultra-Luxury Mansion in Karen",
    price: 250000000,
    location: "Nairobi, Karen",
    bedrooms: 8,
    bathrooms: 8,
    plotSize: "1.5 Acres",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
    shortDescription:
      "Exclusive 8-bedroom ultra-luxury mansion in Karen set on 1.5 acres, featuring resort-style amenities, grand architecture, private pool, and top-tier security.",
    description:
      "This extraordinary 8-bedroom ultra-luxury mansion in Karen represents the pinnacle of high-end real estate. Situated on 1.5 acres of prime land, the property offers unmatched privacy, grandeur, and resort-style living.\n\nThe residence features multiple formal and informal lounges, a state-of-the-art designer kitchen, home theater, private gym, spa area, wine cellar, and expansive master suite with walk-in closets and spa-inspired bathroom. Outdoors, the estate includes a heated swimming pool, entertainment pavilion, manicured gardens, and guest house.\n\nAdditional amenities include CCTV surveillance, electric fencing, backup generator, solar systems, and secure staff quarters. Designed for diplomats, CEOs, and high-net-worth individuals seeking absolute exclusivity.",
    gallery: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    ],
  },
];
