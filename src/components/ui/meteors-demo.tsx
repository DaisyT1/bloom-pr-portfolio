
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";

interface MeteorsDemoProps {
  title: string;
  description: string;
  bgColorClass?: string;
}

export function MeteorsDemo({ title, description, bgColorClass = "from-pink-light to-offwhite" }: MeteorsDemoProps) {
  return (
    <div className="w-full relative max-w-xs mx-auto">
      <div className={cn("absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.80] rounded-full blur-3xl", bgColorClass)} />
      <div className="relative shadow-xl bg-[rgb(17,24,39)] border border-pink-light px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <h3 className="font-light text-xl text-gray-400 mb-4 relative z-50 uppercase roboto">
          {title}
        </h3>

        <p className="font-light text-base text-gray-500 mb-4 relative z-50 roboto">
          {description}
        </p>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
