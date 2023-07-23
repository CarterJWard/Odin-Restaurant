import "./style.css";
const ContentContainer = (children) => {
  const parent = document.createElement("div");
  parent.classList.add("TextContainer");
  parent.appendChild(children);
  return parent;
};

export default ContentContainer;
