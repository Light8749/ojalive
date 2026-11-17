import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          See it live, ask questions, and only pay the vendor when your order
          arrives.
        </h1>

        <p className="mt-4 max-w-xl text-base text-brand-100 sm:text-lg">
          Shop from trusted Nigerian vendors on live video. Your money stays
          safe with us until you confirm delivery.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-brand-900 hover:bg-brand-50"
          >
            <a href="#live-now">Start watching</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#how-it-works">How it works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
