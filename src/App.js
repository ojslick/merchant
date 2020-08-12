import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import TopNavigation from './shared/components/Navigation/TopNavigation';
import SideNavigation from './shared/components/Navigation/SideNavigation';
import Overview from './main/Overview';

function App() {
  return (
    <Router history={history}>
      <TopNavigation />
      <div style={{ display: ' flex ', minHeight: '100vh ', width: '100%' }}>
        <SideNavigation />
        <Switch>
          <Route path="/" exact component={Overview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
