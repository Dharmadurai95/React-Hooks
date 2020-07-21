import React, { useReducer } from 'react';
import Basics from './basic';
export const CountContext = React.createContext();

const initialState = {
    initialValue: 0,
    secondaryValue: 10
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, initialValue: state.initialValue + 1 };
      case "degrement":
        return { ...state, initialValue: state.initialValue - 1 };
      case 'incrementTen':
        return { ...state, secondaryValue: state.secondaryValue + 5 }
      case 'reset':
        return initialState;
      default:
        return state;
    }
  }
function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3 style={{ color: 'red' }}>{count.initialValue}</h3>
            <h3>{`secondary value ${count.secondaryValue}`}</h3>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <Basics />
            </CountContext.Provider>
        </div>
    )
};
export default UseReducer;
