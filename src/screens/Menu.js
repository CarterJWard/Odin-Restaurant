import NavigationBar from "../components/NavigationBar";

const Menu = () => {
  let parent = document.createElement("div");

  parent.appendChild(NavigationBar());

  let title = document.createElement("h1");
  title.textContent = "Menu";

  parent.appendChild(title);

  return parent;
};

export default Menu;
