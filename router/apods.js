'use strict';

const express = require('express');
const router = express.Router();
const Apod = require('../models/apods');

/**
 * TABLE OF APODS
 * @param {Request} req
 * @param {Response} res
 */
router.get('/', async (req, res) => {
    try {
        const arrayApod = await Apod.find();
        res.render('apods', { arrayApod: arrayApod });
    } catch (error) {
        console.log(error.message);
    }
});
/**
 * APOD BY ID
 * @param {Request} req
 * @param {Response} res
 */
router.get('/detail/:id', async (req, res) => {
    try {
        const id = req.params.id;

        res.render('detail', {
            apod: await Apod.findOne({ _id: id }),
            error: false,
        });
    } catch (error) {
        res.render('detail', { error: true, mensaje: 'APOD NOT FOUND' });
    }
});
/**
 * UPDATE OF APOD ENDPOINT
 * @param {Request} req
 * @param {Response} res
 */
router.put('/:id', async (req, res) => {
    try {
        await Apod.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
        });
    } catch (error) {
        console.log(error.message)
    }
});
/**
 * CREATE OF APOD VIEW
 * @param {Request} req
 * @param {Response} res
 */
router.get('/create', (req, res) => {
    res.render('create');
});
/**
 * CREATE OF APOD ENDPOINT
 * @param {Request} req
 * @param {Response} res
 */
router.post('/', async (req, res) => {
    try {
        const apod = new Apod(req.body);
        await apod.save();
        res.redirect('/');
    } catch (error) {
        console.log('error', error.message);
    }
});
/**
 * DELETE OF APOD ENDPOINT
 * @param {Request} req
 * @param {Response} res
 */
router.delete('/:id', async (req, res) => {
    try {
        await Apod.findByIdAndDelete({ _id: req.params.id });
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;
