import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';
import About from '../pages/About';
import DefaultTemplate from '../templates/DefaultTemplate';

const Routes = memo(() => (
  <DefaultTemplate>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </DefaultTemplate>
));

export default Routes;
