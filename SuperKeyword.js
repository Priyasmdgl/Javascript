class animal{
    constructor(color){
        this.Color=color;
    }
    print(){
        console.log(this.Color);
    }
}
class dog extends animal{
    constructor(color,breed){
        super(color); //super keyword is used here to call the parent class constructor
        this.Breed=breed;
    }
    show(){
        console.log(this.Breed);
    }
    display(){
        this.print();
        this.show();
    }
}
let d=new dog("White","Lab");
d.print();
d.show();
d.display();


