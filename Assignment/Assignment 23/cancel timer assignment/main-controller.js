// main-controller.js
const axios = require('axios');

const userInput = "Cancel the timer";

async function run() {
    // 1. sent to LUIS simulation
    const luisRes = await axios.post("http://localhost:3001/api/luis", {
        text: userInput
    });

    const intent = luisRes.data.prediction.topIntent;
    console.log("🧠 Detected intent:", intent);

    if (intent === "CancelTimer") {
        // 2. send cancel message to "device"
        const deviceRes = await axios.post("http://localhost:3002/device/cancel");
        console.log("📟 Device response:", deviceRes.data);
    } else {
        console.log("🤖 No actionable intent found.");
    }
}

run();
