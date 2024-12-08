function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        document.getElementById("userInput").value = "";
        getBotResponse(userInput);
    }
}

function addMessage(text, className) {
    var messageContainer = document.getElementById("messages");
    var chatContainer = document.getElementById("chatbox");
    var messageElement = document.createElement("div");
    messageElement.className = "message " + className;
    messageElement.innerText = text;
    messageContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(input) {
    var botResponses = {
        "hi": "Hello, I'm AspireGPT! Before we get started, can I have your name?",
        "luna": "Hi there! What course do you want to take?",
        "ap computer science a": "Okay. Can I have your zip code so I can see if this course is available in your area?",
        "19130": "Okay. I have just confirmed that this course is not available in your zip code. We will be getting in touch with your local library soon. In the meantime, can I have your email so that I can notify you when this course becomes available to you?",
        "lunastudio403@gmail.com": "Got it. Thank you for helping us fulfil our mission! We will be in touch with you soon."
    };
    var response = botResponses[input.toLowerCase()] || "Sorry, I didn't understand that.";
    addMessage(response, "bot-message");
}

document.getElementById("userInput").addEventListener("keydown", function(event) { 
    if (event.key === "Enter") 
        { 
            sendMessage(); 
        } 
});
