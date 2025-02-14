// Replace with your actual OpenAI API key
const API_KEY = "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";
async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (!userInput) return;

    // Show user message
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Send request to backend
    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: userInput })
        });

        const data = await response.json();

        // Show bot response
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;

    } catch (error) {
        console.error("Error:", error);
        chatbox.innerHTML += `<p><strong>Bot:</strong> Error getting response.</p>`;
    }

    document.getElementById("userInput").value = "";
}

// Function to fetch GPT API response
const fetchGPTResponse = async (userInput) => {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a space expert chatbot. Answer questions about astronomy, astrophysics, and space exploration." },
                    { role: "user", content: userInput },
                ],
                max_tokens: 150,
                temperature: 0.7,
            }),
        });

        if (!response.ok) throw new Error("Error fetching GPT response");

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return "Sorry, I couldn't fetch a response. Please try again later.";
    }
};

// Handle user input and bot response
const handleUserInput = async () => {
    const userInput = document.getElementById("chat-input").value.trim();
    const chatOutput = document.getElementById("chat-output");

    if (!userInput) return;

    // Display user input
    chatOutput.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("chat-input").value = ""; // Clear input field

    // Fetch and display bot response
    chatOutput.innerHTML += `<p><strong>Bot:</strong> Typing...</p>`;
    const botResponse = await fetchGPTResponse(userInput);
    chatOutput.innerHTML = chatOutput.innerHTML.replace(
        `<p><strong>Bot:</strong> Typing...</p>`,
        `<p><strong>Bot:</strong> ${botResponse}</p>`
    );

    // Scroll to the bottom
    chatOutput.scrollTop = chatOutput.scrollHeight;
};

// Add event listeners for the button and Enter key
document.getElementById("send-btn").addEventListener("click", handleUserInput);
document.getElementById("chat-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
