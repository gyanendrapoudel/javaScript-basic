// fill method
// value, start, end
const a1 = new Array(5).fill('1');
console.log(a1);
// (5) ['1', '1', '1', '1', '1']

const a2 = a1.fill(4,3,5);
// value , start , end
console.log(a2)
// (5) ['1', '1', '1', 4, 4]
