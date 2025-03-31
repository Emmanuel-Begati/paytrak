# Credit Alert Tracker App

## Project Overview
The Credit Alert Tracker App is a cross-platform mobile application designed to scan SMS messages for credit alerts related to student payments. It tracks the total received payments and provides users with a user-friendly interface to manage their transactions.

## Tech Stack
- **Frontend:** React Native (TypeScript)
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL (using Prisma ORM)
- **Parsing Engine:** Python (for SMS message extraction)
- **Authentication:** JWT-based authentication
- **State Management:** React Context API or Redux Toolkit

## Features
1. **React Native App**
   - Fetch and display transactions from the backend.
   - Store received payments locally.
   - Allow manual entry of missing transactions.

2. **Node.js Backend**
   - REST API for storing and retrieving payments.
   - Uses Prisma ORM for PostgreSQL.
   - Implements JWT authentication.

3. **Python Parser**
   - Reads SMS messages (Android ADB).
   - Extracts amount, sender, and date.
   - Sends parsed data to the backend.

## File Structure
The project is organized as follows:

```
paytrak
├── frontend
│   ├── src
│   │   ├── screens
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── TransactionsScreen.tsx
│   │   │   ├── SettingsScreen.tsx
│   │   ├── components
│   │   │   ├── TransactionItem.tsx
│   │   ├── App.tsx
│   │   ├── api.ts
│   ├── package.json
│   ├── tsconfig.json
├── backend
│   ├── src
│   │   ├── routes
│   │   │   ├── transactions.ts
│   │   │   ├── auth.ts
│   │   ├── controllers
│   │   │   ├── transactionController.ts
│   │   ├── models
│   │   │   ├── transactionModel.ts
│   │   ├── app.ts
│   │   ├── server.ts
│   ├── package.json
│   ├── .env
├── parser
│   ├── main.py
│   ├── sms_parser.py
│   ├── api_client.py
│   ├── requirements.txt
├── database
│   ├── prisma
│   │   ├── schema.prisma
│   ├── seed.sql
├── README.md
```

## Setup Instructions
1. **Frontend Setup**
   - Navigate to the `frontend` directory.
   - Install dependencies using `npm install`.
   - Run the app using `npm start`.

2. **Backend Setup**
   - Navigate to the `backend` directory.
   - Install dependencies using `npm install`.
   - Create a `.env` file with the necessary environment variables.
   - Run the server using `npm run start`.

3. **Parser Setup**
   - Navigate to the `parser` directory.
   - Install Python dependencies using `pip install -r requirements.txt`.
   - Run the parser using `python main.py`.

## Usage
- The app allows users to view their transaction history, manage settings, and manually enter transactions if needed.
- The backend provides a secure API for managing transactions and user authentication.
- The Python parser extracts relevant data from SMS messages and sends it to the backend for processing.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.# paytrak
# paytrak
