import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Accordion from "./pages/accordion/Accordion";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
