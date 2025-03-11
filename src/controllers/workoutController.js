// src/controllers/workoutController.js
const Workout = require('../models/workoutModel');

// Criar um treino
exports.createWorkout = async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar todos os treinos
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().populate('student').populate('blocks.exercises.exercise');
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar treino por ID
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id).populate('student').populate('blocks.exercises.exercise');
    if (!workout) {
      return res.status(404).json({ message: 'Treino não encontrado' });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar treino
exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!workout) {
      return res.status(404).json({ message: 'Treino não encontrado' });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar treino
exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Treino não encontrado' });
    }
    res.status(200).json({ message: 'Treino deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};