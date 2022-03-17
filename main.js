let input = document.querySelector(".input");
let items = document.querySelectorAll("#button");
let result = document.getElementById('result');
let clear = document.getElementById("clear");
let opearator = document.querySelectorAll("#operator");
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
    // đây là chuỗi mà chúng tôi sẽ xử lý, ví dụ. -10 + 26 + 33-56 * 34/23
  let inputString = input.innerHTML;

  // tạo thành một mảng số. ví dụ: đối với chuỗi trên, nó sẽ là: number = ["10", "26", "33", "56", "34", "23"]

  let numbers = inputString.split(/\+|\-|\*|\//g);

  // tạo thành một mảng các toán tử. đối với chuỗi trên nó sẽ là: operator = ["+", "+", "-", "*", "/"]

  // đầu tiên chúng tôi thay thế tất cả các số và dấu chấm bằng chuỗi trống và sau đó tách
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

    // bây giờ chúng ta đang lặp qua mảng và thực hiện một thao tác tại một thời điểm.
    // đầu tiên chia, sau đó nhân, sau đó trừ và sau đó cộng
    // khi chúng ta di chuyển, chúng ta đang thay đổi các số ban đầu và mảng toán tử
    // phần tử cuối cùng còn lại trong mảng sẽ là đầu ra

  let divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }

  let multiply = operators.indexOf("*");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("*");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];
})

