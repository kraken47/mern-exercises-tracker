const User = require('../../models/user.model');

class ListUsers {
    async getAll() {
        try {
            let query = await User.find().exec()
            return query;
        } catch (err) {
            throw err
        }
    }

}
module.exports = ListUsers