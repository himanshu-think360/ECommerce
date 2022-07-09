import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {UserProvider} from './Components/Context';
import User from './Components/User';
import CardDisplay from './Components/CardDisplay';
import CartDisplay from './Components/CartDisplay';
function App() {
  return (
    <UserProvider>
        <div className='App'>
        <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Switch>
                 <Route  path='/Ecommerce' exact component={<div>< User /><CardDisplay /></div>} />
                 <Route path='/Ecommerce/cart' exact component={< CartDisplay />} />
        </Switch>
        </Router>
        </div>
    </UserProvider>
  );
}

export default App;

