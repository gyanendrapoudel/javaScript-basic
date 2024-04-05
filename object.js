const people = [
  { id: 1, name: 'Gyanendra', location: 'Hobart' },
  { id: 2, name: 'Harry', location: 'Sydney' },
  { id: 3, name: 'Tom', location: 'Melbourne' },
  { id: 4, name: 'Michael', location: 'US' },
]

const displayInfo =({id, name, location}) =>{
        return `My name is ${name}. I live in ${location}. My id is ${id}`

}
 

people.forEach((person)=>{
    const details =displayInfo(person);
    console.log(details)
})
