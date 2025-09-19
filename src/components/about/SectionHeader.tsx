import { Bracket } from "./Bracket";

interface SectionHeaderProps {
  text: string;
  className?: string;
}

export function SectionHeader({ text, className = "" }: SectionHeaderProps) {
  return (
    <p className={`font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black ${className}`}>
      <Bracket className="h-12 text-black" />
      <span className="font-geist font-medium">{text}</span>
      <Bracket className="h-12 scale-x-[-1] text-black" />
    </p>
  );
}