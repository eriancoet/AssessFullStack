import { Request, Response } from 'express';
import db from '../services/db'; // ✅ Keep this
// ❌ Remove Prisma import if still there

export const getTasksForUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10); // Matches route: /users/:id/tasks

  try {
    const stmt = db.prepare('SELECT * FROM tasks WHERE userId = ?');
    const tasks = stmt.all(userId);

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tasks for user' });
  }
};

export const createTaskForUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const { title, completed } = req.body;

  if (!title) {
    res.status(400).json({ error: 'Title is required' });
    return;
  }

  try {
    const stmt = db.prepare('INSERT INTO tasks (userId, title, completed) VALUES (?, ?, ?)');
    const result = stmt.run(userId, title, completed ? 1 : 0);

    res.status(201).json({
      id: result.lastInsertRowid,
      userId,
      title,
      completed: !!completed,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create task' });
  }
};
