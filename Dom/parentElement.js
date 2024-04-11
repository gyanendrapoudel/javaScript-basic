const list1 = document.querySelector('.list1')
console.log(list1)

const ul = list1.parentElement;
console.log(ul)
// <ul>  ..all lists.. </ul> , ul is parent of list1

const nav = list1.parentElement.parentElement
console.log(nav)
//<div class="nav-links"> ..ul.. </div> // nav-links is parent of ul

const body = list1.parentElement.parentElement.parentElement
console.log(body) 
//<body>..whole body..</body> // body is parent of nav-links