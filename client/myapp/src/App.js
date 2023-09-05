import { Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import NotFound from './components/notfound';
import Explorer from './components/explorer';
import AddAIToolForm from './components/addtool';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/addtool" element={<AddAIToolForm />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
