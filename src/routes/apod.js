const express = require('express');
const routerApod = express.Router();
const {
    getApodList,
    getApodId,
    createApod,
    updateApod,
    deleteApod,
} = require("../controllers/apod.js");

routerApod.get("/all-apods", async (req, res) => {
    try {
        const apods = await getApodList();
        !apods && res.status(403).json('Apods not found...');
        res.status(200).json(apods);
    } catch (error) {
        response.status(500).json('Error 500 ' + error.message);
    }
});

routerApod.get("/apodById/:id", async (req, res) => {
    try {
        if(!req.params.id) res.status(502).json('params id not found...');
        const { id } = req.params;
        const apod = await getApodId(id);
        if(!apod) res.status(403).json('Apod not found...');
        res.status(200).json(apod);
    } catch (error) {
        response.status(500).json('Error 500 ' + error.message);
    }
});

routerApod.post("/createApod", async (req, res) => {
    try {
        if(!req.body) res.status(502).json('body not found...');
        const bodyData = req.body;
        const apod = await createApod(bodyData);
        res.status(200).json(apod);
    } catch (error) {
        res.status(500).json("Apod creation failed");
    }
});

routerApod.put("/updateApod/:id", async (req, res) => {
    try {
        if(!req.params.id) res.status(502).json('params id not found...');
        if(!req.body) res.status(502).json('body not found...');
        const { id } = req.params;
        const data = req.body;
        const task = await updateApod(id, data);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json("Apod update failed");
    }
});

routerApod.delete("/removeApod/:id", async (req, res) => {
    try {
        if(!req.params.id) res.status(502).json('params id not found...');
        const { id } = req.params;
        await deleteApod(id);
        res.status(200).json("Apod deleted successfully");
    } catch (error) {
        res.status(500).json("Apod deletion failed");
    }
});

module.exports = routerApod;
