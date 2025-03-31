-- SQL commands to seed the database with initial transaction data

INSERT INTO transactions (amount, sender, date, createdAt, updatedAt) VALUES
(1000, 'Student A', '2023-01-15', NOW(), NOW()),
(1500, 'Student B', '2023-01-20', NOW(), NOW()),
(2000, 'Student C', '2023-02-10', NOW(), NOW()),
(2500, 'Student D', '2023-02-15', NOW(), NOW()),
(3000, 'Student E', '2023-03-01', NOW(), NOW());

-- Add more entries as needed for testing purposes