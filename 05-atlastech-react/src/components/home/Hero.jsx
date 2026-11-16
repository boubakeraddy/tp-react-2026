const Hero = function () {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 md:p-12 mb-8 shadow-xl border border-slate-800">
      {/* <!-- Effet lumineux d'arrière-plan --> */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Nouveautés Hardware 2026
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
          Poussez les limites de la{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
            Puissance Pure
          </span>
          .
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Découvrez notre sélection exclusive de processeurs dernière
          génération, cartes graphiques ultra-performantes et composants gaming
          haut de gamme livrés directement chez vous.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
          >
            <span>Configurer ma tour</span>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
          >
            Voir les offres flash
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
