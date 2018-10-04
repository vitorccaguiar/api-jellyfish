var fs = module.require('fs');

module.exports = function() {

    this.getUsers = function() {
        var content = fs.readFileSync(__dirname + '/../public/resources/usersMock.txt');
        return JSON.parse(content.toString());
    }

    this.getUser = function(id) {
        var content = fs.readFileSync(__dirname + '/../public/resources/usersMock.txt');
        var jsonArray = JSON.parse(content.toString());
        for(var i = 0; i < jsonArray.length; i++) {
            if(jsonArray[i].id === id) {
                return jsonArray[i];
            }
        }
        return 'User not found';
    }
};