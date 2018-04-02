const mongoose = require("mongoose");

const sensorSchema = mongoose.Schema({

    ax: String,
    ay: String,
    az: String,
    lx: String,
    ly: String,
    lz: String,
    gx: String,
    gy: String,
    gz: String,
    mx: String,
    my: String,
    mz: String,
    class: String,

});

module.exports = mongoose.model("sensor", sensorSchema);