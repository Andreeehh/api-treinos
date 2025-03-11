// src/models/workoutModel.js
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nome do treino
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student', // Referência ao modelo de Aluno
    required: true,
  },
  blocks: [
    {
      name: { type: String, required: true }, // Nome do bloco
      exercises: [
        {
          exercise: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Exercise', // Referência ao modelo de Exercício
            required: true,
          },
          modifier: { type: String }, // Modificador (opcional)
          load: { type: String }, // Carga (opcional)
          notes: { type: String }, // Observações (opcional)
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Workout', workoutSchema);