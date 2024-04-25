function AboutPerson(name,add){
    this.name=name
    this.add=add
}


const gyan =  new AboutPerson('Gyanendra','Sydney')
console.log(gyan)

/* AboutPerson {
    "name": "Gyanendra",
    "add": "Sydney"
}
*/
const david =  new AboutPerson('David', 'Melbourne')

AboutPerson.prototype.bio = function(){
    return `Hey, this is ${this.name}. I live in ${this.add}`
}
console.log(david)

console.log(gyan.bio())
// Hey, this is Gyanendra. I live in Sydney
console.log(david.bio())
// Hey, this is David. I live in Melbourne


// we use less this kind of programming
