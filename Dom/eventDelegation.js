const grandparent = document.querySelector('.grandparent')
console.log(grandparent);

grandparent.addEventListener('click',(e)=>{
    console.log('hello')
    console.log('target', e.target) // depends where you click such child, parent or grandparent, will give that particular element
    console.log('currentTarget',e.currentTarget)// grandparent because addEventListener is on grandparent 
})

// we don't need to add event on child and parent element
// we can listen the event by adding event on grandparent
// this is event delegation

// In this case, when you click on child, output will ne hello
// In this case, when you click on parent, output will ne hello
// In this case, when you click on grandparent, output will ne hello