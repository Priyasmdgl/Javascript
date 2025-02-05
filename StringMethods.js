//string declaration
let a="Welcome"; //method1
let c=new String("Hello"); //method2
console.log(c);
//charat
console.log(a.charAt(2)); //returns the value at index 2
//concat
console.log(a.concat(" All")); //concat with the string
//replace
a="Welcome All";
console.log(a.replace("All","Everyone")); //replaces the string with the other
//substring
console.log(a.substring(0,5)); //prints from the given starting index to the ending index
//case conversion
console.log(a.toLowerCase()); //lowercase
console.log(a.toUpperCase()); //uppercase
//split
console.log(a.split(" ")); //splits based on the delimiter mentioned
//trim
let b=" Hello ";
console.log(b.trim()); //deletes the empty spaces

