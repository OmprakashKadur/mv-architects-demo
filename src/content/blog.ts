export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  contentHtml: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "interior-design-cost-per-sq-ft-bengaluru-2026",
    title: "Interior Design Cost per Sq. Ft. in Bengaluru (2026 Guide)",
    excerpt:
      "A transparent breakdown of actual square-foot costs across Essential, Premium, and Luxury residential interiors in Bengaluru.",
    date: "February 2026",
    readTime: "7 min read",
    category: "Cost & Planning",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    author: {
      name: "MV Studio Editorial",
      role: "Principal Architecture Team",
    },
    contentHtml: `
      <h2>The Real Anatomy of Interior Design Costs in Bengaluru</h2>
      <p>Whether you have just received possession of a 3BHK apartment in Whitefield or are building an independent villa in Indiranagar, understanding interior design costs per square foot is essential for realistic budgeting.</p>
      
      <p>In Bengaluru's market today, interior costs typically span three broad tiers based on craftsmanship, hardware quality, and material origins:</p>
      
      <h3>1. Essential Quality (₹1,500 – ₹2,200 per sq.ft.)</h3>
      <p>Covers standard commercial plywood (MR grade), basic 0.8mm to 1.0mm laminate finishes, standard OEM hardware, and basic electrical modifications. Suitable for rental properties or temporary fitouts.</p>

      <h3>2. Premium Bespoke (₹2,500 – ₹3,800 per sq.ft.)</h3>
      <p>Uses calibrated BWP (Boiling Water Proof) marine-grade Birch plywood, natural wood veneers with polyurethane (PU) matte polish, German Blum / Hettich soft-close hardware, architectural cove lighting, and acrylic modular kitchens.</p>

      <h3>3. Luxury & Architectural (₹4,200 – ₹7,500+ per sq.ft.)</h3>
      <p>Features monolithic Italian marble flooring, lime-wash and microcement wall rendering, solid teak/ashwood millwork, automated lighting systems, fluted acoustic panelling, and integrated European appliances.</p>

      <h3>Key Cost Drivers Often Overlooked:</h3>
      <ul>
        <li><strong>Civil Alterations:</strong> Relocating bathroom plumbing or knocking down non-load-bearing walls can add ₹2L–₹5L.</li>
        <li><strong>Electrical & Automation:</strong> Smart scene switches and high-CRI recessed architectural spotlights.</li>
        <li><strong>HVAC & False Ceilings:</strong> Ducted air conditioning requires coordinated ceiling drops and perimeter acoustic framing.</li>
      </ul>
    `,
  },
  {
    slug: "modular-kitchen-vs-carpenter-built-comparison",
    title: "Modular Kitchen vs. Carpenter-Built: An Honest Architect's Review",
    excerpt:
      "Precision German hardware meets on-site customization. Discover which culinary approach truly lasts in Indian cooking conditions.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Kitchen Architecture",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    author: {
      name: "MV Studio Editorial",
      role: "Kitchen & Modular Specialists",
    },
    contentHtml: `
      <h2>The Debate: Factory Precision vs. On-Site Customization</h2>
      <p>Indian cooking involves heavy spices, high heat, and rigorous daily cleaning. Choosing between a factory-manufactured modular kitchen and traditional carpenter-built cabinetry requires evaluating durability, precision, and timeline.</p>

      <h3>Factory Modular Kitchens: The Pros & Cons</h3>
      <p>Factory modular systems use CNC computerized cutting with 0.1mm tolerances and PUR edge-banding, which creates a hermetic seal against moisture and steam.</p>
      <ul>
        <li><strong>Pros:</strong> Flawless edge-banding, swift 10-day on-site assembly, factory warranty on drawer runners and lift-up systems.</li>
        <li><strong>Cons:</strong> Cannot easily accommodate severely uneven site walls without filler strips.</li>
      </ul>

      <h3>Carpenter-Built Kitchens: The Reality</h3>
      <p>Hand-built on site using manual circular saws and hand adhesives. While they can adapt to irregular wall angles, manual edge-gluing often peels under Indian steam conditions over 3-5 years.</p>

      <h3>The Studio MV Hybrid Philosophy</h3>
      <p>At MV Architects, we use a hybrid model: the carcass boxes and heavy drawers are factory-engineered with German Blum hardware and marine Birch ply, while external surrounds and breakfast bars are custom-crafted by master joiners on site.</p>
    `,
  },
  {
    slug: "how-long-does-a-3bhk-interior-actually-take",
    title: "How Long Does a 3BHK Interior Actually Take in Bengaluru?",
    excerpt:
      "A step-by-step 120-day timeline roadmap from empty keys to final white-glove handover.",
    date: "December 2025",
    readTime: "5 min read",
    category: "Process & Execution",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    author: {
      name: "MV Studio Editorial",
      role: "Turnkey Project Management",
    },
    contentHtml: `
      <h2>The 120-Day Realistic Timeline</h2>
      <p>Many contractors promise 45-day turnarounds, leading to rushed joinery, wet paint over damp plaster, and subsequent peeling. Here is the realistic schedule for high-end 3BHK craftsmanship.</p>

      <h3>Phase 1: Days 1 to 25 — Concept, 3D & Approvals</h3>
      <p>Space planning, 3D photorealistic renderings, material selection workshops, and final BOQ sign-off.</p>

      <h3>Phase 2: Days 26 to 55 — Civil, Electrical & Plumbing</h3>
      <p>Chasing conduits in walls for automated lighting, false ceiling framing, and plumbing shifts.</p>

      <h3>Phase 3: Days 56 to 90 — Millwork & Drywall Finishing</h3>
      <p>Carpentry joinery, veneer pressing, microcement coats, and tile laying.</p>

      <h3>Phase 4: Days 91 to 120 — Modular Installation, Lighting & Deep Clean</h3>
      <p>Factory modular wardrobe and kitchen assembly, lighting fixtures installation, upholstery styling, snag inspection, and final handover.</p>
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
