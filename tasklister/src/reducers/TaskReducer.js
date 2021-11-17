const TaskReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] }
        case 'REMOVE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.key !== action.payload)}
        default:
            return state
    }
}

export default TaskReducer