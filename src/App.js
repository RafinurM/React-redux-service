import './App.css';
import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';


function App() {

  let [data, setData] = useState([])

  let submitForm = (event) => {
    event.preventDefault();
    setData([...data, { name: event.target.name.value, price: event.target.price.value, id: new Date().getMilliseconds() }])
    event.target.name.value = '';
    event.target.price.value = '';  
  }

  let removeItem = (itemID) => {
    setData(data.filter(item => item.id !== itemID))       
  }

  let editItem = (name, price) => {
    console.log(name, price)
  }
   
  return (
    <>
      <Form submitForm={submitForm} />
      <List data={data} removeItem={removeItem} editItem={editItem}/>
    </>
  );
}

export default App;
