require('dotenv').config()
const axios = require("axios");
const {Dog} = require('../db');


async function DogPost (req, res, next){
const { id, name, pesoMin, pesoMax, alturaMin, alturaMax, longevidad, image, crearInDb, temperamento} = req.body
try {
    const dogsCreated = await Dog.create({
        id, 
        name,
        pesoMin, 
        pesoMax,
        alturaMin,
        alturaMax, 
        longevidad, 
        image,
        crearInDb,
    });
    dogsCreated.addTemperaments(temperamento);
    res.send(dogsCreated)
} catch (error) {
    next(error)
   }
}


module.exports = {
    DogPost,
}