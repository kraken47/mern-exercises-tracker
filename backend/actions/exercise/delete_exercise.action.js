const Exercise = require('../../models/exercise.model');

class DeleteExercise {
    constructor(slug) {
        (this.slug = slug)
    }

    async delete() {
        try {
            let query = await Exercise.findOneAndDelete({ slug: this.slug }).exec();
            return query;
        }catch (err) {
            throw err
        }
    }
}

module.exports = DeleteExercise