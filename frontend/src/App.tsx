
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './components/AdminLogin';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { useEffect } from 'react';
import { loadGtag } from './analytics';

function App() {
  useEffect(() => {
    loadGtag();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;