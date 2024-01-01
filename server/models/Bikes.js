const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Set bike name'],
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    wheelSize: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ID: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["available", "busy", "unavailable"],
        required: true,
    }
}, { versionKey: false, timestamps: true }
);

const Bikes = mongoose.model('Bikes', bikeSchema);

module.exports = Bikes;