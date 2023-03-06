import ListItem from "./ListItem";

export default function List({data, removeItem, editItem}) {
    return (
        <ul>
        {data.map(item => <ListItem item={item} key={item.id} removeItem={removeItem} editItem={editItem}/>)}
      </ul>
    )
}