const User = require('../../models/user.model');

class DetailsUser {
    constructor (slug) {
        (this.slug = slug)
    }

    async exec() {
        try {
            let query = await User.findOne({ slug: this.slug }).exec()
            return query
        } catch (err) {
            throw err
        }
    } 
}

module.exports = DetailsUser