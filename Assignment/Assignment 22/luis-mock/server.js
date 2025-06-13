const express = require('express');
const app = express();

app.use(express.json());  //express built-in

app.post('/api/luis', (req, res) => {
    const prediction = req.body.prediction;
    const topIntent = prediction && prediction.topIntent;

    if (topIntent === "CancelTimer") {
        console.log("🛑 CancelTimer intent recognized");
        res.send("✅ Timer has been cancelled.");
    } else {
        console.log("🤖 Unknown intent:", topIntent);
        res.send("❓ Sorry, I didn't understand your request.");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
