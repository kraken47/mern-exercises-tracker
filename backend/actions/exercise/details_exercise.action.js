const Exercise = require('../../models/exercise.model');

class DetailsExercise {
    constructor (slug) {
        (this.slug = slug)
    }

    async exec() {
        try {
            let query = await Exercise.findOne({ slug: this.slug }).exec()
            return query
        } catch (err) {
            throw err
        }
    } 
}

module.exports = DetailsExercise