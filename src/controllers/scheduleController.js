// src/controllers/scheduleController.js
const Schedule = require('../models/scheduleModel');

// Criar um agendamento
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Schedule(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar todos os agendamentos
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Schedule.find().populate('student');
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar agendamento por ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Schedule.findById(req.params.id).populate('student');
    if (!appointment) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar agendamento
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!appointment) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar agendamento
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Schedule.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.status(200).json({ message: 'Agendamento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};