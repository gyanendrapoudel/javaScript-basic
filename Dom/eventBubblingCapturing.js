// allows select dynamic elements
// dynamic elements means those elements added by JavaScript Code


const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// applying some css using js

grandparent.style.width='50%'
grandparent.style.height = '200px'
grandparent.style.backgroundColor="red"
grandparent.style.display='flex'
grandparent.style.justifyContent = 'center'
grandparent.style.alignItems = 'center'
grandparent.style.gap = '1rem'
grandparent.style.color='white'


parent.style.width = '50%'
parent.style.height = '100px'
parent.style.backgroundColor = 'blue'
parent.style.display = 'flex'
parent.style.justifyContent = 'center'
parent.style.alignItems = 'center'
parent.style.gap = '1rem'

child.style.width = '50%'
child.style.height = '50px'
child.style.backgroundColor = 'green'
child.style.display = 'flex'
child.style.justifyContent = 'center'
child.style.alignItems = 'center'



 
// event bubbling

child.addEventListener('click',()=>{
    console.log('hello from child')
})
parent.addEventListener('click', () => {
  console.log('hello from parent')
})
// when you click on child, both parent and child event fired

grandparent.addEventListener('click', () => {
  console.log('hello from grandparent')
})
// when you click on child, all three child, parent and grandparent event fired
// when you click on parent, both paren and grandparent event fired
//when you click only grandparent, then grandparent event fired

// Note: This because of event bubbling as all three has same event ='click'

 
// event capture, syntax is passing third argument value true 

child.addEventListener('click',()=>{
    console.log('event capture from child')
},true)
parent.addEventListener('click', () => {
  console.log('event capture from parent')
},true)


grandparent.addEventListener('click', () => {
  console.log('event capture from grandparent')
},true)

//capture start from grandparent  to child


//output of this code when you click on child is
/*  ******* */    
/*
event capture from grandparent
event capture from parent
event capture from child
hello from child
hello from parent
hello from grandparent
*/



