import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onSubmit}>Add to List</button>
    )
}

export default Button;