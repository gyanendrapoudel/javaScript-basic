const products = [
  { id: '1', name: 'bike', price: 200 },
  { id: '2', name: 'helmet', price: 20 },
  { id: '3', name: 'book', price: 100 },
  { id: '4', name: 'bike2', price: 100 },
]

const boolean1 = products.every((product)=>product.price<300);
console.log(boolean1);
// output : true

const boolean2 = products.every((product)=>product.price<150);
console.log(boolean2);
// output : false > because only one price is greater than 150