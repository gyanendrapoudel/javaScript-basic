const names = ['Gyanendra', 'Jones','David',"Kane"]

// length > number of element in the array
const l = names.length;
console.log(l) 
// 4

// toLowerCase > converts all element to lower case
let name = 'Gyanendra';
let lowerCaseName = name.toLowerCase();
console.log(lowerCaseName) // output is gyanendra

// toUpperCase > converts all element to upper case
let upperCaseName = name.toUpperCase();
console.log(upperCaseName) // output is GYANENDRA

// In js string are immutable, once it is created we can't change.
// Even we change the value of name by converting into lower or upper case
// ,but its original value does not change . The value of name is still 'Gyanendra'


// To convert in to lowercase for array
console.log('To convert in to lowercase for array')
names.forEach((name)=>{
   let lowerCaseName =name.toLowerCase()
   console.log(lowerCaseName)  
})
// output is gyanendra jones david kane

console.log(names) 
// output is :  ['Gyanendra', 'Jones','David',"Kane"]