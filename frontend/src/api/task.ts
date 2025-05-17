import axios from 'axios';

interface TaskData {
  title: string;
  completed?: boolean;
  dueDate?: string;
}

export const getTasksForUser = async (userId: string | number) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${userId}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTaskForUser = async (userId: number, taskData: TaskData) => {
  try {
    const response = await axios.post(`http://localhost:3000/users/${userId}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};
