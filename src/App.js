import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {UserProvider} from './Components/Context';
import User from './Components/User';
import CardDisplay from './Components/CardDisplay';
import CartDisplay from './Components/CartDisplay';
import Title from './Components/Title';
function App() {
  return (
    <UserProvider>
      <div className='App'>
          <Switch>
          <Route exact path="/" >
              <div>
                <Title />
                <hr />
                <User />
                <CardDisplay />
              </div>
          </Route>
          <Route path="/cart" >
            <CartDisplay />
          </Route>
        </Switch>
        </div>
    </UserProvider>
  );
}

export default App;

