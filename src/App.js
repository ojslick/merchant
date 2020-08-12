import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import TopNavigation from './shared/components/Navigation/TopNavigation';
import Overview from './main/Overview';

function App() {
  return (
    <Router history={history}>
      <TopNavigation />
      <Switch>
        <Route path="/" exact component={Overview} />
      </Switch>
    </Router>
  );
}

export default App;
