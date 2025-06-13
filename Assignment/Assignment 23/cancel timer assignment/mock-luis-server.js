// mock-luis-server.js
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/api/luis', (req, res) => {
    const { text } = req.body;

    let topIntent = "None";
    if (text.toLowerCase().includes("cancel")) {
        topIntent = "CancelTimer";
    }

    res.json({ prediction: { topIntent } });
});

app.listen(PORT, () => {
    console.log(`Mock LUIS server running on http://localhost:${PORT}`);
});
