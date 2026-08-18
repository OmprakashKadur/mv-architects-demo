export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  manifesto: {
    line1: string;
    line2: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    locality: string;
    pincode: string;
    googleMapsUrl: string;
    googleMapsEmbed: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappNumber: string;
    email: string;
    instagram: string;
    instagramUrl: string;
    workingHours: string;
    workingDays: string;
  };
  stats: Array<{
    label: string;
    value: string;
    numericValue: number;
    suffix: string;
    subtext: string;
  }>;
}

export const studioInfo: StudioInfo = {
  name: "MV Architects & Interiors",
  tagline: "High-End Residential Architecture & Bespoke Interior Design",
  description:
    "Award-winning architecture and bespoke interior design studio crafting timeless, contextual living spaces in Bengaluru and beyond.",
  manifesto: {
    line1: "We do not decorate rooms. We sculpt atmosphere, light, and materiality.",
    line2: "Architecture rooted in honesty, crafted for generations of modern living.",
  },
  location: {
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    address: "Studio 402, 12th Main Road, HAL 2nd Stage, Indiranagar",
    locality: "Indiranagar",
    pincode: "560038",
    googleMapsUrl: "https://maps.google.com/?q=Indiranagar+Bengaluru",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9854497672727!2d77.6385412!3d12.9727783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7a0000001%3A0x1234567890abcdef!2sIndiranagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000",
    coordinates: {
      latitude: 12.9728,
      longitude: 77.6385,
    },
  },
  contact: {
    phone: "+91 98765 43210",
    phoneFormatted: "+91-98765-43210",
    whatsappNumber: "919876543210",
    whatsapp: "https://wa.me/919876543210?text=Hello%20MV%20Architects,%20I%20would%20like%20to%20enquire%20about%20an%20interior%20design%20project.",
    email: "hello@mvarchitects.in",
    instagram: "@mvarchitects.india",
    instagramUrl: "https://instagram.com/mvarchitects.india",
    workingHours: "10:00 AM – 7:00 PM",
    workingDays: "Monday – Saturday (By Appointment)",
  },
  stats: [
    {
      label: "Bespoke Homes Delivered",
      value: "120+",
      numericValue: 120,
      suffix: "+",
      subtext: "Across South India",
    },
    {
      label: "Years of Studio Practice",
      value: "14",
      numericValue: 14,
      suffix: "",
      subtext: "Founded in 2012",
    },
    {
      label: "Square Feet Designed",
      value: "350k+",
      numericValue: 350,
      suffix: "k+ sq.ft.",
      subtext: "Luxury residential & commercial",
    },
    {
      label: "Design Awards & Honors",
      value: "18",
      numericValue: 18,
      suffix: "",
      subtext: "National & Regional Accolades",
    },
  ],
};
