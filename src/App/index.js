import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComp from '../Navbar/index';
import Startpage from '../Startpage/startpage';

export default function() {
  let w = window.innerWidth;
  let d = 2200;

  return (
    <Router>
      <div className="App">
        <main>
          <NavbarComp />
          <Switch>
            <Route path="/" component={Startpage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
