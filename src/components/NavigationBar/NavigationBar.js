import route from "../../router";
import "./navStyle.css";

const NavigationBar = () => {
  const parent = document.createElement("div");
  parent.classList.add("navigationBar");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("navRight");

  const homeButton = menuButton("Home", "Home");
  const menuPageButton = menuButton("Menu", "Menu");
  const aboutButton = menuButton("About", "About");

  buttonContainer.appendChild(homeButton);
  buttonContainer.appendChild(menuPageButton);
  buttonContainer.appendChild(aboutButton);

  parent.appendChild(buttonContainer);
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
