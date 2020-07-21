import React from 'react';
import './App.css';
import UseReducer from './useReducer/useReducer';
import UseEff from './useEff_useRedu/UseEff';
import UsCallback from './useCall/usCallback';
import CustomHooks from './customHooks.js/useCustom';


function App() {

  return (
    <div className="App">
     {/* <UseReducer /> */}
     {/* <UseEff /> */}
     {/* <UsCallback /> */}
     <CustomHooks />
    </div>
  );
}

export default App;
