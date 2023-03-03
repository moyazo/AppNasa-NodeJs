const express = require('express');
const routerUser = express.Router();
const { 
    getUserList, 
    getUserId, 
    createUser,
    updateUser,
    deleteUser,
    updateUserFavList
} = require('../controllers/user.js');



routerUser.get('/', async (req, res) => {
    try {
        const users = await getUserList()
        res.status(200).json(users)
    } catch (error) {
        res.response.status(500)
    }
})


routerUser.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const task = await getUserId(id)
        res.status(200).json({ _id: task._id, email: task.email, favList: task.favList })
    } catch (error) {
        res.status(500).json(error.message)
    }
});
routerUser.post('/favBookList/:idNasa', async (req, res) => {

    try {
        const { idNasa } = req.params
        const user = await updateUserFavList({ id: req.user.id, idNasa })
        if (user === undefined) {
            return res.status(200).json("Data no exist in database")
        }
        res.status(200).json("Data updated successfully")

    } catch (error) {
        console.log(error.message)
    }

});


routerUser.get('/favBookList/:idNasa', async (req, res) => {
    try {
        const { idNasa } = req.params
        const user = await getUserId(idNasa)
        const favorites = user.favList
        res.status(200).json(favorites)

    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = routerUser;

