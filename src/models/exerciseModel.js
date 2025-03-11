// src/models/exerciseModel.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nome do exercício
  type: { 
    type: String, 
    enum: ['resistance', 'mobility', 'isometric'], // Tipos permitidos
    required: true,
  },
});

module.exports = mongoose.model('Exercise', exerciseSchema);