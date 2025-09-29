import { Bracket } from "./Bracket";

interface SectionHeaderProps {
  text: string;
  className?: string;
}

export function SectionHeader({ text, className = "" }: SectionHeaderProps) {
  return (
    <p className={`font-geist flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground ${className}`}>
      <Bracket className="h-8 sm:h-10 md:h-12 text-foreground" />
      <span className="font-geist font-medium">{text}</span>
      <Bracket className="h-8 sm:h-10 md:h-12 scale-x-[-1] text-foreground" />
    </p>
  );
}