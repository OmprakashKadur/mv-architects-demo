export interface Hotspot {
  id: string;
  position: [number, number, number]; // [x, y, z] on sphere
  title: string;
  description: string;
  material: string;
  dimension?: string;
}

export interface PanoramaRoom {
  id: string;
  name: string;
  panoramaUrl: string;
  hotspots: Hotspot[];
}

export interface MaterialSwatch {
  name: string;
  type: string;
  finish: string;
  origin: string;
  colorHex: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "residential" | "commercial" | "turnkey" | "modular-kitchens";
  categoryLabel: string;
  location: string;
  locality: string;
  city: string;
  areaSqFt: number;
  year: number;
  durationMonths: number;
  budgetLakhs: number;
  scope: string[];
  heroImage: string;
  galleryImages: {
    url: string;
    alt: string;
    caption: string;
  }[];
  brief: string;
  concept: string;
  executionStory: string;
  beforeAfter: {
    beforeUrl: string;
    afterUrl: string;
    beforeLabel: string;
    afterLabel: string;
    description: string;
  };
  materials: MaterialSwatch[];
  panoramas: PanoramaRoom[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "the-courtyard-house-indiranagar",
    title: "The Courtyard House",
    subtitle: "A light-drenched brutalist tropical sanctuary",
    category: "residential",
    categoryLabel: "Residential Architecture",
    location: "Indiranagar, Bengaluru",
    locality: "Indiranagar",
    city: "Bengaluru",
    areaSqFt: 4800,
    year: 2025,
    durationMonths: 14,
    budgetLakhs: 185,
    scope: ["Architectural Planning", "Custom Teak Millwork", "Interior Styling", "Landscape Courtyard"],
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        alt: "Sunken living room with custom linen upholstery and microcement flooring",
        caption: "Sunken living room framing the central water courtyard",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        alt: "Open-plan brass kitchen island and smoked oak cabinetry",
        caption: "Culinary studio with fluted travertine and brushed brass accents",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        alt: "Master suite with bespoke cane headboard and recessed cove illumination",
        caption: "Master sanctuary connected to private terrace garden",
      },
    ],
    brief:
      "The clients desired an inward-looking sanctuary within bustling Indiranagar—a home that disconnects from urban noise through biophilic courtyards, natural ventilation, and tactile clay materiality.",
    concept:
      "We conceived the spatial volume around an open-to-sky central atrium. Exposed terracotta brick screens temper the tropical sun, casting ever-shifting shadow geometries across hand-burnished microcement floors.",
    executionStory:
      "Every millwork element was handcrafted on-site using reclaimed CP teak and hand-poured terrazzo. The thermal mass of locally sourced clay tiles naturally keeps indoor ambient temperatures 4°C cooler than the city exterior.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      afterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Demolished 1980s Brick Structure",
      afterLabel: "New Double-Height Living Atrium",
      description: "Transformation from a dark, compartmentalized structure into an open-plan light-filled sanctuary.",
    },
    materials: [
      { name: "Kishangarh Statuario", type: "Natural Stone", finish: "Honed", origin: "Rajasthan, India", colorHex: "#E7E5DF" },
      { name: "Reclaimed CP Teak", type: "Hardwood", finish: "Matte Oil", origin: "Madhya Pradesh, India", colorHex: "#8B5A2B" },
      { name: "Terracotta Jaali", type: "Earthenware", finish: "Kiln-Fired", origin: "Mangalore, India", colorHex: "#A85D42" },
      { name: "Microcement", type: "Mineral Coating", finish: "Burnished", origin: "Artisan Applied", colorHex: "#D1CBC1" },
    ],
    panoramas: [
      {
        id: "living-atrium",
        name: "Central Atrium",
        panoramaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-1",
            position: [0.8, -0.2, -1.8],
            title: "Custom Monolithic Sofa",
            description: "Belgian linen over solid steam-bent ashwood core",
            material: "Belgian Linen / Solid Ash",
            dimension: "3200mm × 1100mm",
          },
          {
            id: "hs-2",
            position: [-1.6, 0.4, -1.2],
            title: "Travertine Hearth & Screen",
            description: "Navona travertine with hairline brass inlays",
            material: "Italian Navona Travertine",
            dimension: "20mm slabs, bookmatched",
          },
          {
            id: "hs-3",
            position: [0.2, 1.4, -1.9],
            title: "Cast Concrete Chandelier",
            description: "Hand-poured geometric suspension with 2700K warm glow",
            material: "Fiber-Reinforced Concrete",
            dimension: "Custom 1800mm span",
          },
        ],
      },
      {
        id: "culinary-studio",
        name: "Kitchen & Dining",
        panoramaUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-4",
            position: [-0.9, -0.3, -1.6],
            title: "Brushed Brass Island",
            description: "Seamless brass waterfall clad over Blum servo-drive drawers",
            material: "Solid Brushed Brass / Smoked Oak",
            dimension: "2800mm × 1200mm",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "clay-and-teak-penthouse-koramangala",
    title: "Clay & Teak Penthouse",
    subtitle: "Warm minimalism suspended above the tree line",
    category: "residential",
    categoryLabel: "Luxury Penthouse Interiors",
    location: "Koramangala 4th Block, Bengaluru",
    locality: "Koramangala",
    city: "Bengaluru",
    areaSqFt: 3600,
    year: 2025,
    durationMonths: 8,
    budgetLakhs: 125,
    scope: ["Complete Interior Architecture", "Custom Lighting Design", "Bespoke Furniture", "Acoustic Wall Paneling"],
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=85",
        alt: "Minimalist living room with textured clay plaster walls and curved oak console",
        caption: "Clay-rendered living area with floor-to-ceiling panoramic glass",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        alt: "Private library nook with integrated LED channel lighting",
        caption: "Custom fluted teak library and acoustic felt study",
      },
    ],
    brief:
      "A young tech founder sought an uncluttered, tactile sanctuary where Japanese wabi-sabi meets Scandinavian warmth, optimized for quiet focus and intimate dining.",
    concept:
      "We employed a restrained palette of lime-wash clay plaster, rift-cut teak, and muted charcoal slate to quiet the visual noise of the surrounding cityscape.",
    executionStory:
      "All storage was recessed flush with the walls to maintain continuous uninterrupted planes. Hidden acoustic backing ensures whisper-quiet tranquility despite open city vistas.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      afterUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Bare Builder Shell",
      afterLabel: "Curated Clay Penthouse",
      description: "Raw concrete shell transformed into a warm, texture-rich penthouse sanctuary.",
    },
    materials: [
      { name: "Lime-Wash Clay Plaster", type: "Mineral Finish", finish: "Hand-Troweled", origin: "Jaipur, India", colorHex: "#DBCFC2" },
      { name: "Rift-Cut Burma Teak", type: "Veneer", finish: "Ultra-Matte", origin: "Certified Plantation", colorHex: "#996633" },
      { name: "Charcoal Slate", type: "Sedimentary Rock", finish: "Flamed & Brushed", origin: "Andhra Pradesh", colorHex: "#363534" },
    ],
    panoramas: [
      {
        id: "penthouse-salon",
        name: "Main Salon",
        panoramaUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-p1",
            position: [1.2, 0.1, -1.5],
            title: "Sculptural Bouclé Chaise",
            description: "Custom ergonomic silhouette wrapped in Italian virgin wool",
            material: "Italian Bouclé / Walnut Plinth",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "the-monolith-villa-whitefield",
    title: "The Monolith Villa",
    subtitle: "Raw board-marked concrete paired with lush tropical landscape",
    category: "turnkey",
    categoryLabel: "Turnkey Architecture & Interiors",
    location: "Palm Meadows, Whitefield, Bengaluru",
    locality: "Whitefield",
    city: "Bengaluru",
    areaSqFt: 6200,
    year: 2024,
    durationMonths: 18,
    budgetLakhs: 290,
    scope: ["Civil Architecture", "Turnkey Construction", "Interior Fitouts", "Automated Louvers"],
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
        alt: "Double-height concrete colonnade framing the infinity lap pool",
        caption: "Monolithic concrete facade reflecting over the stone lap pool",
      },
    ],
    brief:
      "A multi-generational family wanted a statement home that balances bold monumental architecture with intimate, private bedroom retreats.",
    concept:
      "Cantilevered concrete slabs float effortlessly over transparent glass volumes, blurring the boundary between indoor living rooms and surrounding verdant gardens.",
    executionStory:
      "Engineered with post-tensioned slabs to achieve 8-meter column-free spans, integrating smart HVAC and automated sun-tracking louvers.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80",
      afterUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Vacant Plot Site",
      afterLabel: "Completed Turnkey Villa",
      description: "From empty corner plot to an architectural landmark in Whitefield.",
    },
    materials: [
      { name: "Board-Marked Concrete", type: "Cast Concrete", finish: "Raw Sealed", origin: "Site Poured", colorHex: "#B5B0A8" },
      { name: "Cumaru Hardwood Decking", type: "Tropical Hardwood", finish: "UV Marine Sealed", origin: "Sustainably Sourced", colorHex: "#6F432A" },
    ],
    panoramas: [
      {
        id: "monolith-foyer",
        name: "Grand Foyer",
        panoramaUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-m1",
            position: [0.0, 0.0, -2.0],
            title: "Floating Teak Cantilever Stair",
            description: "Internal steel spine with 75mm solid teak tread sleeves",
            material: "Solid Teak / Structural Steel",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "artisan-bistro-lavelle-road",
    title: "Artisan Bistro & Bar",
    subtitle: "Intimate terracotta vaulting and atmospheric brass detailing",
    category: "commercial",
    categoryLabel: "Hospitality & Commercial",
    location: "Lavelle Road, Bengaluru",
    locality: "Lavelle Road",
    city: "Bengaluru",
    areaSqFt: 2200,
    year: 2024,
    durationMonths: 5,
    budgetLakhs: 85,
    scope: ["Commercial Interior Design", "Bespoke Bar Counter", "Lighting Scenography", "Acoustic Engineering"],
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
        alt: "Curved terracotta wine vault with warm backlighting",
        caption: "Bespoke curved wine cellar and fluted oak booths",
      },
    ],
    brief:
      "Transforming a historic colonial bungalow annexe into a sophisticated European bistro while honoring heritage masonry.",
    concept:
      "Exposed red brick arches, dark walnut panelling, and hand-beaten brass light pendants evoke vintage European wine caves with tropical Bengaluru warmth.",
    executionStory:
      "Carefully engineered custom acoustic baffles concealed behind slatted wood ceilings to achieve vibrant ambience without harsh chatter echo.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      afterUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Dilapidated Colonial Annexe",
      afterLabel: "Atmospheric Bistro Bar",
      description: "Restoration and adaptive reuse into one of Lavelle Road's premier dining venues.",
    },
    materials: [
      { name: "Handmade Wire-Cut Bricks", type: "Clay Masonry", finish: "Raw Lime Mortar", origin: "Kerala, India", colorHex: "#9B3828" },
      { name: "Hammered Brass", type: "Metal Alloy", finish: "Aged Patina", origin: "Moradabad, India", colorHex: "#B89736" },
    ],
    panoramas: [
      {
        id: "bistro-bar",
        name: "Cocktail Lounge",
        panoramaUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-b1",
            position: [0.9, -0.1, -1.7],
            title: "Monolithic Emerald Marble Bar",
            description: "Green Rajasthan serpentine marble with bullnose edge",
            material: "Serpentine Marble",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "linear-minimal-kitchen-sarjapur",
    title: "The Linear Culinary Suite",
    subtitle: "Zero-handle smoked glass & anti-fingerprint Fenix cabinetry",
    category: "modular-kitchens",
    categoryLabel: "Precision Modular Kitchen",
    location: "Sarjapur Road, Bengaluru",
    locality: "Sarjapur",
    city: "Bengaluru",
    areaSqFt: 650,
    year: 2025,
    durationMonths: 2,
    budgetLakhs: 42,
    scope: ["Custom Modular Kitchen", "Quartz Countertops", "Integrated Miele Appliances", "Pantry Walk-in"],
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=85",
        alt: "Clean line German hardware drawers with backlit interior glass",
        caption: "Motorized pocket doors concealing the breakfast and coffee bar",
      },
    ],
    brief:
      "A chef and sommelier wanted an ultra-functional, showroom-level modular kitchen with zero visible appliances when closed.",
    concept:
      "Ergonomic golden-triangle planning with matte anti-microbial surfaces, touch-to-open servo drawers, and high-CRI recessed architectural task lighting.",
    executionStory:
      "Manufactured with marine-grade waterproof Birch plywood core, German Blum Legrabox fittings, and seamless 12mm sintered stone surfaces.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
      afterUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Standard Developer Kitchen",
      afterLabel: "Bespoke Culinary Suite",
      description: "Upgraded from basic granite counters to an integrated smart luxury kitchen.",
    },
    materials: [
      { name: "Fenix NTM Nero", type: "Nanotech Matte", finish: "Anti-Fingerprint", origin: "Italy", colorHex: "#222222" },
      { name: "Dekton Laurent", type: "Sintered Ultracompact", finish: "Velvet Texture", origin: "Spain", colorHex: "#302B27" },
    ],
    panoramas: [
      {
        id: "kitchen-island",
        name: "Island View",
        panoramaUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-k1",
            position: [0.3, -0.4, -1.8],
            title: "Integrated Downdraft Induction",
            description: "Flush ceramic glass hob with concealed extraction",
            material: "Ceramic Glass / Carbon Filtration",
          },
        ],
      },
    ],
    featured: false,
  },
  {
    slug: "the-serene-residence-hsr-layout",
    title: "The Serene 4BHK",
    subtitle: "Subtle Japanese joinery, fluted glass, and quiet stone luxury",
    category: "turnkey",
    categoryLabel: "Turnkey Interior Fitout",
    location: "HSR Layout Sector 2, Bengaluru",
    locality: "HSR Layout",
    city: "Bengaluru",
    areaSqFt: 3200,
    year: 2024,
    durationMonths: 6,
    budgetLakhs: 98,
    scope: ["Turnkey Execution", "Modular Wardrobes", "False Ceiling & Lighting", "Smart Home Automation"],
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        alt: "Dining room with solid oak table and minimal brass pendant",
        caption: "Custom 8-seater dining table handcrafted from solid European white oak",
      },
    ],
    brief:
      "A complete turnkey interior handover for an NRI family seeking low maintenance, timeless elegance, and superior craftsmanship.",
    concept:
      "Clean linear geometries, soft rounded fluting, and balanced ambient lighting to create a soothing retreat from the energetic tech corridor.",
    executionStory:
      "Executed in exactly 120 days from bare possession to turnkey handover, complete with bespoke soft furnishings and artwork curation.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      afterUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Handover Shell",
      afterLabel: "Finished Turnkey 4BHK",
      description: "Full turnkey interior transformation delivered on-budget with zero timeline overrun.",
    },
    materials: [
      { name: "European White Oak", type: "Hardwood", finish: "Nordic Natural Oil", origin: "Germany", colorHex: "#C4A67B" },
      { name: "Fluted Moru Glass", type: "Architectural Glass", finish: "Textured Translucent", origin: "Saint-Gobain", colorHex: "#E1E5E4" },
    ],
    panoramas: [
      {
        id: "dining-salon",
        name: "Dining & Foyer",
        panoramaUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",
        hotspots: [
          {
            id: "hs-d1",
            position: [-0.5, 0.0, -1.8],
            title: "Fluted Glass Partition",
            description: "Custom floor-to-ceiling brass frame pivot door",
            material: "Brass / Moru Fluted Glass",
          },
        ],
      },
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
