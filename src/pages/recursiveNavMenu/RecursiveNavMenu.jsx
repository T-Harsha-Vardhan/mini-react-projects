import menus from "./menu-data";
import MenuList from "./MenuList";
import "./recursiveNavMenu.css";

const RecursiveNavMenu = () => {
  console.log(menus);
  return (
    <div id="recursive-nav-menu">
      <div className="wrapper">
        <MenuList list={menus} />
      </div>
    </div>
  );
};

export default RecursiveNavMenu;
