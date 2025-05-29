from flask import Flask, request

app = Flask(__name__)

@app.route('/trigger', methods=['POST'])
def trigger():
    data = request.json
    print(f"Received IoT data: {data}")
    # simulate function
    result = process_iot_data(data)
    return {"message": "Triggered!", "result": result}, 200

def process_iot_data(data):
    # Eg: check the temperature value
    temp = data.get('temperature')
    if temp > 30:
        return "Warning: High temperature!"
    else:
        return "Temperature normal."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
