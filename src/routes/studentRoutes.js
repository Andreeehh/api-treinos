// src/routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Rota para criar um aluno
router.post('/', studentController.createStudent);

// Rota para buscar todos os alunos
router.get('/', studentController.getAllStudents);

// Rota para buscar alunos por nome
router.get('/search', studentController.findByName);

// Rota para buscar um aluno por ID
router.get('/:id', studentController.getStudentById);

// Rota para atualizar um aluno
router.put('/:id', studentController.updateStudent);

// Rota para deletar um aluno
router.delete('/:id', studentController.deleteStudent);


module.exports = router;