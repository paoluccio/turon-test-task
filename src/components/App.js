import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './Layout';
import Showcase from './Showcase';
import MovieOverview from './MovieOverview';

const App = () => (
  <Layout>
    <Switch>
      <Route path={['/', '/page/:page']} exact>
        <Showcase />
      </Route>
      <Route path='/movie/:id'>
        <MovieOverview />
      </Route>
      <Redirect to='/' />
    </Switch>
  </Layout>
);

export default App;