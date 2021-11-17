import '../styles/TaskList.css'
import Task from './Task'
import FormContainer from '../containers/FormContainer'

const TaskList = props => {
    return (
        <div id='list'>
            <h3>{props.title}</h3>
            <FormContainer addTask={props.addTask}/>
            <ol>
                {props.tasks.map(task => <Task key={task.key} childKey={task.key} content={task.content} handleSubmit={props.handleSubmit}/>)}
            </ol>
        </div>
    )
}

export default TaskList