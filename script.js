document.addEventListener('DOMContentLoaded', function () {
    const socket = io(); // Initialize Socket.IO

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', function () {
        const message = messageInput.value.trim();
        if (message !== '') {
            socket.emit('chat message', message); // Emit message to the server
            messageInput.value = ''; // Clear input field
        }
    });

    // Receive message from server and append to chat
    socket.on('chat message', function (msg) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = msg;
        chatMessages.appendChild(messageElement);
        // Scroll to bottom of chat window
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
});
