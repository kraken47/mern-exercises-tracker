const Exercise = require('../../models/exercise.model');
const slugify = require('slugify')

class UpdateExercise {
    constructor (slug, req) {
        (this.username = req.body.username),
        (this.description = req.body.description),
        (this.duration = req.body.duration),
        (this.date = req.body.date),
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
                description: this.description,
                duration: this.duration,
                date: this.date,
                slug: convert_slug
            }

            let query = await Exercise.findOneAndUpdate({ slug: this.slug }, data, {new: true}).exec();
            return query;

        } catch (err) {
            throw err
        }
    }
}

module.exports = UpdateExercise