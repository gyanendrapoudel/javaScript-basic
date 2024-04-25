class Person{
 #dob
    constructor(obj){
        this.name = obj.name,
        this.add= obj.add
        this.#dob = obj.dob
    }
    bio(){
        return `This is ${this.name} from ${this.add} and I am ${this.getAge()} years old. `
    }
    getAge(){
        return new Date().getFullYear()-new Date(this.#dob).getFullYear()
    }
}
const p1 = new Person({name:'gyanendra', dob:"1992-12-11"})
console.log(p1.dob) //1992-12-11
console.log(p1.getAge()) //32