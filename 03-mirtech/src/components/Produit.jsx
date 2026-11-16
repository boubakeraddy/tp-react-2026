import React from "react";
function Produit(props) {
  return (
    <a href="#" className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
      <img
        className="h-56 w-full rounded-md object-cover"
        src={this.props.image}
        alt={this.props.nom}
      />
      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Prix</dt>
            <dd class="text-sm text-gray-500">{this.props.prix} DH</dd>
          </div>
        </dl>
        <dl>
          <div>
            <dt class="sr-only">Nom</dt>
            <dd class="font-medium">{this.props.nom}</dd>
          </div>
        </dl>
        <dl>
          <div>
            <dt class="sr-only">Quantité</dt>
            <dd class="text-sm text-gray-500">
              {this.props.quantite} en stock
            </dd>
          </div>
        </dl>
      </div>
    </a>
  );
}
export default Produit;
