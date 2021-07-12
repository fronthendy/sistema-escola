var express = require('express');
const alunoController = require('../controllers/alunoController');
const professorController = require('../controllers/professorController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/alunos
router.get('/alunos', alunoController.index);

// http://localhost:3000/alunos/matricula/2019
router.get('/alunos/matricula/:ano', alunoController.filtroAnoMatricula);

// http://localhost:3000/alunos/nome/:nome
router.get('/alunos/nome/:nome', alunoController.filtroNome);

// http://localhost:3000/professores/
router.get('/professores', professorController.index);

// http://localhost:3000/professores/
router.post('/professores', professorController.create);

// http://localhost:3000/professores/:id
router.put('/professores/:id', professorController.update);

// http://localhost:3000/professores/:id
router.delete('/professores/:id', professorController.destroy);

module.exports = router;
