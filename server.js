// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar rotas
const studentRoutes = require('./src/routes/studentRoutes');
const exerciseRoutes = require('./src/routes/exerciseRoutes');
const workoutRoutes = require('./src/routes/workoutRoutes');
const scheduleRoutes = require('./src/routes/scheduleRoutes');
const historyRoutes = require('./src/routes/historyRoutes');
const errorHandler = require('./src/utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota inicial
app.get('/', (req, res) => {
  res.send('API do App de Treinos está funcionando!');
});

// Usar rotas
app.use('/students', studentRoutes);
app.use('/exercises', exerciseRoutes);
app.use('/workouts', workoutRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/history', historyRoutes);
app.use(errorHandler);

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});