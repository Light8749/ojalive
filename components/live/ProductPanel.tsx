"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LiveSession } from "@/data/sessions";
import { formatNaira } from "@/lib/format";

type ProductPanelProps = {
  session: LiveSession;
};

export default function ProductPanel({ session }: ProductPanelProps) {
  const [showNote, setShowNote] = useState(false);

  return (
    <Card className="gap-0 py-0">
      <CardContent className="p-5">
        <Badge variant="secondary" className="rounded-md">
          {session.category}
        </Badge>
        <h1 className="mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          {session.title}
        </h1>
        <p className="mt-2 text-2xl font-extrabold text-brand-700">
          {formatNaira(session.price)}
        </p>

        <div className="mt-4 flex items-start gap-3 rounded-xl bg-brand-50 p-3 text-sm text-brand-900">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
          <p>
            Your payment is held by OjaLive. {session.vendor} only gets paid
            after you confirm delivery.
          </p>
        </div>

        <Button
          size="lg"
          className="mt-4 w-full rounded-full"
          onClick={() => setShowNote(true)}
        >
          Buy now
        </Button>

        <p aria-live="polite" className="mt-2 text-center text-xs text-slate-500">
          {showNote && "Checkout is not part of this demo yet."}
        </p>
      </CardContent>
    </Card>
  );
}
