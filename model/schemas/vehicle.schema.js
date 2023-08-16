/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const vehicleSchema = new mongoose.Schema({
    color:{
        type: "String",
        required: true,

    },

    numberDoor:{
        type: "Number",
        required: true,
        min: 1,
        max: 5
    },

    traction:{
        type: "String",
        required: true
    },

    brand:{
        type: "String",
        required: true
    },
    
    carBody:{
        type: "String",
        required: true
    },

    model:{
        type: "String",
        required: true
    },

    wheelSize: {
        type: "Number",
        required: true,
        min: 12,
        max: 23
    },

    numberSeats:{
        type: "Number",
        required: true,
        min: 1,
        max: 9
    },

    enginePower:{
        type: "Number",
        required: true,
        min: 1
    },

    serialNumber:{
        type: "String",
        required: true,
        unique: true
    }

});

/** schema exportation */
vehicleSchema.plugin(validator)
module.exports = vehicleSchema;

// 27:08