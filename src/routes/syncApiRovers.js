const express = require('express');
const routerApiRovers = express.Router();
const { apiCallRovers } = require("../services/api.js");
const Rover = require("../models/rover.js");

routerApiRovers.get('/', async (req, res) => {
    try {
        await apiCallRovers();
        const rovers = await Rover.find();
        if(!rovers) res.status(403).json('Rovers do not found...');
        res.status(200).json(rovers);
    } catch (error) {
        response.status(500).json('Error 500 at call rover Api ' + error.message);
    }
})


module.exports = routerApiRovers