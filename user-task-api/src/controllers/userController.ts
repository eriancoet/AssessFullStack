import { Request, Response } from 'express';
import db from '../services/db';

export const getUsers = (_req: Request, res: Response): void => {
  const users = db.prepare('SELECT * FROM users').all();
  res.json(users);
};

export const createUser = (req: Request, res: Response): void => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }

  const stmt = db.prepare('INSERT INTO users (name) VALUES (?)');
  const result = stmt.run(name);
  res.status(201).json({ id: result.lastInsertRowid, name });
};

export const getUserById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    const user = stmt.get(id);
  
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
  
    res.json(user);
  };
