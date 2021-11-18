import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';
import Logout from '../components/logout/logout';
import GuardedRoute from '../components/guardedroute/guardedRoute';


const AppRouter = (props) => {
  return (
    <Router history={props.history}>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Switch>
        <GuardedRoute path="/order" exact component={OrderForm} />
        <GuardedRoute path="/view-orders" exact component={ViewOrders} />
      </Switch>
      <Route path="/logout" exact component={Logout} />
    </Router>
  );
}

export default AppRouter;
