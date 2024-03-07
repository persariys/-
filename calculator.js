document.getElementById('calculate').addEventListener('click', calculate);

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.querySelector('input[name="operator"]:checked').value;
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Ошибка: деление на ноль!";
        }
    }

    document.getElementById("result").innerText = "Результат: " + result;
}
