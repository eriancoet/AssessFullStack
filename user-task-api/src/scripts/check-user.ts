import db from '../services/db';
import { initDb } from '../services/initDb';

initDb(); // Ensure tables exist

// Try to find the user
const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
const user = stmt.get('jane@example.com');

if (user) {
  console.log('✅ User found:', user);
} else {
  console.log('❌ User not found. Inserting test user...');

  const insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  const result = insert.run('Jane Doe', 'jane@example.com');

  console.log('✅ Test user inserted with ID:', result.lastInsertRowid);
}
