const words = ["javascript", "html", "css", "python", "java", "ruby", "php", "swift"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");

// Генерация кнопок букв
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i); // ASCII коды для букв 'a' - 'z'
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("letter");
    button.addEventListener("click", function() {
        checkLetter(letter);
    });
    lettersElement.appendChild(button);
}

// Инициализация отображения загаданного слова
let hiddenWord = selectedWord.split("").map(() => "_").join(" ");
wordElement.textContent = hiddenWord;

// Проверка, содержится ли буква в загаданном слове
function checkLetter(letter) {
    const indices = [];
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            indices.push(i);
        }
    }
    if (indices.length > 0) {
        indices.forEach(index => {
            hiddenWord = hiddenWord.substring(0, index * 2) + letter + hiddenWord.substring(index * 2 + 1);
        });
        wordElement.textContent = hiddenWord;
    }
}
