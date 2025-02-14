const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API to talk with DeepSeek via Ollama
app.post("/chat", async (req, res) => {
    try {
        const { prompt } = req.body;  // Get the prompt from the frontend

        // Send request to Ollama (DeepSeek)
        const response = await axios.post("http://localhost:11434/api/generate", {
            model: "deepseek-r1:7b",  // The model name you are using
            prompt: prompt,  // The prompt input
            stream: false
        });

        // Send back the response to the frontend
        res.json({ reply: response.data.response });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to get response" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
