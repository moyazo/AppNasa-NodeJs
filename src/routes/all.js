const express = require('express');
const routerAll = express.Router();
const { getAll } = require('../controllers/all.js');


routerAll.get('/', async (req, res) => {
    const all = await getAll()
    res.status(200).json(all)
});
module.exports = routerAll

