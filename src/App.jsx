import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Accordion from "./pages/accordion/Accordion";
import StarRating from "./pages/starRating/StarRating";
import ImageSlider from "./pages/imageSlider/ImageSlider";
import LoadMore from "./pages/loadMore/LoadMore";
import RecursiveNavMenu from "./pages/recursiveNavMenu/RecursiveNavMenu";
import QrCodeGenerator from "./pages/qrCodeGenerator/QrCodeGenerator";
import ThemeChanger from "./pages/themeChanger/ThemeChanger";
import ScrollIndicator from "./pages/scrollIndicator/ScrollIndicator";
import CustomTabs from "./pages/customTabs/CustomTabs";
import OpenModal from "./pages/openModal/OpenModal";
import GithubFinder from "./pages/githubFinder/GithubFinder";

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
          <Route path="/themeChanger" element={<ThemeChanger />} />
          <Route path="/scrollIndicator" element={<ScrollIndicator />} />
          <Route path="/customTabs" element={<CustomTabs />} />
          <Route path="/openModal" element={<OpenModal />} />
          <Route path="/githubFinder" element={<GithubFinder />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
