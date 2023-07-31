export default function Signature(imageSource, supporting) {
  const item = document.createElement("div");
  item.classList.add("signatureItem");

  const image = new Image();
  image.src = imageSource;
  image.classList.add("signatureImage");
  item.appendChild(image);

  //check to make sure page still loads if there is no content
  if (supporting) {
    item.appendChild(supporting);
  }
  return item;
}
