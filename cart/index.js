let cartArray = [
    {id: 1, quantity: 1, price: 49.99},
    {id: 2, quantity: 1, price: 49.99},
    {id: 3, quantity: 1, price: 49.99},
];
function addToCartArray(id){
let changed = false;
    cartArray= cartArray.map((item)=>{
        if(item.id === id){
                    item.quantity++;
                }
                return item;
    });
    if (changed === false){
        cartArray.push({id, quantity:1});
    }

}
// addToCartArray(1);
// console.log(cartArray);
function removeFromCartArray(id){

    cartArray= cartArray.map((item)=>{
        if(item.id === id){
                    item.quantity--
                    return item;
                }
            });
            filter((item)=> item.quantity > 0);
    }

    //get the sum of one item in the array
function getSumOfArray(){
    let sum = 0;
    for(const product of cartArray){
        return (sum += product.price * product.quantity);
    }
    // two ways of doing it 
    // return cartArray.reduce((total, item)=> total + (item.price * item.quantity), 0);

}
// log out one item

console.log(getSumOfArray());







const cartObject = {
    1:{quantity: 1, price: 10.99},
    2:{quantity: 1, price: 10.99},
    3:{quantity: 1, price: 10.99},
    key: 2,
}

function addToCartObject(id){
    if(cartObject[id]){
        cartObject[id].quantity++;
    }else {
        cartObject[id] = {quantity: 1};
    }
}

function removeFromCartObj(id){
    if (cartObject[id]){
        cartObject[id].quantity--;
        if(cartObject[id].quantity ===0){
            delete cartObject[id];
        }
    } 
}

function getSumOfObject(){
    let sum = 0;
   for(const key in cartObject){
    sum += cartObject[key].price * cartObject[key].quantity;
   }
   return sum;
}

// log out one item 

console.log(getSumOfObject(1));