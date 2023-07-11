import route from "../router";
import "./menuStyles.css";

const Menu = () => {
  let parent = document.createElement("div");
  parent.classList.add("navigationBar");

  let homeButton = menuButton("Home");
  let menuPageButton = menuButton("Menu");
  let aboutButton = menuButton("About");

  aboutButton.onclick = () => {
    route("About");
  };

  parent.appendChild(homeButton);
  parent.appendChild(menuPageButton);
  parent.appendChild(aboutButton);
  return parent;
};

const menuButton = (buttonText) => {
  let button = document.createElement("button");
  button.textContent = buttonText;
  button.onclick = () => {
    console.log(`${buttonText} button clicked`);
  };
  return button;
};

export default Menu;
