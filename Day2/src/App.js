
import './App.css';
import Greeting from './components/Greeting';
import Navbar from './Navbar';
import Counter from './components/Counter';
import Tabular from './components/Tabular';
import Fetchproduct from './components/Fetch'
import Headingchange from './components/Headingchange';
import Calculator from './components/Calculator';



function App() {

  const fruits=['apple','banana','mango']

  return (
   <>
   <Navbar></Navbar>
   <Headingchange></Headingchange>
   
   <Greeting name="jhon" surname="smith"></Greeting>
   {/* <Greeting name="sheryln" surname="setia"></Greeting>
   <Greeting name="justin" surname="bieber"></Greeting>  */}
    
   <Fetchproduct></Fetchproduct>

   <Calculator></Calculator>
   
   
   
    {/* <ul>
    {
    fruits.map((element,index)=>(
        <li key={index}>{element}</li>
      ))
    }
    </ul> */}

      <Counter></Counter> 

      <Tabular></Tabular>  

   </>
  );
}



export default App;
