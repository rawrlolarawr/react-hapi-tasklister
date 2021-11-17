'use strict'

const Task = require('../controllers/tasks')

module.exports = [
    {
        method: 'GET',
        path: '/tasks',
        handler: Task.all,
        options: {
            cors: true
        }
    },
    {
        method: 'GET',
        path: '/tasks/{key}',
        handler: Task.read,
        options: {
            cors: true
        }
    },
    {
        method: 'POST',
        path: '/tasks',
        handler: Task.create,
        options: {
            cors: true,
        }
    },
    {
        method: 'DELETE',
        path: '/tasks/{key}',
        handler: Task.delete,
        options: {
            cors: true,
        }
    }
]