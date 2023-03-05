const mongoose = require("mongoose");


const apodSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    explanation: {
        type: String,
        required: true,

    },

    url: {
        type: String,
        required: true,

    },
    date: {
        type: String,
        required: true,

    },
}, { collection: 'apods' })

const Apod = mongoose.model('ApodApi', apodSchema,);

module.exports = Apod;

