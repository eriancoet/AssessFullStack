// src/routes/userRoutes.ts
import { Router } from 'express';
import { getUsers, getUserById, createUser } from '../controllers/userController';
import taskRoutes from './taskRoutes'; // ✅ Import task routes

const router = Router();

router.get('/', getUsers);              // GET /users
router.get('/:id', getUserById);        // GET /users/:id
router.post('/', createUser);           // POST /users

// ✅ Nest task routes: GET/POST /users/:id/tasks
router.use('/:id/tasks', taskRoutes);

export default router;
