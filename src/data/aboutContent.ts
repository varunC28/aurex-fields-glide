import {
  MessageCircle,
  Figma,
  Framer,
  Github,
  Monitor,
  FileText,
  Package,
  Zap,
  Code,
} from "lucide-react";

export const aboutContent = {
  text: "see more from gxuri",
  headerText: "integrate with your fav tech stack",
  techIcons: [
    { icon: MessageCircle, name: "Discord" },
    { icon: Figma, name: "Figma" },
    { icon: Framer, name: "Framer" },
    { icon: Github, name: "GitHub" },
    { icon: Monitor, name: "Monitor" },
    { icon: FileText, name: "Notion" },
    { icon: Package, name: "Pieces" },
    { icon: Zap, name: "Postman" },
    { icon: Code, name: "VS Code" },
  ],
} as const;