import { useDispatch } from "react-redux";
import { removeItem } from '../store/itemSlice'

export default function ListItem({ item, editItem }) {
    let dispatch = useDispatch();
    let remove = () => dispatch(removeItem())
  return (
    <li>
      {item.name} {item.price}
      <button onClick={() => editItem(item.name, item.price)}>&#9998;</button>
      <button onClick={() => remove()}>&times;</button>
    </li>
  );
}
