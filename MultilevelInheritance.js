class parent{
    a=1;
    display(){
        console.log(this.a);
    }
}
class subchild1 extends parent{
    b=2;
    show(){
        console.log(this.b);
    }
}
class subchild2 extends subchild1{
    c=3;
    print(){
        console.log(this.c);
    }
}
let child1=new subchild1();
child1.show();
child1.display();
let child2=new subchild2();
child2.print();
child2.show();
child2.display();