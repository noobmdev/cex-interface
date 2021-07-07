import React from 'react';
import { Route, Switch } from 'react-router-dom';
import tradeRoutes from './trade.route';
import userRoutes from './user.route';

const Routes = () => {
  const rootRoutes = [...tradeRoutes, ...userRoutes];

  return (
    <Switch>
      {rootRoutes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
