const Apod = require("../models/apod.js");
const User = require("../models/user.js");


const getAll = async () => {
    const apodList = await Apod.find();
    const userList = await User.find();
    return {
        apodList, userList
    }
}
module.exports = getAll;