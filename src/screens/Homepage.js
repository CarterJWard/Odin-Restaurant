import Menu from "../components/Menu";

const HomePage = () => {
  let screenElement = document.createElement("div");

  let headerText = document.createElement("h1");
  headerText.textContent = "Homepage";

  screenElement.appendChild(Menu());
  screenElement.appendChild(headerText);
  return screenElement;
};

export default HomePage;
