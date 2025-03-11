// src/routes/historyRoutes.js
const express = require('express');
const historyController = require('../controllers/historyController');

const router = express.Router();

// Rota para criar um histórico
router.post('/', historyController.createHistory);

// Rota para buscar todos os históricos
router.get('/', historyController.getAllHistory);

// Rota para buscar um histórico por ID
router.get('/:id', historyController.getHistoryById);

// Rota para atualizar um histórico
router.put('/:id', historyController.updateHistory);

// Rota para deletar um histórico
router.delete('/:id', historyController.deleteHistory);

module.exports = router;