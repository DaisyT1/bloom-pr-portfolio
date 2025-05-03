
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
      <div className="relative shadow-xl bg-offwhite border border-pink-light px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-charcoal/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-charcoal"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-charcoal mb-4 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-base text-charcoal/70 mb-4 relative z-50">
          {description}
        </p>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
