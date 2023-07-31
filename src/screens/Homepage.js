import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./pageStyle.css";
import Signature from "../components/Signature";
import platter from "../assets/images/friedChicken.jpg";
import bucket from "../assets/images/chickenBucket.jpg";
import ContentContainer from "../components/ContentContainer/ContentContainer";

const HomePage = () => {
  const screenElement = document.createElement("div");
  const content = document.createElement("content");
  const headerText = document.createElement("h1");
  const subHeading = document.createElement("h2");

  headerText.classList.add("heading");
  headerText.textContent = "Welcome to Clucky's Homestyle Fried Chicken";
  subHeading.textContent = "Signature Items";

  content.appendChild(headerText);
  content.appendChild(subHeading);
  content.appendChild(Signature(platter, createSignature()));
  content.appendChild(Signature(bucket, createSignature()));

  screenElement.appendChild(NavigationBar());
  screenElement.appendChild(content);
  return screenElement;
};

const createSignature = () => {
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const description = document.createElement("p");

  heading.textContent = "Title";
  description.textContent = "this is some yummy chicken";

  container.appendChild(heading);
  container.appendChild(description);

  return container;
};

export default HomePage;
