import './App.css';
import { useState } from 'react'


function App() {

  let [data, setData] = useState([])

  let submitForm = (event) => {
    event.preventDefault();
    setData([...data, { name: event.target.name.value, price: event.target.price.value }])
    event.target.name.value = '';
    event.target.price.value = '';  
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <input name='name' type='text' required/>
        <input name='price' type='number' required/>
        <button type='submit'>Save</button>
      </form>
      <ul>
        {data.map(item => <li>{item.name} {item.price}<button>&#9998;</button><button>&times;</button></li>)}
      </ul>
    </>
  );
}

export default App;
