import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTasksForUser, createTaskForUser } from '../api/task';

export default function TaskPage() {
  const { userId } = useParams<{ userId: string }>();
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (userId) {
      getTasksForUser(userId).then(setTasks).catch(console.error);
    }
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    try {
      await createTaskForUser(Number(userId), { title, completed: false });
      const updatedTasks = await getTasksForUser(userId);
      setTasks(updatedTasks);
      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="card bg-secondary text-light shadow p-4">
      <h1 className="mb-4">Tasks for User {userId}</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="New task title"
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-success ms-2">
            Add
          </button>
        </div>
      </form>

      <ul className="list-group">
        {tasks.map(task => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light"
          >
            {task.title}
            {task.completed ? (
              <span className="text-success">✅</span>
            ) : (
              <span className="text-muted">⏳</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
