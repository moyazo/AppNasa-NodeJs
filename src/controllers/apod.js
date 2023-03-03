const Apod = require("../models/apod.js");

const getApodList = async () => {
    try {
        const apodList = await Apod.find();
        return apodList;
    } catch (error) {
        console.log("Error at bring apods " + error.message);
    }
};

const getApodId = async (id) => {
    try {
        if (!id) throw new Error("Cant find rover by id, id given null...");
        const apodId = await Apod.findById(id);
        return apodId;
    } catch (error) {
        console.log("Error at bring apod " + error.message);
    }
};

const createApod = async (data = { title, explanation, url, date }) => {
    try {
        if (!data) throw new Error("Can not create not data given");
        const exists = await Apod.find(data);
        if(exists) return 'Apod already exists';
        const newApod = new Apod(data);
        Apod.create(newApod);
    } catch (error) {
        console.log('Error at create apod ' + error.message);
    }
};

const updateApod = async (id, data) => {
    try {
        if (!id) throw new Error("Cant find rover by id, id given null...");
        if (!data) throw new Error("Can not create not data given");
        const apodUpdate = await getApodId(id);
        await apodUpdate.updateOne(data);
    return data;
    } catch (error) {
        console.log('Error at update apod ' + error.message);
    }
};

const deleteApod = async ({ id }) => {
    try {
        if (!id) throw new Error("Cant find rover by id, id given null...");
        await Apod.findOneAndRemove({ id });
        return true;
    } catch (error) {
        console.log('Error at delete apod ' + error.message);
    }
};

module.exports = { getApodList, getApodId, createApod, updateApod, deleteApod };
