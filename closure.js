/*function x(){
    var a=7;
    function y(){
        console.log(a)
    }
     y();
}
x(); //prints 7

*/

//A function bind together by its lexical envt/scope
// function along with its lexical scope

/*
function a(){
    a2=3;
    var a1= function b(){
        console.log(a2)
    };
   
    a1();
}
a();
*/  //returns 3

/*

function a(){
   
    var a1= function b(){
        console.log(a2)
    };
   
    a1(); //a2 is not defined
    // b() - b is not defined
}
a();

*/


//you can pass function as a parameter
/*
function c(){
    var c1=7
   
    b();
}
d( function b(){
        console.log(a2)
    });
    */

    /*
function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    return y;
}
var z=x();
console.log(z)  //returns function y
z(); //7
*/


/*
function x(){
    var a=7;
    return function y(){
        console.log(a)
    }
   
}
var z=x();
console.log(z)  //returns function y
z(); //7
*/
/*

function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    a=100;
    return y;
   
}
var z=x();
console.log(z)  //returns function y
z(); 100

*/

/*
function z(){
   var b=900;
   function x(){
    var a=7;
    function y(){
        console.log(a,b)
    }
   y();
   
}
 x();
}


z();


*/

/*
function z(){
   var b=900;
   function x(){
    var a=7;
    function y(){
        console.log(a,b)
    }
   return y;
   
}
 return x;
}


z()()(); //7 , 900

var z1 = z();
console.log(z1) //[Function: x]

*/
/*
uses of closure
  module desig pattern
  currying
  function like once
  memoize
  maitaining state in async world
  settimeouts
  iterators
  */