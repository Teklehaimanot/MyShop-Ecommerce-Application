import { useState } from 'react';
import './App.scss';
import Header from './componont/header/Header';
import Banner from './componont/banner/Banner'
import Products from './componont/products/Products';
function App() {

  const [product, setProduct] = [
    [
      {
        id: 1,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      }, 
      {
        id: 2,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      }, 
      {
        id: 3,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      }, {
        id: 4,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      },
      {
        id: 5,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      },
      {
        id: 6,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      }, 
      {
        id: 7,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      }, 
      {
        id: 8,
        text: 'Women Red t-shirt',
        price: 25,
        img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
      }
    
    ]
 
  ]

  console.log('product',product)
  return (
    <div className="App">
      <Header />
      <Banner />
      <Products products = {product}/>
    </div>
  );
}

export default App;
