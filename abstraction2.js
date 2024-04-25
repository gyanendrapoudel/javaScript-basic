class Living{
    constructor(name,add){
        this.name=name,
        this.add = add
    }
}

class Person extends Living{
    constructor(obj){
        super(obj.name, obj.add)
        this.career = obj.career
    }
    
}

const gyan = new Person({name:'Gyanendra', add:'Hobart', career:'Soft Developer'});
console.log(gyan)

// Person {name: 'Gyanendra', add: 'Hobart', career: 'Soft Developer'}
// add: "Hobart"
// career: "Soft Developer"
// name : "Gyanendra"
// [[Prototype]] : Living 

const cat = new Living('Puppy', "Sydney")
console.log(cat)
// Living {name: 'Puppy', add: 'Sydney'}
//[Prototype]] : Object



// making living1 class abstract class

class Living1 {
  constructor(name, add) {
    (this.name = name),
     (this.add = add)
     if (this.constructor == Living1) {
       throw new Error("Abstract classes can't be instantiated.")
     }
  }
  
}
class Person1 extends Living1 {
  constructor(obj) {
    super(obj.name, obj.add)
    this.career = obj.career
  }
 
}

const gyan1 = new Person1({
  name: 'Gyanendra',
  add: 'Hobart',
  career: 'Soft Developer',
})
console.log(gyan)
// same output

const cat1 = new Living1('Puppy', 'Sydney')
console.log(cat1)

// abstraction2.js:39 Uncaught Error: Abstract classes can't be instantiated
//  at new Living1