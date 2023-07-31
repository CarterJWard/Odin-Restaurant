import "./style.css";
const ContentContainer = (children) => {
  const parent = document.createElement("div");
  parent.classList.add("TextContainer");
  if (children) {
    parent.appendChild(children);
  }

  return parent;
};

export default ContentContainer;
