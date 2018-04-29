import React, { Component } from 'react';
import Input from './Input.js';
import Button from './Button.js';
import ListItem from './ListItem.js';

class App extends Component {
    constructor() {
        super() 
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            item: '',
            toDos: []
        }
    }

    handleChange(e) {
        e.persist()
        this.setState({item: e.target.value})     
    }

    handleSubmit() {
        this.setState((prevState) => prevState.toDos.push(this.state.item))
        this.setState({item: ''})
    }

    render() {
        let toDoList = this.state.toDos.map((listItem, index) => {
            return <ListItem item={listItem} key={index} />
        })
        return (
            <div>
                <h1>Let's get shit done!</h1>
                <Input type="text" content={this.state.item} onChange={this.handleChange} />
                <Button onSubmit={this.handleSubmit} />
                
                <ul>
                    {toDoList}
                </ul>
            </div>
        )
    }
}

export default App;