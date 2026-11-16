export default function ListAddItem({ handleAddItem }) {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Add Item</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter item name"
          className="border border-blue-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const input = e.target.form[0];
            handleAddItem(input.value);
            input.value = "";
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}
