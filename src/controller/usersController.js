import express from 'express';
import UserService from '../services/usersService.js';

const router  = express.Router()

const usersService = new UserService()

router.post('/user',(req,res) => usersService.create(req,res))
router.get('/user',(req,res) => usersService.get(req,res))
router.get('/user/:id',(req,res) =>usersService.getById(req,res))
router.put('/user/:id',(req,res) =>usersService.updated(req,res))
router.delete('/user/:id',(req,res) =>usersService.delete(req,res))

export default router