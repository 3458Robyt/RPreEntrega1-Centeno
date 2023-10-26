import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido!" />
    </div>
  );
  
};

export default App;
