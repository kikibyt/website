document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");

    userInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const userMessage = userInput.value;
            userInput.value = "";
            appendMessage("user", userMessage);
            processUserMessage(userMessage);
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.className = sender + "-message";
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
    }

    function processUserMessage(message) {
        // Remove punctuation marks from the message
        const cleanMessage = message.replace(/[^\w\s]/g, "");
      
        // Bot responses based on user input
        let botMessage = "";
      
        if (cleanMessage.toLowerCase().includes("hello") || cleanMessage.toLowerCase().includes("hi")) {
          botMessage = "Hi there! How can I assist you today?";
        } else if (cleanMessage.toLowerCase().includes("what is your name")) {
          botMessage = "My name is M.k";
        } else if (cleanMessage.toLowerCase().includes("how are you")) {
          botMessage = "I'm doing well, thank you.";
        } else if (cleanMessage.toLowerCase().includes("what can you do")) {
          botMessage = "I can provide information, answer questions, and have basic conversations.";
        } else if (cleanMessage.toLowerCase().includes("where are you from")) {
          botMessage = "I'm from the seven seas and beyond. Just kidding, I'm an AI. I have no physical location.";
        } else if (cleanMessage.toLowerCase().includes("who is your creator")) {
          botMessage = "I was created by Mercy Okebiorun.";
        } else if (cleanMessage.toLowerCase().includes("tell me a joke")) {
          botMessage = "Sure, here's one: Why don't scientists trust atoms? Because they make up everything!";
        } else if (cleanMessage.toLowerCase().includes("help")) {
          botMessage = "Sure, I'm here to help! What do you need assistance with?";
        } else if (cleanMessage.toLowerCase().includes("bye")) {
          botMessage = "Goodbye! Have a great day!";
        } else {
          botMessage = "I'm sorry, I didn't understand that. Can you please rephrase?";
        }
      
        appendMessage("bot", botMessage);
      }
      
    

    function addSkill() {
        var skillInput = prompt("Enter a new skill:");

        if (skillInput) {
            var skillsList = document.getElementById("skillsList");
            var newSkill = document.createElement("li");
            newSkill.textContent = skillInput;
            skillsList.appendChild(newSkill);
        }
    }
});

  
 
  