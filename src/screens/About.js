import NavigationBar from "../components/NavigationBar";

const About = () => {
  let parent = document.createElement("div");
  parent.appendChild(NavigationBar());

  let title = document.createElement("h1");
  title.textContent = "About Us";
  parent.appendChild(title);

  return parent;
};

export default About;
