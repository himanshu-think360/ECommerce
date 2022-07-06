import './App.css';
import Card from './Components/Card';
import {useContext} from 'react';
import {UserContext} from './Components/Context';
// import {UserContext,UserProvider,UserConsumer} from'./Components/Context';
function App() {
  var data = require('./Components/data.json')
  var temp = data.data[1]
  const context = useContext(UserContext)
  return (
      <div className="App">
        <h1>Hello {context?.name}</h1>
        <button onClick={context?.updatelist}>updatelist</button>
        <Card id={temp.id} url={temp.src} desc={temp.description} tag={temp.itemtype}/>
        </div>
  );
}

export default App;
