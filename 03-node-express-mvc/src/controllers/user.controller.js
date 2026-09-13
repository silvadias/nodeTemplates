const UserModel = require('../models/user.model');

class UserController {
// GET /users
  static getAllUsers(req, res) {
    try {
      const users = UserModel.findAll();
      return res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error while fetching users"
      });
    }
  }

  // POST /users
  static createUser(req, res) {
    try {
      const { name, email } = req.body;

      // Validação simples de dados de entrada (Sempre uma boa prática)
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: "Name and email are required fields"
        });
      }

      const newUser = UserModel.create({ name, email });
      
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error while creating user"
      });
    }
  }
}

module.exports = UserController;
