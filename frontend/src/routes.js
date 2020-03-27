import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/incidents/new" exact component={NewIncident} />
      </Switch>
    </Router>
  )
}