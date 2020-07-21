import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
const initialState = {
    loading: true,
    data: '',
    error: 'true'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                loading: false,
                data: action.data,
                error: action.error
            }
        case 'error':
            return {
                ...state,
                loading: true,
                error: action.error
            }
        default:
            return state;
    }
}


const UseEff = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state.data, 'any data here')

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch({ type: 'fetch', data: res.data, error: false })
            })
            .catch(err => {
                dispatch({ error: true })
            })
    }, [])
    if (!state.loading) {
        var fetchTitle = state.data.map((v, i) => {
            return <div>{v.title}</div>
        });
    }


    return (
        <div>
            <div>{state.error ? 'something went wrong' : 'data fetching successfully completed'}</div>
            {/* {state.data.map((data,index)=> {
               return <div>{`HERE YOUR TITLE HERE${data.title}`}</div>
            })} */}
            {fetchTitle}
        </div>
    )
}

export default UseEff
