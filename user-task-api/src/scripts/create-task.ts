// scripts/create-task.ts
import db from '../services/db';

const userId = 1;
const title = 'Test Task';
const completed = false;

const stmt = db.prepare('INSERT INTO tasks (userId, title, completed) VALUES (?, ?, ?)');
const result = stmt.run(userId, title, completed ? 1 : 0);

console.log(`✅ Task inserted with ID: ${result.lastInsertRowid}`);
