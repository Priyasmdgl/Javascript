class person1{
    //constructor with no arguments
    constructor(){
        this.name="Priya";
        this.job="QA";
        console.log(this.name,this.job);
    }
}
//constructor will automatically be invoked while creating object
let per1=new person1();

class person2{
    //constructor with arguments
    constructor(Name,Job){
        this.name=Name;
        this.job=Job;
        console.log(this.name,this.job);
    }
}
let per2=new person2("Jayanthi","Accountant");


