const express = require('express');

const router = express.Router();

const Middleware = require('./middleware/middleware');
const Colaborador = require('./controllers/colaborador');
const Os = require('./controllers/os');
const Comentario = require('./controllers/comentario');

router.post('/login', Colaborador.login);
router.post('/colaborador', Colaborador.create);
router.get('/colaborador', Middleware.validaAcesso, Colaborador.read);
router.get('/colaborador/:matricula', Middleware.validaAcesso, Colaborador.read);
router.put('/colaborador', Middleware.validaAcesso, Colaborador.update);
router.delete('/colaborador/:matricula', Middleware.validaAcesso, Colaborador.del);


router.post('/comentario', comentario.create);
router.get('/comentario', Middleware.validaAcesso, comentario.read);
router.put('/comentario', Middleware.validaAcesso, comentario.update);
router.delete('/comentario', Middleware.validaAcesso, comentario.del);

router.get('/', (req, res) => { return res.json("API OSs respondendo") });

module.exports = router;