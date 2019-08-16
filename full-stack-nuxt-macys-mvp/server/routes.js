const users = require('./controllers/index');

module.exports = (app) => {
    app.use('/',users);
};
