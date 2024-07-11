import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Accordion from "./pages/accordion/Accordion";
import StarRating from "./pages/starRating/StarRating";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/starRating" element={<StarRating />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
