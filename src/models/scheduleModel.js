// src/models/scheduleModel.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student', // Referência ao modelo de Aluno
    required: true,
  },
  dayOfWeek: { 
    type: String, 
    enum: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], // Dias da semana
    required: true,
  },
  time: { 
    type: String, 
    required: true, 
    match: /^([01]\d|2[0-3]):([0-5]\d)$/, // Formato HH:MM
  },
  notes: { type: String }, // Observações (opcional)
  completed: { 
    type: Boolean, 
    default: false, // Por padrão, o agendamento não está concluído
  },
});

module.exports = mongoose.model('Schedule', scheduleSchema);