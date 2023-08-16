/** packages */
const mongoose = require("mongoose");

/** using schema */

const schema = require("../schemas/vehicle.schema");

schema.statics = {
    create: function (data, cb) {
        let doc = new this(data);
        doc.save(cb); 
    },

    getAll: function (query, cb) {
        doc.find(query, cb);
    },

    getBySerial: function (query , cb){
        doc.find(query,cb);
    },

    update: function( query, data , cb){
        this.findOneAndUpdate(query, {$set:data} , {new: true} , cb);
    },

    delete: function(query, cb){
        this.findOneAndDelete(query);
    }

};

const dto = mongoose.model("coll_vehicle", schema);
module.exports = dto;