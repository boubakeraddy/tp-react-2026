const Navbar = function () {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white text-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1 min-h-[48px]">
          <ul className="flex items-center gap-1 sm:gap-2 xl:gap-3 overflow-x-auto no-scrollbar py-1 font-medium text-xs sm:text-sm">
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                Composants PC
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                PC Gamers & Stations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                PC Portables
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Écrans & Moniteurs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Périphériques
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 rounded-lg text-amber-400 font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                </svg>
                Promotions & Ventes Flash
              </a>
            </li>
          </ul>
          <div className="hidden xl:flex items-center text-xs text-slate-400 font-semibold uppercase tracking-wider shrink-0 ml-4">
            <span className="text-emerald-400 font-bold mr-1.5">•</span>{" "}
            Configurateur PC 3D
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
