
import './App.css';
import image from './shopping.jpeg';
import imageTwo from'./man.jpeg';
import { GroceryList } from './GroceryList';



function App() {
  return (
    <div className='app'>
<div className='container'><img src={ image } width="200px" alt="shopping"/></div>
      <div className='container'><h1>Grocery List</h1></div>
    <GroceryList/>
    <div className='container'> <img src={ imageTwo } width="200px" alt="man"/></div>

</div>
  );
}

export default App;
