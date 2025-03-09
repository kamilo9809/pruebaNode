import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export default class AuthService {
  generateToken(user) {
    return jwt.sign(
      { id: user.id, email: user.email },
      'clavesupersecreta',
      { expiresIn: '1d' }
    );
  }

  // Registro de usuario
  async register(req, res) {
    try {
      const { name, lastName, email, password } = req.body;
      const existingUser = await user.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      const newUser = await user.create({ name, lastName, email, password });
      const token = this.generateToken(newUser);

      return res.status(201).json({ user: newUser, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Inicio de sesión
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const logUser = await user.findOne({ where: { email } });

      if (!logUser || !(await bcrypt.compare(password, logUser.password))) {
        return res.status(401).json({ message: "access invalid" });
      }

      const token = this.generateToken(logUser);
      return res.status(200).json({ logUser, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
