export default function ListItem({item, removeItem, editItem}) {
    return (
        <li>{item.name} {item.price}<button onClick={() => editItem(item.name, item.price)}>&#9998;</button><button onClick={() => removeItem(item.id)}>&times;</button></li>
    )
}