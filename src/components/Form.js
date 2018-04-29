import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            item: ''
        }
    }

    handleChange(e) {
        e.persist()
        this.setState({ item: e.target.value })
    }

    handleClick(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.item)
        this.setState({ item: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <input type="text" value={this.state.item} onChange={this.handleChange}/>
                <button type="submit">Add Item To List</button>
            </form>
        )
    }
}

export default Form;