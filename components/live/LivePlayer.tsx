import Image from "next/image";
import { Eye, Maximize, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LiveSession } from "@/data/sessions";
import { formatViewers } from "@/lib/format";

type LivePlayerProps = {
  session: LiveSession;
};

// there is no real video yet, so the product photo stands in for the stream
export default function LivePlayer({ session }: LivePlayerProps) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-black sm:aspect-video sm:rounded-2xl">
      <Image
        src={session.image}
        alt={`Live video of ${session.vendor} showing ${session.title}`}
        fill
        priority
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/60 to-transparent p-4">
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

      {/* fake player controls, they don't do anything yet */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-1 bg-gradient-to-t from-black/60 to-transparent p-3">
        <button
          type="button"
          aria-label="Unmute"
          className="rounded-full p-2 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
        >
          <Volume2 className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Full screen"
          className="rounded-full p-2 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
        >
          <Maximize className="size-5" />
        </button>
      </div>
    </div>
  );
}
