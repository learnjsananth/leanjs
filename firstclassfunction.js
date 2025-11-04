//first class fuctions
a()
//functio statement
function a(){
console.log("a called")
}


//function expression
//function acts like a value

//b() - calling b here says b is not a function
var b=function(){
    console.log("b called")
}
b() //print b called

//the difference between function statement and function expression is hoisting

//if i want to call function A before even creating it  , a() will not throw error
//b() will throw error - undefined

//during the memory creation phase , a is created a memory ad this function is assigned to A
//b is treated like any other variable -assigned undefined

//function statement and fuctio declaration are same


//Anoymous function - dpesnot have own identity
/*
 function () { //invalid syntax - fn statement require fn name
 }


*/
//Anonymous fuctions are used in a place where function are used as values

//named fn expression
var c=function xyz(){
console.log(xyz) //calling xyz
}
//xyz cannt be called in outer scope - they can be called locally

//xyz() will get error

//parameters and args

var d=function(param1 , param2){
    console.log(param1,param2)
}
d(2,5)  //this is args 
//function that gets those values - are parameters

//first class functions
//passing another function inside a function

var e=function (param1){
    console.log(param1)
}

e(function (){

});

var f=function (param1){
    console.log(param1)
}

function xyz(){

}
f(xyz)

//return a function from a function
var g=function (param1){
    return function (){

    }
}
console.log("************")
console.log(g()) //returns a aaoymous function

//first class functions

//the ability to use functions as values is known as first class functions
//passing function as args
//returning funtion 

//arrow functions
