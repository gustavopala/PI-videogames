const { Router } = require('express');
const addVideoGame = require('../controllers/addVideoGame')
const getVideoGame = require('../controllers/getVideoGame')
const getVideoGames = require('../controllers/getVideoGames')
const getGenres = require('../controllers/getGenres')
const filterGenre = require('../controllers/filterGenre')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/videogames/:id', getVideoGame);
router.get('/videogames', getVideoGames);
router.post('/videogames', addVideoGame);
router.get('/filtergames/:genre', filterGenre)

router.get('/genres', getGenres);

module.exports = router;
