export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is your typical interior design fee and pricing structure?",
    answer:
      "We offer two clear engagement models: a comprehensive Design & Consultancy model (₹250 – ₹450 per sq.ft.) for design, 3D renders, GFC drawings, and site supervision; or an integrated Turnkey Execution model where design fees are bundled into a transparent itemized Bill of Quantities (BOQ) with fixed milestone payments.",
    category: "Pricing & Fees",
  },
  {
    question: "How long does a full home interior project take from start to finish?",
    answer:
      "A typical 3BHK or 4BHK interior project takes approximately 90 to 120 days from final 3D design approval to handover. Independent villa architecture and construction spans 12 to 18 months. We provide a detailed Gantt chart with weekly progress milestones.",
    category: "Timelines",
  },
  {
    question: "Do you offer turnkey execution or only architectural design drawings?",
    answer:
      "We offer both. While many clients engage us purely for architectural and interior design consultancy, over 70% of our clients choose our Turnkey Execution service where our dedicated in-house project engineers, carpenters, and civil teams deliver the entire home ready-to-live.",
    category: "Services",
  },
  {
    question: "How do you ensure material authenticity and durability against Indian climate?",
    answer:
      "We exclusively specify BWP (Boiling Water Proof) 710-grade calibrated plywood, natural non-toxic wood oils, Italian lime-washes, and certified German hardware (Blum, Hettich, Hafele). All materials are pre-treated against termites and climate-tested.",
    category: "Quality",
  },
  {
    question: "Can you incorporate Vastu Shastra principles into contemporary modern designs?",
    answer:
      "Yes. Our architectural team specializes in harmonizing authentic Vastu alignments (kitchen in South-East, master suite in South-West, water bodies in North-East) within sleek, minimalist, contemporary layouts without compromising aesthetics.",
    category: "Design",
  },
  {
    question: "How does the process work for NRI homeowners or out-of-station clients?",
    answer:
      "Over 40% of our luxury villa projects are for NRIs. We maintain weekly high-definition video walkthroughs, shared cloud digital dashboards, digital sample approvals, and milestone-based transparent escrow accounts.",
    category: "NRI Services",
  },
];
