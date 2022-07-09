import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {UserProvider} from './Components/Context';
import User from './Components/User';
import CardDisplay from './Components/CardDisplay';
import CartDisplay from './Components/CartDisplay';
function App() {
  return (
    <UserProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className='App'>
        <Routes>
                 <Route exact path='/' element={<div>< User /><CardDisplay /></div>}></Route>
                 <Route exact path='/cart' element={< CartDisplay />}></Route>
        </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

