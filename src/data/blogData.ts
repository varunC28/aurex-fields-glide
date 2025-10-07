export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Smart Investments in Real Estate for 2025",
    description:
      "Discover the top-performing property sectors this year — from emerging micro-cities to commercial hubs attracting global investors.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    date: "September 25, 2025",
    author: "Varun Chaturvedi",
  },
  {
    id: 2,
    title: "How to Evaluate Property Value Like a Pro",
    description:
      "Learn key metrics and insider strategies developers use to estimate property value, rental yield, and long-term ROI.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    date: "October 2, 2025",
    author: "Mansi Patel",
  },
  {
    id: 3,
    title: "Luxury Apartments: Why Location Beats Design",
    description:
      "Architectural brilliance attracts, but location sells. Explore the real factors influencing luxury property demand in 2025.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    date: "October 5, 2025",
    author: "Team Aurex Fields",
  },
];
