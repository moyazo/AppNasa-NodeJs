const User = require("../models/user.js") ;
const Rover = require("../models/rover.js");
// import Apod from "../models/apod.js";

const getUserList = async () => {
    try {
        const user = await User.find();
        return user;
    } catch (error) {
        console.log('Error at bring all users ' + error.message);
    }
}

const getUserId = async (id) => {
    try {
        if(!id) throw new Error('Can not find use by id, id is null');
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log('Error at get user by id ' + error.message);
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.log(error.message);
    }
}

const createUser = async (data = { name, email, password }) => {
    try {
        if(!data) throw new Error('Can not create user, any data null...');
        const user = new User({ name, email, password });
        return user.save();
    } catch (error) {
        console.log('Error at create user ' + error.message);
    }
}

const updateUser = async (id, data) => {
    try {
        if(!id || !data) throw new Error('Can not update user id or data null...')
        const user = await getUserId(id);
        await user.updateOne(data);
    return data;
    } catch (error) {
        console.log('Error at update user ' + error.message);
    }
}

const deleteUser = async ({ id }) => {
    try {
        if(!id) throw new Error('Can not delete use, id given null...')
        await User.findOneAndRemove(id)
        return true;
    } catch (error) {
        console.log('Error at update user ' + error.message);
    }
}

const updateUserFavList = async ({ id, idNasa }) => {

    try {
        if(!id || !idNasa) throw new Error('id or idNasa null given, can not update favorites');
        const user = await getUserId(id);
        const currentFavList = user.favList;
        let newFavsList = currentFavList;
        const existed = currentFavList.includes(idNasa);
        const roverDB = await Rover.findById(idNasa);

        if (existed) {
            newFavsList = currentFavList.filter(item => item !== idNasa);
            console.log("Eliminado de favoritos");
        } else if (roverDB) {
            newFavsList.push(idNasa);
            console.log("Añadido a favoritos");
        }

        await User.findByIdAndUpdate(id, { favList: newFavsList });
        let userUpdate = await getUserId(id);
        userUpdate = JSON.parse(JSON.stringify(userUpdate));
        const { password, salt, ...userUpdate_ } = userUpdate;

        return userUpdate_;
    } catch (error) {
        console.log('Error at add to favorites ' + error.message);
    }

}


module.exports = { getUserList, getUserId, getUserByEmail, createUser, updateUser, deleteUser, updateUserFavList }