import About from "./screens/About";
import HomePage from "./screens/Homepage";

const routePage = (selectedPage) => {
  document.body.innerHTML = "";
  let page;
  switch (selectedPage) {
    case "Home":
      page = HomePage();
      break;
    case "About":
      page = About();
      console.log(page);
      break;
    default:
      page = HomePage();
      break;
  }
  document.body.appendChild(page);
};

export default routePage;
