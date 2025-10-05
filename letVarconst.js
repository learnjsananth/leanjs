// let , var and const


console.log(b) //ReferenceError: Cannot access 'a' before initialization
let a = 10
var b=20
//memory of b is attached to global object
//in case of let ad const - they are stored in a different memory space than global
//you cannot access these memory space before you have put in value in them

let c = 10
console.log(c) //10


let d=10;
console.log(d)
//temporal dead zone - d is hoisted in a seperate memory space and was assigned the value
//undefined but not being initialize yet - this is called temporal dead zone - util it goes and
//gets the value 10 - until that time - it is temporal dead zone - it gives reference error
//cannot access d before initialization

//console.log(x) - no where defined in the prog - uncaught referece error - x is not defined

//undefined 
//console.log(e)
//var e=10
//memory was alloted to e in global execution context but not defined
//e is attached to window object
//window.e  10

//let variables are not attached to  window object
//window.d  //undefined
//window - global object - this.e 

//console.log("zzzz")
//let f = 10 ;
//let f = 10 ;
//syntax error - f has already been defined
//it doesnt reach a single line of code - it rejects it upfront

//let a ;
//a = 20;
//you can do this 

// but in const , it is not possible

//const b=1000;
//b=2000;
//type error


//console.log("zzzz")
//let f = 10 ;
//var f = 10 ;
//syntax error - f has already been defined
//it doesnt reach a single line of code - it rejects it upfront


//var g = 10
//var g = 10 , it is not strict , you can declare it again

//syntax error , reference error and type error

//type error - assig// assignment to const variable
//const b=200;
//b=400;

//syntax error missing initializer in const declaration - const b;

//Another syntax error - a has already been declared
//let a =200
//let a=400

//referece error 
console.log(a)
//let a  200
//cannot access a before initialization

//console.log(z) - not defined anywhere - ref error

//const - prefer 1
// let - pref 2
//var - keep var aside

//put your declarations on the top


