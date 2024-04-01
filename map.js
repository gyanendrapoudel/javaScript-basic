const names = ['Gyanendra', 'Joe', 'Thomas', 'David']

const newNames = names.map((name,index)=>{
    return name.toUpperCase()
})
console.log(newNames)
//  ['GYANENDRA', 'JOE', 'THOMAS', 'DAVID']

const names2 = names.map((name,index)=>{
    if(name.includes('yan')){
        return name
    }
})
console.log(names2)

// output: ['Gyanendra', undefined, undefined, undefined]
// that why we use filter to filter any item for array
//because filter does not return undefined if condition does not match