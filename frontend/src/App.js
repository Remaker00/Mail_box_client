import './App.css';
import SignupForm from './Components/Pages/SignupForm';
import LoginForm from './Components/Pages/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login-form" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
