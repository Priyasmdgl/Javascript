//class
class student{
    //method with no arguments
    details(){
        this.id=1;
        this.name="abc";
        this.grade="A";
    }
    display(){
        console.log(this.id,this.name,this.grade);
    }
}
//object creation for the class
let stu=new student();
stu.details();
stu.display();

class employee{
    //method with arguments
    details(id,name,job){
      this.Id=id;
      this.Name=name;
      this.Job=job;
      console.log(this.Id,this.Name,this.Job);
    }
}
//we can create n number of objects from the class
let emp1=new employee(); //object1
emp1.details(5,"XYZ","QA");
let emp2=new employee(); //object2
emp2.details(2,"abc","Dev");