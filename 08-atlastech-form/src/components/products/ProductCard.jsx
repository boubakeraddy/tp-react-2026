import ProductBadge from "./ProductBadge";
import StarRating from "./StarRating";
export default function ProductCard({ produit }) {
  const {
    tag,
    etat,
    img,
    nom,
    ref,
    description,
    cpu,
    cpu2,
    cpu3,
    stars,
    avis,
    prixOld,
    prix,
  } = produit;

  return (
    <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* <!-- Image et Badge --> */}
        <div className="relative bg-slate-100 p-6 flex items-center justify-center overflow-hidden aspect-video sm:aspect-square">
          <ProductBadge etat={etat} tag={tag} />
          <img
            src={img}
            alt={nom}
            className="w-full h-44 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* <!-- Informations du produit --> */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
            <span className="font-bold text-indigo-600 uppercase tracking-wider text-[10px]">
              {nom}
            </span>
            <span className="font-medium">Réf: {ref}</span>
          </div>

          <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
            {description}
          </h3>

          {/* <!-- Spécifications techniques rapides --> */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
              {cpu}
            </span>
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
              {cpu2}
            </span>
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
              {cpu3}
            </span>
          </div>
          <StarRating stars={stars} avis={avis} />
        </div>
      </div>

      {/* <!-- Bas de carte : Prix et CTA --> */}
      <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
        <div>
          <span
            className="text-xs text-slate-600 line-through block"
            style={prixOld ? {} : { display: "none" }}
          >
            {prixOld} DH
          </span>
          <span className="text-lg font-extrabold text-slate-900">
            {prix}{" "}
            <span className="text-xs font-semibold text-slate-600">DH</span>
          </span>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm shadow-indigo-200 flex items-center gap-1.5">
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
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>Ajouter</span>
        </button>
      </div>
    </article>
  );
}
