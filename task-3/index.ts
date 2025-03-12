// add type to define 
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {url:string, alt:string};
  tags:string[];
}
async function getData() {
  const res = await fetch("https://v2.api.noroff.dev/rainy-days");
  const data: {data: Product[]} = await res.json();
  logProduct(data.data[0]);
}

function logProduct(product: Product) {
  console.log(product.id);
  console.log(product.title);
  console.log(product.description);
  console.log(product.price);
  console.log(product.image);
  console.log(product.tags);
}
getData();
