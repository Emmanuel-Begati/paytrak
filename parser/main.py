import os
import re
import json
import requests
from dotenv import load_dotenv
load_dotenv()

def read_sms():
    # For iPhone, use a simulated message input system
    device_type = os.getenv("DEVICE_TYPE", "android").lower()
    
    if device_type == "iphone":
        # Return pre-configured test messages or prompt for user input
        return [
            "Payment received: $150 from John Doe on 2023-10-01",
            "Payment received: $200 from Jane Smith on 2023-10-02",
            "Payment received: $100 from Alice Johnson on 2023-10-03"
        ]
    else:
        # Original Android method
        import subprocess
        result = subprocess.run(['adb', 'shell', 'content', 'query', '--uri', 'content://sms/inbox'], 
                                capture_output=True, text=True)
        lines = result.stdout.strip().split('\n')
        return [line for line in lines if "payment" in line.lower()]

def parse_sms(sms):
    # This function extracts amount, sender, and date from the SMS message.
    pattern = r"Payment received: \$(\d+) from (.+) on (\d{4}-\d{2}-\d{2})"
    match = re.search(pattern, sms)
    if match:
        amount = int(match.group(1))  # Convert to integer
        sender = match.group(2)
        date = match.group(3)
        return {
            "amount": amount,  # Now this is an integer, not a string
            "sender": sender,
            "date": date
        }
    return None

def send_to_backend(data):
    backend_url = os.getenv("BACKEND_API_URL", "http://localhost:5000/api") + "/transactions"
    jwt_token = os.getenv("JWT_TOKEN", "")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {jwt_token}"
    }
    try:
        response = requests.post(backend_url, json=data, headers=headers)
        # Print response details for debugging
        print(f"Response status: {response.status_code}")
        print(f"Response headers: {response.headers}")
        print(f"Response content: {response.text[:200]}...")  # Print first 200 chars
        
        # Try to parse JSON, but handle failure gracefully
        try:
            return response.status_code, response.json()
        except json.JSONDecodeError:
            return response.status_code, {"error": "Invalid JSON in response", "text": response.text[:100]}
    except Exception as e:
        print(f"Error sending data to backend: {str(e)}")
        return 500, {"error": str(e)}

def main():
        # Debug mode - print environment variables
    print(f"Backend URL: {os.getenv('BACKEND_API_URL', 'Not set')}")
    jwt_token = os.getenv('JWT_TOKEN', 'Not set')
    print(f"JWT Token: {jwt_token[:10]}..." if len(jwt_token) > 10 else "JWT Token: Not set properly")
    
    sms_messages = read_sms()
    for sms in sms_messages:
        parsed_data = parse_sms(sms)
        if parsed_data:
            status_code, response = send_to_backend(parsed_data)
            print(f"Sent data: {parsed_data} - Response: {status_code} {response}")

if __name__ == "__main__":
    main()