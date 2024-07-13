import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Accordion from "./pages/accordion/Accordion";
import StarRating from "./pages/starRating/StarRating";
import ImageSlider from "./pages/imageSlider/ImageSlider";
import LoadMore from "./pages/loadMore/LoadMore";
import RecursiveNavMenu from "./pages/recursiveNavMenu/RecursiveNavMenu";
import QrCodeGenerator from "./pages/qrCodeGenerator/QrCodeGenerator";

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
          <Route path="/recursiveNavMenu" element={<RecursiveNavMenu />} />
          <Route path="/qrCodeGenerator" element={<QrCodeGenerator />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
