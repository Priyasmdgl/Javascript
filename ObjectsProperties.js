//creating an object with properties
let person={
    firstname:"Priya",
    lastname:"Venkateshwari",
    job:"QA"
}
//accessing object properties
console.log(person.firstname);
//add a new property
person.id=1;
console.log(person);
console.log(person.id);
//update existing property
person.id=5;
console.log(person);
//remove the property
delete person.id;
console.log(person);
