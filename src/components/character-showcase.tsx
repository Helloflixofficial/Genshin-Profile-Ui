"use client";
import { cn } from "@/lib/utils";
interface CharacterShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: number;
}
export default function CharacterShowcase({
  slots = 12,
  className,
  ...props
}: CharacterShowcaseProps) {
  const arr = Array.from({ length: slots });
  return (
    <div
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4",
        className
      )}
      {...props}
    >
      {arr.map((_, i) => (
        <div
          key={i}
          className="relative aspect-square rounded-lg border-3 border-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden flex items-center justify-center text-[10px] text-amber-700 font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-1 border-2 border-dashed border-amber-400 rounded flex items-center justify-center">
            Add character
          </div>
          <div className="absolute bottom-1 inset-x-1 text-center text-[10px] bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 font-bold rounded border border-amber-600 shadow-sm">
            Lv. 90
          </div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full border border-amber-600" />
        </div>
      ))}
    </div>
  );
}
