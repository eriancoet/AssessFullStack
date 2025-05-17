import app from './app';
import db from './services/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  // No need to call getDBConnection(); db is already initialized.

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      title TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
