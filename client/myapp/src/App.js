import { Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import NotFound from './components/notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
