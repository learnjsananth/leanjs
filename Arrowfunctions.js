//Arrow function

const square= (num)=>num*num;
const result = square(5);
console.log(result)  //25

const msg=()=> "hello js"
console.log(msg())


const add=(a,b)=>a+b;
const result1=add(3,4)
console.log(result1)



const fullname=(person)=>`${person.firstname} ${person.lastname}`

const person ={
    firstname:"ananth",
    lastname:"kumar",
}
const result2=fullname(person)
console.log(result2)

const greet = (username='guest' , age=0)=>`Hello ${username} you are ${age} years old`
const g1= greet();
console.log(g1)


const g2= greet('Tom',30);
console.log(g2)


//arrow functios with rest parameters
// 3 dots ...
const sum=(...numbers)=>numbers.reduce((acc,num)=>acc+num,0);
const total=sum(1,2,3,4,5);
console.log(total)


const sum1 = (...numbers1) => {
    return numbers1.reduce((acc, num) => {
        return acc + num; 
    }, 0);
};
const total1=sum1(1,2,3,4,5);
console.log(total1)

const sum2=(...numbers)=>{
   return numbers.reduce((acc,num)=>{
        return acc+num;
    },0)
}

const total3=sum2(1,2,3,4)
console.log(total3)

const browserInfo=(browser='chrome',...details)=>{
    console.log(`${browser}` , details)
}

browserInfo(); //chrome []
browserInfo('firefox',115.1,'mozilla','headless'); //firefox [ 115.1, 'mozilla', 'headless' ]


//max no
const maxno=(a,b,c)=>{
    return Math.max(a,b,c);
}
const maxVal=maxno(4,3,1)
console.log(maxVal)

