import NavigationBar from "../components/NavigationBar/NavigationBar";
import ContentContainer from "../components/TextContainer/TextContainer";

const About = () => {
  const parent = document.createElement("div");
  parent.appendChild(NavigationBar());

  const content = document.createElement("content");

  const title = document.createElement("h1");
  title.textContent = "About Us";

  const text = document.createElement("p");
  text.textContent =
    "Glorious Chicken, <br/> We have been making our own chicken for the last 20 years";

  content.appendChild(title);
  content.appendChild(ContentContainer(text));

  parent.appendChild(content);

  return parent;
};

export default About;
