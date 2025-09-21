getName();
console.log(x);
console.log(getName);  //this prints the whole function
console.log(getName1());  // not a function
console.log(getName1) //undefined

var x=7;

function getName(){
    console.log("namaste javascript");
}

//getName  prints namaste javascript
//x prints undefined
//if x=7 is commented , then x prints notdefined
//console.log(getName);//this prints the whole function

//Even before the first line is executed ,eecution context is created
//x = undefined
//for getName = whole function is present

//Not defined and undefined
// x=7 is commented and not present , this will print not defined
//x is no where initialized in the program


//When getName is arrow function
var getName1=()=>{
    console.log("namaste javascript");
}
//incase of arrow function - it behaves like another variable

