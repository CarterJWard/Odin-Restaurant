import "./style.css";
const TextContainer = (text) => {
  const parent = document.createElement("div");
  parent.classList.add("TextContainer");
  parent.textContent = text;
  return parent;
};

export default TextContainer;
