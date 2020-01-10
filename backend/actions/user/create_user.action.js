const User = require('../../models/user.model');
const slugify = require('slugify');

class AddUser {
    constructor(req) {
        (this.username = req.body.username)
    }

    async create() {
        try {
            let convert_slug = slugify(this.username, {
                remove:null,
                lower: true
            })

            let insert_data = {
                username: this.username,
                slug: convert_slug,
            }

            let query = new User(insert_data);
            await query.save()
    
        }catch (err) {
            throw err
        }
    }
}

module.exports = AddUser