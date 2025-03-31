import requests

data = {
    "amount": 150,
    "sender": "Test User",
    "date": "2023-10-01"
}

response = requests.post(
    "http://localhost:5000/api/transactions", 
    json=data, 
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0MzQ2MjUwMCwiZXhwIjoxNzQzNTQ4OTAwfQ.2IowzTqD8RGRYw_EheRE7T91AJuJnKvyt7zcpwbq9-8"
    }
)

print(f"Status: {response.status_code}")
print(f"Response: {response.text}")