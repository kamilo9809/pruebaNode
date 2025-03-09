import express from 'express';
import UserService from '../services/usersService.js';

const router  = express.Router()

const usersService = new UserService()

/**
 * @route POST /user
 * @description Crea un usuario
 * @response 201 - lista de usuarios
 */
router.post('/user',(req,res) => usersService.create(req,res))

/**
 * @route GET /user
 * @description Obtiene una lista de usuarios
 * @response 200 - lista de usuarios
 */
router.get('/user',(req,res) => usersService.get(req,res))

/**
 * @route GET /user/:id
 * @description Obtiene un usuario por id
 * @response 200 - lista de un usuario
 */
router.get('/user/:id',(req,res) =>usersService.getById(req,res))

/**
 * @route PUT /user/:id
 * @description Actualiza un usuario por id
 * @response 201 - actualiza correctamente un usuario
 */
router.put('/user/:id',(req,res) =>usersService.updated(req,res))

/**
 * @route DELETE /user/:id
 * @description Elimina un usuario por id
 * @response 200 - elimina un usuario
 */
router.delete('/user/:id',(req,res) =>usersService.delete(req,res))

export default router