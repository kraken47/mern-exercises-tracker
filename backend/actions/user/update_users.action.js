const User = require('../../models/user.model');
const slugify = require('slugify')

class UpdateUser {
    constructor (slug, req) {
        (this.username = req.body.username),
        (this.slug = slug)
    }

    async update() {
        try {
            let convert_slug = slugify(this.username, {
                remove: null,
                lower: true
            })

            let data = {
                username: this.username,
                slug: convert_slug
            }

            let query = await User.findOneAndUpdate({ slug: this.slug }, data, {new: true}).exec();
            return query;

        } catch (err) {
            throw err
        }
    }
}

module.exports = UpdateUser