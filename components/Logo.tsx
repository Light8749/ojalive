import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="rounded-md text-2xl font-extrabold tracking-tight text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    >
      Oja<span className="text-brand-600">Live</span>
    </Link>
  );
}
