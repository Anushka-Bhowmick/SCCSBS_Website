const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://convene:convene@cluster0.q8hoojm.mongodb.net/convene'


mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection
db.on('connected',()=>{
    console.log("Database connection successful");

})
db.on('error',()=>{
    console.log("Commection failed");
})
module.exports = mongoose