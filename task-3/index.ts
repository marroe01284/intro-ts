async function getData() {
  const res = await fetch("https://v2.api.noroff.dev/rainy-days");
  const data = await res.json();
  logProduct(data.data[0]);
}

function logProduct(product) {
  console.log(product.id);
  console.log(product.title);
  console.log(product.description);
  console.log(product.price);
  console.log(product.image);
  console.log(product.tags);
}
getData();
