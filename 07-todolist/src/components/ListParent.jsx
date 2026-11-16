import { useState } from "react";
import ListAddItem from "./ListAddItem";
import ListItem from "./ListItem";

export default function ListParent() {
  const [items, setItems] = useState([
    "Wake up at 7:00",
    "Take a shower",
    "Have breakfast",
    "Go to work",
  ]);
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const handleDelete = (item) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        To-Do List
      </h1>
      <ListAddItem handleAddItem={handleAddItem} />
      <h2 className="text-xl font-semibold text-blue-500 mt-6 mb-4">
        Your Tasks
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            handleDeleteItem={handleDelete}
            className="p-4 bg-white border rounded-md shadow-sm hover:shadow-md transition-shadow"
          />
        ))}
      </div>
    </div>
  );
}
