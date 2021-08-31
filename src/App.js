import './App.scss';
import Header from './componont/header/Header';
import Home from './Pages/Home';
import CartView from './Pages/CartView';
import CartProvider from './context/CartProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <CartProvider>
            <Header />
            <Route exact path='/'>
              <Home />
            </Route >
            <Route exact path='/cart'>
              <CartView />
            </Route>
          </CartProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
