import { useState } from 'react';
import './App.scss';
import Header from './componont/header/Header';
// import Banner from './componont/banner/Banner'
import Home from './Pages/Home';
// import Products from './componont/products/Products';
import CartProvider from './context/CartProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <CartProvider>
            <Header />
            <Home />
          </CartProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
