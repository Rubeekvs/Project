const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const coinSchema = new Schema({
    name: { type: String, required: true },
    coin: { type: Number, required: true },
});

module.exports = mongoose.model('coin', coinSchema);