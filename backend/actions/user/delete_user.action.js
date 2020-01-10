const User = require('../../models/user.model');

class DeleteUser {
    constructor(slug) {
        (this.slug = slug)
    }

    async delete() {
        try {
            let query = await User.findOneAndDelete({ slug: this.slug }).exec();
            return query;
        }catch (err) {
            throw err
        }
    }
}

module.exports = DeleteUser