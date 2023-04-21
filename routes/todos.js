"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var todos = [];
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: "added with id ".concat(newTodo.id) });
});
router.post("/del-todo/:id", function (req, res, next) {
    var id = req.body.id;
    var status = true;
    for (var i in todos) {
        if (todos[i].id === id) {
            delete todos[i];
            status = false;
            res.status(200).json({ message: "element deleted" });
        }
    }
    if (status) {
        res.status(400).json({ message: "not present" });
    }
});
exports.default = router;
