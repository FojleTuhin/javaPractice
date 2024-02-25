/*
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}

let str = "Mississippi";
console.log(str.indexOf("i", 3));

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };

  for (let prop in myObject) {
    console.log(myObject[prop]);
  }

  const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}*/

/*
const str = "Hello";
str[0] = "h";
console.log(str);*/

/*
var tahaAche=1000;
var appleOrange=700;
var result=tahaAche-appleOrange;
console.log(result)


var Mathematics=75.25;
var Biology=65;
var english=80;
var chemistry=35.45;
var physics=99.50;
var total= Biology+english+chemistry+physics+Mathematics;

var avg= total/5;
console.log(avg.toFixed(2));*/

// var a = isNaN(11);

// var a = isNaN(2-10);

// console.log(a)

/*for (var i = 0; i < 5; i++) {
  setTimeout(function () {
   console.log(i);
  }, 100);
} */

/*
const zoo={
  name:'zoo',
  age:2,
  color:"yellow"
}

const animal=Object.keys(zoo)
console.log(animal);

for(const zo of animal){
  console.log(zo)
}
*/


class bus{
  constructor(name, age){
    this.name=name;
    this.age=age;
  }
}





class truck extends bus{
  constructor(name, age, seat, color){
    super(name,age)
    this.seat=seat;
    this.color=color;
  }
}


const hanifBus=new truck(`tuhin`,23,5,`red`);
// console.log(typeof hanifBus)


function min(nums) { 
  return Math.min(nums) 
}
// console.log(min( [1,3,2 ]));

const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);

let p='Javascript'; 
let q=p; 
p='React'; 
// console.log(q);

const isTrue=true;
// console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
  p + q;
 }
 const result = sum(2, 3);
//  console.log(result);

if ("2" === 2) {
  // console.log("Inside if");
 } else {
  // console.log("Inside else");
 }


 function work(x, y = 4) {
  return x + y;
 }
//  console.log(work(32);

function setTime(){
  let date=new Date();
  let hour= date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
  let time= hour + ":"+ minutes+":"+seconds
 

  setInterval(setTime,100)
}

setTime();