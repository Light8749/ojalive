import Image from "next/image";
import { BadgeCheck, Eye, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LiveSession } from "@/data/sessions";
import { formatNaira, formatViewers } from "@/lib/format";

type SessionCardProps = {
  session: LiveSession;
};

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <Card className="group relative h-full gap-0 overflow-hidden py-0 transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-brand-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={session.image}
          alt={session.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 480px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <Badge className="rounded-md bg-red-600 font-bold uppercase text-white">
            <span className="size-1.5 animate-pulse rounded-full bg-white motion-reduce:animate-none" />
            Live
          </Badge>
          <Badge className="rounded-md bg-black/60 text-white">
            <Eye aria-hidden="true" />
            {formatViewers(session.viewers)}
            <span className="sr-only">people watching</span>
          </Badge>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col p-4">
        <p className="flex items-center gap-1 text-sm font-medium text-slate-600">
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

        <h3 className="mt-1 line-clamp-2 font-semibold leading-snug text-slate-900">
          {/* the link covers the whole card so the full card is clickable */}
          <a
            href="#"
            className="focus:outline-none after:absolute after:inset-0 after:content-['']"
          >
            {session.title}
          </a>
        </h3>

        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
          <MapPin className="size-3" aria-hidden="true" />
          {session.location}
        </p>

        <p className="mt-auto pt-3 text-lg font-bold text-brand-700">
          {formatNaira(session.price)}
        </p>
      </CardContent>
    </Card>
  );
}
