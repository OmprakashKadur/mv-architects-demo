export interface Testimonial {
  id: string;
  clientName: string;
  locality: string;
  projectType: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Vikram & Ananya Sen",
    locality: "Indiranagar, Bengaluru",
    projectType: "4BHK Architectural Courtyard Home",
    quote:
      "MV Architects transformed our plot into an urban oasis. Their attention to daylight, microcement textures, and cross-ventilation makes the home feel serene every single morning.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t2",
    clientName: "Rohit Krishnan",
    locality: "Koramangala, Bengaluru",
    projectType: "Clay & Teak Penthouse",
    quote:
      "As someone in tech, I appreciate precision. MV Studio delivered my entire penthouse within the agreed budget and timeline with zero drama and museum-level millwork finish.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t3",
    clientName: "Meera & Rajesh Nambiar",
    locality: "Palm Meadows, Whitefield",
    projectType: "Turnkey Luxury Villa (6,200 sq.ft.)",
    quote:
      "Being based in Singapore during construction was daunting, but the team's weekly photographic audits and transparent BOQs gave us total peace of mind. Truly turnkey.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
];
