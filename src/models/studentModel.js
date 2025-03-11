// src/models/studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nome do aluno
  cpf: { type: String, required: true, unique: true }, // CPF (chave única)
});

module.exports = mongoose.model('Student', studentSchema);