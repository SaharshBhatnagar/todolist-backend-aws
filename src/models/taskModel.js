import pool from '../config/db.js';

export async function getAllTodos() {
    const [result] = await pool.query('SELECT * FROM tasks');

    return result;
};

export async function getTodoById(Id) {

    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [Id]);

    return rows[0];
};

export async function createTodo(Title, Description) {

    const [recipt] = await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?);', [Title, Description]);

    return recipt.insertId;
};

export async function updatedTitle(Title, Description, Completed, Id) {

    const [recipt] = await pool.query('UPDATE tasks SET title = ?, description = ?, is_completed = ? WHERE id = ?', [Title, Description, Completed, Id]);

    return recipt.affectedRows > 0;
};

export async function deleteTodo(Id) {

    const [recipt] = await pool.query('DELETE FROM tasks WHERE id = ?', [Id]);

    return recipt.affectedRows > 0;
};

export async function deleteAllTodos() {

    const [recipt] = await pool.query('DELETE FROM tasks');

    return recipt.affectedRows;
};