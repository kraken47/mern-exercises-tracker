const Exercise = require('../../models/exercise.model');
const slugify = require('slugify');

class AddExercise {
    constructor(req) {
        (this.username = req.body.username),
        (this.description = req.body.description),
        (this.duration = req.body.duration);
    }

    async create() {
        try {
            let convert_slug = slugify(this.username, {
                remove:null,
                lower: true
            });

            let query = new Exercise({
                username: this.username,
                slug: convert_slug,
                description: this.description,
                duration: this.duration,
                date: Date.now()
            })
            await query.save();

            return query;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = AddExercise