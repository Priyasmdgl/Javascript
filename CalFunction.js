//add function
function add(){
    let a=document.getElementById("val1").value;
    let b=document.getElementById("val2").value;
    let res=parseInt(a)+parseInt(b);
    document.getElementById("result").innerHTML=res;
}
document.getElementById("addbtn").onclick=add;
//sub function
function sub(){
    let a=document.getElementById("val1").value;
    let b=document.getElementById("val2").value;
    let res=parseInt(a)-parseInt(b);
    document.getElementById("result").innerHTML=res;
}
document.getElementById("subbtn").onclick=sub;
//mul function
function mul(){
    let a=document.getElementById("val1").value;
    let b=document.getElementById("val2").value;
    let res=parseInt(a)*parseInt(b);
    document.getElementById("result").innerHTML=res;
}
document.getElementById("mulbtn").onclick=mul;