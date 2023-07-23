const MenuItem = (item) => {
  const row = document.createElement("tr");
  const itemName = document.createElement("td");
  const price = document.createElement("td");

  itemName.textContent = item.name;
  price.textContent = item.price;

  row.appendChild(itemName);
  row.appendChild(price);

  return row;
};

export default MenuItem;
