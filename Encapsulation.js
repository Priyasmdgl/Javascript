class student{
    constructor(){
        let Name,Marks;
    }
    getname(){
        return this.Name;
    }
    getmarks(){
        return this.Marks;
    }
    setname(name){
        this.Name=name;
    }
    setmarks(marks){
        this.Marks=marks;
    }
}
let stu=new student();
stu.setname("abc");
stu.setmarks(90);
console.log(stu.getname(),stu.getmarks());