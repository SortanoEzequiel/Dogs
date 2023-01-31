const { Router } = require('express');
const {getDogName, getApi, dogsDb} = require('../controllers/DogControllers');
const {DogPost} = require('../controllers/PostControllers');
const { getTemperament } = require('../controllers/TemperamentControllers');
const {getIdDogs} = require('../controllers/IdControllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs/:id", getIdDogs)
router.use("/dogs", getDogName)// claro
router.use("/dogsapi", getApi)
router.use("/dogsdb", dogsDb)
router.use("/temperaments", getTemperament)
router.post("/dog", DogPost)
module.exports = router;
