const Sidebar = function () {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-6 sticky top-24">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filtres Matériel
          </h2>
          <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            Réinitialiser
          </button>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Catégories
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <label className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Processeurs (CPU)</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">24</span>
              </label>
            </li>
            <li>
              <label className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Cartes Graphiques (GPU)</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">18</span>
              </label>
            </li>
            <li>
              <label className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Mémoires RAM DDR5/DDR4</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">32</span>
              </label>
            </li>
            <li>
              <label className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Stockage SSD NVMe</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">41</span>
              </label>
            </li>
            <li>
              <label className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Cartes Mères (Motherboards)</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">15</span>
              </label>
            </li>
            <li>
              <label className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Alimentations & Boîtiers</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">27</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Marques & Constructeurs
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>AMD</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>Intel</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>NVIDIA</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>ASUS ROG</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>MSI</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>Corsair</span>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Budget (en MAD)
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <input
                type="number"
                placeholder="Min (500)"
                defaultValue="500"
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <span className="text-slate-600">-</span>
              <input
                type="number"
                placeholder="Max (15000)"
                defaultValue="8000"
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <input
              type="range"
              min="500"
              max="20000"
              defaultValue="8000"
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Disponibilité
          </h3>
          <div className="space-y-2 text-sm text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="radio"
                name="dispo"
                defaultChecked
                className="text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>En stock magasin</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <input
                type="radio"
                name="dispo"
                className="text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>En arrivage / Précommande</span>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 text-center">
            <span className="text-xs font-bold text-indigo-900 block mb-1">
              Besoin d'un devis sur-mesure ?
            </span>
            <p className="text-[11px] text-indigo-700 mb-3">
              Nos techniciens montent votre configuration selon vos exigences
              professionnelles.
            </p>
            <a
              href="#"
              className="inline-block w-full py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Contacter un expert
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
