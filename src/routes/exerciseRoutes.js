// src/routes/exerciseRoutes.js
const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

// Rota para criar um exercício
router.post('/', exerciseController.createExercise);

// Rota para buscar todos os exercícios
router.get('/', exerciseController.getAllExercises);

// Rota para buscar um exercício por ID
router.get('/:id', exerciseController.getExerciseById);

// Rota para atualizar um exercício
router.put('/:id', exerciseController.updateExercise);

// Rota para deletar um exercício
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;