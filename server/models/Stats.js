const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    totalBikes: {
        type: Number,
        required: true,
    },
    available: {
        type: Number,
        required: true,
    },
    busy: {
        type: Number,
        required: true,
    },
    unavalable: {
        type: Number,
        required: true,
    },
    averagePrice: {
        type: Number,
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;