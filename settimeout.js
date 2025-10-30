//set time out

/*
function x(){
    var i=1;
    setTimeout(function(){
      console.log(i)
    },3000)
}
x();
//prints i after 3 sec

*/

/*
function x(){
    var i=1;
    setTimeout(function(){
      console.log(i)
    },3000)
    console.log("namaste javascript")
}
x();
*/


function x(){
    var i=1;
    for(var i=1 ; i <=5 ; i++ ){
    setTimeout(function(){
      console.log(i)
    },3000)
}
    console.log("namaste javascript")
}
x();
//prints first namaste javascript
//then waits for 3 sec and then prints the value of i
//the function forms a closure . this function forms a reference to and where ever the function
//goes it takes the reference of i along with it
//set time out takes this call back functio and stores it into some place and attaches a 
//timer to it and the javascript proceeds . it goes to the next line and executes . once 
//the 3000 ms expires , it takes the call back function and put it in call stack ad executes


//because of closure - closure is like function along with its lexical scope
//when function is taken out from its original scope , still it remembers it lexical envt
//when this set time out takes this function and stores it somewhere and attaches a timer
//the function remembers the reference to i and not the value of i
//when the loop runs the first time , it makes a copy of function and attaches a timer and also remembers
//the reference to i and similarly the 5 copies of functio all are pointing
//to same reference to i

//first function was alloted i 1
//second fun was alloted i 2 


//5th fun was alloted i 5
//now the first fun will increment i 2
//second fun will increment i 3
//5th fun will increment i to 6

//so after the timer expires , the value of i is 6
//when the call back function runs the value of i is 6

//after 1 sec - 6
//after 2 sec - 6

//after 5 sec - 6

//the easiest way to fix is instead of var , use let as it is block scope
//for each iteration , it is a new copy of i altogether
//first iteration - i is 1
//second i is 2



function x(){
    var i=1;
    for(var i=1 ; i <=5 ; i++ ){
     function close(x){
        setTimeout(function(){
        console.log(x)
        },3000)
    }
    close(i)
}
    console.log("namaste javascript")
}
x();
.//this will print 1 , 2 ,3 , 4 ,5
//it remembers a new copy of x everytime close function is called