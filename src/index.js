const App = () => {
  return HomePage();
};
const HomePage = () => {
  let element = document.createElement("h1");
  element.textContent = "Welcome to Glorious Chicken";
  return element;
};

const Menu = () => {
  let element = document.createElement("h1");
  element.textContent = "Menu";
  element;
};

const About = () => {
  let element = document.createElement("h1");
  element.textContent = "About Us2";
  return element;
};

document.body.appendChild(HomePage());
