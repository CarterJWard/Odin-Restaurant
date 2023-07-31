import menuItems from "../assets/data/menu.json";
import MenuItem from "../components/MenuItem";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "./pageStyle.css";

const Menu = () => {
  const parent = document.createElement("div");
  const content = document.createElement("content");

  parent.appendChild(NavigationBar());

  const title = document.createElement("h1");
  title.textContent = "Menu";

  content.appendChild(title);
  parent.appendChild(content);
  content.appendChild(ContentContainer(createMenuItems()));
  return parent;
};

const createMenuItems = () => {
  const menuList = document.createElement("table");
  menuItems.menu.forEach((item) => {
    menuList.appendChild(MenuItem(item));
  });
  return menuList;
};

export default Menu;
