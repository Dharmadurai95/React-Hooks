import React from 'react'

const Button = (props) => {
    console.log('button',props.children)
    return (
        <div>
            <button type='button' onClick={props.handler}>{props.children}</button>
            
        </div>
    )
}

export default React.memo(Button);
