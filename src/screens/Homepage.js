import Menu from "../components/Menu";
const HomePage = () => {
  let screenElement = document.createElement("div");
  let element = document.createElement("h1");
  element.textContent = "Welcome to Glorious Chickens";
  screenElement.appendChild(Menu());
  screenElement.appendChild(element);
  return screenElement;
};

export default HomePage;
