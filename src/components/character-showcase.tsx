"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CharacterShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: number;
}

const items = [
  { icon: "/characters/Xilonen_Icon.png" },
  { icon: "/characters/Arataki_Itto_Icon.png" },
  { icon: "/characters/Albedo_Icon.png" },
  { icon: "/characters/Furina_Icon.png" },
  { icon: "/characters/Skirk_Icon.png" },
  { icon: "/characters/Yae_Miko_Icon.png" },
  { icon: "/characters/Arlecchino_Icon.png" },
  { icon: "/characters/Kaedehara_Kazuha_Icon.png" },
  { icon: "/characters/Ganyu_Icon.png" },
  { icon: "/characters/Nilou_Icon.png" },
  { icon: "/characters/Diluc_Icon.png" },
  { icon: "/characters/Mavuika_Icon.png" },
];

export default function CharacterShowcase({
  slots = 12,
  className,
  ...props
}: CharacterShowcaseProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 bg-amber-100 p-2 rounded-md",
        className
      )}
      {...props}
    >
      {items.slice(0, slots).map((item, i) => (
        <div
          key={i}
          className="relative aspect-square rounded-lg border border-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-1 border-2 border-accent-foreground rounded overflow-hidden">
            <Image
              src={item.icon}
              alt={`Character ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={i < 4}
            />
          </div>
          <div className="absolute bottom-0 inset-x-1 text-center text-[9px] bg-gradient-to-r from-amber-200 to-yellow-300 text-amber-900 font-bold rounded border border-amber-600 shadow-sm">
            Lv. 90
          </div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full border border-amber-600" />
        </div>
      ))}
    </div>
  );
}
