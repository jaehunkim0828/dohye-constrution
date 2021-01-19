import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

import './App.css';
import Introduce from './pages/Introduce';
import Coporation from './pages/Coporation';
import Map from './pages/Map';
import Brochure from './pages/Brochure';
import Home from './pages/Home';   
import Technology from './pages/Technology';
import Ideology from './pages/Ideology';
import Status from './pages/Status';
import Certification from './pages/Certification';
import Construction from './pages/Construction';
import CustomNav from './components/CustomNav';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Router>
        <CustomNav />
        <Switch>
          <Route path="/page1-1">
            <Introduce />
          </Route>
          <Route path="/page1-2">
            <Ideology />
          </Route>
          <Route path="/page1-3">
            <Status />
          </Route>
          <Route path="/page1-4">
            <Certification />
          </Route>
          <Route path="/page2-1">
            <Construction />
          </Route>
          <Route path="/page3-1">
            <Coporation />
          </Route>
          <Route path="/page3-2">
            <Technology />
          </Route>
          <Route path="/page4-1">
            <Map />
          </Route>
          <Route path="/page4-2">
            <Brochure />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
