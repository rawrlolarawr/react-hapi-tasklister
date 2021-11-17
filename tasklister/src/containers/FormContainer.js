import React, { Component } from 'react'
import {v4 as uuid } from 'uuid'
import TaskForm from '../components/TaskForm'

export default class FormContainer extends Component {
    state = {
        value: '',
        task: {}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(state => {
            return ({
                value: '',
                task: {
                    key: uuid(),
                    content: this.state.value
                }
            })
        }, () => this.props.addTask(this.state.task))
    }

    render() {
        return (
            <TaskForm value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}