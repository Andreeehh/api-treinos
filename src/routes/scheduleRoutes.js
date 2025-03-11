// src/routes/scheduleRoutes.js
const express = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = express.Router();

// Rota para criar um agendamento
router.post('/', scheduleController.createAppointment);

// Rota para buscar todos os agendamentos
router.get('/', scheduleController.getAllAppointments);

// Rota para buscar um agendamento por ID
router.get('/:id', scheduleController.getAppointmentById);

// Rota para atualizar um agendamento
router.put('/:id', scheduleController.updateAppointment);

// Rota para deletar um agendamento
router.delete('/:id', scheduleController.deleteAppointment);

module.exports = router;