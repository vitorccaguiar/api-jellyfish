var service = require('../services/userService');
var userService = new service();

module.exports = function() {
    this.getUsers = function(req, res) {
        try {
            return userService.getUsers();
        }
        catch(err) {

        }
    }

    this.getUser = function(req, res, id) {
        try {
            return userService.getUser(id);
        }
        catch(err) {
            if (err === 'User Not Found') {
                res.status(404).send(err);
            }
        }
    }
}