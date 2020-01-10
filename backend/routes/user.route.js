const express = require('express');
const router = express.Router();
const AddUser = require('../actions/user/create_user.action');
const ListUsers = require('../actions/user/list_users.action');
const DetailsUser = require('../actions/user/details_user.action');
const UpdateUser = require('../actions/user/update_users.action');
const DeleteUser = require('../actions/user/delete_user.action');

router.post('/add', async(req, res) => {
    try {
        let data = await new AddUser(req).create();

        return res.send({
            code: 200,
            status: 'Success',
            message: 'User added!',
            data
        })

    } catch(err) {
        return res.send({
            code:400,
            status: 'Something went wrong',
            message: err.message
        })
    }
})

router.get('/', async (req, res) => {
    try {
        let { slug } = req.params
        let data = await new ListUsers(slug).getAll();
        return res.send({
            code: 200,
            status: 'Success',
            message: 'Get list of users',
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
        let data = await new DetailsUser(slug).exec();
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
        let data = await new UpdateUser(slug, req).update();
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
        let data = await new DeleteUser(slug).delete();
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