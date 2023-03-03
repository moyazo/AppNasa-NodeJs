const Apod = require("../models/apod.js");
const Rover = require("../models/rover.js");
const User = require("../models/user.js");


const getAll = async () => {
    const apodList = await Apod.find();
    const roverList = await Rover.find();
    const userList = await User.find();
    return {
        apodList, roverList, userList
    }
}


module.exports = getAll