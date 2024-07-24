import logo from './logo.svg';
import './App.css';
import nature from './assest/nature.jpeg'
import Button from './components/Button';
import User from './components/Name';
import Product from './components/Product';
import Movie from './Movies'

const movies=[
  {id: 1, title:'3 idiots'},
  {id: 2, title:'Golmaaal'}

];

function App() {
  return (
    <div className="App">
      <h3>welcome to react</h3>
      <img className="image" src={nature} alt="nature images"/> <br/>
      <Button/> <br/>
      <Button/>
      <User name="Dolly" age="24"></User>
      <Product productname="biscuits" price="100"></Product>


   <Movie mo={movies}></Movie>
    </div>

    
  );
}
export default App;
