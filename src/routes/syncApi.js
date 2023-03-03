const express = require('express');
const routerApodsApi = express.Router();
const { apiCallApod } = require("../services/api.js");
const Apod = require("../models/apod.js");

routerApodsApi.get('/', async (req, res) => {
    try {

        await apiCallApod()
        await Apod.find()
        const message = 'Data synchronize successfully'
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json('No new documents found')
    }
})

module.exports = routerApodsApi;