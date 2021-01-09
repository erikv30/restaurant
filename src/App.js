import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home'

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/cart' component={Cart} />
        </Switch> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
