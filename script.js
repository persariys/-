document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.innerText = message.text;
        messagesContainer.appendChild(messageElement);
    }

    async function fetchMessages() {
        messagesContainer.innerHTML = '';
        const response = await fetch('/messages');
        const messages = await response.json();
        messages.forEach(message => addMessage(message));
    }

    messageForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const message = messageInput.value;
        if (message.trim() !== '') {
            await fetch('/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: message })
            });
            messageInput.value = '';
            await fetchMessages();
        }
    });

    fetchMessages();
});
