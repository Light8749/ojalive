import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import SessionCard from "@/components/SessionCard";
import LiveChat from "@/components/live/LiveChat";
import LiveHeader from "@/components/live/LiveHeader";
import LivePlayer from "@/components/live/LivePlayer";
import ProductPanel from "@/components/live/ProductPanel";
import VendorInfo from "@/components/live/VendorInfo";
import { sessions } from "@/data/sessions";

type LivePageProps = {
  params: Promise<{ id: string }>;
};

function findSession(id: string) {
  return sessions.find((session) => session.id === Number(id));
}

// build a page for every mock session at build time
export function generateStaticParams() {
  return sessions.map((session) => ({ id: session.id.toString() }));
}

export async function generateMetadata({ params }: LivePageProps): Promise<Metadata> {
  const { id } = await params;
  const session = findSession(id);
  if (!session) return {};

  return {
    title: `${session.title} - ${session.vendor} is live on OjaLive`,
  };
}

export default async function LivePage({ params }: LivePageProps) {
  const { id } = await params;
  const session = findSession(id);

  if (!session) {
    notFound();
  }

  // a few other sessions to show under the stream
  const moreSessions = sessions.filter((s) => s.id !== session.id).slice(0, 4);

  return (
    <>
      <LiveHeader />

      <main className="mx-auto max-w-7xl sm:px-6 sm:py-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          <div className="space-y-4 lg:col-span-2">
            <LivePlayer session={session} />
            <div className="space-y-4 px-4 sm:px-0">
              <VendorInfo session={session} />
              <ProductPanel session={session} />
            </div>
          </div>

          {/* chat stays next to the video on big screens */}
          <div className="px-4 sm:px-0 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
            <LiveChat session={session} />
          </div>
        </div>

        <section aria-labelledby="more-live-heading" className="px-4 py-10 sm:px-0">
          <h2 id="more-live-heading" className="text-xl font-bold tracking-tight">
            More live now
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {moreSessions.map((s) => (
              <li key={s.id}>
                <SessionCard session={s} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
