const express = requier('express');
const router = express.Router();
const database = requier('../database.json');

router.get("/", (req, res) => {
    //Get all todos
    const todos = database.todos;
    res.json(todos);
});

router.get("/:id", (req, res) => {
    //Get toto by id
    if (req.params && req.params.id) {
        const todo = database.todos.find(todo => todo.id === +req.params.id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(400).json({message: 'Todo not found'});
        }
    }
});

router.post("/", (req, res) => {
    //Create new todo
    if (!req.body) {
        res.status(400).json({message: 'Empty body'});
    } else {
        const lastTodo = [...database.todos].sort((a, b) => a.id - b.id).pop();
        const todo = {
            userId: req.body.userId,
            id: lastTodo.id + 1,
            title: req.body.title,
            completed: false
        };
        database.todos.push(todo);
        res.json(todo);
    }
});

router.patch("/:id", (req, res) => {
    //Update todo field by id
    if (req.params && req.params.id) {
        let updateTodo;
        database.todos.map(todo => {
            if (todo.id === +req.params.id) {
                todo = Object.assign(todo.req.body);
                updateTodo = todo;
            }
            return todo;
        });
        if (updateTodo) {
            res.json(updateTodo);
        } else {
            res.status(400).json({message: 'Todo not found'});
        }
    }
});

router.delete('/:id', (req, res) => {
    //Delete todo by id
    if (req.params && req.params.id) {
        if (database.todos.some(todo => todo.id === +req.params.id)) {
            database.todos = database.todos.filter(todo => todo.id === +req.params.id);
            res.json({message: 'Todo delete successfully'})
        } else {
            res.status(400).json({message: 'Todo not found'})
        }
    }
});

module.exports = router;