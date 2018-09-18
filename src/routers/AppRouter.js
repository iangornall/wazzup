import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomepageContainer from '../components/HomepageContainer';
import About from '../components/About';
import NotFound from '../components/NotFound';
import WazzupPage from '../components/WazzupPage';
const AppRouter = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomepageContainer} />
        <Route path='/about' component={About} />
        <Route path='/wazzups/:id' component={WazzupPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
)
export default AppRouter;