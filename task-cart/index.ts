interface Cart {
  id: number;
  quantity: number;
}

let cart: Cart[] = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 },
  { id: 3, quantity: 4 },
];

//function to cange the Quantaty
function addToCart(id: number) {
  //add the quantity to the cart
  let changed = false;
  cart = cart.map((item) => {
    if (item.id === id) {
      item.quantity++;
      return item;
    } 
    });
    if (changed === false) {
        cart.push({id, quantity:1});
    }
}
addToCart(1);
function removeFromCart(id: number) {
    cart = cart.map((item) => {
        if (item.id === id) {
          item.quantity--;
        }
        return item;
      });
      cart = cart.filter((item) => item.quantity > 0);
}
removeFromCart(2);
