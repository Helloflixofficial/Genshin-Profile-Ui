"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { type ForwardedRef, forwardRef } from "react";
import { Trophy, Globe, User, Crown } from "lucide-react";
import Image from "next/image";

const items = [
  {
    label: "Total Achievements",
    value: "1113",
    icon: "/images/abyss.png",
    tag: "/images/achievements.png",
    color: "text-yellow-600",
  },
  {
    label: "Max Friendship Level",
    value: "30",
    icon: "/images/abyss.png",
    tag: "/images/achievements.png",
    color: "text-pink-600",
  },
  {
    label: "Spiral Abyss",
    value: "12-3",
    icon: "/images/abyss.png",
    tag: "/images/achievements.png",
    color: "text-red-600",
  },
  {
    label: "Imaginarium Theater",
    value: "Act 10",
    icon: "/images/abyss.png",
    tag: "/images/achievements.png",
    color: "text-purple-600",
  },
  {
    label: "Stygian Onslaught",
    value: "355s",
    icon: "/images/abyss.png",
    tag: "/images/achievements.png",
    color: "text-orange-600",
  },
];

// temp:  used type instead of empty interface;
type ProfileCardProps = React.HTMLAttributes<HTMLDivElement>;

const ProfileCard = forwardRef(function ProfileCard(
  { className, ...props }: ProfileCardProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <section
      ref={ref}
      className={cn(
        "flex flex-col gap-3 p-4 md:p-5 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative",
        className
      )}
      {...props}
    >
      {/* Decorative corner ornaments */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-600 rounded-tl-lg" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-600 rounded-tr-lg" />

      {/* Background area */}
      <div className="relative w-full aspect-[320/160] rounded-lg border-3 border-amber-300 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 shadow-inner overflow-hidden">
        {/* border-2 border-dashed */}
        <div className="absolute inset-2  border-white/50 rounded flex items-center justify-center text-xs text-white font-semibold">
          <video
            src="/videos/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover border-2 border-dashed"
            style={{ width: "100%", height: "100%", borderRadius: "15px" }}
          />
        </div>
        <div className="absolute border-2 top-2 right-2 rounded-[6px] bg-gradient-to-r from-amber-200 to-yellow-500 px-2 text-xs font-bold text-amber-700 shadow-md ">
          UID:631331233
        </div>

        {/* Profile pic */}
        <div className="absolute top-4 left-4">
          <div className="w-16 h-16 rounded-full border-3 border-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-[9px] text-amber-700 shadow-lg relative">
            <div className="absolute inset-1 border border-dashed border-amber-400 rounded-full flex items-center justify-center text-center leading-tight">
              <div className="relative w-[50px] h-[50px] overflow-hidden rounded-full">
                <Image
                  src="/characters/Aloy_Icon.png"
                  alt="profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full border border-amber-600" />
          </div>
        </div>

        {/* Name */}
        <div className="absolute top-6 left-24 right-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">
            ZERO
          </h2>

          <div className="w-12 h-0.5 bg-gradient-to-r from-white via-yellow-300 to-transparent mt-1" />
        </div>

        {/* Decorative dots */}
        <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80" />
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80" />
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-md p-2 border-1 shadow-inner">
        <ul className="space-y-1 text-xs">
          {[
            {
              label: "Adventure Rank",
              value: "60",
              icon: Crown,
              color: "text-purple-700",
            },
            {
              label: "World Level",
              value: "9",
              icon: Globe,
              color: "text-blue-700",
            },
            {
              label: "Player Type",
              value: "F2Player",
              icon: User,
              color: "text-green-700",
            },
          ].map((item) => (
            <li key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <item.icon className={`w-3 h-3 ${item.color}`} />
                <span className="text-amber-900 font-medium">{item.label}</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 font-bold text-xs shadow-sm">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-br  border-b-card-foreground  from-orange-100 to-amber-100 rounded-md p-2 border-1 border-amber-300 shadow-inner">
        <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-amber-300">
          <Trophy className="w-4 h-4 text-yellow-600" />
          <h3 className="font-bold text-amber-900 text-sm">Records</h3>
        </div>

        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-xs py-1"
          >
            <div className="flex items-center gap-1.5">
              <Image
                src={item.icon}
                alt={item.label}
                width={12}
                height={12}
                className={`object-contain ${item.color}`}
              />
              <span className="text-amber-800 font-medium truncate">
                {item.label}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-amber-900 bg-amber-200 px-1.5 py-0.5 rounded text-xs">
                {item.value}
              </span>
              <Image
                src={item.tag}
                alt={item.label}
                width={12}
                height={12}
                className={`object-contain ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full" />
    </section>
  );
});

export default ProfileCard;
