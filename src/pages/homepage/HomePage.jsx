import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  return (
    <div id="home">
      <h1>25 Mini React Projects</h1>
      <div className="projects">
        <Link to="/accordion">Accordion</Link>
      </div>
    </div>
  );
};

export default HomePage;
