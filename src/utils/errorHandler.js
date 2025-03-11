// src/utils/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log do erro no console para depuração

  // Verifica se o erro é uma instância de Error
  if (err instanceof Error) {
    // Erros de validação do Mongoose
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Erro de validação',
        details: err.message,
      });
    }

    // Erros de duplicidade (ex.: CPF único)
    if (err.code === 11000) {
      return res.status(400).json({
        message: 'Dados duplicados',
        details: 'O valor informado já existe no banco de dados.',
      });
    }

    // Erros de cast (ex.: ID inválido)
    if (err.name === 'CastError') {
      return res.status(400).json({
        message: 'ID inválido',
        details: 'O ID fornecido não é válido.',
      });
    }

    // Erros personalizados (ex.: lançados manualmente)
    if (err.statusCode) {
      return res.status(err.statusCode).json({
        message: err.message,
        details: err.details || null,
      });
    }
  }

  // Erro genérico (500 - Internal Server Error)
  res.status(500).json({
    message: 'Erro interno no servidor',
    details: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
  });
};

module.exports = errorHandler;