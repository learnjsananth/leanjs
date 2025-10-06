//Block scope
//let and const are block scope
/*
{
   block
}
*/
//compound satetement and combined multiple lines of code into a group
//we can use multiple statements in a place where js expects only 1 statement 
//the entire block is treated as one single statement 
let someCondition = true;

if (someCondition) {
  // This code block runs if the condition is true
  console.log("The condition is true.");
} else {
  // This code block runs if the condition is false
  console.log("The condition is false.");
}


//what all variables and functions we can access within scope
{
    var a=10;
    let b=20;
    const c=10;
}
//console.log(b) -ReferenceError: b is not defined
//console.log(c) -ReferenceError: b is not defined
console.log(a)//10
//outside this block b and c cannot be accessed
//outside block a can be accessed

//shadowing in js
var a=10
{
    var a=15;
    let b =20;
    const c=30;
}

console.log(a) //15 - a is 15 shadows a=10 , modifies the value of a as both are pointing to same 
//memory location

let b =20
{
    let b =10 ; 
    console.log(b)  /10
}
console.log(b) //20
//both are different memory location


let b1 =100;
{
    var  a1=10;
    let b1=20;
    const c1=30
    console.log(a1) //10
    console.log(b1) //20
     console.log(c1) //30
}
console.log(b1) //100



const b2 =100;
{
    var  a2=10;
    let b2=20;
    const c2=30
    console.log(a2) //10
    console.log(b2) //20
     console.log(c2) //30
}
console.log(b2) //100


//even in function , shadowing behaves in same way

const c3=100;
function x(){
    const c3=20;
    console.log(c3)//20
}
x();
console.log(c3) //100


//illegal shadowing
/*let a =20
{
    var a =10
}*/
/*
Here's a breakdown of why this happens:
let is block-scoped: The variable a declared with let exists only within its block, 
in this case, the global scope (outside any function). 
It cannot be re-declared in the same scope.
var is function-scoped (or globally-scoped): 
The var declaration inside the block {...} is not limited to that block. 
Instead, it is hoisted (its declaration is moved) to the top of its enclosing 
function or, in this case, the top of the global scope.
The conflict: Because of hoisting, the var a=10; declaration is treated as 
if it exists in the global scope alongside the let a=5; declaration. You cannot declare the same variable twice in the same scope using both let and var. 
*/

//legal shadowing
/*var a =20
{
    let a =10
}*/
/*

//legal shadowing
/*let a =20
{
    let a =10
}*/


/*let a =20
function x(){
var a=20;
}
*/

const e=20
{
    const e=10
    {
         const e=200
    }
    console.log(e) //10
}
console.log(e)//20