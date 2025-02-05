class Parent{
    a=1;
    display(){
        console.log(this.a);
    }
}
class child1 extends Parent{
    b=2;
    show(){
        console.log(this.b);
    }
}
class child2 extends Parent{
    c=3;
    print(){
        console.log(this.c);
    }
}
let ch1=new child1();
ch1.show();
ch1.display();
let ch2=new child2();
ch2.print();
ch2.display();
