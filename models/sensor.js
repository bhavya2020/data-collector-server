const mongoose = require("mongoose");

const sensorSchema = mongoose.Schema({

    sensor: String,
    x: String,
    y: String,
    z: String,
    class: String,

});

module.exports = mongoose.model("sensor", sensorSchema);