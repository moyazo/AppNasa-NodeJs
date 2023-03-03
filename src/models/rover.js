const mongoose = require( "mongoose");

const roverSchema = new mongoose.Schema({

    idNasa: {
        type: Number,
        required: true

    },

    camera: {
        name: {
            type: String,
        },
        full_name: {
            type: String,
        }
    },
    img_src: {
        type: String,
    },
    earth_date: {
        type: String,

    },
});

const Rover = mongoose.model('RoversApi', roverSchema);

module.exports = Rover;
