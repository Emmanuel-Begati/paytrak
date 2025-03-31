import requests
import os

# Base URL for the backend API
BASE_URL = os.getenv("BACKEND_API_URL", "http://localhost:3000")

def send_transaction_data(transaction):
    """
    Sends parsed transaction data to the backend API.

    Args:
        transaction (dict): A dictionary containing transaction details such as amount, sender, and date.

    Returns:
        response (requests.Response): The response object from the API call.
    """
    url = f"{BASE_URL}/api/transactions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('JWT_TOKEN')}"
    }
    
    response = requests.post(url, json=transaction, headers=headers)
    
    if response.status_code != 201:
        print(f"Failed to send transaction data: {response.status_code} - {response.text}")
    
    return response

def main():
    # Example transaction data
    transaction = {
        "amount": 1000,
        "sender": "Student A",
        "date": "2023-10-01"
    }
    
    # Send the transaction data to the backend
    response = send_transaction_data(transaction)
    print("Response from backend:", response.json())

if __name__ == "__main__":
    main()