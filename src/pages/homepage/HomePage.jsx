import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  return (
    <div id="home">
      <h1>25 Mini React Projects</h1>
      <div className="projects">
        <Link to="/accordion">Accordion</Link>
        <Link to="/starRating">Star Rating</Link>
        <Link to="/imageSlider">Image Slider</Link>
        <Link to="/loadMore">Load More</Link>
        <Link to="/recursiveNavMenu">Recursive Nav Menu</Link>
        <Link to="/qrCodeGenerator">QR Code Generator</Link>
        <Link to="/themeChanger">Theme Changer</Link>
        <Link to="/scrollIndicator">Scroll Indicator</Link>
        <Link to="/customTabs">Custom Tabs</Link>
        <Link to="/openModal">Open Modal</Link>
        <Link to="/githubFinder">Github Finder</Link>
      </div>
    </div>
  );
};

export default HomePage;
