interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
        AUREX & FIELDS
      </span>
    </div>
  );
}