import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
 {/*       <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/cart' component={Cart} />
        </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
