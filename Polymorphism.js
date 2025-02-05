class shape{
    draw(){
        console.log("generic shape");
    }
}
class square extends shape{
    draw(){
        console.log("square");
    }
}
class circle extends shape{
    draw(){
        console.log("circle");
    }
}
let s=new shape();
s.draw();
let sq=new square();
sq.draw();
let c=new circle();
c.draw();