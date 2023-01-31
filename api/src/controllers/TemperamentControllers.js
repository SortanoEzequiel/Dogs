require('dotenv').config();
const axios = require('axios')
const { Router} = require('express');
const  {APIKEY } = process.env
const {Temperaments} = require('../db.js')

const getTemperament =  async (req,res)=>{
    const apiUrl= await axios.get("https://api.thedogapi.com/v1/breeds")
    const temperApi = apiUrl.data.map(a => a.temperament?a.temperament:false).filter(Boolean)
    let filtroRepetidos = temperApi.toString().replace(/ /g,'').split(',');
    let repArray = [...new Set(filtroRepetidos)]
    const temperamentos = repArray.toString().split(',')
    temperamentos.forEach(temp => Temperaments.findOrCreate({where: {name:temp}}))
    const allTemp = await Temperaments.findAll()
    res.send(allTemp)
}

module.exports ={
    getTemperament
}