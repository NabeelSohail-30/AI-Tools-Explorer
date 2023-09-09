import { Routes, Route } from 'react-router-dom';

import NotFound from './components/notfound';
import Explorer from './components/explorer';

function App() {
  return (
    <Routes>
      <Route path="/explorer" element={<Explorer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
