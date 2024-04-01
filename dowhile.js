const names = ['Hari', 'Sam', 'Joe']
let i=0;
do{
console.log(names[i]);
i++
}while(i<names.length)
// output > Hari Sam Joe

let j = names.length
do {
  console.log(names[j])
  console.log('hello world')
  j++
} while (j < names.length)
// out put > undefined // hello world

// do while loop runs at least once even the condition does not match