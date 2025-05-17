import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from '../api/user';
import { useNavigate } from 'react-router-dom';

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(name);
    const res = await getUsers();
    setUsers(res.data);
    setName('');
  };

  return (
    <div className="card bg-secondary text-light shadow p-4">
      <h1 className="mb-4">Users</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-primary ms-2">
            Add User
          </button>
        </div>
      </form>
      <ul className="list-group">
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => navigate(`/tasks/${user.id}`)}
            className="list-group-item list-group-item-action bg-dark text-light"
            style={{ cursor: 'pointer' }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
