class Bank{
    interest(){
        return 0;
    }
}
class axis extends Bank{
    interest(){
        return 5000;
    }
}
class sbi extends Bank{
    interest(){
        return 25000;
    }
}
let s=new sbi();
console.log(s.interest());
let a=new axis();
console.log(a.interest());