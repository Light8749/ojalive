import { Card, CardContent } from "@/components/ui/card";

type StepCardProps = {
  step: number;
  title: string;
  text: string;
};

export default function StepCard({ step, title, text }: StepCardProps) {
  return (
    <Card className="relative h-full gap-0 py-0 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md">
      <CardContent className="p-5">
        <span
          className="flex size-10 items-center justify-center rounded-full bg-brand-600 font-bold text-white"
          aria-hidden="true"
        >
          {step}
        </span>

        <h3 className="mt-4 font-semibold text-slate-900">
          <span className="sr-only">Step {step}: </span>
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
      </CardContent>
    </Card>
  );
}
