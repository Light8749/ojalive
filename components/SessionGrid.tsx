import { Button } from "@/components/ui/button";
import { LiveSession } from "@/data/sessions";
import SessionCard from "./SessionCard";

type SessionGridProps = {
  sessions: LiveSession[];
  onClear: () => void;
};

export default function SessionGrid({ sessions, onClear }: SessionGridProps) {
  if (sessions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
        <p className="font-semibold text-slate-900">No live sessions found</p>
        <p className="mt-1 text-sm text-slate-500">
          Try a different search or pick another category.
        </p>
        <Button onClick={onClear} className="mt-5 rounded-full">
          Clear filters
        </Button>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionCard session={session} />
        </li>
      ))}
    </ul>
  );
}
