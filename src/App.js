import './App.scss';
import Header from './componont/header/Header';
import Home from './Pages/home/Home';
import CartView from './Pages/cartView/CartView';
import CartProvider from './context/CartProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Pages/login/Login';
function App() {

  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route >
            <Route exact path='/cart'>
              <CartView />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
