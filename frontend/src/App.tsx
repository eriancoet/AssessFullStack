import { Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UserPage';
import TaskPage from './pages/TaskPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Make sure to import your global CSS

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container" style={{ maxWidth: '600px' }}>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/tasks/:userId" element={<TaskPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
