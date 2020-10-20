import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './assets/css/style.css';

import Home from './pages/Home';
import Certificate from './pages/Certificate';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/certificate" component={Certificate} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
