export default function ListItem({ item, handleDeleteItem }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gradient-to-r from-blue-100 to-blue-200 flex justify-between items-center">
      <span className="text-lg font-medium text-gray-800">{item}</span>
      <button
        onClick={() => handleDeleteItem(item)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
}
