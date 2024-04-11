

const list = document.querySelector('ul')

const child = list.childNodes;
console.log(child)
/* NodeList(9) [text, li.list1, text, li.list2, 
 text, li.list3, text, li.list4, text]*/

// it includes  textNode  for free space

const children = list.children;
console.log(children)

/* HTMLCollection(4) [li.list1, li.list2, li.list3, li.list4] 
it only include html element*/
