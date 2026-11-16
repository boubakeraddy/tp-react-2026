import { Routes, Route } from "react-router-dom";
import { LayoutPrincipal } from "./layouts/LayoutPrincipal";
import { Accueil } from "./pages/Accueil";
import { Catalogue } from "./pages/Catalogue";
import { DetailProduit } from "./pages/DetailProduit";
import { Panier } from "./pages/Panier";
import { Page404 } from "./pages/Page404";
export const App = () => {
  return (
    <Routes>
      {/* Route parente : fournit le gabarit avec la barre de navigation */}
      <Route path="/" element={<LayoutPrincipal />}>
        {/* Route d'accueil : s'affiche par défaut à l'adresse "/" */}
        <Route index element={<Accueil />} />
        {/* Route du catalogue général */}
        <Route path="catalogue" element={<Catalogue />} />
        {/* Route dynamique avec paramètre :id */}
        <Route path="catalogue/:id" element={<DetailProduit />} />
        {/* Route du panier d'achat */}
        <Route path="panier" element={<Panier />} />
        {/* Route 404 : attrape toute adresse non reconnue */}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
