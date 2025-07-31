"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface CharacterShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: number;
}

const items = [
  {
    icon: "/images/characters/Xilonen_Icon.png",
  },
  {
    icon: "/images/characters/Arataki_Itto_Icon.png",
  },
  {
    icon: "/images/characters/Albedo_Icon.png",
  },
  {
    icon: "/images/characters/Furina_Icon.png",
  },
  {
    icon: "/images/characters/Skirk_Icon.png",
  },
  {
    icon: "/images/characters/Yae_miko_Icon.png",
  },
  {
    icon: "/images/characters/Arlecchino_Icon.png",
  },
  {
    icon: "/images/characters/Kaedehara_Kazuha_Icon.png",
  },
  {
    icon: "/images/characters/Ganyu_Icon.png",
  },
  {
    icon: "/images/characters/Nilou_Icon.png",
  },
  {
    icon: "/images/characters/Diluc_Icon.png",
  },
  {
    icon: "/images/characters/Mavuika_Icon.png",
  },
];

export default function CharacterShowcase({
  slots = 12,
  className,
  ...props
}: CharacterShowcaseProps) {
  const arr = Array.from({ length: slots });
  return (
    <div
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 bg-amber-100",
        className
      )}
      {...props}
    >
      {items.slice(0, slots).map((src, i) => (
        <div
          key={i}
          className="relative aspect-square rounded-lg border-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden flex items-center justify-center text-[10px] text-amber-700 font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-1 border-2 border-accent-foreground rounded flex items-center justify-center overflow-hidden">
            <Image
              src={src.icon}
              alt={`Character ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute border-b-card-foreground  bottom-0 inset-x-1 text-center text-[9px] bg-gradient-to-r from-amber-200 to-yellow-300 text-amber-900 font-bold rounded border border-amber-600 shadow-sm">
            Lv. 90
          </div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full border border-amber-600" />
        </div>
      ))}
    </div>
  );
}
