export const addTask = task => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const removeTask = key => {
    return {
        type: 'REMOVE_TASK',
        payload: key
    }
}