import ProductCard from "./ProductCard";

const ProductGrid = function ({ products }) {
  return (
    <section>
      {/* <!-- En-tête de section avec tri et compteur --> */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4 border-b border-slate-200 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Composants Informatiques & Pièces PC
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Affichage de 6 produits phares disponibles en stock
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-600 font-medium whitespace-nowrap">
            Trier par :
          </span>
          <select className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-sm">
            <option>Popularité & Meilleures ventes</option>
            <option>Prix : Croissant</option>
            <option>Prix : Décroissant</option>
            <option>Nouveautés en rayon</option>
          </select>
        </div>
      </div>

      {/* <!-- GRILLE DE CARTES PRODUITS --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard produit={p} key={i} />
        ))}
      </div>
    </section>
  );
};
export default ProductGrid;
