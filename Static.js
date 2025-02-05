class staticdemo{
    static a=5; //static variable
    b=10; //non static variable
    //static method
    static m1(){
        console.log("static method");
    }
    //non static method
    m2(){
        console.log("Non static method");
    }
}
//static methods and variables can be accesed directly by class name
console.log(staticdemo.a); //variable
staticdemo.m1(); //method
//non static variables and methods can be accesed by object
let demo=new staticdemo();
console.log(demo.b);
demo.m2();
