import './App.css';
import Form from './components/Form';
import List from './components/List';
import {useDispatch} from 'react-redux'
import {submitForm} from './store/itemSlice'
function App() {
  let dispatch = useDispatch()
  let addItem = () => dispatch(submitForm())

  let editItem = (name, price) => {
    // console.log(name, price)
  }
   
  return (
    <>
      <Form submitForm={addItem} />
      <List />
    </>
  );
}

export default App;
