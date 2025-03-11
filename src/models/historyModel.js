// src/models/historyModel.js
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  workout: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Workout', // Referência ao modelo de Treino
    required: true,
  },
  date: { type: Date, default: Date.now }, // Data do histórico (padrão: data atual)
  notes: { type: String }, // Observações (opcional)
});

module.exports = mongoose.model('History', historySchema);