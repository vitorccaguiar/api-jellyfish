var repository = module.require('../repositories/userRepository')
var userRepository = new repository();

module.exports = function() {

    this.getUsers = function() {
        return userRepository.getUsers();
    }

    this.getUser = function(id) {
        return userRepository.getUser(id);
    }
};