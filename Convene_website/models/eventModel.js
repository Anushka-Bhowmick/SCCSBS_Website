const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({

    name : {type: String, require},
    Type : [],
    prices : [],
    category : {type: String, require},
    image : {type: String, require},
    description : {type: String, require}

},{
    timestamps:true,
})
const eventModel = mongoose.model('events',eventSchema)

module.exports = eventModel