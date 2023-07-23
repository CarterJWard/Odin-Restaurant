import NavigationBar from "../components/NavigationBar/NavigationBar";
import ContentContainer from "../components/TextContainer/TextContainer";

const About = () => {
  const parent = document.createElement("div");
  parent.appendChild(NavigationBar());

  const content = document.createElement("content");

  const title = document.createElement("h1");
  title.textContent = "About Us";

  const text = document.createElement("p");
  text.textContent =
    "Established in 1985, Clucky's Homestyle Fried Chicken is a family-owned and operated restaurant situated in the heart of Nashville. Clucky's began with a simple goal - to share our family's time-honored recipes of mouthwatering, home-cooked fried chicken with the community. Our secret recipe, handed down through three generations, has delighted locals and visitors alike for nearly four decades. We pride ourselves on using only the highest quality, locally sourced ingredients in our dishes. From our signature Fried Chicken Bucket to the delectable Chicken Biscuits, each item on our menu is a testament to our commitment to homestyle comfort and flavor. At Clucky's, you're not just our customer, but part of our family. Come in, grab a seat, and get ready to enjoy some of the best fried chicken you've ever tasted!";

  content.appendChild(title);
  content.appendChild(ContentContainer(text));

  parent.appendChild(content);

  return parent;
};

export default About;
