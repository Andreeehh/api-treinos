// src/controllers/historyController.js
const History = require('../models/historyModel');

// Criar um histórico
exports.createHistory = async (req, res) => {
  try {
    const history = new History(req.body);
    await history.save();
    res.status(201).json(history);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar todos os históricos
exports.getAllHistory = async (req, res) => {
  try {
    const history = await History.find().populate('workout');
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar histórico por ID
exports.getHistoryById = async (req, res) => {
  try {
    const history = await History.findById(req.params.id).populate('workout');
    if (!history) {
      return res.status(404).json({ message: 'Histórico não encontrado' });
    }
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar histórico
exports.updateHistory = async (req, res) => {
  try {
    const history = await History.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!history) {
      return res.status(404).json({ message: 'Histórico não encontrado' });
    }
    res.status(200).json(history);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar histórico
exports.deleteHistory = async (req, res) => {
  try {
    const history = await History.findByIdAndDelete(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'Histórico não encontrado' });
    }
    res.status(200).json({ message: 'Histórico deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};