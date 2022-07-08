// import './App.css';
// import Card from './Components/Card';
// import {useContext} from 'react';
// import {UserContext} from './Components/Context';
// import {ProviderComponent} from './Components/Context';
// // import UserDetails from './Components/temp.js';
// import Display from './Components/temp.js';
// function App() {
//   var data = require('./Components/data.json')
//   var temp = data.data[1]
//   return (
//     <ProviderComponent>
//       <div className="App">
//         <h1>Hello</h1>
//         <div>
//           {data.data.map(temp=>{
//             return(<Card id={temp.id} url={temp.src} desc={temp.description} tag={temp.itemtype}/>);
//           })}
//         </div>
//         <Display />
//         </div>
//     </ProviderComponent> 
//   );
// }
// export default App;

import './App.css';
import Card from './Components/Card';
import {UserProvider} from './Components/Context';
import User from './Components/User';
function App() {
  var data = require('./Components/data.json')
  var temp = data.data[1]
  return (
    <UserProvider>
      <div className="App">
        <User />
        <Card id={temp.id} url={temp.src} desc={temp.description} tag={temp.itemtype}/>
      </div>
    </UserProvider>
  );
}

export default App;

