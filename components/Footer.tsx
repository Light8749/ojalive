const links = ["About us", "Sell on OjaLive", "Help centre", "Terms", "Privacy"];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-extrabold tracking-tight text-white">
            Oja<span className="text-brand-500">Live</span>
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white focus-visible:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-slate-800 pt-6 text-xs">
          &copy; {new Date().getFullYear()} OjaLive. Payments are held until
          delivery is confirmed.
        </p>
      </div>
    </footer>
  );
}
