import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';
import ViewOrder from '../components/view-order/viewOrder';

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/order" exact component={OrderForm} />
      <Route path="/view-orders" exact component={ViewOrders} />
      <Route path="/view-order/:id" exact component={ViewOrder} />
    </Router>
  );
}

export default AppRouter;
