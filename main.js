let input = document.querySelector(".input");
let items = document.querySelectorAll("#button");
let result = document.getElementById('result');
let clear = document.getElementById("clear");
let opearator = document.querySelectorAll("#operator")
let num1 = "";
let num2 = "";
let stop = false;

//xử lý nhấp chuột
function inputNumber(){
    if(stop){
        input.textContent += items;
         num2 += items
     } else{
         input.textContent += items;
         num1 += items
     }
}

items.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        items = e.target.textContent;
        inputNumber () 
    });
}); 

//xử lý nhấp chuột
opearator.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        stop = true
        opearator = e.target.textContent;
        let currentString = input.textContent;
        if(currentString === "+" || currentString === "-" || currentString === "*" || currentString === "÷"){
            input.textContent += opearator;

        } else {
            input.textContent += opearator;
        }
        
    })
})
clear.addEventListener("click", () =>{
    input.textContent = "";
})

result.addEventListener("click", () => {  
    
})

