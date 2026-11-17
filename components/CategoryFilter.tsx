import { Button } from "@/components/ui/button";
import { categories, Category } from "@/data/sessions";

type CategoryFilterProps = {
  active: Category | "All";
  onChange: (category: Category | "All") => void;
};

const options: (Category | "All")[] = ["All", ...categories];

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      {options.map((option) => {
        const isActive = option === active;

        return (
          <Button
            key={option}
            variant={isActive ? "default" : "outline"}
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className="rounded-full"
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
