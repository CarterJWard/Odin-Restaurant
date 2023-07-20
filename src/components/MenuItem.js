const MenuItem = (item) => {
  const element = document.createElement("p");
  element.textContent = item.name;
  return element;
};

export default MenuItem;
