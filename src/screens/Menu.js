import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./pageStyle.css";

const Menu = () => {
  let parent = document.createElement("div");
  let content = document.createElement("content");

  parent.appendChild(NavigationBar());

  let title = document.createElement("h1");
  title.textContent = "Menu";

  content.appendChild(title);
  parent.appendChild(content);

  return parent;
};

export default Menu;
