// iot-device-simulator.js
const express = require('express');
const app = express();
const PORT = 3002;

let timer = null;

app.use(express.json());

app.post('/device/cancel', (req, res) => {
    if (timer) {
        clearTimeout(timer);
        timer = null;
        console.log("Timer cancelled by command.");
        return res.send("Timer cancelled.");
    } else {
        return res.send("No active timer to cancel.");
    }
});

// Endpoint 1 timer 10s (for test)
app.get('/device/start', (req, res) => {
    if (!timer) {
        timer = setTimeout(() => {
            console.log("Timer ended.");
            timer = null;
        }, 10000);
        res.send("Timer started for 10 seconds.");
    } else {
        res.send("A timer is already running.");
    }
});

app.listen(PORT, () => {
    console.log(`IoT device simulator running on http://localhost:${PORT}`);
});
