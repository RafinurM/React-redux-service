import ListItem from "./ListItem";
import {useSelector} from 'react-redux'

export default function List() {
    let data = useSelector(state => state.items.items);
    
    return (
        <ul>
        {data.map(item => <ListItem item={item} key={item.id} />)}
      </ul>
    )
}