import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./pageStyle.css";
import Signature from "../components/Signature";
import platter from "../assets/images/friedChicken.jpg";
import bucket from "../assets/images/chickenBucket.jpg";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import menu from "../assets/data/menu.json";

const HomePage = () => {
  const screenElement = document.createElement("div");
  const content = document.createElement("content");
  const headerText = document.createElement("h1");
  const subHeading = document.createElement("h2");

  headerText.classList.add("heading");
  headerText.textContent = "Welcome to Clucky's Homestyle Fried Chicken";
  subHeading.textContent = "Signature Items";
  subHeading.classList.add("headingBorder");

  const menuItems = menu.menu;
  const signatures = menuItems.filter((element) =>
    element.hasOwnProperty("description")
  );

  content.appendChild(headerText);
  content.appendChild(subHeading);
  content.appendChild(
    Signature(platter, createSignatureContent(signatures[0]))
  );
  content.appendChild(Signature(bucket, createSignatureContent(signatures[1])));

  screenElement.appendChild(NavigationBar());
  screenElement.appendChild(content);
  return screenElement;
};

const createSignatureContent = (item) => {
  const container = document.createElement("div");
  container.classList.add("signatureContent");
  const heading = document.createElement("h2");
  const description = document.createElement("p");

  heading.textContent = item.name;
  description.textContent = item.description;

  container.appendChild(heading);
  container.appendChild(description);

  return container;
};

export default HomePage;
