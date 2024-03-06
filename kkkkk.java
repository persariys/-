<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестовый сайт с калькулятором</title>
    <script>
        function calculate() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var operator = document.getElementById("operator").value;
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

            document.getElementById("result").innerHTML = "Результат: " + result;
        }
    </script>
</head>
<body>
    <header>
        <h1>Добро пожаловать на тестовый сайт с калькулятором!</h1>
    </header>
    
    <main>
        <section>
            <h2>Калькулятор</h2>
            <label for="num1">Первое число:</label>
            <input type="number" id="num1"><br>
            <label for="operator">Оператор (+, -, *, /):</label>
            <input type="text" id="operator"><br>
            <label for="num2">Второе число:</label>
            <input type="number" id="num2"><br>
            <button onclick="calculate()">Посчитать</button>
            <p id="result"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Тестовый сайт. Все права защищены.</p>
    </footer>
</body>
</html>
