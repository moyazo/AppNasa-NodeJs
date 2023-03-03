const express = require('express');
const routerApodsApi = express.Router();
const { apiCallApod } = require("../services/api.js");
const Apod = require("../models/apod.js");

routerApodsApi.get('/', async (req, res) => {
    try {
        await apiCallApod();
        const apods = await Apod.find();
        if(!apods) res.status(403).json('Apods do not found...');
        res.status(200).json(apods);
    } catch (error) {
        response.status(500).json('Error 500 at call apod Api ' + error.message);
    }
})

module.exports = routerApodsApi;