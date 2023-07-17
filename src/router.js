import About from "./screens/About";
import HomePage from "./screens/Homepage";
import Menu from "./screens/Menu";

const routePage = (selectedPage) => {
  document.body.innerHTML = null;
  let page;
  switch (selectedPage) {
    case "Home":
      page = HomePage();
      break;
    case "About":
      page = About();
      break;
    case "Menu":
      page = Menu();
      break;
    default:
      page = HomePage();
      break;
  }
  document.body.appendChild(page);
};

export default routePage;
