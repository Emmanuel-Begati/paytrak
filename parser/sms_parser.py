def extract_amount(sms_text):
    # Function to extract the amount from the SMS text
    import re
    amount_pattern = r'\b\d+(\.\d{1,2})?\b'
    match = re.search(amount_pattern, sms_text)
    return float(match.group()) if match else None

def extract_sender(sms_text):
    # Function to extract the sender from the SMS text
    # Assuming sender information is in a specific format
    sender_pattern = r'From:\s*(\S+)'
    match = re.search(sender_pattern, sms_text)
    return match.group(1) if match else None

def extract_date(sms_text):
    # Function to extract the date from the SMS text
    date_pattern = r'\b\d{1,2}/\d{1,2}/\d{2,4}\b'
    match = re.search(date_pattern, sms_text)
    return match.group() if match else None

def parse_sms(sms_text):
    # Main function to parse the SMS text and return a dictionary of extracted data
    return {
        'amount': extract_amount(sms_text),
        'sender': extract_sender(sms_text),
        'date': extract_date(sms_text)
    }