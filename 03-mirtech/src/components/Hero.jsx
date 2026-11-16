import React from "react";

function Hero() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 px-6 md:px-16 lg:px-32 bg-gray-100">
      <span className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        Équipez-vous du Meilleur Matériel Informatique
      </span>
      <span className="mt-5 max-w-xl text-lg text-gray-600">
        Découvrez notre sélection de composants et périphériques de haute
        performance pour tous vos besoins, du gaming à la création
        professionnelle.
      </span>
      <a
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        href="#"
        style={{ width: "fit-content" }}
      >
        Découvrir nos Produits
      </a>
    </div>
  );
}
export default Hero;
