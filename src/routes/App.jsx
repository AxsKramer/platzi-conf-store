import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';

const App = () => {
  return ( 
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/checkout/information' component={Information} />
          <Route exact path='/checkout/payment' component={Payment} />
          <Route exact path='/checkout/success' component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
 
export default App;