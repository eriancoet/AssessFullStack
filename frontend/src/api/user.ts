import api from './index';

export const getUsers = () => api.get('/users');
export const createUser = (name: string) => api.post('/users', { name });

export const getUserById = (userId: number) =>
  api.get(`/users/${userId}`);

export const getTasksForUser = (userId: number) =>
  api.get(`/users/${userId}/tasks`);

export const createTaskForUser = (userId: number, title: string) =>
  api.post(`/users/${userId}/tasks`, { title });
