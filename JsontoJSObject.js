let data='{"employees":[' +
'{"firstname":"Priya","lastname":"Venkateshwari"},'+
'{"firstname":"Veera","lastname":"Raghavan"}]}';
let JSobj=JSON.parse(data); //converts json to javascript object
console.log(JSobj.employees);
console.log(JSobj.employees[1].firstname);

let data1='{"name": "John Doe","age": 30,"email": "john.doe@example.com","isEmployed": true,"address": {"street": "123 Main St","city": "New York","postalCode": "10001"},"phoneNumbers": [{"type": "home","number": "123-456-7890"},{"type": "work","number": "987-654-3210"}]}';
let obj=JSON.parse(data1);
console.log(obj.name);
console.log(obj.address.street);
console.log(obj.phoneNumbers[0].number);
//stringify
let js=JSON.stringify(data);
console.log(js);
