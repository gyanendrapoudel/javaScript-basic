// finding index of array
const names = ['Gyanendra', 'Jones', 'David', 'Kane']
console.log(names.indexOf('Gyanendra'));
// output 0 


// finding index of array of objects
const users =[{name:'Gyanendra',age:'30',ph:'00000'},
{ name:'David',age:'32',ph:'11111'},
{ name:'Kane',age:'23', ph:'22222'},]

const user = users.find((u)=>u.age==='32')
console.log('user', user)
// { name:'David',age:'32',ph:'11111'},

const index = users.indexOf(user);
console.log(index) 
//1

// if element is not present it will return -1
