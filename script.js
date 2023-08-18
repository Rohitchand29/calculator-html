let input = document.getElementById("textfield");
let box = document.querySelectorAll(".box");

let string = "";
let arr = Array.from(box);
var string2 = "";
document.addEventListener('keydown', function(e) {
    if (e.code == 'Enter') {
        
            string2=input.value;
            string2 = string2.replaceAll("×","*");
            string2 = string2.replaceAll("ln","Math.log");
            string2 = string2.replaceAll("√","Math.root");
           
            string = Number(eval(`${string2}`))*100;
            string = Math.round(string)/100;

            input.value = string;

        
    }
});
arr.forEach(box => {
    box.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string2=input.value;
            
            string2 = string2.replaceAll("×","*");
            string2 = string2.replaceAll("ln","Math.log");
            string2 = string2.replaceAll("√","Math.root");
            string2 = string2.replaceAll("÷","/");
            string = Number(eval(string2))*100;
            string = Math.round(string)/100;

            input.value = string;

        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            
            input.value = string;
        }
        else if (e.target.innerHTML == "⌫") {
            string = string.substring(0, string.length - 1);

            input.value = string;
        }
        else if (e.target.innerHTML == "√") {
            string += e.target.innerHTML + "(";
            input.value = string;
        }
        else if (e.target.innerHTML == "ln") {
            string += e.target.innerHTML + "(";
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
