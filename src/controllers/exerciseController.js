// src/controllers/exerciseController.js
const Exercise = require('../models/exerciseModel');

// Criar um exercício
exports.createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar todos os exercícios
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar exercício por ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: 'Exercício não encontrado' });
    }
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar exercício
exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!exercise) {
      return res.status(404).json({ message: 'Exercício não encontrado' });
    }
    res.status(200).json(exercise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar exercício
exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: 'Exercício não encontrado' });
    }
    res.status(200).json({ message: 'Exercício deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};