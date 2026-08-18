export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "interior-design",
    number: "01",
    title: "Bespoke Interior Design",
    tagline: "Atmospheric luxury tailored to how you live",
    description:
      "Comprehensive interior architecture, spatial choreography, custom furniture design, lighting scenography, and curated art styling for luxury apartments, villas, and penthouses.",
    scope: [
      "Conceptual Moodboards & 3D Visualisations",
      "Detailed Millwork & Joinery Drawings",
      "Lighting & Electrical Choreography",
      "Curated Material & Soft Furnishing Specification",
      "Art & Artifact Procurement",
    ],
    deliverables: [
      "Photorealistic 4K 3D Renders",
      "GFC (Good For Construction) Architectural Drawings",
      "Complete Bill of Quantities (BOQ)",
      "Vendor & Material Source Book",
    ],
    timeline: "6 – 10 Weeks (Design Phase)",
    idealFor: "Premium homeowners wanting distinct, non-templated bespoke interiors.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "architecture",
    number: "02",
    title: "Residential Architecture",
    tagline: "Contextual, light-sculpted structures built for permanence",
    description:
      "From bare site planning to structural form generation. We design climate-responsive tropical homes with courtyard integrations, cross-ventilation, and monolithic honesty.",
    scope: [
      "Site Analysis & Microclimate Study",
      "Architectural Massing & Spatial Planning",
      "Structural & MEP Coordination",
      "Landscape & Courtyard Architecture",
      "Sanction & Regulatory Approvals Coordination",
    ],
    deliverables: [
      "Comprehensive Architectural Working Drawings",
      "Structural Engineering Coordination Sheets",
      "3D Exterior Walkthroughs & Sun-path Studies",
      "Material Specifications for Facade & Masonry",
    ],
    timeline: "3 – 5 Months (Design & Sanction)",
    idealFor: "Clients building bespoke villas or independent residences on private land.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "turnkey-execution",
    number: "03",
    title: "Turnkey Execution & Fitout",
    tagline: "Single-point accountability from bare shell to key handover",
    description:
      "Full construction and interior build management. We deploy our master craftsmen, on-site project engineers, and rigorous quality benchmarks with zero budget creep.",
    scope: [
      "Civil Modifications & Masonry",
      "False Ceiling, Drywall & Microcement Works",
      "Precision Carpentry & On-Site Joinery",
      "Plumbing, HVAC & Electrical Execution",
      "Final Deep Clean & White-Glove Handover",
    ],
    deliverables: [
      "Milestone-Linked Execution Schedule",
      "Weekly On-Site Photo & Video Progress Audits",
      "Material Testing & Quality Inspection Reports",
      "Comprehensive 5-Year Craftsmanship Warranty",
    ],
    timeline: "4 – 8 Months (Site Execution)",
    idealFor: "Busy professionals and NRIs seeking hassle-free, on-time turnkey delivery.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "modular-kitchens",
    number: "04",
    title: "Modular Kitchens & Wardrobes",
    tagline: "German hardware engineering with Italian aesthetic finishes",
    description:
      "Factory-calibrated precision cabinetry using marine-grade waterproof Birch ply, Blum/Hettich servo mechanisms, and anti-fingerprint Fenix or sintered stone surfaces.",
    scope: [
      "Golden-Triangle Ergonomic Space Layouts",
      "Concealed Appliance & Downdraft Integration",
      "Walk-in Closet & Wardrobe Systems with Glass & LED Channels",
      "Factory CNC Precision Cutting & Edge Banding",
      "Swift 14-Day Site Assembly",
    ],
    deliverables: [
      "Precision Modular Assembly Drawings",
      "10-Year Hardware Guarantee Certificate",
      "Anti-Bacterial & Waterproof Test Verification",
      "Appliance Integration Blueprint",
    ],
    timeline: "4 – 6 Weeks (Fabrication & Install)",
    idealFor: "Homeowners upgrading culinary spaces and walk-in dressing suites.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "space-planning",
    number: "05",
    title: "Space Planning & Vastu Harmony",
    tagline: "Optimizing flow, natural light, and energetic alignment",
    description:
      "Strategic layout optimization for challenging floor plates, maximizing functional square footage while respecting authentic ancient Vastu Shastra principles seamlessly.",
    scope: [
      "Circulation & Flow Optimization",
      "Vastu Compliance Alignment",
      "Natural Daylight & Acoustic Mapping",
      "Zoning for Privacy vs Entertaining",
    ],
    deliverables: [
      "Multi-Option Scaled 2D Floor Plans",
      "Vastu Energy Alignment Report",
      "Circulation & Furniture Layout Diagrams",
    ],
    timeline: "2 – 3 Weeks",
    idealFor: "Clients at early architectural review or builder apartment handover stage.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "3d-visualisation",
    number: "06",
    title: "3D Visualisation & VR Tours",
    tagline: "Experience your unbuilt home with absolute photorealism",
    description:
      "Interactive 360-degree virtual walkthroughs and photorealistic lighting simulations allowing you to inspect every texture, shadow, and reflection before groundbreaking.",
    scope: [
      "High-Fidelity 3D Material Texturing",
      "Daylight & Artificial Lighting Scenarios",
      "Interactive 360° Panorama Export",
      "Real-Time Virtual Reality Headset Sessions",
    ],
    deliverables: [
      "Ultra-HD 4K Still Renders",
      "Cloud-Hosted 360° Walkthrough Links",
      "Cinematic Animation Video Teasers",
    ],
    timeline: "1 – 2 Weeks",
    idealFor: "Visualizing finishes, materials, and spatial volume with complete certainty.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85",
  },
];
