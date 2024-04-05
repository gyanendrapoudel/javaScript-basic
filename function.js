// JS-function
function sayHi(){
    const str = "Hi"
    console.log(str);
}
sayHi();

function withDefaultValue(name, sureName="Morgan"){
    console.log(name , sureName);
}
withDefaultValue("David");
// David Morgan

withDefaultValue("David","White")
// David White