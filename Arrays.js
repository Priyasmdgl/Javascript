//Array declaration
let name1=["Jayanthi","Priya","Raghav"]; //method1
let name2=new Array("Jayanthi","Priya","Raghav"); //method2
console.log(name1);
console.log(Array.isArray(name1));
//accessing an element at specific index
console.log(name1[1]); 
//updating an element at specific index
name1[1]="Venkateshwari";
console.log(name1);
//array can store variables of diff datatype
let array=[5, 2.5, "abc", true];
console.log(array);
//array within object
let person1={
    name:"abc",
    id:1,
    skills:["Java","Python"]
}
console.log(person1.skills);
console.log(person1.skills[1]);
let person2={
    name:"xyz",
    id:2,
    skills:["C++","C"]
}
//object in an array
let a=[person1,person2];
console.log(a);
console.log(a[0]);
//array is an object
console.log(typeof name1);
//length of an array
let name=["Jayanthi","Priya","Raghav"];
console.log(name.length);
//extracting the elements using for loop
for(i=0;i<=name.length-1;i++){
    console.log(name[i]);
}
//for each(of) loop
for(let a of name){
    console.log(a);
}
//for in loop
//iterates over indexes
for(let b in name){
    console.log(b);
}
//iterates over keys
for(let c in person1){
    console.log(c);
}