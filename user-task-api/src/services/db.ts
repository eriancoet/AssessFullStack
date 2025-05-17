// db.ts
import Database from 'better-sqlite3';

const db = new Database('mydb.sqlite'); // This opens the DB synchronously

export default db;
