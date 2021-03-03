import './App.css';
import { useEffect, useState } from 'react';
import Countriy from './Components/Countriy/Countriy';
import Cart from './Components/Cart/Cart';

function App() {
           const [countries ,  setCountries] = useState([]);
           const [cart ,  setCart] = useState([]);
          useEffect(() => {
            fetch('https://restcountries.eu/rest/v2/all') 
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
          }, []);
           const handlerCountry = (country) => {
             const newCart = [...cart ,country]
             setCart(newCart)
           }
       
  return (
    <div className="App">
       
       <h2>countriy loaded: {countries.length}</h2>
       <h1>add country: {cart.length}</h1>
       <Cart cart={cart}></Cart>
       {
          countries.map(countiy => <Countriy counryData={countiy} key={countiy.alpha2Code} handlerCountry={handlerCountry}></Countriy>)
       }
         
    </div>
  );
}

export default App;
