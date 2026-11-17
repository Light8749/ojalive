"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import SessionGrid from "@/components/SessionGrid";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { sessions, Category } from "@/data/sessions";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const searchText = search.trim().toLowerCase();

  const filteredSessions = sessions.filter((session) => {
    const matchesCategory =
      activeCategory === "All" || session.category === activeCategory;

    const matchesSearch =
      searchText === "" ||
      session.title.toLowerCase().includes(searchText) ||
      session.vendor.toLowerCase().includes(searchText) ||
      session.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  function clearFilters() {
    setSearch("");
    setActiveCategory("All");
  }

  return (
    <>
      <Header search={search} onSearchChange={setSearch} />

      <main>
        <Hero />

        <section
          id="live-now"
          aria-labelledby="live-now-heading"
          className="mx-auto max-w-7xl scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="flex items-end justify-between gap-4">
            <h2
              id="live-now-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Live now
            </h2>
            <p aria-live="polite" className="text-sm text-slate-500">
              {filteredSessions.length}{" "}
              {filteredSessions.length === 1 ? "session" : "sessions"}
            </p>
          </div>

          <div className="mt-4">
            <CategoryFilter
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="mt-6">
            <SessionGrid sessions={filteredSessions} onClear={clearFilters} />
          </div>
        </section>

        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}
