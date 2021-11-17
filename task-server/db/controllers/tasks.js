'use strict'

const { Task } = require('../models/')

module.exports = {
    all: async (request, h) => {
        const tasks = await Task.findAll({})
        return { data: tasks}
    },
    create: async (request, h) => {
        const result = await Task.create({
            key: request.payload.key,
            content: request.payload.content
        })
        return { status: "created"}
    },
    read: async (request, h) => {
        const task = await Task.findOne({
            where: {
                key: request.params.key
            }
        })
        return { data: task }
    },
    delete: async (request, h) => {
        await Task.destroy({
            where: {
                key: request.params.key
            }
        })
        return { status: "destroyed"}
    }
}