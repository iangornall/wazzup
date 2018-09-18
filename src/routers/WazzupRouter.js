import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
import WazzupPage from '../components/WazzupPage';
const WazzupRouter = props => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/wazzups/:id' component={WazzupPage} />
  </Switch>
)