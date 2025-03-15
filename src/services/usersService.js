import user from "../models/user.js";

export default class UserService {
  async create(req, res) {
    try {
      const { name, lastName, email, password } = req.body;
      const newUser = await user.create({ name, lastName, email, password });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async get(req, res) {
    try {
      const users = await user.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const foundUser = await user.findByPk(id);
      if (!foundUser) {
        return res.status(404).json({ message: "user not found" });
      }
      return res.json(foundUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, lastName, email, password } = req.body;
  
      const usuario = await user.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ message: "User not found" });
      }
  
      usuario.name = name;
      usuario.lastName = lastName;
      usuario.email = email;
      usuario.password = password; 
  
      await usuario.save();
  
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await user.destroy({ where: { id } });

      if (!deleted) {
        return res.status(404).json({ message: "user not found" });
      }

      return res.json({ message: "user deleted sucessfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
