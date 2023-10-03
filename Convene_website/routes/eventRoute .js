const express = require("express");
const router = express.Router();
const Event = require('../models/eventModel')

router.get("/getallevents",async(req,res)=>{
    try{
        const events =await Event.find()
        return res.status(200).json(events)

    }
    catch(error){
        return res.status(400).json({message:error});

    }
});

module.exports = router;
