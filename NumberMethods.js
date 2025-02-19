//number declaration
let a=5; //method1
let b=new Number(10); //method2
let x=1; //integer value
let y=2.3 //decimal value
let z=5e2; //exponential value
console.log(x,y,z);
//is integer
console.log(Number.isInteger(a)); //checks the number is integer or not
//to fixed
let num = 2.5697;
console.log(num.toFixed(2)); 
//to precision
let num1 = 348.2569;
console.log(num.toPrecision(3));
//is NaN
console.log(isNaN("hello"));  
console.log(isNaN(123));      
//rounds to the nearest integer value
console.log(Math.round(4.7));  
console.log(Math.round(4.4));  
//rounds down to the nearest integer value
console.log(Math.floor(4.7));  
//rounds up to the nearest integer value
console.log(Math.ceil(4.1));  
//maximum value
console.log(Math.max(1, 5, 3));  
//miniumum value
console.log(Math.max(1, 5, 3));  
//returns power of the value
console.log(Math.pow(2, 3));  
//returns square root of the value
console.log(Math.sqrt(16));  
//parseint
let s="123";
console.log(typeof(s));
console.log(Number.parseInt(s)); //converts a string into number
console.log(typeof(Number.parseInt(s)));
//parsefloat
let f="12.55";
console.log(Number.parseFloat(f));
//tostring
let n=1234;
console.log(typeof(n));
console.log(n.toString()); //converts a number into string
console.log(typeof(Number.toString(n)));