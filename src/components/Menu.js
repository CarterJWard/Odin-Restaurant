const Menu = () => {
  let parent = document.createElement("div");
  parent.classList.add("NavigationBar");
  let button1 = document.createElement("button");
  button1.textContent = "Test Button";
  parent.appendChild(button1);
  return parent;
};

export default Menu;