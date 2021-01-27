import React from 'react';
import './App.sass';
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Carts from "./components/Cart/Carts";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Route exact path="/shopping_carts_reactjs_redux_hooks/" render={() => <Products/>}/>
      <Route exact path="/shopping_carts_reactjs_redux_hooks/cart" render={() => <Carts/>}/>
    </div>
  );
}

export default App;
