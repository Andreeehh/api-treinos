// src/controllers/studentController.js
const Student = require('../models/studentModel');

// Criar um aluno
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar todos os alunos
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar aluno por ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar aluno
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar aluno
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar alunos por nome
exports.findByName = async (req, res) => {
  try {
    const { name } = req.query; // Obtém o nome da query string
    if (!name) {
      return res.status(400).json({ message: 'O parâmetro "name" é obrigatório.' });
    }

    // Busca alunos cujo nome contenha o termo fornecido (case-insensitive)
    const students = await Student.find({
      name: { $regex: name, $options: 'i' },
    });

    if (students.length === 0) {
      return res.status(404).json({ message: 'Nenhum aluno encontrado.' });
    }

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};