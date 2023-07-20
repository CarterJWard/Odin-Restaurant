import route from "../../router";
import "./navStyle.css";
import chicken from "../../assets/images/chicken.png";

const NavigationBar = () => {
  const parent = document.createElement("div");
  parent.classList.add("navigationBar");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("navRight");

  const homeButton = menuButton("Home", "Home");
  const menuPageButton = menuButton("Menu", "Menu");
  const aboutButton = menuButton("About", "About");

  const image = new Image();
  image.src = chicken;
  image.height = 50;
  image.width = 50;

  buttonContainer.appendChild(homeButton);
  buttonContainer.appendChild(menuPageButton);
  buttonContainer.appendChild(aboutButton);

  parent.appendChild(image);
  parent.appendChild(buttonContainer);
  return parent;
};

const menuButton = (buttonText, routePath) => {
  const button = document.createElement("div");
  button.classList.add("navButton");

  const link = document.createElement("a");
  link.text = buttonText;
  link.addEventListener("click", () => {
    route(routePath);
  });
  button.appendChild(link);
  button.onclick = () => {
    route(routePath);
  };
  return button;
};

export default NavigationBar;
