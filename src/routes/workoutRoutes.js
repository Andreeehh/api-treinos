// src/routes/workoutRoutes.js
const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

// Rota para criar um treino
router.post('/', workoutController.createWorkout);

// Rota para buscar todos os treinos
router.get('/', workoutController.getAllWorkouts);

// Rota para buscar um treino por ID
router.get('/:id', workoutController.getWorkoutById);

// Rota para buscar treinos por aluno
router.get('/student/:studentId', workoutController.getWorkoutsByStudent);

// Rota para atualizar um treino
router.put('/:id', workoutController.updateWorkout);

// Rota para deletar um treino
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;