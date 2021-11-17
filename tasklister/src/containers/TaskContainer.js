import React, { Component } from 'react'
import TaskList from '../components/TaskList'
import { connect } from 'react-redux'
import { addTask, removeTask } from '../actions/TaskActions'


class TaskContainer extends Component {
    addTask = newTask => {
        fetch('http://localhost:3001/tasks', this.createConfigObj('POST', newTask))
        this.props.dispatch(addTask(newTask))
    }

    deleteTask = key => {
        this.props.dispatch(removeTask(key))
        const task = this.props.tasks.find(td => td.key === key)
        fetch('http://localhost:3001/tasks/' + key, this.createConfigObj('DELETE', task))
    }

    createConfigObj = (method, body) => {
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }

    renderTasks = taskObj => {
        return taskObj.data.map(task => {
            console.log(task)
            return this.props.dispatch(addTask(task))
        })
        }

    handleSubmit = (event, id) => {
        event.preventDefault()
        this.deleteTask(id)
    }

    componentDidMount() {
        fetch('http://localhost:3001/tasks')
            .then(res => res.json())
            .then(tasks => {
                return this.renderTasks(tasks)
            })
    }

    render() {
        return (
            <div>
                <TaskList title='My Tasks' tasks={this.props.tasks} addTask={this.addTask} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { tasks: state.tasks }
}

export default connect(mapStateToProps)(TaskContainer)