// MAIN VARIABLE
var value_1, value_2, result; 

// MAIM FUNCTION
function getID(ID){
    let element = document.getElementById(ID);
    return element;
}
function writeValue1(){
    value_1 = +getID("display").value;
    getID("display").value = "";
}
function writeValue2(){
    value_2 = +getID("display").value;
    getID("display").value = "";
}

getID("plus").addEventListener("click", writeValue1);




document.getElementById("eqals").onclick = () => {
    writeValue2("display");
    result = value_1 + value_2;
    console.log(result);
}
console.log(getID("plus"));