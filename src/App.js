import './App.css';
import SignupForm from './Components/Pages/SignupForm';
import LoginForm from './Components/Pages/LoginForm';
import EmailEditor from './Components/Pages/EmailEditor';
import Inbox from './Components/Pages/Inbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="/mail-box-client" element={<EmailEditor />} />
          <Route path='/mail-inbox' element={<Inbox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
