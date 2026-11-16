const Footer = function () {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16">
      {/* <!-- Section avantages / garanties --> */}
      <div className="border-b border-slate-800 py-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">
                  Livraison 24/48h
                </h4>
                <p className="text-xs text-slate-600">
                  Partout au Maroc avec suivi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">
                  Garantie 2 ans
                </h4>
                <p className="text-xs text-slate-600">
                  Pièces d'origine neuves
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">
                  Paiement Sécurisé
                </h4>
                <p className="text-xs text-slate-600">CMI ou à la livraison</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">
                  Support Technique
                </h4>
                <p className="text-xs text-slate-600">
                  Conseillers spécialisés 6j/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contenu des colonnes du Footer --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* <!-- Colonne 1 : À propos --> */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <svg
                  className="w-5 h-5"
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
              </div>
              <span className="text-lg font-bold text-white">
                Atlas<span className="text-indigo-400">Hardware</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Référence marocaine de la distribution de matériel informatique et
              composants d'ordinateurs haute performance pour entreprises,
              gamers et créateurs de contenu.
            </p>
            <div className="text-xs text-slate-600 space-y-1">
              <p>
                <strong className="text-slate-300">Siège :</strong> Technopark,
                Route de Nouaceur, Casablanca
              </p>
              <p>
                <strong className="text-slate-300">Contact :</strong>{" "}
                contact@atlashardware.ma | 05 22 00 11 22
              </p>
            </div>
          </div>

          {/* <!-- Colonne 2 : Liens Catégories --> */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Composants
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Processeurs Intel & AMD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cartes Graphiques RTX 40 & RX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mémoires RAM DDR5
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Disques SSD M.2 NVMe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cartes Mères AM5 & LGA1700
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refroidissement & Watercooling
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Colonne 3 : Services & Support --> */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Service Client
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Suivre ma commande
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Conditions de retour (14 jours)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Procédure de garantie SAV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Montage et devis PC gratuit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Modes de paiement & CMI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Foire aux questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Colonne 4 : Newsletter --> */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Offres Privilèges
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              Recevez chaque semaine nos codes promo et arrivages exclusifs.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre adresse email..."
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="button"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Barre de copyright et mentions légales --> */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>&copy; 2026 Atlas Hardware Maroc SARL. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Conditions Générales de Vente
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Politique de Confidentialité
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
