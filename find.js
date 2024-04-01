const products = [
  { id: '1', name: 'bike', price: 200 },
  { id: '2', name: 'helmet', price: 20 },
  { id: '3', name: 'book', price: 100 },
  { id: '4', name: 'bike2', price: 100 },
]

const p1 = products.find(product=>product.price===200);
console.log(p1)
// {id: '1', name: 'bike', price: 200}