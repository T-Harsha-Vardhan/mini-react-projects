import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Accordion from "./pages/accordion/Accordion";
import StarRating from "./pages/starRating/StarRating";
import ImageSlider from "./pages/imageSlider/ImageSlider";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/starRating" element={<StarRating />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
