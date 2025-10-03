//Scope chain 

//scope chain is directly related to lexical envt

function a(){
    console.log(b);
}

var b = 10;
a();

//first it tries to find b in local memory space of function A
//if not found , it tries to find outside the funtion
// answer of b is 10
//------------------------------------------------



function a(){
  c();
  function c(){
    console.log(b);
  }
}

var b = 10;
a();
//i can access b

//------------------------------------------------

function a(){
    var b = 10;
  c();
  function c(){
    console.log(b);
  }
}


a();
//can access b
//-------------------------------------

function a(){
    var b = 10;
  c();
  function c(){
    
  }
}


a();
console.log(b);
//prints not defined
//---------------------

//scope - where u  can access specific variable or function in our code


function a(){
    var b = 10;
  c();
  function c(){
    console.log(b);
  }
}
//when ever execution context , lexical envt is also created
//lexical envt is the local memory along with the lexical envt of its parent

//lexical is hierarchy
//c is lexical inside A function
//a is lexically inside gobal scope
//whenever execution  context is created , you also get reference to lexical envt

//global execution
//memory | code
//in memory - you can orange space -- referece to lexical envt of its parent 
//c will get access to lexical envt of its parent A 
//a will get aacess to lexical envt of its parent (Global execution)
//GE will have access to lexical envt of its parent - null

//c will try to find b in c , if not found , then it will find in A , if not found , it wll find
//in global execution context - if its not defined anywhere , it will print not defined
//whole chain of lexical envt - it is called scope chain

//call stack
// c() GEC -  Memory code
           // orange color - referece to lexical envt of A

//a() GEC - Memory  code
            b - 10
            c : {}

//gec mem code
      //a{}
     // null
    




