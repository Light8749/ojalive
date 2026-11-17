import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function Header({ search, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:gap-6 sm:px-6 lg:px-8">
        <Logo />

        {/* on mobile the search goes to its own row under the logo */}
        <div className="order-last w-full sm:order-none sm:max-w-xl sm:flex-1">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>

        <Button className="ml-auto rounded-full px-5">Sign in</Button>
      </div>
    </header>
  );
}
