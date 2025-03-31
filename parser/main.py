import os
import re
import json
import requests

def read_sms():
    # This function simulates reading SMS messages from a device.
    # In a real application, you would integrate with an SMS API or use ADB commands.
    sms_messages = [
        "Payment received: $150 from John Doe on 2023-10-01",
        "Payment received: $200 from Jane Smith on 2023-10-02",
        "Payment received: $100 from Alice Johnson on 2023-10-03"
    ]
    return sms_messages

def parse_sms(sms):
    # This function extracts amount, sender, and date from the SMS message.
    pattern = r"Payment received: \$(\d+) from (.+) on (\d{4}-\d{2}-\d{2})"
    match = re.search(pattern, sms)
    if match:
        amount = match.group(1)
        sender = match.group(2)
        date = match.group(3)
        return {
            "amount": amount,
            "sender": sender,
            "date": date
        }
    return None

def send_to_backend(data):
    # This function sends the parsed data to the Node.js backend.
    backend_url = os.getenv("BACKEND_URL", "http://localhost:3000/api/transactions")
    response = requests.post(backend_url, json=data)
    return response.status_code, response.json()

def main():
    sms_messages = read_sms()
    for sms in sms_messages:
        parsed_data = parse_sms(sms)
        if parsed_data:
            status_code, response = send_to_backend(parsed_data)
            print(f"Sent data: {parsed_data} - Response: {status_code} {response}")

if __name__ == "__main__":
    main()