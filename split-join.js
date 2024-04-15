const names = ['Gyanendra', 'Jones', 'David', 'Kane']

// Join will convert array to string
newNames1=names.join(' ');
console.log(newNames1, ' //type:', typeof newNames1)
// output Gyanendra Jones David Kane  // type: string

// split will convert string to array

newNames2= newNames1.split(' ')
console.log(newNames2)
// ['Gyanendra', 'Jones', 'David', 'Kane']

const string = 'Hi,I am Gyanendra'
console.log(string.split('I'))
//['Hi,',' am Gyanendra' ]
console.log(string.split('am'))
//['Hi,I ',' Gyanendra']
