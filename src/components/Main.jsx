import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { initialItems } from "../lib/constants";

export default function Main() {

  const [items, setItems] = useState(initialItems);

  const handleAddItem = (itemText) => {
    const newItem = {
      id: Date.now(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitialItems = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  }

  return (
    <main>
        <Header />
        <ItemList items= {items}/>
        <Sidebar 
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitialItems={handleResetToInitialItems}
          handleMarkAllAsComplete={handleMarkAllAsComplete} 
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} />
    </main>
  )
}
