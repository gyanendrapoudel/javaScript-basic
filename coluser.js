function f(){
    let counter =0
    return function(){
        return counter++;
    }
}
const f1 = f();

console.log(f1)
/*  Output is: 
function(){
  return counter++;
    }
*/

console.log(f1());
// Output is: 0


/*
Counter variable supposed to be remove from the execution context after invoking f()/ line number 7,
However it is still available for function f1// line number 16. This is called closure. So returning function creates
a closure of counter, which is accessible when it is executing.
*/