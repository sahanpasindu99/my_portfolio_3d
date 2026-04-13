// components/ui/PortfolioCard.tsx
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  category: string;
  title: string;
  description: string;
  bgClass?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PortfolioCard = ({
  category,
  title,
  description,
  bgClass,
  className,
  children,
}: PortfolioCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] p-8 min-h-[320px] flex flex-col justify-end transition-all duration-500 hover:scale-[1.01] group shadow-2xl border border-white/10",
        bgClass,
        className,
      )}
    >
      {/* Glassmorphic Category Badge */}
      <div className="absolute top-8 left-8 z-20">
        <span className="bg-indigo-500/30 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
          {category}
        </span>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-white/70 text-sm font-medium leading-relaxed max-w-[280px]">
          {description}
        </p>
        {children}
      </div>

      {/* Subtle Gradient Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
