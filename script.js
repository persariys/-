const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messages');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        displayMessage(messageText); // Отображаем сообщение на странице
        messageInput.value = ''; // Очищаем поле ввода
    }
});

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messagesContainer.appendChild(messageElement);
}
