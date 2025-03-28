export default function ItemList({items, handleDeleteItem, handleToggleItem}) {

  return (
    <ul>
      {items.length === 0 && <li>No items</li>}
      {items.map((item) => (
        <Item item={item} key={item.id} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      ))}
    </ul>
  )
}

function Item({item, onDeleteItem, onToggleItem}){
  return (
    <li className="item">
      <label>
      <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)}/>
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}