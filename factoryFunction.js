function aboutPerson(n,a){
    return{
        name:n,
        add:a,
        bio(){
            return `Hey, this is ${this.name}. I live in ${this.add}`
        }
    }
}
// this function is like factory, can create as many person as you want


const gyan = aboutPerson('Gyanendra','Sydney')
console.log(gyan.bio())

// Hey, this is Gyanendra. I live in Sydney


const david = aboutPerson('David', 'Melbourne')
console.log(david.bio())
// Hey, this is David. I live in Melbourne