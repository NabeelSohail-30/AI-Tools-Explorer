import { Routes, Route } from "react-router-dom";
import Explorer from "./pages/ExplorerPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explorer" element={<Explorer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
