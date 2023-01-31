require('dotenv').config()
const axios = require("axios")

const getDogs = async  function (req,res){
    try {
        const apiUrl= await axios.get("https://api.thedogapi.com/v1/breeds")
        const apiInfo= await apiUrl.data.map(el => {
            return{
                id: el.id,
                name: el.name, 
                origen: el.origin,
                peso: el.weight.metric,
                altura: el.height.metric,
                longevidad: el.life_span,
                temperamento: el.temperament,
                imagen: el.image.url,
                
            }
        })
       // console.log(apiInfo)// TRAE LA INFO Bien 
        return apiInfo 
          
    } catch(error) {
        res.send(error) // acá tambien?
    }
}


const getIdDogs = async function (req,res){
    try {
        const {id} = req.params;
        const razas = await getDogs(); // deberia funcionar ésto jaja
        if(!id){ 
          res.status(404).json("No existe ese Id, intente con uno entre 1 y 141") 
        }else{
           const Raza = razas.find( raza => raza.id.toString() === id)
           res.status(200).json(Raza)
        }
    } catch(error) {
        res.status(400).json({status:400, message: error.message})
    }
}

module.exports = {
    getIdDogs,
}