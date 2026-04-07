import express from 'express';
import { 
    getAllTasks, 
    getTask, 
    createNewTask, 
    updateTask, 
    removeTask, 
    removeAllTasks 
} from '../controllers/taskController.js';

const router = express.Router();

// GET routes
router.get('/', getAllTasks);
router.get('/:id', getTask);

// POST routes
router.post('/', createNewTask);

// PUT routes
router.put('/:id', updateTask);

// Delete routes
router.delete('/', removeAllTasks);
router.delete('/:id', removeTask);

export default router;