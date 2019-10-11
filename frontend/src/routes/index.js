import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Dazzle from '../pages/Dazzle';
import NewDazzle from '../pages/NewDazzle';
import EditDazzle from '../pages/EditDazzle';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/profile" component={Profile} isPrivate />
      <Route exact path="/dazzle/new" component={NewDazzle} isPrivate />
      <Route exact path="/dazzle/show/:id" component={Dazzle} isPrivate />
      <Route exact path="/dazzle/edit/:id" component={EditDazzle} isPrivate />
    </Switch>
  );
}

export default Routes;
