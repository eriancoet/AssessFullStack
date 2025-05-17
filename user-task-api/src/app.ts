import express from 'express';
import userRoutes from './routes/userRoutes'; // ✅ This is the router
import taskRoutes from './routes/taskRoutes';
import cors from 'cors';
import { initDb } from './services/initDb';


const app = express();
app.use(cors());


initDb(); // ✅ Ensure tables before handling requests

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

// ✅ Use router, not controller
app.use('/users', userRoutes); // /users, /users/:id

export default app;
