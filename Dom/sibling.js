const list1 = document.querySelector('.list1');

const element1 = list1.nextSibling;
console.log(element1)
//  textNode // because of space


const element2 = list1.nextElementSibling
console.log(element2)
// list2 // because it ignores space