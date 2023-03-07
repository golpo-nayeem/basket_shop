const  { updateUsers, createUsers, getUsers } = require('./users.controller');
const usersRoutes = (app) => {

        app.route('/users')
        .post(createUsers)
        .get(getUsers);

        app.route('/users/:email')
        .patch(updateUsers);

}

module.exports = usersRoutes;