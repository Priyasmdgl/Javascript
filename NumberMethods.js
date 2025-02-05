//number declaration
let a=5; //method1
let b=new Number(10); //method2
let x=1; //integer value
let y=2.3 //decimal value
let z=5e2; //exponential value
console.log(x,y,z);
//is integer
console.log(Number.isInteger(a)); //checks the number is integer or not
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