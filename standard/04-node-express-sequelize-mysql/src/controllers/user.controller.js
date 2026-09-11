const User = require('../models/user.model');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      
      return res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error while fetching users from database"
      });
    }
  }

  static async createUser(req, res) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: "Name and email are required fields"
        });
      }

      const newUser = await User.create({ name, email });
      
      return res.status(201).json({
        success: true,
        message: "User created successfully in database",
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error while creating user in database"
      });
    }
  }
}

module.exports = UserController;
