import React from 'react';
import './App.scss';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';




import Manav from './Component/manav';
import Gallery from './Component/gallery';
import Film from './Component/film';
import People from './Component/people';
import Favoris from './Component/favoris';
import Home from './Component/home';


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
