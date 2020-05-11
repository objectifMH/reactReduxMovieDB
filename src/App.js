import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';




import Manav from './Component/manav';
import Diaporama from './Component/diaporama';
import Gallery from './Component/gallery';
import Film from './Component/film';
import People from './Component/people';
import Favoris from './Component/favoris';


function App() {
  return (
    <div>
      <header>
        <Router>
          <Manav></Manav>
          <Switch>
            <Route path="/home" ></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/diaporama" component={Diaporama}></Route>
            <Route path="/film/:id" component={Film}></Route>
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
