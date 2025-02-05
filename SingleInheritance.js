class A{
     a=5;
     display(){
        console.log(this.a);
     }
}
class B extends A{
    b=10;
    show(){
        console.log(this.b);
    }
}
let obj= new B();
obj.display();
obj.show();