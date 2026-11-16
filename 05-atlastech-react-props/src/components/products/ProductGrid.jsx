import ProductCard from "./ProductCard";

const ProductGrid = function () {
  let products = [
    {
      tag: "42% Promo",
      etat: "Promo",
      img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&auto=format&fit=crop&q=80",
      nom: "Processeur CPU",
      ref: "AMD-7800X3D",
      description: "AMD Ryzen 7 7800X3D (4.2 GHz / 5.0 GHz) Socket AM5",
      cpu: "8 Cœurs",
      cpu2: "16 Threads",
      cpu3: "96 Mo 3D V-Cache",
      stars: 5,
      avis: "48 avis",
      prixOld: "5 400",
      prix: "4 750",
    },
    {
      tag: "80% Promo",
      etat: "Nouveau",
      img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=80",
      nom: "Carte Graphique GPU",
      ref: "ASUS-4070TIS",
      description: "ASUS TUF Gaming GeForce RTX 4070 Ti SUPER 16GB",
      cpu: "16 Go GDDR6X",
      cpu2: "DLSS 3.5",
      cpu3: "3x Ventilateurs",
      stars: 5,
      avis: "32 avis",
      prixOld: null,
      prix: "11 200",
    },
    {
      tag: "SuperDeal",
      etat: "Best-Seller",
      img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=500&auto=format&fit=crop&q=80",
      nom: "Mémoire RAM",
      ref: "COR-32DDR5",
      description: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz CL30",
      cpu: "32 Go Dual",
      cpu2: "6000 MHz",
      cpu3: "Intel XMP & AMD EXPO",
      stars: 4,
      avis: "19 avis",
      prixOld: "1 850",
      prix: "1 590",
    },
    {
      tag: "TOP",
      etat: "Gen 4.0",
      img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=80",
      nom: "Stockage SSD",
      ref: "SAM-990P-2T",
      description: "Samsung 990 PRO NVMe M.2 2TB PCIe 4.0 (7450 Mo/s)",
      cpu: "Capacité 2 To",
      cpu2: "7450 Mo/s Lecture",
      cpu3: "Garantie 5 ans",
      stars: 3,
      avis: "53 avis",
      prixOld: null,
      prix: "2 190",
    },
    {
      tag: "20% Promo",
      etat: "Wi-Fi 6E",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=80",
      nom: "Carte Mère",
      ref: "MSI-B650-TOM",
      description: "MSI MAG B650 TOMAHAWK WIFI (Socket AM5 / ATX)",
      cpu: "Socket AM5",
      cpu2: "4x DDR5 Slots",
      cpu3: "3x M.2 PCIe",
      stars: 5,
      avis: "27 avis",
      prixOld: null,
      prix: "2 850",
    },
    {
      tag: "FlashDeal",
      etat: "Airflow Max",
      img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&auto=format&fit=crop&q=80",
      nom: "Boîtier PC Gamer",
      ref: "NZXT-H7F-BK",
      description: "NZXT H7 Flow RGB Noir (Moyen Tour / Verre Trempé)",
      cpu: "Façade Mesh",
      cpu2: "3x Fans RGB 140mm",
      cpu3: "Support 360mm AIO",
      stars: 3,
      avis: "41 avis",
      prixOld: null,
      prix: "1 750",
    },
  ];
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
