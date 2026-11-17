import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} className="w-full">
      <label htmlFor="search" className="sr-only">
        Search live sessions
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <Input
          id="search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products, vendors..."
          className="h-10 rounded-full bg-white pl-9"
        />
      </div>
    </form>
  );
}
