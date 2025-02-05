let fruits=["Mango","Pineapple","Watermelon","Papaya"];
//tostring method
console.log(fruits.toString()); //converts an array into string with comma separated
//join method
console.log(fruits.join(";")); //converts an array into string with any special character separated
//pop
console.log(fruits.pop()); //removes the last element from the array and prints it
console.log(fruits);
//push
console.log(fruits.push("Guava")); //adds new element to the array at the last and returns the length of an array
console.log(fruits);
//shift
console.log(fruits.shift()); //removes first element and shift other elements to the lower index
console.log(fruits);
//unshift
console.log(fruits.unshift("Orange")); //adds new element to the array at first and moves other element to higher index and prints the length of the array
console.log(fruits);
//delete
delete fruits[0]; //deletes an element from the array but it retains the memory allocation
console.log(fruits);
//concat
let a=[1,2];
let b=["a","b","c"];
console.log(a.concat(b)); //merges a and b
console.log(a.concat(b,fruits)); //merges three arrays
//slice
console.log(fruits.slice(1)); //prints the element from the given index
//sort
console.log(fruits.sort()); //sorts the element based on asc or alphabetical order
let num=[5,3,8,2,1];
console.log(num.sort());
//reverse
console.log(num.reverse()); //reverse an array
