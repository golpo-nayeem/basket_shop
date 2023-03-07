const usersRoutes = require('../../modules/users/users.routes');
const express = require('express');

module.exports = () =>{
    const app = express();
    app.use(express.json());

    usersRoutes(app);

    app.set('port', process.env.PORT);

    return app;

}