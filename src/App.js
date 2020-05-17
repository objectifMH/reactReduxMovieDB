import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';




import Manav from './manav';
import Gallery from './gallery';
import Film from './film';
import People from './people';
import Favoris from './favoris';
import Home from './home';


function App() {
  return (
    <div>
      <header>
        <Router>
          <Manav></Manav>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/film/:id/:type" component={Film}></Route>
            <Route path="/people/:id" component={People}></Route>
            <Route path="/favoris" component={Favoris}></Route>

          </Switch>
        </Router>
      </header>
      
      <footer>

      </footer>

    </div>



  );
}

export default App;
