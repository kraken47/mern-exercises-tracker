const Exercise = require('../../models/exercise.model');

class ListExercises {

    async getAll() {
        try {
            let query = await Exercise.find().exec()
            return query
        }catch (err) {
            throw err
        }
    }
}

module.exports = ListExercises