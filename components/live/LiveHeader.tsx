import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

export default function LiveHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link href="/" aria-label="Back to live sessions">
              <ArrowLeft />
            </Link>
          </Button>
          <Logo />
        </div>

        <Button className="rounded-full px-5">Sign in</Button>
      </div>
    </header>
  );
}
