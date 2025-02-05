class employee{
    constructor(){
        this.id=1;
        this.name="abc";
    }
}
employee.prototype.salary=50000;
//function prototype
employee.prototype.display=function(){
    console.log(this.id,this.name,this.salary);
}
let emp = new employee();
emp.display();