import React from 'react';
import './App.scss';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';




import Manav from './Component/manav';
import Gallery from './Component/gallery';
import Film from './Component/film';
import People from './Component/people';
import Favoris from './Component/favoris';
import Home from './Component/home';
import Footer from './Component/footer';


function App() {
  return (
    <div>
      <div className="header-app">
        <header>
          <Router>
            <Manav></Manav>
            <div className="my-switch">
              <Switch>
              
                <Route path={`${process.env.PUBLIC_URL}/`} component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/gallery" component={Gallery}></Route>
                <Route path="/film/:id/:type" component={Film}></Route>
                <Route path="/people/:id" component={People}></Route>
                <Route path="/favoris" component={Favoris}></Route>

            </Switch>
            </div>

            <Footer></Footer>
          </Router>
        </header>
      </div>
    </div>
  );
}

export default App;
