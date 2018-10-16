var value_1, value_2, result;
function operation(x){
    value_1 = x;
}

var a = document.getElementById("val1");
console.log(a);

document.getElementById("plus").onclick = function(){
    value_1 = +document.getElementById("display").value;
    console.log(value_1);
    document.getElementById("display").value = "";
}

document.getElementById("eqals").onclick = () => {
    value_2 = +document.getElementById("display").value;
    result = value_1 + value_2;
    console.log(result);
}