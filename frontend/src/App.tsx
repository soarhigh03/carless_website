import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './components/AdminLogin';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;