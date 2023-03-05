'use strict'

const express = require('express');
const router = express.Router();
const Apod = require('../models/apods');

router.get('/', async (req, res) => {
    try {
        const arrayApod = await Apod.find();
        res.render("apods", {
            arrayApod: arrayApod
        })
    } catch (error) {
        console.log(error.message)
    }
})

router.get('/crear', (req, res) => {
    res.render('create')
})

router.post('/', async (req, res) => {
    const data = req.body
    try {
        const Apod = new Apod(data)
        await Apod.save()
        res.redirect('/')
    } catch (error) {
        console.log('error', error.message)
    }
})

router.get('/detalles/:id', async(req, res) => {
    try {
        const Apod = await Apod.findOne({ _id:req.params.id })
        res.render('detail', {
            apod: Apod,
            error: false
        })
    } catch (error) {
        console.log('And error has occurred', error.message)
        res.render('details', {
            error: true,
            mensaje: 'APOD NOT FOUND'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const Apod = await Apod.findByIdAndDelete({ _id: req.params.id });
        if (!Apod) {
            res.json({
                estado: false,
                mensaje: 'CANT DELETE APOD'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'APOD DELETED'
            })
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.put('/detalles/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const ApodDB = await Apod.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(ApodDB)
        res.json({
            estado: true,
            mensaje: 'Piloto editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el piloto'
        })
    }
})

module.exports = router;