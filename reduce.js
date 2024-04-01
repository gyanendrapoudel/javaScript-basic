const products = [
    {id:'1', name:'bike',price:200},
    {id:'2', name:'helmet',price:20},
    {id:'3', name:'book',price:100},
    {id:'4', name:'bike2',price:100}
]
const productsPrice = products.reduce((subTotal, product)=>subTotal+product.price,0);
console.log(productsPrice);
// subtotal is variable which inital value is zero, after that each time it value will be sum of
// previous value of subtotal plus current product price
// output : 420
const totalPrice = products.reduce(
  (subTotal, product) => 
  {
   console.log(subTotal);
   return subTotal+product.price;
  }, 0)

  console.log(totalPrice)
// output of subTotal: 0 200 220 320 
// output of totalPrice : 420