import StepCard from "./StepCard";

const steps = [
  {
    title: "Watch live",
    text: "Join a vendor's live video and see the product up close before you decide.",
  },
  {
    title: "Ask the vendor",
    text: "Ask about size, colour or condition in the chat and get answers right away.",
  },
  {
    title: "Pay securely",
    text: "Pay on OjaLive. We hold your money, the vendor does not get it yet.",
  },
  {
    title: "Confirm delivery",
    text: "When your order arrives and it is what you saw, confirm and the vendor gets paid.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-20 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Safe buying
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl"
          >
            How it works
          </h2>
          <p className="mt-2 text-slate-600">
            Buying on OjaLive is safe because the vendor is only paid after you
            get your item.
          </p>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <StepCard
                step={index + 1}
                title={step.title}
                text={step.text}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
