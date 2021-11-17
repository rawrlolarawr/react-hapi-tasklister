'use strict';

const Hapi = require('@hapi/hapi');
const Settings = require('./config/settings')
const Routes = require('./lib/routes')

const init = async () => {

    const server = Hapi.server({
        port: Settings.port,
        host: 'localhost'
    });

    server.route(Routes)
    await server.start();
    console.log(`Server running on ${server.info.uri}`)
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();