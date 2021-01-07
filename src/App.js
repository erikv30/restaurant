import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={CheckOut} />
        </Switch> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
