import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({handleAddItem, handleRemoveAllItems, handleResetToInitialItems, handleMarkAllAsComplete,handleMarkAllAsIncomplete}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}/>
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitialItems={handleResetToInitialItems}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} />
    </div>
  )
}
