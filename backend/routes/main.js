const users = require('./user.route');
const exercise = require('./exercise.route')

const routes = app => {
    app.use("/api/users", users);
    app.use('/api/exercises', exercise);
}

module.exports = routes 