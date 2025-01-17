import express from "express";
import colors from "colors";
import dotenv from 'dotenv';

//configure env
dotenv.config();

//rest object
const app = express()

//rest api
app.get('/',(req,res) =>{
    res.send("<h1>Welcome to ecommerce app</h1>");

})

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,() =>{
    console.log(`Server run  ning on ${process.env.DEV_MODE} mode on  ${PORT}`.bgCyan.white);
});