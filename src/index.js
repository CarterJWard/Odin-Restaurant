const HomePage = () => {
  let element = document.createElement("h1");
  element.textContent = "Hello boomers";
  return element;
};

document.body.appendChild(HomePage());
