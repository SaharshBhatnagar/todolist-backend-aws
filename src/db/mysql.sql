-- File to store database creation commands

-- Create the database only if it doesn't already exist
CREATE DATABASE IF NOT EXISTS todolist_db;

-- Select the database to work inside it
USE todolist_db;

-- Create the tasks table only if it doesn't already exist
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a starting todo
INSERT INTO tasks (title, description) 
VALUES ('Welcome to your cloud Todolist!', 'This is your first starting task to confirm the database is working properly.');



















