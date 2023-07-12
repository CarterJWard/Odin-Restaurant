import route from "../router";
import "./navStyle.css";

const NavigationBar = () => {
  let parent = document.createElement("div");
  parent.classList.add("navigationBar");

  let homeButton = menuButton("Home", "Home");
  let menuPageButton = menuButton("Menu", "Menu");
  let aboutButton = menuButton("About", "About");

  parent.appendChild(homeButton);
  parent.appendChild(menuPageButton);
  parent.appendChild(aboutButton);
  return parent;
};

const menuButton = (buttonText, routePath) => {
  let button = document.createElement("button");
  button.textContent = buttonText;
  button.onclick = () => {
    route(routePath);
  };
  return button;
};

export default NavigationBar;
