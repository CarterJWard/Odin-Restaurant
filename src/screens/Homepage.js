import NavigationBar from "../components/NavigationBar";

const HomePage = () => {
  let screenElement = document.createElement("div");

  let headerText = document.createElement("h1");
  headerText.textContent = "Homepage";

  screenElement.appendChild(NavigationBar());
  screenElement.appendChild(headerText);
  return screenElement;
};

export default HomePage;
