import {
  Shield,
  Target,
  TrendingUp,
  Users,
  MapPin,
  Handshake,
  Award,
  Building,
  CheckCircle,
} from "lucide-react";

export const aboutContent = {
  hero: {
    title: "About Us",
    subtitle: "Trust. Commitment. Results.",
    description: "At Aurex & Field, we're not here to follow the norms — we're here to raise the bar. Based in Gurgaon, we specialize in resale and fresh property deals, offering premium service backed by a simple promise: fair, transparent brokerage that respects your investment."
  },
  values: [
    { icon: Shield, name: "Transparency", description: "What you see is what you pay. No hidden fees." },
    { icon: MapPin, name: "Gurgaon-Focused", description: "Deep local knowledge of resale and fresh inventory." },
    { icon: Handshake, name: "End-to-End Support", description: "From site visits to documentation and closing." },
    { icon: Users, name: "Client-First Culture", description: "We prioritize relationships, not just transactions." },
  ],
  brokerage: {
    resale: {
      title: "Resale Properties – Just 0.5% Brokerage",
      rate: "0.5%",
      description: "We charge only 0.5% brokerage on all resale transactions in Gurgaon — one of the lowest rates in the industry, without compromising on service.",
      benefits: [
        "Save more on every transaction",
        "Verified listings, honest advice", 
        "Complete assistance from start to finish"
      ]
    },
    fresh: {
      title: "Fresh Deals – Tiered Brokerage That Rewards Value",
      description: "We believe high-value property buyers shouldn't pay excessive brokerage. Our fresh deal brokerage structure is designed to give you more value, especially at the top end:",
      tiers: [
        { range: "Above ₹8 Cr", rate: "1%" },
        { range: "₹5 Cr – ₹8 Cr", rate: "1.5%" },
        { range: "Below ₹5 Cr", rate: "2%" }
      ]
    }
  },
  mission: {
    title: "Our Mission",
    text: "To transform the property experience in Gurgaon through trustworthy practices, fair brokerage, and client-centric service."
  },
  vision: {
    title: "Our Vision", 
    text: "To become the most respected name in Gurgaon real estate — delivering results through trust and commitment."
  }
} as const;