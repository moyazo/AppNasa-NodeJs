const { signup, login } = require('../controllers/auth.js');
const express = require('express');
const routerAuth = express.Router();

routerAuth.post('/signup', async (req, res) => {

    try {
        console.log('enter')
        const { email, password } = req.body
        if (!email || !password) {
            res.status(502).json("incorrect email or password");
        }
        const token = await signup({ email, password })
        console.log('out')
        res.status(200).json(token)

    } catch (error) {
        res.status(500).json(error.message)
    }
})

routerAuth.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(502).json("incorrect email or password");
        }
        const token = await login({ email, password })
        res.status(200).json(token)

    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = routerAuth;