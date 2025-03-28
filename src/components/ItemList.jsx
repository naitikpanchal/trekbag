export default function ItemList({items}) {

  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  )
}

function Item({item}){
  return (
    <li className="item">
      <label>
      <input type="checkbox" checked={item.packed}/>
        {item.name}
      </label>
      <button>❌</button>
    </li>
  )
}