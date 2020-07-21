import React,{ useContext } from 'react';
import { CountContext } from './useReducer'

const Basics = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button type='button' value='ADD +1' onClick={()=> countContext.countDispatch({type:'increment'})}>ADD</button> 
            <button type='button' value='SUBSTRACT 1' onClick={()=> countContext.countDispatch({type:'degrement'})}>SUBSTRACT</button> 
            <button type='button' value='ADD +5' onClick={()=> countContext.countDispatch({type:'incrementTen'})}>ADD 5</button> 
            <button type='button' value='RESET' onClick={()=> countContext.countDispatch({type:'reset'})}>RESET</button> 
        </div>
    )
}

export default Basics;
