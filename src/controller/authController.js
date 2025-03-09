import express from 'express';
import AuthService from '../services/authService.js';

const router  = express.Router()

const authService = new AuthService()

router.post('/register',(req, res) => authService.register(req, res))
router.post('/login', (req, res) => authService.login(req, res))

export default router