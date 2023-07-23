import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./pageStyle.css";

const HomePage = () => {
  let screenElement = document.createElement("div");
  let content = document.createElement("content");
  let headerText = document.createElement("h1");

  headerText.classList.add("heading");
  headerText.textContent = "Welcome to Clucky's Homestyle Fried Chicken";
  content.appendChild(headerText);

  screenElement.appendChild(NavigationBar());
  screenElement.appendChild(content);
  return screenElement;
};

export default HomePage;
