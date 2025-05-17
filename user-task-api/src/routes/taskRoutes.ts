// src/routes/taskRoutes.ts
import { Router } from 'express';
import {
    getTasksForUser,
    createTaskForUser,
} from '../controllers/taskController';

const router = Router({ mergeParams: true }); // ✅ Important for accessing :id from parent

router.get('/', getTasksForUser);     // Will be /users/:id/tasks
router.post('/', createTaskForUser);  // Will be /users/:id/tasks

export default router;
