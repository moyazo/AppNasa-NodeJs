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
        const users = await getUserList();
        !users &&  res.status(403).json('ERROR 403, users  not found');
        users && res.status(200).json(users);
    } catch (error) {
        res.response.status(500).json('Error 500, ' + error.message);
    }
});


routerUser.get('/:id', async (req, res) => {
    try {
        !req.params.id && res.status(403).json('ERROR 403, params id not found');
        const { id } = req.params;
        const user = await getUserId(id);
        !user && res.status(403).json('ERROR 403, user  not found');
        res.status(200).json({ _id: user._id, email: user.email, favList: user.favList });
    } catch (error) {
        res.response.status(500).json('Error 500, ' + error.message);
    }
});
routerUser.post('/favRoverList/:idRover', async (req, res) => {
    try {
        !req.params.idRover && res.status(403).json('ERROR 403, params idRover not found');
        const { idRover } = req.params;
        const user = await updateUserFavList({ id: req.user.id, idRover });
        if (!user) {
            return res.status(200).json("Data no exist in database");
        }
        res.status(200).json("Data updated successfully");
    } catch (error) {
        console.log(error.message);
    }

});


routerUser.get('/favBookList/:idUser', async (req, res) => {
    try {
        !req.params.idUser && res.status(403).json('ERROR 403, params idUser not found');
        const { idUser } = req.params;
        const user = await getUserId(idUser);
        const favorites = user.favList;
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = routerUser;

