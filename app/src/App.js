import React from 'react';
import './App.css';

const valor = "teste";
const Elemento = () => <div>qualquer</div>;

function Ul(props) {
  return (
   <div>
     {props.valor}
   </div> 
  )
}

const clicou = () => {
  prompt("Oi?");
}

function App() {
  return (
    <div className="App">
      <button onClick={clicou} >Clica aqui</button>
      <Ul valor="teste de valor" /> {valor}
      <Elemento></Elemento>
    </div>
  )
}

export default App;
