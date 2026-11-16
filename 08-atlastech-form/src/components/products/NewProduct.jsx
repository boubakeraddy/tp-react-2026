import { useState } from "react";

export default function NewProduct({ onSubmit }) {
  const [formData, setFormData] = useState({
    tag: "",
    etat: "",
    img: "",
    nom: "",
    ref: "",
    description: "",
    cpu: "",
    cpu2: "",
    cpu3: "",
    prixOld: "",
    prix: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      tag: formData.get("tag"),
      etat: formData.get("etat"),
      img: formData.get("img"),
      nom: formData.get("nom"),
      ref: formData.get("ref"),
      description: formData.get("description"),
      cpu: formData.get("cpu"),
      cpu2: formData.get("cpu2"),
      cpu3: formData.get("cpu3"),
      prixOld: formData.get("prixOld"),
      prix: formData.get("prix"),
    });
    handleReset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      tag: "",
      etat: "",
      img: "",
      nom: "",
      ref: "",
      description: "",
      cpu: "",
      cpu2: "",
      cpu3: "",
      prixOld: "",
      prix: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-6">
        <h1 className="text-xl font-bold text-slate-900">Add New Product</h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-slate-700"
            >
              Tag
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              value={formData.tag}
              onChange={(e) => handleChange(e)}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="etat"
              className="block text-sm font-medium text-slate-700"
            >
              Etat
            </label>
            <input
              type="text"
              name="etat"
              id="etat"
              onChange={(e) => handleChange(e)}
              value={formData.etat}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="img"
              className="block text-sm font-medium text-slate-700"
            >
              Image URL
            </label>
            <input
              type="text"
              name="img"
              id="img"
              onChange={(e) => handleChange(e)}
              value={formData.img}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-slate-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              onChange={(e) => handleChange(e)}
              value={formData.nom}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="ref"
              className="block text-sm font-medium text-slate-700"
            >
              Reference
            </label>
            <input
              type="text"
              name="ref"
              id="ref"
              onChange={(e) => handleChange(e)}
              value={formData.ref}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              onChange={(e) => handleChange(e)}
              value={formData.description}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="cpu"
              className="block text-sm font-medium text-slate-700"
            >
              CPU
            </label>
            <input
              type="text"
              name="cpu"
              id="cpu"
              onChange={(e) => handleChange(e)}
              value={formData.cpu}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="cpu2"
              className="block text-sm font-medium text-slate-700"
            >
              CPU 2
            </label>
            <input
              type="text"
              name="cpu2"
              id="cpu2"
              onChange={(e) => handleChange(e)}
              value={formData.cpu2}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="cpu3"
              className="block text-sm font-medium text-slate-700"
            >
              CPU 3
            </label>
            <input
              type="text"
              name="cpu3"
              id="cpu3"
              onChange={(e) => handleChange(e)}
              value={formData.cpu3}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="prixOld"
              className="block text-sm font-medium text-slate-700"
            >
              Old Price
            </label>
            <input
              type="number"
              name="prixOld"
              id="prixOld"
              onChange={(e) => handleChange(e)}
              value={formData.prixOld}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="prix"
              className="block text-sm font-medium text-slate-700"
            >
              Price
            </label>
            <input
              type="number"
              name="prix"
              id="prix"
              onChange={(e) => handleChange(e)}
              value={formData.prix}
              className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
