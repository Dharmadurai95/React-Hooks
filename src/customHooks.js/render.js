import { useState } from 'react';


const useRender = (initalvalue,value) => {
    const [count, setcount] = useState(initalvalue)

    const increment = () => {
        return setcount(prevcount => prevcount + value)
    }
    const decrement = () => {
        return setcount(prevcount => prevcount - value)
    }
    const reset = () => {
        return setcount(0)
    }
    return [count,increment,decrement,reset]
}

export default useRender;
