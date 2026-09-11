// 🚀 Template by: Luis Carlos da Silva Dias (https://github.com)
const UserModel = require('../models/user.model');
const catchAsync = require('../utils/catchAsync.util'); // 👈 Importa o encapsulador universal

class UserController {
  // GET /users
  static getAllUsers = catchAsync(async (req, res) => {
    const users = UserModel.findAll();
    return res.status(200).json({
      success: true,
      data: users
    });
  });

  // POST /users
  static createUser = catchAsync(async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      // Para disparar um erro com status personalizado para o middleware global:
      const error = new Error("Name and email are required fields");
      error.statusCode = 400;
      throw error; // O catchAsync vai capturar esse throw sozinho!
    }

    const newUser = UserModel.create({ name, email });
    
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });
  });
}

module.exports = UserController;
