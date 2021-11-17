const TaskForm = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text' value={props.value} onChange={props.handleChange} placeholder='Task Description' />
                <input type='submit' value='Create New Task' />          
            </form>
        </div>
    )
}

export default TaskForm