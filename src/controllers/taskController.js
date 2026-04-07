import { getTodoById, getAllTodos, createTodo, updatedTitle, deleteTodo, deleteAllTodos } from "../models/taskModel.js";


async function getAllTasks(req, res) {
    try {
        const todos = await getAllTodos();

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve tasks", error: error.message})
    }
};

async function getTask(req, res) {
    try {
        const taskId = req.params.id;

        const todo = await getTodoById(taskId);

        if (!todo) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve task", error: error.message})
    }
};

async function createNewTask(req, res) {
    try {
        const {title, description }= req.body;

        const newTodo = await createTodo(title, description);

        res.status(201).json({ message: "Task created successfully", id: newTodo});
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve tasks", error: error.message})
    }
};

async function updateTask(req, res) {
    try {
        const taskId = req.params.id;

        const { title, description, is_completed } = req.body;

        const success = await updatedTitle(title, description, is_completed, taskId);

        if (!success) {
            return res.status(404).json({ message: "Task not found or no changes made" });
        }

        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update task", error: error.message})
    }
};

async function removeTask(req, res) {
    try {
        const taskId = req.params.id;
        
        const success = await deleteTodo(taskId);

        if (!success) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task", error: error.message });
    }
};

async function removeAllTasks(req, res) {
    try {
        
        const rowsDeleted = await deleteAllTodos();
        
        res.status(200).json({ message: `Successfully deleted ${rowsDeleted} tasks` });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete tasks", error: error.message });
    }
};

export { 
    getAllTasks, 
    getTask, 
    createNewTask, 
    updateTask, 
    removeTask, 
    removeAllTasks 
};