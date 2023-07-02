const HomePage = () => {
  let element = document.createElement("h1");
  element.textContent = "Hello Worlds";
  return element;
};

document.body.appendChild(HomePage());
