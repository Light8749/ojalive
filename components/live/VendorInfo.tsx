"use client";

import { useState } from "react";
import { BadgeCheck, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LiveSession } from "@/data/sessions";

type VendorInfoProps = {
  session: LiveSession;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function VendorInfo({ session }: VendorInfoProps) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar className="size-11">
          <AvatarFallback className="bg-brand-100 font-semibold text-brand-700">
            {getInitials(session.vendor)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="flex items-center gap-1 font-semibold text-slate-900">
            <span className="truncate">{session.vendor}</span>
            {session.verified && (
              <>
                <BadgeCheck
                  className="size-4 shrink-0 fill-sky-500 text-white"
                  aria-hidden="true"
                />
                <span className="sr-only">Verified vendor</span>
              </>
            )}
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            <MapPin className="size-3" aria-hidden="true" />
            {session.location}
          </p>
        </div>
      </div>

      <Button
        variant={following ? "outline" : "default"}
        aria-pressed={following}
        onClick={() => setFollowing(!following)}
        className="shrink-0 rounded-full"
      >
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
