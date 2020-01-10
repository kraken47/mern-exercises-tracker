const express = require('express');
const router = express.Router();
const AddExercise = require('../actions/exercise/create_exercise.action');
const ListExercises = require('../actions/exercise/list_exercises.action');
const DetailsExercise = require('../actions/exercise/details_exercise.action');
const UpdateExercise = require('../actions/exercise/update_exercise.action');
const DeleteExercise = require('../actions/exercise/delete_exercise.action');

router.post('/add', async(req, res) => {
    try {
        let data = await new AddExercise(req).create();

        return res.send({
            code: 200,
            status: 'Success',
            message: 'Exercise added!',
            data
        });

    } catch(err) {
        return res.send({
            code:400,
            status: 'Something went wrong',
            message: err.message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        let { slug } = req.params;
        let data = await new ListExercises(slug).getAll();
        return res.send({
            code: 200,
            status: 'Success',
            message: 'Get list of exercises',
            data
        })
    } catch (err) {
        return res.send ({
            code: 400,
            status: 'Something went wrong',
            message: err.message
        })
    }
})

router.get('/:slug', async (req, res) => {
    try{
        let { slug } = req.params;
        let data = await new DetailsExercise(slug).exec();
        return res.send({
            code: 200,
            status: 'Success',
            message: 'Here is your request',
            data
        })
    } catch (err) {
        return res.send ({
            code: 400,
            status: 'Something went wrong',
            message: err.message
        })
    }
})

router.put('/:slug', async (req, res) => {
    try {
        let { slug } = req.params;
        let data = await new UpdateExercise(slug, req).update();
        return res.send({
            code: 200,
            status: 'Success',
            message: 'Exercise has updated successfully!',
            data
        })

    } catch (err) {
        return res.send({
            code: 400,
            status: 'Something went wrong',
            message: err.message
        })
    }
})

router.delete('/:slug', async(req, res) => {
    try {
        let { slug } = req.params;
        let data = await new DeleteExercise(slug).delete();
        return res.send({
            code: 200,
            status: 'Success',
            message: 'Exercise has deleted successfully!',
            data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'Something went wrong',
            message: err.message
        })
    }
})


module.exports = router