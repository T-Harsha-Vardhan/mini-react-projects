import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Accordion from "./pages/accordion/Accordion";
import StarRating from "./pages/starRating/StarRating";
import ImageSlider from "./pages/imageSlider/ImageSlider";
import LoadMore from "./pages/loadMore/LoadMore";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/starRating" element={<StarRating />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/loadMore" element={<LoadMore />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
