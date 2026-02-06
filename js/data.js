// Tourism Website Data Storage

// DESTINATIONS DATA
const destinationsData = [
    {
        id: 1,
        name: "Paris, France",
        region: "Europe",
        category: "City",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop",
        description: "The City of Light is famous for the Eiffel Tower, world-class museums, and romantic streets. Experience art, cuisine, and culture.",
        attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Arc de Triomphe"]
    },
    {
        id: 2,
        name: "Bali, Indonesia",
        region: "Asia",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1537225228614-b4fad34a0b19?w=500&h=300&fit=crop",
        description: "Tropical paradise with pristine beaches, ancient temples, and lush rice terraces. Perfect for relaxation and adventure.",
        attractions: ["Ubud Temple", "Beach Clubs", "Rice Paddies", "Scuba Diving"]
    },
    {
        id: 3,
        name: "New York, USA",
        region: "North America",
        category: "City",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop",
        description: "The city that never sleeps offers iconic landmarks, Broadway shows, and world-renowned museums.",
        attractions: ["Statue of Liberty", "Central Park", "Times Square", "Empire State Building"]
    },
    {
        id: 4,
        name: "Swiss Alps, Switzerland",
        region: "Europe",
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=300&fit=crop",
        description: "Majestic alpine scenery with picturesque villages, hiking trails, and world-class skiing.",
        attractions: ["Matterhorn", "Jungfraujoch", "Interlaken", "Zermatt"]
    },
    {
        id: 5,
        name: "Kyoto, Japan",
        region: "Asia",
        category: "Cultural",
        image: "https://images.unsplash.com/photo-1522383150241-14a60fb8ce38?w=500&h=300&fit=crop",
        description: "Ancient capital with thousands of temples, traditional gardens, and authentic Japanese culture.",
        attractions: ["Fushimi Inari Shrine", "Arashiyama Bamboo", "Kinkakuji Temple", "Geisha District"]
    },
    {
        id: 6,
        name: "safari, Kenya",
        region: "Africa",
        category: "Adventure",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop",
        description: "Experience the raw beauty of African wildlife with guided safari tours through stunning national parks.",
        attractions: ["Masai Mara", "Mount Kenya", "Great Rift Valley", "Wildlife Spotting"]
    },
    {
        id: 7,
        name: "Cancun, Mexico",
        region: "North America",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1552252388-f69f3c1b6c14?w=500&h=300&fit=crop",
        description: "Gorgeous Caribbean beaches, Mayan ruins, and vibrant nightlife. A perfect tropical getaway.",
        attractions: ["Playa del Carmen", "Chichen Itza", "Cenotes", "Coral Reef"]
    },
    {
        id: 8,
        name: "Barcelona, Spain",
        region: "Europe",
        category: "City",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&h=300&fit=crop",
        description: "Bold architecture, vibrant culture, and Mediterranean charm. Design and art at every corner.",
        attractions: ["Sagrada Familia", "Park Güell", "Gothic Quarter", "Las Ramblas"]
    },
    {
        id: 9,
        name: "Maldives",
        region: "Asia",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
        description: "Overwater bungalows, crystal-clear waters, and world-class snorkeling in island paradise.",
        attractions: ["Coral Reefs", "Water Villas", "Island Hopping", "Snorkeling"]
    },
    {
        id: 10,
        name: "Dubai, UAE",
        region: "Asia",
        category: "City",
        image: "https://images.unsplash.com/photo-1512453391339-84a61e6efff9?w=500&h=300&fit=crop",
        description: "Modern marvel with luxury shopping, iconic skyscrapers, and desert adventures in one city.",
        attractions: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari", "Gold Souk"]
    },
    {
        id: 11,
        name: "Annapurna, Nepal",
        region: "Asia",
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        description: "Breathtaking Himalayan peaks, rich culture, and world-renowned trekking routes.",
        attractions: ["Annapurna Circuit", "Poon Hill", "Local Villages", "Mountain Views"]
    },
    {
        id: 12,
        name: "Greece Islands",
        region: "Europe",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1521821793348-935c917c8ad2?w=500&h=300&fit=crop",
        description: "Whitewashed villages, azure waters, ancient ruins, and Mediterranean sunsets.",
        attractions: ["Santorini", "Delphi", "Acropolis", "Island Hopping"]
    }
];

// TOUR PACKAGES DATA
const packagesData = [
    {
        id: 1,
        name: "Paris Romance Week",
        category: "City Tour",
        duration: "7 days / 6 nights",
        price: "$1,299",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop",
        description: "Explore the City of Light with guided tours, Seine river cruise, and Versailles Palace visit.",
        included: [
            "Accommodation in 4-star hotel",
            "Airport transfers",
            "Guided city tours",
            "Seine river cruise",
            "Versailles Palace ticket",
            "Daily breakfast",
            "Travel insurance"
        ],
        highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre"]
    },
    {
        id: 2,
        name: "Bali Bliss Package",
        category: "Beach & Culture",
        duration: "10 days / 9 nights",
        price: "$899",
        image: "https://images.unsplash.com/photo-1537225228614-b4fad34a0b19?w=500&h=300&fit=crop",
        description: "Experience Balinese culture, temples, beaches, and wellness retreats in tropical paradise.",
        included: [
            "Resort accommodation",
            "Airport transfers",
            "Temple tours",
            "Spa treatments (2x)",
            "Surfing lessons",
            "Cooking class",
            "Beach activities"
        ],
        highlights: ["Ubud Temple", "Beach Clubs", "Spa Retreats", "Rice Paddies"]
    },
    {
        id: 3,
        name: "New York Experience",
        category: "City Tour",
        duration: "5 days / 4 nights",
        price: "$749",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop",
        description: "Broadway shows, world-class museums, iconic landmarks, and authentic NYC dining.",
        included: [
            "Manhattan hotel stay",
            "Broadway show ticket",
            "Museum passes",
            "Statue of Liberty tour",
            "Central Park guided walk",
            "Welcome dinner",
            "Metro pass"
        ],
        highlights: ["Times Square", "Empire State Building", "Central Park", "Statue of Liberty"]
    },
    {
        id: 4,
        name: "Alpine Adventure",
        category: "Mountain Trekking",
        duration: "8 days / 7 nights",
        price: "$1,199",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=300&fit=crop",
        description: "Hiking expeditions, mountain lodges, and panoramic Alpine views in Switzerland.",
        included: [
            "Mountain lodge accommodation",
            "Professional guides",
            "All meals",
            "Mountain equipment rental",
            "Cable car passes",
            "Photography tour",
            "Emergency insurance"
        ],
        highlights: ["Matterhorn Views", "Jungfraujoch", "Glacier walks", "Alpine villages"]
    },
    {
        id: 5,
        name: "Japan Cultural Tour",
        category: "Cultural Experience",
        duration: "12 days / 11 nights",
        price: "$1,649",
        image: "https://images.unsplash.com/photo-1522383150241-14a60fb8ce38?w=500&h=300&fit=crop",
        description: "Traditional temples, gardens, cultural performances, and authentic Japanese cuisine.",
        included: [
            "4-star hotel stays",
            "Train pass (JR)",
            "Temple entrance fees",
            "Tea ceremony",
            "Geisha performance",
            "All breakfasts",
            "Local guide service"
        ],
        highlights: ["Fushimi Inari", "Arashiyama", "Kinkakuji", "Geisha District"]
    },
    {
        id: 6,
        name: "Kenya Safari Explorer",
        category: "Adventure & Wildlife",
        duration: "9 days / 8 nights",
        price: "$1,899",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop",
        description: "Guided safari tours, wildlife photography, luxury safari camps, and African culture.",
        included: [
            "Safari lodge accommodation",
            "Game drive tours (twice daily)",
            "Professional safari guides",
            "Park entrance fees",
            "All meals & drinks",
            "Photography workshop",
            "Bush dinner experience"
        ],
        highlights: ["Masai Mara", "Wildlife viewing", "African sunset", "Cultural visit"]
    },
    {
        id: 7,
        name: "Caribbean Beach Retreat",
        category: "Beach Holiday",
        duration: "6 days / 5 nights",
        price: "$699",
        image: "https://images.unsplash.com/photo-1552252388-f69f3c1b6c14?w=500&h=300&fit=crop",
        description: "All-inclusive beach resort, water sports, Mayan ruins, and Caribbean nightlife.",
        included: [
            "All-inclusive resort",
            "Water sports activities",
            "Cenote tour",
            "Beach club passes",
            "Snorkeling equipment",
            "Cocktail classes",
            "Airport transfers"
        ],
        highlights: ["Playa del Carmen", "Cenotes", "Snorkeling", "Beach parties"]
    },
    {
        id: 8,
        name: "Barcelona Architectural Tour",
        category: "City Tour",
        duration: "5 days / 4 nights",
        price: "$799",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&h=300&fit=crop",
        description: "Gaudi's masterpieces, Gothic quarter exploration, beaches, and tapas culture.",
        included: [
            "4-star hotel",
            "Metro passes",
            "Sagrada Familia tickets",
            "Park Güell access",
            "Gothic quarter tour",
            "Tapas tasting",
            "Sea beach day"
        ],
        highlights: ["Sagrada Familia", "Park Güell", "Gothic Quarter", "Montjuic"]
    },
    {
        id: 9,
        name: "Maldives Honeymoon",
        category: "Beach & Luxury",
        duration: "7 days / 6 nights",
        price: "$2,499",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
        description: "Luxury overwater bungalows, private beach, spa treatments, and water activities.",
        included: [
            "Water villa with pool",
            "All meals & drinks",
            "Couple's spa treatment",
            "Snorkeling excursions",
            "Island hopping",
            "Private beach time",
            "In-villa breakfast"
        ],
        highlights: ["Water Villas", "Coral Reefs", "Private beach", "Sunset cruises"]
    },
    {
        id: 10,
        name: "Dubai Luxury Experience",
        category: "City Tour",
        duration: "6 days / 5 nights",
        price: "$1,399",
        image: "https://images.unsplash.com/photo-1512453391339-84a61e6efff9?w=500&h=300&fit=crop",
        description: "Luxury shopping, desert safari, world-class dining, and modern marvels.",
        included: [
            "5-star hotel stay",
            "Desert safari tour",
            "Burj Khalifa tickets",
            "Gold souk tour",
            "Spa treatment",
            "Fine dining",
            "City tour"
        ],
        highlights: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari", "Luxury shopping"]
    },
    {
        id: 11,
        name: "Nepal Trek Challenge",
        category: "Mountain Trekking",
        duration: "14 days / 13 nights",
        price: "$999",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        description: "Challenging Himalayan trek, alpine views, mountain culture, and local hospitality.",
        included: [
            "Mountain lodge stays",
            "Expert trekking guides",
            "Porters & support",
            "All meals",
            "Navigation equipment",
            "Cultural village tours",
            "Altitude acclimatization"
        ],
        highlights: ["Annapurna Circuit", "Poon Hill", "Mountain villages", "Himalayan views"]
    },
    {
        id: 12,
        name: "Greek Islands Escape",
        category: "Island Hopping",
        duration: "9 days / 8 nights",
        price: "$1,249",
        image: "https://images.unsplash.com/photo-1521821793348-935c917c8ad2?w=500&h=300&fit=crop",
        description: "Island-hopping adventure, whitewashed villages, archaeological sites, and Mediterranean cuisine.",
        included: [
            "Island resort accommodations",
            "Ferry passes",
            "Guided island tours",
            "Archaeological site tickets",
            "Sunset cruise",
            "Greek cooking class",
            "Beach activities"
        ],
        highlights: ["Santorini", "Mykonos", "Delphi", "Island hopping cruises"]
    }
];

// GALLERY IMAGES DATA
const galleryImages = [
    {
        id: 1,
        title: "Eiffel Tower at Sunset",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
        category: "Architecture"
    },
    {
        id: 2,
        title: "Tropical Beach Paradise",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        category: "Beach"
    },
    {
        id: 3,
        title: "Mountain Peak Views",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Nature"
    },
    {
        id: 4,
        title: "City Skyline",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
        category: "Architecture"
    },
    {
        id: 5,
        title: "Serene Temple",
        image: "https://images.unsplash.com/photo-1548013146-72d72bf3e91d?w=800&h=600&fit=crop",
        category: "Culture"
    },
    {
        id: 6,
        title: "Desert Landscape",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
        category: "Nature"
    },
    {
        id: 7,
        title: "Ancient Ruins",
        image: "https://images.unsplash.com/photo-1509316809753-5e5a8a5b5f7d?w=800&h=600&fit=crop",
        category: "History"
    },
    {
        id: 8,
        title: "Vibrant Market",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        category: "Culture"
    },
    {
        id: 9,
        title: "Waterfall Cascade",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0b64b211?w=800&h=600&fit=crop",
        category: "Nature"
    },
    {
        id: 10,
        title: "Modern Architecture",
        image: "https://images.unsplash.com/photo-1479839672679-a46482f0e7ae?w=800&h=600&fit=crop",
        category: "Architecture"
    },
    {
        id: 11,
        title: "Safari Wildlife",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
        category: "Wildlife"
    },
    {
        id: 12,
        title: "Sunset Ocean View",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        category: "Beach"
    }
];
