import requests

url = 'http://localhost:5000/trigger'

iot_data = {
    'temperature': 35,
    'humidity': 60
}

response = requests.post(url, json=iot_data)
print("Response from edge app:", response.json())
