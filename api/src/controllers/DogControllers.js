require('dotenv').config()
const axios = require("axios")
const {Dog, Temperaments} = require('../db.js')

const getDogs = async function (){
        const apiUrl= await axios.get("https://api.thedogapi.com/v1/breeds")
        const apiInfo= await apiUrl.data.map(el => {
            let temperamento = {};
            el.temperament ? temperamento = el.temperament : temperamento = 'no se ha encontrado un temperamento'
            let altura = []
            if(el.height.metric) altura = el.height.metric.split('-');
            let peso = [];
            if(el.weight.metric) peso = el.weight.metric.split('-');
            return{
                id: el.id,
                name: el.name, 
                origen: el.origin,
                peso: peso,
                altura: altura,
                longevidad: el.life_span,
                temperamento: temperamento,
                imagen: el.image.url,
                
            }
        })  
        return apiInfo
}
const getApi = async function (req, res){
    ApiDogs = await getDogs()
    res.send(ApiDogs)
}

const getDb = async function (){
    const DbInfo = await Dog.findAll({
        include :{
            model:Temperaments,
            attributes:["name"]
        }
    })
    return DbInfo
}
const dogsDb = async function(req, res){
    Dbdogs = await getDb()
    res.send(Dbdogs)
}

const getDogName = async function (req,res){
    const {name} = req.query

    const apiInfo = await getDogs();
    const dbInfo = await getDb();
    const allData = [...apiInfo, ... dbInfo]
    try {
        if(name){
            const dog = allData.filter((e) => e.name.includes(name))
            res.send(dog)
        } else{
            res.send(allData)
        }
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    getDogName,
    getDogs,
    dogsDb,
    getApi,
}
  

