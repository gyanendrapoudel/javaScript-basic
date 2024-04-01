const names = ['Gyanendra', 'Joe', 'Thomas', 'David']
 
const myName = names.filter((name,index)=> name.includes('yan'));
console.log(myName)
// output : ['Gyanendra']