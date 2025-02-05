class car{
    constructor(){
        this.color="Red";
    }
    print(){
        console.log(this.color);
    }
}
class car1 extends car{
    constructor(){
        super();
        this.brand="BMW";
    }
    display(){
        console.log(this.brand);
        this.print();
    }
}
let c=new car1;
c.display();
c.print();