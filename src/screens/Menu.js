import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./pageStyle.css";
import menuItems from "../assets/data/menu.json";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  let parent = document.createElement("div");
  let content = document.createElement("content");

  parent.appendChild(NavigationBar());

  let title = document.createElement("h1");
  title.textContent = "Menu";

  content.appendChild(title);
  parent.appendChild(content);
  createMenuItems(parent);
  return parent;
};

const createMenuItems = (div) => {
  menuItems.menu.forEach((item) => {
    div.appendChild(MenuItem(item));
  });
};

export default Menu;
