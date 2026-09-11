const User = require('../models/user.model');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.find();
      
      return res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error while fetching users from MongoDB"
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
        message: "User created successfully in MongoDB",
        data: newUser
      });
    } catch (error) {

      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "Email already exists in database"
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error while creating user in MongoDB"
      });
    }
  }
}

module.exports = UserController;
