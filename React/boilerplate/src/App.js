import React from 'react';
import {Provider} from 'react-redux'
import store from './Redux/store'
import CakeContainer from './components/CakeContainer'
import './App.css'; 


function App() {
  return (
    <Provider store ={store}>
    <div className="App">
     <CakeContainer/>
     </div>
    </Provider>
  )
}

export default App;
