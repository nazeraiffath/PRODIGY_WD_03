let display =
document.getElementById("display");

// Add numbers/operators
function append(value){
    display.value += value;
}

// Clear all
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteChar(){
    display.value =
    display.value.slice(0,-1);
}

// Calculate result
function calculate(){

    try{

        if(display.value === "") return;

        display.value =
        eval(display.value);

    }

    catch{

        display.value = "Error";

        setTimeout(()=>{
            display.value = "";
        },1500);

    }
}

// Keyboard support
document.addEventListener(
"keydown",
function(event){

let key = event.key;

if(
(key >= "0" && key <= "9")
||
["+","-","*","/","%", "."].includes(key)
){
    append(key);
}

else if(key === "Enter"){
    calculate();
}

else if(key === "Backspace"){
    deleteChar();
}

else if(key === "Escape"){
    clearDisplay();
}

});