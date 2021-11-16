import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';
import Logout from '../components/logout/logout';



const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/order" exact component={OrderForm} />
      <Route path="/view-orders" exact component={ViewOrders} />
      <Route path="/logout" exact component={Logout} />
    </Router>
  );
}

export default AppRouter;
