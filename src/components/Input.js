import React, { Component } from 'react';

const Input = (props) =>{
    return (
        <input type="text" value={props.content} onChange={props.onChange}/>
    )
}

export default Input;