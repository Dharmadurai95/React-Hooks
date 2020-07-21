import React from 'react';
import useRender from './render'


const UseCustom = () => {
    const [count, increment, decrement, reset] = useRender(0,10);
    return (
        <div>
            <input style={{
                color: 'red',
                backgroundColor:'green',
                textAlign:'center',
                fontSize:'1.2rem'
            }}
                typ='text'
                value={count}>
            </input>
            <br></br>
            <button type='button' onClick={increment}>Increment</button><br></br>
            <button type='button' onClick={decrement}>Decrement</button><br></br>
            <button type='button' onClick={reset}>Reset</button>

        </div>
    )
}

export default UseCustom;
