const About = (pageChanger) => {
  let element = document.createElement("h1");
  element.textContent = "About Us2";
  let button = document.createElement("button");
  button.textContent = "click me";
  element.appendChild(button);
  return element;
};

export default About;
