function student(){
    this.name="Raghav";
    this.gender="male";
}
student.prototype.id=5; //using prototype we have added new variable to the function
let s=new student();
console.log(s.name,s.gender);
console.log(s.id);
let s1=new student();
console.log(s1.name,s1.gender,s1.id);