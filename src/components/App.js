import React, { Component } from 'react';
import Form from './Form';
import Button from './Button.js';
import ToDoList from './ToDoList';

class App extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            toDos: []
        }
    }

    handleSubmit(item) {
        this.setState(prevState => prevState.toDos.push(item))
    }

    render() {
        return (
            <div>
                <h1>Let's get shit done!</h1>
                <Form type="text" onSubmit={this.handleSubmit}/>
                <ToDoList list={this.state.toDos}/>
            </div>
        )
    }
}

export default App;