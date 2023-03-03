const express = require('express');
const routerApiRovers = express.Router();
const { apiCallRovers } = require("../services/api.js");
const Rover = require("../models/rover.js");

routerApiRovers.get('/', async (req, res) => {
    try {

        await apiCallRovers()
        await Rover.find()
        const message = 'Data synchronize successfully'
        res.status(200).json(message)
    } catch (error) {
        response.status(500)
    }
})


module.exports = routerApiRovers